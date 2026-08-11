/**
 * The paper edition of perepages.com — one A4 side.
 *
 * Content comes from `src/data/print.ts`, the editorial cut. Nothing is
 * authored here; this file is structure only.
 *
 * `data-oneline` marks text that must not wrap. `scripts/build-pdf.mjs`
 * measures every one of them in the real print layout and fails the build if
 * any occupies more than one line box. Guessing at character counts is what
 * broke the two previous designs — this is the machine checking instead.
 */

import { printModel as m } from '../data/print';

export function Cv() {
  return (
    <article className="cv">
      {/* Flush left, not centred, and with no logo. A mark competes with the
          name for the single moment of attention the page gets. */}
      <header className="cv__masthead">
        <h1 className="cv__name">{m.name}</h1>
        <p className="cv__headline">{m.headline}</p>
        <ul className="cv__contact">
          {m.contact.map((c) => (
            <li className="cv__contact-item" key={c.url} data-oneline>
              <a href={c.url}>{c.display}</a>
            </li>
          ))}
          <li className="cv__contact-item" data-oneline>
            {m.location}
          </li>
        </ul>
      </header>

      <p className="cv__summary">{m.summary}</p>

      {/* Experience leads: the argument comes before the index. */}
      <section className="cv__section">
        <h2 className="cv__section-title">Experience</h2>
        {m.tenures.map((t) => (
          <article className="role" key={t.employer}>
            {/* Dates sit at the end of the employer line rather than in a
                margin rail. The rail cost 40mm of every line, which is what
                made everything wrap. */}
            <div className="role__head">
              <h3 className="role__employer" data-oneline>
                {t.employer}
              </h3>
              <span className="role__dates" data-oneline>
                {t.range}
              </span>
            </div>
            <p className="role__title" data-oneline>
              {t.title}
            </p>
            {/* Empty for employers whose highlights already say it — an empty
                <p> would still take its margin. */}
            {t.note && <p className="role__note">{t.note}</p>}
            {t.highlights.length > 0 && (
              <ul className="role__highlights">
                {t.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </section>

      <section className="cv__section">
        <h2 className="cv__section-title">Skills</h2>
        <dl className="rows">
          {m.skills.map((s) => (
            <div className="rows__row" key={s.name}>
              <dt className="rows__label" data-oneline>
                {s.name}
              </dt>
              <dd className="rows__value" data-oneline>
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="cv__section">
        <h2 className="cv__section-title">Selected work</h2>
        <ul className="work">
          {m.projects.map((p) => (
            // The separators are real characters, not CSS margins. Margins
            // leave no word boundary in the text layer, so extraction ran
            // "Modals@pearpages/modalsaccessible modal system…" together.
            <li className="work__item" key={p.name} data-oneline>
              <a className="work__name" href={p.url}>
                {p.name}
              </a>
              {p.packageName && <span className="work__package"> {p.packageName}</span>}
              <span className="work__blurb"> — {p.blurb}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Writing, community, education, languages and references as single
          lines, in the same shape as Skills. Each was a section of its own in
          an earlier draft and none of them earned one. */}
      <section className="cv__section">
        <h2 className="cv__section-title">Also</h2>
        <dl className="rows">
          {m.also.map((a) => (
            <div className="rows__row" key={a.name}>
              <dt className="rows__label" data-oneline>
                {a.name}
              </dt>
              <dd className="rows__value" data-oneline>
                {a.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </article>
  );
}
