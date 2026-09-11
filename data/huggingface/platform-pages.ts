import type { LandingPageConfig } from '../landing-pages';
import {
  hfPage,
  hfServicePage,
  relatedLinks,
  hfServiceFaqs,
  hfKbFaqs,
  techHighlights,
  EXISTING,
  HF_HUB_LINK,
  HF_INTERVIEW_HUB_LINK,
  HF_PRODUCTION_LINK,
  HF_HUB_PLATFORM_LINK,
  HF_ENDPOINTS_LINK,
  HF_PROVIDERS_LINK,
  HF_SERVING_LINK,
  HF_VLLM_LINK,
  HF_TGI_LINK,
  HF_TEI_LINK,
  HF_SPACES_LINK,
  HF_GRADIO_LINK,
  HF_TRANSFORMERS_INFERENCE_LINK,
  HF_AWS_LINK,
  HF_AZURE_LINK,
  HF_GCP_LINK,
} from './shared';

// ─── huggingface_hub + hf CLI ────────────────────────────────────────────────

export const huggingFaceHubPlatform: LandingPageConfig = hfServicePage({
  slug: 'huggingface-hub-job-support',
  title: 'Hugging Face Hub Job Support | huggingface_hub, hf CLI, Tokens & Xet',
  description:
    'Job support for the Hugging Face Hub — huggingface_hub library, the hf CLI (formerly huggingface-cli), access tokens and scopes, gated and private models, repositories, and Xet storage. Fix 401/403 auth, upload/download, and CI integration issues fast.',
  keywords: [
    'Hugging Face Hub job support', 'huggingface_hub support', 'hf CLI job support',
    'Hugging Face token error 401', 'gated model access support', 'Hugging Face Xet storage',
    'huggingface-cli support', 'Hugging Face private repo support',
  ],
  h1: 'Hugging Face Hub Job Support — huggingface_hub, hf CLI, Tokens, Gated Models & Xet',
  tagline:
    'Real-time help with the Hugging Face Hub platform layer — the huggingface_hub Python library, the hf CLI, authentication and token scopes, gated and private repositories, and Xet-backed storage.',
  heroEyebrow: 'Hugging Face Hub & Platform Support',
  painIntro:
    'A gated model throwing 401 in your pipeline? A fine-grained token missing the right scope? Confused by the rename from huggingface-cli to hf, or by Xet replacing Git LFS? The Hub is the backbone of every Hugging Face workflow, and small auth or storage issues block whole teams. We help you get it right.',
  heroVariant:
    'The Hub platform layer covers the huggingface_hub library (approaching v1.0) with its InferenceClient, snapshot_download, upload_folder and repo APIs; the hf CLI (hf auth login, hf download, hf upload, hf repo, hf jobs) which replaced huggingface-cli; access tokens including fine-grained and scoped tokens; gated-model access requests and organization permissions; private and public repositories, revisions and branches; and Xet storage (hf_xet) which now provides chunk-level dedup in place of Git LFS (hf_transfer is deprecated). We help resolve auth failures, wire the Hub into CI/CD securely, and set up repositories, tokens, and access the right way.',
  faqs: [
    ...hfServiceFaqs('Hugging Face Hub', 'We help with huggingface_hub, the hf CLI, tokens and scopes, gated and private repos, and Xet storage on your real project.'),
    {
      question: 'The CLI changed — is it huggingface-cli or hf now?',
      answer:
        'The current CLI is hf (for example hf auth login, hf download, hf upload, hf repo, hf jobs). The older huggingface-cli command still works for backward compatibility, but hf is the current name and interface. We help you migrate scripts and CI that still call huggingface-cli.',
    },
    {
      question: 'How do I fix 401/403 errors on gated or private models?',
      answer:
        'Most gated-model failures are token-scope or access-approval issues: the token lacks read access to the gated repo, the gated terms were never accepted for that account/org, or the token is a fine-grained token without the repo in its allow-list. We diagnose the exact cause from the error and request ID, fix the token scope or access request, and make sure CI uses a correctly scoped secret rather than a personal token.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'Hugging Face production support', href: '/hugging-face-production-support/' },
    ],
    techLinks: [HF_ENDPOINTS_LINK, HF_PROVIDERS_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_SPACES_LINK, HF_TRANSFORMERS_INFERENCE_LINK, HF_AWS_LINK, HF_AZURE_LINK, HF_GCP_LINK,
      EXISTING.hfJobSupport, EXISTING.mlops,
    ],
  }),
});

// ─── Inference Endpoints (dedicated) ─────────────────────────────────────────

export const huggingFaceInferenceEndpoints: LandingPageConfig = hfServicePage({
  slug: 'huggingface-inference-endpoints-job-support',
  title: 'Hugging Face Inference Endpoints Job Support | Deploy, Scale & Debug',
  description:
    'Job support for Hugging Face Inference Endpoints — deploy models on dedicated managed infrastructure, choose CPU/GPU instances and containers (TGI/TEI/custom), fix cold starts, scale-to-zero and autoscaling, and cut latency and cost. Same-day expert help.',
  keywords: [
    'Hugging Face Inference Endpoints job support', 'Inference Endpoints deployment support',
    'Inference Endpoint cold start', 'Inference Endpoint autoscaling', 'dedicated LLM endpoint support',
    'TGI TEI container support', 'Inference Endpoints cost optimization',
  ],
  h1: 'Hugging Face Inference Endpoints Job Support — Deploy, Autoscale & Optimize',
  tagline:
    'Real-time help deploying and operating dedicated Hugging Face Inference Endpoints — instance and container selection, autoscaling and scale-to-zero, cold starts, latency, and cost, with production reliability in mind.',
  heroEyebrow: 'Inference Endpoints — Dedicated Deployment Support',
  painIntro:
    'An Inference Endpoint stuck initializing, cold-starting on every request, or costing far more than expected? Dedicated Endpoints give you always-on, isolated infrastructure — but choosing the right instance, container, and autoscaling policy is where teams get stuck. We help you deploy and operate them correctly.',
  heroVariant:
    'Inference Endpoints run your model on dedicated, fully managed infrastructure on the cloud of your choice — distinct from serverless Inference Providers. We help with instance selection (CPU vs GPU, accelerator type and size), container choice (TGI for text generation, TEI for embeddings and rerankers, or a custom container), autoscaling and scale-to-zero configuration, cold-start mitigation, private/secured endpoints and authentication, latency and throughput tuning, and cost control. We also help decide when a dedicated Endpoint is the right call versus Inference Providers or self-hosting on vLLM.',
  faqs: [
    ...hfServiceFaqs('Inference Endpoints', 'We help deploy, autoscale, secure, and cost-optimize dedicated Endpoints running your models with TGI, TEI, or a custom container.'),
    {
      question: 'What is the difference between Inference Endpoints and Inference Providers?',
      answer:
        'Inference Providers is a serverless, pay-per-token routing layer over many third-party providers behind a single Hugging Face token — great for getting started and bursty workloads. Inference Endpoints are dedicated, always-on managed infrastructure you provision (billed by compute) — the right choice for consistent latency, data isolation, private networking, and production SLAs. We help you pick and, often, use both.',
    },
    {
      question: 'How do I stop an endpoint from cold-starting on every request?',
      answer:
        'Cold starts usually come from scale-to-zero with low or bursty traffic, large model load times, or under-provisioned replicas. We tune the minimum replica count, adjust the scale-to-zero timeout, pre-warm where appropriate, and reduce model load time (smaller/quantized weights, faster storage) so latency stays within SLA without paying for idle GPUs you do not need.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'LLM serving job support', href: '/huggingface-llm-serving-job-support/' },
    ],
    techLinks: [HF_PROVIDERS_LINK, HF_VLLM_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_SERVING_LINK, HF_TGI_LINK, HF_TEI_LINK, HF_HUB_PLATFORM_LINK,
      HF_AWS_LINK, HF_AZURE_LINK, HF_GCP_LINK,
      EXISTING.modelDeployment, EXISTING.mlops, EXISTING.awsSagemaker,
    ],
  }),
});

// ─── Inference Providers (serverless) ────────────────────────────────────────

export const huggingFaceInferenceProviders: LandingPageConfig = hfServicePage({
  slug: 'huggingface-inference-providers-job-support',
  title: 'Hugging Face Inference Providers Job Support | Serverless LLM Routing',
  description:
    'Job support for Hugging Face Inference Providers — the serverless, OpenAI-compatible routing layer (router.huggingface.co) over Groq, Together, Fireworks, Cerebras, HF Inference and more. Wire up InferenceClient, provider selection, and production fallbacks.',
  keywords: [
    'Hugging Face Inference Providers job support', 'Inference Providers support', 'InferenceClient support',
    'Hugging Face router API', 'serverless LLM inference support', 'OpenAI compatible HF API',
    'Hugging Face provider routing',
  ],
  h1: 'Hugging Face Inference Providers Job Support — Serverless, OpenAI-Compatible Routing',
  tagline:
    'Real-time help using Inference Providers — the serverless layer that routes a single Hugging Face token across many inference providers with an OpenAI-compatible API and provider-selection policies.',
  heroEyebrow: 'Inference Providers — Serverless Routing Support',
  painIntro:
    'Trying to call open models without standing up your own GPUs? Inference Providers gives you one token, one OpenAI-compatible endpoint, and automatic routing across providers like Groq, Together, Fireworks, Cerebras, and HF Inference. We help you integrate it cleanly and handle rate limits, provider selection, and fallbacks in production.',
  heroVariant:
    'Inference Providers replaced the old serverless Inference API. It exposes an OpenAI-compatible router at router.huggingface.co/v1 and is used through the huggingface_hub InferenceClient (or @huggingface/inference in JS) with provider="auto" by default. We help with client setup and streaming, provider-selection policies (:fastest, :cheapest, :preferred, or an explicit provider), handling rate limits and errors, cost awareness across providers, and deciding when to graduate a workload from Providers to a dedicated Inference Endpoint or self-hosted vLLM for predictable latency and data control.',
  faqs: [
    ...hfServiceFaqs('Inference Providers', 'We help wire up InferenceClient and the OpenAI-compatible router, configure provider selection, and add production error handling and fallbacks.'),
    {
      question: 'Is Inference Providers the same as the old Inference API?',
      answer:
        'Inference Providers is the current serverless offering and supersedes the old "serverless Inference API" branding. "HF Inference" is now one provider within Providers, alongside partners like Groq, Together, Fireworks, Cerebras, Novita, and others. Calls go through the OpenAI-compatible router with a single HF token.',
    },
    {
      question: 'How does provider selection work?',
      answer:
        'You can let it route automatically (provider="auto", which favors the fastest available provider for the model), or steer it with policies — for example a :cheapest or :fastest suffix, a preferred-provider order, or an explicit provider. We help you choose a policy that balances latency, cost, and reliability, and add fallback logic for when a provider is unavailable.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'Inference Endpoints job support', href: '/huggingface-inference-endpoints-job-support/' },
    ],
    techLinks: [HF_ENDPOINTS_LINK, HF_VLLM_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_HUB_PLATFORM_LINK, HF_SERVING_LINK, HF_TRANSFORMERS_INFERENCE_LINK,
      EXISTING.llm, EXISTING.rag, EXISTING.modelDeployment,
    ],
  }),
});

// ─── Spaces (+ ZeroGPU) ──────────────────────────────────────────────────────

export const huggingFaceSpaces: LandingPageConfig = hfServicePage({
  slug: 'huggingface-spaces-job-support',
  title: 'Hugging Face Spaces Job Support | Deploy Demos, ZeroGPU & Production Apps',
  description:
    'Job support for Hugging Face Spaces — deploy Gradio and Docker apps, use ZeroGPU serverless GPUs, manage secrets and persistent storage, fix build and runtime errors, and take a demo from prototype to shareable production app.',
  keywords: [
    'Hugging Face Spaces job support', 'Spaces deployment support', 'ZeroGPU support',
    'Gradio Spaces support', 'Docker Space support', 'Hugging Face Spaces build error',
    'Spaces secrets storage support',
  ],
  h1: 'Hugging Face Spaces Job Support — Demos, ZeroGPU & Shareable AI Apps',
  tagline:
    'Real-time help building and shipping Hugging Face Spaces — Gradio and Docker apps, ZeroGPU serverless GPUs, secrets, persistent storage, and reliable builds.',
  heroEyebrow: 'Spaces & App Deployment Support',
  painIntro:
    'A Space failing to build, running out of GPU, or leaking a secret? Spaces is the fastest way to demo and share an AI app, but production-grade Spaces need the right SDK, hardware, secrets, and storage setup. We help you ship demos that actually hold up.',
  heroVariant:
    'We help across the Spaces surface: Gradio SDK vs Docker Spaces, ZeroGPU serverless dynamic GPU allocation (available on the Gradio SDK) for demos that need a GPU only on demand, environment variables and secrets, persistent storage, private Spaces and access control, build and dependency debugging, and linking a Space to a model or dataset repo. We also help productionize a Space — moving heavy inference to an Inference Endpoint or Provider while keeping the Space as the UI.',
  faqs: [
    ...hfServiceFaqs('Hugging Face Spaces', 'We help deploy Gradio and Docker Spaces, configure ZeroGPU, secrets and storage, and debug build/runtime failures.'),
    {
      question: 'What is ZeroGPU and when should I use it?',
      answer:
        'ZeroGPU is serverless, dynamically allocated GPU for Spaces (on the Gradio SDK) — your app gets a GPU slice only while a request is running, which is ideal for demos and low-to-medium traffic without paying for an always-on GPU. For sustained production traffic or strict latency SLAs, a dedicated Inference Endpoint is usually the better call, and we help you decide.',
    },
    {
      question: 'How do I handle secrets and large models in a Space?',
      answer:
        'Store credentials as Space secrets (never in code), load large weights from a Hub repo at startup or use a persistent storage volume, and keep the app process lean. We help structure the Space so builds are fast, secrets stay safe, and the model loads reliably within the hardware you have chosen.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'Gradio app job support', href: '/gradio-job-support/' },
    ],
    techLinks: [HF_GRADIO_LINK, HF_ENDPOINTS_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_HUB_PLATFORM_LINK, HF_PROVIDERS_LINK, HF_TRANSFORMERS_INFERENCE_LINK,
      EXISTING.genai, EXISTING.pythonGenai,
    ],
  }),
});

// ─── Gradio ──────────────────────────────────────────────────────────────────

export const gradioJobSupport: LandingPageConfig = hfServicePage({
  slug: 'gradio-job-support',
  title: 'Gradio Job Support | Build LLM Chat UIs, Demos & Production Interfaces',
  description:
    'Job support for Gradio (v5) — build chat interfaces, streaming LLM UIs, and ML demos with Blocks, wire up state and events, add authentication, and deploy to Spaces or your own infra. Fix layout, streaming, and concurrency issues.',
  keywords: [
    'Gradio job support', 'Gradio v5 support', 'Gradio chatbot UI', 'Gradio Blocks support',
    'Gradio streaming LLM', 'Gradio deployment support', 'Gradio ChatInterface support',
  ],
  h1: 'Gradio Job Support — Chat UIs, Streaming, Blocks & Deployment',
  tagline:
    'Real-time help building Gradio apps — ChatInterface and Blocks, streaming LLM output, events and state, theming, authentication, and deployment to Spaces or your own servers.',
  heroEyebrow: 'Gradio App Development Support',
  painIntro:
    'Building an LLM demo or internal tool in Gradio and stuck on streaming, layout, state, or concurrency? Gradio is the fastest path from a model to a usable UI, and small structural choices make the difference between a fragile demo and a solid app. We help you build it right.',
  heroVariant:
    'We help across Gradio v5 — ChatInterface for chatbots, Blocks for custom layouts, streaming and generators for token-by-token output, event handlers and session state, file and image inputs, theming, queuing and concurrency for multiple users, authentication, and deployment to Hugging Face Spaces or your own infrastructure. Gradio also powers Trackio dashboards and lets you share agents and tools, so it sits at the center of many Hugging Face demos and internal tools.',
  faqs: [
    ...hfServiceFaqs('Gradio', 'We help build ChatInterface and Blocks apps, stream LLM output, manage state and concurrency, and deploy to Spaces or your own infra.'),
    {
      question: 'How do I stream LLM tokens in a Gradio chat UI?',
      answer:
        'Use a generator function that yields partial output; Gradio streams each yield to the UI. With ChatInterface you yield the growing message; with Blocks you update the output component incrementally. We help wire streaming to your model or Inference Providers/Endpoint call and keep it responsive under concurrent users with the queue.',
    },
    {
      question: 'How do I handle many concurrent users?',
      answer:
        'Gradio queues requests and lets you set concurrency limits per event; for real load you offload heavy inference to an Inference Endpoint, Provider, or vLLM server and keep the Gradio app thin. We help you configure the queue, concurrency, and backend split so the UI stays fast.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'Spaces job support', href: '/huggingface-spaces-job-support/' },
    ],
    techLinks: [HF_SPACES_LINK, HF_PROVIDERS_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_ENDPOINTS_LINK, HF_TRANSFORMERS_INFERENCE_LINK,
      EXISTING.genai, EXISTING.pythonGenai, EXISTING.llm,
    ],
  }),
});

// ─── Enterprise Hub guide (KB) ───────────────────────────────────────────────

export const huggingFaceEnterpriseHubGuide: LandingPageConfig = hfPage({
  slug: 'huggingface-enterprise-hub-guide',
  title: 'Hugging Face Enterprise Hub Guide | SSO, Audit Logs, Resource Groups & RBAC',
  description:
    'A practical guide to Hugging Face Enterprise Hub — SSO (SAML/OIDC), SCIM, audit logs, resource groups, fine-grained tokens and RBAC, gated and governed model access, and how enterprises secure teams on the Hub. Current through September 2026.',
  keywords: [
    'Hugging Face Enterprise Hub', 'Hugging Face SSO', 'Hugging Face audit logs',
    'Hugging Face resource groups', 'Hugging Face RBAC', 'Hugging Face fine-grained tokens',
    'Hugging Face enterprise security',
  ],
  h1: 'Hugging Face Enterprise Hub — SSO, Audit Logs, Resource Groups & Governance',
  tagline:
    'How enterprises secure and govern teams on the Hugging Face Hub — identity (SSO/SCIM), access control (resource groups, RBAC, fine-grained tokens), audit logs, and governed model access.',
  heroEyebrow: 'Knowledge Base — Enterprise Hub',
  painIntro:
    'Rolling out Hugging Face across an organization means more than sharing a token. This guide explains the Enterprise Hub controls that security and platform teams need — identity, access control, auditability, and model governance — and how they map to real requirements.',
  heroVariant:
    'Enterprise Hub capabilities are tiered. Identity: SSO via SAML 2.0 / OIDC and SCIM user provisioning. Access control: resource groups with role-based access control (RBAC) and fine-grained, scoped tokens so a token can be limited to specific repos and permissions. Auditability: JSON-exportable audit logs covering repo, membership, SSO/OAuth, billing, Spaces, and Jobs events. Governance: gated and governed model access, private repositories, and (on higher tiers) a Model Gateway. This guide explains what each control does and how a team typically configures them; for hands-on setup and integration we also offer job support.',
  highlights: techHighlights,
  faqs: [
    ...hfKbFaqs('Hugging Face Enterprise Hub'),
    {
      question: 'What identity and SSO options does Enterprise Hub support?',
      answer:
        'Enterprise tiers support single sign-on via SAML 2.0 and OIDC, plus SCIM for automated user provisioning and de-provisioning. This lets an organization manage Hugging Face access through its existing identity provider rather than individual accounts, and enforce membership centrally.',
    },
    {
      question: 'How do resource groups and fine-grained tokens work?',
      answer:
        'Resource groups let you organize repositories and grant role-based access to teams, so members only see and act on what they should. Fine-grained tokens are scoped credentials that can be limited to specific repositories and permission sets — ideal for CI systems and services, so a leaked token has a small blast radius. Audit logs record the actions taken with them.',
    },
  ],
  bottomCTAHeading: 'Setting Up Hugging Face for Your Organization?',
  bottomCTABody:
    'We help platform and ML teams configure Enterprise Hub identity, access control, and governance, and integrate it with CI/CD and cloud. Talk to ProxyTechSupport on WhatsApp for hands-on job support.',
  geoLine:
    'Enterprise Hub guidance and hands-on support for teams across USA, Canada, UK, Europe, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'Hugging Face Hub & CLI job support', href: '/huggingface-hub-job-support/' },
    ],
    techLinks: [HF_HUB_PLATFORM_LINK, HF_ENDPOINTS_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_AWS_LINK, HF_AZURE_LINK, HF_GCP_LINK,
      EXISTING.mlops, EXISTING.azureHub,
    ],
  }),
});

export const huggingFacePlatformPages: LandingPageConfig[] = [
  huggingFaceHubPlatform,
  huggingFaceInferenceEndpoints,
  huggingFaceInferenceProviders,
  huggingFaceSpaces,
  gradioJobSupport,
  huggingFaceEnterpriseHubGuide,
];
