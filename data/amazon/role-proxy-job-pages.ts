import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import {
  amazonServicePage,
  relatedLinks,
  proxyJobHighlights,
  amazonProxyJobFaqs,
  EXISTING,
  AMAZON_HUB_LINK,
  AMAZON_PROXY_JOB_LINK,
  AMAZON_PROXY_INTERVIEW_LINK,
} from './shared';

/**
 * Amazon role-specific PROXY JOB SUPPORT cluster — COMMERCIAL (Type B).
 * "proxy job support" appears in slug, title, H1, hero, first paragraph, an H2
 * (proxySection), FAQ, meta description and internal anchors. Real-time technical
 * help on the job — expert support and mentoring, not replacing you. Cross-links to
 * the existing AWS / Bedrock / AgentCore / SageMaker clusters.
 */

interface RoleJobInput {
  slug: string;
  role: string;
  title: string;
  focus: string; // the real on-the-job work this role owns
  techLinks: LandingRelatedLink[];
  interviewLink: LandingRelatedLink; // matching proxy interview page
  extraLinks?: LandingRelatedLink[];
}

function proxyJobPage(input: RoleJobInput): LandingPageConfig {
  const { slug, role, focus, interviewLink } = input;
  return amazonServicePage({
    slug,
    title: input.title,
    description: `Amazon ${role} proxy job support — real-time expert help on ${focus}, plus production incidents. Expert technical support and mentoring, not replacing you. Same-day, confidential. Independent of Amazon.`,
    keywords: [
      `amazon ${role.toLowerCase()} proxy job support`, `amazon ${role.toLowerCase()} job support`,
      `amazon ${role.toLowerCase()} technical job support`, `${role.toLowerCase()} proxy job support amazon`,
      'amazon proxy job support', 'aws proxy job support',
    ],
    ogTitle: `Amazon ${role} Proxy Job Support`,
    h1: `Amazon ${role} Proxy Job Support`,
    tagline: `Real-time proxy job support for Amazon/AWS ${role} work — ${focus}, plus production incidents and daily deliverables.`,
    heroEyebrow: `Amazon ${role} Proxy Job Support`,
    painIntro: `In an Amazon/AWS ${role} role and want an expert beside you on the hard tickets, incidents and deadlines? Amazon ${role} proxy job support gives you real-time, implementation-level help during your working hours — you remain the professional delivering the work.`,
    heroVariant: `We provide proxy job support for the real ${role} deliverables: ${focus}, plus debugging, design and code review, production issues, on-call troubleshooting, CI/CD and deployment, and documentation. "Proxy" means expert technical support and mentoring on your real work — not replacing you. This bridges into our existing AWS, Bedrock, AgentCore and SageMaker job support. Same-day start and fully confidential; ProxyTechSupport is independent of Amazon.`,
    highlights: proxyJobHighlights,
    faqs: amazonProxyJobFaqs(`Amazon ${role}`, `${focus}, plus production incidents and daily sprint deliverables`),
    proxySection: {
      title: `What Amazon ${role} Proxy Job Support Covers`,
      intro: `Hands-on, real-time help on your actual ${role} tickets during your working hours — you stay in control and remain the professional delivering the work.`,
      points: [
        `${focus}`,
        'Debugging, design review, code review and production/on-call troubleshooting',
        'CI/CD, deployment, performance and documentation',
        'Cross-linked to AWS, Bedrock, AgentCore and SageMaker support',
        'Expert technical support and mentoring — not replacing you. Independent of Amazon.',
      ],
    },
    bottomCTAHeading: `Need Amazon ${role} Proxy Job Support Right Now?`,
    bottomCTABody: `In-house experts available same-day for live ${role} work and production incidents. Expert technical support and mentoring — not replacing you. Independent of Amazon. Talk to ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [AMAZON_PROXY_JOB_LINK, AMAZON_HUB_LINK],
      techLinks: input.techLinks,
      problemLink: EXISTING.production,
      proxyLink: interviewLink,
      additionalLinks: [AMAZON_PROXY_INTERVIEW_LINK, ...(input.extraLinks ?? [])],
    }),
  });
}

export const amazonRoleProxyJobPages: LandingPageConfig[] = [
  proxyJobPage({
    slug: 'amazon-sde-proxy-job-support', role: 'SDE',
    title: 'Amazon SDE Proxy Job Support | Software, AWS & System Work',
    focus: 'software development in Java, Python or C++, APIs, distributed systems, AWS integration and system design',
    techLinks: [EXISTING.awsHub, EXISTING.javaJobSupport],
    interviewLink: { label: 'Amazon SDE proxy interview support', href: '/amazon-sde-proxy-interview-support/' },
    extraLinks: [{ label: 'Amazon SDE II proxy job support', href: '/amazon-sde-ii-proxy-job-support/' }],
  }),
  proxyJobPage({
    slug: 'amazon-sde-ii-proxy-job-support', role: 'SDE II',
    title: 'Amazon SDE II Proxy Job Support | Services, Design & Delivery',
    focus: 'building and operating services, system design, APIs, distributed systems and AWS',
    techLinks: [EXISTING.awsHub, EXISTING.javaJobSupport],
    interviewLink: { label: 'Amazon SDE II proxy interview support', href: '/amazon-sde-ii-proxy-interview-support/' },
  }),
  proxyJobPage({
    slug: 'amazon-senior-sde-proxy-job-support', role: 'Senior SDE',
    title: 'Amazon Senior SDE Proxy Job Support | Architecture & Delivery',
    focus: 'architecture and design leadership, complex services, cross-team technical work and AWS at scale',
    techLinks: [EXISTING.awsHub, EXISTING.production],
    interviewLink: { label: 'Amazon Senior SDE proxy interview support', href: '/amazon-senior-sde-proxy-interview-support/' },
  }),
  proxyJobPage({
    slug: 'amazon-solutions-architect-proxy-job-support', role: 'Solutions Architect',
    title: 'Amazon AWS Solutions Architect Proxy Job Support | Cloud Architecture',
    focus: 'AWS architecture, networking, IAM and security, migrations, cost optimization, serverless and Bedrock/GenAI patterns',
    techLinks: [EXISTING.awsHub, EXISTING.bedrock],
    interviewLink: { label: 'Amazon Solutions Architect proxy interview support', href: '/amazon-solutions-architect-proxy-interview-support/' },
    extraLinks: [EXISTING.agentcore],
  }),
  proxyJobPage({
    slug: 'amazon-applied-scientist-proxy-job-support', role: 'Applied Scientist',
    title: 'Amazon Applied Scientist Proxy Job Support | ML, LLMs & Pipelines',
    focus: 'ML modeling, experimentation, training and inference pipelines, LLMs, RAG, evaluation and productionization',
    techLinks: [EXISTING.sagemaker, EXISTING.aimlHub],
    interviewLink: { label: 'Amazon Applied Scientist proxy interview support', href: '/amazon-applied-scientist-proxy-interview-support/' },
    extraLinks: [EXISTING.bedrock, EXISTING.rag],
  }),
  proxyJobPage({
    slug: 'amazon-data-engineer-proxy-job-support', role: 'Data Engineer',
    title: 'Amazon Data Engineer Proxy Job Support | SQL, Spark & Pipelines',
    focus: 'SQL, data modeling, ETL/ELT pipelines, Spark, streaming and AWS data services',
    techLinks: [EXISTING.awsHub, EXISTING.pythonJobSupport],
    interviewLink: { label: 'Amazon Data Engineer proxy interview support', href: '/amazon-data-engineer-proxy-interview-support/' },
  }),
  proxyJobPage({
    slug: 'amazon-bie-proxy-job-support', role: 'BIE',
    title: 'Amazon BIE Proxy Job Support | SQL, Analytics & Dashboards',
    focus: 'advanced SQL, analytics, metric definition, data modeling for reporting and dashboards',
    techLinks: [EXISTING.awsHub, EXISTING.pythonJobSupport],
    interviewLink: { label: 'Amazon BIE proxy interview support', href: '/amazon-bie-proxy-interview-support/' },
  }),
  proxyJobPage({
    slug: 'amazon-security-engineer-proxy-job-support', role: 'Security Engineer',
    title: 'Amazon Security Engineer Proxy Job Support | AppSec & Cloud Security',
    focus: 'application security, threat modeling, secure cloud/IAM design, security reviews and incident response',
    techLinks: [EXISTING.awsHub, EXISTING.production],
    interviewLink: { label: 'Amazon Security Engineer proxy interview support', href: '/amazon-security-engineer-proxy-interview-support/' },
  }),
  proxyJobPage({
    slug: 'amazon-systems-development-engineer-proxy-job-support', role: 'Systems Development Engineer',
    title: 'Amazon Systems Development Engineer Proxy Job Support | Systems & Automation',
    focus: 'Linux and systems internals, networking, automation and scripting, infrastructure and reliability',
    techLinks: [EXISTING.awsHub, EXISTING.devopsUsa],
    interviewLink: { label: 'Amazon Systems Development Engineer proxy interview support', href: '/amazon-systems-development-engineer-proxy-interview-support/' },
  }),
  proxyJobPage({
    slug: 'amazon-tpm-proxy-job-support', role: 'TPM',
    title: 'Amazon TPM Proxy Job Support | Program Delivery & Technical Judgment',
    focus: 'program planning and delivery, dependency and risk management, technical documents and stakeholder communication',
    techLinks: [AMAZON_HUB_LINK, EXISTING.awsHub],
    interviewLink: { label: 'Amazon TPM proxy interview support', href: '/amazon-tpm-proxy-interview-support/' },
  }),
];
