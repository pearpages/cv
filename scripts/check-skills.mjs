/**
 * Fails the build when a skill in `skillGroups` has nothing behind it.
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
 * Backing may come from a role stack, a project stack, or `writing.topics`.
 * Writing counts because four published posts on agent design are better
 * evidence than a `stack` array typed by the same hand.
 */

import { createServer } from 'vite';

const server = await createServer({ logLevel: 'error', server: { middlewareMode: true } });

try {
  const { skillGroups, roles, projects, writing } = await server.ssrLoadModule('/src/data/cv.ts');
  const { skillSource } = await server.ssrLoadModule('/src/lib/derive.ts');

  const unbacked = [];
  for (const group of skillGroups) {
    for (const skill of group.skills) {
      if (!skillSource(skill, roles, projects, writing.topics)) {
        unbacked.push(`${group.name} → ${skill}`);
      }
    }
  }

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
    process.exitCode = 1;
  } else {
    const total = skillGroups.reduce((sum, group) => sum + group.skills.length, 0);
    console.log(`skills: ${total} claimed, ${total} backed`);
  }
} finally {
  await server.close();
}
