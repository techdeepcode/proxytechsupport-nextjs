import type { LandingPageConfig } from '../landing-pages';
import {
  hfPage,
  relatedLinks,
  jobSupportHighlights,
  interviewHighlights,
  roleHighlights,
  EXISTING,
  HF_HUB_LINK,
  HF_INTERVIEW_HUB_LINK,
  HF_PRODUCTION_LINK,
  HF_ENGINEER_LINK,
  HF_HUB_PLATFORM_LINK,
  HF_TRANSFORMERS_TRAINING_LINK,
  HF_TRANSFORMERS_INFERENCE_LINK,
  HF_PEFT_LINK,
  HF_QLORA_LINK,
  HF_TRL_LINK,
  HF_SMOLAGENTS_LINK,
  HF_OPENENV_LINK,
  HF_SBERT_LINK,
  HF_TEI_LINK,
  HF_DIFFUSERS_LINK,
  HF_ACCELERATE_LINK,
  HF_QUANT_LINK,
  HF_OPTIMUM_LINK,
  HF_KERNELS_LINK,
  HF_GPU_LINK,
  HF_DATASETS_LINK,
  HF_TRACKIO_LINK,
  HF_LIGHTEVAL_LINK,
  HF_TGI_LINK,
  HF_VLLM_LINK,
  HF_SERVING_LINK,
  HF_ENDPOINTS_LINK,
  HF_PROVIDERS_LINK,
  HF_SPACES_LINK,
  HF_GRADIO_LINK,
  HF_AWS_LINK,
  HF_AZURE_LINK,
  HF_GCP_LINK,
  HF_RAG_HUB_LINK,
  HF_AGENTIC_RAG_LINK,
} from './shared';

// ─── Hugging Face master hub ─────────────────────────────────────────────────

export const huggingFaceHub: LandingPageConfig = hfPage({
  slug: 'hugging-face-proxy-job-support',
  title: 'Hugging Face Proxy Job Support | Transformers, Fine-Tuning, RAG & LLM Serving',
  description:
    'Hugging Face proxy job support and proxy interview support for Transformers, PEFT/LoRA/QLoRA, TRL, Sentence Transformers, RAG, Diffusers, smolagents, and LLM serving on Inference Endpoints, vLLM and TGI — real-time technical help across USA, UK, Canada, Europe, Australia & worldwide. Mentoring, not replacing you.',
  keywords: [
    'Hugging Face proxy job support', 'Hugging Face job support', 'Transformers proxy job support',
    'LLM proxy job support', 'Hugging Face proxy interview support', 'PEFT LoRA job support',
    'Hugging Face production support', 'generative AI proxy job support', 'LLM engineering job support',
    'Hugging Face technical support',
  ],
  h1: 'Hugging Face Proxy Job Support — Transformers, Fine-Tuning, RAG, Agents & LLM Serving',
  tagline:
    'Technical proxy support for the full Hugging Face stack — Transformers, PEFT/LoRA/QLoRA, TRL, Sentence Transformers, RAG, Diffusers, smolagents, and deployment on Inference Endpoints, vLLM and TGI. Proxy job support and proxy interview support across every Hugging Face library, role, and cloud.',
  heroEyebrow: 'Hugging Face Proxy Job & Interview Support Hub — Updated September 2026',
  painIntro:
    'Looking for Hugging Face Proxy Job Support for a live LLM project, a fine-tuning run that keeps hitting CUDA OOM, a RAG pipeline returning irrelevant results, or an Inference Endpoint that will not scale — or Hugging Face Proxy Interview Support for an upcoming GenAI interview? ProxyTechSupport provides implementation-level proxy job support across Transformers, PEFT, TRL, Sentence Transformers, Diffusers, and the huggingface_hub / hf CLI. Our proxy job support focuses on technical guidance, troubleshooting, architecture, implementation and project mentoring — proxy does not mean replacing the professional or performing their employment responsibilities.',
  heroVariant:
    'The Hugging Face ecosystem moves fast and breaks in production in ways that are hard to debug alone — CUDA out-of-memory during training, adapter (LoRA) loading and merging failures, tokenizer/model mismatches, gated-model 401/403 errors, quantization dtype errors, endpoint cold starts, and RAG retrieval collapse. This hub connects you to in-house LLM engineers across the current stack: Transformers v5 (now the ecosystem’s model-definition framework, consumed by vLLM, SGLang and TGI), PEFT and TRL v1 (SFT, DPO, GRPO, reward modeling, distillation), Sentence Transformers (bi-encoders, cross-encoder rerankers, sparse and multi-vector), Diffusers, smolagents and OpenEnv, huggingface_hub and the hf CLI with Xet storage, Inference Providers and dedicated Inference Endpoints, TEI, and the Kernels / Kernel Hub. From daily job support to emergency production fixes, live interview guidance, and profile positioning — start from here.',
  geoLine:
    'Supporting Hugging Face and LLM professionals across USA, Canada, UK, Ireland, Germany, Netherlands, France, Switzerland, Australia, New Zealand, Singapore, Hong Kong, UAE, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover Transformers, PEFT/LoRA/QLoRA, TRL, Accelerate, Sentence Transformers, Diffusers, Datasets, Tokenizers, Safetensors, Optimum, bitsandbytes, the Kernels / Kernel Hub, huggingface_hub and the hf CLI, Inference Endpoints, Inference Providers, TGI, TEI, vLLM integration, Gradio and Spaces, Trackio, and Lighteval — all current through September 2026.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What is Hugging Face job support?',
      answer:
        'It is real-time, hands-on help from experienced LLM engineers during your working hours — on your actual project. We help with Transformers training and inference, PEFT/LoRA/QLoRA fine-tuning, TRL post-training, Sentence Transformers and RAG, Diffusers, agents (smolagents), and deployment on Inference Endpoints, vLLM or TGI, plus the huggingface_hub, hf CLI, tokens, gated models, and GPU work around them. It is delivered live, confidentially, and same-day where needed, anywhere in the world.',
    },
    {
      question: 'Which Hugging Face libraries do you cover?',
      answer:
        'Transformers (AutoModel/AutoTokenizer, pipeline, Trainer, generate, device_map, tensor parallelism, attention and quantization backends), PEFT (LoRA, QLoRA, adapters, merging), TRL v1 (SFTTrainer, DPOTrainer, GRPOTrainer, RewardTrainer, DistillationTrainer), Accelerate, Sentence Transformers (bi-encoders, cross-encoder rerankers, sparse and multi-vector/ColBERT), Diffusers, Datasets, Tokenizers, Safetensors, Optimum (including Optimum-Neuron for Trainium/Inferentia), bitsandbytes, the Kernels / Kernel Hub, huggingface_hub and the hf CLI (with Xet storage), Inference Endpoints, Inference Providers, TGI, TEI, vLLM, Gradio and Spaces, Trackio, Lighteval, Argilla/Distilabel, and AutoTrain.',
    },
    {
      question: 'Do you help with live Hugging Face and LLM production issues?',
      answer:
        'Yes. We provide dedicated production support — CUDA out-of-memory during training and inference, tokenizer/model config mismatches, LoRA adapter loading/merging failures, quantization dtype errors, gated-model 401/403 and token-scope problems, Inference Endpoint cold starts and autoscaling, slow tokens/sec and high time-to-first-token, RAG retrieval collapse, and embedding-dimension mismatches — with an engineer on the call. See our Hugging Face production support page.',
    },
    {
      question: 'Can you help me prepare for or clear Hugging Face and LLM interviews?',
      answer:
        'Yes. We offer Hugging Face and LLM interview support and get-interview-scheduled services for LLM Engineer, Generative AI Engineer, NLP Engineer, ML Engineer, RAG Engineer, and Applied AI roles — live guidance during interviews, real-time interview support, and profile positioning so the calls come in the first place. Hiring decisions are always made solely by employers.',
    },
    {
      question: 'Is your content current with the latest Hugging Face releases?',
      answer:
        'Yes. This cluster reflects the ecosystem state through September 2026 — Transformers v5 as the model-definition framework, TGI moving to maintenance mode with HF recommending vLLM/SGLang for new serving, the CLI rename to hf, Xet storage replacing Git LFS, Inference Providers replacing the old serverless Inference API, TRL v1 with stable GRPO and DistillationTrainer, Sentence Transformers v5+ with four model types, and newer projects like Trackio and OpenEnv (experimental). We verify version-sensitive details before advising.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your Hugging Face stack, your situation (job support, production issue, interview, or profile), and your timeline. We match you with the right LLM engineer — usually the same day. Every engagement is confidential and NDAs are available on request.',
    },
  ],
  useCasesSection: {
    title: 'What We Help Hugging Face & LLM Professionals With',
    cases: [
      'A QLoRA fine-tuning run dying on CUDA out-of-memory, or loss going to NaN after a config change',
      'A LoRA adapter that will not load, merge, or serve correctly against its base model',
      'A RAG pipeline returning irrelevant chunks, or an embedding-dimension mismatch after switching models',
      'An Inference Endpoint stuck in a cold-start / scaling loop, or tokens/sec well below what the GPU should deliver',
      'Joining a new GenAI project and needing to ramp up on Transformers, PEFT, TRL, or the serving stack fast',
      'A Hugging Face or LLM interview in a few days — fine-tuning strategy, RAG design, or serving system design you do not feel ready for',
    ],
  },
  proxySection: {
    title: 'Hugging Face & LLM Interview & Candidate Marketing Support',
    intro:
      'Getting into and moving up in GenAI roles takes more than skill — it takes interview readiness and a profile that recruiters actually find. We support both sides: live interview assistance during your real interview, and candidate marketing to generate the calls.',
    points: [
      'Live, discreet guidance during Transformers, fine-tuning, RAG, and LLM-serving interviews',
      'Live proxy interview support for coding, ML/LLM system design, and GenAI architecture rounds',
      'Profile positioning around the exact keywords GenAI recruiters and ATS filters screen for',
      'Active candidate marketing and recruiter outreach to build a real interview pipeline',
      'End-to-end support: get the interview, clear it, then keep the role with real-time job support',
    ],
  },
  bottomCTAHeading: 'Need Real-Time Hugging Face Job Support or Interview Help Right Now?',
  bottomCTABody:
    'In-house Transformers, PEFT/TRL fine-tuning, RAG, and LLM-serving experts available same-day — project support, production fixes, live interview guidance, or profile positioning. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support USA', href: '/hugging-face-proxy-job-support-usa/' },
      { label: 'Hugging Face job support Canada', href: '/hugging-face-proxy-job-support-canada/' },
    ],
    techLinks: [HF_TRANSFORMERS_TRAINING_LINK, HF_PEFT_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      // Platform + serving hubs
      HF_HUB_PLATFORM_LINK, HF_ENDPOINTS_LINK, HF_PROVIDERS_LINK, HF_SERVING_LINK, HF_TGI_LINK, HF_VLLM_LINK,
      // Model dev + fine-tuning
      HF_TRANSFORMERS_TRAINING_LINK, HF_TRANSFORMERS_INFERENCE_LINK, HF_PEFT_LINK, HF_QLORA_LINK, HF_TRL_LINK,
      HF_ACCELERATE_LINK,
      // RAG + agents
      HF_SBERT_LINK, HF_TEI_LINK, HF_RAG_HUB_LINK, HF_SMOLAGENTS_LINK, HF_AGENTIC_RAG_LINK, HF_OPENENV_LINK,
      // Media + performance + data/mlops
      HF_DIFFUSERS_LINK, HF_QUANT_LINK, HF_OPTIMUM_LINK, HF_KERNELS_LINK, HF_GPU_LINK,
      HF_DATASETS_LINK, HF_TRACKIO_LINK, HF_LIGHTEVAL_LINK, HF_SPACES_LINK, HF_GRADIO_LINK,
      // Cloud
      HF_AWS_LINK, HF_AZURE_LINK, HF_GCP_LINK,
      // Role + engineer
      HF_ENGINEER_LINK,
      // Bridge into existing authority clusters
      EXISTING.hfJobSupport, EXISTING.transformers, EXISTING.genai, EXISTING.llm, EXISTING.llmEngineer,
      EXISTING.rag, EXISTING.fineTuning, EXISTING.loraQlora, EXISTING.pytorch, EXISTING.agenticAi,
      EXISTING.mlops, EXISTING.awsHub, EXISTING.azureHub, EXISTING.aimlHub,
    ],
  }),
});

// ─── Hugging Face proxy interview hub ────────────────────────────────────────

export const huggingFaceInterviewHub: LandingPageConfig = hfPage({
  slug: 'hugging-face-proxy-interview-support',
  title: 'Hugging Face Proxy Interview Support | LLM, Transformers & GenAI Interviews',
  description:
    'Real-time Hugging Face proxy interview support (interview proxy support) for LLM, Generative AI, and NLP roles — Transformers, fine-tuning (PEFT/LoRA/QLoRA/TRL), RAG, embeddings, and LLM-serving coding and system-design rounds. You attend and complete your own interview.',
  keywords: [
    'Hugging Face proxy interview support', 'Hugging Face interview proxy support', 'LLM proxy interview support',
    'transformers interview support', 'generative AI interview proxy support', 'RAG interview support',
    'fine-tuning interview support', 'LLM system design interview support', 'Hugging Face interview questions',
  ],
  h1: 'Hugging Face Proxy Interview Support — LLM, Transformers, RAG & Fine-Tuning Rounds',
  tagline:
    'Real-time, discreet technical support for Hugging Face and LLM interviews — Transformers internals, fine-tuning strategy, RAG design, and LLM-serving system design. Proxy interview support means expert help on the exact topics your interview covers; you attend your own interview.',
  heroEyebrow: 'Hugging Face / LLM Proxy Interview Support',
  painIntro:
    'Interviewing for an LLM Engineer, Generative AI Engineer, NLP Engineer, or Applied AI role and worried about the Transformers deep-dive, the fine-tuning strategy questions, the RAG system-design round, or a live coding task with the transformers library? We provide real-time Hugging Face proxy interview support so you walk in genuinely ready.',
  heroVariant:
    'Modern GenAI interviews test more than API recall — they probe why you would choose LoRA over full fine-tuning, how you would design a RAG pipeline that stays accurate at scale, when to reach for GRPO versus DPO, how you would cut GPU memory and raise tokens/sec, and whether you would serve on vLLM, TGI, or dedicated Inference Endpoints. Our experts prepare you across coding rounds, ML/LLM system design, architecture deep-dives, and behavioral panels — calibrated to the exact role, seniority, and company format. Proxy interview support is real-time technical guidance and readiness; we do not impersonate candidates, sit interviews on anyone’s behalf, or guarantee outcomes.',
  geoLine:
    'Hugging Face and LLM proxy interview support for candidates across USA, Canada, UK, Ireland, Europe, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Interview support scheduled around your interview time across all major time zones.',
  highlights: interviewHighlights,
  faqs: [
    {
      question: 'What is Hugging Face proxy interview support?',
      answer:
        'It is real-time, discreet technical help for your Hugging Face / LLM interview (also searched as interview proxy support). Our experts support you on coding rounds with the transformers and related libraries, Transformers and generation questions, fine-tuning strategy (PEFT/LoRA/QLoRA/TRL), RAG and embedding architecture, LLM serving and GPU optimization system design, and behavioral rounds — so you walk in confident and ready. You attend and complete your own interview.',
    },
    {
      question: 'Does this mean someone attends the interview for me?',
      answer:
        'No. The candidate attends and completes their own interview. Proxy interview support is real-time technical guidance, architecture review, and scenario-based readiness. We do not impersonate candidates or sit interviews on anyone’s behalf, and we do not guarantee selection or employment — hiring decisions are made solely by employers.',
    },
    {
      question: 'What Hugging Face and LLM topics do you cover?',
      answer:
        'Transformers architecture, tokenization and generation; fine-tuning strategy and PEFT/LoRA/QLoRA trade-offs; TRL alignment (SFT vs DPO vs GRPO, reward modeling); RAG design (chunking, embeddings, cross-encoder reranking, vector search); inference and serving choices (Inference Endpoints vs Inference Providers vs vLLM vs TGI); quantization (4-bit/8-bit, GPTQ/AWQ) and GPU-memory optimization; evaluation with Lighteval; and MLOps for LLMs.',
    },
    {
      question: 'Which roles do you support?',
      answer:
        'LLM Engineer, Generative AI Engineer, Applied AI Engineer, NLP Engineer, Machine Learning Engineer, RAG Engineer, Agentic AI Engineer, and AI Platform / LLM Infrastructure Engineer — across live coding, ML/LLM system design, architecture deep-dives, take-home reviews, and final-round panels.',
    },
    {
      question: 'Is proxy interview support confidential?',
      answer:
        'Yes. Every session is fully confidential. We never disclose candidate identities, employer names, or interview details, and support is calibrated to your interview format and seniority level.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Message us on WhatsApp with your interview date, the role, the company/format, and likely topics. We assign the right expert and run a pre-interview alignment session so support matches your background.',
    },
  ],
  proxySection: {
    title: 'Real-Time Support Across Every GenAI Interview Round',
    intro:
      'From the first technical screen to the final panel, we align support to the exact rounds you will face — no generic prep decks.',
    points: [
      'Live coding rounds using the transformers, datasets, PEFT and TRL libraries',
      'Fine-tuning strategy: when to use LoRA, QLoRA, full fine-tuning, SFT, DPO or GRPO',
      'RAG system design: chunking, embeddings, reranking, vector databases, evaluation',
      'LLM serving system design: vLLM vs TGI vs Inference Endpoints, batching, KV cache, autoscaling',
      'Behavioral and project deep-dive rounds — explaining your GenAI work credibly',
    ],
  },
  bottomCTAHeading: 'Hugging Face or LLM Interview Coming Up?',
  bottomCTABody:
    'Get real-time, discreet Hugging Face / LLM proxy interview support calibrated to your exact role and rounds — you attend and complete your own interview. Message ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'Get GenAI interview scheduled', href: '/get-genai-interview-scheduled/' },
    ],
    techLinks: [HF_TRL_LINK, HF_RAG_HUB_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_ENGINEER_LINK, HF_TRANSFORMERS_TRAINING_LINK, HF_PEFT_LINK, HF_QLORA_LINK,
      HF_SMOLAGENTS_LINK, HF_SBERT_LINK, HF_SERVING_LINK, HF_VLLM_LINK,
      EXISTING.transformers, EXISTING.llmProxy, EXISTING.genaiProxy, EXISTING.ragProxy,
      EXISTING.llmEngineer, EXISTING.genaiEngineer, EXISTING.getLlmScheduled, EXISTING.getGenaiScheduled,
    ],
  }),
});

// ─── Hugging Face production support ─────────────────────────────────────────

export const huggingFaceProduction: LandingPageConfig = hfPage({
  slug: 'hugging-face-production-support',
  title: 'Hugging Face Production Support — Fix CUDA OOM, Endpoints & RAG Issues Fast',
  description:
    'Real-time Hugging Face production support: fix CUDA out-of-memory, LoRA adapter loading failures, tokenizer/model mismatches, gated-model 401/403, Inference Endpoint cold starts and autoscaling, slow tokens/sec, and RAG retrieval collapse with an LLM engineer on the call.',
  keywords: [
    'Hugging Face production support', 'CUDA out of memory fix', 'transformers OOM support',
    'LoRA adapter loading error', 'Inference Endpoint cold start', 'RAG retrieval issue support',
    'LLM production incident support', 'gated model 401 fix', 'tokens per second optimization',
  ],
  h1: 'Hugging Face Production Support — Fix Live LLM, Fine-Tuning & Serving Issues Fast',
  tagline:
    'When a Hugging Face system breaks in production, you need an expert on the call now — not a support ticket queue. Real-time help for training, fine-tuning, RAG, and inference incidents.',
  heroEyebrow: 'Hugging Face / LLM Production Firefighting — 24/7',
  painIntro:
    'A fine-tuning job dying on CUDA out-of-memory? A LoRA adapter that will not merge or serve? A gated model throwing 401 in CI? An Inference Endpoint stuck in a cold-start loop before a release? A RAG pipeline suddenly returning wrong answers after a model swap? LLM incidents are high-pressure and hard to debug alone.',
  heroVariant:
    'Hugging Face systems fail in specific ways — CUDA OOM from batch size, sequence length or optimizer state; tokenizer/model config and vocab mismatches; safetensors and checkpoint loading errors; LoRA adapter loading, merging and base-model mismatch; quantization dtype and device_map errors; gated-model 401/403 and token-scope issues; Inference Endpoint cold starts, scale-to-zero and autoscaling; slow tokens/sec and high time-to-first-token; embedding-dimension mismatch and RAG retrieval-quality collapse; and runaway GPU cost. Our engineers work the incident live with you — reading stack traces, nvidia-smi and profiler output, endpoint logs, and request traces — to find the root cause, stabilize the system, and ship a durable fix.',
  geoLine:
    'On-call Hugging Face and LLM production support for teams across USA, Canada, UK, Europe, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available around the clock for urgent production incidents across all major time zones.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What Hugging Face production issues can you help with?',
      answer:
        'CUDA out-of-memory during training and inference, tokenizer/model config and vocab mismatches, safetensors/checkpoint loading errors, LoRA adapter loading and merging failures, quantization dtype and device_map errors, gated-model 401/403 and token-scope problems, Inference Endpoint cold starts and autoscaling, slow tokens/sec and high TTFT, poor RAG retrieval and embedding-dimension mismatch, vLLM/TGI serving errors, and runaway GPU cost. We work the incident live until the system is stable.',
    },
    {
      question: 'How fast can you join an LLM incident?',
      answer:
        'Usually within the same working session. Message us on WhatsApp with the symptoms, the library or endpoint, and the stack trace or error, and we assign an engineer who has handled that class of incident before. For active outages we prioritize immediate response.',
    },
    {
      question: 'Do you cover RAG and retrieval-quality problems specifically?',
      answer:
        'Yes. RAG is a core focus — chunking and embedding issues, embedding-dimension mismatch after a model change, cross-encoder reranking, hybrid search tuning, vector-database configuration, and answers that are wrong or hallucinated. We diagnose and fix answer-quality and reliability issues end to end, including the TEI and Sentence Transformers layers.',
    },
    {
      question: 'Can you help reduce GPU and inference cost during an incident?',
      answer:
        'Yes. Cost blowups are a common trigger. We help with quantization (4-bit/8-bit, GPTQ/AWQ), right-sizing endpoints and batch sizes, continuous batching and KV-cache tuning on vLLM, choosing between Inference Providers, dedicated Endpoints and self-hosting, and cutting redundant retries so the bill comes back under control without breaking the workload.',
    },
    {
      question: 'Is production support confidential?',
      answer:
        'Absolutely. Every engagement is confidential, NDAs are available on request, and we never access your accounts or infrastructure without your explicit direction. We document the root cause and fix so your team can prevent a repeat.',
    },
  ],
  bottomCTAHeading: 'LLM System Down or Degraded Right Now?',
  bottomCTABody:
    'Get an in-house Hugging Face expert on the incident with you — root-cause diagnosis, a durable fix, and prevention across training, fine-tuning, RAG, and serving. Message ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'Production issue support', href: '/production-issue-support/' },
    ],
    techLinks: [HF_GPU_LINK, HF_SERVING_LINK],
    problemLink: EXISTING.production,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_TRANSFORMERS_TRAINING_LINK, HF_TRANSFORMERS_INFERENCE_LINK, HF_QUANT_LINK,
      HF_ENDPOINTS_LINK, HF_VLLM_LINK, HF_TGI_LINK, HF_RAG_HUB_LINK, HF_TEI_LINK, HF_PEFT_LINK,
      EXISTING.rag, EXISTING.fineTuning, EXISTING.mlops, EXISTING.modelDeployment,
    ],
  }),
});

// ─── Hugging Face Engineer role hub ──────────────────────────────────────────

export const huggingFaceEngineer: LandingPageConfig = hfPage({
  slug: 'hugging-face-engineer-job-support',
  title: 'Hugging Face Engineer Job Support | LLM, Fine-Tuning & Deployment Help',
  description:
    'Job support for Hugging Face Engineers and LLM Engineers — real-time help across Transformers, PEFT/TRL fine-tuning, RAG, agents, and model deployment on Inference Endpoints, vLLM and TGI, plus interview and profile support. Mentoring, not replacing you.',
  keywords: [
    'Hugging Face Engineer job support', 'LLM Engineer job support', 'Generative AI Engineer job support',
    'NLP Engineer job support', 'Hugging Face developer support', 'ML Engineer LLM job support',
    'applied AI engineer job support', 'Hugging Face engineer interview support',
  ],
  h1: 'Hugging Face Engineer Job Support — Build, Fine-Tune, Serve & Ship LLMs',
  tagline:
    'Role-focused support for engineers who work with Hugging Face day to day — from model selection and fine-tuning to RAG, agents, evaluation, and production serving. Daily job support, production backup, and interview help.',
  heroEyebrow: 'Hugging Face Engineer / LLM Engineer Support',
  painIntro:
    'Whether your title is Hugging Face Engineer, LLM Engineer, Generative AI Engineer, NLP Engineer, or ML Engineer, the day-to-day is the same: pick the right model, fine-tune it efficiently, wire it into a RAG or agent pipeline, evaluate it, and serve it reliably within budget. We support that whole lifecycle on your real project.',
  heroVariant:
    'A modern Hugging Face engineer owns a wide surface: choosing base models from the Hub, building data pipelines with Datasets and Tokenizers, fine-tuning with PEFT and TRL (SFT/DPO/GRPO), tracking runs with Trackio, evaluating with Lighteval, building RAG with Sentence Transformers and TEI, adding agents with smolagents, optimizing with quantization and the Kernels ecosystem, and deploying to Inference Endpoints, vLLM or TGI across AWS, Azure or GCP. We provide role-specific, real-time support across those responsibilities — plus interview and profile help to move up.',
  geoLine:
    'Support for Hugging Face and LLM engineers across USA, Canada, UK, Ireland, Europe, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  highlights: roleHighlights,
  faqs: [
    {
      question: 'What does Hugging Face Engineer job support include?',
      answer:
        'Real-time help across the LLM lifecycle on your actual project: model selection from the Hub, data pipelines with Datasets and Tokenizers, fine-tuning with PEFT/LoRA/QLoRA and TRL, experiment tracking with Trackio, evaluation with Lighteval, RAG with Sentence Transformers and TEI, agents with smolagents, optimization with quantization and kernels, and deployment on Inference Endpoints, vLLM or TGI. We also help with code review, architecture decisions, and production incidents.',
    },
    {
      question: 'Which job titles does this cover?',
      answer:
        'Hugging Face Engineer, LLM Engineer, Generative AI Engineer, Applied AI Engineer, NLP Engineer, Machine Learning Engineer, RAG Engineer, Agentic AI Engineer, and AI Platform / LLM Infrastructure Engineer. The support is mapped to your specific responsibilities, stack, and stakeholders.',
    },
    {
      question: 'Can you back me up during production incidents and releases?',
      answer:
        'Yes. We provide on-call backup during high-pressure moments — a fine-tuning run failing before a deadline, an endpoint that will not scale, a RAG regression after a model swap, or a release that needs a second expert on the call. You are never alone with a production LLM issue.',
    },
    {
      question: 'Do you also help with interviews and profile positioning?',
      answer:
        'Yes. Alongside daily job support we offer Hugging Face / LLM proxy interview support and candidate marketing — profile positioning around the terms recruiters search for and real-time interview readiness — so you can move into and up within the role. Hiring decisions are made solely by employers.',
    },
    {
      question: 'Is it confidential and how do I start?',
      answer:
        'Every engagement is fully confidential with NDAs available on request. Message us on WhatsApp with your role, stack, and current challenge and we will match you with the right engineer, usually the same day.',
    },
  ],
  proxySection: {
    title: 'Interview & Career Progression for Hugging Face Engineers',
    intro:
      'The same expertise that keeps you delivering also helps you move up — into senior LLM roles, into agentic and RAG specializations, and into AI platform work.',
    points: [
      'Live interview support for LLM Engineer, GenAI Engineer, and NLP Engineer rounds',
      'Profile positioning around Transformers, PEFT/TRL, RAG, and serving impact',
      'Candidate marketing and recruiter outreach to generate real interview calls',
      'Mentoring on architecture decisions that senior and lead roles are expected to own',
      'End-to-end: land the role, ramp up fast, then progress with ongoing support',
    ],
  },
  bottomCTAHeading: 'Need a Hugging Face Expert Beside You on the Job?',
  bottomCTABody:
    'Daily job support, production backup, interview readiness, and profile positioning for Hugging Face and LLM engineers — same-day, confidential. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'Hugging Face job support USA', href: '/hugging-face-proxy-job-support-usa/' },
    ],
    techLinks: [HF_TRL_LINK, HF_SERVING_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_TRANSFORMERS_TRAINING_LINK, HF_PEFT_LINK, HF_QLORA_LINK, HF_RAG_HUB_LINK,
      HF_SMOLAGENTS_LINK, HF_DATASETS_LINK, HF_TRACKIO_LINK, HF_LIGHTEVAL_LINK,
      EXISTING.llmEngineer, EXISTING.genaiEngineer, EXISTING.ragEngineer, EXISTING.aiEngineer,
      EXISTING.mlopsEngineer, EXISTING.llmProfile, EXISTING.candidateMarketing,
    ],
  }),
});

export const huggingFaceCorePages: LandingPageConfig[] = [
  huggingFaceHub,
  huggingFaceInterviewHub,
  huggingFaceProduction,
  huggingFaceEngineer,
];
