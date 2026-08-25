import type { LandingPageConfig } from '../landing-pages';
import type { LandingRelatedLink } from '../landing-pages';
import {
  awsServicePage,
  relatedLinks,
  awsServiceFaqs,
  EXISTING,
  AWS_HUB_LINK,
  BEDROCK_HUB_LINK,
  KB_RAG_HUB_LINK,
  SAGEMAKER_AI_HUB_LINK,
} from './shared';

// Shared related-links for AWS AI data + vector service pages.
const dataRelated = (self: string, extra: LandingRelatedLink[] = []) =>
  relatedLinks({
    geoLinks: [AWS_HUB_LINK, KB_RAG_HUB_LINK],
    techLinks: [BEDROCK_HUB_LINK, SAGEMAKER_AI_HUB_LINK],
    problemLink: { label: 'Bedrock RAG troubleshooting', href: '/amazon-bedrock-rag-troubleshooting-support/' },
    proxyLink: EXISTING.ragProxy,
    additionalLinks: [
      { label: 'OpenSearch vector search', href: '/amazon-opensearch-vector-search-job-support/' },
      { label: 'Aurora pgvector RAG', href: '/aurora-postgresql-pgvector-job-support/' },
      { label: 'Amazon Redshift AI', href: '/amazon-redshift-ai-job-support/' },
      { label: 'AWS Glue for ML', href: '/aws-glue-ml-job-support/' },
      KB_RAG_HUB_LINK, EXISTING.vectorDb,
      ...extra,
    ].filter((l) => l.href !== self),
  });

// ─── OpenSearch vector search ────────────────────────────────────────────────

export const openSearchVectorSearch: LandingPageConfig = awsServicePage({
  slug: 'amazon-opensearch-vector-search-job-support',
  title: 'Amazon OpenSearch Vector Search Support — Serverless RAG & Hybrid Search',
  description:
    'Real-time Amazon OpenSearch vector search support: OpenSearch Serverless, k-NN vector indexing, semantic and hybrid search, embeddings, Bedrock Knowledge Base integration, and production vector search on AWS.',
  keywords: [
    'OpenSearch vector search support', 'OpenSearch Serverless vector', 'OpenSearch k-NN',
    'OpenSearch hybrid search', 'Bedrock OpenSearch RAG', 'OpenSearch semantic search',
  ],
  h1: 'Amazon OpenSearch Vector Search Support — Production RAG Retrieval',
  tagline:
    'OpenSearch (and OpenSearch Serverless) is the default vector store for Bedrock Knowledge Bases. We help you index, tune, and scale it.',
  heroEyebrow: 'OpenSearch Vector Search',
  painIntro:
    'Vector search returning poor matches, an OpenSearch Serverless collection misconfigured, or hybrid search not blending keyword and vector well? Retrieval quality lives here.',
  heroVariant:
    'Amazon OpenSearch Service and OpenSearch Serverless provide k-NN vector indexing for semantic and hybrid search — the most common vector store behind Bedrock Knowledge Bases. We help you design vector indices (dimensions, engine, distance metric), configure OpenSearch Serverless collections and capacity, blend keyword and vector for hybrid search, tune relevance and reranking, integrate embeddings from Bedrock, and debug index and query performance for production RAG.',
  faqs: awsServiceFaqs('Amazon OpenSearch vector search', 'We help you design vector indices, configure OpenSearch Serverless, tune semantic and hybrid search, and integrate with Bedrock Knowledge Bases.'),
  relatedLinks: dataRelated('/amazon-opensearch-vector-search-job-support/', [{ label: 'OpenSearch vs pgvector', href: '/opensearch-vs-pgvector-job-support/' }]),
});

// ─── Aurora PostgreSQL pgvector ──────────────────────────────────────────────

export const auroraPgvector: LandingPageConfig = awsServicePage({
  slug: 'aurora-postgresql-pgvector-job-support',
  title: 'Aurora PostgreSQL pgvector Support — SQL-Native RAG on AWS',
  description:
    'Real-time Amazon Aurora PostgreSQL pgvector support: vector columns, indexing (HNSW/IVFFlat), embeddings, Bedrock RAG integration, and SQL-native retrieval for production GenAI on AWS.',
  keywords: [
    'Aurora pgvector support', 'Aurora PostgreSQL vector', 'pgvector RAG AWS',
    'Aurora Bedrock RAG', 'pgvector HNSW', 'SQL vector search AWS',
  ],
  h1: 'Amazon Aurora PostgreSQL pgvector Support — Keep RAG in Your Database',
  tagline:
    'If your data already lives in Postgres, pgvector on Aurora keeps RAG SQL-native. We help you index, tune, and integrate it with Bedrock.',
  heroEyebrow: 'Aurora PostgreSQL pgvector',
  painIntro:
    'Slow vector queries, the wrong index type, or unsure whether pgvector or OpenSearch fits your workload? Aurora pgvector is powerful when tuned correctly.',
  heroVariant:
    'Amazon Aurora PostgreSQL with the pgvector extension lets you store embeddings alongside relational data and run vector similarity search in SQL — a natural fit when your data already lives in Postgres. We help you design vector columns and indexes (HNSW vs IVFFlat), tune parameters for recall and latency, generate and store embeddings from Bedrock, integrate with Bedrock Knowledge Bases where supported, and decide between Aurora pgvector and OpenSearch for your workload.',
  faqs: awsServiceFaqs('Aurora PostgreSQL pgvector', 'We help you design vector columns and indexes, tune recall/latency, integrate Bedrock embeddings, and choose between pgvector and OpenSearch.'),
  relatedLinks: dataRelated('/aurora-postgresql-pgvector-job-support/', [{ label: 'OpenSearch vs pgvector', href: '/opensearch-vs-pgvector-job-support/' }]),
});

// ─── Amazon S3 for AI data ───────────────────────────────────────────────────

export const s3AiData: LandingPageConfig = awsServicePage({
  slug: 'amazon-s3-ai-data-job-support',
  title: 'Amazon S3 for AI Support — Training Data, Model Artifacts & Vectors',
  description:
    'Real-time Amazon S3 for AI support: training data and datasets, model artifacts, Bedrock and Knowledge Base data sources, S3 vector capabilities where available, and data organization for ML and GenAI on AWS.',
  keywords: [
    'Amazon S3 AI data support', 'S3 training data', 'S3 model artifacts',
    'S3 Bedrock Knowledge Base', 'S3 vectors', 'S3 ML datasets',
  ],
  h1: 'Amazon S3 for AI Support — The Data Foundation for Bedrock & SageMaker',
  tagline:
    'Almost every AWS AI workload starts and ends in S3. We help you organize data, artifacts, and Knowledge Base sources for performance and cost.',
  heroEyebrow: 'Amazon S3 for AI',
  painIntro:
    'Training data scattered, Knowledge Base sources hard to sync, or S3 costs creeping? Good data layout on S3 quietly determines AI performance and cost.',
  heroVariant:
    'Amazon S3 is the data foundation for AWS AI — training datasets, model artifacts, Bedrock Knowledge Base data sources, and (where available) S3 vector capabilities. We help you design bucket and prefix layout, partitioning, and lifecycle for ML datasets, organize model artifacts for SageMaker, structure Knowledge Base sources for reliable ingestion, apply the right storage classes and encryption (KMS), and control cost — so data access is fast, governed, and cheap.',
  faqs: awsServiceFaqs('Amazon S3 for AI', 'We help you organize training data, model artifacts, and Knowledge Base sources on S3, with the right layout, encryption, and cost controls.'),
  relatedLinks: dataRelated('/amazon-s3-ai-data-job-support/'),
});

// ─── AWS Glue for ML ─────────────────────────────────────────────────────────

export const glueMl: LandingPageConfig = awsServicePage({
  slug: 'aws-glue-ml-job-support',
  title: 'AWS Glue for ML Support — ETL & Data Prep for Bedrock & SageMaker',
  description:
    'Real-time AWS Glue for ML support: ETL for ML, Data Catalog, feature engineering pipelines, Glue with SageMaker and Bedrock, and AI data pipelines on AWS.',
  keywords: [
    'AWS Glue ML support', 'Glue SageMaker', 'Glue Bedrock', 'Glue ETL for ML',
    'Glue Data Catalog AI', 'AI data pipeline AWS',
  ],
  h1: 'AWS Glue for ML Support — Prepare Data for AI at Scale',
  tagline:
    'Models are only as good as their data pipeline. AWS Glue does the ETL and cataloging — we help you build it for ML and GenAI.',
  heroEyebrow: 'AWS Glue for ML',
  painIntro:
    'ETL jobs failing, the Data Catalog out of sync, or no clean feed from raw data into SageMaker and Bedrock? Data prep is where ML pipelines break.',
  heroVariant:
    'AWS Glue provides serverless ETL and a Data Catalog for building AI data pipelines. We help you design Glue jobs (Spark and Python) for feature engineering and data prep, manage the Data Catalog and schemas, feed prepared data into SageMaker training and Bedrock Knowledge Bases, integrate with Lakehouse and Athena, and debug job failures and performance. This is the data-engineering backbone of a reliable AWS AI workflow.',
  faqs: awsServiceFaqs('AWS Glue for ML', 'We help you build Glue ETL and feature pipelines, manage the Data Catalog, and feed prepared data into SageMaker and Bedrock.'),
  relatedLinks: dataRelated('/aws-glue-ml-job-support/', [{ label: 'Amazon Athena for AI', href: '/amazon-athena-ai-job-support/' }, { label: 'Amazon EMR for ML', href: '/amazon-emr-ml-job-support/' }]),
});

// ─── Amazon Athena for AI ────────────────────────────────────────────────────

export const athenaAi: LandingPageConfig = awsServicePage({
  slug: 'amazon-athena-ai-job-support',
  title: 'Amazon Athena for AI Support — Serverless Analytics for ML Data',
  description:
    'Real-time Amazon Athena for AI support: serverless SQL analytics for ML data exploration, Athena with SageMaker and Bedrock, federated queries, and AI data exploration on AWS.',
  keywords: [
    'Amazon Athena AI support', 'Athena SageMaker', 'Athena Bedrock', 'Athena ML data',
    'Athena serverless analytics', 'Athena federated query',
  ],
  h1: 'Amazon Athena for AI Support — Explore ML Data Without a Cluster',
  tagline:
    'Athena queries S3 and lakehouse data with serverless SQL. We help you use it for ML data exploration and AI pipelines.',
  heroEyebrow: 'Amazon Athena for AI',
  painIntro:
    'Need to explore and validate ML datasets on S3 quickly, or feed query results into SageMaker and Bedrock? Athena is the serverless SQL layer for that.',
  heroVariant:
    'Amazon Athena provides serverless, pay-per-query SQL over S3 and lakehouse data. We help you use Athena for ML data exploration and validation, run federated queries across sources, integrate results into SageMaker data prep and Bedrock workflows, optimize queries and partitioning for cost, and connect it to Glue Data Catalog and SageMaker Lakehouse for a governed analytics-to-AI path.',
  faqs: awsServiceFaqs('Amazon Athena for AI', 'We help you use serverless SQL for ML data exploration, federated queries, and feeding results into SageMaker and Bedrock, with query and cost optimization.'),
  relatedLinks: dataRelated('/amazon-athena-ai-job-support/', [{ label: 'AWS Glue for ML', href: '/aws-glue-ml-job-support/' }]),
});

// ─── Amazon EMR for ML ───────────────────────────────────────────────────────

export const emrMl: LandingPageConfig = awsServicePage({
  slug: 'amazon-emr-ml-job-support',
  title: 'Amazon EMR for ML Support — Spark ML & Large-Scale Feature Engineering',
  description:
    'Real-time Amazon EMR for ML support: Spark ML, PySpark, large-scale feature engineering, EMR with SageMaker, Bedrock data pipelines, and big-data ML processing on AWS.',
  keywords: [
    'Amazon EMR ML support', 'EMR Spark ML', 'EMR PySpark ML', 'EMR SageMaker',
    'EMR feature engineering', 'EMR Bedrock data pipeline',
  ],
  h1: 'Amazon EMR for ML Support — Big-Data Feature Engineering for AI',
  tagline:
    'When data is too big for a single machine, EMR and Spark do the feature engineering. We help you build and tune it for ML.',
  heroEyebrow: 'Amazon EMR for ML',
  painIntro:
    'Spark jobs failing at scale, PySpark feature pipelines too slow, or no clean handoff to SageMaker? Large-scale data prep needs EMR done right.',
  heroVariant:
    'Amazon EMR runs Spark and other big-data frameworks for large-scale ML feature engineering and processing. We help you build PySpark and Spark ML pipelines, tune cluster sizing and performance, handle large-scale feature engineering, hand off prepared data to SageMaker training, feed Bedrock data pipelines, and integrate with Lakehouse, Glue, and S3 — with cost control via right-sizing and spot.',
  faqs: awsServiceFaqs('Amazon EMR for ML', 'We help you build and tune PySpark and Spark ML pipelines for large-scale feature engineering and hand off to SageMaker and Bedrock.'),
  relatedLinks: dataRelated('/amazon-emr-ml-job-support/', [{ label: 'AWS Glue for ML', href: '/aws-glue-ml-job-support/' }]),
});

// ─── Amazon Redshift for AI ──────────────────────────────────────────────────

export const redshiftAi: LandingPageConfig = awsServicePage({
  slug: 'amazon-redshift-ai-job-support',
  title: 'Amazon Redshift for AI Support — Redshift ML, SageMaker & Bedrock',
  description:
    'Real-time Amazon Redshift for AI support: Redshift ML, Redshift with SageMaker and Bedrock, enterprise analytics plus GenAI, and warehouse-to-AI pipelines on AWS.',
  keywords: [
    'Amazon Redshift AI support', 'Redshift ML support', 'Redshift SageMaker', 'Redshift Bedrock',
    'Redshift GenAI', 'enterprise analytics AI AWS',
  ],
  h1: 'Amazon Redshift for AI Support — From Warehouse to GenAI',
  tagline:
    'Your analytics warehouse is a goldmine for AI. We help you use Redshift ML and connect Redshift to SageMaker and Bedrock.',
  heroEyebrow: 'Amazon Redshift for AI',
  painIntro:
    'Want predictions in SQL with Redshift ML, or to feed warehouse data into SageMaker and Bedrock RAG? The warehouse-to-AI path needs the right integration.',
  heroVariant:
    'Amazon Redshift is the enterprise data warehouse, and Redshift ML lets analysts build and run models with SQL (backed by SageMaker). We help you use Redshift ML for in-warehouse predictions, feed Redshift data into SageMaker training and Bedrock Knowledge Bases, integrate via SageMaker Lakehouse (Iceberg) and zero-ETL where available, and combine enterprise analytics with GenAI — governed and cost-aware.',
  faqs: awsServiceFaqs('Amazon Redshift for AI', 'We help you use Redshift ML, feed warehouse data into SageMaker and Bedrock, and integrate via Lakehouse and zero-ETL.'),
  relatedLinks: dataRelated('/amazon-redshift-ai-job-support/', [{ label: 'SageMaker Lakehouse', href: '/amazon-sagemaker-lakehouse-job-support/' }]),
});

// ─── Amazon DynamoDB for agents ──────────────────────────────────────────────

export const dynamoDbAgentState: LandingPageConfig = awsServicePage({
  slug: 'amazon-dynamodb-agent-state-job-support',
  title: 'Amazon DynamoDB for Agents Support — Session & Conversation State',
  description:
    'Real-time Amazon DynamoDB for GenAI support: agent and session state, conversation history, GenAI application metadata, and Bedrock application state at scale on AWS.',
  keywords: [
    'DynamoDB agent state support', 'DynamoDB session state', 'DynamoDB conversation history',
    'DynamoDB GenAI metadata', 'Bedrock application state', 'DynamoDB AI',
  ],
  h1: 'Amazon DynamoDB for Agents Support — Fast, Scalable Application State',
  tagline:
    'Agents and GenAI apps need low-latency state. DynamoDB is the natural fit. We help you model it right.',
  heroEyebrow: 'DynamoDB for GenAI',
  painIntro:
    'Conversation history and session state growing messy, or hot partitions under load? State modeling makes or breaks a GenAI app’s reliability and cost.',
  heroVariant:
    'Amazon DynamoDB provides single-digit-millisecond, scalable state for GenAI applications and agents — session and conversation state, application metadata, and Bedrock/AgentCore application state. We help you design partition and sort keys to avoid hot partitions, model conversation history and TTL, integrate with AgentCore Memory and Bedrock applications, and control read/write cost with the right capacity mode — so state is fast, durable, and cheap at scale.',
  faqs: awsServiceFaqs('Amazon DynamoDB for GenAI', 'We help you model session and conversation state, avoid hot partitions, integrate with AgentCore and Bedrock, and control cost.'),
  relatedLinks: dataRelated('/amazon-dynamodb-agent-state-job-support/', [{ label: 'AgentCore Memory', href: '/amazon-bedrock-agentcore-memory-job-support/' }]),
});

// ─── Amazon Neptune GraphRAG ─────────────────────────────────────────────────

export const neptuneGraphRag: LandingPageConfig = awsServicePage({
  slug: 'amazon-neptune-graphrag-job-support',
  title: 'Amazon Neptune GraphRAG Support — Knowledge Graphs for AI',
  description:
    'Real-time Amazon Neptune and Neptune Analytics support: knowledge graphs, GraphRAG, graph retrieval, agent knowledge, and graph-augmented retrieval for GenAI on AWS.',
  keywords: [
    'Amazon Neptune GraphRAG support', 'Neptune knowledge graph', 'GraphRAG AWS',
    'Neptune Analytics', 'graph retrieval AI', 'Neptune Bedrock',
  ],
  h1: 'Amazon Neptune GraphRAG Support — Add Graph Knowledge to Your AI',
  tagline:
    'When relationships matter, GraphRAG on Neptune beats plain vector search. We help you design and build it.',
  heroEyebrow: 'Amazon Neptune GraphRAG',
  painIntro:
    'Vector RAG missing answers that depend on relationships between entities? A knowledge graph with GraphRAG can capture what embeddings alone miss.',
  heroVariant:
    'Amazon Neptune (and Neptune Analytics) provides managed graph databases for knowledge graphs and graph analytics. We help you model a knowledge graph, build GraphRAG that combines graph traversal with vector retrieval, use graph knowledge for agents, and integrate Neptune with Bedrock so retrieval reflects relationships and structure — for use cases where entity connections drive the answer.',
  faqs: awsServiceFaqs('Amazon Neptune GraphRAG', 'We help you model knowledge graphs, build GraphRAG combining graph and vector retrieval, and integrate Neptune with Bedrock.'),
  relatedLinks: dataRelated('/amazon-neptune-graphrag-job-support/'),
});

// ─── Amazon Kendra ───────────────────────────────────────────────────────────

export const kendra: LandingPageConfig = awsServicePage({
  slug: 'amazon-kendra-job-support',
  title: 'Amazon Kendra Support — Intelligent Enterprise Search for AI',
  description:
    'Real-time Amazon Kendra support: intelligent enterprise search, connectors, retrieval for GenAI, and Kendra with Bedrock for RAG on AWS. Current positioning verified.',
  keywords: [
    'Amazon Kendra support', 'Kendra enterprise search', 'Kendra Bedrock RAG',
    'Kendra retrieval GenAI', 'Kendra connectors', 'Kendra AI search',
  ],
  h1: 'Amazon Kendra Support — Enterprise Search That Feeds GenAI',
  tagline:
    'Kendra brings managed, connector-rich enterprise search. We help you use it for retrieval and Bedrock RAG where it fits.',
  heroEyebrow: 'Amazon Kendra',
  painIntro:
    'Enterprise content spread across SharePoint, S3, databases, and SaaS apps, and you need it searchable for a GenAI assistant? Kendra’s connectors can help.',
  heroVariant:
    'Amazon Kendra provides intelligent enterprise search with a broad set of data-source connectors and semantic retrieval. We help you configure connectors and indexes, tune relevance, and use Kendra as a retriever for Bedrock RAG where it fits better than a raw vector store — and we help you decide between Kendra, Bedrock Knowledge Bases, and OpenSearch based on your sources and requirements. We verify current Kendra positioning and availability before recommending it for a new build.',
  faqs: awsServiceFaqs('Amazon Kendra', 'We help you configure connectors and indexes, tune relevance, and use Kendra as a retriever for Bedrock RAG, and choose between Kendra, Knowledge Bases, and OpenSearch.'),
  relatedLinks: dataRelated('/amazon-kendra-job-support/'),
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const awsDataVectorPages: LandingPageConfig[] = [
  openSearchVectorSearch,
  auroraPgvector,
  s3AiData,
  glueMl,
  athenaAi,
  emrMl,
  redshiftAi,
  dynamoDbAgentState,
  neptuneGraphRag,
  kendra,
];
