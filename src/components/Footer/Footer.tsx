import { profile } from '../../data/cv';
import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <p className="footer__mark">{profile.name}</p>

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
    </footer>
  );
}
