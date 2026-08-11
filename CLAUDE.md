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

### The pearpages mark

`public/media/pearpages-mark.png` is the mark every site in the family carries (pearpages.com,
orchard.pearpages.com, masiablanca.soms.cat). It appears three times, always small: ~52px above
the hero wordmark, 24px in the nav, and 20px in the footer credit. It is a **maker's stamp, not a
co-star** — sizing it up would take back the thing the hero exists to prove, that type carries the
identity here.

The footer credit is the family signature, copied in form from the other sites — mark, then
"Made by [pearpages](https://pearpages.com)" with `rel="author"`. Orchard says "Made by Pere
Pages", Masia Blanca "Fet per pearpages"; same shape, same destination. Keep it in step with them.

- It keeps its cream disc. The mascot's dark navy outline is too close to `--ultramarine` in value
  to survive on the bare hero ground.
- It is decorative (`alt=""`); the wordmark and the nav name carry the accessible name.
- Below `56rem` the nav hides the *name*, not the mark — the mark alone stays as the way back to
  the top.
- The favicon set in `public/media/icons/` derives from the same source. Before 2026 these were
  screenshots of the 2017 CV; do not let them drift back out of sync with the mark.

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
- A skill in `skillGroups` with no matching `stack` entry anywhere renders with no evidence line.
  That is the honest outcome, not a bug — but it also means **adding a skill without a role or
  project behind it is an empty claim**. Next.js and Astro sat bare until Bitepals and the two
  Astro sites were added to `projects`.
- `repo` on a `ShowcaseProject` is optional: Bitepals is a product with a private repo. The About
  sidebar's "Open source" count is `projects.filter(p => p.repo).length`, not `projects.length`,
  so a closed-source project can never inflate it.

### Writing

`writing` in `cv.ts` powers the Writing section. `postCount` is a hand-written snapshot (78, taken
11 Aug 2026) and `selected` is three **hand-picked exemplars, not the latest three** — a CV shows
your best, not your most recent. `pearpages.com/blog/rss.xml` exists, and a build-time fetch was
considered and rejected: it would tie every deploy to another host being up and would order posts
by recency rather than merit.

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

1. **Ocado internal dates are estimates.** Blue Orange now closes at `2019-02` and the Ocado tenure
   runs `2019-03 → present`, split into four `ocado-*` entries by team at Pere's request. Only the
   start is sourced (18 March 2019). The three team transitions — Communications → multibranding
   frontend → Subscriptions → Payments — are read off the narrative, not confirmed. See the TODO at
   the top of `cv.ts`. The per-team `stack` arrays are thin for the same reason: React is sourced,
   the rest is not.
2. **Splitting one tenure into four inflates skill evidence.** `skillEvidence` counts roles, so one
   employer now contributes four (`Git · 7 roles`, `Agile · 4 roles`). Accepted as the cost of the
   four-entry layout — but if it ever reads as job-hopping, count distinct employers instead.
3. **Headline** — "Frontend Architect & Engineering Lead" is a proposal, pending confirmation.
4. **Community dates** — the old data only carried March–May 2017 for AngularCamp / Angular Beers /
   CinemaJS, which cannot be right; entries currently render without dates.
5. **Hovering the current time-axis segment overrides its saffron** with `--accent`, because the
   hover rule follows `.is-current` in `TimeAxis.scss`. Pre-existing, cosmetic.
