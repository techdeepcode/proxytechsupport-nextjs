import type { LandingPageConfig } from '../landing-pages';
import {
  hfServicePage,
  relatedLinks,
  hfInterviewFaqs,
  interviewHighlights,
  EXISTING,
  HF_HUB_LINK,
  HF_INTERVIEW_HUB_LINK,
  HF_PRODUCTION_LINK,
  HF_TRANSFORMERS_TRAINING_LINK,
  HF_TRANSFORMERS_INFERENCE_LINK,
  HF_PEFT_LINK,
  HF_QLORA_LINK,
  HF_TRL_LINK,
  HF_SMOLAGENTS_LINK,
  HF_SBERT_LINK,
  HF_DIFFUSERS_LINK,
  HF_SERVING_LINK,
  HF_VLLM_LINK,
  HF_ENDPOINTS_LINK,
  HF_QUANT_LINK,
  HF_RAG_HUB_LINK,
  HF_OPENENV_LINK,
} from './shared';

const interviewCTA = {
  bottomCTAHeading: 'Have a Hugging Face or LLM Interview Coming Up?',
  bottomCTABody:
    'Real-time proxy interview support (also searched as interview proxy support) from in-house Transformers, fine-tuning, RAG, and LLM-serving experts — calibrated to your role, company, and format. You attend and complete your own interview; we get you ready and support you live. Message ProxyTechSupport on WhatsApp.',
};

// ─── Transformers proxy interview ────────────────────────────────────────────

export const transformersInterview: LandingPageConfig = hfServicePage({
  slug: 'transformers-proxy-interview-support',
  title: 'Transformers Proxy Interview Support | Architecture, Generation & Fine-Tuning Rounds',
  description:
    'Proxy interview support for Hugging Face Transformers roles — attention and architecture, tokenization, generation, Trainer and fine-tuning, quantization and device_map, and LLM system design. Real-time technical help; you attend your own interview.',
  keywords: [
    'Transformers proxy interview support', 'Transformers interview proxy support', 'Hugging Face interview questions',
    'transformer architecture interview', 'attention KV cache interview', 'LLM engineer interview support',
  ],
  h1: 'Transformers Proxy Interview Support — Architecture to Production',
  tagline:
    'Real-time proxy interview support for Transformers-heavy roles — attention internals, tokenization, generation, Trainer and fine-tuning, quantization, and LLM system design across coding and design rounds.',
  heroEyebrow: 'Transformers Interview Support',
  highlights: interviewHighlights,
  painIntro:
    'A Transformers or LLM interview that will probe attention internals, generation, fine-tuning strategy, and serving trade-offs — across coding and system design? We provide real-time, discreet technical support calibrated to the exact role and format.',
  heroVariant:
    'Transformers interviews range from architecture fundamentals (self-attention, positional encodings, KV cache, why decoder-only) to practical engineering (AutoModel/AutoTokenizer, pipeline, generation parameters, device_map and tensor parallelism, quantization) to fine-tuning strategy and LLM system design. We provide real-time proxy interview support across live coding, ML/LLM system design, and deep-dive rounds — helping you reason clearly about trade-offs and communicate like someone who has shipped Transformers in production. Proxy interview support means real-time technical help on the areas your interview covers; you attend and complete your own interview, and we never impersonate candidates or guarantee outcomes.',
  faqs: [
    ...hfInterviewFaqs('Transformers'),
    {
      question: 'What Transformers topics come up most in interviews?',
      answer:
        'Attention and why transformers replaced RNNs, tokenization, the difference between encoder/decoder/decoder-only, KV cache and generation, fine-tuning vs prompting vs RAG, quantization and memory, and how you would serve a model at scale. Coding rounds often involve using the library correctly (generation, batching) rather than implementing attention from scratch. We prepare you across all of it.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      HF_INTERVIEW_HUB_LINK,
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
    ],
    techLinks: [HF_TRANSFORMERS_TRAINING_LINK, HF_TRANSFORMERS_INFERENCE_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_PEFT_LINK, HF_QUANT_LINK, HF_SERVING_LINK,
      EXISTING.transformers, EXISTING.llmProxy, EXISTING.llmEngineer, EXISTING.getLlmScheduled,
    ],
  }),
  ...interviewCTA,
});

// ─── PEFT / LoRA proxy interview ─────────────────────────────────────────────

export const peftLoraInterview: LandingPageConfig = hfServicePage({
  slug: 'peft-lora-proxy-interview-support',
  title: 'PEFT / LoRA / QLoRA Proxy Interview Support | Fine-Tuning Strategy Rounds',
  description:
    'Proxy interview support for fine-tuning roles — PEFT, LoRA, and QLoRA internals, rank/alpha/target-modules, quantized base models, adapter merging, and when to fine-tune vs RAG. Real-time help; you attend your own interview.',
  keywords: [
    'PEFT LoRA proxy interview support', 'QLoRA interview proxy support', 'fine-tuning interview questions',
    'LoRA rank alpha interview', 'PEFT interview support', 'fine-tuning vs RAG interview',
  ],
  h1: 'PEFT / LoRA / QLoRA Proxy Interview Support — Fine-Tuning Strategy',
  tagline:
    'Real-time proxy interview support for fine-tuning roles — PEFT/LoRA/QLoRA internals, hyperparameters, adapter management, and the fine-tune-vs-RAG decision, across coding and design rounds.',
  heroEyebrow: 'PEFT / LoRA Interview Support',
  highlights: interviewHighlights,
  painIntro:
    'Interviewing for a role that fine-tunes LLMs and expecting deep questions on LoRA, QLoRA, and when parameter-efficient tuning is the right call? We provide real-time technical support calibrated to the exact fine-tuning depth your interview demands.',
  heroVariant:
    'Fine-tuning interviews test whether you understand why PEFT works, not just the API: low-rank adaptation and what rank/alpha/dropout and target modules actually do, QLoRA’s quantized base model and its memory maths, adapter saving/loading/merging and serving multiple adapters, and the strategic call between full fine-tuning, PEFT, RAG, and prompting for a given problem. We support you live across coding rounds (running a LoRA fine-tune correctly) and design rounds (justifying an approach under cost/quality/latency constraints). You attend and complete your own interview; we provide real-time technical help and never guarantee an outcome.',
  faqs: [
    ...hfInterviewFaqs('PEFT and LoRA'),
    {
      question: 'How do I answer "when would you use QLoRA vs LoRA vs full fine-tuning"?',
      answer:
        'Frame it by constraints: full fine-tuning for maximum adaptation when you have the GPUs and data; LoRA when you want cheap, portable adapters and near-full quality; QLoRA when the base model barely fits and you must fine-tune on limited VRAM (quantized base + LoRA adapters). Mention trade-offs (QLoRA’s slight quality/speed cost) and when RAG beats fine-tuning entirely. We rehearse this reasoning with you.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      HF_INTERVIEW_HUB_LINK,
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
    ],
    techLinks: [HF_PEFT_LINK, HF_QLORA_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_TRL_LINK, HF_QUANT_LINK,
      EXISTING.loraQlora, EXISTING.fineTuning, EXISTING.llmProxy, EXISTING.getLlmScheduled,
    ],
  }),
  ...interviewCTA,
});

// ─── TRL proxy interview ─────────────────────────────────────────────────────

export const trlInterview: LandingPageConfig = hfServicePage({
  slug: 'trl-proxy-interview-support',
  title: 'TRL Proxy Interview Support | SFT, DPO, GRPO & Alignment Rounds',
  description:
    'Proxy interview support for post-training and alignment roles — TRL’s SFT, DPO, GRPO, reward modeling, and RLHF workflows, and when each applies. Real-time technical help; you attend your own interview.',
  keywords: [
    'TRL proxy interview support', 'DPO GRPO interview', 'RLHF alignment interview support', 'SFT DPO interview questions',
    'reward modeling interview', 'preference optimization interview',
  ],
  h1: 'TRL Proxy Interview Support — Alignment & Post-Training',
  tagline:
    'Real-time proxy interview support for alignment roles — SFT, DPO, GRPO, reward modeling, and RLHF workflows in TRL, and the reasoning for choosing between them.',
  heroEyebrow: 'TRL / Alignment Interview Support',
  highlights: interviewHighlights,
  painIntro:
    'Interviewing where they will ask you to compare SFT, DPO, GRPO, and reward modeling — and justify an alignment strategy? These questions separate people who ran a trainer from people who understand post-training. We help you sound like the latter.',
  heroVariant:
    'Alignment interviews probe the post-training pipeline: SFT to teach behaviour, preference optimisation (DPO) to align to human preference without a separate reward model, reward modeling plus policy optimisation (GRPO and online RL methods) for RLHF-style training, and knowledge distillation. The key skill is explaining what problem each method solves and why you would pick one — not implying they are interchangeable. We support you live across design and coding rounds using TRL (SFTTrainer, DPOTrainer, GRPOTrainer, RewardTrainer), the data each needs, and the failure modes. You attend and complete your own interview; support is real-time technical help, never impersonation or a guarantee.',
  faqs: [
    ...hfInterviewFaqs('TRL and LLM alignment'),
    {
      question: 'How should I explain DPO vs GRPO in an interview?',
      answer:
        'DPO optimises directly on preference pairs (chosen vs rejected) without training a separate reward model or running online RL — simpler and stable. GRPO is an online RL method that optimises a policy against a reward (or verifiable signal) using grouped samples, useful when you have a reward function or verifiable tasks (e.g. reasoning). Say when each fits: DPO for preference data you already have; GRPO when you can score generations. We drill this framing.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      HF_INTERVIEW_HUB_LINK,
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
    ],
    techLinks: [HF_TRL_LINK, HF_PEFT_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_QLORA_LINK, HF_OPENENV_LINK,
      EXISTING.fineTuning, EXISTING.llmProxy, EXISTING.llmEngineer, EXISTING.getLlmScheduled,
    ],
  }),
  ...interviewCTA,
});

// ─── smolagents proxy interview ──────────────────────────────────────────────

export const smolagentsInterview: LandingPageConfig = hfServicePage({
  slug: 'smolagents-proxy-interview-support',
  title: 'smolagents & AI Agents Proxy Interview Support | Tool Calling, MCP & Multi-Agent',
  description:
    'Proxy interview support for AI agent roles — smolagents (CodeAgent, ToolCallingAgent), tools, MCP, multi-agent patterns, agentic RAG, and safe code execution. Real-time technical help; you attend your own interview.',
  keywords: [
    'smolagents proxy interview support', 'AI agent interview support', 'CodeAgent ToolCallingAgent interview',
    'MCP agent interview', 'agentic AI interview questions', 'tool calling interview',
  ],
  h1: 'smolagents & AI Agents Proxy Interview Support',
  tagline:
    'Real-time proxy interview support for agent roles — smolagents (CodeAgent vs ToolCallingAgent), tools, MCP, multi-agent orchestration, agentic RAG, and sandboxed execution.',
  heroEyebrow: 'Agents Interview Support',
  highlights: interviewHighlights,
  painIntro:
    'Interviewing for an agentic AI role and expecting questions on agent loops, tool calling, MCP, and multi-agent design? Agent interviews reward people who understand the control flow and the failure modes. We prepare you for both.',
  heroVariant:
    'Agent interviews test whether you understand how agents actually work: the reason/act loop, the difference between a CodeAgent (writes and runs code as actions) and a ToolCallingAgent (structured JSON tool calls), defining tools, using MCP to connect external tools, orchestrating multi-agent systems, agentic RAG, and — critically — safe code execution and sandboxing. We support you live across design and coding rounds using smolagents concepts, and help you speak to real trade-offs (when code-writing agents are powerful but riskier, how to sandbox, how to keep humans in the loop). We note where smolagents APIs are still stabilising. You attend and complete your own interview; support is real-time technical help only.',
  faqs: [
    ...hfInterviewFaqs('smolagents and AI agents'),
    {
      question: 'CodeAgent vs ToolCallingAgent — how do I compare them in an interview?',
      answer:
        'A CodeAgent expresses actions as executable code, which is expressive and great for chaining logic and computation — but it must run in a sandbox because it executes model-written code. A ToolCallingAgent emits structured tool calls (JSON), which is more constrained and predictable and integrates cleanly with defined tools and MCP. Say when each fits and always raise sandboxing for code agents. We rehearse this.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      HF_INTERVIEW_HUB_LINK,
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
    ],
    techLinks: [HF_SMOLAGENTS_LINK, HF_RAG_HUB_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_OPENENV_LINK,
      EXISTING.agenticAi, EXISTING.agenticEngineer, EXISTING.llmProxy, EXISTING.getGenaiScheduled,
    ],
  }),
  ...interviewCTA,
});

// ─── Sentence Transformers proxy interview ───────────────────────────────────

export const sentenceTransformersInterview: LandingPageConfig = hfServicePage({
  slug: 'sentence-transformers-proxy-interview-support',
  title: 'Sentence Transformers & RAG Proxy Interview Support | Embeddings & Retrieval Rounds',
  description:
    'Proxy interview support for RAG and search roles — embeddings, bi-encoders vs cross-encoders, reranking, vector search, chunking, and retrieval evaluation. Real-time technical help; you attend your own interview.',
  keywords: [
    'Sentence Transformers proxy interview support', 'RAG interview support', 'embeddings interview questions',
    'bi-encoder cross-encoder interview', 'vector search reranking interview', 'retrieval interview',
  ],
  h1: 'Sentence Transformers & RAG Proxy Interview Support',
  tagline:
    'Real-time proxy interview support for retrieval roles — embeddings, bi-encoder vs cross-encoder, reranking, vector search, chunking strategy, and how you would evaluate retrieval quality.',
  heroEyebrow: 'Embeddings / RAG Interview Support',
  highlights: interviewHighlights,
  painIntro:
    'Interviewing for a RAG or search role where they will dig into embeddings, reranking, chunking, and retrieval evaluation? These rounds reward end-to-end retrieval thinking. We support you across the whole pipeline.',
  heroVariant:
    'Retrieval interviews test the full pipeline: how embeddings work, bi-encoders (fast retrieval) vs cross-encoders (accurate reranking) and why you use both, chunking strategy, vector search and hybrid (dense + lexical) retrieval, and — the part many candidates miss — how you would actually measure retrieval quality (recall@k, nDCG) and debug a RAG system that returns wrong answers. We support you live on design rounds (architecting a RAG system under latency/cost constraints) and coding rounds (Sentence Transformers, similarity, reranking). You attend and complete your own interview; support is real-time technical help only.',
  faqs: [
    ...hfInterviewFaqs('Sentence Transformers and RAG'),
    {
      question: 'How do I answer "your RAG system gives wrong answers — how do you debug it"?',
      answer:
        'Start at retrieval, not the LLM: check whether the right chunks are even retrieved (measure recall on a labeled set), inspect chunking, verify embedding-model fit and that dimensions match after any model change, and add/verify reranking. Only after retrieval is sound do you look at prompt and generation. Framing it this way signals real RAG experience — we rehearse it with you.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      HF_INTERVIEW_HUB_LINK,
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
    ],
    techLinks: [HF_SBERT_LINK, HF_RAG_HUB_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK,
      EXISTING.rag, EXISTING.ragProxy, EXISTING.ragEngineer, EXISTING.vectorDb, EXISTING.getGenaiScheduled,
    ],
  }),
  ...interviewCTA,
});

// ─── Diffusers proxy interview ───────────────────────────────────────────────

export const diffusersInterview: LandingPageConfig = hfServicePage({
  slug: 'diffusers-proxy-interview-support',
  title: 'Diffusers & Generative Media Proxy Interview Support | Diffusion Model Rounds',
  description:
    'Proxy interview support for generative-media roles — diffusion model fundamentals, pipelines and schedulers, LoRA/DreamBooth fine-tuning, and production serving with Diffusers. Real-time help; you attend your own interview.',
  keywords: [
    'Diffusers proxy interview support', 'diffusion model interview', 'generative media interview support',
    'text to image interview', 'diffusion scheduler interview', 'LoRA diffusion interview',
  ],
  h1: 'Diffusers & Generative Media Proxy Interview Support',
  tagline:
    'Real-time proxy interview support for generative-media roles — diffusion fundamentals, pipelines and schedulers, LoRA/DreamBooth, and production serving with Diffusers.',
  heroEyebrow: 'Diffusers Interview Support',
  highlights: interviewHighlights,
  painIntro:
    'Interviewing for a generative-image/video role and expecting questions on diffusion internals, schedulers, fine-tuning, and serving cost? We provide real-time technical support tuned to the exact depth your interview needs.',
  heroVariant:
    'Diffusion interviews cover the denoising process (latent → iterative denoising → decode), the role of the scheduler and the steps/quality trade-off, guidance, conditioning (ControlNet, image-to-image, inpainting), fine-tuning with LoRA/DreamBooth, and the production realities — memory optimisation and serving cost at scale. We support you live across design and coding rounds using Diffusers, helping you explain the pipeline clearly and reason about quality/latency/cost. You attend and complete your own interview; support is real-time technical help only, never impersonation or a guarantee.',
  faqs: [
    ...hfInterviewFaqs('Diffusers and diffusion models'),
    {
      question: 'What diffusion concepts get asked most?',
      answer:
        'The denoising/diffusion process at a high level, what the scheduler does and why step count trades off with quality, classifier-free guidance, how LoRA/DreamBooth adapt a model, and how you would serve generation cheaply (memory optimisation, batching). Interviewers want clear intuition plus production awareness, not the full maths derivation. We prepare both.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      HF_INTERVIEW_HUB_LINK,
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
    ],
    techLinks: [HF_DIFFUSERS_LINK, HF_QLORA_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_QUANT_LINK,
      EXISTING.genai, EXISTING.genaiProxy, EXISTING.getGenaiScheduled,
    ],
  }),
  ...interviewCTA,
});

// ─── Inference / serving proxy interview ─────────────────────────────────────

export const inferenceInterview: LandingPageConfig = hfServicePage({
  slug: 'huggingface-inference-proxy-interview-support',
  title: 'LLM Inference & Serving Proxy Interview Support | vLLM, Endpoints & System Design',
  description:
    'Proxy interview support for LLM serving/infra roles — vLLM/SGLang, Inference Endpoints vs Providers, continuous batching, KV cache, quantization, autoscaling, and LLM serving system design. Real-time help; you attend your own interview.',
  keywords: [
    'LLM inference proxy interview support', 'vLLM interview questions', 'LLM serving system design interview',
    'inference endpoints interview', 'continuous batching KV cache interview', 'LLM infrastructure interview support',
  ],
  h1: 'LLM Inference & Serving Proxy Interview Support',
  tagline:
    'Real-time proxy interview support for LLM serving and infra roles — vLLM/SGLang, Endpoints vs Providers, batching, KV cache, quantization, autoscaling, and serving system design.',
  heroEyebrow: 'Inference / Serving Interview Support',
  highlights: interviewHighlights,
  painIntro:
    'Interviewing for an LLM serving or AI infrastructure role where system design will center on throughput, latency, and cost? These rounds reward real serving intuition. We support you live across the design and coding stages.',
  heroVariant:
    'Serving/infra interviews are dominated by system design: how you would serve an open LLM at target QPS and latency, why continuous batching and PagedAttention matter, KV-cache and prefix caching, when to use vLLM vs SGLang vs managed Inference Endpoints (and how Inference Providers differ), quantization for memory, tensor parallelism for big models, autoscaling and cold starts, and cost per million tokens. We support you live, helping you reason about the trade-offs and defend an architecture — including noting that TGI is now legacy in favour of vLLM/SGLang. You attend and complete your own interview; support is real-time technical help only.',
  faqs: [
    ...hfInterviewFaqs('LLM inference and serving'),
    {
      question: 'How do I design an LLM serving system in an interview?',
      answer:
        'Clarify the SLOs (QPS, TTFT, p99 latency, cost), pick a server (vLLM as default; SGLang for heavy shared prefixes; managed Endpoints if you want no ops), then reason through continuous batching, KV/prefix caching, quantization for memory, parallelism for big models, autoscaling and cold starts, and monitoring. Close with cost per million tokens. We rehearse this end-to-end so you drive the design confidently.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      HF_INTERVIEW_HUB_LINK,
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
    ],
    techLinks: [HF_VLLM_LINK, HF_ENDPOINTS_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_SERVING_LINK, HF_QUANT_LINK,
      EXISTING.modelDeployment, EXISTING.llmProxy, EXISTING.llmEngineer, EXISTING.getLlmScheduled,
    ],
  }),
  ...interviewCTA,
});

export const huggingFaceInterviewPages: LandingPageConfig[] = [
  transformersInterview,
  peftLoraInterview,
  trlInterview,
  smolagentsInterview,
  sentenceTransformersInterview,
  diffusersInterview,
  inferenceInterview,
];
