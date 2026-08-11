import { employers, references } from '../../data/cv';
import type { Role as RoleType } from '../../data/types';
import { PRESENT } from '../../data/types';
import { formatDuration, formatRange } from '../../lib/derive';
import { ArrowUpRightIcon } from '../icons';
import './Role.scss';

interface RoleProps {
  role: RoleType;
}

export function Role({ role }: RoleProps) {
  const employer = employers.find((item) => item.id === role.employer);
  const cited = references.filter((reference) => role.references.includes(reference.id));
  const current = role.to === PRESENT;

  return (
    <article className="role" id={role.id} aria-labelledby={`${role.id}-title`}>
      <div className="role__rail">
        <p className="role__dates mono">{formatRange(role.from, role.to)}</p>
        <p className="role__duration mono">{formatDuration(role.from, role.to)}</p>
        {current && <p className="role__current mono">Current</p>}
        {employer && (
          <img
            className="role__logo"
            src={`/media/${employer.logo}`}
            alt=""
            width={120}
            height={40}
            loading="lazy"
          />
        )}
      </div>

      <div className="role__body">
        <h3 className="role__title" id={`${role.id}-title`}>
          {role.title}
        </h3>

        <p className="role__employer">
          {employer ? (
            <a className="link" href={employer.url} target="_blank" rel="noopener noreferrer">
              {employer.name}
            </a>
          ) : (
            role.employer
          )}
          <span className="role__location"> · {role.location}</span>
        </p>

        <p className="role__summary">{role.summary}</p>

        <ul className="role__highlights">
          {role.highlights.map((highlight) => (
            <li key={highlight.slice(0, 32)}>{highlight}</li>
          ))}
        </ul>

        <ul className="tag-list role__stack">
          {role.stack.map((item) => (
            <li className="tag" key={item}>
              {item}
            </li>
          ))}
        </ul>

        {role.projects.length > 0 && (
          <div className="role__projects">
            <h4 className="label">Projects</h4>
            <ul className="role__project-list">
              {role.projects.map((project) => (
                <li key={project.name}>
                  {project.url ? (
                    <a
                      className="role__project-link"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{project.name}</span>
                      <ArrowUpRightIcon className="role__project-icon" width={13} height={13} />
                    </a>
                  ) : (
                    <span className="role__project-name">{project.name}</span>
                  )}
                  {project.description && (
                    <span className="role__project-note"> — {project.description}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {cited.length > 0 && (
          <p className="role__references">
            <span className="label">Referenced by</span>{' '}
            {cited.map((reference, index) => (
              <span key={reference.id}>
                {index > 0 && ', '}
                <a className="link" href={`#reference-${reference.id}`}>
                  {reference.name}
                </a>
              </span>
            ))}
          </p>
        )}
      </div>
    </article>
  );
}
