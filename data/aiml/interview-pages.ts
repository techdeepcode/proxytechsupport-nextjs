import type { LandingPageConfig, LandingRelatedLink } from '../landing-pages';
import {
  aimlPage,
  relatedLinks,
  interviewHighlights,
  interviewFaqs,
  EXISTING,
  HUB_LINK,
} from './shared';

// ─── Phase 10: AI/ML interview proxy pages ──────────────────────────────────

interface InterviewInput {
  slug: string;
  subject: string;
  titleShort: string;
  focus: string;
  scenarios: [string, string, string, string, string, string];
  techLinks: LandingRelatedLink[];
  roleLinks: LandingRelatedLink[];
  scheduledLink: LandingRelatedLink;
}

/** Mandated existing interview anchors every interview page links to. */
const interviewAnchors: LandingRelatedLink[] = [
  EXISTING.aimlProxy,
  EXISTING.mlopsProxy,
  EXISTING.genaiGuide,
  EXISTING.finalRound,
  EXISTING.technicalUsa,
];

function buildInterviewPage(i: InterviewInput): LandingPageConfig {
  return aimlPage({
    slug: i.slug,
    title: `${i.titleShort} — Live Real-Time Interview Guidance`,
    description: `${i.subject}. Discreet real-time proxy interview support from in-house AI/ML experts — coding, ML system design, GenAI/RAG, and scenario rounds. Same-day available.`.slice(0, 154),
    keywords: [
      `${i.subject}`, `${i.subject.toLowerCase()} help`, 'AI ML proxy interview support',
      'AI ML interview help', 'GenAI interview support', 'ML system design interview support',
    ],
    h1: `${i.titleShort} — Live Guidance During Your Interview`,
    tagline: `Discreet real-time expert guidance during your live interview — ${i.focus}. Calibrated to the role, company, and format.`,
    heroEyebrow: 'AI/ML Interview Support — 2026',
    painIntro: `Interview scheduled but not confident about the hard rounds? ${i.focus}. Our in-house AI/ML experts join your live session and guide you through it in real time — coding, system design, and scenario questions.`,
    heroVariant:
      'AI/ML interviews are rigorous — live coding, ML/LLM system design, GenAI and RAG architecture, MLOps scenarios, and behavioral rounds. We run calibrated mock interviews beforehand and provide discreet real-time guidance during the real interview, aligned to your background and the exact company format.',
    geoLine: `Supporting AI/ML interview candidates across the USA, Canada, UK, Europe, Australia, Singapore, and worldwide.`,
    timezoneNote: 'Available for interviews across all major time zones — EST, CST, PST, GMT, CET, AEST, SGT.',
    highlights: interviewHighlights,
    faqs: interviewFaqs(i.subject.replace(/ interview.*/i, '')),
    useCasesSection: {
      title: 'Interview Scenarios We Help Candidates Navigate',
      cases: [...i.scenarios],
    },
    proxySection: {
      title: 'How Our AI/ML Proxy Interview Support Works',
      intro:
        'Confidential, role-specific, and calibrated to employer expectations. Whether it is a FAANG-style loop, a product-company panel, or a consulting client round, our expert joins your session and guides you in real time.',
      points: [
        'Share your interview date, role, company/format, and likely topics via WhatsApp',
        'Pre-interview alignment session to calibrate answers to your background',
        'Expert provides discreet real-time guidance throughout the live interview',
        'Coverage for coding, ML/LLM system design, GenAI/RAG, and MLOps scenario rounds',
        'Post-interview debrief and support for follow-up and final rounds',
      ],
    },
    bottomCTAHeading: 'AI/ML Interview Coming Up? Get Expert Live Guidance Now',
    bottomCTABody: `Real-time proxy support calibrated to your ${i.titleShort.toLowerCase()} — contact ProxyTechSupport on WhatsApp now. Same-day available.`,
    relatedLinks: relatedLinks({
      geoLinks: [HUB_LINK, i.scheduledLink],
      techLinks: i.techLinks.slice(0, 2),
      problemLink: { label: 'Why AI/ML interviews are failing', href: '/why-ai-ml-interviews-are-failing/' },
      proxyLink: EXISTING.aimlProxy,
      additionalLinks: [
        ...interviewAnchors,
        ...i.roleLinks,
        ...i.techLinks.slice(2),
        i.scheduledLink,
        HUB_LINK,
      ],
    }),
  });
}

const L = (label: string, href: string): LandingRelatedLink => ({ label, href });
const roleAiEng = L('AI Engineer job support', '/ai-engineer-job-support/');
const roleMlEng = L('ML Engineer job support', '/machine-learning-engineer-job-support/');
const roleGenai = L('GenAI Engineer job support', '/genai-engineer-job-support/');
const roleMlops = L('MLOps Engineer job support', '/mlops-engineer-job-support/');
const roleDs = L('Data Scientist job support', '/data-scientist-job-support/');
const roleArch = L('AI Solutions Architect job support', '/ai-solutions-architect-job-support/');
const rolePlatform = L('AI Platform Engineer job support', '/ai-platform-engineer-job-support/');
const roleRag = L('RAG Engineer job support', '/rag-engineer-job-support/');
const roleAgentic = L('Agentic AI Engineer job support', '/agentic-ai-engineer-job-support/');

const schedUsa = L('Get AI/ML interview scheduled USA', '/get-ai-ml-interview-scheduled-usa/');
const schedGeneric = L('Get AI/ML interview scheduled', '/get-ai-ml-interview-scheduled/');
const schedGenai = L('Get GenAI interview scheduled', '/get-genai-interview-scheduled/');
const schedMlops = L('Get MLOps interview scheduled', '/get-mlops-interview-scheduled/');
const schedDs = L('Get data science interview scheduled', '/get-data-science-interview-scheduled/');
const schedLlm = L('Get LLM engineer interview scheduled', '/get-llm-engineer-interview-scheduled/');
const schedArch = L('Get AI architect interview scheduled', '/get-ai-architect-interview-scheduled/');

const regionScenarios = (region: string): [string, string, string, string, string, string] => [
  `A ${region} AI Engineer loop — live coding plus LLM/RAG application design`,
  `A ${region} ML Engineer panel — ML system design and model deployment scenarios`,
  `A ${region} GenAI round — prompting, evaluation, and agent architecture questions`,
  `A ${region} MLOps interview — CI/CD, monitoring, and reliability scenarios`,
  `A ${region} data science interview — modeling, experimentation, and metrics`,
  `A ${region} final-round panel mixing technical depth and behavioral questions`,
];

const commonTech: LandingRelatedLink[] = [
  L('LLM job support', '/llm-job-support/'),
  L('RAG job support', '/rag-job-support/'),
  L('MLOps job support', '/mlops-job-support/'),
];

const I = (
  slug: string, subject: string, titleShort: string, focus: string,
  scenarios: [string, string, string, string, string, string],
  techLinks: LandingRelatedLink[], roleLinks: LandingRelatedLink[], scheduledLink: LandingRelatedLink,
): LandingPageConfig =>
  buildInterviewPage({ slug, subject, titleShort, focus, scenarios, techLinks, roleLinks, scheduledLink });

// Regional interview pages
export const aiMlInterviewProxySupportUsa = I(
  'ai-ml-interview-proxy-support-usa', 'AI/ML interview proxy support USA', 'AI/ML Interview Proxy Support USA',
  'US-market AI/ML interviews — FAANG loops, AI startups, and enterprise panels',
  regionScenarios('US'), commonTech, [roleAiEng, roleMlEng, roleGenai], schedUsa,
);
export const aiMlInterviewProxySupportCanada = I(
  'ai-ml-interview-proxy-support-canada', 'AI/ML interview proxy support Canada', 'AI/ML Interview Proxy Support Canada',
  'Canadian AI/ML interviews — banks, startups, and product companies',
  regionScenarios('Canadian'), commonTech, [roleAiEng, roleMlEng, roleDs], L('Get AI/ML interview scheduled Canada', '/get-ai-ml-interview-scheduled-canada/'),
);
export const aiMlInterviewProxySupportUk = I(
  'ai-ml-interview-proxy-support-uk', 'AI/ML interview proxy support UK', 'AI/ML Interview Proxy Support UK',
  'UK AI/ML interviews — London fintech, banking, and startups',
  regionScenarios('UK'), commonTech, [roleAiEng, roleMlEng, roleGenai], L('Get AI/ML interview scheduled UK', '/get-ai-ml-interview-scheduled-uk/'),
);
export const aiMlInterviewProxySupportAustralia = I(
  'ai-ml-interview-proxy-support-australia', 'AI/ML interview proxy support Australia', 'AI/ML Interview Proxy Support Australia',
  'Australian AI/ML interviews — banks, product companies, and government',
  regionScenarios('Australian'), commonTech, [roleAiEng, roleMlEng, roleDs], L('Get AI/ML interview scheduled Australia', '/get-ai-ml-interview-scheduled-australia/'),
);
export const aiMlInterviewProxySupportEurope = I(
  'ai-ml-interview-proxy-support-europe', 'AI/ML interview proxy support Europe', 'AI/ML Interview Proxy Support Europe',
  'European AI/ML interviews — enterprises, scale-ups, and research-driven teams',
  regionScenarios('European'), commonTech, [roleAiEng, roleMlEng, roleGenai], L('Get AI/ML interview scheduled Germany', '/get-ai-ml-interview-scheduled-germany/'),
);
export const aiMlInterviewProxySupportSingapore = I(
  'ai-ml-interview-proxy-support-singapore', 'AI/ML interview proxy support Singapore', 'AI/ML Interview Proxy Support Singapore',
  'Singapore AI/ML interviews — banks, fintech, and regional tech HQs',
  regionScenarios('Singapore'), commonTech, [roleAiEng, roleMlEng, roleMlops], L('Get AI/ML interview scheduled Singapore', '/get-ai-ml-interview-scheduled-singapore/'),
);

// Topic / role interview pages
export const genaiInterviewProxySupport = I(
  'genai-interview-proxy-support', 'GenAI interview proxy support', 'GenAI Interview Proxy Support',
  'GenAI interviews — LLM app design, prompting, RAG, and agents',
  [
    'A GenAI system-design round — design an LLM app end to end',
    'A prompting and evaluation deep-dive with real examples',
    'A RAG architecture question — retrieval, chunking, and grounding',
    'An agent-design scenario — tools, planning, and guardrails',
    'A cost/latency trade-off discussion for a GenAI feature',
    'A behavioral round on shipping GenAI responsibly',
  ],
  [L('Generative AI job support', '/generative-ai-job-support/'), L('Prompt engineering job support', '/prompt-engineering-job-support/'), L('RAG job support', '/rag-job-support/')],
  [roleGenai, roleAiEng], schedGenai,
);
export const llmInterviewProxySupport = I(
  'llm-interview-proxy-support', 'LLM interview proxy support', 'LLM Interview Proxy Support',
  'LLM interviews — architecture, fine-tuning, RAG, and evaluation',
  [
    'An LLM system-design round — architecture and scaling',
    'A fine-tuning vs RAG trade-off discussion',
    'An evaluation deep-dive — metrics and LLM-as-judge',
    'A prompting and structured-output problem',
    'A cost, latency, and context-window optimization question',
    'A behavioral round on LLM project ownership',
  ],
  [L('LLM job support', '/llm-job-support/'), L('Fine-tuning job support', '/fine-tuning-job-support/'), L('LLM evaluation job support', '/llm-evaluation-job-support/')],
  [L('LLM Engineer job support', '/llm-engineer-job-support/'), roleAiEng], schedLlm,
);
export const ragInterviewProxySupport = I(
  'rag-interview-proxy-support', 'RAG interview proxy support', 'RAG Interview Proxy Support',
  'RAG interviews — retrieval design, embeddings, and evaluation',
  [
    'A RAG system-design round — end-to-end retrieval architecture',
    'A chunking and embedding-strategy deep-dive',
    'A vector-database selection and tuning question',
    'A RAG evaluation and hallucination-mitigation scenario',
    'A latency and cost optimization discussion for RAG',
    'A behavioral round on delivering a RAG project',
  ],
  [L('RAG job support', '/rag-job-support/'), L('Vector database job support', '/vector-database-job-support/'), L('LLM evaluation job support', '/llm-evaluation-job-support/')],
  [roleRag, roleAiEng], schedGenai,
);
export const mlopsInterviewProxySupport = I(
  'mlops-interview-proxy-support', 'MLOps interview proxy support', 'MLOps Interview Proxy Support',
  'MLOps interviews — CI/CD, deployment, monitoring, and reliability',
  [
    'An MLOps system-design round — training-to-deployment pipeline',
    'A model-monitoring and drift-detection scenario',
    'A CI/CD-for-ML and reproducibility discussion',
    'A serving, scaling, and cost-optimization question',
    'An incident-response and rollback scenario',
    'A behavioral round on owning an ML platform',
  ],
  [L('MLOps job support', '/mlops-job-support/'), L('Model deployment job support', '/model-deployment-job-support/'), L('Model monitoring job support', '/model-monitoring-job-support/')],
  [roleMlops], schedMlops,
);
export const dataScienceInterviewProxySupport = I(
  'data-science-interview-proxy-support', 'Data science interview proxy support', 'Data Science Interview Proxy Support',
  'data science interviews — modeling, statistics, experimentation, and SQL',
  [
    'A modeling round — approach, features, and evaluation',
    'A statistics and experimentation (A/B testing) deep-dive',
    'A case study on framing a business problem as ML',
    'A coding and SQL round on real data',
    'A metrics and offline/online gap discussion',
    'A behavioral round on stakeholder communication',
  ],
  [L('scikit-learn job support', '/scikit-learn-job-support/'), L('Python AI/ML job support', '/python-ai-ml-job-support/'), L('Time series forecasting job support', '/time-series-forecasting-job-support/')],
  [roleDs], schedDs,
);
export const machineLearningEngineerInterviewProxySupport = I(
  'machine-learning-engineer-interview-proxy-support', 'ML Engineer interview proxy support', 'ML Engineer Interview Proxy Support',
  'ML Engineer interviews — ML system design, coding, and deployment',
  [
    'An ML system-design round — design a production ML system',
    'A live coding round — data structures and ML implementation',
    'A model-deployment and serving scenario',
    'A feature-engineering and data-pipeline discussion',
    'A model-evaluation and metrics deep-dive',
    'A behavioral round on end-to-end ML ownership',
  ],
  [L('Model deployment job support', '/model-deployment-job-support/'), L('PyTorch job support', '/pytorch-job-support/'), L('MLOps job support', '/mlops-job-support/')],
  [roleMlEng], schedUsa,
);
export const aiArchitectInterviewProxySupport = I(
  'ai-architect-interview-proxy-support', 'AI architect interview proxy support', 'AI Architect Interview Proxy Support',
  'AI architect interviews — system design, trade-offs, and governance',
  [
    'An AI platform architecture design round',
    'A GenAI/RAG reference-architecture discussion',
    'A build-vs-buy and technology-selection scenario',
    'A security, governance, and compliance deep-dive',
    'A cost, scale, and reliability trade-off question',
    'A stakeholder-facing architecture-defense round',
  ],
  [L('RAG job support', '/rag-job-support/'), L('Azure OpenAI job support', '/azure-openai-job-support/'), L('AI security & governance job support', '/ai-security-governance-job-support/')],
  [roleArch], schedArch,
);
export const aiPlatformEngineerInterviewProxySupport = I(
  'ai-platform-engineer-interview-proxy-support', 'AI platform engineer interview proxy support', 'AI Platform Engineer Interview Proxy Support',
  'AI platform interviews — platform design, infra, and tooling',
  [
    'An AI/ML platform design round',
    'An infra, scaling, and multi-tenancy scenario',
    'A developer-experience and self-service discussion',
    'A cost and reliability optimization question',
    'A Kubernetes/serving deep-dive for AI workloads',
    'A behavioral round on platform ownership',
  ],
  [L('MLOps job support', '/mlops-job-support/'), L('Kubeflow job support', '/kubeflow-job-support/'), L('Cloud AI engineer job support', '/cloud-ai-engineer-job-support/')],
  [rolePlatform], schedGeneric,
);
export const agenticAiInterviewProxySupport = I(
  'agentic-ai-interview-proxy-support', 'Agentic AI interview proxy support', 'Agentic AI Interview Proxy Support',
  'agentic AI interviews — agent design, tool use, and orchestration',
  [
    'An agent-architecture design round',
    'A tool-use, planning, and memory deep-dive',
    'A multi-agent orchestration scenario',
    'A guardrails, safety, and reliability discussion',
    'A cost and latency optimization question for agents',
    'A behavioral round on shipping agentic systems',
  ],
  [L('Agentic AI job support', '/agentic-ai-job-support/'), L('Multi-agent AI job support', '/multi-agent-ai-job-support/'), L('LangGraph job support', '/langgraph-job-support/')],
  [roleAgentic, roleAiEng], schedGeneric,
);
export const langchainLanggraphInterviewSupport = I(
  'langchain-langgraph-interview-support', 'LangChain LangGraph interview support', 'LangChain & LangGraph Interview Support',
  'LangChain/LangGraph interviews — chains, agents, and state',
  [
    'A LangChain architecture and composition round',
    'A LangGraph state and control-flow deep-dive',
    'An agent-and-tool design scenario',
    'A RAG-with-LangChain implementation question',
    'A debugging and observability discussion',
    'A behavioral round on framework trade-offs',
  ],
  [L('LangChain job support', '/langchain-job-support/'), L('LangGraph job support', '/langgraph-job-support/'), L('RAG job support', '/rag-job-support/')],
  [roleAiEng, roleAgentic], schedGenai,
);
export const azureOpenaiInterviewSupport = I(
  'azure-openai-interview-support', 'Azure OpenAI interview support', 'Azure OpenAI Interview Support',
  'Azure OpenAI interviews — enterprise GenAI on Azure',
  [
    'An Azure OpenAI architecture and security round',
    'A networking, identity, and quota scenario',
    'A RAG-on-Azure design discussion',
    'A cost and content-filter tuning question',
    'An enterprise-integration and governance deep-dive',
    'A behavioral round on delivering Azure GenAI',
  ],
  [L('Azure OpenAI job support', '/azure-openai-job-support/'), L('.NET AI/ML job support', '/dotnet-ai-ml-job-support/'), L('RAG job support', '/rag-job-support/')],
  [roleAiEng, roleArch], schedGeneric,
);
export const awsBedrockInterviewSupport = I(
  'aws-bedrock-interview-support', 'AWS Bedrock interview support', 'AWS Bedrock Interview Support',
  'AWS Bedrock interviews — GenAI on AWS',
  [
    'A Bedrock architecture and model-selection round',
    'A Bedrock Agents and Knowledge Bases scenario',
    'An IAM, VPC, and security deep-dive',
    'A throughput and cost-optimization question',
    'A Guardrails and responsible-AI discussion',
    'A behavioral round on delivering AWS GenAI',
  ],
  [L('AWS Bedrock job support', '/aws-bedrock-job-support/'), L('Google Vertex AI job support', '/google-vertex-ai-job-support/'), L('RAG job support', '/rag-job-support/')],
  [roleAiEng, roleArch], schedGeneric,
);
export const pythonAiMlInterviewSupport = I(
  'python-ai-ml-interview-support', 'Python AI/ML interview support', 'Python AI/ML Interview Support',
  'Python AI/ML interviews — coding, data structures, and ML libraries',
  [
    'A Python live-coding round — data structures and algorithms',
    'A NumPy/Pandas data-manipulation problem',
    'An ML-library implementation question',
    'A code-design and clean-code discussion',
    'A performance and vectorization deep-dive',
    'A behavioral round on Python project ownership',
  ],
  [L('Python AI/ML job support', '/python-ai-ml-job-support/'), L('scikit-learn job support', '/scikit-learn-job-support/'), L('PyTorch job support', '/pytorch-job-support/')],
  [roleAiEng, roleMlEng, roleDs], schedGeneric,
);

// ─── Batch export ────────────────────────────────────────────────────────────

export const aimlInterviewPages: LandingPageConfig[] = [
  aiMlInterviewProxySupportUsa, aiMlInterviewProxySupportCanada, aiMlInterviewProxySupportUk,
  aiMlInterviewProxySupportAustralia, aiMlInterviewProxySupportEurope, aiMlInterviewProxySupportSingapore,
  genaiInterviewProxySupport, llmInterviewProxySupport, ragInterviewProxySupport, mlopsInterviewProxySupport,
  dataScienceInterviewProxySupport, machineLearningEngineerInterviewProxySupport,
  aiArchitectInterviewProxySupport, aiPlatformEngineerInterviewProxySupport, agenticAiInterviewProxySupport,
  langchainLanggraphInterviewSupport, azureOpenaiInterviewSupport, awsBedrockInterviewSupport,
  pythonAiMlInterviewSupport,
];
