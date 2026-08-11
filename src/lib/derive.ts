import { PRESENT, type Present, type Role, type ShowcaseProject, type YearMonth } from '../data/types';

/**
 * Everything here is a pure function of the data in `src/data/cv.ts`.
 *
 * The previous implementation (`services/experience-mapper.js`) resolved
 * these joins by mutating the imported JSON in place and memoising at module
 * scope, which double-applied on hot reload. Nothing here writes.
 */

const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

/** Months since year 0 — a total order over 'YYYY-MM' that survives arithmetic. */
export function toMonths(value: YearMonth | Present, now = new Date()): number {
  if (value === PRESENT) return now.getFullYear() * 12 + now.getMonth();
  const [year, month] = value.split('-').map(Number);
  return (year ?? 0) * 12 + ((month ?? 1) - 1);
}

export function yearOf(value: YearMonth | Present, now = new Date()): number {
  if (value === PRESENT) return now.getFullYear();
  return Number(value.split('-')[0]);
}

export function formatMonth(value: YearMonth | Present): string {
  if (value === PRESENT) return 'Present';
  const [year, month] = value.split('-').map(Number);
  return `${MONTH_NAMES[(month ?? 1) - 1]} ${year}`;
}

export function formatRange(from: YearMonth, to: YearMonth | Present): string {
  return `${formatMonth(from)} — ${formatMonth(to)}`;
}

/** '4 yrs 2 mos', '8 mos'. */
export function formatDuration(from: YearMonth, to: YearMonth | Present, now = new Date()): string {
  const months = Math.max(1, toMonths(to, now) - toMonths(from, now));
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (rest) parts.push(`${rest} mo${rest > 1 ? 's' : ''}`);
  return parts.join(' ');
}

export interface CareerSpan {
  startYear: number;
  endYear: number;
  years: number;
}

export function careerSpan(roles: Role[], now = new Date()): CareerSpan {
  const starts = roles.map((role) => toMonths(role.from, now));
  const earliest = Math.min(...starts);
  const latest = Math.max(...roles.map((role) => toMonths(role.to, now)));
  return {
    startYear: Math.min(...roles.map((role) => yearOf(role.from, now))),
    endYear: Math.max(...roles.map((role) => yearOf(role.to, now))),
    years: Math.floor((latest - earliest) / 12),
  };
}

export interface AxisEntry {
  role: Role;
  /** Percentage from the start of the career to this role's start. */
  offset: number;
  /** Percentage of the career this role occupies. */
  length: number;
}

/**
 * Lays the roles out on a single proportional axis, so a four-year tenure
 * reads as four times the length of a one-year one. Length means something.
 */
export function timelineScale(roles: Role[], now = new Date()): AxisEntry[] {
  const starts = roles.map((role) => toMonths(role.from, now));
  const ends = roles.map((role) => toMonths(role.to, now));
  const first = Math.min(...starts);
  const last = Math.max(...ends);
  const total = Math.max(1, last - first);

  return roles.map((role, index) => ({
    role,
    offset: (((starts[index] ?? first) - first) / total) * 100,
    length: (Math.max(1, (ends[index] ?? first) - (starts[index] ?? first)) / total) * 100,
  }));
}

/** Decade ticks covering the career, for labelling the axis. */
export function axisTicks(roles: Role[], step = 5, now = new Date()): number[] {
  const { startYear, endYear } = careerSpan(roles, now);
  const first = Math.ceil(startYear / step) * step;
  const ticks: number[] = [];
  for (let year = first; year <= endYear; year += step) ticks.push(year);
  return ticks;
}

export interface SkillEvidence {
  roleCount: number;
  projectCount: number;
  fromYear?: number;
  toYear?: number;
  /** True when the most recent use is a role that has not ended. */
  current: boolean;
}

const normalise = (value: string) => value.toLowerCase().replace(/[.\s/-]/g, '');

/**
 * Where a skill was actually used, computed from the roles and projects
 * rather than asserted. A skill with no evidence renders without a line —
 * which is the honest outcome, not a gap to paper over.
 */
export function skillEvidence(
  skill: string,
  roles: Role[],
  projects: ShowcaseProject[],
  now = new Date(),
): SkillEvidence {
  const target = normalise(skill);
  const matched = roles.filter((role) => role.stack.some((item) => normalise(item) === target));
  const projectCount = projects.filter((project) =>
    project.stack.some((item) => normalise(item) === target),
  ).length;

  if (matched.length === 0) {
    return { roleCount: 0, projectCount, current: false };
  }

  return {
    roleCount: matched.length,
    projectCount,
    fromYear: Math.min(...matched.map((role) => yearOf(role.from, now))),
    toYear: Math.max(...matched.map((role) => yearOf(role.to, now))),
    current: matched.some((role) => role.to === PRESENT),
  };
}

/** '4 roles · 2015→now', '3 projects', or '' when there is nothing to claim. */
export function formatEvidence(evidence: SkillEvidence): string {
  if (evidence.roleCount > 0) {
    const span = evidence.current
      ? `${evidence.fromYear}→now`
      : `${evidence.fromYear}→${evidence.toYear}`;
    const roles = `${evidence.roleCount} role${evidence.roleCount > 1 ? 's' : ''}`;
    return `${roles} · ${span}`;
  }
  if (evidence.projectCount > 0) {
    return `${evidence.projectCount} project${evidence.projectCount > 1 ? 's' : ''}`;
  }
  return '';
}

/** Every distinct technology named across the roles, for the Person schema. */
export function allTechnologies(roles: Role[], projects: ShowcaseProject[]): string[] {
  const seen = new Set<string>();
  for (const role of roles) for (const item of role.stack) seen.add(item);
  for (const project of projects) for (const item of project.stack) seen.add(item);
  return [...seen].sort((a, b) => a.localeCompare(b));
}
