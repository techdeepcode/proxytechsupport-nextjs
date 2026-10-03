import type { LandingPageConfig } from '../landing-pages';
import {
  k8sTechPage,
  relatedLinks,
  k8sTroubleshootFaqs,
  EXISTING,
  K8S_HUB_LINK,
  K8S_PRODUCTION_LINK,
  K8S_SRE_LINK,
  K8S_FINOPS_LINK,
  K8S_INTERVIEW_LINK,
  K8S_INFERENCE_HUB_LINK,
  K8S_VLLM_LINK,
  K8S_GPU_LINK,
  K8S_GPU_SCHED_LINK,
  K8S_AGENTIC_HUB_LINK,
  K8S_MCP_SERVER_LINK,
  K8S_USA_LINK,
  K8S_EUROPE_LINK,
} from './shared';

const geo = [K8S_USA_LINK, K8S_EUROPE_LINK];

/** Compact factory for evergreen troubleshooting pages (no fabricated incidents — these explain failure modes). */
function troubleshootPage(cfg: {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  tagline: string;
  heroEyebrow: string;
  symptom: string;
  painIntro: string;
  heroVariant: string;
  root: string;
  techLinks: LandingPageConfig['relatedLinks'] extends infer _ ? { label: string; href: string }[] : never;
  extraLinks: { label: string; href: string }[];
}): LandingPageConfig {
  return k8sTechPage({
    slug: cfg.slug,
    title: cfg.title,
    description: cfg.description,
    keywords: cfg.keywords,
    h1: cfg.h1,
    tagline: cfg.tagline,
    heroEyebrow: cfg.heroEyebrow,
    painIntro: cfg.painIntro,
    heroVariant: cfg.heroVariant,
    faqs: k8sTroubleshootFaqs(cfg.symptom, cfg.root),
    bottomCTAHeading: `Facing ${cfg.symptom} Right Now? Get an Engineer on the Call.`,
    bottomCTABody:
      'In-house Kubernetes, GPU, and inference experts available same-day for live incidents — we triage from your events, logs, and metrics, stabilise, and ship a durable fix. Talk to ProxyTechSupport on WhatsApp now.',
    relatedLinks: relatedLinks({
      geoLinks: geo,
      techLinks: cfg.techLinks,
      problemLink: K8S_PRODUCTION_LINK,
      proxyLink: K8S_INTERVIEW_LINK,
      additionalLinks: [K8S_HUB_LINK, K8S_SRE_LINK, ...cfg.extraLinks],
    }),
  });
}

export const gpuPodPending = troubleshootPage({
  slug: 'kubernetes-gpu-pod-pending-troubleshooting',
  title: 'Kubernetes GPU Pod Pending — Troubleshooting & Fix',
  description:
    'Why GPU Pods get stuck Pending on Kubernetes — no allocatable GPU, taints/tolerations, unsatisfied DRA ResourceClaims, node affinity, quota, gang-scheduling waits — and how to diagnose and fix it. Live help available.',
  keywords: ['GPU Pod Pending Kubernetes', 'Pod stuck Pending GPU', 'no allocatable GPU', 'DRA ResourceClaim Pending', 'GPU scheduling fix'],
  h1: 'Kubernetes GPU Pod Pending — Diagnose and Fix Unschedulable GPU Workloads',
  tagline: 'A GPU Pod that will not schedule has a findable cause. Here is how to read it — and get it running fast.',
  heroEyebrow: 'Troubleshooting: GPU Pod Pending',
  symptom: 'GPU Pods stuck Pending',
  painIntro:
    'kubectl shows your GPU Pod Pending, the scheduler says "0/N nodes available", and a release is waiting. The cause is almost always one of a short list — the trick is reading the right signal.',
  heroVariant:
    'GPU Pods stay Pending for a handful of reasons: no node has an allocatable GPU (GPU Operator/device plugin not ready, or all GPUs already requested), taints without matching tolerations, a Dynamic Resource Allocation ResourceClaim that cannot be satisfied, node-affinity/selector or GPU-type mismatch, insufficient ResourceQuota, or a gang/PodGroup waiting for all members. We diagnose from kubectl describe pod (events), kubectl describe node (allocatable vs requested), scheduler and device-plugin logs, and DRA ResourceClaim status — then fix the specific cause instead of guessing.',
  root:
    'GPU Pods usually stay Pending because no node has an allocatable GPU, a taint lacks a matching toleration, a DRA ResourceClaim cannot be satisfied, node affinity or GPU type does not match, quota is exhausted, or a gang/PodGroup is waiting for all members.',
  techLinks: [K8S_GPU_SCHED_LINK, K8S_GPU_LINK],
  extraLinks: [
    { label: 'GPU device plugin troubleshooting', href: '/kubernetes-gpu-device-plugin-troubleshooting/' },
    { label: 'DRA GPU allocation support', href: '/kubernetes-dra-gpu-allocation-support/' },
    { label: 'Gang scheduling AI job support', href: '/kubernetes-gang-scheduling-ai-job-support/' },
    EXISTING.aksGpu,
  ],
});

export const gpuOom = troubleshootPage({
  slug: 'kubernetes-gpu-oom-troubleshooting',
  title: 'Kubernetes GPU OOM — CUDA Out of Memory Troubleshooting & Fix',
  description:
    'Why AI Pods hit GPU out-of-memory (CUDA OOM) on Kubernetes — oversized batch/context, KV-cache growth, memory fragmentation, co-tenant GPU sharing — and how to diagnose and fix it without just buying bigger GPUs.',
  keywords: ['GPU OOM Kubernetes', 'CUDA out of memory', 'torch.cuda OutOfMemoryError', 'GPU memory fragmentation', 'KV cache OOM'],
  h1: 'Kubernetes GPU OOM — Fix CUDA Out-of-Memory the Right Way',
  tagline: 'GPU OOM is usually a configuration problem, not a hardware one. Here is how to find the real cause.',
  heroEyebrow: 'Troubleshooting: GPU OOM',
  symptom: 'GPU out-of-memory (CUDA OOM)',
  painIntro:
    'CUDA OutOfMemoryError, a Pod that OOMs under load, or a model that will not even load — GPU memory is the tightest resource in AI serving, and the fix is rarely "bigger GPU".',
  heroVariant:
    'GPU OOM on Kubernetes comes from oversized batch size or context length, KV-cache growth under concurrency, memory fragmentation, loading a model too large for the GPU (or without quantization), or multiple co-tenants sharing a GPU without MIG/limits. We diagnose from DCGM memory metrics, the inference server’s own logs (e.g. vLLM KV-cache stats), and the OOM event — then fix via batch/context limits, gpu-memory-utilization settings, quantization, MIG partitioning, or right-sizing, so you reclaim headroom without overspending on hardware.',
  root:
    'GPU OOM usually comes from oversized batch/context, KV-cache growth under load, fragmentation, a model too large for the GPU without quantization, or unmanaged GPU sharing.',
  techLinks: [K8S_VLLM_LINK, K8S_GPU_LINK],
  extraLinks: [
    { label: 'vLLM OOM troubleshooting', href: '/kubernetes-vllm-oom-troubleshooting/' },
    { label: 'CUDA error troubleshooting', href: '/kubernetes-cuda-error-troubleshooting/' },
    K8S_FINOPS_LINK,
  ],
});

export const cudaError = troubleshootPage({
  slug: 'kubernetes-cuda-error-troubleshooting',
  title: 'Kubernetes CUDA Error Troubleshooting — Driver, Toolkit & Version Mismatch',
  description:
    'Diagnose CUDA errors on Kubernetes — driver/toolkit version mismatch, CUDA_ERROR_NO_DEVICE, library path issues, incompatible GPU arch, and container toolkit problems — and fix them so GPU workloads run.',
  keywords: ['CUDA error Kubernetes', 'CUDA driver mismatch', 'CUDA_ERROR_NO_DEVICE', 'nvidia container toolkit', 'CUDA version Kubernetes'],
  h1: 'Kubernetes CUDA Errors — Fix Driver, Toolkit, and Version Mismatches',
  tagline: 'Most CUDA errors in containers are version or toolkit mismatches. Here is how to pin the cause.',
  heroEyebrow: 'Troubleshooting: CUDA Errors',
  symptom: 'CUDA errors',
  painIntro:
    'CUDA_ERROR_NO_DEVICE, driver/runtime version mismatch, "no CUDA-capable device is detected", or a container that cannot see the GPU — these block every GPU workload and usually trace to the toolkit or versions.',
  heroVariant:
    'CUDA errors on Kubernetes typically come from a driver/CUDA-runtime version mismatch, the NVIDIA Container Toolkit not injecting the GPU into the container, a CUDA image built for a different GPU architecture, library-path problems, or the device plugin not exposing GPUs. We diagnose from nvidia-smi inside and outside the container, the GPU Operator and container-toolkit logs, and the image’s CUDA/arch versus the node driver — then align versions and toolkit configuration so workloads see the GPU correctly.',
  root:
    'CUDA errors usually trace to a driver/runtime version mismatch, the NVIDIA Container Toolkit not injecting the GPU, an image built for a different GPU architecture, or the device plugin not exposing GPUs.',
  techLinks: [K8S_GPU_LINK, K8S_GPU_SCHED_LINK],
  extraLinks: [
    { label: 'GPU device plugin troubleshooting', href: '/kubernetes-gpu-device-plugin-troubleshooting/' },
    { label: 'Bare-metal GPU Kubernetes support', href: '/bare-metal-gpu-kubernetes-job-support/' },
  ],
});

export const devicePlugin = troubleshootPage({
  slug: 'kubernetes-gpu-device-plugin-troubleshooting',
  title: 'Kubernetes GPU Device Plugin Troubleshooting — GPUs Not Allocatable',
  description:
    'Fix NVIDIA device plugin and GPU Operator problems on Kubernetes — GPUs not showing as allocatable, device plugin CrashLoopBackOff, driver/NFD issues, and MIG config — so the scheduler can place GPU Pods.',
  keywords: ['GPU device plugin Kubernetes', 'nvidia device plugin', 'GPU Operator troubleshooting', 'GPUs not allocatable', 'Node Feature Discovery GPU'],
  h1: 'Kubernetes GPU Device Plugin — When GPUs Do Not Show as Allocatable',
  tagline: 'If nodes report zero allocatable GPUs, the device plugin or GPU Operator is the place to look.',
  heroEyebrow: 'Troubleshooting: GPU Device Plugin',
  symptom: 'GPUs not allocatable',
  painIntro:
    'kubectl describe node shows nvidia.com/gpu: 0 even though the box has GPUs, or the device-plugin Pod is CrashLoopBackOff — the scheduler cannot place GPU workloads until this is fixed.',
  heroVariant:
    'When GPUs do not appear as allocatable it is almost always the NVIDIA device plugin or GPU Operator: drivers not installed/loaded, Node Feature Discovery not labelling nodes, the device-plugin DaemonSet crashing, the container toolkit misconfigured, or MIG configured in a way the plugin cannot advertise. We work through the GPU Operator component status, device-plugin and driver logs, NFD labels, and nvidia-smi on the node to restore allocatable GPUs so scheduling works again.',
  root:
    'GPUs not showing as allocatable usually means the NVIDIA driver, device plugin, GPU Operator, Node Feature Discovery, or MIG configuration is not healthy on the node.',
  techLinks: [K8S_GPU_LINK, K8S_GPU_SCHED_LINK],
  extraLinks: [
    { label: 'GPU Pod Pending troubleshooting', href: '/kubernetes-gpu-pod-pending-troubleshooting/' },
    { label: 'OpenShift AI GPU support', href: '/openshift-ai-gpu-job-support/' },
    EXISTING.aksGpu,
  ],
});

export const crashLoop = troubleshootPage({
  slug: 'kubernetes-crashloopbackoff-ai-troubleshooting',
  title: 'Kubernetes CrashLoopBackOff for AI Workloads — Troubleshooting & Fix',
  description:
    'Fix CrashLoopBackOff on AI/model Pods in Kubernetes — probe timeouts on slow model loads, OOMKilled, missing GPU, bad config/secrets, and dependency failures — with the right probe and resource settings.',
  keywords: ['CrashLoopBackOff AI Kubernetes', 'model Pod CrashLoop', 'readiness probe model load', 'OOMKilled AI Pod', 'inference CrashLoopBackOff'],
  h1: 'Kubernetes CrashLoopBackOff on AI Workloads — Find Why the Model Pod Keeps Restarting',
  tagline: 'AI Pods CrashLoop for specific reasons — often a probe that kills a model mid-load. Here is how to tell.',
  heroEyebrow: 'Troubleshooting: CrashLoopBackOff',
  symptom: 'CrashLoopBackOff on AI Pods',
  painIntro:
    'A model Pod that restarts endlessly — sometimes killed just as the weights finish loading — is a classic AI CrashLoopBackOff, and the usual culprit is probes or resources, not the model.',
  heroVariant:
    'AI/model Pods CrashLoop because readiness/liveness probes time out before multi-gigabyte weights finish loading, OOMKilled on memory limits, the GPU is not available, config or secrets are wrong, or a dependency (vector DB, model registry, object store) is unreachable. We read the previous-container logs, exit codes, events, and probe settings, then fix probe timings (startupProbe for slow loads), resource requests/limits, GPU scheduling, and dependencies so the Pod stabilises.',
  root:
    'AI Pods CrashLoop most often from probes timing out before slow model loads finish, OOMKilled limits, missing GPU, bad config/secrets, or unreachable dependencies.',
  techLinks: [K8S_INFERENCE_HUB_LINK, K8S_VLLM_LINK],
  extraLinks: [
    { label: 'Model loading failure troubleshooting', href: '/kubernetes-model-loading-failure-troubleshooting/' },
    { label: 'GPU OOM troubleshooting', href: '/kubernetes-gpu-oom-troubleshooting/' },
  ],
});

export const vllmOom = troubleshootPage({
  slug: 'kubernetes-vllm-oom-troubleshooting',
  title: 'Kubernetes vLLM OOM — KV Cache & Memory Troubleshooting',
  description:
    'Fix vLLM out-of-memory on Kubernetes — gpu-memory-utilization, max-model-len, KV-cache exhaustion under concurrency, and parallelism — so vLLM serves at target throughput without OOM.',
  keywords: ['vLLM OOM Kubernetes', 'vLLM KV cache OOM', 'gpu-memory-utilization vLLM', 'max-model-len vLLM', 'vLLM out of memory fix'],
  h1: 'Kubernetes vLLM OOM — Tune KV Cache and Memory So vLLM Stops Crashing',
  tagline: 'vLLM OOM is a KV-cache and memory-budget problem. Here is how to fix it without just adding GPUs.',
  heroEyebrow: 'Troubleshooting: vLLM OOM',
  symptom: 'vLLM out-of-memory',
  painIntro:
    'vLLM runs fine at low load then OOMs under concurrency, or refuses to start because the KV cache will not fit — both are memory-budget problems you can tune.',
  heroVariant:
    'vLLM OOM on Kubernetes comes from gpu-memory-utilization set too high (leaving no headroom) or too aggressive for the KV cache, max-model-len larger than memory allows, KV-cache growth under high concurrency, insufficient parallelism for a large model, or fragmentation. We read vLLM’s KV-cache and memory logs and DCGM metrics, then tune gpu-memory-utilization, max-model-len, max-num-seqs, tensor parallelism, and quantization so vLLM holds target throughput within the GPU’s memory budget.',
  root:
    'vLLM OOM usually comes from gpu-memory-utilization/max-model-len set beyond the KV-cache budget, KV-cache growth under concurrency, or a model too large without enough parallelism or quantization.',
  techLinks: [K8S_VLLM_LINK, K8S_INFERENCE_HUB_LINK],
  extraLinks: [
    { label: 'High TTFT troubleshooting', href: '/kubernetes-high-ttft-troubleshooting/' },
    { label: 'GPU OOM troubleshooting', href: '/kubernetes-gpu-oom-troubleshooting/' },
    EXISTING.vllmInference,
  ],
});

export const highTtft = troubleshootPage({
  slug: 'kubernetes-high-ttft-troubleshooting',
  title: 'Kubernetes High TTFT — Time-to-First-Token Latency Troubleshooting',
  description:
    'Fix high time-to-first-token (TTFT) for LLM serving on Kubernetes — queueing, batch/scheduling, prefix-cache misses, cold starts, KV-cache pressure, and routing — so latency meets SLA.',
  keywords: ['high TTFT Kubernetes', 'time to first token latency', 'LLM latency troubleshooting', 'prefix cache miss', 'inference queue latency'],
  h1: 'Kubernetes High TTFT — Cut Time-to-First-Token to Meet Your SLA',
  tagline: 'High TTFT has a measurable cause — queueing, scheduling, cache, or cold starts. Here is how to find it.',
  heroEyebrow: 'Troubleshooting: High TTFT',
  symptom: 'high time-to-first-token (TTFT)',
  painIntro:
    'Users wait seconds before the first token appears, p95 TTFT breaches SLA, and it got worse after a traffic or config change — TTFT problems are debuggable from the right metrics.',
  heroVariant:
    'High TTFT on Kubernetes comes from request queueing (not enough replicas or capacity), batch and scheduling settings that delay prefill, prefix-cache misses on shared contexts, cold starts from scale-to-zero or new replicas, KV-cache pressure, or load balancing that ignores cache locality. We read TTFT/queue metrics, batch and scheduler settings, and cache-hit ratios, then tune batching, autoscaling signals, prefix caching, and (where available) KV-cache-aware routing such as GKE Inference Gateway or NVIDIA Dynamo to bring TTFT back under SLA.',
  root:
    'High TTFT usually comes from request queueing, prefill/batch scheduling delays, prefix-cache misses, cold starts, KV-cache pressure, or cache-blind load balancing.',
  techLinks: [K8S_INFERENCE_HUB_LINK, K8S_VLLM_LINK],
  extraLinks: [
    { label: 'Inference timeout troubleshooting', href: '/kubernetes-inference-timeout-troubleshooting/' },
    { label: 'Inference autoscaling support', href: '/kubernetes-inference-autoscaling-support/' },
    { label: 'GKE Inference Gateway support', href: '/gke-inference-gateway-job-support/' },
  ],
});

export const inferenceTimeout = troubleshootPage({
  slug: 'kubernetes-inference-timeout-troubleshooting',
  title: 'Kubernetes Inference Timeout Troubleshooting — Gateways, Probes & Long Generations',
  description:
    'Fix inference timeouts on Kubernetes — gateway/ingress timeouts, long generations exceeding limits, streaming misconfiguration, probe interference, and upstream saturation — so requests complete reliably.',
  keywords: ['inference timeout Kubernetes', 'LLM request timeout', 'gateway timeout inference', 'streaming timeout LLM', '504 inference'],
  h1: 'Kubernetes Inference Timeouts — Stop Long Generations From Being Cut Off',
  tagline: 'Timeouts on LLM requests usually come from gateway/ingress limits or saturation — not the model giving up.',
  heroEyebrow: 'Troubleshooting: Inference Timeouts',
  symptom: 'inference timeouts',
  painIntro:
    '504s on long generations, requests cut off mid-stream, or clients timing out under load — inference timeouts usually sit in the gateway/ingress and autoscaling layers, not the model.',
  heroVariant:
    'Inference timeouts on Kubernetes come from gateway/ingress request timeouts too short for long generations, streaming not configured end to end (buffering breaks SSE), upstream saturation and queueing, probe interference, or client timeouts below actual generation time. We trace the request through ingress, gateway, and the inference server, align timeouts and streaming settings across the path, and fix the capacity/queueing cause so long requests complete instead of being severed.',
  root:
    'Inference timeouts usually come from gateway/ingress timeouts shorter than generation time, broken end-to-end streaming, upstream saturation/queueing, or client timeouts set too low.',
  techLinks: [K8S_INFERENCE_HUB_LINK, K8S_SRE_LINK],
  extraLinks: [
    { label: 'High TTFT troubleshooting', href: '/kubernetes-high-ttft-troubleshooting/' },
    { label: 'Inference autoscaling support', href: '/kubernetes-inference-autoscaling-support/' },
  ],
});

export const modelLoading = troubleshootPage({
  slug: 'kubernetes-model-loading-failure-troubleshooting',
  title: 'Kubernetes Model Loading Failure Troubleshooting — Weights, Storage & Probes',
  description:
    'Fix model-loading failures on Kubernetes — slow or failed weight pulls from object storage, probe timeouts, insufficient ephemeral storage, registry/auth errors, and format mismatches — so model Pods come up.',
  keywords: ['model loading failure Kubernetes', 'model weights pull slow', 'S3 GCS model load', 'startupProbe model', 'model registry auth'],
  h1: 'Kubernetes Model Loading Failures — Get Weights Loaded and Pods Ready',
  tagline: 'Multi-gigabyte model loads fail in predictable ways — storage, probes, and auth. Here is how to fix them.',
  heroEyebrow: 'Troubleshooting: Model Loading',
  symptom: 'model-loading failures',
  painIntro:
    'A model Pod stuck initialising, killed by a probe before weights finish, or failing to pull from object storage — loading large models is a common, fixable failure class.',
  heroVariant:
    'Model-loading failures on Kubernetes come from slow or failed weight pulls (object-storage throughput, cold cache, network), readiness probes that fire before multi-gigabyte loads finish, insufficient ephemeral or volume storage, registry/credential errors, or model-format/version mismatches. We fix with startupProbes sized to real load time, faster weight access (local caching, warm pools, parallel download, pre-pulled images or PVCs), correct storage sizing, and credential/format alignment — so Pods reach Ready reliably.',
  root:
    'Model-loading failures usually come from slow/failed weight pulls from storage, probes firing before loads finish, insufficient storage, registry/credential errors, or format mismatches.',
  techLinks: [K8S_INFERENCE_HUB_LINK, K8S_VLLM_LINK],
  extraLinks: [
    { label: 'CrashLoopBackOff (AI) troubleshooting', href: '/kubernetes-crashloopbackoff-ai-troubleshooting/' },
    EXISTING.huggingFace,
  ],
});

export const gpuUnderutilization = troubleshootPage({
  slug: 'kubernetes-gpu-underutilization-troubleshooting',
  title: 'Kubernetes GPU Underutilization Troubleshooting — Reclaim Idle GPU',
  description:
    'Fix low GPU utilization on Kubernetes — poor batching, CPU/data bottlenecks, oversized requests blocking packing, idle replicas, and no MIG sharing — so you stop paying for GPUs that sit idle.',
  keywords: ['GPU underutilization Kubernetes', 'low GPU utilization', 'idle GPU cost', 'GPU not fully used', 'MIG GPU sharing'],
  h1: 'Kubernetes GPU Underutilization — Stop Paying for Idle Accelerators',
  tagline: 'A GPU fleet at single-digit utilization is money on fire. Here is how to find and reclaim the waste.',
  heroEyebrow: 'Troubleshooting: GPU Underutilization',
  symptom: 'GPU underutilization',
  painIntro:
    'DCGM shows GPUs at 8% while the bill says otherwise — underutilization is the biggest avoidable AI cost, and it is usually batching, bottlenecks, or packing.',
  heroVariant:
    'GPU underutilization on Kubernetes comes from poor batching (small or no continuous batching), CPU/data-pipeline bottlenecks starving the GPU, oversized resource requests that block bin-packing, idle replicas that never scale down, and no GPU sharing (MIG/time-slicing) for small models. We read DCGM SM/memory utilisation and the serving metrics, then fix batching, remove bottlenecks, right-size requests, add scale-to-zero, and partition GPUs with MIG so you get real work out of every accelerator.',
  root:
    'GPU underutilization usually comes from weak batching, CPU/data bottlenecks, oversized requests blocking packing, idle replicas not scaling down, or no MIG/time-slicing for small models.',
  techLinks: [K8S_FINOPS_LINK, K8S_GPU_LINK],
  extraLinks: [
    { label: 'Agent scale-to-zero support', href: '/kubernetes-agent-scale-to-zero-support/' },
    { label: 'Inference autoscaling support', href: '/kubernetes-inference-autoscaling-support/' },
    K8S_FINOPS_LINK,
  ],
});

export const autoscalingFailure = troubleshootPage({
  slug: 'kubernetes-inference-autoscaling-failure-troubleshooting',
  title: 'Kubernetes Inference Autoscaling Failure Troubleshooting — Scale on the Right Signal',
  description:
    'Fix inference autoscaling failures on Kubernetes — HPA on CPU not reacting for GPU workloads, missing custom/external metrics, KEDA misconfiguration, scale-to-zero cold starts, and node provisioning limits.',
  keywords: ['inference autoscaling failure', 'HPA not scaling LLM', 'KEDA not scaling', 'scale to zero cold start', 'GPU autoscaling Kubernetes'],
  h1: 'Kubernetes Inference Autoscaling Failures — When Replicas Do Not Scale',
  tagline: 'If autoscaling reacts late or not at all, you are scaling on the wrong signal. Here is how to fix it.',
  heroEyebrow: 'Troubleshooting: Autoscaling',
  symptom: 'inference autoscaling failures',
  painIntro:
    'Traffic spikes but replicas do not grow, or they never scale down — HPA on CPU barely moves for GPU-bound LLM serving, which is the usual root cause.',
  heroVariant:
    'Autoscaling failures on Kubernetes come from HPA scaling on CPU (which barely changes for GPU-bound inference), missing custom/external metrics (queue depth, concurrency, tokens/sec), KEDA scalers misconfigured, scale-to-zero blocked by cold starts, or node provisioning (Karpenter/cluster-autoscaler) not keeping up. We switch scaling to inference-relevant signals, wire up metrics adapters/KEDA correctly, mitigate cold starts, and align node provisioning so replicas track real demand.',
  root:
    'Autoscaling failures usually come from scaling on CPU instead of inference signals, missing custom/external metrics, KEDA misconfiguration, cold-start-blocked scale-to-zero, or slow node provisioning.',
  techLinks: [K8S_INFERENCE_HUB_LINK, K8S_SRE_LINK],
  extraLinks: [
    { label: 'Inference autoscaling support', href: '/kubernetes-inference-autoscaling-support/' },
    { label: 'Agent scale-to-zero support', href: '/kubernetes-agent-scale-to-zero-support/' },
  ],
});

export const agentLoop = troubleshootPage({
  slug: 'kubernetes-agent-loop-troubleshooting',
  title: 'Kubernetes Agent Loop Troubleshooting — Stop Runaway Agents Burning GPU & Tokens',
  description:
    'Fix agent loops on Kubernetes — agents retrying forever, re-calling tools, or stuck in planning cycles — with loop detection, step/cost limits, timeouts, and circuit breakers so runaway agents cannot drain budget.',
  keywords: ['agent loop Kubernetes', 'runaway agent', 'agent infinite loop', 'agent token burn', 'agent step limit', 'agent circuit breaker'],
  h1: 'Kubernetes Agent Loops — Stop Runaway Agents From Draining GPU and Budget',
  tagline: 'An agent stuck in a loop can burn a GPU node and a token budget fast. Here is how to detect and stop it.',
  heroEyebrow: 'Troubleshooting: Agent Loops',
  symptom: 'agent loops',
  painIntro:
    'An agent retries the same failing tool forever, cycles between planning steps, or re-enters a state endlessly — and cost and GPU usage climb with nothing to show for it.',
  heroVariant:
    'Agent loops on Kubernetes come from failing tool calls retried without backoff, planning cycles with no progress check, bad stopping conditions, or an MCP/tool error the agent cannot interpret. We help you add loop and progress detection, hard step and cost/token limits per task, timeouts, exponential backoff with circuit breakers on tool/MCP calls, and action-level tracing so you can see the cycle — so a misbehaving agent fails safe instead of running up unbounded spend.',
  root:
    'Agent loops usually come from tool calls retried without backoff, planning cycles with no progress check, bad stopping conditions, or uninterpretable MCP/tool errors.',
  techLinks: [K8S_AGENTIC_HUB_LINK, K8S_MCP_SERVER_LINK],
  extraLinks: [
    { label: 'Agent observability support', href: '/kubernetes-agent-observability-job-support/' },
    { label: 'Agent cost optimization support', href: '/kubernetes-agent-cost-optimization-support/' },
    { label: 'MCP failure troubleshooting', href: '/kubernetes-mcp-failure-troubleshooting/' },
  ],
});

export const mcpFailure = troubleshootPage({
  slug: 'kubernetes-mcp-failure-troubleshooting',
  title: 'Kubernetes MCP Failure Troubleshooting — Auth, Timeout & Tool Errors',
  description:
    'Fix MCP server failures on Kubernetes — 401/403 authorization, token/credential expiry, rate-limit rejections, timeouts, and tool errors that cascade into agent loops — with the right auth, limits, and retries.',
  keywords: ['MCP failure Kubernetes', 'MCP 401 403', 'MCP token expiry', 'MCP rate limit', 'MCP timeout', 'tool server error'],
  h1: 'Kubernetes MCP Failures — Stop Tool-Server Errors Cascading Into Agent Loops',
  tagline: 'MCP failures break workflows and trigger loops. Here is how to find the auth, limit, or tool cause.',
  heroEyebrow: 'Troubleshooting: MCP Failures',
  symptom: 'MCP server failures',
  painIntro:
    'An MCP server returning 401/403, a token that just expired, a rate limit tripping under load, or a tool timing out — and agents start looping or workflows break.',
  heroVariant:
    'MCP failures on Kubernetes come from authentication/authorization errors (401/403), expired or misissued tokens, rate-limit rejections under load, network policy blocking the call, timeouts, or tool-side errors. We trace the failing call, fix the auth/scope/network/limit cause, add retries-with-backoff and circuit breakers so a tool failure does not trigger an agent loop, and wire in the observability that makes the next failure obvious.',
  root:
    'MCP failures usually come from 401/403 authorization errors, token expiry, rate-limit rejections, network policy blocks, timeouts, or tool-side errors.',
  techLinks: [K8S_MCP_SERVER_LINK, K8S_AGENTIC_HUB_LINK],
  extraLinks: [
    { label: 'MCP production support', href: '/kubernetes-mcp-production-support/' },
    { label: 'Agent permission error troubleshooting', href: '/kubernetes-agent-permission-error-troubleshooting/' },
    { label: 'Agent loop troubleshooting', href: '/kubernetes-agent-loop-troubleshooting/' },
    EXISTING.mcpServer,
  ],
});

export const agentPermission = troubleshootPage({
  slug: 'kubernetes-agent-permission-error-troubleshooting',
  title: 'Kubernetes Agent Permission Error Troubleshooting — RBAC & Workload Identity',
  description:
    'Fix agent permission errors on Kubernetes — RBAC denials, missing/overscoped service accounts, workload-identity (IRSA/Entra/GKE) misconfiguration, and MCP authorization — with least-privilege that still works.',
  keywords: ['agent permission error Kubernetes', 'RBAC denied agent', 'workload identity error', 'IRSA agent', 'service account agent', 'agent 403'],
  h1: 'Kubernetes Agent Permission Errors — Fix RBAC and Workload Identity Without Over-Granting',
  tagline: 'Permission errors tempt teams to grant too much. Here is how to fix them with least privilege intact.',
  heroEyebrow: 'Troubleshooting: Agent Permissions',
  symptom: 'agent permission errors',
  painIntro:
    'An agent that cannot call a tool, reach a cloud API, or access a resource — and the quick fix of granting broad permissions is exactly the security mistake to avoid.',
  heroVariant:
    'Agent permission errors on Kubernetes come from RBAC role/binding gaps, service accounts that are missing or overscoped, workload-identity federation (EKS IRSA/Pod Identity, AKS/Entra Workload ID, GKE Workload Identity) misconfigured, or MCP authorization denying the call. We diagnose the exact denied action from logs and audit events, then grant precisely the permission needed — no more — keeping least privilege intact instead of papering over the error with a broad grant.',
  root:
    'Agent permission errors usually come from RBAC gaps, missing/overscoped service accounts, misconfigured cloud workload identity, or MCP authorization denials.',
  techLinks: [K8S_AGENTIC_HUB_LINK, K8S_MCP_SERVER_LINK],
  extraLinks: [
    { label: 'Agent identity & workload identity support', href: '/kubernetes-agent-identity-workload-identity-support/' },
    { label: 'Agent security job support', href: '/kubernetes-agent-security-job-support/' },
    EXISTING.aiAgentIdentity,
  ],
});

export const ragLatency = troubleshootPage({
  slug: 'kubernetes-rag-latency-troubleshooting',
  title: 'Kubernetes RAG Latency Troubleshooting — Retrieval, Embeddings & Vector DB',
  description:
    'Fix RAG latency on Kubernetes — slow embedding calls, vector-DB query latency, oversized retrieval, reranking overhead, and network hops — so retrieval-augmented generation meets its latency budget.',
  keywords: ['RAG latency Kubernetes', 'vector DB slow query', 'embedding latency', 'reranking slow', 'retrieval latency fix', 'RAG performance'],
  h1: 'Kubernetes RAG Latency — Find the Slow Step in the Retrieval Path',
  tagline: 'RAG latency hides in embeddings, vector search, reranking, or network hops. Here is how to pinpoint it.',
  heroEyebrow: 'Troubleshooting: RAG Latency',
  symptom: 'RAG latency',
  painIntro:
    'A RAG endpoint that is slow before the LLM even starts generating — the delay is somewhere in embedding, vector search, reranking, or the hops between them.',
  heroVariant:
    'RAG latency on Kubernetes comes from slow embedding calls (model or network), vector-DB query latency (index type, shard/replica config, cold cache), oversized top-k retrieval, heavy reranking, or too many network hops between services. We trace the retrieval path with OpenTelemetry, measure each step, then tune embeddings (batching, co-location, caching), the vector index (HNSW/IVF params, resources), retrieval size, and reranking so RAG meets its latency budget.',
  root:
    'RAG latency usually comes from slow embedding calls, vector-DB query latency, oversized retrieval, heavy reranking, or excessive network hops between services.',
  techLinks: [K8S_INFERENCE_HUB_LINK, K8S_SRE_LINK],
  extraLinks: [
    { label: 'Vector DB connectivity troubleshooting', href: '/kubernetes-vector-db-connectivity-troubleshooting/' },
    { label: 'Enterprise RAG on Kubernetes support', href: '/kubernetes-enterprise-rag-job-support/' },
    EXISTING.rag, EXISTING.vectorDb,
  ],
});

export const vectorDbConnectivity = troubleshootPage({
  slug: 'kubernetes-vector-db-connectivity-troubleshooting',
  title: 'Kubernetes Vector DB Connectivity Troubleshooting — pgvector, Milvus, Qdrant',
  description:
    'Fix vector-DB connectivity on Kubernetes — service/DNS resolution, network policy blocks, connection-pool exhaustion, TLS/auth, and StatefulSet/PVC issues for pgvector, Milvus, Qdrant, and OpenSearch.',
  keywords: ['vector DB connectivity Kubernetes', 'pgvector connection', 'Milvus Kubernetes', 'Qdrant connection error', 'vector DB network policy', 'connection pool exhausted'],
  h1: 'Kubernetes Vector DB Connectivity — When RAG Cannot Reach Its Vector Store',
  tagline: 'Connectivity failures to the vector DB break RAG entirely. Here is how to find the network or pool cause.',
  heroEyebrow: 'Troubleshooting: Vector DB Connectivity',
  symptom: 'vector DB connectivity failures',
  painIntro:
    'RAG errors because it cannot reach pgvector, Milvus, Qdrant, or OpenSearch — connection refused, timeouts, or pool exhaustion under load.',
  heroVariant:
    'Vector-DB connectivity failures on Kubernetes come from Service/DNS resolution problems, NetworkPolicy blocking the connection, connection-pool exhaustion under concurrency, TLS/auth misconfiguration, or StatefulSet/PVC issues on the database itself. We work through Service and endpoint status, DNS, NetworkPolicy, pool settings, and the DB Pod health to restore reliable connectivity — and add the pooling and resilience (retries, circuit breakers) that keep RAG stable under load.',
  root:
    'Vector-DB connectivity failures usually come from Service/DNS issues, NetworkPolicy blocks, connection-pool exhaustion, TLS/auth misconfiguration, or StatefulSet/PVC problems.',
  techLinks: [K8S_SRE_LINK, K8S_INFERENCE_HUB_LINK],
  extraLinks: [
    { label: 'RAG latency troubleshooting', href: '/kubernetes-rag-latency-troubleshooting/' },
    { label: 'Enterprise RAG on Kubernetes support', href: '/kubernetes-enterprise-rag-job-support/' },
    EXISTING.vectorDb,
  ],
});

export const kubernetesIncidentPages: LandingPageConfig[] = [
  gpuPodPending,
  gpuOom,
  cudaError,
  devicePlugin,
  crashLoop,
  vllmOom,
  highTtft,
  inferenceTimeout,
  modelLoading,
  gpuUnderutilization,
  autoscalingFailure,
  agentLoop,
  mcpFailure,
  agentPermission,
  ragLatency,
  vectorDbConnectivity,
];
