/**
 * Renders `dist/print.html` to `dist/cv.pdf` with headless Chromium.
 *
 *   vite preview on dist  →  page.pdf()  →  verify  →  drop print.html
 *
 * Run *after* `vite build` (npm run build does both, in that order). Serving
 * over http rather than file:// is not optional — file:// restricts the fetches
 * webfonts need, and a fallback face would silently reflow the whole page.
 *
 * The PDF is also copied to `public/cv.pdf` (gitignored) so `npm run dev`
 * serves the Download link. Nothing built is committed.
 */

import { access, copyFile, mkdir, readFile, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { build, preview } from 'vite';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distPrint = resolve(root, 'dist/print.html');
const distPdf = resolve(root, 'dist/cv.pdf');
const publicPdf = resolve(root, 'public/cv.pdf');

const A4 = { width: 595.276, height: 841.89 };

// This script removes `dist/print.html` when it succeeds, so a second bare
// `npm run pdf` would otherwise find its own input missing. Rebuild rather than
// fail: the script owns its precondition.
const exists = await access(distPrint).then(
  () => true,
  () => false,
);
if (!exists) await build({ root, logLevel: 'error' });

const server = await preview({ root, preview: { port: 4177, strictPort: true } });
const url = server.resolvedUrls?.local?.[0];
if (!url) throw new Error('vite preview did not report a local URL — is dist/ built?');

const browser = await chromium.launch();
let problems = [];

try {
  // A4 at 96dpi. The stylesheet pins .cv to the page content box, so this is
  // belt and braces — but a deterministic viewport keeps any measurement that
  // touches the page box honest.
  const page = await browser.newPage({ viewport: { width: 794, height: 1123 } });

  // Measure the *print* layout, not the screen one. `page.pdf()` already
  // renders with print media, but the in-page measurements below run before
  // that and would otherwise measure a different layout.
  await page.emulateMedia({ media: 'print' });

  const response = await page.goto(new URL('print.html', url).href, { waitUntil: 'load' });
  if (!response?.ok()) throw new Error(`print.html did not load: ${response?.status()}`);

  // The single most common cause of a wrong PDF: rendering before the webfonts
  // land, so every measurement and line break is computed against a fallback.
  await page.evaluate(() => document.fonts.ready);

  problems = await page.evaluate(measureLayout);

  await page.pdf({
    path: distPdf,
    // Let `@page { size: A4 }` decide. Left at its default (false), Chromium
    // scales the content to fit the paper and silently changes every type size.
    preferCSSPageSize: true,
    printBackground: true,
    // Defaults to false in Playwright even though the Chrome CLI tags by
    // default. It gives parsers a structure tree — free, and the opposite of
    // the Type 3 problem.
    tagged: true,
    outline: false,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    scale: 1,
  });
} finally {
  await browser.close();
  await server.close();
}

/**
 * Runs in the page. Returns a list of layout violations.
 *
 * `Element.getClientRects()` yields one rect per line box only for *inline*
 * elements — a block always returns exactly 1 no matter how many lines it
 * holds, so the obvious check would pass everything silently. Measuring a
 * Range over the element's contents is what actually counts line boxes, and it
 * needs no wrapper elements in the markup.
 */
function measureLayout() {
  const found = [];
  const excerpt = (el) => (el.textContent ?? '').trim().slice(0, 60);

  for (const el of document.querySelectorAll('[data-oneline]')) {
    const range = document.createRange();
    range.selectNodeContents(el);
    const rects = [...range.getClientRects()].filter((r) => r.width > 0 && r.height > 0);

    if (rects.length === 0) {
      found.push({ kind: 'not-rendered', text: excerpt(el) });
      continue;
    }

    // One line yields several rects — one per inline child — and inline
    // children at different font sizes sit at different `top` values on that
    // same line. Counting distinct tops therefore reports false wraps. What
    // actually distinguishes a second line is that its rects do not overlap
    // the first vertically, so merge overlapping bands and count those.
    const bands = [];
    for (const r of [...rects].sort((a, b) => a.top - b.top)) {
      const last = bands[bands.length - 1];
      if (last && r.top < last.bottom - Math.min(r.height, last.bottom - last.top) * 0.4) {
        last.bottom = Math.max(last.bottom, r.bottom);
      } else {
        bands.push({ top: r.top, bottom: r.bottom });
      }
    }
    if (bands.length > 1) {
      found.push({ kind: 'wrapped', text: excerpt(el), lines: bands.length });
    }
  }

  // Nothing may run past the right edge of the page box.
  const pageWidth = document.documentElement.getBoundingClientRect().width;
  for (const el of document.querySelectorAll('.cv *')) {
    const r = el.getBoundingClientRect();
    if (r.width > 0 && r.right > pageWidth + 1) {
      found.push({ kind: 'overflows-right', text: excerpt(el), by: Math.round(r.right - pageWidth) });
    }
  }

  return found;
}

// ── Verify the artifact ────────────────────────────────────────────────────
// These checks parse the PDF byte stream. Chromium writes PDF 1.4 with a plain
// xref table and no object streams, so the page tree, the font subtypes and the
// MediaBox are all literal ASCII in the file. That is asserted below rather
// than assumed: a regex that silently stops matching would turn every one of
// these into a check that always passes.
const raw = await readFile(distPdf, 'latin1');

const pages = Number(raw.match(/\/Count\s+(\d+)/)?.[1]);
if (!Number.isInteger(pages)) {
  problems.push({ kind: 'verifier-broken', text: 'no /Count in the PDF — the page check is dead' });
} else if (pages !== 1) {
  problems.push({ kind: 'page-count', text: `the CV is ${pages} pages; one is the limit` });
}

const mediaBox = raw.match(/\/MediaBox\s*\[\s*0\s+0\s+([\d.]+)\s+([\d.]+)/);
if (!mediaBox) {
  problems.push({ kind: 'verifier-broken', text: 'no /MediaBox — the page-size check is dead' });
} else {
  const [w, h] = [Number(mediaBox[1]), Number(mediaBox[2])];
  if (Math.abs(w - A4.width) > 1 || Math.abs(h - A4.height) > 1) {
    problems.push({ kind: 'page-size', text: `MediaBox is ${w}×${h}pt, expected A4 595.276×841.89` });
  }
}

// Text drawn as Type 3 glyph procedures still renders, but it is the weakest
// footing for the cheap text extractors in ATS pipelines — and a variable font
// leaking into the build would cause it silently.
if (/\/Subtype\s*\/Type3/.test(raw)) {
  problems.push({ kind: 'type3', text: 'the PDF contains Type 3 fonts — text is drawn, not set' });
}
if (!/\/FontFile[23]/.test(raw)) {
  problems.push({ kind: 'fonts', text: 'no embedded font programs' });
}

if (problems.length > 0) {
  console.error(`\n✗ ${distPdf}`);
  for (const p of problems) {
    const detail = p.lines ? ` (${p.lines} lines)` : p.by ? ` (by ${p.by}px)` : '';
    console.error(`  · [${p.kind}]${detail} ${p.text}`);
  }
  console.error('');
  process.exit(1);
}

// print.html is a build-time source, not a page of the site.
await rm(resolve(root, 'dist/print.html'), { force: true });

await mkdir(dirname(publicPdf), { recursive: true });
await copyFile(distPdf, publicPdf);

console.log(`✓ ${distPdf} — ${pages} page, ${(raw.length / 1024).toFixed(0)} KB`);
