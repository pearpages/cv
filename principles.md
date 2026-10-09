# Principles

Every change to this repository, whether code, docs, tests or process, complies with these
rules. When a change would break one, stop and ask the user instead of working around it.
Changing a principle is itself a decision: it needs the user's agreement and an ADR
([decisions.md](decisions.md)). How things are built is in
[architecture.md](architecture.md); security rules in [security.md](security.md).

Each rule has a **Why**, and a **Check** where something enforces it (a test, lint rule,
CI step, hook).

## Content

**P1. Nothing in `cv.ts` is invented.** Every claim traces to the original `data.json`, the
repo's own git history, or a verifiable external source (GitHub/npm for projects). If something
cannot be sourced, leave a `TODO` and ask.
*Why:* a CV is a factual document; one fabricated line discredits the rest. Where a value is
inferred (Ocado transition months, skills placed on inferred roles, TypeScript on the client
Astro sites) it carries a `TODO` saying so. *Check:* review; open `TODO`s are tracked in
[tasks.md](tasks.md).

**P2. `src/data/cv.ts` is the single source of content; `src/lib/derive.ts` is pure.** Nothing is
restated elsewhere, and no derivation mutates the imported data or memoises at module scope.
*Why:* the previous mappers joined data by mutating the imported JSON in place, which
double-applied on hot reload. *Check:* review; `npm run typecheck`.

**P3. Dates are ISO `YYYY-MM`; `to` may be `'present'`.** Career figures in prose are written as
dates ("since 2007"), never as a count of years.
*Why:* the proportional time axis and every duration are computed from them; a count of years
needs re-typing every January in several places, and did. *Check:* `src/data/types.ts`; review.

**P4. `src/data/print.ts` derives from `cv.ts` and never restates content. Never prune `cv.ts` to
make the PDF's job easier.**
*Why:* the site is the long record and the PDF links to it; the editorial cut is a view.
*Check:* review. [ADR-0006](docs/adr/0006-paper-edition-separate-html-document.md)

## Skills

**P5. Every claimed skill has backing, and every technology in a `stack` is either claimed or
excluded on the record.** Backing is a role `stack`, a project `stack`, or `writing.topics`.
Excluding means a line with a reason in `DELIBERATELY_UNCLAIMED`; an exclusion for something in
no stack is itself an error.
*Why:* the gate proves the list is honest *and* complete; dropping a technology costs a line of
justification. *Check:* `npm run check:skills`, first step of `npm run build`.
[ADR-0004](docs/adr/0004-skills-are-keyword-surface-not-proof.md),
[ADR-0005](docs/adr/0005-two-way-skills-gate.md)

**P6. Skills render no self-score and no derived evidence figure.** No percentage bars, no
"React · 4 roles · 2019→now"; a skill links to the section that backs it (`skillSource()`), and
the heading carries no count.
*Why:* self-scored numbers read as a negative signal; the derived figure moved with refactors,
contradicted the page and was self-reported on both sides. *Check:* review.
[ADR-0004](docs/adr/0004-skills-are-keyword-surface-not-proof.md)

**P7. Leadership is argued in prose, not claimed in chips.** Frontend architecture, technical
leadership, mentoring, code review and recruitment live in `profile.summary` and role highlights.
*Why:* a grey chip in a long list is the weakest way to make the headline's claim. *Check:*
review.

**P8. `writing.topics` entries are subjects with posts behind them; `writing.selected` is three
hand-picked exemplars, not the latest.**
*Why:* topics are load-bearing backing for skills; a CV shows your best, not your most recent.
*Check:* review. [ADR-0008](docs/adr/0008-writing-is-hand-picked.md)

## Styling

**P9. No inline styles, CSS-in-JS or style objects; every component has a co-located `.scss`.**
The one exception is a CSS custom property carrying a computed value (`--offset`/`--length` on
the time axis). Class names are BEM-ish (`.role`, `.role__rail`, `.is-current`).
*Why:* the value is data; the styling still lives in the stylesheet. *Check:* review.

**P10. No CSS framework and no icon font.** Icons are inline SVG components in
`src/components/icons/`.
*Why:* Bootstrap and FontAwesome were removed in the 2026 rebrand and should not come back.
*Check:* `package.json` review. [ADR-0002](docs/adr/0002-no-css-framework-colour-from-pulp.md)

**P11. Colour comes from pulp's semantic tokens only.** Never a hex in a component stylesheet,
never a pulp primitive (`--color-neutral-500`). The site's own colours are `--ultramarine`,
`--bone`, `--signal`/`--on-signal` and `--logo-chip`, in `src/styles/_tokens.scss` — the one file
allowed to alias pulp primitives, because those colours must not move between schemes.
*Why:* primitives are the brand's private business and change when the brand does. *Check:*
review. [ADR-0002](docs/adr/0002-no-css-framework-colour-from-pulp.md),
[ADR-0011](docs/adr/0011-read-pulp-foundations-not-restate-them.md)

**P11a. Where pulp has a foundation token, read it; never redeclare a pulp name.** Space, radius,
motion, typefaces, type-scale floors, weights and focus rings come from pulp; `_tokens.scss` holds
only what pulp lacks.
*Why:* an unlayered redeclaration overrides pulp everywhere, its components included, and a
restated value stops following the brand. *Check:* review.
[ADR-0011](docs/adr/0011-read-pulp-foundations-not-restate-them.md)

**P12. Nothing in this repo declares `color-scheme`, and there is no dark-mode block.** Every
colour is a `light-dark()` pair resolved by pulp from `data-scheme`.
*Why:* an unlayered `color-scheme` beats pulp's layered one and forcing a scheme stops working.
*Check:* review. [ADR-0009](docs/adr/0009-theme-follows-os-until-chosen.md)

**P13. `src/styles/layers.css` is imported first in `main.tsx`; only `_reset.scss` is layered on
this side; component stylesheets stay unlayered.**
*Why:* layers rank by where they are first named, and pulp's component styles must beat the
reset's `button { font: inherit }`. *Check:* review.

## Design

**P14. The wordmark is the identity; everything else stays quiet.** No profile photo. The
pearpages mark stays small (~52px hero, 24px nav, 22px footer), keeps its cream disc, and is
decorative (`alt=""`).
*Why:* the hero exists to prove that type carries the identity; the mark is a maker's stamp, not
a co-star. *Check:* review. [ADR-0003](docs/adr/0003-two-acts-typographic-identity.md)

**P15. Saffron (`--signal`) is rationed to about three uses page-wide**: the current-role badge
and the current time-axis segment.
*Why:* it is the one loud colour; spent elsewhere it stops meaning "now". *Check:* review.

**P16. No JS on the scroll path.** The hero's width axis is driven by
`animation-timeline: scroll(root block)`, guarded by `@supports`, and static under
`prefers-reduced-motion`.
*Why:* performance and motion safety. *Check:* review.

**P17. The favicon set derives from the pearpages mark.**
*Why:* before 2026 they were screenshots of the 2017 CV; they must not drift out of sync again.
*Check:* review.

**P18. The footer credit comes from `@pearpages/credit` and is not restyled here** beyond mapping
its custom properties to pulp tokens, placement, and the underline the reset strips. Fixes to its
markup go in the package.
*Why:* it is the family signature, shared by every site. *Check:* review.

## Paper edition

**P19. The PDF is one A4 page. If it feels cramped, cut content — never shrink type.**
*Why:* one side forces every line to beat another to be there, and that is what buys the white
space; a two-page draft filled with 9pt type and no air. *Check:* page-count gate in
`scripts/build-pdf.mjs`. [ADR-0006](docs/adr/0006-paper-edition-separate-html-document.md)

**P20. The PDF shares data with the site, never design.** `src/print/` has zero `@use`/`@import`
into `src/styles/`; its type is Source Serif 4 and Inter; no logo; no left rail.
*Why:* the site's typefaces are a screen brand and read as a dashboard at 9pt; a mark competes
with the name; a date rail took 25% of the measure and caused the wraps. *Check:* review.

**P21. Print fonts are static `@fontsource/*`, never `@fontsource-variable/*`.**
*Why:* Chrome degrades variable fonts to Type 3 glyphs — triple the file, weakest ATS footing.
*Check:* the Type 3 gate in `scripts/build-pdf.mjs`.

**P22. Text that must not wrap carries `data-oneline`; inline separators are real characters,
not CSS margins.**
*Why:* the build measures every `data-oneline` and fails on a wrap; a margin leaves no word
boundary in the PDF text layer. *Check:* the one-line gate in `scripts/build-pdf.mjs`.

**P23. Every byte-level gate asserts its own regex still matches.**
*Why:* a regex that silently stops matching turns a gate into a check that always passes.
*Check:* `scripts/build-pdf.mjs`.

**P24. There is exactly one `@media print` block on the site, in `_print.scss`, and it blanks
the page.** Parked print markup (`.print-only`, `no-print`, the commented Download anchor) is kept
so restoring is an uncomment, not a rewrite.
*Why:* a second, worse paper document would compete with `cv.pdf`; a print rule elsewhere can
only style something that never renders. *Check:* review.
[ADR-0007](docs/adr/0007-site-printing-disabled.md)

## Theme

**P25. `data-scheme` on `<html>` means an explicit choice and is absent until there is one.**
*Why:* its absence keeps `prefers-color-scheme` in charge with no JS; stamping the resolved
scheme on mount pins every visitor. *Check:* review.
[ADR-0009](docs/adr/0009-theme-follows-os-until-chosen.md)

**P26. The anti-flash script in `index.html` stays a classic script in `<head>`, below the single
`theme-color` meta.** The two theme hex values (in `index.html` and `useTheme.ts`) change
together and mirror pulp's tokens.
*Why:* Vite appends its stylesheet at the end of `<head>`, so the script runs before it exists;
`type="module"` would defer it. *Check:* review.

## Deploy

**P27. Only a `vX.Y.Z` tag on `master` deploys; nothing built is committed.**
*Why:* green must always mean published, and an off-master tag would ship unreviewed code.
*Check:* `.github/workflows/deploy.yml` (fails, never skips).
[ADR-0010](docs/adr/0010-deploy-on-version-tags.md)

**P28. `base: '/'` and `public/CNAME` stay.**
*Why:* the site is on the apex; `/cv/` white-screens it, and without `CNAME` in the artifact
every deploy drops the custom domain. *Check:* review.

## Process

**P29. Knowledge lives in its file.** How to work → `AGENTS.md`; rules → here; how it is
built → `architecture.md`; why → an ADR; work → `tasks.md`; risk → `security.md`.
*Why:* a session log in the agent file hides decisions from the next person.
[ADR-0001](docs/adr/0001-project-knowledge-files.md)
