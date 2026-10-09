# Tasks

What's open and what's been done. Every change updates this file: tick or add an Open
item, and add a dated line at the top of **Done**.

## Open

Most of these need a fact only Pere has.

- [ ] **Ocado internal dates carry Pere's durations, not his months** — only the start (18 Mar 2019) is sourced; transitions `2020-03 → 2021-03`, `2022-01 → 2024-01`, `2024-01 → 2025-10` are rounded to his stated lengths (Communications ~2 years, Payments a year at most). `ocado-payments` ends in `PRESENT`, so it crosses two years in late 2027. See the TODO at the top of `cv.ts`.
- [ ] **Merge the four Ocado roles into one tenure on the site** (recommended) — four identical `Senior Software Engineer` headings make Experience read `9 roles` for six employers in nineteen years, which scans as job-hopping; `print.ts` already merges them, and merging dissolves the dates item above. Pere's call, since the split was his request.
- [ ] **Headline vs title** — "Frontend Architect & Engineering Lead" against `Senior Software Engineer` since 2019; pending Pere's confirmation.
- [ ] **No metrics anywhere** — not one number across ~40 highlights; source the brand count for the multibranding toolkit, casino brands for the Blue Orange gamification set, team sizes at Blue Orange and WeFitter. Biggest remaining quality gap.
- [ ] **WeFitter/AngularCamp overlap** — deliberate one-month overlap (`2016-10 → 2017-04` vs `2017-03 → 2017-06`); bars stack, not lane. A longer overlap would need real laning in `TimeAxis`.
- [ ] **One-month gap Blue Orange → Ocado** (`2019-02` / `2019-03`) — sourced; setting Blue Orange `to: '2019-03'` would close it, but ask Pere whether he had a month out first.
- [ ] **Angular Beers and CinemaJS are undated** — `CommunityRole.from`/`to` optional for that reason; AngularCamp is resolved (Mar–Jun 2017).
- [ ] **Every reference predates Ocado** — nine testimonials, newest 2019; needs one recent colleague.
- [ ] **Confirmed skills on inferred roles** (each has a `TODO` in `cv.ts`) — Storybook/Design systems → `ocado-multibranding`; Cypress/BDD → `ocado-subscriptions` + `ocado-multibranding` (BDD also `blue-orange-lead`); WebdriverIO/Page objects → `ocado-communications`. Only Playwright (`ocado-payments`) and Kanban (`blue-orange-lead`, `ocado-subscriptions`) are sourced to a team.
- [ ] **Ocado unit-testing layer is blank** — Jest is the obvious absence; Vitest and React Testing Library are backed only by personal projects. Ask. Also: plain Redux or Redux Toolkit at Ocado? Pere said "Redux"; not inferred past that.
- [ ] **Docker and Express unclaimed** — Pere confirmed Docker as professional; name the role and add it to that `stack` (better than backing it with the 2023 `fun-with-docker` sandbox). WordPress stays out on the merits.
- [ ] **Not claimed, pending confirmation** — *Web performance* (defensible from this repo, but no numbers or professional evidence); *GitLab CI* (the `flashcards` README mention may be template residue).
- [ ] **`pearpages.com` and `perepages.com` both appear on the PDF** — both correct and labelled, but one letter apart; Pere to decide whether to consolidate domains.
- [ ] **Hover on the current time-axis segment overrides its saffron** with `--accent` (hover rule follows `.is-current` in `TimeAxis.scss`). Cosmetic, pre-existing.
- [ ] **`location: 'Barcelona'` repeats on all ten role cards** — deliberately left: it is information, and removing it would leave `Role.location` dead.
- [ ] **Revisit snapshots** — `writing.postCount` (78, 11 Aug 2026) and the `ocado-payments` duration.

### Scaffold follow-ups

- [ ] **Dependency update policy** — no Dependabot or periodic `npm audit` configured — security.md › Dependencies.

## Done

- [x] 2026-10-09: Scaffolded project knowledge files — 7 files + 10 ADRs created, 5 fixed, 1 follow-up. CLAUDE.md is now a shim over AGENTS.md + principles.md; ADRs 0002–0010 accepted; license set to UNLICENSED.
- [x] 2026-09-07: `new-branding` fast-forwarded onto `master`, Pages moved to `build_type: "workflow"`, first `deploy.yml` run green; perepages.com serves the rebrand and `/cv.pdf` resolves.
- [x] 2026: Time-axis ticks fixed — `axisTicks` rounded a 2007 start up to 2010 and labels were spaced evenly; ticks now carry their own `offset` from `axisSpan()`, verified by measurement.
