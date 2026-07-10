import type { LandingPageConfig, LandingRelatedLink, LandingFaqItem } from '../landing-pages';
import {
  aimlPage,
  relatedLinks,
  techHighlights,
  techFaqs,
  EXISTING,
  HUB_LINK,
  PRODUCTION_LINK,
} from './shared';

// ─── Phase 8: AI/ML technology pages ────────────────────────────────────────

interface TechInput {
  slug: string;
  name: string;
  category: string;
  whatFor: string;
  problems: [string, string, string];
  topics: [string, string];
  scenario: string;
  relatedTech: LandingRelatedLink[];
  relatedRoles?: LandingRelatedLink[];
  interviewLink?: LandingRelatedLink;
  extraFaq?: LandingFaqItem;
  titleShort?: string;
}

const defaultRoles: LandingRelatedLink[] = [
  { label: 'AI Engineer job support', href: '/ai-engineer-job-support/' },
  { label: 'ML Engineer job support', href: '/machine-learning-engineer-job-support/' },
  { label: 'MLOps Engineer job support', href: '/mlops-engineer-job-support/' },
];

const countryLinks: LandingRelatedLink[] = [
  { label: 'AI/ML job support USA', href: '/usa-ai-ml-job-support/' },
  { label: 'AI/ML job support UK', href: '/uk-ai-ml-job-support/' },
  { label: 'AI/ML job support Canada', href: '/canada-ai-ml-job-support/' },
];

function buildTechPage(i: TechInput): LandingPageConfig {
  const roles = i.relatedRoles ?? defaultRoles;
  const interview = i.interviewLink ?? { label: 'AI/ML interview proxy USA', href: '/ai-ml-interview-proxy-support-usa/' };
  const short = i.titleShort ?? i.name;
  return aimlPage({
    slug: i.slug,
    title: `${short} Job Support — Real-Time Expert Help`,
    description: `Real-time ${i.name} job support: project help, production issue fixes, and interview support. ${i.whatFor} Same-day help for AI/ML professionals.`.slice(0, 154),
    keywords: [
      `${i.name} job support`, `${i.name} support`, `${i.name} help`,
      `${i.name} production support`, `${i.name} interview support`, `${i.name} project support`,
    ],
    h1: `${i.name} Job Support — Real-Time Project, Production & Interview Help`,
    tagline: `Hands-on ${i.name} support on your real tickets — ${i.category}. Project help, production firefighting, and live interview assistance.`,
    heroEyebrow: `${short} Support — 2026`,
    painIntro: `Stuck on ${i.name} in a real project? ${i.whatFor} When it breaks, blocks a release, or shows up in an interview, you need an expert who has shipped it in production — not a tutorial.`,
    heroVariant: `Our in-house engineers work on ${i.name} in real projects every day. We help with design and implementation, debugging, performance and cost tuning, production incidents, and interview preparation — during your working hours, same-day, and fully confidentially.`,
    geoLine: `Supporting ${i.name} professionals across the USA, Canada, UK, Europe, Australia, Singapore, and worldwide.`,
    timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
    highlights: techHighlights,
    faqs: [...techFaqs(i.name, `${i.whatFor}`), ...(i.extraFaq ? [i.extraFaq] : [])],
    useCasesSection: {
      title: `${i.name} Situations We Help Resolve`,
      cases: [
        i.problems[0],
        i.problems[1],
        i.problems[2],
        `A live ${i.name} interview round covering ${i.topics[0]} and ${i.topics[1]}`,
        `Onboarding onto a project that uses ${i.name} — ${i.scenario}`,
        `A profile that needs to show real, production-grade ${i.name} depth to recruiters`,
      ],
    },
    proxySection: {
      title: `${i.name} Interview & Profile Support`,
      intro: `${i.name} comes up in both interviews and daily work. We prepare you for ${i.name} interview questions — ${i.topics[0]}, ${i.topics[1]}, and scenario-based rounds — and can provide live proxy interview support during the real thing, plus profile positioning so recruiters see your ${i.name} strength.`,
      points: [
        `Live guidance during ${i.name} technical rounds and system-design questions`,
        `Coverage of ${i.topics[0]} and ${i.topics[1]} with real project examples`,
        `Mock interviews calibrated to the role and company format`,
        `Profile positioning that surfaces your ${i.name} experience in recruiter searches`,
        `Real-time job support so you keep delivering once you land the role`,
      ],
    },
    bottomCTAHeading: `Need ${i.name} Job Support or Interview Help Now?`,
    bottomCTABody: `In-house experts available same-day for ${i.name} — project work, production fixes, or live interview guidance. Contact ProxyTechSupport on WhatsApp now.`,
    relatedLinks: relatedLinks({
      geoLinks: [HUB_LINK, countryLinks[0]],
      techLinks: i.relatedTech.slice(0, 2),
      problemLink: PRODUCTION_LINK,
      proxyLink: interview,
      additionalLinks: [
        ...i.relatedTech.slice(2),
        ...roles,
        interview,
        ...countryLinks.slice(1),
        HUB_LINK,
        PRODUCTION_LINK,
        EXISTING.aimlGuide,
        EXISTING.mlopsGuide,
        EXISTING.ragGuide,
      ],
    }),
  });
}

// Link shorthands
const L = (label: string, href: string): LandingRelatedLink => ({ label, href });
const genaiInterview = L('GenAI interview proxy support', '/genai-interview-proxy-support/');
const llmInterview = L('LLM interview proxy support', '/llm-interview-proxy-support/');
const ragInterview = L('RAG interview proxy support', '/rag-interview-proxy-support/');
const mlopsInterview = L('MLOps interview proxy support', '/mlops-interview-proxy-support/');
const dsInterview = L('Data science interview proxy support', '/data-science-interview-proxy-support/');

const T = (
  slug: string, name: string, category: string, whatFor: string,
  problems: [string, string, string], topics: [string, string], scenario: string,
  relatedTech: LandingRelatedLink[],
  opts: Partial<TechInput> = {},
): LandingPageConfig =>
  buildTechPage({ slug, name, category, whatFor, problems, topics, scenario, relatedTech, ...opts });

export const pythonAiMlJobSupport = T(
  'python-ai-ml-job-support', 'Python AI/ML', 'the core language of modern AI/ML',
  'Python powers nearly all AI/ML work — data processing, model training, and serving.',
  [
    'A NumPy/Pandas data-processing job that is slow, leaking memory, or producing wrong features',
    'A training script with environment, dependency, or CUDA issues that will not run reproducibly',
    'A Python inference service with latency, concurrency, or packaging problems in production',
  ],
  ['Python data structures and performance', 'ML libraries and idiomatic patterns'],
  'legacy notebooks and scripts you must extend safely',
  [L('Generative AI job support', '/generative-ai-job-support/'), L('PyTorch job support', '/pytorch-job-support/'), L('MLOps job support', '/mlops-job-support/')],
  { titleShort: 'Python AI/ML', relatedRoles: defaultRoles, interviewLink: L('Python AI/ML interview support', '/python-ai-ml-interview-support/') },
);

export const pythonGenaiJobSupport = T(
  'python-genai-job-support', 'Python GenAI', 'building GenAI apps in Python',
  'Python is the default stack for building GenAI applications with LLM SDKs and frameworks.',
  [
    'A Python GenAI app with flaky LLM calls, timeouts, or unhandled rate limits in production',
    'Token, cost, and context-window issues in a Python LLM pipeline',
    'Async/streaming and concurrency bugs in a Python GenAI service',
  ],
  ['LLM SDK usage in Python', 'prompt orchestration and streaming'],
  'an existing Python GenAI codebase using OpenAI or Azure OpenAI SDKs',
  [L('OpenAI API job support', '/openai-api-job-support/'), L('LangChain job support', '/langchain-job-support/'), L('Generative AI job support', '/generative-ai-job-support/')],
  { titleShort: 'Python GenAI', interviewLink: genaiInterview },
);

export const llmJobSupport = T(
  'llm-job-support', 'LLM', 'large language model application development',
  'LLMs power chatbots, copilots, extraction, and agents across the enterprise.',
  [
    'An LLM app producing inconsistent, off-tone, or non-compliant outputs in production',
    'Context-window, token-cost, and latency problems in a multi-step LLM pipeline',
    'Guardrail, safety, and evaluation gaps letting bad outputs reach users',
  ],
  ['LLM application architecture', 'prompting, context, and evaluation'],
  'an LLM app with tangled prompts and no evaluation harness',
  [L('Generative AI job support', '/generative-ai-job-support/'), L('RAG job support', '/rag-job-support/'), L('Prompt engineering job support', '/prompt-engineering-job-support/')],
  { interviewLink: llmInterview },
);

export const generativeAiJobSupport = T(
  'generative-ai-job-support', 'Generative AI', 'GenAI product and platform work',
  'Generative AI spans text, image, and multimodal generation in real products.',
  [
    'A GenAI feature that works in a demo but fails on real, messy production inputs',
    'Quality, safety, and cost trade-offs blocking a GenAI launch',
    'Scaling a GenAI prototype into a reliable, monitored production service',
  ],
  ['GenAI system design', 'evaluation, safety, and cost control'],
  'a GenAI prototype that must become production-grade',
  [L('LLM job support', '/llm-job-support/'), L('RAG job support', '/rag-job-support/'), L('Agentic AI job support', '/agentic-ai-job-support/')],
  { interviewLink: genaiInterview },
);

export const ragJobSupport = T(
  'rag-job-support', 'RAG', 'retrieval-augmented generation systems',
  'RAG grounds LLM answers in your data through retrieval over a vector store.',
  [
    'A RAG pipeline returning irrelevant, stale, or hallucinated answers',
    'Poor retrieval quality from bad chunking, embeddings, or index configuration',
    'Latency and cost problems from oversized context and redundant retrieval',
  ],
  ['RAG architecture and retrieval design', 'chunking, embeddings, and evaluation'],
  'an existing RAG system whose answer quality has degraded',
  [L('Vector database job support', '/vector-database-job-support/'), L('LLM evaluation job support', '/llm-evaluation-job-support/'), L('LLM job support', '/llm-job-support/')],
  { interviewLink: ragInterview },
);

export const agenticAiJobSupport = T(
  'agentic-ai-job-support', 'Agentic AI', 'autonomous and tool-using AI agents',
  'Agentic AI systems plan, call tools, and act across multiple steps.',
  [
    'An agent that loops, stalls, or takes unsafe actions in production',
    'Unreliable tool-calling, state, and error-handling in an agent workflow',
    'Cost and latency blowups from long agent trajectories',
  ],
  ['agent architecture and tool use', 'planning, memory, and guardrails'],
  'a multi-step agent codebase that behaves unpredictably',
  [L('Multi-agent AI job support', '/multi-agent-ai-job-support/'), L('LangGraph job support', '/langgraph-job-support/'), L('CrewAI job support', '/crewai-job-support/')],
  { interviewLink: L('Agentic AI interview proxy support', '/agentic-ai-interview-proxy-support/') },
);

export const langchainJobSupport = T(
  'langchain-job-support', 'LangChain', 'LLM app orchestration with LangChain',
  'LangChain wires together LLMs, prompts, tools, memory, and retrieval.',
  [
    'A LangChain pipeline that is hard to debug, trace, or make reliable in production',
    'Chain/agent composition problems, callback issues, or version-migration breakage',
    'Latency and cost from inefficient chains and redundant LLM calls',
  ],
  ['LangChain chains, tools, and memory', 'retrieval and agent patterns'],
  'a large LangChain codebase mid-migration between versions',
  [L('LangGraph job support', '/langgraph-job-support/'), L('RAG job support', '/rag-job-support/'), L('LLM job support', '/llm-job-support/')],
  { interviewLink: L('LangChain & LangGraph interview support', '/langchain-langgraph-interview-support/') },
);

export const langgraphJobSupport = T(
  'langgraph-job-support', 'LangGraph', 'stateful agent graphs with LangGraph',
  'LangGraph models agent workflows as explicit, stateful graphs.',
  [
    'A LangGraph workflow with state, checkpointing, or concurrency bugs',
    'Non-deterministic routing or infinite loops in a graph-based agent',
    'Hard-to-observe failures in a production LangGraph deployment',
  ],
  ['LangGraph state and control flow', 'agent graph design and recovery'],
  'a LangGraph agent that fails intermittently under load',
  [L('LangChain job support', '/langchain-job-support/'), L('Agentic AI job support', '/agentic-ai-job-support/'), L('Multi-agent AI job support', '/multi-agent-ai-job-support/')],
  { interviewLink: L('LangChain & LangGraph interview support', '/langchain-langgraph-interview-support/') },
);

export const crewaiJobSupport = T(
  'crewai-job-support', 'CrewAI', 'role-based multi-agent orchestration',
  'CrewAI coordinates multiple role-based agents to complete tasks together.',
  [
    'A CrewAI crew where agents miscommunicate, duplicate work, or stall',
    'Task delegation, tool assignment, and output-parsing failures',
    'Cost and reliability problems scaling a CrewAI workflow to production',
  ],
  ['multi-agent orchestration', 'roles, tasks, and delegation'],
  'a CrewAI setup that works locally but breaks in production',
  [L('AutoGen job support', '/autogen-job-support/'), L('Multi-agent AI job support', '/multi-agent-ai-job-support/'), L('Agentic AI job support', '/agentic-ai-job-support/')],
  { interviewLink: L('Agentic AI interview proxy support', '/agentic-ai-interview-proxy-support/') },
);

export const autogenJobSupport = T(
  'autogen-job-support', 'AutoGen', 'conversational multi-agent systems',
  'AutoGen builds conversable agents that collaborate and use tools.',
  [
    'An AutoGen conversation that loops or fails to converge on a result',
    'Group-chat coordination, termination, and tool-execution issues',
    'Scaling and cost control for AutoGen agents in production',
  ],
  ['AutoGen agent patterns', 'group chat and termination logic'],
  'an AutoGen prototype that needs production hardening',
  [L('CrewAI job support', '/crewai-job-support/'), L('Multi-agent AI job support', '/multi-agent-ai-job-support/'), L('Agentic AI job support', '/agentic-ai-job-support/')],
  { interviewLink: L('Agentic AI interview proxy support', '/agentic-ai-interview-proxy-support/') },
);

export const openaiApiJobSupport = T(
  'openai-api-job-support', 'OpenAI API', 'building on the OpenAI platform',
  'The OpenAI API powers chat, tools, embeddings, and structured outputs.',
  [
    'OpenAI API rate-limit, retry, and timeout handling failing under load',
    'Structured output, function-calling, or tool-use bugs in production',
    'Runaway token cost and latency from inefficient OpenAI usage',
  ],
  ['OpenAI API features', 'function calling and structured outputs'],
  'an OpenAI-based service with brittle error handling',
  [L('Azure OpenAI job support', '/azure-openai-job-support/'), L('LLM job support', '/llm-job-support/'), L('Prompt engineering job support', '/prompt-engineering-job-support/')],
  { titleShort: 'OpenAI API', interviewLink: llmInterview },
);

export const azureOpenaiJobSupport = T(
  'azure-openai-job-support', 'Azure OpenAI', 'enterprise GenAI on Azure',
  'Azure OpenAI brings OpenAI models into enterprise Azure environments.',
  [
    'Azure OpenAI deployment, quota, and region-capacity issues in production',
    'Networking, private endpoint, and identity/RBAC problems blocking access',
    'Content-filter, cost, and latency tuning for enterprise Azure OpenAI apps',
  ],
  ['Azure OpenAI architecture', 'security, networking, and quotas'],
  'an enterprise Azure OpenAI deployment with governance constraints',
  [L('OpenAI API job support', '/openai-api-job-support/'), L('AWS Bedrock job support', '/aws-bedrock-job-support/'), L('.NET AI/ML job support', '/dotnet-ai-ml-job-support/')],
  { titleShort: 'Azure OpenAI', interviewLink: L('Azure OpenAI interview support', '/azure-openai-interview-support/') },
);

export const awsBedrockJobSupport = T(
  'aws-bedrock-job-support', 'AWS Bedrock', 'GenAI on AWS Bedrock',
  'AWS Bedrock provides managed foundation models and agents on AWS.',
  [
    'AWS Bedrock model access, throughput, and provisioned-capacity issues',
    'Bedrock Agents, Knowledge Bases, or Guardrails misbehaving in production',
    'IAM, VPC, and cost problems in a Bedrock deployment',
  ],
  ['Bedrock models and agents', 'Knowledge Bases and Guardrails'],
  'a Bedrock-based RAG or agent system that needs stabilizing',
  [L('Azure OpenAI job support', '/azure-openai-job-support/'), L('Google Vertex AI job support', '/google-vertex-ai-job-support/'), L('RAG job support', '/rag-job-support/')],
  { titleShort: 'AWS Bedrock', interviewLink: L('AWS Bedrock interview support', '/aws-bedrock-interview-support/') },
);

export const googleVertexAiJobSupport = T(
  'google-vertex-ai-job-support', 'Google Vertex AI', 'GenAI and ML on Vertex AI',
  'Vertex AI runs Gemini, training, and MLOps pipelines on Google Cloud.',
  [
    'Vertex AI endpoint, quota, or Gemini API issues in production',
    'Vertex pipelines, model registry, or feature store problems',
    'IAM, networking, and cost issues in a Vertex AI deployment',
  ],
  ['Vertex AI services', 'Gemini and pipeline design'],
  'a Vertex AI project spanning training and serving',
  [L('AWS Bedrock job support', '/aws-bedrock-job-support/'), L('MLOps job support', '/mlops-job-support/'), L('Model deployment job support', '/model-deployment-job-support/')],
  { titleShort: 'Vertex AI', interviewLink: mlopsInterview },
);

export const huggingFaceJobSupport = T(
  'hugging-face-job-support', 'Hugging Face', 'open models and the HF ecosystem',
  'Hugging Face hosts models, datasets, and the Transformers ecosystem.',
  [
    'Model loading, tokenizer, or dtype/device mismatch errors with HF models',
    'Inference performance and memory issues serving HF models in production',
    'Fine-tuning, PEFT, or dataset pipeline problems in the HF stack',
  ],
  ['Transformers and pipelines', 'model hub, datasets, and serving'],
  'an HF-based training or serving pipeline you inherited',
  [L('Transformers job support', '/transformers-job-support/'), L('PyTorch job support', '/pytorch-job-support/'), L('Fine-tuning job support', '/fine-tuning-job-support/')],
  { titleShort: 'Hugging Face' },
);

export const transformersJobSupport = T(
  'transformers-job-support', 'Transformers', 'transformer models and architectures',
  'Transformers underpin modern LLMs and many vision and NLP models.',
  [
    'Attention, positional-encoding, or masking bugs in a custom transformer',
    'OOM, throughput, or precision issues training/serving transformer models',
    'Tokenization and sequence-length problems degrading model quality',
  ],
  ['transformer architecture internals', 'attention, tokenization, and training'],
  'a custom transformer training loop that will not converge',
  [L('Hugging Face job support', '/hugging-face-job-support/'), L('PyTorch job support', '/pytorch-job-support/'), L('NLP job support', '/nlp-job-support/')],
);

export const pytorchJobSupport = T(
  'pytorch-job-support', 'PyTorch', 'deep learning with PyTorch',
  'PyTorch is the leading framework for research and production deep learning.',
  [
    'A PyTorch training run diverging, NaN-ing, or under-utilizing the GPU',
    'Distributed/DDP, mixed-precision, or data-loader bottlenecks',
    'TorchScript/ONNX export and serving problems in production',
  ],
  ['PyTorch autograd and training', 'distributed training and optimization'],
  'a PyTorch model that trains locally but fails at scale',
  [L('TensorFlow job support', '/tensorflow-job-support/'), L('Transformers job support', '/transformers-job-support/'), L('Model deployment job support', '/model-deployment-job-support/')],
);

export const tensorflowJobSupport = T(
  'tensorflow-job-support', 'TensorFlow', 'deep learning with TensorFlow/Keras',
  'TensorFlow and Keras power production deep learning at many enterprises.',
  [
    'A TensorFlow/Keras model with shape, graph, or gradient issues',
    'tf.data pipeline bottlenecks or TF-Serving deployment problems',
    'Mixed precision, TPU/GPU, or SavedModel export failures',
  ],
  ['TensorFlow/Keras APIs', 'tf.data and serving'],
  'a legacy TensorFlow codebase you must maintain and extend',
  [L('PyTorch job support', '/pytorch-job-support/'), L('Model deployment job support', '/model-deployment-job-support/'), L('Computer vision job support', '/computer-vision-job-support/')],
);

export const scikitLearnJobSupport = T(
  'scikit-learn-job-support', 'scikit-learn', 'classical ML with scikit-learn',
  'scikit-learn drives classical ML — pipelines, models, and evaluation.',
  [
    'A scikit-learn pipeline with leakage, bad CV, or misleading metrics',
    'Feature engineering, encoding, or imbalance problems hurting model quality',
    'Serialization, versioning, or serving issues moving a model to production',
  ],
  ['classical ML algorithms', 'pipelines, CV, and metrics'],
  'a scikit-learn model whose offline metrics do not match production',
  [L('Data scientist job support', '/data-scientist-job-support/'), L('MLOps job support', '/mlops-job-support/'), L('Time series forecasting job support', '/time-series-forecasting-job-support/')],
  { titleShort: 'scikit-learn', interviewLink: dsInterview },
);

export const mlopsJobSupport = T(
  'mlops-job-support', 'MLOps', 'productionizing and operating ML',
  'MLOps covers CI/CD, deployment, monitoring, and reliability for ML.',
  [
    'A broken ML CI/CD or training-to-deployment pipeline blocking releases',
    'Model registry, versioning, or reproducibility gaps causing incidents',
    'Missing monitoring letting drift and regressions reach production silently',
  ],
  ['MLOps architecture and CI/CD', 'deployment, registry, and monitoring'],
  'an ML platform with fragile, manual deployment steps',
  [L('MLflow job support', '/mlflow-job-support/'), L('Kubeflow job support', '/kubeflow-job-support/'), L('Model deployment job support', '/model-deployment-job-support/')],
  { interviewLink: mlopsInterview },
);

export const kubeflowJobSupport = T(
  'kubeflow-job-support', 'Kubeflow', 'ML pipelines on Kubernetes',
  'Kubeflow runs ML pipelines, training, and serving on Kubernetes.',
  [
    'Kubeflow Pipeline failures, artifact passing, or component packaging issues',
    'KServe/serving, autoscaling, or GPU-scheduling problems',
    'Multi-tenant, RBAC, or resource-quota issues in a Kubeflow cluster',
  ],
  ['Kubeflow Pipelines and components', 'Kubernetes-based training and serving'],
  'a Kubeflow deployment with flaky pipelines',
  [L('MLOps job support', '/mlops-job-support/'), L('MLflow job support', '/mlflow-job-support/'), L('Model deployment job support', '/model-deployment-job-support/')],
  { interviewLink: mlopsInterview },
);

export const mlflowJobSupport = T(
  'mlflow-job-support', 'MLflow', 'experiment tracking and model registry',
  'MLflow tracks experiments, packages models, and manages the registry.',
  [
    'MLflow tracking, artifact-store, or backend-store configuration problems',
    'Model registry staging/versioning confusion breaking deployments',
    'MLflow serving or packaging issues moving models to production',
  ],
  ['MLflow tracking and registry', 'model packaging and serving'],
  'an MLflow setup with inconsistent experiment tracking',
  [L('MLOps job support', '/mlops-job-support/'), L('Kubeflow job support', '/kubeflow-job-support/'), L('Model monitoring job support', '/model-monitoring-job-support/')],
  { interviewLink: mlopsInterview },
);

export const airflowMlPipelineJobSupport = T(
  'airflow-ml-pipeline-job-support', 'Airflow ML Pipeline', 'orchestrating ML data pipelines',
  'Airflow schedules and orchestrates data and ML pipelines at scale.',
  [
    'Airflow DAG failures, retries, or scheduling issues breaking ML pipelines',
    'Backfills, dependencies, and sensor problems delaying training data',
    'Resource, executor, or connection issues in a production Airflow deployment',
  ],
  ['Airflow DAG design', 'scheduling, backfills, and operators'],
  'an Airflow-orchestrated ML pipeline that fails intermittently',
  [L('MLOps job support', '/mlops-job-support/'), L('Databricks ML job support', '/databricks-ml-job-support/'), L('AI workflow orchestration job support', '/ai-workflow-orchestration-job-support/')],
  { titleShort: 'Airflow ML Pipeline', interviewLink: mlopsInterview },
);

export const databricksMlJobSupport = T(
  'databricks-ml-job-support', 'Databricks ML', 'the Databricks lakehouse for ML',
  'Databricks unifies data engineering and ML on the lakehouse.',
  [
    'Databricks job, cluster, or Delta Lake performance and cost problems',
    'MLflow-on-Databricks, Feature Store, or Unity Catalog issues',
    'Spark ML or notebook pipeline failures in production workflows',
  ],
  ['Databricks ML workflows', 'Delta Lake, Feature Store, and MLflow'],
  'a Databricks ML pipeline with slow, costly jobs',
  [L('MLflow job support', '/mlflow-job-support/'), L('Snowflake Cortex AI job support', '/snowflake-cortex-ai-job-support/'), L('MLOps job support', '/mlops-job-support/')],
  { titleShort: 'Databricks ML', interviewLink: mlopsInterview },
);

export const snowflakeCortexAiJobSupport = T(
  'snowflake-cortex-ai-job-support', 'Snowflake Cortex AI', 'AI inside Snowflake',
  'Snowflake Cortex brings LLM and ML functions into the data cloud.',
  [
    'Cortex LLM function cost, latency, or output-quality issues at scale',
    'Cortex Search / vector and embedding problems in Snowflake',
    'Warehouse sizing, governance, and integration issues for Cortex AI',
  ],
  ['Snowflake Cortex functions', 'in-database LLM and search'],
  'a Snowflake Cortex AI feature that must scale reliably',
  [L('Databricks ML job support', '/databricks-ml-job-support/'), L('Vector database job support', '/vector-database-job-support/'), L('RAG job support', '/rag-job-support/')],
  { titleShort: 'Snowflake Cortex AI' },
);

export const vectorDatabaseJobSupport = T(
  'vector-database-job-support', 'Vector Database', 'embeddings and similarity search',
  'Vector databases store embeddings and power retrieval for RAG and search.',
  [
    'Poor recall/precision from wrong index type, metric, or dimensionality',
    'Latency, memory, or scaling problems in a production vector store',
    'Stale or inconsistent embeddings degrading retrieval quality',
  ],
  ['vector indexing and ANN search', 'embeddings and retrieval tuning'],
  'a vector store whose search results have degraded over time',
  [L('Pinecone job support', '/pinecone-job-support/'), L('Qdrant job support', '/qdrant-job-support/'), L('RAG job support', '/rag-job-support/')],
  { titleShort: 'Vector Database', interviewLink: ragInterview },
);

export const pineconeJobSupport = T(
  'pinecone-job-support', 'Pinecone', 'managed vector search with Pinecone',
  'Pinecone provides a managed vector database for production retrieval.',
  [
    'Pinecone index configuration, namespace, or metadata-filter issues',
    'Latency, pod/serverless sizing, or cost problems at scale',
    'Upsert consistency and stale-vector issues hurting RAG quality',
  ],
  ['Pinecone index design', 'metadata filtering and scaling'],
  'a Pinecone-backed RAG system needing retrieval tuning',
  [L('Vector database job support', '/vector-database-job-support/'), L('Qdrant job support', '/qdrant-job-support/'), L('RAG job support', '/rag-job-support/')],
  { interviewLink: ragInterview },
);

export const qdrantJobSupport = T(
  'qdrant-job-support', 'Qdrant', 'open-source vector search with Qdrant',
  'Qdrant is a high-performance open-source vector database.',
  [
    'Qdrant collection, payload-index, or quantization configuration issues',
    'Memory, sharding, or performance problems at scale',
    'Filtering and hybrid-search quality issues in production',
  ],
  ['Qdrant collections and filtering', 'quantization and scaling'],
  'a self-hosted Qdrant cluster needing performance tuning',
  [L('Vector database job support', '/vector-database-job-support/'), L('Weaviate job support', '/weaviate-job-support/'), L('RAG job support', '/rag-job-support/')],
  { interviewLink: ragInterview },
);

export const weaviateJobSupport = T(
  'weaviate-job-support', 'Weaviate', 'vector + hybrid search with Weaviate',
  'Weaviate combines vector and keyword search with built-in modules.',
  [
    'Weaviate schema, module, or vectorizer configuration problems',
    'Hybrid-search relevance tuning and scaling issues',
    'Memory, replication, or performance problems in production',
  ],
  ['Weaviate schema and modules', 'hybrid search and scaling'],
  'a Weaviate deployment with relevance and scaling issues',
  [L('Vector database job support', '/vector-database-job-support/'), L('Qdrant job support', '/qdrant-job-support/'), L('ChromaDB job support', '/chromadb-job-support/')],
  { interviewLink: ragInterview },
);

export const chromadbJobSupport = T(
  'chromadb-job-support', 'ChromaDB', 'lightweight vector search with Chroma',
  'ChromaDB is a developer-friendly embedded/served vector database.',
  [
    'ChromaDB persistence, collection, or embedding-function issues',
    'Scaling limits moving Chroma from prototype to production',
    'Consistency and performance problems in a served Chroma deployment',
  ],
  ['ChromaDB collections and persistence', 'embedding functions and scaling'],
  'a Chroma-based prototype that must scale up',
  [L('Vector database job support', '/vector-database-job-support/'), L('Pinecone job support', '/pinecone-job-support/'), L('RAG job support', '/rag-job-support/')],
  { titleShort: 'ChromaDB', interviewLink: ragInterview },
);

export const llmEvaluationJobSupport = T(
  'llm-evaluation-job-support', 'LLM Evaluation', 'measuring LLM/RAG quality',
  'LLM evaluation quantifies quality, safety, and regressions objectively.',
  [
    'No reliable eval harness, so LLM/RAG quality changes go undetected',
    'Misleading metrics or LLM-as-judge bias giving false confidence',
    'Regressions slipping into production without an eval gate',
  ],
  ['LLM/RAG evaluation methods', 'metrics, datasets, and LLM-as-judge'],
  'an LLM app with no systematic evaluation in place',
  [L('LLM job support', '/llm-job-support/'), L('RAG job support', '/rag-job-support/'), L('Prompt engineering job support', '/prompt-engineering-job-support/')],
  { titleShort: 'LLM Evaluation', interviewLink: llmInterview },
);

export const promptEngineeringJobSupport = T(
  'prompt-engineering-job-support', 'Prompt Engineering', 'reliable prompting at scale',
  'Prompt engineering makes LLM outputs accurate, structured, and consistent.',
  [
    'Prompts that work sometimes but fail unpredictably in production',
    'Weak structure/formatting causing downstream parsing failures',
    'Prompt drift and regressions when models or data change',
  ],
  ['prompt design patterns', 'structured output and robustness'],
  'a codebase of ad-hoc prompts that need systematizing',
  [L('LLM job support', '/llm-job-support/'), L('LLM evaluation job support', '/llm-evaluation-job-support/'), L('Generative AI job support', '/generative-ai-job-support/')],
  { titleShort: 'Prompt Engineering', interviewLink: genaiInterview },
);

export const fineTuningJobSupport = T(
  'fine-tuning-job-support', 'Fine-Tuning', 'adapting models to your data',
  'Fine-tuning specializes models for your domain, format, or task.',
  [
    'A fine-tune that overfits, forgets, or fails to beat the base model',
    'Data preparation, formatting, or contamination problems in the training set',
    'Serving and cost issues deploying a fine-tuned model',
  ],
  ['fine-tuning strategy and data prep', 'evaluation and deployment'],
  'a fine-tuning effort that is not improving results',
  [L('LoRA & QLoRA job support', '/lora-qlora-job-support/'), L('Hugging Face job support', '/hugging-face-job-support/'), L('LLM evaluation job support', '/llm-evaluation-job-support/')],
  { titleShort: 'Fine-Tuning', interviewLink: llmInterview },
);

export const loraQloraJobSupport = T(
  'lora-qlora-job-support', 'LoRA & QLoRA', 'parameter-efficient fine-tuning',
  'LoRA/QLoRA fine-tune large models cheaply with adapters and quantization.',
  [
    'LoRA/QLoRA runs with poor quality, instability, or OOM errors',
    'Rank, target-module, or quantization settings hurting results',
    'Adapter merging and serving problems in production',
  ],
  ['PEFT/LoRA fundamentals', 'quantization and adapter serving'],
  'a QLoRA training run that will not fit or converge',
  [L('Fine-tuning job support', '/fine-tuning-job-support/'), L('Hugging Face job support', '/hugging-face-job-support/'), L('PyTorch job support', '/pytorch-job-support/')],
  { titleShort: 'LoRA & QLoRA', interviewLink: llmInterview },
);

export const modelDeploymentJobSupport = T(
  'model-deployment-job-support', 'Model Deployment', 'serving models in production',
  'Model deployment turns a trained model into a reliable, scalable service.',
  [
    'A model endpoint with latency, timeout, or cold-start problems',
    'Packaging, dependency, or hardware/GPU issues in serving',
    'Autoscaling, batching, and cost problems under real traffic',
  ],
  ['model serving architectures', 'scaling, batching, and hardware'],
  'a model that trains well but is hard to serve reliably',
  [L('Model monitoring job support', '/model-monitoring-job-support/'), L('MLOps job support', '/mlops-job-support/'), L('AI production debugging support', '/ai-production-debugging-support/')],
  { titleShort: 'Model Deployment', interviewLink: mlopsInterview },
);

export const modelMonitoringJobSupport = T(
  'model-monitoring-job-support', 'Model Monitoring', 'observability for ML in production',
  'Model monitoring detects drift, degradation, and incidents before users do.',
  [
    'No drift/quality monitoring, so regressions surface as business impact',
    'Alerting gaps and noisy signals hiding real model problems',
    'Missing data-quality and feature monitoring upstream of the model',
  ],
  ['drift and performance monitoring', 'alerting and observability design'],
  'a production model with no meaningful monitoring',
  [L('Model deployment job support', '/model-deployment-job-support/'), L('AI production debugging support', '/ai-production-debugging-support/'), L('MLOps job support', '/mlops-job-support/')],
  { titleShort: 'Model Monitoring', interviewLink: mlopsInterview },
);

export const aiProductionDebuggingSupport = T(
  'ai-production-debugging-support', 'AI Production Debugging', 'firefighting live AI issues',
  'AI production debugging finds and fixes root causes fast during incidents.',
  [
    'A live AI incident — accuracy drop, latency spike, or wrong outputs — needing root cause now',
    'Intermittent, hard-to-reproduce failures in an AI service',
    'A regression after a model, data, or config change that must be isolated',
  ],
  ['systematic AI debugging', 'root-cause analysis under pressure'],
  'a production AI system failing intermittently with unclear cause',
  [L('AI/ML production support', '/ai-ml-production-support/'), L('Model monitoring job support', '/model-monitoring-job-support/'), L('MLOps job support', '/mlops-job-support/')],
  { titleShort: 'AI Production Debugging', interviewLink: mlopsInterview },
);

export const computerVisionJobSupport = T(
  'computer-vision-job-support', 'Computer Vision', 'image and video AI',
  'Computer vision powers detection, classification, OCR, and segmentation.',
  [
    'A CV model with poor accuracy on real-world images or edge cases',
    'Data/annotation quality, augmentation, or class-imbalance problems',
    'Inference speed, memory, or edge-deployment issues for a CV model',
  ],
  ['CV architectures and training', 'data, augmentation, and deployment'],
  'a computer vision model that underperforms in the field',
  [L('PyTorch job support', '/pytorch-job-support/'), L('TensorFlow job support', '/tensorflow-job-support/'), L('Model deployment job support', '/model-deployment-job-support/')],
  { titleShort: 'Computer Vision', interviewLink: dsInterview },
);

export const nlpJobSupport = T(
  'nlp-job-support', 'NLP', 'natural language processing',
  'NLP covers classification, extraction, NER, and text understanding.',
  [
    'An NLP model with poor accuracy on domain-specific or noisy text',
    'Tokenization, preprocessing, or language/encoding issues',
    'Scaling and latency problems serving an NLP pipeline',
  ],
  ['NLP techniques and models', 'preprocessing, embeddings, and evaluation'],
  'an NLP pipeline that struggles on real domain text',
  [L('Transformers job support', '/transformers-job-support/'), L('LLM job support', '/llm-job-support/'), L('Hugging Face job support', '/hugging-face-job-support/')],
  { interviewLink: dsInterview },
);

export const recommendationSystemJobSupport = T(
  'recommendation-system-job-support', 'Recommendation System', 'personalization and ranking',
  'Recommendation systems drive personalization, ranking, and discovery.',
  [
    'A recommender with poor relevance, cold-start, or popularity-bias issues',
    'Offline-online metric gaps and evaluation problems',
    'Latency, feature-freshness, or scaling issues in serving',
  ],
  ['recommender architectures', 'candidate generation, ranking, and evaluation'],
  'a recommender whose online performance lags offline metrics',
  [L('Data scientist job support', '/data-scientist-job-support/'), L('Vector database job support', '/vector-database-job-support/'), L('MLOps job support', '/mlops-job-support/')],
  { titleShort: 'Recommendation System', interviewLink: dsInterview },
);

export const timeSeriesForecastingJobSupport = T(
  'time-series-forecasting-job-support', 'Time Series Forecasting', 'forecasting and anomaly detection',
  'Time-series forecasting drives demand, finance, and operations planning.',
  [
    'A forecast model with poor accuracy, drift, or unstable predictions',
    'Feature engineering, seasonality, or leakage problems in time series',
    'Backtesting and evaluation issues giving misleading forecast quality',
  ],
  ['forecasting methods', 'feature engineering and backtesting'],
  'a forecasting pipeline whose accuracy has degraded',
  [L('Data scientist job support', '/data-scientist-job-support/'), L('scikit-learn job support', '/scikit-learn-job-support/'), L('MLOps job support', '/mlops-job-support/')],
  { titleShort: 'Time Series Forecasting', interviewLink: dsInterview },
);

export const aiApiIntegrationJobSupport = T(
  'ai-api-integration-job-support', 'AI API Integration', 'wiring AI into applications',
  'AI API integration connects LLMs and ML services into real applications.',
  [
    'Flaky AI API integrations with retries, timeouts, and rate limits',
    'Streaming, webhook, and async integration bugs',
    'Cost, caching, and fallback issues in an AI-integrated app',
  ],
  ['AI API integration patterns', 'resilience, streaming, and caching'],
  'an app whose AI API integration is brittle',
  [L('OpenAI API job support', '/openai-api-job-support/'), L('AI workflow orchestration job support', '/ai-workflow-orchestration-job-support/'), L('LLM job support', '/llm-job-support/')],
  { titleShort: 'AI API Integration', interviewLink: genaiInterview },
);

export const aiWorkflowOrchestrationJobSupport = T(
  'ai-workflow-orchestration-job-support', 'AI Workflow Orchestration', 'orchestrating AI pipelines',
  'AI workflow orchestration coordinates multi-step AI and data pipelines.',
  [
    'A multi-step AI workflow that fails, stalls, or is hard to observe',
    'State, retry, and idempotency problems across pipeline steps',
    'Cost and latency issues in an orchestrated AI pipeline',
  ],
  ['workflow orchestration design', 'state, retries, and observability'],
  'an AI pipeline with fragile orchestration',
  [L('AI API integration job support', '/ai-api-integration-job-support/'), L('Airflow ML Pipeline job support', '/airflow-ml-pipeline-job-support/'), L('Multi-agent AI job support', '/multi-agent-ai-job-support/')],
  { titleShort: 'AI Workflow Orchestration', interviewLink: mlopsInterview },
);

export const multiAgentAiJobSupport = T(
  'multi-agent-ai-job-support', 'Multi-Agent AI', 'coordinated multi-agent systems',
  'Multi-agent AI coordinates specialized agents to solve complex tasks.',
  [
    'Multi-agent systems where agents conflict, loop, or lose coordination',
    'Communication, memory, and shared-state problems across agents',
    'Cost, latency, and reliability issues scaling multiple agents',
  ],
  ['multi-agent coordination', 'communication, memory, and orchestration'],
  'a multi-agent system that is unpredictable in production',
  [L('Agentic AI job support', '/agentic-ai-job-support/'), L('CrewAI job support', '/crewai-job-support/'), L('LangGraph job support', '/langgraph-job-support/')],
  { titleShort: 'Multi-Agent AI', interviewLink: L('Agentic AI interview proxy support', '/agentic-ai-interview-proxy-support/') },
);

export const mcpServerAiJobSupport = T(
  'mcp-server-ai-job-support', 'MCP Server', 'Model Context Protocol servers',
  'MCP servers expose tools and data to AI agents through a standard protocol.',
  [
    'An MCP server with tool-registration, schema, or transport issues',
    'Auth, permission, and security problems exposing tools via MCP',
    'Reliability and versioning issues integrating MCP with agents',
  ],
  ['MCP concepts and tool design', 'transport, auth, and integration'],
  'an MCP server integration that is unreliable',
  [L('Agentic AI job support', '/agentic-ai-job-support/'), L('Multi-agent AI job support', '/multi-agent-ai-job-support/'), L('AI API integration job support', '/ai-api-integration-job-support/')],
  { titleShort: 'MCP Server', interviewLink: L('Agentic AI interview proxy support', '/agentic-ai-interview-proxy-support/') },
);

export const aiSecurityGovernanceJobSupport = T(
  'ai-security-governance-job-support', 'AI Security & Governance', 'securing and governing AI',
  'AI security and governance manage risk, compliance, and safe AI operation.',
  [
    'Prompt-injection, data-leakage, or jailbreak risks in an LLM app',
    'Missing access controls, audit trails, or PII handling for AI systems',
    'Governance gaps blocking an AI system from enterprise approval',
  ],
  ['AI security threats', 'governance, compliance, and controls'],
  'an AI system that must pass security and governance review',
  [L('Responsible AI job support', '/responsible-ai-job-support/'), L('LLM job support', '/llm-job-support/'), L('AI/ML production support', '/ai-ml-production-support/')],
  { titleShort: 'AI Security & Governance' },
);

export const responsibleAiJobSupport = T(
  'responsible-ai-job-support', 'Responsible AI', 'fairness, safety, and compliance',
  'Responsible AI addresses fairness, transparency, safety, and regulation.',
  [
    'Bias, fairness, or explainability gaps flagged in an AI system',
    'Safety, content, and misuse controls needed before launch',
    'EU AI Act / regulatory documentation and risk-classification needs',
  ],
  ['responsible AI principles', 'fairness, safety, and regulation'],
  'an AI system needing responsible-AI and compliance work',
  [L('AI security & governance job support', '/ai-security-governance-job-support/'), L('LLM evaluation job support', '/llm-evaluation-job-support/'), L('Model monitoring job support', '/model-monitoring-job-support/')],
  { titleShort: 'Responsible AI' },
);

// ─── Batch export ────────────────────────────────────────────────────────────

export const aimlTechPages: LandingPageConfig[] = [
  pythonAiMlJobSupport, pythonGenaiJobSupport, llmJobSupport, generativeAiJobSupport, ragJobSupport,
  agenticAiJobSupport, langchainJobSupport, langgraphJobSupport, crewaiJobSupport, autogenJobSupport,
  openaiApiJobSupport, azureOpenaiJobSupport, awsBedrockJobSupport, googleVertexAiJobSupport,
  huggingFaceJobSupport, transformersJobSupport, pytorchJobSupport, tensorflowJobSupport,
  scikitLearnJobSupport, mlopsJobSupport, kubeflowJobSupport, mlflowJobSupport,
  airflowMlPipelineJobSupport, databricksMlJobSupport, snowflakeCortexAiJobSupport,
  vectorDatabaseJobSupport, pineconeJobSupport, qdrantJobSupport, weaviateJobSupport, chromadbJobSupport,
  llmEvaluationJobSupport, promptEngineeringJobSupport, fineTuningJobSupport, loraQloraJobSupport,
  modelDeploymentJobSupport, modelMonitoringJobSupport, aiProductionDebuggingSupport,
  computerVisionJobSupport, nlpJobSupport, recommendationSystemJobSupport, timeSeriesForecastingJobSupport,
  aiApiIntegrationJobSupport, aiWorkflowOrchestrationJobSupport, multiAgentAiJobSupport,
  mcpServerAiJobSupport, aiSecurityGovernanceJobSupport, responsibleAiJobSupport,
];
