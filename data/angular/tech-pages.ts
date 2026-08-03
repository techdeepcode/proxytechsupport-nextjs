import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import {
  angularPage,
  relatedLinks,
  techHighlights,
  techFaqs,
  EXISTING,
  HUB_LINK,
  JOB_LINK,
  PRODUCTION_LINK,
  INTERVIEW_HUB_LINK,
  PERFORMANCE_LINK,
  ARCHITECTURE_LINK,
} from './shared';

/**
 * Angular technical topic pages. Each is a single `techPage()` call with a unique
 * usage sentence + topic-specific scenarios, so pages carry meaningful,
 * topic-specific content (not place-name/topic-name substitution). The techFaqs
 * generator adapts to each topic. Wording says "modern Angular" — no version is
 * hardcoded, and no deprecated tool is promoted as the preferred modern approach.
 */

interface TechDef {
  slug: string;
  name: string; // display topic, e.g. 'Signals'
  usage: string; // one-line real-world usage
  scenarios: string[]; // 4 topic-specific problem scenarios
  related: [string, string][]; // [label, slug] related technical pages
  countryLink?: [string, string];
}

const link = (t: [string, string]): LandingRelatedLink => ({ label: t[0], href: `/${t[1]}/` });

const priorityCountry: LandingRelatedLink = { label: 'USA Angular job support', href: '/usa-angular-job-support/' };

function techPage(d: TechDef): LandingPageConfig {
  const related = d.related.map(link);
  return angularPage({
    slug: d.slug,
    title: `Angular ${d.name} Support — Real-Time Expert Help & Debugging`,
    description: `Real-time Angular ${d.name} support — ${d.usage} Implementation, debugging, code review, performance, and production help from in-house Angular experts. Same-day, confidential.`,
    keywords: [
      `Angular ${d.name} support`, `Angular ${d.name} job support`, `Angular ${d.name} help`,
      `Angular ${d.name} debugging`, `Angular ${d.name} best practices`, `Angular ${d.name} production issue`,
    ],
    h1: `Angular ${d.name} Support — Expert Help on Your Real Project`,
    tagline: `Real-time, hands-on Angular ${d.name} help on your actual tickets — implementation, debugging, code review, and production support during your working hours.`,
    heroEyebrow: `Angular ${d.name}`,
    painIntro: `Stuck on Angular ${d.name}? ${d.usage} When it goes wrong on a real project — with a deadline attached — you need someone experienced beside you, not another forum thread.`,
    heroVariant: `Our in-house Angular experts work on your real ${d.name} tickets: design and implementation, debugging the edge cases, code review before you push, performance tuning, and production issues. We explain the reasoning as we go, so you both ship the fix and understand it. Same-day, fully confidential, on your codebase.`,
    geoLine: `Supporting Angular ${d.name} work for professionals across the USA, Canada, UK, Europe, Australia, and worldwide.`,
    timezoneNote: 'Available across all major business hours for daily and on-call Angular support.',
    techSnippet: `We cover ${d.name} in depth alongside the rest of modern Angular — TypeScript, RxJS, signals, and the surrounding architecture.`,
    highlights: techHighlights,
    faqs: techFaqs(`Angular ${d.name}`, d.usage),
    useCasesSection: {
      title: `Angular ${d.name} Situations We Resolve`,
      cases: [
        ...d.scenarios,
        `A code review flagging your ${d.name} usage and you want it right before the next PR`,
        `An Angular ${d.name} interview question you want to be able to answer with confidence`,
      ],
    },
    proxySection: {
      title: `Angular ${d.name} — From Delivery to Interviews`,
      intro: `We help you both use ${d.name} correctly at work and explain it under interview pressure.`,
      points: [
        `Live help implementing and debugging ${d.name} on your real project`,
        `Code review so your ${d.name} usage follows modern Angular best practices`,
        `Interview preparation covering ${d.name} fundamentals and trade-offs`,
        'Full-stack and architecture context so it fits the bigger picture',
        'Confidential, in-house Angular experts across all time zones',
      ],
    },
    bottomCTAHeading: `Need Angular ${d.name} Help Right Now?`,
    bottomCTABody: `Real-time, in-house Angular ${d.name} experts available same-day. Contact ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [HUB_LINK, JOB_LINK],
      techLinks: related.slice(0, 2),
      problemLink: PRODUCTION_LINK,
      proxyLink: INTERVIEW_HUB_LINK,
      additionalLinks: [
        ...related.slice(2),
        d.countryLink ? link(d.countryLink) : priorityCountry,
        JOB_LINK, PRODUCTION_LINK, ARCHITECTURE_LINK, INTERVIEW_HUB_LINK, HUB_LINK,
      ],
    }),
  });
}

// ─── Core & Architecture ─────────────────────────────────────────────────────

const coreArch: TechDef[] = [
  {
    slug: 'angular-standalone-components-job-support', name: 'Standalone Components',
    usage: 'Standalone components remove the need for NgModules and are the default way to build modern Angular apps.',
    scenarios: [
      'Migrating an NgModule-based app to standalone components without breaking lazy loading',
      'Getting imports, providers, and routing right in a standalone-first app',
      'Bootstrapping a standalone application and configuring providers correctly',
      'Mixing standalone and NgModule code during an incremental migration',
    ],
    related: [['Angular signals job support', 'angular-signals-job-support'], ['Angular component architecture job support', 'angular-component-architecture-job-support'], ['Angular routing job support', 'angular-routing-job-support']],
  },
  {
    slug: 'angular-signals-job-support', name: 'Signals',
    usage: 'Signals are Angular’s fine-grained reactivity primitive for state, computed values, and effects.',
    scenarios: [
      'Effects that fire in loops or run at the wrong time',
      'Deciding when to use signals versus RxJS for derived state',
      'Migrating component state from BehaviorSubject to signals cleanly',
      'Interop between signals and observables with toSignal and toObservable',
    ],
    related: [['Angular signal input output job support', 'angular-signal-input-output-job-support'], ['Angular RxJS job support', 'angular-rxjs-job-support'], ['Angular signals guide', 'angular-signals-guide']],
  },
  {
    slug: 'angular-signal-input-output-job-support', name: 'Signal Inputs & Outputs',
    usage: 'Signal inputs and outputs (input(), output(), model()) are the modern way to declare component APIs.',
    scenarios: [
      'Converting @Input/@Output decorators to signal inputs and outputs',
      'Using required inputs, input transforms, and two-way model() bindings',
      'Reacting to input changes with computed and effect instead of ngOnChanges',
      'Getting types right for signal-based component APIs',
    ],
    related: [['Angular signals job support', 'angular-signals-job-support'], ['Angular component architecture job support', 'angular-component-architecture-job-support'], ['Angular standalone components job support', 'angular-standalone-components-job-support']],
  },
  {
    slug: 'angular-zoneless-change-detection-job-support', name: 'Zoneless Change Detection',
    usage: 'Zoneless change detection removes the dependency on Zone.js and relies on signals and explicit notifications.',
    scenarios: [
      'Identifying code and libraries that depend on Zone.js before going zoneless',
      'Views not updating after removing Zone.js because state is not signal-based',
      'Combining zoneless change detection with OnPush and signals correctly',
      'Assessing whether your app and dependencies are ready for zoneless',
    ],
    related: [['Angular change detection job support', 'angular-change-detection-job-support'], ['Angular signals job support', 'angular-signals-job-support'], ['Angular performance optimization job support', 'angular-performance-optimization-job-support']],
  },
  {
    slug: 'angular-change-detection-job-support', name: 'Change Detection',
    usage: 'Change detection is how Angular keeps the DOM in sync with your data.',
    scenarios: [
      'ExpressionChangedAfterItHasBeenChecked errors you cannot locate',
      'Views not updating when data changes with OnPush',
      'Excessive change detection causing sluggish UI',
      'Understanding when to use markForCheck, detectChanges, and signals',
    ],
    related: [['Angular OnPush job support', 'angular-onpush-job-support'], ['Angular signals job support', 'angular-signals-job-support'], ['Angular performance optimization job support', 'angular-performance-optimization-job-support']],
  },
  {
    slug: 'angular-component-architecture-job-support', name: 'Component Architecture',
    usage: 'Good component architecture keeps Angular apps maintainable as they grow.',
    scenarios: [
      'A component that has grown too large and does too much',
      'Deciding component boundaries, inputs, outputs, and responsibilities',
      'Designing reusable, well-typed component APIs',
      'Structuring feature and shared components in a scalable way',
    ],
    related: [['Angular smart & presentational components support', 'angular-smart-presentational-components-support'], ['Angular architecture support', 'angular-architecture-support'], ['Angular signals job support', 'angular-signals-job-support']],
  },
  {
    slug: 'angular-smart-presentational-components-support', name: 'Smart & Presentational Components',
    usage: 'Separating smart (container) and presentational components keeps logic and UI cleanly divided.',
    scenarios: [
      'Untangling components that mix data fetching and presentation',
      'Deciding what state and logic belongs in container versus presentational components',
      'Making presentational components reusable and easy to test',
      'Wiring smart components to state without leaking it into the UI layer',
    ],
    related: [['Angular component architecture job support', 'angular-component-architecture-job-support'], ['Angular state management job support', 'angular-state-management-job-support'], ['Angular architecture support', 'angular-architecture-support']],
  },
  {
    slug: 'angular-dependency-injection-job-support', name: 'Dependency Injection',
    usage: 'Angular’s dependency injection wires services, tokens, and configuration through the app.',
    scenarios: [
      'Understanding injector hierarchies and provider scopes',
      'Using inject(), InjectionToken, and providedIn correctly',
      'Debugging NullInjectorError and duplicate-instance problems',
      'Providing configuration and swapping implementations for testing',
    ],
    related: [['Angular services job support', 'angular-services-job-support'], ['Angular standalone components job support', 'angular-standalone-components-job-support'], ['Angular architecture support', 'angular-architecture-support']],
  },
  {
    slug: 'angular-services-job-support', name: 'Services',
    usage: 'Services hold shared logic, state, and data access in Angular apps.',
    scenarios: [
      'Structuring services so they stay focused and testable',
      'Managing shared state in a service with signals or RxJS',
      'Avoiding memory leaks and duplicate work in long-lived services',
      'Deciding what belongs in a service versus a component or store',
    ],
    related: [['Angular dependency injection job support', 'angular-dependency-injection-job-support'], ['Angular state management job support', 'angular-state-management-job-support'], ['Angular HttpClient job support', 'angular-http-client-job-support']],
  },
  {
    slug: 'angular-directives-job-support', name: 'Directives',
    usage: 'Directives add behaviour to elements and components, including structural and attribute directives.',
    scenarios: [
      'Writing a custom structural or attribute directive correctly',
      'Using host bindings, host listeners, and directive composition',
      'Migrating custom structural directives to the new control flow where appropriate',
      'Debugging directives that do not apply or conflict with each other',
    ],
    related: [['Angular pipes job support', 'angular-pipes-job-support'], ['Angular content projection job support', 'angular-content-projection-job-support'], ['Angular component architecture job support', 'angular-component-architecture-job-support']],
  },
  {
    slug: 'angular-pipes-job-support', name: 'Pipes',
    usage: 'Pipes transform values in templates, from formatting to custom transformations.',
    scenarios: [
      'Writing a custom pure or impure pipe correctly',
      'Performance problems from impure pipes running too often',
      'Using the async pipe safely to avoid manual subscriptions and leaks',
      'Deciding between a pipe, a computed signal, and a method call',
    ],
    related: [['Angular directives job support', 'angular-directives-job-support'], ['Angular signals job support', 'angular-signals-job-support'], ['Angular performance optimization job support', 'angular-performance-optimization-job-support']],
  },
  {
    slug: 'angular-lifecycle-hooks-job-support', name: 'Lifecycle Hooks',
    usage: 'Lifecycle hooks let components respond to creation, change, and destruction.',
    scenarios: [
      'Choosing the right hook and avoiding work in the wrong one',
      'Replacing ngOnChanges with signal inputs and computed where suitable',
      'Cleaning up subscriptions and timers in ngOnDestroy (or with DestroyRef)',
      'Debugging hooks firing unexpectedly or not at all',
    ],
    related: [['Angular change detection job support', 'angular-change-detection-job-support'], ['Angular signals job support', 'angular-signals-job-support'], ['Angular RxJS job support', 'angular-rxjs-job-support']],
  },
  {
    slug: 'angular-content-projection-job-support', name: 'Content Projection',
    usage: 'Content projection (ng-content) lets components accept and render external content.',
    scenarios: [
      'Building flexible components with single and multi-slot projection',
      'Using ngProjectAs and conditional projection correctly',
      'Accessing projected content with content queries',
      'Debugging projected content that does not render as expected',
    ],
    related: [['Angular dynamic components job support', 'angular-dynamic-components-job-support'], ['Angular component architecture job support', 'angular-component-architecture-job-support'], ['Angular directives job support', 'angular-directives-job-support']],
  },
  {
    slug: 'angular-dynamic-components-job-support', name: 'Dynamic Components',
    usage: 'Dynamic components are created and rendered at runtime, useful for modals, widgets, and plugins.',
    scenarios: [
      'Rendering components dynamically with ViewContainerRef and createComponent',
      'Passing inputs and handling outputs on dynamic components',
      'Cleaning up dynamic components to avoid memory leaks',
      'Building a plugin or widget system with dynamic rendering',
    ],
    related: [['Angular content projection job support', 'angular-content-projection-job-support'], ['Angular component architecture job support', 'angular-component-architecture-job-support'], ['Angular CDK job support', 'angular-cdk-job-support']],
  },
];

// ─── Forms & Validation ──────────────────────────────────────────────────────

const forms: TechDef[] = [
  {
    slug: 'angular-reactive-forms-job-support', name: 'Reactive Forms',
    usage: 'Reactive forms give you a model-driven, testable way to build complex forms.',
    scenarios: [
      'Building large, nested reactive forms with FormGroup and FormArray',
      'Cross-field validation and dynamic enable/disable logic',
      'Performance problems on big forms with many controls',
      'Syncing form state with a store or backend cleanly',
    ],
    related: [['Angular typed forms job support', 'angular-typed-forms-job-support'], ['Angular form validation job support', 'angular-form-validation-job-support'], ['Angular dynamic forms job support', 'angular-dynamic-forms-job-support']],
  },
  {
    slug: 'angular-typed-forms-job-support', name: 'Typed Forms',
    usage: 'Typed reactive forms give full type safety across form controls and values.',
    scenarios: [
      'Migrating existing forms to strictly typed reactive forms',
      'Getting types right for nested groups, arrays, and optional controls',
      'Handling nullability and non-nullable controls correctly',
      'Fixing type errors introduced when strict typing was enabled',
    ],
    related: [['Angular reactive forms job support', 'angular-reactive-forms-job-support'], ['Angular form validation job support', 'angular-form-validation-job-support'], ['Angular dynamic forms job support', 'angular-dynamic-forms-job-support']],
  },
  {
    slug: 'angular-template-driven-forms-job-support', name: 'Template-Driven Forms',
    usage: 'Template-driven forms build form logic declaratively in the template.',
    scenarios: [
      'Deciding between template-driven and reactive forms for a feature',
      'Getting ngModel, validation, and form state right in template-driven forms',
      'Debugging two-way binding and validation timing issues',
      'Migrating a template-driven form to reactive forms when it outgrows the approach',
    ],
    related: [['Angular reactive forms job support', 'angular-reactive-forms-job-support'], ['Angular form validation job support', 'angular-form-validation-job-support'], ['Angular typed forms job support', 'angular-typed-forms-job-support']],
  },
  {
    slug: 'angular-form-validation-job-support', name: 'Form Validation',
    usage: 'Form validation covers built-in, custom, cross-field, and async validators.',
    scenarios: [
      'Writing custom synchronous and asynchronous validators',
      'Cross-field and conditional validation that updates correctly',
      'Showing clear, accessible validation messages',
      'Debugging validators that run too often or not at all',
    ],
    related: [['Angular reactive forms job support', 'angular-reactive-forms-job-support'], ['Angular typed forms job support', 'angular-typed-forms-job-support'], ['Angular dynamic forms job support', 'angular-dynamic-forms-job-support']],
  },
  {
    slug: 'angular-dynamic-forms-job-support', name: 'Dynamic Forms',
    usage: 'Dynamic forms build controls at runtime from configuration or metadata.',
    scenarios: [
      'Generating a form from a JSON or backend-driven schema',
      'Adding and removing controls dynamically with FormArray',
      'Keeping dynamic forms typed and validated correctly',
      'Performance on very large, dynamically generated forms',
    ],
    related: [['Angular reactive forms job support', 'angular-reactive-forms-job-support'], ['Angular form validation job support', 'angular-form-validation-job-support'], ['Angular typed forms job support', 'angular-typed-forms-job-support']],
  },
  {
    slug: 'angular-signals-forms-support', name: 'Signals in Forms',
    usage: 'Signals can drive form-related state and derived values alongside reactive forms.',
    scenarios: [
      'Using signals and computed for form-derived UI state',
      'Bridging reactive form value changes into signals with toSignal',
      'Deciding what stays in the form model versus signal state',
      'Keeping form-driven UI reactive without unnecessary subscriptions',
    ],
    related: [['Angular reactive forms job support', 'angular-reactive-forms-job-support'], ['Angular signals job support', 'angular-signals-job-support'], ['Angular typed forms job support', 'angular-typed-forms-job-support']],
  },
];

// ─── Routing & Loading ───────────────────────────────────────────────────────

const routing: TechDef[] = [
  {
    slug: 'angular-routing-job-support', name: 'Routing',
    usage: 'The Angular Router handles navigation, params, and view composition.',
    scenarios: [
      'Structuring routes, child routes, and layouts in a large app',
      'Passing and reading route params, query params, and data',
      'Debugging navigation, redirects, and route matching issues',
      'Migrating routing config to standalone, functional providers',
    ],
    related: [['Angular lazy loading job support', 'angular-lazy-loading-job-support'], ['Angular route guards job support', 'angular-route-guards-job-support'], ['Angular resolvers job support', 'angular-resolvers-job-support']],
  },
  {
    slug: 'angular-lazy-loading-job-support', name: 'Lazy Loading',
    usage: 'Lazy loading splits the app into chunks loaded on demand for faster initial load.',
    scenarios: [
      'Lazy-loading standalone components and routes correctly',
      'Chunk-load errors in production after a deploy',
      'Reducing initial bundle size with route-level lazy loading',
      'Combining lazy loading with preloading strategies',
    ],
    related: [['Angular preloading strategy job support', 'angular-preloading-strategy-job-support'], ['Angular routing job support', 'angular-routing-job-support'], ['Angular bundle optimization job support', 'angular-bundle-optimization-job-support']],
  },
  {
    slug: 'angular-route-guards-job-support', name: 'Route Guards',
    usage: 'Route guards control access and navigation with functional CanActivate/CanMatch guards.',
    scenarios: [
      'Implementing auth and role-based guards with functional guards',
      'Using CanMatch for conditional route resolution',
      'Debugging guards that block or allow navigation incorrectly',
      'Migrating class-based guards to functional guards',
    ],
    related: [['Angular authentication job support', 'angular-authentication-job-support'], ['Angular authorization RBAC job support', 'angular-authorization-rbac-job-support'], ['Angular routing job support', 'angular-routing-job-support']],
  },
  {
    slug: 'angular-resolvers-job-support', name: 'Route Resolvers',
    usage: 'Resolvers pre-fetch data before a route activates.',
    scenarios: [
      'Deciding when a resolver helps versus loading in the component',
      'Handling resolver errors and slow data gracefully',
      'Using functional resolvers with inject()',
      'Avoiding blocked navigation from slow resolvers',
    ],
    related: [['Angular routing job support', 'angular-routing-job-support'], ['Angular route guards job support', 'angular-route-guards-job-support'], ['Angular HttpClient job support', 'angular-http-client-job-support']],
  },
  {
    slug: 'angular-deferrable-views-job-support', name: 'Deferrable Views',
    usage: 'Deferrable views (@defer) lazily load template sections on triggers like viewport or interaction.',
    scenarios: [
      'Using @defer with on viewport, on interaction, and on idle triggers',
      'Adding @placeholder, @loading, and @error blocks correctly',
      'Improving LCP and initial load with deferrable views',
      'Debugging deferred content that loads too early or too late',
    ],
    related: [['Angular lazy loading job support', 'angular-lazy-loading-job-support'], ['Angular core web vitals support', 'angular-core-web-vitals-support'], ['Angular performance optimization job support', 'angular-performance-optimization-job-support']],
  },
  {
    slug: 'angular-preloading-strategy-job-support', name: 'Preloading Strategy',
    usage: 'Preloading strategies fetch lazy chunks in the background to speed up later navigation.',
    scenarios: [
      'Choosing between no preloading, PreloadAllModules, and a custom strategy',
      'Writing a custom preloading strategy for priority routes',
      'Balancing initial load against navigation speed',
      'Debugging preloading that fetches too much too early',
    ],
    related: [['Angular lazy loading job support', 'angular-lazy-loading-job-support'], ['Angular routing job support', 'angular-routing-job-support'], ['Angular performance optimization job support', 'angular-performance-optimization-job-support']],
  },
];

// ─── State Management & Reactivity ───────────────────────────────────────────

const state: TechDef[] = [
  {
    slug: 'angular-ngrx-job-support', name: 'NgRx',
    usage: 'NgRx provides a Redux-style store for predictable state management.',
    scenarios: [
      'Structuring actions, reducers, selectors, and effects at scale',
      'Debugging effects that loop, miss, or fire in the wrong order',
      'Performance from poorly memoized selectors',
      'Deciding what belongs in the store versus local state',
    ],
    related: [['Angular NgRx Signal Store support', 'angular-ngrx-signals-store-support'], ['Angular RxJS job support', 'angular-rxjs-job-support'], ['Angular state management job support', 'angular-state-management-job-support']],
  },
  {
    slug: 'angular-ngrx-signals-store-support', name: 'NgRx Signal Store',
    usage: 'The NgRx Signal Store is a lightweight, signal-based state solution.',
    scenarios: [
      'Modelling feature state with signalStore and withState/withMethods',
      'Using withComputed and rxMethod correctly',
      'Migrating from classic NgRx to the Signal Store where it fits',
      'Structuring signal stores for larger features',
    ],
    related: [['Angular NgRx job support', 'angular-ngrx-job-support'], ['Angular signals job support', 'angular-signals-job-support'], ['Angular state management job support', 'angular-state-management-job-support']],
  },
  {
    slug: 'angular-rxjs-job-support', name: 'RxJS',
    usage: 'RxJS powers Angular’s async and event-driven code with observables and operators.',
    scenarios: [
      'Choosing the right operator (switchMap vs mergeMap vs concatMap vs exhaustMap)',
      'Subscriptions that leak or fire multiple times',
      'Combining streams, debouncing, and error handling correctly',
      'Migrating suitable RxJS state to signals without losing behaviour',
    ],
    related: [['Angular signals vs RxJS guide', 'angular-signals-vs-rxjs-guide'], ['Angular signals job support', 'angular-signals-job-support'], ['Angular state management job support', 'angular-state-management-job-support']],
  },
  {
    slug: 'angular-state-management-job-support', name: 'State Management',
    usage: 'State management covers how shared and local state flows through an Angular app.',
    scenarios: [
      'Choosing between services + signals, NgRx, and the Signal Store',
      'State that is duplicated or out of sync across components',
      'Refactoring tangled state into a clean, predictable approach',
      'Keeping state management consistent across a growing team',
    ],
    related: [['Angular NgRx job support', 'angular-ngrx-job-support'], ['Angular NgRx Signal Store support', 'angular-ngrx-signals-store-support'], ['Angular component store job support', 'angular-component-store-job-support']],
  },
  {
    slug: 'angular-component-store-job-support', name: 'Component Store',
    usage: 'NgRx Component Store manages local, component-level state reactively.',
    scenarios: [
      'Using Component Store for feature-local state',
      'Wiring updaters, selectors, and effects in Component Store',
      'Deciding between Component Store, the Signal Store, and a service',
      'Cleaning up Component Store state on destroy',
    ],
    related: [['Angular NgRx job support', 'angular-ngrx-job-support'], ['Angular state management job support', 'angular-state-management-job-support'], ['Angular RxJS job support', 'angular-rxjs-job-support']],
  },
];

// ─── UI & Design Systems ─────────────────────────────────────────────────────

const ui: TechDef[] = [
  {
    slug: 'angular-material-job-support', name: 'Material',
    usage: 'Angular Material provides Material Design components and theming.',
    scenarios: [
      'Theming and customizing Material components to a design system',
      'Data tables with sorting, pagination, filtering, and virtual scroll',
      'Overriding component styles without fighting encapsulation',
      'Upgrading Material versions and reconciling API changes',
    ],
    related: [['Angular CDK job support', 'angular-cdk-job-support'], ['Angular Material upgrade support', 'angular-material-upgrade-support'], ['Angular enterprise design system support', 'angular-enterprise-design-system-support']],
  },
  {
    slug: 'angular-cdk-job-support', name: 'CDK',
    usage: 'The Angular CDK provides low-level building blocks like overlays, drag-drop, and virtual scrolling.',
    scenarios: [
      'Building custom overlays, tooltips, and dialogs with the Overlay CDK',
      'Virtual scrolling large lists with the Scrolling CDK',
      'Drag-and-drop with the DragDrop CDK',
      'Accessibility helpers with the A11y CDK (focus trap, live announcer)',
    ],
    related: [['Angular Material job support', 'angular-material-job-support'], ['Angular accessibility job support', 'angular-accessibility-job-support'], ['Angular dynamic components job support', 'angular-dynamic-components-job-support']],
  },
  {
    slug: 'angular-bootstrap-job-support', name: 'Bootstrap',
    usage: 'Bootstrap and ng-bootstrap provide a familiar responsive UI toolkit in Angular apps.',
    scenarios: [
      'Integrating Bootstrap or ng-bootstrap cleanly with Angular',
      'Building responsive layouts and grids',
      'Customizing Bootstrap theming with SCSS',
      'Migrating from jQuery-based Bootstrap plugins to Angular components',
    ],
    related: [['Angular responsive UI job support', 'angular-responsive-ui-job-support'], ['Angular Tailwind job support', 'angular-tailwind-job-support'], ['Angular Material job support', 'angular-material-job-support']],
  },
  {
    slug: 'angular-tailwind-job-support', name: 'Tailwind CSS',
    usage: 'Tailwind CSS provides utility-first styling that works well with Angular components.',
    scenarios: [
      'Setting up Tailwind with the Angular build correctly',
      'Structuring utility classes in component templates cleanly',
      'Combining Tailwind with component libraries and design tokens',
      'Optimizing the Tailwind build for production',
    ],
    related: [['Angular responsive UI job support', 'angular-responsive-ui-job-support'], ['Angular bootstrap job support', 'angular-bootstrap-job-support'], ['Angular enterprise design system support', 'angular-enterprise-design-system-support']],
  },
  {
    slug: 'angular-accessibility-job-support', name: 'Accessibility',
    usage: 'Accessibility (a11y) makes Angular apps usable for everyone and meets WCAG/Section 508 requirements.',
    scenarios: [
      'Fixing keyboard navigation and focus management',
      'ARIA roles, labels, and live regions done correctly',
      'Passing accessibility audits and automated checks',
      'Accessible forms, dialogs, and dynamic content',
    ],
    related: [['Angular CDK job support', 'angular-cdk-job-support'], ['Angular responsive UI job support', 'angular-responsive-ui-job-support'], ['Angular Material job support', 'angular-material-job-support']],
  },
  {
    slug: 'angular-responsive-ui-job-support', name: 'Responsive UI',
    usage: 'Responsive UI ensures Angular apps work across screen sizes and devices.',
    scenarios: [
      'Building responsive layouts with CSS grid, flexbox, and breakpoints',
      'Using the CDK BreakpointObserver for responsive behaviour',
      'Fixing layout shift and mobile rendering issues',
      'Making complex dashboards work on small screens',
    ],
    related: [['Angular accessibility job support', 'angular-accessibility-job-support'], ['Angular Tailwind job support', 'angular-tailwind-job-support'], ['Angular core web vitals support', 'angular-core-web-vitals-support']],
  },
  {
    slug: 'angular-enterprise-design-system-support', name: 'Enterprise Design System',
    usage: 'An enterprise design system provides consistent, reusable Angular components and tokens across teams.',
    scenarios: [
      'Building a shared component library with theming and design tokens',
      'Versioning and distributing the design system across a monorepo',
      'Enforcing consistency and accessibility across many teams',
      'Migrating apps onto a new or updated design system',
    ],
    related: [['Angular Material job support', 'angular-material-job-support'], ['Angular Nx monorepo job support', 'angular-nx-monorepo-job-support'], ['Angular architecture support', 'angular-architecture-support']],
  },
];

// ─── SSR, Rendering & Performance ────────────────────────────────────────────

const ssrPerf: TechDef[] = [
  {
    slug: 'angular-ssr-job-support', name: 'SSR',
    usage: 'Server-side rendering (Angular SSR / Universal) renders pages on the server for SEO and faster first paint.',
    scenarios: [
      'Setting up Angular SSR with the application builder correctly',
      'Code that breaks on the server (window/document usage)',
      'Hydration mismatches and flicker after SSR',
      'Server memory growth and performance under load',
    ],
    related: [['Angular hydration job support', 'angular-hydration-job-support'], ['Angular prerendering job support', 'angular-prerendering-job-support'], ['Angular core web vitals support', 'angular-core-web-vitals-support']],
  },
  {
    slug: 'angular-hydration-job-support', name: 'Hydration',
    usage: 'Hydration reuses server-rendered DOM on the client instead of re-rendering it.',
    scenarios: [
      'Fixing hydration mismatch warnings and errors',
      'Using incremental hydration with deferrable views',
      'Handling third-party scripts and DOM manipulation that break hydration',
      'Debugging flicker and double-render after hydration',
    ],
    related: [['Angular SSR job support', 'angular-ssr-job-support'], ['Angular deferrable views job support', 'angular-deferrable-views-job-support'], ['Angular performance optimization job support', 'angular-performance-optimization-job-support']],
  },
  {
    slug: 'angular-prerendering-job-support', name: 'Prerendering',
    usage: 'Prerendering (SSG) generates static HTML for routes at build time.',
    scenarios: [
      'Configuring prerendering for known and parameterized routes',
      'Combining prerendering with SSR and client rendering',
      'Prerendering content-heavy pages for SEO',
      'Debugging build-time prerender failures',
    ],
    related: [['Angular SSR job support', 'angular-ssr-job-support'], ['Angular hydration job support', 'angular-hydration-job-support'], ['Angular core web vitals support', 'angular-core-web-vitals-support']],
  },
  {
    slug: 'angular-performance-optimization-job-support', name: 'Performance Optimization',
    usage: 'Performance optimization keeps Angular apps fast in change detection, rendering, and load time.',
    scenarios: [
      'Profiling and fixing excessive change detection',
      'Speeding up slow lists with trackBy and virtual scroll',
      'Reducing bundle size and initial load time',
      'Fixing memory growth over long sessions',
    ],
    related: [['Angular OnPush job support', 'angular-onpush-job-support'], ['Angular bundle optimization job support', 'angular-bundle-optimization-job-support'], ['Angular memory leak debugging support', 'angular-memory-leak-debugging-support']],
  },
  {
    slug: 'angular-onpush-job-support', name: 'OnPush Change Detection',
    usage: 'OnPush change detection reduces work by only checking components when inputs or signals change.',
    scenarios: [
      'Migrating components to OnPush without breaking updates',
      'Views not updating because of mutation instead of new references',
      'Combining OnPush with signals and the async pipe',
      'Measuring the performance win from OnPush',
    ],
    related: [['Angular change detection job support', 'angular-change-detection-job-support'], ['Angular signals job support', 'angular-signals-job-support'], ['Angular performance optimization job support', 'angular-performance-optimization-job-support']],
  },
  {
    slug: 'angular-bundle-optimization-job-support', name: 'Bundle Optimization',
    usage: 'Bundle optimization shrinks the JavaScript shipped to users for faster loads.',
    scenarios: [
      'Auditing and reducing an oversized bundle',
      'Fixing eager imports that defeat lazy loading',
      'Tree-shaking, code-splitting, and dependency slimming',
      'Setting and enforcing bundle budgets in CI',
    ],
    related: [['Angular lazy loading job support', 'angular-lazy-loading-job-support'], ['Angular deferrable views job support', 'angular-deferrable-views-job-support'], ['Angular performance optimization job support', 'angular-performance-optimization-job-support']],
  },
  {
    slug: 'angular-core-web-vitals-support', name: 'Core Web Vitals',
    usage: 'Core Web Vitals (LCP, CLS, INP) measure real-user performance and affect SEO.',
    scenarios: [
      'Improving LCP with SSR, prerendering, and deferrable views',
      'Reducing CLS from layout shift and late-loading content',
      'Improving INP by cutting main-thread work and change detection',
      'Measuring and monitoring Core Web Vitals in production',
    ],
    related: [['Angular performance optimization job support', 'angular-performance-optimization-job-support'], ['Angular SSR job support', 'angular-ssr-job-support'], ['Angular bundle optimization job support', 'angular-bundle-optimization-job-support']],
  },
  {
    slug: 'angular-memory-leak-debugging-support', name: 'Memory Leak Debugging',
    usage: 'Memory leak debugging finds and fixes the leaks that degrade long-running Angular apps.',
    scenarios: [
      'Leaks from unclosed subscriptions and event listeners',
      'Retained component and DOM references after navigation',
      'Growing memory in long-lived services and stores',
      'Profiling heap snapshots to isolate the source',
    ],
    related: [['Angular RxJS job support', 'angular-rxjs-job-support'], ['Angular performance optimization job support', 'angular-performance-optimization-job-support'], ['Angular production support', 'angular-production-support']],
  },
];

// ─── API, Auth & Security ────────────────────────────────────────────────────

const apiSec: TechDef[] = [
  {
    slug: 'angular-rest-api-integration-job-support', name: 'REST API Integration',
    usage: 'REST API integration connects Angular apps to backend services over HTTP.',
    scenarios: [
      'Structuring API services, models, and error handling cleanly',
      'Handling pagination, retries, and caching',
      'Mapping and transforming backend responses safely',
      'Debugging CORS, headers, and serialization issues',
    ],
    related: [['Angular HttpClient job support', 'angular-http-client-job-support'], ['Angular interceptors job support', 'angular-interceptors-job-support'], ['Angular GraphQL job support', 'angular-graphql-job-support']],
  },
  {
    slug: 'angular-graphql-job-support', name: 'GraphQL',
    usage: 'GraphQL (with Apollo Angular) provides typed, flexible data fetching.',
    scenarios: [
      'Setting up Apollo Angular with caching and error handling',
      'Writing queries, mutations, and subscriptions correctly',
      'Managing the Apollo cache and optimistic updates',
      'Generating types from the schema for safety',
    ],
    related: [['Angular REST API integration job support', 'angular-rest-api-integration-job-support'], ['Angular HttpClient job support', 'angular-http-client-job-support'], ['Angular state management job support', 'angular-state-management-job-support']],
  },
  {
    slug: 'angular-http-client-job-support', name: 'HttpClient',
    usage: 'HttpClient is Angular’s API for making HTTP requests with typed responses.',
    scenarios: [
      'Typed requests, error handling, and retry logic',
      'Using the functional HttpClient with interceptors',
      'Cancelling in-flight requests with switchMap',
      'Debugging headers, auth, and response parsing',
    ],
    related: [['Angular interceptors job support', 'angular-interceptors-job-support'], ['Angular REST API integration job support', 'angular-rest-api-integration-job-support'], ['Angular RxJS job support', 'angular-rxjs-job-support']],
  },
  {
    slug: 'angular-interceptors-job-support', name: 'HTTP Interceptors',
    usage: 'Interceptors sit in the HTTP pipeline for auth, logging, error handling, and retries.',
    scenarios: [
      'Writing functional interceptors for auth tokens and refresh',
      'Global error handling and retry with backoff',
      'Adding headers, logging, and caching cleanly',
      'Ordering multiple interceptors correctly',
    ],
    related: [['Angular HttpClient job support', 'angular-http-client-job-support'], ['Angular authentication job support', 'angular-authentication-job-support'], ['Angular JWT job support', 'angular-jwt-job-support']],
  },
  {
    slug: 'angular-authentication-job-support', name: 'Authentication',
    usage: 'Authentication verifies user identity, often with tokens and OAuth/OIDC.',
    scenarios: [
      'Implementing login, token storage, and refresh securely',
      'Protecting routes with functional guards',
      'Handling session expiry and silent refresh',
      'Integrating with an identity provider (OAuth/OIDC)',
    ],
    related: [['Angular OAuth OIDC job support', 'angular-oauth-oidc-job-support'], ['Angular JWT job support', 'angular-jwt-job-support'], ['Angular authorization RBAC job support', 'angular-authorization-rbac-job-support']],
  },
  {
    slug: 'angular-authorization-rbac-job-support', name: 'Authorization & RBAC',
    usage: 'Authorization and role-based access control gate features and routes by permission.',
    scenarios: [
      'Modelling roles and permissions across the UI',
      'Guarding routes and hiding UI by permission',
      'Keeping client-side checks aligned with the backend',
      'Building a reusable permission-directive and service',
    ],
    related: [['Angular authentication job support', 'angular-authentication-job-support'], ['Angular route guards job support', 'angular-route-guards-job-support'], ['Angular role-based dashboard support', 'angular-role-based-dashboard-support']],
  },
  {
    slug: 'angular-oauth-oidc-job-support', name: 'OAuth & OIDC',
    usage: 'OAuth 2.0 and OpenID Connect handle delegated auth with identity providers.',
    scenarios: [
      'Implementing the authorization code + PKCE flow in Angular',
      'Integrating with providers like Entra ID, Auth0, Okta, or Cognito',
      'Token refresh, logout, and session handling',
      'Debugging redirect, scope, and token validation issues',
    ],
    related: [['Angular authentication job support', 'angular-authentication-job-support'], ['Angular JWT job support', 'angular-jwt-job-support'], ['Angular security job support', 'angular-security-job-support']],
  },
  {
    slug: 'angular-jwt-job-support', name: 'JWT',
    usage: 'JSON Web Tokens carry auth claims between client and server.',
    scenarios: [
      'Storing and attaching JWTs securely via interceptors',
      'Refreshing tokens without race conditions',
      'Reading claims safely on the client',
      'Handling expiry, revocation, and logout',
    ],
    related: [['Angular authentication job support', 'angular-authentication-job-support'], ['Angular interceptors job support', 'angular-interceptors-job-support'], ['Angular OAuth OIDC job support', 'angular-oauth-oidc-job-support']],
  },
  {
    slug: 'angular-security-job-support', name: 'Security',
    usage: 'Angular security covers XSS, CSRF, sanitization, and safe data handling.',
    scenarios: [
      'Preventing XSS with Angular sanitization and trusted types',
      'Protecting against CSRF with the right token setup',
      'Safely handling untrusted HTML and URLs',
      'Passing a security review of the frontend',
    ],
    related: [['Angular XSS & CSRF security support', 'angular-xss-csrf-security-support'], ['Angular authentication job support', 'angular-authentication-job-support'], ['Angular authorization RBAC job support', 'angular-authorization-rbac-job-support']],
  },
  {
    slug: 'angular-xss-csrf-security-support', name: 'XSS & CSRF Protection',
    usage: 'XSS and CSRF protection defend Angular apps against injection and forged requests.',
    scenarios: [
      'Fixing XSS risks from innerHTML and bypassed sanitization',
      'Configuring CSRF token handling with HttpClient',
      'Applying a Content Security Policy that works with Angular',
      'Remediating findings from a security audit',
    ],
    related: [['Angular security job support', 'angular-security-job-support'], ['Angular interceptors job support', 'angular-interceptors-job-support'], ['Angular authentication job support', 'angular-authentication-job-support']],
  },
];

// ─── Testing & Quality ───────────────────────────────────────────────────────

const testing: TechDef[] = [
  {
    slug: 'angular-unit-testing-job-support', name: 'Unit Testing',
    usage: 'Unit testing verifies Angular components, services, and logic in isolation.',
    scenarios: [
      'Writing meaningful unit tests for components and services',
      'Testing signals, observables, and async logic',
      'Mocking dependencies and HTTP with the testing utilities',
      'Fixing flaky or slow unit tests',
    ],
    related: [['Angular component testing job support', 'angular-component-testing-job-support'], ['Angular Jest job support', 'angular-jest-job-support'], ['Angular testing library job support', 'angular-testing-library-job-support']],
  },
  {
    slug: 'angular-jest-job-support', name: 'Jest',
    usage: 'Jest is a fast, widely used test runner that can replace Karma for Angular unit tests.',
    scenarios: [
      'Migrating Angular unit tests from Karma to Jest',
      'Configuring Jest with the Angular preset and ESM',
      'Mocking modules and speeding up the suite',
      'Debugging Jest-specific failures and config issues',
    ],
    related: [['Angular unit testing job support', 'angular-unit-testing-job-support'], ['Angular component testing job support', 'angular-component-testing-job-support'], ['Angular test automation support', 'angular-test-automation-support']],
  },
  {
    slug: 'angular-component-testing-job-support', name: 'Component Testing',
    usage: 'Component testing verifies rendered components and their interactions.',
    scenarios: [
      'Testing component templates, inputs, outputs, and events',
      'Testing components that use signals and OnPush',
      'Choosing between TestBed and lighter approaches',
      'Testing components with routing and dependency injection',
    ],
    related: [['Angular unit testing job support', 'angular-unit-testing-job-support'], ['Angular testing library job support', 'angular-testing-library-job-support'], ['Angular Cypress job support', 'angular-cypress-job-support']],
  },
  {
    slug: 'angular-cypress-job-support', name: 'Cypress',
    usage: 'Cypress runs end-to-end and component tests in a real browser.',
    scenarios: [
      'Setting up Cypress E2E and component testing for Angular',
      'Writing stable selectors and avoiding flaky tests',
      'Handling auth, network stubbing, and async waits',
      'Running Cypress in CI reliably',
    ],
    related: [['Angular playwright job support', 'angular-playwright-job-support'], ['Angular e2e testing job support', 'angular-e2e-testing-job-support'], ['Angular test automation support', 'angular-test-automation-support']],
  },
  {
    slug: 'angular-playwright-job-support', name: 'Playwright',
    usage: 'Playwright runs reliable, fast end-to-end tests across browsers.',
    scenarios: [
      'Setting up Playwright E2E tests for an Angular app',
      'Writing resilient tests with auto-waiting and locators',
      'Handling auth state, fixtures, and parallelism',
      'Running Playwright in CI with traces and retries',
    ],
    related: [['Angular cypress job support', 'angular-cypress-job-support'], ['Angular e2e testing job support', 'angular-e2e-testing-job-support'], ['Angular test automation support', 'angular-test-automation-support']],
  },
  {
    slug: 'angular-e2e-testing-job-support', name: 'E2E Testing',
    usage: 'End-to-end testing validates whole user journeys through the app.',
    scenarios: [
      'Choosing an E2E stack (Playwright or Cypress) for your project',
      'Structuring E2E suites so they stay maintainable',
      'Reducing flakiness with stable selectors and waits',
      'Wiring E2E tests into CI/CD gates',
    ],
    related: [['Angular playwright job support', 'angular-playwright-job-support'], ['Angular cypress job support', 'angular-cypress-job-support'], ['Angular test automation support', 'angular-test-automation-support']],
  },
  {
    slug: 'angular-testing-library-job-support', name: 'Testing Library',
    usage: 'Angular Testing Library encourages tests that focus on user-visible behaviour.',
    scenarios: [
      'Writing behaviour-focused tests with Angular Testing Library',
      'Querying by role and accessible name for robust tests',
      'Testing user interactions and async UI',
      'Combining Testing Library with Jest',
    ],
    related: [['Angular unit testing job support', 'angular-unit-testing-job-support'], ['Angular component testing job support', 'angular-component-testing-job-support'], ['Angular Jest job support', 'angular-jest-job-support']],
  },
  {
    slug: 'angular-test-automation-support', name: 'Test Automation',
    usage: 'Test automation builds a reliable unit, component, and E2E suite wired into CI.',
    scenarios: [
      'Designing a test strategy across unit, component, and E2E layers',
      'Getting tests running reliably in CI/CD pipelines',
      'Reducing flakiness and speeding up the suite',
      'Adding coverage and quality gates',
    ],
    related: [['Angular unit testing job support', 'angular-unit-testing-job-support'], ['Angular e2e testing job support', 'angular-e2e-testing-job-support'], ['Angular CI/CD job support', 'angular-ci-cd-job-support']],
  },
];

// ─── Enterprise Architecture ─────────────────────────────────────────────────

const enterprise: TechDef[] = [
  {
    slug: 'angular-microfrontend-job-support', name: 'Micro-Frontends',
    usage: 'Micro-frontends split a large app into independently developed and deployed pieces.',
    scenarios: [
      'Deciding whether micro-frontends are worth the complexity',
      'Composing micro-frontends with Module Federation',
      'Sharing dependencies, state, and design system across them',
      'Debugging version and runtime integration issues',
    ],
    related: [['Angular Module Federation job support', 'angular-module-federation-job-support'], ['Angular Nx monorepo job support', 'angular-nx-monorepo-job-support'], ['Angular enterprise architecture job support', 'angular-enterprise-architecture-job-support']],
  },
  {
    slug: 'angular-module-federation-job-support', name: 'Module Federation',
    usage: 'Module Federation lets Angular apps load code from other apps at runtime.',
    scenarios: [
      'Configuring Module Federation for Angular hosts and remotes',
      'Sharing Angular and RxJS singletons across remotes',
      'Handling version mismatches and shared-scope errors',
      'Wiring routing across federated micro-frontends',
    ],
    related: [['Angular microfrontend job support', 'angular-microfrontend-job-support'], ['Angular Nx monorepo job support', 'angular-nx-monorepo-job-support'], ['Angular webpack Vite build migration support', 'angular-webpack-vite-build-migration-support']],
  },
  {
    slug: 'angular-nx-monorepo-job-support', name: 'Nx Monorepo',
    usage: 'Nx manages Angular monorepos with libraries, boundaries, caching, and consistent tooling.',
    scenarios: [
      'Structuring apps and libraries with clear boundaries',
      'Setting up module boundary rules and tags',
      'Speeding up CI with affected commands and caching',
      'Migrating a single-app repo into an Nx monorepo',
    ],
    related: [['Angular monorepo job support', 'angular-monorepo-job-support'], ['Angular enterprise architecture job support', 'angular-enterprise-architecture-job-support'], ['Angular module federation job support', 'angular-module-federation-job-support']],
  },
  {
    slug: 'angular-monorepo-job-support', name: 'Monorepo',
    usage: 'A monorepo keeps multiple Angular apps and shared libraries in one repository.',
    scenarios: [
      'Choosing and setting up a monorepo tool (Nx or others)',
      'Sharing components, models, and utilities across apps',
      'Keeping build and CI times manageable',
      'Enforcing consistency and boundaries across teams',
    ],
    related: [['Angular Nx monorepo job support', 'angular-nx-monorepo-job-support'], ['Angular enterprise design system support', 'angular-enterprise-design-system-support'], ['Angular architecture support', 'angular-architecture-support']],
  },
  {
    slug: 'angular-enterprise-architecture-job-support', name: 'Enterprise Architecture',
    usage: 'Enterprise Angular architecture keeps large, multi-team apps maintainable and consistent.',
    scenarios: [
      'Designing layered, feature-based architecture at scale',
      'Establishing state, routing, and library conventions',
      'Balancing autonomy and consistency across many teams',
      'Refactoring a large legacy app toward a cleaner structure',
    ],
    related: [['Angular clean architecture job support', 'angular-clean-architecture-job-support'], ['Angular feature-based architecture support', 'angular-feature-based-architecture-support'], ['Angular Nx monorepo job support', 'angular-nx-monorepo-job-support']],
  },
  {
    slug: 'angular-clean-architecture-job-support', name: 'Clean Architecture',
    usage: 'Clean architecture separates domain, application, and infrastructure concerns in Angular.',
    scenarios: [
      'Separating domain logic from framework and UI code',
      'Structuring use cases, models, and adapters',
      'Keeping components thin and logic testable',
      'Applying clean architecture without over-engineering',
    ],
    related: [['Angular enterprise architecture job support', 'angular-enterprise-architecture-job-support'], ['Angular feature-based architecture support', 'angular-feature-based-architecture-support'], ['Angular architecture support', 'angular-architecture-support']],
  },
  {
    slug: 'angular-feature-based-architecture-support', name: 'Feature-Based Architecture',
    usage: 'Feature-based architecture organizes Angular apps around business features with clear boundaries.',
    scenarios: [
      'Structuring features, shared, and core layers',
      'Defining public APIs and boundaries between features',
      'Lazy-loading features cleanly',
      'Refactoring a flat structure into feature modules or libraries',
    ],
    related: [['Angular enterprise architecture job support', 'angular-enterprise-architecture-job-support'], ['Angular clean architecture job support', 'angular-clean-architecture-job-support'], ['Angular Nx monorepo job support', 'angular-nx-monorepo-job-support']],
  },
  {
    slug: 'angular-multi-tenant-application-support', name: 'Multi-Tenant Applications',
    usage: 'Multi-tenant Angular apps serve many customers with per-tenant config, theming, and data.',
    scenarios: [
      'Per-tenant theming, branding, and feature flags',
      'Tenant-aware routing, config loading, and data isolation',
      'Scaling a single codebase across many tenants',
      'Keeping tenant customization maintainable',
    ],
    related: [['Angular role-based dashboard support', 'angular-role-based-dashboard-support'], ['Angular enterprise application support', 'angular-enterprise-application-support'], ['Angular enterprise design system support', 'angular-enterprise-design-system-support']],
  },
  {
    slug: 'angular-role-based-dashboard-support', name: 'Role-Based Dashboards',
    usage: 'Role-based dashboards render different views and permissions per user role.',
    scenarios: [
      'Rendering dashboards and menus by role and permission',
      'Guarding routes and actions with RBAC',
      'Building configurable, data-driven dashboard layouts',
      'Keeping role logic consistent with the backend',
    ],
    related: [['Angular authorization RBAC job support', 'angular-authorization-rbac-job-support'], ['Angular multi-tenant application support', 'angular-multi-tenant-application-support'], ['Angular enterprise application support', 'angular-enterprise-application-support']],
  },
];

// ─── Cloud & DevOps ──────────────────────────────────────────────────────────

const cloud: TechDef[] = [
  {
    slug: 'angular-docker-job-support', name: 'Docker',
    usage: 'Docker containerizes Angular apps for consistent builds and deployment.',
    scenarios: [
      'Writing efficient multi-stage Dockerfiles for Angular',
      'Serving the built app with Nginx in a container',
      'Handling environment config at container runtime',
      'Reducing image size and build time',
    ],
    related: [['Angular Kubernetes job support', 'angular-kubernetes-job-support'], ['Angular Nginx deployment support', 'angular-nginx-deployment-support'], ['Angular CI/CD job support', 'angular-ci-cd-job-support']],
  },
  {
    slug: 'angular-kubernetes-job-support', name: 'Kubernetes',
    usage: 'Kubernetes runs and scales containerized Angular apps in production.',
    scenarios: [
      'Deploying Angular containers with Deployments and Services',
      'Ingress, TLS, and routing configuration',
      'Config and secrets for environment-specific settings',
      'Debugging failing pods and rollouts',
    ],
    related: [['Angular Docker job support', 'angular-docker-job-support'], ['Angular Nginx deployment support', 'angular-nginx-deployment-support'], ['Angular CI/CD job support', 'angular-ci-cd-job-support']],
  },
  {
    slug: 'angular-azure-job-support', name: 'Azure Deployment',
    usage: 'Azure hosts Angular apps via App Service, Static Web Apps, and Storage/CDN.',
    scenarios: [
      'Deploying Angular to Azure App Service or Static Web Apps',
      'Configuring routing, environment config, and CDN',
      'CI/CD from Azure DevOps or GitHub Actions',
      'Debugging deployment and routing (deep-link) issues',
    ],
    related: [['Angular Azure Static Web Apps support', 'angular-azure-static-web-apps-support'], ['Angular Azure DevOps job support', 'angular-azure-devops-job-support'], ['Angular CI/CD job support', 'angular-ci-cd-job-support']],
  },
  {
    slug: 'angular-aws-job-support', name: 'AWS Deployment',
    usage: 'AWS hosts Angular apps via S3, CloudFront, Amplify, and related services.',
    scenarios: [
      'Deploying Angular to S3 + CloudFront correctly',
      'SPA routing and cache invalidation on CloudFront',
      'CI/CD deployment pipelines to AWS',
      'Environment config and secure asset delivery',
    ],
    related: [['Angular AWS CloudFront S3 support', 'angular-aws-cloudfront-s3-support'], ['Angular CI/CD job support', 'angular-ci-cd-job-support'], ['Angular Docker job support', 'angular-docker-job-support']],
  },
  {
    slug: 'angular-gcp-job-support', name: 'GCP Deployment',
    usage: 'Google Cloud hosts Angular apps via Cloud Run, Cloud Storage, and Firebase Hosting.',
    scenarios: [
      'Deploying Angular to Firebase Hosting or Cloud Run',
      'SPA routing, CDN, and cache configuration',
      'CI/CD to GCP',
      'Environment config and secure delivery',
    ],
    related: [['Angular Docker job support', 'angular-docker-job-support'], ['Angular CI/CD job support', 'angular-ci-cd-job-support'], ['Angular Kubernetes job support', 'angular-kubernetes-job-support']],
  },
  {
    slug: 'angular-azure-static-web-apps-support', name: 'Azure Static Web Apps',
    usage: 'Azure Static Web Apps hosts Angular SPAs with built-in CI/CD and routing.',
    scenarios: [
      'Configuring staticwebapp.config.json for SPA routing and auth',
      'Wiring the GitHub Actions build for Angular',
      'Adding API routes and environment config',
      'Debugging deep-link and fallback routing',
    ],
    related: [['Angular Azure job support', 'angular-azure-job-support'], ['Angular Azure DevOps job support', 'angular-azure-devops-job-support'], ['Angular CI/CD job support', 'angular-ci-cd-job-support']],
  },
  {
    slug: 'angular-aws-cloudfront-s3-support', name: 'AWS CloudFront & S3',
    usage: 'S3 + CloudFront is a common, cost-effective way to host Angular SPAs on AWS.',
    scenarios: [
      'Configuring S3 static hosting and CloudFront distribution',
      'SPA fallback routing (403/404 → index.html)',
      'Cache-control and invalidation for deploys',
      'HTTPS, custom domains, and headers',
    ],
    related: [['Angular AWS job support', 'angular-aws-job-support'], ['Angular CI/CD job support', 'angular-ci-cd-job-support'], ['Angular Nginx deployment support', 'angular-nginx-deployment-support']],
  },
  {
    slug: 'angular-ci-cd-job-support', name: 'CI/CD',
    usage: 'CI/CD automates building, testing, and deploying Angular apps.',
    scenarios: [
      'Designing a pipeline with lint, test, build, and deploy stages',
      'Caching dependencies and build outputs for speed',
      'Adding quality gates (coverage, budgets, E2E)',
      'Debugging pipeline and environment failures',
    ],
    related: [['Angular GitHub Actions job support', 'angular-github-actions-job-support'], ['Angular Azure DevOps job support', 'angular-azure-devops-job-support'], ['Angular test automation support', 'angular-test-automation-support']],
  },
  {
    slug: 'angular-github-actions-job-support', name: 'GitHub Actions',
    usage: 'GitHub Actions runs Angular CI/CD pipelines directly from the repository.',
    scenarios: [
      'Writing an Angular build, test, and deploy workflow',
      'Caching node modules and Nx/affected builds',
      'Matrix builds and environment secrets',
      'Debugging failing workflows',
    ],
    related: [['Angular CI/CD job support', 'angular-ci-cd-job-support'], ['Angular Azure Static Web Apps support', 'angular-azure-static-web-apps-support'], ['Angular test automation support', 'angular-test-automation-support']],
  },
  {
    slug: 'angular-azure-devops-job-support', name: 'Azure DevOps',
    usage: 'Azure DevOps Pipelines build, test, and deploy Angular apps.',
    scenarios: [
      'Writing YAML pipelines for Angular build and deploy',
      'Caching, artifacts, and multi-stage pipelines',
      'Deploying to App Service or Static Web Apps',
      'Debugging pipeline and agent issues',
    ],
    related: [['Angular CI/CD job support', 'angular-ci-cd-job-support'], ['Angular Azure job support', 'angular-azure-job-support'], ['Angular GitHub Actions job support', 'angular-github-actions-job-support']],
  },
  {
    slug: 'angular-nginx-deployment-support', name: 'Nginx Deployment',
    usage: 'Nginx serves built Angular apps and handles SPA routing and caching.',
    scenarios: [
      'Configuring Nginx for SPA fallback routing (try_files)',
      'Cache-control headers and gzip/brotli compression',
      'Reverse-proxying API calls through Nginx',
      'Debugging 404s on deep links after deploy',
    ],
    related: [['Angular Docker job support', 'angular-docker-job-support'], ['Angular Kubernetes job support', 'angular-kubernetes-job-support'], ['Angular CI/CD job support', 'angular-ci-cd-job-support']],
  },
];

// ─── Migration & Modernization ───────────────────────────────────────────────

const migration: TechDef[] = [
  {
    slug: 'angular-upgrade-job-support', name: 'Version Upgrade',
    usage: 'Angular version upgrades apply update schematics and resolve breaking changes.',
    scenarios: [
      'Upgrading one major version at a time safely',
      'Resolving deprecations and breaking changes',
      'Fixing dependency and peer-version conflicts',
      'Verifying behaviour after each upgrade step',
    ],
    related: [['Angular version migration support', 'angular-version-migration-support'], ['Angular upgrade & migration support', 'angular-upgrade-migration-support'], ['Angular Material upgrade support', 'angular-material-upgrade-support']],
  },
  {
    slug: 'angular-version-migration-support', name: 'Version Migration',
    usage: 'Version migration moves an app across several Angular releases incrementally.',
    scenarios: [
      'Planning a multi-version migration path',
      'Handling large jumps that skipped several releases',
      'Updating third-party libraries alongside Angular',
      'Catching regressions early with verification',
    ],
    related: [['Angular upgrade job support', 'angular-upgrade-job-support'], ['Angular upgrade & migration support', 'angular-upgrade-migration-support'], ['Legacy Angular modernization support', 'legacy-angular-modernization-support']],
  },
  {
    slug: 'angularjs-to-angular-migration-support', name: 'AngularJS to Angular Migration',
    usage: 'AngularJS-to-Angular migration moves legacy AngularJS apps to modern Angular.',
    scenarios: [
      'Planning an incremental migration strategy',
      'Running a hybrid app during migration where needed',
      'Rewriting controllers and scopes as components and services',
      'Migrating routing, templates, and state safely',
    ],
    related: [['Legacy Angular modernization support', 'legacy-angular-modernization-support'], ['Angular modules to standalone migration support', 'angular-modules-to-standalone-migration-support'], ['Angular upgrade & migration support', 'angular-upgrade-migration-support']],
  },
  {
    slug: 'angular-modules-to-standalone-migration-support', name: 'NgModules to Standalone Migration',
    usage: 'This migration converts NgModule-based apps to standalone components.',
    scenarios: [
      'Running the standalone migration schematics incrementally',
      'Converting lazy-loaded modules to standalone routes',
      'Handling shared modules and providers during conversion',
      'Verifying nothing breaks as modules are removed',
    ],
    related: [['Angular standalone components job support', 'angular-standalone-components-job-support'], ['Angular upgrade & migration support', 'angular-upgrade-migration-support'], ['Modern Angular job support', 'modern-angular-job-support']],
  },
  {
    slug: 'angular-rxjs-migration-support', name: 'RxJS Migration',
    usage: 'RxJS migration updates RxJS versions and modernizes reactive code.',
    scenarios: [
      'Migrating across RxJS major versions and API changes',
      'Replacing deprecated operators and patterns',
      'Moving suitable RxJS state to signals',
      'Fixing subscription and typing issues introduced by the upgrade',
    ],
    related: [['Angular RxJS job support', 'angular-rxjs-job-support'], ['Angular signals job support', 'angular-signals-job-support'], ['Angular upgrade & migration support', 'angular-upgrade-migration-support']],
  },
  {
    slug: 'angular-material-upgrade-support', name: 'Material Upgrade',
    usage: 'Material upgrades reconcile component and theming API changes across versions.',
    scenarios: [
      'Upgrading Angular Material and applying migration schematics',
      'Reconciling theming and token changes (MDC-based components)',
      'Fixing broken styles and component API changes',
      'Verifying UI after the upgrade',
    ],
    related: [['Angular Material job support', 'angular-material-job-support'], ['Angular upgrade job support', 'angular-upgrade-job-support'], ['Angular upgrade & migration support', 'angular-upgrade-migration-support']],
  },
  {
    slug: 'angular-webpack-vite-build-migration-support', name: 'Build System Migration',
    usage: 'This migration moves Angular apps to the modern application build system (esbuild/Vite-based).',
    scenarios: [
      'Migrating from the older webpack builder to the application builder',
      'Fixing custom webpack config that no longer applies',
      'Resolving build differences and asset handling',
      'Improving build and dev-server speed',
    ],
    related: [['Angular bundle optimization job support', 'angular-bundle-optimization-job-support'], ['Angular upgrade & migration support', 'angular-upgrade-migration-support'], ['Angular CI/CD job support', 'angular-ci-cd-job-support']],
  },
  {
    slug: 'legacy-angular-modernization-support', name: 'Legacy Modernization',
    usage: 'Legacy modernization brings an old Angular codebase up to modern standards incrementally.',
    scenarios: [
      'Modernizing an outdated Angular app without a rewrite',
      'Introducing standalone, signals, and control flow gradually',
      'Improving structure, testing, and performance over time',
      'Reducing technical debt while continuing to ship',
    ],
    related: [['Angular upgrade & migration support', 'angular-upgrade-migration-support'], ['Angular version migration support', 'angular-version-migration-support'], ['Angular architecture support', 'angular-architecture-support']],
  },
];

// ─── Batch export ────────────────────────────────────────────────────────────

export const angularTechPages: LandingPageConfig[] = [
  ...coreArch,
  ...forms,
  ...routing,
  ...state,
  ...ui,
  ...ssrPerf,
  ...apiSec,
  ...testing,
  ...enterprise,
  ...cloud,
  ...migration,
].map(techPage);
