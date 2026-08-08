import type {
  LandingPageConfig,
  LandingHighlight,
  LandingFaqItem,
  LandingRelatedLink,
  LandingRelatedLinks,
} from '../landing-pages';

/**
 * Shared building blocks for the additive Angular SEO cluster.
 * Mirrors the AI/ML + Workday cluster approach: category highlight sets +
 * context-aware FAQ generators + a thin `angularPage()` builder that fills
 * canonical + lastmod so each page object stays compact while remaining unique
 * (unique title, H1, intro, use cases, FAQs, and internal links per page).
 *
 * Wording deliberately says "modern Angular" instead of hardcoding a version so
 * pages never date. NOTHING here renders on its own — these are data-only helpers
 * consumed by the batch files under data/angular/*.ts and surfaced through
 * data/angular/index.ts.
 */

export const BASE_URL = 'https://proxytechsupport.com';
export const LASTMOD = '2026-07-25T12:00:00.000Z';

// ─── Category highlight sets ────────────────────────────────────────────────

export const jobSupportHighlights: LandingHighlight[] = [
  {
    title: 'Real-Time Angular Job Support',
    description:
      'Live expert help during your working hours — component and template bugs, RxJS and signals issues, change-detection problems, build failures, and sprint deliverables so you always hit your deadlines.',
  },
  {
    title: 'Production Angular Issue Support',
    description:
      'On-call help for real production incidents — memory leaks, change-detection storms, broken lazy routes, SSR/hydration mismatches, failing builds, and performance regressions in live Angular applications.',
  },
  {
    title: 'Interview & Candidate Marketing',
    description:
      'Angular proxy interview assistance, profile positioning, and candidate marketing to help you prepare for technical rounds and improve profile visibility and recruiter readiness for Angular Developer, Frontend, and Full-Stack roles.',
  },
];

export const techHighlights: LandingHighlight[] = [
  {
    title: 'Real Project Support',
    description:
      'Hands-on help on your actual tickets — architecture, implementation, debugging, and code review during your working hours, not generic tutorials.',
  },
  {
    title: 'Production Issue Resolution',
    description:
      'Firefighting for live incidents — performance, reliability, bundle size, memory, and rendering problems resolved with an experienced Angular engineer on the call.',
  },
  {
    title: 'Interview & Profile Support',
    description:
      'Angular interview topics covered end-to-end plus profile positioning so you can both keep your job and land the next one.',
  },
];

export const interviewHighlights: LandingHighlight[] = [
  {
    title: 'Live Interview Guidance',
    description:
      'Discreet real-time expert support during your live Angular technical interview — coding, component design, RxJS, state management, and frontend system design questions.',
  },
  {
    title: 'Mock Interviews & Prep',
    description:
      'Calibrated mock interviews and question banks for Angular, TypeScript, RxJS, NgRx, and frontend architecture rounds across product, enterprise, and consulting formats.',
  },
  {
    title: 'Get Interviews Scheduled',
    description:
      'Profile engineering, keyword targeting, and recruiter outreach so you actually get Angular interview calls in the first place.',
  },
];

export const marketingHighlights: LandingHighlight[] = [
  {
    title: 'Angular Profile Positioning',
    description:
      'Resume and LinkedIn engineered around the exact keywords Angular recruiters search for — modern Angular, TypeScript, RxJS, NgRx, standalone components, signals, and enterprise frontend signals.',
  },
  {
    title: 'Candidate Marketing & Outreach',
    description:
      'Active application support and recruiter outreach so your profile reaches hiring managers instead of sitting in an ATS black hole.',
  },
  {
    title: 'Interview Pipeline Support',
    description:
      'Once calls start coming, we back you with proxy interview assistance and real-time job support to convert offers and keep the role.',
  },
];

// ─── Reusable anchor links to hub + cluster + existing pages ────────────────

export const HUB_LINK: LandingRelatedLink = { label: 'Angular support services', href: '/angular-support-services/' };
export const JOB_LINK: LandingRelatedLink = { label: 'Angular job support', href: '/angular-job-support/' };
export const PRODUCTION_LINK: LandingRelatedLink = { label: 'Angular production support', href: '/angular-production-support/' };
export const ONBOARDING_LINK: LandingRelatedLink = { label: 'Angular project onboarding support', href: '/angular-project-onboarding-support/' };
export const PROFILE_LINK: LandingRelatedLink = { label: 'Angular developer profile positioning', href: '/angular-developer-profile-positioning/' };
export const CANDIDATE_MARKETING_LINK: LandingRelatedLink = { label: 'Angular candidate marketing', href: '/angular-developer-candidate-marketing/' };
export const INTERVIEW_HUB_LINK: LandingRelatedLink = { label: 'Angular proxy interview support', href: '/angular-proxy-interview-support/' };
export const GET_SCHEDULED_LINK: LandingRelatedLink = { label: 'Get Angular interview scheduled', href: '/get-angular-interview-scheduled/' };
export const LOCATIONS_LINK: LandingRelatedLink = { label: 'Angular job support locations', href: '/angular-job-support-locations/' };
export const ARCHITECTURE_LINK: LandingRelatedLink = { label: 'Angular architecture support', href: '/angular-architecture-support/' };
export const PERFORMANCE_LINK: LandingRelatedLink = { label: 'Angular performance support', href: '/angular-performance-support/' };
export const MIGRATION_LINK: LandingRelatedLink = { label: 'Angular upgrade & migration support', href: '/angular-upgrade-migration-support/' };

/** Existing, already-live site anchors (verified real routes). */
export const EXISTING = {
  dotnetAngular: { label: '.NET + Angular job support', href: '/dotnet-angular-job-support/' } as LandingRelatedLink,
  production: { label: 'Production issue support', href: '/production-issue-support/' } as LandingRelatedLink,
  clientCall: { label: 'Client call & standup support', href: '/client-call-and-standup-support-guide/' } as LandingRelatedLink,
  realtimeGuide: { label: 'Real-time IT job support guide', href: '/real-time-it-job-support-guide/' } as LandingRelatedLink,
  candidateMarketing: { label: 'Job application & candidate marketing', href: '/job-application-candidate-marketing/' } as LandingRelatedLink,
  finalRound: { label: 'Final round interview support', href: '/final-round-interview-support-guide/' } as LandingRelatedLink,
  technicalUsa: { label: 'Technical interview support USA', href: '/technical-interview-support-usa-guide/' } as LandingRelatedLink,
  getScheduled: { label: 'Get interview scheduled', href: '/get-interview-scheduled/' } as LandingRelatedLink,
  reactGuide: { label: 'React job support guide', href: '/react-job-support-guide/' } as LandingRelatedLink,
  fullstackGuide: { label: 'Full-stack job support guide', href: '/full-stack-job-support-guide/' } as LandingRelatedLink,
  blog: { label: 'Read developer support articles', href: '/blog/' } as LandingRelatedLink,
};

// ─── FAQ generators (context-aware — each produces materially distinct copy) ─

/** Job-support style FAQs for country / city / role job-support pages. */
export function jobFaqs(entity: string, focus: string): LandingFaqItem[] {
  return [
    {
      question: `What Angular job support do you provide for ${entity}?`,
      answer: `We provide real-time Angular job support for ${entity}. Our in-house Angular engineers join your working hours and help with ${focus}. That includes component and template work, RxJS and signals, reactive forms, routing and lazy loading, state management with NgRx or the Signal Store, HttpClient and interceptors, SSR and hydration, performance tuning, and daily sprint deliverables. Same-day start is available and every engagement is confidential.`,
    },
    {
      question: 'Can you help with live Angular production incidents?',
      answer:
        'Yes. Production firefighting is a core strength. We help resolve change-detection storms and slow rendering, memory leaks from unclosed subscriptions, broken lazy-loaded routes, SSR and hydration mismatches, failing CI builds, bundle-size blowups, and regressions after an Angular version upgrade — often within the same working session, with an experienced engineer on the call.',
    },
    {
      question: 'Which Angular topics and stacks do you cover?',
      answer:
        'We cover modern Angular end to end — standalone components, signals and signal inputs/outputs, the new control flow, deferrable views, RxJS, NgRx and the NgRx Signal Store, reactive and typed forms, Angular Material and the CDK, SSR with hydration, HttpClient and interceptors, route guards and resolvers, Nx monorepos, module federation, and testing with Jest, Karma, Cypress, and Playwright — plus full-stack combinations with .NET, Java Spring Boot, Node.js, and NestJS.',
    },
    {
      question: 'Is the support confidential?',
      answer:
        'Absolutely. All Angular job support is completely confidential — we never share client or employer information with any third party, and NDAs are available on request. Whether it is job support, production help, interview assistance, or candidate marketing, every engagement is handled with full professional discretion.',
    },
    {
      question: 'How quickly can I get started?',
      answer:
        'In most cases the same day you contact us. We maintain an in-house Angular expert team — no sub-contracting. Reach out on WhatsApp and we will match you with the right engineer for your stack and situation immediately.',
    },
  ];
}

/** Technology-page FAQs. `tech` = the Angular topic, `usage` = one-line real-world usage. */
export function techFaqs(tech: string, usage: string): LandingFaqItem[] {
  return [
    {
      question: `What kind of ${tech} job support do you provide?`,
      answer: `We provide hands-on, real-time ${tech} job support on your actual project tickets. ${usage} Our Angular experts help with design and implementation, debugging, code review, performance tuning, and production issues — during your working hours, same-day. We do not hand you generic tutorials; we work on your real deliverables.`,
    },
    {
      question: `What are the common problems with ${tech}?`,
      answer: `Typical ${tech} issues we resolve include incorrect or unstable behaviour, change-detection and rendering performance bottlenecks, memory and subscription leaks, integration failures with upstream/downstream systems, breaking changes after an Angular upgrade, and reliability problems under real traffic. We help you find the root cause and ship a stable fix.`,
    },
    {
      question: `Do you cover ${tech} interview questions?`,
      answer: `Yes. We prepare you for ${tech} interview questions — fundamentals, architecture and design trade-offs, scenario-based problems, and hands-on coding rounds — and can provide live proxy interview support during the real interview if needed. We calibrate to the exact role and company format.`,
    },
    {
      question: `Can you help if I just joined a project using ${tech}?`,
      answer: `Yes. Onboarding onto an unfamiliar Angular codebase using ${tech} is one of the most common reasons people reach out. We help you understand the existing setup, get productive fast, deliver your first tasks confidently, and avoid the mistakes that get flagged in reviews and standups.`,
    },
    {
      question: 'How do I get started and is it confidential?',
      answer:
        'Contact us on WhatsApp with your stack, the problem, and your timeline. We assign the right Angular expert — usually same-day. Every engagement is fully confidential, and NDAs are available on request.',
    },
  ];
}

/** Interview-page FAQs. `entity` = role/topic/region interview context. */
export function interviewFaqs(entity: string): LandingFaqItem[] {
  return [
    {
      question: `What ${entity} interview support do you provide?`,
      answer: `We provide real-time, discreet proxy interview support for ${entity} interviews. Our in-house Angular experts join your live session and guide you through coding rounds, component and RxJS problems, state-management questions, frontend system design, and behavioural rounds. We also run calibrated mock interviews before the real thing.`,
    },
    {
      question: 'What interview formats do you support?',
      answer:
        'All of them — live coding, take-home reviews, frontend system design, component-design exercises, architecture deep-dives, and final-round panels. Whether it is a product-company technical panel, an enterprise interview, or a consulting client round, we align to the exact format and seniority level.',
    },
    {
      question: 'What Angular topics are covered?',
      answer:
        'Modern Angular component and template design, standalone components and signals, RxJS operators and patterns, change detection and performance, NgRx and Signal Store state management, reactive and typed forms, routing, guards and resolvers, SSR and hydration, testing strategy, and TypeScript depth — mapped to the seniority you are interviewing for.',
    },
    {
      question: 'Is proxy interview support confidential?',
      answer:
        'Yes. Every session is fully confidential. We never disclose candidate identities, employer names, or interview details, and support is delivered discreetly through audio or chat, calibrated to your interview format.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your interview date, the role, the company/format, and likely topics. We assign the right expert and run a pre-interview alignment session so guidance matches your background and experience level.',
    },
  ];
}

/** Candidate-marketing / profile-positioning FAQs. */
export function marketingFaqs(entity: string): LandingFaqItem[] {
  return [
    {
      question: `How do you help ${entity} get more interview calls?`,
      answer: `We help ${entity} get interview calls through Angular profile engineering, keyword targeting, LinkedIn positioning, and recruiter outreach. We rebuild your resume and LinkedIn around the exact terms Angular recruiters search for — modern Angular, TypeScript, RxJS, NgRx, standalone components, signals, micro-frontends, and enterprise frontend signals — then support active applications and outreach to hiring managers and staffing firms.`,
    },
    {
      question: 'Why is my Angular resume getting no calls?',
      answer:
        'Usually a keyword and positioning mismatch: the resume reads like a generic frontend or full-stack profile, buries the Angular impact, and misses the terms recruiters and ATS filters actually screen for. We diagnose the gaps and rebuild the profile so it surfaces in searches and passes ATS screening for the roles you want.',
    },
    {
      question: 'What Angular profiles do you support?',
      answer:
        'Angular Developer, Senior Angular Developer, Frontend Engineer, Angular Full-Stack Developer, Angular Tech Lead, and UI/UX-focused frontend roles — at every level from mid to senior/lead — across enterprise, SaaS, banking, healthcare, and product companies.',
    },
    {
      question: 'Do you help with contract and full-time roles?',
      answer:
        'Yes. We support both contract (C2C, W2, 1099, day-rate) and full-time searches, and understand the Angular hiring landscape across product companies, startups, enterprises, and consulting firms — positioning your profile accordingly for each.',
    },
    {
      question: 'How soon will I see results?',
      answer:
        'Profile changes and outreach can begin the same day. Most candidates start seeing recruiter activity within 1–2 weeks of profile optimization and targeted outreach, depending on the current market and specialization.',
    },
  ];
}

/** Knowledge-base / educational-page FAQs. `topic` = the guide subject. */
export function kbFaqs(topic: string): LandingFaqItem[] {
  return [
    {
      question: `What does this ${topic} guide cover?`,
      answer: `This guide explains ${topic} in practical terms — what it means, how it works day to day, the common problems and how they are handled, and how professional support fits in. It is written for working Angular professionals and candidates who want clear, real-world answers rather than theory.`,
    },
    {
      question: 'Is this an educational guide or a paid service?',
      answer:
        'This is an educational guide. If you decide you want hands-on help, we also offer real-time Angular job support, production issue support, interview assistance, and candidate marketing — but the guide itself is here to inform, and you can act on it however you like.',
    },
    {
      question: 'Who is this guide for?',
      answer:
        'Angular developers, frontend engineers, full-stack developers, and anyone preparing for Angular roles or currently working on an Angular project who wants to understand the topic clearly and avoid common mistakes.',
    },
    {
      question: 'How do I get personalized help?',
      answer:
        'Reach out on WhatsApp describing your situation — your stack, your role, and what you are stuck on. We will point you to the right support option, whether that is live job support, a production fix, interview help, or profile positioning.',
    },
  ];
}

// ─── Thin config builder ─────────────────────────────────────────────────────

type AngularPageInput = Omit<LandingPageConfig, 'canonical' | 'lastmod'> & {
  canonical?: string;
  lastmod?: string;
};

/** Fill canonical (from slug) + lastmod so batch files stay compact. */
export function angularPage(cfg: AngularPageInput): LandingPageConfig {
  return {
    ...cfg,
    canonical: cfg.canonical ?? `${BASE_URL}/${cfg.slug}/`,
    lastmod: cfg.lastmod ?? LASTMOD,
  };
}

/** Convenience for the common related-links shape used across the cluster. */
export function relatedLinks(input: {
  geoLinks: LandingRelatedLink[];
  techLinks: LandingRelatedLink[];
  problemLink: LandingRelatedLink;
  proxyLink: LandingRelatedLink;
  blogLink?: LandingRelatedLink;
  additionalLinks?: LandingRelatedLink[];
}): LandingRelatedLinks {
  return {
    blogLink: EXISTING.blog,
    ...input,
  };
}
