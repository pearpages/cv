# 0009. The theme follows the OS until the reader chooses; pulp resolves the scheme

- **Date:** 2026-10-09 (recorded; decided in 2026)
- **Status:** Accepted

## Context

The site had its own dark block via a `dark-scheme` mixin, emitted twice, with a specificity trap
("the `[data-theme]` blocks must stay last"). pulp now resolves every colour as a `light-dark()`
pair from `data-scheme`.

## Decision

- `data-scheme` on `<html>` means an explicit choice and is absent until there is one, so
  `prefers-color-scheme` stays in charge with no JS.
- Scheme resolution lives in pulp; nothing here declares `color-scheme`.
- An inline classic script in `<head>`, below one JS-managed `theme-color` meta, applies a stored
  choice before the stylesheet loads.

## Consequences

+ No flash, no pinned visitors, no dark block to keep in step.
− Two copies of the theme hex values (`index.html`, `useTheme.ts`) must mirror pulp's tokens by
  hand; the manifest pins the light value.
