import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import {
  angularPage,
  relatedLinks,
  interviewHighlights,
  interviewFaqs,
  EXISTING,
  HUB_LINK,
  JOB_LINK,
  INTERVIEW_HUB_LINK,
  GET_SCHEDULED_LINK,
  PROFILE_LINK,
} from './shared';

/**
 * Angular interview support cluster + get-interview-scheduled pages. Language
 * describes the real service (discreet real-time guidance + mock interviews +
 * getting interviews scheduled) and makes no guarantees about passing, offers,
 * or employment, and fabricates no testimonials or partnerships.
 */

const link = (t: [string, string]): LandingRelatedLink => ({ label: t[0], href: `/${t[1]}/` });

// ─── Interview support builder ───────────────────────────────────────────────

interface InterviewDef {
  slug: string;
  name: string; // display, e.g. 'Angular Coding Interview'
  entity: string; // FAQ entity, e.g. 'Angular coding'
  focus: string; // one-line focus
  scenarios: string[];
  prepLinks: [string, string][]; // technical prep pages
  countryLinks?: [string, string][];
}

function interviewPage(d: InterviewDef): LandingPageConfig {
  const prep = d.prepLinks.map(link);
  const countries = (d.countryLinks ?? []).map(link);
  return angularPage({
    slug: d.slug,
    title: `${d.name} Support — Live Guidance & Mock Interviews`,
    description: `${d.name.replace(/ Interview$/, '')} interview support — discreet real-time guidance during your live interview plus calibrated mock interviews. ${d.focus} Confidential, calibrated to your role and format.`,
    keywords: [
      `${d.name} support`, `${d.name} help`, `Angular interview support`, `Angular proxy interview`,
      `${d.name} preparation`, `Angular mock interview`,
    ],
    h1: `${d.name} Support — Real-Time Guidance and Mock Interviews`,
    tagline: `Discreet real-time support during your live ${d.name.toLowerCase()} plus calibrated mock interviews. ${d.focus}`,
    heroEyebrow: d.name,
    painIntro: `Facing ${d.name.toLowerCase().replace(/ interview$/, ' interviews')} and not fully confident? ${d.focus} You do not have to walk in alone — we prepare you and back you in real time.`,
    heroVariant: `We provide real-time, discreet proxy interview support for ${d.entity} interviews, plus calibrated mock interviews beforehand. Our in-house Angular experts align to your exact role, seniority, and company format, and guide you through the live session over audio or chat. Everything is confidential. We do not guarantee outcomes — we make sure you are genuinely prepared and supported.`,
    geoLine: `Supporting ${d.entity} interview candidates across the USA, Canada, UK, Europe, Australia, and worldwide.`,
    timezoneNote: 'Available across all major time zones to match your interview schedule.',
    highlights: interviewHighlights,
    faqs: interviewFaqs(d.entity),
    useCasesSection: {
      title: `${d.name} Situations We Support`,
      cases: [
        ...d.scenarios,
        'A mock interview a few days before the real thing to calibrate and build confidence',
        'Pre-interview alignment so guidance matches your background and experience level',
      ],
    },
    proxySection: {
      title: `${d.name} — Before, During, and After`,
      intro: 'We support the whole interview journey, then help you keep the role once you land it.',
      points: [
        `Calibrated mock ${d.name.toLowerCase().replace(/ interview$/, ' interviews')} to prepare`,
        'Discreet real-time guidance during the live interview',
        'Technical preparation on the exact Angular topics likely to come up',
        'Profile positioning so you get more interviews in the first place',
        'Real-time job support to keep the role after you start',
      ],
    },
    bottomCTAHeading: `${d.name} Coming Up? Get Support Now`,
    bottomCTABody: `Discreet, confidential ${d.name.toLowerCase()} support from in-house Angular experts. Contact ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [INTERVIEW_HUB_LINK, GET_SCHEDULED_LINK],
      techLinks: prep.slice(0, 2),
      problemLink: JOB_LINK,
      proxyLink: INTERVIEW_HUB_LINK,
      additionalLinks: [
        ...prep.slice(2),
        ...countries,
        GET_SCHEDULED_LINK, PROFILE_LINK, JOB_LINK, HUB_LINK,
        EXISTING.finalRound,
      ],
    }),
  });
}

const codingPrep: [string, string][] = [
  ['Angular RxJS job support', 'angular-rxjs-job-support'],
  ['Angular signals job support', 'angular-signals-job-support'],
  ['Angular component architecture job support', 'angular-component-architecture-job-support'],
];
const designPrep: [string, string][] = [
  ['Angular architecture support', 'angular-architecture-support'],
  ['Angular enterprise architecture job support', 'angular-enterprise-architecture-job-support'],
  ['Angular state management job support', 'angular-state-management-job-support'],
];

const interviewCore: InterviewDef[] = [
  {
    slug: 'angular-proxy-interview-support', name: 'Angular Proxy Interview', entity: 'Angular',
    focus: 'Live, discreet expert support during your real Angular interview, calibrated to the role and format.',
    scenarios: [
      'A live Angular technical interview where you want an expert quietly backing you',
      'A high-stakes interview for a role you really want',
      'An interview format you have not faced before',
    ],
    prepLinks: codingPrep,
    countryLinks: [['Angular interview proxy support USA', 'angular-interview-proxy-support-usa'], ['Angular interview proxy support UK', 'angular-interview-proxy-support-uk'], ['Angular interview proxy support Canada', 'angular-interview-proxy-support-canada']],
  },
  {
    slug: 'angular-live-technical-interview-support', name: 'Angular Live Technical Interview', entity: 'Angular technical',
    focus: 'Real-time guidance during live Angular technical rounds — coding, concepts, and scenarios.',
    scenarios: [
      'A live technical round mixing Angular concepts and coding',
      'Scenario and troubleshooting questions on a real codebase',
      'A screen-share coding exercise under time pressure',
    ],
    prepLinks: codingPrep,
  },
  {
    slug: 'angular-coding-interview-support', name: 'Angular Coding Interview', entity: 'Angular coding',
    focus: 'Support for live Angular coding challenges — components, RxJS, and TypeScript problems.',
    scenarios: [
      'A live coding round building a component or feature',
      'RxJS and async problems under time pressure',
      'TypeScript and data-structure questions in an Angular context',
    ],
    prepLinks: codingPrep,
  },
  {
    slug: 'angular-system-design-interview-support', name: 'Angular System Design Interview', entity: 'Angular / frontend system design',
    focus: 'Support for frontend system design rounds — architecture, state, performance, and trade-offs.',
    scenarios: [
      'A frontend system design round designing a large Angular app',
      'Questions on state management, performance, and scalability trade-offs',
      'Designing component and module boundaries live',
    ],
    prepLinks: designPrep,
  },
  {
    slug: 'angular-frontend-architecture-interview-support', name: 'Angular Frontend Architecture Interview', entity: 'Angular frontend architecture',
    focus: 'Support for architecture-focused interviews — structure, patterns, and scaling decisions.',
    scenarios: [
      'An architecture interview on structuring a large Angular codebase',
      'Questions on micro-frontends, monorepos, and boundaries',
      'Justifying state, routing, and performance choices',
    ],
    prepLinks: designPrep,
  },
  {
    slug: 'angular-senior-developer-interview-support', name: 'Senior Angular Developer Interview', entity: 'senior Angular developer',
    focus: 'Support calibrated to senior expectations — depth, trade-offs, and leadership in code.',
    scenarios: [
      'A senior-level interview expecting depth and judgment',
      'Trade-off and design-rationale questions',
      'Code review and mentoring-style questions',
    ],
    prepLinks: [...codingPrep, ['Angular architecture support', 'angular-architecture-support']],
  },
  {
    slug: 'angular-lead-developer-interview-support', name: 'Angular Lead Developer Interview', entity: 'Angular lead developer',
    focus: 'Support for lead-level interviews — architecture, technical leadership, and delivery.',
    scenarios: [
      'A lead interview covering architecture and technical leadership',
      'Questions on setting standards, mentoring, and trade-offs',
      'Balancing hands-on and leadership expectations',
    ],
    prepLinks: designPrep,
  },
  {
    slug: 'angular-full-stack-interview-support', name: 'Angular Full-Stack Interview', entity: 'Angular full-stack',
    focus: 'Support across both Angular frontend and backend rounds in full-stack interviews.',
    scenarios: [
      'A full-stack interview with both Angular and backend rounds',
      'Integration and API-contract questions',
      'End-to-end feature design across the stack',
    ],
    prepLinks: [['Angular full-stack developer job support', 'angular-full-stack-developer-job-support'], ['Angular Node.js job support', 'angular-nodejs-job-support'], ['Angular Java Spring Boot job support', 'angular-java-spring-boot-job-support']],
  },
  {
    slug: 'angular-final-round-interview-support', name: 'Angular Final Round Interview', entity: 'Angular final-round',
    focus: 'Support for final-round and panel interviews where the bar and stakes are highest.',
    scenarios: [
      'A final-round panel combining technical and behavioural questions',
      'A deep-dive on your experience and past projects',
      'The last interview standing between you and an offer',
    ],
    prepLinks: designPrep,
  },
  {
    slug: 'angular-client-round-interview-support', name: 'Angular Client Round Interview', entity: 'Angular client-round',
    focus: 'Support for consulting/client-facing interview rounds and technical client calls.',
    scenarios: [
      'A client-round interview for a consulting or contract engagement',
      'A technical client call assessing fit for a project',
      'Explaining your Angular experience to a client panel',
    ],
    prepLinks: codingPrep,
  },
  {
    slug: 'angular-interview-question-support', name: 'Angular Interview Question', entity: 'Angular interview question',
    focus: 'Preparation across the Angular interview question bank — fundamentals to advanced.',
    scenarios: [
      'Working through common and advanced Angular interview questions',
      'Understanding the "why" behind answers, not just memorizing',
      'Targeted prep on your weak areas before an interview',
    ],
    prepLinks: [...codingPrep, ['Angular signals vs RxJS guide', 'angular-signals-vs-rxjs-guide']],
  },
];

// ─── Country interview pages ─────────────────────────────────────────────────

interface CountryInterviewDef {
  slug: string;
  country: string;
  region: string;
  tz: string;
  scheduledSlug: string;
  marketingSlug: string;
  jobSlug: string;
}

function countryInterviewPage(d: CountryInterviewDef): LandingPageConfig {
  return angularPage({
    slug: d.slug,
    title: `Angular Interview Proxy Support ${d.country} — Live Guidance`,
    description: `Angular proxy interview support in ${d.country} — discreet real-time guidance during your live interview plus calibrated mock interviews, in ${d.country} time zones. Confidential, calibrated to your role.`,
    keywords: [
      `Angular interview proxy support ${d.country}`, `Angular proxy interview ${d.country}`,
      `Angular interview support ${d.country}`, `Angular mock interview ${d.country}`,
      `Angular technical interview ${d.country}`, `frontend interview support ${d.country}`,
    ],
    h1: `Angular Interview Proxy Support in ${d.country} — Live Guidance & Mock Interviews`,
    tagline: `Discreet real-time support during your live Angular interview in ${d.country}, plus calibrated mock interviews aligned to the ${d.country} market.`,
    heroEyebrow: `Angular Interview Support ${d.country}`,
    painIntro: `Facing an Angular interview with a ${d.country} employer and not fully confident? We prepare you and back you in real time, calibrated to ${d.country} formats and expectations.`,
    heroVariant: `We provide discreet, real-time Angular proxy interview support for ${d.country} interviews, plus calibrated mock interviews. Our in-house experts cover ${d.region} time zones and align to your exact role, seniority, and company format. Everything is confidential, and we make no guarantees about outcomes — we make sure you are genuinely prepared.`,
    geoLine: `Supporting Angular interview candidates across ${d.country}.`,
    timezoneNote: d.tz,
    highlights: interviewHighlights,
    faqs: interviewFaqs(`Angular (${d.country})`),
    useCasesSection: {
      title: `Angular Interview Situations We Support in ${d.country}`,
      cases: [
        `A live Angular technical interview with a ${d.country} employer`,
        `A ${d.country} coding round on components, RxJS, or TypeScript`,
        `A frontend system design round for a ${d.country} role`,
        `A final-round or client-round interview in ${d.country}`,
        'A calibrated mock interview before the real thing',
        'Pre-interview alignment matching your background and the role',
      ],
    },
    proxySection: {
      title: `Angular Interviews in ${d.country} — End to End`,
      intro: `We help you get the interview, clear it, and keep the role in ${d.country}.`,
      points: [
        `Calibrated mock interviews for the ${d.country} market`,
        'Discreet real-time guidance during the live interview',
        `Get-interview-scheduled support to generate ${d.country} calls`,
        `Profile positioning for the ${d.country} market`,
        `Real-time Angular job support once you start`,
      ],
    },
    bottomCTAHeading: `Angular Interview in ${d.country}? Get Support Now`,
    bottomCTABody: `Discreet, confidential Angular interview support for ${d.country} candidates. Contact ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [INTERVIEW_HUB_LINK, link([`Angular job support ${d.country}`, d.jobSlug])],
      techLinks: codingPrep.slice(0, 2).map(link),
      problemLink: JOB_LINK,
      proxyLink: INTERVIEW_HUB_LINK,
      additionalLinks: [
        link([`Get Angular interview scheduled ${d.country}`, d.scheduledSlug]),
        link([`Angular candidate marketing ${d.country}`, d.marketingSlug]),
        ...designPrep.map(link),
        INTERVIEW_HUB_LINK, GET_SCHEDULED_LINK, PROFILE_LINK, HUB_LINK,
      ],
    }),
  });
}

const countryInterviews: CountryInterviewDef[] = [
  { slug: 'angular-interview-proxy-support-usa', country: 'USA', region: 'US', tz: 'Available across all US time zones.', scheduledSlug: 'get-angular-interview-scheduled-usa', marketingSlug: 'angular-candidate-marketing-usa', jobSlug: 'usa-angular-job-support' },
  { slug: 'angular-interview-proxy-support-canada', country: 'Canada', region: 'Canadian', tz: 'Available across Canadian time zones.', scheduledSlug: 'get-angular-interview-scheduled-canada', marketingSlug: 'angular-candidate-marketing-canada', jobSlug: 'canada-angular-job-support' },
  { slug: 'angular-interview-proxy-support-uk', country: 'the UK', region: 'UK', tz: 'Available across UK business hours (GMT/BST).', scheduledSlug: 'get-angular-interview-scheduled-uk', marketingSlug: 'angular-candidate-marketing-uk', jobSlug: 'uk-angular-job-support' },
  { slug: 'angular-interview-proxy-support-ireland', country: 'Ireland', region: 'Irish', tz: 'Available across Irish business hours (GMT/IST).', scheduledSlug: 'get-angular-interview-scheduled-ireland', marketingSlug: 'angular-candidate-marketing-ireland', jobSlug: 'ireland-angular-job-support' },
  { slug: 'angular-interview-proxy-support-germany', country: 'Germany', region: 'German', tz: 'Available across German business hours (CET/CEST).', scheduledSlug: 'get-angular-interview-scheduled-germany', marketingSlug: 'angular-candidate-marketing-germany', jobSlug: 'germany-angular-job-support' },
  { slug: 'angular-interview-proxy-support-australia', country: 'Australia', region: 'Australian', tz: 'Available across Australian business hours (AEST/AWST).', scheduledSlug: 'get-angular-interview-scheduled-australia', marketingSlug: 'angular-candidate-marketing-australia', jobSlug: 'australia-angular-job-support' },
  { slug: 'angular-interview-proxy-support-europe', country: 'Europe', region: 'European', tz: 'Available across UK and Central European business hours.', scheduledSlug: 'get-angular-interview-scheduled-germany', marketingSlug: 'angular-candidate-marketing-uk', jobSlug: 'europe-angular-job-support' },
  { slug: 'angular-interview-proxy-support-singapore', country: 'Singapore', region: 'Singapore', tz: 'Available across Singapore business hours (SGT).', scheduledSlug: 'get-angular-interview-scheduled-singapore', marketingSlug: 'angular-candidate-marketing-singapore', jobSlug: 'singapore-angular-job-support' },
  { slug: 'angular-interview-proxy-support-uae', country: 'the UAE', region: 'UAE', tz: 'Available across UAE business hours (GST).', scheduledSlug: 'get-angular-interview-scheduled-uae', marketingSlug: 'angular-candidate-marketing-uae', jobSlug: 'uae-angular-job-support' },
];

// ─── Get-interview-scheduled pages ───────────────────────────────────────────

interface ScheduledDef {
  slug: string;
  country?: string;
  region?: string;
  tz?: string;
  interviewSlug?: string;
  marketingSlug?: string;
}

function scheduledPage(d: ScheduledDef): LandingPageConfig {
  const isCountry = !!d.country;
  const label = isCountry ? ` in ${d.country}` : '';
  return angularPage({
    slug: d.slug,
    title: isCountry
      ? `Get Angular Interviews Scheduled ${d.country} — Recruiter Outreach`
      : 'Get Angular Interviews Scheduled — Profile & Recruiter Outreach',
    description: `Not getting Angular interview calls${label}? We position your profile and run recruiter outreach so you actually get Angular interviews scheduled${label}. Then we back you through the interview.`,
    keywords: [
      `get Angular interviews scheduled${label}`, `Angular recruiter outreach${label}`,
      `Angular candidate marketing${label}`, `Angular profile positioning${label}`,
      `Angular job search help${label}`, `Angular interview calls${label}`,
    ],
    h1: isCountry
      ? `Get Angular Interviews Scheduled in ${d.country}`
      : 'Get Angular Interviews Scheduled — Profile Positioning & Recruiter Outreach',
    tagline: `Skill is not the problem — visibility is. We position your Angular profile and run active outreach so interviews actually get scheduled${label}.`,
    heroEyebrow: isCountry ? `Get Angular Interviews Scheduled ${d.country}` : 'Get Angular Interviews Scheduled',
    painIntro: `Applying to Angular roles${label} and hearing nothing back? The issue is usually visibility and positioning, not ability. We fix the profile and drive the outreach that generates real interview calls.`,
    heroVariant: `We engineer your Angular resume and LinkedIn around the exact keywords recruiters search — modern Angular, TypeScript, RxJS, NgRx, standalone components, and signals — then run active candidate marketing and recruiter outreach${label}. Once the calls come in, we back you with proxy interview support and real-time job support. We make no guarantees about offers — we maximize the number of quality interviews you actually get.`,
    geoLine: isCountry ? `Helping Angular professionals get interviews scheduled across ${d.country}.` : 'Helping Angular professionals get interviews scheduled worldwide.',
    timezoneNote: d.tz ?? 'Profile work and outreach aligned to your target market and time zone.',
    highlights: interviewHighlights,
    faqs: [
      {
        question: `How do you get me Angular interviews scheduled${label}?`,
        answer: `We rebuild your Angular profile around the keywords recruiters and ATS filters screen for, then run active candidate marketing and recruiter/hiring-manager outreach${label}. This combination surfaces your profile and generates interview calls, rather than leaving it unseen in job-board databases.`,
      },
      {
        question: 'Why am I not getting Angular interview calls?',
        answer: 'Usually a positioning and visibility problem: the profile reads generically, buries the Angular impact, and misses the exact terms recruiters search. We diagnose the gaps and fix the profile and outreach so the calls start coming.',
      },
      {
        question: 'Do you guarantee interviews or job offers?',
        answer: 'No — and you should be cautious of anyone who does. We guarantee professional profile positioning and active, targeted outreach that materially increases quality interview activity. Outcomes depend on your experience and the market.',
      },
      {
        question: 'What happens once interviews start?',
        answer: 'We support you end to end — calibrated mock interviews, discreet real-time proxy interview support during the live round, and real-time Angular job support once you start the role.',
      },
      {
        question: 'Is it confidential?',
        answer: 'Yes, completely. All profile and outreach work is handled with full discretion, and NDAs are available on request.',
      },
    ],
    useCasesSection: {
      title: `Who We Help Get Interviews Scheduled${label}`,
      cases: [
        'A capable Angular developer applying widely with no recruiter response',
        'A strong engineer whose profile does not surface in recruiter searches',
        'A developer targeting a new market or country who needs local positioning',
        'A contractor between engagements who needs a pipeline of calls fast',
        'A candidate who gets some calls but wants more and better-matched ones',
        'Someone who wants outreach handled for them instead of cold applying',
      ],
    },
    proxySection: {
      title: 'From Scheduled Interview to Offer to Role',
      intro: 'Getting the interview is step one. We support the whole path.',
      points: [
        `Angular profile positioning and recruiter outreach${label}`,
        'Calibrated mock interviews to prepare',
        'Discreet real-time proxy interview support during the live round',
        'Real-time Angular job support once you start',
        'Confidential, in-house experts throughout',
      ],
    },
    bottomCTAHeading: `Want More Angular Interviews${label}? Get Started Now`,
    bottomCTABody: `We position your profile and drive the outreach that gets Angular interviews scheduled${label}. Contact ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [PROFILE_LINK, INTERVIEW_HUB_LINK],
      techLinks: [
        { label: 'Angular developer resume optimization', href: '/angular-developer-resume-optimization/' },
        { label: 'Angular developer LinkedIn optimization', href: '/angular-developer-linkedin-optimization/' },
      ],
      problemLink: { label: 'Why your Angular resume gets no calls', href: '/why-angular-resume-gets-no-calls/' },
      proxyLink: d.interviewSlug ? link(['Angular interview proxy support', d.interviewSlug]) : INTERVIEW_HUB_LINK,
      additionalLinks: [
        { label: 'Angular developer candidate marketing', href: '/angular-developer-candidate-marketing/' },
        { label: 'Angular developer recruiter keywords', href: '/angular-developer-recruiter-keywords/' },
        d.marketingSlug ? link(['Angular candidate marketing', d.marketingSlug]) : { label: 'Angular candidate marketing', href: '/angular-developer-candidate-marketing/' },
        PROFILE_LINK, INTERVIEW_HUB_LINK, JOB_LINK, HUB_LINK, EXISTING.candidateMarketing, EXISTING.getScheduled,
      ],
    }),
  });
}

const scheduledDefs: ScheduledDef[] = [
  { slug: 'get-angular-interview-scheduled' },
  { slug: 'get-angular-interview-scheduled-usa', country: 'the USA', tz: 'Aligned to US time zones and recruiter hours.', interviewSlug: 'angular-interview-proxy-support-usa', marketingSlug: 'angular-candidate-marketing-usa' },
  { slug: 'get-angular-interview-scheduled-canada', country: 'Canada', tz: 'Aligned to Canadian time zones and recruiter hours.', interviewSlug: 'angular-interview-proxy-support-canada', marketingSlug: 'angular-candidate-marketing-canada' },
  { slug: 'get-angular-interview-scheduled-uk', country: 'the UK', tz: 'Aligned to UK business hours and recruiter cycles.', interviewSlug: 'angular-interview-proxy-support-uk', marketingSlug: 'angular-candidate-marketing-uk' },
  { slug: 'get-angular-interview-scheduled-ireland', country: 'Ireland', tz: 'Aligned to Irish business hours and recruiter cycles.', interviewSlug: 'angular-interview-proxy-support-ireland', marketingSlug: 'angular-candidate-marketing-ireland' },
  { slug: 'get-angular-interview-scheduled-germany', country: 'Germany', tz: 'Aligned to German business hours and recruiter cycles.', interviewSlug: 'angular-interview-proxy-support-germany', marketingSlug: 'angular-candidate-marketing-germany' },
  { slug: 'get-angular-interview-scheduled-australia', country: 'Australia', tz: 'Aligned to Australian business hours and recruiter cycles.', interviewSlug: 'angular-interview-proxy-support-australia', marketingSlug: 'angular-candidate-marketing-australia' },
  { slug: 'get-angular-interview-scheduled-singapore', country: 'Singapore', tz: 'Aligned to Singapore business hours and recruiter cycles.', interviewSlug: 'angular-interview-proxy-support-singapore', marketingSlug: 'angular-candidate-marketing-singapore' },
  { slug: 'get-angular-interview-scheduled-uae', country: 'the UAE', tz: 'Aligned to UAE business hours and recruiter cycles.', interviewSlug: 'angular-interview-proxy-support-uae', marketingSlug: 'angular-candidate-marketing-uae' },
];

// ─── Batch export ────────────────────────────────────────────────────────────

export const angularInterviewPages: LandingPageConfig[] = [
  ...interviewCore.map(interviewPage),
  ...countryInterviews.map(countryInterviewPage),
  ...scheduledDefs.map(scheduledPage),
];
