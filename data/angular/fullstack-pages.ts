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
  ARCHITECTURE_LINK,
} from './shared';

/**
 * Angular full-stack combination pages. The existing /dotnet-angular-job-support/
 * page is preserved and linked, not duplicated — /angular-dotnet-core-job-support/
 * approaches the same stack from the Angular side and cross-links to it.
 */

interface FullStackDef {
  slug: string;
  name: string; // e.g. 'Angular + Node.js'
  stack: string; // backend/stack phrase
  usage: string;
  scenarios: string[];
  related: [string, string][];
}

const link = (t: [string, string]): LandingRelatedLink => ({ label: t[0], href: `/${t[1]}/` });

function fullstackPage(d: FullStackDef): LandingPageConfig {
  const related = d.related.map(link);
  return angularPage({
    slug: d.slug,
    title: `${d.name} Full-Stack Job Support — Real-Time Expert Help`,
    description: `Real-time ${d.name} full-stack job support — ${d.usage} Frontend and backend integration, debugging, code review, and production help from in-house experts. Same-day, confidential.`,
    keywords: [
      `${d.name} job support`, `${d.name} full-stack support`, `${d.name} full stack job support`,
      `${d.name} integration help`, `${d.name} developer support`, `Angular ${d.stack} job support`,
    ],
    h1: `${d.name} Full-Stack Job Support — Frontend and Backend, End to End`,
    tagline: `Real-time, hands-on ${d.name} full-stack help on your real project — from Angular UI to the ${d.stack} backend and the integration between them.`,
    heroEyebrow: `${d.name} Full-Stack`,
    painIntro: `Working across ${d.name} and stuck where the Angular frontend meets the ${d.stack} backend? ${d.usage} Full-stack problems often hide at the boundary — and that is exactly where we help.`,
    heroVariant: `Our in-house experts cover both sides of ${d.name}: Angular components, RxJS, signals, state, and forms on the frontend, and the ${d.stack} backend and API contract behind it. We help with integration, debugging across the stack, code review, performance, and production issues — on your real codebase, same-day, fully confidential.`,
    geoLine: `Supporting ${d.name} developers across the USA, Canada, UK, Europe, Australia, and worldwide.`,
    timezoneNote: 'Available across all major business hours for daily and on-call full-stack support.',
    techSnippet: `We cover the full ${d.name} stack — modern Angular on the frontend and ${d.stack} on the backend, plus the API and data layer between them.`,
    highlights: techHighlights,
    faqs: techFaqs(d.name, d.usage),
    useCasesSection: {
      title: `${d.name} Situations We Resolve`,
      cases: [
        ...d.scenarios,
        `Integration bugs where the Angular frontend and ${d.stack} backend disagree on the contract`,
        `A ${d.name} full-stack interview covering both frontend and backend rounds`,
      ],
    },
    proxySection: {
      title: `${d.name} — Delivery and Interviews`,
      intro: `We help you deliver ${d.name} work and clear full-stack interviews that test both sides.`,
      points: [
        `Live help across the ${d.name} stack on your real project`,
        'Integration and contract debugging between frontend and backend',
        `Full-stack interview preparation covering Angular and ${d.stack}`,
        'Architecture support so the stack fits together cleanly',
        'Confidential, in-house experts across all time zones',
      ],
    },
    bottomCTAHeading: `Need ${d.name} Full-Stack Help Right Now?`,
    bottomCTABody: `Real-time, in-house ${d.name} experts available same-day. Contact ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [HUB_LINK, JOB_LINK],
      techLinks: related.slice(0, 2),
      problemLink: PRODUCTION_LINK,
      proxyLink: INTERVIEW_HUB_LINK,
      additionalLinks: [
        ...related.slice(2),
        { label: 'Angular full-stack developer job support', href: '/angular-full-stack-developer-job-support/' },
        JOB_LINK, ARCHITECTURE_LINK, INTERVIEW_HUB_LINK, HUB_LINK, EXISTING.fullstackGuide,
      ],
    }),
  });
}

const defs: FullStackDef[] = [
  {
    slug: 'angular-nodejs-job-support', name: 'Angular + Node.js', stack: 'Node.js/Express',
    usage: 'Angular with a Node.js/Express backend is a common JavaScript-everywhere full-stack combination.',
    scenarios: [
      'Designing and integrating a REST API between Angular and Express',
      'Auth and session handling across the stack',
      'Debugging CORS, serialization, and error-contract mismatches',
      'Sharing TypeScript models between frontend and backend',
    ],
    related: [['Angular NestJS job support', 'angular-nestjs-job-support'], ['Angular REST API integration job support', 'angular-rest-api-integration-job-support'], ['Angular full-stack developer job support', 'angular-full-stack-developer-job-support']],
  },
  {
    slug: 'angular-java-spring-boot-job-support', name: 'Angular + Java Spring Boot', stack: 'Java/Spring Boot',
    usage: 'Angular with a Java Spring Boot backend is a dominant enterprise full-stack stack.',
    scenarios: [
      'Integrating Angular with Spring Boot REST APIs and DTOs',
      'JWT/OAuth security across Angular and Spring Security',
      'Handling pagination, validation, and error contracts consistently',
      'Debugging CORS and API-contract mismatches',
    ],
    related: [['Angular REST API integration job support', 'angular-rest-api-integration-job-support'], ['Angular microservices job support', 'angular-microservices-job-support'], ['Angular full-stack developer job support', 'angular-full-stack-developer-job-support']],
  },
  {
    slug: 'angular-dotnet-core-job-support', name: 'Angular + .NET Core', stack: '.NET Core/ASP.NET',
    usage: 'Angular with an ASP.NET Core backend is a widely used enterprise full-stack combination.',
    scenarios: [
      'Integrating Angular with ASP.NET Core Web API and DTOs',
      'Auth with Entra ID/JWT across Angular and ASP.NET Core',
      'SignalR real-time integration with Angular',
      'Debugging API-contract and serialization mismatches',
    ],
    related: [['.NET + Angular job support', 'dotnet-angular-job-support'], ['Angular REST API integration job support', 'angular-rest-api-integration-job-support'], ['Angular full-stack developer job support', 'angular-full-stack-developer-job-support']],
  },
  {
    slug: 'angular-python-api-job-support', name: 'Angular + Python API', stack: 'Python (FastAPI/Django)',
    usage: 'Angular with a Python backend (FastAPI or Django REST) pairs a modern UI with a Python API.',
    scenarios: [
      'Integrating Angular with FastAPI or Django REST endpoints',
      'Auth and token handling across the stack',
      'Typed contracts and OpenAPI-generated clients',
      'Debugging CORS and serialization issues',
    ],
    related: [['Angular REST API integration job support', 'angular-rest-api-integration-job-support'], ['Angular GraphQL full-stack job support', 'angular-graphql-fullstack-job-support'], ['Angular full-stack developer job support', 'angular-full-stack-developer-job-support']],
  },
  {
    slug: 'angular-nestjs-job-support', name: 'Angular + NestJS', stack: 'NestJS',
    usage: 'Angular with a NestJS backend keeps a consistent, Angular-like architecture across the stack.',
    scenarios: [
      'Sharing DTOs and validation between Angular and NestJS',
      'Auth guards and interceptors mirrored across the stack',
      'REST and WebSocket integration with Angular',
      'Structuring a shared TypeScript monorepo',
    ],
    related: [['Angular Node.js job support', 'angular-nodejs-job-support'], ['Angular monorepo job support', 'angular-monorepo-job-support'], ['Angular full-stack developer job support', 'angular-full-stack-developer-job-support']],
  },
  {
    slug: 'angular-graphql-fullstack-job-support', name: 'Angular + GraphQL Full-Stack', stack: 'GraphQL',
    usage: 'A GraphQL full-stack pairs Angular (Apollo) with a GraphQL API for typed, flexible data.',
    scenarios: [
      'Wiring Apollo Angular to a GraphQL backend end to end',
      'Schema-first types shared across the stack',
      'Caching, optimistic updates, and subscriptions',
      'Debugging query performance and N+1 issues',
    ],
    related: [['Angular GraphQL job support', 'angular-graphql-job-support'], ['Angular Node.js job support', 'angular-nodejs-job-support'], ['Angular full-stack developer job support', 'angular-full-stack-developer-job-support']],
  },
  {
    slug: 'angular-microservices-job-support', name: 'Angular + Microservices', stack: 'microservices',
    usage: 'Angular frontends often sit in front of a microservices backend via an API gateway.',
    scenarios: [
      'Integrating Angular with an API gateway over microservices',
      'Handling partial failures and resilience in the UI',
      'Aggregating data from multiple services cleanly',
      'Micro-frontend alignment with microservices',
    ],
    related: [['Angular microfrontend job support', 'angular-microfrontend-job-support'], ['Angular Java Spring Boot job support', 'angular-java-spring-boot-job-support'], ['Angular enterprise architecture job support', 'angular-enterprise-architecture-job-support']],
  },
  {
    slug: 'angular-azure-fullstack-job-support', name: 'Angular + Azure Full-Stack', stack: 'Azure',
    usage: 'An Azure full-stack hosts Angular and its backend on Azure services end to end.',
    scenarios: [
      'Angular on Static Web Apps with an Azure Functions/App Service backend',
      'Entra ID auth across the stack',
      'CI/CD from Azure DevOps or GitHub Actions',
      'Config, secrets, and CDN setup',
    ],
    related: [['Angular Azure job support', 'angular-azure-job-support'], ['Angular Azure Static Web Apps support', 'angular-azure-static-web-apps-support'], ['Angular full-stack developer job support', 'angular-full-stack-developer-job-support']],
  },
  {
    slug: 'angular-aws-fullstack-job-support', name: 'Angular + AWS Full-Stack', stack: 'AWS',
    usage: 'An AWS full-stack hosts Angular and its backend on AWS services end to end.',
    scenarios: [
      'Angular on S3/CloudFront with an API Gateway + Lambda backend',
      'Cognito auth across the stack',
      'CI/CD pipelines to AWS',
      'Config, secrets, and cache invalidation',
    ],
    related: [['Angular AWS job support', 'angular-aws-job-support'], ['Angular AWS CloudFront S3 support', 'angular-aws-cloudfront-s3-support'], ['Angular full-stack developer job support', 'angular-full-stack-developer-job-support']],
  },
  {
    slug: 'angular-sql-server-job-support', name: 'Angular + SQL Server', stack: 'SQL Server',
    usage: 'Angular apps frequently sit over a SQL Server database via a backend API.',
    scenarios: [
      'Designing API endpoints and DTOs over SQL Server data',
      'Efficient pagination, filtering, and sorting for grids',
      'Handling large result sets in the Angular UI',
      'Debugging data-shape and performance issues end to end',
    ],
    related: [['Angular REST API integration job support', 'angular-rest-api-integration-job-support'], ['Angular .NET Core job support', 'angular-dotnet-core-job-support'], ['Angular full-stack developer job support', 'angular-full-stack-developer-job-support']],
  },
  {
    slug: 'angular-postgresql-job-support', name: 'Angular + PostgreSQL', stack: 'PostgreSQL',
    usage: 'Angular apps commonly sit over a PostgreSQL database via a backend API.',
    scenarios: [
      'Designing API contracts over PostgreSQL data',
      'Efficient queries for grids, search, and pagination',
      'Handling JSON columns and complex data in the UI',
      'Debugging data and performance issues across the stack',
    ],
    related: [['Angular REST API integration job support', 'angular-rest-api-integration-job-support'], ['Angular Node.js job support', 'angular-nodejs-job-support'], ['Angular full-stack developer job support', 'angular-full-stack-developer-job-support']],
  },
  {
    slug: 'angular-mongodb-job-support', name: 'Angular + MongoDB', stack: 'MongoDB',
    usage: 'Angular with a MongoDB-backed API is a common document-oriented full-stack stack.',
    scenarios: [
      'Designing API contracts over MongoDB documents',
      'Handling flexible/nested document shapes in the UI',
      'Pagination and search over collections',
      'Debugging data-shape mismatches end to end',
    ],
    related: [['Angular Node.js job support', 'angular-nodejs-job-support'], ['Angular REST API integration job support', 'angular-rest-api-integration-job-support'], ['Angular full-stack developer job support', 'angular-full-stack-developer-job-support']],
  },
  {
    slug: 'angular-redis-job-support', name: 'Angular + Redis', stack: 'Redis',
    usage: 'Redis backs caching, sessions, and real-time features behind Angular apps.',
    scenarios: [
      'Using Redis-backed caching to speed up API responses to Angular',
      'Session and token storage patterns',
      'Real-time features via Redis pub/sub and WebSockets',
      'Debugging cache invalidation issues that surface in the UI',
    ],
    related: [['Angular REST API integration job support', 'angular-rest-api-integration-job-support'], ['Angular Node.js job support', 'angular-nodejs-job-support'], ['Angular full-stack developer job support', 'angular-full-stack-developer-job-support']],
  },
  {
    slug: 'angular-full-stack-developer-job-support', name: 'Angular Full-Stack Developer', stack: 'any backend',
    usage: 'Angular full-stack developers own the UI and a backend/API, end to end.',
    scenarios: [
      'Owning both Angular frontend and a backend API on the same project',
      'Designing clean API contracts and shared types',
      'Debugging issues that span frontend, API, and data',
      'Balancing frontend and backend work under deadline',
    ],
    related: [['Angular Node.js job support', 'angular-nodejs-job-support'], ['Angular Java Spring Boot job support', 'angular-java-spring-boot-job-support'], ['Angular .NET Core job support', 'angular-dotnet-core-job-support'], ['Angular full-stack interview support', 'angular-full-stack-interview-support']],
  },
];

export const angularFullStackPages: LandingPageConfig[] = defs.map(fullstackPage);
