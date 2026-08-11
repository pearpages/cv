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
} from './types';
import { PRESENT } from './types';

/* ------------------------------------------------------------------ *
 * TODO — 2017→2026
 * The `blue-orange` role below still ends at `present` with the stack as
 * it stood in 2017 (Angular 7, Protractor, Jenkins). Pere is sending the
 * real history for this span. When it arrives: close that role with its
 * true end date and add the newer ones above it. Nothing else needs to
 * change — the time axis and skill evidence both derive from these dates.
 * ------------------------------------------------------------------ */

export const profile: Profile = {
  name: 'Pere Pages Soms',
  wordmark: ['Pere', 'Pages', 'Soms'],
  headline: 'Frontend Architect & Engineering Lead',
  location: 'Barcelona, Spain',
  summary: [
    'Frontend architect and engineering lead with 19 years building production web applications — the last decade in TypeScript and Angular, with React, Node and Ionic alongside. I have worked in insurance, health and iGaming, in international cross-functional teams beside designers, business analysts and backend engineers.',
    'Twice I have been the person who introduced a framework and then taught it: AngularJS at Tokio Marine HCC, where I became the company reference for frontend, and again leading the migration to modern Angular at We Are Blue Orange. Technical leadership, code review, mentoring and setting standards are as much of the job as the code is.',
    'I like simplicity, minimalism and quality. Code should be easy to understand, clean, consistent, testable, short and modular. I write code daily, publish open-source React components, and spent years organising the Barcelona JavaScript community.',
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
  { id: 'community', label: 'Community' },
  { id: 'references', label: 'References' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const employers: Employer[] = [
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
  {
    id: 'blue-orange-lead',
    from: '2017-06',
    to: PRESENT,
    title: 'Senior Frontend Engineer / Team Lead',
    employer: 'blue-orange',
    location: 'Barcelona',
    summary:
      'Frontend lead on a multi-brand online casino platform, owning the Angular codebase end to end.',
    highlights: [
      'Led the migration from MVP to a modern Angular architecture, with RxJS and NgRx handling application state.',
      'Built the gamification feature set shipped across multiple casino brands.',
      'Integrated the Devcode payment system.',
      'Created Atlas, the internal CMS the team runs campaigns from.',
      'Set the frontend standards the team worked to — SCSS/BEM, Prettier, Codelyzer, and Jasmine and Protractor suites running on Jenkins.',
    ],
    stack: [
      'Angular',
      'TypeScript',
      'RxJS',
      'NgRx',
      'JavaScript',
      'SCSS',
      'BEM',
      'Webpack',
      'Angular CLI',
      'Jasmine',
      'Protractor',
      'Jenkins',
      'Prettier',
      'Codelyzer',
      'Git',
      'Scrum',
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
  {
    id: 'wefitter-lead',
    from: '2016-10',
    to: '2017-03',
    title: 'Lead Front End Engineer',
    employer: 'wefitter',
    location: 'Barcelona',
    summary:
      'Led frontend development and design for a fitness and corporate-wellness platform.',
    highlights: [
      'Shipped the WeFitter mobile app with Ionic and AngularJS.',
      'Built the Angular 2 backoffice the business ran the platform from.',
      'Delivered Charity Challenge for Testo and the Wellness Cities site.',
      'Taught the team frontend patterns, best practices and current tooling, and flagged technical risk and opportunity in my area of expertise.',
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
    to: '2016-09',
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
 * Grouped rather than ranked. Self-assigned percentages tell a reader
 * nothing; where a skill was actually used is derivable from `roles`
 * above, so `lib/derive.ts` computes that instead.
 */
export const skillGroups: SkillGroup[] = [
  {
    name: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS', 'PHP', 'SQL'],
  },
  {
    name: 'Frameworks & UI',
    skills: ['Angular', 'React', 'AngularJS', 'Ionic', 'Node.js', 'Bootstrap'],
  },
  {
    name: 'State & data',
    skills: ['RxJS', 'NgRx', 'REST APIs', 'MSSQL', 'MySQL'],
  },
  {
    name: 'Testing',
    skills: ['Jasmine', 'Protractor', 'Unit testing', 'End-to-end testing'],
  },
  {
    name: 'Build & delivery',
    skills: [
      'Vite',
      'Webpack',
      'Angular CLI',
      'Git',
      'Jenkins',
      'GitHub Actions',
      'CI/CD',
      'Prettier',
    ],
  },
  {
    name: 'Practice',
    skills: [
      'Frontend architecture',
      'Technical leadership',
      'Mentoring',
      'Code review',
      'Design systems',
      'BEM',
      'Agile',
      'Scrum',
      'Jira',
    ],
  },
];

export const projects: ShowcaseProject[] = [
  {
    name: 'Modals',
    packageName: '@pearpages/modals',
    description:
      'A comprehensive, accessible and flexible modal system for React applications, published to npm.',
    url: 'https://modals.pearpages.com',
    repo: 'https://github.com/pearpages/modals',
    stack: ['React', 'TypeScript', 'Accessibility', 'npm'],
  },
  {
    name: 'Heatmap',
    packageName: '@pearpages/heatmap',
    description:
      'React component rendering GitHub-style contribution heatmaps, published to npm.',
    url: 'https://heatmap.pearpages.com',
    repo: 'https://github.com/pearpages/heatmap',
    stack: ['React', 'TypeScript', 'npm'],
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
    name: 'Reactive Game',
    description: 'A browser game built using nothing but Observables.',
    url: 'https://space.pages.ninja',
    repo: 'https://github.com/pearpages/reactive-game',
    stack: ['RxJS', 'JavaScript', 'Canvas'],
  },
  {
    name: 'Subscriptions Tracker',
    description: 'Mobile-first app for keeping track of recurring subscriptions.',
    repo: 'https://github.com/pearpages/subscriptions-tracker',
    stack: ['React', 'TypeScript', 'Vite'],
  },
];

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
    description:
      'Barcelona’s Angular conference. Organised the event and built the tooling that ran it.',
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

export const references: Reference[] = [
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
    id: 'oriol-bel-valls',
    name: 'Oriol Bel Valls',
    title: 'IT Analyst & Developer',
    linkedin: 'https://www.linkedin.com/in/oriol-bel-valls-a901349/',
    employer: 'putput',
    quote: [
      'Pere is a talented backend and frontend developer, great team player, tech passionate and easy to get on with work mate.',
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
