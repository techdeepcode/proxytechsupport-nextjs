import type { LandingPageConfig } from '../landing-pages';
import {
  k8sPage,
  k8sTechPage,
  relatedLinks,
  jobSupportHighlights,
  k8sTechFaqs,
  EXISTING,
  K8S_HUB_LINK,
  K8S_PRODUCTION_LINK,
  K8S_SRE_LINK,
  K8S_SECURITY_LINK,
  K8S_FINOPS_LINK,
  K8S_INTERVIEW_LINK,
  K8S_INFERENCE_HUB_LINK,
  K8S_VLLM_LINK,
  K8S_KSERVE_LINK,
  K8S_DYNAMO_LINK,
  K8S_GPU_LINK,
  K8S_GPU_SCHED_LINK,
  K8S_AGENTIC_HUB_LINK,
  K8S_USA_LINK,
  K8S_EUROPE_LINK,
} from './shared';

// ─── LLM INFERENCE HUB ──────────────────────────────────────────────────────────

export const kubernetesLlmInferenceHub: LandingPageConfig = k8sPage({
  slug: 'kubernetes-llm-inference-job-support',
  title: 'Kubernetes LLM Inference Job Support — vLLM, KServe, Ray, Dynamo & GPU Serving',
  description:
    'Real-time job support for serving LLMs on Kubernetes: vLLM, KServe/LLMInferenceService, Ray Serve, NVIDIA Dynamo, SGLang, TensorRT-LLM, and NIM — batching, KV cache, autoscaling, disaggregated serving, and the TTFT/TPOT/throughput metrics that matter. Same-day, global.',
  keywords: [
    'Kubernetes LLM inference support', 'vLLM Kubernetes', 'KServe LLM serving', 'Ray Serve LLM',
    'NVIDIA Dynamo inference', 'distributed inference Kubernetes', 'LLM serving production support',
    'inference autoscaling', 'TTFT TPOT optimization',
  ],
  h1: 'Kubernetes LLM Inference Job Support — Serve Models That Meet Latency, Cost & Scale',
  tagline:
    'Serving LLMs in production on Kubernetes is a performance-engineering problem. Real-time support across vLLM, KServe, Ray Serve, NVIDIA Dynamo, SGLang, TensorRT-LLM, and NIM.',
  heroEyebrow: 'LLM Inference on Kubernetes',
  painIntro:
    'Throughput that collapses under concurrency, TTFT that misses SLA, KV cache that exhausts GPU memory, autoscaling that reacts too slowly, and cost that only makes sense at impossible utilisation — production LLM serving is where most AI platforms struggle.',
  heroVariant:
    'This hub covers production LLM inference on Kubernetes end to end: choosing and tuning the serving engine (vLLM for broad coverage and continuous batching, KServe/LLMInferenceService for Kubernetes-native governance, Ray Serve for Python-native composition, NVIDIA Dynamo for datacenter-scale disaggregated serving with KV-aware routing, SGLang, TensorRT-LLM, and NVIDIA NIM), continuous batching and KV/prefix caching, tensor/pipeline parallelism and multi-node serving, autoscaling on the right signals, inference gateways for KV-cache-aware routing, and the operational metrics that actually matter — TTFT, TPOT, tokens/sec, queue latency, GPU and KV-cache utilisation, cold starts, and cost per request/token. We tune for your latency and cost budget, not a benchmark.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'Which inference engine should I use on Kubernetes?',
      answer:
        'It depends on your constraints. vLLM has the broadest feature coverage (continuous batching, PagedAttention KV cache, wide model and quantization support) and is a strong default. KServe (with LLMInferenceService) adds Kubernetes-native governance and a standard serving CRD. Ray Serve suits Python-native, multi-step composition. NVIDIA Dynamo targets datacenter-scale disaggregated serving with KV-aware routing. SGLang, TensorRT-LLM, and NIM each have sweet spots. We help you pick and tune for your model, latency, and cost budget rather than defaulting to hype.',
    },
    {
      question: 'What inference metrics do you optimise?',
      answer:
        'The ones that map to user experience and cost: time-to-first-token (TTFT), time-per-output-token (TPOT), tokens/sec throughput, queue latency, concurrency, GPU utilisation and memory, KV-cache utilisation and hit ratio, batch size, cold-start time, and cost per request and per token. We instrument these before tuning so changes are measured, not guessed.',
    },
    {
      question: 'Can you help with distributed and disaggregated inference?',
      answer:
        'Yes. We help with tensor and pipeline parallelism for models that do not fit one GPU, multi-node serving with the right interconnect and topology, and disaggregated prefill/decode (separating the compute-bound prefill phase from the memory-bound decode phase) — including NVIDIA Dynamo with NIXL transfer and KV-aware routing. We also cover the gang-scheduling needed so multi-node serving does not deadlock.',
    },
    {
      question: 'How do you fix inference latency and OOM problems?',
      answer:
        'We find the real bottleneck from metrics and traces — KV-cache pressure, batch and concurrency settings, GPU memory fragmentation, prefix-cache misses, model/quantization choice, or scheduling — then tune batching, cache, parallelism, and autoscaling, and right-size resources and probes. For OOM we address KV-cache limits, max-model-len, GPU memory headroom, and quantization, not just bigger GPUs.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your models, GPUs, serving engine, and the SLO or incident you are facing. We will start from your metrics, find the bottleneck, and tune it with you — same-day.',
    },
  ],
  useCasesSection: {
    title: 'LLM Inference Work We Help With',
    cases: [
      'Choosing and tuning vLLM, KServe, Ray Serve, Dynamo, SGLang, TensorRT-LLM, or NIM for a real workload',
      'Continuous batching and KV/prefix-cache tuning to lift throughput without blowing TTFT',
      'Tensor/pipeline parallelism and multi-node serving for models that do not fit one GPU',
      'Disaggregated prefill/decode and KV-aware routing with NVIDIA Dynamo',
      'Autoscaling inference on the right signals, including scale-to-zero with cold-start mitigation',
      'Fixing TTFT spikes, KV-cache OOM, and GPU underutilisation against a cost budget',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_VLLM_LINK, K8S_KSERVE_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_DYNAMO_LINK, K8S_GPU_LINK, K8S_GPU_SCHED_LINK, K8S_SRE_LINK, K8S_FINOPS_LINK,
      { label: 'Ray Serve support', href: '/kubernetes-ray-serve-job-support/' },
      { label: 'SGLang support', href: '/kubernetes-sglang-job-support/' },
      { label: 'TensorRT-LLM support', href: '/kubernetes-tensorrt-llm-job-support/' },
      { label: 'NVIDIA NIM support', href: '/kubernetes-nvidia-nim-job-support/' },
      { label: 'Distributed inference support', href: '/kubernetes-distributed-inference-job-support/' },
      { label: 'Inference autoscaling support', href: '/kubernetes-inference-autoscaling-support/' },
      EXISTING.vllmInference, EXISTING.llm, EXISTING.rag, EXISTING.huggingFace,
    ],
  }),
});

// ─── vLLM ──────────────────────────────────────────────────────────────────────

export const kubernetesVllm: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-vllm-job-support',
  title: 'Kubernetes vLLM Job Support — Continuous Batching, KV Cache & Scaling',
  description:
    'Real-time vLLM job support on Kubernetes: continuous batching, PagedAttention KV cache, tensor parallelism, max-model-len and memory tuning, OpenAI-compatible serving, autoscaling, and fixing OOM and TTFT issues.',
  keywords: [
    'vLLM Kubernetes support', 'vLLM continuous batching', 'vLLM KV cache OOM', 'vLLM tensor parallelism',
    'vLLM autoscaling Kubernetes', 'vLLM production support',
  ],
  h1: 'Kubernetes vLLM Job Support — Get the Throughput vLLM Promises',
  tagline: 'Continuous batching and PagedAttention are powerful — but only when KV cache, parallelism, and limits are tuned for your workload.',
  heroEyebrow: 'vLLM on Kubernetes',
  painIntro:
    'vLLM can deliver excellent throughput — or OOM under load, waste GPU memory, and miss TTFT — depending entirely on how KV cache, max-model-len, GPU memory utilisation, and parallelism are configured on Kubernetes.',
  heroVariant:
    'We help you run vLLM in production on Kubernetes: continuous batching and PagedAttention KV-cache tuning, gpu-memory-utilization and max-model-len settings that avoid OOM while keeping throughput, tensor parallelism for large models, OpenAI-compatible endpoints, readiness probes that account for slow weight loads, autoscaling on real signals, and prefix caching. When vLLM OOMs or TTFT spikes, we diagnose from metrics and fix the cache/memory/parallelism cause rather than just adding GPUs.',
  faqs: k8sTechFaqs('vLLM', 'We help you tune continuous batching, KV cache, parallelism, and memory limits so vLLM hits throughput and latency targets without OOM on Kubernetes.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_INFERENCE_HUB_LINK, K8S_GPU_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_KSERVE_LINK, K8S_DYNAMO_LINK, K8S_GPU_SCHED_LINK, K8S_FINOPS_LINK,
      { label: 'vLLM OOM troubleshooting', href: '/kubernetes-vllm-oom-troubleshooting/' },
      { label: 'High TTFT troubleshooting', href: '/kubernetes-high-ttft-troubleshooting/' },
      EXISTING.vllmInference, EXISTING.aksVllm, EXISTING.huggingFace, EXISTING.llm,
    ],
  }),
});

// ─── KServe ──────────────────────────────────────────────────────────────────

export const kubernetesKserve: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-kserve-job-support',
  title: 'Kubernetes KServe Job Support — LLMInferenceService, Autoscaling & Canary',
  description:
    'Real-time KServe job support on Kubernetes: LLMInferenceService and InferenceService CRDs, vLLM runtime integration, autoscaling and scale-to-zero, canary rollouts, and standardised, governed model serving.',
  keywords: [
    'KServe Kubernetes support', 'KServe LLMInferenceService', 'KServe vLLM', 'KServe autoscaling',
    'KServe canary rollout', 'model serving CRD',
  ],
  h1: 'Kubernetes KServe Job Support — Governed, Standardised Model Serving',
  tagline: 'KServe gives model serving a Kubernetes-native API. We help you use it for LLMs with vLLM, autoscaling, and safe rollouts.',
  heroEyebrow: 'KServe on Kubernetes',
  painIntro:
    'KServe standardises serving behind a CRD — but LLM workloads need the newer LLMInferenceService path, vLLM runtime wiring, autoscaling that fits token workloads, and rollout safety for model updates.',
  heroVariant:
    'We help you serve models on Kubernetes with KServe: InferenceService for classic models and the LLMInferenceService custom resource that wraps vLLM with Kubernetes-native governance for LLMs, autoscaling and scale-to-zero, canary and blue/green rollouts for safe model updates, and integration with inference gateways and observability. KServe is a strong choice when you want a standard, governed serving API across teams — we help you adopt it without the common autoscaling and cold-start pitfalls.',
  faqs: k8sTechFaqs('KServe', 'We help you serve LLMs and classic models with KServe InferenceService/LLMInferenceService, vLLM runtime, autoscaling, and safe canary rollouts.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_INFERENCE_HUB_LINK, K8S_VLLM_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_DYNAMO_LINK, K8S_GPU_LINK, K8S_SRE_LINK, K8S_FINOPS_LINK,
      { label: 'Inference autoscaling support', href: '/kubernetes-inference-autoscaling-support/' },
      { label: 'OpenShift AI vLLM & KServe support', href: '/openshift-ai-vllm-kserve-job-support/' },
      EXISTING.mlops, EXISTING.llm,
    ],
  }),
});

// ─── Ray Serve ──────────────────────────────────────────────────────────────

export const kubernetesRayServe: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-ray-serve-job-support',
  title: 'Kubernetes Ray Serve Job Support — Python-Native Model Composition at Scale',
  description:
    'Real-time Ray Serve job support on Kubernetes: KubeRay operator, RayService, model composition and multi-step pipelines, autoscaling, fractional GPUs, and integration with vLLM for LLM serving.',
  keywords: [
    'Ray Serve Kubernetes', 'KubeRay operator', 'RayService support', 'Ray Serve autoscaling',
    'Ray Serve vLLM', 'model composition Kubernetes',
  ],
  h1: 'Kubernetes Ray Serve Job Support — Compose and Scale Python Model Pipelines',
  tagline: 'When serving means multi-step Python pipelines and model composition, Ray Serve on KubeRay fits — if the cluster and autoscaling are right.',
  heroEyebrow: 'Ray Serve on Kubernetes',
  painIntro:
    'Multi-model, multi-step inference pipelines in Python are awkward in single-model servers. Ray Serve handles composition and scaling — but KubeRay, autoscaling, and GPU fractioning have to be configured correctly.',
  heroVariant:
    'We help you run Ray Serve on Kubernetes via the KubeRay operator and RayService: composing multi-step and multi-model pipelines, autoscaling replicas and the Ray cluster, fractional-GPU packing for small models, and integrating vLLM for LLM serving within a Ray deployment. We also help with the operational realities — head/worker sizing, object-store memory, graceful upgrades, and observability — so Ray Serve is reliable, not just flexible.',
  faqs: k8sTechFaqs('Ray Serve', 'We help you compose and scale Python model pipelines with Ray Serve on KubeRay, configure autoscaling and fractional GPUs, and integrate vLLM.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_INFERENCE_HUB_LINK, K8S_GPU_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_VLLM_LINK, K8S_KSERVE_LINK, K8S_GPU_SCHED_LINK, K8S_FINOPS_LINK,
      { label: 'Distributed inference support', href: '/kubernetes-distributed-inference-job-support/' },
      EXISTING.mlops, EXISTING.pythonAiml,
    ],
  }),
});

// ─── NVIDIA Dynamo ──────────────────────────────────────────────────────────

export const kubernetesNvidiaDynamo: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-nvidia-dynamo-job-support',
  title: 'Kubernetes NVIDIA Dynamo Job Support — Disaggregated Serving & KV-Aware Routing',
  description:
    'Real-time NVIDIA Dynamo job support on Kubernetes: the Dynamo Kubernetes Operator, disaggregated prefill/decode, NIXL KV transfer, KV-aware and topology-aware routing, and datacenter-scale LLM serving with vLLM, SGLang, and TensorRT-LLM backends.',
  keywords: [
    'NVIDIA Dynamo Kubernetes', 'Dynamo operator', 'disaggregated serving', 'KV-aware routing',
    'prefill decode separation', 'Dynamo vLLM SGLang', 'datacenter scale inference',
  ],
  h1: 'Kubernetes NVIDIA Dynamo Job Support — Datacenter-Scale Disaggregated Inference',
  tagline: 'Disaggregated prefill/decode and KV-aware routing cut cost and latency at scale — when the operator, transfer, and topology are set up right.',
  heroEyebrow: 'NVIDIA Dynamo on Kubernetes',
  painIntro:
    'At scale, co-locating prefill and decode wastes GPUs and hurts latency. NVIDIA Dynamo disaggregates them and routes by KV-cache overlap — but it adds real operational complexity on Kubernetes.',
  heroVariant:
    'We help you run NVIDIA Dynamo on Kubernetes: deploying with the Dynamo Kubernetes Operator, separating prefill and decode worker pools, moving KV state efficiently with NIXL, routing requests by KV-cache overlap and topology (and the media-aware routing in recent releases), and choosing backends (vLLM for broadest coverage, plus SGLang and TensorRT-LLM). We help you decide whether disaggregated serving actually pays off for your traffic profile — it shines at scale and for long contexts, and adds overhead you do not want for small or bursty workloads.',
  faqs: k8sTechFaqs('NVIDIA Dynamo', 'We help you deploy Dynamo with its Kubernetes Operator, configure disaggregated prefill/decode, NIXL KV transfer, and KV-aware/topology-aware routing across vLLM/SGLang/TensorRT-LLM backends.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_INFERENCE_HUB_LINK, K8S_GPU_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_VLLM_LINK, K8S_GPU_SCHED_LINK, K8S_FINOPS_LINK,
      { label: 'SGLang support', href: '/kubernetes-sglang-job-support/' },
      { label: 'TensorRT-LLM support', href: '/kubernetes-tensorrt-llm-job-support/' },
      { label: 'Distributed inference support', href: '/kubernetes-distributed-inference-job-support/' },
      EXISTING.llm, EXISTING.vllmInference,
    ],
  }),
});

// ─── SGLang ──────────────────────────────────────────────────────────────────

export const kubernetesSglang: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-sglang-job-support',
  title: 'Kubernetes SGLang Job Support — RadixAttention, Structured Output & Throughput',
  description:
    'Real-time SGLang job support on Kubernetes: RadixAttention prefix caching, structured and constrained generation, high-throughput serving, parallelism, and integration with Dynamo for disaggregated inference.',
  keywords: [
    'SGLang Kubernetes', 'SGLang RadixAttention', 'SGLang structured output', 'SGLang throughput',
    'SGLang serving support', 'SGLang Dynamo',
  ],
  h1: 'Kubernetes SGLang Job Support — High-Throughput Serving with Prefix Reuse',
  tagline: 'SGLang’s RadixAttention and structured generation can win on throughput and constrained output — with the right cluster setup.',
  heroEyebrow: 'SGLang on Kubernetes',
  painIntro:
    'For workloads with heavy prefix sharing or strict structured-output needs, SGLang can outperform — but only when caching, parallelism, and memory are configured for your traffic on Kubernetes.',
  heroVariant:
    'We help you serve with SGLang on Kubernetes: leveraging RadixAttention prefix caching for workloads with shared prefixes (system prompts, few-shot, RAG contexts), structured and constrained generation for reliable JSON/schema output, high-throughput batching, parallelism for large models, and integration with NVIDIA Dynamo for disaggregated serving. We help you decide where SGLang beats vLLM for your workload and tune it accordingly.',
  faqs: k8sTechFaqs('SGLang', 'We help you tune SGLang RadixAttention prefix caching, structured/constrained generation, batching, and parallelism for high-throughput serving on Kubernetes.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_INFERENCE_HUB_LINK, K8S_DYNAMO_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_VLLM_LINK, K8S_GPU_LINK, K8S_FINOPS_LINK,
      { label: 'TensorRT-LLM support', href: '/kubernetes-tensorrt-llm-job-support/' },
      EXISTING.llm, EXISTING.rag,
    ],
  }),
});

// ─── TensorRT-LLM ──────────────────────────────────────────────────────────────

export const kubernetesTensorrtLlm: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-tensorrt-llm-job-support',
  title: 'Kubernetes TensorRT-LLM Job Support — Compiled, Low-Latency GPU Inference',
  description:
    'Real-time TensorRT-LLM job support on Kubernetes: engine building and compilation, in-flight batching, quantization (FP8/INT4), Triton integration, and squeezing lowest-latency inference out of NVIDIA GPUs.',
  keywords: [
    'TensorRT-LLM Kubernetes', 'TensorRT-LLM engine build', 'TensorRT-LLM quantization FP8',
    'Triton inference server', 'low latency LLM inference', 'TensorRT-LLM support',
  ],
  h1: 'Kubernetes TensorRT-LLM Job Support — Compile for the Lowest Latency',
  tagline: 'TensorRT-LLM trades build complexity for peak NVIDIA GPU performance. We help you manage the engines and serve them well.',
  heroEyebrow: 'TensorRT-LLM on Kubernetes',
  painIntro:
    'TensorRT-LLM can deliver the lowest latency on NVIDIA GPUs — but engine building, version/GPU-arch matching, quantization choices, and Triton integration make it operationally demanding on Kubernetes.',
  heroVariant:
    'We help you run TensorRT-LLM on Kubernetes: building and versioning engines for your specific GPU architecture, in-flight batching, quantization (FP8/INT4) with quality checks, serving via Triton Inference Server or Dynamo, and managing the build/deploy pipeline so engine artifacts match the GPUs they run on. We are honest about the trade-off — TensorRT-LLM rewards latency-critical, stable workloads and punishes rapidly-changing ones — and help you decide if it fits.',
  faqs: k8sTechFaqs('TensorRT-LLM', 'We help you build and version TensorRT-LLM engines per GPU arch, apply FP8/INT4 quantization, and serve via Triton/Dynamo for lowest-latency inference.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_INFERENCE_HUB_LINK, K8S_GPU_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_DYNAMO_LINK, K8S_VLLM_LINK, K8S_FINOPS_LINK,
      { label: 'NVIDIA NIM support', href: '/kubernetes-nvidia-nim-job-support/' },
      { label: 'CUDA error troubleshooting', href: '/kubernetes-cuda-error-troubleshooting/' },
      EXISTING.llm,
    ],
  }),
});

// ─── NVIDIA NIM ──────────────────────────────────────────────────────────────

export const kubernetesNvidiaNim: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-nvidia-nim-job-support',
  title: 'Kubernetes NVIDIA NIM Job Support — Packaged Microservices for Model Serving',
  description:
    'Real-time NVIDIA NIM job support on Kubernetes: deploying NIM microservices, GPU scheduling and licensing, autoscaling, air-gapped/on-prem deployment, and integrating NIM into inference gateways and agent platforms.',
  keywords: [
    'NVIDIA NIM Kubernetes', 'NIM microservices', 'NIM deployment Kubernetes', 'NIM GPU scheduling',
    'NIM air-gapped', 'NVIDIA inference microservice',
  ],
  h1: 'Kubernetes NVIDIA NIM Job Support — Deploy Model Microservices Fast',
  tagline: 'NIM packages optimized model serving as microservices. We help you deploy, scale, and govern them on Kubernetes.',
  heroEyebrow: 'NVIDIA NIM on Kubernetes',
  painIntro:
    'NIM promises fast, optimized model deployment — but on Kubernetes you still own GPU scheduling, autoscaling, licensing, registry access, and (often) air-gapped delivery.',
  heroVariant:
    'We help you run NVIDIA NIM on Kubernetes: deploying NIM microservices with correct GPU scheduling and node selection, autoscaling, registry and licensing setup, air-gapped/on-prem delivery where connectivity is restricted, and integrating NIM behind inference gateways and into agent platforms. NIM is a fast path to optimized serving — we help you adopt it without losing control of scheduling, cost, and governance.',
  faqs: k8sTechFaqs('NVIDIA NIM', 'We help you deploy NIM microservices with correct GPU scheduling, autoscaling, licensing, and air-gapped delivery, and integrate them into gateways and agent platforms.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_INFERENCE_HUB_LINK, K8S_GPU_SCHED_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_GPU_LINK, K8S_DYNAMO_LINK,
      { label: 'Air-gapped AI on Kubernetes support', href: '/air-gapped-ai-kubernetes-job-support/' },
      { label: 'TensorRT-LLM support', href: '/kubernetes-tensorrt-llm-job-support/' },
      EXISTING.llm,
    ],
  }),
});

// ─── GPU INFRASTRUCTURE ─────────────────────────────────────────────────────────

export const kubernetesGpuInfrastructure: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-gpu-infrastructure-job-support',
  title: 'Kubernetes GPU Infrastructure Job Support — Operator, MIG, Drivers & Topology',
  description:
    'Real-time GPU infrastructure job support on Kubernetes: NVIDIA GPU Operator, drivers and device plugins, MIG partitioning, multi-GPU and multi-node, NVLink/RDMA/NCCL, DCGM metrics, and node/topology configuration.',
  keywords: [
    'Kubernetes GPU infrastructure', 'NVIDIA GPU Operator', 'MIG Kubernetes', 'GPU device plugin',
    'NVLink RDMA NCCL', 'DCGM GPU metrics', 'multi-node GPU Kubernetes',
  ],
  h1: 'Kubernetes GPU Infrastructure — Operator, Drivers, MIG, and Multi-Node Done Right',
  tagline: 'The GPU layer underneath every AI workload: operator, drivers, MIG, interconnect, and metrics configured for real training and inference.',
  heroEyebrow: 'GPU Infrastructure — Kubernetes',
  painIntro:
    'Driver/device-plugin mismatches, MIG misconfiguration, missing topology awareness, and NCCL/RDMA problems silently cap performance and cause the GPU incidents that page you at 2am.',
  heroVariant:
    'We help you build the GPU layer on Kubernetes: the NVIDIA GPU Operator (drivers, device plugin, DCGM, container toolkit), MIG partitioning to pack small models, multi-GPU and multi-node setup with NVLink/NVSwitch and RDMA, NCCL tuning for distributed workloads, topology-aware scheduling so Pods land on well-connected GPUs, and DCGM metrics for visibility. Get this layer right and inference and training are fast and stable; get it wrong and everything above it suffers.',
  faqs: k8sTechFaqs('GPU infrastructure', 'We help you configure the NVIDIA GPU Operator, drivers/device plugins, MIG, multi-node NVLink/RDMA/NCCL, topology-aware scheduling, and DCGM metrics on Kubernetes.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_GPU_SCHED_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_VLLM_LINK, K8S_DYNAMO_LINK, K8S_FINOPS_LINK, K8S_SRE_LINK,
      { label: 'GPU Pod Pending troubleshooting', href: '/kubernetes-gpu-pod-pending-troubleshooting/' },
      { label: 'GPU device plugin troubleshooting', href: '/kubernetes-gpu-device-plugin-troubleshooting/' },
      { label: 'Bare-metal GPU Kubernetes support', href: '/bare-metal-gpu-kubernetes-job-support/' },
      EXISTING.aksGpu,
    ],
  }),
});

// ─── GPU SCHEDULING ─────────────────────────────────────────────────────────────

export const kubernetesGpuScheduling: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-gpu-scheduling-job-support',
  title: 'Kubernetes GPU Scheduling Job Support — DRA, Gang Scheduling & Topology',
  description:
    'Real-time GPU scheduling job support on Kubernetes: Dynamic Resource Allocation (DRA), Workload/PodGroup gang scheduling (Beta in v1.37), CompositePodGroup, Kueue queuing, MIG, and topology-aware placement for AI workloads.',
  keywords: [
    'Kubernetes GPU scheduling', 'Dynamic Resource Allocation DRA', 'gang scheduling Kubernetes',
    'PodGroup CompositePodGroup', 'Kueue GPU', 'topology-aware scheduling GPU',
  ],
  h1: 'Kubernetes GPU Scheduling — DRA, Gang Scheduling, and Getting Pods on the Right GPUs',
  tagline: 'Scheduling is where GPU utilisation, multi-node reliability, and cost are decided. We help you use the v1.37 toolset correctly.',
  heroEyebrow: 'GPU Scheduling — Kubernetes',
  painIntro:
    'GPU Pods Pending, multi-node jobs that schedule half their workers and deadlock, accelerators sitting idle because placement is naive — scheduling is the root of many GPU problems.',
  heroVariant:
    'We help you schedule GPU and accelerator workloads on Kubernetes using the current toolset: Dynamic Resource Allocation (DRA) — with Core APIs GA since v1.34 and extended-resource support now GA in v1.37 — for flexible, fine-grained accelerator requests; Workload/PodGroup gang scheduling and Workload-Aware Preemption, which graduated to Beta in Kubernetes v1.37 (and ship disabled by default, so they must be explicitly enabled), to stop partial scheduling of distributed jobs; the new CompositePodGroup API for hierarchical, topology-aware groups; Kueue for job queuing and quotas; MIG for packing small models; and topology-aware placement for well-connected GPUs. We apply these to real training and multi-node inference so jobs schedule fully and GPUs stay busy.',
  faqs: [
    {
      question: 'What is DRA and should I use it for GPUs?',
      answer:
        'Dynamic Resource Allocation (DRA) is the modern way to request accelerators flexibly in Kubernetes. Its Core APIs have been GA since v1.34, and extended-resource support reached GA in v1.37, so DRA drivers can satisfy accelerator-style requests without a separate device plugin in many cases. For complex GPU/accelerator needs it is increasingly the right model; we help you decide based on your driver support and workload and avoid mixing models in ways that cause Pending Pods.',
    },
    {
      question: 'Is gang scheduling available in Kubernetes now?',
      answer:
        'As of Kubernetes v1.37 (released August 2026), the Workload/PodGroup APIs and gang scheduling graduated to Beta, along with Workload-Aware Preemption and shared DRA ResourceClaims for PodGroups — one step from GA. Importantly, gang scheduling ships disabled by default in v1.37, so it must be explicitly enabled. We help you turn it on safely or use a batch scheduler (Kueue, Volcano) as appropriate, so multi-node training and inference schedule all-or-nothing instead of deadlocking.',
    },
    {
      question: 'What is CompositePodGroup for?',
      answer:
        'CompositePodGroup is a new API introduced in v1.37 for expressing hierarchical, multi-level topology constraints, gang scheduling, and preemption policies for complex, heterogeneous groups of Pods — for example multi-role distributed workloads that need different placement rules per role. We help you model real distributed AI jobs with it where it fits.',
    },
    {
      question: 'Why are my GPU Pods stuck Pending?',
      answer:
        'Common causes: no allocatable GPU on matching nodes, taints without tolerations, a DRA ResourceClaim that cannot be satisfied, node-affinity/selector mismatches, insufficient quota, or a gang/PodGroup waiting for all members. We diagnose from scheduler events and node capacity and fix the real cause — see our GPU Pod Pending troubleshooting guide.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your workloads (training/inference, single vs multi-node), GPU types, and Kubernetes version. We will design scheduling that keeps GPUs busy and jobs reliable — same-day.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_GPU_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_FINOPS_LINK, K8S_DYNAMO_LINK,
      { label: 'DRA GPU allocation support', href: '/kubernetes-dra-gpu-allocation-support/' },
      { label: 'Gang scheduling AI job support', href: '/kubernetes-gang-scheduling-ai-job-support/' },
      { label: 'GPU Pod Pending troubleshooting', href: '/kubernetes-gpu-pod-pending-troubleshooting/' },
      EXISTING.kubernetesGuide,
    ],
  }),
});

// ─── DISTRIBUTED INFERENCE ───────────────────────────────────────────────────

export const kubernetesDistributedInference: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-distributed-inference-job-support',
  title: 'Kubernetes Distributed Inference Job Support — Multi-GPU & Multi-Node Serving',
  description:
    'Real-time support for distributed LLM inference on Kubernetes: tensor and pipeline parallelism, multi-node serving, NCCL/RDMA interconnect, gang scheduling, and disaggregated prefill/decode for models too large for one GPU.',
  keywords: [
    'distributed inference Kubernetes', 'multi-node LLM serving', 'tensor parallelism Kubernetes',
    'pipeline parallelism', 'multi-GPU inference', 'disaggregated serving Kubernetes',
  ],
  h1: 'Kubernetes Distributed Inference — Serve Models Too Big for One GPU',
  tagline: 'Tensor/pipeline parallelism and multi-node serving that actually schedule and perform — not deadlock.',
  heroEyebrow: 'Distributed Inference',
  painIntro:
    'A model that does not fit one GPU needs parallelism across GPUs or nodes — and that brings interconnect, scheduling, and failure-mode problems that single-GPU serving never had.',
  heroVariant:
    'We help you run distributed inference on Kubernetes: tensor parallelism within a node and pipeline parallelism across nodes, correct NVLink/NVSwitch and RDMA interconnect with NCCL tuning, gang scheduling so all workers start together, topology-aware placement, and disaggregated prefill/decode (with NVIDIA Dynamo) for long contexts and scale. We also handle the failure modes — a dead worker taking down the group, partial scheduling, and slow interconnect quietly capping throughput.',
  faqs: k8sTechFaqs('distributed inference', 'We help you set up tensor/pipeline parallelism, multi-node serving with NCCL/RDMA, gang scheduling, and disaggregated prefill/decode on Kubernetes.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_INFERENCE_HUB_LINK, K8S_GPU_SCHED_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_DYNAMO_LINK, K8S_GPU_LINK, K8S_VLLM_LINK,
      { label: 'Gang scheduling AI job support', href: '/kubernetes-gang-scheduling-ai-job-support/' },
      EXISTING.llm,
    ],
  }),
});

// ─── INFERENCE AUTOSCALING ────────────────────────────────────────────────────

export const kubernetesInferenceAutoscaling: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-inference-autoscaling-support',
  title: 'Kubernetes Inference Autoscaling Support — Scale on the Right Signals',
  description:
    'Real-time support for inference autoscaling on Kubernetes: HPA/KEDA on queue depth and token throughput, scale-to-zero, HPA scale-to-zero considerations, inference gateways, and cold-start mitigation that protects TTFT.',
  keywords: [
    'inference autoscaling Kubernetes', 'HPA KEDA LLM', 'scale to zero inference', 'autoscale on queue depth',
    'inference gateway autoscaling', 'cold start mitigation inference',
  ],
  h1: 'Kubernetes Inference Autoscaling — Scale on Tokens and Queues, Not Just CPU',
  tagline: 'CPU-based autoscaling is wrong for LLMs. Scale on the signals that predict latency and cost.',
  heroEyebrow: 'Inference Autoscaling',
  painIntro:
    'HPA on CPU barely moves for GPU-bound LLM serving, so replicas scale too late and TTFT spikes — or they never scale down and you pay for idle GPUs.',
  heroVariant:
    'We help you autoscale inference correctly on Kubernetes: scaling on queue depth, concurrent requests, and token throughput (via KEDA or custom/external metrics) rather than CPU, using inference gateways with KV-cache-aware routing to spread load, implementing scale-to-zero where cold starts are acceptable, and mitigating cold starts with warm pools and faster weight loading. We tune it against TTFT/TPOT SLOs so scaling protects both latency and cost.',
  faqs: k8sTechFaqs('inference autoscaling', 'We help you autoscale LLM inference on queue depth/token throughput with KEDA, add scale-to-zero with cold-start mitigation, and protect TTFT SLOs.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_INFERENCE_HUB_LINK, K8S_FINOPS_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_VLLM_LINK, K8S_KSERVE_LINK, K8S_SRE_LINK,
      { label: 'Agent scale-to-zero support', href: '/kubernetes-agent-scale-to-zero-support/' },
      { label: 'Autoscaling failure troubleshooting', href: '/kubernetes-inference-autoscaling-failure-troubleshooting/' },
      EXISTING.mlops,
    ],
  }),
});

// ─── DRA GPU ALLOCATION ─────────────────────────────────────────────────────────

export const kubernetesDraGpuAllocation: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-dra-gpu-allocation-support',
  title: 'Kubernetes DRA GPU Allocation Support — Dynamic Resource Allocation for Accelerators',
  description:
    'Real-time support for Dynamic Resource Allocation (DRA) on Kubernetes: ResourceClaims and DeviceClasses for GPUs/accelerators, DRA drivers, extended-resource support (GA in v1.37), and migrating from device plugins.',
  keywords: [
    'Dynamic Resource Allocation Kubernetes', 'DRA GPU', 'ResourceClaim DeviceClass', 'DRA driver',
    'DRA vs device plugin', 'accelerator allocation Kubernetes',
  ],
  h1: 'Kubernetes DRA GPU Allocation — Flexible, Fine-Grained Accelerator Requests',
  tagline: 'Dynamic Resource Allocation is the modern model for GPUs and accelerators. We help you adopt it without Pending Pods.',
  heroEyebrow: 'DRA for Accelerators',
  painIntro:
    'The classic device-plugin model struggles with partial GPUs, sharing, and complex accelerator topologies. DRA fixes that — but ResourceClaims, DeviceClasses, and driver support must be set up correctly or Pods stay Pending.',
  heroVariant:
    'We help you adopt Dynamic Resource Allocation (DRA) on Kubernetes for GPUs and accelerators: modelling requests with ResourceClaims and DeviceClasses, installing and configuring DRA drivers, using the extended-resource support that reached GA in v1.37 (so DRA can satisfy accelerator-style requests without a separate device plugin), and migrating from the device-plugin model cleanly. DRA Core APIs have been GA since v1.34, so this is production-ready — we help you use it correctly and avoid the mixed-model mistakes that cause unschedulable Pods.',
  faqs: k8sTechFaqs('DRA GPU allocation', 'We help you model GPU/accelerator requests with ResourceClaims and DeviceClasses, configure DRA drivers, use v1.37 extended-resource support, and migrate from device plugins.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_GPU_SCHED_LINK, K8S_GPU_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_INFERENCE_HUB_LINK, K8S_FINOPS_LINK,
      { label: 'Gang scheduling AI job support', href: '/kubernetes-gang-scheduling-ai-job-support/' },
      { label: 'GPU Pod Pending troubleshooting', href: '/kubernetes-gpu-pod-pending-troubleshooting/' },
      EXISTING.kubernetesGuide,
    ],
  }),
});

// ─── GANG SCHEDULING ─────────────────────────────────────────────────────────

export const kubernetesGangScheduling: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-gang-scheduling-ai-job-support',
  title: 'Kubernetes Gang Scheduling Job Support — All-or-Nothing for Distributed AI',
  description:
    'Real-time support for gang scheduling on Kubernetes: Workload/PodGroup APIs (Beta in v1.37, disabled by default), Workload-Aware Preemption, CompositePodGroup, Kueue and Volcano — so distributed training and multi-node inference schedule all-or-nothing.',
  keywords: [
    'gang scheduling Kubernetes', 'PodGroup Workload API', 'Workload-Aware Preemption', 'Kueue Volcano',
    'distributed training scheduling', 'all-or-nothing scheduling',
  ],
  h1: 'Kubernetes Gang Scheduling — Stop Distributed AI Jobs From Deadlocking',
  tagline: 'Multi-node training and inference must schedule all-or-nothing. We help you do it with the v1.37 toolset or a batch scheduler.',
  heroEyebrow: 'Gang Scheduling — Kubernetes',
  painIntro:
    'A distributed job that gets 6 of 8 workers scheduled sits half-running, holding GPUs and making no progress while blocking others. Without gang scheduling, this partial-scheduling deadlock is common and expensive.',
  heroVariant:
    'We help you implement gang scheduling on Kubernetes so distributed AI jobs schedule all-or-nothing: the native Workload/PodGroup APIs that graduated to Beta in Kubernetes v1.37 (note: gang scheduling ships disabled by default and must be explicitly enabled), Workload-Aware Preemption and shared DRA ResourceClaims for PodGroups, and the new CompositePodGroup API for hierarchical multi-role jobs — or a batch scheduler such as Kueue or Volcano where that fits better. The result: multi-node training and inference either get all their GPUs or wait, instead of deadlocking and wasting capacity.',
  faqs: k8sTechFaqs('gang scheduling', 'We help you enable native Workload/PodGroup gang scheduling (Beta in v1.37, off by default) or use Kueue/Volcano so distributed jobs schedule all-or-nothing.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_USA_LINK, K8S_EUROPE_LINK],
    techLinks: [K8S_GPU_SCHED_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_GPU_LINK, K8S_DYNAMO_LINK,
      { label: 'DRA GPU allocation support', href: '/kubernetes-dra-gpu-allocation-support/' },
      { label: 'Distributed inference support', href: '/kubernetes-distributed-inference-job-support/' },
      EXISTING.kubernetesGuide,
    ],
  }),
});

export const kubernetesInferencePages: LandingPageConfig[] = [
  kubernetesLlmInferenceHub,
  kubernetesVllm,
  kubernetesKserve,
  kubernetesRayServe,
  kubernetesNvidiaDynamo,
  kubernetesSglang,
  kubernetesTensorrtLlm,
  kubernetesNvidiaNim,
  kubernetesGpuInfrastructure,
  kubernetesGpuScheduling,
  kubernetesDistributedInference,
  kubernetesInferenceAutoscaling,
  kubernetesDraGpuAllocation,
  kubernetesGangScheduling,
];
