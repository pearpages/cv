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

Dates are ISO `YYYY-MM`. That matters: the proportional time axis and the skill evidence lines
("Angular — 4 roles, 2015→now") are both computed from them by `src/lib/derive.ts`, so a role's
`stack` array is the single source for what a technology claim rests on. Add a technology to a role
and the evidence updates itself.

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

## Printing

⌘P is a supported output, not an afterthought — `src/styles/_print.scss` collapses the hero to a
masthead, drops navigation and the time axis, and prints link targets inline so a paper copy still
resolves.
