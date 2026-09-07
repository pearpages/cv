import { employers, roles } from '../../data/cv';
import { PRESENT } from '../../data/types';
import { axisTicks, formatDuration, timelineScale } from '../../lib/derive';
import './TimeAxis.scss';

const employerName = (id: string) => employers.find((e) => e.id === id)?.name ?? id;

/**
 * The whole career on one proportional axis.
 *
 * Roles are laid out by real duration, so four years at Tokio Marine reads
 * as four times eight months at WeFitter. Length carries information here —
 * that is the only reason the device earns its place.
 */
export function TimeAxis() {
  const entries = timelineScale(roles);
  const ticks = axisTicks(roles);

  return (
    <figure className="time-axis">
      <figcaption className="time-axis__caption label">Career at a glance</figcaption>

      <ul className="time-axis__track">
        {entries.map(({ role, offset, length }) => (
          <li
            className={
              `time-axis__segment` +
              (role.to === PRESENT ? ' is-current' : '') +
              /* Tooltips are nowrap and anchored to the segment's start edge,
                 so the ones in the last third run off the axis. Flip them to
                 hang from the end edge instead — derived from the layout, no
                 measuring. */
              (offset + length > 66 ? ' is-trailing' : '')
            }
            key={role.id}
            style={{ '--offset': `${offset}%`, '--length': `${length}%` } as React.CSSProperties}
          >
            <a href={`#${role.id}`}>
              <span className="time-axis__bar" aria-hidden="true" />
              <span className="time-axis__tooltip">
                {employerName(role.employer)} — {formatDuration(role.from, role.to)}
              </span>
              <span className="time-axis__sr">
                {role.title} at {employerName(role.employer)},{' '}
                {formatDuration(role.from, role.to)}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <ul className="time-axis__ticks" aria-hidden="true">
        {ticks.map(({ year, offset }) => (
          <li
            className={
              `time-axis__tick mono` +
              /* Same trick as the tooltips above: a label anchored by its left
                 edge runs past the end of the track near 100%, and
                 `.time-axis` clips the inline axis. Anchor the last one by its
                 right edge instead. */
              (offset > 85 ? ' is-trailing' : '')
            }
            key={year}
            style={{ '--offset': `${offset}%` } as React.CSSProperties}
          >
            {year}
          </li>
        ))}
      </ul>
    </figure>
  );
}
