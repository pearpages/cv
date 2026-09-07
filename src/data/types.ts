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
  /**
   * The month of the transition, not the last month worked — so a role's `to`
   * equals the next role's `from` where the two are contiguous. The time axis
   * draws segments between these values, and any other reading leaves a
   * one-month sliver of empty axis between consecutive jobs.
   *
   * Roles may **overlap**, and one pair does: `wefitter-lead` runs to
   * `2017-04` while `angularcamp-organiser` opens at `2017-03`, because the
   * community work started before the job ended. Nothing here assumes roles
   * are disjoint — but `timelineScale` draws every segment at the same
   * `inset-block-start`, so overlapping bars stack rather than nest. That is
   * fine for one month; a longer overlap would need the axis to lane them.
   */
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
  /**
   * Only where the dates are confirmed. AngularCamp carries them because the
   * March–June 2017 stretch is the one that explains a gap between two roles;
   * Angular Beers and CinemaJS ran longer than any range I can source, and
   * stay undated rather than be guessed at.
   */
  from?: YearMonth;
  to?: YearMonth | Present;
}

export interface ShowcaseProject {
  name: string;
  description: string;
  /** Published package name, when there is one. */
  packageName?: string;
  /** Live demo. */
  url?: string;
  /**
   * Public source, when there is any. Optional because not every shipped
   * thing is open source — a product keeps its repo private, and the About
   * sidebar counts the ones that have this rather than all projects.
   */
  repo?: string;
  stack: string[];
}

/**
 * The blog. Not a project — a sustained practice, and the only live evidence
 * behind the AI-tooling claims in the summary.
 */
export interface Writing {
  url: string;
  /** What the blog is, in one line. */
  description: string;
  /** Year of the first post. */
  since: number;
  /** Snapshot — see the note in `cv.ts`. Only ever undercounts. */
  postCount: number;
  topics: string[];
  /** Chosen exemplars, not the latest N. */
  selected: { title: string; url: string }[];
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
