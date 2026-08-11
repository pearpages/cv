import { roles } from '../../data/cv';
import { Section } from '../Section/Section';
import { Role } from './Role';
import { TimeAxis } from './TimeAxis';

export function Experience() {
  return (
    <Section id="experience" title="Experience" count={`${roles.length} roles`}>
      <TimeAxis />
      <div className="experience">
        {roles.map((role) => (
          <Role role={role} key={role.id} />
        ))}
      </div>
    </Section>
  );
}
