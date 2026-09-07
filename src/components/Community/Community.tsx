import { community } from '../../data/cv';
import { formatRange } from '../../lib/derive';
import { ArrowUpRightIcon } from '../icons';
import { Section } from '../Section/Section';
import './Community.scss';

/**
 * The three-month full-time stint is filed in Experience, where it belongs:
 * it closes a real gap between WeFitter and Blue Orange, and a reader
 * scanning dates should not have to come this far to find out what 2017 was.
 *
 * This section carries what outlasts those three months — organising a
 * conference and two long-running meetups is a standing credential, not a
 * job that ended in June 2017. AngularCamp therefore appears in both, and
 * the repetition is deliberate.
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
              <p className="community-item__role label">
                {item.role}
                {item.from && (
                  <span className="community-item__range mono">
                    {formatRange(item.from, item.to ?? item.from)}
                  </span>
                )}
              </p>
              <p className="community-item__description">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
