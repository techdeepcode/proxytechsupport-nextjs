import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'Hugging Face Fine-Tuning Job Support Guide — PEFT, LoRA, QLoRA, TRL | Proxy Tech Support',
  description: 'Real-time Hugging Face fine-tuning support: PEFT LoRA and QLoRA, full vs adapter tuning, TRL SFT/DPO/GRPO, chat templates, Accelerate FSDP/DeepSpeed, OOM fixes, eval, and merging to Hub.',
  canonical: 'https://proxytechsupport.com/hugging-face-fine-tuning-job-support-guide/',
});

export default function Page() {
  return (
    <KnowledgeGuidePage
      h1="Hugging Face Fine-Tuning Job Support Guide: PEFT, TRL, and Distributed Training"
      intro="Fine-tuning a model with Hugging Face involves a chain of decisions — adapters versus full tuning, dataset formatting, the right TRL recipe, distributed configuration, and evaluation — where one wrong step wastes GPU hours. This guide walks through the fine-tuning stack and how real-time job support keeps your training runs on track."
      sections={[
        { heading: 'Full Fine-Tuning vs Adapters', body: 'The first decision is whether to update all model weights or attach lightweight adapters. Full fine-tuning gives maximum flexibility but needs enough GPU memory to hold the model, optimizer states, and gradients — often impractical for large models. PEFT adapters such as LoRA and QLoRA train a small number of extra parameters while freezing the base model, cutting memory dramatically and producing portable adapter files. For most task-specific and instruction-tuning work, adapters are the pragmatic default; support helps you decide based on model size, hardware, and how much the target task differs from the base model.' },
        { heading: 'PEFT: LoRA and QLoRA', body: 'PEFT implements LoRA by injecting low-rank matrices into attention and projection layers, controlled by rank, alpha, dropout, and target-module settings. QLoRA goes further by loading the base model in 4-bit through bitsandbytes so you can fine-tune large models on a single GPU. Common support issues include choosing rank and target modules, mismatched dtypes between the quantized base and the adapters, and forgetting to enable gradient checkpointing or prepare the model for k-bit training.' },
        { heading: 'TRL: SFT, DPO, and GRPO', body: 'TRL v1 provides the post-training recipes that sit on top of PEFT and Transformers. SFTTrainer handles supervised fine-tuning on instruction data, DPO aligns a model to preference pairs without a separate reward model, and GRPO supports reinforcement-style optimization for reasoning and other objectives. Support covers picking the right trainer for your goal, structuring preference or reward data correctly, and reading the loss and reward curves to tell whether training is actually working.' },
        { heading: 'Datasets and Chat Templates', body: 'Most training failures that produce a model with correct loss but broken behaviour trace back to data formatting. The dataset must match what the trainer expects, and conversational data must be rendered through the tokenizer chat template rather than concatenated by hand, so that role markers and special tokens line up with what the base model was trained on. Support commonly fixes column mapping, masking of prompt tokens so loss is computed only on completions, truncation of long samples, and template mismatches between training and inference.' },
        { heading: 'Distributed Training with Accelerate', body: 'When a job outgrows one GPU, Accelerate coordinates it across many using FSDP or DeepSpeed. FSDP shards parameters, gradients, and optimizer states across devices, while DeepSpeed ZeRO offers similar sharding plus CPU and NVMe offload. Configuring these correctly is where a lot of time is lost:', bullets: ['Choosing between FSDP and DeepSpeed ZeRO stages for your model size and GPU count', 'Setting mixed precision (bf16) and gradient accumulation to hit an effective batch size', 'Getting the accelerate config and launch command to match the trainer settings', 'Diagnosing hangs, NCCL timeouts, and uneven memory across ranks', 'Combining sharding with LoRA or QLoRA without breaking adapter placement'] },
        { heading: 'OOM Mitigation', body: 'CUDA out-of-memory is the single most common fine-tuning blocker. The mitigation toolkit includes 4-bit or 8-bit quantization of the base model, LoRA or QLoRA instead of full tuning, gradient checkpointing, smaller per-device batch sizes offset by gradient accumulation, shorter maximum sequence lengths, paged optimizers, and FSDP or DeepSpeed offload. The right combination depends on your exact GPU; support tunes these together rather than changing one setting at a time.' },
        { heading: 'Evaluation', body: 'A training run that finishes is not the same as a model that improved. Support helps set up meaningful evaluation — held-out validation loss, task-specific metrics, and qualitative checks on generated outputs — and interpret it against the base model. This is also where regressions surface: a model that gained on the target task but lost general capability, or one that overfit to formatting quirks in the training data.' },
        { heading: 'Merging and Pushing to the Hub', body: 'After training, LoRA adapters can be kept separate for flexible loading or merged into the base weights to produce a standalone model for simpler serving. Merged models are then saved in Safetensors format and pushed to the Hub with the hf CLI, along with the tokenizer and a model card. Support covers merge-and-unload steps, dtype handling during merge, and packaging the repository so the model loads cleanly in downstream inference engines like vLLM.' },
      ]}
      relatedLinks={[
        { href: '/hugging-face-proxy-job-support/', label: 'Hugging Face Job Support Hub' },
        { href: '/peft-fine-tuning-job-support/', label: 'PEFT Fine-Tuning Support' },
        { href: '/qlora-fine-tuning-job-support/', label: 'QLoRA Fine-Tuning Support' },
        { href: '/trl-job-support/', label: 'TRL Job Support' },
        { href: '/accelerate-distributed-training-job-support/', label: 'Accelerate Distributed Training Support' },
        { href: '/huggingface-transformers-training-job-support/', label: 'Transformers Training Support' },
      ]}
      relatedGuides={[
        { href: '/hugging-face-job-support-guide/', label: 'Hugging Face Job Support Guide' },
        { href: '/hugging-face-inference-deployment-guide/', label: 'Hugging Face Inference & Deployment Guide' },
        { href: '/mlops-job-support-guide/', label: 'MLOps Job Support Guide' },
        { href: '/ai-ml-job-support-guide/', label: 'AI/ML Job Support Guide' },
      ]}
      faqs={[
        { q: 'Should I use LoRA, QLoRA, or full fine-tuning?', a: 'Use LoRA when the base model fits in memory and you want fast, portable adapters. Use QLoRA when the model is too large to fit otherwise, since it loads the base in 4-bit. Reserve full fine-tuning for cases where the target task differs greatly from the base model and you have the GPU memory to spare.' },
        { q: 'What is the difference between SFT, DPO, and GRPO in TRL?', a: 'SFT is supervised fine-tuning on instruction and response pairs. DPO aligns the model directly to preference pairs without a separate reward model. GRPO is a reinforcement-style method used for objectives like reasoning where you optimize against a reward signal.' },
        { q: 'Why did my fine-tune train fine but behave badly at inference?', a: 'Almost always a chat-template or tokenization mismatch between training and inference, or loss being computed over the prompt instead of just the completion. Render conversations with the tokenizer chat template consistently in both phases and mask prompt tokens during training.' },
        { q: 'When should I choose FSDP over DeepSpeed?', a: 'Both shard state across GPUs. FSDP is well integrated with PyTorch and Accelerate and is a strong default for pure multi-GPU training. DeepSpeed ZeRO adds staged sharding plus CPU and NVMe offload, which helps when you need to push a very large model onto limited hardware.' },
        { q: 'Do I need to merge my LoRA adapters before deployment?', a: 'Not necessarily. You can load adapters on top of the base model at serving time for flexibility, or merge them into the base weights to produce a single standalone model that is simpler to serve with engines like vLLM. Support helps you pick based on your deployment path.' },
      ]}
      ctaHref="/hugging-face-proxy-job-support/"
      ctaLabel="Get Hugging Face Support"
    />
  );
}
