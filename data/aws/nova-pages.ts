import type { LandingPageConfig } from '../landing-pages';
import {
  awsPage,
  awsServicePage,
  relatedLinks,
  jobSupportHighlights,
  awsServiceFaqs,
  EXISTING,
  AWS_HUB_LINK,
  BEDROCK_HUB_LINK,
  NOVA_HUB_LINK,
  AWS_INTERVIEW_HUB_LINK,
} from './shared';

// ─── Amazon Nova hub ─────────────────────────────────────────────────────────

export const amazonNovaHub: LandingPageConfig = awsPage({
  slug: 'amazon-nova-job-support',
  title: 'Amazon Nova Job Support — AWS Foundation Models on Bedrock',
  description:
    'Real-time Amazon Nova job support: Nova 2 text and multimodal models on Bedrock, Nova Sonic speech, Nova Act browser automation, Nova multimodal embeddings, customization, evaluation, and production prompt engineering. Same-day.',
  keywords: [
    'Amazon Nova job support', 'Nova on Bedrock', 'Nova 2 models', 'Nova multimodal support',
    'Nova Sonic support', 'Nova Act support', 'Nova embeddings', 'Nova customization',
  ],
  h1: 'Amazon Nova Job Support — Build With AWS’s Own Foundation Models',
  tagline:
    'Amazon Nova is AWS’s family of fast, cost-efficient foundation models on Bedrock. We help you select, prompt, customize, and productionize them.',
  heroEyebrow: 'Amazon Nova Hub — Updated August 2026',
  painIntro:
    'Choosing between Nova tiers for cost and quality, unsure how Nova compares with Claude or Llama for your task, or working with Nova Sonic speech or Nova Act browser automation? Nova is broad and evolving fast.',
  heroVariant:
    'Amazon Nova is AWS’s family of foundation models available on Amazon Bedrock. Through August 2026 the current generation is Nova 2, with the first-generation Nova models (Micro, Lite, Pro, Premier for text/reasoning; Canvas for images; Reel for video) now in legacy status. The portfolio also includes Nova Sonic (speech-to-speech with a bidirectional streaming API), Nova Act (an agent and SDK for taking actions in a web browser), and Nova Multimodal Embeddings (unified retrieval across text, documents, images, video, and audio). We help you select the right Nova model for cost and quality, design prompts, run inference (including cross-region and provisioned throughput), customize and evaluate, and build production applications — and we favor durable choices over chasing obsolete version names.',
  geoLine:
    'Amazon Nova support for engineers across USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover Nova 2 text/multimodal models, Nova Sonic speech, Nova Act browser automation, Nova multimodal embeddings, Nova customization and evaluation, and Nova on Bedrock inference.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'Which Amazon Nova models should I use in 2026?',
      answer:
        'Through August 2026 the current generation is Nova 2, and you should build on it; the first-generation Nova models (Micro, Lite, Pro, Premier, Canvas, Reel) are now legacy. For speech, use Nova Sonic; for browser actions, Nova Act; for unified retrieval, Nova Multimodal Embeddings. We help you pick the right tier for your cost/quality target rather than defaulting to the largest model, and we verify current model IDs before advising.',
    },
    {
      question: 'How does Nova compare with Claude, Llama, and Mistral on Bedrock?',
      answer:
        'It depends on the task, latency budget, and cost. Nova models are designed to be fast and cost-efficient on AWS; Claude, Llama, and Mistral have their own strengths. We help you run a task-specific evaluation to choose with evidence rather than reputation — see our Nova vs Claude comparison and Bedrock foundation models pages.',
    },
    {
      question: 'Can you help customize and evaluate Nova?',
      answer:
        'Yes. We help with fine-tuning and customization where supported, prompt engineering for Nova specifically, and building evaluations (including LLM-as-a-judge) so you can prove a Nova model meets your quality bar before production.',
    },
    {
      question: 'Do you help with Nova Sonic and Nova Act?',
      answer:
        'Yes. Nova Sonic (speech-to-speech via the bidirectional streaming API) for voice AI, and Nova Act (browser automation agent and SDK) for action-taking — we help you design, integrate, and productionize both, including how they fit with AgentCore.',
    },
    {
      question: 'How do I get started and is it confidential?',
      answer:
        'Message us on WhatsApp with your Nova use case. We assign the right expert — usually same-day. Every engagement is confidential and NDAs are available.',
    },
  ],
  useCasesSection: {
    title: 'Amazon Nova Situations We Help With',
    cases: [
      'Selecting the right Nova 2 tier for your cost, latency, and quality target',
      'Deciding between Nova, Claude, Llama, and Mistral with a task-specific evaluation',
      'Building voice AI with Nova Sonic’s bidirectional streaming API',
      'Automating browser actions with Nova Act and integrating it with AgentCore',
      'Using Nova Multimodal Embeddings for unified text/image/video/audio retrieval',
      'Fine-tuning, evaluating, and productionizing Nova on Bedrock',
    ],
  },
  proxySection: {
    title: 'Nova Interview & Career Support',
    intro:
      'Interviewing on AWS foundation models? We prepare you on Nova and how it fits the Bedrock model catalog.',
    points: [
      'Nova model selection and evaluation questions',
      'Multimodal, speech (Sonic), and browser (Act) use cases',
      'Live, discreet proxy interview support during the real interview',
      'Profile positioning for AWS GenAI Engineer roles',
      'Confidential, in-house AWS AI experts — NDAs available',
    ],
  },
  bottomCTAHeading: 'Need Amazon Nova Job Support or Model Selection Help Now?',
  bottomCTABody:
    'In-house AWS AI experts for Amazon Nova — model selection, prompting, customization, Sonic, and Act. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AWS_HUB_LINK, BEDROCK_HUB_LINK],
    techLinks: [
      { label: 'Bedrock foundation models', href: '/amazon-bedrock-foundation-models-job-support/' },
      { label: 'Nova vs Claude on Bedrock', href: '/amazon-nova-vs-claude-job-support/' },
    ],
    problemLink: { label: 'Amazon Bedrock troubleshooting', href: '/amazon-bedrock-troubleshooting-support/' },
    proxyLink: EXISTING.awsBedrockInterview,
    additionalLinks: [
      BEDROCK_HUB_LINK, AWS_HUB_LINK, AWS_INTERVIEW_HUB_LINK,
      { label: 'Amazon Nova customization', href: '/amazon-nova-customization-job-support/' },
      EXISTING.genai, EXISTING.llm,
    ],
  }),
});

// ─── Amazon Nova customization ───────────────────────────────────────────────

export const amazonNovaCustomization: LandingPageConfig = awsServicePage({
  slug: 'amazon-nova-customization-job-support',
  title: 'Amazon Nova Customization Support — Fine-Tuning, Prompting & Evaluation',
  description:
    'Real-time Amazon Nova customization support: fine-tuning where supported, Nova-specific prompt engineering, structured output, evaluation, and productionizing customized Nova models on Bedrock.',
  keywords: [
    'Amazon Nova customization', 'Nova fine-tuning', 'Nova prompt engineering',
    'Nova evaluation', 'Nova production support', 'Nova structured output',
  ],
  h1: 'Amazon Nova Customization Support — Tune, Prompt & Evaluate Nova Properly',
  tagline:
    'Getting the most from Nova is about prompting, customization, and evaluation. We help you do all three with evidence.',
  heroEyebrow: 'Amazon Nova Customization',
  painIntro:
    'Nova output not matching your quality bar, or unsure whether to fine-tune or just prompt better? Customization without evaluation is guesswork.',
  heroVariant:
    'We help you get production quality from Amazon Nova: Nova-specific prompt engineering and structured-output patterns, deciding whether fine-tuning or customization (where supported) is warranted vs prompting and RAG, building and validating datasets, and constructing task-specific evaluations (including LLM-as-a-judge) so you can prove a customized Nova model is better before shipping. We wire it into your Bedrock inference and Guardrails setup for a production-ready path.',
  faqs: awsServiceFaqs('Amazon Nova customization', 'We help you with Nova prompt engineering, fine-tuning where supported, dataset design, and rigorous evaluation before production.'),
  relatedLinks: relatedLinks({
    geoLinks: [NOVA_HUB_LINK, BEDROCK_HUB_LINK],
    techLinks: [
      { label: 'Bedrock model customization', href: '/amazon-bedrock-model-customization-job-support/' },
      { label: 'RAG vs fine-tuning on AWS', href: '/aws-rag-vs-fine-tuning-job-support/' },
    ],
    problemLink: { label: 'Amazon Bedrock troubleshooting', href: '/amazon-bedrock-troubleshooting-support/' },
    proxyLink: EXISTING.awsBedrockInterview,
    additionalLinks: [NOVA_HUB_LINK, BEDROCK_HUB_LINK, EXISTING.fineTuning, EXISTING.genai],
  }),
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const awsNovaPages: LandingPageConfig[] = [amazonNovaHub, amazonNovaCustomization];
