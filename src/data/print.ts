/**
 * The paper edition — one page.
 *
 * `cv.ts` is the full record; one A4 side is not, and the gap between them is
 * the whole job of this module. It is the *editorial cut*, written down and
 * type-checked rather than left to emerge from whatever happened to overflow.
 * `pdf/cv.typ` renders exactly what this exports and nothing else.
 *
 * One page is a hard constraint, and it is the reason the page can breathe:
 * every line here has to beat another line to be on it. What loses is not
 * lost — the site holds all of it, and this document links there.
 *
 * Two rules, both inherited from `cv.ts`:
 *
 * 1. Nothing may be invented. Every string is either lifted verbatim from
 *    `cv.ts` or is a *shortening* of one — same claim, fewer words.
 * 2. Screen and paper share content, not layout. Do not prune `cv.ts` to make
 *    this file's job easier.
 *
 * The one structural departure from `cv.ts`: multi-entry tenures are merged
 * back into a single employer block. Four `ocado-*` entries read as four jobs,
 * which is the risk noted in CLAUDE.md's outstanding item 2 — and it makes the
 * PDF immune to the unresolved transition dates in the TODO at the top of
 * `cv.ts`.
 */

import { community, education, profile, projects, references, roles, writing } from './cv';
import { yearOf } from '../lib/derive';
import type { Present, YearMonth } from './types';

export interface PrintTenure {
  employer: string;
  title: string;
  /** Compact year range for the margin rail, e.g. '2019 — now'. */
  range: string;
  /** One line of context, or the teams within a merged tenure. */
  note: string;
  /** At most two, and only where the employer earns them. */
  highlights: string[];
}

export interface PrintProject {
  name: string;
  /** npm package name, when the project is published. */
  packageName?: string;
  /** A single clause. Anything longer belongs on the site. */
  blurb: string;
  url: string;
}

export interface PrintModel {
  name: string;
  headline: string;
  location: string;
  summary: string;
  contact: { display: string; url: string }[];
  skills: { name: string; value: string }[];
  tenures: PrintTenure[];
  projects: PrintProject[];
  also: { name: string; value: string }[];
}

const role = (id: string) => {
  const found = roles.find((r) => r.id === id);
  if (!found) throw new Error(`print.ts references a role that no longer exists: ${id}`);
  return found;
};

const project = (name: string) => {
  const found = projects.find((p) => p.name === name);
  if (!found) throw new Error(`print.ts references a project that no longer exists: ${name}`);
  return found;
};

const degree = education.find((e) => e.credential.startsWith('Bachelor'));
if (!degree) throw new Error('print.ts expects a bachelor’s degree in `education`');

/** '2019 — now' rather than the site's 'Mar 2019 — Present'; the rail is narrow. */
const years = (from: YearMonth, to: YearMonth | Present) =>
  `${yearOf(from)} — ${to === 'present' ? 'now' : yearOf(to)}`;

const blueOrange = role('blue-orange-lead');
const weFitter = role('wefitter-lead');
const tokioFrontend = role('tokio-marine-frontend');
const tokioAnalyst = role('tokio-marine-analyst');
const putput = role('putput-web');

export const printModel: PrintModel = {
  name: profile.name,
  headline: profile.headline,
  location: profile.location,

  /** Three paragraphs down to two sentences. */
  summary:
    'Frontend architect and engineering lead. Web applications since 2007, Ocado Technology since 2019 — the React and TypeScript frontend of a multi-brand grocery platform. Three times I have introduced a framework to a company and then taught it.',

  /**
   * Stack Overflow is cut — four fit on a line and it is the weakest of the
   * five. The site here is `perepages.com`, not the blog: the blog already
   * gets named in the Writing row below, and the CV site is where a reader
   * goes for everything this page had to leave out.
   */
  contact: [
    { display: 'hello@pearpages.com', url: 'mailto:hello@pearpages.com' },
    { display: 'perepages.com', url: 'https://perepages.com' },
    { display: 'github.com/pearpages', url: 'https://github.com/pearpages' },
    { display: 'linkedin.com/in/pearpages', url: 'https://www.linkedin.com/in/pearpages/' },
  ],

  /**
   * Seven groups to four, and set as prose rather than as a list. The site's
   * derived evidence lines ('4 roles · 2015→now') are dropped: on one page the
   * experience above *is* the evidence, and repeating a technology beside
   * every role was the single biggest source of noise in the two-page draft.
   */
  skills: [
    // Every value is kept short enough to sit on one line at this measure. A
    // value that wraps strands a word or two on a line of its own and makes
    // the whole block look ragged, so splitting a row beats letting one run
    // long.
    //
    // Astro is absent deliberately: the two Astro sites did not survive the
    // cut to three projects, so on *this* page it would be a skill with
    // nothing behind it — the empty-claim trap. The site still lists it.
    //
    // HTML is gone for the same reason it left the site: nobody has ever
    // filtered a candidate on it, and at this measure a word that wins nothing
    // is a word taken off a line that could have carried Accessibility.
    { name: 'Languages', value: 'TypeScript, JavaScript, CSS, SCSS' },
    { name: 'Frameworks', value: 'React, Angular, Next.js' },
    {
      name: 'AI-assisted development',
      value: 'Claude, Claude Code, Copilot, prompt and agent design',
    },
    { name: 'Interface', value: 'Accessibility, design systems, Storybook, i18n' },
    { name: 'Build & testing', value: 'Vite, Webpack, Git, GitHub Actions, Playwright' },
    // The old 'Practice' row — frontend architecture, technical leadership,
    // mentoring — is gone, and adding the Interface row above is what forced
    // the choice: six rows ran the page to a second side. Losing it is the
    // right trade twice over. A comma-separated list is the weakest way to
    // claim leadership, and the summary two inches up already claims it in a
    // sentence that argues for itself: three frameworks introduced and taught.
    // The Ocado highlights carry the rest.
  ],

  tenures: [
    {
      employer: 'Ocado Technology',
      title: 'Senior Software Engineer',
      range: years('2019-03', 'present'),
      note: 'Payments · Subscriptions · Multibranding frontend · Communications',
      highlights: [
        'Joined as the office’s first frontend engineer and made the case for React to a backend team.',
        'Work with AI tooling as part of the daily loop, and share that practice with the team.',
      ],
    },
    {
      employer: 'We Are Blue Orange',
      title: blueOrange.title,
      range: years(blueOrange.from, blueOrange.to),
      note: '',
      highlights: [
        'Led the migration from MVP to a modern Angular architecture, with RxJS and NgRx.',
        'Set the frontend standards the team worked to, and built Atlas, its internal CMS.',
      ],
    },
    {
      employer: 'WeFitter',
      title: weFitter.title,
      range: years(weFitter.from, weFitter.to),
      note: 'Led frontend for a fitness and corporate-wellness platform — Ionic app and Angular 2 backoffice.',
      highlights: [],
    },
    {
      employer: 'Tokio Marine HCC',
      title: 'Front End Developer / Analyst Programmer',
      range: years(tokioAnalyst.from, tokioFrontend.to),
      note: 'Introduced AngularJS as the company framework; before that, built the reporting platform the business ran on.',
      highlights: [],
    },
    {
      employer: 'Putput Comunicacions',
      title: putput.title,
      range: years(putput.from, putput.to),
      note: 'Full-stack PHP and Drupal for cultural and professional institutions in Barcelona.',
      highlights: [],
    },
  ],

  /**
   * Four of twelve, one clause each. The two npm packages carry the
   * open-source claim; Bitepals carries Next.js and shipping a product;
   * Futbol Manager carries the architecture, which nothing else here shows.
   */
  projects: [
    // Each of these has to sit on one line beside its name, so the blurbs are
    // clauses, not sentences.
    {
      name: 'Bitepals',
      blurb: 'finding places to eat through people you trust, not ratings',
      url: project('Bitepals').url!,
    },
    {
      name: 'Modals',
      packageName: '@pearpages/modals',
      blurb: 'accessible modal system for React',
      url: project('Modals').url!,
    },
    {
      name: 'Heatmap',
      packageName: '@pearpages/heatmap',
      blurb: 'GitHub-style contribution heatmaps',
      url: project('Heatmap').url!,
    },
    {
      name: 'Futbol Manager',
      blurb: 'statistically resolved football management, pure domain core',
      url: project('Futbol Manager').url!,
    },
  ],

  /**
   * The tail of the CV, as single lines. AngularCamp's dates are now confirmed
   * (March–June 2017, full time between WeFitter and Blue Orange) and the site
   * shows them; the original March–May source data was right after all. They
   * stay off this line for space — Angular Beers and CinemaJS remain genuinely
   * undated, and three names plus one range does not fit in one row.
   */
  also: [
    {
      name: 'Writing',
      value: `${writing.postCount}+ posts since ${writing.since} at pearpages.com, on frontend and AI`,
    },
    { name: 'Community', value: `Organiser — ${community.map((c) => c.name).join(', ')}` },
    {
      // The degree only. Adding the Erasmus year pushed this row onto a second
      // line and left "Sheffield" orphaned there by itself; the site carries
      // both.
      name: 'Education',
      value: `BSc Computer Science, ${degree.institution}`,
    },
    {
      name: 'Languages',
      value: 'Catalan and Spanish — native. English — fluent.',
    },
    {
      name: 'References',
      value: `${references.length} on LinkedIn, from managers, CTOs and colleagues`,
    },
  ],
};
