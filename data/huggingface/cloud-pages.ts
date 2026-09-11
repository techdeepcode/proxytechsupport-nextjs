import type { LandingPageConfig } from '../landing-pages';
import {
  hfServicePage,
  relatedLinks,
  hfServiceFaqs,
  EXISTING,
  HF_HUB_LINK,
  HF_INTERVIEW_HUB_LINK,
  HF_PRODUCTION_LINK,
  HF_AWS_LINK,
  HF_AZURE_LINK,
  HF_GCP_LINK,
  HF_ENDPOINTS_LINK,
  HF_OPTIMUM_LINK,
  HF_VLLM_LINK,
  HF_GPU_LINK,
} from './shared';

// ─── AWS ──────────────────────────────────────────────────────────────────────

export const huggingFaceAws: LandingPageConfig = hfServicePage({
  slug: 'huggingface-aws-job-support',
  title: 'Hugging Face on AWS Job Support | SageMaker, Trainium/Inferentia & DLCs',
  description:
    'Job support for running Hugging Face on AWS — SageMaker SDK and JumpStart, Deep Learning Containers, Trainium/Inferentia via Optimum-Neuron, and EKS/EC2 GPU. Train, deploy, and scale open models on AWS.',
  keywords: [
    'Hugging Face AWS job support', 'SageMaker Hugging Face', 'Trainium Inferentia Optimum-Neuron', 'AWS Deep Learning Containers',
    'deploy LLM AWS', 'EKS EC2 GPU LLM', 'Hugging Face SageMaker JumpStart',
  ],
  h1: 'Hugging Face on AWS Job Support — Train & Serve Open Models on AWS',
  tagline:
    'Real-time help running Hugging Face on AWS — SageMaker training and deployment, Deep Learning Containers, Trainium/Inferentia with Optimum-Neuron, and open-model serving on EKS/EC2 GPU.',
  heroEyebrow: 'Hugging Face + AWS Support',
  painIntro:
    'Deploying Hugging Face models on AWS and wrestling with SageMaker containers, Trainium/Inferentia compilation, or GPU instance sizing and cost? The AWS integration is deep but has sharp edges. We help you train and serve reliably and cost-effectively.',
  heroVariant:
    'Hugging Face and AWS are tightly integrated, and we help you use the whole stack. On SageMaker: the HuggingFace estimator and DLCs (Deep Learning Containers) for training, JumpStart’s Hugging Face model catalog, and SageMaker endpoints for deployment. On accelerators: Trainium (training) and Inferentia (inference) via Optimum-Neuron, where models are ahead-of-time compiled for the Neuron SDK for strong price-performance. On general infra: EC2 GPU instances and EKS for self-managed vLLM/SGLang serving. We cover instance and accelerator selection, container and dependency setup, distributed training, autoscaling and cost control, IAM and secrets for HF tokens and S3, and diagnosing the common failures (Neuron compilation errors, DLC/version mismatches, endpoint OOM and cold starts). This connects the Hugging Face cluster to real AWS deployment.',
  faqs: [
    ...hfServiceFaqs('Hugging Face on AWS', 'We help with SageMaker training/deployment, DLCs, Trainium/Inferentia via Optimum-Neuron, and vLLM/SGLang serving on EKS/EC2.'),
    {
      question: 'Should I use Trainium/Inferentia or standard GPU instances?',
      answer:
        'Inferentia/Trainium can beat general GPUs on price-performance at scale, but require ahead-of-time compilation (Optimum-Neuron) and have model-support constraints. GPU instances are more flexible and universally supported. We help you assess your model and load, compile and benchmark on Neuron, and choose based on real cost/latency rather than list prices.',
    },
    {
      question: 'What is the difference between SageMaker endpoints and Inference Endpoints?',
      answer:
        'SageMaker endpoints are AWS-native, managed within your AWS account and IAM. Hugging Face Inference Endpoints are HF-managed dedicated infrastructure (deployable on AWS among others). If you are standardised on AWS/SageMaker, endpoints there fit your governance; if you want the simplest HF-managed path, Inference Endpoints do. We help you choose and set either up.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_ENDPOINTS_LINK,
    ],
    techLinks: [HF_OPTIMUM_LINK, HF_VLLM_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_AZURE_LINK, HF_GCP_LINK, HF_GPU_LINK,
      EXISTING.awsHub, EXISTING.awsSagemaker, EXISTING.modelDeployment, EXISTING.mlops,
    ],
  }),
});

// ─── Azure ──────────────────────────────────────────────────────────────────────

export const huggingFaceAzure: LandingPageConfig = hfServicePage({
  slug: 'huggingface-azure-job-support',
  title: 'Hugging Face on Azure Job Support | Azure ML Catalog, AKS & GPU Workloads',
  description:
    'Job support for running Hugging Face on Azure — the Azure ML / AI Foundry model catalog, managed endpoints, AKS GPU serving with vLLM/SGLang, and training on Azure ML. Deploy open models within Azure governance.',
  keywords: [
    'Hugging Face Azure job support', 'Azure ML model catalog Hugging Face', 'AKS GPU LLM serving', 'Azure AI Foundry Hugging Face',
    'deploy open model Azure', 'Azure ML training Hugging Face', 'vLLM on AKS',
  ],
  h1: 'Hugging Face on Azure Job Support — Open Models in Azure Governance',
  tagline:
    'Real-time help running Hugging Face on Azure — the Azure ML / AI Foundry model catalog, managed endpoints, training on Azure ML, and vLLM/SGLang serving on AKS GPU nodes.',
  heroEyebrow: 'Hugging Face + Azure Support',
  painIntro:
    'Need open Hugging Face models inside Azure’s governance and identity model — via the model catalog or your own AKS GPU serving — and hitting quota, networking, or deployment issues? We help you land it within Azure’s guardrails.',
  heroVariant:
    'Many enterprises must keep AI inside Azure’s identity, networking, and governance. We help you run Hugging Face there: deploying open models from the Azure ML / AI Foundry model catalog to managed online endpoints, training and fine-tuning on Azure ML compute, and self-managing high-throughput serving (vLLM/SGLang) on AKS GPU node pools when you need control. We cover GPU quota and instance selection, private networking and endpoint security, managed identity and Key Vault for HF tokens and secrets, autoscaling, and cost control — plus the practical failures: quota denials, container/version mismatches, and networking that blocks model downloads. This bridges the Hugging Face cluster to Azure-standardised organisations and complements the site’s Azure AI/ML cluster.',
  faqs: [
    ...hfServiceFaqs('Hugging Face on Azure', 'We help with the Azure ML model catalog, managed endpoints, Azure ML training, and vLLM/SGLang serving on AKS — within Azure identity and networking.'),
    {
      question: 'Azure ML managed endpoints or self-managed AKS for serving?',
      answer:
        'Managed online endpoints are simplest and fit Azure governance with least ops effort — good default. Self-managed AKS with vLLM/SGLang gives maximum control over kernels, batching, and cost at sustained scale, at the price of running the cluster. We help you weigh ops burden versus control and set up whichever fits, including private networking.',
    },
    {
      question: 'How do I handle HF tokens and secrets securely on Azure?',
      answer:
        'Use managed identity and Azure Key Vault rather than baking tokens into images or code — the endpoint or training job reads the token from Key Vault at runtime, scoped least-privilege. We help you wire this up so gated-model access and Hub pushes work without leaking credentials.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_ENDPOINTS_LINK,
    ],
    techLinks: [HF_VLLM_LINK, HF_GPU_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_AWS_LINK, HF_GCP_LINK, HF_OPTIMUM_LINK,
      EXISTING.azureHub, EXISTING.modelDeployment, EXISTING.mlops,
    ],
  }),
});

// ─── GCP ──────────────────────────────────────────────────────────────────────

export const huggingFaceGcp: LandingPageConfig = hfServicePage({
  slug: 'huggingface-gcp-job-support',
  title: 'Hugging Face on Google Cloud Job Support | Vertex AI, GKE & TPU',
  description:
    'Job support for running Hugging Face on Google Cloud — Vertex AI Model Garden, Deep Learning Containers, GKE GPU/TPU serving, and TPU training. Deploy and scale open models on GCP with vLLM/SGLang.',
  keywords: [
    'Hugging Face Google Cloud job support', 'Vertex AI Model Garden Hugging Face', 'GKE GPU TPU LLM', 'Hugging Face TPU training',
    'deploy open model GCP', 'vLLM GKE', 'Google Cloud DLC Hugging Face',
  ],
  h1: 'Hugging Face on Google Cloud Job Support — Vertex AI, GKE & TPU',
  tagline:
    'Real-time help running Hugging Face on Google Cloud — Vertex AI Model Garden deployment, Deep Learning Containers, GKE GPU/TPU serving, and TPU training for open models.',
  heroEyebrow: 'Hugging Face + Google Cloud Support',
  painIntro:
    'Deploying open models on Google Cloud — Vertex AI, GKE, or TPU — and unsure how to fit Hugging Face into it, or fighting TPU compilation and quota? The GCP integration is real and broad. We help you train and serve there effectively.',
  heroVariant:
    'Hugging Face and Google Cloud have a deep partnership, and we help you use it. On Vertex AI: deploying Hugging Face models from the Model Garden to Vertex endpoints and running training jobs. On GKE: self-managed GPU (and TPU) serving with vLLM/SGLang for control at scale, using Deep Learning Containers. On TPU: training and inference where TPU price-performance and availability help (with the compilation/model-support caveats). GCP also provides a caching gateway for faster Hugging Face model/dataset pulls. We cover accelerator selection (GPU vs TPU), quota, private networking, Workload Identity and Secret Manager for HF tokens, autoscaling on GKE, and diagnosing the usual issues — TPU compilation errors, quota limits, and image/version mismatches. This connects the cluster to GCP-standardised teams.',
  faqs: [
    ...hfServiceFaqs('Hugging Face on Google Cloud', 'We help with Vertex AI Model Garden deployment, GKE GPU/TPU serving with vLLM/SGLang, TPU training, and secrets via Workload Identity/Secret Manager.'),
    {
      question: 'GPU or TPU on Google Cloud for open LLMs?',
      answer:
        'GPUs (via GKE/Vertex) are the flexible, universally-supported default and pair naturally with vLLM/SGLang. TPUs can offer strong price-performance and availability but need compatible model support and compilation, so they are best when your model and framework path are TPU-ready. We help you benchmark both for your model before committing.',
    },
    {
      question: 'Vertex AI endpoints or GKE for serving?',
      answer:
        'Vertex endpoints are managed and quick to stand up within Google Cloud governance. GKE gives full control over serving (custom vLLM/SGLang config, kernels, batching, cost) at the price of running the cluster. We help you choose per workload and set up networking, autoscaling, and secrets either way.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      HF_ENDPOINTS_LINK,
    ],
    techLinks: [HF_VLLM_LINK, HF_GPU_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_AWS_LINK, HF_AZURE_LINK, HF_OPTIMUM_LINK,
      EXISTING.modelDeployment, EXISTING.mlops, EXISTING.aiEngineer,
    ],
  }),
});

export const huggingFaceCloudPages: LandingPageConfig[] = [
  huggingFaceAws,
  huggingFaceAzure,
  huggingFaceGcp,
];
