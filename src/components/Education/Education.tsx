import { education } from '../../data/cv';
import { ArrowUpRightIcon } from '../icons';
import { Section } from '../Section/Section';
import './Education.scss';

export function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="education">
        {education.map((item) => (
          <li className="education-item" key={item.institution}>
            <img
              className="education-item__logo"
              src={`/media/${item.logo}`}
              alt=""
              width={96}
              height={96}
              loading="lazy"
            />
            <div>
              <h3 className="education-item__institution">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.institution}
                  <ArrowUpRightIcon width={13} height={13} />
                </a>
              </h3>
              <p className="education-item__credential">{item.credential}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
