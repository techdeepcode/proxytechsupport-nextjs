import type {
  LandingPageConfig,
  LandingHighlight,
  LandingFaqItem,
  LandingRelatedLink,
  LandingRelatedLinks,
} from '../landing-pages';

/**
 * Shared building blocks for the additive 500-COMPANY employer cluster — the Tier A
 * company authority HUBS at /{company}-career-support/.
 *
 * Each hub is data-driven but NOT templated-thin: every company supplies its own
 * verified engineering facts (products, disciplines, roles, technologies, interview
 * focus, hiring locations, cross-links). The builder weaves those company-specific
 * arrays into the highlights, use-cases, proxy section and FAQs so no two hubs share
 * structurally identical body copy.
 *
 * SEARCH-INTENT: hubs are informational + navigational (the company's interview &
 * engineering landscape). Commercial "proxy" intent is covered as a clearly-labelled
 * section and links out to the site's existing proxy interview / proxy job support.
 *
 * Facts reflect publicly documented, current (September 2026) employer engineering
 * realities. ProxyTechSupport is an INDEPENDENT technical & career-support provider and
 * is NOT affiliated with, endorsed by, or sponsored by any listed employer.
 */

export const BASE_URL = 'https://proxytechsupport.com';
export const LASTMOD = '2026-09-19T12:00:00.000Z';

export const DISCLAIMER =
  'ProxyTechSupport is an independent technical and career-support provider and is not affiliated with, endorsed by, or sponsored by this company. We do not replace or impersonate candidates and we do not guarantee interviews, selection or employment — candidates remain responsible for participating in and representing themselves throughout their interview and employment process.';

// ─── Verified existing site routes (cross-link, never recreate) ──────────────
export const EX = {
  techCompanies: { label: 'All tech companies directory', href: '/tech-companies/' } as LandingRelatedLink,
  proxyInterview: { label: 'Proxy interview support', href: '/proxy-interview-support/' } as LandingRelatedLink,
  proxyJob: { label: 'Proxy job support', href: '/proxy-job-support/' } as LandingRelatedLink,
  getScheduled: { label: 'Get interview scheduled', href: '/get-interview-scheduled/' } as LandingRelatedLink,
  candidateMarketing: { label: 'Candidate marketing & profile positioning', href: '/job-application-candidate-marketing/' } as LandingRelatedLink,
  jobUsa: { label: 'IT job support USA', href: '/job-support-usa/' } as LandingRelatedLink,
  jobCanada: { label: 'IT job support Canada', href: '/job-support-canada/' } as LandingRelatedLink,
  jobUk: { label: 'IT job support UK', href: '/job-support-uk/' } as LandingRelatedLink,
  knowledgeBase: { label: 'Knowledge base guides', href: '/knowledge-base/' } as LandingRelatedLink,
  blog: { label: 'Developer support articles', href: '/blog/' } as LandingRelatedLink,
  azure: { label: 'Azure job support guide', href: '/azure-job-support-guide/' } as LandingRelatedLink,
  aws: { label: 'AWS job support guide', href: '/aws-job-support-guide/' } as LandingRelatedLink,
  kubernetes: { label: 'Kubernetes job support guide', href: '/kubernetes-job-support-guide/' } as LandingRelatedLink,
  devopsUsa: { label: 'DevOps job support USA', href: '/devops-job-support-usa/' } as LandingRelatedLink,
  sreUsa: { label: 'SRE job support USA', href: '/sre-job-support-usa/' } as LandingRelatedLink,
  cloudUsa: { label: 'Cloud job support USA', href: '/cloud-job-support-usa/' } as LandingRelatedLink,
  aimlProxy: { label: 'AI/ML proxy interview support', href: '/ai-ml-proxy-interview-support/' } as LandingRelatedLink,
  dataEng: { label: 'Data engineering job support guide', href: '/data-engineering-job-support-guide/' } as LandingRelatedLink,
  cyber: { label: 'Cybersecurity & DevSecOps job support guide', href: '/cybersecurity-devsecops-job-support-guide/' } as LandingRelatedLink,
  mlops: { label: 'MLOps job support', href: '/mlops-job-support/' } as LandingRelatedLink,
  rag: { label: 'RAG job support', href: '/rag-job-support/' } as LandingRelatedLink,
  llm: { label: 'LLM job support', href: '/llm-job-support/' } as LandingRelatedLink,
  genai: { label: 'Generative AI job support', href: '/generative-ai-job-support/' } as LandingRelatedLink,
  agentic: { label: 'Agentic AI job support', href: '/agentic-ai-job-support/' } as LandingRelatedLink,
  javaGuide: { label: 'Java job support guide', href: '/java-job-support-guide/' } as LandingRelatedLink,
  reactGuide: { label: 'React job support guide', href: '/react-job-support-guide/' } as LandingRelatedLink,
  dotnetGuide: { label: '.NET job support guide', href: '/dotnet-job-support-guide/' } as LandingRelatedLink,
  googleVertex: { label: 'Google Vertex AI job support', href: '/google-vertex-ai-job-support/' } as LandingRelatedLink,
  openaiApi: { label: 'OpenAI API job support', href: '/openai-api-job-support/' } as LandingRelatedLink,
  databricksMl: { label: 'Databricks ML job support', href: '/databricks-ml-job-support/' } as LandingRelatedLink,
  snowflakeCortex: { label: 'Snowflake Cortex AI job support', href: '/snowflake-cortex-ai-job-support/' } as LandingRelatedLink,
};

// ─── Company hub facts ───────────────────────────────────────────────────────

export interface CompanyHubFacts {
  slug: string;
  name: string;
  /** Short category line, e.g. "Big Tech • Cloud • AI". */
  categoryLine: string;
  /** 1–2 sentence, verified engineering overview (September 2026). */
  overview: string;
  /** Major products / platforms candidates should know. */
  products: string[];
  /** Engineering disciplines / org areas. */
  disciplines: string[];
  /** Common engineering role families. */
  roles: string[];
  /** Relevant technologies / stack. */
  technologies: string[];
  /** Interview themes (coding / system design / domain / behavioral). */
  interviewFocus: string[];
  /** Meaningful hiring locations (optional). */
  locations?: string[];
  /** Cross-links to EXISTING relevant site pages (2–4). */
  existingLinks: LandingRelatedLink[];
  /** Links to OTHER company hubs / dashboard (added automatically + these). */
  peerLinks?: LandingRelatedLink[];
  /** Optional extra keyword phrases. */
  extraKeywords?: string[];
}

function list(items: string[], max = items.length): string {
  const a = items.slice(0, max);
  if (a.length <= 1) return a.join('');
  if (a.length === 2) return `${a[0]} and ${a[1]}`;
  return `${a.slice(0, -1).join(', ')} and ${a[a.length - 1]}`;
}

// ─── FAQ generator (seeded by company facts → materially unique per hub) ─────

export function companyHubFaqs(f: CompanyHubFacts): LandingFaqItem[] {
  const roleList = list(f.roles, 5);
  const techList = list(f.technologies, 6);
  const focusList = list(f.interviewFocus, 4);
  return [
    {
      question: `Do you provide interview support for ${f.name}?`,
      answer: `Yes. We provide technical interview support and proxy interview support for ${f.name} engineering roles — including ${roleList}. Sessions are calibrated to the rounds ${f.name} actually uses for your profile: ${focusList}. You attend and complete your own interview while our in-house expert provides real-time technical guidance. We do not guarantee selection or employment — hiring decisions are made solely by ${f.name}.`,
    },
    {
      question: `Which ${f.name} engineering roles and technologies do you cover?`,
      answer: `We support ${roleList} and related roles, across technologies such as ${techList}. For deep areas we connect you to our existing technology support — cloud, DevOps/SRE, data engineering, AI/ML and security — so the help maps to ${f.name}'s real engineering ecosystem (${list(f.products, 4)}) rather than a generic script.`,
    },
    {
      question: `What is ${f.name} proxy interview support and how does it work?`,
      answer: `${f.name} proxy interview support (also searched as ${f.name} interview proxy support) is real-time, discreet technical help during your live ${f.name} interview — coding and data structures, system design, and role-specific rounds. Our expert supports you in real time; you remain the person interviewing and answering. It is confidential, NDAs are available on request, and same-day start is possible. We never impersonate candidates.`,
    },
    {
      question: `Can you help after I join ${f.name} — job support and production issues?`,
      answer: `Yes. Our ${f.name} proxy job support gives you an experienced engineer alongside you during your working hours for real tasks — implementation, debugging, design and code review, ${list(f.technologies, 4)}, production incidents and project delivery. "Proxy" means expert technical support and mentoring, not replacing you or performing your job duties.`,
    },
    {
      question: `Is ProxyTechSupport affiliated with ${f.name}?`,
      answer: DISCLAIMER,
    },
    {
      question: 'How do I get started and is it confidential?',
      answer:
        'Message us on WhatsApp with your target role, level and interview date (or your project stack). We match you with the right in-house expert immediately — most engagements start the same day. Every engagement is fully confidential and NDAs are available on request.',
    },
  ];
}

// ─── Hub builder ─────────────────────────────────────────────────────────────

export function companyHub(f: CompanyHubFacts): LandingPageConfig {
  const highlights: LandingHighlight[] = [
    {
      title: `${f.name} Engineering & Product Landscape`,
      description: `${f.overview} Key products and platforms include ${list(f.products, 6)}. Engineering spans ${list(f.disciplines, 5)}.`,
    },
    {
      title: `${f.name} Interview Landscape`,
      description: `${f.name} technical interviews for these roles typically assess ${list(f.interviewFocus, 5)}. We prepare and support you on exactly these areas — grounded in publicly documented ${f.name} hiring information, not fabricated interview questions.`,
    },
    {
      title: `Roles & Technologies We Support`,
      description: `Role families include ${list(f.roles, 6)}. Relevant technologies: ${list(f.technologies, 7)} — cross-linked to our deep existing technology support so you get real implementation-level help.`,
    },
    {
      title: `Interview, Proxy & Job Support Options`,
      description: `${f.name} technical interview support and proxy interview support (you attend your own interview), Get Interview Scheduled and candidate marketing to land the calls, and ${f.name} proxy job support once you are in the role. Independent of ${f.name}; no guarantees of interviews or offers.`,
    },
  ];

  const cases = [
    `Preparing for a ${f.name} ${f.roles[0]} loop and want real-time support on ${list(f.interviewFocus, 2)}.`,
    `Targeting ${f.name} ${f.roles[1] ?? f.roles[0]} roles and need your resume and LinkedIn positioned for the right level.`,
    `In a live ${f.name} interview and want discreet, expert proxy interview support on coding and system design.`,
    `Just joined ${f.name} and need proxy job support on ${list(f.technologies, 3)} to hit your first deliverables.`,
    `Facing a production incident or on-call pressure on a ${f.name}-style ${list(f.disciplines, 2)} stack.`,
    `Comparing ${f.name} against other employers in our directory before you decide where to focus.`,
  ];

  const proxyPoints = [
    `Real-time proxy interview support for ${f.name} — coding and data structures, ${list(f.interviewFocus, 3)}.`,
    `Role-specific preparation for ${list(f.roles, 4)}.`,
    `Proxy job support after you join: ${list(f.technologies, 5)}, debugging, design/code review and production incidents.`,
    `Profile engineering and candidate marketing to get more relevant ${f.name} interview calls.`,
    `Confidential, in-house experts, same-day start, NDA on request — you always attend and complete your own interview.`,
  ];

  const relatedLinks: LandingRelatedLinks = {
    geoLinks: [EX.jobUsa, EX.jobCanada],
    techLinks: f.existingLinks.slice(0, 4),
    problemLink: EX.getScheduled,
    proxyLink: EX.proxyInterview,
    blogLink: EX.blog,
    additionalLinks: [EX.techCompanies, EX.candidateMarketing, EX.proxyJob, ...(f.peerLinks ?? [])],
  };

  const keywords = [
    `${f.name} interview support`,
    `${f.name} proxy interview support`,
    `${f.name} interview proxy`,
    `${f.name} technical interview support`,
    `${f.name} job support`,
    `${f.name} proxy job support`,
    `${f.name} ${f.roles[0]} interview`,
    `${f.name} engineering interview`,
    ...(f.extraKeywords ?? []),
  ];

  return {
    slug: `${f.slug}-career-support`,
    title: `${f.name} Interview & Job Support — Engineering Careers, Roles & Proxy Help`,
    description: `${f.name} technical interview support, proxy interview support and job support across ${list(f.roles, 3)} and technologies like ${list(f.technologies, 3)}. Independent expert help — you attend your own interview. Same-day start.`,
    canonical: `${BASE_URL}/${f.slug}-career-support/`,
    keywords,
    ogTitle: `${f.name} Technical Interview & Job Support`,
    ogDescription: `Interview landscape, engineering roles, technologies and proxy interview / job support for ${f.name}. Independent of ${f.name}.`,
    h1: `${f.name} Technical Careers, Interview Landscape & Engineering Support`,
    tagline: `${f.categoryLine}`,
    heroEyebrow: 'Tech Companies',
    painIntro: `Interviewing with ${f.name}, or already in the role and under delivery pressure? Get independent, expert technical interview support, proxy interview support and job support mapped to ${f.name}'s real engineering ecosystem — you always attend and complete your own interview.`,
    heroVariant: `${f.overview}`,
    geoLine: `Support for ${f.name} candidates and engineers across the USA, Canada, UK, Europe, India, Australia, Singapore and worldwide — remote and aligned to your local business hours.`,
    timezoneNote: 'Available across US, Canada, UK, European, India, Australian and Asia-Pacific business hours, plus 24/7 for urgent needs.',
    techSnippet: `Relevant ${f.name} technologies: ${list(f.technologies, 8)}.`,
    highlights,
    faqs: companyHubFaqs(f),
    useCasesSection: {
      title: `How We Support ${f.name} Candidates & Engineers`,
      cases,
    },
    proxySection: {
      title: `${f.name} Proxy Interview & Real-Time Job Support`,
      intro: `Two complementary services for ${f.name}: real-time proxy interview support while you interview, and proxy job support once you are in the role. Both are confidential and delivered by in-house experts. We are independent of ${f.name} and never impersonate candidates.`,
      points: proxyPoints,
    },
    relatedLinks,
    bottomCTAHeading: `Interviewing at ${f.name} — or Already In the Role?`,
    bottomCTABody: `In-house experts available same-day for ${f.name} technical interview support, proxy interview support (you attend your own interview), Get Interview Scheduled, candidate marketing and proxy job support. Independent of ${f.name}; no guarantees of interviews or offers. Talk to ProxyTechSupport on WhatsApp now.`,
    lastmod: LASTMOD,
  };
}
