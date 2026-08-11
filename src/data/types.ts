/**
 * The CV data model.
 *
 * Two shapes matter downstream:
 *  - `from`/`to` are ISO 'YYYY-MM', so durations are computable and the
 *    experience section can lay roles out on a proportional time axis.
 *  - `stack` is an array, not a comma-separated string, so skill evidence
 *    ("Angular — 4 roles, 2015→present") derives from the roles themselves
 *    instead of being duplicated by hand.
 */

/** ISO year-month, e.g. '2017-06'. */
export type YearMonth = string;

/** An end date that has not happened yet. */
export const PRESENT = 'present' as const;
export type Present = typeof PRESENT;

export type EmployerId = string;
export type ReferenceId = string;

export interface Employer {
  id: EmployerId;
  name: string;
  /** Filename under /media. */
  logo: string;
  url: string;
}

export interface Project {
  name: string;
  description?: string;
  url?: string;
}

export interface Role {
  id: string;
  from: YearMonth;
  to: YearMonth | Present;
  title: string;
  employer: EmployerId;
  location: string;
  /** One line: what the job was. */
  summary: string;
  /** What actually got done. Two to five, most significant first. */
  highlights: string[];
  stack: string[];
  projects: Project[];
  references: ReferenceId[];
}

export interface Reference {
  id: ReferenceId;
  name: string;
  title: string;
  linkedin: string;
  employer: EmployerId;
  /** Paragraphs of plain text — never HTML. */
  quote: string[];
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface Education {
  institution: string;
  credential: string;
  logo: string;
  url: string;
}

export interface CommunityRole {
  name: string;
  role: string;
  description: string;
  logo: string;
  url: string;
}

export interface ShowcaseProject {
  name: string;
  description: string;
  /** Published package name, when there is one. */
  packageName?: string;
  /** Live demo. */
  url?: string;
  repo: string;
  stack: string[];
}

export interface Language {
  name: string;
  level: string;
}

export type LinkKind =
  | 'email'
  | 'location'
  | 'github'
  | 'linkedin'
  | 'stackoverflow'
  | 'blog';

export interface Link {
  kind: LinkKind;
  label: string;
  /** What the reader sees. */
  display: string;
  url: string;
}

export interface Profile {
  name: string;
  /** Stacked one word per line in the hero wordmark. */
  wordmark: string[];
  headline: string;
  location: string;
  summary: string[];
  languages: Language[];
}

export interface Section {
  id: string;
  label: string;
}
