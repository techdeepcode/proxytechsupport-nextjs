import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import {
  angularPage,
  relatedLinks,
  marketingHighlights,
  marketingFaqs,
  EXISTING,
  HUB_LINK,
  JOB_LINK,
  INTERVIEW_HUB_LINK,
  GET_SCHEDULED_LINK,
  PROFILE_LINK,
  CANDIDATE_MARKETING_LINK,
} from './shared';

/**
 * Angular profile positioning + candidate marketing pages. These connect to the
 * existing candidate-marketing and get-interview-scheduled funnel. No guarantees
 * about offers/employment; no fabricated results or partnerships.
 */

const link = (t: [string, string]): LandingRelatedLink => ({ label: t[0], href: `/${t[1]}/` });

interface ProfileDef {
  slug: string;
  name: string; // page title focus
  entity: string; // marketingFaqs entity
  h1: string;
  tagline: string;
  painIntro: string;
  heroVariant: string;
  scenarios: string[];
  related: [string, string][];
}

function profilePage(d: ProfileDef): LandingPageConfig {
  return angularPage({
    slug: d.slug,
    title: `${d.name} — Get Found by Angular Recruiters`,
    description: `${d.name} for Angular developers — keyword engineering, profile optimization, and candidate marketing so Angular and frontend recruiters actually find you. Confidential, market-targeted.`,
    keywords: [
      `${d.name}`, 'Angular profile positioning', 'Angular candidate marketing',
      'Angular resume keywords', 'Angular developer LinkedIn', 'get Angular recruiter calls',
    ],
    h1: d.h1,
    tagline: d.tagline,
    heroEyebrow: d.name,
    painIntro: d.painIntro,
    heroVariant: d.heroVariant,
    geoLine: 'Profile positioning and candidate marketing for Angular professionals targeting roles in the USA, Canada, UK, Europe, Australia, and worldwide.',
    timezoneNote: 'Profile support and outreach aligned to your target market — US, Canadian, UK, European, or global.',
    highlights: marketingHighlights,
    faqs: marketingFaqs(d.entity),
    useCasesSection: {
      title: 'Profile Situations We Fix',
      cases: [
        ...d.scenarios,
        'A LinkedIn headline and summary recruiters scroll past for Angular roles',
        'A candidate targeting a new country whose profile is not positioned for that market',
      ],
    },
    proxySection: {
      title: 'From Positioning to Offer',
      intro: 'Positioning gets the calls; we help you convert them. Profile work pairs with interview and job support so the whole pipeline works end to end.',
      points: [
        'Angular keyword engineering for resume, LinkedIn, and job-board profiles',
        'Measurable-impact rewriting so your Angular work stands out',
        'Active candidate marketing and recruiter outreach to hiring managers',
        'Angular proxy interview support to convert the interviews you land',
        'Get-interview-scheduled support if you want a managed pipeline of calls',
      ],
    },
    bottomCTAHeading: `Get Your Angular Profile Positioned Now`,
    bottomCTABody: 'Stop getting filtered out. We engineer your Angular profile for recruiter visibility and market you actively. Contact ProxyTechSupport on WhatsApp now.',
    relatedLinks: relatedLinks({
      geoLinks: [PROFILE_LINK, GET_SCHEDULED_LINK],
      techLinks: d.related.slice(0, 2).map(link),
      problemLink: { label: 'Why your Angular resume gets no calls', href: '/why-angular-resume-gets-no-calls/' },
      proxyLink: INTERVIEW_HUB_LINK,
      additionalLinks: [
        ...d.related.slice(2).map(link),
        CANDIDATE_MARKETING_LINK, GET_SCHEDULED_LINK, INTERVIEW_HUB_LINK, JOB_LINK, HUB_LINK,
        EXISTING.candidateMarketing, EXISTING.getScheduled,
      ],
    }),
  });
}

const profileRelated: [string, string][] = [
  ['Angular developer resume optimization', 'angular-developer-resume-optimization'],
  ['Angular developer LinkedIn optimization', 'angular-developer-linkedin-optimization'],
  ['Angular developer recruiter keywords', 'angular-developer-recruiter-keywords'],
  ['Angular developer candidate marketing', 'angular-developer-candidate-marketing'],
];

const profileDefs: ProfileDef[] = [
  {
    slug: 'angular-developer-profile-positioning', name: 'Angular Developer Profile Positioning', entity: 'Angular developers',
    h1: 'Angular Developer Profile Positioning — Get Found by Recruiters',
    tagline: 'A strong developer with a weak profile gets no calls. We position your resume and LinkedIn for the exact Angular roles you want — and market you to recruiters.',
    painIntro: 'Applying to Angular roles and hearing nothing back? The problem is usually not your skill — it is that your profile does not surface in recruiter searches or pass ATS filters for modern Angular roles.',
    heroVariant: 'Angular recruiters search specifically — modern Angular, TypeScript, RxJS, NgRx, standalone components, signals, and enterprise frontend signals. A profile that reads like a generic frontend developer gets filtered out. We rebuild your resume and LinkedIn around what gets you found, then market that profile through active outreach.',
    scenarios: [
      'A capable Angular developer applying to many roles with no recruiter responses',
      'A frontend developer whose profile does not signal modern Angular depth',
      'A strong profile buried under vague bullets instead of measurable impact',
      'A developer whose profile misses the keywords recruiters actually search',
    ],
    related: profileRelated,
  },
  {
    slug: 'angular-developer-resume-optimization', name: 'Angular Developer Resume Optimization', entity: 'Angular developers',
    h1: 'Angular Developer Resume Optimization — Pass ATS and Get Read',
    tagline: 'We rewrite your Angular resume to pass ATS screening and get read by recruiters — keywords, measurable impact, and clean structure.',
    painIntro: 'Your Angular resume is getting filtered out before a human sees it, or read and ignored. Usually it is keyword gaps, buried impact, and structure that does not survive ATS parsing.',
    heroVariant: 'We rebuild your Angular resume around the terms recruiters and ATS filters screen for, surface measurable impact (performance, scale, delivery), and structure it so it parses cleanly and reads sharply. We tailor it to the specific roles and market you are targeting.',
    scenarios: [
      'A resume that is not getting past ATS screening',
      'Angular impact buried in vague, responsibility-only bullets',
      'A resume that reads generically instead of Angular-specific',
      'Structure and formatting that parses poorly in ATS',
    ],
    related: profileRelated,
  },
  {
    slug: 'angular-developer-linkedin-optimization', name: 'Angular Developer LinkedIn Optimization', entity: 'Angular developers',
    h1: 'Angular Developer LinkedIn Optimization — Get Found in Searches',
    tagline: 'We optimize your LinkedIn so Angular recruiters find you in searches — headline, summary, skills, and keyword coverage.',
    painIntro: 'Recruiters find candidates through LinkedIn search. If your headline, summary, and skills do not carry the right Angular signals, you simply do not appear.',
    heroVariant: 'We rebuild your LinkedIn headline, summary, experience, and skills around the Angular keywords recruiters search — modern Angular, TypeScript, RxJS, NgRx, standalone, signals — so you surface in searches and read as a strong candidate when they click through.',
    scenarios: [
      'A LinkedIn profile that does not appear in recruiter searches',
      'A headline and summary that recruiters scroll past',
      'Skills and keywords that miss what recruiters filter on',
      'A profile that undersells real Angular experience',
    ],
    related: profileRelated,
  },
  {
    slug: 'angular-developer-candidate-marketing', name: 'Angular Developer Candidate Marketing', entity: 'Angular developers',
    h1: 'Angular Developer Candidate Marketing — We Market You to Recruiters',
    tagline: 'We actively market your Angular profile to recruiters and hiring managers so opportunities come to you.',
    painIntro: 'Cold-applying is slow and low-yield. Candidate marketing flips it — we put your positioned Angular profile in front of the right recruiters and hiring managers.',
    heroVariant: 'We position your Angular profile and then actively market it — targeted outreach to recruiters, staffing firms, and hiring managers, plus application support — so your profile reaches decision-makers instead of sitting in a database. This pairs with interview support to convert the calls.',
    scenarios: [
      'A developer tired of cold-applying with little response',
      'A contractor who needs a steady pipeline of opportunities',
      'A candidate who wants outreach handled professionally',
      'A strong profile that just is not reaching the right people',
    ],
    related: [
      ['Angular developer job application support', 'angular-developer-job-application-support'],
      ['Angular developer profile positioning', 'angular-developer-profile-positioning'],
      ['Angular developer recruiter keywords', 'angular-developer-recruiter-keywords'],
      ['Get Angular interview scheduled', 'get-angular-interview-scheduled'],
    ],
  },
  {
    slug: 'angular-developer-job-application-support', name: 'Angular Developer Job Application Support', entity: 'Angular developers',
    h1: 'Angular Developer Job Application Support — Apply Smarter, Not Just More',
    tagline: 'We help you target the right Angular roles and apply effectively — tailored applications, outreach, and follow-up.',
    painIntro: 'Spraying applications rarely works. We help you target the right Angular roles, tailor each application, and follow up in a way that actually gets responses.',
    heroVariant: 'We help you run a smarter Angular job search — identifying well-matched roles, tailoring your resume and message per application, reaching out to the right people, and following up. Combined with profile positioning and outreach, this materially improves your response rate.',
    scenarios: [
      'A developer applying widely with a poor response rate',
      'Applications that are not tailored to the Angular role',
      'No outreach or follow-up beyond the application form',
      'Difficulty identifying which roles are actually a good fit',
    ],
    related: [
      ['Angular developer candidate marketing', 'angular-developer-candidate-marketing'],
      ['Angular developer profile positioning', 'angular-developer-profile-positioning'],
      ['Angular developer job search guide', 'angular-developer-job-search-guide'],
      ['Get Angular interview scheduled', 'get-angular-interview-scheduled'],
    ],
  },
  {
    slug: 'angular-developer-recruiter-keywords', name: 'Angular Developer Recruiter Keywords', entity: 'Angular developers',
    h1: 'Angular Developer Recruiter Keywords — Show Up in the Right Searches',
    tagline: 'We identify and place the exact Angular keywords recruiters and ATS filters search for across your resume and LinkedIn.',
    painIntro: 'Recruiters and ATS filters search on specific terms. If your profile misses them, you are invisible — no matter how good you are.',
    heroVariant: 'We map the exact Angular keywords recruiters search for by role and seniority — modern Angular, TypeScript, RxJS, NgRx, standalone components, signals, micro-frontends, and more — and place them naturally across your resume and LinkedIn so you surface in the right searches without keyword stuffing.',
    scenarios: [
      'A profile that misses the terms recruiters actually search',
      'Uncertainty about which keywords matter for your target roles',
      'Keyword stuffing that reads badly and helps little',
      'Different keyword needs for different Angular seniority levels',
    ],
    related: profileRelated,
  },
  {
    slug: 'angular-full-stack-profile-positioning', name: 'Angular Full-Stack Profile Positioning', entity: 'Angular full-stack developers',
    h1: 'Angular Full-Stack Profile Positioning — Frontend and Backend Signals',
    tagline: 'We position your profile to signal both strong Angular and real backend depth for full-stack roles.',
    painIntro: 'Full-stack profiles often signal one side well and the other weakly. We balance your Angular and backend signals so you match full-stack Angular roles.',
    heroVariant: 'We position your profile so it reads as a genuine Angular full-stack developer — strong modern Angular signals plus credible backend depth (Node.js, Java/Spring, .NET, or your stack) and the integration experience that full-stack roles want. Balanced, keyword-aligned, and market-targeted.',
    scenarios: [
      'A profile that signals frontend but not backend (or vice versa)',
      'Full-stack experience that reads as two disconnected halves',
      'Missing the integration and API signals full-stack roles want',
      'Positioning for full-stack roles across different backend stacks',
    ],
    related: [
      ['Angular full-stack developer job support', 'angular-full-stack-developer-job-support'],
      ['Angular developer profile positioning', 'angular-developer-profile-positioning'],
      ['Angular full-stack interview support', 'angular-full-stack-interview-support'],
      ['Angular developer candidate marketing', 'angular-developer-candidate-marketing'],
    ],
  },
  {
    slug: 'senior-angular-developer-profile-positioning', name: 'Senior Angular Developer Profile Positioning', entity: 'senior Angular developers',
    h1: 'Senior Angular Developer Profile Positioning — Signal Depth and Judgment',
    tagline: 'We position senior Angular profiles to signal architecture depth, impact, and technical judgment — not just years.',
    painIntro: 'Senior Angular roles want depth, judgment, and impact. If your profile just lists technologies and tenure, it reads mid-level.',
    heroVariant: 'We position your profile to signal senior Angular capability — architecture and design decisions, performance and scale impact, mentoring and technical leadership, and measurable outcomes — so recruiters and hiring managers see the seniority your experience actually reflects.',
    scenarios: [
      'A senior profile that reads mid-level because impact is understated',
      'Architecture and leadership contributions not surfaced',
      'Tenure listed without the judgment and outcomes behind it',
      'Positioning for senior versus lead tracks',
    ],
    related: [
      ['Angular tech lead profile positioning', 'angular-tech-lead-profile-positioning'],
      ['Angular senior developer interview support', 'angular-senior-developer-interview-support'],
      ['Angular developer profile positioning', 'angular-developer-profile-positioning'],
      ['Angular developer candidate marketing', 'angular-developer-candidate-marketing'],
    ],
  },
  {
    slug: 'angular-tech-lead-profile-positioning', name: 'Angular Tech Lead Profile Positioning', entity: 'Angular tech leads',
    h1: 'Angular Tech Lead Profile Positioning — Lead-Level Signals',
    tagline: 'We position your profile for Angular tech lead and lead engineer roles — architecture, delivery, and leadership.',
    painIntro: 'Lead roles want architecture ownership, delivery outcomes, and people leadership. A profile focused only on hands-on coding undersells that.',
    heroVariant: 'We position your profile for Angular tech lead roles — signalling architecture ownership, standards and code quality, delivery outcomes, and mentoring and team leadership, while keeping the hands-on Angular depth credible. Targeted to the lead roles and market you want.',
    scenarios: [
      'A hands-on profile that undersells leadership and architecture',
      'Delivery and team outcomes not surfaced clearly',
      'Positioning for tech lead versus engineering manager tracks',
      'Balancing lead signals with credible hands-on depth',
    ],
    related: [
      ['Senior Angular developer profile positioning', 'senior-angular-developer-profile-positioning'],
      ['Angular lead developer interview support', 'angular-lead-developer-interview-support'],
      ['Angular architecture support', 'angular-architecture-support'],
      ['Angular developer candidate marketing', 'angular-developer-candidate-marketing'],
    ],
  },
];

// ─── Country candidate-marketing pages ───────────────────────────────────────

interface MarketingCountryDef {
  slug: string;
  country: string;
  tz: string;
  interviewSlug: string;
  scheduledSlug: string;
  jobSlug: string;
}

function marketingCountryPage(d: MarketingCountryDef): LandingPageConfig {
  return angularPage({
    slug: d.slug,
    title: `Angular Candidate Marketing ${d.country} — Get Recruiter Calls`,
    description: `Angular candidate marketing in ${d.country} — profile positioning and active recruiter outreach so Angular recruiters in ${d.country} find you and interviews get scheduled. Confidential, market-targeted.`,
    keywords: [
      `Angular candidate marketing ${d.country}`, `Angular profile positioning ${d.country}`,
      `Angular recruiter outreach ${d.country}`, `get Angular interviews ${d.country}`,
      `Angular resume help ${d.country}`, `Angular job search ${d.country}`,
    ],
    h1: `Angular Candidate Marketing in ${d.country} — Get Found and Get Calls`,
    tagline: `We position your Angular profile for the ${d.country} market and actively market you to ${d.country} recruiters and hiring managers.`,
    heroEyebrow: `Angular Candidate Marketing ${d.country}`,
    painIntro: `Targeting Angular roles in ${d.country} but not getting calls? Positioning and visibility for the ${d.country} market — not just skill — usually decide who recruiters find.`,
    heroVariant: `We position your Angular resume and LinkedIn for the ${d.country} market — the role titles, keywords, and expectations local recruiters search — then run active candidate marketing and outreach in ${d.country}. Once calls come in, we back you with proxy interview support and real-time job support. No guarantees on offers — we maximize quality interview activity.`,
    geoLine: `Helping Angular professionals get found and get interviews across ${d.country}.`,
    timezoneNote: d.tz,
    highlights: marketingHighlights,
    faqs: marketingFaqs(`Angular professionals in ${d.country}`),
    useCasesSection: {
      title: `Who We Help in ${d.country}`,
      cases: [
        `A capable Angular developer in ${d.country} getting few recruiter calls`,
        `A candidate relocating to or targeting ${d.country} who needs local positioning`,
        `A contractor in ${d.country} who needs a steady pipeline`,
        `A profile that does not surface in ${d.country} recruiter searches`,
        `A developer who wants ${d.country} outreach handled professionally`,
        `A strong engineer whose ${d.country}-market impact is understated`,
      ],
    },
    proxySection: {
      title: `Angular Careers in ${d.country} — End to End`,
      intro: `We help you get found, get the interview, clear it, and keep the role in ${d.country}.`,
      points: [
        `Angular profile positioning for the ${d.country} market`,
        `Active recruiter and hiring-manager outreach in ${d.country}`,
        'Calibrated mock interviews and real-time proxy interview support',
        `Get-interview-scheduled support for ${d.country}`,
        `Real-time Angular job support once you start`,
      ],
    },
    bottomCTAHeading: `Want More Angular Interviews in ${d.country}? Start Now`,
    bottomCTABody: `We position and market your Angular profile for the ${d.country} market. Contact ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [PROFILE_LINK, link([`Angular job support ${d.country}`, d.jobSlug])],
      techLinks: [
        { label: 'Angular developer resume optimization', href: '/angular-developer-resume-optimization/' },
        { label: 'Angular developer recruiter keywords', href: '/angular-developer-recruiter-keywords/' },
      ],
      problemLink: { label: 'Why your Angular resume gets no calls', href: '/why-angular-resume-gets-no-calls/' },
      proxyLink: link([`Angular interview proxy support ${d.country}`, d.interviewSlug]),
      additionalLinks: [
        link([`Get Angular interview scheduled ${d.country}`, d.scheduledSlug]),
        CANDIDATE_MARKETING_LINK, PROFILE_LINK, INTERVIEW_HUB_LINK, GET_SCHEDULED_LINK, HUB_LINK,
        EXISTING.candidateMarketing,
      ],
    }),
  });
}

const marketingCountries: MarketingCountryDef[] = [
  { slug: 'angular-candidate-marketing-usa', country: 'the USA', tz: 'Aligned to US time zones and recruiter hours.', interviewSlug: 'angular-interview-proxy-support-usa', scheduledSlug: 'get-angular-interview-scheduled-usa', jobSlug: 'usa-angular-job-support' },
  { slug: 'angular-candidate-marketing-canada', country: 'Canada', tz: 'Aligned to Canadian time zones and recruiter hours.', interviewSlug: 'angular-interview-proxy-support-canada', scheduledSlug: 'get-angular-interview-scheduled-canada', jobSlug: 'canada-angular-job-support' },
  { slug: 'angular-candidate-marketing-uk', country: 'the UK', tz: 'Aligned to UK business hours and recruiter cycles.', interviewSlug: 'angular-interview-proxy-support-uk', scheduledSlug: 'get-angular-interview-scheduled-uk', jobSlug: 'uk-angular-job-support' },
  { slug: 'angular-candidate-marketing-ireland', country: 'Ireland', tz: 'Aligned to Irish business hours and recruiter cycles.', interviewSlug: 'angular-interview-proxy-support-ireland', scheduledSlug: 'get-angular-interview-scheduled-ireland', jobSlug: 'ireland-angular-job-support' },
  { slug: 'angular-candidate-marketing-germany', country: 'Germany', tz: 'Aligned to German business hours and recruiter cycles.', interviewSlug: 'angular-interview-proxy-support-germany', scheduledSlug: 'get-angular-interview-scheduled-germany', jobSlug: 'germany-angular-job-support' },
  { slug: 'angular-candidate-marketing-australia', country: 'Australia', tz: 'Aligned to Australian business hours and recruiter cycles.', interviewSlug: 'angular-interview-proxy-support-australia', scheduledSlug: 'get-angular-interview-scheduled-australia', jobSlug: 'australia-angular-job-support' },
  { slug: 'angular-candidate-marketing-singapore', country: 'Singapore', tz: 'Aligned to Singapore business hours and recruiter cycles.', interviewSlug: 'angular-interview-proxy-support-singapore', scheduledSlug: 'get-angular-interview-scheduled-singapore', jobSlug: 'singapore-angular-job-support' },
  { slug: 'angular-candidate-marketing-uae', country: 'the UAE', tz: 'Aligned to UAE business hours and recruiter cycles.', interviewSlug: 'angular-interview-proxy-support-uae', scheduledSlug: 'get-angular-interview-scheduled-uae', jobSlug: 'uae-angular-job-support' },
];

// ─── Batch export ────────────────────────────────────────────────────────────

export const angularProfilePages: LandingPageConfig[] = [
  ...profileDefs.map(profilePage),
  ...marketingCountries.map(marketingCountryPage),
];
