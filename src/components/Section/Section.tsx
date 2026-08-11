import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  /** Optional right-aligned counter, e.g. '5 roles'. */
  count?: string;
  children: ReactNode;
}

/**
 * Every section shares one head: title, hairline, optional count. The rule
 * running between them is what keeps the document reading as one system
 * rather than a stack of cards.
 */
export function Section({ id, title, count, children }: SectionProps) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="section__head">
        <h2 className="section__title" id={`${id}-title`}>
          {title}
        </h2>
        <span className="section__rule" aria-hidden="true" />
        {count && <span className="section__count">{count}</span>}
      </div>
      {children}
    </section>
  );
}
