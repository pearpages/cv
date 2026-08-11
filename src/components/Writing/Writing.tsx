import { writing } from '../../data/cv';
import { ArrowUpRightIcon } from '../icons';
import { Section } from '../Section/Section';
import './Writing.scss';

/**
 * The blog earns a section rather than a link in the contact grid: it is the
 * only live evidence behind the AI-tooling and "I write code daily" claims in
 * the summary, and it is the most current thing on the page.
 */
export function Writing() {
  return (
    <Section
      id="writing"
      title="Writing"
      count={`${writing.postCount}+ posts since ${writing.since}`}
    >
      <div className="writing">
        <div className="writing__intro">
          <p className="writing__description">{writing.description}</p>

          <ul className="tag-list writing__topics">
            {writing.topics.map((topic) => (
              <li className="tag" key={topic}>
                {topic}
              </li>
            ))}
          </ul>

          <a
            className="link writing__home"
            href={writing.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {writing.url.replace('https://', '')}
          </a>
        </div>

        <div className="writing__selected">
          <h3 className="label">Selected posts</h3>
          <ul className="writing__list">
            {writing.selected.map((post) => (
              <li key={post.url}>
                <a
                  className="writing__post"
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.title}
                  <ArrowUpRightIcon className="writing__post-icon" width={13} height={13} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
