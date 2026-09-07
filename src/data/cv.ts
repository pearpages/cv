import type {
  CommunityRole,
  Education,
  Employer,
  Language,
  Link,
  Profile,
  Reference,
  Role,
  Section,
  ShowcaseProject,
  SkillGroup,
  Writing,
} from './types';
import { PRESENT } from './types';

/* ------------------------------------------------------------------ *
 * TODO — Ocado transition dates
 * The four `ocado-*` roles below are one tenure (joined 18 March 2019,
 * still there) split by team, as Pere asked. Only the *first* date is
 * sourced: 2019-03. The three internal transitions — Communications →
 * multibranding frontend team → Subscriptions → Payments — are estimates
 * read off the narrative ("after a company reorg…", "after a couple of
 * years…"). Replace them with the real months; the time axis and the
 * durations both derive from these.
 *
 * Per-team `stack` entries are likewise thin. React is sourced (Pere was
 * hired to introduce it); everything else beyond it needs confirming.
 * ------------------------------------------------------------------ */

export const profile: Profile = {
  name: 'Pere Pages Soms',
  wordmark: ['Pere', 'Pages', 'Soms'],
  headline: 'Frontend Architect & Engineering Lead',
  location: 'Barcelona, Spain',
  summary: [
    'Frontend architect and engineering lead, building production web applications since 2007 — at Ocado Technology since 2019, in Barcelona, on the React and TypeScript frontend of a multi-brand grocery ecommerce platform, and the decade before that in Angular. I have worked in retail, insurance, health and iGaming, in international cross-functional teams beside designers, business analysts and backend engineers.',
    'Three times I have been the person who introduced a framework and then taught it: AngularJS at Tokio Marine HCC, where I became the company reference for frontend; modern Angular at We Are Blue Orange; and React at Ocado, where I joined as the office’s first frontend engineer and made the case for it to a team of backend developers. Technical leadership, code review, mentoring and setting standards are as much of the job as the code is.',
    'I like simplicity, minimalism and quality. Code should be easy to understand, clean, consistent, testable, short and modular. I write code daily, publish open-source React components, work with AI tooling as part of the loop rather than beside it, and spent years organising the Barcelona JavaScript community.',
  ],
  languages: [
    { name: 'Catalan', level: 'Native' },
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'Fluent — professional working proficiency' },
  ],
};

export const sections: Section[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'community', label: 'Community' },
  { id: 'references', label: 'References' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const employers: Employer[] = [
  {
    id: 'ocado',
    name: 'Ocado Technology',
    logo: 'ocado.png',
    url: 'https://www.ocadogroup.com/',
  },
  {
    id: 'blue-orange',
    name: 'We Are Blue Orange',
    logo: 'weareblueorange.png',
    url: 'http://weareblueorange.com/',
  },
  {
    id: 'wefitter',
    name: 'WeFitter',
    logo: 'wefitter.png',
    url: 'https://www.wefitter.com/',
  },
  {
    id: 'angularcamp',
    name: 'AngularCamp Barcelona',
    logo: 'angularcamp-bcn.png',
    url: 'https://angularcamp.org/',
  },
  {
    id: 'tokio-marine',
    name: 'Tokio Marine HCC',
    logo: 'tokio-marine.png',
    url: 'https://www.tmhcc.com/global',
  },
  {
    id: 'putput',
    name: 'Putput Comunicacions',
    logo: 'putput.png',
    url: 'https://www.putput.cat/es/',
  },
];

export const roles: Role[] = [
  /**
   * The Payments entry carries the tenure-wide work — AI tooling, the
   * cross-team collaboration, the meetups, recruitment — because it is the
   * open role and that work is still going. It is not exclusive to Payments.
   */
  {
    id: 'ocado-payments',
    from: '2024-01',
    to: PRESENT,
    title: 'Senior Software Engineer',
    employer: 'ocado',
    location: 'Barcelona',
    summary:
      'Frontend engineering in the Payments vertical, alongside cross-team work with Platform and Analytics.',
    highlights: [
      'Collaborated beyond the team with Platform and Analytics, and built internal reporting tools used outside my own vertical.',
      'Worked with AI tooling as part of the daily loop — GitHub Copilot through to Claude Code — writing prompts and reusable agent skills, and sharing that practice with the team.',
      'Reviewed code, mentored engineers and took part in recruitment and technical interviewing.',
      'Helped organise the meetup events hosted at the Barcelona office.',
      'Kept investing in the wider ecosystem outside the day job — Next.js, Astro and the React projects listed below.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Redux',
      'JavaScript',
      'Playwright',
      'GitHub Copilot',
      'Claude',
      'Claude Code',
      'Prompt design',
      'Agent design',
      'Git',
      'Agile',
    ],
    projects: [
      { name: 'Payments', description: 'Frontend of the payments domain' },
      { name: 'Reporting tools', description: 'Internal tooling built for other teams' },
    ],
    references: [],
  },
  {
    id: 'ocado-subscriptions',
    from: '2022-01',
    to: '2024-01',
    title: 'Senior Software Engineer',
    employer: 'ocado',
    location: 'Barcelona',
    summary:
      'Followed the Subscriptions domain into a fully vertical team when the company reorganised.',
    highlights: [
      'Built and shipped the customer subscriptions product, embedded with backend, design and product in one vertical team.',
      'Carried the frontend of the domain through the reorganisation that split the horizontal frontend teams into vertical ones, without a break in delivery.',
    ],
    // Kanban is sourced — Pere named this team and Blue Orange specifically.
    // TODO: Cypress and BDD are placed here on inference, not on sourcing. He
    // said "Cypress in previous jobs" and "BDD in many jobs"; on this CV Ocado
    // is four jobs, and these are the React-era teams before the current one.
    // If either was actually pre-Ocado, move it.
    stack: [
      'React',
      'TypeScript',
      'Redux',
      'JavaScript',
      'Cypress',
      'BDD',
      'Git',
      'Agile',
      'Kanban',
    ],
    projects: [{ name: 'Subscriptions', description: 'Customer subscriptions product' }],
    references: [],
  },
  {
    id: 'ocado-multibranding',
    from: '2020-03',
    to: '2022-01',
    title: 'Senior Software Engineer',
    employer: 'ocado',
    location: 'Barcelona',
    summary:
      'Moved to a newly formed frontend team owning shared customer features across the multi-brand ecommerce toolkit.',
    highlights: [
      'Built and maintained settings, addresses, communications preferences and subscriptions — one frontend codebase serving several retail brands.',
      'Built the shared components these features were assembled from, so behaviour stayed consistent across brands instead of being reimplemented per team.',
    ],
    // TODO: Storybook and design-system work are confirmed as real, but the
    // role they belong to is not. They sit here because this is the tenure
    // that owned shared components across brands, which is the shape they
    // fit. Confirm before treating the placement as sourced.
    // TODO: Cypress and BDD likewise — see the note on ocado-subscriptions.
    stack: [
      'React',
      'TypeScript',
      'Redux',
      'JavaScript',
      'Design systems',
      'Storybook',
      'Cypress',
      'BDD',
      'Git',
      'Agile',
    ],
    projects: [
      {
        name: 'Ecommerce multibranding toolkit',
        description: 'Settings, addresses, communications and subscriptions across brands',
      },
    ],
    references: [],
  },
  {
    id: 'ocado-communications',
    from: '2019-03',
    to: '2020-03',
    title: 'Senior Software Engineer',
    employer: 'ocado',
    location: 'Barcelona',
    summary:
      'Joined as the Barcelona office’s first frontend engineer, to support the backend team and make the case for React.',
    highlights: [
      'Hired as the first dedicated frontend engineer in the office, working alongside backend engineers who had been carrying the client-side work themselves.',
      'Acted as the internal advocate for React — introducing it, teaching it and arguing for it in a room that had not used it.',
      'Owned the Communications team’s backoffice tooling for customer receipts and newsletters, spread across a pair of applications.',
    ],
    // TODO: WebdriverIO and the page-object pattern are confirmed as real but
    // undated. They sit on the earliest Ocado team because WebdriverIO driving
    // page objects is the older enterprise-QA shape and predates the Cypress
    // era above. Move them if that is wrong.
    stack: [
      'React',
      'JavaScript',
      'TypeScript',
      'Redux',
      'WebdriverIO',
      'Page objects',
      'Git',
      'Agile',
    ],
    projects: [
      { name: 'Receipts backoffice', description: 'Backoffice tooling for customer receipts' },
      { name: 'Newsletters backoffice', description: 'Backoffice tooling for newsletters' },
    ],
    references: [],
  },
  {
    id: 'blue-orange-lead',
    from: '2017-06',
    to: '2019-02',
    title: 'Senior Frontend Engineer / Team Lead',
    employer: 'blue-orange',
    location: 'Barcelona',
    summary:
      'Frontend lead on a multi-brand online casino platform, owning the Angular codebase end to end.',
    highlights: [
      'Led the migration from MVP to a modern Angular architecture, with RxJS and NgRx handling application state.',
      'Built the gamification feature set shipped across multiple casino brands.',
      'Integrated the Devcode payment system.',
      'Created Atlas, the internal CMS the team ran campaigns from.',
      'Set the frontend standards the team worked to — SCSS/BEM, Prettier, Codelyzer, and Jasmine and Protractor suites running on Jenkins.',
    ],
    // Kanban is sourced — Pere named this employer specifically. Scrum stays
    // alongside it: nineteen months is long enough to have run both.
    // TODO: BDD is inferred here, not sourced — see ocado-subscriptions.
    //
    // Redux starts here and runs through every role after it. Pere: "redux is
    // almost a standard and I started using it from We Are Blue Orange" — so
    // it sits on this role and on all four `ocado-*` entries, which is what
    // "started using from" means. It reads as one story rather than two,
    // because NgRx below *is* Redux for Angular: same architecture, and this
    // is where both begin.
    stack: [
      'Angular',
      'TypeScript',
      'RxJS',
      'NgRx',
      'Redux',
      'JavaScript',
      'SCSS',
      'BEM',
      'Webpack',
      'Angular CLI',
      'Jasmine',
      'Protractor',
      'BDD',
      'Jenkins',
      'Prettier',
      'Codelyzer',
      'Git',
      'Scrum',
      'Kanban',
      'Jira',
    ],
    projects: [
      { name: 'Karjala Kasino', url: 'https://www.karjalakasino.com/' },
      { name: 'Agent Spinner', url: 'https://www.agentspinner.com/' },
      { name: 'Devcode', description: 'Payment system integration' },
      { name: 'Atlas', description: 'Internal CMS' },
      { name: 'Adhoc Campaigns', description: 'Vanilla JavaScript' },
    ],
    references: ['eric-ruiz-franco', 'neil-azzopardi', 'jonah-ellinger', 'jonas-hoffmann'],
  },
  /**
   * Three months between two jobs, spent on the Barcelona JavaScript community.
   * Recovered from the pre-rebrand `data.json` (commit 032cc45), where it was
   * one "Contributor" entry with three co-employers — AngularCamp, Cinema JS
   * and Angular Beers. `Role` carries a single employer, so the conference is
   * the employer here and the other two ride along as projects, as they did
   * originally. `to` is 2017-06 by the transition-month rule on `Role.to`.
   */
  {
    id: 'angularcamp-organiser',
    from: '2017-03',
    to: '2017-06',
    title: 'Organiser',
    employer: 'angularcamp',
    location: 'Barcelona',
    summary:
      'Three months on the Barcelona JavaScript community, pro bono — picked up before WeFitter ended, and full time from April until Blue Orange began.',
    highlights: [
      'Organised AngularCamp Barcelona, the city’s Angular conference, and built the tooling that ran it.',
      'Ran the Angular Beers meetup and the CinemaJS talk screenings alongside it.',
      'Developed the community tools the three events shared.',
    ],
    stack: ['Angular', 'JavaScript'],
    projects: [
      {
        name: 'AngularCamp',
        description: 'Barcelona’s Angular conference',
        url: 'https://angularcamp.org/',
      },
      {
        name: 'Angular Beers',
        description: 'Barcelona’s Angular meetup',
        url: 'https://angularbeers.org/',
      },
      {
        name: 'CinemaJS',
        description: 'JavaScript talks screened cinema-style',
        url: 'https://cinemajs.tech/',
      },
    ],
    references: [],
  },
  {
    id: 'wefitter-lead',
    from: '2016-10',
    // The one place `to` is deliberately NOT the transition month. The source
    // data ran this role 'October 2016' to 'March 2017', which is six months
    // read inclusively; converting that `to` as an exclusive transition month
    // silently cut it to five and erased an overlap that was in the original.
    // March 2017 is genuinely shared with `angularcamp-organiser` — the
    // community work started before the job ended.
    to: '2017-04',
    title: 'Lead Front End Engineer',
    employer: 'wefitter',
    location: 'Barcelona',
    summary:
      'Led frontend development and design for a fitness and corporate-wellness platform.',
    highlights: [
      'Shipped the WeFitter mobile app with Ionic and AngularJS.',
      'Built the Angular 2 backoffice the business ran the platform from.',
      'Delivered Charity Challenge for Testo and the Wellness Cities site.',
      'Taught the team frontend patterns, testing and current tooling, and made the call on which technical risks were worth taking.',
    ],
    stack: [
      'Angular',
      'AngularJS',
      'Ionic',
      'TypeScript',
      'JavaScript',
      'SCSS',
      'Jasmine',
      'Protractor',
      'Git',
    ],
    projects: [
      {
        name: 'WeFitter App',
        description: 'Fitness and motivation app, iOS and Android',
        url: 'https://itunes.apple.com/es/app/wefitter-fitness-and-motivation/id1090432973?l=en&mt=8',
      },
      {
        name: 'Charity Challenge by Testo',
        url: 'http://charitychallenge.testo.com/',
      },
      { name: 'Backoffice', description: 'Angular 2 backoffice for the app' },
      { name: 'Wellness Cities', url: 'http://www.wellnesscities.com/' },
    ],
    references: ['alvaro-r-moya'],
  },
  {
    id: 'tokio-marine-frontend',
    from: '2015-06',
    to: '2016-10',
    title: 'Front End Developer',
    employer: 'tokio-marine',
    location: 'Barcelona',
    summary:
      'Introduced AngularJS as the company client-side framework and became its internal reference.',
    highlights: [
      'Rolled Angular out across teams and projects, teaching it and establishing the practices that came with it.',
      'Built eFolder, the store for policy documents.',
      'Built the Fac Out Generator, which calculates the layers of a policy.',
      'Delivered the Company Portfolio Analysis Report full stack, and an Ionic mobile ticketing tool for underwriters.',
    ],
    stack: [
      'AngularJS',
      'JavaScript',
      'Ionic',
      'CSS',
      'Bootstrap',
      'Jasmine',
      'Git',
      'Scrum',
      'Jira',
    ],
    projects: [
      {
        name: 'eFolder',
        description: 'Angular application for storing policy files',
      },
      {
        name: 'Fac Out Generator',
        description: 'Angular application for calculating the layers of a policy',
      },
      {
        name: 'Company Portfolio Analysis Report',
        description: 'Full-stack analysis of the company figures',
      },
      {
        name: 'Mobile Ticketing Tool',
        description: 'Full-stack Ionic app for underwriters to report issues',
      },
    ],
    references: ['karine-lesueur'],
  },
  {
    id: 'tokio-marine-analyst',
    from: '2011-04',
    to: '2015-06',
    title: 'Analyst Programmer',
    employer: 'tokio-marine',
    location: 'Barcelona',
    summary:
      'Built and maintained, from scratch, the reporting system used by underwriters and the management team.',
    highlights: [
      'Delivered the reporting platform that the business analysed its figures with — gross written premium, monthly activity, claims, underwriting activity and reinsurance limits.',
      'Built the helpdesk ticketing system for IT issues and a booking tool for underwriter travel.',
      'Worked directly from Business Analyst requirements, in an agile loop between analyst and programmer.',
    ],
    stack: [
      'PHP',
      'Zend Framework',
      'JavaScript',
      'MSSQL',
      'CSS',
      'Bootstrap',
      'Semantic UI',
      'Apache',
    ],
    projects: [
      {
        name: 'Report System Platform',
        description: 'Platform for analysing the company figures',
      },
      { name: 'Helpdesk App', description: 'Ticketing system for IT issues' },
      {
        name: 'Booking Tool',
        description: 'Proxy tool for booking travel for underwriters',
      },
      {
        name: 'Gross Written Premium Analysis Report',
        description: "Up-to-date analysis of the company's GWP",
      },
      {
        name: 'Monthly Activity Report',
        description: 'Up-to-date analysis of monthly policy renewals and bounds',
      },
      {
        name: 'Claims Activity Report',
        description: 'Up-to-date analysis of the claims figures',
      },
      {
        name: 'Underwriting Activity Report',
        description: 'Up-to-date underwriting activity analysis',
      },
      {
        name: 'Fac Out Limits Report',
        description: 'Analysis of the reinsurance limits of the company',
      },
      {
        name: 'Broker Trip Helper',
        description: 'Auto-generated report with useful figures for renewals',
      },
    ],
    references: ['loris-candylaftis'],
  },
  {
    id: 'putput-web',
    from: '2007-01',
    to: '2011-04',
    title: 'Web Developer',
    employer: 'putput',
    location: 'Barcelona',
    summary:
      'Full-stack web development in PHP and Drupal for cultural and professional institutions in Barcelona.',
    highlights: [
      'Owned projects end to end, from the data layer through to a responsive frontend.',
      "Delivered sites for the Catalan press association, Barcelona's bar association, the Catalan writers' association and Grup Mas i Mas.",
    ],
    stack: ['PHP', 'Drupal', 'MySQL', 'JavaScript', 'CSS', 'Apache', 'Subversion'],
    projects: [
      {
        name: 'Col·legi de Periodistes de Catalunya',
        url: 'https://www.periodistes.cat',
      },
      { name: 'Grup Mas i Mas', url: 'http://www.masimas.com/' },
      {
        name: "Il·lustre Col·legi de l'Advocacia de Barcelona",
        url: 'http://www.icab.cat',
      },
      {
        name: 'Associació d’Escriptors en Llengua Catalana',
        url: 'http://escriptors.cat',
      },
      { name: 'La Sala Teatre', url: 'http://www.lasalateatre.cat/' },
      { name: 'Olicatessen', url: 'http://www.olicatessen.com/en/' },
    ],
    references: ['oriol-bel-valls', 'georgi-svetoslavov'],
  },
];

/**
 * Grouped rather than ranked, and tuned to the roles being targeted rather
 * than to the whole history — this is the one section that is deliberately
 * *not* autobiographical. Its job is to be found (by a reader scanning, by a
 * parser matching) and to point at where the proof lives; the proving itself
 * belongs to Projects and Writing, which carry evidence a third party can
 * check — published packages, public repos, posts with dates on them.
 *
 * Two rules hold it honest, and `scripts/check-skills.mjs` enforces the first
 * at build time rather than printing it:
 *
 * 1. Every skill here must appear in a role `stack`, a project `stack`, or
 *    `writing.topics`. A skill with nothing behind it is an empty claim.
 * 2. Nothing generic ("Unit testing", "REST APIs", "CI/CD") and nothing that
 *    is ceremony rather than skill (Jira, Prettier). The named tool already
 *    carries the category, and the padding costs more than it wins.
 *
 * The derived "4 roles · 2015→now" line that used to render under each skill
 * is gone. It counted role *rows*, so splitting one Ocado tenure into four
 * inflated it to "Git · 7 roles"; and because it read only role stacks, it
 * dated CSS to 2016 on a site hand-rolled in Sass. A figure that moves when
 * `cv.ts` is refactored was never describing the career. Both sides of it
 * were self-reported anyway — it had the form of a citation without the
 * substance, which is the flaw that retired the percentage bars before it.
 */
export const skillGroups: SkillGroup[] = [
  {
    name: 'Core',
    skills: ['TypeScript', 'JavaScript', 'CSS', 'SCSS', 'PHP'],
  },
  {
    name: 'React & frameworks',
    skills: ['React', 'Next.js', 'Astro', 'Angular', 'AngularJS', 'Ionic'],
  },
  {
    name: 'AI-assisted development',
    skills: [
      'Claude',
      'Claude Code',
      'GitHub Copilot',
      'Agent design',
      'Prompt design',
      'LLM APIs',
      'LLM tooling',
    ],
  },
  {
    name: 'Accessibility & UI',
    skills: ['Accessibility', 'Design systems', 'Design tokens', 'Storybook', 'i18n'],
  },
  {
    // Added after a sweep of what the repository actually does, rather than of
    // what `cv.ts` already said. Canvas, Deno, MV3, PWA and npm publishing had
    // been sitting in project `stack` arrays all along, rendering as card tags
    // and never claimed — swept out with the legacy PHP-era items by accident.
    // The rest are proved by this repo and were named in no stack at all, so
    // the gate could not see them either way.
    name: 'Web platform',
    skills: [
      'Canvas API',
      'Service workers',
      'PWA',
      'Chrome Extensions MV3',
      'Structured data',
      'Scroll-driven animation',
      'Variable fonts',
    ],
  },
  {
    // Until now this group rested entirely on personal projects and this
    // repo's PDF build — seven years of React at Ocado carried no testing
    // evidence at all. Playwright in particular was claimed on the strength of
    // a build script; it is a current professional tool, which is a different
    // order of claim.
    name: 'Testing',
    skills: [
      'Playwright',
      'Cypress',
      'WebdriverIO',
      'BDD',
      'Page objects',
      'Vitest',
      'React Testing Library',
    ],
  },
  {
    name: 'Build & delivery',
    skills: [
      'Vite',
      'Webpack',
      'Node.js',
      'Deno',
      'Git',
      'GitHub Actions',
      'Jenkins',
      'pnpm',
      'Monorepo',
      'npm publishing',
    ],
  },
  {
    name: 'State & data',
    skills: ['RxJS', 'NgRx', 'Redux', 'MSSQL', 'MySQL'],
  },
  {
    name: 'Ways of working',
    skills: ['Agile', 'Scrum', 'Kanban', 'Domain modelling'],
  },
];

export const projects: ShowcaseProject[] = [
  {
    name: 'Bitepals',
    description:
      'Invite-only product for finding places to eat through people you actually trust, rather than through ratings. Shipped in three languages with locale routing, accounts and a private social graph.',
    url: 'https://bitepals.com',
    stack: ['Next.js', 'React', 'TypeScript', 'i18n'],
  },
  {
    name: 'Masia Blanca',
    description:
      'Public-interest site about the marine reserve off Coma-ruga, in Catalan — its history, its fish and how to visit. Independent, with sourced photography and credits.',
    url: 'https://masiablanca.soms.cat',
    repo: 'https://github.com/pearpages/masiablanca',
    stack: ['Astro', 'TypeScript'],
  },
  {
    name: 'Cota de tast',
    description:
      'The 44 restaurants of the Cerdanya, both sides of the border, ordered by altitude — from Bellver at 1,048 m to Font-Romeu at 1,760 m.',
    url: 'https://cerdanya.soms.cat',
    repo: 'https://github.com/pearpages/cerdanya',
    stack: ['Astro', 'TypeScript'],
  },
  {
    name: 'Modals',
    packageName: '@pearpages/modals',
    description:
      'A comprehensive, accessible and flexible modal system for React applications, published to npm.',
    url: 'https://modals.pearpages.com',
    repo: 'https://github.com/pearpages/modals',
    stack: ['React', 'TypeScript', 'Accessibility', 'npm publishing'],
  },
  {
    name: 'Heatmap',
    packageName: '@pearpages/heatmap',
    description:
      'React component rendering GitHub-style contribution heatmaps, published to npm.',
    url: 'https://heatmap.pearpages.com',
    repo: 'https://github.com/pearpages/heatmap',
    stack: ['React', 'TypeScript', 'npm publishing'],
  },
  {
    name: 'Orchard',
    description:
      'A grove of handmade Chrome extensions (Manifest V3) — cookies, focus, headers and redirects, in a pnpm monorepo.',
    url: 'https://orchard.pearpages.com',
    repo: 'https://github.com/pearpages/orchard',
    stack: ['TypeScript', 'Chrome Extensions MV3', 'pnpm', 'Monorepo'],
  },
  {
    name: 'Futbol Manager',
    description:
      'A football management game in the idiom of PC Fútbol — results resolved statistically rather than simulated in real time. The domain layer is pure: no framework, no clock, no unseeded randomness, and every save carries a schema version with a migration behind it.',
    url: 'https://futbol.pearpages.com',
    repo: 'https://github.com/pearpages/futbol-manager',
    stack: ['TypeScript', 'Vitest', 'Monorepo', 'Domain modelling'],
  },
  {
    name: 'Carlitos',
    description:
      'Browser games sharing one engine — no Node, no npm and zero runtime dependencies, with everything drawn from canvas paths rather than asset files.',
    url: 'https://carlitos.pearpages.com',
    repo: 'https://github.com/pearpages/carlitos',
    stack: ['Deno', 'TypeScript', 'Canvas API'],
  },
  {
    name: 'RSS',
    description:
      'Mobile-first reader that aggregates several feeds into a single card-based reading list.',
    url: 'https://rss.pages.ninja',
    repo: 'https://github.com/pearpages/rss',
    stack: ['React', 'TypeScript', 'Vite'],
  },
  {
    name: 'Fit Tracker',
    description:
      'Mobile-first workout tracker, installable as a progressive web app and usable offline.',
    url: 'https://fit.pages.ninja',
    repo: 'https://github.com/pearpages/fit-tracker',
    stack: ['React', 'TypeScript', 'Sass', 'React Testing Library', 'PWA'],
  },
  {
    name: 'Reactive Game',
    description: 'A browser game built using nothing but Observables.',
    url: 'https://space.pages.ninja',
    repo: 'https://github.com/pearpages/reactive-game',
    stack: ['RxJS', 'JavaScript', 'Canvas API'],
  },
  {
    name: 'Subscriptions Tracker',
    description: 'Mobile-first app for keeping track of recurring subscriptions.',
    url: 'https://subs.pages.ninja',
    repo: 'https://github.com/pearpages/subscriptions-tracker',
    stack: ['React', 'TypeScript', 'Vite'],
  },
  /**
   * Turns a scripted text file into a narrated MP3 — speaker parsing, chunking,
   * one synthesis request per speaker turn, then ffmpeg concat without
   * re-encoding. Two engines behind one interface: Gemini's TTS preview model
   * and Edge TTS.
   *
   * It is here because it is the only thing in the record that shows building
   * *against* an LLM API rather than coding with an assistant — a different
   * claim, and the stronger of the two. It is also the only backing for
   * Node.js, which has been used across two full-stack tenures and every build
   * script in this repo, and was nonetheless unclaimable for want of a stack
   * entry naming it.
   */
  {
    name: 'Podcast',
    description:
      'Turns a scripted text file into a single narrated MP3, one voice or several. Speaker turns are chunked and synthesised separately against Gemini or Edge TTS, then stitched with ffmpeg without re-encoding.',
    repo: 'https://github.com/pearpages/podcast',
    stack: ['TypeScript', 'Node.js', 'LLM APIs', 'pnpm'],
  },
  /**
   * This site. Listed last, and listed at all because the interesting part is
   * not that it exists — it is that the build refuses to ship a broken one:
   * the PDF is measured in a real browser and rejected if it runs to a second
   * page, wraps a line marked unwrappable, embeds a Type 3 font or stops
   * being A4.
   *
   * The stack is long because this entry is doing double duty: it is the only
   * backing for most of the *Web platform* group. Every item below is
   * demonstrably here — the service worker in `public/`, the token system in
   * `_tokens.scss`, the Person schema in `index.html`, the `wdth` axis and the
   * scroll timeline in `Hero.scss`. Nothing was added to pad it.
   */
  {
    name: 'This CV',
    description:
      'The site you are reading, and the one-page PDF it builds. Headless Chromium measures the printed layout and fails the build rather than publish a page that wraps, overflows or drops to a font ATS parsers cannot read.',
    url: 'https://perepages.com',
    repo: 'https://github.com/pearpages/cv',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'SCSS',
      'Node.js',
      'Playwright',
      'GitHub Actions',
      'Accessibility',
      'Design tokens',
      'Structured data',
      'Service workers',
      'Scroll-driven animation',
      'Variable fonts',
    ],
  },
];

/**
 * `postCount` is a snapshot taken 11 August 2026 from the sitemap (78 dated
 * posts, 2020→2026, most recent that week). It is deliberately a hand-written
 * number rather than a build-time fetch of `pearpages.com/blog/rss.xml`: a
 * feed would tie every deploy to another host being up, and would pick posts
 * by recency instead of by merit. It can only ever undercount.
 *
 * `selected` are chosen exemplars, not the latest three — one on AI system
 * architecture, one on React core, one on browser internals.
 */
export const writing: Writing = {
  url: 'https://pearpages.com',
  description:
    'I write up what I learn, mostly while it is still half-formed. Lately that has meant a lot on working with AI coding tools, alongside the frontend and browser-internals posts that have been the through-line since 2020. The site itself is a Docusaurus build I maintain, components and all.',
  since: 2020,
  postCount: 78,
  /**
   * These double as a backing source for `skillGroups` — a skill may rest on
   * a role stack, a project stack, or a topic written about here. Four posts
   * on agent graphs, Claude Code token accounting, harness engineering and
   * model selection are stronger backing for those claims than a `stack`
   * array typed by the same hand. So each entry must be a subject with
   * published posts behind it, not an aspiration.
   */
  topics: [
    'AI-assisted development',
    'Agent design',
    'Claude Code',
    'LLM tooling',
    'Frontend architecture',
    'React',
    'Browser internals',
    'Tooling',
  ],
  selected: [
    {
      title: 'From Agent Loops to Agent Graphs',
      url: 'https://pearpages.com/blog/2026/07/24/from-agent-loops-to-agent-graphs',
    },
    {
      title: 'Understanding Modern Routing in the React Ecosystem',
      url: 'https://pearpages.com/blog/2026/06/05/understanding-modern-routing-in-the-react-ecosystem',
    },
    {
      title: 'Inside the Cookie Jar, How Chrome Actually Handles Cookies',
      url: 'https://pearpages.com/blog/2025/10/19/inside-the-cookie-jar-how-chrome-actually-handles-cookies',
    },
  ],
};

/**
 * Previously buried as a three-month "Contributor" job entry. Organising a
 * conference and a long-running meetup is a credential, not a job.
 * TODO: confirm the years for each — the old data only carried the window
 * March–May 2017, which cannot be the full story.
 */
export const community: CommunityRole[] = [
  {
    name: 'AngularCamp Barcelona',
    role: 'Organiser',
    from: '2017-03',
    to: '2017-06',
    description:
      'Barcelona’s Angular conference. Organised the event and built the tooling that ran it — picked up while still at WeFitter and carried on full time until Blue Orange, which is what the spring of 2017 was spent on.',
    logo: 'angularcamp-bcn.png',
    url: 'https://angularcamp.org/',
  },
  {
    name: 'Angular Beers',
    role: 'Organiser',
    description:
      'Barcelona’s Angular meetup. Ran the events and developed the community tools, pro bono.',
    logo: 'angular-beers.png',
    url: 'https://angularbeers.org/',
  },
  {
    name: 'CinemaJS',
    role: 'Organiser',
    description:
      'JavaScript talks screened cinema-style. Organised the sessions and built the site.',
    logo: 'cinema-js.png',
    url: 'https://cinemajs.tech/',
  },
];

export const education: Education[] = [
  {
    institution: 'Universitat Oberta de Catalunya',
    credential: 'Bachelor’s Degree in Computer Science',
    logo: 'UOC.png',
    url: 'http://www.uoc.edu/portal/en/index.html',
  },
  {
    institution: 'University of Sheffield',
    credential: 'Erasmus programme',
    logo: 'University-of-sheffield.png',
    url: 'https://www.sheffield.ac.uk/',
  },
];

/**
 * Ordered by what they evidence, not by employer or date. The headline claims
 * architecture and leading; Alvaro and Loris speak directly to teaching and
 * setting practice, so they lead. The warmest quotes are not the most useful
 * ones — "great to work with" is table stakes, and it goes last.
 *
 * TODO: every one of these predates Ocado. Seven years of the strongest work
 * has no reference against it, and the praise visibly stops where the current
 * job starts. No wording fixes that — it needs one recent colleague.
 */
export const references: Reference[] = [
  {
    id: 'alvaro-r-moya',
    name: 'Alvaro R Moya',
    title: 'CTO at WeFitter',
    linkedin: 'https://es.linkedin.com/in/alvarormoya',
    employer: 'wefitter',
    quote: [
      'Pere is a highly talented web frontend developer. During his time at WeFitter he did great work improving our app and sites using latest technologies like Angular 2, which he masters. Hard worker and always open to help, he has taught the team on best development practices, and he inspired us to make better code and be aware of latest trends.',
      'Apart from professional skills, he is a great team mate and fosters a nice work environment. He makes the office a better and more fun place to be from minute 0. I wish him all the best in his future career!',
    ],
  },
  {
    id: 'loris-candylaftis',
    name: 'Loris Candylaftis',
    title: 'IT Manager at Tokio Marine HCC',
    linkedin: 'https://es.linkedin.com/in/loriscandylaftis',
    employer: 'tokio-marine',
    quote: [
      'I had the pleasure to work with Pere for over five years, where he worked as front-end developer in my team. Pere was a valuable colleague, with very strong team spirit, always available to help and share his knowledge. During his tenure he worked on different projects with various technologies, ranging from PHP (Zend Framework), Symfony, and finally Angular which he eventually specialised in.',
      'Pere is a serious worker who likes to improve and keep up to date with the technology. I would strongly recommend him to any team looking for an experienced front-end developer that has a good sense of user experience.',
    ],
  },
  {
    id: 'eric-ruiz-franco',
    name: 'Eric Ruiz Franco',
    title: 'Mobile Application Developer at IMG Media',
    linkedin: 'https://www.linkedin.com/in/eric-ruiz-franco-b549a3146/',
    employer: 'blue-orange',
    quote: [
      'I coincided with Pere while working at We Are Blue Orange SL. He’s a brilliant engineer with very clear ideas that always does what’s best for the team. We were working in a multi casino Angular application and his way to tackle the problems and organize the team were key to our success. Thank you Pere, I really enjoyed working with you and I would love to do it again in the future.',
    ],
  },
  {
    id: 'neil-azzopardi',
    name: 'Neil Azzopardi',
    title: 'UI/UX Lead at 21.com',
    linkedin: 'https://www.linkedin.com/in/neilazzopardi/',
    employer: 'blue-orange',
    quote: [
      'I’ve worked with Pere during my time at Blue Orange where he was a Senior Frontend Developer. I found Pere to be very responsive, knowledgeable and easy to work with. His skills in frontend development and different technologies were crucial to deliver the project on time and according to the specifications.',
      'Pere’s work ethics are second to none, always very professional and thinking outside of the box to find solutions, on top of this he delivered on time every single time. Pere is a great asset to have in the team and easy to communicate with. I would not hesitate to recommend Pere to any company wishing to hire an amazing frontend developer with great work ethics.',
    ],
  },
  {
    id: 'jonah-ellinger',
    name: 'Jonah Ellinger',
    title: 'CTO at Reactivation Group Ltd',
    linkedin: 'https://www.linkedin.com/in/jonahellinger/',
    employer: 'blue-orange',
    quote: [
      'I worked with Pere while I was at Blue Orange. I found him to be a skilled front-end developer who is able to solve problems, learn very quickly and deliver on-time and on-specification. He is also very easy to work with: hard-working, knowledgeable and willing to help out wherever needed. I highly recommend him to anyone looking for a good front-end developer.',
    ],
  },
  {
    id: 'karine-lesueur',
    name: 'Karine Lesueur',
    title: 'Operations Manager at Tokio Marine HCC',
    linkedin: 'https://es.linkedin.com/in/karine-lesueur-12b96531',
    employer: 'tokio-marine',
    quote: [
      'I had a great experience working with Pere. A lot has been achieved as a team. One of the main achievements has been to successfully develop a ReportMaker tool which ran accurate, quick and nice reports. We have also adopted an efficient communication method between Programmer and Business Analyst through an Agile process.',
      'Pere is a reliable person who likes to understand all the parameters of what he does to better serve his stakeholder.',
    ],
  },
  {
    id: 'jonas-hoffmann',
    name: 'Jonas Hoffmann',
    title: 'Communications Designer at Komoot',
    linkedin: 'https://www.linkedin.com/in/jonas-hoffmann-256729a2/',
    employer: 'blue-orange',
    quote: [
      'It was a pleasure to work with Pere. He always grasped my designs quickly and was quick to implement them. The same for changes and feedback. His estimations for tasks and projects were always realistic. He works very focused and sticks to the workflow but can also be flexible. When I had amateur coding questions he explained everything to me patiently. Also working and interacting with him on a personal level was great.',
    ],
  },
  {
    id: 'georgi-svetoslavov',
    name: 'Georgi Svetoslavov',
    title: 'Senior Full Stack Software Developer',
    linkedin: 'https://no.linkedin.com/in/gsvetoslavov',
    employer: 'putput',
    quote: [
      'Worked with Pere for some years in many backend (PHP/Drupal) related projects and as far as I remember, he was a very dedicated developer.',
      'He was reading or asking others when he didn’t know something, always used to pay attention to all project aspects and details, and was helping others even when he didn’t have time to deal with his own issues.',
      'Lately I’ve seen his transition from backend development to frontend using the latest and modern JavaScript libraries and frameworks and still keeping the same spirit as years before.',
    ],
  },
  {
    id: 'oriol-bel-valls',
    name: 'Oriol Bel Valls',
    title: 'IT Analyst & Developer',
    linkedin: 'https://www.linkedin.com/in/oriol-bel-valls-a901349/',
    employer: 'putput',
    quote: [
      'Pere is a talented backend and frontend developer, great team player, tech passionate and easy to get on with work mate.',
    ],
  },
];

export const links: Link[] = [
  {
    kind: 'email',
    label: 'Email',
    display: 'hello@pearpages.com',
    url: 'mailto:hello@pearpages.com',
  },
  {
    kind: 'github',
    label: 'GitHub',
    display: 'github.com/pearpages',
    url: 'https://github.com/pearpages',
  },
  {
    kind: 'linkedin',
    label: 'LinkedIn',
    display: 'linkedin.com/in/pearpages',
    url: 'https://www.linkedin.com/in/pearpages/',
  },
  {
    kind: 'blog',
    label: 'Writing',
    display: 'pearpages.com',
    url: 'https://pearpages.com',
  },
  {
    kind: 'stackoverflow',
    label: 'Stack Overflow',
    display: 'stackoverflow.com/users/3955722',
    url: 'https://stackoverflow.com/users/3955722/pere-pages',
  },
  {
    kind: 'location',
    label: 'Based in',
    display: 'Barcelona, Spain',
    url: 'https://maps.google.com/?q=Barcelona,Spain',
  },
];

export const languages: Language[] = profile.languages;
