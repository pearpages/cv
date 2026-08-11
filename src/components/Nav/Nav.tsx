import { useEffect, useRef, useState } from 'react';
import { profile, sections } from '../../data/cv';
import { useActiveSection } from '../../hooks/useActiveSection';
import './Nav.scss';

const SECTION_IDS = sections.map((section) => section.id);

export function Nav() {
  const sentinel = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);
  const active = useActiveSection(SECTION_IDS);

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
          <a className="nav__mark" href="#top">
            {profile.name}
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

          <button className="nav__print" type="button" onClick={() => window.print()}>
            Print
          </button>
        </div>
      </nav>
    </>
  );
}
