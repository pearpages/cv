import { projects } from '../../data/cv';
import { ArrowUpRightIcon, GitHubIcon } from '../icons';
import { Section } from '../Section/Section';
import './Projects.scss';

export function Projects() {
  return (
    <Section id="projects" title="Projects" count={`${projects.length} shown`}>
      <ul className="projects">
        {projects.map((project) => (
          <li className="project" key={project.name}>
            <div className="project__head">
              <h3 className="project__name">{project.name}</h3>
              {project.packageName && (
                <span className="project__package mono" title="Published to npm">
                  {project.packageName}
                </span>
              )}
            </div>

            <p className="project__description">{project.description}</p>

            <ul className="tag-list project__stack">
              {project.stack.map((item) => (
                <li className="tag" key={item}>
                  {item}
                </li>
              ))}
            </ul>

            <p className="project__links">
              {project.url && (
                <a
                  className="project__link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowUpRightIcon width={14} height={14} />
                  <span>Live demo</span>
                </a>
              )}
              {/* Not everything shipped is open source — a product keeps its
                  repo private, and an unguarded link would be dead. */}
              {project.repo && (
                <a
                  className="project__link"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon width={14} height={14} />
                  <span>Source</span>
                </a>
              )}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
