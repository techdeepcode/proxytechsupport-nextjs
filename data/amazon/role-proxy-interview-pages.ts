import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import {
  amazonServicePage,
  relatedLinks,
  proxyInterviewHighlights,
  amazonProxyInterviewFaqs,
  AMAZON_HUB_LINK,
  AMAZON_PROXY_INTERVIEW_LINK,
  AMAZON_LP_HUB_LINK,
  AMAZON_SYSTEM_DESIGN_LINK,
  AMAZON_CODING_LINK,
  AMAZON_GET_SCHEDULED_LINK,
  AMAZON_CANDIDATE_MARKETING_LINK,
  AMAZON_PROXY_JOB_LINK,
} from './shared';

/**
 * Amazon role-specific PROXY INTERVIEW SUPPORT cluster — COMMERCIAL (Type B).
 * "proxy interview support" appears in slug, title, H1, hero eyebrow, first
 * paragraph, an H2 (proxySection), FAQ, meta description and internal anchors.
 * Each page links to its informational role interview page (Type A). You attend
 * your own interview; ProxyTechSupport is independent of Amazon and gives no
 * guarantee of selection or employment.
 */

interface RoleProxyInput {
  slug: string;
  role: string;
  title: string;
  focus: string; // technical areas this role's interview covers
  infoLink: LandingRelatedLink; // matching informational role page
  techLinks: LandingRelatedLink[];
  extraLinks?: LandingRelatedLink[];
}

function proxyInterviewPage(input: RoleProxyInput): LandingPageConfig {
  const { slug, role, focus, infoLink } = input;
  return amazonServicePage({
    slug,
    title: input.title,
    description: `Amazon ${role} proxy interview support — real-time expert help for ${focus} and the Leadership Principles rounds. You attend your own interview. Independent of Amazon.`,
    keywords: [
      `amazon ${role.toLowerCase()} proxy interview support`, `amazon ${role.toLowerCase()} interview proxy support`,
      `amazon ${role.toLowerCase()} proxy interview`, `amazon ${role.toLowerCase()} interview support`,
      'amazon proxy interview support', 'amazon technical proxy interview support',
    ],
    ogTitle: `Amazon ${role} Proxy Interview Support`,
    h1: `Amazon ${role} Proxy Interview Support`,
    tagline: `Technical proxy interview support for the Amazon ${role} loop — ${focus} and the behavioral Leadership Principles.`,
    heroEyebrow: `Amazon ${role} Proxy Interview Support`,
    painIntro: `Facing an Amazon ${role} interview and want an expert who knows exactly how Amazon interviews this role? Amazon ${role} proxy interview support (also searched as ${role} interview proxy support) gives you real-time expert support for ${focus} and the Leadership Principles.`,
    heroVariant: `We provide technical proxy interview support for the Amazon ${role} loop: ${focus}, plus the behavioral Leadership Principles rounds and the Bar Raiser. We calibrate to your exact level, team and format and run a pre-interview alignment session. Proxy interview support means real-time expert technical help on the exact rounds your interview covers — you attend and complete your own interview. ProxyTechSupport is independent of Amazon and does not guarantee selection or employment.`,
    highlights: proxyInterviewHighlights,
    faqs: amazonProxyInterviewFaqs(`Amazon ${role}`),
    proxySection: {
      title: `What Amazon ${role} Proxy Interview Support Covers`,
      intro: `Role-specific, real-time support for every stage of the Amazon ${role} loop — you attend your own interview. We help you reason clearly and tell truthful, well-structured Leadership Principles stories.`,
      points: [
        `${focus}`,
        'Behavioral Leadership Principles rounds and the Bar Raiser — STAR stories with real ownership and metrics',
        'Calibration to your exact level, team and interview format',
        'A pre-interview alignment session and live, real-time interview support',
        'Independent of Amazon — no impersonation, no guarantee of selection',
      ],
    },
    bottomCTAHeading: `Get Amazon ${role} Proxy Interview Support Now`,
    bottomCTABody: `In-house experts provide real-time ${role} interview support and Leadership Principles support for your loop. You attend your own interview; we back you to perform. Independent of Amazon; no guarantee of selection. Talk to ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [AMAZON_PROXY_INTERVIEW_LINK, AMAZON_HUB_LINK],
      techLinks: input.techLinks,
      problemLink: infoLink,
      proxyLink: AMAZON_PROXY_JOB_LINK,
      additionalLinks: [
        AMAZON_LP_HUB_LINK, AMAZON_GET_SCHEDULED_LINK, AMAZON_CANDIDATE_MARKETING_LINK, ...(input.extraLinks ?? []),
      ],
    }),
  });
}

const CODING = AMAZON_CODING_LINK;
const SYSDESIGN = AMAZON_SYSTEM_DESIGN_LINK;

export const amazonRoleProxyInterviewPages: LandingPageConfig[] = [
  proxyInterviewPage({
    slug: 'amazon-sde-proxy-interview-support', role: 'SDE',
    title: 'Amazon SDE Proxy Interview Support | Coding, System Design & LPs',
    focus: 'coding, data structures, algorithms, system design and technical discussions',
    infoLink: { label: 'Amazon SDE interview (guide)', href: '/amazon-sde-interview/' },
    techLinks: [CODING, SYSDESIGN],
    extraLinks: [{ label: 'Amazon SDE II proxy interview support', href: '/amazon-sde-ii-proxy-interview-support/' }, { label: 'Amazon SDE proxy job support', href: '/amazon-sde-proxy-job-support/' }],
  }),
  proxyInterviewPage({
    slug: 'amazon-sde-ii-proxy-interview-support', role: 'SDE II',
    title: 'Amazon SDE II Proxy Interview Support | Coding & System Design',
    focus: 'coding, data structures, algorithms, system design, technical discussions and Leadership Principle rounds',
    infoLink: { label: 'Amazon SDE II interview process (guide)', href: '/amazon-sde-ii-interview-process/' },
    techLinks: [CODING, SYSDESIGN],
    extraLinks: [{ label: 'Amazon SDE III proxy interview support', href: '/amazon-sde-iii-proxy-interview-support/' }, { label: 'Amazon SDE II proxy job support', href: '/amazon-sde-ii-proxy-job-support/' }],
  }),
  proxyInterviewPage({
    slug: 'amazon-sde-iii-proxy-interview-support', role: 'SDE III',
    title: 'Amazon SDE III Proxy Interview Support | Advanced System Design',
    focus: 'advanced system design, coding, technical leadership discussions and ambiguity',
    infoLink: { label: 'Amazon SDE III interview process (guide)', href: '/amazon-sde-iii-interview-process/' },
    techLinks: [SYSDESIGN, { label: 'Amazon high-level design interview', href: '/amazon-high-level-design-interview/' }],
    extraLinks: [{ label: 'Amazon Senior SDE proxy interview support', href: '/amazon-senior-sde-proxy-interview-support/' }],
  }),
  proxyInterviewPage({
    slug: 'amazon-senior-sde-proxy-interview-support', role: 'Senior SDE',
    title: 'Amazon Senior SDE Proxy Interview Support | Design & Influence',
    focus: 'advanced system design, cross-team influence, coding and senior technical judgment',
    infoLink: { label: 'Amazon Senior SDE interview (guide)', href: '/amazon-senior-sde-interview/' },
    techLinks: [SYSDESIGN, { label: 'Amazon high-level design interview', href: '/amazon-high-level-design-interview/' }],
    extraLinks: [{ label: 'Amazon Senior SDE proxy job support', href: '/amazon-senior-sde-proxy-job-support/' }],
  }),
  proxyInterviewPage({
    slug: 'amazon-front-end-engineer-proxy-interview-support', role: 'Front-End Engineer',
    title: 'Amazon Front-End Engineer Proxy Interview Support | JS & UI Design',
    focus: 'JavaScript/TypeScript, UI component building, front-end system design and coding',
    infoLink: { label: 'Amazon Front-End Engineer interview (guide)', href: '/amazon-front-end-engineer-interview/' },
    techLinks: [{ label: 'Amazon JavaScript interview', href: '/amazon-javascript-interview/' }, { label: 'Amazon React interview', href: '/amazon-react-interview/' }],
  }),
  proxyInterviewPage({
    slug: 'amazon-sdm-proxy-interview-support', role: 'SDM',
    title: 'Amazon SDM Proxy Interview Support | Management, Delivery & Writing',
    focus: 'people leadership, delivery, technical judgment, the writing assessment and Leadership Principles',
    infoLink: { label: 'Amazon SDM interview (guide)', href: '/amazon-sdm-interview/' },
    techLinks: [{ label: 'Amazon writing assessment', href: '/amazon-writing-assessment/' }, SYSDESIGN],
  }),
  proxyInterviewPage({
    slug: 'amazon-solutions-architect-proxy-interview-support', role: 'Solutions Architect',
    title: 'Amazon AWS Solutions Architect Proxy Interview Support',
    focus: 'AWS architecture, networking, IAM, security, migrations, cost optimization, serverless, Bedrock, AgentCore, GenAI and customer-facing scenarios',
    infoLink: { label: 'Amazon Solutions Architect interview (guide)', href: '/amazon-solutions-architect-interview/' },
    techLinks: [{ label: 'Amazon AWS interview', href: '/amazon-aws-interview/' }, SYSDESIGN],
    extraLinks: [{ label: 'Amazon Solutions Architect proxy job support', href: '/amazon-solutions-architect-proxy-job-support/' }],
  }),
  proxyInterviewPage({
    slug: 'amazon-applied-scientist-proxy-interview-support', role: 'Applied Scientist',
    title: 'Amazon Applied Scientist Proxy Interview Support | AI/ML & Science',
    focus: 'machine learning, statistics, experimentation, coding, LLMs, model evaluation and science discussions',
    infoLink: { label: 'Amazon Applied Scientist interview (guide)', href: '/amazon-applied-scientist-interview/' },
    techLinks: [{ label: 'Amazon machine learning interview', href: '/amazon-machine-learning-interview/' }, { label: 'Amazon Applied Scientist science interview', href: '/amazon-applied-scientist-science-interview/' }],
    extraLinks: [{ label: 'Amazon Applied Scientist proxy job support', href: '/amazon-applied-scientist-proxy-job-support/' }],
  }),
  proxyInterviewPage({
    slug: 'amazon-research-scientist-proxy-interview-support', role: 'Research Scientist',
    title: 'Amazon Research Scientist Proxy Interview Support | Research & ML',
    focus: 'ML theory, research depth, publications deep dive, experimentation and coding',
    infoLink: { label: 'Amazon Research Scientist interview (guide)', href: '/amazon-research-scientist-interview/' },
    techLinks: [{ label: 'Amazon Applied Scientist science interview', href: '/amazon-applied-scientist-science-interview/' }, { label: 'Amazon machine learning interview', href: '/amazon-machine-learning-interview/' }],
  }),
  proxyInterviewPage({
    slug: 'amazon-data-engineer-proxy-interview-support', role: 'Data Engineer',
    title: 'Amazon Data Engineer Proxy Interview Support | SQL & Data Modeling',
    focus: 'SQL, data modeling, ETL/ELT pipelines, Spark, AWS data services and data system design',
    infoLink: { label: 'Amazon Data Engineer interview (guide)', href: '/amazon-data-engineer-interview/' },
    techLinks: [{ label: 'Amazon SQL interview', href: '/amazon-sql-interview/' }, { label: 'Amazon data engineering interview', href: '/amazon-data-engineering-interview/' }],
    extraLinks: [{ label: 'Amazon Data Engineer proxy job support', href: '/amazon-data-engineer-proxy-job-support/' }],
  }),
  proxyInterviewPage({
    slug: 'amazon-bie-proxy-interview-support', role: 'BIE',
    title: 'Amazon BIE Proxy Interview Support | SQL, Analytics & Metrics',
    focus: 'advanced SQL, analytics, metric definition, data modeling and reporting',
    infoLink: { label: 'Amazon BIE interview (guide)', href: '/amazon-bie-interview/' },
    techLinks: [{ label: 'Amazon SQL interview', href: '/amazon-sql-interview/' }, { label: 'Amazon SQL assessment', href: '/amazon-sql-assessment/' }],
    extraLinks: [{ label: 'Amazon BIE proxy job support', href: '/amazon-bie-proxy-job-support/' }],
  }),
  proxyInterviewPage({
    slug: 'amazon-security-engineer-proxy-interview-support', role: 'Security Engineer',
    title: 'Amazon Security Engineer Proxy Interview Support | AppSec & Cloud',
    focus: 'application security, threat modeling, cloud and IAM security, incident response and coding',
    infoLink: { label: 'Amazon Security Engineer interview (guide)', href: '/amazon-security-engineer-interview/' },
    techLinks: [{ label: 'Amazon AWS interview', href: '/amazon-aws-interview/' }, CODING],
    extraLinks: [{ label: 'Amazon Security Engineer proxy job support', href: '/amazon-security-engineer-proxy-job-support/' }],
  }),
  proxyInterviewPage({
    slug: 'amazon-systems-development-engineer-proxy-interview-support', role: 'Systems Development Engineer',
    title: 'Amazon Systems Development Engineer Proxy Interview Support',
    focus: 'Linux and systems internals, networking, automation/scripting, infrastructure and troubleshooting',
    infoLink: { label: 'Amazon Systems Development Engineer interview (guide)', href: '/amazon-systems-development-engineer-interview/' },
    techLinks: [{ label: 'Amazon AWS interview', href: '/amazon-aws-interview/' }, { label: 'Amazon Python interview', href: '/amazon-python-interview/' }],
    extraLinks: [{ label: 'Amazon Systems Development Engineer proxy job support', href: '/amazon-systems-development-engineer-proxy-job-support/' }],
  }),
  proxyInterviewPage({
    slug: 'amazon-tpm-proxy-interview-support', role: 'TPM',
    title: 'Amazon TPM Proxy Interview Support | Program, Technical & LPs',
    focus: 'program ownership, technical architecture understanding, dependencies, risk, metrics and stakeholder management',
    infoLink: { label: 'Amazon TPM interview (guide)', href: '/amazon-tpm-interview/' },
    techLinks: [SYSDESIGN, { label: 'Amazon writing assessment', href: '/amazon-writing-assessment/' }],
    extraLinks: [{ label: 'Amazon TPM proxy job support', href: '/amazon-tpm-proxy-job-support/' }],
  }),
  proxyInterviewPage({
    slug: 'amazon-pm-t-proxy-interview-support', role: 'PM-T',
    title: 'Amazon PM-T Proxy Interview Support | Product Sense & Technical',
    focus: 'product sense and strategy, technical understanding, metrics and execution',
    infoLink: { label: 'Amazon PM-T interview (guide)', href: '/amazon-pm-t-interview/' },
    techLinks: [SYSDESIGN, AMAZON_LP_HUB_LINK],
  }),
  proxyInterviewPage({
    slug: 'amazon-qae-proxy-interview-support', role: 'QAE',
    title: 'Amazon QAE Proxy Interview Support | Test Strategy & Automation',
    focus: 'test strategy, test-case design, automation, coding and a quality mindset',
    infoLink: { label: 'Amazon QAE interview (guide)', href: '/amazon-qae-interview/' },
    techLinks: [CODING, AMAZON_LP_HUB_LINK],
  }),
];
