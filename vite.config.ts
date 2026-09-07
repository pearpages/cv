import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { skillGroups } from './src/data/cv';
import { claimedSkills } from './src/lib/derive';

/**
 * Fills `%KNOWS_ABOUT%` in the Person schema from `skillGroups`.
 *
 * That array used to be maintained by hand alongside the one in `cv.ts`, and
 * the two drifted apart in both directions — the schema claimed "Web
 * accessibility" the page never claimed, and omitted every AI term the page
 * did. Two hand-kept lists of the same thing will always drift; deriving one
 * from the other is the only fix that holds.
 *
 * The handler must return the `{ html, tags }` object, not a bare string.
 * Vite 8 (Rolldown) accepts a string in the type signature, runs the hook, and
 * then silently discards the result — the placeholder shipped to dist/ with no
 * error. Hence also the assertion below: a substitution that quietly stops
 * happening is worse than one that fails, because the page still renders and
 * only the machine-readable half is wrong.
 */
function knowsAbout(): Plugin {
  const placeholder = '%KNOWS_ABOUT%';

  return {
    name: 'cv-knows-about',
    transformIndexHtml: {
      order: 'pre' as const,
      handler(html: string, ctx: { path: string }) {
        // print.html carries no schema; only index.html must contain the slot.
        const isIndex = ctx.path.endsWith('index.html');
        if (!html.includes(placeholder)) {
          if (isIndex) {
            throw new Error(
              `${placeholder} is missing from index.html — the Person schema would ship without knowsAbout.`,
            );
          }
          return { html, tags: [] };
        }

        return {
          html: html.replaceAll(placeholder, JSON.stringify(claimedSkills(skillGroups))),
          tags: [],
        };
      },
    },
  };
}

// The site is served from the apex of perepages.com (repo `cv`, published by
// .github/workflows/deploy.yml). Every asset path must be root-relative — a
// `/cv/` base would 404 here and white-screen the page.
export default defineConfig({
  base: '/',
  plugins: [react(), knowsAbout()],

  // Two entries. `print.html` is the source for dist/cv.pdf — headless Chromium
  // renders it in scripts/build-pdf.mjs, which then deletes it from dist/ so it
  // is never published.
  //
  // This is the *top-level* `input`, not `build.rollupOptions.input`: Vite 8 is
  // Rolldown-based and treats the latter as a deprecated alias. The top-level
  // option also applies in dev, which is what lets `npm run dev` serve
  // /print.html for working on the layout.
  //
  // Paths are relative so this file needs no `node:path` import and no
  // `@types/node`; Vite resolves them against `root`, which is this directory.
  // Vite ignores the keys for HTML entries and uses the resolved path, so
  // `print.html` lands at `dist/print.html`.
  input: {
    main: 'index.html',
    print: 'print.html',
  },
});
