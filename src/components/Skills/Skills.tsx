import { projects, roles, skillGroups } from '../../data/cv';
import { formatEvidence, skillEvidence } from '../../lib/derive';
import { Section } from '../Section/Section';
import './Skills.scss';

/**
 * Grouped, not ranked.
 *
 * The old site scored these out of 100 — a number the reader has no way to
 * verify and every reason to discount. What replaces it is evidence derived
 * from the roles themselves: where a thing was used, and when. A skill with
 * no recorded use simply shows no line.
 */
export function Skills() {
  const total = skillGroups.reduce((sum, group) => sum + group.skills.length, 0);

  return (
    <Section id="skills" title="Skills" count={`${total} technologies`}>
      <div className="skills">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.name}>
            <h3 className="skill-group__name label">{group.name}</h3>
            <ul className="skill-group__list">
              {group.skills.map((skill) => {
                const evidence = formatEvidence(skillEvidence(skill, roles, projects));
                return (
                  <li className="skill" key={skill}>
                    <span className="skill__name">{skill}</span>
                    {evidence && <span className="skill__evidence mono">{evidence}</span>}
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
