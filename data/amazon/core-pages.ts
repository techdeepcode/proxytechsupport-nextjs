import type { LandingPageConfig } from '../landing-pages';
import {
  amazonServicePage,
  relatedLinks,
  proxyInterviewHighlights,
  proxyJobHighlights,
  marketingHighlights,
  scheduledHighlights,
  roleInfoHighlights,
  amazonProxyInterviewFaqs,
  amazonProxyJobFaqs,
  amazonInfoFaqs,
  amazonMarketingFaqs,
  DISCLAIMER,
  EXISTING,
  AMAZON_HUB_LINK,
  AMAZON_HIRING_PROCESS_LINK,
  AMAZON_INTERVIEW_PROCESS_LINK,
  AMAZON_ROUNDS_LINK,
  AMAZON_CURRENT_HIRING_LINK,
  AMAZON_LP_HUB_LINK,
  AMAZON_STAR_LINK,
  AMAZON_PROXY_INTERVIEW_LINK,
  AMAZON_PROXY_JOB_LINK,
  AMAZON_GET_SCHEDULED_LINK,
  AMAZON_CANDIDATE_MARKETING_LINK,
  AMAZON_PROFILE_ENGINEERING_LINK,
  AMAZON_RECRUITER_OUTREACH_LINK,
  AMAZON_SYSTEM_DESIGN_LINK,
  AMAZON_CODING_LINK,
  AMAZON_BAR_RAISER_LINK,
  AMAZON_OA_LINK,
  AMAZON_LOOP_LINK,
  AMAZON_BEHAVIORAL_LINK,
} from './shared';

// ═══════════════════════════════════════════════════════════════════════════
// MASTER HUB — the cluster index (no-orphan links are appended in index.ts)
// ═══════════════════════════════════════════════════════════════════════════

export const amazonMasterHub: LandingPageConfig = amazonServicePage({
  slug: 'amazon-interview-career-support',
  title: 'Amazon Proxy Interview, Candidate Marketing & Proxy Job Support | Career Hub',
  description:
    'End-to-end Amazon career support: Amazon proxy interview support, Get Amazon Interview Scheduled, candidate marketing, and Amazon proxy job support across SDE, AWS, AI/ML, Applied Science, Data, Security and TPM roles. Independent of Amazon; no guarantees.',
  keywords: [
    'amazon interview support', 'amazon proxy interview support', 'amazon proxy job support',
    'get amazon interview scheduled', 'amazon candidate marketing', 'amazon hiring process',
    'amazon interview process', 'amazon leadership principles interview', 'amazon career support',
  ],
  h1: 'Amazon Proxy Interview, Candidate Marketing & Proxy Job Support',
  tagline:
    'End-to-end support for Amazon technical professionals — from profile positioning and interview opportunity generation to proxy interview support and technical proxy job support.',
  heroEyebrow: 'Amazon Interview & Career Support — Updated August 2026',
  painIntro:
    'Targeting Amazon — SDE, AWS, AI/ML, Applied Scientist, Data Engineering, Security or TPM — and want expert backing across the whole journey, from getting interview calls to clearing the loop and delivering once you are in the role?',
  heroVariant:
    'This is the master hub for four connected services: Amazon Proxy Interview Support (calibrated mock interviews and mentoring on coding, system design and Leadership Principles — you attend your own interview), Get Amazon Interview Scheduled (role targeting, applications and recruiter outreach), Amazon Candidate Marketing (resume, LinkedIn and recruiter visibility), and Amazon Proxy Job Support (real-time technical help on the job). From here you can reach the Amazon hiring process, role-specific interview breakdowns, interview rounds, the Leadership Principles, and role/country/city pages. ProxyTechSupport is independent of Amazon and AWS and never guarantees interviews or offers.',
  highlights: [
    {
      title: 'Amazon Proxy Interview Support',
      description:
        'Technical interview support across coding, data structures, system design (LLD and HLD), SQL and data, ML/science evaluation, and the behavioral Leadership Principles loop including the Bar Raiser — calibrated to your role, level and team. You attend and complete your own interview.',
    },
    {
      title: 'Get Amazon Interview Scheduled & Candidate Marketing',
      description:
        'Amazon role targeting, resume and LinkedIn profile engineering, keyword alignment, applications and compliant recruiter outreach to improve your visibility for real, current Amazon openings. We improve positioning — we do not schedule or guarantee interviews.',
    },
    {
      title: 'Amazon Proxy Job Support',
      description:
        'Real-time technical support for software, AWS, data, cloud, AI/ML, security and production work once you are in the role — bridging into our existing AWS, Bedrock, AgentCore and SageMaker support.',
    },
  ],
  faqs: [
    {
      question: 'What does the Amazon interview & career support hub cover?',
      answer:
        'It connects four services across the full Amazon career lifecycle: getting interview calls (Get Amazon Interview Scheduled and candidate marketing), preparing for and clearing the loop (Amazon proxy interview support and Leadership Principles coaching), and succeeding once hired (Amazon proxy job support). It also links to informational guides on the Amazon hiring process, role-specific interview breakdowns, interview rounds, and the Leadership Principles.',
    },
    {
      question: 'What is the difference between proxy interview support and proxy job support?',
      answer:
        'Proxy interview support is technical preparation and mentoring for an upcoming Amazon interview — mock interviews, architecture and Leadership Principles coaching — where you attend and complete your own interview. Proxy job support is real-time technical help on live work once you are in the role — coding, debugging, architecture, AWS and production issues — where you remain the professional delivering the work. Neither means impersonation.',
    },
    {
      question: 'Do you guarantee an Amazon interview or offer?',
      answer:
        'No. We help you improve positioning, visibility and interview readiness, but we never guarantee interviews, selection or employment, and we are not affiliated with Amazon. Hiring decisions are made solely by Amazon.',
    },
    {
      question: 'Which Amazon roles do you support?',
      answer:
        'SDE (I/II/III and Senior), SDM, Front-End Engineer, AWS/Solutions Architect, Applied Scientist, Research Scientist, Data Engineer, BIE, Security Engineer, Systems Development Engineer, TPM, PM-T and QAE — plus technology-specific and team-specific interview preparation, and AWS/AI-ML proxy job support.',
    },
    {
      question: 'Is ProxyTechSupport affiliated with Amazon?',
      answer: DISCLAIMER,
    },
  ],
  bottomCTAHeading: 'Start Your Amazon Journey With Expert Backing',
  bottomCTABody:
    'Whether you need interview calls, a loop you can clear, or real-time help in the role — our in-house Amazon SDE, AWS, AI/ML, Applied Science, Data and Security experts are available same-day. Independent of Amazon; no guarantees of interviews or offers. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AMAZON_PROXY_INTERVIEW_LINK, AMAZON_PROXY_JOB_LINK],
    techLinks: [AMAZON_GET_SCHEDULED_LINK, AMAZON_CANDIDATE_MARKETING_LINK],
    problemLink: AMAZON_HIRING_PROCESS_LINK,
    proxyLink: AMAZON_LP_HUB_LINK,
    additionalLinks: [
      AMAZON_INTERVIEW_PROCESS_LINK, AMAZON_ROUNDS_LINK, AMAZON_CURRENT_HIRING_LINK,
      AMAZON_STAR_LINK, AMAZON_PROFILE_ENGINEERING_LINK, AMAZON_RECRUITER_OUTREACH_LINK,
      EXISTING.awsHub, EXISTING.bedrock, EXISTING.sagemaker,
    ],
  }),
});

// ═══════════════════════════════════════════════════════════════════════════
// COMMERCIAL PILLAR 1 — AMAZON PROXY INTERVIEW SUPPORT (hub)
// ═══════════════════════════════════════════════════════════════════════════

export const amazonProxyInterviewSupport: LandingPageConfig = amazonServicePage({
  slug: 'amazon-proxy-interview-support',
  title: 'Amazon Proxy Interview Support | SDE, AWS, AI/ML & Technical Roles',
  description:
    'Amazon proxy interview support for technical roles — coding, data structures, system design, AWS, AI/ML, data, security and Leadership Principles. Calibrated mock interviews and expert mentoring; you attend your own interview. Independent of Amazon.',
  keywords: [
    'amazon proxy interview support', 'amazon interview proxy support', 'amazon proxy interview',
    'amazon technical proxy interview support', 'amazon interview support', 'interview proxy support for amazon',
    'amazon proxy interview support usa',
  ],
  ogTitle: 'Amazon Proxy Interview Support — Technical Roles',
  h1: 'Amazon Proxy Interview Support for Technical Roles',
  tagline:
    'Get expert technical proxy interview support for Amazon SDE, AWS, AI/ML, Applied Scientist, Data Engineering, Security, TPM and other technical interview rounds.',
  heroEyebrow: 'Amazon Proxy Interview Support',
  painIntro:
    'Facing an Amazon interview loop and want an expert who knows exactly how Amazon interviews your role? Amazon proxy interview support (also searched as Amazon interview proxy support) gives you calibrated preparation and mentoring for the technical and behavioral rounds — coding, system design, AWS, AI/ML, data, security and the Leadership Principles.',
  heroVariant:
    'We provide technical proxy interview support across the rounds Amazon actually uses — Online Assessment, technical phone screen, coding and data structures, algorithms, system design (LLD and HLD), SQL and data engineering, AWS and cloud architecture, DevOps, security, AI/ML including LLMs, GenAI and Applied Science, plus technical project discussion and the behavioral Leadership Principles loop and Bar Raiser. Proxy interview support means expert technical preparation and mentoring — you attend and complete your own interview. ProxyTechSupport is independent of Amazon and does not guarantee selection or employment.',
  highlights: proxyInterviewHighlights,
  faqs: amazonProxyInterviewFaqs('Amazon'),
  useCasesSection: {
    title: 'Amazon Interview Situations We Prepare You For',
    cases: [
      'An SDE II or SDE III loop with coding, system design, and multiple Leadership Principles rounds',
      'An Applied Scientist loop with ML/science evaluation, coding, and research discussion',
      'An AWS Solutions Architect loop with architecture, networking, security and customer scenarios',
      'A Data Engineer loop with SQL, data modeling, pipelines and system design',
      'A tough Bar Raiser round probing ownership and judgment with follow-up questions',
      'An Online Assessment or technical phone screen you want to walk into fully prepared',
    ],
  },
  proxySection: {
    title: 'What Amazon Proxy Interview Support Covers',
    intro:
      'Calibrated, role-specific preparation and mentoring for every stage of the Amazon loop — you attend your own interview. We help you tell truthful, well-structured stories and reason clearly under pressure.',
    points: [
      'Coding, data structures and algorithms — patterns, complexity, testing and clean implementation',
      'System design (LLD and HLD) — requirements, scale, data model, caching, queues, failure modes, trade-offs',
      'SQL, data engineering, AWS, cloud architecture, DevOps, security, AI/ML, LLMs, GenAI and Applied Science',
      'Leadership Principles behavioral rounds and the Bar Raiser — STAR stories with real ownership and metrics',
      'Calibration to your exact role, level, team and interview format — plus a pre-interview alignment session',
    ],
  },
  bottomCTAHeading: 'Get Amazon Proxy Interview Support Now',
  bottomCTABody:
    'In-house Amazon SDE, AWS, AI/ML, Applied Science, Data and Security experts run calibrated mock interviews and Leadership Principles coaching for your loop. You attend your own interview; we prepare you to perform. Independent of Amazon; no guarantee of selection. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AMAZON_HUB_LINK, AMAZON_LP_HUB_LINK],
    techLinks: [AMAZON_SYSTEM_DESIGN_LINK, AMAZON_CODING_LINK],
    problemLink: AMAZON_INTERVIEW_PROCESS_LINK,
    proxyLink: AMAZON_PROXY_JOB_LINK,
    additionalLinks: [
      AMAZON_BAR_RAISER_LINK, AMAZON_ROUNDS_LINK, AMAZON_GET_SCHEDULED_LINK, AMAZON_CANDIDATE_MARKETING_LINK,
      { label: 'Amazon SDE II proxy interview support', href: '/amazon-sde-ii-proxy-interview-support/' },
      { label: 'Amazon Applied Scientist proxy interview support', href: '/amazon-applied-scientist-proxy-interview-support/' },
      { label: 'Amazon Solutions Architect proxy interview support', href: '/amazon-solutions-architect-proxy-interview-support/' },
      EXISTING.aimlProxy, EXISTING.proxyInterview,
    ],
  }),
});

// ═══════════════════════════════════════════════════════════════════════════
// COMMERCIAL PILLAR 4 — AMAZON PROXY JOB SUPPORT (hub)
// ═══════════════════════════════════════════════════════════════════════════

export const amazonProxyJobSupport: LandingPageConfig = amazonServicePage({
  slug: 'amazon-proxy-job-support',
  title: 'Amazon Proxy Job Support | SDE, AWS, Data, AI/ML & Cloud',
  description:
    'Amazon proxy job support for technical roles — software development, cloud architecture, AI/ML, data engineering, DevOps, security, troubleshooting and production incidents. Real-time expert help during your working hours. Independent of Amazon.',
  keywords: [
    'amazon proxy job support', 'amazon job support', 'amazon technical job support',
    'amazon online job support', 'job proxy support amazon', 'amazon job proxy support',
    'aws proxy job support',
  ],
  ogTitle: 'Amazon Proxy Job Support — Technical Roles',
  h1: 'Amazon Proxy Job Support for Technical Roles',
  tagline:
    'Get expert proxy job support for Amazon and AWS technical work across software development, cloud architecture, AI/ML, data engineering, DevOps, security, troubleshooting, production incidents and project delivery.',
  heroEyebrow: 'Amazon Proxy Job Support',
  painIntro:
    'In an Amazon or AWS-heavy technical role and want an expert beside you on the hard tickets, incidents and deadlines? Amazon proxy job support gives you real-time, implementation-level help during your working hours — you remain the professional delivering the work.',
  heroVariant:
    'We provide proxy job support across the real work: task and ticket analysis, coding, bug fixes and debugging, architecture, design review and code review, production issues, incident handling and on-call troubleshooting, CI/CD and deployment, AWS, data, security, performance, databases, ML pipelines, RAG, GenAI and agentic AI, plus documentation and stakeholder communication. "Proxy" means expert technical support and mentoring on your real deliverables — not replacing you. This pillar bridges into our existing AWS, Bedrock, AgentCore and SageMaker job support.',
  highlights: proxyJobHighlights,
  faqs: amazonProxyJobFaqs('Amazon', 'live software, AWS, data, cloud, AI/ML and security tasks, plus production incidents and daily sprint deliverables'),
  useCasesSection: {
    title: 'Amazon / AWS Work Situations We Help With',
    cases: [
      'A production incident or on-call page you need to debug and resolve fast',
      'A hard sprint ticket in Java, Python, or C++ with a tight deadline',
      'An AWS architecture, IAM, networking, or cost problem blocking delivery',
      'A data pipeline, SQL, or Spark job failing before a release',
      'An ML pipeline, RAG, or Bedrock/agent integration behaving incorrectly',
      'A design or code review you want to pass cleanly the first time',
    ],
  },
  proxySection: {
    title: 'What Amazon Proxy Job Support Covers',
    intro:
      'Hands-on, real-time help on your actual Amazon/AWS project tickets during your working hours — you stay in control and remain the professional delivering the work.',
    points: [
      'Coding, bug fixes, debugging, architecture, design review and code review',
      'Production issues, incident handling, on-call troubleshooting, CI/CD and deployment',
      'AWS (Lambda, DynamoDB, S3, EC2, ECS/EKS, IAM, networking, serverless), data, security and performance',
      'ML pipelines, RAG, GenAI and agentic AI — cross-linked to our Bedrock, AgentCore and SageMaker support',
      'Documentation and stakeholder communication so your work lands well in reviews and standups',
    ],
  },
  bottomCTAHeading: 'Need Amazon / AWS Proxy Job Support Right Now?',
  bottomCTABody:
    'In-house software, AWS, data, AI/ML and security experts available same-day for live project work and production incidents. Expert technical support and mentoring — not replacing you. Independent of Amazon. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AMAZON_HUB_LINK, AMAZON_PROXY_INTERVIEW_LINK],
    techLinks: [EXISTING.awsHub, EXISTING.bedrock],
    problemLink: EXISTING.production,
    proxyLink: AMAZON_PROXY_INTERVIEW_LINK,
    additionalLinks: [
      { label: 'Amazon SDE proxy job support', href: '/amazon-sde-proxy-job-support/' },
      { label: 'Amazon Data Engineer proxy job support', href: '/amazon-data-engineer-proxy-job-support/' },
      { label: 'Amazon Solutions Architect proxy job support', href: '/amazon-solutions-architect-proxy-job-support/' },
      EXISTING.agentcore, EXISTING.sagemaker, EXISTING.awsMlops, EXISTING.proxyJob,
    ],
  }),
});

// ═══════════════════════════════════════════════════════════════════════════
// COMMERCIAL PILLAR 2 — GET AMAZON INTERVIEW SCHEDULED
// ═══════════════════════════════════════════════════════════════════════════

export const getAmazonInterviewScheduled: LandingPageConfig = amazonServicePage({
  slug: 'get-amazon-interview-scheduled',
  title: 'Get Amazon Interview Scheduled | Role Targeting & Recruiter Outreach',
  description:
    'Get Amazon interview scheduled: Amazon role targeting, current amazon.jobs research, resume and LinkedIn positioning, application strategy and compliant recruiter outreach to improve your visibility for real Amazon openings. We improve positioning — no guarantees.',
  keywords: [
    'get amazon interview scheduled', 'how to get amazon interview', 'get amazon interview calls',
    'amazon interview opportunities', 'amazon recruiter visibility', 'amazon job search support',
    'get amazon interview',
  ],
  h1: 'Get Amazon Interview Scheduled',
  tagline:
    'A structured Amazon job-search and recruiter-outreach campaign to improve your positioning and visibility for real, current Amazon openings.',
  heroEyebrow: 'Get Amazon Interview Scheduled',
  painIntro:
    'Strong background but not getting Amazon interview calls? We help candidates improve positioning and outreach for relevant Amazon opportunities — role and level targeting, current amazon.jobs research, resume and LinkedIn engineering, and a disciplined application and recruiter-outreach campaign.',
  heroVariant:
    'We build a structured Amazon job-search and recruiter-outreach campaign: candidate assessment, target job family and level, country and city selection, current amazon.jobs research, resume engineering, LinkedIn positioning, Amazon role-keyword alignment, project and skills positioning, application strategy, targeted recruiter outreach, follow-up cadence, and campaign and response tracking — with a clean handoff into Amazon proxy interview support when interviews land. We help improve recruiter visibility; we do not schedule your interview, guarantee an interview, or claim to have internal Amazon recruiters. ProxyTechSupport is independent of Amazon.',
  highlights: scheduledHighlights,
  faqs: amazonMarketingFaqs('Amazon candidates'),
  useCasesSection: {
    title: 'How We Help You Get Amazon Interview Calls',
    cases: [
      'Targeting the right Amazon role family and level for your real background',
      'Researching current amazon.jobs openings that actually match your profile',
      'Rebuilding resume and LinkedIn around the signals Amazon recruiters search for',
      'Running a disciplined application and recruiter-outreach campaign with follow-ups',
      'Tracking recruiter responses and interview conversions across the campaign',
      'Handing off cleanly into proxy interview support once a loop is scheduled',
    ],
  },
  bottomCTAHeading: 'Ready to Get More Amazon Interview Calls?',
  bottomCTABody:
    'We build a structured Amazon job-search, profile and recruiter-outreach campaign to improve your visibility for real openings. We improve positioning — we do not schedule or guarantee interviews, and we are independent of Amazon. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AMAZON_HUB_LINK, AMAZON_CANDIDATE_MARKETING_LINK],
    techLinks: [AMAZON_PROFILE_ENGINEERING_LINK, AMAZON_RECRUITER_OUTREACH_LINK],
    problemLink: AMAZON_CURRENT_HIRING_LINK,
    proxyLink: AMAZON_PROXY_INTERVIEW_LINK,
    additionalLinks: [AMAZON_HIRING_PROCESS_LINK, EXISTING.getScheduled, EXISTING.candidateMarketing],
  }),
});

// ═══════════════════════════════════════════════════════════════════════════
// COMMERCIAL PILLAR 3 — AMAZON CANDIDATE MARKETING
// ═══════════════════════════════════════════════════════════════════════════

export const amazonCandidateMarketing: LandingPageConfig = amazonServicePage({
  slug: 'amazon-candidate-marketing',
  title: 'Amazon Candidate Marketing | Resume, LinkedIn & Recruiter Visibility',
  description:
    'Amazon candidate marketing: resume positioning, LinkedIn optimization, profile engineering, Amazon keyword alignment, role-family and location targeting, applications and recruiter visibility for SDE, AWS, AI/ML, Data, Security and TPM profiles.',
  keywords: [
    'amazon candidate marketing', 'amazon profile marketing', 'amazon resume marketing',
    'amazon linkedin optimization', 'amazon recruiter outreach', 'amazon job application support',
    'amazon recruiter visibility',
  ],
  h1: 'Amazon Candidate Marketing — Resume, LinkedIn & Recruiter Visibility',
  tagline:
    'Position your profile for Amazon: resume, LinkedIn, role targeting, keyword alignment and recruiter visibility for technical roles.',
  heroEyebrow: 'Amazon Candidate Marketing',
  painIntro:
    'Great engineer, wrong packaging? Amazon candidate marketing rebuilds how your profile reads to Amazon recruiters and ATS filters — the right role family, level, scope, ownership language and measurable impact — and gets it in front of the right hiring teams for real openings.',
  heroVariant:
    'Amazon-specific candidate marketing includes resume positioning, LinkedIn optimization, profile engineering, technical-project and seniority positioning, Amazon role-keyword and role-family alignment, location targeting, current-vacancy targeting, applications, compliant recruiter outreach, candidate visibility, follow-up, and interview conversion. We improve positioning and visibility — we do not guarantee interviews or employment, and we are independent of Amazon.',
  highlights: marketingHighlights,
  faqs: amazonMarketingFaqs('Amazon candidates'),
  bottomCTAHeading: 'Position Your Profile for Amazon',
  bottomCTABody:
    'Resume, LinkedIn, role targeting and recruiter visibility engineered around the signals Amazon recruiters screen for. We improve positioning — no guarantees of interviews or offers, and we are independent of Amazon. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AMAZON_HUB_LINK, AMAZON_GET_SCHEDULED_LINK],
    techLinks: [AMAZON_PROFILE_ENGINEERING_LINK, AMAZON_RECRUITER_OUTREACH_LINK],
    problemLink: AMAZON_HIRING_PROCESS_LINK,
    proxyLink: AMAZON_PROXY_INTERVIEW_LINK,
    additionalLinks: [AMAZON_CURRENT_HIRING_LINK, EXISTING.candidateMarketing, EXISTING.getScheduled],
  }),
});

// ─── Profile Engineering ─────────────────────────────────────────────────────

export const amazonProfileEngineering: LandingPageConfig = amazonServicePage({
  slug: 'amazon-profile-engineering',
  title: 'Amazon Profile Engineering | Resume & LinkedIn for Amazon Roles',
  description:
    'Amazon profile engineering: engineer your resume and LinkedIn around Amazon role families, levels, ownership language and measurable impact so you surface in recruiter searches and pass ATS screening for SDE, AWS, AI/ML, Data and TPM roles.',
  keywords: [
    'amazon profile engineering', 'amazon resume', 'amazon linkedin optimization',
    'amazon resume positioning', 'amazon ats resume', 'amazon profile positioning',
  ],
  h1: 'Amazon Profile Engineering — Resume & LinkedIn Built for Amazon',
  tagline:
    'Engineer your resume and LinkedIn around the exact role family, level and impact signals Amazon recruiters and ATS filters screen for.',
  heroEyebrow: 'Amazon Profile Engineering',
  painIntro:
    'Amazon reads profiles for ownership, scope and measurable impact at a specific level. Profile engineering rebuilds yours to read at the right level for the right role family — SDE, AWS/Solutions Architect, Applied Scientist, Data Engineer, Security or TPM.',
  heroVariant:
    'We engineer Amazon-ready resumes and LinkedIn profiles: role-family and level targeting, Amazon keyword alignment, ownership and results language mapped to the Leadership Principles, technical-project positioning, and ATS-friendly structure — so recruiters find you and read on. Part of Amazon candidate marketing and Get Amazon Interview Scheduled. We improve positioning; we do not guarantee interviews or offers.',
  highlights: marketingHighlights,
  faqs: amazonMarketingFaqs('Amazon candidates'),
  bottomCTAHeading: 'Engineer Your Amazon Profile',
  bottomCTABody:
    'Resume and LinkedIn rebuilt around Amazon role families, levels and impact signals. We improve positioning — no guarantees, independent of Amazon. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AMAZON_HUB_LINK, AMAZON_CANDIDATE_MARKETING_LINK],
    techLinks: [AMAZON_GET_SCHEDULED_LINK, AMAZON_RECRUITER_OUTREACH_LINK],
    problemLink: AMAZON_HIRING_PROCESS_LINK,
    proxyLink: AMAZON_PROXY_INTERVIEW_LINK,
    additionalLinks: [EXISTING.candidateMarketing, EXISTING.getScheduled],
  }),
});

// ─── Recruiter Outreach ──────────────────────────────────────────────────────

export const amazonRecruiterOutreach: LandingPageConfig = amazonServicePage({
  slug: 'amazon-recruiter-outreach',
  title: 'Amazon Recruiter Outreach | Compliant Outreach & Application Strategy',
  description:
    'Amazon recruiter outreach done right: correct role and seniority selection, location matching, short personalized outreach, technical-fit summaries and sensible follow-up. No spam, no misrepresentation, no fake referrals. Independent of Amazon.',
  keywords: [
    'amazon recruiter outreach', 'amazon recruiter visibility', 'amazon job application support',
    'amazon application strategy', 'amazon recruiter contact', 'amazon outreach strategy',
  ],
  h1: 'Amazon Recruiter Outreach — Compliant, Targeted, Effective',
  tagline:
    'Reach the right Amazon recruiting functions with correct role and level selection, location matching, and a short, honest, personalized message.',
  heroEyebrow: 'Amazon Recruiter Outreach',
  painIntro:
    'Cold outreach to Amazon usually fails because it targets the wrong role, the wrong level, or reads like spam. We help you do it right — the correct recruiting function, a clear technical-fit summary, and a follow-up cadence that respects people.',
  heroVariant:
    'We guide compliant Amazon recruiter outreach: correct role selection, correct seniority, location matching, finding the appropriate recruiting function, understanding the business unit, a short personalized message, a technical-fit summary, application linkage where appropriate, a sensible follow-up cadence, reply tracking, and interview conversion. We do not encourage spam, mass automation, misrepresentation, fake referrals, private-data scraping, or fake recruiter relationships. Independent of Amazon.',
  highlights: scheduledHighlights,
  faqs: amazonMarketingFaqs('Amazon candidates'),
  bottomCTAHeading: 'Do Amazon Recruiter Outreach the Right Way',
  bottomCTABody:
    'Targeted, honest, compliant outreach that reaches the right Amazon recruiting functions. We improve positioning and visibility — no spam, no guarantees, independent of Amazon. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AMAZON_HUB_LINK, AMAZON_GET_SCHEDULED_LINK],
    techLinks: [AMAZON_CANDIDATE_MARKETING_LINK, AMAZON_PROFILE_ENGINEERING_LINK],
    problemLink: AMAZON_CURRENT_HIRING_LINK,
    proxyLink: AMAZON_PROXY_INTERVIEW_LINK,
    additionalLinks: [EXISTING.candidateMarketing, EXISTING.getScheduled],
  }),
});

// ═══════════════════════════════════════════════════════════════════════════
// INFORMATIONAL HUBS — hiring process, interview process, rounds, current hiring, STAR
// ═══════════════════════════════════════════════════════════════════════════

const infoRelated = (self: string, extra: { label: string; href: string }[] = []) =>
  relatedLinks({
    geoLinks: [AMAZON_HUB_LINK, AMAZON_INTERVIEW_PROCESS_LINK],
    techLinks: [AMAZON_CODING_LINK, AMAZON_SYSTEM_DESIGN_LINK],
    problemLink: AMAZON_LP_HUB_LINK,
    proxyLink: AMAZON_PROXY_INTERVIEW_LINK,
    additionalLinks: [
      AMAZON_HIRING_PROCESS_LINK, AMAZON_ROUNDS_LINK, AMAZON_BAR_RAISER_LINK,
      AMAZON_STAR_LINK, AMAZON_GET_SCHEDULED_LINK, ...extra,
    ].filter((l) => l.href !== self),
  });

export const amazonHiringProcess: LandingPageConfig = amazonServicePage({
  slug: 'amazon-hiring-process',
  title: 'Amazon Hiring Process 2026: Application, Assessment, Loop & Bar Raiser',
  description:
    'How the Amazon hiring process works in 2026 — application, Online Assessment, phone screen, the interview loop, the Leadership Principles, and the Bar Raiser — with role-family differences. The process varies by team, role, level and location.',
  keywords: [
    'amazon hiring process', 'amazon hiring', 'how amazon hires', 'amazon recruitment process',
    'amazon interview process', 'amazon bar raiser', 'amazon online assessment',
  ],
  h1: 'The Amazon Hiring Process in 2026',
  tagline:
    'How Amazon generally hires technical talent — application, assessment, screen, loop, Leadership Principles and the Bar Raiser — and why the exact steps depend on your role, level and location.',
  heroEyebrow: 'Amazon Hiring Process — Updated August 2026',
  painIntro:
    'How does Amazon actually hire? There is no single universal flow — the steps depend on the role, level and location. This guide explains the stages Amazon documents publicly, how role families differ, and where each of our four support services fits.',
  heroVariant:
    'Amazon hiring generally moves through application, an Online Assessment where applicable, a recruiter and/or technical phone screen, and an interview loop of several rounds that mix technical evaluation with behavioral Leadership Principles questions — with a trained Bar Raiser from outside the team helping guard the hiring bar. Role families differ: SDE loops emphasize coding and system design; Applied Scientist loops add ML/science evaluation; Data Engineer loops add SQL and data modeling; SDM and TPM loops add people, program and writing signals. Current as of August 2026; Amazon’s process changes and varies by team.',
  highlights: roleInfoHighlights,
  faqs: amazonInfoFaqs('Amazon hiring process', 'The Amazon hiring process generally moves through application, Online Assessment where applicable, phone screen, and an interview loop combining technical rounds with behavioral Leadership Principles questions, plus a Bar Raiser.'),
  useCasesSection: {
    title: 'Stages of the Amazon Hiring Process',
    cases: [
      'Application and resume screening against the role family and level',
      'Online Assessment — coding, work-style, and role-specific components where applicable',
      'Recruiter and/or technical phone screen',
      'The interview loop — several rounds of technical and behavioral Leadership Principles questions',
      'The Bar Raiser — a trained interviewer from outside the team guarding the hiring bar',
      'Debrief and outcome — the loop decides via structured written feedback',
    ],
  },
  relatedLinks: infoRelated('/amazon-hiring-process/', [AMAZON_CURRENT_HIRING_LINK, AMAZON_CANDIDATE_MARKETING_LINK]),
});

export const amazonInterviewProcess: LandingPageConfig = amazonServicePage({
  slug: 'amazon-interview-process',
  title: 'Amazon Interview Process: Rounds, Loop, Leadership Principles & Bar Raiser',
  description:
    'The Amazon interview process explained — Online Assessment, phone screen, the interview loop, coding and system design rounds, the Leadership Principles, and the Bar Raiser. Role-specific and dependent on team, level and location.',
  keywords: [
    'amazon interview process', 'amazon interview rounds', 'amazon interview loop',
    'amazon technical interview', 'amazon leadership principles interview', 'amazon bar raiser interview',
  ],
  h1: 'The Amazon Interview Process',
  tagline:
    'What Amazon’s interview process looks like across roles — from Online Assessment and phone screen through the loop, the Leadership Principles, and the Bar Raiser.',
  heroEyebrow: 'Amazon Interview Process — Updated August 2026',
  painIntro:
    'Amazon does not run one universal interview. This guide explains the stages Amazon uses across technical roles, what each round evaluates, and how the behavioral Leadership Principles run throughout the loop — so you know exactly what to prepare.',
  heroVariant:
    'A typical Amazon technical interview process includes an Online Assessment (coding and work-style, sometimes with SQL or work-simulation components), a technical phone screen, and an on-site/virtual loop of several rounds covering coding and data structures, system design where the role calls for it, and multiple behavioral Leadership Principles conversations. A trained Bar Raiser assesses whether you meet Amazon’s hiring bar. The exact rounds and their order vary by team, role, level and location — we describe the documented stages, not a fixed count.',
  highlights: roleInfoHighlights,
  faqs: amazonInfoFaqs('Amazon interview process', 'The Amazon interview process generally includes an Online Assessment, a technical phone screen, and a loop of coding, design and behavioral Leadership Principles rounds, plus a Bar Raiser.'),
  useCasesSection: {
    title: 'What Each Amazon Interview Stage Evaluates',
    cases: [
      'Online Assessment — problem-solving, code quality, and work-style signals',
      'Technical phone screen — coding under time pressure and communication',
      'Coding and data-structures loop rounds — patterns, complexity and testing',
      'System design rounds — requirements, scale, data model, trade-offs (LLD and HLD)',
      'Behavioral Leadership Principles rounds — ownership, judgment and measurable results',
      'The Bar Raiser — a calibrated outside-the-team check on the hiring bar',
    ],
  },
  relatedLinks: infoRelated('/amazon-interview-process/', [AMAZON_LOOP_LINK, AMAZON_OA_LINK]),
});

export const amazonInterviewRounds: LandingPageConfig = amazonServicePage({
  slug: 'amazon-interview-rounds',
  title: 'Amazon Interview Rounds: OA, Phone Screen, Loop, System Design & LP',
  description:
    'Every Amazon interview round explained — Online Assessment, technical phone screen, coding, system design (LLD/HLD), SQL and data, ML/science, behavioral Leadership Principles, writing assessment, the interview loop, and the Bar Raiser.',
  keywords: [
    'amazon interview rounds', 'amazon online assessment', 'amazon phone screen',
    'amazon coding interview', 'amazon system design interview', 'amazon bar raiser interview',
    'amazon interview loop',
  ],
  h1: 'Amazon Interview Rounds — Every Stage Explained',
  tagline:
    'A directory of the Amazon interview rounds — Online Assessment, phone screen, coding, system design, SQL/data, ML/science, behavioral Leadership Principles, writing assessment, the loop, and the Bar Raiser.',
  heroEyebrow: 'Amazon Interview Rounds — Updated August 2026',
  painIntro:
    'Want to drill into a specific Amazon round? This hub links to detailed guides for each stage — what it tests, how to prepare, and the common mistakes — with the reminder that which rounds you see depends on your role, level and team.',
  heroVariant:
    'From this hub you can dive into every documented Amazon interview round: Online Assessment, recruiter screen, technical phone screen, coding and data structures, algorithms, system design (low-level and high-level), SQL assessment, behavioral and Leadership Principles rounds, machine-learning and Applied Science evaluation, writing assessment, the interview loop, the Bar Raiser, and the debrief and result timeline. Each guide is informational; when you are ready to prepare, Amazon proxy interview support runs calibrated mock interviews for your exact loop.',
  highlights: roleInfoHighlights,
  faqs: amazonInfoFaqs('Amazon interview rounds', 'Amazon interview rounds can include an Online Assessment, a technical phone screen, coding and system design loop rounds, SQL/data and ML/science rounds where relevant, and multiple behavioral Leadership Principles conversations plus a Bar Raiser.'),
  relatedLinks: infoRelated('/amazon-interview-rounds/', [AMAZON_LOOP_LINK, AMAZON_BAR_RAISER_LINK]),
});

export const amazonCurrentHiring: LandingPageConfig = amazonServicePage({
  slug: 'amazon-current-hiring',
  title: 'Amazon Current Hiring 2026: Roles, Teams, Technologies & Locations',
  description:
    'A snapshot of Amazon hiring in 2026 — the role families, teams, technologies and locations where Amazon and AWS are actively hiring, from SDE and Applied Science to Data, Security, GenAI and agentic AI. Openings change frequently.',
  keywords: [
    'amazon current hiring', 'amazon hiring 2026', 'amazon jobs 2026', 'amazon hiring roles',
    'amazon aws hiring', 'amazon ai hiring', 'amazon hiring locations',
  ],
  h1: 'Amazon Current Hiring in 2026',
  tagline:
    'Where Amazon and AWS are hiring in 2026 — the role families, teams, technologies and locations to target. Openings change frequently, so treat this as direction, not a live count.',
  heroEyebrow: 'Amazon Current Hiring — August 2026 Snapshot',
  painIntro:
    'Not sure where to aim? This is a current snapshot of Amazon hiring direction across role families, teams, technologies and locations — so you can target the right family and level before you apply.',
  heroVariant:
    'As of August 2026, Amazon and AWS continue significant hiring across Software Development, AWS, Generative AI and agentic AI, Machine Learning, Applied and Research Science, Data Engineering and Business Intelligence, Security, Cloud, Systems and Infrastructure, Networking, Solutions Architecture, Frontend, TPM, Product and Program Management, Quality Engineering, Robotics, Devices and Alexa, Ads, Search and Recommendations, Prime and Prime Video, Payments, Supply Chain, and data-center infrastructure. Openings change frequently — Amazon openings and volumes are not hard-coded here. Use this to pick a target, then let Get Amazon Interview Scheduled and candidate marketing run the campaign.',
  highlights: scheduledHighlights,
  faqs: amazonInfoFaqs('Amazon current hiring landscape', 'Amazon and AWS hire across software, AWS, AI/ML and GenAI, Applied Science, data, security, cloud, infrastructure, solutions architecture, TPM/PM, and more — with volumes that change frequently.'),
  relatedLinks: infoRelated('/amazon-current-hiring/', [AMAZON_CANDIDATE_MARKETING_LINK, AMAZON_GET_SCHEDULED_LINK]),
});

export const amazonStarMethod: LandingPageConfig = amazonServicePage({
  slug: 'amazon-star-method-interview',
  title: 'Amazon STAR Method: Structure Leadership Principles Answers That Pass',
  description:
    'The STAR method for Amazon Leadership Principles interviews — Situation, Task, Action and Result — with the ownership, trade-offs and metrics Amazon interviewers probe for, and the common mistakes that sink otherwise strong stories.',
  keywords: [
    'amazon star method', 'amazon star method interview', 'amazon behavioral interview',
    'amazon leadership principles star', 'star answers amazon', 'amazon behavioral answers',
  ],
  h1: 'The Amazon STAR Method for Leadership Principles',
  tagline:
    'How to structure Amazon behavioral answers — Situation, Task, Action and Result — so they survive the follow-up probes and demonstrate real ownership and impact.',
  heroEyebrow: 'Amazon STAR Method — Behavioral Interview',
  painIntro:
    'Amazon behavioral rounds live or die on structure and ownership. STAR is the format interviewers expect — but most candidates spend too long on Situation and too little on Action, the part that actually shows what YOU did.',
  heroVariant:
    'STAR for Amazon: keep the Situation brief; state the Task as your personal ownership; make the Action the largest part — what you did, your reasoning, the alternatives and trade-offs, the conflict or risk, the decision, the implementation, and the customer impact; and give a Result that is measurable where it is real, plus what you learned. Avoid too much "we", vague stories, invented metrics, generic leadership clichés, no ownership, no decision, no difficulty, and no result. We help you build truthful STAR stories mapped to the right Leadership Principles — we never fabricate experience or metrics.',
  highlights: roleInfoHighlights,
  faqs: amazonInfoFaqs('Amazon STAR method behavioral interview', 'The STAR method structures Amazon behavioral answers as Situation, Task, Action (the largest part — what you personally did) and Result, tied to Amazon’s Leadership Principles.'),
  relatedLinks: infoRelated('/amazon-star-method-interview/', [AMAZON_BEHAVIORAL_LINK, AMAZON_LP_HUB_LINK]),
});

// ─── Category export ─────────────────────────────────────────────────────────

export const amazonCorePages: LandingPageConfig[] = [
  amazonMasterHub,
  amazonProxyInterviewSupport,
  amazonProxyJobSupport,
  getAmazonInterviewScheduled,
  amazonCandidateMarketing,
  amazonProfileEngineering,
  amazonRecruiterOutreach,
  amazonHiringProcess,
  amazonInterviewProcess,
  amazonInterviewRounds,
  amazonCurrentHiring,
  amazonStarMethod,
];
