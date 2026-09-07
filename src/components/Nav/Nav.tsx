import { useEffect, useRef, useState } from 'react';
import { profile, sections } from '../../data/cv';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useTheme } from '../../hooks/useTheme';
import { MoonIcon, SunIcon } from '../icons';
import './Nav.scss';

const SECTION_IDS = sections.map((section) => section.id);

export function Nav() {
  const sentinel = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const { theme, toggle } = useTheme();

  // The nav appears once the document has covered the hero. A sentinel at
  // the top of the page beats measuring scroll offsets on every frame.
  useEffect(() => {
    const element = sentinel.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setStuck(!entry?.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinel} className="nav__sentinel" aria-hidden="true" />
      <nav className={`nav no-print${stuck ? ' is-stuck' : ''}`} aria-label="Sections">
        <div className="nav__inner shell">
          {/* The mark carries the family identity through Act II, where the
              hero is no longer on screen. It supplements the name rather
              than replacing it — until the viewport is too narrow for both,
              where the mark alone stays as the way back to the top. */}
          <a className="nav__mark" href="#top">
            <img
              className="nav__mark-logo"
              src="/media/pearpages-mark.png"
              alt=""
              width={256}
              height={256}
            />
            <span className="nav__mark-name">{profile.name}</span>
          </a>

          <ul className="nav__links">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  className={`nav__link${active === section.id ? ' is-active' : ''}`}
                  href={`#${section.id}`}
                  aria-current={active === section.id ? 'true' : undefined}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>

          {/* The only control on the page, so it stays as quiet as the links
              it sits beside.

              `aria-pressed` rather than an action label that changes ("Switch
              to dark theme"): a screen reader does not reliably re-announce a
              focused element's new name, so that version confirms the press
              only visually — which is no confirmation at all here. The pressed
              state is announced for free. The icon therefore shows the
              *current* state to agree with it; mixing the two axes is the
              failure mode. `title` carries the action for everyone else.

              It is out of reach during Act I, since the nav is hidden until
              the document covers the hero. That costs nothing: the hero is
              ultramarine in both schemes, so there is nothing to toggle while
              it is on screen. */}
          <button
            className="nav__theme"
            type="button"
            onClick={toggle}
            aria-label="Dark theme"
            aria-pressed={theme === 'dark'}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
          </button>

          {/* Parked. The paper edition is still built by `npm run pdf` and
              still deploys to /cv.pdf — it is just no longer advertised here.
              Uncomment this and the matching `.nav__print` rule in Nav.scss to
              restore it.

              Not `window.print()`. The paper edition is a separately designed
              one-page document rendered from the same data (`src/print/`),
              served from the site root — not this page reflowed onto A4.

          <a className="nav__print" href="/cv.pdf" download="pere-pages-soms-cv.pdf">
            Download CV
          </a>
          */}
        </div>
      </nav>
    </>
  );
}
