import type { LandingPageConfig } from '../landing-pages';
import {
  awsServicePage,
  relatedLinks,
  awsServiceFaqs,
  EXISTING,
  AWS_HUB_LINK,
  SAGEMAKER_AI_HUB_LINK,
  AWS_PRODUCTION_LINK,
  AWS_INTERVIEW_HUB_LINK,
} from './shared';

const infraRelated = (self: string) =>
  relatedLinks({
    geoLinks: [AWS_HUB_LINK, SAGEMAKER_AI_HUB_LINK],
    techLinks: [
      { label: 'AWS Trainium', href: '/aws-trainium-job-support/' },
      { label: 'AWS Inferentia', href: '/aws-inferentia-job-support/' },
    ],
    problemLink: AWS_PRODUCTION_LINK,
    proxyLink: AWS_INTERVIEW_HUB_LINK,
    additionalLinks: [
      { label: 'AWS Trainium', href: '/aws-trainium-job-support/' },
      { label: 'AWS Inferentia', href: '/aws-inferentia-job-support/' },
      { label: 'AWS Neuron SDK', href: '/aws-neuron-sdk-job-support/' },
      { label: 'EC2 GPU for AI', href: '/aws-ec2-gpu-ai-job-support/' },
      { label: 'EKS for AI/ML', href: '/aws-eks-ai-ml-job-support/' },
      { label: 'ECS & Fargate for AI', href: '/aws-ecs-fargate-ai-job-support/' },
      SAGEMAKER_AI_HUB_LINK, EXISTING.devopsUsa,
    ].filter((l) => l.href !== self),
  });

// ─── AWS Trainium ────────────────────────────────────────────────────────────

export const trainium: LandingPageConfig = awsServicePage({
  slug: 'aws-trainium-job-support',
  title: 'AWS Trainium Support — Cost-Efficient LLM & Model Training',
  description:
    'Real-time AWS Trainium support: distributed and LLM training on Trainium, the Neuron SDK, HyperPod integration, current Trainium generations, and cost-efficient large-scale training on AWS.',
  keywords: [
    'AWS Trainium support', 'Trainium training', 'Trainium LLM training', 'Trainium Neuron',
    'Trainium HyperPod', 'AWS AI training accelerator',
  ],
  h1: 'AWS Trainium Support — Train Large Models at Lower Cost',
  tagline:
    'Trainium is AWS’s training accelerator for cost-efficient large-scale training. We help you compile, distribute, and scale on it.',
  heroEyebrow: 'AWS Trainium',
  painIntro:
    'GPU training costs high, or curious whether Trainium can cut them without a painful migration? Trainium needs the Neuron toolchain and the right setup.',
  heroVariant:
    'AWS Trainium is a purpose-built accelerator for training, offering strong price-performance for LLM and large-model training. We help you compile models with the AWS Neuron SDK, port PyTorch training to Trainium, run distributed training (including on HyperPod), handle checkpointing and recovery, and evaluate cost vs GPU — so large training runs finish reliably and affordably on current Trainium generations.',
  faqs: awsServiceFaqs('AWS Trainium', 'We help you compile with Neuron, port PyTorch training, run distributed training on Trainium and HyperPod, and evaluate cost vs GPU.'),
  relatedLinks: infraRelated('/aws-trainium-job-support/'),
});

// ─── AWS Inferentia ──────────────────────────────────────────────────────────

export const inferentia: LandingPageConfig = awsServicePage({
  slug: 'aws-inferentia-job-support',
  title: 'AWS Inferentia Support — Low-Cost, High-Throughput Inference',
  description:
    'Real-time AWS Inferentia support: model serving and inference acceleration, the Neuron SDK, model compilation, and cost-efficient production inference on AWS.',
  keywords: [
    'AWS Inferentia support', 'Inferentia inference', 'Inferentia Neuron', 'Inferentia model serving',
    'inference acceleration AWS', 'AWS AI inference accelerator',
  ],
  h1: 'AWS Inferentia Support — Serve Models Faster and Cheaper',
  tagline:
    'Inferentia accelerates inference at lower cost than GPUs for many models. We help you compile, deploy, and tune it.',
  heroEyebrow: 'AWS Inferentia',
  painIntro:
    'Inference cost dominating your bill, or model not compiling cleanly for Inferentia? The Neuron toolchain and model support need care.',
  heroVariant:
    'AWS Inferentia is a purpose-built inference accelerator offering high throughput at lower cost for supported models. We help you compile models with the AWS Neuron SDK, deploy on Inferentia-backed instances (including via SageMaker), tune batching and throughput, validate accuracy after compilation, and compare cost and latency against GPU inference — so production serving is fast and economical.',
  faqs: awsServiceFaqs('AWS Inferentia', 'We help you compile models with Neuron, deploy on Inferentia, tune throughput, and compare cost/latency vs GPU inference.'),
  relatedLinks: infraRelated('/aws-inferentia-job-support/'),
});

// ─── AWS Neuron SDK ──────────────────────────────────────────────────────────

export const neuronSdk: LandingPageConfig = awsServicePage({
  slug: 'aws-neuron-sdk-job-support',
  title: 'AWS Neuron SDK Support — Compile Models for Trainium & Inferentia',
  description:
    'Real-time AWS Neuron SDK support: model compilation, PyTorch on Neuron, Trainium and Inferentia toolchain, tracing, and debugging compilation for AWS AI accelerators.',
  keywords: [
    'AWS Neuron SDK support', 'Neuron compilation', 'Neuron PyTorch', 'Neuron Trainium Inferentia',
    'Neuron tracing', 'AWS accelerator toolchain',
  ],
  h1: 'AWS Neuron SDK Support — Get Models Running on Trainium & Inferentia',
  tagline:
    'The Neuron SDK is the bridge to Trainium and Inferentia. We help you compile, trace, and debug it.',
  heroEyebrow: 'AWS Neuron SDK',
  painIntro:
    'A model that will not compile for Neuron, unsupported ops, or degraded accuracy after compilation? The Neuron toolchain has real gotchas.',
  heroVariant:
    'The AWS Neuron SDK compiles and runs models on Trainium and Inferentia, integrating with PyTorch (and other frameworks). We help you set up the Neuron toolchain, compile and trace models, handle unsupported operators and fallbacks, validate accuracy and performance after compilation, and debug compilation and runtime errors — so your training and inference workloads run on AWS accelerators reliably.',
  faqs: awsServiceFaqs('AWS Neuron SDK', 'We help you compile and trace models, handle unsupported operators, validate accuracy, and debug Neuron compilation and runtime errors.'),
  relatedLinks: infraRelated('/aws-neuron-sdk-job-support/'),
});

// ─── EC2 GPU for AI ──────────────────────────────────────────────────────────

export const ec2Gpu: LandingPageConfig = awsServicePage({
  slug: 'aws-ec2-gpu-ai-job-support',
  title: 'AWS EC2 GPU for AI Support — Training & Inference on GPU Instances',
  description:
    'Real-time AWS EC2 GPU support for AI: GPU instance selection, LLM training and inference, distributed training, EFA and FSx for Lustre, and high-performance AI infrastructure on AWS.',
  keywords: [
    'AWS EC2 GPU AI support', 'EC2 GPU instances AI', 'GPU LLM training AWS',
    'EC2 GPU inference', 'EFA distributed training', 'FSx Lustre AI',
  ],
  h1: 'AWS EC2 GPU for AI Support — Right-Size and Scale GPU Workloads',
  tagline:
    'When you run AI directly on EC2 GPUs, instance choice, networking, and storage decide performance and cost. We help you get it right.',
  heroEyebrow: 'EC2 GPU for AI',
  painIntro:
    'InsufficientInstanceCapacity on GPU instances, slow distributed training, or GPU cost out of control? Self-managed GPU AI is unforgiving.',
  heroVariant:
    'Running AI on EC2 GPU instances gives control but demands the right choices. We help you select current GPU instance families for training and inference, set up distributed training with Elastic Fabric Adapter (EFA) and high-performance storage (FSx for Lustre, S3, EBS), handle capacity and spot, right-size for cost, and decide when EC2 GPU vs SageMaker vs EKS is the better home for your workload — without chasing every transient instance SKU.',
  faqs: awsServiceFaqs('AWS EC2 GPU for AI', 'We help you select GPU instances, set up EFA and high-performance storage, handle capacity and cost, and choose between EC2, SageMaker, and EKS.'),
  relatedLinks: infraRelated('/aws-ec2-gpu-ai-job-support/'),
});

// ─── EKS for AI/ML ───────────────────────────────────────────────────────────

export const eksAi: LandingPageConfig = awsServicePage({
  slug: 'aws-eks-ai-ml-job-support',
  title: 'AWS EKS for AI/ML Support — GPU, vLLM, Ray & KServe Inference',
  description:
    'Real-time AWS EKS for AI/ML support: GPU scheduling, vLLM and KServe inference, Ray on EKS, GenAI workloads, and Bedrock/SageMaker + EKS architecture on AWS.',
  keywords: [
    'AWS EKS AI ML support', 'EKS GPU', 'vLLM on EKS', 'Ray on EKS', 'KServe EKS',
    'EKS GenAI inference', 'EKS SageMaker Bedrock',
  ],
  h1: 'AWS EKS for AI/ML Support — Run AI Workloads on Kubernetes',
  tagline:
    'For teams standardized on Kubernetes, EKS runs training and inference. We help you schedule GPUs and serve models reliably.',
  heroEyebrow: 'EKS for AI/ML',
  painIntro:
    'GPU pods stuck Pending, vLLM or KServe serving misconfigured, or unsure how EKS fits alongside SageMaker and Bedrock? Kubernetes AI has its own failure modes.',
  heroVariant:
    'Amazon EKS runs AI/ML workloads on Kubernetes — GPU scheduling, distributed training, and model serving. We help you configure GPU nodes and scheduling (device plugins, Karpenter), serve LLMs with vLLM and KServe, run Ray on EKS for distributed workloads, host Bedrock-application backends and containerized inference, and design EKS-plus-SageMaker/Bedrock architectures — cross-linking your existing Kubernetes and DevOps work.',
  faqs: awsServiceFaqs('AWS EKS for AI/ML', 'We help you schedule GPUs, serve models with vLLM and KServe, run Ray on EKS, and design EKS + SageMaker/Bedrock architectures.'),
  relatedLinks: infraRelated('/aws-eks-ai-ml-job-support/'),
});

// ─── ECS & Fargate for AI ────────────────────────────────────────────────────

export const ecsFargateAi: LandingPageConfig = awsServicePage({
  slug: 'aws-ecs-fargate-ai-job-support',
  title: 'AWS ECS & Fargate for AI Support — Containerized GenAI & Inference',
  description:
    'Real-time AWS ECS and Fargate for AI support: containerized Bedrock applications, serverless AI containers, container inference, ECR model images, and production GenAI on AWS.',
  keywords: [
    'AWS ECS AI support', 'Fargate AI', 'ECS Bedrock', 'containerized GenAI AWS',
    'ECR model images', 'container inference AWS',
  ],
  h1: 'AWS ECS & Fargate for AI Support — Ship GenAI in Containers',
  tagline:
    'ECS and Fargate run containerized Bedrock apps and inference without managing Kubernetes. We help you build and scale them.',
  heroEyebrow: 'ECS & Fargate for AI',
  painIntro:
    'Want to run a Bedrock application or container inference without a full Kubernetes stack? ECS with Fargate is often the simpler path — done right.',
  heroVariant:
    'Amazon ECS with AWS Fargate runs containerized AI workloads serverlessly — Bedrock-backed applications, API layers, and CPU/lightweight inference — while ECR stores your model-serving images. We help you containerize Bedrock apps, design ECS services and task definitions, use Fargate for serverless scaling, manage ECR images and CI/CD, and decide between ECS/Fargate, EKS, and Lambda for your GenAI workload.',
  faqs: awsServiceFaqs('AWS ECS & Fargate for AI', 'We help you containerize Bedrock apps, design ECS/Fargate services, manage ECR images, and choose between ECS, EKS, and Lambda.'),
  relatedLinks: infraRelated('/aws-ecs-fargate-ai-job-support/'),
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const awsInfraPages: LandingPageConfig[] = [
  trainium,
  inferentia,
  neuronSdk,
  ec2Gpu,
  eksAi,
  ecsFargateAi,
];
