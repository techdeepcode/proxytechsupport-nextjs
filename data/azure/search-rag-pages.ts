import type { LandingPageConfig } from '../landing-pages';
import {
  azurePage,
  azureServicePage,
  relatedLinks,
  jobSupportHighlights,
  azureServiceFaqs,
  EXISTING,
  FOUNDRY_HUB_LINK,
  FOUNDRY_IQ_LINK,
  SEARCH_HUB_LINK,
  RAG_HUB_LINK,
  AGENT_HUB_LINK,
  AZURE_HUB_LINK,
  AZURE_PRODUCTION_LINK,
} from './shared';

const A = (label: string, slug: string) => ({ label, href: `/${slug}/` });
const searchProblem = A('Azure AI Search troubleshooting', 'azure-ai-search-troubleshooting-support');
const searchProxy = A('Azure AI Search interview support', 'azure-ai-search-proxy-interview-support');
const ragProblem = A('Azure RAG troubleshooting', 'azure-rag-troubleshooting-support');
const ragProxy = A('Azure RAG interview support', 'azure-rag-proxy-interview-support');

// ─── Azure AI Search master hub ──────────────────────────────────────────────

const searchHub: LandingPageConfig = azurePage({
  slug: 'azure-ai-search-proxy-job-support',
  title: 'Azure AI Search Proxy Job Support — Vector, Hybrid, Semantic & Agentic Retrieval',
  description:
    'Real-time Azure AI Search job support: vector and hybrid search, semantic ranker, integrated vectorization, indexers and skillsets, and agentic retrieval with Knowledge Agents and Knowledge Sources. Production help and interview support worldwide.',
  keywords: [
    'Azure AI Search job support', 'Azure Cognitive Search job support', 'Azure AI Search vector search',
    'Azure AI Search agentic retrieval', 'Knowledge Agents Azure', 'Azure AI Search RAG',
    'semantic ranker Azure', 'integrated vectorization',
  ],
  h1: 'Azure AI Search Proxy Job Support — From Vector Search to Agentic Retrieval',
  tagline:
    'One hub for real-time Azure AI Search job support — vector, hybrid, and semantic search, integrated vectorization, indexers, and agentic retrieval with Knowledge Agents and Knowledge Sources.',
  heroEyebrow: 'Azure AI Search Support Hub — Updated August 2026',
  painIntro:
    'Azure AI Search returning irrelevant results, an indexer stuck or failing, a vector-dimension mismatch after an embedding change, or agentic retrieval that will not synthesize an answer? An Azure AI Search expert gets retrieval quality back.',
  heroVariant:
    'Azure AI Search is the RAG and retrieval backbone for Azure AI. We cover the full stack: keyword, vector, and hybrid search; the semantic ranker (L2 reranking); integrated vectorization and push indexing; indexers, skillsets, and data sources; and the new agentic retrieval — a knowledge base (orchestrator) with a retrieve action over indexed and remote knowledge sources, using an LLM to decompose queries into parallel subqueries, semantically rerank, and optionally synthesize answers. Agentic retrieval core is GA in the 2026-04-01 REST API, with answer synthesis and non-web knowledge sources in the 2026-05-01-preview API. We help you build, tune, and operate all of it — and connect it to Foundry IQ and your agents.',
  geoLine:
    'Azure AI Search support for engineers across USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover vector/hybrid search, semantic ranker, integrated vectorization, indexers and skillsets, agentic retrieval, Knowledge Agents and Knowledge Sources, and answer synthesis — current through August 2026.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What is agentic retrieval in Azure AI Search and is it GA?',
      answer:
        'Agentic retrieval uses an LLM to plan and run retrieval: a knowledge base (the orchestrator, formerly the "Knowledge Agent" concept) exposes a retrieve action over knowledge sources (indexed or remote). At low/medium reasoning effort it decomposes a query into parallel subqueries, semantically reranks each, and merges results — optionally synthesizing an answer. Core features are GA in the 2026-04-01 REST API; the full set including answer synthesis and non-web LLM knowledge sources is in the 2026-05-01-preview API, and the portal exposes it as preview.',
    },
    {
      question: 'Which Azure AI Search capabilities do you cover?',
      answer:
        'Keyword, vector, and hybrid search; the semantic ranker; integrated vectorization and push indexing; indexers, skillsets, and data sources (Blob, ADLS, SQL, Cosmos DB, and more); knowledge bases, knowledge sources, and the retrieve action for agentic retrieval; answer synthesis; scoring profiles, filters, facets, and analyzers; and security-trimming and RBAC. We also connect Search to Azure OpenAI RAG, Foundry IQ, and Foundry agents.',
    },
    {
      question: 'Can you fix poor retrieval quality?',
      answer:
        'Yes — this is the most common request. We diagnose why results are irrelevant: chunking and embedding choices, vector-dimension mismatch, missing hybrid search or semantic ranking, bad filters, stale indexes, or skillset failures. We tune the pipeline and evaluate retrieval quality so answers actually improve.',
    },
    {
      question: 'Do you help with indexers and ingestion failures?',
      answer:
        'Yes. Indexer and skillset failures, throttling during ingestion, change-tracking and deletion detection, integrated-vectorization errors, and document-cracking issues are all in scope. We get ingestion reliable and incremental.',
    },
    {
      question: 'Do you provide production and interview support for Azure AI Search?',
      answer:
        'Both. We firefight live retrieval and indexer incidents and prepare you for Azure AI Search and RAG system-design interviews. See our Azure AI Search production and interview support pages.',
    },
  ],
  useCasesSection: {
    title: 'What We Help Azure AI Search Teams With',
    cases: [
      'Retrieval returning irrelevant results — chunking, embeddings, hybrid search, and semantic ranking tuning',
      'An indexer stuck, failing, or throttling during ingestion',
      'Vector-dimension mismatch after changing the embedding model',
      'Standing up agentic retrieval with a knowledge base, knowledge sources, and answer synthesis',
      'Connecting Azure AI Search to Azure OpenAI RAG, Foundry IQ, and Foundry agents',
      'Preparing for an Azure AI Search or RAG system-design interview',
    ],
  },
  bottomCTAHeading: 'Need Azure AI Search Help Right Now?',
  bottomCTABody:
    'In-house Azure AI Search experts available same-day — retrieval quality, indexers, agentic retrieval, production fixes, or interview prep. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AZURE_HUB_LINK, A('Azure AI Search production support', 'azure-ai-search-production-support')],
    techLinks: [A('Azure AI Search vector search', 'azure-ai-search-vector-search-job-support'), A('Azure AI Search agentic retrieval', 'azure-ai-search-agentic-retrieval-job-support')],
    problemLink: searchProblem,
    proxyLink: searchProxy,
    additionalLinks: [
      A('Azure AI Search hybrid search', 'azure-ai-search-hybrid-search-job-support'),
      A('Azure AI Search semantic ranker', 'azure-ai-search-semantic-ranker-job-support'),
      A('Azure AI Search integrated vectorization', 'azure-ai-search-integrated-vectorization-job-support'),
      A('Azure AI Search Knowledge Agents', 'azure-ai-search-knowledge-agents-job-support'),
      A('Azure AI Search Knowledge Sources', 'azure-ai-search-knowledge-sources-job-support'),
      A('Azure AI Search answer synthesis', 'azure-ai-search-answer-synthesis-job-support'),
      A('Azure AI Search indexer job support', 'azure-ai-search-indexer-job-support'),
      A('Azure AI Search RAG job support', 'azure-ai-search-rag-job-support'),
      RAG_HUB_LINK, FOUNDRY_IQ_LINK, EXISTING.azureAiSearchDotnet, EXISTING.vectorDb,
    ],
  }),
});

// compact factory
const mk = (
  slug: string, title: string, description: string, h1: string, tagline: string, eyebrow: string,
  painIntro: string, heroVariant: string, faqService: string, faqUsage: string,
  problem: { label: string; href: string }, proxy: { label: string; href: string },
  tech: { label: string; href: string }[], extra: { label: string; href: string }[],
): LandingPageConfig =>
  azureServicePage({
    slug, title, description, h1, tagline, heroEyebrow: eyebrow, painIntro, heroVariant,
    keywords: [title.split(' — ')[0], 'Azure AI Search', 'Azure RAG', 'Azure AI retrieval'],
    faqs: azureServiceFaqs(faqService, faqUsage),
    relatedLinks: relatedLinks({
      geoLinks: [SEARCH_HUB_LINK, AZURE_HUB_LINK],
      techLinks: tech,
      problemLink: problem,
      proxyLink: proxy,
      additionalLinks: extra.concat([SEARCH_HUB_LINK]),
    }),
  });

const vectorSearch = mk(
  'azure-ai-search-vector-search-job-support',
  'Azure AI Search Vector Search Proxy Job Support — Embeddings & ANN Indexes',
  'Azure AI Search vector search job support: configure vector fields, HNSW/exhaustive indexes, embeddings, dimensions, and vector queries — and avoid dimension mismatch that breaks retrieval.',
  'Azure AI Search Vector Search Proxy Job Support — Reliable Vector Retrieval',
  'Get vector search right — fields, algorithms, dimensions, and queries that actually return relevant results.',
  'Azure AI Search Vector Search',
  'Vector search looks simple but the index algorithm, dimensions, and query params decide whether results are relevant — and a dimension mismatch silently breaks everything.',
  'We configure Azure AI Search vector search: vector fields, HNSW and exhaustive KNN algorithms and parameters, embedding models and dimensions, vector query construction, and hybrid combination with keyword search. We prevent and fix vector-dimension mismatch and tune recall vs latency.',
  'Azure AI Search vector search', 'We configure vector fields, ANN indexes, embeddings, and queries and fix dimension mismatch.',
  searchProblem, searchProxy,
  [A('Azure AI Search hybrid search', 'azure-ai-search-hybrid-search-job-support'), A('Azure OpenAI embeddings job support', 'azure-openai-embeddings-job-support')],
  [A('Azure AI Search integrated vectorization', 'azure-ai-search-integrated-vectorization-job-support'), EXISTING.vectorDb],
);

const hybridSearch = mk(
  'azure-ai-search-hybrid-search-job-support',
  'Azure AI Search Hybrid Search Proxy Job Support — Keyword + Vector + Ranking',
  'Azure AI Search hybrid search job support: combine keyword (BM25) and vector search with Reciprocal Rank Fusion and the semantic ranker for the best retrieval quality.',
  'Azure AI Search Hybrid Search Proxy Job Support — Best-of-Both Retrieval',
  'Combine keyword and vector search with fusion and semantic ranking for retrieval that beats either alone.',
  'Azure AI Search Hybrid Search',
  'Pure vector or pure keyword search each miss cases. Hybrid search plus semantic ranking usually wins — but only when fusion and weights are tuned.',
  'We build hybrid search on Azure AI Search: combining BM25 keyword and vector retrieval with Reciprocal Rank Fusion, layering the semantic ranker for L2 reranking, and tuning weights, filters, and top-k for your data. We evaluate quality against real queries.',
  'Azure AI Search hybrid search', 'We combine keyword and vector search with fusion and the semantic ranker for best retrieval quality.',
  searchProblem, searchProxy,
  [A('Azure AI Search vector search', 'azure-ai-search-vector-search-job-support'), A('Azure AI Search semantic ranker', 'azure-ai-search-semantic-ranker-job-support')],
  [A('Azure AI Search RAG job support', 'azure-ai-search-rag-job-support')],
);

const semanticRanker = mk(
  'azure-ai-search-semantic-ranker-job-support',
  'Azure AI Search Semantic Ranker Proxy Job Support — L2 Reranking Done Right',
  'Azure AI Search semantic ranker job support: enable and tune semantic ranking for L2 reranking and semantic captions/answers, improving relevance for search and agentic retrieval.',
  'Azure AI Search Semantic Ranker Proxy Job Support — Boost Relevance',
  'Rerank results with the semantic ranker for dramatically better relevance — the engine behind agentic retrieval.',
  'Azure AI Search Semantic Ranker',
  'The semantic ranker often lifts relevance more than any other single change — but knowing when and how to apply it (and its cost) matters.',
  'We enable and tune the Azure AI Search semantic ranker: L2 reranking over your top results, semantic captions and answers, and its role inside agentic retrieval (which reranks each subquery). We balance relevance gains against cost and latency.',
  'Azure AI Search semantic ranker', 'We enable and tune semantic ranking for L2 reranking and better relevance.',
  searchProblem, searchProxy,
  [A('Azure AI Search hybrid search', 'azure-ai-search-hybrid-search-job-support'), A('Azure AI Search agentic retrieval', 'azure-ai-search-agentic-retrieval-job-support')],
  [A('Azure AI Search RAG job support', 'azure-ai-search-rag-job-support')],
);

const integratedVectorization = mk(
  'azure-ai-search-integrated-vectorization-job-support',
  'Azure AI Search Integrated Vectorization Proxy Job Support — Auto-Embed Pipeline',
  'Azure AI Search integrated vectorization job support: automatically chunk and embed content at index and query time with skillsets and vectorizers — no external embedding pipeline.',
  'Azure AI Search Integrated Vectorization Proxy Job Support — Auto-Embedding',
  'Let Azure AI Search chunk and embed for you — integrated vectorization at index and query time.',
  'Azure AI Search Integrated Vectorization',
  'Maintaining a separate embedding pipeline is fragile. Integrated vectorization chunks and embeds inside the indexer — if the skillset and vectorizer are configured right.',
  'We set up integrated vectorization on Azure AI Search: split/chunking skills, embedding skills and vectorizers wired to Azure OpenAI, index projections for parent-child chunks, and query-time vectorization. This removes the external embedding pipeline and keeps index and query embeddings consistent.',
  'Azure AI Search integrated vectorization', 'We configure automatic chunking and embedding via skillsets and vectorizers at index and query time.',
  searchProblem, searchProxy,
  [A('Azure AI Search indexer job support', 'azure-ai-search-indexer-job-support'), A('Azure OpenAI embeddings job support', 'azure-openai-embeddings-job-support')],
  [A('Azure AI Search vector search', 'azure-ai-search-vector-search-job-support')],
);

const agenticRetrieval = mk(
  'azure-ai-search-agentic-retrieval-job-support',
  'Azure AI Search Agentic Retrieval Proxy Job Support — Query Planning & Synthesis',
  'Azure AI Search agentic retrieval job support: build knowledge bases with the retrieve action, configure reasoning effort, plan subqueries, semantically rerank, and synthesize answers (2026-04-01 GA / 2026-05-01-preview).',
  'Azure AI Search Agentic Retrieval Proxy Job Support — LLM-Planned Retrieval',
  'Go beyond vector search — LLM query planning, parallel subqueries, semantic reranking, and answer synthesis.',
  'Azure AI Search Agentic Retrieval',
  'Agentic retrieval plans and reasons over retrieval instead of doing a single query. Configuring knowledge bases, reasoning effort, and synthesis for quality and cost is the challenge.',
  'We build agentic retrieval on Azure AI Search: a knowledge base (orchestrator) with a retrieve action over indexed and remote knowledge sources, reasoning effort (minimal/low/medium) to decompose queries into parallel subqueries, semantic reranking of each, result merging, and optional answer synthesis. Core is GA in the 2026-04-01 REST API; synthesis and non-web sources are in 2026-05-01-preview. We wire it to agents and Foundry IQ.',
  'Azure AI Search agentic retrieval', 'We build knowledge bases, tune reasoning effort and subquery planning, and configure answer synthesis.',
  searchProblem, searchProxy,
  [A('Azure AI Search Knowledge Agents', 'azure-ai-search-knowledge-agents-job-support'), A('Azure AI Search Knowledge Sources', 'azure-ai-search-knowledge-sources-job-support')],
  [A('Azure AI Search answer synthesis', 'azure-ai-search-answer-synthesis-job-support'), FOUNDRY_IQ_LINK, AGENT_HUB_LINK],
);

const knowledgeAgents = mk(
  'azure-ai-search-knowledge-agents-job-support',
  'Azure AI Search Knowledge Agents Proxy Job Support — Retrieval Orchestrators',
  'Azure AI Search Knowledge Agents / knowledge base job support: configure the retrieval orchestrator, retrieve action, LLM query planning, and MCP endpoint for agentic retrieval.',
  'Azure AI Search Knowledge Agents Proxy Job Support — Configure the Orchestrator',
  'Set up the knowledge base (Knowledge Agent) that plans and runs agentic retrieval for your agents.',
  'Azure AI Search Knowledge Agents',
  'The knowledge base is the brain of agentic retrieval — it plans subqueries and orchestrates sources. Misconfigure it and retrieval quality and cost both suffer.',
  'We configure Azure AI Search knowledge bases (the Knowledge Agent concept): the retrieve action, LLM used for query planning and synthesis, reasoning effort, attached knowledge sources, and the MCP endpoint agents call. We tune orchestration for quality, latency, and cost.',
  'Azure AI Search Knowledge Agents', 'We configure the knowledge base orchestrator, retrieve action, query planning, and MCP endpoint.',
  searchProblem, searchProxy,
  [A('Azure AI Search agentic retrieval', 'azure-ai-search-agentic-retrieval-job-support'), A('Azure AI Search Knowledge Sources', 'azure-ai-search-knowledge-sources-job-support')],
  [FOUNDRY_IQ_LINK, A('Foundry agent MCP job support', 'foundry-agent-mcp-job-support')],
);

const knowledgeSources = mk(
  'azure-ai-search-knowledge-sources-job-support',
  'Azure AI Search Knowledge Sources Proxy Job Support — Indexed & Remote Sources',
  'Azure AI Search Knowledge Sources job support: define indexed and remote knowledge sources as top-level resources for agentic retrieval, with the right schema, permissions, and freshness.',
  'Azure AI Search Knowledge Sources Proxy Job Support — Wire Your Data In',
  'Define the indexed and remote knowledge sources your agents retrieve from — schema, permissions, and freshness.',
  'Azure AI Search Knowledge Sources',
  'Knowledge sources are the top-level resources agentic retrieval draws from. Getting their schema, permissions, and refresh right determines answer quality and governance.',
  'We define Azure AI Search knowledge sources: indexed sources (backed by search indexes with integrated vectorization) and remote sources, their schema and field mapping, security-trimming and permissions, and freshness/refresh. We attach them to knowledge bases for agentic retrieval and Foundry IQ.',
  'Azure AI Search Knowledge Sources', 'We define indexed and remote knowledge sources with schema, permissions, and freshness for agentic retrieval.',
  searchProblem, searchProxy,
  [A('Azure AI Search Knowledge Agents', 'azure-ai-search-knowledge-agents-job-support'), A('Azure AI Search agentic retrieval', 'azure-ai-search-agentic-retrieval-job-support')],
  [FOUNDRY_IQ_LINK, A('Azure AI Search indexer job support', 'azure-ai-search-indexer-job-support')],
);

const answerSynthesis = mk(
  'azure-ai-search-answer-synthesis-job-support',
  'Azure AI Search Answer Synthesis Proxy Job Support — Grounded, Cited Answers',
  'Azure AI Search answer synthesis job support: configure knowledge bases to return synthesized, grounded, cited answers from retrieved results (2026-05-01-preview) with the right reasoning effort.',
  'Azure AI Search Answer Synthesis Proxy Job Support — From Results to Answers',
  'Return grounded, cited answers — not just documents — with agentic retrieval answer synthesis.',
  'Azure AI Search Answer Synthesis',
  'Answer synthesis turns retrieved passages into a grounded, cited answer — powerful, but you must configure the LLM, reasoning effort, and grounding correctly.',
  'We configure answer synthesis on Azure AI Search knowledge bases: attaching the Azure OpenAI LLM, choosing a compatible reasoning effort, grounding on retrieved passages, returning citations, and evaluating groundedness. Answer synthesis is in the 2026-05-01-preview API. We balance quality, latency, and cost.',
  'Azure AI Search answer synthesis', 'We configure grounded, cited answer synthesis on knowledge bases and evaluate groundedness.',
  searchProblem, searchProxy,
  [A('Azure AI Search agentic retrieval', 'azure-ai-search-agentic-retrieval-job-support'), RAG_HUB_LINK],
  [FOUNDRY_IQ_LINK, A('Azure RAG troubleshooting', 'azure-rag-troubleshooting-support')],
);

const searchIndexer = mk(
  'azure-ai-search-indexer-job-support',
  'Azure AI Search Indexer Proxy Job Support — Ingestion, Skillsets & Data Sources',
  'Azure AI Search indexer job support: build and fix indexers, skillsets, and data sources (Blob, ADLS, SQL, Cosmos DB), change tracking, deletion detection, and integrated vectorization.',
  'Azure AI Search Indexer Proxy Job Support — Reliable, Incremental Ingestion',
  'Get ingestion reliable — indexers, skillsets, data sources, change tracking, and integrated vectorization.',
  'Azure AI Search Indexer',
  'Indexers fail quietly, skip documents, or throttle. Reliable, incremental ingestion is the foundation everything else depends on.',
  'We build and fix Azure AI Search indexers: data sources (Blob, ADLS Gen2, SQL, Cosmos DB), skillsets (OCR, split, embedding, custom Web API skills), change tracking and deletion detection, index projections, throttling, and integrated vectorization. We make ingestion reliable and incremental.',
  'Azure AI Search indexer', 'We build and fix indexers, skillsets, and data sources with reliable, incremental ingestion.',
  searchProblem, searchProxy,
  [A('Azure AI Search integrated vectorization', 'azure-ai-search-integrated-vectorization-job-support'), A('Azure AI Search production support', 'azure-ai-search-production-support')],
  [A('Azure data lake AI job support', 'azure-data-lake-ai-job-support')],
);

const searchRag = mk(
  'azure-ai-search-rag-job-support',
  'Azure AI Search RAG Proxy Job Support — Retrieval for Grounded Generation',
  'Azure AI Search RAG job support: build the retrieval layer for RAG — chunking, embeddings, hybrid + semantic retrieval, filtering, and citations — feeding Azure OpenAI and Foundry agents.',
  'Azure AI Search RAG Proxy Job Support — The Retrieval Half of RAG',
  'Nail the retrieval layer that RAG quality depends on — chunking, hybrid + semantic retrieval, and citations.',
  'Azure AI Search RAG',
  'RAG quality is mostly retrieval quality. If Azure AI Search returns the wrong passages, no model can save the answer.',
  'We build the Azure AI Search retrieval layer for RAG: chunking strategy, embeddings and integrated vectorization, hybrid + semantic retrieval, metadata filtering and security-trimming, top-k tuning, and citations — feeding Azure OpenAI and Foundry agents. We evaluate retrieval and end-to-end groundedness.',
  'Azure AI Search RAG', 'We build the retrieval layer — chunking, hybrid + semantic retrieval, filtering, and citations — for grounded RAG.',
  ragProblem, searchProxy,
  [RAG_HUB_LINK, A('Azure OpenAI RAG job support', 'azure-openai-rag-job-support')],
  [A('Azure AI Search agentic retrieval', 'azure-ai-search-agentic-retrieval-job-support'), FOUNDRY_IQ_LINK],
);

const searchProduction = mk(
  'azure-ai-search-production-support',
  'Azure AI Search Production Support — Live Retrieval & Indexer Incidents',
  'Azure AI Search production support: fix failing indexers, retrieval-quality collapse, vector-dimension mismatch, throttling, and scale/replica issues with an expert on the call.',
  'Azure AI Search Production Support — Fix Live Search Incidents',
  'On-call help for Azure AI Search incidents — indexer failures, retrieval collapse, throttling, and scaling.',
  'Azure AI Search Production Firefighting',
  'A failing indexer, retrieval quality that suddenly dropped, or throttling under load can break a whole RAG app. These incidents need fast, expert diagnosis.',
  'We firefight Azure AI Search in production: indexer and skillset failures, retrieval-quality regressions, vector-dimension mismatch after model changes, throttling and 503s, replica/partition scaling, and cost. We read diagnostics and request IDs to root-cause and stabilize.',
  'Azure AI Search production', 'We firefight indexer failures, retrieval collapse, vector-dimension mismatch, throttling, and scaling live.',
  searchProblem, searchProxy,
  [A('Azure AI Search indexer job support', 'azure-ai-search-indexer-job-support'), AZURE_PRODUCTION_LINK],
  [A('Azure AI Search troubleshooting', 'azure-ai-search-troubleshooting-support')],
);

const searchTroubleshooting = mk(
  'azure-ai-search-troubleshooting-support',
  'Azure AI Search Troubleshooting Support — Diagnose & Fix Search Errors',
  'Azure AI Search troubleshooting support: root-cause indexer failures, poor relevance, vector-dimension mismatch, semantic-ranker issues, and Knowledge Agent errors with a structured method.',
  'Azure AI Search Troubleshooting Support — Root-Cause Search Failures',
  'A structured method for Azure AI Search issues: symptom → root cause → diagnostics → config/index/query fix → validation → prevention.',
  'Azure AI Search Troubleshooting',
  'Search failures range from indexer errors to silently poor relevance. A disciplined method — not trial and error — is how you fix them.',
  'We troubleshoot Azure AI Search methodically: indexer and skillset failures, poor relevance and ranking, vector-dimension mismatch, semantic-ranker configuration, Knowledge Agent/knowledge-source errors, and query/filter bugs — reproduce, diagnose, fix, validate, and prevent.',
  'Azure AI Search troubleshooting', 'We root-cause indexer, relevance, vector-dimension, semantic-ranker, and Knowledge Agent issues.',
  A('Azure AI Search production support', 'azure-ai-search-production-support'), searchProxy,
  [A('Azure RAG troubleshooting', 'azure-rag-troubleshooting-support'), A('Azure AI Search agentic retrieval', 'azure-ai-search-agentic-retrieval-job-support')],
  [SEARCH_HUB_LINK],
);

// ─── RAG cluster ─────────────────────────────────────────────────────────────

const ragHub: LandingPageConfig = azurePage({
  slug: 'azure-rag-proxy-job-support',
  title: 'Azure RAG Proxy Job Support — Retrieval-Augmented Generation on Azure',
  description:
    'Real-time Azure RAG job support: build grounded retrieval-augmented generation on Azure OpenAI, Azure AI Search, Foundry IQ, and Foundry agents — chunking, embeddings, hybrid + agentic retrieval, citations, and hallucination mitigation.',
  keywords: [
    'Azure RAG job support', 'Azure retrieval augmented generation', 'Azure OpenAI RAG',
    'Azure AI Search RAG', 'enterprise RAG Azure', 'Azure grounding hallucination',
  ],
  h1: 'Azure RAG Proxy Job Support — Grounded, Cited, Production-Ready RAG',
  tagline:
    'One hub for Azure RAG job support — Azure OpenAI + Azure AI Search + Foundry IQ, from chunking and embeddings to agentic retrieval, citations, and evaluation.',
  heroEyebrow: 'Azure RAG Support Hub — Updated August 2026',
  painIntro:
    'RAG that hallucinates, cites the wrong source, or misses the answer entirely is worse than no RAG. Making Azure RAG reliable at production scale takes retrieval and evaluation expertise.',
  heroVariant:
    'We build and fix Azure RAG end to end: chunking and embeddings, Azure AI Search vector/hybrid retrieval and the semantic ranker, metadata filtering and security-trimming, prompt grounding and citations, hallucination mitigation, and evaluation of groundedness and answer quality. We cover classic RAG on Azure OpenAI + Azure AI Search, agentic retrieval with Knowledge Agents and Knowledge Sources, Foundry IQ as a managed knowledge layer, and RAG inside Foundry agents — plus the cost, latency, and security trade-offs of each.',
  geoLine:
    'Azure RAG support for engineers across USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover chunking, embeddings, vector/hybrid/agentic retrieval, semantic ranking, citations, grounding, hallucination mitigation, and RAG evaluation across Azure OpenAI, Azure AI Search, and Foundry IQ.',
  highlights: jobSupportHighlights,
  faqs: azureServiceFaqs('Azure RAG', 'We build grounded RAG on Azure OpenAI, Azure AI Search, and Foundry IQ — retrieval, citations, hallucination control, and evaluation.'),
  useCasesSection: {
    title: 'What We Help Azure RAG Teams With',
    cases: [
      'RAG that hallucinates or cites the wrong source under real data and users',
      'Choosing between classic RAG, agentic retrieval, and Foundry IQ for a workload',
      'Chunking, embeddings, and hybrid + semantic retrieval tuning for relevance',
      'Grounding, citations, and hallucination mitigation in prompts and agents',
      'Evaluating RAG groundedness and answer quality and gating changes in CI',
      'Securing RAG with permission-aware retrieval and security-trimming',
    ],
  },
  bottomCTAHeading: 'Need Azure RAG Help Right Now?',
  bottomCTABody:
    'In-house Azure RAG experts available same-day — retrieval quality, agentic retrieval, Foundry IQ, production fixes, or interview prep. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AZURE_HUB_LINK, A('Azure RAG production support', 'azure-rag-production-support')],
    techLinks: [SEARCH_HUB_LINK, A('Azure OpenAI RAG job support', 'azure-openai-rag-job-support')],
    problemLink: ragProblem,
    proxyLink: ragProxy,
    additionalLinks: [
      A('Microsoft Foundry RAG job support', 'microsoft-foundry-rag-job-support'),
      A('Azure enterprise RAG job support', 'azure-enterprise-rag-job-support'),
      A('Foundry agent RAG job support', 'foundry-agent-rag-job-support'),
      A('Azure AI Search agentic retrieval', 'azure-ai-search-agentic-retrieval-job-support'),
      FOUNDRY_IQ_LINK, EXISTING.rag, EXISTING.ragEngineer, EXISTING.vectorDb,
    ],
  }),
});

const foundryRag = mk(
  'microsoft-foundry-rag-job-support',
  'Microsoft Foundry RAG Proxy Job Support — Grounded Generation on Foundry',
  'Microsoft Foundry RAG job support: build grounded RAG in Foundry projects and agents using Foundry Models, Azure AI Search, and Foundry IQ, with evaluation and observability.',
  'Microsoft Foundry RAG Proxy Job Support — RAG the Foundry Way',
  'Build grounded RAG inside Microsoft Foundry — Foundry Models, Azure AI Search, Foundry IQ, and evaluation.',
  'Microsoft Foundry RAG',
  'RAG inside Foundry ties together models, retrieval, agents, and evaluation. Wiring it into the Foundry project model correctly is the differentiator.',
  'We build RAG inside Microsoft Foundry: Foundry Models for generation, Azure AI Search or Foundry IQ for retrieval, grounding and citations in prompt/hosted agents, and evaluation and observability. We fit RAG into the Foundry resource/project model and CI.',
  'Microsoft Foundry RAG', 'We build grounded RAG in Foundry using Foundry Models, Azure AI Search, and Foundry IQ, with evaluation.',
  ragProblem, ragProxy,
  [FOUNDRY_HUB_LINK, FOUNDRY_IQ_LINK],
  [A('Azure AI Search RAG job support', 'azure-ai-search-rag-job-support'), AGENT_HUB_LINK],
);

const enterpriseRag = mk(
  'azure-enterprise-rag-job-support',
  'Azure Enterprise RAG Proxy Job Support — Governed, Permission-Aware RAG',
  'Azure enterprise RAG job support: build governed, permission-aware RAG at scale with security-trimming, Foundry IQ, evaluation, and observability across many teams and data sources.',
  'Azure Enterprise RAG Proxy Job Support — RAG That Scales & Governs',
  'Scale RAG across the enterprise — permission-aware retrieval, governance, evaluation, and reuse.',
  'Azure Enterprise RAG',
  'Enterprise RAG fails on governance and permissions, not embeddings. Serving grounded answers while respecting access control across many sources is the hard part.',
  'We build enterprise RAG on Azure: permission-aware retrieval and security-trimming, Foundry IQ as a shared knowledge layer, multi-source ingestion and governance, groundedness evaluation, observability, and cost control — so many teams and agents can reuse governed knowledge safely.',
  'Azure enterprise RAG', 'We build governed, permission-aware RAG at scale with security-trimming, Foundry IQ, and evaluation.',
  ragProblem, ragProxy,
  [FOUNDRY_IQ_LINK, SEARCH_HUB_LINK],
  [A('Foundry IQ enterprise RAG support', 'foundry-iq-enterprise-rag-support'), A('Azure AI governance job support', 'azure-ai-governance-job-support')],
);

const foundryAgentRag = mk(
  'foundry-agent-rag-job-support',
  'Foundry Agent RAG Proxy Job Support — Retrieval Inside Agents',
  'Foundry agent RAG job support: give agents reliable retrieval with file search, Azure AI Search, agentic retrieval, and Foundry IQ — grounded, cited answers inside agent workflows.',
  'Foundry Agent RAG Proxy Job Support — Ground Your Agents',
  'Give Foundry agents reliable, cited retrieval — file search, Azure AI Search, agentic retrieval, and Foundry IQ.',
  'Foundry Agent RAG',
  'Agents that answer from memory alone hallucinate. Wiring reliable retrieval into agent workflows is what makes them trustworthy.',
  'We build RAG inside Foundry agents: the built-in file search tool for simple cases, Azure AI Search and agentic retrieval for scale, and Foundry IQ for governed enterprise knowledge — with grounding, citations, and evaluation inside the agent workflow.',
  'Foundry agent RAG', 'We wire reliable retrieval — file search, Azure AI Search, agentic retrieval, Foundry IQ — into agents.',
  ragProblem, ragProxy,
  [AGENT_HUB_LINK, FOUNDRY_IQ_LINK],
  [A('Foundry agent file search job support', 'foundry-agent-file-search-job-support'), A('Azure AI Search agentic retrieval', 'azure-ai-search-agentic-retrieval-job-support')],
);

const ragProduction = mk(
  'azure-rag-production-support',
  'Azure RAG Production Support — Fix Live RAG Quality & Reliability',
  'Azure RAG production support: fix hallucinations, wrong citations, retrieval-quality collapse, latency, and cost in live Azure RAG systems with an expert on the call.',
  'Azure RAG Production Support — Rescue Live RAG Systems',
  'On-call help for RAG incidents — hallucinations, wrong citations, retrieval collapse, latency, and cost.',
  'Azure RAG Production Firefighting',
  'When production RAG starts hallucinating or citing the wrong sources, users lose trust fast. These incidents need retrieval-savvy diagnosis.',
  'We firefight Azure RAG in production: sudden retrieval-quality collapse, hallucinations and wrong citations after data or model changes, vector-dimension mismatch, latency from multi-step retrieval, and cost blowups. We diagnose the retrieval pipeline and prompt, fix the root cause, and add evaluation to catch regressions.',
  'Azure RAG production', 'We firefight hallucinations, wrong citations, retrieval collapse, latency, and cost in live RAG.',
  ragProblem, ragProxy,
  [SEARCH_HUB_LINK, AZURE_PRODUCTION_LINK],
  [A('Azure RAG troubleshooting', 'azure-rag-troubleshooting-support'), A('Azure OpenAI RAG job support', 'azure-openai-rag-job-support')],
);

const ragTroubleshooting = mk(
  'azure-rag-troubleshooting-support',
  'Azure RAG Troubleshooting Support — Diagnose & Fix RAG Failures',
  'Azure RAG troubleshooting support: root-cause poor retrieval, hallucinations, wrong citations, vector-dimension mismatch, and grounding failures across Azure OpenAI and Azure AI Search.',
  'Azure RAG Troubleshooting Support — Root-Cause RAG Failures',
  'A structured method for RAG issues: symptom → retrieval vs generation → diagnose → fix → evaluate → prevent.',
  'Azure RAG Troubleshooting',
  'RAG failures are often blamed on the model when the real cause is retrieval, chunking, or grounding. Isolating where it breaks is the skill.',
  'We troubleshoot Azure RAG methodically: separate retrieval failures from generation failures, diagnose chunking/embedding/vector-dimension issues, hybrid and semantic ranking gaps, filtering bugs, and prompt-grounding problems, apply the fix, and add evaluation to prevent recurrence.',
  'Azure RAG troubleshooting', 'We isolate retrieval vs generation failures, fix chunking/embedding/grounding, and add evaluation.',
  A('Azure RAG production support', 'azure-rag-production-support'), ragProxy,
  [SEARCH_HUB_LINK, A('Azure AI Search troubleshooting', 'azure-ai-search-troubleshooting-support')],
  [RAG_HUB_LINK],
);

// ─── Vector / database cluster ───────────────────────────────────────────────

const cosmosVector = mk(
  'azure-cosmos-db-vector-search-job-support',
  'Azure Cosmos DB Vector Search Proxy Job Support — Vectors in Your OLTP Store',
  'Azure Cosmos DB vector search job support: add vector indexing and search (NoSQL / DiskANN) to Cosmos DB for RAG and agent memory alongside your operational data.',
  'Azure Cosmos DB Vector Search Proxy Job Support — Co-Located Vectors',
  'Keep vectors next to your data — Cosmos DB vector search for RAG and agent state without a separate vector DB.',
  'Azure Cosmos DB Vector Search',
  'Running a separate vector store adds ops overhead. Cosmos DB vector search co-locates vectors with operational data — when indexing and queries are set up right.',
  'We add vector search to Azure Cosmos DB: vector indexing (including DiskANN), embedding storage, vector and hybrid queries, and integration with RAG pipelines and agent memory — keeping vectors alongside operational data for lower latency and simpler ops.',
  'Azure Cosmos DB vector search', 'We add vector indexing and search to Cosmos DB for RAG and agent memory alongside operational data.',
  ragProblem, ragProxy,
  [EXISTING.vectorDb, A('Azure Cosmos DB AI job support', 'azure-cosmos-db-ai-job-support')],
  [A('Azure Cosmos DB agent state job support', 'azure-cosmos-db-agent-state-job-support'), SEARCH_HUB_LINK],
);

const pgvector = mk(
  'azure-postgresql-pgvector-job-support',
  'Azure PostgreSQL pgvector Proxy Job Support — Vectors in Postgres',
  'Azure Database for PostgreSQL pgvector job support: add pgvector (and DiskANN) vector search to Postgres for RAG, with indexing, hybrid queries, and performance tuning.',
  'Azure PostgreSQL pgvector Proxy Job Support — RAG on Postgres',
  'Do vector search in Postgres — pgvector and DiskANN on Azure Database for PostgreSQL, tuned for RAG.',
  'Azure PostgreSQL pgvector',
  'Teams standardized on Postgres often want vectors there too. pgvector works well — with the right index type, dimensions, and query tuning.',
  'We add and tune pgvector on Azure Database for PostgreSQL: vector columns, HNSW and DiskANN indexes, dimensions, hybrid SQL + vector queries, and performance tuning for RAG workloads — keeping retrieval in the database you already run.',
  'Azure PostgreSQL pgvector', 'We add and tune pgvector/DiskANN vector search on Azure Postgres for RAG.',
  ragProblem, ragProxy,
  [EXISTING.vectorDb, SEARCH_HUB_LINK],
  [A('Azure Cosmos DB vector search job support', 'azure-cosmos-db-vector-search-job-support')],
);

const managedRedis = mk(
  'azure-managed-redis-ai-job-support',
  'Azure Managed Redis AI Proxy Job Support — Vector, Cache & Semantic Cache',
  'Azure Managed Redis AI job support: use Redis for vector search, semantic caching, and low-latency agent/session state in Azure AI apps.',
  'Azure Managed Redis AI Proxy Job Support — Fast Vectors & Semantic Cache',
  'Use Azure Managed Redis for vector search, semantic caching, and low-latency agent state.',
  'Azure Managed Redis AI',
  'Redis shines for low-latency vector search and semantic caching — cutting cost and latency for RAG and agents when configured well.',
  'We use Azure Managed Redis for AI: vector search indexes, semantic caching of LLM responses to cut cost and latency, and fast agent/session state. We integrate it into RAG and agent architectures.',
  'Azure Managed Redis AI', 'We use Redis for vector search, semantic caching, and low-latency agent/session state.',
  ragProblem, ragProxy,
  [EXISTING.vectorDb, A('Azure Cosmos DB agent state job support', 'azure-cosmos-db-agent-state-job-support')],
  [A('Azure OpenAI cost optimization', 'azure-openai-cost-optimization-support')],
);

const cosmosAgentState = mk(
  'azure-cosmos-db-agent-state-job-support',
  'Azure Cosmos DB Agent State Proxy Job Support — Durable Agent Memory Store',
  'Azure Cosmos DB agent state job support: store agent conversation state, memory, and checkpoints durably in Cosmos DB for scalable, resilient multi-agent systems.',
  'Azure Cosmos DB Agent State Proxy Job Support — Durable Agent Memory',
  'Persist agent state and memory reliably in Cosmos DB — scalable, low-latency, globally distributed.',
  'Azure Cosmos DB Agent State',
  'Agents need durable state and memory. Cosmos DB gives you a scalable, low-latency store — with the right partitioning and schema.',
  'We design agent state and memory storage on Azure Cosmos DB: conversation state, memory records, checkpoints, partitioning for scale, TTL/retention, and integration with Foundry agent memory and Microsoft Agent Framework — for resilient, scalable agent systems.',
  'Azure Cosmos DB agent state', 'We store agent conversation state, memory, and checkpoints durably in Cosmos DB.',
  ragProblem, ragProxy,
  [A('Foundry agent memory job support', 'foundry-agent-memory-job-support'), A('Azure Cosmos DB AI job support', 'azure-cosmos-db-ai-job-support')],
  [A('Azure managed Redis AI job support', 'azure-managed-redis-ai-job-support'), AGENT_HUB_LINK],
);

export const azureSearchRagPages: LandingPageConfig[] = [
  searchHub,
  vectorSearch,
  hybridSearch,
  semanticRanker,
  integratedVectorization,
  agenticRetrieval,
  knowledgeAgents,
  knowledgeSources,
  answerSynthesis,
  searchIndexer,
  searchRag,
  searchProduction,
  searchTroubleshooting,
  ragHub,
  foundryRag,
  enterpriseRag,
  foundryAgentRag,
  ragProduction,
  ragTroubleshooting,
  cosmosVector,
  pgvector,
  managedRedis,
  cosmosAgentState,
];
