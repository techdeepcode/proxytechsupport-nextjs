import type { LandingPageConfig } from '../landing-pages';
import {
  hfServicePage,
  relatedLinks,
  hfServiceFaqs,
  EXISTING,
  HF_HUB_LINK,
  HF_INTERVIEW_HUB_LINK,
  HF_PRODUCTION_LINK,
  HF_DIFFUSERS_LINK,
  HF_QLORA_LINK,
  HF_QUANT_LINK,
  HF_GPU_LINK,
  HF_ENDPOINTS_LINK,
  HF_SPACES_LINK,
  HF_ACCELERATE_LINK,
} from './shared';

const T2I_LINK = { label: 'Text-to-image job support', href: '/huggingface-text-to-image-job-support/' };
const DIFF_FT_LINK = { label: 'Diffusion fine-tuning job support', href: '/huggingface-diffusion-fine-tuning-job-support/' };

// ─── Diffusers (hub) ──────────────────────────────────────────────────────────

export const diffusers: LandingPageConfig = hfServicePage({
  slug: 'diffusers-job-support',
  title: 'Diffusers Job Support | Pipelines, Schedulers & Production Image/Video Generation',
  description:
    'Job support for Hugging Face Diffusers — text-to-image, image-to-image, inpainting and video pipelines, schedulers, LoRA, memory optimization, and serving diffusion models in production. Supports Flux, Stable Diffusion, SD3.5 and more.',
  keywords: [
    'Diffusers job support', 'Hugging Face Diffusers', 'diffusion pipeline scheduler', 'Flux SD3.5 Diffusers',
    'diffusion memory optimization', 'serve diffusion model', 'text to image production',
  ],
  h1: 'Diffusers Job Support — From Pipeline to Production Media Generation',
  tagline:
    'Real-time help with Hugging Face Diffusers — pipelines and schedulers, Flux/Stable Diffusion/SD3.5 models, LoRA, memory optimization, and deploying diffusion models that stay fast and stable in production.',
  heroEyebrow: 'Diffusers Support',
  painIntro:
    'Diffusion generation too slow, running out of VRAM, or producing inconsistent quality — and not sure which pipeline, scheduler, or optimization to reach for? Diffusers is a deep library and the defaults are rarely optimal. We help you get quality and speed together.',
  heroVariant:
    'Diffusers is Hugging Face’s library for diffusion models across image and video. The mental model is: prompt → text encoder → latent noise → iterative denoising (guided by a scheduler) → VAE decode → generated media. We help you use it well — choosing pipelines (text-to-image, image-to-image, inpainting, and video) and current model families (Flux/FLUX.2, Stable Diffusion, SD3.5), picking and tuning schedulers for the quality/step-count trade-off, applying LoRA adapters for style/subject control, and — critically for production — memory optimization (attention slicing, VAE slicing/tiling, CPU offload, and quantization including 4/8-bit) and inference speedups. We also help serve diffusion models behind an API or on Inference Endpoints/Spaces with sane batching and cold-start handling. Note Diffusers is still on a 0.x line and moves quickly, so we track the current APIs.',
  faqs: [
    ...hfServiceFaqs('Diffusers', 'We help with pipelines, schedulers, LoRA, memory optimization, and serving diffusion models (Flux, Stable Diffusion, SD3.5) in production.'),
    {
      question: 'Diffusion generation runs out of VRAM — how do I fix it?',
      answer:
        'Diffusers gives you several memory levers: attention slicing, VAE slicing and tiling for large images, sequential or model CPU offload, and quantization of the transformer/UNet. You can often run large models like Flux on modest GPUs by combining these. We help you apply the right combination for your GPU and target resolution without killing throughput.',
    },
    {
      question: 'How do I make generation faster without losing quality?',
      answer:
        'Fewer, better steps (choosing an efficient scheduler), the right guidance scale, batching, and where applicable distilled/turbo variants or torch.compile. Video and high-res push memory and time hard, so the schedule and optimization choices matter more. We tune steps, scheduler, and precision against your quality bar.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      T2I_LINK,
    ],
    techLinks: [DIFF_FT_LINK, HF_QLORA_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_QUANT_LINK, HF_GPU_LINK, HF_ENDPOINTS_LINK, HF_SPACES_LINK,
      EXISTING.genai, EXISTING.modelDeployment,
    ],
  }),
});

// ─── Text-to-image ─────────────────────────────────────────────────────────────

export const textToImage: LandingPageConfig = hfServicePage({
  slug: 'huggingface-text-to-image-job-support',
  title: 'Text-to-Image Job Support | Flux, Stable Diffusion & SD3.5 with Diffusers',
  description:
    'Job support for text-to-image generation with Diffusers — prompt engineering, model choice (Flux, Stable Diffusion, SD3.5), guidance and schedulers, LoRA styles, ControlNet, and production serving of image generation.',
  keywords: [
    'text to image job support', 'Flux Stable Diffusion SD3.5', 'Diffusers text to image', 'ControlNet LoRA styles',
    'image generation production', 'prompt guidance scheduler', 'text to image serving',
  ],
  h1: 'Text-to-Image Job Support — Flux, Stable Diffusion & SD3.5 in Production',
  tagline:
    'Real-time help building text-to-image features — model selection (Flux, SD, SD3.5), guidance and schedulers, LoRA styles and ControlNet, and serving generation at scale with Diffusers.',
  heroEyebrow: 'Text-to-Image Support',
  painIntro:
    'Images that miss the prompt, inconsistent style across generations, or a generation service that is too slow and expensive to ship? Text-to-image quality and cost come from model, guidance, scheduler, and serving choices working together. We help you dial them in.',
  heroVariant:
    'Text-to-image is the most common diffusion use case, and Diffusers supports the current model families — Flux/FLUX.2, Stable Diffusion, and SD3.5 — through a consistent pipeline API. We help you select the right model for your quality/speed/licence needs, engineer prompts and negative prompts, tune guidance scale and scheduler/steps for the fidelity you want, apply LoRA adapters for consistent brand or subject style, and add conditioning (ControlNet, image-to-image, inpainting) for controllable generation. On the production side we cover batching, memory optimization, safety filtering, and serving behind an API or on Inference Endpoints/Spaces with predictable latency and cost. The goal is generation that reliably matches intent, not one-off lucky outputs.',
  faqs: [
    ...hfServiceFaqs('text-to-image generation', 'We help with model choice (Flux/SD/SD3.5), guidance, schedulers, LoRA styles, ControlNet, and serving image generation in production.'),
    {
      question: 'Which text-to-image model should I use?',
      answer:
        'It is a trade-off of quality, speed, VRAM, and licence. Flux-family models push quality; Stable Diffusion / SD3.5 offer strong ecosystems, many LoRAs, and lighter variants. We help you match a model to your resolution, latency budget, hardware, and commercial-use constraints, and benchmark a couple of candidates on your actual prompts.',
    },
    {
      question: 'How do I keep a consistent style or subject across images?',
      answer:
        'LoRA adapters trained on your style or subject, plus conditioning (ControlNet, image-to-image, IP-adapters) and fixed seeds where needed. We help you train or select the right LoRA and combine conditioning so brand style or a specific character stays consistent across generations.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_DIFFUSERS_LINK,
    ],
    techLinks: [DIFF_FT_LINK, HF_SPACES_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_QLORA_LINK, HF_QUANT_LINK, HF_GPU_LINK, HF_ENDPOINTS_LINK,
      EXISTING.genai, EXISTING.modelDeployment,
    ],
  }),
});

// ─── Diffusion fine-tuning ──────────────────────────────────────────────────────

export const diffusionFineTuning: LandingPageConfig = hfServicePage({
  slug: 'huggingface-diffusion-fine-tuning-job-support',
  title: 'Diffusion Fine-Tuning Job Support | LoRA & DreamBooth for Flux/Stable Diffusion',
  description:
    'Job support for fine-tuning diffusion models — LoRA and DreamBooth training on Flux and Stable Diffusion with Diffusers, dataset prep, hyperparameters, FP8/bitsandbytes memory savings, and shipping custom style/subject models.',
  keywords: [
    'diffusion fine-tuning job support', 'LoRA DreamBooth Flux', 'fine-tune Stable Diffusion', 'Diffusers training scripts',
    'custom style subject model', 'diffusion LoRA training', 'FP8 diffusion training',
  ],
  h1: 'Diffusion Fine-Tuning Job Support — Custom Style & Subject Models',
  tagline:
    'Real-time help fine-tuning diffusion models — LoRA and DreamBooth on Flux and Stable Diffusion, dataset prep, hyperparameters, and memory-efficient training that fits your GPUs.',
  heroEyebrow: 'Diffusion Fine-Tuning Support',
  painIntro:
    'Trying to teach a diffusion model your product, character, or brand style — but getting overfitting, artifacts, or out-of-memory during training? Diffusion fine-tuning is finicky, and dataset and hyperparameter choices dominate the result. We help you get a clean custom model.',
  heroVariant:
    'Diffusers ships training scripts for the common fine-tuning approaches — LoRA (lightweight adapters for style/subject) and DreamBooth (subject-driven fine-tuning) — for current models including Flux and Stable Diffusion. We help you build a good training set (captioning, resolution, diversity, avoiding leakage), choose the method and hyperparameters (rank, learning rate, steps, regularisation images for DreamBooth), and fit training in memory with bitsandbytes 4/8-bit and FP8 training via torchao where supported. We also help you evaluate the result (does it generalise or just memorise?), export and load the adapter, and combine multiple LoRAs at inference. This turns a base model into one that reliably renders your specific subject or style.',
  faqs: [
    ...hfServiceFaqs('diffusion fine-tuning', 'We help with LoRA/DreamBooth training on Flux/Stable Diffusion — dataset prep, hyperparameters, memory-efficient training, and evaluating the result.'),
    {
      question: 'LoRA or DreamBooth for a diffusion model?',
      answer:
        'LoRA trains small adapters — fast, cheap, portable, and great for styles and light subject learning; you can stack several at inference. DreamBooth fine-tunes more deeply for a specific subject and can capture it more faithfully, at higher cost and overfitting risk (mitigated with regularisation images). Many teams use LoRA-based DreamBooth to get both. We help you choose based on fidelity needs and budget.',
    },
    {
      question: 'My fine-tune overfits or produces artifacts — why?',
      answer:
        'Usually too many steps, too high a learning rate, too small or too uniform a dataset, or missing regularisation. The model memorises instead of generalising, or bakes in artifacts. We tune steps/LR, improve dataset diversity and captions, add regularisation images, and validate on held-out prompts so the model generalises.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_DIFFUSERS_LINK,
    ],
    techLinks: [HF_QLORA_LINK, T2I_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_QUANT_LINK, HF_GPU_LINK, HF_ACCELERATE_LINK,
      EXISTING.fineTuning, EXISTING.loraQlora, EXISTING.genai,
    ],
  }),
});

export const huggingFaceDiffusersPages: LandingPageConfig[] = [
  diffusers,
  textToImage,
  diffusionFineTuning,
];
