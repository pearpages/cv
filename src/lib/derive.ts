import {
  PRESENT,
  type Present,
  type Role,
  type ShowcaseProject,
  type SkillGroup,
  type YearMonth,
} from '../data/types';

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

/**
 * Where a skill's proof lives. `'projects'` and `'writing'` point at
 * something a stranger can check — an installable package, a public repo, a
 * post with a date on it. `'experience'` is the weakest of the three and
 * exists so the reader can still find the claim in context.
 */
export type SkillSource = 'projects' | 'writing' | 'experience';

const normalise = (value: string) => value.toLowerCase().replace(/[.\s/-]/g, '');

/**
 * The section a skill can be proved from, or `null` when nothing backs it.
 *
 * This replaced a derived "4 roles · 2015→now" line. That line counted role
 * *rows*, so splitting one tenure into four inflated it, and it read only
 * role stacks, so it dated CSS to 2016 on a site written in Sass. Worse, both
 * sides of the cross-reference were self-reported: it wore the costume of a
 * citation while asserting the same thing twice.
 *
 * A link is the honest version of the same intent. It cannot overstate what
 * it points at, and the reader can go and look.
 *
 * Externally checkable evidence wins: a package or a repo beats a post, and
 * both beat a line in the work history.
 */
export function skillSource(
  skill: string,
  roles: Role[],
  projects: ShowcaseProject[],
  writingTopics: readonly string[],
): SkillSource | null {
  const target = normalise(skill);
  const has = (items: readonly string[]) => items.some((item) => normalise(item) === target);

  if (projects.some((project) => has(project.stack))) return 'projects';
  if (has(writingTopics)) return 'writing';
  if (roles.some((role) => has(role.stack))) return 'experience';
  return null;
}

/**
 * Every skill the page actually claims, for the `knowsAbout` array in the
 * Person schema — injected at build time by the plugin in `vite.config.ts`.
 *
 * It reads `skillGroups` rather than the union of every role and project
 * stack, so the structured data says exactly what the page says and no more.
 * The hand-maintained version drifted both ways: it claimed accessibility the
 * page never claimed, and omitted every AI term the page did. Deriving it is
 * the only way that stays fixed.
 *
 * The legacy technologies in the older role stacks — Drupal, Zend Framework,
 * Semantic UI — are deliberately not here. They are true, they are visible in
 * Experience, and putting them in a machine-readable index of what this person
 * does now would pull the wrong searches.
 */
export function claimedSkills(groups: SkillGroup[]): string[] {
  const seen = new Set<string>();
  for (const group of groups) for (const skill of group.skills) seen.add(skill);
  return [...seen].sort((a, b) => a.localeCompare(b));
}
