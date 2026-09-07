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
- Dark mode is a redefinition of the same tokens, written once in the `dark-scheme` mixin and
  emitted twice — behind `prefers-color-scheme` and behind `[data-theme='dark']`. Anything defined
  only inside `dark-scheme` is a bug. See *The theme toggle* below before editing that file.
- `--logo-chip` and `--on-signal` are deliberately **not** redefined in `dark-scheme`. "Add a token"
  does not mean "add a token that flips": the logo chips carry opaque PNGs that turn into solid
  blocks when inverted, and `--signal` is the same saffron in both schemes, so the ink on it is too.
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
- `stack` is a `string[]` per role, and one of the three things that can back a skill claim.
- **Percentage skill bars are gone on purpose.** Self-scored numbers read as a negative signal and
  carry no ATS weight.
- `repo` on a `ShowcaseProject` is optional, and four entries use that: Bitepals is a product with
  a private repo, `Consulting Integral Garrotxa` and `Trainingacció` are client sites, and `Blog`
  is a Docusaurus install rather than a repo worth linking. The About sidebar's "Open source" count
  is `projects.filter(p => p.repo).length`, not `projects.length`, so a closed-source project can
  never inflate it. It renders as "12 of 16 projects" — without the denominator it read as a
  contradiction of the Projects section's own count.
- **The two client sites are the only commercial work in `projects`**, and they sit at the top for
  that reason. Both descriptions say "client site" outright: it distinguishes them from the side
  projects around them, and it answers the missing repo before a reader wonders about it. Their
  `Astro` and `i18n` entries are read off the served HTML — a `generator` meta, `/_astro/` asset
  paths, `hreflang` — but `TypeScript` is inferred from Pere's other Astro sites and carries a
  `TODO` saying so. A built Astro site does not reveal its source language.
- **`projects` includes this site** (`This CV`, listed last). It earns the slot by being the only
  backing for Playwright and GitHub Actions, and because the interesting part is the build refusing
  to ship a broken PDF. Remove it and the skills gate correctly rejects both.

### Skills: what the section is for

**Keyword surface and navigation — not a proof.** Proving is delegated to Projects and Writing,
which carry evidence a stranger can check: an installable package, a public repo, a post with a
date on it. This is the one section that is deliberately *not* autobiographical, so it is tuned to
the roles being targeted rather than to everything ever touched.

Two consequences that are easy to undo by accident:

- **Keyword surface does not mean maximise keywords.** WordPress, Drupal and Docusaurus were cut
  because they mis-sort into a different market segment, not because they are untrue; Protractor
  and Jasmine because they date the testing knowledge to 2017; HTML, SQL, Jira, Prettier, BEM,
  Angular CLI and the generic "Unit testing"/"REST APIs"/"CI/CD" because they win nothing.
  52 → 37, then 37 → 50 once the reverse check found what the first pass had missed, then to 56 as
  Pere named the testing stack, Kanban and Redux. Breadth is not the problem; *unbacked or
  mis-sorting* breadth is. Every one of the 56 is backed.
  **`Docusaurus` is now enforced rather than merely described.** It was named here as cut from the
  moment the section was written, but nothing checked it — no `stack` contained it. Adding the
  `Blog` project put it in one, the reverse gate failed the build on the next run, and it now has a
  line in `DELIBERATELY_UNCLAIMED`. That is the mechanism working exactly as intended: the decision
  was already made, and the gate made someone write down why. WordPress is still only described.
- **Leadership left the section.** `Frontend architecture`, `Technical leadership`, `Mentoring`,
  `Code review` and `Recruitment` are the headline's claim, and a grey chip in a 37-item list is
  the weakest way to make it. They live in `profile.summary` and in role highlights now, where they
  can be argued. The PDF dropped its `Practice` row for the same reason.

#### The derived evidence line, and why it went

`formatEvidence` used to render "React · 4 roles · 2019→now" under each skill. It is gone, and
should not come back in that shape:

- It counted role **rows**, so splitting the Ocado tenure into four made it read `Git · 7 roles`.
  A figure that moves when `cv.ts` is refactored, with no fact changing, was never describing the
  career.
- It read **only role stacks**, and the recent Ocado stacks are thin — so it dated `CSS` to 2016
  and `SCSS` to 2019, on a site hand-rolled in Sass. Stale end dates on core skills read as decay.
- It **contradicted the page**: `Agile · 4 roles · 2019→now` sat above Karine Lesueur's testimonial
  describing an Agile analyst/programmer loop at Tokio Marine in 2011.
- It was **asymmetric by construction**. What goes easily into a `stack` array is a *tool*; what
  does not is a *capability*. So `Jira` carried a citation while `Technical leadership` and
  `Prompt design` rendered bare — the mechanism under-served every claim that mattered most.
- It was **not third-party evidence**. Both sides of the cross-reference were self-reported. It
  wore the costume of a citation while asserting the same thing twice, which is the flaw that
  retired the percentage bars.

**What replaced it, in two parts:**

1. **A link, not a figure.** `skillSource()` in `derive.ts` returns `'projects' | 'writing' |
   'experience'`, and each skill links to that section. A link cannot overstate what it points at.
   Externally checkable evidence wins: a package or repo beats a post, and both beat a line in the
   work history. The chips are *not* dressed as links — the affordance is held back to hover and
   focus, because thirty blue underlined words would wreck the one thing the section must do.
2. **A build gate, not a rendered admission.** `scripts/check-skills.mjs` fails the build when a
   skill has no backing. The valuable half of the old mechanism was always the authoring
   constraint — you cannot claim a skill with nothing behind it — and that costs the reader nothing
   if it never renders. Runs first in `npm run build`; also `npm run check:skills`.

**Backing may come from a role `stack`, a project `stack`, or `writing.topics`.** Writing counts
because four published posts on agent design are better evidence than a `stack` array typed by the
same hand. `writing.topics` is therefore load-bearing, not decoration — each entry must be a
subject with posts behind it.

- The section heading carries **no count**. "52 technologies" advertised the padding.

#### The gate runs in both directions

The first version only checked claims → backing. That proves the list is honest and says nothing
about whether it is *complete*, and the cost showed up immediately: `Canvas API`, `Deno`,
`Chrome Extensions MV3`, `PWA`, `Domain modelling` and `npm publishing` had been sitting in project
`stack` arrays for months, rendering as card tags, never claimed as skills — swept out alongside
the legacy PHP-era items because nothing forced the decision to be written down.

So the gate now also checks backing → claims. Every technology in any `stack` must either appear in
`skillGroups` or be listed in **`DELIBERATELY_UNCLAIMED`** in `scripts/check-skills.mjs` with a
one-line reason. A third check fails on *stale* exclusions — an entry for something no longer in
any stack — because a list of reasons that stops describing the data is worse than no list.

**Dropping a technology now costs a line of justification.** That is the whole mechanism. The
fourteen current exclusions are all defensible, and not one of them was defended anywhere until the
reverse check demanded it.

#### Where the skills came from

Two sweeps, and the second found much more than the first:

- **`cv.ts` itself** — which is what the first pass read, and why it missed everything above.
- **The repository and the public record** — `package.json`, the build scripts, the stylesheets,
  the public GitHub repos and the npm registry. This is where *Node.js*, *Service workers*,
  *Design tokens*, *Structured data*, *Scroll-driven animation*, *Variable fonts* and *LLM APIs*
  came from. They were demonstrably true and named in no `stack`, so no gate could have seen them.

`This CV` and `Podcast` in `projects` are the backing entries for most of that. Their stacks are
long on purpose — every item is genuinely in the repo it names, and removing a project correctly
breaks the build for the skills it was holding up.

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

## The paper edition

`perepages.com/cv.pdf` is **not the site printed**. It is a separate **one-page** A4 document with
its own typography and layout, rendered from `print.html` by headless Chromium in
`scripts/build-pdf.mjs`. Screen and paper share *content*, not design.

It was built in Typst first, twice, and both were rejected. The lesson worth keeping is not
"Typst is bad" — it produced a genuinely better page model and real optical sizing — but that
**the recurring defect was always the same one: something wrapped that was meant to fit on one
line, and I was estimating character widths instead of measuring them.** A DOM can be asked. That
is the reason this lives in HTML now, along with the fact that Pere maintains it and writes CSS
for a living.

**One page is a design constraint, not a budget.** A two-page draft existed and was wrong:
everything fitted, so nothing had to be cut, and the page filled with 9pt type and no air. One side
forces every line to beat another line to be there, and that is what buys the white space. If it
ever feels cramped, cut content — never shrink type.

- `src/data/print.ts` is the **editorial cut**, and it is tool-independent: it survived the move
  off Typst unchanged. It derives from `cv.ts` and never restates content. Do not prune `cv.ts` to
  make its job easier — the site is the long record, and the PDF links there.
- The PDF's skills block dropped its **Practice** row (frontend architecture, technical leadership,
  mentoring) to make room for **Interface** (accessibility, design systems, Storybook, i18n). Six
  rows ran the page to a second side, and the page-count gate caught it. The right trade twice
  over: the summary two inches above already claims the leadership in a sentence that argues for
  itself. Career figures in the summary are written as dates ("since 2007", "since 2019"), never as
  a count of years — a count needs re-typing every January in six places, and did.
- `src/print/Cv.tsx` is structure, `src/print/print.scss` is the design. Neither shares anything
  with `src/styles/` — not tokens, not the reset, not the type.
- **The PDF does not use the site's typefaces.** Source Serif 4 for prose, Inter for labels only.
  Archivo/Instrument Sans/Geist Mono are a screen brand — a grotesque for a full-viewport wordmark
  and a monospace for code — and at 9pt on paper they read as a dashboard.
- **Fonts must be the static `@fontsource/*` packages, never `@fontsource-variable/*`.** Chrome
  silently degrades variable fonts to Type 3 glyph procedures in PDF output: every glyph becomes a
  drawing instruction, the file triples, and cheap ATS text extractors are on their weakest footing.
  The build asserts no Type 3 rather than trusting this.
- **No logo.** A mark competes with the name for the page's one moment of attention.
- **No left rail.** An earlier draft hung dates in a 40mm margin column, which took 25% of the
  measure off every line and caused the wrapping it was then blamed on. Dates sit at the end of the
  employer line.

### The layout invariants

`data-oneline` marks text that must not wrap; the build measures every one of them and fails with
the offending text. Three mechanics make this correct, and each was got wrong first:

1. **`Element.getClientRects()` returns one rect per line only for *inline* elements.** A block
   always returns exactly 1, so the obvious check passes everything. Measure a `Range` over the
   element's contents instead.
2. **One line produces several rects** — one per inline child — and children at different font
   sizes sit at different `top` values *on that same line*. Counting distinct tops reports false
   wraps; merge vertically-overlapping rects into bands and count bands.
3. **`.cv` is pinned to `width: 170mm`**, the `@page` content box. Without it the DOM lays out at
   browser width and every measurement describes a layout that is never printed. This is the one
   that made the checker miss a real wrap.

Separators between inline spans must be **real characters, not CSS margins** — a margin leaves no
word boundary in the text layer, and extraction ran `Modals@pearpages/modalsaccessible…` together.

### Gates

The build fails if the document exceeds one page, if any `data-oneline` element wraps, if anything
overflows the page box, if a font lands as Type 3, or if the MediaBox is not A4. The byte-level
checks assert their own regexes still match: a regex that silently stops matching turns a gate into
a check that always passes.

### Printing the site is disabled

`_print.scss` used to be a ⌘P courtesy — hero collapsed to a masthead, ink on white, link targets
printed inline. It is now a **blanking rule**: `@media print` hides `body > *` and prints a single
quiet line, `perepages.com/cv.pdf`, so ⌘P yields one blank A4 sheet pointing at the real paper
edition instead of a second, worse document competing with it. The old stylesheet is in git history.

The nav's **Download CV** anchor is **commented out, not deleted** (`Nav.tsx`, with its `.nav__print`
rule in `Nav.scss` — uncomment both or neither). `npm run pdf` still runs, all five gates still run,
and `cv.pdf` still deploys; it is simply no longer advertised. Anyone holding the URL can still
fetch it.

Two consequences to know before touching this:

- **`.print-only` is now inert.** The class is retained in `src/styles/index.scss`, as is its markup
  in `Footer.tsx`, `Contact.tsx` and `References.tsx`. Nothing renders it any more, but deleting it
  would turn restoring the print stylesheet from an uncomment into a rewrite. `no-print` on `.nav`
  is redundant for the same reason and kept for the same reason.
- **`.nav__print` now has a live neighbour.** `.nav__theme` sits directly above it in `Nav.scss`
  and is real, styled, rendered code. Restoring the PDF anchor means uncommenting the two parked
  blocks only — and the anchor goes *before* the toggle in `Nav.tsx`, so the toggle stays at the
  trailing edge.
- **There must be exactly one `@media print` block on the site.** `References.scss` carried a second,
  uncoordinated one (`columns: 2`) that survived unnoticed; it was deleted. A print rule anywhere
  outside `_print.scss` is now a bug — it can only style something that can never render.

None of this reaches the PDF. `print.html` → `src/print/main.tsx` → `src/print/print.scss` has zero
`@use`/`@import`, so the two stylesheet graphs are disjoint and share only *data*.

## The theme toggle

The scheme follows the OS until the reader says otherwise. `src/hooks/useTheme.ts` and the button
in `Nav.tsx` are the visible half; the load-bearing half is an invariant across three files.

- **`data-theme` on `<html>` means an explicit choice, and is absent until there is one.** That
  absence is what keeps `prefers-color-scheme` in charge with no JS involved. Stamping the resolved
  theme on mount looks harmless and quietly converts every visitor into a pinned one.
- **In `_tokens.scss`, the `[data-theme]` blocks must stay last.**
  `:root:not([data-theme='light'])` and `:root[data-theme='dark']` both compute to (0,2,0) —
  `:not()` takes its argument's specificity — so source order is the only thing settling a
  conflict. Move the explicit block above the media query and "force light on a dark OS" breaks
  silently.
- **The inline script in `index.html` must stay a classic script in `<head>`, and below the
  `theme-color` meta.** Vite appends its `<script>` and `<link rel="stylesheet">` at the *end* of
  `<head>`, so anything above them runs before the stylesheet element exists — that ordering is the
  whole anti-flash mechanism, and `type="module"` would forfeit it. Below the meta because
  `querySelector` only sees nodes already parsed.
- **One `theme-color` meta, managed by JS.** It used to be a media-scoped pair; a media-scoped meta
  cannot observe an attribute, and the UA takes the first one whose media matches, so a media-less
  meta alongside them would make the pair dead weight. `useTheme` keys it on the *resolved* theme,
  not on the stored choice — with nothing stored it still has to follow the OS.
- `public/manifest.json`'s `theme_color` is the one place the light value is unavoidably pinned;
  no manifest media mechanism ships anywhere.
- The two hex values live in `_tokens.scss`, `index.html` and `useTheme.ts`. Three copies, on
  purpose — the inline one cannot be bundled. Change them together.

The toggle is **unreachable during Act I** by design: the nav is hidden until the document covers
the hero, and the hero is `--ultramarine` on `--bone` in *both* schemes, so there is nothing on
screen it could change. Scrolling reveals the document and the control that restyles it together.

`.nav` gained `visibility: hidden` alongside its `opacity: 0` at the same time. Neither opacity nor
`pointer-events` removes an element from the tab order, so a keyboard user at the top of the page
was already tabbing through nine invisible links; an invisible button that restyles the whole
document made that worth fixing rather than noting.

## Deployment

Apex of `perepages.com`, served by this repo. `base: '/'` in `vite.config.ts` — a `/cv/` base
404s and white-screens the site. Push to `master` → `.github/workflows/deploy.yml` typechecks,
builds and publishes. Nothing built is committed; there is no `docs/` directory any more.

`public/service-worker.js` is a deliberate no-op that unregisters itself and deletes all caches.
It flushes the 2017 webpack-era service worker. Leave it until returning visitors have cycled.

## Outstanding

Items 2, 5, 6 and 7 were resolved by the content audit (see *Skills: what the section is for*).
What is left is everything that needs a fact only Pere has.

1. **Ocado internal dates carry Pere's durations, not his months** — *half resolved.* Blue Orange
   closes at `2019-02`, the Ocado tenure runs `2019-03 → present`, split into four `ocado-*`
   entries by team at Pere's request. The start is still the only sourced date (18 March 2019).
   The three internal transitions were estimates read off the narrative until Pere corrected the
   ends of the chain — Communications about two years, Payments a year at most — which moved
   `2020-03 → 2021-03`, `2022-01 → 2024-01` and `2024-01 → 2025-10`. The boundary months are
   rounded to fit those lengths and the middle two divide the remainder, so the *shape* of the
   tenure is now his and the precision is not. See the TODO at the top of `cv.ts`.

   One consequence to know: `ocado-payments` ends in `PRESENT`, which resolves against `new Date()`,
   so "a year tops" is true at the time of writing and grows by a month every month. It crosses two
   years in late 2027. Like `writing.postCount`, it is a snapshot that needs revisiting rather than
   a fact the data enforces.
2. **The four-way Ocado split is now the most expensive decision in the file.** It no longer
   inflates skill counts (those are gone), but it still puts four identical `Senior Software
   Engineer` headings back to back and makes Experience read `9 roles` for six employers in
   nineteen years — which scans as job-hopping. `print.ts` already merges them into one tenure, and
   that merge is what makes the PDF immune to the unsourced dates above. **Recommend doing the same
   on the site**, with the four teams as an internal progression line; it dissolves item 1 as well.
   Pere's call, since the split was his request.
3. **Headline** — "Frontend Architect & Engineering Lead" against a title of `Senior Software
   Engineer` since 2019, still pending confirmation. Moving the leadership claims out of the skill
   chips and into the prose was done partly to make the body earn it, but the gap is real and a
   recruiter will see it.
4. **No metrics anywhere.** Ten roles, forty-odd highlights, not one number — no brand count, team
   size, user scale or delivery figure. This is the single biggest remaining quality gap, and the
   reference quotes are more concrete than the CV is. Worth sourcing: how many retail brands the
   multibranding toolkit served; how many casino brands the Blue Orange gamification set shipped
   across; team sizes led at Blue Orange and WeFitter.
5. **WeFitter overlaps AngularCamp by a month, deliberately.** `wefitter-lead` now runs
   `2016-10 → 2017-04` (six months) against `angularcamp-organiser`'s `2017-03 → 2017-06`. This
   corrected a conversion bug, not a fact: the source `data.json` ran WeFitter "October 2016 →
   March 2017", six months read inclusively, and converting that `to` as an exclusive transition
   month cut it to five and erased an overlap the original had. **`Role.to` is therefore not always
   the transition month** — see the note on the type. `TimeAxis` draws every segment at the same
   `inset-block-start`, so overlapping bars stack rather than lane; the bar fill was changed from
   `color-mix(… , transparent)` to `color-mix(… , var(--surface))` so two stacked bars no longer
   compound into a brighter sliver that reads as a third micro-segment. A longer overlap would
   need real laning.
6. **One employment gap remains** — `blue-orange-lead` closes `2019-02` and `ocado-communications`
   opens `2019-03`, so the axis draws a one-month sliver. It is *sourced* (Pere joined Ocado on 18
   March 2019). Under the transition-month rule on `Role.to`, setting Blue Orange's `to` to
   `2019-03` would close it without contradicting that — but only Pere can say whether he went
   straight across or had a month out. Ask before changing it.
7. **Community dates** — *resolved for AngularCamp* (March–June 2017, confirmed; it is also a role
   in `roles` as `angularcamp-organiser`, deliberately appearing in both Experience and Community).
   Angular Beers and CinemaJS stay undated — `CommunityRole.from`/`to` are optional for that reason.
8. **Every reference predates Ocado.** Nine testimonials, newest from Blue Orange in 2019. Seven
   years of the strongest work has nothing against it, and the praise visibly stops where the
   current job starts. They are now ordered by what they evidence rather than by employer — Alvaro
   Moya and Loris Candylaftis lead because they speak to teaching and setting practice — but no
   ordering fixes the gap. It needs one recent colleague.
9. **Several confirmed skills sit in inferred roles.** All are real — Pere confirmed each — but
   the tenure they are attached to is a guess, and each carries a `TODO` on the array:
   - *Storybook* and *Design systems* → `ocado-multibranding`, the tenure that owned shared
     components across brands.
   - *Cypress* and *BDD* → `ocado-subscriptions` and `ocado-multibranding`. Pere said "Cypress in
     previous jobs" and "BDD in many jobs"; on this CV Ocado *is* four jobs, so the React-era teams
     before the current one are the reading. *BDD* also sits on `blue-orange-lead`.
   - *WebdriverIO* and *Page objects* → `ocado-communications`, the earliest Ocado team, because
     WebdriverIO driving page objects is the older enterprise-QA shape and predates Cypress.

   Only *Playwright* on `ocado-payments` ("right now") and *Kanban* on `blue-orange-lead` and
   `ocado-subscriptions` are sourced to a named employer or team.
10. **The Ocado unit-testing layer is still blank.** Pere named E2E tools only, so five roles and
   seven years of React still carry no unit or component testing. Jest is the obvious absence;
   `Vitest` and `React Testing Library` are claimed but backed only by personal projects. Ask.
   *(The sibling gap — no state library named across seven years of React — is now closed: Redux
   runs on `blue-orange-lead` and all four `ocado-*` roles, sourced to "started using it from We
   Are Blue Orange". It sits beside NgRx rather than against it, since NgRx is Redux for Angular
   and Blue Orange is where both begin. Open: whether Ocado is on plain Redux or **Redux Toolkit** —
   RTK has been the official recommendation since 2021 and is the better keyword, but Pere said
   "Redux" and it has not been inferred past that.)*
11. **Docker and Express are still unclaimed; Node.js is resolved.** Node.js is back, backed by
   `Podcast` and by this repo's build scripts. Docker and Express have real public evidence in
   `github.com/pearpages/fun-with-docker` — Compose, three networked services, lifecycle and
   cleanup shell scripts — but it is a 2023 sandbox, not professional work, and adding it to
   `projects` to back a skill would be the tail wagging the dog. Pere has separately confirmed
   Docker as real professional experience: **name the role and add it to that `stack`**, which is
   better backing than a toy repo. (WordPress stays out on the merits.)
12. **Not claimed, pending confirmation:** *Web performance* — defensible from this repo (scroll
   timelines keeping JS off the scroll path, IntersectionObserver replacing scroll handlers,
   `width`/`height` on every image, zero runtime dependencies) but with no numbers and no
   professional evidence behind it. *GitLab CI* — the `flashcards` README mentions GitLab Pages,
   which may be template residue. Both left out rather than asserted.
13. **`pearpages.com` and `perepages.com` both appear on the PDF**, one letter apart — the blog and
    this CV. Both are correct and contextually labelled (contact block vs. the `Writing` row), so
    nothing was changed, but it is a real mistyping risk and only Pere can decide whether to
    consolidate the domains.
14. **The time-axis ticks were wrong twice over** — *fixed.* `axisTicks` used
    `Math.ceil(startYear / step) * step`, which rounded a 2007 career start up to 2010; and the
    labels were laid out with `justify-content: space-between`, so they were evenly spaced rather
    than placed at the years they name. Together they put "2010" under a bar that begins in January
    2007. Ticks now carry their own `offset`, computed from the same `axisSpan()` the bars use, so
    labels and bars cannot drift apart again. The last label is `is-trailing`
    (`transform: translateX(-100%)`) because `.time-axis` clips the inline axis. Verified by
    measuring rather than eyeballing — it looked plausible for months.
15. **Hovering the current time-axis segment overrides its saffron** with `--accent`, because the
    hover rule follows `.is-current` in `TimeAxis.scss`. Pre-existing, cosmetic.
16. **`location: 'Barcelona'` repeats on all ten role cards**, plus the hero, About, contact and
    JSON-LD. Flagged during the audit and deliberately left alone: it is information, the
    repetition is quiet, and removing it would leave `Role.location` dead in the data.
17. **This branch does not deploy.** `deploy.yml` triggers on `master` only, and the repo sits on
    `new-branding`. Nothing committed since 11 Aug 2026 — the whole rebrand, and now this audit —
    has reached perepages.com. Merge to `master` or change the trigger.
