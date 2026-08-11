import { languages, profile, projects, roles, writing } from '../../data/cv';
import { careerSpan } from '../../lib/derive';
import { Section } from '../Section/Section';
import './About.scss';

export function About() {
  const { years } = careerSpan(roles);

  /* Counts the projects with a public repo, not every project — one of them
     is a product whose source is closed, and calling that open source would
     be a lie the reader can check. */
  const openSource = projects.filter((project) => project.repo).length;

  const facts = [
    { label: 'Experience', value: `${years} years` },
    { label: 'Based in', value: profile.location },
    { label: 'Focus', value: 'Frontend architecture, React, TypeScript, Angular' },
    { label: 'Open source', value: `${openSource} published projects` },
    {
      label: 'Writing',
      value: `${writing.postCount}+ posts since ${writing.since}`,
    },
  ];

  return (
    <Section id="about" title="About">
      <div className="about">
        <div className="about__prose prose">
          {profile.summary.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <dl className="about__facts">
          {facts.map((fact) => (
            <div className="about__fact" key={fact.label}>
              <dt className="label">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}

          <div className="about__fact">
            <dt className="label">Languages</dt>
            <dd>
              <ul className="about__languages">
                {languages.map((language) => (
                  <li key={language.name}>
                    <span className="about__language-name">{language.name}</span>
                    <span className="about__language-level">{language.level}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
