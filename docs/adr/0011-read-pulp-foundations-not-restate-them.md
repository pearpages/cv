# 0011. Read pulp's foundations instead of restating them

- **Date:** 2026-10-09
- **Status:** Proposed — would supersede the type/space/motion clause of 0002

## Context

ADR-0002 kept type, space, layout and motion as the site's own, and named `--ultramarine`,
`--signal`/`--on-signal` and `--logo-chip` as colours pulp "has no opinion about". Measured
against `@pearpages/pulp-tokens` 0.1.0, most of that was restated pulp, value for value: the
space ramp, both radii, the easing and two durations, the three typefaces, the floors of the type
scale, and the ultramarine, saffron, bone and white themselves, which pulp has as primitives.

Two costs followed. A brand change in pulp would not reach the site. And `--space-1`…`--space-8`
and `--radius-lg` shared names with pulp's, so the site's unlayered copies overrode pulp's
everywhere, inside pulp's own `IconButton` included — harmless only while the values matched.

## Decision

- `src/styles/_tokens.scss` reads pulp wherever pulp has the value: fonts from
  `--font-family-*`, type-scale floors from `--font-size-*`, `--radius` from `--radius-control`,
  `--ease`/`--dur-fast`/`--dur` from pulp's motion tokens. Font weights 500/600 and focus rings
  use `--font-weight-*` and `--focus-ring-*` directly.
- The site no longer declares `--space-1`…`--space-8` or `--radius-lg`; components use pulp's.
  `--space-9`/`--space-10` continue the ramp from `--space-unit`.
- `--ultramarine`, `--bone`, `--signal` and `--logo-chip` alias pulp **primitives**. These four
  must not move between schemes, which no semantic token guarantees. The exception is confined to
  `_tokens.scss`; components still use semantic tokens or the site's aliases only (P11).
- The site keeps what pulp has no equivalent for: the fluid growth of the type scale, `--text-2xs`,
  leading, tracking, `--space-9/10`, layout measures, `--dur-slow`, display weights (650/700/800),
  and `--on-signal`.

## Consequences

+ A change to pulp's brand reaches the site; no same-name override can shadow pulp's components.
+ What remains in `_tokens.scss` is exactly the site's own design, visible at a glance.
− The site now depends on four pulp primitive names; if pulp renames them, the hero breaks.
− Focus-ring offset moves from 3px to pulp's 2px.
