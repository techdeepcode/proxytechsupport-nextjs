import type { LandingPageConfig } from '../landing-pages';
import {
  awsPage,
  awsServicePage,
  relatedLinks,
  jobSupportHighlights,
  awsServiceFaqs,
  EXISTING,
  AWS_HUB_LINK,
  BEDROCK_HUB_LINK,
  AGENTCORE_HUB_LINK,
  KB_RAG_HUB_LINK,
  NOVA_HUB_LINK,
  AWS_PRODUCTION_LINK,
  AWS_INTERVIEW_HUB_LINK,
} from './shared';

// ─── Amazon Bedrock hub ──────────────────────────────────────────────────────

export const amazonBedrockHub: LandingPageConfig = awsPage({
  slug: 'amazon-bedrock-job-support',
  title: 'Amazon Bedrock Job Support — GenAI Apps, RAG, Guardrails & Agents',
  description:
    'Real-time Amazon Bedrock job support and production help: Converse API, foundation models, inference profiles, Knowledge Bases, Guardrails, Flows, Data Automation, and model customization — with an AWS expert on the call. Same-day, confidential.',
  keywords: [
    'Amazon Bedrock job support', 'AWS Bedrock support', 'Bedrock production support',
    'Bedrock Converse API support', 'Bedrock RAG support', 'Bedrock Guardrails support',
    'Bedrock inference support', 'enterprise Bedrock support', 'Bedrock application development support',
  ],
  h1: 'Amazon Bedrock Job Support — Build, Ship & Fix Production GenAI on AWS',
  tagline:
    'The strongest commercial hub for Amazon Bedrock: real-time help with foundation models, the Converse API, inference, Knowledge Bases, Guardrails, Flows, and Data Automation on your live AWS project.',
  heroEyebrow: 'Amazon Bedrock Hub — Updated August 2026',
  painIntro:
    'Building or running a Bedrock application and hitting AccessDenied on model access, ThrottlingException under load, cross-region inference-profile confusion, or Knowledge Base answers that went wrong? Bedrock is powerful but unforgiving in production.',
  heroVariant:
    'Amazon Bedrock is a fully managed service for building generative AI applications with foundation models from Amazon Nova, Anthropic Claude, Meta Llama, Mistral, Cohere, and more, behind one API. We help you across the whole surface: the Converse and ConverseStream APIs, InvokeModel and streaming, on-demand vs provisioned throughput, application inference profiles and cross-region inference, intelligent prompt routing, Knowledge Bases (RAG), Guardrails with automated reasoning checks, Bedrock Flows, Prompt Management, Data Automation, and model customization (fine-tuning, distillation, evaluation). We debug with CloudWatch logs, CloudTrail, and request IDs, and we harden IAM, KMS, and VPC endpoints for enterprise deployment.',
  geoLine:
    'Amazon Bedrock support for engineers across USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover Bedrock Runtime, Converse API, inference profiles, cross-region inference, Knowledge Bases, Guardrails, Flows, Prompt Management, Data Automation, model customization, and Bedrock security with IAM, KMS, and PrivateLink.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What Amazon Bedrock job support do you provide?',
      answer:
        'Real-time, hands-on help on your live Bedrock project — application development with the Converse API and InvokeModel, model selection across Amazon Nova, Claude, Llama, Mistral, and Cohere, inference design (on-demand, provisioned throughput, inference profiles, cross-region inference, intelligent prompt routing), Knowledge Bases and RAG, Guardrails, Flows, Prompt Management, Data Automation, model customization, and the IAM, KMS, and VPC security around it all.',
    },
    {
      question: 'Do you help fix Bedrock production issues?',
      answer:
        'Yes. Common ones include AccessDenied from missing model access or IAM policy, ThrottlingException and ServiceQuotaExceeded, cross-region inference profile misconfiguration, ValidationException on request shape, streaming errors, Guardrails blocking valid output, and cost blowups from token usage. We diagnose with CloudWatch and CloudTrail and ship a durable fix.',
    },
    {
      question: 'Which foundation models on Bedrock do you cover?',
      answer:
        'The current Bedrock catalog through August 2026 — Amazon Nova (Nova 2 generation, with first-generation Nova as legacy), Anthropic Claude, Meta Llama, Mistral, Cohere, plus embedding and multimodal models. We help with model selection, prompt design, evaluation, and cost/latency trade-offs rather than chasing every transient minor version.',
    },
    {
      question: 'Is this different from your existing AWS Bedrock job support page?',
      answer:
        'This is the Amazon Bedrock hub for the full AWS AI/ML cluster — it connects to Knowledge Bases, Guardrails, AgentCore, Nova, and SageMaker. Our original AWS Bedrock job support page remains available and is cross-linked; both point you to the same in-house AWS AI experts.',
    },
    {
      question: 'How do I get started and is it confidential?',
      answer:
        'Message us on WhatsApp with your Bedrock use case, the problem, and your timeline. We assign the right expert — usually same-day. Every engagement is confidential and NDAs are available on request; we act in your AWS account only under your direction.',
    },
  ],
  useCasesSection: {
    title: 'Amazon Bedrock Situations We Help With',
    cases: [
      'A Bedrock app failing with AccessDenied, ValidationException, or ThrottlingException in production',
      'Choosing between on-demand, provisioned throughput, inference profiles, and cross-region inference',
      'Designing a production RAG assistant on Bedrock Knowledge Bases with OpenSearch or Aurora pgvector',
      'Adding Guardrails without blocking legitimate output, including automated reasoning checks',
      'Orchestrating multi-step logic with Bedrock Flows and Lambda integration',
      'Cutting Bedrock cost with intelligent prompt routing, caching, and model right-sizing',
    ],
  },
  proxySection: {
    title: 'Bedrock Interview & Career Support',
    intro:
      'Interviewing for a Bedrock or AWS GenAI role? We prepare you and can back you live during the real interview.',
    points: [
      'Bedrock architecture, inference, and RAG system-design preparation',
      'Model selection, cost, and Guardrails trade-off questions',
      'Live, discreet proxy interview support during the real interview',
      'Profile positioning for Amazon Bedrock Developer and AWS GenAI Engineer roles',
      'Confidential, in-house AWS AI experts — NDAs available',
    ],
  },
  bottomCTAHeading: 'Need Amazon Bedrock Job Support or a Production Fix Now?',
  bottomCTABody:
    'In-house Amazon Bedrock experts available same-day — application development, production incidents, RAG, Guardrails, and cost optimization. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AWS_HUB_LINK, { label: 'Amazon Bedrock support USA', href: '/usa-amazon-bedrock-job-support/' }],
    techLinks: [KB_RAG_HUB_LINK, { label: 'Bedrock Guardrails support', href: '/amazon-bedrock-guardrails-job-support/' }],
    problemLink: { label: 'Amazon Bedrock troubleshooting', href: '/amazon-bedrock-troubleshooting-support/' },
    proxyLink: EXISTING.awsBedrockInterview,
    additionalLinks: [
      KB_RAG_HUB_LINK,
      { label: 'Bedrock RAG support', href: '/amazon-bedrock-rag-job-support/' },
      { label: 'Bedrock Guardrails support', href: '/amazon-bedrock-guardrails-job-support/' },
      { label: 'Bedrock Data Automation support', href: '/amazon-bedrock-data-automation-job-support/' },
      { label: 'Bedrock inference support', href: '/amazon-bedrock-inference-job-support/' },
      { label: 'Bedrock Flows support', href: '/amazon-bedrock-flows-job-support/' },
      { label: 'Bedrock model customization', href: '/amazon-bedrock-model-customization-job-support/' },
      { label: 'Bedrock Converse API support', href: '/amazon-bedrock-converse-api-job-support/' },
      AGENTCORE_HUB_LINK, NOVA_HUB_LINK, AWS_PRODUCTION_LINK, AWS_INTERVIEW_HUB_LINK,
      EXISTING.awsBedrockJobSupport, EXISTING.genai, EXISTING.rag, EXISTING.bedrockVsAzure,
    ],
  }),
});

// ─── Bedrock Knowledge Bases (RAG hub) ───────────────────────────────────────

export const bedrockKnowledgeBases: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-knowledge-bases-job-support',
  title: 'Amazon Bedrock Knowledge Bases Support — Enterprise RAG on AWS',
  description:
    'Real-time support for Amazon Bedrock Knowledge Bases: ingestion, chunking, embeddings, OpenSearch and Aurora pgvector, Retrieve and RetrieveAndGenerate, metadata filtering, reranking, and production RAG quality. Same-day help.',
  keywords: [
    'Bedrock Knowledge Bases support', 'Bedrock RAG support', 'RetrieveAndGenerate support',
    'Bedrock ingestion failure', 'Knowledge Base chunking', 'Bedrock OpenSearch RAG',
    'Bedrock reranking support', 'enterprise RAG AWS',
  ],
  h1: 'Amazon Bedrock Knowledge Bases Support — Ship Reliable Enterprise RAG',
  tagline:
    'The RAG hub for Amazon Bedrock — ingestion, chunking, embeddings, vector stores, retrieval quality, and RetrieveAndGenerate, debugged on your real data.',
  heroEyebrow: 'Bedrock Knowledge Bases & RAG',
  painIntro:
    'A Knowledge Base ingestion job stuck or failing, RetrieveAndGenerate returning irrelevant or hallucinated answers, or citations pointing to the wrong chunk? RAG quality problems are rarely the model — they are the pipeline.',
  heroVariant:
    'Bedrock Knowledge Bases give you managed RAG: connect data sources (S3, and other supported connectors), pick a chunking strategy (fixed-size, semantic, or hierarchical), generate embeddings (Amazon Titan/Nova or other supported models), and store vectors in Amazon OpenSearch Serverless, Aurora PostgreSQL with pgvector, or other supported stores. We help you fix ingestion and sync failures, tune chunking and metadata filtering, add reranking and query reformulation, and raise retrieval quality with proper evaluation — then wire Retrieve and RetrieveAndGenerate into your app with correct IAM and citations.',
  faqs: awsServiceFaqs('Amazon Bedrock Knowledge Bases', 'We help you design ingestion, chunking, embeddings, vector storage, retrieval, and RetrieveAndGenerate for production-grade RAG on your real data.'),
  useCasesSection: {
    title: 'Bedrock Knowledge Base Problems We Fix',
    cases: [
      'Ingestion or sync jobs failing or silently skipping documents',
      'RetrieveAndGenerate returning irrelevant, stale, or hallucinated answers',
      'Citations pointing to the wrong chunk, or metadata filters not applying',
      'Choosing between fixed-size, semantic, and hierarchical chunking for your content',
      'OpenSearch Serverless or Aurora pgvector index configuration and performance issues',
      'Adding reranking and query reformulation to lift retrieval quality and evaluation scores',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: [BEDROCK_HUB_LINK, AWS_HUB_LINK],
    techLinks: [
      { label: 'Bedrock RAG support', href: '/amazon-bedrock-rag-job-support/' },
      { label: 'OpenSearch vector search support', href: '/amazon-opensearch-vector-search-job-support/' },
    ],
    problemLink: { label: 'Bedrock RAG troubleshooting', href: '/amazon-bedrock-rag-troubleshooting-support/' },
    proxyLink: EXISTING.ragProxy,
    additionalLinks: [
      { label: 'Aurora pgvector RAG support', href: '/aurora-postgresql-pgvector-job-support/' },
      { label: 'Bedrock Guardrails support', href: '/amazon-bedrock-guardrails-job-support/' },
      AGENTCORE_HUB_LINK, BEDROCK_HUB_LINK, EXISTING.rag, EXISTING.vectorDb, EXISTING.ragEngineer,
    ],
  }),
});

// ─── Bedrock RAG (implementation intent) ─────────────────────────────────────

export const bedrockRag: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-rag-job-support',
  title: 'Amazon Bedrock RAG Support — Retrieval, Reranking & Answer Quality',
  description:
    'Real-time Amazon Bedrock RAG support: retrieval architecture, embeddings, reranking, query rewriting, structured and multimodal retrieval, hallucination reduction, and evaluation for production RAG on AWS.',
  keywords: [
    'Amazon Bedrock RAG support', 'Bedrock retrieval augmented generation', 'Bedrock reranking',
    'Bedrock RAG evaluation', 'Bedrock RAG hallucination', 'AWS RAG architecture support',
    'Bedrock query rewriting',
  ],
  h1: 'Amazon Bedrock RAG Support — From Prototype to Reliable Production Retrieval',
  tagline:
    'RAG that works in a demo but fails on real questions is a pipeline problem. We fix retrieval quality, reranking, and evaluation on Amazon Bedrock.',
  heroEyebrow: 'Amazon Bedrock RAG',
  painIntro:
    'Your Bedrock RAG assistant nails easy questions but misses on the ones that matter, mixes up documents, or hallucinates confidently? That is almost always retrieval, chunking, or evaluation — not the LLM.',
  heroVariant:
    'We work the full Bedrock RAG stack: embedding-model choice and dimensionality, chunking strategy, metadata design and filtering, hybrid and semantic retrieval, reranking, query rewriting and decomposition, structured and multimodal retrieval, grounding and citations, and a real evaluation harness so improvements are measured, not guessed. We connect it to your vector store (OpenSearch Serverless, Aurora pgvector) and add Guardrails and contextual grounding to reduce hallucination — all with production latency and cost in mind.',
  faqs: awsServiceFaqs('Amazon Bedrock RAG', 'We help you design and debug retrieval, reranking, query reformulation, grounding, and evaluation for reliable production RAG on Bedrock.'),
  useCasesSection: {
    title: 'Bedrock RAG Problems We Fix',
    cases: [
      'RAG answers that are irrelevant or hallucinated on hard or ambiguous questions',
      'Retrieval that returns the wrong document because chunking or metadata is off',
      'Adding reranking and query rewriting to lift precision and recall',
      'Building a RAG evaluation harness so changes are measured, not guessed',
      'Reducing hallucination with contextual grounding and Guardrails',
      'Hitting production latency and cost targets on a multi-step retrieval chain',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: [KB_RAG_HUB_LINK, AWS_HUB_LINK],
    techLinks: [
      { label: 'Bedrock Knowledge Bases support', href: '/amazon-bedrock-knowledge-bases-job-support/' },
      { label: 'OpenSearch vector search support', href: '/amazon-opensearch-vector-search-job-support/' },
    ],
    problemLink: { label: 'Bedrock RAG troubleshooting', href: '/amazon-bedrock-rag-troubleshooting-support/' },
    proxyLink: EXISTING.ragProxy,
    additionalLinks: [
      { label: 'Bedrock Guardrails support', href: '/amazon-bedrock-guardrails-job-support/' },
      { label: 'RAG vs fine-tuning on AWS', href: '/aws-rag-vs-fine-tuning-job-support/' },
      BEDROCK_HUB_LINK, EXISTING.rag, EXISTING.ragEngineer, EXISTING.vectorDb, EXISTING.langchain,
    ],
  }),
});

// ─── Bedrock Guardrails ──────────────────────────────────────────────────────

export const bedrockGuardrails: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-guardrails-job-support',
  title: 'Amazon Bedrock Guardrails Support — Responsible AI & Automated Reasoning',
  description:
    'Real-time Amazon Bedrock Guardrails support: content filters, denied topics, PII/sensitive-information protection, contextual grounding, automated reasoning checks, and prompt-attack protection for responsible, enterprise-grade GenAI on AWS.',
  keywords: [
    'Bedrock Guardrails support', 'Bedrock responsible AI', 'Bedrock content filters',
    'Bedrock automated reasoning checks', 'Bedrock PII protection', 'Bedrock contextual grounding',
    'Bedrock prompt attack protection', 'Bedrock hallucination mitigation',
  ],
  h1: 'Amazon Bedrock Guardrails Support — Safe, Grounded, Enterprise-Ready GenAI',
  tagline:
    'Guardrails that block real answers or miss real risks are worse than none. We configure Bedrock Guardrails to protect without breaking your app.',
  heroEyebrow: 'Bedrock Guardrails & Responsible AI',
  painIntro:
    'Guardrails blocking legitimate output, PII leaking through, or hallucinations still slipping past contextual grounding? Guardrail tuning is a precision job, not a toggle.',
  heroVariant:
    'Amazon Bedrock Guardrails give you a configurable safety layer independent of the model: content filters, denied topics, word filters, sensitive-information (PII) detection and redaction, contextual grounding to reduce hallucination, prompt-attack protection, and automated reasoning checks that use formal verification to validate outputs against a policy with mathematical rigor. We help you tune thresholds so legitimate output is not blocked, apply Guardrails independently via the ApplyGuardrail API, build automated reasoning policies (including policy refinement), evaluate guardrail effectiveness, and design an enterprise governance posture across your Bedrock workloads.',
  faqs: awsServiceFaqs('Amazon Bedrock Guardrails', 'We help you configure content filters, denied topics, PII protection, contextual grounding, automated reasoning checks, and prompt-attack protection without over-blocking.'),
  useCasesSection: {
    title: 'Bedrock Guardrails Situations We Help With',
    cases: [
      'Guardrails over-blocking valid responses — tuning filters and thresholds',
      'PII and sensitive information leaking or not being redacted correctly',
      'Reducing hallucination with contextual grounding and relevance thresholds',
      'Building automated reasoning policies and refining failing rules',
      'Applying Guardrails independently with the ApplyGuardrail API across models',
      'Designing enterprise responsible-AI governance across many Bedrock apps',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: [BEDROCK_HUB_LINK, AWS_HUB_LINK],
    techLinks: [
      { label: 'Bedrock RAG support', href: '/amazon-bedrock-rag-job-support/' },
      { label: 'AWS AI security support', href: '/aws-ai-security-job-support/' },
    ],
    problemLink: { label: 'Amazon Bedrock troubleshooting', href: '/amazon-bedrock-troubleshooting-support/' },
    proxyLink: EXISTING.awsBedrockInterview,
    additionalLinks: [
      KB_RAG_HUB_LINK, { label: 'AWS AI governance support', href: '/aws-ai-governance-job-support/' },
      BEDROCK_HUB_LINK, AGENTCORE_HUB_LINK, EXISTING.genai,
    ],
  }),
});

// ─── Bedrock Data Automation ─────────────────────────────────────────────────

export const bedrockDataAutomation: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-data-automation-job-support',
  title: 'Amazon Bedrock Data Automation Support — Multimodal IDP on AWS',
  description:
    'Real-time Amazon Bedrock Data Automation (BDA) support: intelligent document processing, image/audio/video understanding, blueprints, standard and custom output, confidence scores, custom vocabulary, and Knowledge Bases integration.',
  keywords: [
    'Bedrock Data Automation support', 'Amazon BDA support', 'Bedrock intelligent document processing',
    'Bedrock multimodal extraction', 'Bedrock blueprints', 'Bedrock custom output',
    'Bedrock Data Automation Library', 'BDA custom vocabulary',
  ],
  h1: 'Amazon Bedrock Data Automation Support — Turn Documents, Images, Audio & Video Into Data',
  tagline:
    'Bedrock Data Automation extracts structured insight from unstructured multimodal content. We help you design blueprints, custom output, and confidence handling for production.',
  heroEyebrow: 'Bedrock Data Automation (BDA)',
  painIntro:
    'Documents, images, audio, and video piling up as unstructured content your GenAI app cannot use, or BDA output not matching your schema or confidence expectations? Multimodal extraction needs the right blueprint design.',
  heroVariant:
    'Amazon Bedrock Data Automation (BDA) automates the generation of insights from unstructured multimodal content — documents, images, audio, and video — for GenAI applications. We help you use standard output and design custom output with blueprints, apply visual grounding and confidence scores, use the Data Automation Library and custom vocabulary for domain-specific transcription accuracy, and wire BDA into Bedrock Knowledge Bases for downstream RAG. We also help with industry-specific document intent (insurance claims, financial forms, healthcare documents) where the extraction is genuinely differentiated.',
  faqs: awsServiceFaqs('Amazon Bedrock Data Automation', 'We help you design blueprints, standard and custom output, confidence handling, custom vocabulary, and Knowledge Bases integration for multimodal document, image, audio, and video processing.'),
  useCasesSection: {
    title: 'Bedrock Data Automation Situations We Help With',
    cases: [
      'Designing custom output blueprints so extracted fields match your schema',
      'Handling confidence scores and visual grounding for review workflows',
      'Improving audio/video transcription accuracy with custom vocabulary and the Data Automation Library',
      'Processing insurance claims, financial forms, or healthcare documents at scale',
      'Wiring BDA output into Bedrock Knowledge Bases for downstream RAG',
      'Debugging extraction failures and inconsistent multimodal output',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: [BEDROCK_HUB_LINK, AWS_HUB_LINK],
    techLinks: [
      { label: 'Amazon Textract support', href: '/amazon-textract-job-support/' },
      { label: 'Bedrock Knowledge Bases support', href: '/amazon-bedrock-knowledge-bases-job-support/' },
    ],
    problemLink: { label: 'Amazon Bedrock troubleshooting', href: '/amazon-bedrock-troubleshooting-support/' },
    proxyLink: EXISTING.awsBedrockInterview,
    additionalLinks: [
      { label: 'Insurance AWS AI support', href: '/insurance-aws-ai-job-support/' },
      { label: 'Healthcare AWS AI support', href: '/healthcare-aws-ai-job-support/' },
      BEDROCK_HUB_LINK, KB_RAG_HUB_LINK,
    ],
  }),
});

// ─── Bedrock inference ───────────────────────────────────────────────────────

export const bedrockInference: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-inference-job-support',
  title: 'Amazon Bedrock Inference Support — Throughput, Profiles & Prompt Routing',
  description:
    'Real-time Amazon Bedrock inference support: on-demand vs provisioned throughput, application inference profiles, cross-region inference, intelligent prompt routing, latency and cost optimization, quotas, and throttling.',
  keywords: [
    'Bedrock inference support', 'Bedrock provisioned throughput', 'Bedrock inference profiles',
    'Bedrock cross-region inference', 'Bedrock intelligent prompt routing', 'Bedrock throttling',
    'Bedrock latency optimization', 'Bedrock quotas support',
  ],
  h1: 'Amazon Bedrock Inference Support — Get Throughput, Latency & Cost Right',
  tagline:
    'Choosing between on-demand, provisioned throughput, inference profiles, and cross-region inference decides your latency, cost, and reliability. We help you get it right.',
  heroEyebrow: 'Bedrock Inference & Cost',
  painIntro:
    'Hitting ThrottlingException in production, unsure whether you need provisioned throughput, or confused about application inference profiles and cross-region inference? Bedrock inference design is where cost and reliability are won or lost.',
  heroVariant:
    'We help you design Bedrock inference for production: on-demand vs provisioned throughput, application inference profiles for routing and observability, cross-region inference for capacity and resilience, and intelligent prompt routing to send each request to the best model in a family for up to significant cost savings without quality loss. We tune concurrency, handle quotas and ServiceQuotaExceeded, add retry and exponential backoff, optimize latency (streaming, token budgets), and build a token-cost model so spend is predictable.',
  faqs: awsServiceFaqs('Amazon Bedrock inference', 'We help you choose between on-demand and provisioned throughput, configure inference profiles and cross-region inference, set up intelligent prompt routing, and tune latency, quotas, and cost.'),
  useCasesSection: {
    title: 'Bedrock Inference Situations We Help With',
    cases: [
      'ThrottlingException or ServiceQuotaExceeded under production load',
      'Deciding whether provisioned throughput is worth it vs on-demand for your traffic',
      'Configuring application inference profiles and cross-region inference correctly',
      'Setting up intelligent prompt routing to cut cost without hurting quality',
      'Adding retry, backoff, and concurrency control for reliable inference',
      'Building a token-cost and latency model so spend and SLAs are predictable',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: [BEDROCK_HUB_LINK, AWS_HUB_LINK],
    techLinks: [
      { label: 'Bedrock Converse API support', href: '/amazon-bedrock-converse-api-job-support/' },
      { label: 'AWS AI FinOps & cost support', href: '/aws-ai-cost-optimization-job-support/' },
    ],
    problemLink: { label: 'Amazon Bedrock troubleshooting', href: '/amazon-bedrock-troubleshooting-support/' },
    proxyLink: EXISTING.awsBedrockInterview,
    additionalLinks: [
      { label: 'Bedrock on-demand vs provisioned', href: '/bedrock-on-demand-vs-provisioned-throughput-job-support/' },
      BEDROCK_HUB_LINK, NOVA_HUB_LINK, EXISTING.genai,
    ],
  }),
});

// ─── Bedrock Converse API ────────────────────────────────────────────────────

export const bedrockConverseApi: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-converse-api-job-support',
  title: 'Amazon Bedrock Converse API Support — Unified Multi-Model Inference',
  description:
    'Real-time support for the Amazon Bedrock Converse and ConverseStream APIs: unified message format, tool use / function calling, streaming, system prompts, structured output, and boto3/AWS SDK integration.',
  keywords: [
    'Bedrock Converse API support', 'ConverseStream support', 'Bedrock tool use',
    'Bedrock function calling', 'Bedrock streaming inference', 'Bedrock InvokeModel support',
    'Bedrock boto3 support',
  ],
  h1: 'Amazon Bedrock Converse API Support — One API Across Every Foundation Model',
  tagline:
    'The Converse API gives you a single, consistent interface across Bedrock models — with tool use, streaming, and structured output. We help you use it correctly in production.',
  heroEyebrow: 'Bedrock Converse & ConverseStream',
  painIntro:
    'Wrestling with model-specific request shapes, tool-use loops that never terminate, or streaming that breaks under load? The Converse API standardizes this — if you use it right.',
  heroVariant:
    'The Amazon Bedrock Converse API provides a unified message-based interface across foundation models, with native support for multi-turn conversations, tool use (function calling), system prompts, and structured output — plus ConverseStream for token streaming. We help you design the message and tool schema, implement the tool-use loop correctly, handle streaming and partial responses, manage token budgets and stop conditions, and integrate cleanly with boto3 and the AWS SDKs (Python, JavaScript/TypeScript, Java, .NET). We also help migrate from raw InvokeModel to Converse where it simplifies your code.',
  faqs: awsServiceFaqs('the Amazon Bedrock Converse API', 'We help you use Converse and ConverseStream with tool use, streaming, structured output, and the AWS SDKs across production workloads.'),
  relatedLinks: relatedLinks({
    geoLinks: [BEDROCK_HUB_LINK, AWS_HUB_LINK],
    techLinks: [
      { label: 'Bedrock inference support', href: '/amazon-bedrock-inference-job-support/' },
      { label: 'Python Amazon Bedrock support', href: '/python-amazon-bedrock-job-support/' },
    ],
    problemLink: { label: 'Amazon Bedrock troubleshooting', href: '/amazon-bedrock-troubleshooting-support/' },
    proxyLink: EXISTING.awsBedrockInterview,
    additionalLinks: [BEDROCK_HUB_LINK, KB_RAG_HUB_LINK, AGENTCORE_HUB_LINK, EXISTING.genai],
  }),
});

// ─── Bedrock foundation models ───────────────────────────────────────────────

export const bedrockFoundationModels: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-foundation-models-job-support',
  title: 'Amazon Bedrock Foundation Models Support — Model Selection & Evaluation',
  description:
    'Real-time support for choosing and using Amazon Bedrock foundation models: Amazon Nova, Anthropic Claude, Meta Llama, Mistral, Cohere, embeddings and multimodal models — selection, evaluation, and cost/latency trade-offs.',
  keywords: [
    'Bedrock foundation models support', 'Bedrock model selection', 'Bedrock Claude support',
    'Bedrock Llama support', 'Bedrock Nova support', 'Bedrock embedding models',
    'Bedrock model evaluation',
  ],
  h1: 'Amazon Bedrock Foundation Models Support — Pick the Right Model, Prove It',
  tagline:
    'Model choice on Bedrock drives quality, latency, and cost. We help you select, evaluate, and switch models with evidence, not vibes.',
  heroEyebrow: 'Bedrock Foundation Models',
  painIntro:
    'Not sure whether to use Amazon Nova, Claude, Llama, Mistral, or Cohere for your use case, or how to prove one is better than another? Model selection is an evaluation problem.',
  heroVariant:
    'Amazon Bedrock offers a catalog of foundation models behind one API — Amazon Nova (Nova 2 as the current generation, first-generation Nova now legacy), Anthropic Claude, Meta Llama, Mistral, Cohere, plus embedding and multimodal models. We help you shortlist models for your task, build a task-specific evaluation (including LLM-as-a-judge where useful), compare quality/latency/cost, design prompts per model, and plan durable model strategy so you are not rewriting for every minor version. We favor durable provider/family choices over fragile version chasing.',
  faqs: awsServiceFaqs('Amazon Bedrock foundation models', 'We help you shortlist, evaluate, and select foundation models on Bedrock with a task-specific evaluation and prompt design per model.'),
  relatedLinks: relatedLinks({
    geoLinks: [BEDROCK_HUB_LINK, AWS_HUB_LINK],
    techLinks: [NOVA_HUB_LINK, { label: 'Bedrock model customization', href: '/amazon-bedrock-model-customization-job-support/' }],
    problemLink: { label: 'Bedrock vs SageMaker AI', href: '/amazon-bedrock-vs-sagemaker-ai-job-support/' },
    proxyLink: EXISTING.awsBedrockInterview,
    additionalLinks: [
      { label: 'Nova vs Claude on Bedrock', href: '/amazon-nova-vs-claude-job-support/' },
      BEDROCK_HUB_LINK, NOVA_HUB_LINK, EXISTING.llm, EXISTING.genai,
    ],
  }),
});

// ─── Bedrock model customization ─────────────────────────────────────────────

export const bedrockModelCustomization: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-model-customization-job-support',
  title: 'Amazon Bedrock Model Customization — Fine-Tuning, Distillation & Evaluation',
  description:
    'Real-time support for Amazon Bedrock model customization: fine-tuning, model distillation, model import, continued pre-training where available, model evaluation, and LLM-as-a-judge on AWS.',
  keywords: [
    'Bedrock model customization', 'Bedrock fine-tuning support', 'Bedrock distillation',
    'Bedrock custom models', 'Bedrock model import', 'Bedrock model evaluation',
    'Bedrock LLM as a judge',
  ],
  h1: 'Amazon Bedrock Model Customization — Fine-Tune, Distill & Evaluate on AWS',
  tagline:
    'When prompting and RAG are not enough, customization is the next lever. We help you fine-tune, distill, import, and evaluate Bedrock models the right way.',
  heroEyebrow: 'Bedrock Customization & Evaluation',
  painIntro:
    'Considering fine-tuning on Bedrock but unsure if you need it, how to build the dataset, or how to prove it helped? Customization is expensive to get wrong.',
  heroVariant:
    'Amazon Bedrock supports several customization paths: fine-tuning, model distillation to make smaller models mimic larger ones, model import for supported architectures, continued pre-training where available, and model evaluation with automatic and LLM-as-a-judge methods. We help you decide whether customization is warranted vs prompting/RAG, build and validate training and evaluation datasets, run and monitor customization jobs, manage provisioned throughput for custom models, and evaluate results rigorously before production.',
  faqs: awsServiceFaqs('Amazon Bedrock model customization', 'We help you decide on and run fine-tuning, distillation, model import, and evaluation, including dataset design and LLM-as-a-judge.'),
  relatedLinks: relatedLinks({
    geoLinks: [BEDROCK_HUB_LINK, AWS_HUB_LINK],
    techLinks: [
      { label: 'Bedrock foundation models', href: '/amazon-bedrock-foundation-models-job-support/' },
      { label: 'RAG vs fine-tuning on AWS', href: '/aws-rag-vs-fine-tuning-job-support/' },
    ],
    problemLink: { label: 'Amazon Bedrock troubleshooting', href: '/amazon-bedrock-troubleshooting-support/' },
    proxyLink: EXISTING.awsBedrockInterview,
    additionalLinks: [NOVA_HUB_LINK, BEDROCK_HUB_LINK, EXISTING.fineTuning, EXISTING.llm],
  }),
});

// ─── Bedrock Flows ───────────────────────────────────────────────────────────

export const bedrockFlows: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-flows-job-support',
  title: 'Amazon Bedrock Flows Support — Visual GenAI Workflow Orchestration',
  description:
    'Real-time Amazon Bedrock Flows support: workflow orchestration, prompt and model nodes, conditional logic, Lambda and Knowledge Base integration, debugging, and production GenAI workflows on AWS.',
  keywords: [
    'Bedrock Flows support', 'Bedrock workflow orchestration', 'Bedrock Flows Lambda',
    'Bedrock Flows Knowledge Base', 'Bedrock Flows conditional logic', 'Bedrock GenAI workflow',
  ],
  h1: 'Amazon Bedrock Flows Support — Orchestrate Multi-Step GenAI Workflows',
  tagline:
    'Bedrock Flows lets you wire prompts, models, conditions, and AWS services into a workflow. We help you design, debug, and productionize them.',
  heroEyebrow: 'Bedrock Flows',
  painIntro:
    'A Bedrock Flow that works in the console but fails on real inputs, or conditional branches and Lambda nodes that behave unexpectedly? Flow orchestration needs careful design and testing.',
  heroVariant:
    'Amazon Bedrock Flows provides visual orchestration for generative AI workflows — chaining prompt nodes, model nodes, conditional logic, Lambda functions, and Knowledge Base retrieval into a defined flow. We help you design flows that handle real-world inputs, add conditional branching and error handling, integrate Lambda and Knowledge Bases correctly, version and test flows, debug node failures, and decide when a Flow is the right tool vs application code or an AgentCore agent.',
  faqs: awsServiceFaqs('Amazon Bedrock Flows', 'We help you design, debug, and productionize multi-step GenAI workflows with prompt/model nodes, conditional logic, Lambda, and Knowledge Base integration.'),
  relatedLinks: relatedLinks({
    geoLinks: [BEDROCK_HUB_LINK, AWS_HUB_LINK],
    techLinks: [AGENTCORE_HUB_LINK, { label: 'AWS Step Functions AI support', href: '/aws-step-functions-ai-job-support/' }],
    problemLink: { label: 'Amazon Bedrock troubleshooting', href: '/amazon-bedrock-troubleshooting-support/' },
    proxyLink: EXISTING.awsBedrockInterview,
    additionalLinks: [BEDROCK_HUB_LINK, KB_RAG_HUB_LINK, { label: 'AWS Lambda GenAI support', href: '/aws-lambda-bedrock-job-support/' }],
  }),
});

// ─── Bedrock Prompt Management ───────────────────────────────────────────────

export const bedrockPromptManagement: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-prompt-management-job-support',
  title: 'Amazon Bedrock Prompt Management Support — Templates, Versioning & Optimization',
  description:
    'Real-time Amazon Bedrock Prompt Management support: prompt templates, versioning, prompt optimization, system prompts, structured output patterns, and prompt evaluation for production GenAI on AWS.',
  keywords: [
    'Bedrock Prompt Management support', 'Bedrock prompt templates', 'Bedrock prompt versioning',
    'Bedrock prompt optimization', 'Bedrock system prompts', 'Bedrock structured output',
  ],
  h1: 'Amazon Bedrock Prompt Management Support — Govern Prompts Like Code',
  tagline:
    'Prompts scattered across code and notebooks are unmaintainable. Bedrock Prompt Management gives you templates, versions, and optimization — we help you use it well.',
  heroEyebrow: 'Bedrock Prompt Management',
  painIntro:
    'Prompts hardcoded everywhere, no versioning, and no way to test a change safely? Prompt sprawl is a real production risk as your Bedrock app grows.',
  heroVariant:
    'Amazon Bedrock Prompt Management lets you create, version, and manage prompts as first-class resources — with variables, prompt optimization, and integration into Flows and applications. We help you design a prompt catalog, parameterize templates, version and promote prompts safely, apply prompt optimization, build structured-output patterns, and evaluate prompt changes so quality is measured rather than guessed. This pairs naturally with Bedrock Flows and your Converse API integration.',
  faqs: awsServiceFaqs('Amazon Bedrock Prompt Management', 'We help you build a versioned prompt catalog with templates, optimization, structured output, and prompt evaluation for production GenAI.'),
  relatedLinks: relatedLinks({
    geoLinks: [BEDROCK_HUB_LINK, AWS_HUB_LINK],
    techLinks: [
      { label: 'Bedrock Flows support', href: '/amazon-bedrock-flows-job-support/' },
      { label: 'Bedrock Converse API support', href: '/amazon-bedrock-converse-api-job-support/' },
    ],
    problemLink: { label: 'Amazon Bedrock troubleshooting', href: '/amazon-bedrock-troubleshooting-support/' },
    proxyLink: EXISTING.awsBedrockInterview,
    additionalLinks: [BEDROCK_HUB_LINK, KB_RAG_HUB_LINK, EXISTING.genai],
  }),
});

// ─── Bedrock troubleshooting ─────────────────────────────────────────────────

export const bedrockTroubleshooting: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-troubleshooting-support',
  title: 'Amazon Bedrock Troubleshooting — AccessDenied, Throttling & Inference Errors',
  description:
    'Fix Amazon Bedrock production errors fast: AccessDenied and model-access, ThrottlingException and quotas, cross-region inference profile issues, ValidationException, streaming errors, timeouts, and cost spikes. Live expert help.',
  keywords: [
    'Bedrock troubleshooting', 'Bedrock AccessDenied fix', 'Bedrock ThrottlingException',
    'Bedrock model access error', 'Bedrock ServiceQuotaExceeded', 'Bedrock ValidationException',
    'Bedrock inference profile error',
  ],
  h1: 'Amazon Bedrock Troubleshooting Support — Diagnose & Fix Production Errors',
  tagline:
    'Symptoms, root causes, diagnostics, and the fix — for the Bedrock errors that actually break production.',
  heroEyebrow: 'Bedrock Troubleshooting',
  painIntro:
    'Bedrock working in dev but throwing AccessDenied, ThrottlingException, or ValidationException in production? These have specific root causes — IAM, model access, quotas, inference profiles, request shape.',
  heroVariant:
    'We work Bedrock incidents methodically: reproduce the error, capture the request ID and CloudTrail event, and isolate the cause. AccessDenied usually means missing model access in the account/region or an IAM policy gap; ThrottlingException and ServiceQuotaExceeded point to on-demand limits or missing provisioned throughput; cross-region inference issues come from inference-profile ARNs and region routing; ValidationException is request shape or unsupported parameters; streaming errors and timeouts trace to client handling and token budgets. For each we give you symptoms, likely root causes, diagnostic steps, the fix, validation, and prevention.',
  faqs: awsServiceFaqs('Amazon Bedrock production error', 'We diagnose and fix AccessDenied, throttling, quota, inference-profile, validation, streaming, and cost problems with CloudWatch, CloudTrail, and request IDs.'),
  useCasesSection: {
    title: 'Bedrock Errors We Diagnose & Fix',
    cases: [
      'AccessDenied / model-access errors — IAM policy and model-access enablement',
      'ThrottlingException and ServiceQuotaExceeded — quotas, on-demand limits, provisioned throughput',
      'Cross-region inference profile misconfiguration and region routing',
      'ValidationException from request shape or unsupported parameters',
      'Streaming errors, timeouts, and partial-response handling',
      'Unexplained token-cost spikes and how to control them',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: [BEDROCK_HUB_LINK, AWS_PRODUCTION_LINK],
    techLinks: [
      { label: 'Bedrock inference support', href: '/amazon-bedrock-inference-job-support/' },
      { label: 'AWS AI security support', href: '/aws-ai-security-job-support/' },
    ],
    problemLink: AWS_PRODUCTION_LINK,
    proxyLink: EXISTING.awsBedrockInterview,
    additionalLinks: [BEDROCK_HUB_LINK, KB_RAG_HUB_LINK, EXISTING.production, EXISTING.aimlProduction],
  }),
});

// ─── Bedrock RAG troubleshooting ─────────────────────────────────────────────

export const bedrockRagTroubleshooting: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-rag-troubleshooting-support',
  title: 'Bedrock RAG Troubleshooting — Ingestion, Retrieval & Citation Failures',
  description:
    'Fix Amazon Bedrock Knowledge Base and RAG failures: ingestion and sync errors, poor retrieval, wrong citations, metadata-filter and reranking problems, OpenSearch index issues, embeddings mismatches, and hallucinations.',
  keywords: [
    'Bedrock RAG troubleshooting', 'Knowledge Base ingestion failure', 'Bedrock poor retrieval',
    'Bedrock wrong citations', 'Bedrock metadata filter', 'Bedrock reranking problem',
    'OpenSearch index RAG issue',
  ],
  h1: 'Amazon Bedrock RAG Troubleshooting — Fix Retrieval, Ingestion & Citations',
  tagline:
    'RAG failures are pipeline failures. We isolate whether the problem is ingestion, chunking, embeddings, retrieval, reranking, or the model — and fix it.',
  heroEyebrow: 'Bedrock RAG Troubleshooting',
  painIntro:
    'Ingestion job failing, retrieval returning the wrong chunk, citations mismatched, or answers hallucinated? Each has a distinct root cause in the RAG pipeline.',
  heroVariant:
    'We debug Bedrock RAG end to end: ingestion and sync failures (permissions, unsupported formats, connector config), chunking and embedding mismatches, OpenSearch Serverless or Aurora pgvector index problems, metadata-filter failures, reranking not applying, RetrieveAndGenerate returning wrong or hallucinated answers, and citation mismatches. We add an evaluation harness so you can prove the fix, and tune contextual grounding and Guardrails to reduce hallucination without over-blocking.',
  faqs: awsServiceFaqs('Bedrock RAG failure', 'We isolate and fix ingestion, chunking, embedding, retrieval, reranking, citation, and hallucination problems in Bedrock Knowledge Bases.'),
  relatedLinks: relatedLinks({
    geoLinks: [KB_RAG_HUB_LINK, AWS_PRODUCTION_LINK],
    techLinks: [
      { label: 'Bedrock RAG support', href: '/amazon-bedrock-rag-job-support/' },
      { label: 'OpenSearch vector search support', href: '/amazon-opensearch-vector-search-job-support/' },
    ],
    problemLink: AWS_PRODUCTION_LINK,
    proxyLink: EXISTING.ragProxy,
    additionalLinks: [KB_RAG_HUB_LINK, BEDROCK_HUB_LINK, EXISTING.rag, EXISTING.vectorDb],
  }),
});

// ─── Bedrock interview proxy ─────────────────────────────────────────────────

export const bedrockInterviewProxy: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-interview-proxy-support',
  title: 'Amazon Bedrock Interview Support — Live Proxy & Mock Prep',
  description:
    'Real-time Amazon Bedrock interview support: architecture, inference, RAG, Guardrails, model selection, and system-design rounds. Calibrated mock interviews plus discreet live proxy support. Confidential.',
  keywords: [
    'Amazon Bedrock interview support', 'Bedrock interview questions', 'Bedrock system design interview',
    'Bedrock RAG interview', 'AWS GenAI interview Bedrock', 'Bedrock proxy interview',
  ],
  h1: 'Amazon Bedrock Interview Support — Architecture, RAG & System Design',
  tagline:
    'Bedrock interviews go deep on inference, RAG, Guardrails, and cost. We prepare you and can back you live during the real thing.',
  heroEyebrow: 'Bedrock Interview Support',
  painIntro:
    'An Amazon Bedrock or AWS GenAI interview coming up and unsure how deep they will push on inference profiles, Knowledge Base architecture, Guardrails, or model selection? Bedrock interviews reward specificity.',
  heroVariant:
    'We prepare you across the Bedrock interview surface: model selection and evaluation, Converse API and tool use, on-demand vs provisioned throughput, inference profiles and cross-region inference, intelligent prompt routing, Knowledge Bases and RAG architecture (chunking, embeddings, OpenSearch, reranking, RetrieveAndGenerate), Guardrails and responsible AI, Bedrock security (IAM, KMS, VPC endpoints), and cost design. We run calibrated mocks and can provide discreet live support during the interview. We never guarantee selection — hiring decisions are made solely by employers.',
  highlights: undefined,
  faqs: [
    {
      question: 'What Amazon Bedrock interview topics do you cover?',
      answer:
        'Model selection and evaluation, the Converse API and tool use, inference design (on-demand, provisioned throughput, inference profiles, cross-region inference, intelligent prompt routing), Knowledge Bases and RAG architecture, Guardrails and responsible AI, Bedrock security, and cost optimization — plus coding rounds with boto3.',
    },
    {
      question: 'Do you offer live proxy support during Bedrock interviews?',
      answer:
        'Yes. After a calibrated mock, an AWS AI expert can provide discreet real-time guidance during your live interview via audio or chat — helping you structure system-design answers and reason about trade-offs accurately. Everything is confidential.',
    },
    {
      question: 'Is this different from your existing AWS Bedrock interview page?',
      answer:
        'This is the Amazon Bedrock interview page inside the full AWS AI/ML cluster, cross-linked with AgentCore, SageMaker, and RAG interview support. Our original AWS Bedrock interview support page remains available and points to the same experts.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your interview date, the role, and the company format. We assign the right expert and run a pre-interview alignment session.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [AWS_INTERVIEW_HUB_LINK, BEDROCK_HUB_LINK],
    techLinks: [
      { label: 'AgentCore interview support', href: '/amazon-bedrock-agentcore-interview-proxy-support/' },
      { label: 'AWS RAG interview support', href: '/aws-rag-interview-proxy-support/' },
    ],
    problemLink: { label: 'Amazon Bedrock troubleshooting', href: '/amazon-bedrock-troubleshooting-support/' },
    proxyLink: EXISTING.awsBedrockInterview,
    additionalLinks: [AWS_INTERVIEW_HUB_LINK, BEDROCK_HUB_LINK, EXISTING.awsBedrockInterview, EXISTING.genaiProxy],
  }),
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const awsBedrockPages: LandingPageConfig[] = [
  amazonBedrockHub,
  bedrockKnowledgeBases,
  bedrockRag,
  bedrockGuardrails,
  bedrockDataAutomation,
  bedrockInference,
  bedrockConverseApi,
  bedrockFoundationModels,
  bedrockModelCustomization,
  bedrockFlows,
  bedrockPromptManagement,
  bedrockTroubleshooting,
  bedrockRagTroubleshooting,
  bedrockInterviewProxy,
];
