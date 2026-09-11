import type { LandingPageConfig } from '../landing-pages';
import {
  hfServicePage,
  relatedLinks,
  hfServiceFaqs,
  EXISTING,
  HF_HUB_LINK,
  HF_INTERVIEW_HUB_LINK,
  HF_PRODUCTION_LINK,
  HF_PEFT_LINK,
  HF_QLORA_LINK,
  HF_TRL_LINK,
  HF_ACCELERATE_LINK,
  HF_TRANSFORMERS_TRAINING_LINK,
  HF_QUANT_LINK,
  HF_GPU_LINK,
  HF_TRACKIO_LINK,
  HF_LIGHTEVAL_LINK,
  HF_DATASETS_LINK,
  HF_OPENENV_LINK,
} from './shared';

// ─── PEFT ────────────────────────────────────────────────────────────────────

export const peftFineTuning: LandingPageConfig = hfServicePage({
  slug: 'peft-fine-tuning-job-support',
  title: 'PEFT Fine-Tuning Job Support | LoRA, Adapters, Target Modules & Merging',
  description:
    'Job support for parameter-efficient fine-tuning with Hugging Face PEFT — LoRA and adapters, rank/alpha/dropout, target modules, trainable parameters, adapter saving, loading, merging, and multiple adapters. Fit fine-tuning on one GPU and fix adapter errors.',
  keywords: [
    'PEFT fine-tuning job support', 'Hugging Face PEFT support', 'LoRA target modules',
    'LoRA rank alpha', 'adapter merging support', 'PEFT adapter loading error', 'parameter efficient fine-tuning',
  ],
  h1: 'PEFT Fine-Tuning Job Support — LoRA, Adapters, Target Modules & Merging',
  tagline:
    'Real-time help with Hugging Face PEFT — configuring LoRA (rank, alpha, dropout, target modules), training only adapters, and saving, loading, merging, and switching multiple adapters in production.',
  heroEyebrow: 'PEFT / LoRA Fine-Tuning Support',
  painIntro:
    'A LoRA config that trains too many or too few parameters, an adapter that will not load against its base model, or confusion over which target modules to choose? PEFT makes fine-tuning affordable, but getting rank, alpha, and target modules right — and managing adapters afterward — is where teams get stuck. We help.',
  heroVariant:
    'PEFT (parameter-efficient fine-tuning) freezes the base model and trains small add-on parameters, cutting memory and storage by orders of magnitude versus full fine-tuning. We help across LoRA and related methods: choosing rank (r), alpha, and dropout; selecting target_modules for your architecture; understanding trainable-parameter counts; combining PEFT with quantized base models (QLoRA) via bitsandbytes; saving and loading adapters; merging adapters into the base for deployment; hot-swapping and stacking multiple adapters at inference; and wiring PEFT into the Transformers Trainer and TRL. We also help decide when full fine-tuning is genuinely warranted instead.',
  faqs: [
    ...hfServiceFaqs('PEFT', 'We help configure LoRA (rank/alpha/dropout/target modules), train adapters, and save, load, merge, and serve them on your real fine-tuning job.'),
    {
      question: 'How do I choose LoRA rank, alpha, and target modules?',
      answer:
        'Rank controls adapter capacity (common values 8–64); alpha scales the update (often set to rank or 2× rank); dropout regularizes. Target modules are the layers LoRA is injected into — typically the attention projections (q/k/v/o) and often the MLP layers for stronger adaptation. The right choice depends on model architecture, dataset size, and task. We start from sensible defaults for your model and tune based on eval results rather than guesswork.',
    },
    {
      question: 'Should I merge the adapter or keep it separate?',
      answer:
        'Keep adapters separate when you want to swap tasks, stack multiple adapters, or keep the base shared across many fine-tunes. Merge into the base when you want a single self-contained model for the simplest, fastest inference path (and for engines that expect merged weights). Note that merging a quantized (QLoRA) model needs care. We help you pick and execute the right path for your deployment.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'QLoRA fine-tuning job support', href: '/qlora-fine-tuning-job-support/' },
    ],
    techLinks: [HF_QLORA_LINK, HF_TRL_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_TRANSFORMERS_TRAINING_LINK, HF_ACCELERATE_LINK, HF_QUANT_LINK, HF_GPU_LINK, HF_TRACKIO_LINK,
      EXISTING.fineTuning, EXISTING.loraQlora, EXISTING.transformers, EXISTING.pytorch,
    ],
  }),
});

// ─── QLoRA ─────────────────────────────────────────────────────────────────

export const qloraFineTuning: LandingPageConfig = hfServicePage({
  slug: 'qlora-fine-tuning-job-support',
  title: 'QLoRA Fine-Tuning Job Support | 4-bit Base + LoRA on a Single GPU',
  description:
    'Job support for QLoRA fine-tuning — quantize the base model to 4-bit with bitsandbytes, train LoRA adapters on limited GPU memory, and fix the OOM, dtype, and merging issues that break QLoRA runs. Fine-tune large models on one GPU.',
  keywords: [
    'QLoRA fine-tuning job support', 'QLoRA support', '4-bit fine-tuning', 'bitsandbytes NF4 QLoRA',
    'QLoRA CUDA OOM', 'fine-tune LLM single GPU', 'QLoRA vs LoRA',
  ],
  h1: 'QLoRA Fine-Tuning Job Support — 4-bit Base + LoRA Adapters',
  tagline:
    'Real-time help fine-tuning large models with QLoRA — a 4-bit quantized base plus trainable LoRA adapters — so you can fine-tune on a single GPU without the run dying on memory.',
  heroEyebrow: 'QLoRA Fine-Tuning Support',
  painIntro:
    'Trying to fine-tune a large model on one GPU and hitting CUDA OOM, dtype errors, or a merge that breaks the model? QLoRA is the technique that makes single-GPU fine-tuning of big models possible — but the quantization + adapter combination has specific failure modes. We help you get a clean run.',
  heroVariant:
    'QLoRA loads the base model in 4-bit (bitsandbytes NF4) and trains LoRA adapters on top, so gradients only flow through the small adapters while the frozen base stays quantized. This slashes memory enough to fine-tune large models on a single consumer or workstation GPU. We help with BitsAndBytesConfig setup, compute dtype (bf16), double quantization, LoRA target modules and rank, gradient checkpointing, batch size and accumulation, stable learning rates, and the correct way to save and (carefully) merge or serve a QLoRA-trained adapter. We wire it through TRL’s SFTTrainer or the Transformers Trainer.',
  faqs: [
    ...hfServiceFaqs('QLoRA', 'We help configure 4-bit base quantization plus LoRA adapters, fit the run on your GPU, and save/serve the result correctly.'),
    {
      question: 'When should I use QLoRA instead of LoRA?',
      answer:
        'Use plain LoRA when the full-precision (or 8-bit) base fits comfortably in memory — it is simpler and a touch faster. Use QLoRA when the base model is too large to fit otherwise: 4-bit quantization of the frozen base frees enough memory to fine-tune models several times larger on the same GPU, at a small accuracy cost that is usually acceptable. We help you decide based on your model size and GPU.',
    },
    {
      question: 'My QLoRA run hits CUDA OOM — what should I change first?',
      answer:
        'In order: reduce per-device batch size and add gradient accumulation, enable gradient checkpointing, confirm you are actually loading in 4-bit with the right compute dtype (bf16), shorten max sequence length if possible, and reduce LoRA rank slightly. We identify which is binding from the memory profile and fix it without hurting result quality.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'PEFT fine-tuning job support', href: '/peft-fine-tuning-job-support/' },
    ],
    techLinks: [HF_PEFT_LINK, HF_QUANT_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_TRL_LINK, HF_TRANSFORMERS_TRAINING_LINK, HF_GPU_LINK, HF_ACCELERATE_LINK,
      EXISTING.loraQlora, EXISTING.fineTuning, EXISTING.transformers,
    ],
  }),
});

// ─── TRL hub ─────────────────────────────────────────────────────────────────

export const trlJobSupport: LandingPageConfig = hfServicePage({
  slug: 'trl-job-support',
  title: 'TRL Job Support | SFT, DPO, GRPO, Reward Modeling & Distillation',
  description:
    'Job support for Hugging Face TRL (v1) — post-training LLMs with SFTTrainer, DPOTrainer, GRPOTrainer, RewardTrainer and DistillationTrainer, with vLLM-accelerated generation, PEFT integration, and OpenEnv for RL. Choose the right method and ship it.',
  keywords: [
    'TRL job support', 'Hugging Face TRL support', 'SFTTrainer DPOTrainer GRPOTrainer',
    'RLHF Hugging Face', 'reward modeling TRL', 'TRL vLLM', 'post-training LLM support',
  ],
  h1: 'TRL Job Support — Post-Training with SFT, DPO, GRPO & Reward Modeling',
  tagline:
    'Real-time help with Hugging Face TRL v1 — the full post-training stack (SFT, DPO, GRPO, reward modeling, distillation) with vLLM-accelerated generation and PEFT integration.',
  heroEyebrow: 'TRL Post-Training Hub',
  painIntro:
    'Trying to align or post-train an LLM and unsure whether to use SFT, DPO, GRPO, or reward modeling — or hitting instability, reward hacking, or OOM in a TRL run? TRL brings the whole post-training toolkit into one library, but each trainer solves a different problem. We help you choose and run the right one.',
  heroVariant:
    'TRL v1 is the full-stack post-training library, tightly integrated with Transformers and accelerated by vLLM for online methods. Offline: SFTTrainer (supervised fine-tuning), DPOTrainer and KTOTrainer (preference optimization). Online: GRPOTrainer (stable, vLLM-accelerated), RLOOTrainer, OnlineDPO and PPO. Reward modeling: RewardTrainer. Knowledge distillation: DistillationTrainer (now stable). It integrates with PEFT for parameter-efficient post-training, DeepSpeed/Accelerate for scale, and OpenEnv for RL environments. We help you map your goal (follow instructions, match preferences, optimize a reward, compress a model) to the right trainer, wire the data and reward, and stabilize training.',
  faqs: [
    ...hfServiceFaqs('TRL', 'We help pick and configure the right trainer (SFT/DPO/GRPO/reward/distillation), wire data and rewards, add vLLM acceleration, and stabilize the run.'),
    {
      question: 'Which TRL trainer should I use?',
      answer:
        'Start with SFT to teach format and behavior from demonstrations. Use DPO (or KTO) when you have preference pairs and want to align to preferences cheaply and stably without a separate reward model. Use GRPO (online RL) when you can define a reward or verifier and want the model to optimize against it — strong for reasoning and verifiable tasks. RewardTrainer builds a reward model; DistillationTrainer compresses a teacher into a student. We help you choose based on your data and objective.',
    },
    {
      question: 'Is GRPO stable and does TRL use vLLM?',
      answer:
        'Yes — in TRL v1, GRPOTrainer is a stable (non-experimental) trainer, and the online methods use vLLM to accelerate the generation step, which is often the bottleneck in RL post-training. We help you set up co-located or served vLLM generation, tune the group size and KL control, and avoid reward hacking and collapse.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'LLM alignment job support', href: '/llm-alignment-job-support/' },
    ],
    techLinks: [HF_PEFT_LINK, HF_QLORA_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_TRANSFORMERS_TRAINING_LINK, HF_ACCELERATE_LINK, HF_OPENENV_LINK, HF_TRACKIO_LINK,
      HF_LIGHTEVAL_LINK, HF_DATASETS_LINK,
      EXISTING.fineTuning, EXISTING.loraQlora, EXISTING.llm,
    ],
  }),
});

// ─── SFT ───────────────────────────────────────────────────────────────────

export const sftJobSupport: LandingPageConfig = hfServicePage({
  slug: 'huggingface-sft-job-support',
  title: 'Supervised Fine-Tuning (SFT) Job Support | TRL SFTTrainer & Chat Templates',
  description:
    'Job support for supervised fine-tuning (SFT) with Hugging Face TRL — SFTTrainer, chat templates and formatting, packing, completion-only loss, PEFT/QLoRA integration, and dataset preparation. Teach a model to follow your task cleanly.',
  keywords: [
    'SFT job support', 'supervised fine-tuning support', 'SFTTrainer TRL', 'chat template fine-tuning',
    'completion only loss', 'instruction tuning support', 'SFT dataset formatting',
  ],
  h1: 'Supervised Fine-Tuning (SFT) Job Support — SFTTrainer, Templates & Data',
  tagline:
    'Real-time help with supervised fine-tuning — TRL’s SFTTrainer, chat-template formatting, sequence packing, completion-only loss, and dataset preparation, with PEFT/QLoRA for efficiency.',
  heroEyebrow: 'Supervised Fine-Tuning Support',
  painIntro:
    'An SFT run where the model learns the wrong thing, loss looks fine but outputs are off, or the chat template is mismatched? SFT is the foundation of most post-training, and most SFT problems trace back to data formatting and templates. We help you get it right.',
  heroVariant:
    'Supervised fine-tuning teaches a model desired behavior from demonstration data (prompt→response). We help with TRL’s SFTTrainer: applying the correct chat template so the model learns the format it will be used with, formatting instruction/response datasets, sequence packing for efficiency, completion-only loss (masking the prompt so only the response is learned), max-length and truncation choices, PEFT/LoRA/QLoRA integration to keep it affordable, and evaluation. SFT is usually the first stage before preference optimization (DPO) or RL (GRPO).',
  faqs: [
    ...hfServiceFaqs('SFT (supervised fine-tuning)', 'We help configure SFTTrainer, chat templates, packing, and completion-only loss, and prepare the dataset on your real task.'),
    {
      question: 'Why does my SFT model output the prompt back or ignore formatting?',
      answer:
        'Almost always a template or loss-masking issue: the training format does not match the inference chat template, or the loss was computed over the whole sequence instead of completion-only, so the model learned to reproduce prompts. We align the chat template used in training and inference, enable completion-only loss where appropriate, and verify with held-out examples.',
    },
    {
      question: 'Should I do full SFT or SFT with LoRA/QLoRA?',
      answer:
        'For most teams LoRA or QLoRA SFT gives nearly the same quality at a fraction of the memory and storage, and produces portable adapters. Full SFT is warranted mainly for large data, big behavior shifts, or when you specifically need merged full weights. We help you choose and configure either through SFTTrainer.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'TRL post-training job support', href: '/trl-job-support/' },
    ],
    techLinks: [HF_TRL_LINK, HF_PEFT_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_QLORA_LINK, HF_DATASETS_LINK, HF_TRANSFORMERS_TRAINING_LINK, HF_LIGHTEVAL_LINK,
      EXISTING.fineTuning, EXISTING.loraQlora,
    ],
  }),
});

// ─── DPO ───────────────────────────────────────────────────────────────────

export const dpoJobSupport: LandingPageConfig = hfServicePage({
  slug: 'huggingface-dpo-job-support',
  title: 'DPO Job Support | Direct Preference Optimization with TRL',
  description:
    'Job support for Direct Preference Optimization (DPO) with Hugging Face TRL — DPOTrainer, preference datasets (chosen/rejected), beta/KL control, reference models, and stability. Align an LLM to preferences without a separate reward model.',
  keywords: [
    'DPO job support', 'Direct Preference Optimization support', 'DPOTrainer TRL',
    'preference dataset chosen rejected', 'DPO beta KL', 'LLM alignment DPO',
  ],
  h1: 'DPO Job Support — Direct Preference Optimization with TRL',
  tagline:
    'Real-time help with DPO — TRL’s DPOTrainer, preference datasets, the beta/KL trade-off, reference-model handling, and keeping alignment stable without a separate reward model.',
  heroEyebrow: 'Preference Optimization (DPO) Support',
  painIntro:
    'A DPO run that destabilizes the model, over-optimizes, or barely changes behavior? DPO is the most popular way to align to human preferences without RL, but the beta parameter, data quality, and reference model all matter. We help you tune it.',
  heroVariant:
    'Direct Preference Optimization aligns a model to preference data (chosen vs rejected responses) by directly optimizing a preference objective — no separate reward model or RL loop needed, which makes it simpler and more stable than classic RLHF. We help with DPOTrainer: preparing chosen/rejected preference datasets, the beta parameter controlling how far the policy moves from the reference, reference-model handling and memory, combining DPO with PEFT/LoRA, running it after an SFT stage, and diagnosing over-optimization or degeneration. We also help you decide between DPO, KTO, and GRPO for your data.',
  faqs: [
    ...hfServiceFaqs('DPO', 'We help build preference datasets, tune beta/reference handling in DPOTrainer, and keep alignment stable on your real model.'),
    {
      question: 'What is beta in DPO and how do I set it?',
      answer:
        'Beta controls the strength of the KL constraint to the reference model — lower beta lets the policy move further (stronger preference fit, higher risk of degeneration), higher beta keeps it closer to the reference (safer, weaker effect). We start from a sensible default (often around 0.1) and tune based on eval and generation quality, watching for over-optimization.',
    },
    {
      question: 'Do I need to run SFT before DPO?',
      answer:
        'Usually yes. DPO assumes the model already produces reasonable responses in the right format; running SFT first gives it that base, and DPO then shifts it toward preferences. Skipping SFT often makes DPO unstable. We help you sequence SFT → DPO correctly.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'TRL post-training job support', href: '/trl-job-support/' },
    ],
    techLinks: [HF_TRL_LINK, HF_PEFT_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_QLORA_LINK, HF_DATASETS_LINK, HF_LIGHTEVAL_LINK,
      EXISTING.fineTuning, EXISTING.llm,
    ],
  }),
});

// ─── GRPO ────────────────────────────────────────────────────────────────────

export const grpoJobSupport: LandingPageConfig = hfServicePage({
  slug: 'huggingface-grpo-job-support',
  title: 'GRPO Job Support | Group Relative Policy Optimization with TRL & vLLM',
  description:
    'Job support for GRPO with Hugging Face TRL — Group Relative Policy Optimization for reasoning and verifiable rewards, vLLM-accelerated generation, reward functions, group size and KL tuning, and avoiding reward hacking and collapse.',
  keywords: [
    'GRPO job support', 'Group Relative Policy Optimization', 'GRPOTrainer TRL', 'RL fine-tuning LLM',
    'reward function GRPO', 'reasoning model training', 'TRL vLLM GRPO',
  ],
  h1: 'GRPO Job Support — Group Relative Policy Optimization for Reasoning',
  tagline:
    'Real-time help with GRPO — TRL’s GRPOTrainer with vLLM-accelerated generation, reward-function design, group size and KL control, and stable RL post-training for reasoning and verifiable tasks.',
  heroEyebrow: 'Reinforcement Learning (GRPO) Support',
  painIntro:
    'Running GRPO to train a reasoning model and fighting reward hacking, collapse, painfully slow generation, or OOM? GRPO is the current workhorse for RL post-training with verifiable rewards, but it has real operational challenges. We help you run it well.',
  heroVariant:
    'Group Relative Policy Optimization is an online RL method (stable in TRL v1) that samples a group of responses per prompt, scores them with a reward function or verifier, and updates the policy toward the relatively better ones — no separate value model needed. It shines for reasoning and tasks with a checkable answer. We help with reward-function design (verifiable rewards, format rewards, avoiding exploitable shortcuts), vLLM-accelerated generation setup (the usual bottleneck), group size, KL/temperature control, PEFT integration, and diagnosing collapse or reward hacking. TRL integrates with OpenEnv for richer RL environments.',
  faqs: [
    ...hfServiceFaqs('GRPO', 'We help design reward functions, set up vLLM generation, tune group size/KL, and stabilize GRPO on your real reasoning task.'),
    {
      question: 'How is GRPO different from PPO and DPO?',
      answer:
        'DPO learns from static preference pairs offline — no generation loop. PPO and GRPO are online RL: the model generates, gets scored by a reward, and updates. GRPO drops PPO’s separate value/critic model by scoring a group of samples relative to each other, which is simpler and memory-lighter. GRPO is the current default for verifiable-reward and reasoning training in TRL. We help you choose based on whether you have preferences, a reward function, or a verifier.',
    },
    {
      question: 'How do I stop reward hacking?',
      answer:
        'Reward hacking happens when the model exploits the reward instead of solving the task — e.g. gaming a format check. We design rewards that are hard to game (verifiable correctness plus mild format/length shaping), add KL control to keep the policy near the reference, monitor sample quality during training, and adjust the reward when we see exploitation.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'OpenEnv agentic RL job support', href: '/openenv-job-support/' },
    ],
    techLinks: [HF_TRL_LINK, HF_OPENENV_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_PEFT_LINK, HF_QLORA_LINK, HF_LIGHTEVAL_LINK, HF_TRACKIO_LINK,
      EXISTING.fineTuning, EXISTING.llm, EXISTING.agenticAi,
    ],
  }),
});

// ─── Reward modeling ─────────────────────────────────────────────────────────

export const rewardModeling: LandingPageConfig = hfServicePage({
  slug: 'reward-modeling-job-support',
  title: 'Reward Modeling Job Support | Train Reward Models with TRL RewardTrainer',
  description:
    'Job support for reward modeling with Hugging Face TRL — train reward models with RewardTrainer on preference data, use them in RLHF/GRPO, and evaluate reward quality. Includes process reward models (PRM) where applicable.',
  keywords: [
    'reward modeling job support', 'RewardTrainer TRL', 'RLHF reward model', 'preference data reward model',
    'process reward model PRM', 'reward model evaluation',
  ],
  h1: 'Reward Modeling Job Support — RewardTrainer, RLHF & Preference Data',
  tagline:
    'Real-time help training and using reward models — TRL’s RewardTrainer on preference data, feeding rewards into RL post-training, and evaluating whether the reward actually tracks quality.',
  heroEyebrow: 'Reward Modeling Support',
  painIntro:
    'Need a reward model for RLHF or GRPO, but unsure how to train it, whether it generalizes, or how to keep it from being gamed? A weak reward model quietly wrecks RL post-training. We help you build one that holds up.',
  heroVariant:
    'A reward model scores responses so an RL method can optimize against it. We help with TRL’s RewardTrainer: preparing preference (chosen/rejected) data, choosing a base model and head, training and calibrating the reward model, evaluating whether its scores actually correlate with quality, and integrating it into GRPO/PPO or online DPO. Where relevant we cover process reward models (PRM) that score reasoning steps rather than only final answers. We also help decide when you can skip a reward model entirely and use DPO or verifiable rewards.',
  faqs: [
    ...hfServiceFaqs('reward modeling', 'We help train a reward model with RewardTrainer, evaluate its quality, and wire it into RL post-training.'),
    {
      question: 'Do I always need a reward model?',
      answer:
        'No. If you have preference pairs, DPO optimizes them directly with no reward model. If you have a programmatic verifier (e.g. unit tests, exact-match), GRPO can use that reward directly. A trained reward model is most useful when quality is subjective and you want to score arbitrary new responses at scale. We help you choose the lightest approach that works.',
    },
    {
      question: 'How do I know my reward model is any good?',
      answer:
        'Evaluate it on held-out preference pairs (accuracy at ranking chosen over rejected), check calibration, and watch for shortcut features (length, formatting) that inflate scores. During RL, monitor whether higher reward corresponds to genuinely better samples. We set up these checks so you catch a bad reward before it corrupts training.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'GRPO job support', href: '/huggingface-grpo-job-support/' },
    ],
    techLinks: [HF_TRL_LINK, HF_LIGHTEVAL_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_PEFT_LINK, HF_DATASETS_LINK,
      EXISTING.fineTuning, EXISTING.llm,
    ],
  }),
});

// ─── LLM alignment ─────────────────────────────────────────────────────────

export const llmAlignment: LandingPageConfig = hfServicePage({
  slug: 'llm-alignment-job-support',
  title: 'LLM Alignment Job Support | SFT, Preference Optimization & RLHF Pipelines',
  description:
    'Job support for LLM alignment — designing the full post-training pipeline (SFT → DPO/KTO → GRPO/RLHF), choosing methods, preparing data, and evaluating helpfulness and safety with Hugging Face TRL and Lighteval.',
  keywords: [
    'LLM alignment job support', 'RLHF pipeline support', 'post-training pipeline', 'SFT DPO GRPO pipeline',
    'LLM safety alignment', 'preference optimization support',
  ],
  h1: 'LLM Alignment Job Support — End-to-End Post-Training Pipelines',
  tagline:
    'Real-time help designing and running full alignment pipelines — from SFT through preference optimization to RL — with the right method at each stage and honest evaluation.',
  heroEyebrow: 'LLM Alignment Support',
  painIntro:
    'Trying to align a model end-to-end and unsure how the stages fit together, which methods to use, or how to evaluate whether alignment actually worked? Alignment is a pipeline, not a single trainer. We help you design and run the whole thing.',
  heroVariant:
    'Alignment usually chains stages: SFT to establish format and base behavior, then preference optimization (DPO/KTO) or RL (GRPO with a reward or verifier) to shape helpfulness, honesty, and safety. We help you design the pipeline for your goal and data, choose methods at each stage, prepare and curate data (with Argilla/Distilabel where useful), keep training stable, and evaluate with Lighteval and targeted behavior checks. We do not make safety or compliance guarantees — we help you build and measure the pipeline honestly.',
  faqs: [
    ...hfServiceFaqs('LLM alignment', 'We help design the SFT → DPO/GRPO pipeline, choose methods, curate data, and evaluate alignment on your real model.'),
    {
      question: 'What order should alignment stages run in?',
      answer:
        'The common recipe is SFT first (teach format and base behavior from demonstrations), then preference optimization (DPO/KTO) or RL (GRPO) to shape behavior toward preferences or a reward. Reward modeling fits before RL if you need a learned reward. We tailor the sequence to your data — sometimes SFT + DPO is enough; sometimes GRPO with verifiable rewards is the win.',
    },
    {
      question: 'How do I evaluate whether alignment worked?',
      answer:
        'With a mix of automatic benchmarks (via Lighteval), task-specific evals, preference/win-rate comparisons against the pre-alignment model, and targeted probes for regressions and safety. We set up evaluation before training so you can prove improvement rather than hope for it.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'TRL post-training job support', href: '/trl-job-support/' },
    ],
    techLinks: [HF_TRL_LINK, HF_LIGHTEVAL_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_PEFT_LINK, HF_QLORA_LINK, HF_DATASETS_LINK, HF_TRACKIO_LINK,
      EXISTING.fineTuning, EXISTING.llm, EXISTING.llmEval,
    ],
  }),
});

// ─── Knowledge distillation ──────────────────────────────────────────────────

export const knowledgeDistillation: LandingPageConfig = hfServicePage({
  slug: 'knowledge-distillation-job-support',
  title: 'Knowledge Distillation Job Support | Compress LLMs with TRL DistillationTrainer',
  description:
    'Job support for knowledge distillation — compress a large teacher model into a smaller, cheaper student with Hugging Face TRL’s DistillationTrainer (now stable), preserving quality while cutting latency and cost.',
  keywords: [
    'knowledge distillation job support', 'DistillationTrainer TRL', 'LLM distillation support',
    'model compression LLM', 'teacher student distillation', 'GKD distillation',
  ],
  h1: 'Knowledge Distillation Job Support — Compress LLMs Without Losing Quality',
  tagline:
    'Real-time help distilling large models into smaller, cheaper ones — TRL’s DistillationTrainer, teacher/student setup, data generation, and measuring the quality/latency trade-off.',
  heroEyebrow: 'Knowledge Distillation Support',
  painIntro:
    'A model that is accurate but too slow or expensive to serve? Distillation trains a smaller student to mimic a larger teacher, cutting latency and cost while keeping most of the quality — if you set it up correctly. We help you do that.',
  heroVariant:
    'Knowledge distillation transfers behavior from a large teacher model to a smaller student, so you serve the cheaper student in production. In TRL v1, DistillationTrainer is now a stable trainer (with GKD and related methods for generalized/on-policy distillation). We help with teacher/student selection, distillation data (teacher outputs or on-policy student generations), loss configuration, combining distillation with PEFT, and rigorously measuring the quality-versus-cost trade-off so the smaller model is genuinely good enough. Distillation pairs well with quantization for maximum inference savings.',
  faqs: [
    ...hfServiceFaqs('knowledge distillation', 'We help set up teacher/student distillation with DistillationTrainer, generate distillation data, and measure the quality/latency trade-off.'),
    {
      question: 'When is distillation worth it versus just quantizing?',
      answer:
        'Quantization shrinks the same model with minimal effort and is usually the first move. Distillation goes further — a smaller architecture that is much cheaper to serve — but costs training effort and some quality. They are complementary: often you distill to a smaller student and then quantize it. We help you decide how far to push based on your latency and cost targets.',
    },
    {
      question: 'What data do I use for distillation?',
      answer:
        'Either the teacher’s outputs on a representative prompt set (offline) or on-policy student generations scored/corrected by the teacher (generalized/on-policy distillation, e.g. GKD), which often transfers better. We help you build the right distillation dataset for your task and the DistillationTrainer variant you use.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'TRL post-training job support', href: '/trl-job-support/' },
    ],
    techLinks: [HF_TRL_LINK, HF_QUANT_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_PEFT_LINK, HF_GPU_LINK, HF_LIGHTEVAL_LINK,
      EXISTING.fineTuning, EXISTING.modelDeployment,
    ],
  }),
});

// ─── Accelerate ────────────────────────────────────────────────────────────

export const accelerateDistributed: LandingPageConfig = hfServicePage({
  slug: 'accelerate-distributed-training-job-support',
  title: 'Accelerate Job Support | Distributed Training, FSDP, DeepSpeed & Multi-GPU',
  description:
    'Job support for Hugging Face Accelerate — launch and scale training across multiple GPUs and nodes with FSDP and DeepSpeed ZeRO, mixed precision, accelerate config/launch, and gradient accumulation. Fix hangs, NCCL errors and OOM.',
  keywords: [
    'Accelerate job support', 'Hugging Face Accelerate support', 'FSDP DeepSpeed support',
    'accelerate launch config', 'multi-GPU training support', 'NCCL error support', 'distributed training LLM',
  ],
  h1: 'Accelerate Job Support — Distributed & Multi-GPU Training',
  tagline:
    'Real-time help with Hugging Face Accelerate — configuring and launching distributed training, FSDP and DeepSpeed ZeRO, mixed precision, and diagnosing multi-GPU hangs, NCCL errors, and OOM.',
  heroEyebrow: 'Accelerate / Distributed Training Support',
  painIntro:
    'A multi-GPU or multi-node run that hangs, throws NCCL errors, or is slower than a single GPU? Accelerate is the layer that makes distributed training work under Trainer, TRL, and custom loops — and its config is where most distributed problems live. We help you get scaling that actually scales.',
  heroVariant:
    'Accelerate abstracts distributed training and inference so the same code runs on one GPU, many GPUs, or multiple nodes. It underpins the Transformers Trainer, TRL, and PEFT. We help with accelerate config and accelerate launch, choosing between DDP, FSDP (full-shard data parallel), and DeepSpeed ZeRO stages for your model size, mixed precision and gradient accumulation, CPU/parameter offload, device placement, and diagnosing the classic distributed failures — NCCL timeouts, rank mismatches, deadlocks, and uneven memory. We also help decide the right parallelism strategy for your GPU count and model size.',
  faqs: [
    ...hfServiceFaqs('Accelerate', 'We help configure accelerate/FSDP/DeepSpeed, launch multi-GPU/multi-node runs, and fix hangs, NCCL errors, and uneven memory.'),
    {
      question: 'FSDP or DeepSpeed — which should I use?',
      answer:
        'Both shard model/optimizer state to fit large models across GPUs. FSDP is PyTorch-native and integrates cleanly with Accelerate; DeepSpeed ZeRO (stages 1–3, with offload) is battle-tested and flexible for very large models and CPU/NVMe offload. For most Transformers/TRL workloads FSDP is a great default; DeepSpeed shines at extreme scale or when you need offload. We help you pick and configure for your hardware.',
    },
    {
      question: 'My multi-GPU run hangs or throws NCCL errors — why?',
      answer:
        'Common causes are mismatched launch configuration (world size vs visible devices), a process that diverged on control flow so ranks wait forever, network/interface issues, or a too-short NCCL timeout under a slow step. We diagnose from the logs and rank behavior, fix the launch/config, and add the right timeouts and health checks.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'Transformers training job support', href: '/huggingface-transformers-training-job-support/' },
    ],
    techLinks: [HF_TRANSFORMERS_TRAINING_LINK, HF_GPU_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_TRL_LINK, HF_PEFT_LINK, HF_QLORA_LINK, HF_TRACKIO_LINK,
      EXISTING.pytorch, EXISTING.transformers, EXISTING.mlops,
    ],
  }),
});

export const huggingFaceFineTuningPages: LandingPageConfig[] = [
  peftFineTuning,
  qloraFineTuning,
  trlJobSupport,
  sftJobSupport,
  dpoJobSupport,
  grpoJobSupport,
  rewardModeling,
  llmAlignment,
  knowledgeDistillation,
  accelerateDistributed,
];
