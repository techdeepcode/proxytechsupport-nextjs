import type { LandingPageConfig } from '../landing-pages';
import {
  hfServicePage,
  relatedLinks,
  hfServiceFaqs,
  EXISTING,
  HF_HUB_LINK,
  HF_INTERVIEW_HUB_LINK,
  HF_PRODUCTION_LINK,
  HF_QUANT_LINK,
  HF_OPTIMUM_LINK,
  HF_KERNELS_LINK,
  HF_GPU_LINK,
  HF_VLLM_LINK,
  HF_TRANSFORMERS_INFERENCE_LINK,
  HF_QLORA_LINK,
  HF_ACCELERATE_LINK,
  HF_AWS_LINK,
} from './shared';

// ─── Quantization ─────────────────────────────────────────────────────────────

export const quantization: LandingPageConfig = hfServicePage({
  slug: 'huggingface-quantization-job-support',
  title: 'Hugging Face Quantization Job Support | bitsandbytes, GPTQ, AWQ & torchao',
  description:
    'Job support for quantizing Hugging Face models — bitsandbytes 4-bit/8-bit, GPTQ, AWQ, torchao, HQQ, and compressed-tensors under the unified HfQuantizer API. Fit big models on smaller GPUs without wrecking quality.',
  keywords: [
    'Hugging Face quantization job support', 'bitsandbytes 4-bit 8-bit', 'GPTQ AWQ quantization', 'torchao quantization',
    'HfQuantizer support', 'model quantization GPU memory', 'quantize LLM Hugging Face',
  ],
  h1: 'Hugging Face Quantization Job Support — Fit Big Models on Smaller GPUs',
  tagline:
    'Real-time help quantizing models the right way — bitsandbytes, GPTQ, AWQ, torchao, HQQ, and compressed-tensors — to cut GPU memory and cost while protecting accuracy and throughput.',
  heroEyebrow: 'Quantization Support',
  painIntro:
    'A model that will not fit in VRAM, or quantization that tanked accuracy or produced dtype errors? Quantization is the highest-leverage way to run large models cheaply — but each method has different trade-offs and failure modes. We help you pick and apply the right one.',
  heroVariant:
    'Hugging Face unifies quantization behind a single HfQuantizer interface, so you can load quantized models in Transformers with a quantization config. We help you choose among the current backends by use case: bitsandbytes for quick on-the-fly 4-bit (NF4) and 8-bit loading with no calibration (and the base for QLoRA); GPTQ and AWQ for calibrated, fast inference-time quantization (AWQ is often fastest at inference); torchao for torch.compile-friendly and CPU paths; HQQ for fast calibration-free quantization; and compressed-tensors as a unified checkpoint format spanning INT8/FP8/GPTQ/AWQ. We cover choosing bits and schemes, calibration data, accuracy validation, combining quantization with LoRA (QLoRA) and with serving (vLLM), and diagnosing dtype/precision mismatches and quantization-incompatibility errors.',
  faqs: [
    ...hfServiceFaqs('quantization', 'We help you choose bitsandbytes, GPTQ, AWQ, torchao, or compressed-tensors, apply it correctly, and validate the accuracy and speed impact.'),
    {
      question: 'Which quantization method should I use?',
      answer:
        'It depends on the goal. For quick memory reduction with no calibration, use bitsandbytes 4-bit (NF4) or 8-bit — and it is the base for QLoRA fine-tuning. For fastest inference on a fixed model, calibrate with AWQ or GPTQ. For torch.compile and CPU, use torchao. For a portable quantized checkpoint, compressed-tensors. We help you match method to your accuracy, latency, and hardware constraints rather than guessing.',
    },
    {
      question: 'Does quantization hurt accuracy?',
      answer:
        'Some, but often surprisingly little at 8-bit and acceptable at 4-bit for many tasks — especially with calibrated methods (AWQ/GPTQ) or NF4. The right answer is to measure on your task, not assume. We help you set up a quick eval so you can quantify the quality drop and decide whether the memory/cost savings are worth it.',
    },
    {
      question: 'What causes dtype / quantization-incompatibility errors?',
      answer:
        'Common causes: mixing an incompatible attention or kernel backend with a quant scheme, loading a quantized checkpoint without the matching library installed, device_map placing quantized layers on CPU, or a Transformers/bitsandbytes/CUDA version mismatch. We read the traceback, pin compatible versions, and fix the config so it loads cleanly.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_GPU_LINK,
    ],
    techLinks: [HF_QLORA_LINK, HF_VLLM_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_OPTIMUM_LINK, HF_KERNELS_LINK, HF_TRANSFORMERS_INFERENCE_LINK,
      EXISTING.loraQlora, EXISTING.fineTuning, EXISTING.modelDeployment,
    ],
  }),
});

// ─── Optimum ─────────────────────────────────────────────────────────────────

export const optimum: LandingPageConfig = hfServicePage({
  slug: 'optimum-job-support',
  title: 'Optimum Job Support | ONNX Export, ORT & Optimum-Neuron for Trainium/Inferentia',
  description:
    'Job support for Hugging Face Optimum — exporting models to ONNX with optimum-onnx and ONNX Runtime, plus Optimum-Neuron for AWS Trainium/Inferentia. Optimise and accelerate inference on target hardware.',
  keywords: [
    'Optimum job support', 'ONNX export Hugging Face', 'ONNX Runtime ORTModel', 'Optimum-Neuron Trainium Inferentia',
    'optimum-onnx', 'hardware accelerated inference', 'export model ONNX support',
  ],
  h1: 'Optimum Job Support — Export & Accelerate on Target Hardware',
  tagline:
    'Real-time help with Optimum — exporting Transformers models to ONNX/ONNX Runtime and running Optimum-Neuron on AWS Trainium/Inferentia for faster, cheaper inference.',
  heroEyebrow: 'Optimum Support',
  painIntro:
    'Need to deploy a Transformers model to an ONNX runtime, a specialised accelerator, or AWS Trainium/Inferentia — and hitting export failures or unsupported ops? Optimum bridges Hugging Face models to optimised hardware backends. We help you export and run cleanly.',
  heroVariant:
    'Optimum adapts Hugging Face Transformers to optimised runtimes and accelerators. We help with ONNX export and ONNX Runtime inference — note that the ONNX exporter now lives in a separate optimum-onnx package (optimum-cli export onnx, ORTModel classes) — including graph optimisation and dynamic vs static shapes; and with Optimum-Neuron for AWS Trainium (training) and Inferentia (inference), where models are ahead-of-time compiled (export_neuron / export_neuronx) for the Neuron SDK. We cover diagnosing unsupported-operator export failures, opset choices, validating parity between PyTorch and the exported model, and integrating exported models into your serving path. This is where "it works in PyTorch" becomes "it runs fast and cheap on the target hardware."',
  faqs: [
    ...hfServiceFaqs('Optimum', 'We help you export models to ONNX/ORT or compile them for Trainium/Inferentia with Optimum-Neuron, and validate parity and speed.'),
    {
      question: 'My ONNX export fails on an unsupported operator — what now?',
      answer:
        'We look at the exact op and opset. Fixes range from bumping the opset, to swapping an unsupported module for an equivalent, to exporting a sub-graph, to using a newer optimum-onnx version where the op is supported. We then validate numerical parity between the PyTorch and ONNX outputs so you trust the exported model before it ships.',
    },
    {
      question: 'When is Optimum-Neuron (Trainium/Inferentia) worth it?',
      answer:
        'When you run at enough scale on AWS that Inferentia/Trainium’s price-performance beats general GPUs. The catch is ahead-of-time compilation and some model-support constraints. We help you assess whether your model and workload fit, compile it with Optimum-Neuron, and benchmark the real cost/latency versus GPU serving before you commit.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_AWS_LINK,
    ],
    techLinks: [HF_QUANT_LINK, HF_GPU_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_KERNELS_LINK, HF_TRANSFORMERS_INFERENCE_LINK, HF_VLLM_LINK,
      EXISTING.awsSagemaker, EXISTING.modelDeployment, EXISTING.mlops,
    ],
  }),
});

// ─── Kernels / Kernel Hub (authority) ────────────────────────────────────────

export const kernels: LandingPageConfig = hfServicePage({
  slug: 'huggingface-kernels-job-support',
  title: 'Hugging Face Kernels Job Support | Kernel Hub, get_kernel & kernelize',
  description:
    'Job support and technical guidance for the Hugging Face Kernels ecosystem — loading precompiled compute kernels from the Kernel Hub with get_kernel, kernelize for optimised layers, CUDA and Triton kernels, and integration with Transformers.',
  keywords: [
    'Hugging Face Kernels job support', 'Kernel Hub get_kernel', 'kernelize Transformers', 'CUDA Triton kernels',
    'compute kernels Hugging Face', 'FlashAttention kernel Hub', 'kernels-community',
  ],
  h1: 'Hugging Face Kernels Job Support — Kernel Hub, get_kernel & kernelize',
  tagline:
    'Real-time help with the Hugging Face Kernels ecosystem — loading precompiled CUDA/Triton kernels from the Kernel Hub, using kernelize to swap in optimised layers, and integrating with Transformers.',
  heroEyebrow: 'Kernels / Kernel Hub Support',
  painIntro:
    'Want FlashAttention, fused MoE, or optimised norm/activation kernels without building CUDA from source on every machine? The Kernel Hub loads precompiled, version-matched kernels at runtime. We help you use them correctly and safely.',
  heroVariant:
    'The Kernels library lets you pull precompiled compute kernels straight from the Hugging Face Hub instead of compiling locally: get_kernel("org/name") downloads a binary matched to your Python/PyTorch/CUDA, and kernelize swaps eligible layers in a model for optimised implementations with no code changes. The kernels-community organisation hosts FlashAttention, MoE, quantization, and normalisation/activation kernels across CUDA and universal Triton. Transformers integrates this so you can opt into optimised layers directly. This is primarily a technical-authority topic: we help engineering teams adopt Kernel Hub kernels, understand versioning/revision pinning and compatibility, benchmark the speedup, reason about the supply-chain/trust implications of loading remote binaries, and integrate kernels into Transformers or custom PyTorch models.',
  faqs: [
    ...hfServiceFaqs('Hugging Face Kernels', 'We help you adopt Kernel Hub kernels (get_kernel/kernelize), pin versions, benchmark speedups, and integrate with Transformers/PyTorch.'),
    {
      question: 'What problem does the Kernel Hub actually solve?',
      answer:
        'Building optimised CUDA kernels (like FlashAttention) from source is slow, fragile, and version-sensitive across machines. The Kernel Hub distributes precompiled kernels matched to your Python/PyTorch/CUDA, so get_kernel just downloads the right binary and you skip the build. kernelize then applies optimised layers to a model automatically. It turns "compile the world" into a fast download.',
    },
    {
      question: 'Is loading remote kernels safe?',
      answer:
        'Kernels are executable binaries pulled from the Hub, so the same supply-chain hygiene applies as any dependency: use trusted publishers (e.g. kernels-community), pin to specific revisions rather than floating, and review what you load in sensitive environments. We help you set a policy that gets the performance benefit without loosening your security posture.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_GPU_LINK,
    ],
    techLinks: [HF_TRANSFORMERS_INFERENCE_LINK, HF_VLLM_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_QUANT_LINK, HF_OPTIMUM_LINK, HF_ACCELERATE_LINK,
      EXISTING.pytorch, EXISTING.modelDeployment,
    ],
  }),
});

// ─── GPU optimization ──────────────────────────────────────────────────────────

export const gpuOptimization: LandingPageConfig = hfServicePage({
  slug: 'huggingface-gpu-optimization-job-support',
  title: 'LLM GPU Optimization Job Support | Memory, Throughput & Latency Tuning',
  description:
    'Job support for LLM GPU optimization — fixing CUDA out-of-memory, low GPU utilization, high latency, and cost. KV cache, batching, quantization, tensor parallelism, Flash Attention, and device mapping on the Hugging Face stack.',
  keywords: [
    'LLM GPU optimization job support', 'CUDA out of memory fix', 'GPU utilization LLM', 'KV cache tuning',
    'tensor parallelism device_map', 'Flash Attention support', 'LLM latency throughput tuning',
  ],
  h1: 'LLM GPU Optimization Job Support — Memory, Throughput & Latency',
  tagline:
    'Real-time help squeezing more out of your GPUs — resolving CUDA OOM, raising utilization, cutting latency, and lowering cost across training and inference on the Hugging Face stack.',
  heroEyebrow: 'GPU Optimization Support',
  painIntro:
    'CUDA out-of-memory that will not go away, GPUs sitting at 30% utilization, or latency and cost that are too high? These are the daily realities of LLM engineering, and they are fixable with the right memory and parallelism strategy. We work them with you.',
  heroVariant:
    'GPU optimization is where LLM projects live or die on cost and speed. We help across the whole stack: eliminating CUDA out-of-memory (batch size, gradient checkpointing, quantization, offload, max-model-len), raising utilization (batching and continuous batching, data-loading and prefill/decode balance), and cutting latency (KV cache and prefix caching, Flash Attention / SDPA / kernel-backed attention, speculative decoding). For big models we cover device_map for automatic placement, tensor and pipeline parallelism, FSDP and DeepSpeed for training, and model sharding. We tie it to real metrics — GPU memory, tokens/sec, TTFT, utilization, and cost per million tokens — and diagnose specific symptoms like OOM at a certain sequence length, throughput that does not scale with batch, and underutilised multi-GPU setups.',
  faqs: [
    ...hfServiceFaqs('LLM GPU optimization', 'We resolve CUDA OOM, raise GPU utilization, and cut latency/cost with the right batching, KV-cache, quantization, and parallelism strategy.'),
    {
      question: 'How do I fix CUDA out-of-memory?',
      answer:
        'In order of leverage: reduce batch/sequence length, enable gradient checkpointing (training), quantize (4-bit/8-bit) or use a smaller precision, offload with device_map or CPU/NVMe, and for serving set a realistic max-model-len and gpu-memory-utilization. If it still will not fit, shard across GPUs with tensor parallelism or FSDP. We find the cheapest fix that meets your latency target rather than defaulting to bigger hardware.',
    },
    {
      question: 'My GPUs are underutilised — why?',
      answer:
        'Common causes: batch size too small, data loading bottlenecking the GPU, no continuous batching in serving, synchronous pre/post-processing, or a memory-bound decode phase. We profile to find where time actually goes, then fix the specific bottleneck — often batching and pipeline overlap give the biggest wins without new hardware.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_QUANT_LINK,
    ],
    techLinks: [HF_VLLM_LINK, HF_ACCELERATE_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_KERNELS_LINK, HF_OPTIMUM_LINK, HF_TRANSFORMERS_INFERENCE_LINK,
      EXISTING.pytorch, EXISTING.modelDeployment, EXISTING.mlops,
    ],
  }),
});

export const huggingFacePerformancePages: LandingPageConfig[] = [
  quantization,
  optimum,
  kernels,
  gpuOptimization,
];
