# Pere Pages Soms — CV

The CV at **[perepages.com](https://perepages.com)**. React 19 + TypeScript + Vite, no UI framework.

## Develop

```bash
nvm use          # Node 22, from .nvmrc
npm install
npm run dev      # http://localhost:5173
```

| Script | |
|---|---|
| `npm run dev` | dev server |
| `npm run build` | production build into `dist/` |
| `npm run preview` | serve the built output |
| `npm run typecheck` | `tsc --noEmit` — also gates the deploy |

## Editing the CV

All content lives in **`src/data/cv.ts`**, typed by `src/data/types.ts`. There is no CMS and no JSON
to keep in sync — edit the TypeScript and the page follows.

Dates are ISO `YYYY-MM`. That matters: the proportional time axis and every duration on the page
are computed from them by `src/lib/derive.ts`.

A role's or project's `stack` array is the single source for what a technology claim rests on.
`npm run check:skills` enforces that in both directions and runs first in `npm run build`: every
skill in `skillGroups` must appear in some `stack` or in `writing.topics`, and every technology in
a `stack` must be claimed as a skill or excluded on the record in `DELIBERATELY_UNCLAIMED`. Adding
a technology to a role therefore either gives a skill its backing or asks you to decide about it —
which is what stopped six modern technologies from sitting unclaimed in project tags for months.

## Deploying

Pushing to `master` runs `.github/workflows/deploy.yml`, which typechecks, builds and publishes to
GitHub Pages. Nothing built is committed.

The site is served from the **apex** of `perepages.com`, so `vite.config.ts` sets `base: '/'` and
every asset path is root-relative. A `/cv/` base would 404 there. `public/CNAME` holds the domain
and Vite copies it into `dist/` verbatim.

> GitHub Pages must be set to **Source: GitHub Actions** (Settings → Pages). The older
> branch-and-folder mode published a committed `docs/` directory, which no longer exists.

## Regenerating the social card

`og-card.html` is the source for `public/media/og-card.png`. It is a fixed 1200×630 box in pixel
units so the capture is deterministic — it is not part of the built site.

```bash
npm run dev
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --virtual-time-budget=6000 --window-size=1200,630 \
  --screenshot=/tmp/og-card@2x.png http://localhost:5173/og-card.html
sips -z 630 1200 /tmp/og-card@2x.png --out public/media/og-card.png
```

## The PDF

`perepages.com/cv.pdf` is a separately designed **one-page** A4 document — not the web page
reflowed onto paper. It is its own print page (`print.html` → `src/print/`), rendered by headless
Chromium, with its own typography: Source Serif 4 and Inter, nothing shared with the site's type.
`src/data/print.ts` holds the editorial cut.

```bash
npm run pdf      # → dist/cv.pdf (and public/cv.pdf, gitignored, so `npm run dev` serves it)
npm run dev      # then open /print.html and use ⌘P to preview the exact output
```

One side is the design constraint: it forces every line to earn its place, which is what leaves
room for the white space. The site remains the full record.

The build **fails** rather than shipping something wrong. It measures the real print layout in the
browser and rejects the PDF if:

- it runs past one page, or anything overflows the page box;
- any element marked `data-oneline` wraps onto a second line;
- a font lands as Type 3 (which is what happens if a *variable* font ever gets imported here);
- the page is not A4.

Fonts must stay on the static `@fontsource/*` packages. The site's `@fontsource-variable/*` ones
degrade to Type 3 glyph procedures in Chrome's PDF output — text drawn rather than set, three times
the file size, and the worst case for ATS text extraction.

## Printing

⌘P still works — `src/styles/_print.scss` collapses the hero to a masthead and drops the navigation
— but it is a courtesy fallback now. The PDF above is the paper edition.
