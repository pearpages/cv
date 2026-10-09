# 0007. Printing the site is disabled; the PDF download is unadvertised

- **Date:** 2026-10-09 (recorded; decided in 2026)
- **Status:** Accepted

## Context

`_print.scss` used to be a ⌘P courtesy: hero collapsed to a masthead, ink on white, link targets
inline. That produced a second, worse paper document competing with `cv.pdf`. A second,
uncoordinated `@media print` block in `References.scss` had also survived unnoticed.

## Decision

- `@media print` hides `body > *` and prints one quiet line, `perepages.com/cv.pdf`.
- Exactly one `@media print` block on the site, in `_print.scss`.
- The nav's **Download CV** anchor and its `.nav__print` rule are **commented out, not deleted**;
  `.print-only` markup and `no-print` are kept inert. `cv.pdf` still builds, gates and deploys.

## Consequences

+ One paper edition, not two.
+ Restoring is an uncomment, not a rewrite.
− Inert classes and parked code stay in the tree and must be explained (architecture.md).
− The PDF is reachable only by those holding the URL.
