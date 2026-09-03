import type { LandingPageConfig } from '../landing-pages';
import {
  azurePage,
  azureServicePage,
  relatedLinks,
  jobSupportHighlights,
  azureServiceFaqs,
  EXISTING,
  FOUNDRY_HUB_LINK,
  AZUREML_HUB_LINK,
  MLOPS_HUB_LINK,
  AZURE_HUB_LINK,
  AZURE_PRODUCTION_LINK,
} from './shared';

const A = (label: string, slug: string) => ({ label, href: `/${slug}/` });
const mlProblem = A('Azure ML troubleshooting', 'azure-ml-troubleshooting-support');
const mlProxy = A('Azure ML interview support', 'azure-ml-proxy-interview-support');
const mlopsProxy = A('Azure MLOps interview support', 'azure-mlops-proxy-interview-support');

// ─── Azure Machine Learning master hub ───────────────────────────────────────

const mlHub: LandingPageConfig = azurePage({
  slug: 'azure-machine-learning-proxy-job-support',
  title: 'Azure Machine Learning Proxy Job Support — Training, Endpoints, Pipelines & MLflow',
  description:
    'Real-time Azure Machine Learning job support: workspace, compute, training jobs, pipelines, MLflow, model registry, AutoML, and online/batch endpoints. Production help and interview support, USA, UK, Europe & worldwide.',
  keywords: [
    'Azure Machine Learning job support', 'Azure ML job support', 'Azure ML endpoints',
    'Azure ML pipelines', 'Azure ML MLflow', 'Azure ML training', 'Azure ML AutoML',
    'Azure ML model deployment',
  ],
  h1: 'Azure Machine Learning Proxy Job Support — From Training to Production Endpoints',
  tagline:
    'One hub for real-time Azure ML job support — workspace, compute, training, pipelines, MLflow, registry, AutoML, and online/batch endpoints.',
  heroEyebrow: 'Azure Machine Learning Support Hub — Updated August 2026',
  painIntro:
    'An Azure ML online endpoint stuck in Failed, a training job dying on GPU OOM, a pipeline that will not run, or MLflow tracking that lost your runs? An Azure ML expert on the call gets your workflow moving.',
  heroVariant:
    'Azure Machine Learning (v2) is the platform for classic ML and custom model training and deployment on Azure. We cover the full lifecycle: workspaces and connections, compute (instances and clusters, GPU), training jobs and environments, pipelines, MLflow tracking and models, the model registry, AutoML, and managed online (real-time) and batch endpoints. We also cover current deprecations — MLflow Projects (MLproject) support fully retired September 2026, and Prompt Flow retiring April 20, 2027 (migrate to Microsoft Agent Framework). From daily job support to production endpoint incidents and proxy interview support, start here.',
  geoLine:
    'Azure ML support for engineers across USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover Azure ML workspace, compute, training, environments, pipelines, MLflow, model registry, AutoML, and managed online/batch endpoints — current through August 2026.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What Azure Machine Learning work do you support?',
      answer:
        'The full Azure ML (v2) lifecycle: workspace setup and connections, compute instances and clusters (including GPU), training jobs and curated/custom environments, pipelines, MLflow experiment tracking and models, the model registry, AutoML, and managed online and batch endpoints — plus the Entra ID, networking, and cost work around them. We work on your real jobs and deployments.',
    },
    {
      question: 'Can you fix Azure ML endpoint and training failures?',
      answer:
        'Yes. Online endpoints stuck in Creating/Failed/Updating, container-health and readiness-probe failures, scoring-script errors, GPU-OOM and capacity issues on training jobs, environment/image build failures, and autoscaling problems are all in scope. We read deployment logs and metrics to root-cause and fix.',
    },
    {
      question: 'Do you cover MLflow and the model registry?',
      answer:
        'Yes. We help with MLflow tracking (runs, params, metrics, artifacts), logging and registering models, the Azure ML model registry, versioning, stages, and promotion into endpoints. Note MLflow Projects (MLproject files) support was fully retired in September 2026 — we migrate those to Azure ML Jobs (CLI/SDK v2).',
    },
    {
      question: 'How does Azure ML relate to Microsoft Foundry?',
      answer:
        'Azure ML is for training and deploying custom/classic ML models; Microsoft Foundry is for building generative-AI apps and agents. They complement each other — you might train or fine-tune in Azure ML and serve generative features through Foundry. We help you use both and choose the right tool per workload.',
    },
    {
      question: 'Do you provide production and interview support for Azure ML?',
      answer:
        'Both. We firefight live Azure ML incidents and provide real-time Azure ML and MLOps proxy interview support on coding and system-design rounds. See our Azure ML production and interview support pages.',
    },
  ],
  useCasesSection: {
    title: 'What We Help Azure ML Teams With',
    cases: [
      'An online endpoint stuck in Failed/Updating or failing container health checks',
      'A training job dying on GPU OOM or capacity, or an environment image that will not build',
      'A pipeline that will not run or fails intermittently between steps',
      'MLflow tracking that lost runs, or registering and promoting models correctly',
      'Setting up AutoML or migrating MLflow Projects to Azure ML Jobs (v2)',
      'Preparing for an Azure ML or MLOps interview',
    ],
  },
  bottomCTAHeading: 'Need Azure Machine Learning Help Right Now?',
  bottomCTABody:
    'In-house Azure ML experts available same-day — training, endpoints, pipelines, MLflow, production fixes, or proxy interview support. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AZURE_HUB_LINK, A('Azure ML production support', 'azure-ml-production-support')],
    techLinks: [A('Azure ML online endpoint job support', 'azure-ml-online-endpoint-job-support'), MLOPS_HUB_LINK],
    problemLink: mlProblem,
    proxyLink: mlProxy,
    additionalLinks: [
      A('Azure ML workspace job support', 'azure-ml-workspace-job-support'),
      A('Azure ML training job support', 'azure-ml-training-job-support'),
      A('Azure ML compute cluster job support', 'azure-ml-compute-cluster-job-support'),
      A('Azure ML pipelines job support', 'azure-ml-pipelines-job-support'),
      A('Azure ML MLflow job support', 'azure-ml-mlflow-job-support'),
      A('Azure ML model registry job support', 'azure-ml-model-registry-job-support'),
      A('Azure ML AutoML job support', 'azure-ml-automl-job-support'),
      A('Azure ML batch endpoint job support', 'azure-ml-batch-endpoint-job-support'),
      A('Azure ML model deployment job support', 'azure-ml-model-deployment-job-support'),
      A('Azure ML GPU training job support', 'azure-ml-gpu-training-job-support'),
      MLOPS_HUB_LINK, EXISTING.mlops, EXISTING.mlopsEngineer, EXISTING.modelDeployment,
    ],
  }),
});

const mk = (
  slug: string, title: string, description: string, h1: string, tagline: string, eyebrow: string,
  painIntro: string, heroVariant: string, faqService: string, faqUsage: string,
  proxy: { label: string; href: string }, tech: { label: string; href: string }[],
  extra: { label: string; href: string }[], hub = AZUREML_HUB_LINK,
): LandingPageConfig =>
  azureServicePage({
    slug, title, description, h1, tagline, heroEyebrow: eyebrow, painIntro, heroVariant,
    keywords: [title.split(' — ')[0], 'Azure Machine Learning', 'Azure ML', 'Azure MLOps'],
    faqs: azureServiceFaqs(faqService, faqUsage),
    relatedLinks: relatedLinks({
      geoLinks: [hub, AZURE_HUB_LINK],
      techLinks: tech,
      problemLink: mlProblem,
      proxyLink: proxy,
      additionalLinks: extra.concat([hub]),
    }),
  });

const mlWorkspace = mk(
  'azure-ml-workspace-job-support',
  'Azure ML Workspace Proxy Job Support — Setup, Connections & Governance',
  'Azure ML workspace job support: set up workspaces, datastores and connections, Entra ID RBAC, managed VNet, and private endpoints for secure, governed machine learning.',
  'Azure ML Workspace Proxy Job Support — A Solid, Secure Foundation',
  'Set up Azure ML workspaces right — datastores, connections, RBAC, managed VNet, and private endpoints.',
  'Azure ML Workspace',
  'A misconfigured workspace causes auth, networking, and access problems that dog every job later. Getting the foundation right pays off across the whole project.',
  'We set up Azure ML workspaces: datastores and connections, Entra ID RBAC, managed VNet and private endpoints, Key Vault and storage, and workspace-level governance — so training, pipelines, and endpoints run securely from a clean foundation.',
  'Azure ML workspace', 'We set up workspaces, datastores, connections, RBAC, managed VNet, and private endpoints.',
  mlProxy, [A('Azure ML compute cluster job support', 'azure-ml-compute-cluster-job-support'), A('Azure AI managed identity job support', 'azure-ai-managed-identity-job-support')],
  [A('Azure ML training job support', 'azure-ml-training-job-support')],
);

const mlTraining = mk(
  'azure-ml-training-job-support',
  'Azure ML Training Proxy Job Support — Jobs, Environments & Distributed Training',
  'Azure ML training job support: author training jobs (CLI/SDK v2), curated and custom environments, distributed training, hyperparameter sweeps, and reproducible runs.',
  'Azure ML Training Proxy Job Support — Reliable, Reproducible Training',
  'Author training jobs that run and reproduce — environments, distributed training, and sweeps.',
  'Azure ML Training',
  'Training jobs fail on environments, data access, and distributed config more than on the model itself. Reproducible, reliable training is a discipline.',
  'We help you author Azure ML training jobs (CLI/SDK v2): curated and custom environments and images, data access and datastores, distributed training (PyTorch/DeepSpeed), hyperparameter sweeps, and reproducible, tracked runs with MLflow. We debug environment and job failures.',
  'Azure ML training', 'We author training jobs, build environments, run distributed training and sweeps, and fix job failures.',
  mlProxy, [A('Azure ML GPU training job support', 'azure-ml-gpu-training-job-support'), A('Azure ML pipelines job support', 'azure-ml-pipelines-job-support')],
  [A('Azure ML MLflow job support', 'azure-ml-mlflow-job-support')],
);

const mlCompute = mk(
  'azure-ml-compute-cluster-job-support',
  'Azure ML Compute Cluster Proxy Job Support — Compute, Quota & Autoscale',
  'Azure ML compute job support: compute instances and clusters, GPU SKUs and quota, autoscaling, low-priority nodes, and cost control for training and inference.',
  'Azure ML Compute Cluster Proxy Job Support — Right Compute, Right Cost',
  'Get compute right — instances, clusters, GPU quota, autoscale, and cost control.',
  'Azure ML Compute',
  'Wrong compute means jobs queue forever, OOM, or burn budget. GPU quota and autoscale settings are where teams stall.',
  'We configure Azure ML compute: compute instances and clusters, GPU SKU selection and quota requests, autoscaling and min/max nodes, low-priority/spot nodes for cost, and idle shutdown. We fix capacity, quota, and queueing problems.',
  'Azure ML compute', 'We configure compute instances/clusters, GPU quota, autoscale, and cost control.',
  mlProxy, [A('Azure ML training job support', 'azure-ml-training-job-support'), A('Azure GPU cost optimization', 'azure-gpu-cost-optimization')],
  [A('Azure ML GPU training job support', 'azure-ml-gpu-training-job-support')],
);

const mlPipelines = mk(
  'azure-ml-pipelines-job-support',
  'Azure ML Pipelines Proxy Job Support — Reproducible ML Workflows',
  'Azure ML pipelines job support: build component-based pipelines for data prep, training, evaluation, and deployment, with reuse, scheduling, and CI integration.',
  'Azure ML Pipelines Proxy Job Support — Compose Reliable ML Workflows',
  'Build reusable, scheduled ML pipelines — data prep, training, evaluation, and deployment as components.',
  'Azure ML Pipelines',
  'One-off scripts do not scale to reliable ML. Pipelines make workflows reproducible and reusable — if components and data passing are designed well.',
  'We build Azure ML pipelines: reusable components, data passing and outputs, parametrization, caching/reuse, scheduling, and integration with CI for MLOps. We debug pipeline and step failures and make workflows reproducible.',
  'Azure ML pipelines', 'We build component-based pipelines with reuse, scheduling, and CI integration, and fix step failures.',
  mlProxy, [A('Azure MLOps pipelines job support', 'azure-mlops-pipelines-job-support'), A('Azure ML training job support', 'azure-ml-training-job-support')],
  [MLOPS_HUB_LINK],
);

const mlMlflow = mk(
  'azure-ml-mlflow-job-support',
  'Azure ML MLflow Proxy Job Support — Tracking, Models & Registry Integration',
  'Azure ML MLflow job support: experiment tracking (runs, params, metrics, artifacts), MLflow models, autologging, and registry integration — plus migrating off retired MLflow Projects.',
  'Azure ML MLflow Proxy Job Support — Track, Log & Register Models',
  'Use MLflow well on Azure ML — tracking, models, autologging, and registry integration.',
  'Azure ML MLflow',
  'MLflow is the tracking backbone of Azure ML. Using it consistently — and migrating off retired MLflow Projects — keeps experiments reproducible.',
  'We help you use MLflow on Azure ML: experiment tracking (runs, params, metrics, artifacts), autologging, logging and registering MLflow models, and registry integration. MLflow Projects (MLproject) support was fully retired in September 2026 — we migrate those workflows to Azure ML Jobs (CLI/SDK v2).',
  'Azure ML MLflow', 'We set up MLflow tracking, models, autologging, and registry integration, and migrate retired MLflow Projects.',
  mlProxy, [A('Azure ML model registry job support', 'azure-ml-model-registry-job-support'), A('Azure MLOps MLflow job support', 'azure-mlops-mlflow-job-support')],
  [A('Azure ML training job support', 'azure-ml-training-job-support')],
);

const mlRegistry = mk(
  'azure-ml-model-registry-job-support',
  'Azure ML Model Registry Proxy Job Support — Versioning & Promotion',
  'Azure ML model registry job support: register and version models, manage stages, share across workspaces, and promote models into online and batch endpoints.',
  'Azure ML Model Registry Proxy Job Support — Govern Model Lifecycle',
  'Version, govern, and promote models — from registry to production endpoints.',
  'Azure ML Model Registry',
  'Without a clean registry, teams lose track of which model is in production and how to roll back. Versioning and promotion discipline prevents incidents.',
  'We set up the Azure ML model registry: registering and versioning models, cross-workspace sharing, lineage, and promotion into online/batch endpoints with rollback. We wire it into MLOps CI/CD for controlled model promotion.',
  'Azure ML model registry', 'We register and version models, manage promotion into endpoints, and enable rollback.',
  mlProxy, [A('Azure MLOps model registry', 'azure-mlops-proxy-job-support'), A('Azure ML model deployment job support', 'azure-ml-model-deployment-job-support')],
  [A('Azure ML MLflow job support', 'azure-ml-mlflow-job-support')],
);

const mlAutoml = mk(
  'azure-ml-automl-job-support',
  'Azure ML AutoML Proxy Job Support — Automated Model Training',
  'Azure ML AutoML job support: run automated ML for classification, regression, forecasting, and vision/NLP, then extract and deploy the best model with full control.',
  'Azure ML AutoML Proxy Job Support — Automated Training, Real Control',
  'Use AutoML to find strong models fast — then extract, tune, and deploy them properly.',
  'Azure ML AutoML',
  'AutoML accelerates modeling, but teams struggle to interpret results, control featurization, and productionize the winning model.',
  'We help you use Azure ML AutoML: classification, regression, forecasting, and vision/NLP tasks, featurization control, experiment configuration and limits, interpreting results, and extracting and deploying the best model to endpoints with MLOps.',
  'Azure ML AutoML', 'We run AutoML tasks, control featurization, interpret results, and deploy the best model.',
  mlProxy, [A('Azure ML training job support', 'azure-ml-training-job-support'), A('Azure ML model deployment job support', 'azure-ml-model-deployment-job-support')],
  [MLOPS_HUB_LINK],
);

const mlOnlineEndpoint = mk(
  'azure-ml-online-endpoint-job-support',
  'Azure ML Online Endpoint Proxy Job Support — Real-Time Inference That Stays Up',
  'Azure ML managed online endpoint job support: deploy real-time inference, scoring scripts, blue/green deployments, autoscaling, and fix Failed/Updating and container-health issues.',
  'Azure ML Online Endpoint Proxy Job Support — Real-Time Inference, Reliable',
  'Deploy and stabilize real-time endpoints — scoring, blue/green, autoscale, and health fixes.',
  'Azure ML Online Endpoint',
  'Online endpoints stuck in Failed/Updating or failing health checks block releases. Getting deployments, scoring scripts, and probes right is essential.',
  'We deploy and stabilize Azure ML managed online endpoints: scoring scripts and environments, blue/green and safe rollout, traffic splitting, autoscaling, readiness/liveness probes, and request logging. We fix Creating/Failed/Updating states and container-health failures.',
  'Azure ML online endpoint', 'We deploy real-time endpoints, do blue/green rollout and autoscale, and fix Failed/health issues.',
  mlProxy, [A('Azure ML model deployment job support', 'azure-ml-model-deployment-job-support'), A('Azure ML production support', 'azure-ml-production-support')],
  [A('Azure ML batch endpoint job support', 'azure-ml-batch-endpoint-job-support')],
);

const mlBatchEndpoint = mk(
  'azure-ml-batch-endpoint-job-support',
  'Azure ML Batch Endpoint Proxy Job Support — Scalable Batch Inference',
  'Azure ML batch endpoint job support: deploy batch inference pipelines for large datasets, scheduling, parallelism, and cost-efficient scoring.',
  'Azure ML Batch Endpoint Proxy Job Support — Score at Scale, Cost-Efficiently',
  'Run large-scale batch inference — pipelines, parallelism, scheduling, and cost control.',
  'Azure ML Batch Endpoint',
  'Batch scoring over large datasets needs the right parallelism and error handling, or it is slow, expensive, or unreliable.',
  'We deploy Azure ML batch endpoints: batch scoring pipelines, mini-batch and parallelism settings, input/output datasets, scheduling, retries and error handling, and cost-efficient compute for large-scale inference.',
  'Azure ML batch endpoint', 'We deploy batch inference pipelines with parallelism, scheduling, and cost control.',
  mlProxy, [A('Azure ML online endpoint job support', 'azure-ml-online-endpoint-job-support'), A('Azure ML pipelines job support', 'azure-ml-pipelines-job-support')],
  [A('Azure ML model deployment job support', 'azure-ml-model-deployment-job-support')],
);

const mlModelDeployment = mk(
  'azure-ml-model-deployment-job-support',
  'Azure ML Model Deployment Proxy Job Support — From Registry to Production',
  'Azure ML model deployment job support: package models, choose online vs batch endpoints, manage environments and scoring, and roll out safely with rollback.',
  'Azure ML Model Deployment Proxy Job Support — Ship Models Safely',
  'Deploy models the right way — packaging, endpoint choice, safe rollout, and rollback.',
  'Azure ML Model Deployment',
  'Deployment is where models meet reality — packaging, environments, and rollout strategy decide whether it is reliable or an incident.',
  'We deploy models on Azure ML: packaging and environments, choosing online (real-time) vs batch endpoints, scoring scripts, safe rollout (blue/green, traffic split), rollback, and integration with the model registry and MLOps CI/CD.',
  'Azure ML model deployment', 'We package models, choose the right endpoint, and roll out safely with rollback.',
  mlProxy, [A('Azure ML online endpoint job support', 'azure-ml-online-endpoint-job-support'), EXISTING.modelDeployment],
  [A('Azure ML model registry job support', 'azure-ml-model-registry-job-support')],
);

const mlGpuTraining = mk(
  'azure-ml-gpu-training-job-support',
  'Azure ML GPU Training Proxy Job Support — Distributed & Large-Model Training',
  'Azure ML GPU training job support: multi-GPU and multi-node distributed training, DeepSpeed, mixed precision, GPU-OOM fixes, and GPU quota and cost management.',
  'Azure ML GPU Training Proxy Job Support — Train Big Models Efficiently',
  'Get GPU training working — distributed, memory-efficient, and cost-aware.',
  'Azure ML GPU Training',
  'Large-model training hits GPU OOM, slow interconnects, and quota walls. Distributed training done wrong wastes expensive GPU hours.',
  'We help with Azure ML GPU training: multi-GPU and multi-node distributed training (PyTorch DDP, DeepSpeed), mixed precision, gradient accumulation and checkpointing, GPU-OOM diagnosis and fixes, InfiniBand/interconnect setup, and GPU quota and cost management.',
  'Azure ML GPU training', 'We set up distributed multi-GPU/multi-node training, fix GPU OOM, and manage GPU quota and cost.',
  mlProxy, [A('Azure ML compute cluster job support', 'azure-ml-compute-cluster-job-support'), A('Azure GPU cost optimization', 'azure-gpu-cost-optimization')],
  [A('Foundry Local multi-GPU job support', 'foundry-local-multi-gpu-job-support')],
);

const mlProduction = mk(
  'azure-ml-production-support',
  'Azure ML Production Support — Fix Live Endpoint & Pipeline Incidents',
  'Azure ML production support: fix online endpoint Failed/Updating states, container-health failures, GPU OOM, autoscaling, MLflow tracking issues, and pipeline failures with an expert on the call.',
  'Azure ML Production Support — Rescue Live ML Systems',
  'On-call help for Azure ML incidents — endpoints, container health, GPU OOM, autoscaling, and pipelines.',
  'Azure ML Production Firefighting',
  'An endpoint down before a release, a pipeline failing in prod, or GPU OOM under load needs fast, expert diagnosis — not a support-ticket queue.',
  'We firefight Azure ML in production: online endpoints stuck in Failed/Updating, container-health and scoring failures, GPU-OOM and capacity, autoscaling problems, MLflow tracking issues, and pipeline failures. We read deployment logs, metrics, and Application Insights to root-cause and stabilize.',
  'Azure ML production', 'We firefight endpoint, container-health, GPU-OOM, autoscaling, and pipeline incidents live.',
  mlProxy, [A('Azure ML online endpoint job support', 'azure-ml-online-endpoint-job-support'), AZURE_PRODUCTION_LINK],
  [mlProblem, A('Azure ML monitoring job support', 'azure-ml-monitoring-job-support')],
);

const mlTroubleshooting = mk(
  'azure-ml-troubleshooting-support',
  'Azure ML Troubleshooting Support — Diagnose & Fix Azure ML Errors',
  'Azure ML troubleshooting support: root-cause endpoint failures, environment/image build errors, data-access issues, GPU OOM, and pipeline failures with a structured method.',
  'Azure ML Troubleshooting Support — Root-Cause Azure ML Failures',
  'A structured method for Azure ML issues: symptom → logs → env/data/compute/identity check → fix → validation → prevention.',
  'Azure ML Troubleshooting',
  'Azure ML failures span environments, data access, compute, and identity. A disciplined method finds root cause faster than trial and error.',
  'We troubleshoot Azure ML methodically: endpoint Failed/Updating and container-health, environment/image build failures, data-access and datastore issues, GPU OOM, quota, and pipeline step failures — reproduce, read logs and metrics, isolate root cause, fix, validate, and prevent.',
  'Azure ML troubleshooting', 'We root-cause endpoint, environment, data-access, GPU, and pipeline failures and ship a durable fix.',
  mlProxy, [A('Azure ML production support', 'azure-ml-production-support'), A('Azure ML online endpoint job support', 'azure-ml-online-endpoint-job-support')],
  [AZUREML_HUB_LINK],
);

// ─── MLOps / LLMOps cluster ──────────────────────────────────────────────────

const mlopsHub: LandingPageConfig = azurePage({
  slug: 'azure-mlops-proxy-job-support',
  title: 'Azure MLOps Proxy Job Support — Pipelines, CI/CD, Registry & Monitoring',
  description:
    'Real-time Azure MLOps job support: CI/CD for ML with Azure DevOps and GitHub Actions, pipelines, MLflow, model registry and promotion, rollback, retraining, and monitoring on Azure Machine Learning.',
  keywords: [
    'Azure MLOps job support', 'Azure ML CI/CD', 'Azure MLOps pipelines', 'Azure ML model promotion',
    'Azure MLOps monitoring', 'Azure DevOps ML', 'GitHub Actions Azure ML',
  ],
  h1: 'Azure MLOps Proxy Job Support — Ship, Promote & Monitor Models Reliably',
  tagline:
    'One hub for Azure MLOps job support — CI/CD, pipelines, MLflow, model registry and promotion, rollback, retraining, and monitoring.',
  heroEyebrow: 'Azure MLOps Support Hub — Updated August 2026',
  painIntro:
    'Manual model deployments, no reproducibility, and no monitoring make ML fragile. Standing up real Azure MLOps — CI/CD, registry-driven promotion, and monitoring — is what makes it production-grade.',
  heroVariant:
    'We build Azure MLOps: CI/CD for ML with Azure DevOps and GitHub Actions, Azure ML pipelines, MLflow tracking, model registry-driven promotion with approvals, safe rollout and rollback, scheduled retraining, and production monitoring (data drift, model quality, endpoint health). We cover both classic MLOps and LLMOps/GenAIOps for Azure OpenAI and Foundry — evaluation gates, prompt versioning, and observability.',
  geoLine:
    'Azure MLOps support for engineers across USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover ML CI/CD, Azure ML pipelines, MLflow, model registry and promotion, rollback, retraining, and monitoring — plus LLMOps for Azure OpenAI and Foundry.',
  highlights: jobSupportHighlights,
  faqs: azureServiceFaqs('Azure MLOps', 'We build ML CI/CD, registry-driven promotion, retraining, and monitoring on Azure ML — plus LLMOps for Azure OpenAI and Foundry.'),
  useCasesSection: {
    title: 'What We Help Azure MLOps Teams With',
    cases: [
      'Building CI/CD for ML with Azure DevOps or GitHub Actions',
      'Registry-driven model promotion with approvals and safe rollout/rollback',
      'Scheduled retraining and reproducible pipelines',
      'Production monitoring — data drift, model quality, and endpoint health',
      'LLMOps for Azure OpenAI and Foundry — evaluation gates, prompt versioning, observability',
      'Preparing for an Azure MLOps interview',
    ],
  },
  bottomCTAHeading: 'Need Azure MLOps Help Right Now?',
  bottomCTABody:
    'In-house Azure MLOps experts available same-day — CI/CD, promotion, retraining, monitoring, or proxy interview support. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AZURE_HUB_LINK, AZUREML_HUB_LINK],
    techLinks: [A('Azure MLOps CI/CD job support', 'azure-mlops-ci-cd-job-support'), A('Azure MLOps monitoring job support', 'azure-mlops-monitoring-job-support')],
    problemLink: A('Azure ML troubleshooting', 'azure-ml-troubleshooting-support'),
    proxyLink: mlopsProxy,
    additionalLinks: [
      A('Azure MLOps pipelines job support', 'azure-mlops-pipelines-job-support'),
      A('Azure MLOps MLflow job support', 'azure-mlops-mlflow-job-support'),
      A('Azure LLMOps job support', 'azure-llmops-job-support'),
      A('Azure GenAI Ops job support', 'azure-genai-ops-job-support'),
      A('Azure AI evaluation job support', 'azure-ai-evaluation-job-support'),
      EXISTING.mlops, EXISTING.mlopsEngineer, EXISTING.mlopsProxy,
    ],
  }),
});

const mlopsPipelines = mk(
  'azure-mlops-pipelines-job-support',
  'Azure MLOps Pipelines Proxy Job Support — Automated ML Delivery',
  'Azure MLOps pipelines job support: automate data prep, training, evaluation, and deployment as reproducible, CI-triggered Azure ML pipelines with gates and approvals.',
  'Azure MLOps Pipelines Proxy Job Support — Automate the ML Lifecycle',
  'Automate the ML lifecycle — reproducible, CI-triggered pipelines with evaluation gates and approvals.',
  'Azure MLOps Pipelines',
  'MLOps lives or dies on its pipelines. Reproducible, gated, CI-triggered pipelines are what make ML delivery reliable.',
  'We build Azure MLOps pipelines: reproducible data-prep, training, evaluation, and deployment pipelines triggered by CI, with evaluation gates, approvals, and registry promotion. We integrate with Azure DevOps or GitHub Actions.',
  'Azure MLOps pipelines', 'We build reproducible, CI-triggered ML pipelines with evaluation gates, approvals, and promotion.',
  mlopsProxy, [A('Azure ML pipelines job support', 'azure-ml-pipelines-job-support'), A('Azure MLOps CI/CD job support', 'azure-mlops-ci-cd-job-support')],
  [MLOPS_HUB_LINK],
);

const mlopsMlflow = mk(
  'azure-mlops-mlflow-job-support',
  'Azure MLOps MLflow Proxy Job Support — Tracking & Registry Across Environments',
  'Azure MLOps MLflow job support: standardize experiment tracking and model registry across dev/test/prod, drive promotion, and enable reproducibility and audit.',
  'Azure MLOps MLflow Proxy Job Support — Reproducibility & Promotion',
  'Standardize MLflow across environments — tracking, registry, promotion, and audit.',
  'Azure MLOps MLflow',
  'MLflow is the backbone of MLOps traceability. Standardizing it across environments enables promotion, rollback, and audit.',
  'We standardize MLflow across your MLOps: consistent tracking, model logging and registry, promotion across dev/test/prod, reproducibility, and audit — wired into CI/CD and Azure ML endpoints.',
  'Azure MLOps MLflow', 'We standardize MLflow tracking and registry across environments to drive promotion and audit.',
  mlopsProxy, [A('Azure ML MLflow job support', 'azure-ml-mlflow-job-support'), A('Azure ML model registry job support', 'azure-ml-model-registry-job-support')],
  [MLOPS_HUB_LINK],
);

const mlopsCicd = mk(
  'azure-mlops-ci-cd-job-support',
  'Azure MLOps CI/CD Proxy Job Support — Azure DevOps & GitHub Actions for ML',
  'Azure MLOps CI/CD job support: build ML CI/CD with Azure DevOps and GitHub Actions — automated training, testing, evaluation gates, registry promotion, and safe deployment.',
  'Azure MLOps CI/CD Proxy Job Support — Automate ML Delivery Safely',
  'Build ML CI/CD that trains, tests, gates, promotes, and deploys — Azure DevOps or GitHub Actions.',
  'Azure MLOps CI/CD',
  'Manual ML deployment does not scale or stay safe. CI/CD with evaluation gates and registry promotion is what makes model delivery repeatable.',
  'We build Azure MLOps CI/CD with Azure DevOps or GitHub Actions: automated training and testing, evaluation gates, model registry promotion with approvals, environments, safe deployment (blue/green), and rollback — for both classic ML and LLM workloads.',
  'Azure MLOps CI/CD', 'We build ML CI/CD with Azure DevOps/GitHub Actions — training, gates, promotion, and safe deployment.',
  mlopsProxy, [A('Azure AI GitHub Actions job support', 'azure-ai-github-actions-job-support'), A('Azure AI Azure DevOps job support', 'azure-ai-azure-devops-job-support')],
  [A('Azure GenAI CI/CD job support', 'azure-genai-ci-cd-job-support'), MLOPS_HUB_LINK],
);

const mlopsMonitoring = mk(
  'azure-mlops-monitoring-job-support',
  'Azure MLOps Monitoring Proxy Job Support — Drift, Quality & Endpoint Health',
  'Azure MLOps monitoring job support: monitor data drift, model quality, and endpoint health with Azure ML model monitoring, Azure Monitor, and alerting for reliable production ML.',
  'Azure MLOps Monitoring Proxy Job Support — Catch Regressions Early',
  'Monitor drift, quality, and endpoint health — with alerts before users notice.',
  'Azure MLOps Monitoring',
  'Models silently degrade as data shifts. Without drift and quality monitoring, you find out from users, not dashboards.',
  'We set up Azure MLOps monitoring: data-drift and model-quality monitoring, endpoint health and latency, Azure Monitor and Application Insights dashboards, and alerting — so regressions and outages surface early and trigger retraining.',
  'Azure MLOps monitoring', 'We monitor data drift, model quality, and endpoint health with Azure Monitor and alerting.',
  mlopsProxy, [A('Azure ML monitoring job support', 'azure-ml-monitoring-job-support'), A('Azure AI observability job support', 'azure-ai-observability-proxy-job-support')],
  [MLOPS_HUB_LINK],
);

const llmops = mk(
  'azure-llmops-job-support',
  'Azure LLMOps Proxy Job Support — Operationalize LLM Apps on Azure',
  'Azure LLMOps job support: prompt versioning, evaluation gates, observability, cost control, and safe deployment for Azure OpenAI and Microsoft Foundry LLM applications.',
  'Azure LLMOps Proxy Job Support — Ship LLM Apps Like Software',
  'Operationalize LLM apps — prompt versioning, evaluation gates, observability, and cost control.',
  'Azure LLMOps',
  'LLM apps need their own ops: prompts change behavior, evaluation is non-trivial, and cost and quality drift. LLMOps brings discipline.',
  'We build Azure LLMOps for Azure OpenAI and Foundry apps: prompt and config versioning, evaluation datasets and gates in CI, observability and tracing, cost monitoring, safe rollout, and regression detection — so LLM apps ship and evolve safely.',
  'Azure LLMOps', 'We build prompt versioning, evaluation gates, observability, and cost control for Azure OpenAI/Foundry apps.',
  mlopsProxy, [A('Azure GenAI Ops job support', 'azure-genai-ops-job-support'), A('Azure AI evaluation job support', 'azure-ai-evaluation-job-support')],
  [FOUNDRY_HUB_LINK, MLOPS_HUB_LINK],
);

const genaiOps = mk(
  'azure-genai-ops-job-support',
  'Azure GenAI Ops Proxy Job Support — Operations for Generative AI & Agents',
  'Azure GenAI Ops job support: operationalize generative-AI and agent systems on Microsoft Foundry — evaluation, tracing, guardrails, cost, and safe deployment.',
  'Azure GenAI Ops Proxy Job Support — Run GenAI & Agents in Production',
  'Operationalize generative AI and agents — evaluation, tracing, guardrails, cost, and safe deployment.',
  'Azure GenAI Ops',
  'Generative-AI and agent systems add tools, memory, and non-determinism to the ops problem. GenAIOps brings evaluation, tracing, and guardrails.',
  'We build GenAI Ops on Microsoft Foundry: agent and model evaluation, end-to-end tracing and observability, content safety and guardrails, cost monitoring and Model Router, and safe deployment/rollback for generative and agentic systems.',
  'Azure GenAI Ops', 'We operationalize GenAI and agents — evaluation, tracing, guardrails, cost, and safe deployment on Foundry.',
  mlopsProxy, [A('Azure LLMOps job support', 'azure-llmops-job-support'), A('Foundry agent evaluation job support', 'foundry-agent-evaluation-job-support')],
  [FOUNDRY_HUB_LINK, A('Microsoft Foundry observability job support', 'microsoft-foundry-observability-job-support')],
);

const aiEvaluation = mk(
  'azure-ai-evaluation-job-support',
  'Azure AI Evaluation Proxy Job Support — Datasets, Graders & Quality Gates',
  'Azure AI evaluation job support: build evaluation datasets and graders for models, RAG, and agents, evaluate groundedness and safety, and gate releases in CI on Azure.',
  'Azure AI Evaluation Proxy Job Support — Measure Quality, Gate Releases',
  'Evaluate models, RAG, and agents with real datasets and graders — and gate releases in CI.',
  'Azure AI Evaluation',
  'Without evaluation, AI quality is guesswork and regressions ship silently. Meaningful datasets and graders — wired into CI — are the fix.',
  'We build Azure AI evaluation: representative datasets, quality/groundedness/safety graders, model and prompt comparison, RAG and agent-trajectory evaluation, and CI gates — using Foundry evaluations and the Azure AI Evaluation SDK.',
  'Azure AI evaluation', 'We build evaluation datasets and graders for models/RAG/agents and gate releases in CI.',
  mlopsProxy, [A('Foundry model evaluation job support', 'microsoft-foundry-model-evaluation-job-support'), A('Azure LLMOps job support', 'azure-llmops-job-support')],
  [A('Foundry agent evaluation job support', 'foundry-agent-evaluation-job-support'), MLOPS_HUB_LINK],
);

export const azureMlMlopsPages: LandingPageConfig[] = [
  mlHub,
  mlWorkspace,
  mlTraining,
  mlCompute,
  mlPipelines,
  mlMlflow,
  mlRegistry,
  mlAutoml,
  mlOnlineEndpoint,
  mlBatchEndpoint,
  mlModelDeployment,
  mlGpuTraining,
  mlProduction,
  mlTroubleshooting,
  mlopsHub,
  mlopsPipelines,
  mlopsMlflow,
  mlopsCicd,
  mlopsMonitoring,
  llmops,
  genaiOps,
  aiEvaluation,
];
