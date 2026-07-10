import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import {
  aimlPage,
  relatedLinks,
  techHighlights,
  kbFaqs,
  EXISTING,
  HUB_LINK,
  PRODUCTION_LINK,
  CANDIDATE_MARKETING_LINK,
  GET_SCHEDULED_LINK,
} from './shared';

// ─── Phase 15: Comparison & problem-solution pages (high-intent) ────────────

interface CmpInput {
  slug: string;
  topic: string;
  title: string;
  h1: string;
  metaDesc: string;
  intro: string;
  heroVariant: string;
  cases: [string, string, string, string, string, string];
  keywords: string[];
  links: LandingRelatedLink[];
  problemLink: LandingRelatedLink;
  proxyLink: LandingRelatedLink;
}

function buildCmpPage(i: CmpInput): LandingPageConfig {
  return aimlPage({
    slug: i.slug,
    title: i.title.slice(0, 59),
    description: i.metaDesc.slice(0, 154),
    keywords: i.keywords,
    h1: i.h1,
    tagline: `A clear, practical breakdown to help you decide and act — with real-time AI/ML support available if you want hands-on help.`,
    heroEyebrow: 'AI/ML Guide',
    painIntro: i.intro,
    heroVariant: i.heroVariant,
    geoLine: 'Guidance for AI/ML professionals across the USA, Canada, UK, Europe, Australia, and worldwide.',
    timezoneNote: 'Support available across all major business hours if you want hands-on help.',
    highlights: techHighlights,
    faqs: kbFaqs(i.topic),
    useCasesSection: { title: 'What This Guide Covers', cases: [...i.cases] },
    proxySection: {
      title: 'When You Want Hands-On Help',
      intro:
        'If this is blocking a decision, a deliverable, or an interview, an expert can help you resolve it in real time.',
      points: [
        'Real-time AI/ML job support on your actual project',
        'Production issue support when something is broken now',
        'Proxy interview support and mock interviews for AI/ML rounds',
        'Profile positioning and candidate marketing to get more calls',
        'Confidential, in-house experts — same-day, NDAs available',
      ],
    },
    bottomCTAHeading: 'Want Expert AI/ML Help With This?',
    bottomCTABody:
      'Real-time job support, production fixes, interview guidance, or profile positioning — contact ProxyTechSupport on WhatsApp now.',
    relatedLinks: relatedLinks({
      geoLinks: [HUB_LINK, i.links[0] ?? HUB_LINK],
      techLinks: i.links.slice(1, 3),
      problemLink: i.problemLink,
      proxyLink: i.proxyLink,
      additionalLinks: [...i.links.slice(3), HUB_LINK, PRODUCTION_LINK, EXISTING.aimlGuide, EXISTING.ragGuide, EXISTING.mlopsGuide],
    }),
  });
}

const L = (label: string, href: string): LandingRelatedLink => ({ label, href });

export const aiMlJobSupportVsInterviewSupport = buildCmpPage({
  slug: 'ai-ml-job-support-vs-interview-support',
  topic: 'AI/ML job support vs interview support',
  title: 'AI/ML Job Support vs Interview Support',
  h1: 'AI/ML Job Support vs Interview Support — Which Do You Need?',
  metaDesc: 'AI/ML job support vs interview support — what each covers, when to use which, and how they work together. A clear guide for AI, GenAI, and MLOps professionals.',
  intro: 'People often confuse AI/ML job support with interview support, but they solve different problems at different moments in your career.',
  heroVariant: 'Job support helps you deliver and survive in a role you already have; interview support helps you land the next one. This guide clarifies exactly what each covers, when to use which, and how many people combine both — get the interview with interview support, then keep the role with job support.',
  cases: [
    'What AI/ML job support covers and when you need it',
    'What interview support (proxy + prep) covers and when you need it',
    'Key differences in format, timing, and outcome',
    'How production support and onboarding fit into job support',
    'How mock interviews and proxy support fit into interview support',
    'How to combine both across your career',
  ],
  keywords: ['AI ML job support vs interview support', 'AI ML job support', 'AI ML interview support', 'proxy interview vs job support', 'AI ML career support', 'which AI ML support'],
  links: [HUB_LINK, L('AI/ML interview proxy USA', '/ai-ml-interview-proxy-support-usa/'), EXISTING.aimlProxy, PRODUCTION_LINK, GET_SCHEDULED_LINK],
  problemLink: PRODUCTION_LINK, proxyLink: EXISTING.aimlProxy,
});

export const genaiJobSupportVsMlopsJobSupport = buildCmpPage({
  slug: 'genai-job-support-vs-mlops-job-support',
  topic: 'GenAI job support vs MLOps job support',
  title: 'GenAI vs MLOps Job Support — Compared',
  h1: 'GenAI Job Support vs MLOps Job Support — Which Fits Your Role?',
  metaDesc: 'GenAI vs MLOps job support compared — what each covers, the skills involved, and which matches your role and problems. A clear guide for AI/ML professionals.',
  intro: 'GenAI and MLOps are both in demand, but they involve different skills, problems, and day-to-day work.',
  heroVariant: 'GenAI work centers on LLM applications, prompting, RAG, and agents; MLOps centers on pipelines, deployment, monitoring, and reliability. This guide compares the two so you can identify which support you actually need — and where the roles increasingly overlap.',
  cases: [
    'What GenAI job support covers (LLM apps, RAG, agents)',
    'What MLOps job support covers (CI/CD, deployment, monitoring)',
    'The overlap: deploying and operating GenAI systems',
    'Which problems map to which support',
    'How the two roles pay and progress',
    'How to skill up in either direction',
  ],
  keywords: ['GenAI vs MLOps job support', 'GenAI job support', 'MLOps job support', 'GenAI vs MLOps', 'AI ML role comparison', 'which AI ML role'],
  links: [L('Generative AI job support', '/generative-ai-job-support/'), L('MLOps job support', '/mlops-job-support/'), L('GenAI Engineer job support', '/genai-engineer-job-support/'), L('MLOps Engineer job support', '/mlops-engineer-job-support/'), HUB_LINK],
  problemLink: PRODUCTION_LINK, proxyLink: L('MLOps interview proxy support', '/mlops-interview-proxy-support/'),
});

export const ragVsFineTuningJobSupport = buildCmpPage({
  slug: 'rag-vs-fine-tuning-job-support',
  topic: 'RAG vs fine-tuning',
  title: 'RAG vs Fine-Tuning — Which to Use',
  h1: 'RAG vs Fine-Tuning — Which Approach Should You Use?',
  metaDesc: 'RAG vs fine-tuning — when to use each, how they compare on cost, accuracy, and maintenance, and how to combine them. A practical guide with expert help available.',
  intro: 'RAG and fine-tuning are the two main ways to make an LLM work with your data, and choosing wrong wastes time and money.',
  heroVariant: 'RAG grounds answers in retrieved data; fine-tuning bakes behavior into the model. This guide compares them on accuracy, cost, freshness, and maintenance, explains when each wins, and shows how many production systems combine both.',
  cases: [
    'How RAG works and when it is the right choice',
    'How fine-tuning works and when it is the right choice',
    'Cost, accuracy, freshness, and maintenance trade-offs',
    'When to combine RAG and fine-tuning',
    'Common mistakes with each approach',
    'How to get help implementing either',
  ],
  keywords: ['RAG vs fine-tuning', 'RAG or fine-tuning', 'fine-tuning vs RAG', 'RAG job support', 'fine-tuning job support', 'LLM approach comparison'],
  links: [L('RAG job support', '/rag-job-support/'), L('Fine-tuning job support', '/fine-tuning-job-support/'), L('LoRA & QLoRA job support', '/lora-qlora-job-support/'), L('LLM job support', '/llm-job-support/'), HUB_LINK],
  problemLink: PRODUCTION_LINK, proxyLink: L('RAG interview proxy support', '/rag-interview-proxy-support/'),
});

export const langchainVsLanggraphJobSupport = buildCmpPage({
  slug: 'langchain-vs-langgraph-job-support',
  topic: 'LangChain vs LangGraph',
  title: 'LangChain vs LangGraph — Compared',
  h1: 'LangChain vs LangGraph — Which Should You Use?',
  metaDesc: 'LangChain vs LangGraph — how they differ, when to use each for LLM apps and agents, and how they work together. A practical guide with expert help available.',
  intro: 'LangChain and LangGraph come from the same ecosystem but solve different problems, and teams often pick the wrong one.',
  heroVariant: 'LangChain is a broad toolkit for LLM apps; LangGraph models stateful, cyclic agent workflows as explicit graphs. This guide explains when each fits, how they complement each other, and how to migrate or combine them.',
  cases: [
    'What LangChain is best at',
    'What LangGraph is best at (stateful agents)',
    'Key differences in control flow and state',
    'When to use each — and both together',
    'Migration and debugging considerations',
    'How to get help with either',
  ],
  keywords: ['LangChain vs LangGraph', 'LangGraph vs LangChain', 'LangChain job support', 'LangGraph job support', 'agent framework comparison', 'LLM framework choice'],
  links: [L('LangChain job support', '/langchain-job-support/'), L('LangGraph job support', '/langgraph-job-support/'), L('Agentic AI job support', '/agentic-ai-job-support/'), L('LangChain & LangGraph interview support', '/langchain-langgraph-interview-support/'), HUB_LINK],
  problemLink: PRODUCTION_LINK, proxyLink: L('Agentic AI interview proxy support', '/agentic-ai-interview-proxy-support/'),
});

export const azureOpenaiVsAwsBedrockJobSupport = buildCmpPage({
  slug: 'azure-openai-vs-aws-bedrock-job-support',
  topic: 'Azure OpenAI vs AWS Bedrock',
  title: 'Azure OpenAI vs AWS Bedrock — Compared',
  h1: 'Azure OpenAI vs AWS Bedrock — Which Platform Fits?',
  metaDesc: 'Azure OpenAI vs AWS Bedrock — models, features, security, and cost compared for enterprise GenAI. A practical guide with real-time expert help available.',
  intro: 'Azure OpenAI and AWS Bedrock are the two dominant enterprise GenAI platforms, and the choice shapes your whole architecture.',
  heroVariant: 'This guide compares Azure OpenAI and AWS Bedrock on model access, agents and knowledge bases, security and networking, governance, and cost — so you can choose the right platform for your enterprise and avoid expensive rework.',
  cases: [
    'Model access and capabilities on each platform',
    'Agents, knowledge bases, and RAG features compared',
    'Security, networking, and identity differences',
    'Governance, compliance, and content controls',
    'Cost and scaling considerations',
    'How to get help building on either',
  ],
  keywords: ['Azure OpenAI vs AWS Bedrock', 'Bedrock vs Azure OpenAI', 'Azure OpenAI job support', 'AWS Bedrock job support', 'enterprise GenAI platform', 'GenAI cloud comparison'],
  links: [L('Azure OpenAI job support', '/azure-openai-job-support/'), L('AWS Bedrock job support', '/aws-bedrock-job-support/'), L('Google Vertex AI job support', '/google-vertex-ai-job-support/'), L('AI Solutions Architect job support', '/ai-solutions-architect-job-support/'), HUB_LINK],
  problemLink: PRODUCTION_LINK, proxyLink: L('Azure OpenAI interview support', '/azure-openai-interview-support/'),
});

export const vectorDatabaseSelectionForRag = buildCmpPage({
  slug: 'vector-database-selection-for-rag',
  topic: 'vector database selection for RAG',
  title: 'Vector Database Selection for RAG',
  h1: 'Vector Database Selection for RAG — How to Choose',
  metaDesc: 'How to choose a vector database for RAG — Pinecone, Qdrant, Weaviate, and ChromaDB compared on performance, cost, features, and scale. Practical guide with expert help.',
  intro: 'Choosing the wrong vector database for RAG leads to poor retrieval, high cost, or painful re-platforming later.',
  heroVariant: 'This guide compares the leading vector databases — Pinecone, Qdrant, Weaviate, and ChromaDB — on performance, scaling, filtering, hybrid search, cost, and operational burden, and gives a decision framework for your use case.',
  cases: [
    'What matters when choosing a vector database for RAG',
    'Pinecone — strengths and trade-offs',
    'Qdrant and Weaviate — strengths and trade-offs',
    'ChromaDB — when it fits',
    'Performance, filtering, and hybrid search considerations',
    'A decision framework for your use case',
  ],
  keywords: ['vector database selection for RAG', 'best vector database RAG', 'Pinecone vs Qdrant', 'vector database comparison', 'vector database job support', 'RAG vector store'],
  links: [L('Vector database job support', '/vector-database-job-support/'), L('Pinecone job support', '/pinecone-job-support/'), L('Qdrant job support', '/qdrant-job-support/'), L('RAG job support', '/rag-job-support/'), L('Weaviate job support', '/weaviate-job-support/')],
  problemLink: PRODUCTION_LINK, proxyLink: L('RAG interview proxy support', '/rag-interview-proxy-support/'),
});

export const whyAiMlResumeGetsNoCalls = buildCmpPage({
  slug: 'why-ai-ml-resume-gets-no-calls',
  topic: 'why AI/ML resumes get no calls',
  title: 'Why Your AI/ML Resume Gets No Calls',
  h1: 'Why Your AI/ML Resume Gets No Calls — And How to Fix It',
  metaDesc: 'Why your AI/ML resume gets no interview calls — keyword gaps, weak impact framing, and ATS issues — and exactly how to fix each one. Practical guide with help available.',
  intro: 'You have real AI/ML skills but the interview calls are not coming — and the reason is almost never a lack of ability.',
  heroVariant: 'The usual culprits are a keyword mismatch, buried impact, and ATS-unfriendly structure that keep your profile out of recruiter searches. This guide breaks down each cause and shows exactly how to fix it — with candidate marketing available if you want it done for you.',
  cases: [
    'The keyword gaps that hide you from recruiter searches',
    'How buried impact kills strong profiles',
    'ATS problems that filter you out before a human sees you',
    'Positioning mismatches for the roles you target',
    'How to rewrite for AI/ML specifically',
    'When candidate marketing does it for you',
  ],
  keywords: ['why AI ML resume gets no calls', 'AI ML resume no interviews', 'AI ML resume not working', 'AI ML profile positioning', 'AI ML candidate marketing', 'fix AI ML resume'],
  links: [L('AI/ML profile positioning support', '/ai-ml-profile-positioning-support/'), CANDIDATE_MARKETING_LINK, GET_SCHEDULED_LINK, L('AI/ML resume & profile positioning guide', '/ai-ml-resume-profile-positioning-guide/'), EXISTING.candidateMarketing],
  problemLink: CANDIDATE_MARKETING_LINK, proxyLink: EXISTING.candidateMarketing,
});

export const whyAiMlInterviewsAreFailing = buildCmpPage({
  slug: 'why-ai-ml-interviews-are-failing',
  topic: 'why AI/ML interviews fail',
  title: 'Why Your AI/ML Interviews Are Failing',
  h1: 'Why Your AI/ML Interviews Are Failing — And How to Turn It Around',
  metaDesc: 'Why AI/ML interviews fail — weak system design, shallow GenAI answers, and poor project storytelling — and how to fix each. Practical guide with live support available.',
  intro: 'Getting interviews but not offers is a different problem from getting no calls — and it is very fixable.',
  heroVariant: 'AI/ML interviews fail most often on system design depth, GenAI/RAG specifics, and the ability to tell a crisp project story. This guide diagnoses the common failure points and shows how to fix them — with mock and proxy interview support available.',
  cases: [
    'Where AI/ML interviews are actually won and lost',
    'System design mistakes that sink candidates',
    'Shallow GenAI/RAG answers and how to deepen them',
    'Weak project storytelling and how to fix it',
    'Coding-round preparation gaps',
    'When mock and proxy interview support help',
  ],
  keywords: ['why AI ML interviews fail', 'failing AI ML interviews', 'AI ML interview mistakes', 'AI ML interview support', 'AI ML mock interview', 'pass AI ML interview'],
  links: [L('AI/ML interview preparation guide', '/ai-ml-interview-preparation-guide/'), L('AI/ML interview proxy USA', '/ai-ml-interview-proxy-support-usa/'), L('GenAI interview proxy support', '/genai-interview-proxy-support/'), EXISTING.finalRound, EXISTING.aimlProxy],
  problemLink: GET_SCHEDULED_LINK, proxyLink: EXISTING.aimlProxy,
});

export const howToGetAiMlInterviewsScheduled = buildCmpPage({
  slug: 'how-to-get-ai-ml-interviews-scheduled',
  topic: 'how to get AI/ML interviews scheduled',
  title: 'How to Get AI/ML Interviews Scheduled',
  h1: 'How to Get AI/ML Interviews Scheduled — A Practical Playbook',
  metaDesc: 'How to get AI/ML interviews scheduled — profile positioning, targeting, outreach, and pipeline building that actually generate calls. Practical playbook with help available.',
  intro: 'Waiting for calls after applying online rarely works for AI/ML roles — you need an active, deliberate approach.',
  heroVariant: 'This playbook covers profile positioning, role targeting, recruiter and hiring-manager outreach, and pipeline building that actually generate AI/ML interviews — plus how candidate marketing can run the whole process for you.',
  cases: [
    'Why passive applying fails for AI/ML roles',
    'Positioning your profile so it surfaces',
    'Targeting the right roles and companies',
    'Recruiter and hiring-manager outreach that works',
    'Building and managing an interview pipeline',
    'When to have candidate marketing do it for you',
  ],
  keywords: ['how to get AI ML interviews scheduled', 'get AI ML interview calls', 'AI ML job search playbook', 'AI ML recruiter outreach', 'AI ML candidate marketing', 'get AI ML interviews'],
  links: [GET_SCHEDULED_LINK, CANDIDATE_MARKETING_LINK, L('AI/ML profile positioning support', '/ai-ml-profile-positioning-support/'), L('Get AI/ML interview scheduled USA', '/get-ai-ml-interview-scheduled-usa/'), EXISTING.candidateMarketing],
  problemLink: CANDIDATE_MARKETING_LINK, proxyLink: EXISTING.aimlProxy,
});

export const howToSurviveNewAiMlJob = buildCmpPage({
  slug: 'how-to-survive-new-ai-ml-job',
  topic: 'surviving a new AI/ML job',
  title: 'How to Survive a New AI/ML Job',
  h1: 'How to Survive (and Thrive in) a New AI/ML Job',
  metaDesc: 'How to survive a new AI/ML job — ramping up fast, delivering early, handling standups and reviews, and avoiding early mistakes. Practical guide with support available.',
  intro: 'The first weeks in a new AI/ML role are high-stakes, and struggling silently is the fastest way to lose confidence and credibility.',
  heroVariant: 'This guide covers how to ramp onto an unfamiliar codebase, deliver early wins, handle standups and reviews, and avoid the mistakes that get flagged — with onboarding and job support available when you need backup.',
  cases: [
    'Ramping onto an unfamiliar AI/ML codebase fast',
    'Getting your environment and data access working',
    'Delivering early wins that build credibility',
    'Handling standups, reviews, and client calls',
    'Avoiding early mistakes that get flagged',
    'When onboarding and job support help',
  ],
  keywords: ['survive new AI ML job', 'new AI ML job help', 'AI ML onboarding', 'new machine learning job', 'AI ML first weeks', 'AI ML job support'],
  links: [L('AI/ML project onboarding support', '/ai-ml-project-onboarding-support/'), L('AI/ML client call & standup support', '/ai-ml-client-call-standup-support/'), HUB_LINK, L('AI/ML project onboarding guide', '/ai-ml-project-onboarding-guide/'), EXISTING.clientCall],
  problemLink: PRODUCTION_LINK, proxyLink: EXISTING.aimlProxy,
});

export const howToHandleAiMlProductionIssues = buildCmpPage({
  slug: 'how-to-handle-ai-ml-production-issues',
  topic: 'handling AI/ML production issues',
  title: 'How to Handle AI/ML Production Issues',
  h1: 'How to Handle AI/ML Production Issues Under Pressure',
  metaDesc: 'How to handle AI/ML production issues — triage, root-cause, and fix model drift, latency, RAG errors, and pipeline failures fast. Practical guide with 24/7 help available.',
  intro: 'When an AI system misbehaves in production, the pressure is high and the failure modes are unlike normal software bugs.',
  heroVariant: 'This guide gives you a calm, structured way to triage and resolve AI/ML incidents — model quality, infrastructure, data, and RAG-specific problems — plus safe rollback practices and when to pull in real-time production support.',
  cases: [
    'A triage framework for AI/ML incidents',
    'Separating model, data, and infra causes',
    'Debugging RAG and LLM answer-quality issues',
    'Handling latency, cost, and scaling incidents',
    'Safe rollback and recovery',
    'When to get real-time production support',
  ],
  keywords: ['handle AI ML production issues', 'AI ML production incident', 'AI ML production support', 'model drift fix', 'RAG production issues', 'ML incident response'],
  links: [PRODUCTION_LINK, L('AI production debugging support', '/ai-production-debugging-support/'), L('Model monitoring job support', '/model-monitoring-job-support/'), L('AI/ML production issue support guide', '/ai-ml-production-issue-support-guide/'), L('MLOps job support', '/mlops-job-support/')],
  problemLink: PRODUCTION_LINK, proxyLink: EXISTING.mlopsProxy,
});

export const howToExplainRagProjectInInterview = buildCmpPage({
  slug: 'how-to-explain-rag-project-in-interview',
  topic: 'explaining a RAG project in interview',
  title: 'How to Explain a RAG Project in Interview',
  h1: 'How to Explain a RAG Project in an Interview',
  metaDesc: 'How to explain a RAG project in an interview — architecture, decisions, evaluation, and impact — in a way that impresses. Practical guide with live interview support.',
  intro: 'Interviewers can tell the difference between someone who used RAG and someone who understands it — and your explanation is the tell.',
  heroVariant: 'This guide shows how to structure a RAG project story: the problem, your architecture and retrieval decisions, how you evaluated quality, the trade-offs you made, and the measurable impact — so you come across as someone who truly built it.',
  cases: [
    'A structure for explaining a RAG project clearly',
    'Framing the problem and requirements',
    'Justifying architecture and retrieval decisions',
    'Explaining evaluation and hallucination mitigation',
    'Communicating trade-offs and impact',
    'When live interview support helps',
  ],
  keywords: ['explain RAG project interview', 'RAG project interview answer', 'RAG interview', 'RAG interview proxy support', 'RAG system design interview', 'describe RAG project'],
  links: [L('RAG interview proxy support', '/rag-interview-proxy-support/'), L('RAG system design interview guide', '/rag-system-design-interview-guide/'), L('RAG job support', '/rag-job-support/'), L('RAG Engineer job support', '/rag-engineer-job-support/'), EXISTING.aimlProxy],
  problemLink: GET_SCHEDULED_LINK, proxyLink: L('RAG interview proxy support', '/rag-interview-proxy-support/'),
});

export const howToExplainMlopsProjectInInterview = buildCmpPage({
  slug: 'how-to-explain-mlops-project-in-interview',
  topic: 'explaining an MLOps project in interview',
  title: 'How to Explain an MLOps Project in Interview',
  h1: 'How to Explain an MLOps Project in an Interview',
  metaDesc: 'How to explain an MLOps project in an interview — pipelines, deployment, monitoring, and reliability outcomes — convincingly. Practical guide with live interview support.',
  intro: 'MLOps interviews reward candidates who can tell a clear story about how they made ML reliable in production.',
  heroVariant: 'This guide shows how to structure an MLOps project story: the reliability problem, your pipeline and deployment design, the monitoring you added, incidents you handled, and the measurable improvement in delivery and uptime.',
  cases: [
    'A structure for explaining an MLOps project',
    'Framing the reliability or delivery problem',
    'Justifying pipeline and deployment design',
    'Explaining monitoring and incident handling',
    'Communicating reliability and delivery outcomes',
    'When live interview support helps',
  ],
  keywords: ['explain MLOps project interview', 'MLOps project interview answer', 'MLOps interview', 'MLOps interview proxy support', 'MLOps system design interview', 'describe MLOps project'],
  links: [L('MLOps interview proxy support', '/mlops-interview-proxy-support/'), L('MLOps system design interview guide', '/mlops-system-design-interview-guide/'), L('MLOps job support', '/mlops-job-support/'), L('MLOps Engineer job support', '/mlops-engineer-job-support/'), EXISTING.mlopsProxy],
  problemLink: GET_SCHEDULED_LINK, proxyLink: L('MLOps interview proxy support', '/mlops-interview-proxy-support/'),
});

export const howToExplainGenaiProjectInInterview = buildCmpPage({
  slug: 'how-to-explain-genai-project-in-interview',
  topic: 'explaining a GenAI project in interview',
  title: 'How to Explain a GenAI Project in Interview',
  h1: 'How to Explain a GenAI Project in an Interview',
  metaDesc: 'How to explain a GenAI project in an interview — problem, architecture, prompting, evaluation, and impact — so you stand out. Practical guide with live interview support.',
  intro: 'GenAI is on every resume now, so how you explain your project is what separates you from the crowd.',
  heroVariant: 'This guide shows how to structure a GenAI project story: the problem, your LLM/RAG architecture, prompting and evaluation approach, safety and cost decisions, and the measurable impact — so you sound like a builder, not a demo-follower.',
  cases: [
    'A structure for explaining a GenAI project',
    'Framing the problem and why GenAI fit',
    'Justifying architecture, prompting, and RAG choices',
    'Explaining evaluation, safety, and cost decisions',
    'Communicating impact clearly',
    'When live interview support helps',
  ],
  keywords: ['explain GenAI project interview', 'GenAI project interview answer', 'GenAI interview', 'GenAI interview proxy support', 'GenAI system design interview', 'describe GenAI project'],
  links: [L('GenAI interview proxy support', '/genai-interview-proxy-support/'), L('GenAI system design interview guide', '/genai-system-design-interview-guide/'), L('Generative AI job support', '/generative-ai-job-support/'), L('GenAI Engineer job support', '/genai-engineer-job-support/'), EXISTING.genaiGuide],
  problemLink: GET_SCHEDULED_LINK, proxyLink: L('GenAI interview proxy support', '/genai-interview-proxy-support/'),
});

export const howToExplainAgenticAiProjectInInterview = buildCmpPage({
  slug: 'how-to-explain-agentic-ai-project-in-interview',
  topic: 'explaining an agentic AI project in interview',
  title: 'Explain an Agentic AI Project in Interview',
  h1: 'How to Explain an Agentic AI Project in an Interview',
  metaDesc: 'How to explain an agentic AI project in an interview — agent design, tools, orchestration, guardrails, and impact — convincingly. Practical guide with live support.',
  intro: 'Agentic AI is the newest hot topic, and interviewers probe hard to separate real builders from the hype.',
  heroVariant: 'This guide shows how to structure an agentic AI project story: the task, your agent architecture and tool design, orchestration and state handling, guardrails and reliability, and the measurable outcome — so you demonstrate genuine depth.',
  cases: [
    'A structure for explaining an agentic AI project',
    'Framing the task and why agents fit',
    'Justifying agent architecture and tool design',
    'Explaining orchestration, state, and guardrails',
    'Communicating reliability and impact',
    'When live interview support helps',
  ],
  keywords: ['explain agentic AI project interview', 'agentic AI interview answer', 'agentic AI interview', 'agentic AI interview proxy support', 'multi-agent interview', 'describe agent project'],
  links: [L('Agentic AI interview proxy support', '/agentic-ai-interview-proxy-support/'), L('Agentic AI job support', '/agentic-ai-job-support/'), L('Multi-agent AI job support', '/multi-agent-ai-job-support/'), L('Agentic AI Engineer job support', '/agentic-ai-engineer-job-support/'), EXISTING.ragGuide],
  problemLink: GET_SCHEDULED_LINK, proxyLink: L('Agentic AI interview proxy support', '/agentic-ai-interview-proxy-support/'),
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const aimlComparisonPages: LandingPageConfig[] = [
  aiMlJobSupportVsInterviewSupport, genaiJobSupportVsMlopsJobSupport, ragVsFineTuningJobSupport,
  langchainVsLanggraphJobSupport, azureOpenaiVsAwsBedrockJobSupport, vectorDatabaseSelectionForRag,
  whyAiMlResumeGetsNoCalls, whyAiMlInterviewsAreFailing, howToGetAiMlInterviewsScheduled,
  howToSurviveNewAiMlJob, howToHandleAiMlProductionIssues, howToExplainRagProjectInInterview,
  howToExplainMlopsProjectInInterview, howToExplainGenaiProjectInInterview,
  howToExplainAgenticAiProjectInInterview,
];
