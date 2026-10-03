import type { LandingPageConfig } from '../landing-pages';
import {
  k8sTechPage,
  relatedLinks,
  jobSupportHighlights,
  k8sTechFaqs,
  EXISTING,
  K8S_HUB_LINK,
  K8S_PRODUCTION_LINK,
  K8S_SECURITY_LINK,
  K8S_INTERVIEW_LINK,
  K8S_INFERENCE_HUB_LINK,
  K8S_AGENTIC_HUB_LINK,
  K8S_PRIVATE_AI_LINK,
  K8S_OPENSHIFT_LINK,
  K8S_GPU_LINK,
  K8S_USA_LINK,
  K8S_EUROPE_LINK,
} from './shared';

const geo = [K8S_USA_LINK, K8S_EUROPE_LINK];

export const kubernetesAiHealthcare: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-ai-healthcare-job-support',
  title: 'Kubernetes AI Healthcare Job Support — Private, Compliant Clinical AI Infrastructure',
  description:
    'Real-time job support for healthcare AI on Kubernetes: private/on-prem LLM serving for PHI, data-residency and isolation architecture, audit logging, RAG over clinical documents, and GPU infrastructure for imaging and NLP — engineering, not legal advice.',
  keywords: ['Kubernetes AI healthcare', 'clinical AI infrastructure', 'PHI private AI', 'healthcare LLM Kubernetes', 'medical imaging GPU Kubernetes'],
  h1: 'Kubernetes AI Healthcare — Private, Auditable AI Infrastructure for Clinical Workloads',
  tagline: 'Healthcare AI needs data isolation, audit, and often on-prem/private inference. We build that infrastructure on Kubernetes.',
  heroEyebrow: 'Healthcare AI on Kubernetes',
  painIntro:
    'Clinical AI touches PHI, so inference, RAG, and data flows must be isolated, auditable, and often kept on-prem or in-region — on top of the usual GPU and serving challenges.',
  heroVariant:
    'We help healthcare teams build AI infrastructure on Kubernetes: private/on-prem or in-region LLM serving so PHI never leaves the boundary, strict data isolation and workload identity, audit logging of model and tool access, private RAG over clinical documents, and GPU infrastructure for medical imaging and clinical NLP. We focus on the engineering implications of data protection and residency — isolation, private endpoints, audit — rather than giving legal/compliance conclusions, which belong to your compliance team.',
  highlights: jobSupportHighlights,
  faqs: k8sTechFaqs('healthcare AI on Kubernetes', 'We help you serve clinical models privately, isolate PHI, audit access, and run GPU infrastructure for imaging and NLP — engineering, not legal advice.'),
  useCasesSection: {
    title: 'Healthcare AI Infrastructure We Help With',
    cases: [
      'Private/on-prem LLM serving so PHI never leaves your boundary',
      'Data isolation, workload identity, and audit logging for clinical AI',
      'Private RAG over clinical guidelines and patient documentation',
      'GPU infrastructure for medical imaging and clinical NLP workloads',
      'Data-residency-aware architecture for multi-site health systems',
      'Reliability and incident support for clinical-facing AI services',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: geo,
    techLinks: [K8S_PRIVATE_AI_LINK, K8S_INFERENCE_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_SECURITY_LINK, K8S_OPENSHIFT_LINK,
      { label: 'Sovereign AI on Kubernetes support', href: '/sovereign-ai-kubernetes-job-support/' },
      { label: 'Enterprise RAG on Kubernetes support', href: '/kubernetes-enterprise-rag-job-support/' },
      EXISTING.rag,
    ],
  }),
});

export const kubernetesAiBanking: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-ai-banking-financial-services-job-support',
  title: 'Kubernetes AI Banking & Financial Services Job Support — Regulated, Private AI',
  description:
    'Real-time job support for banking and financial-services AI on Kubernetes: private/regulated LLM serving, data residency, model/data isolation, audit, RAG over financial documents, and low-latency GPU inference for risk and fraud.',
  keywords: ['Kubernetes AI banking', 'financial services AI Kubernetes', 'regulated AI infrastructure', 'private LLM banking', 'fraud AI GPU Kubernetes'],
  h1: 'Kubernetes AI for Banking & Financial Services — Regulated, Private, Auditable',
  tagline: 'Financial-services AI needs data residency, isolation, audit, and reliability. We build that infrastructure on Kubernetes.',
  heroEyebrow: 'Banking & FinServ AI on Kubernetes',
  painIntro:
    'Banks and financial institutions run AI under strict data-residency, audit, and reliability expectations — so the infrastructure, not just the model, has to meet a high bar.',
  heroVariant:
    'We help banking and financial-services teams build AI infrastructure on Kubernetes: private/regulated LLM serving (often on-prem or OpenShift) with data-residency architecture, strict model and data isolation, workload identity, audit logging, private RAG over policies and financial documents, and low-latency GPU inference for risk, fraud, and analytics. We address the engineering implications of regulation — isolation, private endpoints, audit, residency — and keep agentic workloads contained, without giving legal conclusions.',
  highlights: jobSupportHighlights,
  faqs: k8sTechFaqs('banking and financial-services AI on Kubernetes', 'We help you serve models privately under data-residency and audit needs, isolate data, and run low-latency GPU inference for risk and fraud — engineering, not legal advice.'),
  useCasesSection: {
    title: 'Financial-Services AI Infrastructure We Help With',
    cases: [
      'Private/regulated LLM serving with data-residency architecture (on-prem or OpenShift)',
      'Model and data isolation, workload identity, and audit for regulated AI',
      'Private RAG over policies, contracts, and financial documents',
      'Low-latency GPU inference for risk, fraud, and real-time analytics',
      'Contained agentic workflows for operations with least-privilege tool access',
      'Reliability, capacity, and incident support for customer-facing financial AI',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: geo,
    techLinks: [K8S_PRIVATE_AI_LINK, K8S_SECURITY_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_OPENSHIFT_LINK, K8S_INFERENCE_HUB_LINK, K8S_AGENTIC_HUB_LINK,
      { label: 'Sovereign AI on Kubernetes support', href: '/sovereign-ai-kubernetes-job-support/' },
      { label: 'Insurance AI on Kubernetes support', href: '/kubernetes-ai-insurance-job-support/' },
      EXISTING.rag,
    ],
  }),
});

export const kubernetesAiInsurance: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-ai-insurance-job-support',
  title: 'Kubernetes AI Insurance Job Support — Claims, Underwriting & Document AI',
  description:
    'Real-time job support for insurance AI on Kubernetes: document-processing agents for claims and underwriting, private RAG over policies, GPU inference, data isolation and audit, and reliable production operation.',
  keywords: ['Kubernetes AI insurance', 'claims AI infrastructure', 'underwriting AI Kubernetes', 'document processing agent insurance', 'insurance private AI'],
  h1: 'Kubernetes AI for Insurance — Claims, Underwriting, and Document Automation',
  tagline: 'Insurance AI is document-heavy and regulated. We build the private, auditable infrastructure it runs on.',
  heroEyebrow: 'Insurance AI on Kubernetes',
  painIntro:
    'Insurance AI processes sensitive policy, claims, and customer data at scale — so document-processing agents, RAG, and inference need isolation, audit, and reliability.',
  heroVariant:
    'We help insurers build AI infrastructure on Kubernetes: document-processing agents for claims and underwriting (with sandboxing and least-privilege), private RAG over policies and claims documents, GPU inference for extraction and NLP, data isolation and audit for regulated workloads, and the reliability practices to run customer- and adjuster-facing AI in production. We keep agentic automation contained and auditable.',
  highlights: jobSupportHighlights,
  faqs: k8sTechFaqs('insurance AI on Kubernetes', 'We help you run document-processing agents, private RAG, and GPU inference for claims and underwriting with isolation and audit.'),
  relatedLinks: relatedLinks({
    geoLinks: geo,
    techLinks: [K8S_AGENTIC_HUB_LINK, K8S_PRIVATE_AI_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_SECURITY_LINK, K8S_INFERENCE_HUB_LINK,
      { label: 'Document processing agent support', href: '/kubernetes-document-processing-agent-job-support/' },
      { label: 'Banking & financial services AI support', href: '/kubernetes-ai-banking-financial-services-job-support/' },
      EXISTING.rag,
    ],
  }),
});

export const kubernetesAiTelecom: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-ai-telecom-job-support',
  title: 'Kubernetes AI Telecom Job Support — Network AI, Edge Inference & Scale',
  description:
    'Real-time job support for telecom AI on Kubernetes: network automation agents, edge inference, large-scale multi-cluster GPU, RAN/OSS/BSS AI, and reliable operation across distributed sites.',
  keywords: ['Kubernetes AI telecom', 'telecom network AI', 'edge inference telecom', 'multi-cluster GPU telecom', 'OSS BSS AI Kubernetes'],
  h1: 'Kubernetes AI for Telecom — Network Automation, Edge Inference, and Scale',
  tagline: 'Telecom AI spans core and edge, many clusters, and strict reliability. We build infrastructure that fits.',
  heroEyebrow: 'Telecom AI on Kubernetes',
  painIntro:
    'Telcos run AI across core datacenters and edge sites, often on Rancher/RKE2 or OpenShift, at large scale — network automation, anomaly detection, and customer AI all need robust infrastructure.',
  heroVariant:
    'We help telecom teams build AI infrastructure on Kubernetes: network-automation and incident-response agents, edge inference on constrained sites, large-scale and multi-cluster GPU management, AI for OSS/BSS and customer operations, and reliability across distributed clusters. Telecom deployments favour fleet-friendly Kubernetes (Rancher/RKE2, OpenShift) and edge — we design for that reality and for the scale telcos operate at.',
  highlights: jobSupportHighlights,
  faqs: k8sTechFaqs('telecom AI on Kubernetes', 'We help you run network-automation agents, edge inference, and multi-cluster GPU at telecom scale with reliability across distributed sites.'),
  relatedLinks: relatedLinks({
    geoLinks: geo,
    techLinks: [K8S_AGENTIC_HUB_LINK, K8S_GPU_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_INFERENCE_HUB_LINK,
      { label: 'Edge AI on Kubernetes support', href: '/kubernetes-edge-ai-job-support/' },
      { label: 'Rancher / RKE2 AI support', href: '/rancher-rke2-ai-job-support/' },
      { label: 'Manufacturing AI on Kubernetes support', href: '/kubernetes-ai-manufacturing-job-support/' },
    ],
  }),
});

export const kubernetesAiManufacturing: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-ai-manufacturing-job-support',
  title: 'Kubernetes AI Manufacturing Job Support — Edge AI, Vision & Industrial Systems',
  description:
    'Real-time job support for manufacturing AI on Kubernetes: computer vision on the factory edge, predictive maintenance, on-prem/private inference, GPU at the edge, and reliable operation in industrial environments.',
  keywords: ['Kubernetes AI manufacturing', 'edge AI factory', 'computer vision Kubernetes', 'predictive maintenance AI', 'industrial AI infrastructure'],
  h1: 'Kubernetes AI for Manufacturing — Edge Vision, Predictive Maintenance, Private Inference',
  tagline: 'Manufacturing AI lives at the edge and on-prem. We build GPU and inference infrastructure that runs on the factory floor.',
  heroEyebrow: 'Manufacturing AI on Kubernetes',
  painIntro:
    'Factories run AI close to the line — computer vision, quality inspection, predictive maintenance — often on edge Kubernetes with intermittent connectivity and on-prem GPUs.',
  heroVariant:
    'We help manufacturers build AI infrastructure on Kubernetes: computer-vision inference at the edge, predictive-maintenance models, on-prem/private serving for IP-sensitive workloads, GPU at edge sites, and reliability under industrial conditions (intermittent connectivity, long-lived deployments). We favour lightweight, fleet-friendly Kubernetes (Rancher/RKE2, OpenShift) and design for the edge-to-datacenter data flow manufacturing needs.',
  highlights: jobSupportHighlights,
  faqs: k8sTechFaqs('manufacturing AI on Kubernetes', 'We help you run edge computer vision, predictive maintenance, and private inference with GPU at the edge and reliability in industrial settings.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_EUROPE_LINK, K8S_USA_LINK],
    techLinks: [K8S_GPU_LINK, K8S_PRIVATE_AI_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_INFERENCE_HUB_LINK,
      { label: 'Edge AI on Kubernetes support', href: '/kubernetes-edge-ai-job-support/' },
      { label: 'Computer vision on Kubernetes support', href: '/kubernetes-computer-vision-job-support/' },
      { label: 'Automotive AI on Kubernetes support', href: '/kubernetes-ai-automotive-job-support/' },
    ],
  }),
});

export const kubernetesAiAutomotive: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-ai-automotive-job-support',
  title: 'Kubernetes AI Automotive Job Support — Training Scale, Simulation & Data Pipelines',
  description:
    'Real-time job support for automotive AI on Kubernetes: large-scale GPU training for perception models, simulation workloads, data pipelines, private/EU-region inference, and reliable production AI.',
  keywords: ['Kubernetes AI automotive', 'autonomous driving training Kubernetes', 'perception model GPU', 'automotive simulation Kubernetes', 'automotive AI infrastructure'],
  h1: 'Kubernetes AI for Automotive — Training Scale, Simulation, and Data Pipelines',
  tagline: 'Automotive AI means massive GPU training, simulation, and data — on Kubernetes that must schedule and scale reliably.',
  heroEyebrow: 'Automotive AI on Kubernetes',
  painIntro:
    'Automotive AI runs enormous distributed training (perception, planning), simulation, and data pipelines — where gang scheduling, interconnect, and GPU utilisation decide whether it is affordable.',
  heroVariant:
    'We help automotive teams build AI infrastructure on Kubernetes: large-scale distributed GPU training with gang scheduling and high-speed interconnect (InfiniBand/RoCE, NCCL), simulation workloads, data-pipeline orchestration, private/EU-region inference for data-residency needs (important for European automotive), and the reliability and FinOps to keep multi-node training efficient. We make sure distributed jobs schedule all-or-nothing and that expensive GPU fleets stay busy.',
  highlights: jobSupportHighlights,
  faqs: k8sTechFaqs('automotive AI on Kubernetes', 'We help you run large-scale distributed GPU training, simulation, and data pipelines with gang scheduling, fast interconnect, and strong GPU utilisation.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_EUROPE_LINK, K8S_USA_LINK],
    techLinks: [K8S_GPU_LINK, K8S_PRIVATE_AI_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK,
      { label: 'Gang scheduling AI job support', href: '/kubernetes-gang-scheduling-ai-job-support/' },
      { label: 'Bare-metal GPU Kubernetes support', href: '/bare-metal-gpu-kubernetes-job-support/' },
      { label: 'Manufacturing AI on Kubernetes support', href: '/kubernetes-ai-manufacturing-job-support/' },
    ],
  }),
});

export const kubernetesAiRetail: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-ai-retail-ecommerce-job-support',
  title: 'Kubernetes AI Retail & E-Commerce Job Support — Search, Recommendations & Agents',
  description:
    'Real-time job support for retail and e-commerce AI on Kubernetes: semantic search and recommendations, customer-support agents, bursty traffic autoscaling, RAG over catalogs, and cost-efficient GPU serving.',
  keywords: ['Kubernetes AI retail', 'ecommerce AI infrastructure', 'semantic search Kubernetes', 'recommendations GPU', 'customer support agent retail'],
  h1: 'Kubernetes AI for Retail & E-Commerce — Search, Recommendations, and Support Agents',
  tagline: 'Retail AI is bursty and cost-sensitive. We build inference and agent infrastructure that scales with traffic.',
  heroEyebrow: 'Retail & E-Commerce AI on Kubernetes',
  painIntro:
    'Retail traffic spikes hard (promotions, seasons), so AI search, recommendations, and support agents need autoscaling and cost control — idle GPUs between peaks are pure waste.',
  heroVariant:
    'We help retail and e-commerce teams build AI infrastructure on Kubernetes: semantic search and recommendations, RAG over product catalogs, customer-support agents, and inference that autoscales with bursty traffic (scale-to-zero between peaks, scale-up fast for promotions) while controlling GPU cost. We tune autoscaling and caching so peak events are reliable and quiet periods are cheap.',
  highlights: jobSupportHighlights,
  faqs: k8sTechFaqs('retail and e-commerce AI on Kubernetes', 'We help you run semantic search, recommendations, RAG, and support agents with traffic-aware autoscaling and GPU cost control.'),
  relatedLinks: relatedLinks({
    geoLinks: geo,
    techLinks: [K8S_INFERENCE_HUB_LINK, K8S_AGENTIC_HUB_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK,
      { label: 'Customer support agent support', href: '/kubernetes-customer-support-agent-job-support/' },
      { label: 'Enterprise RAG on Kubernetes support', href: '/kubernetes-enterprise-rag-job-support/' },
      { label: 'Inference autoscaling support', href: '/kubernetes-inference-autoscaling-support/' },
      EXISTING.rag,
    ],
  }),
});

export const kubernetesAiGovernment: LandingPageConfig = k8sTechPage({
  slug: 'kubernetes-ai-government-public-sector-job-support',
  title: 'Kubernetes AI Government & Public Sector Job Support — Sovereign, Air-Gapped AI',
  description:
    'Real-time job support for government and public-sector AI on Kubernetes: sovereign and air-gapped deployment, data-residency architecture, on-prem private LLM serving, audit, and secure agent infrastructure.',
  keywords: ['Kubernetes AI government', 'public sector AI infrastructure', 'sovereign AI government', 'air-gapped AI public sector', 'secure government AI Kubernetes'],
  h1: 'Kubernetes AI for Government & Public Sector — Sovereign, Air-Gapped, Auditable',
  tagline: 'Public-sector AI often must be sovereign, air-gapped, and fully auditable. We build exactly that on Kubernetes.',
  heroEyebrow: 'Government & Public Sector AI',
  painIntro:
    'Government AI frequently requires data to stay in-country, sometimes fully air-gapped, always auditable — the infrastructure bar is high before a single model runs.',
  heroVariant:
    'We help public-sector teams build AI infrastructure on Kubernetes: sovereign deployment (in-country regions or on-prem), air-gapped/disconnected clusters with internal registries and model mirroring, on-prem private LLM serving with the Red Hat AI Inference Server or vLLM, strict data isolation and audit, and secure, contained agent infrastructure. We address the engineering implications of sovereignty and security — residency, isolation, audit, air-gap — without giving legal or policy conclusions.',
  highlights: jobSupportHighlights,
  faqs: k8sTechFaqs('government and public-sector AI on Kubernetes', 'We help you deploy sovereign, air-gapped, auditable AI with on-prem private serving, data isolation, and secure agent infrastructure.'),
  relatedLinks: relatedLinks({
    geoLinks: [K8S_EUROPE_LINK, K8S_USA_LINK],
    techLinks: [K8S_PRIVATE_AI_LINK, K8S_SECURITY_LINK],
    problemLink: K8S_PRODUCTION_LINK,
    proxyLink: K8S_INTERVIEW_LINK,
    additionalLinks: [
      K8S_HUB_LINK, K8S_OPENSHIFT_LINK,
      { label: 'Sovereign AI on Kubernetes support', href: '/sovereign-ai-kubernetes-job-support/' },
      { label: 'Air-gapped AI on Kubernetes support', href: '/air-gapped-ai-kubernetes-job-support/' },
      { label: 'On-premises AI infrastructure support', href: '/on-premises-ai-infrastructure-job-support/' },
    ],
  }),
});

export const kubernetesIndustryPages: LandingPageConfig[] = [
  kubernetesAiHealthcare,
  kubernetesAiBanking,
  kubernetesAiInsurance,
  kubernetesAiTelecom,
  kubernetesAiManufacturing,
  kubernetesAiAutomotive,
  kubernetesAiRetail,
  kubernetesAiGovernment,
];
