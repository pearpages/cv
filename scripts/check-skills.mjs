/**
 * Checks `skillGroups` against the evidence, in BOTH directions.
 *
 * This is what the derived "4 roles · 2015→now" line became. That line was
 * meant to answer "says who?", but it answered it badly: it counted role
 * *rows*, so splitting the Ocado tenure into four made it read "Git · 7
 * roles"; it read only role stacks, so it dated CSS to 2016 on a site written
 * in Sass; and both sides of the cross-reference were self-reported, which
 * gave it the form of a citation without the substance.
 *
 * The useful half was never the display — it was the discipline of not being
 * able to claim a skill with nothing behind it. That is an authoring
 * constraint, so it belongs here, where it costs the reader nothing and
 * cannot go stale on the page.
 *
 * FORWARD — every claimed skill must have backing.
 *   Backing may come from a role `stack`, a project `stack`, or
 *   `writing.topics`. Writing counts because four published posts on agent
 *   design are better evidence than a `stack` array typed by the same hand.
 *
 * REVERSE — every technology with backing must be claimed, or excluded on
 * the record. This half was missing for a whole revision, and the cost was
 * exactly what you would predict: `Canvas API`, `Deno`, `Chrome Extensions
 * MV3`, `PWA`, `Domain modelling` and `npm publishing` sat in project stacks
 * for months, rendering as card tags, never claimed as skills — swept out
 * alongside the legacy PHP-era items because nothing forced the decision to
 * be written down. A one-directional gate proves the claims are honest and
 * says nothing about whether they are complete.
 *
 * So dropping a technology now costs a line in DELIBERATELY_UNCLAIMED. That
 * is the point: the exclusions below are all defensible, and none of them
 * were defended anywhere until the reverse check demanded it.
 */

import { createServer } from 'vite';

/**
 * Technologies that appear in the data but are deliberately not claimed as
 * skills. The reason is not decoration — it is the thing that stops the next
 * edit from quietly dropping something modern along with the legacy items.
 */
const DELIBERATELY_UNCLAIMED = {
  // Legacy: true, visible in Experience, and actively mis-sorting for the
  // roles this CV is aimed at.
  Bootstrap: 'legacy; a CSS framework on a no-framework CV',
  Drupal: 'legacy; mis-sorts into CMS work',
  'Zend Framework': 'legacy PHP; superseded twice over',
  'Semantic UI': 'legacy; unmaintained',
  Apache: 'legacy; infrastructure, not the discipline',
  Subversion: 'legacy; Git is the claim',

  // Retired tools. True in 2017, and saying so today dates the knowledge.
  Protractor: 'retired 2023; dates the testing knowledge to 2017',
  Jasmine: 'superseded by Vitest; same',
  Codelyzer: 'deprecated with TSLint',

  // Ceremony rather than skill — the category the named tools already carry.
  Jira: 'a ticket tracker is not a skill',
  Prettier: 'a formatter with one meaningful option',
  BEM: 'a naming convention; folded into CSS',
  'Angular CLI': 'subsumed by Angular',

  // Duplicates.
  Sass: 'duplicate of SCSS',
};

const server = await createServer({ logLevel: 'error', server: { middlewareMode: true } });

try {
  const { skillGroups, roles, projects, writing } = await server.ssrLoadModule('/src/data/cv.ts');
  const { skillSource } = await server.ssrLoadModule('/src/lib/derive.ts');

  const claimed = new Map();
  for (const group of skillGroups) {
    for (const skill of group.skills) claimed.set(skill, group.name);
  }

  // FORWARD
  const unbacked = [];
  for (const [skill, group] of claimed) {
    if (!skillSource(skill, roles, projects, writing.topics)) unbacked.push(`${group} → ${skill}`);
  }

  // REVERSE
  const evidenced = new Set();
  for (const role of roles) for (const item of role.stack) evidenced.add(item);
  for (const project of projects) for (const item of project.stack) evidenced.add(item);

  const unclaimed = [...evidenced]
    .filter((item) => !claimed.has(item) && !(item in DELIBERATELY_UNCLAIMED))
    .sort((a, b) => a.localeCompare(b));

  // An exclusion for something no longer in the data is stale, and a stale
  // exclusion is how the list stops describing anything.
  const stale = Object.keys(DELIBERATELY_UNCLAIMED)
    .filter((item) => !evidenced.has(item))
    .sort((a, b) => a.localeCompare(b));

  if (unbacked.length > 0) {
    console.error(
      `\n${unbacked.length} skill${unbacked.length > 1 ? 's have' : ' has'} no backing in any role stack, project stack or writing topic:\n`,
    );
    for (const entry of unbacked) console.error(`  ${entry}`);
    console.error(
      '\nEither add it to the stack of the role or project that used it, or\n' +
        'remove it. A skill nothing supports is an empty claim — see the note\n' +
        'above skillGroups in src/data/cv.ts.\n',
    );
  }

  if (unclaimed.length > 0) {
    console.error(
      `\n${unclaimed.length} technolog${unclaimed.length > 1 ? 'ies are' : 'y is'} used in the data but never claimed as a skill:\n`,
    );
    for (const entry of unclaimed) console.error(`  ${entry}`);
    console.error(
      '\nAdd it to skillGroups, or add it to DELIBERATELY_UNCLAIMED in this\n' +
        'script with the reason. Dropping something modern by accident is what\n' +
        'this check exists to prevent — writing the reason down is the price.\n',
    );
  }

  if (stale.length > 0) {
    console.error(`\n${stale.length} exclusion${stale.length > 1 ? 's are' : ' is'} stale — no longer in any stack:\n`);
    for (const entry of stale) console.error(`  ${entry}`);
    console.error('\nRemove them from DELIBERATELY_UNCLAIMED.\n');
  }

  if (unbacked.length || unclaimed.length || stale.length) {
    process.exitCode = 1;
  } else {
    console.log(
      `skills: ${claimed.size} claimed, all backed · ` +
        `${evidenced.size} technologies in the data, ` +
        `${Object.keys(DELIBERATELY_UNCLAIMED).length} excluded on the record`,
    );
  }
} finally {
  await server.close();
}
