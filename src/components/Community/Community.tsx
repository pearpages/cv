import { community } from '../../data/cv';
import { ArrowUpRightIcon } from '../icons';
import { Section } from '../Section/Section';
import './Community.scss';

/**
 * Previously filed as a three-month "Contributor" job. Organising a
 * conference and a long-running meetup is a credential in its own right,
 * and reads as one here.
 */
export function Community() {
  return (
    <Section id="community" title="Community" count="Barcelona JavaScript">
      <ul className="community">
        {community.map((item) => (
          <li className="community-item" key={item.name}>
            <img
              className="community-item__logo"
              src={`/media/${item.logo}`}
              alt=""
              width={96}
              height={96}
              loading="lazy"
            />
            <div>
              <h3 className="community-item__name">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.name}
                  <ArrowUpRightIcon width={13} height={13} />
                </a>
              </h3>
              <p className="community-item__role label">{item.role}</p>
              <p className="community-item__description">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
