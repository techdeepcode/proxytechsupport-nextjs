import type { LandingPageConfig } from '../landing-pages';
import {
  hfServicePage,
  relatedLinks,
  hfKbFaqs,
  EXISTING,
  HF_HUB_LINK,
  HF_INTERVIEW_HUB_LINK,
  HF_PRODUCTION_LINK,
  HF_PEFT_LINK,
  HF_QLORA_LINK,
  HF_TRL_LINK,
  HF_VLLM_LINK,
  HF_TGI_LINK,
  HF_SERVING_LINK,
  HF_ENDPOINTS_LINK,
  HF_PROVIDERS_LINK,
  HF_SMOLAGENTS_LINK,
  HF_QUANT_LINK,
  HF_HUB_PLATFORM_LINK,
  HF_TRANSFORMERS_TRAINING_LINK,
  HF_RAG_HUB_LINK,
} from './shared';

// KB guides are educational: soften the CTA to match reference-vs-sales balance.
const kbCTA = {
  bottomCTAHeading: 'Want Hands-On Help Applying This?',
  bottomCTABody:
    'This is an educational guide. If you want live help on your real project — Hugging Face proxy job support, production troubleshooting, or proxy interview support (real-time technical help; you attend your own interview) — our in-house LLM engineers are available same-day. Message ProxyTechSupport on WhatsApp.',
};

// ─── What is Hugging Face (pillar KB) ────────────────────────────────────────

export const whatIsHuggingFace: LandingPageConfig = hfServicePage({
  slug: 'what-is-hugging-face-guide',
  title: 'What Is Hugging Face? A 2026 Guide to the LLM & GenAI Ecosystem',
  description:
    'A clear guide to Hugging Face in 2026 — the Hub, Transformers, Datasets, PEFT/TRL fine-tuning, Sentence Transformers, Diffusers, smolagents, Inference Endpoints/Providers, and how the pieces fit together for LLM and generative-AI engineering.',
  keywords: [
    'what is Hugging Face', 'Hugging Face ecosystem guide', 'Hugging Face explained', 'Hugging Face Hub Transformers',
    'Hugging Face libraries overview', 'Hugging Face 2026',
  ],
  h1: 'What Is Hugging Face? The 2026 Ecosystem Guide',
  tagline:
    'A plain-English map of the Hugging Face ecosystem in 2026 — the Hub and the core libraries, how they connect, and where each fits in a real LLM/GenAI project.',
  heroEyebrow: 'Knowledge Base · Guide',
  painIntro:
    'Hugging Face is far more than "the model website" — it is a full stack for building with open models, and the number of libraries can be bewildering. This guide maps the ecosystem and how the pieces connect, so you know what to reach for.',
  heroVariant:
    'Hugging Face is the central platform and open-source ecosystem for machine learning, especially LLMs and generative AI. At the center is the Hub — a registry of models, datasets, and Spaces (apps), accessed via the huggingface_hub library and the hf CLI, with Xet storage replacing Git LFS. Around it sit the core libraries: Transformers (the model-definition framework and source of truth for the ecosystem, now v5), Datasets and Tokenizers for data, PEFT and TRL for fine-tuning and alignment, Sentence Transformers for embeddings and reranking, Diffusers for image/video generation, and smolagents for agents. For running models there are Inference Providers (serverless, OpenAI-compatible router) and Inference Endpoints (dedicated managed infra), plus self-hosting with vLLM/SGLang (TGI is now legacy). Supporting tools include Accelerate, Optimum, the Kernels/Kernel Hub, Trackio (tracking), Lighteval (evaluation), AutoTrain, and HF Jobs. This guide explains what each does and how a real project threads them together: pick a model on the Hub → fine-tune with PEFT/TRL on your data → evaluate with Lighteval → serve with vLLM or Endpoints → track and monitor. Each linked page below goes deeper.',
  faqs: [
    ...hfKbFaqs('Hugging Face ecosystem'),
    {
      question: 'Is Hugging Face free?',
      answer:
        'The core libraries (Transformers, Datasets, PEFT, TRL, Diffusers, etc.) are free and open source, and public models/datasets are free to download. You pay for managed compute — Inference Endpoints, some Spaces hardware, HF Jobs, and Enterprise Hub features. Many teams use the free libraries with their own or cloud infrastructure and never pay Hugging Face directly.',
    },
    {
      question: 'Do I need Hugging Face to use open-source LLMs?',
      answer:
        'Practically, it is the default distribution and tooling hub — most open models ship there first and the libraries are the common interface. You can run models without it, but you would be rebuilding a lot of what the ecosystem gives you for free. Understanding Hugging Face is effectively table stakes for open-model engineering in 2026.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_HUB_PLATFORM_LINK,
    ],
    techLinks: [HF_TRANSFORMERS_TRAINING_LINK, HF_SERVING_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_PEFT_LINK, HF_TRL_LINK, HF_RAG_HUB_LINK, HF_SMOLAGENTS_LINK, HF_ENDPOINTS_LINK,
      EXISTING.genai, EXISTING.llm, EXISTING.rag,
    ],
  }),
  ...kbCTA,
});

// ─── PEFT vs full fine-tuning ────────────────────────────────────────────────

export const peftVsFull: LandingPageConfig = hfServicePage({
  slug: 'peft-vs-full-fine-tuning-guide',
  title: 'PEFT vs Full Fine-Tuning: Which Should You Use? (2026 Guide)',
  description:
    'A practical comparison of parameter-efficient fine-tuning (LoRA/QLoRA) vs full fine-tuning — memory, cost, quality, portability, and when each is the right choice for adapting an LLM.',
  keywords: [
    'PEFT vs full fine-tuning', 'LoRA vs full fine-tuning', 'parameter efficient fine-tuning guide',
    'when to use LoRA', 'full fine-tuning cost', 'fine-tuning comparison',
  ],
  h1: 'PEFT vs Full Fine-Tuning — Which Should You Use?',
  tagline:
    'What actually differs between parameter-efficient fine-tuning (LoRA/QLoRA) and full fine-tuning — memory, cost, quality, and portability — and how to choose.',
  heroEyebrow: 'Knowledge Base · Comparison',
  painIntro:
    'Should you fine-tune every weight or just train small adapters? The answer drives your GPU bill, iteration speed, and deployment story. This guide compares them on what matters in practice.',
  heroVariant:
    'Full fine-tuning updates all of a model’s weights: maximum adaptation capacity, but it needs enough GPU memory to hold weights, gradients, and optimizer states (often several times the model size), produces a full-size checkpoint per task, and is slow and expensive to iterate. Parameter-efficient fine-tuning (PEFT) — chiefly LoRA and QLoRA — freezes the base model and trains small low-rank adapters: far less memory, fast iteration, tiny portable adapters you can swap or stack at inference, and near-full quality for most adaptation tasks. QLoRA goes further by quantizing the frozen base to 4-bit so large models fit on a single GPU. The trade-off: full fine-tuning can edge ahead when you are deeply changing model behaviour or have abundant data and compute; PEFT wins on cost, speed, and operational simplicity for the vast majority of real projects. This guide covers the memory maths, quality evidence, and the decision rule, and links to hands-on support.',
  faqs: [
    ...hfKbFaqs('PEFT vs full fine-tuning'),
    {
      question: 'Does LoRA match full fine-tuning quality?',
      answer:
        'For most adaptation tasks, LoRA (and QLoRA) get very close to full fine-tuning quality at a fraction of the cost — which is why they are the default. Full fine-tuning can pull ahead when you are substantially reshaping the model’s behaviour or training on very large in-domain corpora. The honest answer is to measure on your task, but start with PEFT.',
    },
    {
      question: 'When is full fine-tuning actually worth it?',
      answer:
        'When PEFT plateaus below your quality bar despite good data, when you are doing continued pretraining or major behaviour changes, and when you have the GPUs and data to justify it. For most teams adapting a model to a domain or task, that threshold is rarely reached — PEFT is enough and far cheaper.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_PEFT_LINK,
    ],
    techLinks: [HF_QLORA_LINK, HF_TRL_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_QUANT_LINK,
      EXISTING.loraQlora, EXISTING.fineTuning, EXISTING.ragVsFineTuning,
    ],
  }),
  ...kbCTA,
});

// ─── SFT vs DPO vs GRPO ──────────────────────────────────────────────────────

export const sftDpoGrpo: LandingPageConfig = hfServicePage({
  slug: 'sft-vs-dpo-vs-grpo-guide',
  title: 'SFT vs DPO vs GRPO: LLM Post-Training Methods Compared (2026)',
  description:
    'A clear comparison of SFT, DPO, and GRPO for LLM post-training — what each optimizes, the data it needs, when to use it, and how they fit together in an alignment pipeline with TRL.',
  keywords: [
    'SFT vs DPO vs GRPO', 'LLM post-training methods', 'DPO vs GRPO', 'supervised fine-tuning vs DPO',
    'preference optimization guide', 'RLHF alignment methods',
  ],
  h1: 'SFT vs DPO vs GRPO — Post-Training Methods Compared',
  tagline:
    'What SFT, DPO, and GRPO each optimize, the data they need, and how they stack into a real alignment pipeline — without pretending they are interchangeable.',
  heroEyebrow: 'Knowledge Base · Comparison',
  painIntro:
    'SFT, DPO, and GRPO all "train" an LLM, but they solve different problems and need different data. Confusing them wastes compute and produces worse models. This guide draws the lines clearly.',
  heroVariant:
    'These methods are stages, not rivals. SFT (supervised fine-tuning) teaches a model to follow instructions and adopt a style from labeled prompt→response examples — it is where most projects start and often stop. DPO (Direct Preference Optimization) then aligns the model to human preference using pairs (a chosen and a rejected response), without training a separate reward model or running online RL — simple and stable. GRPO (Group Relative Policy Optimization) is an online RL method that optimizes a policy against a reward or verifiable signal by comparing groups of sampled generations — powerful for reasoning and tasks where you can score outputs, but heavier to run. A common pipeline is SFT → DPO, adding GRPO (or reward modeling + RL) when you have a reward function or verifiable tasks. TRL implements all of them (SFTTrainer, DPOTrainer, GRPOTrainer, RewardTrainer). This guide explains the data, cost, and failure modes of each, and when to reach for which.',
  faqs: [
    ...hfKbFaqs('SFT, DPO and GRPO'),
    {
      question: 'Do I need DPO or GRPO if SFT already works?',
      answer:
        'Often not. SFT alone gets many products to "good enough." Add DPO when you have preference data and want to align tone, helpfulness, or safety beyond what SFT gives. Reach for GRPO/RL when you can define a reward or verify correctness (e.g. math, code, tool use) and want the model to improve against that signal. Start simple and escalate only when measurement says you should.',
    },
    {
      question: 'What data does each method need?',
      answer:
        'SFT needs prompt→response examples. DPO needs preference pairs (prompt + chosen + rejected). GRPO needs a way to score generations — a reward model or a verifiable checker. The data requirement, more than the algorithm, usually decides what is feasible; we help teams build the right dataset for the method they need.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_TRL_LINK,
    ],
    techLinks: [HF_PEFT_LINK, HF_QLORA_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK,
      { label: 'DPO job support', href: '/huggingface-dpo-job-support/' },
      { label: 'GRPO job support', href: '/huggingface-grpo-job-support/' },
      EXISTING.fineTuning, EXISTING.llm,
    ],
  }),
  ...kbCTA,
});

// ─── TGI vs vLLM ─────────────────────────────────────────────────────────────

export const tgiVsVllm: LandingPageConfig = hfServicePage({
  slug: 'tgi-vs-vllm-guide',
  title: 'TGI vs vLLM in 2026: Why the Serving Default Changed',
  description:
    'A 2026 comparison of TGI and vLLM for serving open LLMs — why TGI moved to maintenance and vLLM/SGLang became the recommended stack, the technical differences, and how to migrate.',
  keywords: [
    'TGI vs vLLM', 'TGI maintenance mode', 'vLLM vs TGI 2026', 'LLM serving comparison',
    'migrate TGI to vLLM', 'best LLM serving framework',
  ],
  h1: 'TGI vs vLLM — Why the Serving Default Changed',
  tagline:
    'What changed between TGI and vLLM in 2026, how they differ technically, and what it means for teams still running TGI.',
  heroEyebrow: 'Knowledge Base · Comparison',
  painIntro:
    'If you learned LLM serving a year ago, TGI was the Hugging Face default. That changed. This guide explains what happened, how vLLM differs, and whether you should migrate.',
  heroVariant:
    'Text Generation Inference (TGI) was Hugging Face’s production LLM server and pioneered features like continuous batching in the HF stack. In 2026 it entered maintenance mode and its repository was archived — Hugging Face now points new work at vLLM, SGLang, and (for local) llama.cpp/MLX. vLLM is the general-purpose default: PagedAttention for efficient KV-cache memory, continuous batching for throughput, broad model coverage, an OpenAI-compatible server, and a tight Transformers integration where Transformers is the model-definition source of truth. SGLang complements it for multi-turn and shared-prefix/agent workloads via RadixAttention prefix caching. The practical takeaway: existing TGI deployments still run, but they will not gain new models or performance work, so new projects should choose vLLM (or SGLang), and running TGI deployments should plan a migration. This guide compares the two on architecture, features, and operations, and outlines a safe migration path.',
  faqs: [
    ...hfKbFaqs('TGI vs vLLM'),
    {
      question: 'Is TGI dead? Should I migrate off it now?',
      answer:
        'TGI is in maintenance with its repo archived — not getting new features or models — so treat it as legacy. If your deployment is stable you need not migrate this week, but you should plan it, because new open models will target vLLM/SGLang first. Migrating means mapping launch flags, reproducing your API (including OpenAI-compatible routes), and re-tuning batching/KV cache, then benchmarking before cutover.',
    },
    {
      question: 'Is vLLM always better than TGI was?',
      answer:
        'For new work, vLLM is the recommended and actively developed choice with strong throughput and model coverage. "Better" still depends on your model and traffic — which is why you benchmark on your own workload. But given TGI is frozen, the momentum, model support, and performance work are all on vLLM and SGLang now.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_SERVING_LINK,
    ],
    techLinks: [HF_VLLM_LINK, HF_TGI_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_ENDPOINTS_LINK, HF_QUANT_LINK,
      EXISTING.modelDeployment, EXISTING.mlops,
    ],
  }),
  ...kbCTA,
});

// ─── Inference Providers vs Endpoints ────────────────────────────────────────

export const providersVsEndpoints: LandingPageConfig = hfServicePage({
  slug: 'inference-providers-vs-endpoints-guide',
  title: 'Inference Providers vs Inference Endpoints: Which to Use? (2026)',
  description:
    'A clear comparison of Hugging Face Inference Providers (serverless router) vs Inference Endpoints (dedicated managed infra) — cost model, control, scaling, privacy, and when to choose each.',
  keywords: [
    'Inference Providers vs Inference Endpoints', 'Hugging Face serverless vs dedicated', 'Inference Providers router',
    'Inference Endpoints dedicated', 'Hugging Face inference comparison', 'serverless LLM inference',
  ],
  h1: 'Inference Providers vs Inference Endpoints — Which to Use?',
  tagline:
    'How Hugging Face’s serverless Inference Providers differ from dedicated Inference Endpoints — cost, control, scaling, and privacy — and how to choose per workload.',
  heroEyebrow: 'Knowledge Base · Comparison',
  painIntro:
    'Both are "Hugging Face inference," but they are very different products with different cost and control models. Picking the wrong one means overpaying or hitting limits. This guide draws the distinction.',
  heroVariant:
    'Inference Providers is a serverless router: a single OpenAI-compatible endpoint (router.huggingface.co/v1) that routes your request to third-party and Hugging Face inference providers, with provider selection and pay-per-use pricing. It is ideal for getting started, spiky or low-volume traffic, and trying many models without provisioning anything — no servers, instant access. (The old serverless Inference API it replaced is fully decommissioned; "HF Inference" is now just one provider behind the router.) Inference Endpoints is the opposite trade: dedicated, managed infrastructure you provision (on your chosen cloud/hardware) that autoscales — including scale-to-zero — and gives you a private, predictable, isolated deployment with custom containers (vLLM/TGI/TEI). It suits steady or high-volume production, data-isolation needs, and custom serving. The rule of thumb: prototype and burst on Providers; run steady production or private workloads on dedicated Endpoints. This guide compares them on cost, control, latency predictability, privacy, and scaling.',
  faqs: [
    ...hfKbFaqs('Inference Providers vs Inference Endpoints'),
    {
      question: 'Is the old Inference API the same as these?',
      answer:
        'No — the legacy serverless Inference API (api-inference.huggingface.co) is decommissioned. Its serverless role is now filled by Inference Providers (the OpenAI-compatible router). Inference Endpoints is a separate, dedicated managed-infrastructure product. If you have old code hitting the legacy API, it needs to move to Providers or Endpoints; we help with that migration.',
    },
    {
      question: 'Which is cheaper?',
      answer:
        'It depends on volume. Providers (pay-per-use) is cheaper for low or bursty traffic because you pay nothing when idle. Dedicated Endpoints can be cheaper per token at sustained high volume, and scale-to-zero limits idle cost. We help you model your traffic to pick the cheaper option for your actual usage rather than guessing.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_ENDPOINTS_LINK,
    ],
    techLinks: [HF_PROVIDERS_LINK, HF_SERVING_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_VLLM_LINK,
      EXISTING.modelDeployment, EXISTING.llm,
    ],
  }),
  ...kbCTA,
});

// ─── CodeAgent vs ToolCallingAgent ───────────────────────────────────────────

export const codeagentVsToolcalling: LandingPageConfig = hfServicePage({
  slug: 'codeagent-vs-toolcallingagent-guide',
  title: 'CodeAgent vs ToolCallingAgent: smolagents Patterns Compared (2026)',
  description:
    'A comparison of smolagents’ CodeAgent and ToolCallingAgent — how each expresses actions, their strengths and risks, sandboxing needs, and when to use code-writing vs structured tool-calling agents.',
  keywords: [
    'CodeAgent vs ToolCallingAgent', 'smolagents comparison', 'code agent vs tool calling agent',
    'smolagents patterns', 'agent action types', 'sandboxed code agent',
  ],
  h1: 'CodeAgent vs ToolCallingAgent — Which smolagents Pattern?',
  tagline:
    'How smolagents’ CodeAgent and ToolCallingAgent differ in how they act, their strengths and risks, and when to choose each.',
  heroEyebrow: 'Knowledge Base · Comparison',
  painIntro:
    'smolagents gives you two ways for an agent to act — write code or emit structured tool calls. They behave very differently in power, predictability, and safety. This guide helps you choose.',
  heroVariant:
    'In smolagents, agents differ mainly in how they express actions. A CodeAgent writes executable Python as its action — it can chain logic, do computation, and compose tool calls in one step, which is expressive and often more efficient for multi-step reasoning. The catch is that it executes model-written code, so it must run in a sandbox (E2B, Modal, Docker, or restricted environments) and demands careful security thinking. A ToolCallingAgent instead emits structured tool calls (JSON), like classic function calling: more constrained and predictable, easier to validate and gate, and a natural fit for well-defined tools and MCP integrations. The choice: CodeAgent for complex, computation-heavy tasks where you can sandbox safely; ToolCallingAgent for controlled, auditable actions against defined tools. Both share the same tools, model abstraction, and multi-agent orchestration. Note smolagents APIs are still stabilizing (pre-2.0). This guide covers the trade-offs, sandboxing, and how to pick.',
  faqs: [
    ...hfKbFaqs('CodeAgent vs ToolCallingAgent'),
    {
      question: 'Which is safer, and does it matter?',
      answer:
        'ToolCallingAgent is inherently more constrained because it only invokes predefined tools with structured arguments. CodeAgent executes generated code, so it is more powerful but requires sandboxing (E2B/Modal/Docker) and permission controls to be safe. It matters a lot in production and any untrusted context — never run a code agent unsandboxed. We help teams set up safe execution for code agents.',
    },
    {
      question: 'Can I use MCP tools with either?',
      answer:
        'Yes — MCP (Model Context Protocol) lets you connect external tools to agents, and both agent types can use tools sourced via MCP. ToolCallingAgent maps especially naturally to structured MCP tool calls. We help you wire MCP tool collections into whichever agent pattern fits your task.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_SMOLAGENTS_LINK,
    ],
    techLinks: [
      { label: 'Tool-calling agents job support', href: '/huggingface-tool-calling-agents-job-support/' },
      { label: 'Code agents job support', href: '/huggingface-code-agents-job-support/' },
    ],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK,
      { label: 'MCP agents job support', href: '/huggingface-mcp-agents-job-support/' },
      EXISTING.agenticAi, EXISTING.agenticEngineer,
    ],
  }),
  ...kbCTA,
});

// ─── 4-bit vs 8-bit quantization ─────────────────────────────────────────────

export const quant4vs8: LandingPageConfig = hfServicePage({
  slug: 'transformers-quantization-4bit-vs-8bit-guide',
  title: '4-bit vs 8-bit Quantization: Which for Your LLM? (2026 Guide)',
  description:
    'A practical comparison of 4-bit vs 8-bit quantization for LLMs — memory savings, quality impact, speed, and when to choose each with bitsandbytes, and how AWQ/GPTQ fit in.',
  keywords: [
    '4-bit vs 8-bit quantization', 'bitsandbytes 4-bit 8-bit', 'LLM quantization comparison', 'NF4 quantization',
    'quantization quality tradeoff', 'quantize LLM memory',
  ],
  h1: '4-bit vs 8-bit Quantization — Which for Your LLM?',
  tagline:
    'What 4-bit and 8-bit quantization actually trade off — memory, quality, and speed — and how to choose, plus where AWQ/GPTQ fit.',
  heroEyebrow: 'Knowledge Base · Comparison',
  painIntro:
    'Quantization is the cheapest way to fit a big model on your GPU — but 4-bit vs 8-bit is a real quality/memory decision, not a formality. This guide gives you the trade-offs and a rule of thumb.',
  heroVariant:
    'Quantization stores weights in lower precision to cut memory. 8-bit (e.g. bitsandbytes int8) roughly halves memory versus fp16 with typically minimal quality loss — a safe default when you just need some headroom. 4-bit (e.g. bitsandbytes NF4) roughly halves it again, letting large models fit on a single consumer or mid-range GPU, with a modest and usually acceptable quality cost — and it is the basis of QLoRA fine-tuning. The trade-off is real: 4-bit maximises how big a model you can run but carries more quality risk on demanding tasks; 8-bit is the conservative choice when quality is critical and memory is merely tight. For inference-time speed on a fixed model, calibrated methods like AWQ and GPTQ often beat on-the-fly bitsandbytes. The rule of thumb: use 4-bit to make a model fit at all (and for QLoRA), 8-bit when you have some room and want minimal quality risk, and calibrated AWQ/GPTQ when inference latency matters. Always measure on your task. This guide covers the memory maths and decision.',
  faqs: [
    ...hfKbFaqs('4-bit vs 8-bit quantization'),
    {
      question: 'Will 4-bit hurt my model’s quality?',
      answer:
        'Usually modestly, and often acceptably — modern 4-bit (NF4) is designed to preserve quality well, and many tasks show little practical degradation. Demanding reasoning or precision tasks are more sensitive. The right move is to run a quick evaluation on your actual task at 4-bit and 8-bit and compare, rather than assuming. We help set that up.',
    },
    {
      question: 'Is bitsandbytes the only option?',
      answer:
        'No. bitsandbytes is the easy on-the-fly option (4-bit NF4 / 8-bit, no calibration) and underpins QLoRA. For fastest inference on a fixed model, calibrated AWQ or GPTQ often win; torchao suits torch.compile/CPU paths; compressed-tensors is a portable quantized checkpoint format. Hugging Face unifies these under one interface — we help you pick per use case.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_QUANT_LINK,
    ],
    techLinks: [HF_QLORA_LINK, HF_VLLM_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK,
      { label: 'LLM GPU optimization job support', href: '/huggingface-gpu-optimization-job-support/' },
      EXISTING.loraQlora, EXISTING.modelDeployment,
    ],
  }),
  ...kbCTA,
});

export const huggingFaceComparisonPages: LandingPageConfig[] = [
  whatIsHuggingFace,
  peftVsFull,
  sftDpoGrpo,
  tgiVsVllm,
  providersVsEndpoints,
  codeagentVsToolcalling,
  quant4vs8,
];
