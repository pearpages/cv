# 0006. The paper edition is a separate one-page HTML document rendered by Chromium

- **Date:** 2026-10-09 (recorded; decided in 2026)
- **Status:** Accepted

## Context

`cv.pdf` was built in Typst first, twice, and both were rejected. Typst produced a better page
model and real optical sizing, but the recurring defect was always the same: something wrapped
that was meant to fit on one line, because character widths were estimated rather than measured.
A two-page draft also existed and was wrong: everything fitted, so nothing was cut, and the page
filled with 9pt type and no air.

## Decision

- The PDF is **not the site printed**: `print.html` → `src/print/` with its own typography (Source
  Serif 4 + Inter, static fonts), rendered by headless Chromium in `scripts/build-pdf.mjs`. A DOM
  can be asked how wide something is; Pere maintains it and writes CSS for a living.
- **One A4 page** is a design constraint. If cramped, cut content, never shrink type.
- `src/data/print.ts` is the editorial cut, derived from `cv.ts`; it survived the move off Typst.
- No logo, no left date rail.
- The build fails on: more than one page, a `data-oneline` wrap, page-box overflow, a Type 3
  font, a non-A4 MediaBox.

## Consequences

+ Wraps are measured, not estimated; a broken PDF cannot ship.
+ Screen and paper share content, never design, so each can be right for its medium.
− Playwright/Chromium is a build dependency, installed and cached in CI.
− Measuring correctly needed three non-obvious mechanics (see architecture.md).
