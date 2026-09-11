import type { LandingPageConfig } from '../landing-pages';
import {
  hfServicePage,
  relatedLinks,
  hfServiceFaqs,
  EXISTING,
  HF_HUB_LINK,
  HF_INTERVIEW_HUB_LINK,
  HF_PRODUCTION_LINK,
  HF_SERVING_LINK,
  HF_TGI_LINK,
  HF_VLLM_LINK,
  HF_ENDPOINTS_LINK,
  HF_PROVIDERS_LINK,
  HF_TRANSFORMERS_INFERENCE_LINK,
  HF_QUANT_LINK,
  HF_GPU_LINK,
  HF_TEI_LINK,
} from './shared';

const LOCAL_LINK = { label: 'Local LLM inference job support', href: '/huggingface-local-inference-job-support/' };

// ─── LLM serving hub (TGI → vLLM/SGLang) ─────────────────────────────────────

export const llmServing: LandingPageConfig = hfServicePage({
  slug: 'huggingface-llm-serving-job-support',
  title: 'LLM Serving Job Support | vLLM, SGLang, TGI & Inference Endpoints',
  description:
    'Job support for serving open LLMs from Hugging Face — choosing between vLLM, SGLang, TGI (now legacy), Inference Endpoints, and Inference Providers, plus continuous batching, KV cache, quantization, and autoscaling for real throughput and latency targets.',
  keywords: [
    'LLM serving job support', 'Hugging Face model serving', 'vLLM SGLang TGI', 'serve open LLM',
    'continuous batching KV cache', 'LLM inference throughput latency', 'model serving architecture support',
  ],
  h1: 'LLM Serving Job Support — Pick and Tune the Right Serving Stack',
  tagline:
    'Real-time help serving open-weight LLMs in production — choosing vLLM, SGLang, or Inference Endpoints, and tuning continuous batching, KV cache, quantization, and autoscaling to hit your latency and cost targets.',
  heroEyebrow: 'LLM Serving Support',
  painIntro:
    'Unsure whether to run vLLM, SGLang, TGI, or a managed endpoint — or fighting low tokens/sec, high time-to-first-token, and GPU cost? Serving choice and configuration decide your throughput and bill more than model choice does. We help you get it right.',
  heroVariant:
    'The serving landscape shifted: TGI (Text Generation Inference) is now legacy — it entered maintenance and its repository was archived, and Hugging Face points new work at vLLM, SGLang, and (for local/edge) llama.cpp/MLX. We help you choose and operate the right stack: vLLM as the general-purpose high-throughput server (PagedAttention, continuous batching, and the Transformers-as-backend path where Transformers is the model-definition source of truth), SGLang for multi-turn and shared-prefix/agent workloads (RadixAttention prefix caching), or managed Hugging Face Inference Endpoints when you want dedicated autoscaling infra without running servers. We tune continuous batching, KV-cache and prefix caching, tensor/pipeline parallelism, quantization for memory headroom, max-model-len and concurrency, prefill/decode balance, streaming, and autoscaling — measured against your real latency (TTFT, tokens/sec) and cost budgets.',
  faqs: [
    ...hfServiceFaqs('LLM serving', 'We help you choose between vLLM, SGLang, and Inference Endpoints, then tune batching, KV cache, parallelism, and quantization for your throughput and latency targets.'),
    {
      question: 'Should I still use TGI, or move to vLLM/SGLang?',
      answer:
        'For new work, use vLLM or SGLang. TGI entered maintenance mode and its GitHub repository was archived, and Hugging Face now recommends vLLM (general serving), SGLang (multi-turn / shared-prefix / agent workloads), and llama.cpp/MLX for local. If you already run TGI, it still works, but we would plan a migration to vLLM or SGLang so you keep getting new-model support and performance improvements. We help with both the migration and the retune.',
    },
    {
      question: 'vLLM or SGLang — how do I choose?',
      answer:
        'vLLM is the safe default for general high-throughput generation — mature, broad model coverage, PagedAttention and continuous batching. SGLang shines when you have heavy shared prefixes (long system prompts, agent loops, multi-turn chat) thanks to RadixAttention prefix caching, and for structured/constrained decoding at scale. We benchmark both on your model and traffic shape before you commit.',
    },
    {
      question: 'When do I self-host vs use Inference Endpoints?',
      answer:
        'Self-host (vLLM/SGLang on your own GPUs or Kubernetes) when you need maximum control, custom kernels, or cost efficiency at steady high load. Use Inference Endpoints when you want dedicated, autoscaling, managed infrastructure — including scale-to-zero — without operating servers. We help you model the cost/latency trade-off and pick per workload.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_ENDPOINTS_LINK,
    ],
    techLinks: [HF_VLLM_LINK, HF_TGI_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_PROVIDERS_LINK, HF_TRANSFORMERS_INFERENCE_LINK, HF_QUANT_LINK, HF_GPU_LINK, LOCAL_LINK, HF_TEI_LINK,
      EXISTING.modelDeployment, EXISTING.llm, EXISTING.mlops,
    ],
  }),
});

// ─── TGI (legacy / migration) ────────────────────────────────────────────────

export const tgi: LandingPageConfig = hfServicePage({
  slug: 'tgi-job-support',
  title: 'TGI Job Support | Text Generation Inference Migration to vLLM/SGLang',
  description:
    'Job support for Text Generation Inference (TGI) — keeping existing deployments healthy and migrating off legacy TGI to vLLM or SGLang. TGI is now in maintenance; we help you stabilise it today and plan the move.',
  keywords: [
    'TGI job support', 'Text Generation Inference support', 'TGI to vLLM migration', 'TGI maintenance mode',
    'TGI deprecated', 'TGI autoscaling latency', 'migrate off TGI',
  ],
  h1: 'TGI Job Support — Stabilise Today, Migrate to vLLM/SGLang',
  tagline:
    'Real-time help with existing Text Generation Inference deployments and migrating off legacy TGI — keeping current TGI stable while planning and executing the move to vLLM or SGLang.',
  heroEyebrow: 'TGI (Text Generation Inference) Support',
  painIntro:
    'Running TGI in production and worried about it being frozen, or stuck debugging cold starts, OOMs, and slow tokens/sec? TGI is now legacy — but you still need it working today while you plan the migration. We help with both.',
  heroVariant:
    'Text Generation Inference (TGI) was Hugging Face’s production LLM server, but it entered maintenance mode and its repository was archived — Hugging Face now recommends vLLM, SGLang, and llama.cpp for new work. That does not mean rip it out tomorrow: many teams have stable TGI deployments. We help you keep an existing TGI service healthy (sharding with --num-shard, max-batch-total-tokens and max-total-tokens tuning, quantization flags, warmup and cold-start behaviour, GPU-memory pressure, and Prometheus metrics), and — where it makes sense — plan and execute a clean migration to vLLM or SGLang or to managed Inference Endpoints, re-tuning batching, KV cache, and autoscaling so throughput and latency match or beat your old setup. We are honest about when migration is worth it and when your current TGI is fine for now.',
  faqs: [
    ...hfServiceFaqs('TGI (Text Generation Inference)', 'We keep existing TGI deployments stable and plan/execute migration to vLLM or SGLang without regressing your latency or throughput.'),
    {
      question: 'Is TGI deprecated? Do I have to migrate immediately?',
      answer:
        'TGI is in maintenance and its repository was archived, so it will not get new models or performance work. You do not have to migrate immediately if your current deployment is stable — but you should plan for it, because new open models will target vLLM and SGLang first. We help you decide the timing and do the migration without downtime.',
    },
    {
      question: 'How hard is migrating from TGI to vLLM?',
      answer:
        'The model loading and API surface differ, and your batching/concurrency tuning does not transfer one-to-one, but the migration is well-trodden. We map your TGI launch flags to vLLM/SGLang equivalents, reproduce your API contract (including OpenAI-compatible endpoints), re-tune continuous batching and KV cache, and benchmark before cutover so you do not regress.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_SERVING_LINK,
    ],
    techLinks: [HF_VLLM_LINK, HF_ENDPOINTS_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_PROVIDERS_LINK, HF_TEI_LINK, HF_GPU_LINK, HF_QUANT_LINK,
      EXISTING.modelDeployment, EXISTING.mlops,
    ],
  }),
});

// ─── vLLM ────────────────────────────────────────────────────────────────────

export const vllm: LandingPageConfig = hfServicePage({
  slug: 'vllm-inference-job-support',
  title: 'vLLM Inference Job Support | PagedAttention, Continuous Batching & Throughput',
  description:
    'Job support for vLLM — serving Hugging Face models with PagedAttention and continuous batching, tensor parallelism, quantization, the Transformers backend, and OpenAI-compatible APIs. Fix low throughput, OOM, and high TTFT.',
  keywords: [
    'vLLM job support', 'vLLM inference support', 'PagedAttention continuous batching', 'vLLM tensor parallelism',
    'vLLM OpenAI API', 'vLLM quantization', 'vLLM throughput tuning', 'vLLM Transformers backend',
  ],
  h1: 'vLLM Inference Job Support — Maximise Throughput Without OOM',
  tagline:
    'Real-time help running vLLM in production — PagedAttention, continuous batching, tensor parallelism, quantization, and the OpenAI-compatible server tuned for your throughput, latency, and GPU budget.',
  heroEyebrow: 'vLLM Serving Support',
  painIntro:
    'vLLM crashing with CUDA OOM at load, serving fewer requests than the GPU should handle, or spiking TTFT under concurrency? These are almost always memory-fraction, max-model-len, and batching settings — not the hardware. We tune them with you.',
  heroVariant:
    'vLLM is now the general-purpose default for serving open LLMs, and it has become tightly integrated with Hugging Face: through the Transformers-as-backend path, Transformers is the model-definition source of truth and vLLM serves those definitions at high speed. We help you run it well — PagedAttention and continuous batching, gpu-memory-utilization and max-model-len sizing to avoid OOM while maximising the KV-cache, tensor and pipeline parallelism for multi-GPU and large models, quantization (AWQ/GPTQ/bitsandbytes/FP8) for memory headroom, chunked prefill and prefix caching, speculative decoding where it pays off, the OpenAI-compatible server and structured outputs, and autoscaling on Kubernetes. We diagnose real symptoms: OOM on startup, low tokens/sec, high TTFT under load, and long-context memory pressure.',
  faqs: [
    ...hfServiceFaqs('vLLM', 'We tune PagedAttention, continuous batching, parallelism, and quantization on your real model and traffic, and fix OOM and throughput problems.'),
    {
      question: 'vLLM crashes with CUDA OOM when it starts — why?',
      answer:
        'Usually gpu-memory-utilization plus max-model-len reserve more KV-cache than fits, or the model is simply too big for one GPU. We right-size gpu-memory-utilization, set a realistic max-model-len for your prompts, enable quantization or tensor parallelism if needed, and check for other processes holding VRAM. The fix is almost always configuration, not a bigger GPU.',
    },
    {
      question: 'How does vLLM relate to Hugging Face Transformers now?',
      answer:
        'Transformers is the model-definition source of truth for the ecosystem, and vLLM can use Transformers model definitions as a backend — so new architectures become servable quickly while vLLM provides the high-performance runtime (PagedAttention, continuous batching). Practically, you load Hugging Face weights and serve them with vLLM. We help you wire this up and tune it.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_SERVING_LINK,
    ],
    techLinks: [HF_TRANSFORMERS_INFERENCE_LINK, HF_GPU_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_TGI_LINK, HF_ENDPOINTS_LINK, HF_QUANT_LINK, LOCAL_LINK,
      EXISTING.modelDeployment, EXISTING.llm, EXISTING.llmEngineer,
    ],
  }),
});

// ─── Local inference (llama.cpp / Ollama / MLX) ──────────────────────────────

export const localInference: LandingPageConfig = hfServicePage({
  slug: 'huggingface-local-inference-job-support',
  title: 'Local LLM Inference Job Support | llama.cpp, Ollama, MLX & GGUF',
  description:
    'Job support for running Hugging Face models locally — llama.cpp and GGUF, Ollama, and MLX on Apple Silicon. Quantization, context length, GPU/Metal offload, and privacy-first on-device deployment.',
  keywords: [
    'local LLM inference job support', 'llama.cpp GGUF support', 'Ollama Hugging Face', 'MLX Apple Silicon LLM',
    'run LLM locally', 'on-device inference', 'GGUF quantization support',
  ],
  h1: 'Local LLM Inference Job Support — llama.cpp, Ollama & MLX',
  tagline:
    'Real-time help running open models on your own hardware — llama.cpp/GGUF, Ollama, and MLX on Apple Silicon — with the right quantization, context length, and GPU/Metal offload.',
  heroEyebrow: 'Local Inference Support',
  painIntro:
    'Need models running on a laptop, an edge box, or air-gapped hardware for privacy or cost — but hitting slow generation, wrong quantization, or context-length limits? Local inference has its own trade-offs. We help you get usable speed and quality on the hardware you actually have.',
  heroVariant:
    'Not every workload belongs on a GPU server. We help you run Hugging Face models locally and on-device: llama.cpp with GGUF quantized weights (choosing the right quant level for your quality/speed/RAM budget, GPU/Metal/CPU offload, context length and KV-cache), Ollama for a simple local model runtime and API (including pulling models directly from the Hub), and MLX for efficient inference and fine-tuning on Apple Silicon. This is the right path for privacy-first and offline use cases, developer laptops, and edge deployment. We cover converting and quantizing Hugging Face models to GGUF, picking quant levels, wiring a local OpenAI-compatible endpoint, and knowing when local is the wrong answer and you should serve on a GPU instead.',
  faqs: [
    ...hfServiceFaqs('local LLM inference', 'We help you run models locally with llama.cpp, Ollama, or MLX — quantization, offload, and context tuning for your hardware.'),
    {
      question: 'Which quantization level should I use for llama.cpp / GGUF?',
      answer:
        'It is a quality/size/speed trade-off. 4-bit variants (e.g. Q4_K_M) are the common sweet spot for most local use — big memory savings with modest quality loss; go higher (Q5/Q6/Q8) if you have RAM/VRAM and need quality, lower only if you are memory-starved. We help you pick based on your model, hardware, and task, and measure the quality impact.',
    },
    {
      question: 'Ollama or llama.cpp directly?',
      answer:
        'Ollama wraps llama.cpp with a friendly model manager and a local API — great for quick setup, developer machines, and pulling Hub models with one command. Use llama.cpp directly when you need fine-grained control over flags, offload, and builds, or to embed it. We help with both and can move you between them.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_SERVING_LINK,
    ],
    techLinks: [HF_QUANT_LINK, HF_VLLM_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_PROVIDERS_LINK, HF_TRANSFORMERS_INFERENCE_LINK, HF_GPU_LINK,
      EXISTING.llm, EXISTING.modelDeployment,
    ],
  }),
});

export const huggingFaceInferencePages: LandingPageConfig[] = [
  llmServing,
  tgi,
  vllm,
  localInference,
];
