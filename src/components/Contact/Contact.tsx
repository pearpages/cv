import { links, profile } from '../../data/cv';
import { LinkIcon } from '../icons';
import { Section } from '../Section/Section';
import './Contact.scss';

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="contact">
        <p className="contact__pitch">
          Open to senior frontend and engineering-lead roles, in Barcelona or remote.
          The fastest way to reach me is email.
        </p>

        <ul className="contact__links">
          {links.map((link) => {
            const external = link.kind !== 'email' && link.kind !== 'location';
            return (
              <li key={link.kind}>
                <a
                  className="contact__link"
                  href={link.url}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <LinkIcon kind={link.kind} className="contact__icon" width={18} height={18} />
                  <span className="contact__label label">{link.label}</span>
                  <span className="contact__value">{link.display}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <p className="contact__location print-only">{profile.location}</p>
      </div>
    </Section>
  );
}
