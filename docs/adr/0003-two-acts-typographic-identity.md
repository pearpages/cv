# 0003. Two acts of load-bearing typography; the wordmark replaces the photo

- **Date:** 2026-10-09 (recorded; decided in the 2026 rebrand)
- **Status:** Accepted

## Context

The previous CV led with a profile photo. The rebrand wanted the identity carried by type.

## Decision

- The profile photo is removed. The **wordmark** is the identity anchor and the one bold element;
  everything else stays quiet.
- **Act I:** a fixed, full-viewport ultramarine hero with the name at ~18vw, its Archivo width
  axis driven by a CSS scroll timeline (no JS on the scroll path), static under reduced motion.
- **Act II:** the document scrolls over it on a quiet reading surface where ultramarine is
  demoted to accent. Saffron is rationed to about three uses.
- The pearpages mark appears three times, always small — a maker's stamp, not a co-star.

## Consequences

+ A distinctive first screen with no image weight, and type proves the identity.
− Depends on scroll-driven animation support (guarded by `@supports`) and on importing
  Archivo's `wdth` entrypoint, which fails silently if wrong.
− The nav and theme toggle are hidden during Act I.
