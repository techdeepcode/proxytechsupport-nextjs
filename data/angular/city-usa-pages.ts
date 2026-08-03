import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import {
  angularPage,
  relatedLinks,
  jobSupportHighlights,
  jobFaqs,
  HUB_LINK,
  JOB_LINK,
  PRODUCTION_LINK,
} from './shared';

/**
 * Reusable Angular city-page builder, shared by the USA + international city
 * batches. Each city gets unique local context (industries, timezone, two
 * bespoke paragraphs, and a market-specific FAQ answer) so no two city pages
 * are template clones. No invented statistics or employer names.
 */

export interface AngularCityInput {
  slug: string;
  city: string;
  region: string;
  industry: string;
  title: string;
  description: string;
  keywords: string[];
  heroEyebrow: string;
  painIntro: string;
  heroVariant: string;
  timezoneNote: string;
  marketFaqAnswer: string;
  countryHub: LandingRelatedLink;
  interviewLink: LandingRelatedLink;
  marketingLink: LandingRelatedLink;
  nearbyLinks?: LandingRelatedLink[];
  extraLinks?: LandingRelatedLink[];
}

const cityTech = (): LandingRelatedLink[] => [
  { label: 'Angular signals job support', href: '/angular-signals-job-support/' },
  { label: 'Angular RxJS job support', href: '/angular-rxjs-job-support/' },
  { label: 'Angular NgRx job support', href: '/angular-ngrx-job-support/' },
  { label: 'Angular Material job support', href: '/angular-material-job-support/' },
];

export function buildAngularCityPage(i: AngularCityInput): LandingPageConfig {
  return angularPage({
    slug: i.slug,
    title: i.title,
    description: i.description,
    keywords: i.keywords,
    h1: `Angular Job Support in ${i.city} — Real-Time Help for Angular Developers`,
    tagline: `Real-time Angular job support, production help, interview assistance, and candidate marketing for Angular developers in ${i.city}.`,
    heroEyebrow: i.heroEyebrow,
    painIntro: i.painIntro,
    heroVariant: i.heroVariant,
    geoLine: `Supporting Angular professionals across ${i.city} and ${i.region} — ${i.industry}.`,
    timezoneNote: i.timezoneNote,
    techSnippet:
      'Coverage across modern Angular, TypeScript, RxJS, signals, NgRx, Angular Material, SSR/hydration, and full-stack integrations.',
    highlights: jobSupportHighlights,
    faqs: [
      ...jobFaqs(`Angular developers in ${i.city}`, 'their live Angular projects during local business hours'),
      { question: `Do you understand the ${i.city} Angular job market?`, answer: i.marketFaqAnswer },
    ],
    useCasesSection: {
      title: `Angular Situations We Resolve for ${i.city} Professionals`,
      cases: [
        `A feature for a ${i.city} employer (${i.industry}) slipping before a release`,
        `An RxJS or change-detection bug blocking a sprint on a ${i.city} team`,
        `An Angular app failing SSR, performance, or accessibility requirements for a ${i.city} client`,
        `A ${i.city} Angular interview — coding, RxJS, or frontend system design — coming up soon`,
        `Onboarding onto a ${i.city} employer's Angular codebase with unfamiliar patterns`,
        `A strong developer in ${i.city} getting no recruiter calls despite real Angular experience`,
      ],
    },
    proxySection: {
      title: `Angular Interview & Candidate Marketing in ${i.city}`,
      intro: `Getting and keeping Angular roles in ${i.city} takes interview readiness and a profile recruiters find. We provide live proxy interview support and candidate marketing for ${i.city} Angular professionals.`,
      points: [
        `Live, discreet guidance during ${i.city} Angular Developer and Full-Stack interviews`,
        'Calibrated mock interviews for coding, RxJS, component design, and frontend system design rounds',
        `Profile positioning for the ${i.city} market — the keywords and titles local recruiters search`,
        'Active candidate marketing and recruiter outreach to build a real interview pipeline',
        'End-to-end support: get the interview, clear it, then keep the role with real-time job support',
      ],
    },
    bottomCTAHeading: `Need Angular Job Support in ${i.city}? Talk to ProxyTechSupport Now`,
    bottomCTABody: `In-house Angular experts available same-day for ${i.city} professionals — project support, production fixes, live interview guidance, or profile positioning. Contact us on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [i.countryHub, HUB_LINK],
      techLinks: cityTech().slice(0, 2),
      problemLink: PRODUCTION_LINK,
      proxyLink: i.interviewLink,
      additionalLinks: [
        JOB_LINK,
        ...cityTech().slice(2),
        ...(i.nearbyLinks ?? []),
        i.interviewLink,
        i.marketingLink,
        i.countryHub,
        PRODUCTION_LINK,
        HUB_LINK,
        ...(i.extraLinks ?? []),
      ],
    }),
  });
}

// ─── USA city context ────────────────────────────────────────────────────────

const US_TZ_ET = 'Available across US Eastern business hours (and other US time zones on request).';
const US_TZ_CT = 'Available across US Central business hours (and other US time zones on request).';
const US_TZ_PT = 'Available across US Pacific business hours (and other US time zones on request).';
const US_TZ_MT = 'Available across US Mountain business hours (and other US time zones on request).';

const usaHub: LandingRelatedLink = { label: 'USA Angular job support', href: '/usa-angular-job-support/' };
const usaInterview: LandingRelatedLink = { label: 'Angular interview proxy support USA', href: '/angular-interview-proxy-support-usa/' };
const usaMarketing: LandingRelatedLink = { label: 'Angular candidate marketing USA', href: '/angular-candidate-marketing-usa/' };
const nb = (label: string, slug: string): LandingRelatedLink => ({ label, href: `/${slug}/` });

function usCity(
  slug: string, city: string, region: string, industry: string, tz: string,
  painIntro: string, heroVariant: string, marketFaqAnswer: string,
  nearbyLinks?: LandingRelatedLink[],
): LandingPageConfig {
  return buildAngularCityPage({
    slug, city, region, industry, timezoneNote: tz,
    title: `Angular Job Support ${city} — Real-Time Help for Developers`,
    description: `Real-time Angular job support in ${city} — components, RxJS, signals, NgRx, SSR, and performance. Production help, interview support, and candidate marketing for ${city} Angular developers.`,
    keywords: [
      `Angular job support ${city}`, `Angular developer support ${city}`, `Angular proxy interview ${city}`,
      `Angular production support ${city}`, `RxJS support ${city}`, `frontend job support ${city}`,
    ],
    heroEyebrow: `Angular Job Support ${city} — 2026`,
    painIntro, heroVariant, marketFaqAnswer,
    countryHub: usaHub, interviewLink: usaInterview, marketingLink: usaMarketing,
    nearbyLinks,
    extraLinks: [usaMarketing],
  });
}

export const newYorkAngularJobSupport = usCity(
  'new-york-angular-job-support', 'New York', 'the tri-state area',
  'finance, media, adtech, and startups', US_TZ_ET,
  'On an Angular project for a New York bank, media company, or startup and stuck on a component, an RxJS stream, a production incident, or a demanding NYC interview?',
  'New York’s frontend demand is driven by Wall Street, adtech, media, and a dense startup scene — where dashboards, trading UIs, and data-heavy Angular apps are common and the hiring bar is high. Our experts cover US Eastern hours and support live work, production incidents, interviews, and NYC-market profile positioning.',
  'Yes. New York Angular roles span banks, hedge funds, adtech, media, and startups, often with complex real-time and data-grid UIs. We calibrate job support and interview prep to NYC expectations and position profiles for local recruiter searches.',
  [nb('Jersey City Angular job support', 'jersey-city-angular-job-support'), nb('Boston Angular job support', 'boston-angular-job-support')],
);

export const jerseyCityAngularJobSupport = usCity(
  'jersey-city-angular-job-support', 'Jersey City', 'the New York metro',
  'banking, financial services, and back-office tech', US_TZ_ET,
  'On an Angular project for a Jersey City bank or financial-services firm and stuck on a component, an RxJS bug, a production incident, or a metro-area interview?',
  'Jersey City hosts major banking and financial-services technology centres across the river from Manhattan, with heavy demand for risk, compliance, and operations Angular UIs. Our experts cover US Eastern hours and support live work, production incidents, interviews, and NY-metro profile positioning.',
  'Yes. Jersey City Angular roles are concentrated in banking and financial-services tech, often large internal applications. We calibrate support to these environments and position profiles for NY-metro recruiter searches.',
  [nb('New York Angular job support', 'new-york-angular-job-support')],
);

export const bostonAngularJobSupport = usCity(
  'boston-angular-job-support', 'Boston', 'the Greater Boston area',
  'biotech, healthcare, fintech, and edtech', US_TZ_ET,
  'On an Angular project for a Boston biotech, healthcare, or fintech company and stuck on a component, an RxJS issue, a production incident, or a Boston interview?',
  'Boston’s frontend demand is strong in biotech, healthcare, fintech, and edtech, with research-driven companies and startups spun out of MIT and Harvard building data-rich Angular applications. Our experts cover US Eastern hours and support live work, production incidents, interviews, and Boston-market profile positioning.',
  'Yes. Boston Angular roles skew toward biotech, healthcare, and fintech with a rigorous engineering bar. We calibrate support to these domains and position profiles for Boston recruiter searches.',
  [nb('New York Angular job support', 'new-york-angular-job-support')],
);

export const washingtonDcAngularJobSupport = usCity(
  'washington-dc-angular-job-support', 'Washington DC', 'the DMV area',
  'government, defense, and public-sector contractors', US_TZ_ET,
  'On an Angular project for a Washington DC government, defense, or contractor team and stuck on a component, an RxJS bug, a production incident, or a DC-area interview?',
  'The DC area’s frontend demand is driven by government, defense, and contractors, with emphasis on security, accessibility (Section 508), and long-lived enterprise Angular applications. Our experts cover US Eastern hours and support live work, production incidents, interviews, and DMV-market profile positioning.',
  'Yes. DC-area Angular roles emphasize government, defense, and compliance-heavy, accessibility-focused environments. We calibrate support to these domains and position profiles for DMV recruiter searches.',
);

export const atlantaAngularJobSupport = usCity(
  'atlanta-angular-job-support', 'Atlanta', 'the Southeast',
  'fintech, payments, logistics, and media', US_TZ_ET,
  'On an Angular project for an Atlanta fintech, payments, or logistics company and stuck on a component, an RxJS issue, a production incident, or an Atlanta interview?',
  'Atlanta is a fintech and payments hub with strong logistics and media presence, building customer and operations Angular portals at scale. Our experts cover US Eastern hours and support live work, production incidents, interviews, and Atlanta-market profile positioning.',
  'Yes. Atlanta Angular roles are strong in fintech, payments, and logistics. We calibrate support to these environments and position profiles for Atlanta recruiter searches.',
  [nb('Charlotte Angular job support', 'charlotte-angular-job-support')],
);

export const charlotteAngularJobSupport = usCity(
  'charlotte-angular-job-support', 'Charlotte', 'the Carolinas',
  'banking, fintech, and enterprise IT', US_TZ_ET,
  'On an Angular project for a Charlotte bank or fintech and stuck on a component, an RxJS bug, a production incident, or a Charlotte interview?',
  'Charlotte is a major US banking centre with growing fintech and enterprise IT demand for large internal and customer-facing Angular applications. Our experts cover US Eastern hours and support live work, production incidents, interviews, and Charlotte-market profile positioning.',
  'Yes. Charlotte Angular roles are banking- and fintech-heavy, often large enterprise apps. We calibrate support to these environments and position profiles for Charlotte recruiter searches.',
  [nb('Atlanta Angular job support', 'atlanta-angular-job-support'), nb('Raleigh Angular job support', 'raleigh-angular-job-support')],
);

export const raleighAngularJobSupport = usCity(
  'raleigh-angular-job-support', 'Raleigh', 'the Research Triangle',
  'tech, banking, healthcare, and research', US_TZ_ET,
  'On an Angular project for a Raleigh-Durham tech, banking, or healthcare company and stuck on a component, an RxJS issue, a production incident, or a Triangle interview?',
  'The Research Triangle (Raleigh, Durham, Chapel Hill) has a growing tech, banking, healthcare, and research base building modern Angular products. Our experts cover US Eastern hours and support live work, production incidents, interviews, and Triangle-market profile positioning.',
  'Yes. Raleigh-area Angular roles span tech, banking, and healthcare with a research-oriented culture. We calibrate support to these domains and position profiles for Triangle recruiter searches.',
  [nb('Charlotte Angular job support', 'charlotte-angular-job-support')],
);

export const tampaAngularJobSupport = usCity(
  'tampa-angular-job-support', 'Tampa', 'the Tampa Bay area',
  'finance, healthcare, and enterprise services', US_TZ_ET,
  'On an Angular project for a Tampa finance, healthcare, or services company and stuck on a component, an RxJS bug, a production incident, or a Tampa interview?',
  'Tampa Bay has a growing finance, healthcare, and enterprise-services base building customer portals and internal Angular applications. Our experts cover US Eastern hours and support live work, production incidents, interviews, and Tampa-market profile positioning.',
  'Yes. Tampa Angular roles span finance, healthcare, and enterprise services. We calibrate support to these environments and position profiles for Tampa recruiter searches.',
);

export const chicagoAngularJobSupport = usCity(
  'chicago-angular-job-support', 'Chicago', 'the Midwest',
  'trading, finance, logistics, and enterprise', US_TZ_CT,
  'On an Angular project for a Chicago trading firm, logistics company, or enterprise and stuck on a component, an RxJS issue, a production incident, or a Chicago interview?',
  'Chicago’s frontend demand centres on trading and finance, logistics, and large enterprises building real-time dashboards and operations Angular UIs. Our experts cover US Central hours and support live work, production incidents, interviews, and Chicago-market profile positioning.',
  'Yes. Chicago Angular roles include trading/finance, logistics, and enterprise, often real-time UIs. We calibrate support to these environments and position profiles for Chicago recruiter searches.',
  [nb('Minneapolis Angular job support', 'minneapolis-angular-job-support'), nb('Columbus Angular job support', 'columbus-angular-job-support')],
);

export const dallasAngularJobSupport = usCity(
  'dallas-angular-job-support', 'Dallas', 'the DFW metroplex',
  'finance, telecom, enterprise IT, and healthcare', US_TZ_CT,
  'On an Angular project for a Dallas finance, telecom, or enterprise team and stuck on a component, an RxJS bug, a production incident, or a DFW interview?',
  'Dallas–Fort Worth has a large enterprise IT, finance, telecom, and healthcare base building sizeable internal and customer Angular applications. Our experts cover US Central hours and support live work, production incidents, interviews, and DFW-market profile positioning.',
  'Yes. Dallas Angular roles are enterprise-heavy — finance, telecom, and healthcare. We calibrate support to these environments and position profiles for DFW recruiter searches.',
  [nb('Irving Angular job support', 'irving-angular-job-support'), nb('Plano Angular job support', 'plano-angular-job-support'), nb('Houston Angular job support', 'houston-angular-job-support')],
);

export const irvingAngularJobSupport = usCity(
  'irving-angular-job-support', 'Irving', 'the DFW metroplex',
  'corporate HQs, finance, and enterprise IT', US_TZ_CT,
  'On an Angular project for an Irving corporate HQ or enterprise IT team and stuck on a component, an RxJS issue, a production incident, or a DFW interview?',
  'Irving and Las Colinas host many corporate headquarters and enterprise IT operations in the DFW metroplex, running large Angular applications. Our experts cover US Central hours and support live work, production incidents, interviews, and DFW-market profile positioning.',
  'Yes. Irving Angular roles are concentrated in corporate HQs and enterprise IT. We calibrate support to these environments and position profiles for DFW recruiter searches.',
  [nb('Dallas Angular job support', 'dallas-angular-job-support'), nb('Plano Angular job support', 'plano-angular-job-support')],
);

export const planoAngularJobSupport = usCity(
  'plano-angular-job-support', 'Plano', 'the DFW metroplex',
  'finance, corporate HQs, and enterprise tech', US_TZ_CT,
  'On an Angular project for a Plano finance or corporate technology team and stuck on a component, an RxJS bug, a production incident, or a DFW interview?',
  'Plano is home to major finance and corporate technology campuses in the DFW metroplex, building enterprise Angular platforms. Our experts cover US Central hours and support live work, production incidents, interviews, and DFW-market profile positioning.',
  'Yes. Plano Angular roles are concentrated in finance and corporate enterprise technology. We calibrate support to these environments and position profiles for DFW recruiter searches.',
  [nb('Dallas Angular job support', 'dallas-angular-job-support'), nb('Irving Angular job support', 'irving-angular-job-support')],
);

export const houstonAngularJobSupport = usCity(
  'houston-angular-job-support', 'Houston', 'the Gulf Coast',
  'energy, healthcare, and industrial', US_TZ_CT,
  'On an Angular project for a Houston energy, healthcare, or industrial company and stuck on a component, an RxJS issue, a production incident, or a Houston interview?',
  'Houston’s frontend demand is anchored in energy, healthcare, and industrial applications — operations dashboards, monitoring UIs, and enterprise Angular portals. Our experts cover US Central hours and support live work, production incidents, interviews, and Houston-market profile positioning.',
  'Yes. Houston Angular roles skew toward energy, healthcare, and industrial operations UIs. We calibrate support to these domains and position profiles for Houston recruiter searches.',
  [nb('Dallas Angular job support', 'dallas-angular-job-support'), nb('Austin Angular job support', 'austin-angular-job-support')],
);

export const austinAngularJobSupport = usCity(
  'austin-angular-job-support', 'Austin', 'Central Texas',
  'startups, big-tech satellites, and product companies', US_TZ_CT,
  'On an Angular project for an Austin startup or tech company and stuck on a component, an RxJS bug, a production incident, or an Austin interview?',
  'Austin has become a major tech hub — startups, big-tech satellite offices, and product companies building modern Angular products. Our experts cover US Central hours and support live work, production incidents, interviews, and Austin-market profile positioning.',
  'Yes. Austin Angular roles span startups, big-tech satellites, and product companies. We calibrate support to these environments and position profiles for Austin recruiter searches.',
  [nb('Houston Angular job support', 'houston-angular-job-support'), nb('Dallas Angular job support', 'dallas-angular-job-support')],
);

export const sanFranciscoAngularJobSupport = usCity(
  'san-francisco-angular-job-support', 'San Francisco', 'the Bay Area',
  'startups, big tech, and venture-backed scale-ups', US_TZ_PT,
  'On an Angular project for a San Francisco startup or big-tech team and stuck on a component, an RxJS bug, a production incident, or a Bay Area interview loop?',
  'San Francisco sets the pace for frontend engineering — startups, big tech, and venture-backed scale-ups expect polished, performant Angular and TypeScript work at a high bar. Our experts cover US Pacific hours and support live work, production incidents, interviews, and Bay-Area profile positioning.',
  'Yes. The Bay Area has the highest frontend interview bar anywhere. We calibrate support to modern Angular, performance, and TypeScript depth and position profiles for SF recruiter searches.',
  [nb('San Jose Angular job support', 'san-jose-angular-job-support')],
);

export const sanJoseAngularJobSupport = usCity(
  'san-jose-angular-job-support', 'San Jose', 'Silicon Valley',
  'enterprise tech, hardware, and semiconductors', US_TZ_PT,
  'On an Angular project for a San Jose or Silicon Valley tech company and stuck on a component, an RxJS issue, a production incident, or a Valley interview?',
  'San Jose and Silicon Valley combine enterprise software, hardware, and semiconductor demand, building admin consoles, configuration UIs, and enterprise Angular applications. Our experts cover US Pacific hours and support live work, production incidents, interviews, and Valley profile positioning.',
  'Yes. Silicon Valley Angular roles range from enterprise consoles to product UIs at a high bar. We calibrate support to these environments and position profiles for San Jose / Valley recruiter searches.',
  [nb('San Francisco Angular job support', 'san-francisco-angular-job-support')],
);

export const seattleAngularJobSupport = usCity(
  'seattle-angular-job-support', 'Seattle', 'the Pacific Northwest',
  'cloud, big tech, e-commerce, and enterprise', US_TZ_PT,
  'On an Angular project for a Seattle cloud or e-commerce team and stuck on a component, an RxJS bug, a production incident, or a Seattle big-tech interview?',
  'Seattle is a cloud and big-tech hub — enterprise consoles, e-commerce, and internal tools built with Angular at scale on AWS and Azure ecosystems. Our experts cover US Pacific hours and support live work, production incidents, interviews, and Seattle-market profile positioning.',
  'Yes. Seattle Angular roles are heavy on cloud-scale enterprise apps and e-commerce. We calibrate support to these environments and position profiles for Seattle recruiter searches.',
);

export const losAngelesAngularJobSupport = usCity(
  'los-angeles-angular-job-support', 'Los Angeles', 'Southern California',
  'media, entertainment, gaming, and aerospace', US_TZ_PT,
  'On an Angular project for an LA media, entertainment, gaming, or aerospace company and stuck on a component, an RxJS issue, a production incident, or an LA interview?',
  'Los Angeles combines media and entertainment, gaming, and aerospace demand — content platforms, streaming dashboards, and enterprise Angular UIs. Our experts cover US Pacific hours and support live work, production incidents, interviews, and LA-market profile positioning.',
  'Yes. LA Angular roles span media/entertainment platforms, gaming tools, and aerospace enterprise apps. We calibrate support to these domains and position profiles for LA recruiter searches.',
);

export const phoenixAngularJobSupport = usCity(
  'phoenix-angular-job-support', 'Phoenix', 'the Valley of the Sun',
  'finance, semiconductors, and enterprise', US_TZ_MT,
  'On an Angular project for a Phoenix finance, semiconductor, or enterprise team and stuck on a component, an RxJS bug, a production incident, or a Phoenix interview?',
  'Phoenix is growing fast in finance, semiconductors, and enterprise operations, building internal and customer Angular applications. Our experts cover US Mountain hours and support live work, production incidents, interviews, and Phoenix-market profile positioning.',
  'Yes. Phoenix Angular roles span finance, semiconductors, and enterprise. We calibrate support to these environments and position profiles for Phoenix recruiter searches.',
  [nb('Denver Angular job support', 'denver-angular-job-support'), nb('Salt Lake City Angular job support', 'salt-lake-city-angular-job-support')],
);

export const denverAngularJobSupport = usCity(
  'denver-angular-job-support', 'Denver', 'the Front Range',
  'aerospace, telecom, fintech, and startups', US_TZ_MT,
  'On an Angular project for a Denver aerospace, telecom, or fintech company and stuck on a component, an RxJS issue, a production incident, or a Denver interview?',
  'Denver and the Front Range have a growing aerospace, telecom, fintech, and startup scene building modern Angular products. Our experts cover US Mountain hours and support live work, production incidents, interviews, and Denver-market profile positioning.',
  'Yes. Denver Angular roles span aerospace, telecom, fintech, and startups. We calibrate support to these environments and position profiles for Denver recruiter searches.',
  [nb('Salt Lake City Angular job support', 'salt-lake-city-angular-job-support'), nb('Phoenix Angular job support', 'phoenix-angular-job-support')],
);

export const saltLakeCityAngularJobSupport = usCity(
  'salt-lake-city-angular-job-support', 'Salt Lake City', 'the Silicon Slopes',
  'SaaS, fintech, and product companies', US_TZ_MT,
  'On an Angular project for a Salt Lake City SaaS or fintech company and stuck on a component, an RxJS bug, a production incident, or a Silicon Slopes interview?',
  'Salt Lake City’s Silicon Slopes has a strong SaaS, fintech, and product-company scene building modern Angular applications. Our experts cover US Mountain hours and support live work, production incidents, interviews, and SLC-market profile positioning.',
  'Yes. Salt Lake City Angular roles are strong in SaaS and fintech product companies. We calibrate support to these environments and position profiles for Silicon Slopes recruiter searches.',
  [nb('Denver Angular job support', 'denver-angular-job-support')],
);

export const minneapolisAngularJobSupport = usCity(
  'minneapolis-angular-job-support', 'Minneapolis', 'the Twin Cities',
  'retail, healthcare, finance, and enterprise', US_TZ_CT,
  'On an Angular project for a Minneapolis retail, healthcare, or finance company and stuck on a component, an RxJS issue, a production incident, or a Twin Cities interview?',
  'The Twin Cities host major retail, healthcare, finance, and enterprise headquarters building large internal and customer Angular applications. Our experts cover US Central hours and support live work, production incidents, interviews, and Minneapolis-market profile positioning.',
  'Yes. Minneapolis Angular roles are enterprise-heavy across retail, healthcare, and finance. We calibrate support to these environments and position profiles for Twin Cities recruiter searches.',
  [nb('Chicago Angular job support', 'chicago-angular-job-support'), nb('Columbus Angular job support', 'columbus-angular-job-support')],
);

export const columbusAngularJobSupport = usCity(
  'columbus-angular-job-support', 'Columbus', 'the Midwest',
  'insurance, banking, retail, and logistics', US_TZ_ET,
  'On an Angular project for a Columbus insurance, banking, or retail company and stuck on a component, an RxJS bug, a production incident, or a Columbus interview?',
  'Columbus has a strong insurance, banking, retail, and logistics base building enterprise Angular applications, with a growing tech scene. Our experts cover US Eastern hours and support live work, production incidents, interviews, and Columbus-market profile positioning.',
  'Yes. Columbus Angular roles are strong in insurance, banking, and retail. We calibrate support to these environments and position profiles for Columbus recruiter searches.',
  [nb('Chicago Angular job support', 'chicago-angular-job-support'), nb('Pittsburgh Angular job support', 'pittsburgh-angular-job-support')],
);

export const nashvilleAngularJobSupport = usCity(
  'nashville-angular-job-support', 'Nashville', 'Middle Tennessee',
  'healthcare, finance, and enterprise services', US_TZ_CT,
  'On an Angular project for a Nashville healthcare, finance, or services company and stuck on a component, an RxJS issue, a production incident, or a Nashville interview?',
  'Nashville is a major healthcare hub with growing finance and enterprise-services demand, building patient, provider, and operations Angular UIs. Our experts cover US Central hours and support live work, production incidents, interviews, and Nashville-market profile positioning.',
  'Yes. Nashville Angular roles are strong in healthcare and enterprise services. We calibrate support to these domains and position profiles for Nashville recruiter searches.',
);

export const pittsburghAngularJobSupport = usCity(
  'pittsburgh-angular-job-support', 'Pittsburgh', 'Western Pennsylvania',
  'finance, healthcare, robotics, and enterprise', US_TZ_ET,
  'On an Angular project for a Pittsburgh finance, healthcare, or robotics company and stuck on a component, an RxJS bug, a production incident, or a Pittsburgh interview?',
  'Pittsburgh combines finance, healthcare, robotics, and enterprise demand, with a research-driven culture building modern Angular applications. Our experts cover US Eastern hours and support live work, production incidents, interviews, and Pittsburgh-market profile positioning.',
  'Yes. Pittsburgh Angular roles span finance, healthcare, and robotics-adjacent enterprise apps. We calibrate support to these domains and position profiles for Pittsburgh recruiter searches.',
  [nb('Columbus Angular job support', 'columbus-angular-job-support')],
);

// ─── Batch export ────────────────────────────────────────────────────────────

export const angularUsaCityPages: LandingPageConfig[] = [
  newYorkAngularJobSupport,
  jerseyCityAngularJobSupport,
  bostonAngularJobSupport,
  washingtonDcAngularJobSupport,
  atlantaAngularJobSupport,
  charlotteAngularJobSupport,
  raleighAngularJobSupport,
  tampaAngularJobSupport,
  chicagoAngularJobSupport,
  dallasAngularJobSupport,
  irvingAngularJobSupport,
  planoAngularJobSupport,
  houstonAngularJobSupport,
  austinAngularJobSupport,
  sanFranciscoAngularJobSupport,
  sanJoseAngularJobSupport,
  seattleAngularJobSupport,
  losAngelesAngularJobSupport,
  phoenixAngularJobSupport,
  denverAngularJobSupport,
  saltLakeCityAngularJobSupport,
  minneapolisAngularJobSupport,
  columbusAngularJobSupport,
  nashvilleAngularJobSupport,
  pittsburghAngularJobSupport,
];
