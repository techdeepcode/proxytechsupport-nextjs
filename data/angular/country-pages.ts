import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import {
  angularPage,
  relatedLinks,
  jobSupportHighlights,
  jobFaqs,
  EXISTING,
  HUB_LINK,
  JOB_LINK,
  PRODUCTION_LINK,
  INTERVIEW_HUB_LINK,
  LOCATIONS_LINK,
} from './shared';

/**
 * Angular country job-support pages. Each is genuinely localized — real market
 * context, role titles, sectors, recruiter terminology, timezone, and links to
 * that country's own city pages, interview page, and candidate-marketing page.
 * No invented statistics, salary data, or employer names.
 */

interface CountryInput {
  slug: string;
  country: string;
  demonym: string; // e.g. 'US', 'Canadian'
  title: string;
  description: string;
  keywords: string[];
  timezoneNote: string;
  /** enterprise sectors hiring Angular devs in this market */
  sectors: string;
  /** common local Angular role titles */
  roleTitles: string;
  /** recruiter / engagement terminology (contract, permanent, etc.) */
  engagementNote: string;
  painIntro: string;
  heroVariant: string;
  marketFaqAnswer: string;
  /** links to this country's city pages */
  cityLinks: LandingRelatedLink[];
  interviewLink: LandingRelatedLink;
  marketingLink: LandingRelatedLink;
  extraLinks?: LandingRelatedLink[];
}

const coreTechLinks: LandingRelatedLink[] = [
  { label: 'Angular signals job support', href: '/angular-signals-job-support/' },
  { label: 'Angular RxJS job support', href: '/angular-rxjs-job-support/' },
  { label: 'Angular NgRx job support', href: '/angular-ngrx-job-support/' },
];

function countryPage(i: CountryInput): LandingPageConfig {
  return angularPage({
    slug: i.slug,
    title: i.title,
    description: i.description,
    keywords: i.keywords,
    h1: `Angular Job Support in ${i.country} — Real-Time Help for Angular Developers`,
    tagline: `Real-time Angular job support, production help, interview assistance, and candidate marketing for Angular developers across ${i.country}.`,
    heroEyebrow: `Angular Job Support ${i.country} — 2026`,
    painIntro: i.painIntro,
    heroVariant: i.heroVariant,
    geoLine: `Supporting Angular professionals across ${i.country} — ${i.sectors}.`,
    timezoneNote: i.timezoneNote,
    techSnippet:
      'Coverage across modern Angular, TypeScript, RxJS, signals, NgRx, Angular Material, SSR/hydration, and full-stack integrations.',
    highlights: jobSupportHighlights,
    faqs: [
      ...jobFaqs(`Angular developers in ${i.country}`, `their live Angular projects during ${i.demonym} business hours`),
      {
        question: `Do you understand the ${i.country} Angular job market?`,
        answer: i.marketFaqAnswer,
      },
      {
        question: `What Angular roles in ${i.country} do you support?`,
        answer: `We support ${i.roleTitles} and related frontend and full-stack roles. ${i.engagementNote} Whether you are on a permanent team, a contract, or working through a consultancy or offshore centre, we adapt the support to how you work.`,
      },
    ],
    useCasesSection: {
      title: `Angular Situations We Resolve for ${i.country} Professionals`,
      cases: [
        `A feature slipping before a release for a ${i.country} employer (${i.sectors})`,
        `An RxJS or change-detection bug blocking a sprint on a ${i.country} team`,
        `An Angular app failing SSR, performance, or accessibility requirements for a ${i.country} client`,
        `A ${i.country} Angular interview — coding, RxJS, or frontend system design — coming up soon`,
        `Onboarding onto a ${i.country} employer's Angular codebase with unfamiliar patterns`,
        `A strong developer in ${i.country} getting no recruiter calls despite real Angular experience`,
      ],
    },
    proxySection: {
      title: `Angular Interview & Candidate Marketing in ${i.country}`,
      intro: `Getting and keeping Angular roles in ${i.country} takes interview readiness and a profile recruiters find. We provide live proxy interview support and candidate marketing for ${i.country} Angular professionals.`,
      points: [
        `Live, discreet guidance during ${i.country} Angular Developer and Full-Stack interviews`,
        'Calibrated mock interviews for coding, RxJS, component design, and frontend system design rounds',
        `Profile positioning for the ${i.country} market — the keywords and titles local recruiters search`,
        'Active candidate marketing and recruiter outreach to build a real interview pipeline',
        'End-to-end support: get the interview, clear it, then keep the role with real-time job support',
      ],
    },
    bottomCTAHeading: `Need Angular Job Support in ${i.country}? Talk to ProxyTechSupport Now`,
    bottomCTABody: `In-house Angular experts available same-day for ${i.country} professionals — project support, production fixes, live interview guidance, or profile positioning. Contact us on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [HUB_LINK, ...i.cityLinks.slice(0, 1)],
      techLinks: coreTechLinks.slice(0, 2),
      problemLink: PRODUCTION_LINK,
      proxyLink: i.interviewLink,
      additionalLinks: [
        JOB_LINK,
        ...i.cityLinks,
        ...coreTechLinks,
        { label: 'Angular Material job support', href: '/angular-material-job-support/' },
        i.interviewLink,
        i.marketingLink,
        PRODUCTION_LINK,
        HUB_LINK,
        LOCATIONS_LINK,
        ...(i.extraLinks ?? []),
      ],
    }),
  });
}

// ─── Helpers to reference each country's own cluster pages ───────────────────

const c = (label: string, slug: string): LandingRelatedLink => ({ label, href: `/${slug}/` });

// ─── USA ─────────────────────────────────────────────────────────────────────

export const usaAngularJobSupport = countryPage({
  slug: 'usa-angular-job-support',
  country: 'the USA',
  demonym: 'US',
  title: 'USA Angular Job Support — Real-Time Help for US Developers',
  description:
    'Real-time Angular job support across the USA — components, RxJS, signals, NgRx, SSR, and performance. Production help, interview support, and candidate marketing in US time zones.',
  keywords: [
    'Angular job support USA', 'US Angular support', 'Angular developer support USA',
    'Angular proxy interview USA', 'Angular production support USA', 'remote Angular job support USA',
  ],
  timezoneNote: 'Available across all US time zones — Eastern, Central, Mountain, and Pacific business hours.',
  sectors: 'finance, healthcare, retail, tech, telecom, and government',
  roleTitles: 'Angular Developer, Senior Angular Developer, Frontend Engineer, and Angular Full-Stack Developer',
  engagementNote: 'US Angular roles span W2, C2C, and 1099 contracts as well as full-time positions.',
  painIntro:
    'On an Angular project for a US employer and stuck on a component, an RxJS stream, a production incident, or a demanding US interview? US teams move fast and expect delivery.',
  heroVariant:
    'The US market has heavy Angular usage in enterprise, finance, healthcare, and government, alongside product companies and consultancies. Our in-house experts cover every US time zone and support live work, production incidents, interviews, and US-market profile positioning — for permanent staff, contractors, and offshore teams supporting US clients.',
  marketFaqAnswer:
    'Yes. US Angular roles span enterprise (banking, insurance, healthcare, government) and product companies, with a strong contract market. We calibrate job support and interview prep to US expectations and position profiles for US recruiter searches.',
  cityLinks: [
    c('New York Angular job support', 'new-york-angular-job-support'),
    c('San Francisco Angular job support', 'san-francisco-angular-job-support'),
    c('Dallas Angular job support', 'dallas-angular-job-support'),
    c('Chicago Angular job support', 'chicago-angular-job-support'),
    c('Seattle Angular job support', 'seattle-angular-job-support'),
  ],
  interviewLink: c('Angular interview proxy support USA', 'angular-interview-proxy-support-usa'),
  marketingLink: c('Angular candidate marketing USA', 'angular-candidate-marketing-usa'),
  extraLinks: [EXISTING.dotnetAngular, EXISTING.technicalUsa],
});

// ─── Canada ──────────────────────────────────────────────────────────────────

export const canadaAngularJobSupport = countryPage({
  slug: 'canada-angular-job-support',
  country: 'Canada',
  demonym: 'Canadian',
  title: 'Canada Angular Job Support — Real-Time Help for Canadian Developers',
  description:
    'Real-time Angular job support across Canada — Toronto, Vancouver, Montreal, and beyond. Components, RxJS, NgRx, SSR, production help, interview support, and candidate marketing.',
  keywords: [
    'Angular job support Canada', 'Angular support Toronto', 'Angular developer support Canada',
    'Angular proxy interview Canada', 'Angular production support Canada', 'remote Angular job support Canada',
  ],
  timezoneNote: 'Available across Canadian time zones — Eastern, Central, Mountain, and Pacific business hours.',
  sectors: 'banking, insurance, government, telecom, and technology',
  roleTitles: 'Angular Developer, Senior Angular Developer, Frontend Developer, and Full-Stack Developer',
  engagementNote: 'Canadian Angular roles include permanent, contract, and consulting engagements, often with major banks and government.',
  painIntro:
    'On an Angular project for a Canadian bank, government department, or product company and stuck on a component, an RxJS bug, a production issue, or a Canadian interview?',
  heroVariant:
    'Canada has strong Angular demand in banking (especially Toronto), insurance, government, and telecom, plus a growing tech scene in Vancouver, Montreal, and the Waterloo corridor. Our experts cover Canadian time zones and support live work, production incidents, interviews, and Canada-market profile positioning.',
  marketFaqAnswer:
    'Yes. Canadian Angular roles are strong in banking, insurance, and government, with hubs in Toronto, Vancouver, Montreal, Ottawa, and Waterloo. We calibrate support to Canadian expectations and position profiles for Canadian recruiter searches.',
  cityLinks: [
    c('Toronto Angular job support', 'toronto-angular-job-support'),
    c('Vancouver Angular job support', 'vancouver-angular-job-support'),
    c('Montreal Angular job support', 'montreal-angular-job-support'),
    c('Calgary Angular job support', 'calgary-angular-job-support'),
    c('Ottawa Angular job support', 'ottawa-angular-job-support'),
  ],
  interviewLink: c('Angular interview proxy support Canada', 'angular-interview-proxy-support-canada'),
  marketingLink: c('Angular candidate marketing Canada', 'angular-candidate-marketing-canada'),
});

// ─── UK ──────────────────────────────────────────────────────────────────────

export const ukAngularJobSupport = countryPage({
  slug: 'uk-angular-job-support',
  country: 'the UK',
  demonym: 'UK',
  title: 'UK Angular Job Support — Real-Time Help for UK Developers',
  description:
    'Real-time Angular job support across the UK — London, Manchester, and beyond. Components, RxJS, NgRx, SSR, production help, interview support, and candidate marketing in UK hours.',
  keywords: [
    'Angular job support UK', 'Angular support London', 'Angular developer support UK',
    'Angular proxy interview UK', 'Angular production support UK', 'Angular contract support UK',
  ],
  timezoneNote: 'Available across UK business hours (GMT/BST) and aligned to European clients on request.',
  sectors: 'finance, fintech, insurance, retail, media, and public sector',
  roleTitles: 'Angular Developer, Senior Angular Developer, Frontend Engineer, and Full-Stack Developer',
  engagementNote: 'UK Angular roles include permanent, inside/outside IR35 contracts, and consultancy day-rate work.',
  painIntro:
    'On an Angular project for a UK bank, fintech, or agency and stuck on a component, an RxJS issue, a production incident, or a UK interview?',
  heroVariant:
    'The UK has deep Angular demand in the City’s finance and fintech sector, insurance, retail, media, and public sector, with strong contract and permanent markets in London, Manchester, and beyond. Our experts cover UK business hours and support live work, production incidents, interviews, and UK-market profile positioning — including day-rate contractors navigating IR35.',
  marketFaqAnswer:
    'Yes. UK Angular roles are strong in finance, fintech, and the public sector, with an active contract market. We calibrate support to UK expectations and position profiles for UK recruiter searches.',
  cityLinks: [
    c('London Angular job support', 'london-angular-job-support'),
    c('Manchester Angular job support', 'manchester-angular-job-support'),
    c('Birmingham Angular job support', 'birmingham-angular-job-support'),
    c('Leeds Angular job support', 'leeds-angular-job-support'),
    c('Edinburgh Angular job support', 'edinburgh-angular-job-support'),
  ],
  interviewLink: c('Angular interview proxy support UK', 'angular-interview-proxy-support-uk'),
  marketingLink: c('Angular candidate marketing UK', 'angular-candidate-marketing-uk'),
});

// ─── Ireland ─────────────────────────────────────────────────────────────────

export const irelandAngularJobSupport = countryPage({
  slug: 'ireland-angular-job-support',
  country: 'Ireland',
  demonym: 'Irish',
  title: 'Ireland Angular Job Support — Real-Time Help for Irish Developers',
  description:
    'Real-time Angular job support across Ireland — Dublin, Cork, Galway, and Limerick. Components, RxJS, NgRx, SSR, production help, interview support, and candidate marketing.',
  keywords: [
    'Angular job support Ireland', 'Angular support Dublin', 'Angular developer support Ireland',
    'Angular proxy interview Ireland', 'Angular production support Ireland', 'Angular contract support Ireland',
  ],
  timezoneNote: 'Available across Irish business hours (GMT/IST) and aligned to European and US clients on request.',
  sectors: 'multinational tech, fintech, pharma, and professional services',
  roleTitles: 'Angular Developer, Senior Angular Developer, Frontend Engineer, and Full-Stack Developer',
  engagementNote: 'Irish Angular roles include permanent positions and contracts, often within multinational EMEA hubs.',
  painIntro:
    'On an Angular project for a Dublin multinational, fintech, or consultancy and stuck on a component, an RxJS bug, a production issue, or an Irish interview?',
  heroVariant:
    'Ireland is a European tech hub — many US multinationals run their EMEA engineering from Dublin, alongside fintech, pharma, and professional services. Angular demand is steady across these sectors. Our experts cover Irish business hours and support live work, production incidents, interviews, and Ireland-market profile positioning.',
  marketFaqAnswer:
    'Yes. Irish Angular roles centre on Dublin’s multinational tech and fintech sector, with activity in Cork, Galway, and Limerick. We calibrate support to Irish expectations and position profiles for Irish recruiter searches.',
  cityLinks: [
    c('Dublin Angular job support', 'dublin-angular-job-support'),
    c('Cork Angular job support', 'cork-angular-job-support'),
    c('Galway Angular job support', 'galway-angular-job-support'),
    c('Limerick Angular job support', 'limerick-angular-job-support'),
  ],
  interviewLink: c('Angular interview proxy support Ireland', 'angular-interview-proxy-support-ireland'),
  marketingLink: c('Angular candidate marketing Ireland', 'angular-candidate-marketing-ireland'),
});

// ─── Germany ─────────────────────────────────────────────────────────────────

export const germanyAngularJobSupport = countryPage({
  slug: 'germany-angular-job-support',
  country: 'Germany',
  demonym: 'German',
  title: 'Germany Angular Job Support — Real-Time Help for German Developers',
  description:
    'Real-time Angular job support across Germany — Berlin, Munich, Frankfurt, and beyond. Components, RxJS, NgRx, SSR, production help, interview support, and candidate marketing.',
  keywords: [
    'Angular job support Germany', 'Angular support Berlin', 'Angular developer support Germany',
    'Angular proxy interview Germany', 'Angular production support Germany', 'Angular Freelancer support Germany',
  ],
  timezoneNote: 'Available across German business hours (CET/CEST) and aligned to wider European clients.',
  sectors: 'automotive, manufacturing, engineering, banking, and enterprise software',
  roleTitles: 'Angular Entwickler, Senior Angular Developer, Frontend Engineer, and Full-Stack Developer',
  engagementNote: 'German Angular roles include permanent (Festanstellung) positions and freelance (Freiberufler) contracts, common in enterprise and Mittelstand engineering.',
  painIntro:
    'On an Angular project for a German automotive, engineering, or enterprise team and stuck on a component, an RxJS issue, a production incident, or a German interview?',
  heroVariant:
    'Germany’s Angular demand is anchored in automotive, manufacturing, engineering, banking, and enterprise software — where robust, maintainable frontends matter. Berlin adds a strong startup scene. Our experts cover German business hours and support live work, production incidents, interviews, and Germany-market profile positioning, for both permanent staff and Freiberufler.',
  marketFaqAnswer:
    'Yes. German Angular roles are strong in automotive, engineering, and enterprise software, with an active freelance market. We calibrate support to German expectations and position profiles for German recruiter searches.',
  cityLinks: [
    c('Berlin Angular job support', 'berlin-angular-job-support'),
    c('Munich Angular job support', 'munich-angular-job-support'),
    c('Frankfurt Angular job support', 'frankfurt-angular-job-support'),
    c('Hamburg Angular job support', 'hamburg-angular-job-support'),
    c('Stuttgart Angular job support', 'stuttgart-angular-job-support'),
  ],
  interviewLink: c('Angular interview proxy support Germany', 'angular-interview-proxy-support-germany'),
  marketingLink: c('Angular candidate marketing Germany', 'angular-candidate-marketing-germany'),
});

// ─── Netherlands ─────────────────────────────────────────────────────────────

export const netherlandsAngularJobSupport = countryPage({
  slug: 'netherlands-angular-job-support',
  country: 'the Netherlands',
  demonym: 'Dutch',
  title: 'Netherlands Angular Job Support — Real-Time Help for Dutch Developers',
  description:
    'Real-time Angular job support across the Netherlands — Amsterdam, Rotterdam, Utrecht, and beyond. Components, RxJS, NgRx, SSR, production help, interview support, and candidate marketing.',
  keywords: [
    'Angular job support Netherlands', 'Angular support Amsterdam', 'Angular developer support Netherlands',
    'Angular proxy interview Netherlands', 'Angular production support Netherlands', 'Angular ZZP support',
  ],
  timezoneNote: 'Available across Dutch business hours (CET/CEST) and aligned to wider European clients.',
  sectors: 'fintech, logistics, banking, e-commerce, and enterprise software',
  roleTitles: 'Angular Developer, Senior Angular Developer, Frontend Engineer, and Full-Stack Developer',
  engagementNote: 'Dutch Angular roles include permanent positions and ZZP/freelance contracts, common in fintech and enterprise.',
  painIntro:
    'On an Angular project for a Dutch fintech, bank, or logistics company and stuck on a component, an RxJS bug, a production issue, or a Dutch interview?',
  heroVariant:
    'The Netherlands has strong Angular demand in fintech, banking, logistics, and e-commerce, with a mature freelance (ZZP) market centred on Amsterdam, Rotterdam, Utrecht, and Eindhoven. Our experts cover Dutch business hours and support live work, production incidents, interviews, and Netherlands-market profile positioning.',
  marketFaqAnswer:
    'Yes. Dutch Angular roles are strong in fintech, banking, and logistics, with an active freelance market. We calibrate support to Dutch expectations and position profiles for Netherlands recruiter searches.',
  cityLinks: [
    c('Amsterdam Angular job support', 'amsterdam-angular-job-support'),
    c('Rotterdam Angular job support', 'rotterdam-angular-job-support'),
    c('Utrecht Angular job support', 'utrecht-angular-job-support'),
    c('Eindhoven Angular job support', 'eindhoven-angular-job-support'),
    c('The Hague Angular job support', 'the-hague-angular-job-support'),
  ],
  interviewLink: c('Angular interview proxy support Europe', 'angular-interview-proxy-support-europe'),
  marketingLink: c('Angular candidate marketing UK', 'angular-candidate-marketing-uk'),
});

// ─── France ──────────────────────────────────────────────────────────────────

export const franceAngularJobSupport = countryPage({
  slug: 'france-angular-job-support',
  country: 'France',
  demonym: 'French',
  title: 'France Angular Job Support — Real-Time Help for French Developers',
  description:
    'Real-time Angular job support across France — Paris, Lyon, Toulouse, and beyond. Components, RxJS, NgRx, SSR, production help, interview support, and candidate marketing.',
  keywords: [
    'Angular job support France', 'Angular support Paris', 'Angular developer support France',
    'Angular proxy interview France', 'Angular production support France', 'Angular freelance support France',
  ],
  timezoneNote: 'Available across French business hours (CET/CEST) and aligned to wider European clients.',
  sectors: 'banking, luxury retail, aerospace, telecom, and enterprise software',
  roleTitles: 'Développeur Angular, Senior Angular Developer, Frontend Engineer, and Full-Stack Developer',
  engagementNote: 'French Angular roles include permanent (CDI) positions, contracts (CDD), and freelance work, often via ESN/consultancies.',
  painIntro:
    'On an Angular project for a French bank, retailer, or ESN consultancy and stuck on a component, an RxJS issue, a production incident, or a French interview?',
  heroVariant:
    'France has significant Angular demand in banking, luxury retail, aerospace, telecom, and enterprise software, much of it delivered through ESN consultancies in Paris, Lyon, Toulouse, and beyond. Our experts cover French business hours and support live work, production incidents, interviews, and France-market profile positioning.',
  marketFaqAnswer:
    'Yes. French Angular roles are strong in banking, retail, and enterprise software, frequently through ESN consultancies. We calibrate support to French expectations and position profiles for French recruiter searches.',
  cityLinks: [
    c('Paris Angular job support', 'paris-angular-job-support'),
    c('Lyon Angular job support', 'lyon-angular-job-support'),
    c('Toulouse Angular job support', 'toulouse-angular-job-support'),
    c('Marseille Angular job support', 'marseille-angular-job-support'),
    c('Lille Angular job support', 'lille-angular-job-support'),
  ],
  interviewLink: c('Angular interview proxy support Europe', 'angular-interview-proxy-support-europe'),
  marketingLink: c('Angular candidate marketing UK', 'angular-candidate-marketing-uk'),
});

// ─── Sweden ──────────────────────────────────────────────────────────────────

export const swedenAngularJobSupport = countryPage({
  slug: 'sweden-angular-job-support',
  country: 'Sweden',
  demonym: 'Swedish',
  title: 'Sweden Angular Job Support — Real-Time Help for Swedish Developers',
  description:
    'Real-time Angular job support across Sweden — Stockholm, Gothenburg, and Malmö. Components, RxJS, NgRx, SSR, production help, interview support, and candidate marketing.',
  keywords: [
    'Angular job support Sweden', 'Angular support Stockholm', 'Angular developer support Sweden',
    'Angular proxy interview Sweden', 'Angular production support Sweden', 'Angular consultant support Sweden',
  ],
  timezoneNote: 'Available across Swedish business hours (CET/CEST) and aligned to wider European clients.',
  sectors: 'fintech, gaming, telecom, automotive, and product startups',
  roleTitles: 'Angular Developer, Senior Angular Developer, Frontend Engineer, and Full-Stack Developer',
  engagementNote: 'Swedish Angular roles include permanent positions and consultant contracts, common in fintech and product companies.',
  painIntro:
    'On an Angular project for a Swedish fintech, gaming, or product company and stuck on a component, an RxJS bug, a production issue, or a Swedish interview?',
  heroVariant:
    'Sweden has a strong product and startup culture with Angular demand in fintech, gaming, telecom, and automotive, centred on Stockholm, Gothenburg, and Malmö. Our experts cover Swedish business hours and support live work, production incidents, interviews, and Sweden-market profile positioning.',
  marketFaqAnswer:
    'Yes. Swedish Angular roles are strong in fintech, gaming, and product companies. We calibrate support to Swedish expectations and position profiles for Swedish recruiter searches.',
  cityLinks: [
    c('Stockholm Angular job support', 'stockholm-angular-job-support'),
    c('Gothenburg Angular job support', 'gothenburg-angular-job-support'),
    c('Malmö Angular job support', 'malmo-angular-job-support'),
  ],
  interviewLink: c('Angular interview proxy support Europe', 'angular-interview-proxy-support-europe'),
  marketingLink: c('Angular candidate marketing UK', 'angular-candidate-marketing-uk'),
});

// ─── Switzerland ─────────────────────────────────────────────────────────────

export const switzerlandAngularJobSupport = countryPage({
  slug: 'switzerland-angular-job-support',
  country: 'Switzerland',
  demonym: 'Swiss',
  title: 'Switzerland Angular Job Support — Real-Time Help for Swiss Developers',
  description:
    'Real-time Angular job support across Switzerland — Zurich, Geneva, Basel, and Bern. Components, RxJS, NgRx, SSR, production help, interview support, and candidate marketing.',
  keywords: [
    'Angular job support Switzerland', 'Angular support Zurich', 'Angular developer support Switzerland',
    'Angular proxy interview Switzerland', 'Angular production support Switzerland', 'Angular contractor support Switzerland',
  ],
  timezoneNote: 'Available across Swiss business hours (CET/CEST) and aligned to wider European clients.',
  sectors: 'banking, insurance, pharma, and enterprise software',
  roleTitles: 'Angular Developer, Senior Angular Developer, Frontend Engineer, and Full-Stack Developer',
  engagementNote: 'Swiss Angular roles include permanent positions and contractor engagements, common in banking, insurance, and pharma.',
  painIntro:
    'On an Angular project for a Swiss bank, insurer, or pharma company and stuck on a component, an RxJS issue, a production incident, or a Swiss interview?',
  heroVariant:
    'Switzerland’s Angular demand is anchored in banking, insurance, and pharma — high-quality, compliance-aware engineering in Zurich, Geneva, Basel, and Bern. Our experts cover Swiss business hours and support live work, production incidents, interviews, and Switzerland-market profile positioning.',
  marketFaqAnswer:
    'Yes. Swiss Angular roles are strong in banking, insurance, and pharma, with a quality-focused engineering culture. We calibrate support to Swiss expectations and position profiles for Swiss recruiter searches.',
  cityLinks: [
    c('Zurich Angular job support', 'zurich-angular-job-support'),
    c('Geneva Angular job support', 'geneva-angular-job-support'),
    c('Basel Angular job support', 'basel-angular-job-support'),
    c('Bern Angular job support', 'bern-angular-job-support'),
  ],
  interviewLink: c('Angular interview proxy support Europe', 'angular-interview-proxy-support-europe'),
  marketingLink: c('Angular candidate marketing UK', 'angular-candidate-marketing-uk'),
});

// ─── Australia ───────────────────────────────────────────────────────────────

export const australiaAngularJobSupport = countryPage({
  slug: 'australia-angular-job-support',
  country: 'Australia',
  demonym: 'Australian',
  title: 'Australia Angular Job Support — Real-Time Help for Australian Developers',
  description:
    'Real-time Angular job support across Australia — Sydney, Melbourne, Brisbane, and beyond. Components, RxJS, NgRx, SSR, production help, interview support, and candidate marketing in AEST/AWST.',
  keywords: [
    'Angular job support Australia', 'Angular support Sydney', 'Angular developer support Australia',
    'Angular proxy interview Australia', 'Angular production support Australia', 'Angular contract support Australia',
  ],
  timezoneNote: 'Available across Australian business hours — AEST/AEDT, ACST, and AWST.',
  sectors: 'banking, government, mining, retail, and telecom',
  roleTitles: 'Angular Developer, Senior Angular Developer, Frontend Engineer, and Full-Stack Developer',
  engagementNote: 'Australian Angular roles include permanent positions and day-rate contracts, common in banking and government.',
  painIntro:
    'On an Angular project for an Australian bank, government agency, or retailer and stuck on a component, an RxJS bug, a production issue, or an Australian interview?',
  heroVariant:
    'Australia has strong Angular demand in banking, government, mining, retail, and telecom, with active markets in Sydney, Melbourne, Brisbane, Perth, and Canberra. Our experts cover Australian business hours and support live work, production incidents, interviews, and Australia-market profile positioning — for permanent staff and day-rate contractors.',
  marketFaqAnswer:
    'Yes. Australian Angular roles are strong in banking, government, and retail, with an active contract market. We calibrate support to Australian expectations and position profiles for Australian recruiter searches.',
  cityLinks: [
    c('Sydney Angular job support', 'sydney-angular-job-support'),
    c('Melbourne Angular job support', 'melbourne-angular-job-support'),
    c('Brisbane Angular job support', 'brisbane-angular-job-support'),
    c('Perth Angular job support', 'perth-angular-job-support'),
    c('Canberra Angular job support', 'canberra-angular-job-support'),
  ],
  interviewLink: c('Angular interview proxy support Australia', 'angular-interview-proxy-support-australia'),
  marketingLink: c('Angular candidate marketing Australia', 'angular-candidate-marketing-australia'),
});

// ─── New Zealand ─────────────────────────────────────────────────────────────

export const newZealandAngularJobSupport = countryPage({
  slug: 'new-zealand-angular-job-support',
  country: 'New Zealand',
  demonym: 'New Zealand',
  title: 'New Zealand Angular Job Support — Real-Time Help for NZ Developers',
  description:
    'Real-time Angular job support across New Zealand — Auckland, Wellington, and Christchurch. Components, RxJS, NgRx, SSR, production help, interview support, and candidate marketing.',
  keywords: [
    'Angular job support New Zealand', 'Angular support Auckland', 'Angular developer support NZ',
    'Angular proxy interview New Zealand', 'Angular production support NZ', 'Angular contract support NZ',
  ],
  timezoneNote: 'Available across New Zealand business hours (NZST/NZDT).',
  sectors: 'government, banking, agritech, and professional services',
  roleTitles: 'Angular Developer, Senior Angular Developer, Frontend Engineer, and Full-Stack Developer',
  engagementNote: 'New Zealand Angular roles include permanent positions and contracts, common in government and banking.',
  painIntro:
    'On an Angular project for a New Zealand government agency, bank, or agritech company and stuck on a component, an RxJS issue, a production incident, or an NZ interview?',
  heroVariant:
    'New Zealand has steady Angular demand in government, banking, agritech, and professional services, centred on Auckland, Wellington, and Christchurch. Our experts cover New Zealand business hours and support live work, production incidents, interviews, and NZ-market profile positioning.',
  marketFaqAnswer:
    'Yes. New Zealand Angular roles are common in government, banking, and agritech. We calibrate support to NZ expectations and position profiles for New Zealand recruiter searches.',
  cityLinks: [
    c('Auckland Angular job support', 'auckland-angular-job-support'),
    c('Wellington Angular job support', 'wellington-angular-job-support'),
    c('Christchurch Angular job support', 'christchurch-angular-job-support'),
  ],
  interviewLink: c('Angular interview proxy support Australia', 'angular-interview-proxy-support-australia'),
  marketingLink: c('Angular candidate marketing Australia', 'angular-candidate-marketing-australia'),
});

// ─── Singapore ───────────────────────────────────────────────────────────────

export const singaporeAngularJobSupport = countryPage({
  slug: 'singapore-angular-job-support',
  country: 'Singapore',
  demonym: 'Singapore',
  title: 'Singapore Angular Job Support — Real-Time Help for SG Developers',
  description:
    'Real-time Angular job support in Singapore — banking, fintech, and enterprise. Components, RxJS, NgRx, SSR, production help, interview support, and candidate marketing in SGT.',
  keywords: [
    'Angular job support Singapore', 'Angular support SG', 'Angular developer support Singapore',
    'Angular proxy interview Singapore', 'Angular production support Singapore', 'Angular contract support Singapore',
  ],
  timezoneNote: 'Available across Singapore business hours (SGT) and aligned to wider APAC clients.',
  sectors: 'banking, fintech, government, and enterprise technology',
  roleTitles: 'Angular Developer, Senior Angular Developer, Frontend Engineer, and Full-Stack Developer',
  engagementNote: 'Singapore Angular roles include permanent positions and contracts, common in banking and fintech regional hubs.',
  painIntro:
    'On an Angular project for a Singapore bank, fintech, or regional enterprise hub and stuck on a component, an RxJS bug, a production issue, or a Singapore interview?',
  heroVariant:
    'Singapore is a major APAC banking and fintech hub with strong Angular demand across financial services, government, and enterprise technology. Our experts cover Singapore business hours and support live work, production incidents, interviews, and Singapore-market profile positioning.',
  marketFaqAnswer:
    'Yes. Singapore Angular roles are concentrated in banking, fintech, and enterprise technology. We calibrate support to Singapore expectations and position profiles for Singapore recruiter searches.',
  cityLinks: [
    c('Singapore Angular city job support', 'singapore-angular-job-support'),
  ],
  interviewLink: c('Angular interview proxy support Singapore', 'angular-interview-proxy-support-singapore'),
  marketingLink: c('Angular candidate marketing Singapore', 'angular-candidate-marketing-singapore'),
});

// ─── Hong Kong ───────────────────────────────────────────────────────────────

export const hongKongAngularJobSupport = countryPage({
  slug: 'hong-kong-angular-job-support',
  country: 'Hong Kong',
  demonym: 'Hong Kong',
  title: 'Hong Kong Angular Job Support — Real-Time Help for HK Developers',
  description:
    'Real-time Angular job support in Hong Kong — banking, finance, and enterprise. Components, RxJS, NgRx, SSR, production help, interview support, and candidate marketing in HKT.',
  keywords: [
    'Angular job support Hong Kong', 'Angular support HK', 'Angular developer support Hong Kong',
    'Angular proxy interview Hong Kong', 'Angular production support Hong Kong', 'Angular contract support Hong Kong',
  ],
  timezoneNote: 'Available across Hong Kong business hours (HKT) and aligned to wider APAC clients.',
  sectors: 'banking, finance, insurance, and enterprise technology',
  roleTitles: 'Angular Developer, Senior Angular Developer, Frontend Engineer, and Full-Stack Developer',
  engagementNote: 'Hong Kong Angular roles include permanent positions and contracts, concentrated in banking and finance.',
  painIntro:
    'On an Angular project for a Hong Kong bank, insurer, or finance firm and stuck on a component, an RxJS issue, a production incident, or a Hong Kong interview?',
  heroVariant:
    'Hong Kong is a major financial centre with Angular demand concentrated in banking, finance, insurance, and enterprise technology. Our experts cover Hong Kong business hours and support live work, production incidents, interviews, and Hong Kong-market profile positioning.',
  marketFaqAnswer:
    'Yes. Hong Kong Angular roles are concentrated in banking, finance, and insurance. We calibrate support to Hong Kong expectations and position profiles for Hong Kong recruiter searches.',
  cityLinks: [
    c('Hong Kong Angular city job support', 'hong-kong-angular-job-support'),
  ],
  interviewLink: c('Angular interview proxy support Singapore', 'angular-interview-proxy-support-singapore'),
  marketingLink: c('Angular candidate marketing Singapore', 'angular-candidate-marketing-singapore'),
});

// ─── UAE ─────────────────────────────────────────────────────────────────────

export const uaeAngularJobSupport = countryPage({
  slug: 'uae-angular-job-support',
  country: 'the UAE',
  demonym: 'UAE',
  title: 'UAE Angular Job Support — Real-Time Help for Dubai & Abu Dhabi Developers',
  description:
    'Real-time Angular job support across the UAE — Dubai and Abu Dhabi. Components, RxJS, NgRx, SSR, production help, interview support, and candidate marketing in GST.',
  keywords: [
    'Angular job support UAE', 'Angular support Dubai', 'Angular developer support UAE',
    'Angular proxy interview UAE', 'Angular production support Dubai', 'Angular contract support UAE',
  ],
  timezoneNote: 'Available across UAE business hours (GST) and aligned to wider Gulf and European clients.',
  sectors: 'banking, government, real estate, retail, and enterprise technology',
  roleTitles: 'Angular Developer, Senior Angular Developer, Frontend Engineer, and Full-Stack Developer',
  engagementNote: 'UAE Angular roles include permanent positions and contracts, common in banking, government, and enterprise digital programmes.',
  painIntro:
    'On an Angular project for a Dubai bank, government digital programme, or enterprise and stuck on a component, an RxJS bug, a production issue, or a UAE interview?',
  heroVariant:
    'The UAE is investing heavily in digital government and enterprise transformation, with Angular demand across banking, government, real estate, retail, and enterprise technology in Dubai and Abu Dhabi. Our experts cover UAE business hours and support live work, production incidents, interviews, and UAE-market profile positioning.',
  marketFaqAnswer:
    'Yes. UAE Angular roles are strong in banking, government digital programmes, and enterprise technology across Dubai and Abu Dhabi. We calibrate support to UAE expectations and position profiles for UAE recruiter searches.',
  cityLinks: [
    c('Dubai Angular job support', 'dubai-angular-job-support'),
    c('Abu Dhabi Angular job support', 'abu-dhabi-angular-job-support'),
  ],
  interviewLink: c('Angular interview proxy support UAE', 'angular-interview-proxy-support-uae'),
  marketingLink: c('Angular candidate marketing UAE', 'angular-candidate-marketing-uae'),
});

// ─── Saudi Arabia ────────────────────────────────────────────────────────────

export const saudiArabiaAngularJobSupport = countryPage({
  slug: 'saudi-arabia-angular-job-support',
  country: 'Saudi Arabia',
  demonym: 'Saudi',
  title: 'Saudi Arabia Angular Job Support — Real-Time Help for KSA Developers',
  description:
    'Real-time Angular job support across Saudi Arabia — Riyadh and Jeddah. Components, RxJS, NgRx, SSR, production help, interview support, and candidate marketing in AST.',
  keywords: [
    'Angular job support Saudi Arabia', 'Angular support Riyadh', 'Angular developer support KSA',
    'Angular proxy interview Saudi Arabia', 'Angular production support Riyadh', 'Angular contract support KSA',
  ],
  timezoneNote: 'Available across Saudi business hours (AST) and aligned to wider Gulf clients.',
  sectors: 'government, banking, energy, and enterprise digital programmes',
  roleTitles: 'Angular Developer, Senior Angular Developer, Frontend Engineer, and Full-Stack Developer',
  engagementNote: 'Saudi Angular roles include permanent positions and contracts, common in government and enterprise digital transformation programmes.',
  painIntro:
    'On an Angular project for a Saudi government programme, bank, or enterprise and stuck on a component, an RxJS issue, a production incident, or a KSA interview?',
  heroVariant:
    'Saudi Arabia is driving large-scale digital transformation across government, banking, and energy, creating strong Angular demand in Riyadh and Jeddah. Our experts cover Saudi business hours and support live work, production incidents, interviews, and KSA-market profile positioning.',
  marketFaqAnswer:
    'Yes. Saudi Angular roles are strong in government digital programmes, banking, and energy across Riyadh and Jeddah. We calibrate support to Saudi expectations and position profiles for Saudi recruiter searches.',
  cityLinks: [
    c('Riyadh Angular job support', 'riyadh-angular-job-support'),
    c('Jeddah Angular job support', 'jeddah-angular-job-support'),
  ],
  interviewLink: c('Angular interview proxy support UAE', 'angular-interview-proxy-support-uae'),
  marketingLink: c('Angular candidate marketing UAE', 'angular-candidate-marketing-uae'),
});

// ─── Europe (regional hub) ───────────────────────────────────────────────────

export const europeAngularJobSupport = countryPage({
  slug: 'europe-angular-job-support',
  country: 'Europe',
  demonym: 'European',
  title: 'Europe Angular Job Support — Real-Time Help Across the EU & UK',
  description:
    'Real-time Angular job support across Europe — UK, Ireland, Germany, Netherlands, France, Sweden, and Switzerland. Components, RxJS, NgRx, SSR, production help, and interview support.',
  keywords: [
    'Angular job support Europe', 'Angular support EU', 'Angular developer support Europe',
    'Angular proxy interview Europe', 'Angular production support Europe', 'Angular contract support Europe',
  ],
  timezoneNote: 'Available across UK, Central European, and Nordic business hours.',
  sectors: 'banking, fintech, automotive, telecom, retail, and enterprise software',
  roleTitles: 'Angular Developer, Senior Angular Developer, Frontend Engineer, and Full-Stack Developer',
  engagementNote: 'European Angular roles span permanent positions, freelance/contract markets, and consultancy engagements across the EU and UK.',
  painIntro:
    'On an Angular project for a European bank, fintech, or enterprise and stuck on a component, an RxJS bug, a production issue, or a European interview?',
  heroVariant:
    'Europe has deep, mature Angular demand across banking, fintech, automotive, telecom, retail, and enterprise software, with strong permanent and freelance markets in the UK, Ireland, Germany, the Netherlands, France, the Nordics, and Switzerland. Our experts cover European business hours and support live work, production incidents, interviews, and Europe-market profile positioning.',
  marketFaqAnswer:
    'Yes. European Angular roles are strong across banking, fintech, automotive, and enterprise software, with active freelance and permanent markets. We calibrate support per country and position profiles for European recruiter searches.',
  cityLinks: [
    c('London Angular job support', 'london-angular-job-support'),
    c('Berlin Angular job support', 'berlin-angular-job-support'),
    c('Amsterdam Angular job support', 'amsterdam-angular-job-support'),
    c('Paris Angular job support', 'paris-angular-job-support'),
    c('Dublin Angular job support', 'dublin-angular-job-support'),
  ],
  interviewLink: c('Angular interview proxy support Europe', 'angular-interview-proxy-support-europe'),
  marketingLink: c('Angular candidate marketing UK', 'angular-candidate-marketing-uk'),
  extraLinks: [
    c('UK Angular job support', 'uk-angular-job-support'),
    c('Germany Angular job support', 'germany-angular-job-support'),
    c('Netherlands Angular job support', 'netherlands-angular-job-support'),
    c('France Angular job support', 'france-angular-job-support'),
    c('Ireland Angular job support', 'ireland-angular-job-support'),
  ],
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const angularCountryPages: LandingPageConfig[] = [
  usaAngularJobSupport,
  canadaAngularJobSupport,
  ukAngularJobSupport,
  irelandAngularJobSupport,
  germanyAngularJobSupport,
  netherlandsAngularJobSupport,
  franceAngularJobSupport,
  swedenAngularJobSupport,
  switzerlandAngularJobSupport,
  australiaAngularJobSupport,
  newZealandAngularJobSupport,
  singaporeAngularJobSupport,
  hongKongAngularJobSupport,
  uaeAngularJobSupport,
  saudiArabiaAngularJobSupport,
  europeAngularJobSupport,
];
