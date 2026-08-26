import type { LandingPageConfig } from '../landing-pages';
import {
  awsPage,
  awsServicePage,
  relatedLinks,
  jobSupportHighlights,
  awsServiceFaqs,
  EXISTING,
  AWS_HUB_LINK,
  SAGEMAKER_HUB_LINK,
  SAGEMAKER_AI_HUB_LINK,
  MLOPS_HUB_LINK,
  AWS_PRODUCTION_LINK,
} from './shared';

// ─── SageMaker AI hub ────────────────────────────────────────────────────────

export const sageMakerAiHub: LandingPageConfig = awsPage({
  slug: 'amazon-sagemaker-ai-job-support',
  title: 'Amazon SageMaker AI Job Support — Training, Inference & MLOps',
  description:
    'Real-time Amazon SageMaker AI job support: training jobs, distributed training, HyperPod, JumpStart, real-time and serverless inference, Pipelines, Managed MLflow, Model Registry, and production MLOps on AWS. Same-day.',
  keywords: [
    'Amazon SageMaker AI job support', 'SageMaker AI training', 'SageMaker AI inference',
    'SageMaker HyperPod support', 'SageMaker Pipelines support', 'SageMaker Managed MLflow',
    'SageMaker Model Registry', 'SageMaker MLOps support',
  ],
  h1: 'Amazon SageMaker AI Job Support — Train, Deploy & Operate ML at Scale',
  tagline:
    'The full ML platform: real-time help with SageMaker AI training, inference, HyperPod, JumpStart, Pipelines, Managed MLflow, and Model Registry on your live project.',
  heroEyebrow: 'Amazon SageMaker AI Hub — Updated August 2026',
  painIntro:
    'A training job dying on GPU capacity, an endpoint stuck in Failed, a Pipeline that will not execute, or MLflow tracking not showing runs? SageMaker AI is deep, and production issues hit fast.',
  heroVariant:
    'SageMaker AI is the machine-learning capability of the Amazon SageMaker platform — everything from data prep to training, tuning, deployment, and monitoring. We help across the whole lifecycle: Studio and JupyterLab, training jobs and distributed training, foundation-model training and fine-tuning, HyperPod for large-scale clusters, JumpStart for pre-built models, real-time endpoints, serverless and asynchronous inference, Batch Transform, inference optimization and autoscaling, Pipelines, Managed MLflow, Model Registry, Experiments, automatic model tuning, Processing Jobs, Feature Store, Model Dashboard, model evaluation, and governance — plus the IAM, VPC, and cost design around it.',
  geoLine:
    'Amazon SageMaker AI support for engineers across USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover SageMaker AI training, HyperPod, JumpStart, real-time/serverless/async inference, Batch Transform, Pipelines, Managed MLflow, Model Registry, Feature Store, and model governance.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What Amazon SageMaker AI job support do you provide?',
      answer:
        'Real-time help across the ML lifecycle — training jobs and distributed training, fine-tuning and foundation-model training, HyperPod, JumpStart, real-time/serverless/asynchronous inference and Batch Transform, inference optimization and autoscaling, Pipelines, Managed MLflow, Model Registry, Experiments, automatic model tuning, Processing Jobs, Feature Store, model evaluation and governance — plus IAM, VPC, and cost. We work on your real project, same-day.',
    },
    {
      question: 'Do you fix SageMaker AI production incidents?',
      answer:
        'Yes. Training-job failures (container, data, GPU capacity/InsufficientInstanceCapacity), endpoint deployment failures and stuck states, inference latency over SLA, autoscaling misbehavior, model-artifact errors, MLflow tracking issues, and Pipeline execution failures. See our SageMaker inference troubleshooting page for endpoint-specific incidents.',
    },
    {
      question: 'Do you help with SageMaker MLOps?',
      answer:
        'Yes. SageMaker Pipelines for orchestration, Managed MLflow for experiment tracking and model management, Model Registry for versioning and promotion, and CI/CD integration with CodePipeline, CodeBuild, GitHub Actions, and IaC. See our AWS MLOps hub for the broader FMOps/LLMOps picture.',
    },
    {
      question: 'Can you help with distributed and large-scale training?',
      answer:
        'Yes. Distributed training strategies, HyperPod clusters for resilient large-scale training, GPU/accelerator selection (including Trainium), data and model parallelism, and cost control. We help you get long training runs to complete reliably.',
    },
    {
      question: 'How do I get started and is it confidential?',
      answer:
        'Message us on WhatsApp with your SageMaker AI task or incident. We assign the right expert — usually same-day. Every engagement is confidential and NDAs are available.',
    },
  ],
  useCasesSection: {
    title: 'Amazon SageMaker AI Situations We Help With',
    cases: [
      'A training job failing on container, data, or GPU capacity errors',
      'An endpoint stuck in Creating/Failed, or inference latency over SLA',
      'Choosing between real-time, serverless, asynchronous, and Batch Transform inference',
      'Building a Pipeline with Processing, Training, and Model steps',
      'Setting up Managed MLflow tracking and Model Registry promotion',
      'Distributed or HyperPod training for large models that must complete reliably',
    ],
  },
  proxySection: {
    title: 'SageMaker AI Interview & Career Support',
    intro:
      'Interviewing for a SageMaker or AWS ML Engineer role? We prepare you and can back you live.',
    points: [
      'Training, inference, and MLOps system-design preparation',
      'Pipelines, Managed MLflow, and Model Registry questions',
      'Live, discreet proxy interview support during the real interview',
      'Profile positioning for SageMaker and AWS ML Engineer roles',
      'Confidential, in-house AWS AI experts — NDAs available',
    ],
  },
  bottomCTAHeading: 'Need Amazon SageMaker AI Job Support or a Production Fix Now?',
  bottomCTABody:
    'In-house SageMaker AI experts available same-day — training, inference, Pipelines, MLflow, and Model Registry. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [SAGEMAKER_HUB_LINK, AWS_HUB_LINK],
    techLinks: [
      { label: 'SageMaker training support', href: '/amazon-sagemaker-ai-training-job-support/' },
      { label: 'SageMaker inference support', href: '/amazon-sagemaker-ai-inference-job-support/' },
    ],
    problemLink: { label: 'SageMaker inference troubleshooting', href: '/amazon-sagemaker-inference-troubleshooting-support/' },
    proxyLink: { label: 'SageMaker interview support', href: '/amazon-sagemaker-interview-proxy-support/' },
    additionalLinks: [
      { label: 'SageMaker training', href: '/amazon-sagemaker-ai-training-job-support/' },
      { label: 'SageMaker HyperPod', href: '/amazon-sagemaker-hyperpod-job-support/' },
      { label: 'SageMaker JumpStart', href: '/amazon-sagemaker-jumpstart-job-support/' },
      { label: 'SageMaker inference', href: '/amazon-sagemaker-ai-inference-job-support/' },
      { label: 'SageMaker Pipelines', href: '/amazon-sagemaker-pipelines-job-support/' },
      { label: 'SageMaker Managed MLflow', href: '/amazon-sagemaker-mlflow-job-support/' },
      { label: 'SageMaker Model Registry', href: '/amazon-sagemaker-model-registry-job-support/' },
      SAGEMAKER_HUB_LINK, MLOPS_HUB_LINK, AWS_PRODUCTION_LINK,
      EXISTING.mlops, EXISTING.modelDeployment, EXISTING.fineTuning,
      { label: 'SageMaker AI production architecture (2026 guide)', href: '/blog/amazon-sagemaker-production-architecture-2026/' },
      { label: 'SageMaker MLOps: Pipelines, MLflow & Model Registry', href: '/blog/amazon-sagemaker-mlops-pipelines-mlflow-model-registry/' },
    ],
  }),
});

const smaiRelated = (self: string) =>
  relatedLinks({
    geoLinks: [SAGEMAKER_AI_HUB_LINK, AWS_HUB_LINK],
    techLinks: [MLOPS_HUB_LINK, SAGEMAKER_HUB_LINK],
    problemLink: { label: 'SageMaker inference troubleshooting', href: '/amazon-sagemaker-inference-troubleshooting-support/' },
    proxyLink: { label: 'SageMaker interview support', href: '/amazon-sagemaker-interview-proxy-support/' },
    additionalLinks: [
      { label: 'SageMaker training', href: '/amazon-sagemaker-ai-training-job-support/' },
      { label: 'SageMaker HyperPod', href: '/amazon-sagemaker-hyperpod-job-support/' },
      { label: 'SageMaker JumpStart', href: '/amazon-sagemaker-jumpstart-job-support/' },
      { label: 'SageMaker inference', href: '/amazon-sagemaker-ai-inference-job-support/' },
      { label: 'SageMaker Pipelines', href: '/amazon-sagemaker-pipelines-job-support/' },
      { label: 'SageMaker Managed MLflow', href: '/amazon-sagemaker-mlflow-job-support/' },
      { label: 'SageMaker Model Registry', href: '/amazon-sagemaker-model-registry-job-support/' },
      SAGEMAKER_AI_HUB_LINK,
      { label: 'SageMaker AI production architecture (2026 guide)', href: '/blog/amazon-sagemaker-production-architecture-2026/' },
      { label: 'SageMaker MLOps: Pipelines, MLflow & Model Registry (guide)', href: '/blog/amazon-sagemaker-mlops-pipelines-mlflow-model-registry/' },
      { label: 'SageMaker inference troubleshooting (guide)', href: '/blog/amazon-sagemaker-inference-troubleshooting-guide/' },
    ].filter((l) => l.href !== self),
  });

// ─── SageMaker AI training ───────────────────────────────────────────────────

export const sageMakerTraining: LandingPageConfig = awsServicePage({
  slug: 'amazon-sagemaker-ai-training-job-support',
  title: 'SageMaker Training Support — Jobs, Distributed & Foundation-Model Training',
  description:
    'Real-time Amazon SageMaker AI training support: training jobs, distributed training, foundation-model training and fine-tuning, automatic model tuning, Processing Jobs, and training-failure debugging on AWS.',
  keywords: [
    'SageMaker training support', 'SageMaker training jobs', 'SageMaker distributed training',
    'SageMaker fine-tuning', 'SageMaker automatic model tuning', 'SageMaker training failure',
  ],
  h1: 'Amazon SageMaker AI Training Support — Get Training Jobs to Complete Reliably',
  tagline:
    'Training jobs fail for specific reasons — data, container, capacity, or distribution. We help you get them to complete, tune, and scale.',
  heroEyebrow: 'SageMaker AI Training',
  painIntro:
    'A training job dying on InsufficientInstanceCapacity, a container error, or a distributed run that hangs? Long, expensive training runs need to succeed the first time.',
  heroVariant:
    'We help you across SageMaker AI training: configuring training jobs and input channels, choosing instance types and accelerators (GPU, Trainium), distributed training with data and model parallelism, foundation-model training and fine-tuning, automatic model tuning (hyperparameter optimization), Processing Jobs for data prep, spot and checkpointing for cost, and debugging failures (container, data, capacity, OOM). We also connect training into Pipelines and Managed MLflow so runs are tracked and reproducible.',
  faqs: awsServiceFaqs('SageMaker AI training', 'We help you configure training jobs, distributed training, fine-tuning, automatic model tuning, and cost controls, then debug training failures.'),
  useCasesSection: {
    title: 'SageMaker Training Situations We Help With',
    cases: [
      'Training jobs failing on InsufficientInstanceCapacity, container, or data errors',
      'Setting up distributed training with data or model parallelism',
      'Fine-tuning or foundation-model training that must complete reliably',
      'Automatic model tuning (hyperparameter optimization) that converges',
      'Cost control with spot instances and checkpointing',
      'Wiring training into Pipelines and Managed MLflow for reproducibility',
    ],
  },
  relatedLinks: smaiRelated('/amazon-sagemaker-ai-training-job-support/'),
});

// ─── SageMaker HyperPod ──────────────────────────────────────────────────────

export const sageMakerHyperPod: LandingPageConfig = awsServicePage({
  slug: 'amazon-sagemaker-hyperpod-job-support',
  title: 'SageMaker HyperPod Support — Resilient Large-Scale Model Training',
  description:
    'Real-time Amazon SageMaker HyperPod support: resilient distributed training clusters, foundation-model training, GPU/Trainium clusters, cluster health and recovery, and large-scale training operations on AWS.',
  keywords: [
    'SageMaker HyperPod support', 'HyperPod distributed training', 'HyperPod foundation model training',
    'HyperPod cluster support', 'large scale LLM training AWS', 'HyperPod Trainium',
  ],
  h1: 'Amazon SageMaker HyperPod Support — Train Large Models Without the Cluster Pain',
  tagline:
    'HyperPod is purpose-built for resilient, large-scale training. We help you run foundation-model and distributed training on it reliably.',
  heroEyebrow: 'SageMaker HyperPod',
  painIntro:
    'Large training runs failing halfway from a single node fault, wasting days of GPU time? HyperPod is built for exactly this resilience — with the right setup.',
  heroVariant:
    'SageMaker HyperPod provides persistent, resilient clusters for large-scale model training — automatic fault detection and recovery so long runs survive node failures, support for GPU and Trainium accelerators, and distributed-training frameworks. We help you provision and configure clusters, set up data and model parallelism, integrate the Neuron SDK for Trainium, handle checkpointing and recovery, monitor cluster health, and control cost — so foundation-model and large distributed training completes reliably.',
  faqs: awsServiceFaqs('SageMaker HyperPod', 'We help you provision resilient training clusters, configure distributed training and accelerators, and handle recovery, monitoring, and cost for large-scale training.'),
  relatedLinks: smaiRelated('/amazon-sagemaker-hyperpod-job-support/'),
});

// ─── SageMaker JumpStart ─────────────────────────────────────────────────────

export const sageMakerJumpStart: LandingPageConfig = awsServicePage({
  slug: 'amazon-sagemaker-jumpstart-job-support',
  title: 'SageMaker JumpStart Support — Pre-Built Models & Fast Deployment',
  description:
    'Real-time Amazon SageMaker JumpStart support: pre-built and foundation models, one-click deployment, fine-tuning, and moving JumpStart prototypes into governed production on AWS.',
  keywords: [
    'SageMaker JumpStart support', 'JumpStart foundation models', 'JumpStart deployment',
    'JumpStart fine-tuning', 'SageMaker pre-built models', 'JumpStart production',
  ],
  h1: 'Amazon SageMaker JumpStart Support — From Pre-Built Model to Production',
  tagline:
    'JumpStart gets you a working model fast. We help you fine-tune, deploy, and productionize it properly.',
  heroEyebrow: 'SageMaker JumpStart',
  painIntro:
    'JumpStart deployed a model in a click, but now you need to fine-tune it, control cost, and make it production-grade? The prototype-to-production gap is real.',
  heroVariant:
    'SageMaker JumpStart provides pre-built and foundation models with one-click deployment and example notebooks. We help you select the right JumpStart model, fine-tune it on your data, deploy it to the correct endpoint type, right-size instances for cost and latency, add monitoring and governance, and move from a JumpStart prototype into a reproducible, tracked production workflow with Pipelines, Managed MLflow, and Model Registry.',
  faqs: awsServiceFaqs('SageMaker JumpStart', 'We help you select, fine-tune, and deploy JumpStart models, then move them into governed, reproducible production.'),
  relatedLinks: smaiRelated('/amazon-sagemaker-jumpstart-job-support/'),
});

// ─── SageMaker AI inference ──────────────────────────────────────────────────

export const sageMakerInference: LandingPageConfig = awsServicePage({
  slug: 'amazon-sagemaker-ai-inference-job-support',
  title: 'SageMaker Inference Support — Endpoints, Serverless, Async & Batch',
  description:
    'Real-time Amazon SageMaker AI inference support: real-time endpoints, serverless and asynchronous inference, Batch Transform, multi-model endpoints, inference optimization, autoscaling, and GPU inference on AWS.',
  keywords: [
    'SageMaker inference support', 'SageMaker endpoints', 'SageMaker serverless inference',
    'SageMaker asynchronous inference', 'SageMaker Batch Transform', 'SageMaker autoscaling',
    'SageMaker GPU inference',
  ],
  h1: 'Amazon SageMaker AI Inference Support — Deploy Models the Right Way',
  tagline:
    'Real-time, serverless, asynchronous, or batch — the wrong inference choice costs you latency and money. We help you pick, deploy, and optimize.',
  heroEyebrow: 'SageMaker AI Inference',
  painIntro:
    'An endpoint stuck in Failed, latency over SLA, autoscaling that flaps, or cost that does not match your traffic? Inference is where most SageMaker production pain lives.',
  heroVariant:
    'We help you design SageMaker AI inference for production: choosing between real-time endpoints, serverless inference, asynchronous inference, and Batch Transform; multi-model and multi-container endpoints where appropriate; inference optimization and GPU/accelerator selection; autoscaling policies; container and model-artifact configuration; and cost right-sizing. When endpoints fail or latency spikes, we debug with CloudWatch metrics and logs and ship a stable fix. See the inference troubleshooting page for incident-specific help.',
  faqs: awsServiceFaqs('SageMaker AI inference', 'We help you choose endpoint types, optimize inference and autoscaling, right-size cost, and debug endpoint and latency failures.'),
  useCasesSection: {
    title: 'SageMaker Inference Situations We Help With',
    cases: [
      'An endpoint stuck in Creating/Failed or returning 5xx under load',
      'Choosing between real-time, serverless, asynchronous, and Batch Transform',
      'Inference latency over SLA and optimization for GPU/accelerators',
      'Autoscaling policies that match real traffic without flapping',
      'Multi-model endpoints to consolidate many models cost-effectively',
      'Right-sizing instances so inference cost matches throughput',
    ],
  },
  relatedLinks: smaiRelated('/amazon-sagemaker-ai-inference-job-support/'),
});

// ─── SageMaker Pipelines ─────────────────────────────────────────────────────

export const sageMakerPipelines: LandingPageConfig = awsServicePage({
  slug: 'amazon-sagemaker-pipelines-job-support',
  title: 'SageMaker Pipelines Support — ML Workflow Orchestration & CI/CD',
  description:
    'Real-time Amazon SageMaker Pipelines support: ML workflow orchestration, Processing/Training/Model steps, conditional steps, parametrization, CI/CD integration, and pipeline-failure debugging on AWS.',
  keywords: [
    'SageMaker Pipelines support', 'SageMaker ML pipeline', 'SageMaker Pipelines CI/CD',
    'SageMaker pipeline steps', 'SageMaker pipeline failure', 'SageMaker MLOps orchestration',
  ],
  h1: 'Amazon SageMaker Pipelines Support — Orchestrate Reproducible ML Workflows',
  tagline:
    'Pipelines turn ad-hoc ML scripts into reproducible, automated workflows. We help you build, parametrize, and debug them.',
  heroEyebrow: 'SageMaker Pipelines',
  painIntro:
    'A Pipeline that will not execute, steps failing to pass artifacts, or no clean path to CI/CD? Orchestration is where MLOps becomes real — or breaks.',
  heroVariant:
    'SageMaker Pipelines is the orchestration backbone for ML on SageMaker — chaining Processing, Training, Tuning, Model, and Conditional steps into reproducible, parametrized workflows. We help you design pipeline DAGs, pass artifacts and parameters between steps, add conditional logic and caching, integrate with Managed MLflow and Model Registry, wire CI/CD (CodePipeline, CodeBuild, GitHub Actions) and IaC, and debug execution failures. This is the core of a real SageMaker MLOps practice.',
  faqs: awsServiceFaqs('SageMaker Pipelines', 'We help you design pipeline DAGs, pass artifacts and parameters, add conditions and caching, integrate CI/CD, and debug pipeline execution failures.'),
  relatedLinks: smaiRelated('/amazon-sagemaker-pipelines-job-support/'),
});

// ─── SageMaker Managed MLflow ────────────────────────────────────────────────

export const sageMakerMlflow: LandingPageConfig = awsServicePage({
  slug: 'amazon-sagemaker-mlflow-job-support',
  title: 'SageMaker Managed MLflow Support — Experiment Tracking & Model Management',
  description:
    'Real-time Amazon SageMaker Managed MLflow support: experiment tracking, run comparison, model management, MLflow-to-Model-Registry promotion, and tracking-server setup and debugging on AWS.',
  keywords: [
    'SageMaker Managed MLflow support', 'SageMaker MLflow tracking', 'MLflow SageMaker setup',
    'MLflow experiment tracking AWS', 'MLflow Model Registry SageMaker', 'SageMaker MLflow issue',
  ],
  h1: 'Amazon SageMaker Managed MLflow Support — Track Experiments & Manage Models',
  tagline:
    'Managed MLflow gives you experiment tracking and model management without running your own server. We help you set it up and use it well.',
  heroEyebrow: 'SageMaker Managed MLflow',
  painIntro:
    'MLflow runs not showing up, artifacts not logging, or no clean promotion path to Model Registry? Experiment tracking is only useful when it is reliable and integrated.',
  heroVariant:
    'SageMaker Managed MLflow provides a fully managed MLflow experience — tracking servers, experiment and run tracking, run comparison, and model management, integrated with SageMaker AI and Model Registry. We help you set up tracking servers with the right IAM and networking, instrument training code to log params/metrics/artifacts, compare runs, register and promote models to Model Registry, and debug tracking and connectivity issues. We also help teams migrating from self-hosted MLflow.',
  faqs: awsServiceFaqs('SageMaker Managed MLflow', 'We help you set up tracking servers, instrument logging, compare runs, promote models to Model Registry, and debug tracking issues.'),
  relatedLinks: smaiRelated('/amazon-sagemaker-mlflow-job-support/'),
});

// ─── SageMaker Model Registry ────────────────────────────────────────────────

export const sageMakerModelRegistry: LandingPageConfig = awsServicePage({
  slug: 'amazon-sagemaker-model-registry-job-support',
  title: 'SageMaker Model Registry Support — Versioning, Approval & Promotion',
  description:
    'Real-time Amazon SageMaker Model Registry support: model versioning, model groups, approval workflows, promotion across environments, deployment integration, and governance for production ML on AWS.',
  keywords: [
    'SageMaker Model Registry support', 'SageMaker model versioning', 'SageMaker model approval',
    'SageMaker model promotion', 'model registry MLOps AWS', 'SageMaker model governance',
  ],
  h1: 'Amazon SageMaker Model Registry Support — Version, Approve & Promote Models',
  tagline:
    'Model Registry is where MLOps governance lives — versions, approval, and promotion. We help you operationalize it.',
  heroEyebrow: 'SageMaker Model Registry',
  painIntro:
    'No clean way to version models, approve them, and promote to production without manual copying? That gap is where bad models reach production.',
  heroVariant:
    'SageMaker Model Registry lets you catalog models in model groups with versions, metadata, approval status, and lineage, and integrates with Pipelines and deployment. We help you structure model groups, capture metadata and lineage, design approval workflows (manual and automated gates), promote versions across dev/staging/prod, integrate registry with CI/CD deployment, and enforce governance so only approved model versions reach production.',
  faqs: awsServiceFaqs('SageMaker Model Registry', 'We help you structure model groups and versions, design approval and promotion workflows, integrate CI/CD, and enforce model governance.'),
  relatedLinks: smaiRelated('/amazon-sagemaker-model-registry-job-support/'),
});

// ─── SageMaker inference troubleshooting ─────────────────────────────────────

export const sageMakerInferenceTroubleshooting: LandingPageConfig = awsServicePage({
  slug: 'amazon-sagemaker-inference-troubleshooting-support',
  title: 'SageMaker Inference Troubleshooting — Endpoint, Container & GPU Failures',
  description:
    'Fix Amazon SageMaker inference failures: endpoint deployment failures and stuck states, container errors, GPU capacity, autoscaling, timeouts, latency, and model-artifact errors. Live expert help.',
  keywords: [
    'SageMaker inference troubleshooting', 'SageMaker endpoint failure', 'SageMaker container error',
    'SageMaker GPU capacity', 'SageMaker endpoint stuck', 'SageMaker inference latency',
    'SageMaker model artifact error',
  ],
  h1: 'Amazon SageMaker Inference Troubleshooting — Diagnose & Fix Endpoint Failures',
  tagline:
    'Symptoms, root causes, diagnostics, and the fix — for the SageMaker inference failures that break production.',
  heroEyebrow: 'SageMaker Inference Troubleshooting',
  painIntro:
    'An endpoint stuck in Creating or Failed, a container that will not start, GPU capacity errors, or latency over SLA? Each SageMaker inference failure has a specific, diagnosable cause.',
  heroVariant:
    'We work SageMaker inference incidents methodically with CloudWatch metrics and logs: endpoint deployment failures and stuck states (IAM, container, model artifact, health checks), container startup and inference-code errors, InsufficientInstanceCapacity and GPU availability, autoscaling misbehavior, timeouts and latency, and multi-model endpoint issues. For each we give you symptoms, likely root causes, diagnostic steps, the fix, validation, and prevention — so the endpoint is stable and the next deploy is clean.',
  faqs: awsServiceFaqs('SageMaker inference failure', 'We diagnose and fix endpoint deployment failures, container errors, GPU capacity, autoscaling, timeouts, and latency using CloudWatch metrics and logs.'),
  useCasesSection: {
    title: 'SageMaker Inference Failures We Diagnose & Fix',
    cases: [
      'Endpoint stuck in Creating/Failed — IAM, container, model artifact, or health-check causes',
      'Container startup and inference-code errors',
      'InsufficientInstanceCapacity and GPU availability problems',
      'Autoscaling that flaps or does not scale with traffic',
      'Timeouts and latency over SLA',
      'Multi-model endpoint loading and routing issues',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: [SAGEMAKER_AI_HUB_LINK, AWS_PRODUCTION_LINK],
    techLinks: [
      { label: 'SageMaker inference support', href: '/amazon-sagemaker-ai-inference-job-support/' },
      { label: 'EC2 GPU for AI support', href: '/aws-ec2-gpu-ai-job-support/' },
    ],
    problemLink: AWS_PRODUCTION_LINK,
    proxyLink: EXISTING.mlopsProxy,
    additionalLinks: [
      SAGEMAKER_AI_HUB_LINK, MLOPS_HUB_LINK, EXISTING.modelDeployment, EXISTING.production,
      { label: 'SageMaker inference troubleshooting (guide)', href: '/blog/amazon-sagemaker-inference-troubleshooting-guide/' },
    ],
  }),
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const awsSageMakerAiPages: LandingPageConfig[] = [
  sageMakerAiHub,
  sageMakerTraining,
  sageMakerHyperPod,
  sageMakerJumpStart,
  sageMakerInference,
  sageMakerPipelines,
  sageMakerMlflow,
  sageMakerModelRegistry,
  sageMakerInferenceTroubleshooting,
];
