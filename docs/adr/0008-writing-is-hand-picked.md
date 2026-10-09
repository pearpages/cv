# 0008. Writing shows hand-picked posts and a snapshot count, not a feed

- **Date:** 2026-10-09 (recorded; decided in 2026)
- **Status:** Accepted

## Context

The blog at `pearpages.com/blog` publishes `rss.xml`, so a build-time fetch was possible.

## Decision

`writing.selected` is three hand-picked exemplars and `writing.postCount` a hand-written
snapshot (78, 11 Aug 2026). No build-time fetch.

## Consequences

+ Deploys don't depend on another host being up; the CV shows the best, not the most recent.
− The count goes stale and needs revisiting by hand.
