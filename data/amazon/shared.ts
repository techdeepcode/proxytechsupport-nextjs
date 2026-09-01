import type {
  LandingPageConfig,
  LandingHighlight,
  LandingFaqItem,
  LandingRelatedLink,
  LandingRelatedLinks,
} from '../landing-pages';

/**
 * Shared building blocks for the additive AMAZON GLOBAL AUTHORITY cluster —
 * Amazon hiring, Amazon interview process (role-specific), Amazon interview rounds,
 * Amazon Leadership Principles, and the FOUR commercial pillars:
 *   1. Amazon Proxy Interview Support
 *   2. Get Amazon Interview Scheduled
 *   3. Amazon Candidate Marketing
 *   4. Amazon Proxy Job Support
 *
 * Mirrors the AWS / Azure / Angular cluster approach: category highlight sets +
 * context-aware FAQ generators + thin `amazonPage()` / `amazonServicePage()`
 * builders that fill canonical + lastmod so each page object stays compact while
 * remaining unique (unique title, H1, intro, use cases, FAQs and internal links).
 *
 * SEARCH-INTENT SEPARATION (non-negotiable):
 *   TYPE A — INFORMATIONAL: clean URLs (/amazon-sde-ii-interview-process/,
 *     /amazon-system-design-interview/, /amazon-leadership-principles-interview/).
 *     Never force "proxy" into these URLs.
 *   TYPE B — COMMERCIAL: proxy terminology is explicit in URL/title/H1/hero/meta
 *     (/amazon-proxy-interview-support/, /amazon-sde-ii-proxy-interview-support/,
 *     /amazon-proxy-job-support/).
 *
 * Amazon hiring / process content reflects publicly documented Amazon guidance and
 * amazon.jobs observations current through August 2026. Interview processes are
 * described as role-specific and team/level/location dependent — never as a single
 * universal flow. ProxyTechSupport is independent and NOT affiliated with Amazon/AWS.
 *
 * ADDITIVE RULE: nothing here duplicates an already-live route. The existing AWS /
 * Bedrock / AgentCore / SageMaker / AI-ML clusters are cross-linked, never recreated.
 */

export const BASE_URL = 'https://proxytechsupport.com';
export const LASTMOD = '2026-08-30T12:00:00.000Z';

/** Independence / compliance line reused across commercial Amazon pages. */
export const DISCLAIMER =
  'ProxyTechSupport is an independent technical and career-support provider and is not affiliated with, endorsed by, or sponsored by Amazon or AWS. We do not replace or impersonate candidates and we do not guarantee interviews, selection or employment — candidates remain responsible for participating in and representing themselves throughout their interview and employment process.';

// ─── Category highlight sets ────────────────────────────────────────────────

export const proxyInterviewHighlights: LandingHighlight[] = [
  {
    title: 'Amazon Proxy Interview Support',
    description:
      'Technical proxy interview support (also searched as interview proxy support) for Amazon SDE, AWS, AI/ML, Applied Scientist, Data Engineering, Security and TPM rounds — calibrated mock interviews and expert mentoring on coding, data structures, system design, and Leadership Principles. You attend and complete your own interview.',
  },
  {
    title: 'Rounds We Prepare You For',
    description:
      'Online Assessment, technical phone screen, coding and data-structures rounds, system design (LLD and HLD), SQL and data rounds, ML/science evaluation, the behavioral Leadership Principles loop, and the Bar Raiser — mapped to your role, level and team.',
  },
  {
    title: 'Get Interviews & Position Your Profile',
    description:
      'Beyond interview prep we help you get Amazon interview calls in the first place — profile engineering, Amazon keyword alignment, and recruiter outreach — then back you through the loop and into the offer.',
  },
];

export const proxyJobHighlights: LandingHighlight[] = [
  {
    title: 'Amazon Proxy Job Support',
    description:
      'Real-time proxy job support for Amazon and AWS technical work — software development, cloud architecture, AI/ML, data engineering, DevOps, security, troubleshooting, production incidents and project delivery — during your working hours so you always hit your deadlines. Expert technical support and mentoring, not replacing you.',
  },
  {
    title: 'Production & On-Call Backup',
    description:
      'An experienced engineer beside you for real tickets and incidents — bug fixes, debugging, design and code review, CI/CD and deployment, AWS and data issues, performance and databases, ML pipelines, RAG and GenAI — plus stakeholder communication and documentation.',
  },
  {
    title: 'Interview & Candidate Marketing',
    description:
      'The same team supports Amazon proxy interview support, profile positioning and candidate marketing — so you can keep the role you have and move up to the next one.',
  },
];

export const roleInfoHighlights: LandingHighlight[] = [
  {
    title: 'Role-Specific Interview Breakdown',
    description:
      'A clear, current walkthrough of how Amazon interviews this role — application, Online Assessment where applicable, phone screen, the on-site/virtual loop, and the Leadership Principles that carry the most weight. The sequence varies by team, level and location.',
  },
  {
    title: 'What Amazon Actually Evaluates',
    description:
      'The signals interviewers and the Bar Raiser look for — technical depth, ownership, judgment under ambiguity, and measurable results — with the common mistakes that sink otherwise strong candidates.',
  },
  {
    title: 'Where To Go Next',
    description:
      'From this informational page you can move straight into Amazon proxy interview support, Get Amazon Interview Scheduled, candidate marketing, or proxy job support once you are hired.',
  },
];

export const marketingHighlights: LandingHighlight[] = [
  {
    title: 'Amazon Profile Positioning',
    description:
      'Resume and LinkedIn engineered around the exact signals Amazon recruiters and ATS filters screen for — the right role family, level, scope, ownership language, and measurable impact for SDE, AWS, AI/ML, Data, Security and TPM profiles.',
  },
  {
    title: 'Candidate Marketing & Recruiter Outreach',
    description:
      'Active, compliant application support and recruiter outreach so your profile reaches the right Amazon hiring teams for real, current openings — not a black hole. We improve positioning and visibility; we do not guarantee interviews.',
  },
  {
    title: 'Interview Pipeline Support',
    description:
      'Once calls start, we back you with Amazon proxy interview support and Leadership Principles preparation to convert the loop into an offer.',
  },
];

export const scheduledHighlights: LandingHighlight[] = [
  {
    title: 'Get Amazon Interview Scheduled',
    description:
      'A structured Amazon job-search and recruiter-outreach campaign — target role family and level, country and city selection, current amazon.jobs research, and a tuned application strategy so you improve your chances of relevant Amazon interview calls.',
  },
  {
    title: 'Profile Engineering & Keyword Alignment',
    description:
      'Resume engineering, LinkedIn positioning, Amazon role-keyword alignment, technical-skills and project positioning — the inputs that decide whether a recruiter reads on or moves past.',
  },
  {
    title: 'Outreach, Tracking & Handoff',
    description:
      'Targeted recruiter outreach, follow-up cadence, campaign and response tracking, and a clean handoff into Amazon proxy interview support when interviews land. We help improve visibility — we do not schedule or guarantee interviews on your behalf.',
  },
];

// ─── Reusable anchor links to new Amazon hubs + existing site pages ─────────

export const AMAZON_HUB_LINK: LandingRelatedLink = { label: 'Amazon interview & career support hub', href: '/amazon-interview-career-support/' };
export const AMAZON_HIRING_PROCESS_LINK: LandingRelatedLink = { label: 'Amazon hiring process', href: '/amazon-hiring-process/' };
export const AMAZON_INTERVIEW_PROCESS_LINK: LandingRelatedLink = { label: 'Amazon interview process', href: '/amazon-interview-process/' };
export const AMAZON_ROUNDS_LINK: LandingRelatedLink = { label: 'Amazon interview rounds', href: '/amazon-interview-rounds/' };
export const AMAZON_CURRENT_HIRING_LINK: LandingRelatedLink = { label: 'Amazon current hiring 2026', href: '/amazon-current-hiring/' };
export const AMAZON_LP_HUB_LINK: LandingRelatedLink = { label: 'Amazon Leadership Principles interview', href: '/amazon-leadership-principles-interview/' };
export const AMAZON_STAR_LINK: LandingRelatedLink = { label: 'Amazon STAR method interview', href: '/amazon-star-method-interview/' };
export const AMAZON_PROXY_INTERVIEW_LINK: LandingRelatedLink = { label: 'Amazon proxy interview support', href: '/amazon-proxy-interview-support/' };
export const AMAZON_PROXY_JOB_LINK: LandingRelatedLink = { label: 'Amazon proxy job support', href: '/amazon-proxy-job-support/' };
export const AMAZON_GET_SCHEDULED_LINK: LandingRelatedLink = { label: 'Get Amazon interview scheduled', href: '/get-amazon-interview-scheduled/' };
export const AMAZON_CANDIDATE_MARKETING_LINK: LandingRelatedLink = { label: 'Amazon candidate marketing', href: '/amazon-candidate-marketing/' };
export const AMAZON_PROFILE_ENGINEERING_LINK: LandingRelatedLink = { label: 'Amazon profile engineering', href: '/amazon-profile-engineering/' };
export const AMAZON_RECRUITER_OUTREACH_LINK: LandingRelatedLink = { label: 'Amazon recruiter outreach', href: '/amazon-recruiter-outreach/' };
export const AMAZON_SYSTEM_DESIGN_LINK: LandingRelatedLink = { label: 'Amazon system design interview', href: '/amazon-system-design-interview/' };
export const AMAZON_CODING_LINK: LandingRelatedLink = { label: 'Amazon coding interview', href: '/amazon-coding-interview/' };
export const AMAZON_BAR_RAISER_LINK: LandingRelatedLink = { label: 'Amazon Bar Raiser interview', href: '/amazon-bar-raiser-interview/' };
export const AMAZON_OA_LINK: LandingRelatedLink = { label: 'Amazon Online Assessment', href: '/amazon-online-assessment/' };
export const AMAZON_LOOP_LINK: LandingRelatedLink = { label: 'Amazon interview loop', href: '/amazon-interview-loop/' };
export const AMAZON_BEHAVIORAL_LINK: LandingRelatedLink = { label: 'Amazon behavioral interview', href: '/amazon-behavioral-interview/' };

/** Existing, already-live site pages (verified real routes) — cross-link, never duplicate. */
export const EXISTING = {
  awsHub: { label: 'AWS AI/ML job support', href: '/aws-ai-ml-job-support/' } as LandingRelatedLink,
  awsJobSupport: { label: 'AWS job support', href: '/aws-job-support/' } as LandingRelatedLink,
  bedrock: { label: 'Amazon Bedrock job support', href: '/amazon-bedrock-job-support/' } as LandingRelatedLink,
  agentcore: { label: 'Amazon Bedrock AgentCore support', href: '/amazon-bedrock-agentcore-job-support/' } as LandingRelatedLink,
  sagemaker: { label: 'Amazon SageMaker job support', href: '/amazon-sagemaker-job-support/' } as LandingRelatedLink,
  sagemakerAi: { label: 'Amazon SageMaker AI job support', href: '/amazon-sagemaker-ai-job-support/' } as LandingRelatedLink,
  awsMlops: { label: 'AWS MLOps job support', href: '/aws-mlops-job-support/' } as LandingRelatedLink,
  aimlHub: { label: 'Global AI/ML job support', href: '/global-ai-ml-job-support/' } as LandingRelatedLink,
  aimlProxy: { label: 'AI/ML proxy interview support', href: '/ai-ml-proxy-interview-support/' } as LandingRelatedLink,
  genai: { label: 'Generative AI job support', href: '/generative-ai-job-support/' } as LandingRelatedLink,
  agenticAi: { label: 'Agentic AI job support', href: '/agentic-ai-job-support/' } as LandingRelatedLink,
  rag: { label: 'RAG job support', href: '/rag-job-support/' } as LandingRelatedLink,
  llm: { label: 'LLM job support', href: '/llm-job-support/' } as LandingRelatedLink,
  mlops: { label: 'MLOps job support', href: '/mlops-job-support/' } as LandingRelatedLink,
  devopsUsa: { label: 'DevOps job support USA', href: '/devops-job-support-usa/' } as LandingRelatedLink,
  cloudUsa: { label: 'Cloud job support USA', href: '/cloud-job-support-usa/' } as LandingRelatedLink,
  sreUsa: { label: 'SRE job support USA', href: '/sre-job-support-usa/' } as LandingRelatedLink,
  javaJobSupport: { label: 'Java job support', href: '/java-job-support/' } as LandingRelatedLink,
  pythonJobSupport: { label: 'Python job support', href: '/python-job-support/' } as LandingRelatedLink,
  reactJobSupport: { label: 'React job support', href: '/react-job-support/' } as LandingRelatedLink,
  production: { label: 'Production issue support', href: '/production-issue-support/' } as LandingRelatedLink,
  proxyInterview: { label: 'Proxy interview support', href: '/proxy-interview-support/' } as LandingRelatedLink,
  proxyJob: { label: 'Proxy job support', href: '/proxy-job-support/' } as LandingRelatedLink,
  getScheduled: { label: 'Get interview scheduled', href: '/get-interview-scheduled/' } as LandingRelatedLink,
  candidateMarketing: { label: 'Job application & candidate marketing', href: '/job-application-candidate-marketing/' } as LandingRelatedLink,
  jobSupportUsa: { label: 'IT job support USA', href: '/job-support-usa/' } as LandingRelatedLink,
  jobSupportCanada: { label: 'IT job support Canada', href: '/job-support-canada/' } as LandingRelatedLink,
  jobSupportUk: { label: 'IT job support UK', href: '/job-support-uk/' } as LandingRelatedLink,
  blog: { label: 'Read developer support articles', href: '/blog/' } as LandingRelatedLink,
};

// ─── FAQ generators (context-aware — each produces materially distinct copy) ─

/** Commercial proxy-interview FAQs. `entity` = Amazon role/location/service interview context. */
export function amazonProxyInterviewFaqs(entity: string): LandingFaqItem[] {
  return [
    {
      question: `What is ${entity} proxy interview support?`,
      answer: `${entity} proxy interview support (also searched as ${entity} interview proxy support) is technical preparation and expert mentoring for your Amazon interview. We run calibrated mock interviews and guide you on the rounds Amazon actually uses for this profile — coding and data structures, system design (LLD and HLD), SQL and data where relevant, ML/science evaluation where relevant, and the behavioral Leadership Principles loop including the Bar Raiser. The exact sequence varies by team, level and location, so we calibrate to your specific loop. You attend and complete your own interview.`,
    },
    {
      question: 'Does proxy interview support mean someone attends the interview for me?',
      answer:
        'No. You attend and complete your own Amazon interview. Proxy interview support means technical guidance, preparation, mock interviews, architecture and Leadership Principles coaching, and scenario-based mentoring that get you ready to perform. We do not impersonate candidates or sit interviews on anyone’s behalf, and we do not guarantee selection or employment — hiring decisions are made solely by Amazon.',
    },
    {
      question: `Which Amazon rounds does ${entity} proxy interview support cover?`,
      answer:
        'Online Assessment (coding, work-style, and where applicable SQL/work-simulation), the technical phone screen, the on-site/virtual loop — coding and data structures, algorithms, system design, low-level and high-level design, SQL and data rounds, machine-learning/science evaluation where the role requires it — and the behavioral Leadership Principles rounds. We also prepare you for the Bar Raiser, who is a trained interviewer from outside your team focused on Amazon’s hiring bar.',
    },
    {
      question: 'How do you prepare me for the Leadership Principles?',
      answer:
        'We map your real experience to the Leadership Principles that matter most for this role, build STAR-structured stories with genuine ownership and measurable results, and rehearse the follow-up probes interviewers use to test depth. We do not invent experience or fabricate metrics — strong, truthful stories that show ownership, judgment and impact are what actually pass the loop.',
    },
    {
      question: 'Is ProxyTechSupport affiliated with Amazon?',
      answer: DISCLAIMER,
    },
    {
      question: 'How do I get started and is it confidential?',
      answer:
        'Message us on WhatsApp with your interview date, the role and level, the team if you know it, and the location. We assign the right expert and run a pre-interview alignment session calibrated to your loop. Every engagement is fully confidential and NDAs are available on request.',
    },
  ];
}

/** Commercial proxy-job FAQs. `entity` = Amazon role/location/tech job context; `focus` = one-line real usage. */
export function amazonProxyJobFaqs(entity: string, focus: string): LandingFaqItem[] {
  return [
    {
      question: `What is ${entity} proxy job support?`,
      answer: `${entity} proxy job support is real-time, implementation-level technical guidance for professionals working on live Amazon-style or AWS technical work. Our engineers join your working hours and help with ${focus}. "Proxy" means expert technical support, troubleshooting, architecture, code review and mentoring — not replacing you or performing your employment duties. You remain the professional delivering the work; we provide the expert guidance behind you. Same-day start is available and every engagement is confidential.`,
    },
    {
      question: `What does "proxy" mean in ${entity} proxy job support?`,
      answer:
        'It means hands-on technical proxy support — an experienced engineer working alongside you on your real tasks: task and ticket analysis, coding and bug fixes, debugging, architecture and design review, code review, production and on-call troubleshooting, CI/CD and deployment, AWS and data issues, performance, and documentation. It does not mean impersonating you or carrying out your job responsibilities on your behalf.',
    },
    {
      question: 'Can you help with live production incidents and on-call?',
      answer:
        'Yes. Production firefighting is a core strength — debugging failing services, latency and reliability issues, AWS IAM/networking and quota errors, data pipeline and database problems, ML pipeline and RAG/GenAI issues, deployment and rollback, and incident handling — often within the same working session with an expert on the call.',
    },
    {
      question: `Which technologies does ${entity} proxy job support cover?`,
      answer:
        'Software development in Java, Python, C++, JavaScript/TypeScript and Go; distributed systems, microservices and API design; AWS (Lambda, DynamoDB, S3, EC2, ECS/EKS, IAM, networking, serverless); data engineering (SQL, Spark, streaming, AWS data services); DevOps and IaC (CDK, CloudFormation, Terraform, CI/CD); security; and AI/ML including LLMs, RAG, agentic AI, Amazon Bedrock, AgentCore and SageMaker — cross-linked to our existing AWS and AI/ML support.',
    },
    {
      question: 'Is the support confidential?',
      answer:
        'Absolutely. All job support is completely confidential — we never share client or employer information with any third party, and NDAs are available on request. We do not access any employer system without your explicit direction.',
    },
    {
      question: 'How quickly can I get started?',
      answer:
        'In most cases the same day you contact us. We maintain an in-house expert team — no sub-contracting. Reach out on WhatsApp and we will match you with the right engineer for your stack and situation immediately.',
    },
  ];
}

/** Informational role/round/technology interview FAQs. `entity` = the interview subject. */
export function amazonInfoFaqs(entity: string, sequenceLine: string): LandingFaqItem[] {
  return [
    {
      question: `What does the ${entity} involve?`,
      answer: `${sequenceLine} Amazon does not use one universal interview flow — the exact rounds, their number and their order vary by team, role, level and location. This page explains the stages that Amazon’s current public guidance and amazon.jobs observations describe for this profile as of August 2026, what each stage evaluates, and how to prepare — so treat it as a well-grounded map rather than a fixed script.`,
    },
    {
      question: `How are the Leadership Principles evaluated in the ${entity}?`,
      answer:
        'Behavioral questions run throughout the loop, not just in one round. Interviewers ask for specific past examples and probe with follow-ups to test ownership, judgment, and measurable results. Answers work best in STAR form — Situation, Task, Action (the largest part, focused on what you personally did), and Result — with honest metrics. A trained Bar Raiser from outside the team also assesses whether you meet Amazon’s hiring bar.',
    },
    {
      question: 'How many rounds should I expect?',
      answer:
        'It depends on the role and level. Many technical loops involve several interviews covering coding/technical depth, design where relevant, and multiple behavioral Leadership Principles conversations, often preceded by an Online Assessment and/or a phone screen. We describe the documented stages rather than promising a fixed count, because Amazon deliberately varies the loop by team and level.',
    },
    {
      question: `How can ProxyTechSupport help with the ${entity}?`,
      answer:
        'Two ways. If you have an interview coming up, our Amazon proxy interview support provides calibrated mock interviews and expert mentoring on exactly these rounds — you attend your own interview. If you are still searching, Get Amazon Interview Scheduled and Amazon candidate marketing help you get relevant interview calls in the first place. We do not guarantee interviews or offers.',
    },
    {
      question: 'Is ProxyTechSupport affiliated with Amazon?',
      answer: DISCLAIMER,
    },
  ];
}

/** Leadership Principle page FAQs. `lp` = the principle name. */
export function amazonLpFaqs(lp: string): LandingFaqItem[] {
  return [
    {
      question: `What is the Amazon "${lp}" Leadership Principle?`,
      answer: `"${lp}" is one of Amazon’s Leadership Principles — the values Amazon uses every day to make decisions and, in interviews, to evaluate candidates. This page explains what the principle means, what strong versus weak evidence looks like, the kinds of behavioral questions that probe it, and how to build a truthful STAR story that demonstrates it. Leadership Principles are assessed across the whole loop, not in a single round.`,
    },
    {
      question: `What kind of story should I prepare for "${lp}"?`,
      answer:
        'Choose a real example where you personally owned a decision or outcome that clearly demonstrates this principle. Structure it as STAR: brief Situation, your specific Task/ownership, a detailed Action section (reasoning, alternatives, trade-offs, what YOU did), and a measurable Result — plus what you learned. Avoid "we" without your own role, vague stories, invented metrics, and generic leadership clichés.',
    },
    {
      question: `What are common mistakes candidates make on "${lp}"?`,
      answer:
        'Telling a team story with no personal ownership, describing a situation with no decision or difficulty, skipping the result, over-claiming impact, or reciting a rehearsed answer that collapses under follow-up questions. Interviewers dive deep — they will ask why you chose an approach, what the alternatives were, and what you would do differently.',
    },
    {
      question: `How does ProxyTechSupport help me prepare "${lp}" stories?`,
      answer:
        'Our Amazon proxy interview support and STAR coaching help you select the right real experiences, structure them for this and related Leadership Principles, and rehearse the follow-up probes — calibrated to your role and level. We help you tell your genuine story well; we never fabricate experience or metrics, and you attend your own interview.',
    },
    {
      question: 'Is ProxyTechSupport affiliated with Amazon?',
      answer: DISCLAIMER,
    },
  ];
}

/** Marketing / get-scheduled FAQs. `entity` = candidate/location context. */
export function amazonMarketingFaqs(entity: string): LandingFaqItem[] {
  return [
    {
      question: `How do you help ${entity} get more Amazon interview calls?`,
      answer: `We help ${entity} through Amazon profile engineering, role-keyword alignment, LinkedIn positioning, and targeted recruiter outreach. We rebuild your resume and LinkedIn around the exact role family, level, scope and impact signals Amazon recruiters and ATS filters screen for, research current amazon.jobs openings that match your background, and run a structured application and outreach campaign. We improve your positioning and visibility — we do not schedule interviews for you or guarantee interviews, selection or employment.`,
    },
    {
      question: 'Why is my profile getting no Amazon recruiter calls?',
      answer:
        'Usually a positioning and keyword mismatch: the resume targets the wrong role family or level, buries ownership and measurable impact, and misses the terms Amazon recruiters search for. We diagnose the gaps and rebuild the profile so it surfaces in searches, passes ATS screening, and reads at the right level for the Amazon roles you want.',
    },
    {
      question: 'What Amazon roles and levels do you support?',
      answer:
        'SDE (I/II/III and Senior), SDM, Front-End Engineer, AWS/Solutions Architect, Applied Scientist and Research Scientist, Data Engineer and BIE, Security Engineer, Systems Development Engineer, TPM and PM-T, and QAE — across levels from transitioning-in to senior. We align positioning to the specific role family and level you are targeting.',
    },
    {
      question: 'Do you do recruiter outreach ethically?',
      answer:
        'Yes. We help with correct role and seniority selection, location matching, a short personalized outreach message, a technical-fit summary, and a sensible follow-up cadence. We do not do spam, mass automation, misrepresentation, fake referrals, private-data scraping, or fabricated recruiter relationships.',
    },
    {
      question: 'Is ProxyTechSupport affiliated with Amazon?',
      answer: DISCLAIMER,
    },
    {
      question: 'How soon will I see results?',
      answer:
        'Profile changes and outreach can begin the same day. Most candidates start seeing recruiter activity within 1–2 weeks of profile optimization and targeted outreach, depending on the current market, role family and location.',
    },
  ];
}

// ─── Thin config builders ────────────────────────────────────────────────────

type AmazonPageInput = Omit<LandingPageConfig, 'canonical' | 'lastmod'> & {
  canonical?: string;
  lastmod?: string;
};

/** Fill canonical (from slug) + lastmod so batch files stay compact. */
export function amazonPage(cfg: AmazonPageInput): LandingPageConfig {
  return {
    ...cfg,
    canonical: cfg.canonical ?? `${BASE_URL}/${cfg.slug}/`,
    lastmod: cfg.lastmod ?? LASTMOD,
  };
}

/**
 * Compact builder for Amazon pages that fills the common boilerplate
 * (geoLine / timezoneNote / bottomCTA defaults) so each page only declares its
 * unique content. Any field can still be overridden.
 */
type AmazonServicePageInput = Omit<
  LandingPageConfig,
  'canonical' | 'lastmod' | 'geoLine' | 'timezoneNote' | 'bottomCTAHeading' | 'bottomCTABody'
> & {
  canonical?: string;
  lastmod?: string;
  geoLine?: string;
  timezoneNote?: string;
  bottomCTAHeading?: string;
  bottomCTABody?: string;
};

export function amazonServicePage(cfg: AmazonServicePageInput): LandingPageConfig {
  return {
    ...cfg,
    geoLine:
      cfg.geoLine ??
      'Support for Amazon candidates and engineers across the USA, India, Canada, UK, Germany, Ireland, Australia, Singapore and worldwide — remote and aligned to your local business hours.',
    timezoneNote:
      cfg.timezoneNote ?? 'Available across US, India, Canada, UK, European, Australian and Asia-Pacific business hours, plus 24/7 for urgent needs.',
    bottomCTAHeading: cfg.bottomCTAHeading ?? 'Preparing for Amazon — or Already In the Role?',
    bottomCTABody:
      cfg.bottomCTABody ??
      'In-house Amazon SDE, AWS, AI/ML, Applied Science, Data and Security experts available same-day — Amazon proxy interview support (technical preparation and mentoring; you attend your own interview), Get Amazon Interview Scheduled, candidate marketing, and Amazon proxy job support for live projects. Independent of Amazon; no guarantees of interviews or offers. Talk to ProxyTechSupport on WhatsApp now.',
    canonical: cfg.canonical ?? `${BASE_URL}/${cfg.slug}/`,
    lastmod: cfg.lastmod ?? LASTMOD,
  };
}

/** Convenience for the common related-links shape used across the cluster. */
export function relatedLinks(input: {
  geoLinks: LandingRelatedLink[];
  techLinks: LandingRelatedLink[];
  problemLink: LandingRelatedLink;
  proxyLink: LandingRelatedLink;
  blogLink?: LandingRelatedLink;
  additionalLinks?: LandingRelatedLink[];
}): LandingRelatedLinks {
  return {
    blogLink: EXISTING.blog,
    ...input,
  };
}
