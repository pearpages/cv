# 0005. The skills gate runs in both directions

- **Date:** 2026-10-09 (recorded; decided during the 2026 content audit)
- **Status:** Accepted

## Context

The first `scripts/check-skills.mjs` checked only claims → backing. That proves the list is
honest, not complete. `Canvas API`, `Deno`, `Chrome Extensions MV3`, `PWA`, `Domain modelling` and
`npm publishing` had sat in project `stack` arrays for months, rendering as card tags and never
claimed, because nothing forced the decision to be written down.

## Decision

The gate, first in `npm run build` and as `npm run check:skills`, runs three checks:

1. Every skill in `skillGroups` is backed by a role `stack`, a project `stack`, or
   `writing.topics`.
2. Every technology in any `stack` is claimed, or listed in `DELIBERATELY_UNCLAIMED` with a
   one-line reason.
3. No exclusion names something absent from every stack.

## Consequences

+ Dropping a technology costs a line of justification; decisions already made get enforced (adding
  `Blog` put Docusaurus in a stack and the gate demanded its exclusion be written down).
+ Removing a project correctly breaks the build for the skills it held up.
− Some things are demonstrably true but in no `stack` (found by sweeping the repo and public
  record); they need a backing entry such as `This CV` or `Podcast`, whose stacks are long on
  purpose.
