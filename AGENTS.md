# cv

Pere Pages Soms' CV, served at the apex of [perepages.com](https://perepages.com). A React 19 +
TypeScript + Vite + Sass single page (the site, "two acts" of load-bearing typography) and a
separately designed one-page A4 PDF at `/cv.pdf`, both generated from one typed data file,
`src/data/cv.ts`. It deploys to GitHub Pages from `vX.Y.Z` tags only. Its readers are recruiters
and hiring managers, and the ATS parsers in front of them.

## Project documents — read before working

| File | Holds |
|---|---|
| [principles.md](principles.md) | The rules every change must follow |
| [architecture.md](architecture.md) | How the project is built: the two acts, data, the PDF, theme, deploy |
| [decisions.md](decisions.md) | Index of ADRs in `docs/adr/`: why each choice was made |
| [tasks.md](tasks.md) | Open work (including the facts only Pere has) and the dated log of what was done |
| [security.md](security.md) | Threat surface, secrets, dependency policy, how to report a vulnerability |

[README.md](README.md) is the user-facing entry point.

## Working rules

1. **Read `principles.md` before changing code or docs.** If a change would break a
   principle, stop and ask; don't work around it.
2. **Every change updates `tasks.md`**: tick or add Open items, and add a dated line at the
   top of Done.
3. **A structural or behavioural change updates `architecture.md` in the same commit**, and
   the README too when users can see it.
4. **A choice between real alternatives** (API shape, dependency, convention, process) gets
   a new ADR in `docs/adr/` plus a line in `decisions.md`. Propose it to the user before
   marking it Accepted. Never edit an accepted ADR; supersede it with a new one.
5. **Anything touching auth, secrets, input handling or dependencies is checked against
   `security.md`**, and updates it when the surface changes.
6. **At the end of a session, outcomes go to those files, not here.** This file keeps only
   how to work and pointers — never a session log.
7. Confirm before anything outward-facing: pushes, releases, publishing, deploys. On this repo a
   pushed `vX.Y.Z` tag *is* a deploy.
8. **Nothing in `cv.ts` is invented.** If a fact cannot be sourced, leave a `TODO` in the data and
   ask Pere (P1).

## Development commands

- `nvm use` — Node 22, from `.nvmrc`.
- `npm run dev` — dev server on http://localhost:5173 (`/print.html` previews the PDF page).
- `npm run typecheck` — `tsc --noEmit`; also gates the deploy.
- `npm run check:skills` — the two-way skills gate; also runs first in `npm run build`.
- `npm run build` — skills gate, Vite build into `dist/`, then renders `dist/cv.pdf` and runs
  the five PDF gates.
- `npm run pdf` — renders the PDF alone (also writes the gitignored `public/cv.pdf`).
- `npm run preview` — serves the built output.
- `npm test -- --run` — if tests are ever added. Never bare `npm test`: it watches.
- Release (outward-facing — confirm first):
  `npm version patch|minor|major && git push --follow-tags`.

## Pitfalls that have bitten before

- **White screen / every asset 404s** → `base` set to `/cv/` → keep `base: '/'` in
  `vite.config.ts`; the site is on the apex.
- **Hero width animation does nothing** → Archivo imported from its default entrypoint (weight
  axis only) → import `@fontsource-variable/archivo/wdth.css`.
- **PDF triples in size, text is drawn not set** → a `@fontsource-variable/*` font reached the
  print page; Chrome emits Type 3 → static `@fontsource/*` only. The build asserts it.
- **The one-line checker passes a real wrap** → `getClientRects()` on a block returns 1 rect;
  per-child rects at different font sizes sit at different `top`s on one line; and `.cv` laid out
  at browser width, not `170mm` → measure a `Range`, merge overlapping rects into bands, keep
  `.cv { width: 170mm }`. See architecture.md › *The paper edition*.
- **PDF text extraction runs words together** (`Modals@pearpages/modalsaccessible…`) → separators
  made with CSS margins → use real characters.
- **A tag pushed but nothing deployed** → lightweight tag; `--follow-tags` only carries annotated
  ones → `npm version`, or `git tag -a`.
- **Manual re-deploy skipped** → `workflow_dispatch` run from a branch → pick the tag.
- **Tag run fails at the deploy step with the build green** → the `github-pages` environment's
  policy doesn't allow `v*.*.*` tags. Inspect with
  `gh api repos/pearpages/cv/environments/github-pages/deployment-branch-policies`.
- **Every visitor becomes pinned to one scheme** → `data-scheme` stamped on mount → leave it
  absent until the reader chooses.
- **Scheme toggle stops working** → something here declared `color-scheme`; unlayered, it beats
  pulp's layered rule → never declare it in this repo.
- **Pages source still says `master` `/docs`** → vestigial under `build_type: "workflow"` → do not
  "fix" it back.
