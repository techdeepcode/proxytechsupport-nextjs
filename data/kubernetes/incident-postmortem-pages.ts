import type { LandingPageConfig, LandingFaqItem, LandingRelatedLink, LandingCaseStudySection } from '../landing-pages';
import {
  k8sPage,
  k8sTechPage,
  relatedLinks,
  jobSupportHighlights,
  EXISTING,
  K8S_HUB_LINK,
  K8S_PRODUCTION_LINK,
  K8S_SRE_LINK,
  K8S_SECURITY_LINK,
  K8S_INTERVIEW_LINK,
  K8S_AGENTIC_HUB_LINK,
  K8S_AGENT_SANDBOX_LINK,
  K8S_GPU_LINK,
  K8S_INFERENCE_HUB_LINK,
  K8S_PRIVATE_AI_LINK,
  K8S_USA_LINK,
  K8S_EUROPE_LINK,
} from './shared';

const geo = [K8S_USA_LINK, K8S_EUROPE_LINK];
const INCIDENT_HUB: LandingRelatedLink = { label: 'Kubernetes AI security incidents & CVE postmortems', href: '/kubernetes-ai-security-incidents-cve-postmortems/' };

/**
 * Real, source-cited incident / CVE postmortems for AI infrastructure on Kubernetes.
 * Every incident below is a verified, publicly documented vulnerability with an official
 * source — NOTHING is fabricated. Each page records DATE, PLATFORM, COMPONENT, WHAT
 * HAPPENED, IMPACT, ROOT CAUSE, MITIGATION, FIX, OPERATIONAL LESSON, and SOURCE.
 */
function incidentPage(cfg: {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  tagline: string;
  heroEyebrow: string;
  name: string; // short incident name for FAQ copy
  painIntro: string;
  heroVariant: string;
  record: { date: string; platform: string; component: string; what: string; impact: string; rootCause: string; mitigation: string; fix: string; lesson: string };
  source: LandingCaseStudySection;
  faqExtra?: LandingFaqItem[];
  techLinks: LandingRelatedLink[];
  extraLinks: LandingRelatedLink[];
}): LandingPageConfig {
  const faqs: LandingFaqItem[] = [
    {
      question: `What was ${cfg.name} and am I affected?`,
      answer: `${cfg.record.what} ${cfg.record.impact} You are likely affected if you run ${cfg.record.component} at the versions noted in the record below. We can audit your cluster against this and the wider class of AI-infrastructure risks and tell you precisely where you are exposed.`,
    },
    {
      question: `How do I fix or mitigate ${cfg.name}?`,
      answer: `Fix: ${cfg.record.fix} Mitigation if you cannot patch immediately: ${cfg.record.mitigation} We help you apply the fix safely in production — staged rollout, verification, and the admission/network guardrails that reduce blast radius for the next issue of this class.`,
    },
    {
      question: `What is the operational lesson from ${cfg.name}?`,
      answer: `${cfg.record.lesson} This is why we treat the AI-infrastructure supply chain, container runtime, and admission path as security-critical — not just the application layer.`,
    },
    {
      question: 'Can you review our cluster for this and similar exposures?',
      answer:
        'Yes. We run a focused review of your container runtime (NVIDIA Container Toolkit / GPU Operator versions), ingress and admission webhooks, model and image supply chain, agent/tool sandboxing, and RBAC/network policy — mapping each finding to a concrete fix and a guardrail. See our Kubernetes AI security hub.',
    },
    {
      question: 'Is this an educational postmortem or a support service?',
      answer:
        'Both. This page documents a real, publicly disclosed incident with its official source so you can act on it. If you would rather an engineer work it with you — patching safely in production, or auditing for the wider class of risk — that service is available same-day and confidentially.',
    },
    ...(cfg.faqExtra ?? []),
  ];

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
    highlights: jobSupportHighlights,
    faqs,
    useCasesSection: {
      title: 'Incident Record',
      cases: [
        `DATE: ${cfg.record.date}`,
        `PLATFORM: ${cfg.record.platform}`,
        `COMPONENT: ${cfg.record.component}`,
        `WHAT HAPPENED: ${cfg.record.what}`,
        `IMPACT: ${cfg.record.impact}`,
        `ROOT CAUSE: ${cfg.record.rootCause}`,
        `MITIGATION: ${cfg.record.mitigation}`,
        `FIX: ${cfg.record.fix}`,
        `OPERATIONAL LESSON: ${cfg.record.lesson}`,
      ],
    },
    caseStudySection: cfg.source,
    bottomCTAHeading: `Exposed to ${cfg.name} or Want a Cluster Security Review?`,
    bottomCTABody:
      'In-house Kubernetes, GPU, and AI-infrastructure security engineers available same-day — safe production patching, blast-radius review, and hardening against this class of risk. Talk to ProxyTechSupport on WhatsApp now.',
    relatedLinks: relatedLinks({
      geoLinks: geo,
      techLinks: cfg.techLinks,
      problemLink: K8S_PRODUCTION_LINK,
      proxyLink: K8S_INTERVIEW_LINK,
      additionalLinks: [INCIDENT_HUB, K8S_HUB_LINK, K8S_SECURITY_LINK, ...cfg.extraLinks],
    }),
  });
}

// ─── INCIDENT HUB ──────────────────────────────────────────────────────────────

export const incidentPostmortemHub: LandingPageConfig = k8sPage({
  slug: 'kubernetes-ai-security-incidents-cve-postmortems',
  title: 'Kubernetes AI Security Incidents & CVE Postmortems — Real, Source-Cited',
  description:
    'Source-cited postmortems of real AI-infrastructure security incidents on Kubernetes — NVIDIA Container Toolkit (CVE-2024-0132, NVIDIAScape CVE-2025-23266), Ray ShadowRay (CVE-2023-48022), ingress-nginx IngressNightmare (CVE-2025-1974), Ollama Probllama (CVE-2024-37032), and Hugging Face malicious-model supply-chain attacks — with root cause, fix, and lessons.',
  keywords: [
    'Kubernetes AI security incidents', 'AI infrastructure CVE', 'NVIDIA Container Toolkit CVE', 'ShadowRay Ray CVE',
    'IngressNightmare CVE-2025-1974', 'Ollama Probllama CVE', 'malicious model supply chain', 'GPU container escape',
  ],
  h1: 'Kubernetes AI Security Incidents & CVE Postmortems — Learn From Real Failures',
  tagline:
    'Real, publicly disclosed AI-infrastructure security incidents on Kubernetes — each with date, component, root cause, fix, operational lesson, and official source. No fabrication.',
  heroEyebrow: 'AI Infrastructure Incident Library',
  painIntro:
    'The fastest way to secure production AI on Kubernetes is to learn from what has already gone wrong. The last two years produced a run of critical, real-world failures in the exact components AI platforms depend on — GPU container runtimes, ingress, inference runtimes, and the model supply chain.',
  heroVariant:
    'This library documents real, publicly disclosed incidents affecting AI infrastructure on Kubernetes — the NVIDIA Container Toolkit container escapes (CVE-2024-0132 and NVIDIAScape CVE-2025-23266), the Ray job-submission RCE exploited as ShadowRay (CVE-2023-48022), the ingress-nginx IngressNightmare admission-webhook RCE (CVE-2025-1974), the Ollama Probllama path-traversal RCE (CVE-2024-37032), and the ongoing Hugging Face malicious-model (pickle) supply-chain attacks. Each postmortem records the date, platform, component, what happened, impact, root cause, mitigation, fix, operational lesson, and the official source, so you can check your own exposure and harden against the whole class of risk. We never fabricate incidents — every entry links to primary research or an official advisory.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'Are these incidents real and verifiable?',
      answer:
        'Yes. Every postmortem here is a publicly disclosed, documented incident with an official source — vendor advisories, CVE records, and primary security research (Wiz, Oligo, ReversingLabs, and the projects themselves). We do not invent incidents; each page links to its source so you can verify it.',
    },
    {
      question: 'Why do these matter for teams running AI on Kubernetes?',
      answer:
        'Because they hit the exact components AI platforms depend on: the GPU container runtime (NVIDIA Container Toolkit), ingress and admission webhooks, inference runtimes (Ollama, Ray), and the model supply chain (Hugging Face pickle models). Several allowed full container escape or cluster takeover. If you run GPUs, ingress-nginx, self-hosted inference, or pull models from public hubs, at least one of these likely applied to you.',
    },
    {
      question: 'How do you use these in a security review?',
      answer:
        'We check your cluster against each incident class: NVIDIA Container Toolkit and GPU Operator versions, ingress-nginx version and webhook network exposure, inference-runtime versions and network isolation, and model-supply-chain controls (safetensors vs pickle, scanning, provenance). Each finding maps to a concrete fix and a guardrail that reduces the next incident’s blast radius.',
    },
    {
      question: 'Do you also help patch safely in production?',
      answer:
        'Yes. Patching a GPU container runtime or ingress controller in a live cluster carries its own risk. We help you stage the upgrade, verify GPU scheduling and ingress still work, and roll out with a tested fallback — with an engineer on the call.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your stack (GPU runtime, ingress, inference runtimes, model sources). We will map your exposure to these incidents and the wider class of risk, and help you remediate — same-day and confidentially.',
    },
  ],
  useCasesSection: {
    title: 'Documented Incidents in This Library',
    cases: [
      'NVIDIA Container Toolkit TOCTOU container escape — CVE-2024-0132 (CVSS 9.0)',
      'NVIDIAScape: NVIDIA Container Toolkit OCI-hook LD_PRELOAD escape — CVE-2025-23266 (CVSS 9.0)',
      'ShadowRay: Ray job-submission API unauthenticated RCE — CVE-2023-48022 (actively exploited)',
      'IngressNightmare: ingress-nginx admission-webhook unauthenticated RCE — CVE-2025-1974 (CVSS 9.8)',
      'Probllama: Ollama path-traversal unauthenticated RCE as root — CVE-2024-37032 (CVSS 9.1)',
      'Hugging Face malicious-model (pickle) supply-chain attacks — the nullifAI pattern',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: geo,
    techLinks: [K8S_SECURITY_LINK, K8S_GPU_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_AGENTIC_HUB_LINK, K8S_AGENT_SANDBOX_LINK, K8S_PRIVATE_AI_LINK, K8S_SRE_LINK,
      { label: 'NVIDIA Container Toolkit CVE-2024-0132 postmortem', href: '/nvidia-container-toolkit-cve-2024-0132-postmortem/' },
      { label: 'NVIDIAScape CVE-2025-23266 postmortem', href: '/nvidia-container-toolkit-nvidiascape-cve-2025-23266-postmortem/' },
      { label: 'Ray ShadowRay CVE-2023-48022 postmortem', href: '/ray-shadowray-cve-2023-48022-postmortem/' },
      { label: 'IngressNightmare CVE-2025-1974 postmortem', href: '/ingress-nginx-ingressnightmare-cve-2025-1974-postmortem/' },
      { label: 'Ollama Probllama CVE-2024-37032 postmortem', href: '/ollama-probllama-cve-2024-37032-postmortem/' },
      { label: 'Hugging Face malicious-model supply-chain postmortem', href: '/hugging-face-malicious-model-supply-chain-postmortem/' },
      EXISTING.aiAgentSandboxSec, EXISTING.mcpSecurity, EXISTING.huggingFace,
    ],
  }),
});

// ─── CVE-2024-0132 — NVIDIA Container Toolkit TOCTOU ────────────────────────────

export const nvidiaToolkit0132 = incidentPage({
  slug: 'nvidia-container-toolkit-cve-2024-0132-postmortem',
  title: 'NVIDIA Container Toolkit CVE-2024-0132 Postmortem — GPU Container Escape',
  description:
    'Postmortem of CVE-2024-0132 (CVSS 9.0): a TOCTOU flaw in the NVIDIA Container Toolkit ≤1.16.1 let a malicious container image escape to full host takeover. Root cause, fix (1.16.2 / GPU Operator 24.6.2), mitigation, and cluster-hardening — with the official Wiz source.',
  keywords: ['CVE-2024-0132', 'NVIDIA Container Toolkit escape', 'GPU container escape', 'TOCTOU container', 'NVIDIA GPU Operator CVE', 'Wiz NVIDIA vulnerability'],
  h1: 'CVE-2024-0132 — NVIDIA Container Toolkit TOCTOU Container Escape Postmortem',
  tagline: 'A race condition in GPU library mounting let a crafted container image take over the host. Here is exactly what happened and how to close it.',
  heroEyebrow: 'Postmortem · CVE-2024-0132 · CVSS 9.0',
  name: 'CVE-2024-0132',
  painIntro:
    'If you run GPUs on Kubernetes, the NVIDIA Container Toolkit mounts host GPU libraries into your Pods — and in affected versions a malicious image could abuse that to escape the container and own the node.',
  heroVariant:
    'CVE-2024-0132 was a Time-of-Check Time-of-Use (TOCTOU) race condition in how the NVIDIA Container Toolkit mounted host GPU libraries into containers. A maliciously crafted container image could win the race and trick the toolkit into mounting the entire host root filesystem into the container, yielding arbitrary code execution on the host, privilege escalation, and full container escape. Because GPU nodes run privileged, trusted workloads, this was especially dangerous on shared or multi-tenant AI clusters. Wiz Research, which reported it, estimated the toolkit ran in a very large share of cloud GPU environments. The record and fix are below.',
  record: {
    date: 'Disclosed September 2024 (reported to NVIDIA 1 Sep 2024; patched mid-September 2024, NVIDIA Security Bulletin 5582).',
    platform: 'Kubernetes and Docker GPU nodes using the NVIDIA Container Toolkit (any cloud or on-prem).',
    component: 'NVIDIA Container Toolkit ≤ 1.16.1 and NVIDIA GPU Operator ≤ 24.6.1.',
    what: 'A TOCTOU race in GPU-library mounting let a malicious container image trick the toolkit into mounting the host root filesystem (/) into the container.',
    impact: 'Full container escape — arbitrary code execution on the host, privilege escalation, and node/cluster compromise (CVSS 9.0, Critical).',
    rootCause: 'Time-of-Check Time-of-Use race condition between validating and mounting host GPU paths, exploitable by a crafted image the toolkit executes.',
    mitigation: 'If you cannot patch immediately, restrict who can run arbitrary/untrusted container images on GPU nodes, use stronger isolation (gVisor/Kata) for untrusted workloads, and enforce image provenance via admission policy.',
    fix: 'Upgrade NVIDIA Container Toolkit to 1.16.2 or later and NVIDIA GPU Operator to 24.6.2 or later.',
    lesson: 'The GPU container runtime is privileged, trusted infrastructure — track its version like a kernel, and never run untrusted images on GPU nodes without strong isolation.',
  },
  source: {
    heading: 'Official Source',
    body: 'Wiz Research disclosure and deep-dive on CVE-2024-0132, and NVIDIA Security Bulletin 5582. Verify affected and fixed versions against the vendor advisory before patching.',
    linkText: 'Read the Wiz Research disclosure (CVE-2024-0132)',
    linkHref: 'https://www.wiz.io/blog/wiz-research-critical-nvidia-ai-vulnerability',
  },
  techLinks: [K8S_GPU_LINK, K8S_SECURITY_LINK],
  extraLinks: [
    { label: 'NVIDIAScape CVE-2025-23266 postmortem', href: '/nvidia-container-toolkit-nvidiascape-cve-2025-23266-postmortem/' },
    { label: 'GPU device plugin troubleshooting', href: '/kubernetes-gpu-device-plugin-troubleshooting/' },
    { label: 'Bare-metal GPU Kubernetes support', href: '/bare-metal-gpu-kubernetes-job-support/' },
    EXISTING.aiAgentContainment,
  ],
});

// ─── CVE-2025-23266 — NVIDIAScape ───────────────────────────────────────────────

export const nvidiaScape23266 = incidentPage({
  slug: 'nvidia-container-toolkit-nvidiascape-cve-2025-23266-postmortem',
  title: 'NVIDIAScape CVE-2025-23266 Postmortem — OCI-Hook LD_PRELOAD Container Escape',
  description:
    'Postmortem of NVIDIAScape (CVE-2025-23266, CVSS 9.0): an OCI-hook environment-variable injection in the NVIDIA Container Toolkit ≤1.17.7 let a container load code into a privileged host hook via LD_PRELOAD. Root cause, fix (1.17.8 / GPU Operator 25.3.1), and hardening — with the official Wiz source.',
  keywords: ['CVE-2025-23266', 'NVIDIAScape', 'NVIDIA Container Toolkit LD_PRELOAD', 'OCI hook injection', 'GPU container escape 2025', 'NVIDIA GPU Operator CVE'],
  h1: 'NVIDIAScape (CVE-2025-23266) — NVIDIA Container Toolkit OCI-Hook Escape Postmortem',
  tagline: 'A single LD_PRELOAD line in a container image could run code as root on the host via a privileged NVIDIA hook. Here is the record and the fix.',
  heroEyebrow: 'Postmortem · CVE-2025-23266 · CVSS 9.0',
  name: 'NVIDIAScape (CVE-2025-23266)',
  painIntro:
    'Less than a year after CVE-2024-0132, the NVIDIA Container Toolkit had a second critical container-escape class — this time via an OCI hook that honoured an attacker-controlled LD_PRELOAD.',
  heroVariant:
    'NVIDIAScape (CVE-2025-23266) was an OCI-hook environment-variable injection in the NVIDIA Container Toolkit. When a container starts under the NVIDIA runtime, the toolkit registers hooks — including a createContainer hook that runs as a privileged process on the host. By setting LD_PRELOAD in the container image to point at a malicious shared library, an attacker could have that privileged hook load and execute their code with root on the host — a clean container escape from an otherwise ordinary-looking image. It is the second critical escape in this component in under a year, underlining that the GPU runtime deserves kernel-grade version hygiene. The record and fix are below.',
  record: {
    date: 'Disclosed July 2025 by Wiz Research.',
    platform: 'Kubernetes and container GPU nodes using the NVIDIA Container Toolkit (notably Linux CDI mode).',
    component: 'NVIDIA Container Toolkit ≤ 1.17.7 and NVIDIA GPU Operator ≤ 25.3.0 (Linux, CDI mode).',
    what: 'An OCI createContainer hook ran as a privileged host process and honoured a container-controlled LD_PRELOAD, loading an attacker-supplied .so into the privileged process.',
    impact: 'Container escape with root code execution on the host — full node compromise on shared GPU clusters (CVSS 9.0, Critical).',
    rootCause: 'Untrusted search path / environment-variable injection: the privileged hook trusted LD_PRELOAD from the container environment.',
    mitigation: 'If you cannot patch immediately, prevent running untrusted images on GPU nodes, detect containers setting LD_PRELOAD to unusual .so paths (e.g. /proc/self/cwd/*.so), and isolate untrusted workloads with gVisor/Kata.',
    fix: 'Upgrade NVIDIA Container Toolkit to 1.17.8 or later and NVIDIA GPU Operator to 25.3.1 or later.',
    lesson: 'Two critical escapes in one component in a year means defence-in-depth, not just patching: least-privilege on GPU nodes, image provenance, and runtime isolation for anything untrusted.',
  },
  source: {
    heading: 'Official Source',
    body: 'Wiz Research disclosure of NVIDIAScape (CVE-2025-23266) and NVIDIA’s security advisory. Verify affected and fixed versions against the vendor advisory before patching.',
    linkText: 'Read the Wiz Research disclosure (NVIDIAScape, CVE-2025-23266)',
    linkHref: 'https://www.wiz.io/blog/nvidia-ai-vulnerability-cve-2025-23266-nvidiascape',
  },
  techLinks: [K8S_GPU_LINK, K8S_SECURITY_LINK],
  extraLinks: [
    { label: 'NVIDIA Container Toolkit CVE-2024-0132 postmortem', href: '/nvidia-container-toolkit-cve-2024-0132-postmortem/' },
    { label: 'Agent sandbox job support', href: '/kubernetes-agent-sandbox-job-support/' },
    EXISTING.aiAgentContainment,
  ],
});

// ─── CVE-2023-48022 — ShadowRay ─────────────────────────────────────────────────

export const shadowRay48022 = incidentPage({
  slug: 'ray-shadowray-cve-2023-48022-postmortem',
  title: 'ShadowRay CVE-2023-48022 Postmortem — Ray Job-Submission RCE Exploited in the Wild',
  description:
    'Postmortem of ShadowRay (CVE-2023-48022): Ray’s job-submission API has no authentication by default, allowing RCE on exposed clusters. Actively exploited across 200k+ servers. Why it is "disputed", how to lock Ray down (network isolation + auth), and what to monitor — with sources.',
  keywords: ['ShadowRay', 'CVE-2023-48022', 'Ray RCE', 'Ray job submission API', 'Ray cluster security', 'exposed Ray dashboard', 'ShadowRay botnet'],
  h1: 'ShadowRay (CVE-2023-48022) — Ray Job-Submission RCE Postmortem',
  tagline: 'Ray’s dashboard and job API ship without auth by default. Exposed to a network, that is remote code execution — and it has been exploited at scale.',
  heroEyebrow: 'Postmortem · CVE-2023-48022 · Actively Exploited',
  name: 'ShadowRay (CVE-2023-48022)',
  painIntro:
    'If you run Ray for distributed training or inference and the dashboard or job-submission API is reachable from an untrusted network, anyone who can reach it can run arbitrary code on your cluster.',
  heroVariant:
    'ShadowRay (CVE-2023-48022) stems from the fact that Ray’s job-submission API — exposed by default via the Ray Dashboard — performs no authentication and accepts arbitrary Python for execution on cluster nodes. Any attacker with network access can submit malicious jobs that run with the Ray process’s privileges. Security researchers (Oligo) found it actively exploited for cryptojacking and data theft across 200,000+ exposed Ray servers, spanning education, crypto, and biopharma, with a later "ShadowRay 2.0" campaign turning clusters into a self-spreading botnet. The status is notably "disputed": Anyscale states Ray is designed to run only inside a strictly controlled network and that the missing auth is an intentional architectural choice — which makes network isolation your responsibility, not a patch. The record and hardening are below.',
  record: {
    date: 'CVE assigned late 2023; large-scale active exploitation reported March 2024 (Oligo "ShadowRay"); "ShadowRay 2.0" botnet campaign reported in 2025.',
    platform: 'Ray clusters (KubeRay / RayService on Kubernetes, VMs, or bare metal) with the dashboard/job API network-reachable.',
    component: 'Ray job-submission API / Ray Dashboard (no authentication by default).',
    what: 'The job-submission API accepts and executes arbitrary Python with no authentication; any network-reachable client can run code on cluster nodes.',
    impact: 'Remote code execution, cryptojacking, data and credential theft, and lateral movement; 200,000+ exposed servers observed, later weaponised into a botnet.',
    rootCause: 'By-design lack of authentication on the job API, combined with clusters exposed outside a controlled network — hence the "disputed" CVE status.',
    mitigation: 'Never expose the Ray dashboard/API to untrusted networks. Enforce network isolation (private subnets, NetworkPolicy), put an authenticating reverse proxy in front, bind to localhost/cluster-internal only, and lock down the KubeRay service type (no public LoadBalancer).',
    fix: 'There is no auth-adding patch (the vendor considers isolation the control); treat hardening as the fix — isolate, authenticate at the proxy/ingress, and monitor for unexpected job submissions.',
    lesson: '"Runs only in a trusted network" is an operational requirement you must enforce. For AI frameworks that assume a trusted perimeter, network isolation and an auth layer are not optional.',
  },
  source: {
    heading: 'Official Sources',
    body: 'Oligo Security’s ShadowRay research, the GitHub Security Advisory GHSA-6wgj-66m2-xxp2 (CVE-2023-48022, including the disputed status and Anyscale’s position), and Ray’s own security documentation on running in a controlled network.',
    linkText: 'Read the GitHub Security Advisory (CVE-2023-48022)',
    linkHref: 'https://github.com/advisories/GHSA-6wgj-66m2-xxp2',
  },
  techLinks: [K8S_SECURITY_LINK, K8S_INFERENCE_HUB_LINK],
  extraLinks: [
    { label: 'Ray Serve support', href: '/kubernetes-ray-serve-job-support/' },
    { label: 'Agent network egress control', href: '/ai-agent-network-egress-control/' },
    { label: 'Agent permission error troubleshooting', href: '/kubernetes-agent-permission-error-troubleshooting/' },
  ],
});

// ─── CVE-2025-1974 — IngressNightmare ───────────────────────────────────────────

export const ingressNightmare1974 = incidentPage({
  slug: 'ingress-nginx-ingressnightmare-cve-2025-1974-postmortem',
  title: 'IngressNightmare CVE-2025-1974 Postmortem — Unauthenticated RCE in ingress-nginx',
  description:
    'Postmortem of IngressNightmare (CVE-2025-1974, CVSS 9.8): unauthenticated access to the ingress-nginx admission webhook enabled RCE in the controller and exposure of all cluster secrets. Root cause, fix (1.12.1 / 1.11.5), network-policy mitigation, and why it matters for AI clusters — with the Wiz source.',
  keywords: ['IngressNightmare', 'CVE-2025-1974', 'ingress-nginx RCE', 'admission webhook RCE', 'Kubernetes cluster takeover', 'ingress controller vulnerability'],
  h1: 'IngressNightmare (CVE-2025-1974) — ingress-nginx Admission-Webhook RCE Postmortem',
  tagline: 'An unauthenticated request to the ingress admission webhook could run code in the controller and read every secret in the cluster. Here is the record and the fix.',
  heroEyebrow: 'Postmortem · CVE-2025-1974 · CVSS 9.8',
  name: 'IngressNightmare (CVE-2025-1974)',
  painIntro:
    'Most AI platforms expose inference and agents through ingress-nginx. IngressNightmare meant anyone who could reach the admission webhook — often in-cluster, sometimes wider — could take the cluster over.',
  heroVariant:
    'IngressNightmare (CVE-2025-1974) was a critical flaw in the Kubernetes ingress-nginx controller’s admission webhook. An attacker who could send requests to the webhook could supply a crafted Ingress object with malicious NGINX configuration directives that were injected and executed, achieving remote code execution in the controller Pod — without authentication. Because the ingress controller is highly privileged, exploitation enabled reading Secrets across all namespaces and could lead to full cluster takeover (CVSS 9.8). For AI clusters this is acute: the ingress controller often fronts every model endpoint and agent, and holds the keys to the kingdom. The record and fix are below.',
  record: {
    date: 'Disclosed 24 March 2025 by Wiz Research.',
    platform: 'Any Kubernetes cluster running the ingress-nginx controller (hyperscaler or on-prem).',
    component: 'ingress-nginx controller: versions prior to v1.11.0, v1.11.0–1.11.4, and v1.12.0.',
    what: 'Unauthenticated requests to the admission webhook allowed injection of malicious NGINX directives via a crafted Ingress object, yielding RCE in the controller Pod.',
    impact: 'Remote code execution in a highly privileged controller, read access to Secrets in all namespaces, and potential full cluster takeover (CVSS 9.8, Critical).',
    rootCause: 'The admission webhook processed attacker-controlled configuration without authentication, and NGINX config injection was possible during validation.',
    mitigation: 'If you cannot upgrade immediately, apply a NetworkPolicy so only the Kubernetes API server can reach the admission webhook, and consider temporarily disabling the admission webhook component.',
    fix: 'Upgrade ingress-nginx to v1.12.1 (or later) or v1.11.5 (or later).',
    lesson: 'Admission webhooks are code-execution surfaces. Lock their network exposure to the API server only, and keep cluster-wide controllers patched aggressively — they are single points of total compromise.',
  },
  source: {
    heading: 'Official Source',
    body: 'Wiz Research disclosure of IngressNightmare (CVE-2025-1974 and the related CVEs) and the Kubernetes ingress-nginx security advisory. Verify affected and fixed versions against the advisory before upgrading.',
    linkText: 'Read the Wiz Research disclosure (IngressNightmare)',
    linkHref: 'https://www.wiz.io/blog/ingress-nginx-kubernetes-vulnerabilities',
  },
  techLinks: [K8S_SECURITY_LINK, K8S_SRE_LINK],
  extraLinks: [
    { label: 'Kubernetes AI production support', href: '/kubernetes-ai-production-support/' },
    { label: 'MCP gateway support', href: '/kubernetes-mcp-gateway-job-support/' },
    { label: 'Inference timeout troubleshooting', href: '/kubernetes-inference-timeout-troubleshooting/' },
  ],
});

// ─── CVE-2024-37032 — Probllama ─────────────────────────────────────────────────

export const probllama37032 = incidentPage({
  slug: 'ollama-probllama-cve-2024-37032-postmortem',
  title: 'Probllama CVE-2024-37032 Postmortem — Ollama Path-Traversal RCE as Root',
  description:
    'Postmortem of Probllama (CVE-2024-37032, CVSS 9.1): Ollama < 0.1.34 failed to validate the model digest, enabling path traversal and unauthenticated remote code execution as root. Root cause, fix (0.1.34), mitigation, and why self-hosted inference runtimes need network isolation — with the Wiz source.',
  keywords: ['Probllama', 'CVE-2024-37032', 'Ollama RCE', 'Ollama path traversal', 'self-hosted LLM security', 'Ollama vulnerability', 'model digest validation'],
  h1: 'Probllama (CVE-2024-37032) — Ollama Path-Traversal RCE Postmortem',
  tagline: 'A missing digest-format check in Ollama let a malicious model manifest write arbitrary files and run code as root. Here is the record and the fix.',
  heroEyebrow: 'Postmortem · CVE-2024-37032 · CVSS 9.1',
  name: 'Probllama (CVE-2024-37032)',
  painIntro:
    'Self-hosted inference runtimes like Ollama are increasingly run on Kubernetes for private AI. Probllama showed how an unvalidated model manifest turned a convenient runtime into an unauthenticated root RCE.',
  heroVariant:
    'Probllama (CVE-2024-37032) was a path-traversal flaw in Ollama versions before 0.1.34. Ollama’s model-pull mechanism accepted OCI manifests without validating that the digest conformed to the expected sha256:<64 hex> format, so an attacker-controlled registry could supply digest values containing path-traversal sequences (../) to write arbitrary files on the server. Chained with writing a malicious shared library and an /etc/ld.so.preload entry pointing to it, pulling a crafted model led to unauthenticated remote code execution — as root in default Docker deployments. Over a thousand internet-exposed instances were affected. The record and fix are below.',
  record: {
    date: 'Disclosed and patched May 2024 (fix released in 0.1.34 on 7 May 2024); discovered by Wiz Research.',
    platform: 'Ollama servers (containers / Kubernetes / VMs), especially internet-exposed or multi-tenant deployments.',
    component: 'Ollama < 0.1.34.',
    what: 'Ollama did not validate the model-manifest digest format, allowing path-traversal sequences that wrote arbitrary files; chaining /etc/ld.so.preload yielded code execution.',
    impact: 'Unauthenticated remote code execution — as root in default Docker setups — plus file read/overwrite and model theft/poisoning (CVSS 9.1, Critical). 1,000+ exposed instances.',
    rootCause: 'Missing input validation: the digest field was trusted without enforcing the sha256:<64 hex> format, enabling path traversal during model resolution.',
    mitigation: 'If you cannot patch immediately, never expose Ollama directly to untrusted networks, run it non-root with a read-only root filesystem, restrict egress, and only pull models from trusted registries.',
    fix: 'Upgrade Ollama to 0.1.34 or later.',
    lesson: 'Self-hosted inference runtimes are network services handling attacker-influenceable input (models and manifests). Treat them like any exposed service: validate input, run least-privilege, isolate the network, and keep them patched.',
  },
  source: {
    heading: 'Official Source',
    body: 'Wiz Research disclosure of Probllama (CVE-2024-37032) and the Ollama release notes for 0.1.34. Verify the affected and fixed versions against the advisory before upgrading.',
    linkText: 'Read the Wiz Research disclosure (Probllama, CVE-2024-37032)',
    linkHref: 'https://www.wiz.io/blog/probllama-ollama-vulnerability-cve-2024-37032',
  },
  techLinks: [K8S_PRIVATE_AI_LINK, K8S_SECURITY_LINK],
  extraLinks: [
    { label: 'Private AI on Kubernetes support', href: '/private-ai-kubernetes-job-support/' },
    { label: 'Model loading failure troubleshooting', href: '/kubernetes-model-loading-failure-troubleshooting/' },
    { label: 'Agent network egress control', href: '/ai-agent-network-egress-control/' },
  ],
});

// ─── Hugging Face malicious-model supply chain ──────────────────────────────────

export const hfSupplyChain = incidentPage({
  slug: 'hugging-face-malicious-model-supply-chain-postmortem',
  title: 'Hugging Face Malicious-Model Supply-Chain Postmortem — Pickle RCE & nullifAI',
  description:
    'Postmortem of malicious-model supply-chain attacks on Hugging Face: pickle-serialized models execute arbitrary code on load (torch.load/__reduce__), with the nullifAI campaign evading picklescan via malformed 7z-wrapped pickles. Root cause, defenses (safetensors, scanning, provenance), and sources.',
  keywords: ['Hugging Face malicious models', 'pickle deserialization RCE', 'nullifAI', 'model supply chain attack', 'torch.load security', 'safetensors', 'AI model scanning'],
  h1: 'Hugging Face Malicious-Model Supply-Chain Postmortem — Pickle RCE & the nullifAI Pattern',
  tagline: 'Downloading a model can run code. Pickle-based model files execute arbitrary Python on load — and attackers have shipped backdoored models to public hubs. Here is the record and the defenses.',
  heroEyebrow: 'Postmortem · Model Supply Chain · Ongoing',
  name: 'the Hugging Face malicious-model (pickle) attacks',
  painIntro:
    'Private AI on Kubernetes almost always pulls open-weight models from public hubs. If those models are pickle-serialized, loading one can execute arbitrary code inside your inference Pod — and malicious models have repeatedly reached the Hugging Face Hub.',
  heroVariant:
    'This is a recurring supply-chain class rather than a single CVE. PyTorch’s default save format wraps weights in Python’s pickle module, and pickle executes arbitrary Python on load: an attacker overrides __reduce__ on a custom class so that torch.load() runs a payload as a side effect of "deserializing" the model. Researchers have repeatedly found backdoored models on the Hugging Face Hub — ReversingLabs’ "nullifAI" campaign (February 2025) shipped reverse shells in pickle models and evaded the platform’s picklescan by using 7z archives and intentionally malformed pickles that picklescan failed to parse but Python still executed; JFrog flagged 100+ malicious models in early 2025; and earlier 2024 rounds found the same pattern. Hugging Face removed flagged models quickly, but the lesson stands: a model file is executable code. The record and defenses are below.',
  record: {
    date: 'Recurring since 2024; ReversingLabs "nullifAI" disclosure February 2025; JFrog 100+ malicious models early 2025.',
    platform: 'Any AI workload (on Kubernetes or elsewhere) that loads pickle-serialized models pulled from public hubs such as Hugging Face.',
    component: 'Python pickle / PyTorch default serialization (torch.load); models distributed via public model hubs.',
    what: 'Attackers published models whose pickle payload executes arbitrary code on load (via __reduce__), using evasion (7z wrapping, malformed pickles) to bypass automated scanners.',
    impact: 'Arbitrary code execution inside the inference/training process on model load — reverse shells, credential and data theft, and a foothold in the AI pipeline.',
    rootCause: 'Pickle deserialization is code execution by design; model provenance and scanning were insufficient, and scanners could be evaded.',
    mitigation: 'Prefer safetensors over pickle; never load untrusted pickle models; pin and verify model provenance (hashes, signatures); scan models in a sandbox; and isolate model-loading in a least-privilege, egress-restricted Pod.',
    fix: 'There is no single patch — the defense is architectural: safetensors-only policies where possible, provenance pinning, pre-load scanning, and sandboxed/isolated loading of any untrusted model.',
    lesson: 'A model file is executable code. Treat the model supply chain like any other dependency supply chain: trusted sources, provenance, scanning, and least-privilege, isolated execution.',
  },
  source: {
    heading: 'Official Sources',
    body: 'ReversingLabs’ "nullifAI" research on malicious ML models on Hugging Face, JFrog’s findings on malicious models, and Hugging Face’s own guidance on pickle risks and safetensors. Verify current platform protections before relying on them.',
    linkText: 'Read the ReversingLabs malicious-model research (nullifAI)',
    linkHref: 'https://www.reversinglabs.com/blog/rl-identifies-malware-ml-model-hosted-on-hugging-face',
  },
  techLinks: [K8S_SECURITY_LINK, K8S_PRIVATE_AI_LINK],
  extraLinks: [
    { label: 'Private AI on Kubernetes support', href: '/private-ai-kubernetes-job-support/' },
    { label: 'Agent sandbox job support', href: '/kubernetes-agent-sandbox-job-support/' },
    { label: 'Enterprise RAG on Kubernetes support', href: '/kubernetes-enterprise-rag-job-support/' },
    EXISTING.huggingFace,
  ],
});

export const kubernetesIncidentPostmortemPages: LandingPageConfig[] = [
  incidentPostmortemHub,
  nvidiaToolkit0132,
  nvidiaScape23266,
  shadowRay48022,
  ingressNightmare1974,
  probllama37032,
  hfSupplyChain,
];
