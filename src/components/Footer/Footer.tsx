import { profile } from '../../data/cv';
import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <p className="footer__mark">{profile.name}</p>

        <div className="footer__meta">
          {/* The signature every site in the family carries — same mark, same
              wording, same destination. It is a network credit, not an
              authorship claim: it says this page belongs with the others. */}
          <p className="footer__credit">
            <img
              className="footer__credit-icon"
              src="/media/pearpages-mark.png"
              alt=""
              width={256}
              height={256}
            />
            <span>
              Made by{' '}
              <a
                className="link"
                href="https://pearpages.com"
                target="_blank"
                rel="author noopener noreferrer"
              >
                pearpages
              </a>
            </span>
          </p>

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
