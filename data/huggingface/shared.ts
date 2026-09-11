import type {
  LandingPageConfig,
  LandingHighlight,
  LandingFaqItem,
  LandingRelatedLink,
  LandingRelatedLinks,
} from '../landing-pages';

/**
 * Shared building blocks for the additive Hugging Face / Generative AI / LLM
 * Engineering SEO cluster. Mirrors the AWS + Azure + AI/ML cluster approach:
 * category highlight sets + context-aware FAQ generators + thin `hfPage()` /
 * `hfServicePage()` builders that fill canonical + lastmod so each page object
 * stays compact while remaining unique (unique title, H1, intro, use cases,
 * FAQs, and internal links per page).
 *
 * Technical content reflects the verified Hugging Face ecosystem state through
 * September 2026:
 *   - Transformers v5 is the ecosystem "model-definition framework" (consumed by
 *     vLLM, SGLang, TGI, Axolotl, Unsloth, llama.cpp, MLX). `Trainer` is current.
 *   - TGI (Text Generation Inference) is in MAINTENANCE MODE — HF recommends
 *     vLLM / SGLang (and local llama.cpp / MLX) for new serving work.
 *   - The CLI is now `hf` (was `huggingface-cli`); Xet (`hf_xet`) replaces Git LFS.
 *   - Inference Providers (serverless, router.huggingface.co/v1, OpenAI-compatible)
 *     replaced the old serverless Inference API; Inference Endpoints = dedicated
 *     managed infra (TGI/TEI/custom containers); InferenceClient in huggingface_hub.
 *   - TRL v1: SFTTrainer, DPOTrainer, GRPOTrainer (stable, vLLM-accelerated),
 *     RewardTrainer, DistillationTrainer (stable); OpenEnv RL integration.
 *   - OpenEnv is EXPERIMENTAL; smolagents (CodeAgent/ToolCallingAgent) is pre-2.0.
 *   - Sentence Transformers v5+/v6: SentenceTransformer, CrossEncoder, SparseEncoder,
 *     multi-vector/ColBERT. TEI serves embeddings + rerankers. Kernels / Kernel Hub
 *     (get_kernel, kernelize). Trackio tracking. Lighteval eval. Optimum (+Neuron).
 *
 * NOTHING here renders on its own — these are data-only helpers consumed by the
 * batch files under data/huggingface/*.ts and surfaced through data/huggingface/index.ts.
 *
 * ADDITIVE RULE: these pages never duplicate already-live routes. The following
 * pre-existing routes are cross-linked, never recreated (see EXISTING below):
 *   /hugging-face-job-support/, /transformers-job-support/, /generative-ai-job-support/,
 *   /llm-job-support/, /llm-engineer-job-support/, /rag-job-support/,
 *   /fine-tuning-job-support/, /lora-qlora-job-support/, /pytorch-job-support/, etc.
 */

export const BASE_URL = 'https://proxytechsupport.com';
export const LASTMOD = '2026-09-10T12:00:00.000Z';

// ─── Category highlight sets ────────────────────────────────────────────────

export const jobSupportHighlights: LandingHighlight[] = [
  {
    title: 'Real-Time Hugging Face Proxy Job Support',
    description:
      'Live expert proxy job support during your working hours — Transformers training and inference, PEFT/LoRA/QLoRA fine-tuning, TRL post-training (SFT/DPO/GRPO), Sentence Transformers and RAG, Diffusers, smolagents, and deployment on Inference Endpoints, vLLM, or TGI. We help you ship real sprint deliverables. Technical support and mentoring, not replacing you.',
  },
  {
    title: 'Production LLM & GenAI Issue Support',
    description:
      'On-call help for real production incidents — CUDA out-of-memory, tokenizer/model mismatch, adapter-loading failures, gated-model 401/403 errors, Inference Endpoint cold starts and autoscaling, RAG retrieval collapse, quantization dtype errors, and slow tokens/sec. An engineer works the incident with you.',
  },
  {
    title: 'Interview & Candidate Marketing',
    description:
      'Hugging Face and LLM interview support, profile positioning, and candidate marketing for LLM Engineer, Generative AI Engineer, NLP Engineer, ML Engineer, and Applied AI roles — real-time interview support, recruiter readiness, and profile visibility around the Transformers/PEFT/TRL/RAG stack.',
  },
];

export const techHighlights: LandingHighlight[] = [
  {
    title: 'Real Project Support',
    description:
      'Hands-on help on real tickets — architecture, implementation, debugging, and code review on your actual Hugging Face stack (Transformers, PEFT, TRL, Diffusers, Sentence Transformers, huggingface_hub) during your working hours, not generic tutorials.',
  },
  {
    title: 'Production Issue Resolution',
    description:
      'Firefighting for live incidents — GPU memory, latency, throughput, quantization, adapter loading, endpoint reliability, retrieval quality, and cost problems resolved with an LLM engineer on the call.',
  },
  {
    title: 'Interview & Profile Support',
    description:
      'Hugging Face, LLM, and GenAI interview questions covered end-to-end plus profile positioning so you can both keep your job and land the next one.',
  },
];

export const roleHighlights: LandingHighlight[] = [
  {
    title: 'Role-Specific LLM Project Support',
    description:
      'Daily live support mapped to your exact responsibilities — the real Transformers, fine-tuning, RAG, agent, and deployment deliverables, tools, and stakeholders your role owns.',
  },
  {
    title: 'Production & On-Call Backup',
    description:
      'A Hugging Face expert beside you during incidents, model releases, and high-pressure delivery so you never face a production LLM issue alone.',
  },
  {
    title: 'Interview & Positioning',
    description:
      'Role-targeted Hugging Face and LLM proxy interview support, interview assistance, and profile positioning to move into and up within the role.',
  },
];

export const interviewHighlights: LandingHighlight[] = [
  {
    title: 'Hugging Face Proxy Interview Support',
    description:
      'Real-time technical proxy interview support (also searched as interview proxy support) on Transformers internals, fine-tuning (PEFT/LoRA/QLoRA/TRL), RAG and embeddings architecture, agents, and LLM serving/system design, plus coding rounds. You attend and complete your own interview.',
  },
  {
    title: 'Coding & System Design Coverage',
    description:
      'Live support across the real interview rounds — Transformers and generation, fine-tuning strategy, RAG retrieval design, inference/serving trade-offs (vLLM/TGI/Endpoints), and GPU optimization across FAANG, product, and consulting formats.',
  },
  {
    title: 'Get Interviews Scheduled',
    description:
      'Profile engineering, keyword targeting around the Hugging Face / LLM stack, and recruiter outreach so you actually get GenAI and LLM interview calls in the first place.',
  },
];

export const marketingHighlights: LandingHighlight[] = [
  {
    title: 'LLM / GenAI Profile Positioning',
    description:
      'Resume and LinkedIn engineered around the exact keywords GenAI recruiters search for — Transformers, PEFT/LoRA, TRL, RAG, Sentence Transformers, vLLM, Inference Endpoints, and measurable production impact.',
  },
  {
    title: 'Candidate Marketing & Outreach',
    description:
      'Active application support and recruiter outreach so your LLM/GenAI profile reaches hiring managers instead of sitting in an ATS black hole.',
  },
  {
    title: 'Interview Pipeline Support',
    description:
      'Once calls start coming, we back you with Hugging Face / LLM interview assistance and real-time job support to convert offers and keep the role.',
  },
];

// ─── Reusable anchor links to new HF hubs + existing site pages ─────────────

export const HF_HUB_LINK: LandingRelatedLink = { label: 'Hugging Face proxy job support hub', href: '/hugging-face-proxy-job-support/' };
export const HF_INTERVIEW_HUB_LINK: LandingRelatedLink = { label: 'Hugging Face proxy interview support', href: '/hugging-face-proxy-interview-support/' };
export const HF_PRODUCTION_LINK: LandingRelatedLink = { label: 'Hugging Face production support', href: '/hugging-face-production-support/' };
export const HF_ENGINEER_LINK: LandingRelatedLink = { label: 'Hugging Face Engineer job support', href: '/hugging-face-engineer-job-support/' };
export const HF_HUB_PLATFORM_LINK: LandingRelatedLink = { label: 'Hugging Face Hub & CLI job support', href: '/huggingface-hub-job-support/' };
export const HF_ENDPOINTS_LINK: LandingRelatedLink = { label: 'Inference Endpoints job support', href: '/huggingface-inference-endpoints-job-support/' };
export const HF_PROVIDERS_LINK: LandingRelatedLink = { label: 'Inference Providers job support', href: '/huggingface-inference-providers-job-support/' };
export const HF_SERVING_LINK: LandingRelatedLink = { label: 'LLM serving job support', href: '/huggingface-llm-serving-job-support/' };
export const HF_TRANSFORMERS_TRAINING_LINK: LandingRelatedLink = { label: 'Transformers training job support', href: '/huggingface-transformers-training-job-support/' };
export const HF_TRANSFORMERS_INFERENCE_LINK: LandingRelatedLink = { label: 'Transformers inference job support', href: '/huggingface-transformers-inference-job-support/' };
export const HF_PEFT_LINK: LandingRelatedLink = { label: 'PEFT fine-tuning job support', href: '/peft-fine-tuning-job-support/' };
export const HF_QLORA_LINK: LandingRelatedLink = { label: 'QLoRA fine-tuning job support', href: '/qlora-fine-tuning-job-support/' };
export const HF_TRL_LINK: LandingRelatedLink = { label: 'TRL post-training job support', href: '/trl-job-support/' };
export const HF_SMOLAGENTS_LINK: LandingRelatedLink = { label: 'smolagents job support', href: '/smolagents-job-support/' };
export const HF_OPENENV_LINK: LandingRelatedLink = { label: 'OpenEnv agentic RL job support', href: '/openenv-job-support/' };
export const HF_SBERT_LINK: LandingRelatedLink = { label: 'Sentence Transformers job support', href: '/sentence-transformers-job-support/' };
export const HF_TEI_LINK: LandingRelatedLink = { label: 'Text Embeddings Inference job support', href: '/text-embeddings-inference-job-support/' };
export const HF_DIFFUSERS_LINK: LandingRelatedLink = { label: 'Diffusers job support', href: '/diffusers-job-support/' };
export const HF_ACCELERATE_LINK: LandingRelatedLink = { label: 'Accelerate distributed training job support', href: '/accelerate-distributed-training-job-support/' };
export const HF_QUANT_LINK: LandingRelatedLink = { label: 'Hugging Face quantization job support', href: '/huggingface-quantization-job-support/' };
export const HF_OPTIMUM_LINK: LandingRelatedLink = { label: 'Optimum optimization job support', href: '/optimum-job-support/' };
export const HF_KERNELS_LINK: LandingRelatedLink = { label: 'Hugging Face Kernels job support', href: '/huggingface-kernels-job-support/' };
export const HF_GPU_LINK: LandingRelatedLink = { label: 'LLM GPU optimization job support', href: '/huggingface-gpu-optimization-job-support/' };
export const HF_DATASETS_LINK: LandingRelatedLink = { label: 'Hugging Face Datasets job support', href: '/huggingface-datasets-job-support/' };
export const HF_TRACKIO_LINK: LandingRelatedLink = { label: 'Trackio experiment tracking job support', href: '/trackio-experiment-tracking-job-support/' };
export const HF_LIGHTEVAL_LINK: LandingRelatedLink = { label: 'Lighteval model evaluation job support', href: '/lighteval-model-evaluation-job-support/' };
export const HF_TGI_LINK: LandingRelatedLink = { label: 'TGI serving job support', href: '/tgi-job-support/' };
export const HF_VLLM_LINK: LandingRelatedLink = { label: 'vLLM inference job support', href: '/vllm-inference-job-support/' };
export const HF_SPACES_LINK: LandingRelatedLink = { label: 'Spaces & Gradio job support', href: '/huggingface-spaces-job-support/' };
export const HF_GRADIO_LINK: LandingRelatedLink = { label: 'Gradio app job support', href: '/gradio-job-support/' };
export const HF_AWS_LINK: LandingRelatedLink = { label: 'Hugging Face on AWS job support', href: '/huggingface-aws-job-support/' };
export const HF_AZURE_LINK: LandingRelatedLink = { label: 'Hugging Face on Azure job support', href: '/huggingface-azure-job-support/' };
export const HF_GCP_LINK: LandingRelatedLink = { label: 'Hugging Face on GCP job support', href: '/huggingface-gcp-job-support/' };
export const HF_RAG_HUB_LINK: LandingRelatedLink = { label: 'Hugging Face embeddings & RAG job support', href: '/huggingface-embeddings-job-support/' };
export const HF_AGENTIC_RAG_LINK: LandingRelatedLink = { label: 'Agentic RAG with smolagents job support', href: '/huggingface-agentic-rag-job-support/' };

/** Existing, already-live site pages (verified real routes) — cross-link, never duplicate. */
export const EXISTING = {
  hfJobSupport: { label: 'Hugging Face job support', href: '/hugging-face-job-support/' } as LandingRelatedLink,
  transformers: { label: 'Transformers job support', href: '/transformers-job-support/' } as LandingRelatedLink,
  genai: { label: 'Generative AI job support', href: '/generative-ai-job-support/' } as LandingRelatedLink,
  genaiEngineer: { label: 'GenAI Engineer job support', href: '/genai-engineer-job-support/' } as LandingRelatedLink,
  genaiProxy: { label: 'GenAI interview proxy support', href: '/genai-interview-proxy-support/' } as LandingRelatedLink,
  genaiMarketing: { label: 'GenAI candidate marketing', href: '/genai-candidate-marketing/' } as LandingRelatedLink,
  llm: { label: 'LLM job support', href: '/llm-job-support/' } as LandingRelatedLink,
  llmEngineer: { label: 'LLM Engineer job support', href: '/llm-engineer-job-support/' } as LandingRelatedLink,
  llmProxy: { label: 'LLM interview proxy support', href: '/llm-interview-proxy-support/' } as LandingRelatedLink,
  llmProfile: { label: 'LLM Engineer profile positioning', href: '/llm-engineer-profile-positioning/' } as LandingRelatedLink,
  llmEval: { label: 'LLM evaluation job support', href: '/llm-evaluation-job-support/' } as LandingRelatedLink,
  rag: { label: 'RAG job support', href: '/rag-job-support/' } as LandingRelatedLink,
  ragEngineer: { label: 'RAG Engineer job support', href: '/rag-engineer-job-support/' } as LandingRelatedLink,
  ragProxy: { label: 'RAG interview proxy support', href: '/rag-interview-proxy-support/' } as LandingRelatedLink,
  ragVsFineTuning: { label: 'RAG vs fine-tuning job support', href: '/rag-vs-fine-tuning-job-support/' } as LandingRelatedLink,
  fineTuning: { label: 'Fine-tuning job support', href: '/fine-tuning-job-support/' } as LandingRelatedLink,
  loraQlora: { label: 'LoRA / QLoRA job support', href: '/lora-qlora-job-support/' } as LandingRelatedLink,
  pytorch: { label: 'PyTorch job support', href: '/pytorch-job-support/' } as LandingRelatedLink,
  vectorDb: { label: 'Vector database job support', href: '/vector-database-job-support/' } as LandingRelatedLink,
  vectorDbSelection: { label: 'Vector DB selection for RAG', href: '/vector-database-selection-for-rag/' } as LandingRelatedLink,
  agenticAi: { label: 'Agentic AI job support', href: '/agentic-ai-job-support/' } as LandingRelatedLink,
  agenticEngineer: { label: 'Agentic AI Engineer job support', href: '/agentic-ai-engineer-job-support/' } as LandingRelatedLink,
  mlops: { label: 'MLOps job support', href: '/mlops-job-support/' } as LandingRelatedLink,
  mlopsEngineer: { label: 'MLOps Engineer job support', href: '/mlops-engineer-job-support/' } as LandingRelatedLink,
  pythonGenai: { label: 'Python GenAI job support', href: '/python-genai-job-support/' } as LandingRelatedLink,
  aiEngineer: { label: 'AI Engineer job support', href: '/ai-engineer-job-support/' } as LandingRelatedLink,
  awsHub: { label: 'AWS AI/ML job support', href: '/aws-ai-ml-job-support/' } as LandingRelatedLink,
  awsSagemaker: { label: 'Amazon SageMaker job support', href: '/amazon-sagemaker-job-support/' } as LandingRelatedLink,
  azureHub: { label: 'Azure AI/ML proxy job support', href: '/azure-ai-ml-proxy-job-support/' } as LandingRelatedLink,
  aimlHub: { label: 'Global AI/ML job support', href: '/ai-ml-job-support/' } as LandingRelatedLink,
  modelDeployment: { label: 'Model deployment job support', href: '/model-deployment-job-support/' } as LandingRelatedLink,
  getScheduled: { label: 'Get interview scheduled', href: '/get-interview-scheduled/' } as LandingRelatedLink,
  getGenaiScheduled: { label: 'Get GenAI interview scheduled', href: '/get-genai-interview-scheduled/' } as LandingRelatedLink,
  getLlmScheduled: { label: 'Get LLM Engineer interview scheduled', href: '/get-llm-engineer-interview-scheduled/' } as LandingRelatedLink,
  candidateMarketing: { label: 'Job application & candidate marketing', href: '/job-application-candidate-marketing/' } as LandingRelatedLink,
  production: { label: 'Production issue support', href: '/production-issue-support/' } as LandingRelatedLink,
  blog: { label: 'Read developer support articles', href: '/blog/' } as LandingRelatedLink,
};

// ─── FAQ generators (context-aware — each produces materially distinct copy) ─

/** Job-support style FAQs for HF technology / service job-support pages. */
export function hfJobFaqs(entity: string, focus: string): LandingFaqItem[] {
  return [
    {
      question: `What is ${entity} proxy job support?`,
      answer: `${entity} proxy job support is real-time, implementation-level technical guidance for professionals working on live Hugging Face and LLM projects. Our in-house engineers join your working hours and help with ${focus}. That spans Transformers model loading and generation, PEFT/LoRA/QLoRA fine-tuning, TRL post-training, Sentence Transformers and RAG retrieval, Diffusers pipelines, huggingface_hub and the hf CLI, tokens and gated-model access, and deployment on Inference Endpoints, vLLM, TGI, or your own GPUs. "Proxy" here means expert technical support, troubleshooting, architecture and mentoring — not replacing the professional or performing their employment duties. Same-day start is available and every engagement is confidential.`,
    },
    {
      question: `What does "proxy" mean in ${entity} proxy job support?`,
      answer:
        'It means hands-on technical proxy support — an experienced LLM engineer working alongside you on your real tasks: architecture, implementation, debugging, code review, and production troubleshooting. It does not mean impersonating you or carrying out your job responsibilities on your behalf. You remain the professional delivering the work; we provide the expert guidance behind you.',
    },
    {
      question: 'Can you help with live Hugging Face and LLM production incidents?',
      answer:
        'Yes. Production firefighting is a core strength. We help resolve CUDA out-of-memory during training and inference, tokenizer/model config mismatches, adapter (LoRA) loading and merging failures, quantization dtype errors, gated-model 401/403 and token-scope problems, Inference Endpoint cold starts and autoscaling, slow tokens/sec and high TTFT, RAG retrieval-quality collapse, and embedding-dimension mismatches — often within the same working session, with an engineer on the call.',
    },
    {
      question: 'Which Hugging Face libraries and tools do you cover?',
      answer:
        'Transformers (AutoModel/AutoTokenizer, pipeline, Trainer, generate, device_map, tensor parallelism, attention and quantization backends), PEFT (LoRA, QLoRA, adapters), TRL (SFT, DPO, GRPO, reward modeling, distillation), Accelerate, Sentence Transformers (bi-encoders, cross-encoder rerankers, sparse and multi-vector), Diffusers, Datasets, Tokenizers, Safetensors, Optimum, bitsandbytes, the Kernels / Kernel Hub, huggingface_hub and the hf CLI, Inference Endpoints, Inference Providers, TGI, TEI, vLLM integration, Gradio and Spaces, Trackio, Lighteval, Argilla/Distilabel, and AutoTrain — all current through September 2026.',
    },
    {
      question: 'Is the support confidential?',
      answer:
        'Absolutely. All Hugging Face and LLM job support is completely confidential — we never share client or employer information with any third party, and NDAs are available on request. Whether it is job support, production help, interview assistance, or candidate marketing, every engagement is handled with full professional discretion. We do not access your accounts or infrastructure without your explicit direction.',
    },
    {
      question: 'How quickly can I get started?',
      answer:
        'In most cases the same day you contact us. We maintain an in-house LLM engineering team — no sub-contracting. Reach out on WhatsApp and we will match you with the right engineer for your Hugging Face stack and situation immediately.',
    },
  ];
}

/** HF technology-page FAQs. `service` = the library/tech; `usage` = one-line real usage. */
export function hfServiceFaqs(service: string, usage: string): LandingFaqItem[] {
  return [
    {
      question: `What kind of ${service} proxy job support do you provide?`,
      answer: `We provide hands-on, real-time ${service} proxy job support on your actual project tickets. ${usage} This page is part of our Hugging Face proxy job support ecosystem: our experts help with architecture and implementation, environment and dependency setup, debugging, code review, performance/GPU-memory tuning, and production issues — during your working hours, same-day. "Proxy" means expert technical support and mentoring on your real deliverables, not replacing you or performing your job duties.`,
    },
    {
      question: `What are the common production problems with ${service}?`,
      answer: `Typical ${service} production issues we resolve include CUDA out-of-memory and GPU-memory pressure, dependency and version conflicts (Transformers/PyTorch/CUDA), dtype and precision mismatches, slow throughput or latency, checkpoint and safetensors loading errors, and integration failures with upstream and downstream systems. We help you find the root cause from stack traces, logs, and profiling, then ship a stable fix.`,
    },
    {
      question: `Do you provide ${service} proxy interview support and cover interview questions?`,
      answer: `Yes. We provide ${service} proxy interview support (also searched as ${service} interview proxy support) — real-time expert help on fundamentals, architecture and design trade-offs, scenario-based problems, and hands-on coding rounds — calibrated to the exact role and company format. Proxy interview support means real-time technical help on the exact areas your interview covers; you attend and complete your own interview.`,
    },
    {
      question: `Can you help if I just joined a project using ${service}?`,
      answer: `Yes. Onboarding onto an unfamiliar ${service} setup is one of the most common reasons people reach out. We help you understand the existing model and data pipeline, the training and serving architecture, and the repository structure, get productive fast, deliver your first tasks confidently, and avoid the mistakes that get flagged in reviews and standups.`,
    },
    {
      question: 'How do I get started and is it confidential?',
      answer:
        'Contact us on WhatsApp with your stack, the problem, and your timeline. We assign the right expert — usually same-day. Every engagement is fully confidential, and NDAs are available on request.',
    },
  ];
}

/** Interview-page FAQs. `entity` = HF role/tech interview context. */
export function hfInterviewFaqs(entity: string): LandingFaqItem[] {
  return [
    {
      question: `What is ${entity} proxy interview support?`,
      answer: `${entity} proxy interview support (also searched as ${entity} interview proxy support) is real-time, discreet technical help for your ${entity} interview. Our experts support you on coding rounds, Transformers and generation questions, fine-tuning strategy (PEFT/LoRA/QLoRA/TRL), RAG and embedding architecture, LLM serving and GPU optimization system design, and behavioral rounds — so you walk in confident and ready.`,
    },
    {
      question: 'Does proxy interview support mean someone attends the interview for me?',
      answer:
        'No. The candidate attends and completes their own interview. Proxy interview support refers to real-time technical guidance, architecture review, and scenario-based support that get you ready to perform. We do not impersonate candidates or sit interviews on anyone’s behalf, and we do not guarantee selection or employment — hiring decisions are made solely by employers.',
    },
    {
      question: `What topics does ${entity} proxy interview support cover?`,
      answer:
        'Transformers architecture and generation, tokenization, fine-tuning strategy and PEFT/LoRA/QLoRA trade-offs, TRL alignment (SFT/DPO/GRPO), RAG design (chunking, embeddings, reranking, vector search), inference and serving choices (Inference Endpoints, vLLM, TGI), quantization and GPU-memory optimization, evaluation, and MLOps for LLMs — across live coding, ML/LLM system design, architecture deep-dives, case studies, and final-round panels.',
    },
    {
      question: 'Is proxy interview support confidential?',
      answer:
        'Yes. Every session is fully confidential. We never disclose candidate identities, employer names, or interview details. Support is delivered discreetly and calibrated to your interview format and seniority level.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your interview date, the role, the company/format, and likely topics. We assign the right Hugging Face / LLM expert and run a pre-interview alignment session so support matches your background and experience level.',
    },
  ];
}

/** Candidate-marketing / get-scheduled FAQs. */
export function hfMarketingFaqs(entity: string): LandingFaqItem[] {
  return [
    {
      question: `How do you help ${entity} get more interview calls?`,
      answer: `We help ${entity} get interview calls through GenAI/LLM profile engineering, keyword targeting, LinkedIn positioning, and recruiter outreach. We rebuild your resume and LinkedIn around the exact terms recruiters search for — Transformers, PEFT/LoRA, TRL, RAG, Sentence Transformers, vLLM, Inference Endpoints, and measurable production impact — then support active applications and outreach to hiring managers and staffing firms.`,
    },
    {
      question: 'Why is my LLM/GenAI resume getting no calls?',
      answer:
        'Usually a keyword and positioning mismatch: the resume reads like a generic data scientist or backend engineer, buries the Hugging Face and LLM impact, and misses the terms recruiters and ATS filters screen for. We diagnose the gaps and rebuild the profile so it surfaces in searches and passes ATS screening for the GenAI roles you want.',
    },
    {
      question: 'What LLM/GenAI profiles do you support?',
      answer:
        'LLM Engineer, Generative AI Engineer, Applied AI Engineer, NLP Engineer, Machine Learning Engineer, RAG Engineer, Agentic AI Engineer, AI Platform / LLM Infrastructure Engineer, and Model Optimization Engineer — at every level from transitioning-in to senior/lead.',
    },
    {
      question: 'Do you help with contract and full-time roles?',
      answer:
        'Yes. We support both contract (C2C, W2, 1099, inside/outside IR35 where relevant) and full-time searches, and understand the GenAI hiring landscape across product companies, AI startups, enterprises, and consulting/SI firms — positioning your profile accordingly for each.',
    },
    {
      question: 'How soon will I see results?',
      answer:
        'Profile changes and outreach can begin the same day. Most candidates start seeing recruiter activity within 1–2 weeks of profile optimization and targeted outreach, depending on the current market and specialization.',
    },
  ];
}

/** Knowledge-base / educational-page FAQs. `topic` = the guide subject. */
export function hfKbFaqs(topic: string): LandingFaqItem[] {
  return [
    {
      question: `What does this ${topic} guide cover?`,
      answer: `This guide explains ${topic} in practical terms — what it is, how it works day to day on the Hugging Face stack, the common production problems and how they are handled, and how professional support fits in. It reflects the Hugging Face ecosystem state through September 2026 and is written for working LLM/GenAI professionals and candidates who want clear, real-world answers rather than marketing.`,
    },
    {
      question: 'Is this an educational guide or a paid service?',
      answer:
        'This is an educational guide. If you decide you want hands-on help, we also offer real-time Hugging Face and LLM job support, production issue support, interview assistance, and candidate marketing — but the guide itself is here to inform, and you can act on it however you like.',
    },
    {
      question: 'Who is this guide for?',
      answer:
        'LLM Engineers, Generative AI Engineers, NLP and ML Engineers, data scientists moving into GenAI, and anyone preparing for Hugging Face / LLM roles or currently working on LLM projects who wants to understand the topic clearly and avoid common mistakes.',
    },
    {
      question: 'How do I get personalized help?',
      answer:
        'Reach out on WhatsApp describing your situation — your Hugging Face stack, your role, and what you are stuck on. We will point you to the right support option, whether that is live job support, a production fix, interview help, or profile positioning.',
    },
  ];
}

// ─── Thin config builders ────────────────────────────────────────────────────

type HfPageInput = Omit<LandingPageConfig, 'canonical' | 'lastmod'> & {
  canonical?: string;
  lastmod?: string;
};

/** Fill canonical (from slug) + lastmod so batch files stay compact. */
export function hfPage(cfg: HfPageInput): LandingPageConfig {
  return {
    ...cfg,
    canonical: cfg.canonical ?? `${BASE_URL}/${cfg.slug}/`,
    lastmod: cfg.lastmod ?? LASTMOD,
  };
}

/**
 * Compact builder for HF technology/service job-support pages. Fills common
 * boilerplate (techHighlights, default geoLine/timezoneNote/bottomCTA) so each
 * service page only declares its unique content. Any field can still be overridden.
 */
type HfServicePageInput = Omit<
  LandingPageConfig,
  'canonical' | 'lastmod' | 'highlights' | 'geoLine' | 'timezoneNote' | 'bottomCTAHeading' | 'bottomCTABody'
> & {
  canonical?: string;
  lastmod?: string;
  highlights?: LandingHighlight[];
  geoLine?: string;
  timezoneNote?: string;
  bottomCTAHeading?: string;
  bottomCTABody?: string;
};

export function hfServicePage(cfg: HfServicePageInput): LandingPageConfig {
  return {
    ...cfg,
    highlights: cfg.highlights ?? techHighlights,
    geoLine:
      cfg.geoLine ??
      'Real-time Hugging Face and LLM support for engineers across USA, Canada, UK, Ireland, Germany, Netherlands, France, Switzerland, Australia, Singapore, UAE, and worldwide.',
    timezoneNote:
      cfg.timezoneNote ?? 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
    bottomCTAHeading: cfg.bottomCTAHeading ?? 'Need Hugging Face Proxy Job Support or Proxy Interview Support Right Now?',
    bottomCTABody:
      cfg.bottomCTABody ??
      'In-house Transformers, PEFT/TRL fine-tuning, RAG, and LLM-serving experts available same-day — Hugging Face proxy job support for live projects and production issues, or proxy interview support (real-time technical help — you attend your own interview). Talk to ProxyTechSupport on WhatsApp now.',
    canonical: cfg.canonical ?? `${BASE_URL}/${cfg.slug}/`,
    lastmod: cfg.lastmod ?? LASTMOD,
  };
}

/** Convenience for the common related-links shape used across the cluster. */
export function relatedLinks(input: {
  geoLinks: LandingRelatedLink[];
  techLinks: LandingRelatedLink[];
  problemLink: LandingRelatedLink;
  proxyLink: LandingRelatedLink;
  blogLink?: LandingRelatedLink;
  additionalLinks?: LandingRelatedLink[];
}): LandingRelatedLinks {
  return {
    blogLink: EXISTING.blog,
    ...input,
  };
}
