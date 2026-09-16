import { Credit } from '@pearpages/credit/react';
import { profile } from '../../data/cv';
import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <p className="footer__mark">{profile.name}</p>

        <div className="footer__meta">
          {/* The signature every site in the family carries, from the shared
              package so the mark, wording and destination cannot drift. It is
              a network credit, not an authorship claim: it says this page
              belongs with the others. `div`, not the default `footer`: this
              already sits inside one, and a nested footer is a second
              contentinfo landmark. */}
          <Credit as="div" />

          <p className="footer__note">
            Built with React, TypeScript and Vite. Source at{' '}
            <a
              className="link"
              href="https://github.com/pearpages/cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/pearpages/cv
            </a>
            .
          </p>

          <p className="footer__note print-only">
            This is the printed version. The site lives at https://perepages.com
          </p>
        </div>
      </div>
    </footer>
  );
}
