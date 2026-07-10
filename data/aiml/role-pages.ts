import type { LandingPageConfig, LandingRelatedLink, LandingFaqItem } from '../landing-pages';
import {
  aimlPage,
  relatedLinks,
  roleHighlights,
  EXISTING,
  HUB_LINK,
  PRODUCTION_LINK,
  PROFILE_LINK,
  CANDIDATE_MARKETING_LINK,
} from './shared';

// ─── Phase 9: Role-wise AI/ML pages ─────────────────────────────────────────

interface RoleInput {
  slug: string;
  role: string;
  focus: string;
  dailyWork: string;
  prodTasks: [string, string, string];
  topics: [string, string];
  techLinks: LandingRelatedLink[];
  interviewLink: LandingRelatedLink;
  profileLink: LandingRelatedLink;
  titleShort?: string;
}

const countryLinks: LandingRelatedLink[] = [
  { label: 'AI/ML job support USA', href: '/usa-ai-ml-job-support/' },
  { label: 'AI/ML job support UK', href: '/uk-ai-ml-job-support/' },
  { label: 'AI/ML job support Canada', href: '/canada-ai-ml-job-support/' },
];

function roleFaqs(role: string, focus: string): LandingFaqItem[] {
  return [
    {
      question: `What job support do you provide for ${role}s?`,
      answer: `We provide real-time, hands-on job support for ${role}s. ${focus} An in-house expert who has done the role joins your working hours and helps with your actual deliverables — design, implementation, debugging, code review, production issues, and the meetings around them. Same-day start, fully confidential.`,
    },
    {
      question: `What real production tasks do you help ${role}s with?`,
      answer: `The real work of the role — not toy examples. That includes shipping features under deadline, resolving production incidents, handling code review feedback, making architecture decisions defensible, and keeping delivery on track during high-pressure periods. We work the ticket with you until it is done.`,
    },
    {
      question: `Do you cover ${role} interviews?`,
      answer: `Yes. We prepare you for ${role} interviews — coding, system design, and scenario rounds — and can provide live proxy interview support during the real interview. We also position your profile so recruiters searching for ${role}s actually find you.`,
    },
    {
      question: `Can you help me transition into a ${role} role?`,
      answer: `Yes. Many clients are moving into the role from an adjacent one. We help you close the gaps, reframe your existing experience, prepare for the interviews, and then deliver confidently once you are in the seat with ongoing job support.`,
    },
    {
      question: 'Is it confidential and how fast can I start?',
      answer:
        'Fully confidential, with NDAs available on request, and we can usually start the same day. Message us on WhatsApp with your role, stack, and situation and we will match you with the right expert.',
    },
  ];
}

function buildRolePage(i: RoleInput): LandingPageConfig {
  const short = i.titleShort ?? i.role;
  return aimlPage({
    slug: i.slug,
    title: `${short} Job Support — Real-Time Expert Help`,
    description: `Real-time ${i.role} job support: project help, production tasks, interview support, and candidate marketing. ${i.focus}`.slice(0, 154),
    keywords: [
      `${i.role} job support`, `${i.role} support`, `${i.role} interview support`,
      `${i.role} candidate marketing`, `${i.role} project support`, `${i.role} production support`,
    ],
    h1: `${i.role} Job Support — Project, Production, Interview & Profile Help`,
    tagline: `Real-time support mapped to the ${i.role} role — ${i.dailyWork}. Project help, production backup, interviews, and profile positioning.`,
    heroEyebrow: `${short} Support — 2026`,
    painIntro: `Working as a ${i.role} (or moving into the role) and under pressure? ${i.focus} When a deliverable stalls, a production issue lands, or an interview looms, you need an expert who has held the seat.`,
    heroVariant: `Our in-house experts have worked as ${i.role}s and support the full scope of the role: ${i.dailyWork}. We back you on real tickets, during production incidents, in the meetings that shape your reputation, and in interviews — same-day and confidentially.`,
    geoLine: `Supporting ${i.role}s across the USA, Canada, UK, Europe, Australia, Singapore, and worldwide.`,
    timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
    highlights: roleHighlights,
    faqs: roleFaqs(i.role, i.focus),
    useCasesSection: {
      title: `${i.role} Situations We Help With`,
      cases: [
        i.prodTasks[0],
        i.prodTasks[1],
        i.prodTasks[2],
        `A live ${i.role} interview covering ${i.topics[0]} and ${i.topics[1]}`,
        `Onboarding into a new ${i.role} position on an unfamiliar stack`,
        `A ${i.role} profile that needs positioning so recruiters actually call`,
      ],
    },
    proxySection: {
      title: `${i.role} Interview & Candidate Marketing`,
      intro: `Getting into and moving up as a ${i.role} takes interview readiness and a profile recruiters find. We provide live proxy interview support for ${i.role} interviews and candidate marketing to generate the calls.`,
      points: [
        `Live, discreet guidance during ${i.role} technical and system-design rounds`,
        `Coverage of ${i.topics[0]} and ${i.topics[1]} with real project examples`,
        `Profile positioning around the exact keywords recruiters use for ${i.role}s`,
        'Active candidate marketing and recruiter outreach to build an interview pipeline',
        'Ongoing job support so you deliver confidently once you land the role',
      ],
    },
    bottomCTAHeading: `Need ${i.role} Job Support or Interview Help Now?`,
    bottomCTABody: `In-house experts who have held the ${i.role} seat — project work, production backup, live interview guidance, or profile positioning. Contact ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [HUB_LINK, countryLinks[0]],
      techLinks: i.techLinks.slice(0, 2),
      problemLink: PRODUCTION_LINK,
      proxyLink: i.interviewLink,
      additionalLinks: [
        ...i.techLinks.slice(2),
        i.interviewLink,
        i.profileLink,
        CANDIDATE_MARKETING_LINK,
        PROFILE_LINK,
        ...countryLinks.slice(1),
        HUB_LINK,
        PRODUCTION_LINK,
        EXISTING.aimlGuide,
      ],
    }),
  });
}

const L = (label: string, href: string): LandingRelatedLink => ({ label, href });
const R = (
  slug: string, role: string, focus: string, dailyWork: string,
  prodTasks: [string, string, string], topics: [string, string],
  techLinks: LandingRelatedLink[], interviewLink: LandingRelatedLink, profileLink: LandingRelatedLink,
  titleShort?: string,
): LandingPageConfig =>
  buildRolePage({ slug, role, focus, dailyWork, prodTasks, topics, techLinks, interviewLink, profileLink, titleShort });

const aimlUsaInterview = L('AI/ML interview proxy USA', '/ai-ml-interview-proxy-support-usa/');
const genaiInterview = L('GenAI interview proxy support', '/genai-interview-proxy-support/');
const llmInterview = L('LLM interview proxy support', '/llm-interview-proxy-support/');
const ragInterview = L('RAG interview proxy support', '/rag-interview-proxy-support/');
const mlopsInterview = L('MLOps interview proxy support', '/mlops-interview-proxy-support/');
const dsInterview = L('Data science interview proxy support', '/data-science-interview-proxy-support/');
const mleInterview = L('ML Engineer interview proxy support', '/machine-learning-engineer-interview-proxy-support/');
const archInterview = L('AI architect interview proxy support', '/ai-architect-interview-proxy-support/');
const platformInterview = L('AI platform engineer interview proxy support', '/ai-platform-engineer-interview-proxy-support/');
const agenticInterview = L('Agentic AI interview proxy support', '/agentic-ai-interview-proxy-support/');

const aiEngProfile = L('AI Engineer profile positioning', '/ai-engineer-profile-positioning/');
const mlEngProfile = L('ML Engineer profile positioning', '/ml-engineer-profile-positioning/');
const llmEngProfile = L('LLM Engineer profile positioning', '/llm-engineer-profile-positioning/');
const archProfile = L('AI Architect profile positioning', '/ai-architect-profile-positioning/');
const genaiMarketing = L('GenAI candidate marketing', '/genai-candidate-marketing/');
const mlopsMarketing = L('MLOps candidate marketing', '/mlops-candidate-marketing/');
const dsMarketing = L('Data science candidate marketing', '/data-science-candidate-marketing/');

export const aiEngineerJobSupport = R(
  'ai-engineer-job-support', 'AI Engineer',
  'AI Engineers build LLM and GenAI applications end to end.',
  'building LLM/GenAI apps, RAG systems, integrations, and evaluation',
  [
    'A GenAI feature due for release that is not production-ready',
    'A RAG or LLM integration failing on real inputs',
    'Cost, latency, and reliability issues in an AI application',
  ],
  ['LLM application design', 'RAG and evaluation'],
  [L('LLM job support', '/llm-job-support/'), L('RAG job support', '/rag-job-support/'), L('Generative AI job support', '/generative-ai-job-support/')],
  genaiInterview, aiEngProfile,
);

export const machineLearningEngineerJobSupport = R(
  'machine-learning-engineer-job-support', 'Machine Learning Engineer',
  'ML Engineers build, train, and productionize models.',
  'training, evaluating, deploying, and maintaining ML models',
  [
    'A model that will not meet accuracy targets before a deadline',
    'A training pipeline with reproducibility or data problems',
    'A model deployment failing SLAs or drifting in production',
  ],
  ['ML fundamentals and modeling', 'ML system design and deployment'],
  [L('PyTorch job support', '/pytorch-job-support/'), L('MLOps job support', '/mlops-job-support/'), L('Model deployment job support', '/model-deployment-job-support/')],
  mleInterview, mlEngProfile, 'ML Engineer',
);

export const genaiEngineerJobSupport = R(
  'genai-engineer-job-support', 'GenAI Engineer',
  'GenAI Engineers ship generative AI features into products.',
  'building GenAI features, prompts, RAG, and agent workflows',
  [
    'A GenAI product feature that fails on messy real-world inputs',
    'Prompt and evaluation gaps letting bad outputs through',
    'Scaling a GenAI prototype into a monitored production service',
  ],
  ['GenAI system design', 'prompting and evaluation'],
  [L('Generative AI job support', '/generative-ai-job-support/'), L('LLM job support', '/llm-job-support/'), L('Prompt engineering job support', '/prompt-engineering-job-support/')],
  genaiInterview, aiEngProfile, 'GenAI Engineer',
);

export const llmEngineerJobSupport = R(
  'llm-engineer-job-support', 'LLM Engineer',
  'LLM Engineers specialize in large-language-model systems.',
  'LLM app architecture, fine-tuning, RAG, and evaluation',
  [
    'An LLM system with inconsistent or non-compliant outputs',
    'Fine-tuning or RAG work that is not improving quality',
    'Token-cost, latency, and context-window problems at scale',
  ],
  ['LLM architecture and fine-tuning', 'RAG and evaluation'],
  [L('LLM job support', '/llm-job-support/'), L('Fine-tuning job support', '/fine-tuning-job-support/'), L('RAG job support', '/rag-job-support/')],
  llmInterview, llmEngProfile, 'LLM Engineer',
);

export const mlopsEngineerJobSupport = R(
  'mlops-engineer-job-support', 'MLOps Engineer',
  'MLOps Engineers own the ML platform, CI/CD, and reliability.',
  'ML CI/CD, deployment, monitoring, and platform reliability',
  [
    'A broken ML pipeline or deployment blocking the whole team',
    'Missing monitoring letting drift and regressions slip through',
    'Reproducibility, registry, or infra problems causing incidents',
  ],
  ['MLOps architecture and CI/CD', 'deployment, monitoring, and infra'],
  [L('MLOps job support', '/mlops-job-support/'), L('Kubeflow job support', '/kubeflow-job-support/'), L('Model monitoring job support', '/model-monitoring-job-support/')],
  mlopsInterview, mlopsMarketing, 'MLOps Engineer',
);

export const dataScientistJobSupport = R(
  'data-scientist-job-support', 'Data Scientist',
  'Data Scientists turn data into models and insight.',
  'analysis, modeling, experimentation, and stakeholder communication',
  [
    'A model whose offline metrics do not translate to business impact',
    'Experiment design, leakage, or evaluation problems',
    'Communicating results and trade-offs to non-technical stakeholders',
  ],
  ['statistics and ML modeling', 'experiment design and evaluation'],
  [L('scikit-learn job support', '/scikit-learn-job-support/'), L('Python AI/ML job support', '/python-ai-ml-job-support/'), L('Time series forecasting job support', '/time-series-forecasting-job-support/')],
  dsInterview, dsMarketing, 'Data Scientist',
);

export const nlpEngineerJobSupport = R(
  'nlp-engineer-job-support', 'NLP Engineer',
  'NLP Engineers build language-understanding systems.',
  'text classification, extraction, NER, and LLM-based NLP',
  [
    'An NLP model with poor accuracy on domain-specific text',
    'Preprocessing, tokenization, or language-handling problems',
    'Scaling and latency issues serving an NLP pipeline',
  ],
  ['NLP methods and models', 'transformers and evaluation'],
  [L('NLP job support', '/nlp-job-support/'), L('Transformers job support', '/transformers-job-support/'), L('LLM job support', '/llm-job-support/')],
  dsInterview, dsMarketing, 'NLP Engineer',
);

export const computerVisionEngineerJobSupport = R(
  'computer-vision-engineer-job-support', 'Computer Vision Engineer',
  'CV Engineers build image and video AI systems.',
  'detection, classification, segmentation, and edge deployment',
  [
    'A CV model underperforming on real-world images',
    'Data/annotation quality and augmentation problems',
    'Inference-speed and edge-deployment constraints',
  ],
  ['CV architectures and training', 'data pipelines and deployment'],
  [L('Computer vision job support', '/computer-vision-job-support/'), L('PyTorch job support', '/pytorch-job-support/'), L('Model deployment job support', '/model-deployment-job-support/')],
  dsInterview, CANDIDATE_MARKETING_LINK, 'CV Engineer',
);

export const aiSolutionsArchitectJobSupport = R(
  'ai-solutions-architect-job-support', 'AI Solutions Architect',
  'AI Architects design end-to-end AI systems and platforms.',
  'AI architecture, technology selection, and design reviews',
  [
    'An AI architecture decision you must defend to stakeholders',
    'A design that must balance quality, cost, security, and scale',
    'A reference architecture for a GenAI/RAG platform under review',
  ],
  ['AI system architecture', 'trade-offs, cost, and security'],
  [L('RAG job support', '/rag-job-support/'), L('Azure OpenAI job support', '/azure-openai-job-support/'), L('AI security & governance job support', '/ai-security-governance-job-support/')],
  archInterview, archProfile, 'AI Architect',
);

export const aiPlatformEngineerJobSupport = R(
  'ai-platform-engineer-job-support', 'AI Platform Engineer',
  'AI Platform Engineers build the platforms teams build AI on.',
  'AI/ML platform, tooling, infra, and developer experience',
  [
    'A shared AI platform component failing multiple teams',
    'Infra, scaling, or cost problems in the AI platform',
    'Tooling and self-service gaps slowing down AI teams',
  ],
  ['AI platform architecture', 'infra, scaling, and tooling'],
  [L('MLOps job support', '/mlops-job-support/'), L('Kubeflow job support', '/kubeflow-job-support/'), L('Cloud AI engineer job support', '/cloud-ai-engineer-job-support/')],
  platformInterview, PROFILE_LINK, 'AI Platform Engineer',
);

export const aiProductEngineerJobSupport = R(
  'ai-product-engineer-job-support', 'AI Product Engineer',
  'AI Product Engineers build AI-powered product features.',
  'AI features, integrations, and product-quality iteration',
  [
    'An AI product feature that must ship and delight real users',
    'Balancing model quality, UX, latency, and cost in a feature',
    'Iterating on an AI feature based on production feedback',
  ],
  ['AI product engineering', 'integration and evaluation'],
  [L('AI API integration job support', '/ai-api-integration-job-support/'), L('LLM job support', '/llm-job-support/'), L('Generative AI job support', '/generative-ai-job-support/')],
  genaiInterview, aiEngProfile, 'AI Product Engineer',
);

export const aiAutomationEngineerJobSupport = R(
  'ai-automation-engineer-job-support', 'AI Automation Engineer',
  'AI Automation Engineers automate work with AI and agents.',
  'AI workflow automation, agents, and integrations',
  [
    'An AI automation that breaks on edge cases in production',
    'Agent and workflow reliability and error-handling issues',
    'Integrating AI automation with existing enterprise systems',
  ],
  ['AI workflow automation', 'agents and integration'],
  [L('AI workflow orchestration job support', '/ai-workflow-orchestration-job-support/'), L('Agentic AI job support', '/agentic-ai-job-support/'), L('AI API integration job support', '/ai-api-integration-job-support/')],
  agenticInterview, CANDIDATE_MARKETING_LINK, 'AI Automation Engineer',
);

export const promptEngineerJobSupport = R(
  'prompt-engineer-job-support', 'Prompt Engineer',
  'Prompt Engineers make LLM outputs reliable and structured.',
  'prompt design, structured output, and evaluation',
  [
    'Prompts that pass demos but fail unpredictably in production',
    'Structured-output and parsing failures downstream',
    'Prompt drift and regressions when models or data change',
  ],
  ['prompt design patterns', 'structured output and evaluation'],
  [L('Prompt engineering job support', '/prompt-engineering-job-support/'), L('LLM evaluation job support', '/llm-evaluation-job-support/'), L('LLM job support', '/llm-job-support/')],
  genaiInterview, genaiMarketing, 'Prompt Engineer',
);

export const appliedAiEngineerJobSupport = R(
  'applied-ai-engineer-job-support', 'Applied AI Engineer',
  'Applied AI Engineers translate research into shipped systems.',
  'applying models and research to real production problems',
  [
    'A research approach that must be made production-ready',
    'Bridging model quality with real-world constraints',
    'Shipping an applied-AI feature under deadline',
  ],
  ['applied ML and GenAI', 'system design and evaluation'],
  [L('LLM job support', '/llm-job-support/'), L('Fine-tuning job support', '/fine-tuning-job-support/'), L('MLOps job support', '/mlops-job-support/')],
  aimlUsaInterview, aiEngProfile, 'Applied AI Engineer',
);

export const aiResearchEngineerJobSupport = R(
  'ai-research-engineer-job-support', 'AI Research Engineer',
  'AI Research Engineers build and evaluate novel models.',
  'research implementation, experimentation, and evaluation',
  [
    'A research training run that will not converge or reproduce',
    'Experiment infrastructure and evaluation gaps',
    'Turning a research result into a robust benchmark',
  ],
  ['deep learning research', 'experimentation and evaluation'],
  [L('PyTorch job support', '/pytorch-job-support/'), L('Transformers job support', '/transformers-job-support/'), L('Fine-tuning job support', '/fine-tuning-job-support/')],
  aimlUsaInterview, PROFILE_LINK, 'AI Research Engineer',
);

export const dataEngineerAiMlJobSupport = R(
  'data-engineer-ai-ml-job-support', 'Data Engineer (AI/ML)',
  'AI/ML Data Engineers build the pipelines models depend on.',
  'data pipelines, feature stores, and ML-ready data',
  [
    'A data pipeline feeding stale or wrong features to models',
    'Feature-store, freshness, or consistency problems',
    'Scaling and cost issues in ML data infrastructure',
  ],
  ['data pipeline and feature engineering', 'streaming and batch design'],
  [L('Airflow ML Pipeline job support', '/airflow-ml-pipeline-job-support/'), L('Databricks ML job support', '/databricks-ml-job-support/'), L('MLOps job support', '/mlops-job-support/')],
  mlopsInterview, CANDIDATE_MARKETING_LINK, 'AI/ML Data Engineer',
);

export const cloudAiEngineerJobSupport = R(
  'cloud-ai-engineer-job-support', 'Cloud AI Engineer',
  'Cloud AI Engineers build AI on AWS, Azure, and GCP.',
  'cloud AI services, deployment, and cost/security tuning',
  [
    'A cloud AI deployment with quota, networking, or IAM problems',
    'Cost and scaling issues on managed AI services',
    'Integrating cloud AI services into an enterprise environment',
  ],
  ['cloud AI services', 'deployment, security, and cost'],
  [L('AWS Bedrock job support', '/aws-bedrock-job-support/'), L('Azure OpenAI job support', '/azure-openai-job-support/'), L('Google Vertex AI job support', '/google-vertex-ai-job-support/')],
  platformInterview, PROFILE_LINK, 'Cloud AI Engineer',
);

export const aiDevopsEngineerJobSupport = R(
  'ai-devops-engineer-job-support', 'AI DevOps Engineer',
  'AI DevOps Engineers run CI/CD and reliability for AI systems.',
  'CI/CD, infra-as-code, and reliability for AI/ML',
  [
    'A fragile AI deployment pipeline causing repeated incidents',
    'Observability and alerting gaps for AI services',
    'Scaling, cost, and reliability problems in AI infra',
  ],
  ['AI/ML CI/CD and IaC', 'reliability and observability'],
  [L('MLOps job support', '/mlops-job-support/'), L('Model deployment job support', '/model-deployment-job-support/'), L('AI production debugging support', '/ai-production-debugging-support/')],
  mlopsInterview, PROFILE_LINK, 'AI DevOps Engineer',
);

export const ragEngineerJobSupport = R(
  'rag-engineer-job-support', 'RAG Engineer',
  'RAG Engineers build retrieval-augmented generation systems.',
  'retrieval design, chunking, embeddings, and RAG evaluation',
  [
    'A RAG system returning irrelevant or hallucinated answers',
    'Retrieval quality problems from chunking or embeddings',
    'Latency and cost issues in a production RAG pipeline',
  ],
  ['RAG architecture', 'retrieval, embeddings, and evaluation'],
  [L('RAG job support', '/rag-job-support/'), L('Vector database job support', '/vector-database-job-support/'), L('LLM evaluation job support', '/llm-evaluation-job-support/')],
  ragInterview, aiEngProfile, 'RAG Engineer',
);

export const agenticAiEngineerJobSupport = R(
  'agentic-ai-engineer-job-support', 'Agentic AI Engineer',
  'Agentic AI Engineers build autonomous, tool-using agents.',
  'agent design, tool use, orchestration, and guardrails',
  [
    'An agent that loops, stalls, or takes unsafe actions',
    'Tool-calling, state, and error-handling reliability issues',
    'Cost and latency blowups from long agent trajectories',
  ],
  ['agent architecture and tool use', 'multi-agent orchestration'],
  [L('Agentic AI job support', '/agentic-ai-job-support/'), L('Multi-agent AI job support', '/multi-agent-ai-job-support/'), L('LangGraph job support', '/langgraph-job-support/')],
  agenticInterview, aiEngProfile, 'Agentic AI Engineer',
);

// ─── Batch export ────────────────────────────────────────────────────────────

export const aimlRolePages: LandingPageConfig[] = [
  aiEngineerJobSupport, machineLearningEngineerJobSupport, genaiEngineerJobSupport, llmEngineerJobSupport,
  mlopsEngineerJobSupport, dataScientistJobSupport, nlpEngineerJobSupport, computerVisionEngineerJobSupport,
  aiSolutionsArchitectJobSupport, aiPlatformEngineerJobSupport, aiProductEngineerJobSupport,
  aiAutomationEngineerJobSupport, promptEngineerJobSupport, appliedAiEngineerJobSupport,
  aiResearchEngineerJobSupport, dataEngineerAiMlJobSupport, cloudAiEngineerJobSupport,
  aiDevopsEngineerJobSupport, ragEngineerJobSupport, agenticAiEngineerJobSupport,
];
