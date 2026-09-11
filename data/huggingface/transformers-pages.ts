import type { LandingPageConfig } from '../landing-pages';
import {
  hfServicePage,
  relatedLinks,
  hfServiceFaqs,
  EXISTING,
  HF_HUB_LINK,
  HF_INTERVIEW_HUB_LINK,
  HF_PRODUCTION_LINK,
  HF_TRANSFORMERS_TRAINING_LINK,
  HF_TRANSFORMERS_INFERENCE_LINK,
  HF_PEFT_LINK,
  HF_QLORA_LINK,
  HF_TRL_LINK,
  HF_ACCELERATE_LINK,
  HF_QUANT_LINK,
  HF_GPU_LINK,
  HF_KERNELS_LINK,
  HF_OPTIMUM_LINK,
  HF_VLLM_LINK,
  HF_SERVING_LINK,
  HF_DATASETS_LINK,
} from './shared';

// ─── Transformers training ───────────────────────────────────────────────────

export const transformersTraining: LandingPageConfig = hfServicePage({
  slug: 'huggingface-transformers-training-job-support',
  title: 'Transformers Training Job Support | Trainer, Distributed & Mixed Precision',
  description:
    'Job support for training with Hugging Face Transformers — the Trainer API, distributed training with Accelerate/FSDP/DeepSpeed, mixed precision, gradient accumulation and checkpointing, torch.compile, and FlashAttention. Fix CUDA OOM and unstable loss.',
  keywords: [
    'Transformers training job support', 'Hugging Face Trainer support', 'distributed training transformers',
    'FSDP DeepSpeed transformers', 'transformers CUDA OOM', 'mixed precision training support',
    'gradient checkpointing transformers', 'torch.compile transformers',
  ],
  h1: 'Transformers Training Job Support — Trainer, Distributed Training & Stability',
  tagline:
    'Real-time help training models with Hugging Face Transformers — the Trainer API, distributed and multi-GPU training, mixed precision, and the memory and stability tuning that keeps runs alive.',
  heroEyebrow: 'Transformers Training Support',
  painIntro:
    'A training run dying on CUDA out-of-memory, loss diverging to NaN, or multi-GPU throughput far below what the hardware should deliver? Training with Transformers is powerful but unforgiving — one wrong precision, batch, or sharding choice wastes GPU-hours. We help you get stable, efficient runs.',
  heroVariant:
    'The Trainer API remains the current, recommended way to train and fine-tune with Transformers (v5) — it handles the training loop, mixed precision, gradient accumulation and checkpointing, logging, evaluation, and distributed execution through Accelerate. We help with TrainingArguments tuning, distributed training via Accelerate with FSDP or DeepSpeed ZeRO, activation/gradient checkpointing to fit larger models, mixed precision (bf16/fp16), torch.compile, FlashAttention and other attention backends (including kernels-loaded attention), learning-rate schedules and stability, dataset streaming with Datasets, and diagnosing CUDA OOM and NaN loss. For parameter-efficient training we bridge to PEFT and TRL.',
  faqs: [
    ...hfServiceFaqs('Transformers training', 'We help with the Trainer API, TrainingArguments, distributed/multi-GPU training, mixed precision, and memory tuning on your real training job.'),
    {
      question: 'How do I fix CUDA out-of-memory during training?',
      answer:
        'OOM usually comes from batch size, sequence length, optimizer state, or activations. In order of impact we typically reduce per-device batch size and use gradient accumulation, enable gradient (activation) checkpointing, switch to bf16 mixed precision, use a memory-efficient optimizer or offload with DeepSpeed/FSDP, and consider PEFT/QLoRA so only adapters train. We identify which lever fits your model size and GPU and apply it without wrecking throughput.',
    },
    {
      question: 'Is the Trainer still the right choice, or should I use Accelerate directly?',
      answer:
        'Trainer is still current and is the fastest path for most fine-tuning and training work — it already uses Accelerate under the hood for distribution. Drop to a custom Accelerate loop when you need full control of the step (custom losses, non-standard data flow, RL-style updates). We help you pick and, where useful, combine them.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'Transformers inference job support', href: '/huggingface-transformers-inference-job-support/' },
    ],
    techLinks: [HF_ACCELERATE_LINK, HF_PEFT_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_TRANSFORMERS_INFERENCE_LINK, HF_QLORA_LINK, HF_TRL_LINK, HF_GPU_LINK,
      HF_QUANT_LINK, HF_DATASETS_LINK,
      EXISTING.transformers, EXISTING.pytorch, EXISTING.fineTuning, EXISTING.loraQlora,
    ],
  }),
});

// ─── Transformers inference ──────────────────────────────────────────────────

export const transformersInference: LandingPageConfig = hfServicePage({
  slug: 'huggingface-transformers-inference-job-support',
  title: 'Transformers Inference Job Support | generate, device_map & Tensor Parallelism',
  description:
    'Job support for inference with Hugging Face Transformers — text generation and decoding, device_map sharding, tensor parallelism, KV cache, attention backends (FlashAttention/SDPA), batching, and streaming. Cut latency and raise tokens/sec.',
  keywords: [
    'Transformers inference job support', 'transformers generate support', 'device_map support',
    'tensor parallelism transformers', 'KV cache transformers', 'transformers batching latency',
    'FlashAttention transformers', 'transformers streaming generation',
  ],
  h1: 'Transformers Inference Job Support — Generation, Sharding & Latency',
  tagline:
    'Real-time help running inference with Transformers — generation and decoding strategies, device_map and tensor parallelism, KV cache, attention backends, batching, and streaming for lower latency and higher throughput.',
  heroEyebrow: 'Transformers Inference Support',
  painIntro:
    'Generation too slow, tokens/sec below expectations, or a large model that will not fit on your GPUs? Transformers inference has many levers — decoding strategy, device mapping, attention implementation, KV cache, and batching — and the defaults are rarely optimal. We help you tune them.',
  heroVariant:
    'We help across Transformers inference: the generate API and decoding strategies (greedy, sampling, beam, temperature/top-p, repetition control), device_map="auto" for automatic multi-GPU sharding, tensor parallelism via tp_plan for large models, KV cache configuration, attention-implementation selection (flash_attention_2, sdpa, flex_attention, or kernels-loaded attention), static vs dynamic batching, streaming with a TextStreamer, and quantized inference. For high-throughput serving we help decide when to move from raw Transformers to vLLM or an Inference Endpoint — Transformers is the model-definition source those engines consume.',
  faqs: [
    ...hfServiceFaqs('Transformers inference', 'We help tune generation, device_map/tensor parallelism, attention backends, KV cache, and batching to hit your latency and throughput targets.'),
    {
      question: 'When should I use raw Transformers vs vLLM or an Inference Endpoint?',
      answer:
        'Raw transformers.generate is great for experimentation, batch/offline inference, and custom logic. For production serving with many concurrent users you usually want vLLM or SGLang (continuous batching, paged KV cache, much higher throughput) or a managed Inference Endpoint. Because Transformers is now the ecosystem model-definition framework, those engines consume the same model definition — so moving over is straightforward. We help you make and execute the switch.',
    },
    {
      question: 'How do I raise tokens/sec without more GPUs?',
      answer:
        'The biggest wins are usually a faster attention backend (FlashAttention/SDPA or a kernels-loaded kernel), quantization (4-bit/8-bit or GPTQ/AWQ) to cut memory bandwidth, correct KV-cache use, and batching concurrent requests. We profile where time is going (prefill vs decode) and apply the levers that fit your model and hardware.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'LLM serving job support', href: '/huggingface-llm-serving-job-support/' },
    ],
    techLinks: [HF_QUANT_LINK, HF_VLLM_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_TRANSFORMERS_TRAINING_LINK, HF_GPU_LINK, HF_KERNELS_LINK, HF_OPTIMUM_LINK, HF_SERVING_LINK,
      EXISTING.transformers, EXISTING.pytorch, EXISTING.modelDeployment,
    ],
  }),
});

// ─── Transformers quantization ───────────────────────────────────────────────

export const transformersQuantization: LandingPageConfig = hfServicePage({
  slug: 'huggingface-transformers-quantization-job-support',
  title: 'Transformers Quantization Job Support | bitsandbytes, GPTQ, AWQ & torchao',
  description:
    'Job support for quantizing Hugging Face Transformers models — 4-bit and 8-bit with bitsandbytes, GPTQ, AWQ and torchao. Fit big models on smaller GPUs, keep accuracy, and fix dtype and device_map errors.',
  keywords: [
    'transformers quantization job support', 'bitsandbytes 4-bit support', 'GPTQ AWQ transformers',
    'torchao quantization', '8-bit LLM inference', 'load_in_4bit support', 'quantization accuracy loss',
  ],
  h1: 'Transformers Quantization Job Support — 4-bit, 8-bit, GPTQ, AWQ & torchao',
  tagline:
    'Real-time help quantizing Transformers models — choosing bitsandbytes, GPTQ, AWQ or torchao, fitting large models on limited GPUs, preserving accuracy, and fixing quantization errors.',
  heroEyebrow: 'Quantization Support',
  painIntro:
    'A model that will not fit on your GPU, or a quantized model whose accuracy collapsed or that throws dtype/device errors? Quantization is the single biggest lever for running large models on modest hardware, but each method has different trade-offs. We help you pick and apply the right one.',
  heroVariant:
    'We help across the quantization methods integrated into Transformers: bitsandbytes 8-bit and 4-bit (NF4) for load-time quantization with minimal setup (the basis of QLoRA); GPTQ and AWQ for calibrated post-training quantization with strong accuracy retention at 4-bit; and torchao for PyTorch-native quantization. We help you choose based on your accuracy, latency, and hardware constraints, configure BitsAndBytesConfig or the relevant config, resolve dtype and device_map errors, evaluate accuracy impact, and combine quantization with the right attention backend and serving stack.',
  faqs: [
    ...hfServiceFaqs('Transformers quantization', 'We help choose and apply bitsandbytes/GPTQ/AWQ/torchao, fit models on your GPUs, and keep accuracy within tolerance.'),
    {
      question: 'What is the difference between 4-bit and 8-bit quantization?',
      answer:
        '8-bit roughly halves memory versus fp16 with very small accuracy loss and is a safe default. 4-bit (e.g. bitsandbytes NF4) roughly quarters memory and lets much larger models fit, at a somewhat higher accuracy cost that is often acceptable and is the basis of QLoRA fine-tuning. We help you pick per model and task and measure the actual accuracy impact rather than guessing.',
    },
    {
      question: 'When should I use GPTQ/AWQ instead of bitsandbytes?',
      answer:
        'bitsandbytes quantizes on load and is easiest for fine-tuning (QLoRA) and quick inference. GPTQ and AWQ are calibrated, ahead-of-time methods that typically give better 4-bit inference accuracy and speed for serving, at the cost of a one-time quantization step. For production inference of a fixed model, GPTQ/AWQ often win; for training or rapid iteration, bitsandbytes is simpler. We help you decide and execute.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'LLM GPU optimization job support', href: '/huggingface-gpu-optimization-job-support/' },
    ],
    techLinks: [HF_QUANT_LINK, HF_GPU_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_TRANSFORMERS_INFERENCE_LINK, HF_QLORA_LINK, HF_OPTIMUM_LINK, HF_KERNELS_LINK, HF_VLLM_LINK,
      EXISTING.transformers, EXISTING.loraQlora,
    ],
  }),
});

// ─── Transformers multimodal ─────────────────────────────────────────────────

export const transformersMultimodal: LandingPageConfig = hfServicePage({
  slug: 'huggingface-transformers-multimodal-job-support',
  title: 'Transformers Multimodal Job Support | Vision-Language & Image-Text Models',
  description:
    'Job support for multimodal models in Hugging Face Transformers — vision-language models (VLMs), image-text-to-text, processors and chat templates, image/audio inputs, and fine-tuning and serving multimodal models in production.',
  keywords: [
    'transformers multimodal job support', 'vision language model support', 'VLM Hugging Face support',
    'image-text-to-text transformers', 'AutoProcessor support', 'multimodal fine-tuning support',
    'transformers vision model support',
  ],
  h1: 'Transformers Multimodal Job Support — Vision-Language Models & Beyond',
  tagline:
    'Real-time help with multimodal models in Transformers — vision-language models, processors and chat templates, image and audio inputs, and multimodal fine-tuning and deployment.',
  heroEyebrow: 'Multimodal & Vision-Language Support',
  painIntro:
    'Working with a vision-language model and stuck on the processor, chat template, image preprocessing, or memory footprint? Multimodal models add a whole extra layer — processors, image tokens, and larger activations — on top of the usual LLM concerns. We help you get them working.',
  heroVariant:
    'We help across multimodal Transformers: loading vision-language models (VLMs) and image-text-to-text pipelines, AutoProcessor and the correct chat template for interleaved image+text, image and audio preprocessing, handling multiple images and long visual context, memory and OOM issues specific to VLMs, fine-tuning multimodal models with PEFT/LoRA, and serving them. We also cover audio and other modalities where the model supports them, and help you evaluate multimodal output quality.',
  faqs: [
    ...hfServiceFaqs('Transformers multimodal', 'We help load and run vision-language models, get the processor and chat template right, and fine-tune and serve multimodal models.'),
    {
      question: 'Why is my vision-language model producing garbage or ignoring the image?',
      answer:
        'The usual causes are the wrong processor/chat template (image tokens not inserted correctly), incorrect image preprocessing (size/normalization), or passing the image and text in a format the model was not trained on. We align your inputs to the model’s expected processor and template so the image is actually attended to, and verify with known examples.',
    },
    {
      question: 'Can I fine-tune a VLM with LoRA?',
      answer:
        'Yes — parameter-efficient fine-tuning with PEFT/LoRA works for many VLMs, typically targeting the language-model and/or projection layers while freezing the vision encoder. It dramatically cuts memory versus full fine-tuning. We help choose target modules, build the multimodal dataset, and run a stable training job.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'PEFT fine-tuning job support', href: '/peft-fine-tuning-job-support/' },
    ],
    techLinks: [HF_TRANSFORMERS_TRAINING_LINK, HF_PEFT_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_TRANSFORMERS_INFERENCE_LINK, HF_QUANT_LINK, HF_QLORA_LINK,
      EXISTING.transformers, EXISTING.genai, EXISTING.pytorch,
    ],
  }),
});

// ─── Transformers.js ─────────────────────────────────────────────────────────

export const transformersJs: LandingPageConfig = hfServicePage({
  slug: 'transformers-js-job-support',
  title: 'Transformers.js Job Support | Run Models in the Browser with WebGPU',
  description:
    'Job support for Transformers.js — run Hugging Face models in the browser and Node.js with WebGPU/WASM, the pipeline API, ONNX models, quantization, and worker threads. Ship on-device AI features with low latency and privacy.',
  keywords: [
    'Transformers.js job support', 'browser ML Hugging Face', 'WebGPU transformers', 'onnx web inference',
    'transformers.js pipeline', 'on-device AI support', 'client-side LLM inference',
  ],
  h1: 'Transformers.js Job Support — In-Browser & On-Device AI',
  tagline:
    'Real-time help with Transformers.js — running models client-side in the browser or Node.js with WebGPU and WASM, the JS pipeline API, ONNX weights, quantization, and web worker integration.',
  heroEyebrow: 'Transformers.js / On-Device Support',
  painIntro:
    'Building an in-browser AI feature and fighting model size, WebGPU support, or main-thread freezes? Transformers.js runs Hugging Face models on-device with no server round-trip — great for latency and privacy — but browser constraints are real. We help you ship it.',
  heroVariant:
    'We help across Transformers.js (v3+): the pipeline API mirroring Python Transformers, running on WebGPU where available with WASM fallback, loading ONNX-format models from the Hub, quantized model variants to cut download size, running inference in a web worker to keep the UI responsive, caching models in the browser, and choosing which tasks are realistic on-device versus server-side. It is a functionally-equivalent JS runtime, so the same model concepts carry over.',
  faqs: [
    ...hfServiceFaqs('Transformers.js', 'We help run models in the browser/Node with WebGPU/WASM, the JS pipeline API, ONNX weights, and worker threads.'),
    {
      question: 'Which models can realistically run in the browser?',
      answer:
        'Smaller task models (embeddings, classification, NER, small ASR, small image models) and quantized small LLMs run well on-device, especially with WebGPU. Large LLMs are usually better served from an Inference Endpoint or Provider. We help you pick the right split — on-device for latency/privacy-sensitive, server-side for heavy generation.',
    },
    {
      question: 'How do I keep the UI responsive during inference?',
      answer:
        'Run Transformers.js inside a web worker so model loading and inference do not block the main thread, stream results back with postMessage, and show progress during the initial model download and warm-up. We help structure the worker, caching, and WebGPU/WASM fallback so the experience stays smooth.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'Transformers inference job support', href: '/huggingface-transformers-inference-job-support/' },
    ],
    techLinks: [HF_TRANSFORMERS_INFERENCE_LINK, HF_OPTIMUM_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_QUANT_LINK,
      EXISTING.transformers, EXISTING.genai,
    ],
  }),
});

export const huggingFaceTransformersPages: LandingPageConfig[] = [
  transformersTraining,
  transformersInference,
  transformersQuantization,
  transformersMultimodal,
  transformersJs,
];
