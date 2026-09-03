import type { LandingPageConfig } from '../landing-pages';
import {
  awsPage,
  relatedLinks,
  jobSupportHighlights,
  marketingHighlights,
  interviewHighlights,
  awsMarketingFaqs,
  awsJobFaqs,
  EXISTING,
  AWS_HUB_LINK,
  BEDROCK_HUB_LINK,
  AGENTCORE_HUB_LINK,
  SAGEMAKER_HUB_LINK,
  SAGEMAKER_AI_HUB_LINK,
  KB_RAG_HUB_LINK,
  MLOPS_HUB_LINK,
  NOVA_HUB_LINK,
  AWS_PRODUCTION_LINK,
  AWS_INTERVIEW_HUB_LINK,
  AWS_PROFILE_LINK,
  AWS_CANDIDATE_MARKETING_LINK,
  AWS_GET_SCHEDULED_LINK,
} from './shared';

// ─── AWS AI/ML master hub ────────────────────────────────────────────────────

export const awsAiMlHub: LandingPageConfig = awsPage({
  slug: 'aws-ai-ml-job-support',
  title: 'AWS AI/ML Job Support — Bedrock, AgentCore, SageMaker & GenAI',
  description:
    'Real-time AWS AI/ML job support, production help, interview support, and candidate marketing for Amazon Bedrock, Bedrock AgentCore, Amazon Nova, SageMaker AI, RAG, and AWS MLOps engineers — USA, UK, Canada, Europe, Australia & worldwide.',
  keywords: [
    'AWS AI ML job support', 'Amazon Bedrock job support', 'AWS generative AI job support',
    'Bedrock AgentCore support', 'Amazon SageMaker job support', 'AWS MLOps job support',
    'AWS RAG job support', 'AWS AI engineer support', 'AWS GenAI production support',
    'AWS machine learning job support',
  ],
  h1: 'AWS AI/ML Job Support — Amazon Bedrock, AgentCore, SageMaker, Nova & GenAI',
  tagline:
    'One hub for real-time AWS AI/ML job support, production issue help, interview assistance, and candidate marketing — across every AWS AI service, country, and role.',
  heroEyebrow: 'AWS AI/ML Global Support Hub — Updated August 2026',
  painIntro:
    'Stuck on a Bedrock app throwing AccessDenied, a Knowledge Base that will not sync, an AgentCore agent failing in Runtime, a SageMaker endpoint that will not deploy, or an AWS AI interview you are not ready for? You need an experienced AWS AI engineer beside you — not another forum thread.',
  heroVariant:
    'AWS AI/ML moves fast and breaks in production in ways that are hard to debug alone — IAM trust-policy failures, model-access and throttling errors, cross-region inference profiles, RAG retrieval collapse, Guardrails blocking legitimate output, and GPU-capacity errors on SageMaker. This hub connects you to in-house experts across the full AWS AI stack: Amazon Bedrock (Converse API, inference profiles, Knowledge Bases, Guardrails, Flows, Data Automation), Bedrock AgentCore (Runtime, Memory, Gateway, Identity, Policy, Browser, Code Interpreter, Observability), Amazon Nova, Amazon SageMaker AI, AWS MLOps, and the boto3, Terraform, and CDK tooling that ships it. From daily job support to emergency production fixes, live interview guidance, and profile positioning — start from here.',
  geoLine:
    'Supporting AWS AI/ML professionals across USA, Canada, UK, Ireland, Germany, Netherlands, France, Sweden, Switzerland, Australia, New Zealand, Singapore, Hong Kong, UAE, Saudi Arabia, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover Amazon Bedrock, Bedrock AgentCore, Amazon Nova, SageMaker AI, SageMaker Unified Studio & Lakehouse, AWS MLOps, OpenSearch & Aurora pgvector RAG, Textract, Comprehend, and AWS AI security, observability, and IaC — all current through August 2026.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What is AWS AI/ML job support?',
      answer:
        'It is real-time, hands-on help from experienced AWS AI engineers during your working hours — on your actual project. We help with Amazon Bedrock application development, Knowledge Bases and RAG, Bedrock Guardrails, AgentCore agents, Amazon Nova, SageMaker AI training and inference, AWS MLOps, and the IAM, VPC, and cost work around them. It is delivered live, confidentially, and same-day where needed, anywhere in the world.',
    },
    {
      question: 'Which AWS AI/ML services do you cover?',
      answer:
        'Amazon Bedrock (foundation models, Converse/ConverseStream, InvokeModel, on-demand and provisioned throughput, inference profiles, cross-region inference, intelligent prompt routing, Knowledge Bases, Guardrails with automated reasoning, Flows, Prompt Management, Data Automation, model customization), Amazon Bedrock AgentCore (Runtime, Memory, Gateway, Identity, Policy/Cedar, Browser, Code Interpreter, Observability, Evaluations), Amazon Nova, Amazon SageMaker AI, SageMaker Unified Studio, SageMaker Lakehouse, SageMaker Catalog, AWS MLOps, purpose-built AI services (Textract, Rekognition, Transcribe, Polly, Comprehend, Lex, Personalize), and AI infrastructure (Trainium, Inferentia, EKS, ECS).',
    },
    {
      question: 'Do you help with live AWS AI production issues?',
      answer:
        'Yes. We provide dedicated AWS AI production support — Bedrock AccessDenied and model-access errors, throttling and quotas, cross-region inference issues, Knowledge Base ingestion and retrieval problems, AgentCore Runtime/Gateway/Memory failures, SageMaker endpoint and training failures, GPU capacity, and cost blowups — with an expert on the call. See our AWS AI production support page.',
    },
    {
      question: 'Can you help me prepare for or clear AWS AI/ML interviews?',
      answer:
        'Yes. We offer AWS AI/ML proxy interview support and get-interview-scheduled services for AWS AI Engineer, GenAI Engineer, Bedrock Developer, AgentCore, SageMaker, AWS MLOps, and AWS AI Solutions Architect roles — live guidance during interviews, real-time interview support, and profile positioning so the calls come in the first place. Hiring decisions are always made solely by employers.',
    },
    {
      question: 'Is your content current with the latest AWS releases?',
      answer:
        'Yes. This cluster reflects the AWS product state through August 2026 — Bedrock AgentCore GA with Policy (Cedar) and Harness, Amazon Nova 2 as the current generation with first-generation Nova as legacy, SageMaker Unified Studio and Lakehouse, Guardrails automated reasoning checks, intelligent prompt routing, and Bedrock Data Automation. We verify version-sensitive details before advising.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your AWS stack, your situation (job support, production issue, interview, or profile), and your timeline. We match you with the right AWS AI expert — usually the same day. Every engagement is confidential and NDAs are available on request.',
    },
  ],
  useCasesSection: {
    title: 'What We Help AWS AI/ML Professionals With',
    cases: [
      'A Bedrock application returning AccessDenied or ValidationException that you cannot trace to an IAM or model-access cause',
      'A Bedrock Knowledge Base that will not finish ingestion, or RAG answers that suddenly went irrelevant after a data change',
      'An AgentCore agent failing in Runtime, losing Memory across sessions, or blocked by a Gateway Policy authorization error',
      'A SageMaker endpoint stuck in Creating/Failed, a training job dying on GPU capacity, or inference latency over SLA',
      'Joining a new AWS AI project and needing to ramp up on Bedrock, AgentCore, or SageMaker fast',
      'An AWS AI/ML interview in a few days — Bedrock RAG design, AgentCore architecture, or SageMaker MLOps you do not feel ready for',
    ],
  },
  proxySection: {
    title: 'AWS AI/ML Interview & Candidate Marketing Support',
    intro:
      'Getting into and moving up in AWS AI roles takes more than skill — it takes interview readiness and a profile that recruiters actually find. We support both sides: live proxy interview assistance during your real interview, and candidate marketing to generate the calls.',
    points: [
      'Live, discreet guidance during Amazon Bedrock, AgentCore, SageMaker, and AWS GenAI interviews',
      'Live proxy interview support for coding, RAG/LLM system design, and AWS AI architecture rounds',
      'Profile positioning around the exact keywords AWS AI recruiters and ATS filters screen for',
      'Active candidate marketing and recruiter outreach to build a real interview pipeline',
      'End-to-end support: get the interview, clear it, then keep the role with real-time job support',
    ],
  },
  bottomCTAHeading: 'Need Real-Time AWS AI/ML Job Support or Interview Help Right Now?',
  bottomCTABody:
    'In-house Amazon Bedrock, AgentCore, SageMaker, Nova, and AWS MLOps experts available same-day — project support, production fixes, live interview guidance, or profile positioning. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'AWS AI/ML job support USA', href: '/usa-aws-ai-ml-job-support/' },
      { label: 'AWS AI/ML job support Canada', href: '/canada-aws-ai-ml-job-support/' },
    ],
    techLinks: [
      BEDROCK_HUB_LINK,
      SAGEMAKER_HUB_LINK,
    ],
    problemLink: AWS_PRODUCTION_LINK,
    proxyLink: AWS_INTERVIEW_HUB_LINK,
    additionalLinks: [
      // Master hubs
      BEDROCK_HUB_LINK, AGENTCORE_HUB_LINK, SAGEMAKER_HUB_LINK, SAGEMAKER_AI_HUB_LINK,
      NOVA_HUB_LINK, KB_RAG_HUB_LINK, MLOPS_HUB_LINK, AWS_PRODUCTION_LINK,
      AWS_INTERVIEW_HUB_LINK, AWS_PROFILE_LINK, AWS_CANDIDATE_MARKETING_LINK, AWS_GET_SCHEDULED_LINK,
      // Country hubs
      { label: 'AWS AI/ML job support UK', href: '/uk-aws-ai-ml-job-support/' },
      { label: 'AWS AI/ML job support Ireland', href: '/ireland-aws-ai-ml-job-support/' },
      { label: 'AWS AI/ML job support Germany', href: '/germany-aws-ai-ml-job-support/' },
      { label: 'AWS AI/ML job support Australia', href: '/australia-aws-ai-ml-job-support/' },
      { label: 'AWS AI/ML job support Singapore', href: '/singapore-aws-ai-ml-job-support/' },
      { label: 'AWS AI/ML job support UAE', href: '/uae-aws-ai-ml-job-support/' },
      { label: 'AWS AI/ML job support Europe', href: '/europe-aws-ai-ml-job-support/' },
      // Bridge into existing authority clusters
      EXISTING.awsBedrockJobSupport, EXISTING.aimlHub, EXISTING.genai, EXISTING.rag,
      EXISTING.agenticAi, EXISTING.mlops, EXISTING.awsGuide, EXISTING.vectorDb,
    ],
  }),
});

// ─── AWS AI production support ───────────────────────────────────────────────

export const awsAiProductionSupport: LandingPageConfig = awsPage({
  slug: 'aws-ai-ml-production-support',
  title: 'AWS AI Production Support — Bedrock, AgentCore & SageMaker Incidents',
  description:
    'Real-time AWS AI production support: fix Bedrock throttling and AccessDenied, Knowledge Base ingestion failures, RAG quality collapse, AgentCore Runtime/Gateway errors, and SageMaker endpoint failures with an expert on the call. Same-day help.',
  keywords: [
    'AWS AI production support', 'Amazon Bedrock production issue', 'Bedrock throttling support',
    'Knowledge Base ingestion failure', 'AgentCore production support', 'SageMaker endpoint failure support',
    'AWS AI incident support', 'Bedrock AccessDenied fix', 'AWS GenAI production firefighting',
  ],
  h1: 'AWS AI Production Support — Fix Live Bedrock, AgentCore & SageMaker Issues Fast',
  tagline:
    'When an AWS AI system breaks in production, you need an expert on the call now — not a support ticket queue. Real-time help for Bedrock, RAG, AgentCore, and SageMaker incidents.',
  heroEyebrow: 'AWS AI Production Firefighting — 24/7',
  painIntro:
    'Bedrock suddenly throwing ThrottlingException under load? Knowledge Base returning stale or wrong citations after a sync? AgentCore agents timing out or losing memory? A SageMaker endpoint stuck in Failed before a release? AWS AI incidents are high-pressure and hard to debug alone.',
  heroVariant:
    'AWS AI systems fail in specific ways — model-access and IAM AccessDenied, ServiceQuotaExceeded and on-demand throttling, cross-region inference profile misconfiguration, embedding and OpenSearch index problems, Guardrails blocking valid output, AgentCore Gateway Policy (Cedar) denials, SageMaker container and GPU-capacity failures, and runaway token or endpoint cost. Our engineers work the incident live with you — reading CloudWatch logs, CloudTrail events, and request IDs — to find the root cause, stabilize the system, and ship a durable fix.',
  geoLine:
    'On-call AWS AI production support for teams across USA, Canada, UK, Europe, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available around the clock for urgent production incidents across all major time zones.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What AWS AI production issues can you help with?',
      answer:
        'Bedrock AccessDenied and model-access errors, ThrottlingException and ServiceQuotaExceeded, cross-region inference profile problems, latency and timeout spikes, Knowledge Base ingestion and sync failures, RAG retrieval quality collapse and wrong citations, Guardrails false blocks, AgentCore Runtime/Gateway/Memory/Identity failures, SageMaker endpoint deployment and training-job failures, GPU capacity errors, and cost blowups. We work the incident live until the system is stable.',
    },
    {
      question: 'How fast can you join an AWS AI incident?',
      answer:
        'Usually within the same working session. Message us on WhatsApp with the symptoms, the service, and the request ID or error, and we assign an engineer who has handled that class of incident before. For active outages we prioritize immediate response.',
    },
    {
      question: 'Do you cover Bedrock Knowledge Base and RAG problems specifically?',
      answer:
        'Yes. RAG on Bedrock is a core focus — ingestion job failures, chunking and embedding issues, OpenSearch Serverless index problems, metadata-filter and reranking failures, RetrieveAndGenerate returning wrong or hallucinated answers, and latency from multi-step retrieval. We diagnose and fix answer-quality and reliability issues.',
    },
    {
      question: 'Can you help set up monitoring so this does not recur?',
      answer:
        'Yes. Beyond the immediate fix, we help you add the right observability — CloudWatch metrics and logs, AgentCore Observability with OpenTelemetry spans and traces, Bedrock invocation logging, token and cost dashboards, Cost Explorer and Budgets, and alerting — so the next regression is caught early.',
    },
    {
      question: 'Is production support confidential?',
      answer:
        'Completely. We never share client, employer, or system details with any third party, and NDAs are available on request. We only act inside your AWS account under your explicit direction. All incident work is handled with full professional discretion.',
    },
  ],
  useCasesSection: {
    title: 'Production AWS AI Incidents We Resolve',
    cases: [
      'Bedrock returning AccessDenied or ThrottlingException in production despite working in dev',
      'A Knowledge Base ingestion job failing, or RAG answers degrading after an embedding-model or data change',
      'AgentCore agents timing out, losing long-term memory, or hitting Gateway Policy authorization denials',
      'A SageMaker real-time endpoint stuck in Failed, or a training job dying on InsufficientInstanceCapacity',
      'Bedrock or SageMaker cost spiking with no clear cause before a budget review',
      'A bad deployment in production needing a safe, fast rollback and a stable re-release',
    ],
  },
  proxySection: {
    title: 'Beyond the Fix — Onboarding & Interview Support',
    intro:
      'Many people who reach us during an AWS AI incident also need help ramping onto the project or moving to the next role. We support the whole journey — production, onboarding, and interviews.',
    points: [
      'Root-cause analysis and a durable fix during the live incident',
      'Post-incident hardening — CloudWatch, AgentCore Observability, evaluation, and rollback safety',
      'Project onboarding support so you get productive on an unfamiliar AWS AI codebase fast',
      'Interview and profile support for when you are ready for the next AWS AI role',
      'Confidential, in-house experts — no sub-contracting, NDAs available',
    ],
  },
  bottomCTAHeading: 'AWS AI System Down or Misbehaving? Get Production Help Now',
  bottomCTABody:
    'Real-time AWS AI production support — Bedrock, RAG, AgentCore, and SageMaker incidents resolved with an expert on the call. Contact ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      AWS_HUB_LINK,
      { label: 'AWS AI/ML job support USA', href: '/usa-aws-ai-ml-job-support/' },
    ],
    techLinks: [
      BEDROCK_HUB_LINK,
      AGENTCORE_HUB_LINK,
    ],
    problemLink: { label: 'Amazon Bedrock troubleshooting', href: '/amazon-bedrock-troubleshooting-support/' },
    proxyLink: EXISTING.mlopsProxy,
    additionalLinks: [
      KB_RAG_HUB_LINK, SAGEMAKER_AI_HUB_LINK, MLOPS_HUB_LINK,
      { label: 'AgentCore production troubleshooting', href: '/amazon-bedrock-agentcore-troubleshooting-support/' },
      { label: 'SageMaker inference troubleshooting', href: '/amazon-sagemaker-inference-troubleshooting-support/' },
      EXISTING.aimlProduction, EXISTING.production, EXISTING.rag,
    ],
  }),
});

// ─── AWS AI/ML interview support hub ─────────────────────────────────────────

export const awsAiInterviewHub: LandingPageConfig = awsPage({
  slug: 'aws-ai-ml-interview-support',
  title: 'AWS AI/ML Interview Support — Bedrock, AgentCore & SageMaker Proxy Help',
  description:
    'Real-time AWS AI/ML proxy interview support for Amazon Bedrock, Bedrock AgentCore, SageMaker AI, RAG, Nova, and AWS GenAI architecture rounds — live guidance on coding, system design, and production scenarios, confidential.',
  keywords: [
    'AWS AI ML interview support', 'Amazon Bedrock interview support', 'AWS GenAI interview proxy',
    'AgentCore interview support', 'SageMaker interview support', 'AWS RAG interview support',
    'AWS AI architect interview', 'AWS ML engineer interview support', 'AWS AI proxy interview',
  ],
  h1: 'AWS AI/ML Interview Support — Live Proxy Help for Bedrock, AgentCore & SageMaker',
  tagline:
    'From Bedrock RAG design to AgentCore system design and SageMaker MLOps, AWS AI interviews are dense. Get discreet, real-time expert support during the interview itself.',
  heroEyebrow: 'AWS AI/ML Interview Support Hub',
  painIntro:
    'An AWS GenAI or ML interview coming up and unsure how deep they will go on Bedrock inference profiles, Knowledge Base architecture, AgentCore memory strategies, or SageMaker training and deployment? AWS AI interviews reward specificity that is hard to fake.',
  heroVariant:
    'Our experts support you across the full AWS AI interview surface: Amazon Bedrock (model selection, Converse API, on-demand vs provisioned throughput, cross-region inference, intelligent prompt routing), Knowledge Bases and RAG (chunking, embeddings, OpenSearch, reranking, RetrieveAndGenerate, evaluation), Guardrails and responsible AI, AgentCore (Runtime, Memory, Gateway, Identity, Policy/Cedar), Amazon Nova, SageMaker AI (training, HyperPod, endpoints, Pipelines, Managed MLflow, Model Registry), and AWS security and cost design. Then we back you live during the interview if you want it.',
  geoLine:
    'AWS AI/ML interview support for candidates targeting roles across USA, Canada, UK, Europe, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across all major business hours and for interviews scheduled in any time zone.',
  highlights: interviewHighlights,
  faqs: [
    {
      question: 'What AWS AI/ML interviews do you support?',
      answer:
        'AWS AI Engineer, Generative AI Engineer, Amazon Bedrock Developer, AWS Agentic AI / AgentCore Engineer, AWS ML Engineer, SageMaker Engineer, AWS MLOps Engineer, AWS RAG Engineer, and AWS AI Solutions Architect interviews — coding rounds, ML/LLM system design, AWS architecture deep-dives, and final-round panels.',
    },
    {
      question: 'What AWS AI topics come up most in interviews?',
      answer:
        'Bedrock model selection and inference (on-demand vs provisioned throughput, inference profiles, cross-region inference, intelligent prompt routing), RAG architecture on Bedrock Knowledge Bases with OpenSearch or Aurora pgvector, chunking and reranking strategies, Guardrails and hallucination mitigation, AgentCore agent architecture and memory, SageMaker training and inference options, AWS MLOps with Pipelines and Managed MLflow, and IAM/KMS/VPC security for AI workloads.',
    },
    {
      question: 'How does live proxy interview support work?',
      answer:
        'Before the interview we align on the role, company format, and likely topics. During the live interview, an AWS AI expert provides discreet real-time guidance via audio or chat — helping you structure system-design answers, reason about trade-offs, and handle deep-dive questions accurately. Everything is confidential.',
    },
    {
      question: 'Do you also help me get the interviews?',
      answer:
        'Yes. Our AWS AI candidate marketing and get-interview-scheduled services position your profile around the keywords AWS AI recruiters search for and run active outreach, so calls actually come in. We do not guarantee selection or employment — hiring decisions are made solely by employers.',
    },
    {
      question: 'Is it confidential?',
      answer:
        'Completely. We never disclose candidate identities, employer names, or interview details, and support is delivered discreetly. NDAs are available on request.',
    },
  ],
  useCasesSection: {
    title: 'AWS AI Interview Situations We Support You Through',
    cases: [
      'A system-design round asking you to architect a production RAG assistant on Bedrock Knowledge Bases',
      'A deep-dive on AgentCore Runtime, Memory, Gateway, and Policy for a production agent platform',
      'A SageMaker MLOps round covering training, Pipelines, Managed MLflow, Model Registry, and endpoints',
      'A Bedrock inference and cost round — provisioned throughput vs on-demand, inference profiles, prompt routing',
      'An AWS security round on IAM least privilege, KMS encryption, and VPC endpoints for Bedrock and SageMaker',
      'A coding round using boto3 and the AWS SDK against Bedrock and SageMaker APIs',
    ],
  },
  proxySection: {
    title: 'Live AWS AI Proxy Interview Support',
    intro:
      'We provide discreet, real-time expert support during your actual interview so you walk in ready and stay steady under pressure.',
    points: [
      'Live support on Bedrock, AgentCore, SageMaker, and AWS GenAI architecture rounds',
      'Real-time guidance grounded in current August 2026 AWS capabilities',
      'Live, discreet guidance during the real interview via audio or chat',
      'Profile positioning and candidate marketing so the calls come in the first place',
      'Confidential, in-house AWS AI experts — NDAs available',
    ],
  },
  bottomCTAHeading: 'AWS AI/ML Interview Coming Up? Get Proxy Support Now',
  bottomCTABody:
    'Discreet, real-time AWS AI proxy interview support — Bedrock, AgentCore, SageMaker, and GenAI architecture. Contact ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      AWS_HUB_LINK,
      AWS_GET_SCHEDULED_LINK,
    ],
    techLinks: [
      { label: 'Amazon Bedrock interview support', href: '/amazon-bedrock-interview-proxy-support/' },
      { label: 'AgentCore interview support', href: '/amazon-bedrock-agentcore-interview-proxy-support/' },
    ],
    problemLink: AWS_PRODUCTION_LINK,
    proxyLink: EXISTING.awsBedrockInterview,
    additionalLinks: [
      { label: 'SageMaker interview support', href: '/amazon-sagemaker-interview-proxy-support/' },
      { label: 'AWS RAG interview support', href: '/aws-rag-interview-proxy-support/' },
      { label: 'AWS AI architect interview support', href: '/aws-ai-solutions-architect-interview-proxy-support/' },
      AWS_PROFILE_LINK, AWS_CANDIDATE_MARKETING_LINK,
      EXISTING.awsBedrockInterview, EXISTING.genaiProxy, EXISTING.ragProxy, EXISTING.aimlProxy,
    ],
  }),
});

// ─── AWS AI profile positioning ──────────────────────────────────────────────

export const awsAiProfilePositioning: LandingPageConfig = awsPage({
  slug: 'aws-ai-ml-profile-positioning-support',
  title: 'AWS AI Profile Positioning & Candidate Marketing',
  description:
    'Get your resume and LinkedIn positioned for AWS AI roles. Keyword engineering for Amazon Bedrock, AgentCore, SageMaker, GenAI, and AWS MLOps so recruiters actually find you — plus active candidate marketing.',
  keywords: [
    'AWS AI profile positioning', 'AWS AI candidate marketing', 'Bedrock engineer resume',
    'AWS GenAI resume keywords', 'SageMaker engineer LinkedIn', 'AWS MLOps resume optimization',
    'AWS AI engineer profile', 'get AWS AI recruiter calls',
  ],
  h1: 'AWS AI Profile Positioning — Get Found by Bedrock, SageMaker & GenAI Recruiters',
  tagline:
    'A strong AWS engineer with a weak profile gets no calls. We position your resume and LinkedIn for the exact AWS AI roles you want — and market you to recruiters.',
  heroEyebrow: 'AWS AI Profile Positioning',
  painIntro:
    'Applying to AWS AI roles and hearing nothing back? The problem is usually not your skill — it is that your profile reads like a generic cloud or data engineer and does not surface for Amazon Bedrock, AgentCore, SageMaker, GenAI, and AWS MLOps searches.',
  heroVariant:
    'AWS AI recruiters search very specifically — Amazon Bedrock, RAG, Knowledge Bases, AgentCore, Amazon Nova, SageMaker AI, AWS MLOps, and measurable production impact. A profile that buries the AWS AI work gets filtered out. We rebuild your resume and LinkedIn around what actually gets you found in 2026, quantify your impact (latency, cost, accuracy, scale), and market that profile through active recruiter outreach.',
  geoLine:
    'Profile positioning and candidate marketing for AWS AI professionals targeting roles in the USA, Canada, UK, Europe, Australia, and worldwide.',
  timezoneNote: 'Profile support and outreach aligned to your target market — US, Canadian, UK, European, or global.',
  highlights: marketingHighlights,
  faqs: [
    {
      question: 'Why is my AWS AI resume getting no interview calls?',
      answer:
        'Almost always positioning and keywords. The resume reads like a generic AWS or data profile, buries the Bedrock/SageMaker/GenAI impact, and misses the terms recruiters and ATS filters screen for — Amazon Bedrock, RAG, Knowledge Bases, AgentCore, SageMaker AI, AWS MLOps, and specific services. We diagnose the gaps and rebuild the profile so it surfaces and passes screening.',
    },
    {
      question: 'What exactly do you change on my profile?',
      answer:
        'Headline and summary, keyword coverage for your target AWS AI roles, measurable-impact bullet points (inference latency, token cost, model accuracy, scale), skills and project framing around real AWS services, and ATS-friendly structure. We tailor it to the specific roles and market you are targeting.',
    },
    {
      question: 'Do you also apply and reach out on my behalf?',
      answer:
        'Yes. Candidate marketing includes active application support and recruiter/hiring-manager outreach so your positioned AWS AI profile actually reaches people, rather than sitting unseen in job-board databases.',
    },
    {
      question: 'Can you position me for a specific AWS AI role?',
      answer:
        'Yes. We position for AWS AI Engineer, GenAI Engineer, Bedrock Developer, AgentCore Engineer, SageMaker Engineer, AWS MLOps Engineer, AWS RAG Engineer, and AWS AI Solutions Architect — each has different keyword and seniority expectations, and we account for them.',
    },
    {
      question: 'How soon do candidates see results?',
      answer:
        'Profile changes and outreach begin the same day. Most candidates see recruiter activity within 1–2 weeks, depending on their market and specialization.',
    },
  ],
  useCasesSection: {
    title: 'AWS AI Profile Situations We Fix',
    cases: [
      'A capable AWS engineer applying to Bedrock/GenAI roles with no responses — keyword and positioning mismatch',
      'A cloud or backend engineer transitioning into AWS AI whose profile still reads like DevOps',
      'A data scientist wanting AWS GenAI/RAG roles but not showing up in those searches',
      'A strong profile buried under vague bullets instead of measurable Bedrock/SageMaker impact',
      'A LinkedIn headline recruiters scroll past for AWS AI Engineer and AgentCore roles',
      'A candidate targeting a new country whose profile is not positioned for that market',
    ],
  },
  proxySection: {
    title: 'From Positioning to Offer',
    intro:
      'Positioning gets the calls; we help you convert them. Profile work pairs with AWS AI interview support and job support so the whole pipeline works end to end.',
    points: [
      'AWS AI keyword engineering for resume, LinkedIn, and job-board profiles',
      'Measurable-impact rewriting so your Bedrock/SageMaker/GenAI work stands out',
      'Active candidate marketing and recruiter outreach to hiring managers',
      'AWS AI/ML proxy interview support to convert the interviews you land',
      'Get-interview-scheduled support if you want a managed pipeline of calls',
    ],
  },
  bottomCTAHeading: 'Get Your Profile Positioned for AWS AI Roles Now',
  bottomCTABody:
    'Stop getting filtered out. We engineer your AWS AI profile for recruiter visibility and market you actively. Contact ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      AWS_HUB_LINK,
      AWS_GET_SCHEDULED_LINK,
    ],
    techLinks: [
      AWS_INTERVIEW_HUB_LINK,
      AWS_CANDIDATE_MARKETING_LINK,
    ],
    problemLink: { label: 'AWS AI Engineer job support', href: '/aws-ai-engineer-job-support/' },
    proxyLink: EXISTING.aimlProxy,
    additionalLinks: [
      AWS_CANDIDATE_MARKETING_LINK, AWS_GET_SCHEDULED_LINK, AWS_INTERVIEW_HUB_LINK,
      EXISTING.candidateMarketing, EXISTING.genaiEngineer, AWS_HUB_LINK,
    ],
  }),
});

// ─── AWS AI candidate marketing ──────────────────────────────────────────────

export const awsAiCandidateMarketing: LandingPageConfig = awsPage({
  slug: 'aws-ai-ml-candidate-marketing',
  title: 'AWS AI Candidate Marketing — Get Bedrock & SageMaker Interview Calls',
  description:
    'AWS AI candidate marketing: profile engineering, keyword targeting, and recruiter outreach so Amazon Bedrock, AgentCore, SageMaker, GenAI, and AWS MLOps roles actually find you. Active applications, confidential.',
  keywords: [
    'AWS AI candidate marketing', 'AWS GenAI candidate marketing', 'Bedrock candidate marketing',
    'AWS ML candidate marketing', 'AWS AI recruiter outreach', 'AWS AI job application service',
    'get AWS AI interview calls',
  ],
  h1: 'AWS AI Candidate Marketing — Turn a Strong Profile Into Real Interview Calls',
  tagline:
    'Skill alone does not generate AWS AI interviews. We market your profile actively — positioning, applications, and recruiter outreach — so Bedrock, SageMaker, and GenAI roles reach you.',
  heroEyebrow: 'AWS AI Candidate Marketing',
  painIntro:
    'You have the AWS AI skills but the calls are not coming. Most strong candidates lose out not on ability but on visibility — the profile never reaches the right recruiters and hiring managers for Amazon Bedrock, AgentCore, SageMaker, and AWS MLOps roles.',
  heroVariant:
    'Candidate marketing closes that gap. We position your AWS AI profile around the exact terms recruiters search, then run active applications and targeted outreach to hiring managers and staffing firms across your target market. We combine it with AWS AI proxy interview support and job support so that once calls start, you convert and keep the role.',
  geoLine:
    'AWS AI candidate marketing for professionals targeting roles in the USA, Canada, UK, Europe, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Outreach and applications aligned to your target market and its business hours.',
  highlights: marketingHighlights,
  faqs: awsMarketingFaqs('AWS AI professionals'),
  useCasesSection: {
    title: 'AWS AI Candidate Marketing Situations',
    cases: [
      'A strong Bedrock/RAG engineer applying for months with almost no recruiter responses',
      'A SageMaker or MLOps engineer wanting to move into GenAI roles but invisible in those searches',
      'A candidate targeting a new country who needs local-market positioning and outreach',
      'A senior engineer who does not have time to run applications and follow-ups themselves',
      'A profile with real AWS AI impact that is not framed for recruiters or ATS filters',
      'A contractor between engagements who needs a fast, active pipeline of AWS AI calls',
    ],
  },
  proxySection: {
    title: 'Marketing Plus Interview Conversion',
    intro:
      'Getting calls is half the battle. We pair candidate marketing with interview support so the pipeline converts.',
    points: [
      'AWS AI profile positioning and keyword engineering for your target roles',
      'Active applications and recruiter/hiring-manager outreach',
      'AWS AI/ML proxy interview support to convert the calls you generate',
      'Real-time AWS AI job support once you land the role',
      'Confidential handling with NDAs available',
    ],
  },
  bottomCTAHeading: 'Want a Real Pipeline of AWS AI Interview Calls?',
  bottomCTABody:
    'AWS AI candidate marketing — positioning, applications, and recruiter outreach that generate interviews. Contact ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AWS_HUB_LINK, AWS_GET_SCHEDULED_LINK],
    techLinks: [AWS_PROFILE_LINK, AWS_INTERVIEW_HUB_LINK],
    problemLink: { label: 'AWS GenAI Engineer job support', href: '/aws-generative-ai-engineer-job-support/' },
    proxyLink: EXISTING.aimlProxy,
    additionalLinks: [AWS_PROFILE_LINK, AWS_GET_SCHEDULED_LINK, EXISTING.candidateMarketing, AWS_HUB_LINK],
  }),
});

// ─── Get AWS AI interview scheduled ──────────────────────────────────────────

export const awsGetInterviewScheduled: LandingPageConfig = awsPage({
  slug: 'get-aws-ai-ml-interview-scheduled',
  title: 'Get AWS AI Interview Scheduled — Bedrock, SageMaker & GenAI Roles',
  description:
    'Get AWS AI/ML interviews scheduled through profile engineering, keyword targeting, and active recruiter outreach for Amazon Bedrock, AgentCore, SageMaker, GenAI, and AWS MLOps roles. Managed pipeline, confidential.',
  keywords: [
    'get AWS AI interview scheduled', 'get Amazon Bedrock interview scheduled', 'get SageMaker interview scheduled',
    'get AWS GenAI interview scheduled', 'get AWS ML engineer interview', 'AWS AI interview pipeline',
  ],
  h1: 'Get AWS AI Interview Scheduled — A Managed Pipeline for Bedrock, SageMaker & GenAI',
  tagline:
    'Stop waiting for calls that never come. We build and run an AWS AI interview pipeline — positioning, targeted outreach, and scheduling — so interviews actually land on your calendar.',
  heroEyebrow: 'Get AWS AI Interview Scheduled',
  painIntro:
    'You want AWS AI interviews on the calendar, not another month of silent applications. The bottleneck is rarely skill — it is a profile that does not surface and outreach that never happens consistently.',
  heroVariant:
    'We run the scheduling engine for you: position your AWS AI profile for Bedrock, AgentCore, SageMaker, and GenAI roles, target the right recruiters and hiring managers, run consistent outreach and follow-ups, and coordinate interview scheduling. Then we back you with AWS AI proxy interview support so you convert. We never guarantee selection or employment — hiring decisions are made solely by employers.',
  geoLine:
    'Interview scheduling support for AWS AI candidates targeting the USA, Canada, UK, Europe, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Scheduling coordinated across your target market and its business hours.',
  highlights: marketingHighlights,
  faqs: awsMarketingFaqs('AWS AI candidates'),
  useCasesSection: {
    title: 'When Get-Scheduled Support Helps',
    cases: [
      'You are strong on Bedrock/SageMaker but cannot generate a steady flow of interviews',
      'You do not have time to run outreach, applications, and follow-ups consistently',
      'You are targeting a new country and need local recruiter targeting and scheduling',
      'You want interviews concentrated into a focused window rather than trickling in',
      'You need positioning plus scheduling plus interview support handled together',
      'You are a contractor who needs a fast, managed AWS AI interview pipeline',
    ],
  },
  proxySection: {
    title: 'Scheduling Plus Conversion',
    intro:
      'A full pipeline: get the interviews scheduled, then convert them with AWS AI interview support.',
    points: [
      'AWS AI profile positioning for your target Bedrock/SageMaker/GenAI roles',
      'Targeted recruiter and hiring-manager outreach with consistent follow-up',
      'Interview scheduling coordination across your target market',
      'AWS AI/ML proxy interview support to convert scheduled interviews',
      'Confidential handling — NDAs available',
    ],
  },
  bottomCTAHeading: 'Ready to Get AWS AI Interviews on Your Calendar?',
  bottomCTABody:
    'A managed AWS AI interview pipeline — positioning, outreach, and scheduling. Contact ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AWS_HUB_LINK, AWS_INTERVIEW_HUB_LINK],
    techLinks: [AWS_PROFILE_LINK, AWS_CANDIDATE_MARKETING_LINK],
    problemLink: AWS_PRODUCTION_LINK,
    proxyLink: EXISTING.awsBedrockInterview,
    additionalLinks: [AWS_CANDIDATE_MARKETING_LINK, AWS_PROFILE_LINK, EXISTING.getScheduled, AWS_HUB_LINK],
  }),
});

// ─── AWS AI project onboarding support ───────────────────────────────────────

export const awsAiProjectOnboarding: LandingPageConfig = awsPage({
  slug: 'aws-ai-ml-project-onboarding-support',
  title: 'AWS AI Project Onboarding Support — Ramp Up on Bedrock & SageMaker Fast',
  description:
    'Just joined an AWS AI project? Get real-time onboarding support to understand the Bedrock/AgentCore/SageMaker setup, IAM and account structure, deliver your first tasks, and pass early reviews. Same-day help.',
  keywords: [
    'AWS AI project onboarding', 'new AWS AI engineer support', 'Bedrock project onboarding',
    'SageMaker onboarding help', 'AWS AI ramp up support', 'AWS GenAI new project support',
  ],
  h1: 'AWS AI Project Onboarding Support — Get Productive on Bedrock & SageMaker Fast',
  tagline:
    'Starting a new AWS AI role or project is where most people struggle. We help you understand the setup, IAM boundaries, and account structure, deliver early, and build credibility from week one.',
  heroEyebrow: 'AWS AI Onboarding Support',
  painIntro:
    'New AWS AI project, unfamiliar account, multiple IAM roles, an existing Bedrock or SageMaker setup you did not build, and a manager expecting output fast? Onboarding is where confidence gets tested.',
  heroVariant:
    'The first few weeks on an AWS AI project decide how you are perceived for months. We help you read the existing architecture, understand the account and IAM structure, get boto3 and local/cloud environments working, reproduce Bedrock and SageMaker workflows, and deliver your first tickets cleanly — so standups, reviews, and client calls go well instead of exposing gaps.',
  geoLine:
    'Onboarding support for new AWS AI joiners across USA, Canada, UK, Europe, Australia, and worldwide.',
  timezoneNote: 'Available across all major business hours for daily onboarding support during your first weeks.',
  highlights: jobSupportHighlights,
  faqs: awsJobFaqs('new AWS AI project joiners', 'reading the existing architecture, understanding IAM and account boundaries, getting environments working, and delivering your first tasks'),
  useCasesSection: {
    title: 'AWS AI Onboarding Situations We Help With',
    cases: [
      'Inheriting an existing Bedrock or AgentCore application with undocumented IAM roles and configuration',
      'Getting boto3, credentials, SSO/IAM Identity Center, and local environments working from scratch',
      'Understanding an existing RAG or SageMaker pipeline well enough to safely change it',
      'Reproducing a Bedrock or SageMaker workflow before making your first modification',
      'Delivering your first sprint tickets confidently and passing code review',
      'Handling early standups and client calls without exposing knowledge gaps',
    ],
  },
  proxySection: {
    title: 'Onboarding Into Client Calls & Standups',
    intro:
      'Onboarding is not just code — it is communication. We help you handle the meetings that shape early impressions.',
    points: [
      'Preparation before standups so you can report progress and blockers clearly',
      'Support during architecture and design discussions on your AWS AI project',
      'Help translating tickets into a concrete delivery plan on AWS',
      'Guidance on the questions to ask (and not ask) to build credibility fast',
      'A direct line to an AWS AI expert whenever you get stuck during your first weeks',
    ],
  },
  bottomCTAHeading: 'Just Joined an AWS AI Project? Get Onboarding Support Now',
  bottomCTABody:
    'Ramp up fast, deliver early, and build credibility with real-time AWS AI onboarding support. Contact ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AWS_HUB_LINK, AWS_PRODUCTION_LINK],
    techLinks: [BEDROCK_HUB_LINK, SAGEMAKER_AI_HUB_LINK],
    problemLink: { label: 'Amazon Bedrock troubleshooting', href: '/amazon-bedrock-troubleshooting-support/' },
    proxyLink: EXISTING.aimlProxy,
    additionalLinks: [AWS_HUB_LINK, BEDROCK_HUB_LINK, AGENTCORE_HUB_LINK, EXISTING.awsGuide],
  }),
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const awsCorePages: LandingPageConfig[] = [
  awsAiMlHub,
  awsAiProductionSupport,
  awsAiInterviewHub,
  awsAiProfilePositioning,
  awsAiCandidateMarketing,
  awsGetInterviewScheduled,
  awsAiProjectOnboarding,
];
