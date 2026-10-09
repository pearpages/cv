# Decisions

Architecture Decision Records for the CV. Each ADR in `docs/adr/` records one choice, its
context and its trade-off. The rules that follow from them are in
[principles.md](principles.md).

New ADR: copy the format below, take the next number, and add a line here. An accepted ADR
is not edited; reversing it means a new ADR whose status says `Supersedes NNNN`, and the old
one's status becomes `Superseded by NNNN`. ADRs are proposed to the user before they are
accepted.

| # | Decision | Status | Date |
|---|---|---|---|
| [0001](docs/adr/0001-project-knowledge-files.md) | Project knowledge lives in principles, architecture, decisions, tasks and security | Accepted | 2026-10-09 |
| [0002](docs/adr/0002-no-css-framework-colour-from-pulp.md) | No CSS framework; colour from pulp, the rest the site's own | Accepted | 2026-10-09 |
| [0003](docs/adr/0003-two-acts-typographic-identity.md) | Two acts of load-bearing typography; the wordmark replaces the photo | Accepted | 2026-10-09 |
| [0004](docs/adr/0004-skills-are-keyword-surface-not-proof.md) | The Skills section is keyword surface, not proof | Accepted | 2026-10-09 |
| [0005](docs/adr/0005-two-way-skills-gate.md) | The skills gate runs in both directions | Accepted | 2026-10-09 |
| [0006](docs/adr/0006-paper-edition-separate-html-document.md) | The paper edition is a separate one-page HTML document rendered by Chromium | Accepted | 2026-10-09 |
| [0007](docs/adr/0007-site-printing-disabled.md) | Printing the site is disabled; the PDF download is unadvertised | Accepted | 2026-10-09 |
| [0008](docs/adr/0008-writing-is-hand-picked.md) | Writing shows hand-picked posts and a snapshot count, not a feed | Accepted | 2026-10-09 |
| [0009](docs/adr/0009-theme-follows-os-until-chosen.md) | The theme follows the OS until the reader chooses; pulp resolves the scheme | Accepted | 2026-10-09 |
| [0010](docs/adr/0010-deploy-on-version-tags.md) | Deploy only on version tags, through a Pages workflow | Accepted | 2026-10-09 |

## Format

```md
# NNNN. Title

- **Date:** YYYY-MM-DD
- **Status:** Proposed | Accepted | Superseded by NNNN

## Context
What forces the choice.

## Decision
What we do.

## Consequences
What gets better (+) and what it costs (−).
```
