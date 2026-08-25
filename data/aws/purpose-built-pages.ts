import type { LandingPageConfig } from '../landing-pages';
import {
  awsServicePage,
  relatedLinks,
  awsServiceFaqs,
  AWS_HUB_LINK,
  BEDROCK_HUB_LINK,
  AWS_PRODUCTION_LINK,
  AWS_INTERVIEW_HUB_LINK,
} from './shared';

const pbRelated = (self: string) =>
  relatedLinks({
    geoLinks: [AWS_HUB_LINK, BEDROCK_HUB_LINK],
    techLinks: [
      { label: 'Amazon Textract', href: '/amazon-textract-job-support/' },
      { label: 'Amazon Comprehend', href: '/amazon-comprehend-job-support/' },
    ],
    problemLink: AWS_PRODUCTION_LINK,
    proxyLink: AWS_INTERVIEW_HUB_LINK,
    additionalLinks: [
      { label: 'Amazon Textract', href: '/amazon-textract-job-support/' },
      { label: 'Amazon Rekognition', href: '/amazon-rekognition-job-support/' },
      { label: 'Amazon Transcribe', href: '/amazon-transcribe-job-support/' },
      { label: 'Amazon Comprehend', href: '/amazon-comprehend-job-support/' },
      { label: 'Amazon Lex', href: '/amazon-lex-job-support/' },
      AWS_HUB_LINK, BEDROCK_HUB_LINK,
    ].filter((l) => l.href !== self),
  });

// ─── Amazon Textract ─────────────────────────────────────────────────────────

export const textract: LandingPageConfig = awsServicePage({
  slug: 'amazon-textract-job-support',
  title: 'Amazon Textract Support — OCR, Forms, Tables & IDP on AWS',
  description:
    'Real-time Amazon Textract support: OCR, forms and tables extraction, expense and ID documents, intelligent document processing, and Textract with Bedrock and RAG on AWS.',
  keywords: [
    'Amazon Textract support', 'Textract OCR', 'Textract forms tables', 'Textract IDP',
    'Textract Bedrock', 'Textract document processing',
  ],
  h1: 'Amazon Textract Support — Extract Text, Forms & Tables Reliably',
  tagline:
    'Textract turns documents into structured data. We help you get accuracy, handle edge cases, and feed the output into GenAI.',
  heroEyebrow: 'Amazon Textract',
  painIntro:
    'Textract misreading tables, forms not mapping to fields, or low confidence on real-world scans? Document extraction is full of edge cases.',
  heroVariant:
    'Amazon Textract extracts printed and handwritten text, forms (key-value pairs), tables, and specialized documents (expenses, IDs) via OCR and ML. We help you choose the right Textract API (Detect/Analyze, expense, ID), handle multi-page and async processing, improve accuracy on hard documents, post-process and validate output, manage confidence thresholds and human review, and feed Textract output into Bedrock and RAG — and we help you decide between Textract and Bedrock Data Automation for multimodal IDP.',
  faqs: awsServiceFaqs('Amazon Textract', 'We help you choose the right Textract API, handle async and multi-page processing, improve accuracy, manage confidence, and feed output into Bedrock.'),
  relatedLinks: relatedLinks({
    geoLinks: [AWS_HUB_LINK, BEDROCK_HUB_LINK],
    techLinks: [
      { label: 'Bedrock Data Automation', href: '/amazon-bedrock-data-automation-job-support/' },
      { label: 'Amazon Comprehend', href: '/amazon-comprehend-job-support/' },
    ],
    problemLink: AWS_PRODUCTION_LINK,
    proxyLink: AWS_INTERVIEW_HUB_LINK,
    additionalLinks: [
      { label: 'Insurance AWS AI', href: '/insurance-aws-ai-job-support/' },
      { label: 'Healthcare AWS AI', href: '/healthcare-aws-ai-job-support/' },
      AWS_HUB_LINK, BEDROCK_HUB_LINK,
    ],
  }),
});

// ─── Amazon Rekognition ──────────────────────────────────────────────────────

export const rekognition: LandingPageConfig = awsServicePage({
  slug: 'amazon-rekognition-job-support',
  title: 'Amazon Rekognition Support — Image & Video Analysis on AWS',
  description:
    'Real-time Amazon Rekognition support: image and video analysis, content moderation, custom labels, and Rekognition with Bedrock for multimodal AI on AWS.',
  keywords: [
    'Amazon Rekognition support', 'Rekognition image analysis', 'Rekognition video analysis',
    'Rekognition moderation', 'Rekognition custom labels', 'Rekognition Bedrock',
  ],
  h1: 'Amazon Rekognition Support — Production Image & Video Intelligence',
  tagline:
    'Rekognition analyzes images and video at scale. We help you build detection, moderation, and custom-label pipelines.',
  heroEyebrow: 'Amazon Rekognition',
  painIntro:
    'Content moderation missing edge cases, custom labels underperforming, or video analysis costs surprising you? Vision pipelines need tuning.',
  heroVariant:
    'Amazon Rekognition provides image and video analysis — object and scene detection, content moderation, text-in-image, and Custom Labels for domain-specific detection. We help you design detection and moderation pipelines, train and evaluate Custom Labels, handle video analysis and cost, integrate results with Bedrock for multimodal reasoning, and add human review where confidence is low.',
  faqs: awsServiceFaqs('Amazon Rekognition', 'We help you build image/video detection and moderation pipelines, train Custom Labels, and integrate with Bedrock for multimodal AI.'),
  relatedLinks: pbRelated('/amazon-rekognition-job-support/'),
});

// ─── Amazon Transcribe ───────────────────────────────────────────────────────

export const transcribe: LandingPageConfig = awsServicePage({
  slug: 'amazon-transcribe-job-support',
  title: 'Amazon Transcribe Support — Speech-to-Text & Voice AI on AWS',
  description:
    'Real-time Amazon Transcribe support: batch and streaming transcription, call analytics, custom vocabulary, and Transcribe with Bedrock for voice AI on AWS.',
  keywords: [
    'Amazon Transcribe support', 'Transcribe streaming', 'Transcribe call analytics',
    'Transcribe custom vocabulary', 'Transcribe Bedrock', 'voice AI AWS',
  ],
  h1: 'Amazon Transcribe Support — Accurate Speech-to-Text at Scale',
  tagline:
    'Transcribe turns audio into text for analytics and GenAI. We help you get accuracy and build voice AI pipelines.',
  heroEyebrow: 'Amazon Transcribe',
  painIntro:
    'Transcription accuracy suffering on domain terms, streaming latency issues, or no clean path from calls into a GenAI summary? Speech pipelines need the right configuration.',
  heroVariant:
    'Amazon Transcribe provides batch and real-time streaming speech-to-text, plus call analytics. We help you improve accuracy with custom vocabulary and language models, handle streaming transcription and latency, process call recordings, and feed transcripts into Bedrock for summarization, sentiment, and RAG — building end-to-end voice AI. We also help you decide between Transcribe and Nova Sonic for speech use cases.',
  faqs: awsServiceFaqs('Amazon Transcribe', 'We help you improve transcription accuracy, handle streaming, process calls, and feed transcripts into Bedrock for voice AI.'),
  relatedLinks: pbRelated('/amazon-transcribe-job-support/'),
});

// ─── Amazon Polly ────────────────────────────────────────────────────────────

export const polly: LandingPageConfig = awsServicePage({
  slug: 'amazon-polly-job-support',
  title: 'Amazon Polly Support — Neural Text-to-Speech & Voice AI on AWS',
  description:
    'Real-time Amazon Polly support: neural text-to-speech, SSML, voices, streaming audio, and Polly with Bedrock for conversational voice AI on AWS.',
  keywords: [
    'Amazon Polly support', 'Polly neural TTS', 'Polly SSML', 'Polly voice AI',
    'Polly Bedrock', 'text to speech AWS',
  ],
  h1: 'Amazon Polly Support — Natural Text-to-Speech for AI Applications',
  tagline:
    'Polly gives your app a natural voice. We help you use neural TTS, SSML, and streaming for real voice experiences.',
  heroEyebrow: 'Amazon Polly',
  painIntro:
    'Robotic-sounding output, SSML not doing what you expect, or latency in a conversational loop? Good TTS is more than picking a voice.',
  heroVariant:
    'Amazon Polly provides neural text-to-speech with a range of voices and languages, SSML control, and streaming synthesis. We help you select voices and tune SSML for natural output, stream audio for low-latency conversational apps, integrate Polly with Bedrock and Transcribe for full voice AI loops, and manage cost and caching — for assistants, IVR, accessibility, and media.',
  faqs: awsServiceFaqs('Amazon Polly', 'We help you tune neural TTS and SSML, stream audio for low latency, and integrate Polly into voice AI loops with Bedrock and Transcribe.'),
  relatedLinks: pbRelated('/amazon-polly-job-support/'),
});

// ─── Amazon Translate ────────────────────────────────────────────────────────

export const translate: LandingPageConfig = awsServicePage({
  slug: 'amazon-translate-job-support',
  title: 'Amazon Translate Support — Neural Machine Translation for AI Apps',
  description:
    'Real-time Amazon Translate support: neural machine translation, custom terminology, multilingual applications, and Translate with Bedrock for multilingual GenAI on AWS.',
  keywords: [
    'Amazon Translate support', 'Translate custom terminology', 'multilingual AI AWS',
    'Translate Bedrock', 'neural machine translation AWS',
  ],
  h1: 'Amazon Translate Support — Multilingual AI Without the Guesswork',
  tagline:
    'Translate localizes content and enables multilingual GenAI. We help you get quality with custom terminology and Bedrock.',
  heroEyebrow: 'Amazon Translate',
  painIntro:
    'Translations missing domain terms or brand names, or unsure how to combine Translate with an LLM for multilingual apps? Quality needs custom terminology and the right pattern.',
  heroVariant:
    'Amazon Translate provides neural machine translation across many languages, with custom terminology and parallel data for domain accuracy. We help you build multilingual applications, apply custom terminology, decide when to use Translate vs an LLM directly, and combine Translate with Bedrock for multilingual RAG and generation — with cost and latency in mind.',
  faqs: awsServiceFaqs('Amazon Translate', 'We help you apply custom terminology, build multilingual apps, and combine Translate with Bedrock for multilingual GenAI.'),
  relatedLinks: pbRelated('/amazon-translate-job-support/'),
});

// ─── Amazon Lex ──────────────────────────────────────────────────────────────

export const lex: LandingPageConfig = awsServicePage({
  slug: 'amazon-lex-job-support',
  title: 'Amazon Lex Support — Conversational AI & Contact-Center Bots on AWS',
  description:
    'Real-time Amazon Lex support: conversational AI, chatbot architecture, Lex with Bedrock and Lambda, contact-center AI, and production bot debugging on AWS.',
  keywords: [
    'Amazon Lex support', 'Lex chatbot', 'Lex Bedrock', 'Lex Lambda', 'Lex contact center',
    'conversational AI AWS',
  ],
  h1: 'Amazon Lex Support — Build Conversational AI That Works in Production',
  tagline:
    'Lex powers voice and text bots, now often paired with Bedrock. We help you design intents, fulfillment, and GenAI-enhanced flows.',
  heroEyebrow: 'Amazon Lex',
  painIntro:
    'Intents not matching, fulfillment Lambdas failing, or wanting to add LLM-powered responses to a Lex bot? Conversational design is harder than it looks.',
  heroVariant:
    'Amazon Lex provides conversational AI for voice and text bots, integrating with Lambda for fulfillment and increasingly with Bedrock for GenAI-enhanced conversations. We help you design intents, slots, and dialog, build Lambda fulfillment, add Bedrock-powered generative responses and RAG, integrate with Amazon Connect for contact-center AI, and debug production conversation failures — for assistants, IVR, and customer support.',
  faqs: awsServiceFaqs('Amazon Lex', 'We help you design intents and dialog, build Lambda fulfillment, add Bedrock-powered responses, integrate contact centers, and debug conversation failures.'),
  relatedLinks: pbRelated('/amazon-lex-job-support/'),
});

// ─── Amazon Comprehend ───────────────────────────────────────────────────────

export const comprehend: LandingPageConfig = awsServicePage({
  slug: 'amazon-comprehend-job-support',
  title: 'Amazon Comprehend Support — NLP, Entities, Sentiment & PII on AWS',
  description:
    'Real-time Amazon Comprehend support: NLP, entity recognition, classification, sentiment, PII detection, custom models, and Comprehend with Bedrock on AWS.',
  keywords: [
    'Amazon Comprehend support', 'Comprehend NLP', 'Comprehend entities', 'Comprehend sentiment',
    'Comprehend PII', 'Comprehend custom classification', 'Comprehend Bedrock',
  ],
  h1: 'Amazon Comprehend Support — Production NLP That Complements LLMs',
  tagline:
    'Comprehend does fast, cheap NLP — entities, sentiment, PII, classification. We help you use it alongside Bedrock.',
  heroEyebrow: 'Amazon Comprehend',
  painIntro:
    'Using an LLM for tasks a purpose-built NLP service does faster and cheaper, or needing reliable PII detection before sending text to a model? Comprehend often fits better.',
  heroVariant:
    'Amazon Comprehend provides managed NLP — entity recognition, key-phrase extraction, sentiment and targeted sentiment, language detection, document classification, and PII detection/redaction, plus custom models. We help you use Comprehend where it beats an LLM on cost and latency, build custom classification and entity models, redact PII before it reaches Bedrock, and combine Comprehend with Bedrock in a hybrid pipeline — with the right accuracy and governance.',
  faqs: awsServiceFaqs('Amazon Comprehend', 'We help you use NLP for entities, sentiment, classification, and PII redaction, build custom models, and combine Comprehend with Bedrock.'),
  relatedLinks: pbRelated('/amazon-comprehend-job-support/'),
});

// ─── Amazon Personalize ──────────────────────────────────────────────────────

export const personalize: LandingPageConfig = awsServicePage({
  slug: 'amazon-personalize-job-support',
  title: 'Amazon Personalize Support — Real-Time Recommendations on AWS',
  description:
    'Real-time Amazon Personalize support: recommendation systems, ecommerce personalization, real-time recommendations, ranking, and Personalize with GenAI on AWS.',
  keywords: [
    'Amazon Personalize support', 'Personalize recommendations', 'ecommerce personalization AWS',
    'real-time recommendations AWS', 'Personalize ranking', 'recommender system AWS',
  ],
  h1: 'Amazon Personalize Support — Recommendations That Actually Convert',
  tagline:
    'Personalize brings Amazon-grade recommendations to your app. We help you design datasets, recipes, and real-time personalization.',
  heroEyebrow: 'Amazon Personalize',
  painIntro:
    'Recommendations that feel random, cold-start problems, or unsure which recipe fits your use case? Recommender quality is all in the data and setup.',
  heroVariant:
    'Amazon Personalize builds recommendation and ranking models from your interaction data without managing ML infrastructure. We help you design item/user/interaction datasets, choose recipes (user personalization, related items, personalized ranking), handle cold-start, deploy real-time campaigns and batch recommendations, evaluate quality, and combine Personalize with GenAI (Bedrock) for richer experiences — for ecommerce, media, and content.',
  faqs: awsServiceFaqs('Amazon Personalize', 'We help you design datasets, choose recipes, handle cold-start, deploy real-time recommendations, and combine Personalize with Bedrock.'),
  relatedLinks: pbRelated('/amazon-personalize-job-support/'),
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const awsPurposeBuiltPages: LandingPageConfig[] = [
  textract,
  rekognition,
  transcribe,
  polly,
  translate,
  lex,
  comprehend,
  personalize,
];
