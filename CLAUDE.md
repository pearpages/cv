# CLAUDE.md

Project notes for the CV at [perepages.com](https://perepages.com).

## Stack

React 19 · TypeScript 7 (strict) · Vite 8 · Sass. **No CSS framework** — Bootstrap and FontAwesome
were removed in the 2026 rebrand and should not come back. Icons are inline SVG components in
`src/components/icons/`.

## Conventions

- **Never use inline styles, CSS-in-JS or style objects.** Every component has a co-located
  `.scss` file next to its `.tsx`. The one permitted exception is a CSS custom property carrying a
  computed value (`--offset` / `--length` on the time axis segments) — the value is data, the
  styling still lives in the stylesheet.
- Class names are BEM-ish: `.role`, `.role__rail`, `.role__logo`, `.is-current`.
- Colour, type, space and motion are CSS custom properties in `src/styles/_tokens.scss`. Do not
  hardcode a hex value in a component stylesheet; add a token.
- Dark mode is a redefinition of the same tokens under `prefers-color-scheme`. Anything defined
  only inside the dark block is a bug.
- Testing: `npm test -- --run` if tests are ever added (never bare `npm test` — it watches).

## Design direction — "load-bearing typography, two acts"

The profile photo was deliberately removed. The **wordmark is the identity anchor** that replaced
it, so it is the one element that should stay bold; everything else stays quiet.

- **Act I** — `Hero`, fixed behind the document: a full-viewport ultramarine field with the name at
  ~18vw. Archivo's **width axis** (`wdth` 62–125) is driven by scroll via CSS
  `animation-timeline: scroll(root block)` — no JS on the scroll path. Guarded by `@supports`, and
  it holds a static width under `prefers-reduced-motion`.
- **Act II** — the document scrolls over the top of it (`.page { margin-block-start: 100dvh }`) on
  a light, quiet reading surface where the ultramarine is demoted from ground to accent.

Archivo must be imported from `@fontsource-variable/archivo/wdth.css`. The default entrypoint ships
the weight axis only and the hero animation silently does nothing.

Saffron (`--signal`) is rationed to about three uses page-wide: the current-role badge and the
current segment of the time axis. Do not spend it elsewhere.

## Data

`src/data/cv.ts` is the single source of content, typed by `src/data/types.ts`. `src/lib/derive.ts`
computes everything else and is **pure** — the previous mappers joined data by mutating the
imported JSON in place and memoising at module scope, which double-applied on hot reload. Don't
reintroduce that shape.

- `from`/`to` are ISO `YYYY-MM`; `to` may be `'present'`. The proportional time axis depends on it.
- `stack` is a `string[]` per role. Skill evidence ("4 roles · 2015→now") derives from it, so
  skills are never asserted in two places.
- **Percentage skill bars are gone on purpose.** Self-scored numbers read as a negative signal and
  carry no ATS weight. Grouped taxonomy plus derived evidence replaced them.

### Content rule

Nothing in `cv.ts` may be invented. Every claim traces to the original `data.json`, the repo's own
git history, or a verifiable external source (GitHub/npm for the projects section). If something
cannot be sourced, leave a `TODO` and ask.

## Deployment

Apex of `perepages.com`, served by this repo. `base: '/'` in `vite.config.ts` — a `/cv/` base
404s and white-screens the site. Push to `master` → `.github/workflows/deploy.yml` typechecks,
builds and publishes. Nothing built is committed; there is no `docs/` directory any more.

`public/service-worker.js` is a deliberate no-op that unregisters itself and deletes all caches.
It flushes the 2017 webpack-era service worker. Leave it until returning visitors have cycled.

## Outstanding

1. **2017→2026 is unverified.** The Blue Orange role still ends at `'present'` with its 2017 stack.
   Pere is supplying the real history; see the TODO at the top of `cv.ts`.
2. **Headline** — "Frontend Architect & Engineering Lead" is a proposal, pending confirmation.
3. **Community dates** — the old data only carried March–May 2017 for AngularCamp / Angular Beers /
   CinemaJS, which cannot be right; entries currently render without dates.
