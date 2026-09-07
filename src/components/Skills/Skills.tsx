import { projects, roles, skillGroups, writing } from '../../data/cv';
import { skillSource } from '../../lib/derive';
import { Section } from '../Section/Section';
import './Skills.scss';

/**
 * Grouped, not ranked — and deliberately not a record of everything ever
 * touched. This section has two jobs: be found, and point somewhere. The
 * proving belongs to Projects and Writing, which carry evidence a stranger
 * can check.
 *
 * So each skill links to the section that backs it rather than carrying a
 * derived "4 roles · 2015→now" line. That line was self-reported on both
 * sides — the same weakness that retired the percentage bars — and it
 * misfired hardest on the strongest claims, dating CSS to 2016 while giving
 * Jira a citation. The link cannot overstate what it points at.
 *
 * There is no count in the heading. "52 technologies" advertised the padding
 * rather than making a claim.
 */
const LABELS: Record<string, string> = {
  projects: 'See projects',
  writing: 'See writing',
  experience: 'See experience',
};

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.name}>
            <h3 className="skill-group__name label">{group.name}</h3>
            <ul className="skill-group__list">
              {group.skills.map((skill) => {
                const source = skillSource(skill, roles, projects, writing.topics);
                return (
                  <li className="skill" key={skill}>
                    {source ? (
                      <a
                        className="skill__name skill__name--linked"
                        href={`#${source}`}
                        aria-label={`${skill} — ${LABELS[source]}`}
                      >
                        {skill}
                      </a>
                    ) : (
                      <span className="skill__name">{skill}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
