import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import { buildAngularCityPage } from './city-usa-pages';

/**
 * International Angular city pages (Canada, UK, Ireland, Germany, Netherlands,
 * France, Sweden, Switzerland, Australia, New Zealand, and the Gulf). Singapore
 * and Hong Kong are covered by their country pages to avoid city/country slug
 * conflicts. Each city carries unique local context — no template clones.
 */

const link = (label: string, slug: string): LandingRelatedLink => ({ label, href: `/${slug}/` });

interface IntlCityDef {
  slug: string;
  city: string;
  region: string;
  industry: string;
  tz: string;
  painIntro: string;
  heroVariant: string;
  marketFaqAnswer: string;
  countryHub: string; // slug
  interview: string; // slug
  marketing: string; // slug
  nearby?: [string, string][]; // [label, slug]
}

function intlCity(d: IntlCityDef): LandingPageConfig {
  return buildAngularCityPage({
    slug: d.slug,
    city: d.city,
    region: d.region,
    industry: d.industry,
    timezoneNote: d.tz,
    title: `Angular Job Support ${d.city} — Real-Time Help for Developers`,
    description: `Real-time Angular job support in ${d.city} — components, RxJS, signals, NgRx, SSR, and performance. Production help, interview support, and candidate marketing for ${d.city} Angular developers.`,
    keywords: [
      `Angular job support ${d.city}`, `Angular developer support ${d.city}`, `Angular proxy interview ${d.city}`,
      `Angular production support ${d.city}`, `RxJS support ${d.city}`, `frontend job support ${d.city}`,
    ],
    heroEyebrow: `Angular Job Support ${d.city} — 2026`,
    painIntro: d.painIntro,
    heroVariant: d.heroVariant,
    marketFaqAnswer: d.marketFaqAnswer,
    countryHub: link(`${d.region} Angular job support`, d.countryHub),
    interviewLink: link('Angular interview proxy support', d.interview),
    marketingLink: link('Angular candidate marketing', d.marketing),
    nearbyLinks: (d.nearby ?? []).map(([l, s]) => link(l, s)),
  });
}

// ─── Canada ──────────────────────────────────────────────────────────────────

const CA_ET = 'Available across Canadian Eastern business hours (and other Canadian time zones on request).';
const CA_PT = 'Available across Canadian Pacific business hours (and other Canadian time zones on request).';
const CA_MT = 'Available across Canadian Mountain business hours (and other Canadian time zones on request).';
const caI = 'angular-interview-proxy-support-canada';
const caM = 'angular-candidate-marketing-canada';
const caHub = 'canada-angular-job-support';

export const canadaCities: LandingPageConfig[] = [
  intlCity({
    slug: 'toronto-angular-job-support', city: 'Toronto', region: 'Canada', industry: 'banking, insurance, and technology', tz: CA_ET,
    painIntro: 'On an Angular project for a Toronto bank, insurer, or tech company and stuck on a component, an RxJS stream, a production incident, or a demanding Toronto interview?',
    heroVariant: 'Toronto is Canada’s financial capital, with heavy Angular demand across banks, insurers, and a large tech scene building trading, risk, and customer-facing UIs. Our experts cover Canadian Eastern hours and support live work, production incidents, interviews, and Toronto-market profile positioning.',
    marketFaqAnswer: 'Yes. Toronto Angular roles are dominated by banking and insurance, with a strong tech scene. We calibrate support to Toronto expectations and position profiles for local recruiter searches.',
    countryHub: caHub, interview: caI, marketing: caM, nearby: [['Mississauga Angular job support', 'mississauga-angular-job-support'], ['Waterloo Angular job support', 'waterloo-angular-job-support'], ['Ottawa Angular job support', 'ottawa-angular-job-support']],
  }),
  intlCity({
    slug: 'vancouver-angular-job-support', city: 'Vancouver', region: 'Canada', industry: 'tech, gaming, and clean tech', tz: CA_PT,
    painIntro: 'On an Angular project for a Vancouver tech, gaming, or clean-tech company and stuck on a component, an RxJS bug, a production incident, or a Vancouver interview?',
    heroVariant: 'Vancouver has a vibrant tech, gaming, and clean-tech scene building modern Angular products, plus satellite offices of larger firms. Our experts cover Canadian Pacific hours and support live work, production incidents, interviews, and Vancouver-market profile positioning.',
    marketFaqAnswer: 'Yes. Vancouver Angular roles are strong in tech, gaming, and clean tech. We calibrate support to Vancouver expectations and position profiles for local recruiter searches.',
    countryHub: caHub, interview: caI, marketing: caM,
  }),
  intlCity({
    slug: 'montreal-angular-job-support', city: 'Montreal', region: 'Canada', industry: 'gaming, AI, aerospace, and enterprise', tz: CA_ET,
    painIntro: 'On an Angular project for a Montreal gaming, AI, or enterprise company and stuck on a component, an RxJS issue, a production incident, or a Montreal interview?',
    heroVariant: 'Montreal combines gaming, AI, aerospace, and enterprise demand, with a bilingual engineering culture building modern Angular applications. Our experts cover Canadian Eastern hours and support live work, production incidents, interviews, and Montreal-market profile positioning.',
    marketFaqAnswer: 'Yes. Montreal Angular roles span gaming, AI, aerospace, and enterprise. We calibrate support to Montreal expectations and position profiles for local recruiter searches.',
    countryHub: caHub, interview: caI, marketing: caM,
  }),
  intlCity({
    slug: 'calgary-angular-job-support', city: 'Calgary', region: 'Canada', industry: 'energy, finance, and enterprise', tz: CA_MT,
    painIntro: 'On an Angular project for a Calgary energy, finance, or enterprise company and stuck on a component, an RxJS bug, a production incident, or a Calgary interview?',
    heroVariant: 'Calgary’s Angular demand is anchored in energy, finance, and enterprise operations, building monitoring and portal UIs. Our experts cover Canadian Mountain hours and support live work, production incidents, interviews, and Calgary-market profile positioning.',
    marketFaqAnswer: 'Yes. Calgary Angular roles are strong in energy and enterprise. We calibrate support to Calgary expectations and position profiles for local recruiter searches.',
    countryHub: caHub, interview: caI, marketing: caM, nearby: [['Edmonton Angular job support', 'edmonton-angular-job-support']],
  }),
  intlCity({
    slug: 'ottawa-angular-job-support', city: 'Ottawa', region: 'Canada', industry: 'government, telecom, and tech', tz: CA_ET,
    painIntro: 'On an Angular project for an Ottawa government, telecom, or tech organisation and stuck on a component, an RxJS issue, a production incident, or an Ottawa interview?',
    heroVariant: 'Ottawa’s Angular demand centres on government, telecom, and technology, with a strong emphasis on accessibility and long-lived enterprise applications. Our experts cover Canadian Eastern hours and support live work, production incidents, interviews, and Ottawa-market profile positioning.',
    marketFaqAnswer: 'Yes. Ottawa Angular roles emphasize government, telecom, and accessibility-focused enterprise apps. We calibrate support to Ottawa expectations and position profiles for local recruiter searches.',
    countryHub: caHub, interview: caI, marketing: caM, nearby: [['Toronto Angular job support', 'toronto-angular-job-support']],
  }),
  intlCity({
    slug: 'waterloo-angular-job-support', city: 'Waterloo', region: 'Canada', industry: 'tech startups, fintech, and product companies', tz: CA_ET,
    painIntro: 'On an Angular project for a Waterloo tech startup or product company and stuck on a component, an RxJS bug, a production incident, or a Waterloo interview?',
    heroVariant: 'The Waterloo region is a renowned tech and fintech hub with a strong product-engineering culture building modern Angular applications. Our experts cover Canadian Eastern hours and support live work, production incidents, interviews, and Waterloo-market profile positioning.',
    marketFaqAnswer: 'Yes. Waterloo Angular roles are strong in tech startups and fintech product companies. We calibrate support to Waterloo expectations and position profiles for local recruiter searches.',
    countryHub: caHub, interview: caI, marketing: caM, nearby: [['Toronto Angular job support', 'toronto-angular-job-support']],
  }),
  intlCity({
    slug: 'mississauga-angular-job-support', city: 'Mississauga', region: 'Canada', industry: 'enterprise IT, finance, and corporate HQs', tz: CA_ET,
    painIntro: 'On an Angular project for a Mississauga enterprise IT or corporate technology team and stuck on a component, an RxJS issue, a production incident, or a GTA interview?',
    heroVariant: 'Mississauga hosts many corporate headquarters and enterprise IT operations in the Greater Toronto Area, running large Angular applications. Our experts cover Canadian Eastern hours and support live work, production incidents, interviews, and GTA-market profile positioning.',
    marketFaqAnswer: 'Yes. Mississauga Angular roles are concentrated in enterprise IT and corporate HQs. We calibrate support to GTA expectations and position profiles for local recruiter searches.',
    countryHub: caHub, interview: caI, marketing: caM, nearby: [['Toronto Angular job support', 'toronto-angular-job-support'], ['Brampton Angular job support', 'brampton-angular-job-support']],
  }),
  intlCity({
    slug: 'brampton-angular-job-support', city: 'Brampton', region: 'Canada', industry: 'logistics, enterprise IT, and services', tz: CA_ET,
    painIntro: 'On an Angular project for a Brampton logistics or enterprise IT team and stuck on a component, an RxJS bug, a production incident, or a GTA interview?',
    heroVariant: 'Brampton, in the Greater Toronto Area, has strong logistics, enterprise IT, and services demand building operations and portal Angular UIs. Our experts cover Canadian Eastern hours and support live work, production incidents, interviews, and GTA-market profile positioning.',
    marketFaqAnswer: 'Yes. Brampton Angular roles span logistics and enterprise IT in the GTA. We calibrate support to local expectations and position profiles for GTA recruiter searches.',
    countryHub: caHub, interview: caI, marketing: caM, nearby: [['Mississauga Angular job support', 'mississauga-angular-job-support'], ['Toronto Angular job support', 'toronto-angular-job-support']],
  }),
  intlCity({
    slug: 'edmonton-angular-job-support', city: 'Edmonton', region: 'Canada', industry: 'energy, government, and enterprise', tz: CA_MT,
    painIntro: 'On an Angular project for an Edmonton energy, government, or enterprise organisation and stuck on a component, an RxJS issue, a production incident, or an Edmonton interview?',
    heroVariant: 'Edmonton’s Angular demand is anchored in energy, government, and enterprise operations, building portal and monitoring UIs. Our experts cover Canadian Mountain hours and support live work, production incidents, interviews, and Edmonton-market profile positioning.',
    marketFaqAnswer: 'Yes. Edmonton Angular roles are strong in energy, government, and enterprise. We calibrate support to local expectations and position profiles for Edmonton recruiter searches.',
    countryHub: caHub, interview: caI, marketing: caM, nearby: [['Calgary Angular job support', 'calgary-angular-job-support']],
  }),
  intlCity({
    slug: 'halifax-angular-job-support', city: 'Halifax', region: 'Canada', industry: 'finance, government, and tech services', tz: CA_ET,
    painIntro: 'On an Angular project for a Halifax finance, government, or tech-services company and stuck on a component, an RxJS bug, a production incident, or a Halifax interview?',
    heroVariant: 'Halifax has a growing finance, government, and tech-services scene building modern Angular applications on Canada’s East Coast. Our experts cover Canadian Eastern hours and support live work, production incidents, interviews, and Halifax-market profile positioning.',
    marketFaqAnswer: 'Yes. Halifax Angular roles span finance, government, and tech services. We calibrate support to local expectations and position profiles for Halifax recruiter searches.',
    countryHub: caHub, interview: caI, marketing: caM,
  }),
];

// ─── UK ──────────────────────────────────────────────────────────────────────

const UK_TZ = 'Available across UK business hours (GMT/BST).';
const ukI = 'angular-interview-proxy-support-uk';
const ukM = 'angular-candidate-marketing-uk';
const ukHub = 'uk-angular-job-support';

export const ukCities: LandingPageConfig[] = [
  intlCity({
    slug: 'london-angular-job-support', city: 'London', region: 'the UK', industry: 'finance, fintech, media, and retail', tz: UK_TZ,
    painIntro: 'On an Angular project for a London bank, fintech, or agency and stuck on a component, an RxJS stream, a production incident, or a demanding London interview?',
    heroVariant: 'London is one of the world’s largest frontend markets — the City’s finance and fintech sector, media, retail, and a huge contract market build data-heavy Angular applications. Our experts cover UK business hours and support live work, production incidents, interviews, and London-market profile positioning, including IR35 contractors.',
    marketFaqAnswer: 'Yes. London Angular roles span finance, fintech, media, and retail, with a large contract market. We calibrate support to London expectations and position profiles for local recruiter searches.',
    countryHub: ukHub, interview: ukI, marketing: ukM, nearby: [['Reading Angular job support', 'reading-angular-job-support'], ['Cambridge Angular job support', 'cambridge-angular-job-support']],
  }),
  intlCity({
    slug: 'manchester-angular-job-support', city: 'Manchester', region: 'the UK', industry: 'media, e-commerce, and digital agencies', tz: UK_TZ,
    painIntro: 'On an Angular project for a Manchester media, e-commerce, or digital agency and stuck on a component, an RxJS bug, a production incident, or a Manchester interview?',
    heroVariant: 'Manchester is the UK’s largest tech hub outside London, with media, e-commerce, and digital agencies building modern Angular products. Our experts cover UK business hours and support live work, production incidents, interviews, and Manchester-market profile positioning.',
    marketFaqAnswer: 'Yes. Manchester Angular roles are strong in media, e-commerce, and agencies. We calibrate support to Manchester expectations and position profiles for local recruiter searches.',
    countryHub: ukHub, interview: ukI, marketing: ukM, nearby: [['Leeds Angular job support', 'leeds-angular-job-support']],
  }),
  intlCity({
    slug: 'birmingham-angular-job-support', city: 'Birmingham', region: 'the UK', industry: 'finance, professional services, and public sector', tz: UK_TZ,
    painIntro: 'On an Angular project for a Birmingham finance, professional-services, or public-sector organisation and stuck on a component, an RxJS issue, a production incident, or a Birmingham interview?',
    heroVariant: 'Birmingham has a growing finance, professional-services, and public-sector technology base building enterprise Angular applications. Our experts cover UK business hours and support live work, production incidents, interviews, and Birmingham-market profile positioning.',
    marketFaqAnswer: 'Yes. Birmingham Angular roles span finance, professional services, and public sector. We calibrate support to local expectations and position profiles for Birmingham recruiter searches.',
    countryHub: ukHub, interview: ukI, marketing: ukM,
  }),
  intlCity({
    slug: 'leeds-angular-job-support', city: 'Leeds', region: 'the UK', industry: 'finance, healthtech, and digital', tz: UK_TZ,
    painIntro: 'On an Angular project for a Leeds finance, healthtech, or digital company and stuck on a component, an RxJS bug, a production incident, or a Leeds interview?',
    heroVariant: 'Leeds has a strong finance, healthtech, and digital scene building modern Angular applications in the North of England. Our experts cover UK business hours and support live work, production incidents, interviews, and Leeds-market profile positioning.',
    marketFaqAnswer: 'Yes. Leeds Angular roles are strong in finance, healthtech, and digital. We calibrate support to local expectations and position profiles for Leeds recruiter searches.',
    countryHub: ukHub, interview: ukI, marketing: ukM, nearby: [['Manchester Angular job support', 'manchester-angular-job-support'], ['Nottingham Angular job support', 'nottingham-angular-job-support']],
  }),
  intlCity({
    slug: 'glasgow-angular-job-support', city: 'Glasgow', region: 'the UK', industry: 'finance, engineering, and public sector', tz: UK_TZ,
    painIntro: 'On an Angular project for a Glasgow finance, engineering, or public-sector organisation and stuck on a component, an RxJS issue, a production incident, or a Glasgow interview?',
    heroVariant: 'Glasgow has a strong finance, engineering, and public-sector technology base building enterprise Angular applications in Scotland. Our experts cover UK business hours and support live work, production incidents, interviews, and Glasgow-market profile positioning.',
    marketFaqAnswer: 'Yes. Glasgow Angular roles span finance, engineering, and public sector. We calibrate support to local expectations and position profiles for Glasgow recruiter searches.',
    countryHub: ukHub, interview: ukI, marketing: ukM, nearby: [['Edinburgh Angular job support', 'edinburgh-angular-job-support']],
  }),
  intlCity({
    slug: 'edinburgh-angular-job-support', city: 'Edinburgh', region: 'the UK', industry: 'finance, fintech, and data', tz: UK_TZ,
    painIntro: 'On an Angular project for an Edinburgh finance, fintech, or data company and stuck on a component, an RxJS bug, a production incident, or an Edinburgh interview?',
    heroVariant: 'Edinburgh is a major finance and fintech centre with a strong data and product-engineering scene building modern Angular applications. Our experts cover UK business hours and support live work, production incidents, interviews, and Edinburgh-market profile positioning.',
    marketFaqAnswer: 'Yes. Edinburgh Angular roles are strong in finance and fintech. We calibrate support to local expectations and position profiles for Edinburgh recruiter searches.',
    countryHub: ukHub, interview: ukI, marketing: ukM, nearby: [['Glasgow Angular job support', 'glasgow-angular-job-support']],
  }),
  intlCity({
    slug: 'bristol-angular-job-support', city: 'Bristol', region: 'the UK', industry: 'aerospace, tech, and media', tz: UK_TZ,
    painIntro: 'On an Angular project for a Bristol aerospace, tech, or media company and stuck on a component, an RxJS issue, a production incident, or a Bristol interview?',
    heroVariant: 'Bristol has a strong aerospace, tech, and media scene building modern Angular products in the South West. Our experts cover UK business hours and support live work, production incidents, interviews, and Bristol-market profile positioning.',
    marketFaqAnswer: 'Yes. Bristol Angular roles span aerospace, tech, and media. We calibrate support to local expectations and position profiles for Bristol recruiter searches.',
    countryHub: ukHub, interview: ukI, marketing: ukM,
  }),
  intlCity({
    slug: 'cambridge-angular-job-support', city: 'Cambridge', region: 'the UK', industry: 'deep tech, biotech, and research', tz: UK_TZ,
    painIntro: 'On an Angular project for a Cambridge deep-tech, biotech, or research organisation and stuck on a component, an RxJS bug, a production incident, or a Cambridge interview?',
    heroVariant: 'Cambridge’s Angular demand comes from deep tech, biotech, and research-driven companies building sophisticated, data-rich applications. Our experts cover UK business hours and support live work, production incidents, interviews, and Cambridge-market profile positioning.',
    marketFaqAnswer: 'Yes. Cambridge Angular roles skew toward deep tech, biotech, and research. We calibrate support to local expectations and position profiles for Cambridge recruiter searches.',
    countryHub: ukHub, interview: ukI, marketing: ukM, nearby: [['London Angular job support', 'london-angular-job-support']],
  }),
  intlCity({
    slug: 'reading-angular-job-support', city: 'Reading', region: 'the UK', industry: 'enterprise tech, telecom, and consultancy', tz: UK_TZ,
    painIntro: 'On an Angular project for a Reading enterprise-tech, telecom, or consultancy team and stuck on a component, an RxJS issue, a production incident, or a Thames Valley interview?',
    heroVariant: 'Reading and the Thames Valley host many enterprise technology, telecom, and consultancy operations building large Angular applications. Our experts cover UK business hours and support live work, production incidents, interviews, and Thames Valley profile positioning.',
    marketFaqAnswer: 'Yes. Reading Angular roles are concentrated in enterprise tech, telecom, and consultancy. We calibrate support to Thames Valley expectations and position profiles for local recruiter searches.',
    countryHub: ukHub, interview: ukI, marketing: ukM, nearby: [['London Angular job support', 'london-angular-job-support']],
  }),
  intlCity({
    slug: 'nottingham-angular-job-support', city: 'Nottingham', region: 'the UK', industry: 'finance, retail, and digital', tz: UK_TZ,
    painIntro: 'On an Angular project for a Nottingham finance, retail, or digital company and stuck on a component, an RxJS bug, a production incident, or a Nottingham interview?',
    heroVariant: 'Nottingham has a solid finance, retail, and digital technology base building modern Angular applications in the East Midlands. Our experts cover UK business hours and support live work, production incidents, interviews, and Nottingham-market profile positioning.',
    marketFaqAnswer: 'Yes. Nottingham Angular roles span finance, retail, and digital. We calibrate support to local expectations and position profiles for Nottingham recruiter searches.',
    countryHub: ukHub, interview: ukI, marketing: ukM, nearby: [['Leeds Angular job support', 'leeds-angular-job-support']],
  }),
];

// ─── Ireland ─────────────────────────────────────────────────────────────────

const IE_TZ = 'Available across Irish business hours (GMT/IST).';
const ieI = 'angular-interview-proxy-support-ireland';
const ieM = 'angular-candidate-marketing-ireland';
const ieHub = 'ireland-angular-job-support';

export const irelandCities: LandingPageConfig[] = [
  intlCity({
    slug: 'dublin-angular-job-support', city: 'Dublin', region: 'Ireland', industry: 'multinational tech, fintech, and pharma', tz: IE_TZ,
    painIntro: 'On an Angular project for a Dublin multinational, fintech, or pharma company and stuck on a component, an RxJS stream, a production incident, or a Dublin interview?',
    heroVariant: 'Dublin is a European engineering hub where many US multinationals run EMEA teams, alongside fintech and pharma, building modern Angular applications. Our experts cover Irish business hours and support live work, production incidents, interviews, and Dublin-market profile positioning.',
    marketFaqAnswer: 'Yes. Dublin Angular roles centre on multinational tech, fintech, and pharma. We calibrate support to Dublin expectations and position profiles for local recruiter searches.',
    countryHub: ieHub, interview: ieI, marketing: ieM, nearby: [['Cork Angular job support', 'cork-angular-job-support']],
  }),
  intlCity({
    slug: 'cork-angular-job-support', city: 'Cork', region: 'Ireland', industry: 'pharma, tech, and manufacturing', tz: IE_TZ,
    painIntro: 'On an Angular project for a Cork pharma, tech, or manufacturing company and stuck on a component, an RxJS bug, a production incident, or a Cork interview?',
    heroVariant: 'Cork has a strong pharma, tech, and manufacturing base with multinational engineering teams building enterprise Angular applications. Our experts cover Irish business hours and support live work, production incidents, interviews, and Cork-market profile positioning.',
    marketFaqAnswer: 'Yes. Cork Angular roles span pharma, tech, and manufacturing. We calibrate support to local expectations and position profiles for Cork recruiter searches.',
    countryHub: ieHub, interview: ieI, marketing: ieM, nearby: [['Dublin Angular job support', 'dublin-angular-job-support'], ['Limerick Angular job support', 'limerick-angular-job-support']],
  }),
  intlCity({
    slug: 'galway-angular-job-support', city: 'Galway', region: 'Ireland', industry: 'medtech, tech, and research', tz: IE_TZ,
    painIntro: 'On an Angular project for a Galway medtech, tech, or research organisation and stuck on a component, an RxJS issue, a production incident, or a Galway interview?',
    heroVariant: 'Galway is a medtech and technology cluster with research-driven companies building sophisticated Angular applications on Ireland’s West Coast. Our experts cover Irish business hours and support live work, production incidents, interviews, and Galway-market profile positioning.',
    marketFaqAnswer: 'Yes. Galway Angular roles skew toward medtech, tech, and research. We calibrate support to local expectations and position profiles for Galway recruiter searches.',
    countryHub: ieHub, interview: ieI, marketing: ieM,
  }),
  intlCity({
    slug: 'limerick-angular-job-support', city: 'Limerick', region: 'Ireland', industry: 'tech, manufacturing, and shared services', tz: IE_TZ,
    painIntro: 'On an Angular project for a Limerick tech, manufacturing, or shared-services organisation and stuck on a component, an RxJS bug, a production incident, or a Limerick interview?',
    heroVariant: 'Limerick has a growing tech, manufacturing, and shared-services base with multinational operations building enterprise Angular applications. Our experts cover Irish business hours and support live work, production incidents, interviews, and Limerick-market profile positioning.',
    marketFaqAnswer: 'Yes. Limerick Angular roles span tech, manufacturing, and shared services. We calibrate support to local expectations and position profiles for Limerick recruiter searches.',
    countryHub: ieHub, interview: ieI, marketing: ieM, nearby: [['Cork Angular job support', 'cork-angular-job-support']],
  }),
];

// ─── Germany ─────────────────────────────────────────────────────────────────

const DE_TZ = 'Available across German business hours (CET/CEST).';
const euI = 'angular-interview-proxy-support-europe';
const deI = 'angular-interview-proxy-support-germany';
const deM = 'angular-candidate-marketing-germany';
const deHub = 'germany-angular-job-support';

export const germanyCities: LandingPageConfig[] = [
  intlCity({
    slug: 'berlin-angular-job-support', city: 'Berlin', region: 'Germany', industry: 'startups, e-commerce, and enterprise software', tz: DE_TZ,
    painIntro: 'On an Angular project for a Berlin startup, e-commerce, or enterprise company and stuck on a component, an RxJS stream, a production incident, or a Berlin interview?',
    heroVariant: 'Berlin is Germany’s startup capital with a large e-commerce and enterprise-software scene building modern Angular applications. Our experts cover German business hours and support live work, production incidents, interviews, and Berlin-market profile positioning, including Freiberufler.',
    marketFaqAnswer: 'Yes. Berlin Angular roles span startups, e-commerce, and enterprise software, with an active freelance market. We calibrate support to Berlin expectations and position profiles for local recruiter searches.',
    countryHub: deHub, interview: deI, marketing: deM, nearby: [['Hamburg Angular job support', 'hamburg-angular-job-support']],
  }),
  intlCity({
    slug: 'munich-angular-job-support', city: 'Munich', region: 'Germany', industry: 'automotive, insurance, and enterprise tech', tz: DE_TZ,
    painIntro: 'On an Angular project for a Munich automotive, insurance, or enterprise-tech company and stuck on a component, an RxJS bug, a production incident, or a Munich interview?',
    heroVariant: 'Munich’s Angular demand is anchored in automotive, insurance, and enterprise technology — robust, maintainable frontends for complex domains. Our experts cover German business hours and support live work, production incidents, interviews, and Munich-market profile positioning.',
    marketFaqAnswer: 'Yes. Munich Angular roles are strong in automotive, insurance, and enterprise tech. We calibrate support to Munich expectations and position profiles for local recruiter searches.',
    countryHub: deHub, interview: deI, marketing: deM, nearby: [['Stuttgart Angular job support', 'stuttgart-angular-job-support']],
  }),
  intlCity({
    slug: 'frankfurt-angular-job-support', city: 'Frankfurt', region: 'Germany', industry: 'banking, finance, and fintech', tz: DE_TZ,
    painIntro: 'On an Angular project for a Frankfurt bank, finance, or fintech firm and stuck on a component, an RxJS issue, a production incident, or a Frankfurt interview?',
    heroVariant: 'Frankfurt is Germany’s financial capital with heavy Angular demand across banking, finance, and fintech, building trading, risk, and compliance UIs. Our experts cover German business hours and support live work, production incidents, interviews, and Frankfurt-market profile positioning.',
    marketFaqAnswer: 'Yes. Frankfurt Angular roles are dominated by banking, finance, and fintech. We calibrate support to Frankfurt expectations and position profiles for local recruiter searches.',
    countryHub: deHub, interview: deI, marketing: deM,
  }),
  intlCity({
    slug: 'hamburg-angular-job-support', city: 'Hamburg', region: 'Germany', industry: 'media, logistics, and e-commerce', tz: DE_TZ,
    painIntro: 'On an Angular project for a Hamburg media, logistics, or e-commerce company and stuck on a component, an RxJS bug, a production incident, or a Hamburg interview?',
    heroVariant: 'Hamburg has a strong media, logistics, and e-commerce scene building modern Angular applications. Our experts cover German business hours and support live work, production incidents, interviews, and Hamburg-market profile positioning.',
    marketFaqAnswer: 'Yes. Hamburg Angular roles span media, logistics, and e-commerce. We calibrate support to Hamburg expectations and position profiles for local recruiter searches.',
    countryHub: deHub, interview: deI, marketing: deM, nearby: [['Berlin Angular job support', 'berlin-angular-job-support']],
  }),
  intlCity({
    slug: 'cologne-angular-job-support', city: 'Cologne', region: 'Germany', industry: 'media, insurance, and enterprise', tz: DE_TZ,
    painIntro: 'On an Angular project for a Cologne media, insurance, or enterprise company and stuck on a component, an RxJS issue, a production incident, or a Cologne interview?',
    heroVariant: 'Cologne has a strong media, insurance, and enterprise base building Angular applications in the Rhineland. Our experts cover German business hours and support live work, production incidents, interviews, and Cologne-market profile positioning.',
    marketFaqAnswer: 'Yes. Cologne Angular roles span media, insurance, and enterprise. We calibrate support to Cologne expectations and position profiles for local recruiter searches.',
    countryHub: deHub, interview: deI, marketing: deM, nearby: [['Dusseldorf Angular job support', 'dusseldorf-angular-job-support']],
  }),
  intlCity({
    slug: 'dusseldorf-angular-job-support', city: 'Düsseldorf', region: 'Germany', industry: 'telecom, retail, and consultancy', tz: DE_TZ,
    painIntro: 'On an Angular project for a Düsseldorf telecom, retail, or consultancy team and stuck on a component, an RxJS bug, a production incident, or a Düsseldorf interview?',
    heroVariant: 'Düsseldorf has a strong telecom, retail, and consultancy base building enterprise Angular applications in the Rhineland. Our experts cover German business hours and support live work, production incidents, interviews, and Düsseldorf-market profile positioning.',
    marketFaqAnswer: 'Yes. Düsseldorf Angular roles span telecom, retail, and consultancy. We calibrate support to local expectations and position profiles for Düsseldorf recruiter searches.',
    countryHub: deHub, interview: deI, marketing: deM, nearby: [['Cologne Angular job support', 'cologne-angular-job-support']],
  }),
  intlCity({
    slug: 'stuttgart-angular-job-support', city: 'Stuttgart', region: 'Germany', industry: 'automotive, engineering, and manufacturing', tz: DE_TZ,
    painIntro: 'On an Angular project for a Stuttgart automotive, engineering, or manufacturing company and stuck on a component, an RxJS issue, a production incident, or a Stuttgart interview?',
    heroVariant: 'Stuttgart’s Angular demand is anchored in automotive, engineering, and manufacturing — technical frontends for complex industrial domains. Our experts cover German business hours and support live work, production incidents, interviews, and Stuttgart-market profile positioning.',
    marketFaqAnswer: 'Yes. Stuttgart Angular roles are strong in automotive, engineering, and manufacturing. We calibrate support to local expectations and position profiles for Stuttgart recruiter searches.',
    countryHub: deHub, interview: deI, marketing: deM, nearby: [['Munich Angular job support', 'munich-angular-job-support']],
  }),
];

// ─── Netherlands ─────────────────────────────────────────────────────────────

const NL_TZ = 'Available across Dutch business hours (CET/CEST).';
const nlHub = 'netherlands-angular-job-support';

export const netherlandsCities: LandingPageConfig[] = [
  intlCity({
    slug: 'amsterdam-angular-job-support', city: 'Amsterdam', region: 'the Netherlands', industry: 'fintech, e-commerce, and tech', tz: NL_TZ,
    painIntro: 'On an Angular project for an Amsterdam fintech, e-commerce, or tech company and stuck on a component, an RxJS stream, a production incident, or an Amsterdam interview?',
    heroVariant: 'Amsterdam has a thriving fintech, e-commerce, and tech scene with a mature freelance (ZZP) market building modern Angular applications. Our experts cover Dutch business hours and support live work, production incidents, interviews, and Amsterdam-market profile positioning.',
    marketFaqAnswer: 'Yes. Amsterdam Angular roles are strong in fintech, e-commerce, and tech, with an active ZZP market. We calibrate support to Amsterdam expectations and position profiles for local recruiter searches.',
    countryHub: nlHub, interview: euI, marketing: ukM, nearby: [['Utrecht Angular job support', 'utrecht-angular-job-support'], ['The Hague Angular job support', 'the-hague-angular-job-support']],
  }),
  intlCity({
    slug: 'rotterdam-angular-job-support', city: 'Rotterdam', region: 'the Netherlands', industry: 'logistics, port tech, and enterprise', tz: NL_TZ,
    painIntro: 'On an Angular project for a Rotterdam logistics, port-tech, or enterprise company and stuck on a component, an RxJS bug, a production incident, or a Rotterdam interview?',
    heroVariant: 'Rotterdam’s Angular demand is anchored in logistics, port technology, and enterprise operations, building monitoring and portal UIs. Our experts cover Dutch business hours and support live work, production incidents, interviews, and Rotterdam-market profile positioning.',
    marketFaqAnswer: 'Yes. Rotterdam Angular roles are strong in logistics and enterprise. We calibrate support to local expectations and position profiles for Rotterdam recruiter searches.',
    countryHub: nlHub, interview: euI, marketing: ukM, nearby: [['The Hague Angular job support', 'the-hague-angular-job-support']],
  }),
  intlCity({
    slug: 'utrecht-angular-job-support', city: 'Utrecht', region: 'the Netherlands', industry: 'tech, healthcare, and finance', tz: NL_TZ,
    painIntro: 'On an Angular project for a Utrecht tech, healthcare, or finance company and stuck on a component, an RxJS issue, a production incident, or a Utrecht interview?',
    heroVariant: 'Utrecht has a strong tech, healthcare, and finance base building modern Angular applications in the central Netherlands. Our experts cover Dutch business hours and support live work, production incidents, interviews, and Utrecht-market profile positioning.',
    marketFaqAnswer: 'Yes. Utrecht Angular roles span tech, healthcare, and finance. We calibrate support to local expectations and position profiles for Utrecht recruiter searches.',
    countryHub: nlHub, interview: euI, marketing: ukM, nearby: [['Amsterdam Angular job support', 'amsterdam-angular-job-support']],
  }),
  intlCity({
    slug: 'the-hague-angular-job-support', city: 'The Hague', region: 'the Netherlands', industry: 'government, legal tech, and enterprise', tz: NL_TZ,
    painIntro: 'On an Angular project for a The Hague government, legal-tech, or enterprise organisation and stuck on a component, an RxJS bug, a production incident, or a The Hague interview?',
    heroVariant: 'The Hague’s Angular demand centres on government, legal tech, and enterprise, with an emphasis on accessibility and long-lived applications. Our experts cover Dutch business hours and support live work, production incidents, interviews, and The Hague-market profile positioning.',
    marketFaqAnswer: 'Yes. The Hague Angular roles emphasize government and enterprise. We calibrate support to local expectations and position profiles for The Hague recruiter searches.',
    countryHub: nlHub, interview: euI, marketing: ukM, nearby: [['Rotterdam Angular job support', 'rotterdam-angular-job-support']],
  }),
  intlCity({
    slug: 'eindhoven-angular-job-support', city: 'Eindhoven', region: 'the Netherlands', industry: 'deep tech, hardware, and engineering', tz: NL_TZ,
    painIntro: 'On an Angular project for an Eindhoven deep-tech, hardware, or engineering company and stuck on a component, an RxJS issue, a production incident, or an Eindhoven interview?',
    heroVariant: 'Eindhoven is a deep-tech and hardware hub with engineering-driven companies building sophisticated Angular applications. Our experts cover Dutch business hours and support live work, production incidents, interviews, and Eindhoven-market profile positioning.',
    marketFaqAnswer: 'Yes. Eindhoven Angular roles skew toward deep tech, hardware, and engineering. We calibrate support to local expectations and position profiles for Eindhoven recruiter searches.',
    countryHub: nlHub, interview: euI, marketing: ukM,
  }),
];

// ─── France ──────────────────────────────────────────────────────────────────

const FR_TZ = 'Available across French business hours (CET/CEST).';
const frHub = 'france-angular-job-support';

export const franceCities: LandingPageConfig[] = [
  intlCity({
    slug: 'paris-angular-job-support', city: 'Paris', region: 'France', industry: 'banking, luxury retail, and enterprise', tz: FR_TZ,
    painIntro: 'On an Angular project for a Paris bank, luxury retailer, or ESN consultancy and stuck on a component, an RxJS stream, a production incident, or a Paris interview?',
    heroVariant: 'Paris is France’s largest tech market with heavy Angular demand across banking, luxury retail, and enterprise, much delivered through ESN consultancies. Our experts cover French business hours and support live work, production incidents, interviews, and Paris-market profile positioning.',
    marketFaqAnswer: 'Yes. Paris Angular roles span banking, luxury retail, and enterprise, frequently via ESN consultancies. We calibrate support to Paris expectations and position profiles for local recruiter searches.',
    countryHub: frHub, interview: euI, marketing: ukM, nearby: [['Lyon Angular job support', 'lyon-angular-job-support']],
  }),
  intlCity({
    slug: 'lyon-angular-job-support', city: 'Lyon', region: 'France', industry: 'pharma, tech, and enterprise', tz: FR_TZ,
    painIntro: 'On an Angular project for a Lyon pharma, tech, or enterprise company and stuck on a component, an RxJS bug, a production incident, or a Lyon interview?',
    heroVariant: 'Lyon has a strong pharma, tech, and enterprise base building modern Angular applications, France’s second tech hub. Our experts cover French business hours and support live work, production incidents, interviews, and Lyon-market profile positioning.',
    marketFaqAnswer: 'Yes. Lyon Angular roles span pharma, tech, and enterprise. We calibrate support to local expectations and position profiles for Lyon recruiter searches.',
    countryHub: frHub, interview: euI, marketing: ukM, nearby: [['Paris Angular job support', 'paris-angular-job-support']],
  }),
  intlCity({
    slug: 'toulouse-angular-job-support', city: 'Toulouse', region: 'France', industry: 'aerospace, deep tech, and engineering', tz: FR_TZ,
    painIntro: 'On an Angular project for a Toulouse aerospace, deep-tech, or engineering company and stuck on a component, an RxJS issue, a production incident, or a Toulouse interview?',
    heroVariant: 'Toulouse is France’s aerospace capital with deep-tech and engineering companies building sophisticated Angular applications. Our experts cover French business hours and support live work, production incidents, interviews, and Toulouse-market profile positioning.',
    marketFaqAnswer: 'Yes. Toulouse Angular roles skew toward aerospace, deep tech, and engineering. We calibrate support to local expectations and position profiles for Toulouse recruiter searches.',
    countryHub: frHub, interview: euI, marketing: ukM,
  }),
  intlCity({
    slug: 'marseille-angular-job-support', city: 'Marseille', region: 'France', industry: 'logistics, maritime, and enterprise', tz: FR_TZ,
    painIntro: 'On an Angular project for a Marseille logistics, maritime, or enterprise company and stuck on a component, an RxJS bug, a production incident, or a Marseille interview?',
    heroVariant: 'Marseille has a growing logistics, maritime, and enterprise technology base building Angular applications on France’s Mediterranean coast. Our experts cover French business hours and support live work, production incidents, interviews, and Marseille-market profile positioning.',
    marketFaqAnswer: 'Yes. Marseille Angular roles span logistics, maritime, and enterprise. We calibrate support to local expectations and position profiles for Marseille recruiter searches.',
    countryHub: frHub, interview: euI, marketing: ukM,
  }),
  intlCity({
    slug: 'lille-angular-job-support', city: 'Lille', region: 'France', industry: 'retail, e-commerce, and services', tz: FR_TZ,
    painIntro: 'On an Angular project for a Lille retail, e-commerce, or services company and stuck on a component, an RxJS issue, a production incident, or a Lille interview?',
    heroVariant: 'Lille has a strong retail, e-commerce, and services technology base building modern Angular applications in northern France. Our experts cover French business hours and support live work, production incidents, interviews, and Lille-market profile positioning.',
    marketFaqAnswer: 'Yes. Lille Angular roles span retail, e-commerce, and services. We calibrate support to local expectations and position profiles for Lille recruiter searches.',
    countryHub: frHub, interview: euI, marketing: ukM,
  }),
];

// ─── Sweden ──────────────────────────────────────────────────────────────────

const SE_TZ = 'Available across Swedish business hours (CET/CEST).';
const seHub = 'sweden-angular-job-support';

export const swedenCities: LandingPageConfig[] = [
  intlCity({
    slug: 'stockholm-angular-job-support', city: 'Stockholm', region: 'Sweden', industry: 'fintech, gaming, and product startups', tz: SE_TZ,
    painIntro: 'On an Angular project for a Stockholm fintech, gaming, or product company and stuck on a component, an RxJS stream, a production incident, or a Stockholm interview?',
    heroVariant: 'Stockholm has a renowned fintech, gaming, and product-startup scene building modern Angular applications with a strong engineering culture. Our experts cover Swedish business hours and support live work, production incidents, interviews, and Stockholm-market profile positioning.',
    marketFaqAnswer: 'Yes. Stockholm Angular roles are strong in fintech, gaming, and product companies. We calibrate support to Stockholm expectations and position profiles for local recruiter searches.',
    countryHub: seHub, interview: euI, marketing: ukM, nearby: [['Gothenburg Angular job support', 'gothenburg-angular-job-support']],
  }),
  intlCity({
    slug: 'gothenburg-angular-job-support', city: 'Gothenburg', region: 'Sweden', industry: 'automotive, engineering, and tech', tz: SE_TZ,
    painIntro: 'On an Angular project for a Gothenburg automotive, engineering, or tech company and stuck on a component, an RxJS bug, a production incident, or a Gothenburg interview?',
    heroVariant: 'Gothenburg’s Angular demand is anchored in automotive, engineering, and technology, building technical frontends for complex domains. Our experts cover Swedish business hours and support live work, production incidents, interviews, and Gothenburg-market profile positioning.',
    marketFaqAnswer: 'Yes. Gothenburg Angular roles are strong in automotive, engineering, and tech. We calibrate support to local expectations and position profiles for Gothenburg recruiter searches.',
    countryHub: seHub, interview: euI, marketing: ukM, nearby: [['Malmö Angular job support', 'malmo-angular-job-support']],
  }),
  intlCity({
    slug: 'malmo-angular-job-support', city: 'Malmö', region: 'Sweden', industry: 'tech startups, gaming, and digital', tz: SE_TZ,
    painIntro: 'On an Angular project for a Malmö tech, gaming, or digital company and stuck on a component, an RxJS issue, a production incident, or a Malmö interview?',
    heroVariant: 'Malmö has a growing tech-startup, gaming, and digital scene building modern Angular applications in southern Sweden, close to Copenhagen. Our experts cover Swedish business hours and support live work, production incidents, interviews, and Malmö-market profile positioning.',
    marketFaqAnswer: 'Yes. Malmö Angular roles span tech startups, gaming, and digital. We calibrate support to local expectations and position profiles for Malmö recruiter searches.',
    countryHub: seHub, interview: euI, marketing: ukM,
  }),
];

// ─── Switzerland ─────────────────────────────────────────────────────────────

const CH_TZ = 'Available across Swiss business hours (CET/CEST).';
const chHub = 'switzerland-angular-job-support';

export const switzerlandCities: LandingPageConfig[] = [
  intlCity({
    slug: 'zurich-angular-job-support', city: 'Zurich', region: 'Switzerland', industry: 'banking, insurance, and tech', tz: CH_TZ,
    painIntro: 'On an Angular project for a Zurich bank, insurer, or tech company and stuck on a component, an RxJS stream, a production incident, or a Zurich interview?',
    heroVariant: 'Zurich is Switzerland’s financial capital with heavy Angular demand across banking, insurance, and tech, building high-quality, compliance-aware applications. Our experts cover Swiss business hours and support live work, production incidents, interviews, and Zurich-market profile positioning.',
    marketFaqAnswer: 'Yes. Zurich Angular roles are dominated by banking, insurance, and tech. We calibrate support to Zurich expectations and position profiles for local recruiter searches.',
    countryHub: chHub, interview: euI, marketing: ukM, nearby: [['Basel Angular job support', 'basel-angular-job-support'], ['Bern Angular job support', 'bern-angular-job-support']],
  }),
  intlCity({
    slug: 'geneva-angular-job-support', city: 'Geneva', region: 'Switzerland', industry: 'banking, international organisations, and luxury', tz: CH_TZ,
    painIntro: 'On an Angular project for a Geneva bank, international organisation, or luxury company and stuck on a component, an RxJS bug, a production incident, or a Geneva interview?',
    heroVariant: 'Geneva’s Angular demand spans private banking, international organisations, and luxury, building secure, multilingual applications. Our experts cover Swiss business hours and support live work, production incidents, interviews, and Geneva-market profile positioning.',
    marketFaqAnswer: 'Yes. Geneva Angular roles span banking, international organisations, and luxury. We calibrate support to local expectations and position profiles for Geneva recruiter searches.',
    countryHub: chHub, interview: euI, marketing: ukM,
  }),
  intlCity({
    slug: 'basel-angular-job-support', city: 'Basel', region: 'Switzerland', industry: 'pharma, life sciences, and enterprise', tz: CH_TZ,
    painIntro: 'On an Angular project for a Basel pharma, life-sciences, or enterprise company and stuck on a component, an RxJS issue, a production incident, or a Basel interview?',
    heroVariant: 'Basel is a global pharma and life-sciences hub with Angular demand for validated, compliance-heavy enterprise applications. Our experts cover Swiss business hours and support live work, production incidents, interviews, and Basel-market profile positioning.',
    marketFaqAnswer: 'Yes. Basel Angular roles are strong in pharma and life sciences. We calibrate support to local expectations and position profiles for Basel recruiter searches.',
    countryHub: chHub, interview: euI, marketing: ukM, nearby: [['Zurich Angular job support', 'zurich-angular-job-support']],
  }),
  intlCity({
    slug: 'bern-angular-job-support', city: 'Bern', region: 'Switzerland', industry: 'government, telecom, and enterprise', tz: CH_TZ,
    painIntro: 'On an Angular project for a Bern government, telecom, or enterprise organisation and stuck on a component, an RxJS bug, a production incident, or a Bern interview?',
    heroVariant: 'Bern’s Angular demand centres on government, telecom, and enterprise, with an emphasis on accessibility and long-lived applications. Our experts cover Swiss business hours and support live work, production incidents, interviews, and Bern-market profile positioning.',
    marketFaqAnswer: 'Yes. Bern Angular roles emphasize government, telecom, and enterprise. We calibrate support to local expectations and position profiles for Bern recruiter searches.',
    countryHub: chHub, interview: euI, marketing: ukM, nearby: [['Zurich Angular job support', 'zurich-angular-job-support']],
  }),
];

// ─── Australia & New Zealand ─────────────────────────────────────────────────

const AU_TZ_E = 'Available across Australian Eastern business hours (AEST/AEDT).';
const AU_TZ_W = 'Available across Australian Western business hours (AWST).';
const AU_TZ_C = 'Available across Australian Central business hours (ACST/ACDT).';
const NZ_TZ = 'Available across New Zealand business hours (NZST/NZDT).';
const auI = 'angular-interview-proxy-support-australia';
const auM = 'angular-candidate-marketing-australia';
const auHub = 'australia-angular-job-support';
const nzHub = 'new-zealand-angular-job-support';

export const anzCities: LandingPageConfig[] = [
  intlCity({
    slug: 'sydney-angular-job-support', city: 'Sydney', region: 'Australia', industry: 'banking, fintech, and enterprise', tz: AU_TZ_E,
    painIntro: 'On an Angular project for a Sydney bank, fintech, or enterprise company and stuck on a component, an RxJS stream, a production incident, or a Sydney interview?',
    heroVariant: 'Sydney is Australia’s largest tech market with heavy Angular demand across banking, fintech, and enterprise, building customer and operations UIs. Our experts cover Australian Eastern hours and support live work, production incidents, interviews, and Sydney-market profile positioning.',
    marketFaqAnswer: 'Yes. Sydney Angular roles are strong in banking, fintech, and enterprise, with an active contract market. We calibrate support to Sydney expectations and position profiles for local recruiter searches.',
    countryHub: auHub, interview: auI, marketing: auM, nearby: [['Melbourne Angular job support', 'melbourne-angular-job-support'], ['Brisbane Angular job support', 'brisbane-angular-job-support']],
  }),
  intlCity({
    slug: 'melbourne-angular-job-support', city: 'Melbourne', region: 'Australia', industry: 'government, banking, and tech', tz: AU_TZ_E,
    painIntro: 'On an Angular project for a Melbourne government, banking, or tech company and stuck on a component, an RxJS bug, a production incident, or a Melbourne interview?',
    heroVariant: 'Melbourne has a strong government, banking, and technology scene building enterprise Angular applications. Our experts cover Australian Eastern hours and support live work, production incidents, interviews, and Melbourne-market profile positioning.',
    marketFaqAnswer: 'Yes. Melbourne Angular roles span government, banking, and tech. We calibrate support to Melbourne expectations and position profiles for local recruiter searches.',
    countryHub: auHub, interview: auI, marketing: auM, nearby: [['Sydney Angular job support', 'sydney-angular-job-support']],
  }),
  intlCity({
    slug: 'brisbane-angular-job-support', city: 'Brisbane', region: 'Australia', industry: 'government, mining tech, and enterprise', tz: AU_TZ_E,
    painIntro: 'On an Angular project for a Brisbane government, mining-tech, or enterprise organisation and stuck on a component, an RxJS issue, a production incident, or a Brisbane interview?',
    heroVariant: 'Brisbane’s Angular demand spans government, mining technology, and enterprise, building operations and portal UIs. Our experts cover Australian Eastern hours and support live work, production incidents, interviews, and Brisbane-market profile positioning.',
    marketFaqAnswer: 'Yes. Brisbane Angular roles span government, mining tech, and enterprise. We calibrate support to local expectations and position profiles for Brisbane recruiter searches.',
    countryHub: auHub, interview: auI, marketing: auM,
  }),
  intlCity({
    slug: 'perth-angular-job-support', city: 'Perth', region: 'Australia', industry: 'mining, energy, and enterprise', tz: AU_TZ_W,
    painIntro: 'On an Angular project for a Perth mining, energy, or enterprise company and stuck on a component, an RxJS bug, a production incident, or a Perth interview?',
    heroVariant: 'Perth’s Angular demand is anchored in mining, energy, and enterprise operations, building monitoring and control-room UIs. Our experts cover Australian Western hours and support live work, production incidents, interviews, and Perth-market profile positioning.',
    marketFaqAnswer: 'Yes. Perth Angular roles are strong in mining, energy, and enterprise. We calibrate support to local expectations and position profiles for Perth recruiter searches.',
    countryHub: auHub, interview: auI, marketing: auM,
  }),
  intlCity({
    slug: 'adelaide-angular-job-support', city: 'Adelaide', region: 'Australia', industry: 'defense, government, and enterprise', tz: AU_TZ_C,
    painIntro: 'On an Angular project for an Adelaide defense, government, or enterprise organisation and stuck on a component, an RxJS issue, a production incident, or an Adelaide interview?',
    heroVariant: 'Adelaide has a growing defense, government, and enterprise technology base building secure Angular applications. Our experts cover Australian Central hours and support live work, production incidents, interviews, and Adelaide-market profile positioning.',
    marketFaqAnswer: 'Yes. Adelaide Angular roles span defense, government, and enterprise. We calibrate support to local expectations and position profiles for Adelaide recruiter searches.',
    countryHub: auHub, interview: auI, marketing: auM,
  }),
  intlCity({
    slug: 'canberra-angular-job-support', city: 'Canberra', region: 'Australia', industry: 'government, defense, and public sector', tz: AU_TZ_E,
    painIntro: 'On an Angular project for a Canberra government, defense, or public-sector organisation and stuck on a component, an RxJS bug, a production incident, or a Canberra interview?',
    heroVariant: 'Canberra’s Angular demand is dominated by government, defense, and public sector, with a strong emphasis on accessibility, security, and long-lived applications. Our experts cover Australian Eastern hours and support live work, production incidents, interviews, and Canberra-market profile positioning.',
    marketFaqAnswer: 'Yes. Canberra Angular roles are dominated by government and public sector. We calibrate support to local expectations and position profiles for Canberra recruiter searches.',
    countryHub: auHub, interview: auI, marketing: auM,
  }),
  intlCity({
    slug: 'auckland-angular-job-support', city: 'Auckland', region: 'New Zealand', industry: 'banking, tech, and enterprise', tz: NZ_TZ,
    painIntro: 'On an Angular project for an Auckland bank, tech, or enterprise company and stuck on a component, an RxJS stream, a production incident, or an Auckland interview?',
    heroVariant: 'Auckland is New Zealand’s largest market with Angular demand across banking, tech, and enterprise, building customer and operations UIs. Our experts cover New Zealand business hours and support live work, production incidents, interviews, and Auckland-market profile positioning.',
    marketFaqAnswer: 'Yes. Auckland Angular roles span banking, tech, and enterprise. We calibrate support to Auckland expectations and position profiles for local recruiter searches.',
    countryHub: nzHub, interview: auI, marketing: auM, nearby: [['Wellington Angular job support', 'wellington-angular-job-support']],
  }),
  intlCity({
    slug: 'wellington-angular-job-support', city: 'Wellington', region: 'New Zealand', industry: 'government, tech, and digital', tz: NZ_TZ,
    painIntro: 'On an Angular project for a Wellington government, tech, or digital organisation and stuck on a component, an RxJS bug, a production incident, or a Wellington interview?',
    heroVariant: 'Wellington’s Angular demand centres on government, tech, and digital, with an emphasis on accessibility and modern engineering. Our experts cover New Zealand business hours and support live work, production incidents, interviews, and Wellington-market profile positioning.',
    marketFaqAnswer: 'Yes. Wellington Angular roles emphasize government, tech, and digital. We calibrate support to local expectations and position profiles for Wellington recruiter searches.',
    countryHub: nzHub, interview: auI, marketing: auM, nearby: [['Auckland Angular job support', 'auckland-angular-job-support']],
  }),
  intlCity({
    slug: 'christchurch-angular-job-support', city: 'Christchurch', region: 'New Zealand', industry: 'agritech, tech, and enterprise', tz: NZ_TZ,
    painIntro: 'On an Angular project for a Christchurch agritech, tech, or enterprise company and stuck on a component, an RxJS issue, a production incident, or a Christchurch interview?',
    heroVariant: 'Christchurch has a growing agritech, tech, and enterprise scene building modern Angular applications on New Zealand’s South Island. Our experts cover New Zealand business hours and support live work, production incidents, interviews, and Christchurch-market profile positioning.',
    marketFaqAnswer: 'Yes. Christchurch Angular roles span agritech, tech, and enterprise. We calibrate support to local expectations and position profiles for Christchurch recruiter searches.',
    countryHub: nzHub, interview: auI, marketing: auM,
  }),
];

// ─── Gulf (Dubai, Abu Dhabi, Riyadh, Jeddah) ─────────────────────────────────

const GST_TZ = 'Available across UAE business hours (GST).';
const AST_TZ = 'Available across Saudi business hours (AST).';
const uaeI = 'angular-interview-proxy-support-uae';
const uaeM = 'angular-candidate-marketing-uae';
const uaeHub = 'uae-angular-job-support';
const ksaHub = 'saudi-arabia-angular-job-support';

export const gulfCities: LandingPageConfig[] = [
  intlCity({
    slug: 'dubai-angular-job-support', city: 'Dubai', region: 'the UAE', industry: 'banking, real estate, retail, and government', tz: GST_TZ,
    painIntro: 'On an Angular project for a Dubai bank, real-estate, retail, or government digital programme and stuck on a component, an RxJS stream, a production incident, or a Dubai interview?',
    heroVariant: 'Dubai is a fast-growing digital hub with Angular demand across banking, real estate, retail, and government transformation programmes. Our experts cover UAE business hours and support live work, production incidents, interviews, and Dubai-market profile positioning.',
    marketFaqAnswer: 'Yes. Dubai Angular roles span banking, real estate, retail, and government digital programmes. We calibrate support to Dubai expectations and position profiles for local recruiter searches.',
    countryHub: uaeHub, interview: uaeI, marketing: uaeM, nearby: [['Abu Dhabi Angular job support', 'abu-dhabi-angular-job-support']],
  }),
  intlCity({
    slug: 'abu-dhabi-angular-job-support', city: 'Abu Dhabi', region: 'the UAE', industry: 'government, energy, and enterprise', tz: GST_TZ,
    painIntro: 'On an Angular project for an Abu Dhabi government, energy, or enterprise organisation and stuck on a component, an RxJS bug, a production incident, or an Abu Dhabi interview?',
    heroVariant: 'Abu Dhabi’s Angular demand is anchored in government, energy, and enterprise digital programmes, building secure portal and operations UIs. Our experts cover UAE business hours and support live work, production incidents, interviews, and Abu Dhabi-market profile positioning.',
    marketFaqAnswer: 'Yes. Abu Dhabi Angular roles are strong in government, energy, and enterprise. We calibrate support to local expectations and position profiles for Abu Dhabi recruiter searches.',
    countryHub: uaeHub, interview: uaeI, marketing: uaeM, nearby: [['Dubai Angular job support', 'dubai-angular-job-support']],
  }),
  intlCity({
    slug: 'riyadh-angular-job-support', city: 'Riyadh', region: 'Saudi Arabia', industry: 'government, banking, and enterprise', tz: AST_TZ,
    painIntro: 'On an Angular project for a Riyadh government programme, bank, or enterprise and stuck on a component, an RxJS issue, a production incident, or a Riyadh interview?',
    heroVariant: 'Riyadh is the centre of Saudi Arabia’s digital transformation, with strong Angular demand across government, banking, and enterprise programmes. Our experts cover Saudi business hours and support live work, production incidents, interviews, and Riyadh-market profile positioning.',
    marketFaqAnswer: 'Yes. Riyadh Angular roles are strong in government digital programmes, banking, and enterprise. We calibrate support to local expectations and position profiles for Riyadh recruiter searches.',
    countryHub: ksaHub, interview: uaeI, marketing: uaeM, nearby: [['Jeddah Angular job support', 'jeddah-angular-job-support']],
  }),
  intlCity({
    slug: 'jeddah-angular-job-support', city: 'Jeddah', region: 'Saudi Arabia', industry: 'commerce, logistics, and enterprise', tz: AST_TZ,
    painIntro: 'On an Angular project for a Jeddah commerce, logistics, or enterprise company and stuck on a component, an RxJS bug, a production incident, or a Jeddah interview?',
    heroVariant: 'Jeddah has strong commerce, logistics, and enterprise demand as a major Saudi business hub, building portal and operations Angular UIs. Our experts cover Saudi business hours and support live work, production incidents, interviews, and Jeddah-market profile positioning.',
    marketFaqAnswer: 'Yes. Jeddah Angular roles span commerce, logistics, and enterprise. We calibrate support to local expectations and position profiles for Jeddah recruiter searches.',
    countryHub: ksaHub, interview: uaeI, marketing: uaeM, nearby: [['Riyadh Angular job support', 'riyadh-angular-job-support']],
  }),
];

// ─── Batch export ────────────────────────────────────────────────────────────

export const angularIntlCityPages: LandingPageConfig[] = [
  ...canadaCities,
  ...ukCities,
  ...irelandCities,
  ...germanyCities,
  ...netherlandsCities,
  ...franceCities,
  ...swedenCities,
  ...switzerlandCities,
  ...anzCities,
  ...gulfCities,
];
