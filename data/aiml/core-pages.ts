import type { LandingPageConfig } from '../landing-pages';
import {
  aimlPage,
  relatedLinks,
  jobSupportHighlights,
  marketingHighlights,
  EXISTING,
  HUB_LINK,
  PRODUCTION_LINK,
  PROFILE_LINK,
  ONBOARDING_LINK,
  CANDIDATE_MARKETING_LINK,
  GET_SCHEDULED_LINK,
} from './shared';

// ─── Phase 1: Global hub + core support pages ───────────────────────────────

export const globalAiMlJobSupport: LandingPageConfig = aimlPage({
  slug: 'global-ai-ml-job-support',
  title: 'Global AI/ML Job Support — Real-Time Expert Help Worldwide',
  description:
    'Real-time AI/ML job support, production issue help, interview support, and candidate marketing for AI, GenAI, LLM, RAG, and MLOps engineers across the USA, UK, Canada, Europe, Australia & worldwide.',
  keywords: [
    'AI ML job support', 'global AI job support', 'machine learning job support',
    'GenAI job support', 'LLM job support', 'RAG job support', 'MLOps job support',
    'AI engineer job support', 'real-time AI ML support', 'AI production support',
  ],
  h1: 'Global AI/ML Job Support — Real-Time Expert Help for AI, GenAI, LLM, RAG & MLOps',
  tagline:
    'One place for real-time AI/ML job support, production issue help, interview assistance, and candidate marketing — across every country, technology, and role.',
  heroEyebrow: 'AI/ML Global Support Hub — 2026',
  painIntro:
    'Stuck on a model that will not converge, a RAG pipeline that hallucinates, an inference endpoint timing out in production, or an AI interview you are not ready for? You need an experienced AI/ML engineer beside you — not another forum thread.',
  heroVariant:
    'AI/ML work moves fast and breaks in production in ways that are hard to debug alone — data drift, prompt regressions, GPU cost spikes, evaluation gaps, and deployment failures. This hub connects you to in-house experts across the full stack: Python, PyTorch, TensorFlow, Hugging Face, LangChain, LangGraph, OpenAI, Azure OpenAI, Bedrock, Vertex AI, vector databases, and the MLOps tooling that keeps it all running. From daily job support to emergency production fixes, live interview guidance, and profile positioning — start from here.',
  geoLine:
    'Supporting AI/ML professionals across USA, Canada, UK, Ireland, Germany, Netherlands, France, Sweden, Switzerland, Australia, New Zealand, Singapore, Hong Kong, UAE, Saudi Arabia, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover GenAI, LLMs, RAG, agentic AI, classical ML, deep learning, NLP, computer vision, data science, MLOps, and cloud AI on AWS, Azure, and GCP.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What is global AI/ML job support?',
      answer:
        'It is real-time, hands-on help from experienced AI/ML engineers during your working hours — on your actual project. We help with model development and debugging, LLM/RAG applications, data and feature pipelines, training and fine-tuning, deployment and monitoring, and production incidents. It is delivered live, confidentially, and same-day where needed, anywhere in the world.',
    },
    {
      question: 'Which AI/ML areas and tools do you cover?',
      answer:
        'GenAI and LLM application development, RAG and agentic AI, prompt engineering, fine-tuning (LoRA/QLoRA), classical ML and data science, NLP, computer vision, and MLOps. Tooling includes Python, PyTorch, TensorFlow, scikit-learn, Hugging Face, LangChain, LangGraph, CrewAI, AutoGen, OpenAI, Azure OpenAI, AWS Bedrock, Google Vertex AI, vector databases (Pinecone, Qdrant, Weaviate, ChromaDB), MLflow, Kubeflow, Airflow, and Databricks.',
    },
    {
      question: 'Do you help with live AI production issues?',
      answer:
        'Yes. We provide dedicated AI/ML production support — model drift and accuracy regressions, inference latency, GPU cost blowups, RAG answer-quality problems, feature store and data drift issues, failing pipelines, and safe rollbacks — with an expert on the call. See our AI/ML production support page.',
    },
    {
      question: 'Can you help me prepare for or clear AI/ML interviews?',
      answer:
        'Yes. We offer AI/ML proxy interview support and get-interview-scheduled services for AI Engineer, ML Engineer, GenAI, LLM, MLOps, and Data Science roles — live guidance during interviews, calibrated mock interviews, and profile positioning so the calls come in the first place.',
    },
    {
      question: 'Which countries and cities do you support?',
      answer:
        'We support AI/ML professionals worldwide — dedicated pages for the USA, Canada, UK, Ireland, Germany, Netherlands, France, Sweden, Switzerland, Australia, New Zealand, Singapore, Hong Kong, UAE, Saudi Arabia, and Europe, plus major cities including New York, San Francisco, Seattle, Toronto, London, Dublin, Berlin, Amsterdam, Sydney, Singapore, and Dubai.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your stack, your situation (job support, production issue, interview, or profile), and your timeline. We match you with the right AI/ML expert — usually the same day. Every engagement is confidential and NDAs are available on request.',
    },
  ],
  useCasesSection: {
    title: 'What We Help AI/ML Professionals With',
    cases: [
      'A training run that will not converge or a model whose metrics regressed after a data or code change',
      'A RAG pipeline returning irrelevant, stale, or hallucinated answers before a demo or release',
      'An inference endpoint timing out, costing too much, or crashing under production traffic',
      'Joining a new AI/ML project and needing to ramp up on an unfamiliar codebase fast',
      'An AI/ML interview in a few days you do not feel ready for — coding, system design, or GenAI depth',
      'A strong engineer getting no recruiter calls because the profile is not positioned for AI/ML roles',
    ],
  },
  proxySection: {
    title: 'AI/ML Interview & Candidate Marketing Support',
    intro:
      'Getting into and moving up in AI/ML roles takes more than skill — it takes interview readiness and a profile that recruiters actually find. We support both sides: live proxy interview assistance during your real interview, and candidate marketing to generate the calls.',
    points: [
      'Live, discreet guidance during AI Engineer, ML Engineer, GenAI, LLM, and MLOps interviews',
      'Calibrated mock interviews for coding, ML system design, and GenAI/RAG architecture rounds',
      'Profile positioning around the exact keywords AI/ML recruiters and ATS filters screen for',
      'Active candidate marketing and recruiter outreach to build a real interview pipeline',
      'End-to-end support: get the interview, clear it, then keep the role with real-time job support',
    ],
  },
  bottomCTAHeading: 'Need Real-Time AI/ML Job Support or Interview Help Right Now?',
  bottomCTABody:
    'In-house AI, GenAI, LLM, RAG, and MLOps experts available same-day — project support, production fixes, live interview guidance, or profile positioning. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'AI/ML job support USA', href: '/usa-ai-ml-job-support/' },
      { label: 'AI/ML job support Canada', href: '/canada-ai-ml-job-support/' },
    ],
    techLinks: [
      { label: 'LLM job support', href: '/llm-job-support/' },
      { label: 'RAG job support', href: '/rag-job-support/' },
    ],
    problemLink: PRODUCTION_LINK,
    proxyLink: EXISTING.aimlProxy,
    additionalLinks: [
      // Core pages
      PRODUCTION_LINK, ONBOARDING_LINK, PROFILE_LINK, CANDIDATE_MARKETING_LINK, GET_SCHEDULED_LINK,
      { label: 'AI/ML client call & standup support', href: '/ai-ml-client-call-standup-support/' },
      // Country hubs
      { label: 'AI/ML job support UK', href: '/uk-ai-ml-job-support/' },
      { label: 'AI/ML job support Ireland', href: '/ireland-ai-ml-job-support/' },
      { label: 'AI/ML job support Germany', href: '/germany-ai-ml-job-support/' },
      { label: 'AI/ML job support Netherlands', href: '/netherlands-ai-ml-job-support/' },
      { label: 'AI/ML job support France', href: '/france-ai-ml-job-support/' },
      { label: 'AI/ML job support Australia', href: '/australia-ai-ml-job-support/' },
      { label: 'AI/ML job support Singapore', href: '/singapore-ai-ml-job-support/' },
      { label: 'AI/ML job support UAE', href: '/uae-ai-ml-job-support/' },
      { label: 'AI/ML job support Europe', href: '/europe-ai-ml-job-support/' },
      // Technology
      { label: 'Python AI/ML job support', href: '/python-ai-ml-job-support/' },
      { label: 'Generative AI job support', href: '/generative-ai-job-support/' },
      { label: 'Agentic AI job support', href: '/agentic-ai-job-support/' },
      { label: 'LangChain job support', href: '/langchain-job-support/' },
      { label: 'MLOps job support', href: '/mlops-job-support/' },
      { label: 'Vector database job support', href: '/vector-database-job-support/' },
      { label: 'Fine-tuning job support', href: '/fine-tuning-job-support/' },
      { label: 'Model deployment job support', href: '/model-deployment-job-support/' },
      // Roles
      { label: 'AI Engineer job support', href: '/ai-engineer-job-support/' },
      { label: 'ML Engineer job support', href: '/machine-learning-engineer-job-support/' },
      { label: 'GenAI Engineer job support', href: '/genai-engineer-job-support/' },
      { label: 'MLOps Engineer job support', href: '/mlops-engineer-job-support/' },
      { label: 'Data Scientist job support', href: '/data-scientist-job-support/' },
      // Interview
      { label: 'AI/ML interview proxy USA', href: '/ai-ml-interview-proxy-support-usa/' },
      { label: 'GenAI interview proxy support', href: '/genai-interview-proxy-support/' },
      { label: 'RAG interview proxy support', href: '/rag-interview-proxy-support/' },
      { label: 'MLOps interview proxy support', href: '/mlops-interview-proxy-support/' },
      // Existing anchors
      EXISTING.aimlGuide, EXISTING.mlopsGuide, EXISTING.ragGuide, EXISTING.genaiGuide,
      EXISTING.candidateMarketing, EXISTING.production, EXISTING.dotnetAiml,
    ],
  }),
});

// ─────────────────────────────────────────────────────────────────────────────

export const aiMlProductionSupport: LandingPageConfig = aimlPage({
  slug: 'ai-ml-production-support',
  title: 'AI/ML Production Support — Live Model, LLM & RAG Issue Help',
  description:
    'Real-time AI/ML production support: fix model drift, inference latency, GPU cost spikes, RAG hallucinations, broken pipelines, and MLOps incidents with an expert on the call. Same-day help.',
  keywords: [
    'AI ML production support', 'model deployment issue support', 'LLM production issue help',
    'RAG pipeline debugging', 'MLOps production support', 'model drift support',
    'inference latency support', 'AI production incident support', 'ML production firefighting',
  ],
  h1: 'AI/ML Production Support — Fix Live Model, LLM, RAG & MLOps Issues Fast',
  tagline:
    'When an AI system breaks in production, you need an expert on the call now — not a ticket queue. Real-time help for model, LLM, RAG, and MLOps incidents.',
  heroEyebrow: 'AI/ML Production Firefighting — 24/7',
  painIntro:
    'Model accuracy regressed overnight? Inference endpoint timing out under load? RAG answers suddenly wrong? Costs spiking with no explanation? A pipeline failing before a critical batch? Production AI incidents are high-pressure and hard to debug alone.',
  heroVariant:
    'AI systems fail in ways traditional apps do not — silent accuracy decay, data and prompt drift, embedding mismatches, retrieval quality collapse, GPU memory and cost explosions, and evaluation blind spots. Our engineers have resolved these under real deadlines. We join your session, find the root cause, stabilize the system, and help you ship a durable fix — across LLM apps, RAG pipelines, classical ML services, and full MLOps stacks.',
  geoLine:
    'On-call AI/ML production support for teams across USA, Canada, UK, Europe, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available around the clock for urgent production incidents across all major time zones.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What AI/ML production issues can you help with?',
      answer:
        'Model drift and accuracy regressions, inference latency and timeout spikes, GPU/CPU cost and memory blowups, RAG pipelines returning wrong or hallucinated answers, embedding and vector-index problems, feature store and data drift issues, failing batch/streaming jobs, and rollback and recovery situations. We work the incident live with you until the system is stable.',
    },
    {
      question: 'How fast can you join a production incident?',
      answer:
        'Usually within the same working session. Message us on WhatsApp with the symptoms and stack, and we assign an engineer who has handled that class of incident before. For active outages we prioritize immediate response.',
    },
    {
      question: 'Do you cover LLM and RAG production problems specifically?',
      answer:
        'Yes. LLM and RAG systems are a core focus — retrieval quality collapse, chunking and embedding issues, prompt regressions, context-window and cost problems, evaluation gaps, guardrail and safety failures, and latency from multi-step chains and agents. We help you diagnose and fix answer-quality and reliability issues.',
    },
    {
      question: 'Can you help set up monitoring so this does not recur?',
      answer:
        'Yes. Beyond the immediate fix, we help you add the right observability — model and data drift monitoring, evaluation harnesses, latency/cost dashboards, alerting, and safe rollback paths — so the next regression is caught early. See our model monitoring support.',
    },
    {
      question: 'Is production support confidential?',
      answer:
        'Completely. We never share client, employer, or system details with any third party, and NDAs are available on request. All incident work is handled with full professional discretion.',
    },
  ],
  useCasesSection: {
    title: 'Production AI Incidents We Resolve',
    cases: [
      'Model accuracy or business metric dropped after a model, data, or config change — fast root-cause analysis',
      'Inference endpoint timing out, throttling, or crashing under production load',
      'RAG pipeline returning irrelevant or hallucinated answers after a data or embedding update',
      'GPU cost or memory usage spiking with no clear cause before a budget review',
      'Feature store, data pipeline, or scheduled job failing before a critical batch window',
      'A bad deployment in production needing a safe, fast rollback and a stable re-release',
    ],
  },
  proxySection: {
    title: 'Beyond the Fix — Onboarding & Interview Support',
    intro:
      'Many people who reach us during a production incident also need help ramping onto the project or moving to the next role. We support the whole journey — production, onboarding, and interviews.',
    points: [
      'Root-cause analysis and a durable fix during the live incident',
      'Post-incident hardening — monitoring, evaluation, alerting, and rollback safety',
      'Project onboarding support so you get productive on an unfamiliar AI/ML codebase fast',
      'Interview and profile support for when you are ready for the next AI/ML role',
      'Confidential, in-house experts — no sub-contracting, NDAs available',
    ],
  },
  bottomCTAHeading: 'AI System Down or Misbehaving in Production? Get Help With Production AI Issues Now',
  bottomCTABody:
    'Real-time AI/ML production support — model, LLM, RAG, and MLOps incidents resolved with an expert on the call. Contact ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      HUB_LINK,
      { label: 'AI/ML job support USA', href: '/usa-ai-ml-job-support/' },
    ],
    techLinks: [
      { label: 'Model deployment job support', href: '/model-deployment-job-support/' },
      { label: 'Model monitoring job support', href: '/model-monitoring-job-support/' },
    ],
    problemLink: EXISTING.production,
    proxyLink: EXISTING.mlopsProxy,
    additionalLinks: [
      { label: 'AI production debugging support', href: '/ai-production-debugging-support/' },
      { label: 'MLOps job support', href: '/mlops-job-support/' },
      { label: 'RAG job support', href: '/rag-job-support/' },
      { label: 'LLM job support', href: '/llm-job-support/' },
      { label: 'AI/ML production issue support guide', href: '/ai-ml-production-issue-support-guide/' },
      EXISTING.production, EXISTING.mlopsGuide, EXISTING.ragGuide, ONBOARDING_LINK,
    ],
  }),
});

// ─────────────────────────────────────────────────────────────────────────────

export const aiMlProjectOnboardingSupport: LandingPageConfig = aimlPage({
  slug: 'ai-ml-project-onboarding-support',
  title: 'AI/ML Project Onboarding Support — Ramp Up Fast & Deliver',
  description:
    'Just joined an AI/ML, GenAI, or MLOps project? Get real-time onboarding support to understand the codebase, deliver your first tasks confidently, and pass early reviews. Same-day help.',
  keywords: [
    'AI ML project onboarding help', 'new AI engineer job support', 'GenAI project onboarding',
    'MLOps onboarding help', 'AI ML ramp up support', 'new machine learning job support',
    'AI project first tasks help', 'AI ML new project support',
  ],
  h1: 'AI/ML Project Onboarding Support — Get Productive on a New Project Fast',
  tagline:
    'Starting a new AI/ML role or project is where most people struggle. We help you understand the setup, deliver early, and build credibility from week one.',
  heroEyebrow: 'AI/ML Onboarding Support',
  painIntro:
    'New AI/ML project, unfamiliar codebase, unclear data, and a manager expecting output fast? Onboarding is where confidence gets tested — messy notebooks, undocumented pipelines, custom training loops, and infrastructure you have never seen.',
  heroVariant:
    'The first few weeks on an AI/ML project decide how you are perceived for months. We help you read and navigate the existing code, understand the data and feature pipelines, run and reproduce training and evaluation, get local and cloud environments working, and deliver your first tickets cleanly — so standups, reviews, and client calls go well instead of exposing gaps.',
  geoLine:
    'Onboarding support for new AI/ML joiners across USA, Canada, UK, Europe, Australia, and worldwide.',
  timezoneNote: 'Available across all major business hours for daily onboarding support during your first weeks.',
  highlights: jobSupportHighlights,
  faqs: kbFaqsForOnboarding(),
  useCasesSection: {
    title: 'Onboarding Situations We Help With',
    cases: [
      'Inheriting an undocumented ML codebase with custom training and evaluation scripts',
      'Getting local and cloud AI environments, GPUs, and dependencies working from scratch',
      'Understanding an existing RAG, LLM, or data pipeline well enough to safely change it',
      'Reproducing a model’s reported metrics before making your first modification',
      'Delivering your first sprint tickets confidently and passing code review',
      'Handling early standups, client calls, and design discussions without exposing knowledge gaps',
    ],
  },
  proxySection: {
    title: 'Onboarding Into Client Calls & Standups',
    intro:
      'Onboarding is not just code — it is communication. We help you handle the meetings that shape early impressions: standups, sprint planning, architecture reviews, and client calls.',
    points: [
      'Preparation before standups so you can report progress and blockers clearly',
      'Support during architecture and design discussions on your AI/ML project',
      'Help translating tickets and requirements into a concrete delivery plan',
      'Guidance on the questions to ask (and not ask) to build credibility fast',
      'A direct line to an expert whenever you get stuck during your first weeks',
    ],
  },
  bottomCTAHeading: 'Just Joined an AI/ML Project? Get Onboarding Support Now',
  bottomCTABody:
    'Ramp up fast, deliver early, and build credibility with real-time AI/ML onboarding support. Contact ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      HUB_LINK,
      { label: 'AI/ML client call & standup support', href: '/ai-ml-client-call-standup-support/' },
    ],
    techLinks: [
      { label: 'Python AI/ML job support', href: '/python-ai-ml-job-support/' },
      { label: 'MLOps job support', href: '/mlops-job-support/' },
    ],
    problemLink: PRODUCTION_LINK,
    proxyLink: EXISTING.aimlProxy,
    additionalLinks: [
      EXISTING.clientCall, EXISTING.realtimeGuide, HUB_LINK, PRODUCTION_LINK,
      { label: 'AI/ML project onboarding guide', href: '/ai-ml-project-onboarding-guide/' },
    ],
  }),
});

// ─────────────────────────────────────────────────────────────────────────────

export const aiMlClientCallStandupSupport: LandingPageConfig = aimlPage({
  slug: 'ai-ml-client-call-standup-support',
  title: 'AI/ML Client Call & Standup Support — Speak With Confidence',
  description:
    'Real-time support for AI/ML standups, sprint planning, architecture reviews, and client calls. Present your work, handle questions, and communicate like a senior AI engineer. Same-day help.',
  keywords: [
    'AI ML client call support', 'AI ML standup support', 'AI engineer meeting support',
    'ML sprint planning support', 'AI architecture review support', 'AI ML client meeting help',
    'AI engineer communication support',
  ],
  h1: 'AI/ML Client Call & Standup Support — Communicate Like a Senior Engineer',
  tagline:
    'The meetings matter as much as the code. Get real-time support for standups, sprint planning, architecture reviews, and client calls on your AI/ML project.',
  heroEyebrow: 'AI/ML Communication Support',
  painIntro:
    'Dreading the daily standup because you are not sure how to explain your progress? Facing a client call about model results or an architecture review you are underprepared for? Strong engineers lose credibility in meetings they could have handled with the right backup.',
  heroVariant:
    'AI/ML meetings are their own skill — explaining why a model underperformed, defending an architecture choice for a RAG system, giving a realistic estimate for a fine-tuning task, or fielding a client’s pointed question about accuracy and cost. We prepare you before these calls and back you in real time, so you present your work clearly, handle hard questions, and come across as the senior engineer you are.',
  geoLine:
    'Client call and standup support for AI/ML professionals across USA, Canada, UK, Europe, Australia, and worldwide.',
  timezoneNote: 'Available across all major business hours to back you before and during key meetings.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What kind of AI/ML meetings do you support?',
      answer:
        'Daily standups, sprint planning and estimation, backlog refinement, architecture and design reviews, model result reviews, and client-facing calls. We help you prepare talking points, anticipate questions, and communicate progress, blockers, and trade-offs clearly for AI/ML work specifically.',
    },
    {
      question: 'How does real-time support during a call work?',
      answer:
        'Before the call we align on the agenda and likely questions and prepare your key points. During the call we can provide discreet real-time guidance through chat — suggested framing, technical answers, and estimates — so you stay confident and accurate. Everything is confidential.',
    },
    {
      question: 'Can you help me explain a model or architecture decision to a client?',
      answer:
        'Yes. We help you translate technical decisions — why a particular model, embedding strategy, RAG design, or deployment approach was chosen — into clear, defensible language that non-specialist clients and stakeholders understand, while still holding up to technical scrutiny.',
    },
    {
      question: 'Is this different from job support and onboarding?',
      answer:
        'It overlaps. This focuses specifically on the communication and meeting side, and pairs naturally with our AI/ML job support (the hands-on work) and onboarding support (getting productive on a new project). Many clients use all three together.',
    },
    {
      question: 'Is it confidential?',
      answer:
        'Yes, completely. We never disclose client, employer, or meeting details, and NDAs are available on request.',
    },
  ],
  useCasesSection: {
    title: 'Meeting Situations We Help You Handle',
    cases: [
      'A standup where you need to report slow progress on a hard training or debugging task without losing credibility',
      'A client call reviewing model accuracy, cost, or timeline where tough questions are expected',
      'An architecture review defending your RAG, LLM, or pipeline design choices',
      'Sprint planning where you must give realistic estimates for AI/ML tasks you are unsure about',
      'A stakeholder demo of a GenAI feature that must land well and handle follow-up questions',
      'A design discussion where you want to contribute at a senior level, not just listen',
    ],
  },
  proxySection: {
    title: 'Pairs With Onboarding & Job Support',
    intro:
      'Communication support works best alongside hands-on help. We back both the work and the way you present it.',
    points: [
      'Pre-call preparation and talking points tailored to your AI/ML project',
      'Discreet real-time guidance during standups, reviews, and client calls',
      'Hands-on job support for the underlying tasks you are reporting on',
      'Onboarding support for your first weeks on a new AI/ML project',
      'Confidential, in-house experts available across all time zones',
    ],
  },
  bottomCTAHeading: 'Important AI/ML Call Coming Up? Get Real-Time Support Now',
  bottomCTABody:
    'Handle standups, architecture reviews, and client calls with confidence. Contact ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      HUB_LINK,
      { label: 'AI/ML project onboarding support', href: '/ai-ml-project-onboarding-support/' },
    ],
    techLinks: [
      { label: 'MLOps job support', href: '/mlops-job-support/' },
      { label: 'LLM job support', href: '/llm-job-support/' },
    ],
    problemLink: PRODUCTION_LINK,
    proxyLink: EXISTING.aimlProxy,
    additionalLinks: [
      EXISTING.clientCall, EXISTING.realtimeGuide, ONBOARDING_LINK, PRODUCTION_LINK, HUB_LINK,
    ],
  }),
});

// ─────────────────────────────────────────────────────────────────────────────

export const aiMlProfilePositioningSupport: LandingPageConfig = aimlPage({
  slug: 'ai-ml-profile-positioning-support',
  title: 'AI/ML Profile Positioning & Candidate Marketing',
  description:
    'Get your resume and LinkedIn positioned for AI/ML roles. Keyword engineering, profile optimization, and candidate marketing so AI, GenAI, LLM, and MLOps recruiters actually find you.',
  keywords: [
    'AI ML profile positioning', 'AI ML candidate marketing', 'AI engineer resume optimization',
    'ML engineer LinkedIn optimization', 'GenAI resume keywords', 'AI ML profile engineering',
    'get AI ML recruiter calls', 'AI ML resume no calls',
  ],
  h1: 'AI/ML Profile Positioning — Get Found by AI, GenAI & MLOps Recruiters',
  tagline:
    'A strong engineer with a weak profile gets no calls. We position your resume and LinkedIn for the exact AI/ML roles you want — and market you to recruiters.',
  heroEyebrow: 'AI/ML Profile Positioning',
  painIntro:
    'Applying to dozens of AI/ML roles and hearing nothing back? The problem is usually not your skill — it is that your profile does not surface in recruiter searches or pass ATS filters for GenAI, LLM, RAG, and MLOps roles.',
  heroVariant:
    'AI/ML recruiters search very specifically — model names, frameworks, deployment signals, and domain keywords. A profile that reads like a generic data or software engineer gets filtered out. We rebuild your resume and LinkedIn around what actually gets you found in 2026: GenAI and LLM application experience, RAG and agentic systems, MLOps and model deployment, and measurable production impact — then market that profile through active outreach.',
  geoLine:
    'Profile positioning and candidate marketing for AI/ML professionals targeting roles in the USA, Canada, UK, Europe, Australia, and worldwide.',
  timezoneNote: 'Profile support and outreach aligned to your target market — US, Canadian, UK, European, or global.',
  highlights: marketingHighlights,
  faqs: marketingFaqsForProfile(),
  useCasesSection: {
    title: 'Profile Situations We Fix',
    cases: [
      'A capable ML engineer applying to 50+ roles with no recruiter responses — keyword and positioning mismatch',
      'A software engineer transitioning into AI/ML whose profile still reads like a backend developer',
      'A data scientist wanting to move into GenAI/LLM roles but not showing up in those searches',
      'A strong profile buried under vague bullet points instead of measurable AI/ML impact',
      'A LinkedIn headline and summary that recruiters scroll past for AI Engineer and MLOps roles',
      'A candidate targeting a new country whose profile is not positioned for that market',
    ],
  },
  proxySection: {
    title: 'From Positioning to Offer',
    intro:
      'Positioning gets the calls; we help you convert them. Profile work pairs with interview support and job support so the whole pipeline works end to end.',
    points: [
      'AI/ML keyword engineering for resume, LinkedIn, and job-board profiles',
      'Measurable-impact rewriting so your GenAI/LLM/MLOps work stands out',
      'Active candidate marketing and recruiter outreach to hiring managers',
      'AI/ML proxy interview support to convert the interviews you land',
      'Get-interview-scheduled support if you want a managed pipeline of calls',
    ],
  },
  bottomCTAHeading: 'Get Your Profile Positioned for AI/ML Roles Now',
  bottomCTABody:
    'Stop getting filtered out. We engineer your AI/ML profile for recruiter visibility and market you actively. Contact ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      HUB_LINK,
      GET_SCHEDULED_LINK,
    ],
    techLinks: [
      { label: 'AI Engineer profile positioning', href: '/ai-engineer-profile-positioning/' },
      { label: 'ML Engineer profile positioning', href: '/ml-engineer-profile-positioning/' },
    ],
    problemLink: { label: 'Why your AI/ML resume gets no calls', href: '/why-ai-ml-resume-gets-no-calls/' },
    proxyLink: EXISTING.aimlProxy,
    additionalLinks: [
      EXISTING.candidateMarketing, CANDIDATE_MARKETING_LINK, GET_SCHEDULED_LINK,
      { label: 'AI/ML resume & profile positioning guide', href: '/ai-ml-resume-profile-positioning-guide/' },
      HUB_LINK,
    ],
  }),
});

// Local FAQ specializations (kept here to avoid polluting shared generators) ──

function kbFaqsForOnboarding(): LandingPageConfig['faqs'] {
  return [
    {
      question: 'What is AI/ML project onboarding support?',
      answer:
        'It is real-time help during your first days and weeks on a new AI/ML project. We help you understand the existing codebase, data, and pipelines, get your environment working, reproduce results, and deliver your first tasks confidently — so you build credibility fast instead of struggling silently.',
    },
    {
      question: 'I just joined and the codebase is a mess — can you help?',
      answer:
        'Yes. Undocumented notebooks, custom training loops, and tangled pipelines are exactly what we help with. An expert works through the code with you, explains how it fits together, and helps you make your first safe changes without breaking anything.',
    },
    {
      question: 'Can you help me set up GPUs and cloud AI environments?',
      answer:
        'Yes. Environment setup — Python and dependency management, CUDA/GPU drivers, cloud notebooks, containerized training, and access to data and model stores — is a common first blocker. We help you get a working environment quickly.',
    },
    {
      question: 'Will you help during my early standups and reviews?',
      answer:
        'Yes. We prepare you for standups, sprint planning, and design reviews so you can report progress clearly and contribute confidently. This pairs with our AI/ML client call and standup support.',
    },
    {
      question: 'Is onboarding support confidential and same-day?',
      answer:
        'Yes to both. Engagements are fully confidential with NDAs available, and we can usually start the same day you reach out on WhatsApp.',
    },
  ];
}

function marketingFaqsForProfile(): LandingPageConfig['faqs'] {
  return [
    {
      question: 'Why is my AI/ML resume getting no interview calls?',
      answer:
        'Almost always a positioning and keyword problem. The resume reads like a generic data or software profile, buries the AI/ML impact, and misses the terms recruiters and ATS filters screen for — GenAI, LLM, RAG, MLOps, model deployment, and specific frameworks. We diagnose the gaps and rebuild the profile so it surfaces and passes screening.',
    },
    {
      question: 'What exactly do you change on my profile?',
      answer:
        'We re-engineer your resume and LinkedIn: headline and summary, keyword coverage for your target AI/ML roles, measurable-impact bullet points (accuracy, latency, cost, scale), skills and project framing, and ATS-friendly structure. We tailor it to the specific roles and market you are targeting.',
    },
    {
      question: 'Do you also apply and reach out on my behalf?',
      answer:
        'Yes. Candidate marketing includes active application support and recruiter/hiring-manager outreach so your positioned profile actually reaches people, rather than sitting unseen in job-board databases.',
    },
    {
      question: 'Can you position me for a country I am targeting?',
      answer:
        'Yes. We position profiles for specific markets — US, Canada, UK, Europe, Australia, and more — accounting for the keywords, role titles, and expectations that differ by region.',
    },
    {
      question: 'How soon do candidates see results?',
      answer:
        'Profile changes and outreach begin the same day. Most candidates see recruiter activity within 1–2 weeks, depending on their market and specialization.',
    },
  ];
}

// ─── Batch export ────────────────────────────────────────────────────────────

export const aimlCorePages: LandingPageConfig[] = [
  globalAiMlJobSupport,
  aiMlProductionSupport,
  aiMlProjectOnboardingSupport,
  aiMlClientCallStandupSupport,
  aiMlProfilePositioningSupport,
];
