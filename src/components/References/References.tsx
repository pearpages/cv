import { employers, references } from '../../data/cv';
import { Section } from '../Section/Section';
import './References.scss';

const employerName = (id: string) => employers.find((e) => e.id === id)?.name ?? id;

export function References() {
  return (
    <Section id="references" title="References" count={`${references.length} colleagues`}>
      <ul className="references">
        {references.map((reference) => (
          <li className="reference" key={reference.id} id={`reference-${reference.id}`}>
            {/* figure/blockquote/figcaption is the pattern for a quote with an
                attribution. A <footer> here would sit outside any sectioning
                content and expose a second contentinfo landmark per quote. */}
            <figure>
              <blockquote className="reference__quote">
                {reference.quote.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </blockquote>

              <figcaption className="reference__author">
                <p className="reference__name">
                  <a
                    className="link"
                    href={reference.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {reference.name}
                  </a>
                </p>
                <p className="reference__title">{reference.title}</p>
                <p className="reference__context label">
                  Worked together at {employerName(reference.employer)}
                </p>
                {/* A paper copy needs the address spelled out. */}
                <p className="reference__url print-only mono">{reference.linkedin}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
