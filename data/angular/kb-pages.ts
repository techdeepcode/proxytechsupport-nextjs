import type { LandingPageConfig, LandingFaqItem, LandingRelatedLink } from '../landing-pages';
import {
  angularPage,
  relatedLinks,
  techHighlights,
  kbFaqs,
  EXISTING,
  HUB_LINK,
  JOB_LINK,
  PRODUCTION_LINK,
  INTERVIEW_HUB_LINK,
  GET_SCHEDULED_LINK,
  PROFILE_LINK,
} from './shared';

/**
 * Angular knowledge-base guides + balanced comparison pages + the Angular job
 * support location directory. Guides are educational; comparisons are balanced
 * and informational (no misleading "winner" claims). All connect into the
 * cluster funnel so nothing is orphaned.
 */

const link = (t: [string, string]): LandingRelatedLink => ({ label: t[0], href: `/${t[1]}/` });

// ─── Guide builder ───────────────────────────────────────────────────────────

interface GuideDef {
  slug: string;
  topic: string; // subject for kbFaqs
  title: string;
  h1: string;
  tagline: string;
  painIntro: string;
  heroVariant: string;
  points: string[]; // "what this guide covers"
  related: [string, string][];
  extraFaqs?: LandingFaqItem[];
}

function guidePage(d: GuideDef): LandingPageConfig {
  return angularPage({
    slug: d.slug,
    title: d.title,
    description: `${d.tagline} A practical Angular guide for working developers and candidates, with links to real-time support if you want hands-on help.`,
    keywords: [
      d.topic, `${d.topic} guide`, `Angular ${d.topic}`, 'Angular guide',
      'Angular help', 'Angular support',
    ],
    h1: d.h1,
    tagline: d.tagline,
    heroEyebrow: 'Angular Knowledge Base',
    painIntro: d.painIntro,
    heroVariant: d.heroVariant,
    geoLine: 'Written for Angular professionals across the USA, Canada, UK, Europe, Australia, and worldwide.',
    timezoneNote: 'If you want hands-on help, our Angular experts are available across all major time zones.',
    highlights: techHighlights,
    faqs: [...(d.extraFaqs ?? []), ...kbFaqs(d.topic)],
    useCasesSection: {
      title: 'What This Guide Covers',
      cases: d.points,
    },
    proxySection: {
      title: 'Want Hands-On Angular Help?',
      intro: 'This is an educational guide. If you would rather have an expert work on it with you, we offer real-time support.',
      points: [
        'Real-time Angular job support on your live project',
        'Production issue support when something breaks',
        'Interview support and calibrated mock interviews',
        'Profile positioning and candidate marketing',
        'Confidential, in-house Angular experts across all time zones',
      ],
    },
    bottomCTAHeading: 'Prefer an Expert to Help Directly?',
    bottomCTABody: 'Real-time, in-house Angular experts available same-day. Contact ProxyTechSupport on WhatsApp now.',
    relatedLinks: relatedLinks({
      geoLinks: [HUB_LINK, JOB_LINK],
      techLinks: d.related.slice(0, 2).map(link),
      problemLink: PRODUCTION_LINK,
      proxyLink: INTERVIEW_HUB_LINK,
      additionalLinks: [
        ...d.related.slice(2).map(link),
        JOB_LINK, INTERVIEW_HUB_LINK, HUB_LINK, EXISTING.realtimeGuide,
      ],
    }),
  });
}

const guideDefs: GuideDef[] = [
  {
    slug: 'what-is-angular-job-support', topic: 'Angular job support',
    title: 'What Is Angular Job Support? A Practical Guide',
    h1: 'What Is Angular Job Support?',
    tagline: 'Angular job support is real-time, hands-on help from an experienced Angular engineer while you work on your real project.',
    painIntro: 'Wondering what "Angular job support" actually means and whether it can help you? This guide explains it plainly.',
    heroVariant: 'Angular job support means an experienced engineer helps you with your real Angular tickets during your working hours — debugging, implementing features, tuning performance, and delivering your sprint work — confidentially and same-day. It is not tutorials or generic advice; it is help on your actual codebase, the way a senior colleague would give it.',
    points: [
      'What Angular job support is and how it is delivered',
      'The kinds of problems it helps with day to day',
      'How it differs from tutorials, courses, and consulting',
      'How confidentiality and scheduling typically work',
      'When job support, production support, or interview support fits best',
    ],
    related: [['How Angular job support works', 'how-angular-job-support-works'], ['Angular production support', 'angular-production-support'], ['Angular proxy interview support', 'angular-proxy-interview-support']],
  },
  {
    slug: 'how-angular-job-support-works', topic: 'how Angular job support works',
    title: 'How Angular Job Support Works — Step by Step',
    h1: 'How Angular Job Support Works',
    tagline: 'From first message to daily delivery — how real-time Angular job support actually works in practice.',
    painIntro: 'Curious how Angular job support works in practice — how you get matched, how sessions run, and how confidentiality is handled?',
    heroVariant: 'It starts with a message describing your stack and situation. We match you with an in-house Angular expert, align on your goals, then work your real tickets together — over screen share, chat, or call — during your hours. This guide walks through the whole flow, including how discretion and scheduling are handled.',
    points: [
      'How you get matched to the right Angular expert',
      'How sessions run — screen share, chat, or call',
      'How ongoing daily support is scheduled',
      'How confidentiality and NDAs are handled',
      'How to get the most out of each session',
    ],
    related: [['What is Angular job support', 'what-is-angular-job-support'], ['Angular job support', 'angular-job-support'], ['Angular live project support', 'angular-live-project-support']],
  },
  {
    slug: 'angular-production-issue-support-guide', topic: 'Angular production issue support',
    title: 'Angular Production Issue Support Guide',
    h1: 'Angular Production Issue Support — A Practical Guide',
    tagline: 'How to approach Angular production incidents — from triage to root cause to a durable fix.',
    painIntro: 'When an Angular app breaks in production, structured triage beats panic. This guide shows the approach.',
    heroVariant: 'Angular production incidents — change-detection storms, memory leaks, broken lazy routes, SSR/hydration errors, or upgrade regressions — follow patterns. This guide covers how to triage, reproduce, isolate the root cause, stabilize, and harden against recurrence, and where real-time help fits.',
    points: [
      'How to triage an Angular production incident quickly',
      'Common Angular production failure patterns',
      'Reproducing and isolating the root cause',
      'Stabilizing and shipping a durable fix',
      'Hardening to prevent recurrence',
    ],
    related: [['Angular production support', 'angular-production-support'], ['Angular memory leak debugging support', 'angular-memory-leak-debugging-support'], ['How to handle Angular production issues', 'how-to-handle-angular-production-issues']],
  },
  {
    slug: 'angular-project-onboarding-guide', topic: 'Angular project onboarding',
    title: 'Angular Project Onboarding Guide — Ramp Up Fast',
    h1: 'Angular Project Onboarding Guide',
    tagline: 'How to get productive fast on a new Angular project — codebase, build, and conventions.',
    painIntro: 'Joining a new Angular project is where confidence gets tested. This guide helps you ramp up fast.',
    heroVariant: 'The first weeks on an Angular project shape how you are perceived. This guide covers how to read an unfamiliar codebase, understand the module/routing/state structure and build setup, deliver your first tickets safely, and handle early standups and reviews — plus where onboarding support helps.',
    points: [
      'How to read and navigate an unfamiliar Angular codebase',
      'Understanding the build, routing, and state structure',
      'Delivering your first tickets safely',
      'Handling early standups and reviews',
      'Avoiding the mistakes that get flagged early',
    ],
    related: [['Angular project onboarding support', 'angular-project-onboarding-support'], ['How to survive a new Angular developer job', 'how-to-survive-new-angular-developer-job'], ['Angular architecture support', 'angular-architecture-support']],
  },
  {
    slug: 'angular-application-architecture-guide', topic: 'Angular application architecture',
    title: 'Angular Application Architecture Guide',
    h1: 'Angular Application Architecture — A Practical Guide',
    tagline: 'How to structure Angular apps that scale — features, boundaries, state, and standalone-first design.',
    painIntro: 'Architecture decisions made early decide how painful change is later. This guide covers the choices that matter.',
    heroVariant: 'This guide covers practical Angular architecture — feature-based and standalone-first structure, module and library boundaries, choosing a state-management approach, smart/presentational separation, routing and lazy-loading design, and when monorepos or micro-frontends genuinely help.',
    points: [
      'Feature-based and standalone-first structure',
      'Module and library boundaries that scale',
      'Choosing a state-management approach',
      'Routing, lazy-loading, and shared-code design',
      'When monorepos and micro-frontends are worth it',
    ],
    related: [['Angular architecture support', 'angular-architecture-support'], ['Angular enterprise architecture job support', 'angular-enterprise-architecture-job-support'], ['Angular state management guide', 'angular-state-management-guide']],
  },
  {
    slug: 'angular-performance-optimization-guide', topic: 'Angular performance optimization',
    title: 'Angular Performance Optimization Guide',
    h1: 'Angular Performance Optimization — A Practical Guide',
    tagline: 'How to make Angular apps fast — change detection, bundles, rendering, and Core Web Vitals.',
    painIntro: 'Slow Angular apps usually have a few high-impact causes. This guide shows how to find and fix them.',
    heroVariant: 'This guide covers practical Angular performance — profiling first, then fixing change-detection overhead with OnPush and signals, speeding lists with trackBy and virtual scroll, reducing bundle size with lazy loading and deferrable views, and improving Core Web Vitals (LCP, CLS, INP).',
    points: [
      'Profiling to find the real bottlenecks',
      'Reducing change-detection overhead (OnPush, signals)',
      'Speeding up lists and heavy rendering',
      'Shrinking bundles with lazy loading and @defer',
      'Improving Core Web Vitals',
    ],
    related: [['Angular performance support', 'angular-performance-support'], ['Angular performance optimization job support', 'angular-performance-optimization-job-support'], ['Angular core web vitals support', 'angular-core-web-vitals-support']],
  },
  {
    slug: 'angular-signals-guide', topic: 'Angular signals',
    title: 'Angular Signals Guide — Reactivity Explained',
    h1: 'Angular Signals — A Practical Guide',
    tagline: 'What signals are, when to use them, and how they compare to RxJS in modern Angular.',
    painIntro: 'Signals changed how state works in Angular. This guide explains them clearly and practically.',
    heroVariant: 'This guide covers Angular signals in practical terms — signal, computed, and effect, signal inputs and outputs, when signals fit better than RxJS, common pitfalls (effect loops, over-using effects), and interop with observables via toSignal and toObservable.',
    points: [
      'signal, computed, and effect explained',
      'Signal inputs, outputs, and model',
      'When to use signals versus RxJS',
      'Common signal pitfalls to avoid',
      'Interop between signals and observables',
    ],
    related: [['Angular signals job support', 'angular-signals-job-support'], ['Angular signals vs RxJS guide', 'angular-signals-vs-rxjs-guide'], ['Modern Angular job support', 'modern-angular-job-support']],
  },
  {
    slug: 'angular-standalone-components-guide', topic: 'Angular standalone components',
    title: 'Angular Standalone Components Guide',
    h1: 'Angular Standalone Components — A Practical Guide',
    tagline: 'What standalone components are, why they are the default, and how to migrate to them.',
    painIntro: 'Standalone components are how modern Angular apps are built. This guide explains the model and the migration.',
    heroVariant: 'This guide covers standalone components — how they remove NgModules, how imports/providers/bootstrapping work, standalone routing and lazy loading, and how to migrate an NgModule-based app incrementally with the migration schematics.',
    points: [
      'How standalone components replace NgModules',
      'Imports, providers, and bootstrapping',
      'Standalone routing and lazy loading',
      'Migrating from NgModules incrementally',
      'Common migration pitfalls',
    ],
    related: [['Angular standalone components job support', 'angular-standalone-components-job-support'], ['Angular standalone vs NgModules', 'angular-standalone-vs-ngmodules'], ['Angular modules to standalone migration support', 'angular-modules-to-standalone-migration-support']],
  },
  {
    slug: 'angular-state-management-guide', topic: 'Angular state management',
    title: 'Angular State Management Guide',
    h1: 'Angular State Management — A Practical Guide',
    tagline: 'How to choose between services + signals, NgRx, and the Signal Store for your app.',
    painIntro: 'The wrong state-management choice adds complexity you feel for years. This guide helps you choose well.',
    heroVariant: 'This guide compares Angular state options — plain services with signals, NgRx, the NgRx Signal Store, and Component Store — with honest trade-offs, so you pick what fits your app’s complexity and team rather than defaulting to the heaviest option.',
    points: [
      'Services + signals for simpler state',
      'NgRx for complex, shared state',
      'The NgRx Signal Store',
      'Component Store for local state',
      'How to choose and stay consistent',
    ],
    related: [['Angular state management job support', 'angular-state-management-job-support'], ['Angular NgRx guide', 'angular-ngrx-guide'], ['Angular NgRx vs Signal Store', 'angular-ngrx-vs-signals-store']],
  },
  {
    slug: 'angular-ngrx-guide', topic: 'Angular NgRx',
    title: 'Angular NgRx Guide — Store, Effects & Selectors',
    h1: 'Angular NgRx — A Practical Guide',
    tagline: 'How NgRx works — actions, reducers, selectors, and effects — and when it is the right choice.',
    painIntro: 'NgRx is powerful but easy to overuse. This guide explains it and when it actually fits.',
    heroVariant: 'This guide covers NgRx — the store, actions, reducers, selectors, and effects — how to structure it at scale, common pitfalls (effect loops, poorly memoized selectors), and when NgRx is worth it versus lighter options like signals or the Signal Store.',
    points: [
      'Store, actions, reducers, selectors, and effects',
      'Structuring NgRx at scale',
      'Common NgRx pitfalls',
      'When NgRx fits versus lighter options',
      'Testing NgRx code',
    ],
    related: [['Angular NgRx job support', 'angular-ngrx-job-support'], ['Angular NgRx vs Signal Store', 'angular-ngrx-vs-signals-store'], ['Angular state management guide', 'angular-state-management-guide']],
  },
  {
    slug: 'angular-rxjs-guide', topic: 'Angular RxJS',
    title: 'Angular RxJS Guide — Operators & Patterns',
    h1: 'Angular RxJS — A Practical Guide',
    tagline: 'The RxJS operators and patterns that matter in Angular — and how to avoid the common traps.',
    painIntro: 'RxJS is where many Angular bugs hide. This guide focuses on the operators and patterns that matter.',
    heroVariant: 'This guide covers practical RxJS for Angular — choosing between switchMap, mergeMap, concatMap, and exhaustMap, subscription management and avoiding leaks, combining streams, error handling, and knowing when signals are the better tool.',
    points: [
      'The mapping operators and when to use each',
      'Subscription management and avoiding leaks',
      'Combining streams and handling errors',
      'The async pipe and reactive patterns',
      'When to reach for signals instead',
    ],
    related: [['Angular RxJS job support', 'angular-rxjs-job-support'], ['Angular signals vs RxJS guide', 'angular-signals-vs-rxjs-guide'], ['Angular signals guide', 'angular-signals-guide']],
  },
  {
    slug: 'angular-reactive-forms-guide', topic: 'Angular reactive forms',
    title: 'Angular Reactive Forms Guide',
    h1: 'Angular Reactive Forms — A Practical Guide',
    tagline: 'How to build robust, typed, validated reactive forms — including large and dynamic ones.',
    painIntro: 'Complex forms are deceptively hard. This guide covers reactive forms done right.',
    heroVariant: 'This guide covers Angular reactive forms — FormGroup, FormControl, and FormArray, typed forms, custom and cross-field validation, dynamic forms, and performance on large forms — plus when template-driven forms are the simpler choice.',
    points: [
      'FormGroup, FormControl, and FormArray',
      'Typed reactive forms',
      'Custom and cross-field validation',
      'Dynamic and large forms',
      'Reactive versus template-driven',
    ],
    related: [['Angular reactive forms job support', 'angular-reactive-forms-job-support'], ['Angular reactive forms vs template-driven forms', 'angular-reactive-forms-vs-template-driven-forms'], ['Angular typed forms job support', 'angular-typed-forms-job-support']],
  },
  {
    slug: 'angular-authentication-guide', topic: 'Angular authentication',
    title: 'Angular Authentication Guide — Auth Done Right',
    h1: 'Angular Authentication — A Practical Guide',
    tagline: 'How to implement authentication in Angular — tokens, OAuth/OIDC, guards, and interceptors.',
    painIntro: 'Auth is easy to get subtly wrong. This guide covers secure, practical patterns.',
    heroVariant: 'This guide covers Angular authentication — login and token handling, OAuth 2.0/OIDC with identity providers, secure token storage and refresh, route guards, and interceptors — with the security pitfalls to avoid.',
    points: [
      'Login and secure token handling',
      'OAuth 2.0 / OIDC with identity providers',
      'Token storage and refresh without races',
      'Route guards and interceptors',
      'Common security pitfalls',
    ],
    related: [['Angular authentication job support', 'angular-authentication-job-support'], ['Angular OAuth OIDC job support', 'angular-oauth-oidc-job-support'], ['Angular security job support', 'angular-security-job-support']],
  },
  {
    slug: 'angular-testing-guide', topic: 'Angular testing',
    title: 'Angular Testing Guide — Unit, Component & E2E',
    h1: 'Angular Testing — A Practical Guide',
    tagline: 'How to build a testing strategy across unit, component, and E2E layers with modern tools.',
    painIntro: 'A good test strategy saves you from regressions without slowing you down. This guide covers it.',
    heroVariant: 'This guide covers a practical Angular testing strategy — unit tests for logic, component tests for UI behaviour, and E2E for journeys — with modern tools (Jest, Testing Library, Cypress, Playwright), and how to keep the suite fast and non-flaky in CI.',
    points: [
      'What to test at each layer',
      'Unit and component testing approaches',
      'Choosing E2E tools (Cypress, Playwright)',
      'Reducing flakiness and CI time',
      'Testing signals and async code',
    ],
    related: [['Angular unit testing job support', 'angular-unit-testing-job-support'], ['Angular Jest vs Jasmine', 'angular-jest-vs-jasmine'], ['Angular Cypress vs Playwright', 'angular-cypress-vs-playwright']],
  },
  {
    slug: 'angular-microfrontend-guide', topic: 'Angular micro-frontends',
    title: 'Angular Micro-Frontend Guide',
    h1: 'Angular Micro-Frontends — A Practical Guide',
    tagline: 'What micro-frontends are, when they help, and how Module Federation works with Angular.',
    painIntro: 'Micro-frontends solve real problems and create new ones. This guide helps you decide and implement.',
    heroVariant: 'This guide covers Angular micro-frontends — the problems they solve, the real costs, how Module Federation composes hosts and remotes, sharing dependencies and state, and honest guidance on when a monorepo is the better answer.',
    points: [
      'What micro-frontends solve — and cost',
      'How Module Federation works with Angular',
      'Sharing dependencies, state, and design system',
      'When a monorepo is the better choice',
      'Common integration pitfalls',
    ],
    related: [['Angular microfrontend job support', 'angular-microfrontend-job-support'], ['Angular module federation job support', 'angular-module-federation-job-support'], ['Angular Nx monorepo job support', 'angular-nx-monorepo-job-support']],
  },
  {
    slug: 'angular-ssr-hydration-guide', topic: 'Angular SSR and hydration',
    title: 'Angular SSR & Hydration Guide',
    h1: 'Angular SSR & Hydration — A Practical Guide',
    tagline: 'How server-side rendering and hydration work in Angular — and how to avoid the common issues.',
    painIntro: 'SSR and hydration unlock SEO and speed but introduce a new class of bugs. This guide explains both.',
    heroVariant: 'This guide covers Angular SSR and hydration — how server rendering works, how hydration reuses server DOM, common hydration mismatches and flicker, handling browser-only code, and incremental hydration with deferrable views.',
    points: [
      'How Angular SSR works',
      'How hydration reuses server-rendered DOM',
      'Fixing hydration mismatches and flicker',
      'Handling browser-only code safely',
      'Incremental hydration with @defer',
    ],
    related: [['Angular SSR job support', 'angular-ssr-job-support'], ['Angular hydration job support', 'angular-hydration-job-support'], ['Angular SSR vs CSR', 'angular-ssr-vs-csr']],
  },
  {
    slug: 'angular-upgrade-migration-guide', topic: 'Angular upgrade and migration',
    title: 'Angular Upgrade & Migration Guide',
    h1: 'Angular Upgrade & Migration — A Practical Guide',
    tagline: 'How to upgrade Angular safely and migrate legacy apps without breaking them.',
    painIntro: 'Upgrades stall projects when done without a plan. This guide covers the safe, incremental approach.',
    heroVariant: 'This guide covers Angular upgrades and migrations — upgrading one major version at a time with the update schematics, handling breaking changes, migrating AngularJS to Angular and NgModules to standalone, and keeping the app working throughout.',
    points: [
      'Upgrading one major version at a time',
      'Handling breaking changes and deprecations',
      'AngularJS-to-Angular migration',
      'NgModules-to-standalone migration',
      'Verifying at each step',
    ],
    related: [['Angular upgrade & migration support', 'angular-upgrade-migration-support'], ['AngularJS to Angular migration support', 'angularjs-to-angular-migration-support'], ['Legacy Angular modernization support', 'legacy-angular-modernization-support']],
  },
  {
    slug: 'angular-interview-support-guide', topic: 'Angular interview support',
    title: 'Angular Interview Support Guide',
    h1: 'Angular Interview Support — A Practical Guide',
    tagline: 'How Angular interviews are structured and how to prepare for each round.',
    painIntro: 'Angular interviews test more than syntax. This guide covers what to expect and how to prepare.',
    heroVariant: 'This guide covers the Angular interview landscape — coding rounds, RxJS and signals questions, component and frontend system design, and behavioural rounds — with how to prepare for each, and where mock interviews and real-time support fit.',
    points: [
      'How Angular interviews are typically structured',
      'Coding, RxJS, and signals rounds',
      'Frontend system design rounds',
      'Behavioural and final rounds',
      'How to prepare effectively',
    ],
    related: [['Angular proxy interview support', 'angular-proxy-interview-support'], ['Angular system design interview guide', 'angular-system-design-interview-guide'], ['Get Angular interview scheduled', 'get-angular-interview-scheduled']],
  },
  {
    slug: 'angular-system-design-interview-guide', topic: 'Angular system design interview',
    title: 'Angular System Design Interview Guide',
    h1: 'Angular System Design Interview — A Practical Guide',
    tagline: 'How to approach frontend system design interviews for Angular roles.',
    painIntro: 'Frontend system design rounds trip up strong coders. This guide gives you a framework.',
    heroVariant: 'This guide covers Angular/frontend system design interviews — a framework for scoping the problem, designing component and state architecture, addressing performance, accessibility, and scalability, and communicating trade-offs clearly.',
    points: [
      'A framework for frontend system design',
      'Designing component and state architecture',
      'Performance, accessibility, and scalability',
      'Communicating trade-offs',
      'Common mistakes to avoid',
    ],
    related: [['Angular system design interview support', 'angular-system-design-interview-support'], ['Angular frontend architecture interview support', 'angular-frontend-architecture-interview-support'], ['Angular interview support guide', 'angular-interview-support-guide']],
  },
  {
    slug: 'angular-developer-resume-guide', topic: 'Angular developer resume',
    title: 'Angular Developer Resume Guide',
    h1: 'Angular Developer Resume — A Practical Guide',
    tagline: 'How to write an Angular resume that passes ATS and gets read by recruiters.',
    painIntro: 'A strong developer with a weak resume gets filtered out. This guide shows how to fix it.',
    heroVariant: 'This guide covers Angular resumes — the keywords recruiters and ATS filters search for, how to write measurable-impact bullets, structure that parses cleanly, and how to tailor it to the roles and market you target.',
    points: [
      'Keywords recruiters and ATS filters search for',
      'Writing measurable-impact bullets',
      'ATS-friendly structure',
      'Tailoring to role and market',
      'Common resume mistakes',
    ],
    related: [['Angular developer resume optimization', 'angular-developer-resume-optimization'], ['Why your Angular resume gets no calls', 'why-angular-resume-gets-no-calls'], ['Angular developer profile positioning', 'angular-developer-profile-positioning']],
  },
  {
    slug: 'angular-developer-job-search-guide', topic: 'Angular developer job search',
    title: 'Angular Developer Job Search Guide',
    h1: 'Angular Developer Job Search — A Practical Guide',
    tagline: 'How to run an effective Angular job search — targeting, applications, outreach, and follow-up.',
    painIntro: 'Volume alone rarely works. This guide covers a smarter Angular job search.',
    heroVariant: 'This guide covers a practical Angular job search — targeting well-matched roles, tailoring applications, using outreach and referrals, positioning your profile, and following up, so you convert effort into interviews.',
    points: [
      'Targeting the right Angular roles',
      'Tailoring applications effectively',
      'Outreach, referrals, and follow-up',
      'Positioning your profile',
      'Building a repeatable pipeline',
    ],
    related: [['Angular developer job application support', 'angular-developer-job-application-support'], ['How to get Angular interviews scheduled', 'how-to-get-angular-interviews-scheduled'], ['Angular developer candidate marketing', 'angular-developer-candidate-marketing']],
  },
  {
    slug: 'how-to-explain-angular-project-in-interview', topic: 'explaining your Angular project in interviews',
    title: 'How to Explain Your Angular Project in an Interview',
    h1: 'How to Explain Your Angular Project in an Interview',
    tagline: 'A framework for describing your Angular project clearly and impressively in interviews.',
    painIntro: 'Many strong developers explain their project poorly under interview pressure. This guide gives you a structure.',
    heroVariant: 'This guide gives you a framework for explaining your Angular project in interviews — context and your role, the architecture and key decisions, the hard problems you solved, and the measurable impact — so you come across as senior and clear.',
    points: [
      'Framing context and your specific role',
      'Explaining architecture and key decisions',
      'Highlighting the hard problems you solved',
      'Quantifying impact',
      'Handling deep-dive follow-up questions',
    ],
    related: [['Angular proxy interview support', 'angular-proxy-interview-support'], ['Angular senior developer interview support', 'angular-senior-developer-interview-support'], ['Angular interview support guide', 'angular-interview-support-guide']],
  },
  {
    slug: 'how-to-handle-angular-production-issues', topic: 'handling Angular production issues',
    title: 'How to Handle Angular Production Issues',
    h1: 'How to Handle Angular Production Issues',
    tagline: 'A calm, structured approach to Angular production incidents — from alert to fix.',
    painIntro: 'Under production pressure, structure beats panic. This guide gives you a repeatable approach.',
    heroVariant: 'This guide walks through handling an Angular production issue — triage and impact assessment, reproducing reliably, isolating the root cause across change detection, RxJS, SSR, and builds, stabilizing, and hardening so it does not recur.',
    points: [
      'Triage and impact assessment',
      'Reproducing the issue reliably',
      'Isolating the root cause',
      'Stabilizing and shipping a fix',
      'Preventing recurrence',
    ],
    related: [['Angular production support', 'angular-production-support'], ['Angular production issue support guide', 'angular-production-issue-support-guide'], ['Angular application debugging support', 'angular-application-debugging-support']],
  },
  {
    slug: 'how-to-survive-new-angular-developer-job', topic: 'starting a new Angular developer job',
    title: 'How to Survive Your First Weeks on a New Angular Job',
    h1: 'How to Survive a New Angular Developer Job',
    tagline: 'How to build credibility fast in your first weeks on a new Angular role.',
    painIntro: 'The first weeks on a new Angular job set the tone. This guide helps you start strong.',
    heroVariant: 'This guide covers surviving — and thriving in — your first weeks on a new Angular job: ramping on the codebase, delivering early wins, communicating well in standups and reviews, and knowing when to ask for help versus figure it out.',
    points: [
      'Ramping on an unfamiliar codebase fast',
      'Delivering early, visible wins',
      'Communicating well in standups and reviews',
      'Asking for help the right way',
      'Building credibility in the first month',
    ],
    related: [['Angular project onboarding support', 'angular-project-onboarding-support'], ['Angular project onboarding guide', 'angular-project-onboarding-guide'], ['Angular client call & standup support', 'angular-client-call-standup-support']],
  },
  {
    slug: 'why-angular-resume-gets-no-calls', topic: 'why Angular resumes get no calls',
    title: 'Why Your Angular Resume Gets No Calls',
    h1: 'Why Your Angular Resume Gets No Calls',
    tagline: 'The real reasons capable Angular developers get no recruiter response — and how to fix it.',
    painIntro: 'Applying to Angular roles and hearing nothing? The cause is usually fixable — and rarely your skill.',
    heroVariant: 'This guide explains why capable Angular developers get no calls — keyword and positioning mismatches, buried impact, ATS parsing problems, and poor LinkedIn visibility — and how to fix each so your profile surfaces and gets read.',
    points: [
      'Keyword and positioning mismatches',
      'Impact buried in vague bullets',
      'ATS parsing and structure problems',
      'Poor LinkedIn search visibility',
      'How to fix each issue',
    ],
    related: [['Angular developer resume optimization', 'angular-developer-resume-optimization'], ['Angular developer profile positioning', 'angular-developer-profile-positioning'], ['Angular developer recruiter keywords', 'angular-developer-recruiter-keywords']],
  },
  {
    slug: 'why-angular-interviews-are-failing', topic: 'why Angular interviews fail',
    title: 'Why Your Angular Interviews Are Failing',
    h1: 'Why Your Angular Interviews Are Failing',
    tagline: 'Common reasons strong Angular developers fail interviews — and how to turn it around.',
    painIntro: 'Getting interviews but not offers? The gaps are usually specific and fixable. This guide covers them.',
    heroVariant: 'This guide covers why Angular interviews fail even for capable developers — shallow answers on RxJS/signals/change detection, weak system design communication, poor project explanation, and nerves — and how targeted preparation fixes each.',
    points: [
      'Shallow answers on core Angular topics',
      'Weak frontend system design communication',
      'Explaining projects poorly',
      'Coding-round mistakes under pressure',
      'How to prepare to fix each gap',
    ],
    related: [['Angular proxy interview support', 'angular-proxy-interview-support'], ['Angular interview support guide', 'angular-interview-support-guide'], ['Angular system design interview guide', 'angular-system-design-interview-guide']],
  },
  {
    slug: 'how-to-get-angular-interviews-scheduled', topic: 'getting Angular interviews scheduled',
    title: 'How to Get Angular Interviews Scheduled',
    h1: 'How to Get Angular Interviews Scheduled',
    tagline: 'How to generate a steady flow of Angular interview calls through positioning and outreach.',
    painIntro: 'More interviews come from visibility and outreach, not just more applications. This guide shows how.',
    heroVariant: 'This guide covers how to get Angular interviews scheduled — positioning your profile for recruiter searches, targeting the right roles, running proactive outreach to recruiters and hiring managers, and following up, so calls become consistent rather than rare.',
    points: [
      'Positioning your profile to be found',
      'Targeting the right roles and companies',
      'Proactive recruiter and hiring-manager outreach',
      'Following up effectively',
      'Building a consistent pipeline',
    ],
    related: [['Get Angular interview scheduled', 'get-angular-interview-scheduled'], ['Angular developer candidate marketing', 'angular-developer-candidate-marketing'], ['Angular developer job search guide', 'angular-developer-job-search-guide']],
  },
];

export const angularGuidePages: LandingPageConfig[] = guideDefs.map(guidePage);

// ─── Comparison builder (balanced, informational — no "winner" claims) ───────

interface CompareDef {
  slug: string;
  a: string;
  b: string;
  title: string;
  h1: string;
  tagline: string;
  intro: string;
  aStrengths: string[];
  bStrengths: string[];
  guidance: string;
  related: [string, string][];
}

function comparisonPage(d: CompareDef): LandingPageConfig {
  return angularPage({
    slug: d.slug,
    title: d.title,
    description: `${d.a} vs ${d.b} in Angular — a balanced, practical comparison of strengths, trade-offs, and when each fits. Written for working Angular developers making a real decision.`,
    keywords: [
      `${d.a} vs ${d.b}`, `Angular ${d.a} vs ${d.b}`, `${d.a} or ${d.b} Angular`,
      `${d.a} ${d.b} comparison`, 'Angular comparison guide', 'Angular decision guide',
    ],
    h1: d.h1,
    tagline: d.tagline,
    heroEyebrow: 'Angular Comparison',
    painIntro: `Deciding between ${d.a} and ${d.b} for your Angular project? Both have real strengths — the right choice depends on your context, not on which is "better".`,
    heroVariant: d.intro,
    geoLine: 'Written for Angular professionals across the USA, Canada, UK, Europe, Australia, and worldwide.',
    timezoneNote: 'If you want help applying the decision on your project, our Angular experts are available across all time zones.',
    highlights: techHighlights,
    faqs: [
      { question: `Is ${d.a} better than ${d.b} in Angular?`, answer: `Neither is universally better — it depends on your context. ${d.guidance} This page lays out the strengths of each so you can decide for your situation rather than following a blanket rule.` },
      { question: `When should I choose ${d.a}?`, answer: `${d.a} tends to fit when: ${d.aStrengths.join('; ')}. If several of these match your project, ${d.a} is likely the better fit.` },
      { question: `When should I choose ${d.b}?`, answer: `${d.b} tends to fit when: ${d.bStrengths.join('; ')}. If several of these match your project, ${d.b} is likely the better fit.` },
      { question: 'Can you help me apply this to my real project?', answer: 'Yes. Beyond the comparison, our Angular experts can help you implement either choice on your actual codebase, or migrate between them safely. Reach out on WhatsApp and we can advise on your specific situation.' },
      { question: 'Is this comparison biased toward one option?', answer: 'No. This is a balanced, informational comparison. We present the genuine strengths and trade-offs of both, because the right answer genuinely depends on your project and team.' },
    ],
    useCasesSection: {
      title: `${d.a} vs ${d.b} — How to Decide`,
      cases: [
        `Choose ${d.a} when: ${d.aStrengths[0]}`,
        `Choose ${d.a} when: ${d.aStrengths[1] ?? d.aStrengths[0]}`,
        `Choose ${d.b} when: ${d.bStrengths[0]}`,
        `Choose ${d.b} when: ${d.bStrengths[1] ?? d.bStrengths[0]}`,
        'Consider your team’s experience and the app’s complexity',
        'Consider maintainability and the cost of changing later',
      ],
    },
    proxySection: {
      title: 'Want Help Deciding or Implementing?',
      intro: 'This comparison is educational. If you want an expert to help you choose or implement on your real project, we can help.',
      points: [
        `Advice on ${d.a} vs ${d.b} for your specific project`,
        'Hands-on help implementing either choice',
        'Safe migration between approaches if you switch',
        'Interview preparation covering both',
        'Confidential, in-house Angular experts',
      ],
    },
    bottomCTAHeading: `Still Unsure Between ${d.a} and ${d.b}?`,
    bottomCTABody: 'Talk to an in-house Angular expert about your specific project. Contact ProxyTechSupport on WhatsApp now.',
    relatedLinks: relatedLinks({
      geoLinks: [HUB_LINK, JOB_LINK],
      techLinks: d.related.slice(0, 2).map(link),
      problemLink: PRODUCTION_LINK,
      proxyLink: INTERVIEW_HUB_LINK,
      additionalLinks: [...d.related.slice(2).map(link), JOB_LINK, HUB_LINK, INTERVIEW_HUB_LINK],
    }),
  });
}

const compareDefs: CompareDef[] = [
  {
    slug: 'angular-signals-vs-rxjs', a: 'Signals', b: 'RxJS',
    title: 'Angular Signals vs RxJS — A Balanced Comparison',
    h1: 'Angular Signals vs RxJS',
    tagline: 'Signals and RxJS both have a place in modern Angular. Here is when each fits.',
    intro: 'Signals excel at synchronous, fine-grained state and derived values with simple, readable code. RxJS excels at asynchronous streams, events, and complex coordination over time. Modern Angular apps typically use both — signals for component state, RxJS for async and event orchestration — and interop with toSignal/toObservable.',
    aStrengths: ['you need synchronous, fine-grained reactive state', 'derived values and computed state dominate', 'you want simpler, more readable reactive code'],
    bStrengths: ['you are coordinating asynchronous streams and events over time', 'you need operators like debounce, retry, and combineLatest', 'you handle complex event orchestration or cancellation'],
    guidance: 'Use signals for synchronous component state and RxJS for asynchronous streams; most apps use both together.',
    related: [['Angular signals job support', 'angular-signals-job-support'], ['Angular RxJS job support', 'angular-rxjs-job-support'], ['Angular signals vs RxJS guide', 'angular-signals-vs-rxjs-guide']],
  },
  {
    slug: 'angular-signals-vs-rxjs-guide', a: 'Signals', b: 'RxJS',
    title: 'Angular Signals vs RxJS Guide — When to Use Each',
    h1: 'Angular Signals vs RxJS — A Practical Guide',
    tagline: 'A deeper guide on choosing between signals and RxJS, with interop patterns.',
    intro: 'This guide goes deeper on signals versus RxJS — the mental models, where each shines, common mistakes (over-using effects, subscribing manually), and the interop patterns (toSignal, toObservable) that let them work together cleanly in one codebase.',
    aStrengths: ['synchronous state and computed derivations', 'template-bound reactive state without subscriptions', 'simpler code for component-local reactivity'],
    bStrengths: ['async data, events, and websockets', 'operator-based transformation and coordination', 'cancellation and backpressure scenarios'],
    guidance: 'Reach for signals first for local synchronous state, and RxJS for async streams, bridging with toSignal/toObservable.',
    related: [['Angular signals guide', 'angular-signals-guide'], ['Angular RxJS guide', 'angular-rxjs-guide'], ['Angular signals vs RxJS', 'angular-signals-vs-rxjs']],
  },
  {
    slug: 'angular-ngrx-vs-signals-store', a: 'NgRx', b: 'Signal Store',
    title: 'Angular NgRx vs NgRx Signal Store — A Balanced Comparison',
    h1: 'Angular NgRx vs NgRx Signal Store',
    tagline: 'Classic NgRx and the NgRx Signal Store solve state differently. Here is when each fits.',
    intro: 'Classic NgRx offers a full Redux-style architecture with actions, reducers, effects, and strong devtools — powerful for large, complex, shared state. The NgRx Signal Store is lighter and signal-based, with less boilerplate — great for feature state and simpler apps. Both are first-party; the choice is about complexity and team preference.',
    aStrengths: ['you have large, complex, widely-shared state', 'you want strict action-driven traceability and devtools', 'a large team benefits from strong conventions'],
    bStrengths: ['you want less boilerplate for feature-level state', 'you are building signals-first', 'the state is moderately complex, not app-wide'],
    guidance: 'Use classic NgRx for large complex shared state; use the Signal Store for lighter, feature-level, signals-first state.',
    related: [['Angular NgRx job support', 'angular-ngrx-job-support'], ['Angular NgRx Signal Store support', 'angular-ngrx-signals-store-support'], ['Angular state management guide', 'angular-state-management-guide']],
  },
  {
    slug: 'angular-reactive-forms-vs-template-driven-forms', a: 'Reactive Forms', b: 'Template-Driven Forms',
    title: 'Angular Reactive vs Template-Driven Forms — A Balanced Comparison',
    h1: 'Angular Reactive Forms vs Template-Driven Forms',
    tagline: 'Both form approaches are valid. Here is when each is the better fit.',
    intro: 'Reactive forms are model-driven, explicit, and highly testable — ideal for complex, dynamic, or heavily validated forms. Template-driven forms are simpler and more declarative — ideal for small, straightforward forms. Angular supports both first-class; pick based on the form’s complexity.',
    aStrengths: ['the form is complex, dynamic, or heavily validated', 'you want explicit, testable form logic', 'you need typed forms and programmatic control'],
    bStrengths: ['the form is small and straightforward', 'you prefer a declarative, template-first style', 'minimal logic is involved'],
    guidance: 'Use reactive forms for complex/dynamic forms and template-driven forms for simple ones.',
    related: [['Angular reactive forms job support', 'angular-reactive-forms-job-support'], ['Angular template-driven forms job support', 'angular-template-driven-forms-job-support'], ['Angular reactive forms guide', 'angular-reactive-forms-guide']],
  },
  {
    slug: 'angular-standalone-vs-ngmodules', a: 'Standalone Components', b: 'NgModules',
    title: 'Angular Standalone Components vs NgModules — A Balanced Comparison',
    h1: 'Angular Standalone Components vs NgModules',
    tagline: 'Standalone is the modern default, but NgModules still exist in many codebases. Here is the picture.',
    intro: 'Standalone components are the modern default — less boilerplate, clearer dependencies, and simpler lazy loading. NgModules remain in many existing codebases and some libraries. New apps should generally start standalone; existing apps can migrate incrementally without a rewrite.',
    aStrengths: ['you are starting a new app or feature', 'you want less boilerplate and clearer dependencies', 'you want simpler lazy loading and bootstrapping'],
    bStrengths: ['you maintain an existing NgModule-based codebase', 'a dependency still relies on NgModules', 'you are mid-migration and mixing both'],
    guidance: 'Start new work standalone; migrate existing NgModule code incrementally rather than all at once.',
    related: [['Angular standalone components job support', 'angular-standalone-components-job-support'], ['Angular modules to standalone migration support', 'angular-modules-to-standalone-migration-support'], ['Angular standalone components guide', 'angular-standalone-components-guide']],
  },
  {
    slug: 'angular-ssr-vs-csr', a: 'SSR', b: 'CSR',
    title: 'Angular SSR vs CSR — A Balanced Comparison',
    h1: 'Angular SSR vs Client-Side Rendering (CSR)',
    tagline: 'Server-side and client-side rendering serve different needs. Here is when each fits.',
    intro: 'SSR (with hydration) improves SEO, first paint, and perceived performance for content and public pages, at the cost of server infrastructure and added complexity. CSR is simpler to build and host, and fine for authenticated apps and internal tools where SEO and first paint matter less. Many apps mix both.',
    aStrengths: ['SEO and fast first paint matter (public, content pages)', 'you serve users on slower devices/networks', 'you can run and maintain server rendering'],
    bStrengths: ['the app is authenticated or internal (SEO irrelevant)', 'you want the simplest build and hosting', 'first paint is not a priority'],
    guidance: 'Use SSR for public, SEO-sensitive pages and CSR for internal/authenticated apps; mixing is common.',
    related: [['Angular SSR job support', 'angular-ssr-job-support'], ['Angular hydration job support', 'angular-hydration-job-support'], ['Angular SSR & hydration guide', 'angular-ssr-hydration-guide']],
  },
  {
    slug: 'angular-jest-vs-jasmine', a: 'Jest', b: 'Jasmine',
    title: 'Angular Jest vs Jasmine — A Balanced Comparison',
    h1: 'Angular Jest vs Jasmine/Karma',
    tagline: 'Both run Angular unit tests. Here is how they compare in practice.',
    intro: 'Jasmine (traditionally with Karma) is the long-standing Angular default and works out of the box. Jest offers faster runs, a great watch mode, snapshotting, and no browser dependency, which many teams prefer — though it needs configuration for Angular. Both are valid; the choice is about speed, tooling, and setup preference.',
    aStrengths: ['you want faster runs and a strong watch mode', 'you like snapshot testing and rich mocking', 'you prefer running without a real browser'],
    bStrengths: ['you want the zero-config Angular default', 'your team is already productive with it', 'you specifically need real-browser execution via Karma'],
    guidance: 'Both are fine; many teams move to Jest for speed and DX, while Jasmine remains a solid default.',
    related: [['Angular Jest job support', 'angular-jest-job-support'], ['Angular unit testing job support', 'angular-unit-testing-job-support'], ['Angular testing guide', 'angular-testing-guide']],
  },
  {
    slug: 'angular-cypress-vs-playwright', a: 'Cypress', b: 'Playwright',
    title: 'Angular Cypress vs Playwright — A Balanced Comparison',
    h1: 'Angular Cypress vs Playwright',
    tagline: 'Both are strong E2E tools for Angular. Here is how they compare.',
    intro: 'Cypress has an excellent developer experience, time-travel debugging, and a mature ecosystem. Playwright offers fast, reliable cross-browser testing, strong parallelism, and powerful auto-waiting and tracing. Both are excellent modern choices; the decision is about cross-browser needs, speed, and team preference.',
    aStrengths: ['you value in-browser time-travel debugging and DX', 'your team already knows Cypress', 'you want its component-testing story'],
    bStrengths: ['you need fast, reliable cross-browser testing', 'you want strong parallelism and tracing', 'you run large E2E suites in CI'],
    guidance: 'Both are excellent; choose Playwright for cross-browser speed and Cypress for its DX — either is a solid modern pick.',
    related: [['Angular Cypress job support', 'angular-cypress-job-support'], ['Angular Playwright job support', 'angular-playwright-job-support'], ['Angular e2e testing job support', 'angular-e2e-testing-job-support']],
  },
  {
    slug: 'angular-vs-react-enterprise-development', a: 'Angular', b: 'React',
    title: 'Angular vs React for Enterprise Development — A Balanced Comparison',
    h1: 'Angular vs React for Enterprise Development',
    tagline: 'Both power large enterprise frontends. Here is how they compare for that context.',
    intro: 'Angular is a batteries-included framework — opinionated structure, DI, routing, forms, and tooling out of the box — which suits large teams and long-lived enterprise apps that value consistency. React is a flexible library with a vast ecosystem, giving teams more freedom and choice. For enterprise, both are proven; the decision hinges on team preference, existing skills, and how much structure you want provided.',
    aStrengths: ['you want an opinionated, consistent, batteries-included framework', 'large teams benefit from strong conventions and DI', 'you value integrated routing, forms, and tooling'],
    bStrengths: ['you want maximum flexibility and ecosystem choice', 'your team prefers assembling their own stack', 'you have deep existing React expertise'],
    guidance: 'Both are enterprise-proven; Angular provides more structure out of the box, React offers more flexibility — align to your team and context.',
    related: [['Angular job support', 'angular-job-support'], ['Angular enterprise application support', 'angular-enterprise-application-support'], ['Angular architecture support', 'angular-architecture-support']],
  },
  {
    slug: 'angular-job-support-vs-interview-support', a: 'Angular Job Support', b: 'Angular Interview Support',
    title: 'Angular Job Support vs Interview Support — What You Need',
    h1: 'Angular Job Support vs Angular Interview Support',
    tagline: 'They solve different problems. Here is which one fits your situation.',
    intro: 'Angular job support is real-time help delivering on your current project — bugs, features, production issues. Angular interview support is help clearing interviews — mock interviews and discreet real-time guidance during the live round. Many people use both in sequence: interview support to land the role, job support to succeed in it.',
    aStrengths: ['you are already in a role and need help delivering', 'you face production issues or hard tickets', 'you want to grow while shipping real work'],
    bStrengths: ['you are interviewing for a new Angular role', 'you want mock interviews and live-round guidance', 'you need to get more interviews scheduled first'],
    guidance: 'Use interview support to land the role and job support to succeed in it — they are complementary, not alternatives.',
    related: [['Angular job support', 'angular-job-support'], ['Angular proxy interview support', 'angular-proxy-interview-support'], ['Get Angular interview scheduled', 'get-angular-interview-scheduled']],
  },
];

export const angularComparisonPages: LandingPageConfig[] = compareDefs.map(comparisonPage);

// ─── Angular job support locations directory ─────────────────────────────────

const dirLink = (label: string, slug: string): LandingRelatedLink => ({ label, href: `/${slug}/` });

export const angularLocationsDirectory: LandingPageConfig = angularPage({
  slug: 'angular-job-support-locations',
  title: 'Angular Job Support Locations — Countries & Cities Worldwide',
  description:
    'Angular job support by location — the USA, Canada, UK, Ireland, Germany, Netherlands, France, Sweden, Switzerland, Australia, New Zealand, Singapore, Hong Kong, UAE, and Saudi Arabia, plus major cities.',
  keywords: [
    'Angular job support locations', 'Angular support by country', 'Angular support by city',
    'Angular job support worldwide', 'Angular developer support locations', 'global Angular job support',
  ],
  h1: 'Angular Job Support Locations — Find Support in Your Country and City',
  tagline:
    'Real-time Angular job support, production help, interview assistance, and candidate marketing — organized by country and city, in your time zone.',
  heroEyebrow: 'Angular Locations Directory',
  painIntro:
    'Looking for Angular job support in your country or city? This directory links every Angular location page so you can find support aligned to your market and time zone.',
  heroVariant:
    'We support Angular professionals worldwide with in-house experts across US, Canadian, UK, European, Australian, and Asia-Pacific business hours. Use the links below to jump to your country hub, which in turn links to its cities, or go straight to your city page. Every location offers the same core services — real-time job support, production help, interview assistance, and candidate marketing.',
  geoLine:
    'Angular support across the USA, Canada, UK, Ireland, Germany, Netherlands, France, Sweden, Switzerland, Australia, New Zealand, Singapore, Hong Kong, UAE, and Saudi Arabia.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  highlights: techHighlights,
  faqs: [
    {
      question: 'Which countries do you provide Angular job support in?',
      answer:
        'We provide Angular job support across the USA, Canada, UK, Ireland, Germany, Netherlands, France, Sweden, Switzerland, Australia, New Zealand, Singapore, Hong Kong, UAE, and Saudi Arabia, plus a Europe-wide hub — each in local business hours.',
    },
    {
      question: 'Do you cover specific cities?',
      answer:
        'Yes. We have dedicated Angular pages for major cities including New York, San Francisco, Dallas, Chicago, Seattle, Toronto, Vancouver, London, Manchester, Dublin, Berlin, Munich, Frankfurt, Amsterdam, Paris, Stockholm, Zurich, Sydney, Melbourne, Auckland, Dubai, and Riyadh, among many others.',
    },
    {
      question: 'Is the support the same in every location?',
      answer:
        'The core services are the same everywhere — real-time job support, production help, interview assistance, and candidate marketing. Each location page adds local market context, role titles, and time-zone alignment relevant to that market.',
    },
    {
      question: 'How do I get started in my location?',
      answer:
        'Find your country or city page below, or simply message us on WhatsApp with your location, stack, and situation. We match you with the right Angular expert in your time zone — usually same-day.',
    },
  ],
  useCasesSection: {
    title: 'How This Directory Is Organized',
    cases: [
      'Country hubs — jump to your country for market-specific Angular support',
      'City pages — go straight to your city for local context and time zones',
      'Each country hub links to its own cities',
      'Every location offers job, production, interview, and marketing support',
      'Not seeing your location? Message us — we support developers worldwide',
      'All support is confidential, with NDAs available on request',
    ],
  },
  bottomCTAHeading: 'Find Angular Support in Your Location',
  bottomCTABody:
    'Pick your country or city below, or message us directly. Contact ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      dirLink('USA Angular job support', 'usa-angular-job-support'),
      dirLink('Canada Angular job support', 'canada-angular-job-support'),
    ],
    techLinks: [
      dirLink('UK Angular job support', 'uk-angular-job-support'),
      dirLink('Australia Angular job support', 'australia-angular-job-support'),
    ],
    problemLink: HUB_LINK,
    proxyLink: INTERVIEW_HUB_LINK,
    additionalLinks: [
      // Country hubs
      dirLink('Ireland Angular job support', 'ireland-angular-job-support'),
      dirLink('Germany Angular job support', 'germany-angular-job-support'),
      dirLink('Netherlands Angular job support', 'netherlands-angular-job-support'),
      dirLink('France Angular job support', 'france-angular-job-support'),
      dirLink('Sweden Angular job support', 'sweden-angular-job-support'),
      dirLink('Switzerland Angular job support', 'switzerland-angular-job-support'),
      dirLink('New Zealand Angular job support', 'new-zealand-angular-job-support'),
      dirLink('Singapore Angular job support', 'singapore-angular-job-support'),
      dirLink('Hong Kong Angular job support', 'hong-kong-angular-job-support'),
      dirLink('UAE Angular job support', 'uae-angular-job-support'),
      dirLink('Saudi Arabia Angular job support', 'saudi-arabia-angular-job-support'),
      dirLink('Europe Angular job support', 'europe-angular-job-support'),
      // Key USA cities
      dirLink('New York Angular job support', 'new-york-angular-job-support'),
      dirLink('San Francisco Angular job support', 'san-francisco-angular-job-support'),
      dirLink('Dallas Angular job support', 'dallas-angular-job-support'),
      dirLink('Chicago Angular job support', 'chicago-angular-job-support'),
      dirLink('Seattle Angular job support', 'seattle-angular-job-support'),
      // Key intl cities
      dirLink('Toronto Angular job support', 'toronto-angular-job-support'),
      dirLink('London Angular job support', 'london-angular-job-support'),
      dirLink('Dublin Angular job support', 'dublin-angular-job-support'),
      dirLink('Berlin Angular job support', 'berlin-angular-job-support'),
      dirLink('Amsterdam Angular job support', 'amsterdam-angular-job-support'),
      dirLink('Sydney Angular job support', 'sydney-angular-job-support'),
      dirLink('Dubai Angular job support', 'dubai-angular-job-support'),
      HUB_LINK, JOB_LINK, INTERVIEW_HUB_LINK, PROFILE_LINK, GET_SCHEDULED_LINK,
    ],
  }),
});

// ─── Combined KB batch export ────────────────────────────────────────────────

export const angularKbPages: LandingPageConfig[] = [
  ...angularGuidePages,
  ...angularComparisonPages,
  angularLocationsDirectory,
];
