import type { LandingPageConfig, LandingFaqItem, LandingRelatedLink } from '../landing-pages';
import {
  angularPage,
  relatedLinks,
  jobSupportHighlights,
  EXISTING,
  HUB_LINK,
  JOB_LINK,
  PRODUCTION_LINK,
  ONBOARDING_LINK,
  PROFILE_LINK,
  CANDIDATE_MARKETING_LINK,
  INTERVIEW_HUB_LINK,
  GET_SCHEDULED_LINK,
  LOCATIONS_LINK,
  ARCHITECTURE_LINK,
  PERFORMANCE_LINK,
  MIGRATION_LINK,
} from './shared';

// ─── The Angular Hub ─────────────────────────────────────────────────────────

export const angularSupportServices: LandingPageConfig = angularPage({
  slug: 'angular-support-services',
  title: 'Angular Support Services — Real-Time Job, Production & Interview Help',
  description:
    'The central hub for Angular support: real-time job support, production issue help, project onboarding, architecture, upgrades, interview assistance, and candidate marketing for Angular developers worldwide.',
  keywords: [
    'Angular support services', 'Angular job support', 'Angular production support',
    'Angular help', 'Angular developer support', 'Angular consulting support',
    'modern Angular support', 'Angular interview support', 'Angular architecture support',
  ],
  h1: 'Angular Support Services — Real-Time Help for Every Angular Challenge',
  tagline:
    'One place for real-time Angular job support, production firefighting, onboarding, architecture, upgrades, interview assistance, and candidate marketing — across every country, topic, and role.',
  heroEyebrow: 'Angular Support Hub — 2026',
  painIntro:
    'Stuck on a component that will not update, an RxJS stream that never fires, a change-detection performance problem, a broken SSR build, or an Angular interview you are not ready for? You need an experienced Angular engineer beside you — not another forum thread.',
  heroVariant:
    'Modern Angular moves fast — standalone components, signals, the new control flow, deferrable views, zoneless change detection, typed forms, and SSR with hydration all changed how real applications are built. This hub connects you to in-house Angular experts across the full stack: TypeScript, RxJS, NgRx and the Signal Store, Angular Material and the CDK, Nx monorepos, module federation, and full-stack combinations with .NET, Java, Node.js, and NestJS. From daily job support to emergency production fixes, live interview guidance, and profile positioning — start from here.',
  geoLine:
    'Supporting Angular professionals across the USA, Canada, UK, Ireland, Germany, Netherlands, France, Sweden, Switzerland, Australia, New Zealand, Singapore, Hong Kong, UAE, Saudi Arabia, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover modern Angular, TypeScript, RxJS, signals, NgRx, Angular Material, SSR/hydration, micro-frontends, Nx, and full-stack integrations.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What are Angular support services?',
      answer:
        'They are real-time, hands-on help from experienced Angular engineers during your working hours — on your actual project. We help with component and template work, RxJS and signals, state management, forms, routing, SSR, performance, testing, upgrades, and production incidents. It is delivered live, confidentially, and same-day where needed, anywhere in the world.',
    },
    {
      question: 'Which Angular areas and tools do you cover?',
      answer:
        'Modern Angular (standalone components, signals, new control flow, deferrable views, zoneless change detection), TypeScript, RxJS, NgRx and the NgRx Signal Store, reactive and typed forms, Angular Material and the CDK, SSR and hydration, HttpClient and interceptors, routing with guards and resolvers, Nx monorepos, module federation and micro-frontends, and testing with Jest, Karma, Cypress, and Playwright.',
    },
    {
      question: 'Do you help with live Angular production issues?',
      answer:
        'Yes. We provide dedicated Angular production support — change-detection storms, memory leaks, broken lazy routes, SSR/hydration mismatches, bundle-size and Core Web Vitals problems, and regressions after upgrades — with an expert on the call. See our Angular production support page.',
    },
    {
      question: 'Can you help me prepare for or clear Angular interviews?',
      answer:
        'Yes. We offer Angular proxy interview support and get-interview-scheduled services for Angular Developer, Senior, Full-Stack, and Lead roles — live guidance during interviews, calibrated mock interviews, and profile positioning so the calls come in the first place.',
    },
    {
      question: 'Which countries and cities do you support?',
      answer:
        'We support Angular professionals worldwide — dedicated pages for the USA, Canada, UK, Ireland, Germany, Netherlands, France, Sweden, Switzerland, Australia, New Zealand, Singapore, Hong Kong, UAE, and Saudi Arabia, plus major cities including New York, San Francisco, Toronto, London, Dublin, Berlin, Amsterdam, Sydney, Singapore, and Dubai. See our Angular job support locations directory.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your stack, your situation (job support, production issue, interview, or profile), and your timeline. We match you with the right Angular expert — usually the same day. Every engagement is confidential and NDAs are available on request.',
    },
  ],
  useCasesSection: {
    title: 'What We Help Angular Professionals With',
    cases: [
      'A component or template that will not update the way you expect — change detection, signals, or async pipe issues',
      'An RxJS stream that never emits, emits twice, or leaks subscriptions in production',
      'An Angular application failing SSR/hydration, timing out, or scoring poorly on Core Web Vitals',
      'Joining a new Angular project and needing to ramp up on an unfamiliar codebase and build setup fast',
      'An Angular interview in a few days you do not feel ready for — coding, RxJS, or frontend system design',
      'A strong engineer getting no recruiter calls because the profile is not positioned for Angular roles',
    ],
  },
  proxySection: {
    title: 'Angular Interview & Candidate Marketing Support',
    intro:
      'Getting into and moving up in Angular roles takes more than skill — it takes interview readiness and a profile that recruiters actually find. We support both sides: live proxy interview assistance during your real interview, and candidate marketing to generate the calls.',
    points: [
      'Live, discreet guidance during Angular Developer, Senior, Full-Stack, and Lead interviews',
      'Calibrated mock interviews for coding, RxJS, component design, and frontend system design rounds',
      'Profile positioning around the exact keywords Angular recruiters and ATS filters screen for',
      'Active candidate marketing and recruiter outreach to build a real interview pipeline',
      'End-to-end support: get the interview, clear it, then keep the role with real-time job support',
    ],
  },
  bottomCTAHeading: 'Need Real-Time Angular Support or Interview Help Right Now?',
  bottomCTABody:
    'In-house Angular experts available same-day — project support, production fixes, live interview guidance, or profile positioning. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'USA Angular job support', href: '/usa-angular-job-support/' },
      { label: 'Canada Angular job support', href: '/canada-angular-job-support/' },
    ],
    techLinks: [
      { label: 'Angular signals job support', href: '/angular-signals-job-support/' },
      { label: 'Angular RxJS job support', href: '/angular-rxjs-job-support/' },
    ],
    problemLink: PRODUCTION_LINK,
    proxyLink: INTERVIEW_HUB_LINK,
    additionalLinks: [
      JOB_LINK, PRODUCTION_LINK, ONBOARDING_LINK, ARCHITECTURE_LINK, PERFORMANCE_LINK, MIGRATION_LINK,
      PROFILE_LINK, CANDIDATE_MARKETING_LINK, INTERVIEW_HUB_LINK, GET_SCHEDULED_LINK, LOCATIONS_LINK,
      { label: 'Modern Angular job support', href: '/modern-angular-job-support/' },
      { label: 'Angular live project support', href: '/angular-live-project-support/' },
      { label: 'Angular code review support', href: '/angular-code-review-support/' },
      { label: 'Angular application debugging support', href: '/angular-application-debugging-support/' },
      { label: 'Angular enterprise application support', href: '/angular-enterprise-application-support/' },
      { label: 'UK Angular job support', href: '/uk-angular-job-support/' },
      { label: 'Australia Angular job support', href: '/australia-angular-job-support/' },
      { label: 'Angular standalone components job support', href: '/angular-standalone-components-job-support/' },
      { label: 'Angular NgRx job support', href: '/angular-ngrx-job-support/' },
      { label: 'Angular Material job support', href: '/angular-material-job-support/' },
      { label: 'Angular SSR job support', href: '/angular-ssr-job-support/' },
      { label: 'Angular Node.js full-stack job support', href: '/angular-nodejs-job-support/' },
      { label: 'Angular + Java Spring Boot job support', href: '/angular-java-spring-boot-job-support/' },
      { label: 'What is Angular job support', href: '/what-is-angular-job-support/' },
      EXISTING.dotnetAngular, EXISTING.fullstackGuide, EXISTING.candidateMarketing,
    ],
  }),
});

// ─── Compact builder for the commercial support pages ────────────────────────

interface CommercialInput {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  tagline: string;
  heroEyebrow: string;
  painIntro: string;
  heroVariant: string;
  faqs: LandingFaqItem[];
  useCasesTitle: string;
  useCases: string[];
  proxyTitle: string;
  proxyIntro: string;
  proxyPoints: string[];
  bottomCTAHeading: string;
  bottomCTABody: string;
  techLinks: LandingRelatedLink[];
  problemLink: LandingRelatedLink;
  extraLinks: LandingRelatedLink[];
}

function commercialPage(i: CommercialInput): LandingPageConfig {
  return angularPage({
    slug: i.slug,
    title: i.title,
    description: i.description,
    keywords: i.keywords,
    h1: i.h1,
    tagline: i.tagline,
    heroEyebrow: i.heroEyebrow,
    painIntro: i.painIntro,
    heroVariant: i.heroVariant,
    geoLine:
      'Supporting Angular professionals across the USA, Canada, UK, Europe, Australia, and worldwide.',
    timezoneNote: 'Available across all major business hours for daily and on-call Angular support.',
    highlights: jobSupportHighlights,
    faqs: i.faqs,
    useCasesSection: { title: i.useCasesTitle, cases: i.useCases },
    proxySection: { title: i.proxyTitle, intro: i.proxyIntro, points: i.proxyPoints },
    bottomCTAHeading: i.bottomCTAHeading,
    bottomCTABody: i.bottomCTABody,
    relatedLinks: relatedLinks({
      geoLinks: [HUB_LINK, JOB_LINK],
      techLinks: i.techLinks,
      problemLink: i.problemLink,
      proxyLink: INTERVIEW_HUB_LINK,
      additionalLinks: [...i.extraLinks, HUB_LINK, JOB_LINK, PRODUCTION_LINK, EXISTING.realtimeGuide],
    }),
  });
}

// ─── Commercial pages ────────────────────────────────────────────────────────

export const angularJobSupport: LandingPageConfig = commercialPage({
  slug: 'angular-job-support',
  title: 'Angular Job Support — Real-Time Help From In-House Experts',
  description:
    'Real-time Angular job support on your live project — components, RxJS, signals, NgRx, forms, routing, SSR, and performance. Same-day, confidential help from in-house Angular experts.',
  keywords: [
    'Angular job support', 'Angular online job support', 'Angular project support',
    'Angular developer job support', 'real-time Angular support', 'Angular proxy job support',
    'Angular remote job support', 'TypeScript Angular job support',
  ],
  h1: 'Angular Job Support — Real-Time Expert Help on Your Live Project',
  tagline:
    'When you are stuck on a real Angular ticket with a deadline, we join your working hours and help you ship it — components, RxJS, state, forms, SSR, and performance.',
  heroEyebrow: 'Angular Job Support',
  painIntro:
    'On a live Angular project and stuck — a component that will not render, an RxJS pipeline that misbehaves, a change-detection performance issue, or a build that fails only in CI? Deadlines do not wait, and forums rarely match your exact codebase.',
  heroVariant:
    'Our in-house Angular engineers work on your actual tickets during your hours — not generic examples. We help with standalone components and signals, RxJS operators and subscription management, NgRx and the Signal Store, reactive and typed forms, routing with guards and resolvers, HttpClient and interceptors, SSR and hydration, testing, and the day-to-day delivery that keeps your standups and reviews going well. Same-day start, fully confidential.',
  faqs: [
    {
      question: 'What is Angular job support?',
      answer:
        'It is real-time, hands-on help from an experienced Angular engineer while you work on your real project. We help you understand the codebase, fix bugs, implement features, tune performance, and deliver your sprint tickets — live, during your working hours, and fully confidentially.',
    },
    {
      question: 'What Angular problems do you help with?',
      answer:
        'Component and template issues, change detection and rendering performance, RxJS and signals, NgRx and Signal Store state management, reactive and typed forms, routing and lazy loading, HttpClient and interceptors, SSR and hydration, testing, build and bundle problems, and upgrade regressions — on your actual codebase.',
    },
    {
      question: 'Is Angular job support confidential?',
      answer:
        'Completely. We never share client or employer information, and NDAs are available on request. Support is delivered discreetly through screen share, chat, or call during your working hours.',
    },
    {
      question: 'How is this different from consulting or tutorials?',
      answer:
        'We work on your real deliverables, not generic demos. It is closer to having a senior Angular colleague on call — someone who helps you solve the exact problem in front of you and explains it so you grow while you deliver.',
    },
    {
      question: 'How fast can I start?',
      answer:
        'Usually the same day. Message us on WhatsApp with your stack and the problem, and we match you with the right in-house Angular expert immediately.',
    },
  ],
  useCasesTitle: 'Angular Situations We Help You Deliver',
  useCases: [
    'A feature ticket you are blocked on with a sprint deadline approaching',
    'A component that will not update — OnPush, signals, async pipe, or change-detection confusion',
    'RxJS streams that leak, double-fire, or never emit, causing hard-to-trace bugs',
    'NgRx or Signal Store state that is out of sync or hard to reason about',
    'A build that passes locally but fails in CI, or a bundle that is too large',
    'Onboarding onto an unfamiliar Angular codebase and needing to deliver quickly',
  ],
  proxyTitle: 'Beyond Daily Support — Interviews & Career',
  proxyIntro:
    'Many people who use Angular job support also want help clearing their next interview and getting more calls. We support the whole journey.',
  proxyPoints: [
    'Real-time help on your daily Angular tickets and production issues',
    'Angular proxy interview support for when you are ready for the next role',
    'Profile positioning and candidate marketing to generate recruiter calls',
    'Onboarding support so you get productive fast on a new project',
    'Confidential, in-house experts — no sub-contracting, NDAs available',
  ],
  bottomCTAHeading: 'Stuck on an Angular Ticket? Get Real-Time Job Support Now',
  bottomCTABody:
    'In-house Angular experts available same-day to help you deliver. Contact ProxyTechSupport on WhatsApp now.',
  techLinks: [
    { label: 'Angular signals job support', href: '/angular-signals-job-support/' },
    { label: 'Angular RxJS job support', href: '/angular-rxjs-job-support/' },
  ],
  problemLink: PRODUCTION_LINK,
  extraLinks: [
    ONBOARDING_LINK, ARCHITECTURE_LINK, PERFORMANCE_LINK, MIGRATION_LINK, PROFILE_LINK,
    { label: 'Angular NgRx job support', href: '/angular-ngrx-job-support/' },
    { label: 'Angular reactive forms job support', href: '/angular-reactive-forms-job-support/' },
    { label: 'USA Angular job support', href: '/usa-angular-job-support/' },
    { label: 'How Angular job support works', href: '/how-angular-job-support-works/' },
    EXISTING.dotnetAngular,
  ],
});

export const modernAngularJobSupport: LandingPageConfig = commercialPage({
  slug: 'modern-angular-job-support',
  title: 'Modern Angular Job Support — Signals, Standalone & Zoneless',
  description:
    'Real-time job support for modern Angular — standalone components, signals, the new control flow, deferrable views, zoneless change detection, and typed forms. Same-day, confidential help.',
  keywords: [
    'modern Angular job support', 'Angular signals support', 'standalone components support',
    'zoneless Angular support', 'new Angular control flow', 'Angular deferrable views support',
    'latest Angular job support', 'Angular migration to signals',
  ],
  h1: 'Modern Angular Job Support — Signals, Standalone Components & Zoneless',
  tagline:
    'Modern Angular changed how apps are built. We help you adopt signals, standalone components, the new control flow, and zoneless change detection on your real project.',
  heroEyebrow: 'Modern Angular Support',
  painIntro:
    'Your team is moving to signals, standalone components, the new @if/@for control flow, deferrable views, or zoneless change detection — and the patterns you knew no longer apply cleanly. Migrating a real app while keeping it stable is where teams get stuck.',
  heroVariant:
    'We help you work with modern Angular the way it is actually built today: signals and computed state, signal inputs and outputs, the new template control flow, @defer deferrable views, zoneless change detection, typed reactive forms, and standalone-first architecture — while safely migrating existing NgModule-based code. We work on your codebase, resolve the edge cases, and help you avoid the subtle reactivity and change-detection bugs that come with the transition.',
  faqs: [
    {
      question: 'What is "modern Angular" and why does it matter?',
      answer:
        'Modern Angular refers to the current, signals-first way of building Angular apps — standalone components, signals and computed state, the new control flow, deferrable views, and increasingly zoneless change detection. It changes how you structure components, manage state, and reason about reactivity, and getting it right matters for performance and maintainability.',
    },
    {
      question: 'Can you help migrate an older Angular app to signals and standalone?',
      answer:
        'Yes. We help incrementally migrate NgModule-based apps to standalone components, move suitable state from RxJS to signals, adopt the new control flow, and introduce zoneless change detection where appropriate — safely, without breaking existing functionality. See our Angular upgrade and migration support.',
    },
    {
      question: 'Do you cover signals, computed, and effects properly?',
      answer:
        'Yes. We help you use signals, computed, and effect correctly — avoiding common mistakes like effects that cause loops, over-using effects for derived state, and mixing signals and RxJS in ways that create subtle bugs. We also cover interop with toSignal/toObservable.',
    },
    {
      question: 'Is zoneless change detection production-ready for my app?',
      answer:
        'It depends on your dependencies and patterns. We help you assess readiness, identify code that relies on Zone.js, and adopt zoneless change detection where it is safe — or prepare the codebase so the switch is low-risk later.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your Angular version, your goals, and your codebase situation. We assign a modern-Angular expert, usually the same day, and every engagement is confidential.',
    },
  ],
  useCasesTitle: 'Modern Angular Situations We Help With',
  useCases: [
    'Migrating components from NgModules to standalone without breaking lazy loading',
    'Moving derived state from RxJS to signals and computed cleanly',
    'Adopting the new @if/@for/@switch control flow across a large template base',
    'Using @defer deferrable views to improve initial load without breaking behaviour',
    'Introducing zoneless change detection and finding the code that depends on Zone.js',
    'Debugging reactivity bugs caused by mixing signals, effects, and observables',
  ],
  proxyTitle: 'Modern Angular for Interviews Too',
  proxyIntro:
    'Interviews increasingly test modern Angular. We help you both use it at work and explain it under interview pressure.',
  proxyPoints: [
    'Live support adopting signals, standalone, and control flow on your project',
    'Interview preparation on modern Angular reactivity and architecture',
    'Migration planning that keeps the app stable throughout',
    'Profile positioning that highlights your modern-Angular experience',
    'Confidential, in-house experts across all time zones',
  ],
  bottomCTAHeading: 'Adopting Modern Angular? Get Expert Support Now',
  bottomCTABody:
    'Signals, standalone components, and zoneless change detection — done right on your real app. Contact ProxyTechSupport on WhatsApp now.',
  techLinks: [
    { label: 'Angular signals job support', href: '/angular-signals-job-support/' },
    { label: 'Angular standalone components job support', href: '/angular-standalone-components-job-support/' },
  ],
  problemLink: MIGRATION_LINK,
  extraLinks: [
    { label: 'Angular zoneless change detection job support', href: '/angular-zoneless-change-detection-job-support/' },
    { label: 'Angular signal input output job support', href: '/angular-signal-input-output-job-support/' },
    { label: 'Angular deferrable views job support', href: '/angular-deferrable-views-job-support/' },
    { label: 'Angular signals guide', href: '/angular-signals-guide/' },
    ARCHITECTURE_LINK, PERFORMANCE_LINK,
  ],
});

export const angularProductionSupport: LandingPageConfig = commercialPage({
  slug: 'angular-production-support',
  title: 'Angular Production Support — Fix Live App Issues Fast',
  description:
    'Real-time Angular production support: fix change-detection storms, memory leaks, broken lazy routes, SSR/hydration errors, bundle bloat, and upgrade regressions with an expert on the call. Same-day help.',
  keywords: [
    'Angular production support', 'Angular production issue help', 'Angular memory leak support',
    'Angular performance production issue', 'Angular SSR hydration error', 'Angular change detection problem',
    'Angular firefighting', 'live Angular application support',
  ],
  h1: 'Angular Production Support — Fix Live Application Issues Fast',
  tagline:
    'When an Angular app breaks or degrades in production, you need an expert on the call now — not a ticket queue. Real-time help for rendering, memory, SSR, and build incidents.',
  heroEyebrow: 'Angular Production Firefighting',
  painIntro:
    'A production Angular app suddenly slow, leaking memory, throwing hydration errors, or failing to build after an upgrade? Production incidents are high-pressure and hard to debug alone when users are affected.',
  heroVariant:
    'Angular apps fail in specific ways — change-detection storms from unbounded bindings, memory leaks from unclosed subscriptions and detached views, broken lazy-loaded routes, SSR/hydration mismatches, bundle-size regressions, and breakage after a version bump. Our engineers have resolved these under real deadlines. We join your session, find the root cause, stabilize the app, and help you ship a durable fix.',
  faqs: [
    {
      question: 'What Angular production issues can you help with?',
      answer:
        'Change-detection and rendering slowdowns, memory leaks from subscriptions and DOM references, broken lazy-loaded routes and chunk-load errors, SSR and hydration mismatches, bundle-size and Core Web Vitals regressions, failing production builds, and breakage after an Angular version upgrade. We work the incident live until the app is stable.',
    },
    {
      question: 'How fast can you join a production incident?',
      answer:
        'Usually within the same working session. Message us on WhatsApp with the symptoms and stack, and we assign an engineer who has handled that class of Angular incident before. For active outages we prioritize immediate response.',
    },
    {
      question: 'Do you cover SSR and hydration problems specifically?',
      answer:
        'Yes. SSR with Angular Universal and hydration is a common source of production issues — hydration mismatches, flicker, memory growth on the server, and platform-specific code running in the wrong environment. We help you diagnose and fix these safely.',
    },
    {
      question: 'Can you help prevent recurrence?',
      answer:
        'Yes. Beyond the immediate fix, we help add the right guardrails — OnPush and signals where appropriate, subscription hygiene, bundle budgets, performance monitoring, and CI checks — so the next regression is caught early.',
    },
    {
      question: 'Is production support confidential?',
      answer:
        'Completely. We never share client, employer, or system details, and NDAs are available on request. All incident work is handled with full professional discretion.',
    },
  ],
  useCasesTitle: 'Production Angular Incidents We Resolve',
  useCases: [
    'An app that became slow or unresponsive after a release — change-detection or rendering root cause',
    'Memory growing over time from unclosed subscriptions or retained component references',
    'Lazy-loaded routes throwing chunk-load errors in production after a deploy',
    'SSR/hydration mismatches causing flicker, errors, or broken interactivity',
    'Bundle size or Core Web Vitals regressing and failing performance budgets',
    'A production build failing or behaving differently after an Angular version upgrade',
  ],
  proxyTitle: 'Beyond the Fix — Onboarding & Interviews',
  proxyIntro:
    'Many people who reach us during a production incident also need help ramping onto the project or moving to the next role. We support the whole journey.',
  proxyPoints: [
    'Root-cause analysis and a durable fix during the live incident',
    'Post-incident hardening — OnPush, subscription hygiene, budgets, and monitoring',
    'Project onboarding support so you get productive on an unfamiliar Angular codebase',
    'Interview and profile support for when you are ready for the next Angular role',
    'Confidential, in-house experts — no sub-contracting, NDAs available',
  ],
  bottomCTAHeading: 'Angular App Down or Degraded? Get Production Support Now',
  bottomCTABody:
    'Real-time Angular production support — rendering, memory, SSR, and build incidents resolved with an expert on the call. Contact ProxyTechSupport on WhatsApp now.',
  techLinks: [
    { label: 'Angular performance optimization job support', href: '/angular-performance-optimization-job-support/' },
    { label: 'Angular memory leak debugging support', href: '/angular-memory-leak-debugging-support/' },
  ],
  problemLink: EXISTING.production,
  extraLinks: [
    PERFORMANCE_LINK, ARCHITECTURE_LINK,
    { label: 'Angular application debugging support', href: '/angular-application-debugging-support/' },
    { label: 'Angular SSR job support', href: '/angular-ssr-job-support/' },
    { label: 'Angular hydration job support', href: '/angular-hydration-job-support/' },
    { label: 'Angular production issue support guide', href: '/angular-production-issue-support-guide/' },
    EXISTING.production,
  ],
});

export const angularProjectOnboardingSupport: LandingPageConfig = commercialPage({
  slug: 'angular-project-onboarding-support',
  title: 'Angular Project Onboarding Support — Ramp Up Fast & Deliver',
  description:
    'Just joined an Angular project? Get real-time onboarding support to understand the codebase, build setup, and architecture, deliver your first tickets, and pass early reviews. Same-day help.',
  keywords: [
    'Angular onboarding support', 'new Angular job support', 'Angular ramp up help',
    'Angular new project support', 'Angular codebase onboarding', 'Angular first tasks help',
    'Angular new developer support', 'Angular project ramp up',
  ],
  h1: 'Angular Project Onboarding Support — Get Productive on a New Project Fast',
  tagline:
    'Starting a new Angular role or project is where most people struggle. We help you understand the setup, deliver early, and build credibility from week one.',
  heroEyebrow: 'Angular Onboarding Support',
  painIntro:
    'New Angular project, unfamiliar codebase, custom build setup, and a manager expecting output fast? Onboarding is where confidence gets tested — large module trees, mixed NgModule and standalone code, custom state patterns, and tooling you have never seen.',
  heroVariant:
    'The first few weeks on an Angular project decide how you are perceived for months. We help you read and navigate the existing code, understand the module and routing structure, the state-management approach, the build and CI setup, and the component conventions — then deliver your first tickets cleanly so standups, reviews, and client calls go well instead of exposing gaps.',
  faqs: [
    {
      question: 'What is Angular project onboarding support?',
      answer:
        'It is real-time help during your first days and weeks on a new Angular project. We help you understand the existing codebase, architecture, build setup, and conventions, get your environment working, and deliver your first tickets confidently — so you build credibility fast instead of struggling silently.',
    },
    {
      question: 'The codebase is large and mixes old and new patterns — can you help?',
      answer:
        'Yes. Mixed NgModule and standalone code, custom state management, and inconsistent RxJS patterns are exactly what we help with. An expert works through the code with you, explains how it fits together, and helps you make your first safe changes without breaking anything.',
    },
    {
      question: 'Can you help me set up the build and environment?',
      answer:
        'Yes. Environment setup — Node and Angular CLI versions, package installs, environment configs, proxy setups for APIs, and running the app and tests locally — is a common first blocker. We help you get a working environment quickly.',
    },
    {
      question: 'Will you help during my early standups and reviews?',
      answer:
        'Yes. We prepare you for standups, sprint planning, and design reviews so you can report progress clearly and contribute confidently. This pairs with our Angular client call and standup support.',
    },
    {
      question: 'Is onboarding support confidential and same-day?',
      answer:
        'Yes to both. Engagements are fully confidential with NDAs available, and we can usually start the same day you reach out on WhatsApp.',
    },
  ],
  useCasesTitle: 'Onboarding Situations We Help With',
  useCases: [
    'Inheriting a large Angular codebase mixing NgModules and standalone components',
    'Getting the CLI, Node version, environment configs, and API proxies working from scratch',
    'Understanding an existing state-management approach (NgRx, services, or Signal Store) well enough to change it safely',
    'Tracing how routing, guards, and lazy loading are wired before making your first change',
    'Delivering your first sprint tickets confidently and passing code review',
    'Handling early standups and client calls without exposing knowledge gaps',
  ],
  proxyTitle: 'Onboarding Into Client Calls & Standups',
  proxyIntro:
    'Onboarding is not just code — it is communication. We help you handle the meetings that shape early impressions.',
  proxyPoints: [
    'Preparation before standups so you can report progress and blockers clearly',
    'Support during architecture and design discussions on your Angular project',
    'Help translating tickets and requirements into a concrete delivery plan',
    'Guidance on the questions to ask (and not ask) to build credibility fast',
    'A direct line to an expert whenever you get stuck during your first weeks',
  ],
  bottomCTAHeading: 'Just Joined an Angular Project? Get Onboarding Support Now',
  bottomCTABody:
    'Ramp up fast, deliver early, and build credibility with real-time Angular onboarding support. Contact ProxyTechSupport on WhatsApp now.',
  techLinks: [
    { label: 'Angular architecture support', href: '/angular-architecture-support/' },
    { label: 'Angular component architecture job support', href: '/angular-component-architecture-job-support/' },
  ],
  problemLink: PRODUCTION_LINK,
  extraLinks: [
    { label: 'Angular client call & standup support', href: '/angular-client-call-standup-support/' },
    { label: 'Angular project onboarding guide', href: '/angular-project-onboarding-guide/' },
    ARCHITECTURE_LINK, EXISTING.clientCall, EXISTING.realtimeGuide,
  ],
});

export const angularClientCallStandupSupport: LandingPageConfig = commercialPage({
  slug: 'angular-client-call-standup-support',
  title: 'Angular Client Call & Standup Support — Speak With Confidence',
  description:
    'Real-time support for Angular standups, sprint planning, architecture reviews, and client calls. Present your work, handle questions, and communicate like a senior Angular engineer. Same-day help.',
  keywords: [
    'Angular client call support', 'Angular standup support', 'Angular meeting support',
    'Angular sprint planning support', 'Angular architecture review support', 'Angular client meeting help',
    'Angular developer communication support', 'frontend client call support',
  ],
  h1: 'Angular Client Call & Standup Support — Communicate Like a Senior Engineer',
  tagline:
    'The meetings matter as much as the code. Get real-time support for standups, sprint planning, architecture reviews, and client calls on your Angular project.',
  heroEyebrow: 'Angular Communication Support',
  painIntro:
    'Dreading the daily standup because you are unsure how to explain your progress? Facing a client call about UI delivery or an architecture review you are underprepared for? Strong developers lose credibility in meetings they could have handled with the right backup.',
  heroVariant:
    'Angular meetings are their own skill — explaining why a feature slipped, defending a component or state-management design, giving a realistic estimate for a refactor, or fielding a client’s pointed question about performance or timelines. We prepare you before these calls and back you in real time, so you present your work clearly, handle hard questions, and come across as the senior engineer you are.',
  faqs: [
    {
      question: 'What kind of Angular meetings do you support?',
      answer:
        'Daily standups, sprint planning and estimation, backlog refinement, architecture and design reviews, UI/feature demos, and client-facing calls. We help you prepare talking points, anticipate questions, and communicate progress, blockers, and trade-offs clearly for Angular work specifically.',
    },
    {
      question: 'How does real-time support during a call work?',
      answer:
        'Before the call we align on the agenda and likely questions and prepare your key points. During the call we can provide discreet real-time guidance through chat — suggested framing, technical answers, and estimates — so you stay confident and accurate. Everything is confidential.',
    },
    {
      question: 'Can you help me explain an architecture decision to a client?',
      answer:
        'Yes. We help you translate technical decisions — why a particular component structure, state approach, lazy-loading strategy, or SSR design was chosen — into clear, defensible language that non-specialist stakeholders understand while still holding up to technical scrutiny.',
    },
    {
      question: 'Is this different from job support and onboarding?',
      answer:
        'It overlaps. This focuses specifically on the communication and meeting side, and pairs naturally with our Angular job support (the hands-on work) and onboarding support. Many clients use all three together.',
    },
    {
      question: 'Is it confidential?',
      answer:
        'Yes, completely. We never disclose client, employer, or meeting details, and NDAs are available on request.',
    },
  ],
  useCasesTitle: 'Meeting Situations We Help You Handle',
  useCases: [
    'A standup where you must report slow progress on a hard bug without losing credibility',
    'A client call reviewing UI delivery, performance, or timeline where tough questions are expected',
    'An architecture review defending your component, state, or routing design choices',
    'Sprint planning where you must give realistic estimates for Angular tasks you are unsure about',
    'A stakeholder demo of a new feature that must land well and handle follow-up questions',
    'A design discussion where you want to contribute at a senior level, not just listen',
  ],
  proxyTitle: 'Pairs With Onboarding & Job Support',
  proxyIntro:
    'Communication support works best alongside hands-on help. We back both the work and the way you present it.',
  proxyPoints: [
    'Pre-call preparation and talking points tailored to your Angular project',
    'Discreet real-time guidance during standups, reviews, and client calls',
    'Hands-on job support for the underlying tasks you are reporting on',
    'Onboarding support for your first weeks on a new Angular project',
    'Confidential, in-house experts available across all time zones',
  ],
  bottomCTAHeading: 'Important Angular Call Coming Up? Get Real-Time Support Now',
  bottomCTABody:
    'Handle standups, architecture reviews, and client calls with confidence. Contact ProxyTechSupport on WhatsApp now.',
  techLinks: [
    { label: 'Angular architecture support', href: '/angular-architecture-support/' },
    { label: 'Angular project onboarding support', href: '/angular-project-onboarding-support/' },
  ],
  problemLink: PRODUCTION_LINK,
  extraLinks: [ONBOARDING_LINK, ARCHITECTURE_LINK, EXISTING.clientCall, EXISTING.realtimeGuide],
});

export const angularLiveProjectSupport: LandingPageConfig = commercialPage({
  slug: 'angular-live-project-support',
  title: 'Angular Live Project Support — Hands-On Help While You Work',
  description:
    'Angular live project support — an expert works alongside you on your real tickets in real time: features, bug fixes, refactors, RxJS, state, and reviews. Same-day, confidential help.',
  keywords: [
    'Angular live project support', 'Angular real-time project help', 'Angular pair programming support',
    'Angular live coding support', 'Angular hands-on support', 'Angular ticket support',
    'Angular development support', 'Angular remote pairing',
  ],
  h1: 'Angular Live Project Support — An Expert Beside You in Real Time',
  tagline:
    'Work through your Angular tickets with an experienced engineer on the call — features, fixes, refactors, and reviews, live during your hours.',
  heroEyebrow: 'Angular Live Support',
  painIntro:
    'Sometimes you do not need a tutorial — you need someone experienced beside you while you work through a real Angular ticket, so you deliver it correctly the first time and understand why.',
  heroVariant:
    'Angular live project support is real-time pairing on your actual work: implementing a feature, tracking down a bug, refactoring a tangled component, untangling RxJS, or getting a review before you push. We adapt to your codebase and pace — talking through the approach, catching mistakes early, and leaving you more capable after each session. Fully confidential, same-day.',
  faqs: [
    {
      question: 'What is Angular live project support?',
      answer:
        'It is real-time, hands-on pairing with an experienced Angular engineer on your actual project — implementing features, fixing bugs, refactoring, and reviewing code together during your working hours. You stay in control; we help you get it right.',
    },
    {
      question: 'How is it delivered?',
      answer:
        'Through screen share, chat, or call, depending on your preference and your employer’s policies. We work at your pace on your real tickets, explaining decisions so you build skill while you deliver.',
    },
    {
      question: 'What can we work on together?',
      answer:
        'Anything on your Angular board — new components and features, bug investigations, RxJS and signals, NgRx and Signal Store, forms, routing, performance issues, test writing, and pre-push code review.',
    },
    {
      question: 'Will this help me grow, not just deliver?',
      answer:
        'Yes. Live pairing is one of the fastest ways to learn. Because we explain the reasoning as we go, you pick up patterns and techniques you can apply on the next ticket yourself.',
    },
    {
      question: 'Is it confidential and same-day?',
      answer:
        'Yes to both. Fully confidential with NDAs available, and we can usually start the same day you reach out on WhatsApp.',
    },
  ],
  useCasesTitle: 'What We Work On Live',
  useCases: [
    'Implementing a feature end to end with correct component and state design',
    'Debugging a stubborn bug where you are out of ideas',
    'Refactoring a large or tangled component safely',
    'Untangling RxJS operators and subscription lifecycles',
    'Writing meaningful unit and component tests',
    'A code review pass before you open a pull request',
  ],
  proxyTitle: 'From Live Support to Career Support',
  proxyIntro:
    'Live project support keeps you delivering. We also help you move up when you are ready.',
  proxyPoints: [
    'Real-time pairing on your daily Angular tickets',
    'Production support when something breaks in the live app',
    'Interview support and mock interviews for your next role',
    'Profile positioning and candidate marketing to generate calls',
    'Confidential, in-house Angular experts across all time zones',
  ],
  bottomCTAHeading: 'Want an Expert Beside You on Your Angular Work? Start Now',
  bottomCTABody:
    'Real-time Angular pairing on your real tickets. Contact ProxyTechSupport on WhatsApp now.',
  techLinks: [
    { label: 'Angular code review support', href: '/angular-code-review-support/' },
    { label: 'Angular application debugging support', href: '/angular-application-debugging-support/' },
  ],
  problemLink: PRODUCTION_LINK,
  extraLinks: [ONBOARDING_LINK, ARCHITECTURE_LINK, PERFORMANCE_LINK, EXISTING.realtimeGuide],
});

export const angularCodeReviewSupport: LandingPageConfig = commercialPage({
  slug: 'angular-code-review-support',
  title: 'Angular Code Review Support — Ship Cleaner Pull Requests',
  description:
    'Get expert Angular code review before you push — component design, RxJS, change detection, accessibility, and performance. Real-time, confidential feedback that passes team review.',
  keywords: [
    'Angular code review support', 'Angular pull request review', 'Angular PR review help',
    'Angular best practices review', 'Angular code quality support', 'Angular review feedback',
    'Angular clean code support', 'Angular pre-merge review',
  ],
  h1: 'Angular Code Review Support — Pass Team Review With Confidence',
  tagline:
    'An experienced Angular engineer reviews your code before your team does — catching design, RxJS, performance, and accessibility issues early.',
  heroEyebrow: 'Angular Code Review',
  painIntro:
    'Tired of pull requests coming back with a wall of change requests? Unsure whether your component design, RxJS usage, or change-detection strategy is right? A pre-review pass saves you rounds of rework and protects your reputation.',
  heroVariant:
    'We review your Angular code the way a strong senior would — component and template design, OnPush and signals usage, RxJS operator choice and subscription hygiene, state-management fit, accessibility, testability, and performance. You get concrete, prioritized feedback you can act on before your team sees it, plus the reasoning so you internalize the patterns.',
  faqs: [
    {
      question: 'What does Angular code review support include?',
      answer:
        'A thorough review of your component and template design, change-detection strategy, RxJS and signals usage, state management, forms, accessibility, testability, and performance. You get prioritized, actionable feedback with explanations — not just a list of nitpicks.',
    },
    {
      question: 'Can you review before I open a PR?',
      answer:
        'Yes — that is the ideal time. We do a pre-PR pass so you fix the important issues before your team reviews, reducing back-and-forth and making you look sharp.',
    },
    {
      question: 'Do you help me understand the feedback, not just apply it?',
      answer:
        'Yes. We explain why each change matters so you learn the patterns and make fewer of the same mistakes next time. Over a few reviews, your PRs get noticeably cleaner.',
    },
    {
      question: 'What review standards do you use?',
      answer:
        'Modern Angular best practices — standalone-first structure, signals and OnPush for performance, correct RxJS patterns, clean separation of smart and presentational components, accessible templates, and meaningful tests — adapted to your team’s conventions.',
    },
    {
      question: 'Is it confidential?',
      answer:
        'Yes. All code and context are kept confidential, and NDAs are available on request.',
    },
  ],
  useCasesTitle: 'What We Catch in Review',
  useCases: [
    'Change-detection and performance issues before they reach production',
    'RxJS anti-patterns — nested subscribes, missing teardown, wrong operators',
    'Component design problems — bloated components, leaky abstractions, poor inputs/outputs',
    'State-management smells in NgRx or the Signal Store',
    'Accessibility and template issues that fail audits',
    'Missing or shallow tests that will not catch regressions',
  ],
  proxyTitle: 'Review Plus Everything Else',
  proxyIntro:
    'Code review pairs naturally with live support and interview prep.',
  proxyPoints: [
    'Pre-PR reviews that reduce rework and raise your standing',
    'Live project support for the harder tickets',
    'Interview support where code quality is assessed',
    'Profile positioning that reflects strong engineering practice',
    'Confidential, in-house Angular experts',
  ],
  bottomCTAHeading: 'Want a Clean PR Every Time? Get Angular Code Review Support',
  bottomCTABody:
    'Expert Angular review before your team sees it. Contact ProxyTechSupport on WhatsApp now.',
  techLinks: [
    { label: 'Angular smart & presentational components support', href: '/angular-smart-presentational-components-support/' },
    { label: 'Angular unit testing job support', href: '/angular-unit-testing-job-support/' },
  ],
  problemLink: PRODUCTION_LINK,
  extraLinks: [ARCHITECTURE_LINK, PERFORMANCE_LINK, { label: 'Angular live project support', href: '/angular-live-project-support/' }],
});

export const angularApplicationDebuggingSupport: LandingPageConfig = commercialPage({
  slug: 'angular-application-debugging-support',
  title: 'Angular Application Debugging Support — Find the Root Cause Fast',
  description:
    'Stuck on an Angular bug? Get real-time debugging support for change detection, RxJS, state, routing, forms, and build issues. An expert finds the root cause with you. Same-day help.',
  keywords: [
    'Angular debugging support', 'Angular bug fix help', 'Angular error support',
    'Angular change detection bug', 'Angular RxJS debugging', 'Angular NgRx debugging',
    'Angular hard bug help', 'Angular troubleshooting support',
  ],
  h1: 'Angular Application Debugging Support — Root-Cause the Hard Bugs',
  tagline:
    'When a bug has eaten your whole day, an experienced Angular engineer joins you and finds the root cause — fast.',
  heroEyebrow: 'Angular Debugging',
  painIntro:
    'A view that will not update, an RxJS stream firing at the wrong time, a state bug that only happens sometimes, a change-detection error, or an ExpressionChangedAfterItHasBeenChecked warning you cannot pin down? Some Angular bugs are genuinely hard to trace alone.',
  heroVariant:
    'We debug your real Angular application with you — reproducing the issue, reading the actual code and data flow, and isolating the root cause instead of guessing. We cover change detection, signals and RxJS timing, NgRx and Signal Store state, routing and guards, forms, HttpClient and interceptors, SSR-specific bugs, and build/runtime errors. You get the fix and the understanding of why it happened.',
  faqs: [
    {
      question: 'What kinds of Angular bugs do you help debug?',
      answer:
        'Change-detection issues (including ExpressionChangedAfterItHasBeenChecked), views not updating, RxJS timing and subscription bugs, NgRx and Signal Store state problems, routing and guard issues, form value and validation bugs, HttpClient and interceptor problems, SSR/hydration-specific bugs, and build/runtime errors.',
    },
    {
      question: 'The bug is intermittent — can you still help?',
      answer:
        'Yes. Intermittent bugs are often timing, subscription, or change-detection related. We help you reproduce reliably, add the right instrumentation, and isolate the trigger so you can fix it for good.',
    },
    {
      question: 'Do you just fix it or explain it?',
      answer:
        'Both. We fix the bug and explain the root cause and the pattern behind it, so you recognize and avoid the same class of problem in future.',
    },
    {
      question: 'How quickly can you join?',
      answer:
        'Usually the same working session. Message us on WhatsApp with the symptoms and we assign an engineer who has seen that class of Angular bug before.',
    },
    {
      question: 'Is it confidential?',
      answer:
        'Yes, completely, with NDAs available on request.',
    },
  ],
  useCasesTitle: 'Bugs We Root-Cause',
  useCases: [
    'A component view that will not reflect updated data',
    'ExpressionChangedAfterItHasBeenChecked errors you cannot locate',
    'RxJS streams firing too often, too little, or in the wrong order',
    'State that is out of sync in NgRx or the Signal Store',
    'Form values, validation, or typed-form issues that make no sense',
    'A bug that only appears in production or under SSR',
  ],
  proxyTitle: 'Debugging Plus Ongoing Support',
  proxyIntro:
    'One-off debugging often turns into ongoing help — we are set up for both.',
  proxyPoints: [
    'Same-session root-cause analysis on your hardest bugs',
    'Ongoing live project support once the fire is out',
    'Production support for live-app incidents',
    'Interview and profile support for your next move',
    'Confidential, in-house Angular experts',
  ],
  bottomCTAHeading: 'Stuck on an Angular Bug? Get Debugging Support Now',
  bottomCTABody:
    'An expert finds the root cause with you — fast. Contact ProxyTechSupport on WhatsApp now.',
  techLinks: [
    { label: 'Angular change detection job support', href: '/angular-change-detection-job-support/' },
    { label: 'Angular RxJS job support', href: '/angular-rxjs-job-support/' },
  ],
  problemLink: PRODUCTION_LINK,
  extraLinks: [PERFORMANCE_LINK, { label: 'Angular memory leak debugging support', href: '/angular-memory-leak-debugging-support/' }, { label: 'Angular live project support', href: '/angular-live-project-support/' }],
});

export const angularPerformanceSupport: LandingPageConfig = commercialPage({
  slug: 'angular-performance-support',
  title: 'Angular Performance Support — Faster Apps & Better Core Web Vitals',
  description:
    'Make your Angular app fast: fix change-detection overhead, large bundles, slow lists, and poor Core Web Vitals with OnPush, signals, lazy loading, and deferrable views. Real-time expert help.',
  keywords: [
    'Angular performance support', 'Angular performance optimization', 'Angular Core Web Vitals',
    'Angular change detection performance', 'Angular bundle size optimization', 'Angular slow app fix',
    'Angular OnPush support', 'Angular rendering performance',
  ],
  h1: 'Angular Performance Support — Make Your App Fast and Keep It Fast',
  tagline:
    'Slow lists, heavy change detection, bloated bundles, or failing Core Web Vitals? We profile your real Angular app and make it measurably faster.',
  heroEyebrow: 'Angular Performance',
  painIntro:
    'Your Angular app feels sluggish, the bundle keeps growing, big lists jank, or Lighthouse and Core Web Vitals scores are dragging the product down — and you are not sure where the time is actually going.',
  heroVariant:
    'We profile your real app and fix the causes, not the symptoms: change-detection overhead (OnPush, signals, trackBy), bundle size (lazy loading, deferrable views, tree-shaking, dependency audits), rendering cost (virtual scrolling, memoization), and Core Web Vitals (LCP, CLS, INP). You get concrete before/after wins and the patterns to keep it fast as the app grows.',
  faqs: [
    {
      question: 'What Angular performance problems do you fix?',
      answer:
        'Heavy or excessive change detection, slow and janky lists, large initial bundles and slow first load, unnecessary re-renders, memory growth, and poor Core Web Vitals (LCP, CLS, INP). We profile first, then fix the biggest wins with OnPush, signals, trackBy, lazy loading, deferrable views, and virtual scrolling.',
    },
    {
      question: 'Can you improve our Core Web Vitals specifically?',
      answer:
        'Yes. We target LCP, CLS, and INP with concrete Angular techniques — deferrable views and lazy loading for LCP, layout stability for CLS, and reducing main-thread work and change detection for INP — and help you measure the improvement.',
    },
    {
      question: 'Will OnPush or signals break my app?',
      answer:
        'Not when applied correctly. We migrate components to OnPush or signals carefully, identify the mutations and bindings that need attention, and verify behaviour so you get the performance win without regressions.',
    },
    {
      question: 'Do you reduce bundle size?',
      answer:
        'Yes. We audit dependencies, apply lazy loading and deferrable views, remove dead code, fix eager imports, and tune the build so initial load shrinks meaningfully.',
    },
    {
      question: 'Is it confidential and same-day?',
      answer:
        'Yes to both, with NDAs available on request.',
    },
  ],
  useCasesTitle: 'Performance Wins We Deliver',
  useCases: [
    'A page that feels slow because change detection runs far too often',
    'A large list or table that janks when scrolling or filtering',
    'A bundle that grew too big and slows first load',
    'Poor Lighthouse / Core Web Vitals scores hurting the product',
    'Memory growth over long sessions from leaks and retained references',
    'Migrating hot components to OnPush or signals without regressions',
  ],
  proxyTitle: 'Performance Plus the Bigger Picture',
  proxyIntro:
    'Performance work often reveals architecture and production concerns — we cover those too.',
  proxyPoints: [
    'Profiling and concrete before/after performance wins',
    'Architecture support to keep the app fast as it scales',
    'Production support if performance is causing live incidents',
    'Interview support on performance and rendering topics',
    'Confidential, in-house Angular experts',
  ],
  bottomCTAHeading: 'Angular App Too Slow? Get Performance Support Now',
  bottomCTABody:
    'Profiled, measurable performance improvements on your real app. Contact ProxyTechSupport on WhatsApp now.',
  techLinks: [
    { label: 'Angular performance optimization job support', href: '/angular-performance-optimization-job-support/' },
    { label: 'Angular OnPush job support', href: '/angular-onpush-job-support/' },
  ],
  problemLink: PRODUCTION_LINK,
  extraLinks: [
    { label: 'Angular bundle optimization job support', href: '/angular-bundle-optimization-job-support/' },
    { label: 'Angular Core Web Vitals support', href: '/angular-core-web-vitals-support/' },
    { label: 'Angular change detection job support', href: '/angular-change-detection-job-support/' },
    ARCHITECTURE_LINK,
  ],
});

export const angularUpgradeMigrationSupport: LandingPageConfig = commercialPage({
  slug: 'angular-upgrade-migration-support',
  title: 'Angular Upgrade & Migration Support — Move Versions Safely',
  description:
    'Upgrade Angular safely — version-to-version upgrades, AngularJS-to-Angular, NgModules-to-standalone, and RxJS migrations. We handle breaking changes without breaking your app.',
  keywords: [
    'Angular upgrade support', 'Angular migration support', 'Angular version upgrade help',
    'AngularJS to Angular migration', 'NgModules to standalone migration', 'Angular breaking changes',
    'Angular modernization support', 'Angular update help',
  ],
  h1: 'Angular Upgrade & Migration Support — Version Moves Without the Pain',
  tagline:
    'Version upgrades, AngularJS-to-Angular, NgModules-to-standalone, and RxJS migrations — done incrementally and safely, keeping your app working the whole way.',
  heroEyebrow: 'Angular Upgrade & Migration',
  painIntro:
    'Stuck several versions behind, dreading the breaking changes, or migrating a legacy AngularJS app? Upgrades stall projects and introduce subtle regressions when done without a plan.',
  heroVariant:
    'We plan and execute Angular upgrades incrementally: version-to-version updates handling deprecations and breaking changes, AngularJS-to-Angular migrations, NgModules-to-standalone conversions, RxJS version migrations, and Material upgrades. We use the official migration schematics where they help, resolve what they cannot, and verify behaviour at each step so the app keeps working throughout.',
  faqs: [
    {
      question: 'What Angular migrations do you handle?',
      answer:
        'Version-to-version upgrades (including multi-version jumps), AngularJS-to-Angular migrations, NgModules-to-standalone conversions, RxJS version migrations, Angular Material upgrades, and build-tooling migrations. We plan the path and execute it incrementally.',
    },
    {
      question: 'We are several versions behind — how do you approach it?',
      answer:
        'We upgrade one major version at a time, applying the official update schematics, resolving breaking changes and deprecations, and verifying the app at each step. This is far safer than attempting a single large jump.',
    },
    {
      question: 'Can you migrate NgModules to standalone components?',
      answer:
        'Yes. We convert to standalone incrementally using the standalone migration schematics where possible, fix the cases they cannot handle, and keep lazy loading and routing working throughout.',
    },
    {
      question: 'Will the app keep working during the migration?',
      answer:
        'That is the goal and the method. We migrate in safe increments with verification at each step, so functionality is preserved and regressions are caught early rather than discovered in production.',
    },
    {
      question: 'Is it confidential and same-day?',
      answer:
        'Yes to both, with NDAs available on request.',
    },
  ],
  useCasesTitle: 'Migration Situations We Handle',
  useCases: [
    'An app several major Angular versions behind that needs to catch up',
    'A legacy AngularJS application that must move to modern Angular',
    'Converting an NgModule-based app to standalone components incrementally',
    'Migrating RxJS versions and fixing the resulting breaking changes',
    'Upgrading Angular Material and reconciling component API changes',
    'Regressions appearing after a partial or rushed upgrade',
  ],
  proxyTitle: 'Migration Plus Modern Angular',
  proxyIntro:
    'Upgrades are the perfect time to adopt modern Angular. We help with both.',
  proxyPoints: [
    'Incremental, verified version upgrades that keep the app stable',
    'Adopting signals, standalone, and control flow as part of the upgrade',
    'Architecture support to modernize structure while you migrate',
    'Interview support on migration and modernization topics',
    'Confidential, in-house Angular experts',
  ],
  bottomCTAHeading: 'Behind on Angular Versions? Get Upgrade & Migration Support',
  bottomCTABody:
    'Safe, incremental Angular upgrades and migrations. Contact ProxyTechSupport on WhatsApp now.',
  techLinks: [
    { label: 'Angular version migration support', href: '/angular-version-migration-support/' },
    { label: 'AngularJS to Angular migration support', href: '/angularjs-to-angular-migration-support/' },
  ],
  problemLink: PRODUCTION_LINK,
  extraLinks: [
    { label: 'Angular modules to standalone migration support', href: '/angular-modules-to-standalone-migration-support/' },
    { label: 'Legacy Angular modernization support', href: '/legacy-angular-modernization-support/' },
    { label: 'Angular upgrade & migration guide', href: '/angular-upgrade-migration-guide/' },
    { label: 'Modern Angular job support', href: '/modern-angular-job-support/' },
    ARCHITECTURE_LINK,
  ],
});

export const angularArchitectureSupport: LandingPageConfig = commercialPage({
  slug: 'angular-architecture-support',
  title: 'Angular Architecture Support — Scalable, Maintainable App Design',
  description:
    'Design Angular apps that scale — feature-based structure, standalone architecture, state-management strategy, module boundaries, Nx monorepos, and micro-frontends. Real-time expert help.',
  keywords: [
    'Angular architecture support', 'Angular application architecture', 'Angular scalable architecture',
    'Angular feature-based architecture', 'Angular clean architecture', 'Angular monorepo architecture',
    'Angular state management strategy', 'Angular enterprise architecture',
  ],
  h1: 'Angular Architecture Support — Build Apps That Scale and Stay Maintainable',
  tagline:
    'From folder structure to state strategy to monorepos and micro-frontends — we help you design Angular apps that stay maintainable as they grow.',
  heroEyebrow: 'Angular Architecture',
  painIntro:
    'Your Angular app started clean and is now hard to change — tangled dependencies, unclear state ownership, inconsistent patterns, and features that step on each other. Architecture decisions made early are now slowing every team down.',
  heroVariant:
    'We help you design and refactor Angular architecture that scales: feature-based and standalone-first structure, clear module and library boundaries, a state-management strategy that fits (services, signals, NgRx, or Signal Store), smart/presentational separation, lazy-loading and routing design, Nx monorepo structure, and micro-frontend patterns with module federation where they genuinely help. Practical, incremental, and tied to your real codebase.',
  faqs: [
    {
      question: 'What does Angular architecture support cover?',
      answer:
        'Application and folder structure, feature-based and standalone architecture, module and library boundaries, state-management strategy, smart/presentational component separation, routing and lazy-loading design, shared-library design, Nx monorepo structure, and micro-frontend patterns — applied to your real codebase.',
    },
    {
      question: 'How do we choose a state-management approach?',
      answer:
        'We assess your app’s complexity and team, then recommend the right fit — plain services with signals for simpler apps, NgRx or the Signal Store for complex shared state — and help you apply it consistently rather than mixing approaches.',
    },
    {
      question: 'Should we use an Nx monorepo or micro-frontends?',
      answer:
        'It depends on team size, deployment needs, and coupling. We help you decide honestly — Nx monorepos for shared code and consistent tooling, module-federation micro-frontends only when independent deployment truly justifies the complexity.',
    },
    {
      question: 'Can you help refactor an app that is already messy?',
      answer:
        'Yes. We help you introduce boundaries and patterns incrementally, without a risky big-bang rewrite, so the codebase gets more maintainable while continuing to ship.',
    },
    {
      question: 'Is it confidential?',
      answer:
        'Yes, completely, with NDAs available on request.',
    },
  ],
  useCasesTitle: 'Architecture Situations We Help With',
  useCases: [
    'An app that has grown tangled and is now hard to change safely',
    'Choosing and applying a consistent state-management strategy',
    'Designing feature-based, standalone-first structure and clear boundaries',
    'Setting up or restructuring an Nx monorepo',
    'Deciding whether micro-frontends and module federation are worth it',
    'Refactoring incrementally without stopping delivery',
  ],
  proxyTitle: 'Architecture Plus Delivery',
  proxyIntro:
    'Good architecture only matters if the team can deliver on it. We support both.',
  proxyPoints: [
    'Architecture design and incremental refactoring on your real app',
    'Live project support to implement the new structure',
    'Performance support so the architecture stays fast',
    'Interview support on Angular and frontend system design',
    'Confidential, in-house Angular experts',
  ],
  bottomCTAHeading: 'Need a Scalable Angular Architecture? Get Support Now',
  bottomCTABody:
    'Practical, incremental Angular architecture help. Contact ProxyTechSupport on WhatsApp now.',
  techLinks: [
    { label: 'Angular enterprise architecture job support', href: '/angular-enterprise-architecture-job-support/' },
    { label: 'Angular Nx monorepo job support', href: '/angular-nx-monorepo-job-support/' },
  ],
  problemLink: PRODUCTION_LINK,
  extraLinks: [
    { label: 'Angular clean architecture job support', href: '/angular-clean-architecture-job-support/' },
    { label: 'Angular feature-based architecture support', href: '/angular-feature-based-architecture-support/' },
    { label: 'Angular microfrontend job support', href: '/angular-microfrontend-job-support/' },
    { label: 'Angular application architecture guide', href: '/angular-application-architecture-guide/' },
    PERFORMANCE_LINK,
  ],
});

export const angularEnterpriseApplicationSupport: LandingPageConfig = commercialPage({
  slug: 'angular-enterprise-application-support',
  title: 'Angular Enterprise Application Support — Large-Scale App Help',
  description:
    'Support for large-scale enterprise Angular apps — multi-team monorepos, role-based dashboards, complex forms, security, performance, and upgrades in banking, healthcare, and SaaS. Real-time expert help.',
  keywords: [
    'Angular enterprise support', 'enterprise Angular application support', 'large-scale Angular help',
    'Angular enterprise dashboard support', 'Angular banking application support', 'Angular SaaS support',
    'Angular multi-team support', 'Angular enterprise frontend support',
  ],
  h1: 'Angular Enterprise Application Support — Large-Scale, Business-Critical Apps',
  tagline:
    'Enterprise Angular apps carry real weight — many teams, strict security, complex forms, and zero tolerance for downtime. We support them at that scale.',
  heroEyebrow: 'Angular Enterprise Support',
  painIntro:
    'Working on a business-critical Angular app in banking, insurance, healthcare, or a large SaaS platform — where a regression, a security gap, or a slow release has real consequences? Enterprise scale brings challenges that small-app advice does not cover.',
  heroVariant:
    'We support large-scale enterprise Angular applications: multi-team monorepos, role-based dashboards and complex authorization, large dynamic forms, strict security (auth, RBAC, XSS/CSRF), performance at scale, accessibility and compliance, SSR, and safe upgrades across many modules. Our engineers have worked in regulated, high-stakes environments and understand the reliability and process demands that come with them.',
  faqs: [
    {
      question: 'What enterprise Angular challenges do you support?',
      answer:
        'Multi-team monorepos and shared libraries, role-based dashboards and complex authorization, large dynamic and typed forms, strict security (authentication, RBAC, XSS/CSRF), performance and Core Web Vitals at scale, accessibility and compliance, SSR, and coordinated upgrades across many modules.',
    },
    {
      question: 'Do you understand regulated environments like banking and healthcare?',
      answer:
        'Yes. Our engineers have worked on business-critical apps in finance, insurance, and healthcare, where reliability, security, auditability, and process matter as much as features. We work within those constraints.',
    },
    {
      question: 'Can you support a multi-team monorepo?',
      answer:
        'Yes. We help with Nx monorepo structure, library boundaries, shared components and state, consistent tooling and CI, and the coordination patterns that keep many teams productive in one codebase.',
    },
    {
      question: 'Do you help with enterprise security concerns?',
      answer:
        'Yes. Authentication and authorization (OAuth/OIDC, JWT, RBAC), XSS and CSRF protection, secure interceptors, and safe handling of sensitive data are all in scope.',
    },
    {
      question: 'Is it confidential?',
      answer:
        'Yes, completely, with NDAs available — which is standard for the enterprise clients we support.',
    },
  ],
  useCasesTitle: 'Enterprise Situations We Support',
  useCases: [
    'A multi-team Nx monorepo where boundaries and shared code need discipline',
    'Role-based dashboards with complex, data-driven authorization',
    'Large dynamic forms with heavy validation and conditional logic',
    'Security-sensitive apps needing robust auth, RBAC, and XSS/CSRF protection',
    'Performance and accessibility requirements at enterprise scale',
    'Coordinated Angular upgrades across dozens of modules and teams',
  ],
  proxyTitle: 'Enterprise Support End to End',
  proxyIntro:
    'Enterprise work spans architecture, delivery, production, and people. We cover the full range.',
  proxyPoints: [
    'Architecture and monorepo support for large codebases',
    'Live project and production support for business-critical apps',
    'Security, performance, and accessibility at enterprise scale',
    'Interview and profile support for senior and lead enterprise roles',
    'Confidential, in-house Angular experts with NDAs standard',
  ],
  bottomCTAHeading: 'Running a Large Angular App? Get Enterprise Support Now',
  bottomCTABody:
    'Real-time support for business-critical Angular applications. Contact ProxyTechSupport on WhatsApp now.',
  techLinks: [
    { label: 'Angular role-based dashboard support', href: '/angular-role-based-dashboard-support/' },
    { label: 'Angular security job support', href: '/angular-security-job-support/' },
  ],
  problemLink: PRODUCTION_LINK,
  extraLinks: [
    { label: 'Angular multi-tenant application support', href: '/angular-multi-tenant-application-support/' },
    { label: 'Angular enterprise architecture job support', href: '/angular-enterprise-architecture-job-support/' },
    { label: 'Angular enterprise design system support', href: '/angular-enterprise-design-system-support/' },
    ARCHITECTURE_LINK, PERFORMANCE_LINK,
  ],
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const angularCorePages: LandingPageConfig[] = [
  angularSupportServices,
  angularJobSupport,
  modernAngularJobSupport,
  angularProductionSupport,
  angularProjectOnboardingSupport,
  angularClientCallStandupSupport,
  angularLiveProjectSupport,
  angularCodeReviewSupport,
  angularApplicationDebuggingSupport,
  angularPerformanceSupport,
  angularUpgradeMigrationSupport,
  angularArchitectureSupport,
  angularEnterpriseApplicationSupport,
];
