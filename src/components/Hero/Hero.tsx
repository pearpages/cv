import { profile, roles } from '../../data/cv';
import { careerSpan } from '../../lib/derive';
import './Hero.scss';

/**
 * Act I — the poster.
 *
 * With the profile photo gone, the wordmark is the identity anchor: the name
 * set monumentally, its width axis driven by scroll position. The document
 * scrolls over the top of it.
 */
export function Hero() {
  const { years, startYear } = careerSpan(roles);

  return (
    <header className="hero">
      <div className="hero__inner">
        {/* The words are block-level, so the text content concatenates to
            "PerePagesSoms". Name the heading explicitly rather than relying
            on a screen reader to infer the breaks. */}
        <h1 className="hero__wordmark" aria-label={profile.name}>
          {profile.wordmark.map((word) => (
            <span className="hero__word" key={word} aria-hidden="true">
              {word}
            </span>
          ))}
        </h1>

        {/* A single rule under the name, carrying the hard facts across the
            full measure — it anchors the wordmark rather than letting it
            float in the left half of the screen. */}
        <div className="hero__meta">
          <p className="hero__headline">{profile.headline}</p>
          <p className="hero__facts mono">
            <span>{years} years</span>
            <span aria-hidden="true">/</span>
            <span>since {startYear}</span>
            <span aria-hidden="true">/</span>
            <span>{profile.location}</span>
          </p>
        </div>
      </div>

      <div className="hero__cue" aria-hidden="true">
        <span className="hero__cue-label">Scroll</span>
        <span className="hero__cue-line" />
      </div>
    </header>
  );
}
