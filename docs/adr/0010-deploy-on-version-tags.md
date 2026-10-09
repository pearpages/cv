# 0010. Deploy only on version tags, through a Pages workflow

- **Date:** 2026-10-09 (recorded; decided Sep 2026)
- **Status:** Accepted

## Context

Until 7 Sep 2026 Pages served the legacy *branch `master`, path `/docs`* setup, `deploy.yml` had
never run, and `master` still held the 2017 webpack site. Pushing `master` publishing directly
gave no release boundary.

## Decision

- Pages runs on `build_type: "workflow"`; nothing built is committed.
- Only a `vX.Y.Z` tag deploys: `npm version …` then `git push --follow-tags`. The workflow fails
  (never skips) on a tag not on `master`, so green always means published.
- The `github-pages` environment allows tags `v*.*.*` only. Pre-2026 tags were deleted; the
  version line restarts at `v2.0.0`.

## Consequences

+ A deploy is a deliberate, versioned act; `master` can move freely.
− Two repo settings that are not visible in the tree must stay aligned with the workflow.
