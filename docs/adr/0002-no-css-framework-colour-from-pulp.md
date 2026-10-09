# 0002. No CSS framework; colour from pulp, the rest the site's own

- **Date:** 2026-10-09 (recorded; decided in the 2026 rebrand)
- **Status:** Accepted

## Context

The 2017 site ran on Bootstrap and FontAwesome. The 2026 rebrand moved the site into the
pearpages family, which has a shared brand package, `@pearpages/pulp-tokens`.

## Decision

- No CSS framework and no icon font. Icons are inline SVG components in `src/components/icons/`;
  every component has a co-located `.scss`.
- Colour comes from pulp's **semantic** tokens only; never a hex in a component stylesheet and
  never a pulp primitive. Dark mode is pulp's `light-dark()` mechanism.
- Type, space, layout and motion stay the site's own in `src/styles/_tokens.scss` — the fluid
  `clamp()` scale and geometric space ramp are the CV's. So are the three colours pulp has no
  opinion about: `--ultramarine`, `--signal`/`--on-signal`, `--logo-chip`.

## Consequences

+ A brand change in pulp restyles the site without touching it; no framework weight.
+ The CV keeps its own typographic identity inside the family.
− Every component's styling is hand-written; primitives are off-limits even when convenient.
