import type { LandingPageConfig } from '../landing-pages';
import {
  azurePage,
  azureServicePage,
  relatedLinks,
  jobSupportHighlights,
  azureServiceFaqs,
  EXISTING,
  FOUNDRY_HUB_LINK,
  FOUNDRY_TOOLS_LINK,
  FOUNDRY_LOCAL_LINK,
  AGENT_HUB_LINK,
  SEARCH_HUB_LINK,
  RAG_HUB_LINK,
  AZUREML_HUB_LINK,
  DATABRICKS_HUB_LINK,
  SECURITY_HUB_LINK,
  AZURE_HUB_LINK,
  AZURE_INTERVIEW_HUB_LINK,
  AZURE_PRODUCTION_LINK,
} from './shared';

const A = (label: string, slug: string) => ({ label, href: `/${slug}/` });

/** generic compact service page: hub + 2 tech links + shared service FAQs */
const svc = (
  slug: string, title: string, description: string, h1: string, tagline: string, eyebrow: string,
  painIntro: string, heroVariant: string, faqService: string, faqUsage: string,
  hub: { label: string; href: string }, tech: { label: string; href: string }[],
  extra: { label: string; href: string }[] = [], kw: string[] = [],
): LandingPageConfig =>
  azureServicePage({
    slug, title, description, h1, tagline, heroEyebrow: eyebrow, painIntro, heroVariant,
    keywords: kw.length ? kw : [title.split(' — ')[0], 'Azure AI', 'Microsoft Foundry'],
    faqs: azureServiceFaqs(faqService, faqUsage),
    relatedLinks: relatedLinks({
      geoLinks: [hub, AZURE_HUB_LINK],
      techLinks: tech,
      problemLink: AZURE_PRODUCTION_LINK,
      proxyLink: AZURE_INTERVIEW_HUB_LINK,
      additionalLinks: extra.concat([hub]),
    }),
  });

// ─── Foundry Tools hub ───────────────────────────────────────────────────────

const foundryToolsHub: LandingPageConfig = azurePage({
  slug: 'microsoft-foundry-tools-proxy-job-support',
  title: 'Microsoft Foundry Tools Proxy Job Support — Document, Speech, Vision & Language AI',
  description:
    'Real-time Microsoft Foundry Tools job support (formerly Azure AI Services): Document Intelligence, Content Understanding, Speech, Vision, Language, Translator, and Content Safety — build and fix production AI features.',
  keywords: [
    'Microsoft Foundry Tools job support', 'Azure AI Services job support', 'Azure Document Intelligence',
    'Azure AI Speech', 'Azure AI Vision', 'Azure AI Language', 'Azure Content Safety',
  ],
  h1: 'Microsoft Foundry Tools Proxy Job Support — Document, Speech, Vision, Language & Safety',
  tagline:
    'One hub for Foundry Tools (formerly Azure AI Services) — Document Intelligence, Content Understanding, Speech, Vision, Language, Translator, and Content Safety.',
  heroEyebrow: 'Microsoft Foundry Tools Support Hub — Updated August 2026',
  painIntro:
    'Building document processing, speech, vision, or language features and hitting accuracy, throughput, or integration walls? Foundry Tools (the AI services formerly branded Azure AI Services) power real production features — we help you ship them.',
  heroVariant:
    'Foundry Tools is the current brand for the prebuilt Azure AI services (formerly Azure AI Services / Cognitive Services). We cover Document Intelligence (form and document extraction), Content Understanding (multimodal extraction), Speech (STT/TTS, real-time), Vision (OCR, image analysis), Language (NER, sentiment, summarization, PII), Translator, and Content Safety (moderation and guardrails) — building features, tuning accuracy and throughput, handling identity and networking, and combining them with Azure OpenAI and Foundry agents.',
  geoLine:
    'Foundry Tools support for engineers across USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover Document Intelligence, Content Understanding, Speech, Vision, Language, Translator, and Content Safety — combined with Azure OpenAI and Foundry agents.',
  highlights: jobSupportHighlights,
  faqs: azureServiceFaqs('Microsoft Foundry Tools', 'We build and fix Document Intelligence, Content Understanding, Speech, Vision, Language, Translator, and Content Safety features.'),
  relatedLinks: relatedLinks({
    geoLinks: [AZURE_HUB_LINK, FOUNDRY_HUB_LINK],
    techLinks: [A('Azure Document Intelligence job support', 'azure-document-intelligence-job-support'), A('Azure AI Content Safety job support', 'azure-ai-content-safety-job-support')],
    problemLink: AZURE_PRODUCTION_LINK,
    proxyLink: AZURE_INTERVIEW_HUB_LINK,
    additionalLinks: [
      A('Azure Content Understanding job support', 'azure-content-understanding-job-support'),
      A('Azure AI Language job support', 'azure-ai-language-job-support'),
      A('Azure AI Speech job support', 'azure-ai-speech-job-support'),
      A('Azure AI Vision job support', 'azure-ai-vision-job-support'),
      A('Azure AI Translator job support', 'azure-ai-translator-job-support'),
      A('Azure document AI job support', 'azure-document-ai-job-support'),
      A('Azure multimodal AI job support', 'azure-multimodal-ai-job-support'),
      FOUNDRY_HUB_LINK, EXISTING.azureAiFoundryDotnet,
    ],
  }),
});

const toolsTech = [FOUNDRY_TOOLS_LINK, FOUNDRY_HUB_LINK];

const docIntelligence = svc(
  'azure-document-intelligence-job-support',
  'Azure Document Intelligence Proxy Job Support — Extract Data From Documents',
  'Azure AI Document Intelligence job support: prebuilt and custom models for invoices, receipts, IDs, and forms — extraction accuracy, custom model training, and RAG over documents.',
  'Azure Document Intelligence Proxy Job Support — Reliable Document Extraction',
  'Extract structured data from documents reliably — prebuilt and custom models, tuned for accuracy.',
  'Azure Document Intelligence',
  'Document extraction breaks on messy real-world documents. Getting accuracy up with the right prebuilt or custom model is where projects stall.',
  'We build with Azure AI Document Intelligence: prebuilt models (invoices, receipts, IDs, tax forms), custom extraction and classification models, layout and OCR, confidence handling, and feeding extracted data into RAG and downstream systems. We tune accuracy on your real documents.',
  'Azure Document Intelligence', 'We build prebuilt and custom document-extraction models and tune accuracy on real documents.',
  FOUNDRY_TOOLS_LINK, [A('Azure document AI job support', 'azure-document-ai-job-support'), A('Azure document RAG job support', 'azure-document-rag-job-support')],
  [A('Azure Content Understanding job support', 'azure-content-understanding-job-support'), EXISTING.azureAiSearchDotnet],
);

const contentUnderstanding = svc(
  'azure-content-understanding-job-support',
  'Azure Content Understanding Proxy Job Support — Multimodal Data Extraction',
  'Azure Content Understanding job support: extract structured insights from documents, images, audio, and video with a single multimodal service for RAG and automation.',
  'Azure Content Understanding Proxy Job Support — Multimodal Extraction',
  'Extract structure from documents, images, audio, and video with one multimodal service.',
  'Azure Content Understanding',
  'Real content is multimodal — documents, images, audio, video. Extracting consistent structured insight across all of it is the challenge Content Understanding solves.',
  'We build with Azure Content Understanding: multimodal extraction across documents, images, audio, and video, schema definition, field extraction, and integration into RAG and automation pipelines — often paired with Document Intelligence and Azure OpenAI.',
  'Azure Content Understanding', 'We build multimodal extraction across documents, images, audio, and video for RAG and automation.',
  FOUNDRY_TOOLS_LINK, [A('Azure Document Intelligence job support', 'azure-document-intelligence-job-support'), A('Azure multimodal AI job support', 'azure-multimodal-ai-job-support')],
  [RAG_HUB_LINK],
);

const aiLanguage = svc(
  'azure-ai-language-job-support',
  'Azure AI Language Proxy Job Support — NER, Sentiment, PII & Summarization',
  'Azure AI Language job support: named entity recognition, sentiment, key-phrase, PII detection/redaction, summarization, and custom text classification for production text pipelines.',
  'Azure AI Language Proxy Job Support — Production Text Understanding',
  'Build text-understanding features — NER, sentiment, PII redaction, summarization, and custom classification.',
  'Azure AI Language',
  'Text pipelines need reliable NER, PII redaction, and classification. Getting accuracy and throughput right on real text is the work.',
  'We build with Azure AI Language: named entity recognition, sentiment and opinion mining, key-phrase extraction, PII detection and redaction, summarization, and custom text classification/NER — for compliant, production text pipelines that often feed RAG and agents.',
  'Azure AI Language', 'We build NER, sentiment, PII redaction, summarization, and custom classification for text pipelines.',
  FOUNDRY_TOOLS_LINK, [A('Azure AI Content Safety job support', 'azure-ai-content-safety-job-support'), A('Azure AI Translator job support', 'azure-ai-translator-job-support')],
  [RAG_HUB_LINK],
);

const aiSpeech = svc(
  'azure-ai-speech-job-support',
  'Azure AI Speech Proxy Job Support — Speech-to-Text, TTS & Real-Time Voice',
  'Azure AI Speech job support: speech-to-text, text-to-speech, custom voice, real-time transcription, and speech translation — plus integration with Azure OpenAI Realtime for voice agents.',
  'Azure AI Speech Proxy Job Support — Production Speech & Voice',
  'Build speech features that work — STT, TTS, custom voice, real-time transcription, and voice agents.',
  'Azure AI Speech',
  'Speech features fail on accuracy, latency, and audio-format details. Real-time voice adds another layer of difficulty.',
  'We build with Azure AI Speech: speech-to-text and text-to-speech, custom neural voice, real-time and batch transcription, speaker features, and speech translation — and combine it with the Azure OpenAI Realtime API for low-latency voice agents.',
  'Azure AI Speech', 'We build STT, TTS, custom voice, real-time transcription, and voice agents.',
  FOUNDRY_TOOLS_LINK, [A('Azure OpenAI Realtime API', 'azure-openai-realtime-api-job-support'), A('Azure AI Translator job support', 'azure-ai-translator-job-support')],
  [AGENT_HUB_LINK],
);

const aiVision = svc(
  'azure-ai-vision-job-support',
  'Azure AI Vision Proxy Job Support — OCR, Image Analysis & Multimodal',
  'Azure AI Vision job support: OCR/Read, image analysis and tagging, spatial analysis, and multimodal image understanding — integrated with Azure OpenAI vision models.',
  'Azure AI Vision Proxy Job Support — Production Image Understanding',
  'Build vision features — OCR, image analysis, tagging, and multimodal understanding.',
  'Azure AI Vision',
  'Vision features need the right service for the job — OCR vs analysis vs multimodal — and tuning for accuracy on real images.',
  'We build with Azure AI Vision: OCR/Read for text extraction, image analysis and tagging, spatial analysis, and multimodal image understanding combined with Azure OpenAI vision-capable models for document and image workflows.',
  'Azure AI Vision', 'We build OCR, image analysis, tagging, and multimodal understanding, integrated with Azure OpenAI vision.',
  FOUNDRY_TOOLS_LINK, [A('Azure Document Intelligence job support', 'azure-document-intelligence-job-support'), A('Azure multimodal AI job support', 'azure-multimodal-ai-job-support')],
  [],
);

const aiTranslator = svc(
  'azure-ai-translator-job-support',
  'Azure AI Translator Proxy Job Support — Real-Time & Document Translation',
  'Azure AI Translator job support: real-time text translation, document translation, custom translation models, and multilingual pipelines for global AI apps.',
  'Azure AI Translator Proxy Job Support — Multilingual, At Scale',
  'Add translation that scales — real-time, document, and custom models for multilingual apps.',
  'Azure AI Translator',
  'Multilingual apps need reliable translation with the right custom models and document handling — not just a demo API call.',
  'We build with Azure AI Translator: real-time text translation, document translation preserving layout, custom translation models for domain terminology, and multilingual pipelines — often combined with Azure OpenAI and Speech for global experiences.',
  'Azure AI Translator', 'We build real-time and document translation, custom models, and multilingual pipelines.',
  FOUNDRY_TOOLS_LINK, [A('Azure AI Language job support', 'azure-ai-language-job-support'), A('Azure AI Speech job support', 'azure-ai-speech-job-support')],
  [],
);

const contentSafety = svc(
  'azure-ai-content-safety-job-support',
  'Azure AI Content Safety Proxy Job Support — Moderation & LLM Guardrails',
  'Azure AI Content Safety job support: text and image moderation, prompt-shield/jailbreak detection, groundedness detection, and guardrails for Azure OpenAI and agent apps.',
  'Azure AI Content Safety Proxy Job Support — Safe, Governed AI',
  'Add real guardrails — moderation, jailbreak detection, and groundedness checks for LLM apps.',
  'Azure AI Content Safety',
  'LLM apps need guardrails against harmful content, jailbreaks, and ungrounded output. Content Safety provides them — when integrated correctly.',
  'We integrate Azure AI Content Safety: text and image moderation with severity thresholds, prompt shields/jailbreak detection, protected-material and groundedness detection, and guardrails wired into Azure OpenAI and Foundry agent flows — balancing safety with false-positive rates.',
  'Azure AI Content Safety', 'We integrate moderation, jailbreak detection, and groundedness guardrails into LLM and agent apps.',
  FOUNDRY_TOOLS_LINK, [A('Azure AI governance job support', 'azure-ai-governance-job-support'), AGENT_HUB_LINK],
  [SECURITY_HUB_LINK],
);

// Document AI / multimodal distinct pages
const documentAi = svc(
  'azure-document-ai-job-support',
  'Azure Document AI Proxy Job Support — End-to-End Document Automation',
  'Azure Document AI job support: end-to-end document automation combining Document Intelligence, Content Understanding, Azure OpenAI, and Azure AI Search for extraction, classification, and document RAG.',
  'Azure Document AI Proxy Job Support — Automate Document Workflows',
  'Automate document workflows end to end — extraction, classification, and document RAG.',
  'Azure Document AI',
  'Real document automation needs more than one service — extraction, classification, grounding, and human-in-the-loop working together.',
  'We build Azure Document AI solutions: combining Document Intelligence and Content Understanding for extraction, Azure OpenAI for reasoning, and Azure AI Search for document RAG — with classification, validation, and human-in-the-loop for accuracy.',
  'Azure Document AI', 'We build end-to-end document automation combining extraction, reasoning, and document RAG.',
  FOUNDRY_TOOLS_LINK, [A('Azure Document Intelligence job support', 'azure-document-intelligence-job-support'), A('Azure document RAG job support', 'azure-document-rag-job-support')],
  [SEARCH_HUB_LINK],
);

const multimodalAi = svc(
  'azure-multimodal-ai-job-support',
  'Azure Multimodal AI Proxy Job Support — Text, Image, Audio & Video',
  'Azure multimodal AI job support: build apps that reason over text, images, audio, and video using Azure OpenAI multimodal models, Content Understanding, Vision, and Speech.',
  'Azure Multimodal AI Proxy Job Support — Reason Across Modalities',
  'Build apps that understand text, images, audio, and video together.',
  'Azure Multimodal AI',
  'Multimodal apps combine several services and models. Orchestrating them into a coherent, reliable app is the hard part.',
  'We build Azure multimodal AI: Azure OpenAI multimodal models, Content Understanding, Vision, and Speech orchestrated into apps that reason across text, images, audio, and video — with grounding and evaluation.',
  'Azure multimodal AI', 'We build apps that reason over text, images, audio, and video across Azure AI services.',
  FOUNDRY_TOOLS_LINK, [A('Azure Content Understanding job support', 'azure-content-understanding-job-support'), A('Azure AI Vision job support', 'azure-ai-vision-job-support')],
  [AGENT_HUB_LINK],
);

const documentRag = svc(
  'azure-document-rag-job-support',
  'Azure Document RAG Proxy Job Support — RAG Over Complex Documents',
  'Azure document RAG job support: build RAG over complex documents with Document Intelligence extraction, layout-aware chunking, Azure AI Search, and Azure OpenAI grounding.',
  'Azure Document RAG Proxy Job Support — Answer Questions Over Documents',
  'Build RAG that actually understands complex documents — layout-aware, grounded, and cited.',
  'Azure Document RAG',
  'RAG over complex documents (tables, forms, layouts) needs layout-aware extraction and chunking, or retrieval quality collapses.',
  'We build document RAG on Azure: Document Intelligence for layout-aware extraction, structure-preserving chunking, Azure AI Search for retrieval, and Azure OpenAI grounding with citations — for reliable Q&A over contracts, manuals, and forms.',
  'Azure document RAG', 'We build layout-aware document RAG with Document Intelligence, Azure AI Search, and Azure OpenAI.',
  RAG_HUB_LINK, [A('Azure Document Intelligence job support', 'azure-document-intelligence-job-support'), A('Azure AI Search RAG job support', 'azure-ai-search-rag-job-support')],
  [A('Azure document AI job support', 'azure-document-ai-job-support')],
);

// ─── Azure Databricks AI ─────────────────────────────────────────────────────

const databricksHub = svc(
  'azure-databricks-ai-proxy-job-support',
  'Azure Databricks AI Proxy Job Support — Mosaic AI, MLflow & Model Serving',
  'Azure Databricks AI job support: Mosaic AI, MLflow, model serving, Vector Search, Unity Catalog governance, and agentic AI on the Databricks Lakehouse — for GenAI and ML at scale.',
  'Azure Databricks AI Proxy Job Support — GenAI & ML on the Lakehouse',
  'Build AI on Azure Databricks — Mosaic AI, MLflow, model serving, Vector Search, and governance.',
  'Azure Databricks AI',
  'Databricks is a major AI platform on Azure, but Mosaic AI, model serving, and Unity Catalog governance each have a learning curve.',
  'We support Azure Databricks AI: Mosaic AI for GenAI and agents, MLflow tracking and registry, Model Serving endpoints, Vector Search for RAG, Unity Catalog governance, and integration with Azure OpenAI and Azure AI Search — for ML and GenAI at lakehouse scale.',
  'Azure Databricks AI', 'We build Mosaic AI, MLflow, model serving, Vector Search, and governance on Azure Databricks.',
  AZURE_HUB_LINK, [A('Azure Databricks Mosaic AI job support', 'azure-databricks-mosaic-ai-job-support'), A('Azure Databricks model serving job support', 'azure-databricks-model-serving-job-support')],
  [A('Azure Databricks vector search job support', 'azure-databricks-vector-search-job-support'), AZUREML_HUB_LINK, EXISTING.mlops],
  ['Azure Databricks AI job support', 'Mosaic AI', 'Databricks MLflow', 'Databricks model serving'],
);

const databricksMosaic = svc(
  'azure-databricks-mosaic-ai-job-support',
  'Azure Databricks Mosaic AI Proxy Job Support — GenAI & Agents on Databricks',
  'Azure Databricks Mosaic AI job support: build, evaluate, and serve GenAI apps and agents on Databricks — Agent Framework, evaluation, and Vector Search RAG.',
  'Azure Databricks Mosaic AI Proxy Job Support — Production GenAI on Databricks',
  'Build GenAI and agents on Mosaic AI — evaluation, serving, and Vector Search RAG.',
  'Azure Databricks Mosaic AI',
  'Mosaic AI brings GenAI and agents to the lakehouse, but agent design, evaluation, and serving still need expertise.',
  'We build with Azure Databricks Mosaic AI: GenAI apps and agents, agent evaluation, Vector Search RAG, and model serving — governed by Unity Catalog and integrated with Azure OpenAI and Foundry where it fits.',
  'Azure Databricks Mosaic AI', 'We build GenAI apps and agents on Mosaic AI with evaluation, Vector Search RAG, and serving.',
  DATABRICKS_HUB_LINK, [A('Azure Databricks vector search job support', 'azure-databricks-vector-search-job-support'), A('Azure Databricks model serving job support', 'azure-databricks-model-serving-job-support')],
  [RAG_HUB_LINK],
);

const databricksServing = svc(
  'azure-databricks-model-serving-job-support',
  'Azure Databricks Model Serving Proxy Job Support — Real-Time Endpoints',
  'Azure Databricks Model Serving job support: deploy real-time model and LLM endpoints, autoscaling, A/B, and monitoring on the Databricks Lakehouse.',
  'Azure Databricks Model Serving Proxy Job Support — Reliable Endpoints',
  'Deploy and scale model and LLM endpoints on Databricks — autoscale, A/B, and monitoring.',
  'Azure Databricks Model Serving',
  'Model Serving endpoints need the right scaling, routing, and monitoring to stay reliable under production load.',
  'We deploy Azure Databricks Model Serving: real-time model and LLM/foundation-model endpoints, autoscaling, A/B and traffic routing, monitoring, and Unity Catalog governance — integrated with MLflow and your MLOps.',
  'Azure Databricks Model Serving', 'We deploy real-time model/LLM endpoints with autoscaling, A/B, and monitoring on Databricks.',
  DATABRICKS_HUB_LINK, [A('Azure Databricks AI job support', 'azure-databricks-ai-proxy-job-support'), EXISTING.modelDeployment],
  [EXISTING.mlops],
);

const databricksVector = svc(
  'azure-databricks-vector-search-job-support',
  'Azure Databricks Vector Search Proxy Job Support — Lakehouse RAG',
  'Azure Databricks Vector Search job support: build RAG with Databricks Vector Search — embeddings, index sync from Delta tables, and governed retrieval for agents.',
  'Azure Databricks Vector Search Proxy Job Support — RAG on the Lakehouse',
  'Build RAG with Databricks Vector Search — Delta-synced indexes and governed retrieval.',
  'Azure Databricks Vector Search',
  'Keeping vector indexes in sync with lakehouse data and governed by Unity Catalog is what makes Databricks RAG production-ready.',
  'We build RAG with Azure Databricks Vector Search: embeddings, Vector Search indexes synced from Delta tables, hybrid retrieval, and Unity Catalog governance — for grounded answers in Mosaic AI agents and apps.',
  'Azure Databricks Vector Search', 'We build Delta-synced Vector Search indexes and governed retrieval for lakehouse RAG.',
  DATABRICKS_HUB_LINK, [A('Azure Databricks Mosaic AI job support', 'azure-databricks-mosaic-ai-job-support'), RAG_HUB_LINK],
  [EXISTING.vectorDb],
);

// ─── Data platform ───────────────────────────────────────────────────────────

const dataLake = svc(
  'azure-data-lake-ai-job-support',
  'Azure Data Lake AI Proxy Job Support — ADLS Gen2 for AI Pipelines',
  'Azure Data Lake (ADLS Gen2) AI job support: data lake design for AI/ML, ingestion into Azure AI Search and Azure ML, access control, and feeding RAG and training pipelines.',
  'Azure Data Lake AI Proxy Job Support — Feed AI From the Lake',
  'Design the data lake your AI depends on — ADLS Gen2 for RAG, training, and search ingestion.',
  'Azure Data Lake AI',
  'AI is only as good as its data pipeline. ADLS Gen2 layout, access, and ingestion into search and training decide whether AI features are reliable.',
  'We design Azure Data Lake (ADLS Gen2) for AI: medallion layout, access control (RBAC, ACLs), ingestion into Azure AI Search indexers and Azure ML datastores, and feeding RAG and training pipelines reliably and securely.',
  'Azure Data Lake AI', 'We design ADLS Gen2 for AI — layout, access, and ingestion into search and training pipelines.',
  AZURE_HUB_LINK, [A('Azure AI Search indexer job support', 'azure-ai-search-indexer-job-support'), A('Azure Data Factory AI/ML job support', 'azure-data-factory-ai-ml-job-support')],
  [AZUREML_HUB_LINK],
  ['Azure Data Lake AI job support', 'ADLS Gen2 AI', 'Azure data lake RAG'],
);

const dataFactory = svc(
  'azure-data-factory-ai-ml-job-support',
  'Azure Data Factory AI/ML Proxy Job Support — Orchestrate AI Data Pipelines',
  'Azure Data Factory AI/ML job support: build data pipelines that prepare, move, and transform data for AI/ML, trigger Azure ML and Azure AI Search ingestion, and schedule reliably.',
  'Azure Data Factory AI/ML Proxy Job Support — Move Data for AI',
  'Orchestrate the data pipelines your AI needs — ingestion, transformation, and scheduling.',
  'Azure Data Factory AI/ML',
  'AI needs data moved and transformed reliably. Data Factory pipelines feeding ML and search are where data engineering meets AI.',
  'We build Azure Data Factory pipelines for AI/ML: ingestion and transformation, integration runtimes, triggering Azure ML training and Azure AI Search indexing, scheduling, and monitoring — the reliable data plumbing behind AI features.',
  'Azure Data Factory AI/ML', 'We build ADF pipelines that prepare and move data for ML and search ingestion.',
  AZURE_HUB_LINK, [A('Azure data lake AI job support', 'azure-data-lake-ai-job-support'), A('Microsoft Fabric AI job support', 'microsoft-fabric-ai-job-support')],
  [AZUREML_HUB_LINK],
  ['Azure Data Factory AI job support', 'ADF AI ML', 'Azure data pipeline AI'],
);

const fabricAi = svc(
  'microsoft-fabric-ai-job-support',
  'Microsoft Fabric AI Proxy Job Support — OneLake, Data Agents & Fabric IQ',
  'Microsoft Fabric AI job support: OneLake, Data agents, Fabric IQ, and AI over the Fabric analytics platform — connected to Foundry IQ and agents for enterprise knowledge.',
  'Microsoft Fabric AI Proxy Job Support — AI Over Your Analytics Estate',
  'Build AI on Microsoft Fabric — OneLake, Data agents, and Fabric IQ connected to your agents.',
  'Microsoft Fabric AI',
  'Fabric unifies analytics and now feeds agentic AI through Fabric IQ and Data agents. Connecting it to Foundry correctly unlocks enterprise knowledge.',
  'We build AI on Microsoft Fabric: OneLake as the data foundation, Data agents and Fabric IQ (Ontology) for structured/analytical knowledge, and integration with Foundry IQ and agents so agents can reason over your analytics estate.',
  'Microsoft Fabric AI', 'We build AI on Fabric — OneLake, Data agents, Fabric IQ — connected to Foundry IQ and agents.',
  AZURE_HUB_LINK, [A('Microsoft Foundry IQ job support', 'microsoft-foundry-iq-proxy-job-support'), A('Foundry IQ enterprise RAG support', 'foundry-iq-enterprise-rag-support')],
  [RAG_HUB_LINK],
  ['Microsoft Fabric AI job support', 'Fabric IQ', 'OneLake AI', 'Fabric Data agents'],
);

const cosmosAi = svc(
  'azure-cosmos-db-ai-job-support',
  'Azure Cosmos DB AI Proxy Job Support — Operational Data for AI Apps',
  'Azure Cosmos DB AI job support: use Cosmos DB for AI apps — vector search, agent state, operational data for RAG, and low-latency global reads.',
  'Azure Cosmos DB AI Proxy Job Support — The Operational Store for AI',
  'Use Cosmos DB for AI — vector search, agent state, and operational data at global scale.',
  'Azure Cosmos DB AI',
  'AI apps need a fast operational store for vectors, state, and app data. Cosmos DB does all three — with the right modeling.',
  'We use Azure Cosmos DB for AI apps: vector search, durable agent state and memory, operational data for RAG, partitioning for scale, and low-latency global reads — integrated with Foundry agents and Azure OpenAI.',
  'Azure Cosmos DB AI', 'We use Cosmos DB for vector search, agent state, and operational data in AI apps.',
  AZURE_HUB_LINK, [A('Azure Cosmos DB vector search job support', 'azure-cosmos-db-vector-search-job-support'), A('Azure Cosmos DB agent state job support', 'azure-cosmos-db-agent-state-job-support')],
  [EXISTING.vectorDb],
  ['Azure Cosmos DB AI job support', 'Cosmos DB vector', 'Cosmos DB agent state'],
);

// ─── Application architecture / AKS ──────────────────────────────────────────

const functionsOpenai = svc(
  'azure-functions-openai-job-support',
  'Azure Functions + OpenAI Proxy Job Support — Serverless AI Endpoints',
  'Azure Functions OpenAI job support: build serverless AI APIs and agent tools, custom MCP servers on Functions, event-driven AI, and reliable Azure OpenAI integration.',
  'Azure Functions + OpenAI Proxy Job Support — Serverless AI & Agent Tools',
  'Build serverless AI — APIs, event-driven processing, and custom MCP servers on Azure Functions.',
  'Azure Functions + OpenAI',
  'Functions are ideal for AI glue — serverless APIs, event processing, and agent tools — but managed identity, cold starts, and reliability need care.',
  'We build Azure Functions + OpenAI solutions: serverless AI APIs, event-driven document/RAG processing, custom MCP servers on Functions (/runtime/webhooks/mcp) for Foundry agents, Managed Identity to Azure OpenAI, and cold-start and reliability tuning.',
  'Azure Functions + OpenAI', 'We build serverless AI APIs, event-driven AI, and custom MCP servers on Azure Functions.',
  AZURE_HUB_LINK, [A('Foundry agent MCP job support', 'foundry-agent-mcp-job-support'), A('Azure Container Apps AI job support', 'azure-container-apps-ai-job-support')],
  [EXISTING.azureOpenAiJobSupport],
  ['Azure Functions OpenAI job support', 'serverless AI Azure', 'Azure Functions MCP'],
);

const apiManagement = svc(
  'azure-api-management-ai-job-support',
  'Azure API Management AI Gateway Proxy Job Support — Govern LLM Traffic',
  'Azure API Management AI job support: use APIM as an AI/LLM gateway — token rate limiting, load balancing across Azure OpenAI deployments, caching, and security.',
  'Azure API Management AI Gateway Proxy Job Support — Govern & Scale LLM Access',
  'Put an AI gateway in front of Azure OpenAI — token limits, load balancing, caching, and security.',
  'Azure API Management AI',
  'Sharing Azure OpenAI across teams needs a gateway — token limits, load balancing, and caching. APIM’s AI gateway features do this well when configured right.',
  'We build an Azure API Management AI gateway: token-based rate limiting and quotas, load balancing across multiple Azure OpenAI deployments/regions, semantic caching, key/identity management, and observability — governing and scaling LLM access across teams.',
  'Azure API Management AI', 'We build an APIM AI gateway — token limits, load balancing, caching, and security for LLM traffic.',
  AZURE_HUB_LINK, [A('Azure OpenAI cost optimization', 'azure-openai-cost-optimization-support'), A('Azure OpenAI quota & throttling support', 'azure-openai-quota-throttling-support')],
  [SECURITY_HUB_LINK],
  ['Azure API Management AI job support', 'APIM AI gateway', 'LLM gateway Azure'],
);

const containerApps = svc(
  'azure-container-apps-ai-job-support',
  'Azure Container Apps AI Proxy Job Support — Serverless Containers for AI',
  'Azure Container Apps AI job support: deploy AI apps and agents as serverless containers with scale-to-zero, KEDA autoscaling, and GPU workload profiles.',
  'Azure Container Apps AI Proxy Job Support — Serverless AI Containers',
  'Run AI apps and agents as serverless containers — scale-to-zero, KEDA, and GPU profiles.',
  'Azure Container Apps AI',
  'Container Apps give serverless containers with autoscale and now GPU — a great fit for AI apps and hosted agents when configured well.',
  'We deploy AI on Azure Container Apps: AI apps and Foundry-adjacent hosted agent containers, scale-to-zero, KEDA event-driven autoscaling, GPU workload profiles for inference, Managed Identity, and networking — a cost-efficient home for AI microservices.',
  'Azure Container Apps AI', 'We deploy AI apps and agent containers with scale-to-zero, KEDA autoscaling, and GPU profiles.',
  AZURE_HUB_LINK, [A('Azure Container Apps GenAI job support', 'azure-container-apps-genai-job-support'), A('AKS AI/ML job support', 'aks-ai-ml-job-support')],
  [FOUNDRY_LOCAL_LINK],
  ['Azure Container Apps AI job support', 'serverless containers AI', 'Container Apps GPU'],
);

const containerAppsGenai = svc(
  'azure-container-apps-genai-job-support',
  'Azure Container Apps GenAI Proxy Job Support — Host GenAI Services',
  'Azure Container Apps GenAI job support: host generative-AI services and agent backends on Container Apps with autoscaling, secrets, and GPU inference.',
  'Azure Container Apps GenAI Proxy Job Support — Host GenAI Backends',
  'Host GenAI services and agent backends on Container Apps — autoscaling, secrets, and GPU.',
  'Azure Container Apps GenAI',
  'GenAI backends need autoscale, secure secrets, and sometimes GPU. Container Apps deliver this serverlessly when set up correctly.',
  'We host GenAI on Azure Container Apps: generative-AI services and agent backends, autoscaling, Key Vault secrets, Managed Identity to Azure OpenAI/Foundry, and GPU workload profiles for self-hosted inference.',
  'Azure Container Apps GenAI', 'We host GenAI services and agent backends on Container Apps with autoscale, secrets, and GPU.',
  AZURE_HUB_LINK, [A('Azure Container Apps AI job support', 'azure-container-apps-ai-job-support'), A('AKS vLLM job support', 'aks-vllm-job-support')],
  [AGENT_HUB_LINK],
  ['Azure Container Apps GenAI job support', 'GenAI serverless Azure'],
);

const aksAiMl = svc(
  'aks-ai-ml-job-support',
  'AKS AI/ML Proxy Job Support — Kubernetes for AI Workloads',
  'AKS AI/ML job support: run AI/ML on Azure Kubernetes Service — GPU node pools, KAITO, model serving, KServe/Ray, and production-grade orchestration.',
  'AKS AI/ML Proxy Job Support — Production Kubernetes for AI',
  'Run AI/ML on AKS — GPU node pools, model serving, and scalable orchestration.',
  'AKS AI/ML',
  'AKS gives full control for AI workloads, but GPU node pools, serving stacks, and autoscaling are complex to run reliably.',
  'We run AI/ML on Azure Kubernetes Service (AKS): GPU node pools and drivers, KAITO for model deployment, KServe/Ray serving, autoscaling, networking and security, and cost control — production-grade Kubernetes for training and inference.',
  'AKS AI/ML', 'We run AI/ML on AKS — GPU node pools, model serving (KServe/Ray/KAITO), autoscaling, and cost control.',
  AZURE_HUB_LINK, [A('AKS GPU AI job support', 'aks-gpu-ai-job-support'), A('AKS vLLM job support', 'aks-vllm-job-support')],
  [A('Azure KServe job support', 'azure-kserve-job-support'), A('Azure Ray AI job support', 'azure-ray-ai-job-support')],
  ['AKS AI ML job support', 'Kubernetes AI Azure', 'AKS GPU'],
);

const aksVllm = svc(
  'aks-vllm-job-support',
  'AKS vLLM Proxy Job Support — Self-Hosted LLM Serving on Kubernetes',
  'AKS vLLM job support: self-host open-source LLMs on AKS with vLLM — GPU scheduling, tensor parallelism, autoscaling, and cost-efficient high-throughput inference.',
  'AKS vLLM Proxy Job Support — Self-Host LLMs at Scale',
  'Serve open-source LLMs on AKS with vLLM — high throughput, GPU-efficient, and autoscaled.',
  'AKS vLLM',
  'Self-hosting LLMs on AKS with vLLM cuts cost and keeps data private — but GPU scheduling, parallelism, and autoscaling are hard to get right.',
  'We deploy vLLM on AKS: GPU node pools and scheduling, tensor/pipeline parallelism for large models, continuous batching and KV cache, autoscaling, and cost-efficient high-throughput inference — the OSS-serving counterpart to Foundry Local.',
  'AKS vLLM', 'We self-host LLMs on AKS with vLLM — GPU scheduling, parallelism, autoscaling, and throughput tuning.',
  AZURE_HUB_LINK, [A('AKS GPU AI job support', 'aks-gpu-ai-job-support'), A('Foundry Local vLLM job support', 'foundry-local-vllm-job-support')],
  [A('AKS AI/ML job support', 'aks-ai-ml-job-support')],
  ['AKS vLLM job support', 'self-hosted LLM Azure', 'vLLM Kubernetes'],
);

const aksGpu = svc(
  'aks-gpu-ai-job-support',
  'AKS GPU AI Proxy Job Support — GPU Node Pools & Scheduling',
  'AKS GPU AI job support: configure GPU node pools, drivers, time-slicing/MIG, scheduling, and autoscaling for AI training and inference on Kubernetes.',
  'AKS GPU AI Proxy Job Support — Make GPUs Work on Kubernetes',
  'Get GPUs right on AKS — node pools, drivers, scheduling, and autoscaling.',
  'AKS GPU AI',
  'GPU on Kubernetes fails on drivers, scheduling, and sharing. Getting node pools and autoscaling right is what makes GPU workloads reliable and affordable.',
  'We configure GPU on AKS: GPU node pools and the NVIDIA device plugin/operator, drivers, time-slicing and MIG for sharing, scheduling and taints/tolerations, and cluster/node autoscaling — for efficient AI training and inference.',
  'AKS GPU AI', 'We configure GPU node pools, drivers, sharing (MIG/time-slicing), scheduling, and autoscaling on AKS.',
  AZURE_HUB_LINK, [A('AKS vLLM job support', 'aks-vllm-job-support'), A('Azure GPU cost optimization', 'azure-gpu-cost-optimization')],
  [A('AKS AI/ML job support', 'aks-ai-ml-job-support')],
  ['AKS GPU AI job support', 'GPU Kubernetes Azure', 'AKS MIG time-slicing'],
);

const kserve = svc(
  'azure-kserve-job-support',
  'Azure KServe Proxy Job Support — Model Serving on Kubernetes',
  'Azure KServe job support: deploy KServe InferenceServices on AKS for standardized model serving — autoscaling, canary, and transformers/predictors.',
  'Azure KServe Proxy Job Support — Standardized Model Serving',
  'Serve models on AKS with KServe — InferenceServices, autoscaling, and canary rollout.',
  'Azure KServe',
  'KServe standardizes model serving on Kubernetes, but InferenceService config, autoscaling, and routing need experience.',
  'We deploy KServe on AKS: InferenceServices, predictors and transformers, knative-based scale-to-zero and autoscaling, canary rollout, and integration with your model registry — standardized serving for many models.',
  'Azure KServe', 'We deploy KServe InferenceServices on AKS with autoscaling, canary, and transformers/predictors.',
  AZURE_HUB_LINK, [A('AKS AI/ML job support', 'aks-ai-ml-job-support'), A('Azure Ray AI job support', 'azure-ray-ai-job-support')],
  [],
  ['Azure KServe job support', 'KServe AKS', 'model serving Kubernetes Azure'],
);

const rayAi = svc(
  'azure-ray-ai-job-support',
  'Azure Ray AI Proxy Job Support — Distributed Python for AI on Azure',
  'Azure Ray AI job support: run Ray for distributed training, tuning, and batch inference on AKS or Azure ML — Ray clusters, autoscaling, and Ray Serve.',
  'Azure Ray AI Proxy Job Support — Scale Python AI Workloads',
  'Run Ray on Azure — distributed training, tuning, batch inference, and Ray Serve.',
  'Azure Ray AI',
  'Ray scales Python AI workloads across a cluster, but cluster setup, autoscaling, and Ray Serve on Azure need expertise.',
  'We run Ray on Azure: Ray clusters on AKS or integrated with Azure ML, distributed training and hyperparameter tuning, batch inference, and Ray Serve for online serving — with autoscaling and cost control.',
  'Azure Ray AI', 'We run Ray on AKS/Azure ML — distributed training, tuning, batch inference, and Ray Serve.',
  AZURE_HUB_LINK, [A('AKS AI/ML job support', 'aks-ai-ml-job-support'), A('Azure ML GPU training job support', 'azure-ml-gpu-training-job-support')],
  [A('Azure KServe job support', 'azure-kserve-job-support')],
  ['Azure Ray AI job support', 'Ray Azure', 'Ray Serve AKS'],
);

const serviceBusAi = svc(
  'azure-service-bus-ai-job-support',
  'Azure Service Bus AI Proxy Job Support — Event-Driven & Async AI',
  'Azure Service Bus AI job support: build reliable async and event-driven AI pipelines — queue-based LLM processing, agent task queues, and backpressure handling.',
  'Azure Service Bus AI Proxy Job Support — Reliable Async AI',
  'Build async, event-driven AI — queue-based processing, agent task queues, and backpressure.',
  'Azure Service Bus AI',
  'High-volume AI needs async processing and backpressure, or it throttles and drops work. Service Bus gives reliable messaging for AI pipelines.',
  'We build async AI with Azure Service Bus: queue- and topic-based LLM/document processing, agent task queues, retries and dead-lettering, and backpressure handling to stay within Azure OpenAI quota — reliable, decoupled AI pipelines.',
  'Azure Service Bus AI', 'We build async, event-driven AI pipelines with queues, retries, and backpressure handling.',
  AZURE_HUB_LINK, [A('Azure Functions OpenAI job support', 'azure-functions-openai-job-support'), A('Azure OpenAI quota & throttling support', 'azure-openai-quota-throttling-support')],
  [],
  ['Azure Service Bus AI job support', 'event-driven AI Azure', 'async LLM processing'],
);

const logicAppsAi = svc(
  'azure-logic-apps-ai-agent-job-support',
  'Azure Logic Apps AI Agent Proxy Job Support — Low-Code AI Workflows',
  'Azure Logic Apps AI job support: build low-code AI workflows and agent orchestration with connectors, Azure OpenAI actions, and enterprise integration.',
  'Azure Logic Apps AI Agent Proxy Job Support — Low-Code AI Automation',
  'Automate AI workflows with Logic Apps — connectors, Azure OpenAI actions, and agent steps.',
  'Azure Logic Apps AI',
  'Logic Apps bring AI to enterprise automation without heavy code, but connector, auth, and orchestration design still matter.',
  'We build AI workflows on Azure Logic Apps: Azure OpenAI and AI-service actions, 1,000+ connectors for enterprise integration, agent-style orchestration, and reliable error handling — low-code AI automation that fits existing systems.',
  'Azure Logic Apps AI', 'We build low-code AI workflows and agent orchestration with Logic Apps connectors and Azure OpenAI actions.',
  AZURE_HUB_LINK, [A('Azure Functions OpenAI job support', 'azure-functions-openai-job-support'), AGENT_HUB_LINK],
  [],
  ['Azure Logic Apps AI job support', 'low-code AI Azure', 'Logic Apps agent'],
);

const containerRegistryAi = svc(
  'azure-container-registry-ai-job-support',
  'Azure Container Registry AI Proxy Job Support — Images & Models for AI',
  'Azure Container Registry AI job support: manage AI container images and model artifacts, OCI artifacts, geo-replication, and secure supply chain for AI deployments.',
  'Azure Container Registry AI Proxy Job Support — Secure AI Artifacts',
  'Manage AI images and model artifacts — ACR with geo-replication and secure supply chain.',
  'Azure Container Registry AI',
  'AI deployments depend on reliable, secure images and model artifacts. ACR handles this — with the right access, scanning, and replication.',
  'We manage Azure Container Registry for AI: container images and OCI model artifacts, geo-replication for multi-region serving, image scanning and signing, and secure pull via Managed Identity — a reliable supply chain for AKS and Container Apps AI deployments.',
  'Azure Container Registry AI', 'We manage AI images and model artifacts in ACR with geo-replication and secure supply chain.',
  AZURE_HUB_LINK, [A('AKS AI/ML job support', 'aks-ai-ml-job-support'), A('Azure Container Apps AI job support', 'azure-container-apps-ai-job-support')],
  [],
  ['Azure Container Registry AI job support', 'ACR AI', 'model artifacts Azure'],
);

export const azurePlatformPages: LandingPageConfig[] = [
  foundryToolsHub,
  docIntelligence,
  contentUnderstanding,
  aiLanguage,
  aiSpeech,
  aiVision,
  aiTranslator,
  contentSafety,
  documentAi,
  multimodalAi,
  documentRag,
  databricksHub,
  databricksMosaic,
  databricksServing,
  databricksVector,
  dataLake,
  dataFactory,
  fabricAi,
  cosmosAi,
  functionsOpenai,
  apiManagement,
  containerApps,
  containerAppsGenai,
  aksAiMl,
  aksVllm,
  aksGpu,
  kserve,
  rayAi,
  serviceBusAi,
  logicAppsAi,
  containerRegistryAi,
];
