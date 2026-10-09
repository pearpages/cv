# 0004. The Skills section is keyword surface, not proof

- **Date:** 2026-10-09 (recorded; decided during the 2026 content audit)
- **Status:** Accepted

## Context

Skills first rendered as self-scored percentage bars, then as a derived evidence line
("React · 4 roles · 2019→now", `formatEvidence`). Both failed:

- Self-scored numbers read as a negative signal and carry no ATS weight.
- The evidence line counted role **rows**, so splitting the Ocado tenure into four made it read
  `Git · 7 roles` — a figure that moved when `cv.ts` was refactored with no fact changing.
- It read **only role stacks**, which are thin for recent roles, so it dated `CSS` to 2016 and
  `SCSS` to 2019 on a site hand-rolled in Sass.
- It **contradicted the page**: `Agile · 4 roles · 2019→now` sat above a testimonial describing an
  Agile loop at Tokio Marine in 2011.
- It was **asymmetric**: tools go easily into a `stack`, capabilities don't, so `Jira` carried a
  citation while `Technical leadership` rendered bare.
- It was **not third-party evidence**: both sides of the cross-reference were self-reported.

## Decision

- Skills are keyword surface and navigation, tuned to the roles being targeted. Proving is
  delegated to Projects and Writing, which carry evidence a stranger can check.
- No percentage bars and no derived figure. Each skill **links** to the section that backs it
  (`skillSource()` → `'projects' | 'writing' | 'experience'`, external evidence first); the link
  affordance appears only on hover/focus. The heading carries no count.
- The authoring constraint — no claim without backing — moves to a **build gate** that never
  renders ([ADR-0005](0005-two-way-skills-gate.md)).
- Keyword surface does not mean maximise keywords: items that mis-sort into another market
  (WordPress, Drupal, Docusaurus), date the knowledge (Protractor, Jasmine) or win nothing (HTML,
  SQL, Jira, generic "Unit testing") are cut. Leadership claims leave the chips for prose.

## Consequences

+ A link cannot overstate what it points at; nothing moves when the data is refactored.
+ Capabilities and tools are treated alike.
− The section asserts nothing on its own; it depends on Projects and Writing being strong.
