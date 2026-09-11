import type { LandingPageConfig } from '../landing-pages';
import {
  hfServicePage,
  relatedLinks,
  hfServiceFaqs,
  EXISTING,
  HF_HUB_LINK,
  HF_INTERVIEW_HUB_LINK,
  HF_PRODUCTION_LINK,
  HF_HUB_PLATFORM_LINK,
  HF_DATASETS_LINK,
  HF_TRACKIO_LINK,
  HF_LIGHTEVAL_LINK,
  HF_TRL_LINK,
  HF_TRANSFORMERS_TRAINING_LINK,
  HF_ACCELERATE_LINK,
  HF_SBERT_LINK,
} from './shared';

const TOKENIZERS_LINK = { label: 'Tokenizers job support', href: '/huggingface-tokenizers-job-support/' };
const ARGILLA_LINK = { label: 'Argilla & Distilabel data job support', href: '/argilla-distilabel-data-job-support/' };
const AUTOTRAIN_LINK = { label: 'AutoTrain job support', href: '/autotrain-job-support/' };
const HFJOBS_LINK = { label: 'Hugging Face Jobs training support', href: '/huggingface-jobs-training-job-support/' };

// ─── Datasets ─────────────────────────────────────────────────────────────────

export const datasets: LandingPageConfig = hfServicePage({
  slug: 'huggingface-datasets-job-support',
  title: 'Hugging Face Datasets Job Support | Loading, Streaming & Data Pipelines',
  description:
    'Job support for the Hugging Face Datasets library — loading and streaming large datasets, memory-mapped Arrow, map/filter transforms, tokenization pipelines, and preparing data for training without running out of RAM.',
  keywords: [
    'Hugging Face Datasets job support', 'datasets library streaming', 'Arrow memory-mapped dataset', 'load_dataset map filter',
    'data pipeline training', 'IterableDataset streaming', 'prepare training data Hugging Face',
  ],
  h1: 'Hugging Face Datasets Job Support — Data Pipelines That Scale',
  tagline:
    'Real-time help with the Datasets library — loading and streaming large corpora, memory-mapped Arrow, efficient map/filter transforms, and building training data pipelines that do not blow up memory.',
  heroEyebrow: 'Datasets Support',
  painIntro:
    'A dataset that will not fit in RAM, a preprocessing map that takes hours, or a training pipeline that stalls on data loading? The Datasets library is built for exactly this — memory-mapped and streamable — but only if you use it right. We help you build fast, memory-safe pipelines.',
  heroVariant:
    'The Datasets library gives you memory-mapped, Arrow-backed access to datasets far larger than RAM, plus streaming (IterableDataset) so you can train on data you never fully download. We help you use load_dataset and the Hub, write efficient .map()/.filter() transforms (batched, multiprocessed, cached), tokenize at scale, handle splits and interleaving, build custom loading scripts, and stream from the Hub or cloud storage into training. We also fix the common problems: preprocessing that is slow because it is not batched, cache bloat, non-deterministic shuffling, and data loading that bottlenecks the GPU. This is the data layer under every training and fine-tuning job.',
  faqs: [
    ...hfServiceFaqs('Hugging Face Datasets', 'We help with load_dataset, efficient batched map/filter, streaming large corpora, tokenization pipelines, and fixing slow or memory-heavy preprocessing.'),
    {
      question: 'My dataset does not fit in memory — what do I do?',
      answer:
        'Two tools: memory-mapping (the default Arrow backend keeps data on disk and maps it, so you can work with datasets larger than RAM) and streaming (IterableDataset) to process/train without downloading everything. We help you switch to streaming, structure transforms to work on the stream, and keep shuffling and batching correct.',
    },
    {
      question: 'My .map() preprocessing is painfully slow — how do I speed it up?',
      answer:
        'Almost always because it runs one example at a time in a single process. We make it batched (batched=True) and multiprocessed (num_proc), avoid re-running by leveraging the cache, and push heavy work (like tokenization) into vectorised calls. That routinely turns hours into minutes.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_HUB_PLATFORM_LINK,
    ],
    techLinks: [TOKENIZERS_LINK, HF_TRANSFORMERS_TRAINING_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, ARGILLA_LINK, HF_TRL_LINK, HF_ACCELERATE_LINK,
      EXISTING.mlops, EXISTING.fineTuning,
    ],
  }),
});

// ─── Tokenizers ────────────────────────────────────────────────────────────────

export const tokenizers: LandingPageConfig = hfServicePage({
  slug: 'huggingface-tokenizers-job-support',
  title: 'Tokenizers Job Support | BPE, Fast Tokenizers, Chat Templates & Special Tokens',
  description:
    'Job support for Hugging Face Tokenizers — fast Rust tokenizers, BPE/WordPiece/Unigram, training custom tokenizers, chat templates, special/added tokens, padding/truncation, and fixing tokenizer/model mismatches.',
  keywords: [
    'Hugging Face Tokenizers job support', 'fast tokenizer BPE', 'train custom tokenizer', 'chat template special tokens',
    'tokenizer model mismatch', 'padding truncation tokenizer', 'AutoTokenizer support',
  ],
  h1: 'Tokenizers Job Support — From Custom Vocabularies to Chat Templates',
  tagline:
    'Real-time help with the Tokenizers library and AutoTokenizer — fast tokenizers, training custom vocabularies, chat templates and special tokens, and fixing the tokenizer/model mismatches that silently break generation.',
  heroEyebrow: 'Tokenizers Support',
  painIntro:
    'Generation producing garbage, chat prompts formatted wrong, or a tokenizer/model mismatch you cannot pin down? Tokenization sits between text and the model, and small mistakes here cause big, confusing failures. We help you get it exactly right.',
  heroVariant:
    'The Tokenizers library provides fast, Rust-backed tokenization (BPE, WordPiece, Unigram) with full pipelines — normalisation, pre-tokenisation, model, and post-processing. We help you use AutoTokenizer correctly, apply chat templates so prompts match what the model was trained on, manage special and added tokens (and resize model embeddings when you add them), configure padding/truncation and attention masks, and train a custom tokenizer when a domain vocabulary genuinely helps. Critically, we diagnose the tokenizer/model mismatch — a leading cause of broken generation — where the wrong tokenizer, template, or special-token setup makes a healthy model output nonsense. Getting tokenization right is often the fix for problems people mistake for model or training bugs.',
  faqs: [
    ...hfServiceFaqs('Tokenizers', 'We help with fast tokenizers, chat templates, special/added tokens, padding/truncation, and fixing tokenizer/model mismatches that break generation.'),
    {
      question: 'What is a tokenizer/model mismatch and how do I fix it?',
      answer:
        'It is when the tokenizer used at inference does not match how the model was trained — wrong vocabulary, wrong chat template, or mismatched special tokens (BOS/EOS/pad). The model then sees malformed input and generates nonsense. We fix it by loading the exact tokenizer that ships with the model, applying its chat template, and aligning special tokens — usually resolving "the model is broken" complaints instantly.',
    },
    {
      question: 'When should I train a custom tokenizer?',
      answer:
        'Rarely for general use — reuse the model’s tokenizer. Train a custom one when your domain has vocabulary a general tokenizer fragments badly (code, chemistry, other languages/scripts) and you are training from scratch or heavily. We help you decide, because a custom tokenizer means you cannot reuse existing pretrained weights unless you extend rather than replace the vocabulary.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_HUB_PLATFORM_LINK,
    ],
    techLinks: [HF_DATASETS_LINK, HF_TRANSFORMERS_TRAINING_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_TRL_LINK, HF_SBERT_LINK,
      EXISTING.transformers, EXISTING.fineTuning,
    ],
  }),
});

// ─── Trackio ─────────────────────────────────────────────────────────────────

export const trackio: LandingPageConfig = hfServicePage({
  slug: 'trackio-experiment-tracking-job-support',
  title: 'Trackio Job Support | Local-First Experiment Tracking (wandb-Compatible)',
  description:
    'Job support for Trackio — Hugging Face’s lightweight, local-first experiment tracking. Drop-in wandb-compatible API (import trackio as wandb), integration with Transformers, TRL and Accelerate, and dashboards on a Space.',
  keywords: [
    'Trackio job support', 'experiment tracking Hugging Face', 'trackio wandb compatible', 'import trackio as wandb',
    'ML experiment tracking', 'training metrics dashboard', 'local first tracking',
  ],
  h1: 'Trackio Job Support — Lightweight, Local-First Experiment Tracking',
  tagline:
    'Real-time help adopting Trackio — Hugging Face’s free, local-first experiment tracker with a drop-in wandb-compatible API, integrated with Transformers, TRL, and Accelerate.',
  heroEyebrow: 'Trackio Support',
  painIntro:
    'Want experiment tracking without a paid SaaS or heavyweight setup — and ideally without rewriting your training loop? Trackio is a lightweight, local-first tracker with a wandb-compatible API. We help you wire it in and use it well.',
  heroVariant:
    'Trackio is Hugging Face’s lightweight experiment-tracking library, built on Gradio and free, designed to be local-first (your runs live on your machine or a Hugging Face Space you control). Its headline feature is API compatibility with Weights & Biases — import trackio as wandb and existing wandb.init/log/finish calls keep working — so migrating costs almost nothing. We help you integrate it with the Transformers Trainer, TRL trainers, and Accelerate (report_to), log metrics/config/artifacts, build dashboards, run a shared tracking backend on a Space or self-hosted server, and compare runs. It is the right fit when you want tracking that is simple, private-by-default, and cheap, without giving up the wandb workflow.',
  faqs: [
    ...hfServiceFaqs('Trackio', 'We help you adopt Trackio, migrate wandb code with the drop-in API, integrate with Transformers/TRL/Accelerate, and set up dashboards on a Space.'),
    {
      question: 'Can I switch from Weights & Biases to Trackio without rewriting code?',
      answer:
        'Largely yes. Trackio implements a wandb-compatible API, so import trackio as wandb lets your existing wandb.init/log/finish calls work unchanged for the common paths. We help you swap it in, confirm your metrics and config log correctly, and handle any wandb features you rely on that need a different approach.',
    },
    {
      question: 'Is Trackio local-only, or can my team share dashboards?',
      answer:
        'Both. It is local-first by default, but you can host the tracking backend on a Hugging Face Space or self-host a server so a team shares dashboards. We help you set up the shared backend, access, and persistence so tracking works for a team without a paid third-party service.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_LIGHTEVAL_LINK,
    ],
    techLinks: [HF_TRL_LINK, HF_TRANSFORMERS_TRAINING_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_ACCELERATE_LINK, AUTOTRAIN_LINK, HFJOBS_LINK,
      EXISTING.mlops, EXISTING.mlopsEngineer,
    ],
  }),
});

// ─── Lighteval ─────────────────────────────────────────────────────────────────

export const lighteval: LandingPageConfig = hfServicePage({
  slug: 'lighteval-model-evaluation-job-support',
  title: 'Lighteval Job Support | LLM Evaluation Across vLLM, Transformers & Inspect AI',
  description:
    'Job support for Lighteval — Hugging Face’s LLM evaluation toolkit. Run benchmarks and custom tasks across backends (Inspect AI, vLLM, Transformers, Inference Providers), build eval suites, and trust your model comparisons.',
  keywords: [
    'Lighteval job support', 'LLM evaluation Hugging Face', 'Lighteval benchmarks', 'model evaluation harness',
    'custom eval task', 'inspect-ai vllm backend', 'evaluate LLM support',
  ],
  h1: 'Lighteval Job Support — Trustworthy LLM Evaluation',
  tagline:
    'Real-time help with Lighteval — running benchmarks and custom tasks across Inspect AI, vLLM, Transformers, and Inference Providers backends so your model comparisons are fair and reproducible.',
  heroEyebrow: 'Lighteval Support',
  painIntro:
    'Need to prove one model or fine-tune is actually better — not just "feels better" — and worried your eval is measuring the wrong thing? Evaluation is where LLM decisions should be made, and it is easy to get wrong. We help you build evals you can trust.',
  heroVariant:
    'Lighteval is Hugging Face’s all-in-one LLM evaluation toolkit. It runs standard benchmarks and your own custom tasks across multiple backends — its preferred inspect-ai backend, plus vLLM, SGLang, Transformers, and Inference Providers/Endpoints — so you can evaluate a local checkpoint or a served model with the same suite. We help you choose relevant benchmarks, write custom tasks and metrics for your domain, set up prompts and few-shot correctly (a common source of misleading scores), run evals efficiently on your own hardware or served endpoints, and interpret results honestly (contamination, prompt sensitivity, statistical noise). Note that the generic evaluate library covers metrics broadly but is not the LLM harness — for LLM evaluation, Lighteval is the recommendation. Good eval turns "I think it improved" into a defensible decision.',
  faqs: [
    ...hfServiceFaqs('Lighteval', 'We help you run benchmarks and custom tasks across Inspect AI/vLLM/Transformers backends, build domain evals, and interpret results honestly.'),
    {
      question: 'How do I evaluate my fine-tuned model fairly?',
      answer:
        'Pick benchmarks relevant to your task plus a domain-specific custom eval, hold prompts and few-shot settings constant across models, run on the same backend, and watch for train/test contamination and prompt sensitivity. We help you build the suite in Lighteval and report deltas with enough context that the comparison actually holds up.',
    },
    {
      question: 'Should I use evaluate or Lighteval?',
      answer:
        'The evaluate library is a general metrics library (accuracy, BLEU, ROUGE, etc.) and is fine for classic metric computation. For evaluating LLMs — benchmarks, generation tasks, multiple backends — Lighteval is Hugging Face’s recommended toolkit. We help you pick the right one and, often, use both for their respective strengths.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_TRACKIO_LINK,
    ],
    techLinks: [HF_TRL_LINK, HF_TRANSFORMERS_TRAINING_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, ARGILLA_LINK, HFJOBS_LINK,
      EXISTING.llmEval, EXISTING.mlops, EXISTING.llmEngineer,
    ],
  }),
});

// ─── Argilla / Distilabel ───────────────────────────────────────────────────────

export const argillaDistilabel: LandingPageConfig = hfServicePage({
  slug: 'argilla-distilabel-data-job-support',
  title: 'Argilla & Distilabel Job Support | Data Annotation & Synthetic Data for LLMs',
  description:
    'Job support for Argilla and Distilabel — human feedback and data annotation with Argilla, and synthetic/preference dataset generation with Distilabel. Build the SFT and DPO datasets that make fine-tuning actually work.',
  keywords: [
    'Argilla job support', 'Distilabel synthetic data', 'data annotation LLM', 'preference dataset DPO',
    'human feedback RLHF data', 'synthetic data generation', 'SFT dataset curation',
  ],
  h1: 'Argilla & Distilabel Job Support — Data Annotation & Synthetic Data',
  tagline:
    'Real-time help building training data — human feedback and annotation with Argilla, and synthetic and preference dataset generation with Distilabel — the data that makes SFT, DPO, and RLHF work.',
  heroEyebrow: 'Data / Human Feedback Support',
  painIntro:
    'Fine-tuning underperforming because the data is thin, noisy, or missing preference pairs? Model quality is capped by data quality, and building good SFT/DPO datasets is its own discipline. We help you create and curate the data that actually moves the needle.',
  heroVariant:
    'Data quality, not algorithm choice, usually decides fine-tuning outcomes. We help you build it with the Hugging Face data tooling: Argilla for human annotation and feedback — setting up datasets, guidelines, and review workflows so humans label, rate, and correct model outputs efficiently — and Distilabel for programmatic synthetic-data and preference-dataset generation, using LLMs to produce and score examples at scale (for SFT instruction data and DPO/preference pairs). We cover pipeline design, quality control and filtering, deduplication, mixing human and synthetic data, and shaping the result into the exact format TRL trainers expect. This is the upstream work that makes SFT, DPO, GRPO, and reward modelling succeed.',
  faqs: [
    ...hfServiceFaqs('Argilla and Distilabel', 'We help you build SFT and preference datasets — human annotation with Argilla, synthetic/preference generation with Distilabel — and shape them for TRL.'),
    {
      question: 'When should I generate synthetic data with Distilabel vs collect human data?',
      answer:
        'Synthetic data (Distilabel) is fast and cheap for scaling instruction data and bootstrapping preference pairs, and is often good enough — especially when seeded and filtered well. Human data (Argilla) is essential where judgement, safety, or domain nuance matters, and for validating synthetic data. Most strong datasets blend both. We help you decide the mix and build the pipeline.',
    },
    {
      question: 'How do I build a preference dataset for DPO?',
      answer:
        'You need prompts with a chosen and a rejected response each. We help you generate candidates (Distilabel), score/rank them with models and/or humans (Argilla), filter for quality and agreement, and format them exactly as the TRL DPOTrainer expects — so alignment training has clean signal instead of noise.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_DATASETS_LINK,
    ],
    techLinks: [HF_TRL_LINK, AUTOTRAIN_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, TOKENIZERS_LINK, HF_LIGHTEVAL_LINK,
      EXISTING.fineTuning, EXISTING.mlops,
    ],
  }),
});

// ─── AutoTrain ─────────────────────────────────────────────────────────────────

export const autotrain: LandingPageConfig = hfServicePage({
  slug: 'autotrain-job-support',
  title: 'AutoTrain Job Support | No-Code Fine-Tuning for LLMs, VLMs & Classifiers',
  description:
    'Job support for Hugging Face AutoTrain — no-code fine-tuning of LLMs (SFT), text/token classification, VLMs, image and tabular models. Configure runs, prepare data, and move from AutoTrain to code when you outgrow it.',
  keywords: [
    'AutoTrain job support', 'Hugging Face AutoTrain', 'no-code fine-tuning', 'AutoTrain SFT LLM',
    'train model without code', 'AutoTrain configuration', 'AutoTrain data format',
  ],
  h1: 'AutoTrain Job Support — No-Code Fine-Tuning That Ships',
  tagline:
    'Real-time help with Hugging Face AutoTrain — configuring no-code fine-tuning for LLMs, classifiers, VLMs, and tabular models, preparing data correctly, and graduating to code when you need more control.',
  heroEyebrow: 'AutoTrain Support',
  painIntro:
    'Want to fine-tune without writing a training loop, but unsure about data format, parameters, or whether the result is any good? AutoTrain lowers the barrier, but data prep and configuration still decide the outcome. We help you get a working model out of it.',
  heroVariant:
    'AutoTrain is Hugging Face’s no-code training tool: you point it at data and a base model and it handles the training loop for tasks including LLM fine-tuning (SFT), text and token classification, sequence-to-sequence, VLMs, image classification, and tabular models. It is free (you pay only for the Spaces compute you use). We help you format your data correctly (the most common failure point), choose the task and base model, set the parameters that matter (learning rate, epochs, LoRA vs full), launch and monitor the run, and evaluate the result. We are also honest about limits: when you need custom losses, unusual data, or fine control, we help you graduate from AutoTrain to a TRL/Transformers script cleanly, reusing what you learned.',
  faqs: [
    ...hfServiceFaqs('AutoTrain', 'We help you format data, configure the run, choose base model and parameters, and evaluate results — and move to code when you outgrow no-code.'),
    {
      question: 'Is AutoTrain good enough for a real fine-tune, or just a toy?',
      answer:
        'For many common tasks — instruction SFT on a small/mid model, classification, VLM fine-tuning — AutoTrain produces genuinely useful models, especially in the 1–9B range. It becomes limiting when you need custom losses, exotic data, or fine control over the loop. We help you get a solid result from AutoTrain and recognise when to switch to a TRL/Transformers script.',
    },
    {
      question: 'My AutoTrain run fails or produces a bad model — why?',
      answer:
        'Usually data formatting (wrong columns/schema for the task) or unrealistic parameters (too few epochs, wrong LR). We check your dataset against the task’s expected format, fix the config, and add a quick evaluation so you can tell a good run from a bad one before relying on it.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HFJOBS_LINK,
    ],
    techLinks: [HF_TRL_LINK, HF_DATASETS_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, ARGILLA_LINK, HF_TRACKIO_LINK,
      EXISTING.fineTuning, EXISTING.loraQlora, EXISTING.mlops,
    ],
  }),
});

// ─── HF Jobs ─────────────────────────────────────────────────────────────────

export const huggingFaceJobs: LandingPageConfig = hfServicePage({
  slug: 'huggingface-jobs-training-job-support',
  title: 'Hugging Face Jobs Support | Run Training & Compute on HF Infrastructure',
  description:
    'Job support for Hugging Face Jobs — running training, inference, and data jobs on HF infrastructure with the hf jobs CLI (hf jobs uv run), GPU flavors, secrets, and UV-based scripts. Scale beyond your laptop without managing servers.',
  keywords: [
    'Hugging Face Jobs support', 'hf jobs uv run', 'run training HF infrastructure', 'HF Jobs GPU flavor',
    'cloud training Hugging Face', 'hf jobs CLI', 'managed compute jobs',
  ],
  h1: 'Hugging Face Jobs Support — Training & Compute Without Managing Servers',
  tagline:
    'Real-time help with Hugging Face Jobs — running training, inference, and data jobs on HF infrastructure via the hf jobs CLI, choosing GPU flavors, passing secrets, and packaging UV-based scripts.',
  heroEyebrow: 'Hugging Face Jobs Support',
  painIntro:
    'Need a GPU bigger than your laptop for a training or data job, but do not want to provision a cloud VM and babysit it? Hugging Face Jobs runs your script on HF infrastructure with one command. We help you use it efficiently.',
  heroVariant:
    'Hugging Face Jobs lets you run compute — training, inference, batch data processing — on Hugging Face infrastructure without managing servers. The hf jobs CLI (for example hf jobs uv run) runs a script in a container-like environment: you pick a hardware --flavor (from small CPU up to A100-class GPUs), declare dependencies (UV-compatible, --with), and pass --secrets like your HF token safely. Because TRL and many HF scripts are UV-compatible, you can launch fine-tuning or evaluation jobs directly. We help you package scripts to run on Jobs, choose the right flavor for cost/speed, manage secrets and outputs (pushing results/models back to the Hub), monitor and debug runs, and decide when Jobs is the right tool versus your own cloud or Inference Endpoints.',
  faqs: [
    ...hfServiceFaqs('Hugging Face Jobs', 'We help you package scripts for hf jobs, choose GPU flavors, manage secrets, push results to the Hub, and debug runs.'),
    {
      question: 'What can I actually run on Hugging Face Jobs?',
      answer:
        'Any script that fits the flavor — fine-tuning (TRL/Transformers), evaluation (Lighteval), batch inference, or data processing (Distilabel/Datasets). You choose the hardware flavor, declare dependencies, pass secrets, and it runs on HF infra. We help you structure the job so it is reproducible and writes its outputs (models, datasets, metrics) back to the Hub.',
    },
    {
      question: 'When should I use HF Jobs vs my own cloud or Inference Endpoints?',
      answer:
        'Use Jobs for one-off or scheduled compute (training, batch jobs) where you want zero server management and simple per-run cost. Use Inference Endpoints for always-on serving, and your own cloud when you need deep infra control or the lowest cost at sustained scale. We help you pick per workload rather than forcing everything into one.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_HUB_PLATFORM_LINK,
    ],
    techLinks: [AUTOTRAIN_LINK, HF_TRL_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_TRACKIO_LINK, HF_LIGHTEVAL_LINK, HF_ACCELERATE_LINK,
      EXISTING.mlops, EXISTING.mlopsEngineer,
    ],
  }),
});

export const huggingFaceMlopsPages: LandingPageConfig[] = [
  datasets,
  tokenizers,
  trackio,
  lighteval,
  argillaDistilabel,
  autotrain,
  huggingFaceJobs,
];
