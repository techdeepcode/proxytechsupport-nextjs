import type { LandingPageConfig } from '../landing-pages';
import {
  azurePage,
  azureServicePage,
  relatedLinks,
  jobSupportHighlights,
  azureServiceFaqs,
  EXISTING,
  FOUNDRY_HUB_LINK,
  AGENT_HUB_LINK,
  AZUREML_HUB_LINK,
  MLOPS_HUB_LINK,
  SECURITY_HUB_LINK,
  OBSERVABILITY_HUB_LINK,
  AZURE_HUB_LINK,
  AZURE_INTERVIEW_HUB_LINK,
  AZURE_PRODUCTION_LINK,
} from './shared';

const A = (label: string, slug: string) => ({ label, href: `/${slug}/` });

const svc = (
  slug: string, title: string, description: string, h1: string, tagline: string, eyebrow: string,
  painIntro: string, heroVariant: string, faqService: string, faqUsage: string,
  hub: { label: string; href: string }, tech: { label: string; href: string }[],
  extra: { label: string; href: string }[] = [], kw: string[] = [],
): LandingPageConfig =>
  azureServicePage({
    slug, title, description, h1, tagline, heroEyebrow: eyebrow, painIntro, heroVariant,
    keywords: kw.length ? kw : [title.split(' — ')[0], 'Azure AI', 'Microsoft Foundry'],
    faqs: azureServiceFaqs(faqService, faqUsage),
    relatedLinks: relatedLinks({
      geoLinks: [hub, AZURE_HUB_LINK],
      techLinks: tech,
      problemLink: AZURE_PRODUCTION_LINK,
      proxyLink: AZURE_INTERVIEW_HUB_LINK,
      additionalLinks: extra.concat([hub]),
    }),
  });

// ─── Security hub ────────────────────────────────────────────────────────────

const securityHub: LandingPageConfig = azurePage({
  slug: 'azure-ai-security-proxy-job-support',
  title: 'Azure AI Security Proxy Job Support — Entra ID, Private Link, RBAC & Governance',
  description:
    'Real-time Azure AI security job support: Entra ID and Managed Identity, RBAC, Key Vault, VNet, Private Endpoint/Private Link, content safety, and governance (Azure Policy, Purview, Defender) for Foundry, Azure OpenAI, and Azure ML.',
  keywords: [
    'Azure AI security job support', 'Azure OpenAI security', 'Azure AI private endpoint',
    'Azure AI managed identity', 'Azure AI RBAC', 'Azure AI governance', 'Entra ID AI',
  ],
  h1: 'Azure AI Security Proxy Job Support — Secure Foundry, Azure OpenAI & Azure ML',
  tagline:
    'One hub for Azure AI security job support — Entra ID, Managed Identity, RBAC, Key Vault, Private Link, content safety, and governance for AI workloads.',
  heroEyebrow: 'Azure AI Security Support Hub — Updated August 2026',
  painIntro:
    'Locking down Azure OpenAI and Foundry with Private Endpoints, Managed Identity, and least-privilege RBAC — without breaking the app — is where security and delivery collide. We help you get it right.',
  heroVariant:
    'We secure Azure AI workloads end to end: Entra ID authentication and Managed Identity (no keys), least-privilege RBAC (including the renamed Foundry roles), Key Vault for secrets, VNet, Private Endpoint and Private Link for private connectivity, NSGs, Azure Policy for guardrails, Microsoft Purview for data governance, Defender for Cloud, content safety and data-privacy controls, and audit — across Microsoft Foundry, Azure OpenAI, Azure AI Search, and Azure ML.',
  geoLine:
    'Azure AI security support for teams across USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover Entra ID, Managed Identity, RBAC, Key Vault, VNet, Private Endpoint/Private Link, Azure Policy, Purview, Defender, and content safety for AI workloads.',
  highlights: jobSupportHighlights,
  faqs: azureServiceFaqs('Azure AI security', 'We secure AI workloads with Entra ID, Managed Identity, RBAC, Key Vault, Private Link, content safety, and governance.'),
  relatedLinks: relatedLinks({
    geoLinks: [AZURE_HUB_LINK, FOUNDRY_HUB_LINK],
    techLinks: [A('Azure AI private endpoint job support', 'azure-ai-private-endpoint-job-support'), A('Azure AI managed identity job support', 'azure-ai-managed-identity-job-support')],
    problemLink: AZURE_PRODUCTION_LINK,
    proxyLink: AZURE_INTERVIEW_HUB_LINK,
    additionalLinks: [
      A('Microsoft Foundry security job support', 'microsoft-foundry-security-job-support'),
      A('Azure OpenAI security job support', 'azure-openai-security-job-support'),
      A('Azure AI RBAC job support', 'azure-ai-rbac-job-support'),
      A('Azure AI governance job support', 'azure-ai-governance-job-support'),
      A('Azure AI Content Safety job support', 'azure-ai-content-safety-job-support'),
      A('Azure AI security guide', 'azure-ai-security-guide'),
    ],
  }),
});

const secTech = [SECURITY_HUB_LINK, FOUNDRY_HUB_LINK];

const foundrySecurity = svc(
  'microsoft-foundry-security-job-support',
  'Microsoft Foundry Security Proxy Job Support — Secure Foundry Resources & Agents',
  'Microsoft Foundry security job support: Foundry resource/project RBAC (Foundry roles), Managed Identity, private networking, agent identity, and content safety for secure Foundry deployments.',
  'Microsoft Foundry Security Proxy Job Support — Lock Down Foundry',
  'Secure Foundry resources, projects, and agents — RBAC, Managed Identity, private networking, and content safety.',
  'Microsoft Foundry Security',
  'The new Foundry resource/project model changed RBAC and networking. Securing it — and agent identities — correctly is essential and easy to get wrong.',
  'We secure Microsoft Foundry: Foundry resource and project RBAC (Foundry User/Owner/Account Owner/Project Manager), Managed Identity, private networking and Private Endpoints, dedicated agent identities, Key Vault, and content safety/guardrails — governed and least-privilege.',
  'Microsoft Foundry security', 'We secure Foundry resources, projects, and agents with RBAC, Managed Identity, private networking, and content safety.',
  SECURITY_HUB_LINK, [A('Foundry agent authentication job support', 'foundry-agent-authentication-job-support'), A('Azure AI RBAC job support', 'azure-ai-rbac-job-support')],
  [A('Azure AI private endpoint job support', 'azure-ai-private-endpoint-job-support')],
);

const openaiSecurity = svc(
  'azure-openai-security-job-support',
  'Azure OpenAI Security Proxy Job Support — Keyless Auth, Private Access & Safety',
  'Azure OpenAI security job support: replace keys with Entra ID/Managed Identity, add Private Endpoints, scope RBAC, configure content filters, and meet data-privacy requirements.',
  'Azure OpenAI Security Proxy Job Support — Secure Every Call',
  'Secure Azure OpenAI — keyless auth, private access, scoped RBAC, and content filtering.',
  'Azure OpenAI Security',
  'API keys in code, public endpoints, and broad RBAC are common Azure OpenAI security gaps. Closing them without breaking the app takes care.',
  'We secure Azure OpenAI: replace API keys with Entra ID/Managed Identity, Private Endpoints and disabled public access, least-privilege RBAC, content filters and abuse monitoring, customer-managed keys, and data-privacy/residency controls — audited and compliant.',
  'Azure OpenAI security', 'We secure Azure OpenAI with keyless auth, private access, scoped RBAC, and content filtering.',
  SECURITY_HUB_LINK, [A('Azure AI managed identity job support', 'azure-ai-managed-identity-job-support'), A('Azure AI private endpoint job support', 'azure-ai-private-endpoint-job-support')],
  [EXISTING.azureOpenAiJobSupport],
);

const privateEndpoint = svc(
  'azure-ai-private-endpoint-job-support',
  'Azure AI Private Endpoint Proxy Job Support — Private Networking for AI',
  'Azure AI Private Endpoint job support: lock AI services to private networks with Private Endpoints, Private Link, DNS, VNet integration, and no public exposure.',
  'Azure AI Private Endpoint Proxy Job Support — No Public Exposure',
  'Put AI services on private networks — Private Endpoints, Private Link, DNS, and VNet integration.',
  'Azure AI Private Endpoint',
  'Private Endpoints are essential for enterprise AI, but DNS, VNet, and connectivity issues make them a frequent source of "it worked publicly, not privately" failures.',
  'We configure Azure AI private networking: Private Endpoints and Private Link for Azure OpenAI, Foundry, Azure AI Search, and Azure ML, private DNS zones, VNet integration, disabling public access, and troubleshooting the connectivity and DNS issues that break private access.',
  'Azure AI Private Endpoint', 'We configure Private Endpoints, Private Link, DNS, and VNet integration and fix private connectivity issues.',
  SECURITY_HUB_LINK, [A('Azure AI managed identity job support', 'azure-ai-managed-identity-job-support'), A('Azure OpenAI security job support', 'azure-openai-security-job-support')],
  [],
  ['Azure AI private endpoint job support', 'Azure Private Link AI', 'Azure AI VNet'],
);

const managedIdentity = svc(
  'azure-ai-managed-identity-job-support',
  'Azure AI Managed Identity Proxy Job Support — Keyless, Secure Access',
  'Azure AI Managed Identity job support: use system/user-assigned Managed Identity and Entra ID for keyless access to Azure OpenAI, Foundry, Search, ML, Key Vault, and Storage.',
  'Azure AI Managed Identity Proxy Job Support — Kill the Keys',
  'Go keyless — Managed Identity and Entra ID for secure access across Azure AI services.',
  'Azure AI Managed Identity',
  'Keys leak. Managed Identity removes them — but RBAC assignments, token scopes, and the identity chain across services need to be set up correctly.',
  'We implement Azure AI Managed Identity: system- and user-assigned identities, Entra ID token auth for Azure OpenAI/Foundry/Search/ML/Key Vault/Storage, correct RBAC role assignments, on-behalf-of flows, and dedicated agent identities — eliminating keys from your AI stack.',
  'Azure AI Managed Identity', 'We implement keyless Managed Identity + Entra ID access with correct RBAC across the AI stack.',
  SECURITY_HUB_LINK, [A('Azure AI RBAC job support', 'azure-ai-rbac-job-support'), A('Foundry agent authentication job support', 'foundry-agent-authentication-job-support')],
  [A('Azure AI private endpoint job support', 'azure-ai-private-endpoint-job-support')],
  ['Azure AI managed identity job support', 'Entra ID AI', 'keyless Azure OpenAI'],
);

const rbac = svc(
  'azure-ai-rbac-job-support',
  'Azure AI RBAC Proxy Job Support — Least-Privilege Access for AI',
  'Azure AI RBAC job support: design least-privilege RBAC for Foundry, Azure OpenAI, Search, and ML — Foundry roles, custom roles, scopes, and separation of duties.',
  'Azure AI RBAC Proxy Job Support — Least Privilege, Correctly',
  'Design least-privilege RBAC for AI — Foundry roles, custom roles, scopes, and separation of duties.',
  'Azure AI RBAC',
  'Over-broad RBAC is a top audit finding; too-tight RBAC breaks the app. Getting AI role assignments and scopes right is a balancing act.',
  'We design Azure AI RBAC: the renamed Foundry roles (Foundry User/Owner/Account Owner/Project Manager), Azure OpenAI and Search/ML roles, custom roles, correct scopes (resource/project), separation of duties, and PIM for privileged access — least-privilege without breaking delivery.',
  'Azure AI RBAC', 'We design least-privilege RBAC — Foundry roles, custom roles, scopes, and separation of duties.',
  SECURITY_HUB_LINK, [A('Azure AI managed identity job support', 'azure-ai-managed-identity-job-support'), A('Azure AI governance job support', 'azure-ai-governance-job-support')],
  [],
  ['Azure AI RBAC job support', 'Foundry roles', 'least privilege Azure AI'],
);

const governance = svc(
  'azure-ai-governance-job-support',
  'Azure AI Governance Proxy Job Support — Policy, Purview & Responsible AI',
  'Azure AI governance job support: Azure Policy guardrails, Microsoft Purview data governance, responsible-AI controls, content safety, audit, and compliance for AI workloads.',
  'Azure AI Governance Proxy Job Support — Govern AI at Scale',
  'Govern AI — Azure Policy, Purview, responsible-AI controls, content safety, and audit.',
  'Azure AI Governance',
  'AI at scale needs guardrails, data governance, and audit — or it becomes a compliance and risk problem. Governance has to be built in, not bolted on.',
  'We build Azure AI governance: Azure Policy guardrails for AI resources, Microsoft Purview data governance and lineage, responsible-AI and content-safety controls, cost and access governance, audit logging, and compliance mapping — so AI scales safely across the org.',
  'Azure AI governance', 'We build Azure Policy guardrails, Purview governance, responsible-AI controls, content safety, and audit.',
  SECURITY_HUB_LINK, [A('Azure AI Content Safety job support', 'azure-ai-content-safety-job-support'), A('Azure AI RBAC job support', 'azure-ai-rbac-job-support')],
  [A('Azure AI security guide', 'azure-ai-security-guide')],
  ['Azure AI governance job support', 'Azure Policy AI', 'Purview AI', 'responsible AI Azure'],
);

// ─── Observability hub ───────────────────────────────────────────────────────

const observabilityHub: LandingPageConfig = azurePage({
  slug: 'azure-ai-observability-proxy-job-support',
  title: 'Azure AI Observability Proxy Job Support — Tracing, Monitoring & OpenTelemetry',
  description:
    'Real-time Azure AI observability job support: agent tracing, OpenTelemetry, Azure Monitor, Application Insights, Log Analytics (KQL), token/latency metrics, and evaluation-in-production for Foundry, Azure OpenAI, and Azure ML.',
  keywords: [
    'Azure AI observability job support', 'Azure AI monitoring', 'Azure OpenAI monitoring',
    'Azure AI OpenTelemetry', 'Application Insights AI', 'Azure ML monitoring', 'agent tracing Azure',
  ],
  h1: 'Azure AI Observability Proxy Job Support — See, Measure & Debug AI in Production',
  tagline:
    'One hub for Azure AI observability — agent tracing, OpenTelemetry, Azure Monitor, Application Insights, Log Analytics, and production evaluation.',
  heroEyebrow: 'Azure AI Observability Support Hub — Updated August 2026',
  painIntro:
    'When an Azure AI system is slow, expensive, or wrong, you need traces and metrics — not guesses. Standing up real observability across models, agents, RAG, and ML is where teams fall short.',
  heroVariant:
    'We instrument Azure AI end to end: end-to-end agent traces, OpenTelemetry export, Azure Monitor metrics, Application Insights dashboards and distributed tracing, Log Analytics (KQL) queries, token-usage and latency and endpoint-failure metrics, request IDs, and continuous evaluation datasets against production traffic — across Microsoft Foundry, Azure OpenAI, and Azure ML.',
  geoLine:
    'Azure AI observability support for teams across USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover agent tracing, OpenTelemetry, Azure Monitor, Application Insights, Log Analytics/KQL, token/latency metrics, and production evaluation.',
  highlights: jobSupportHighlights,
  faqs: azureServiceFaqs('Azure AI observability', 'We instrument agent tracing, OpenTelemetry, Azure Monitor, Application Insights, and production evaluation across Foundry, Azure OpenAI, and Azure ML.'),
  relatedLinks: relatedLinks({
    geoLinks: [AZURE_HUB_LINK, MLOPS_HUB_LINK],
    techLinks: [A('Microsoft Foundry observability job support', 'microsoft-foundry-observability-job-support'), A('Azure Application Insights AI job support', 'azure-application-insights-ai-job-support')],
    problemLink: AZURE_PRODUCTION_LINK,
    proxyLink: AZURE_INTERVIEW_HUB_LINK,
    additionalLinks: [
      A('Azure OpenAI monitoring job support', 'azure-openai-monitoring-job-support'),
      A('Azure ML monitoring job support', 'azure-ml-monitoring-job-support'),
      A('Foundry agent observability job support', 'foundry-agent-observability-job-support'),
      A('Azure AI Log Analytics job support', 'azure-ai-log-analytics-job-support'),
      A('Azure AI OpenTelemetry job support', 'azure-ai-opentelemetry-job-support'),
    ],
  }),
});

const obsTech = [OBSERVABILITY_HUB_LINK, AZURE_HUB_LINK];

const openaiMonitoring = svc(
  'azure-openai-monitoring-job-support',
  'Azure OpenAI Monitoring Proxy Job Support — Tokens, Latency & Errors',
  'Azure OpenAI monitoring job support: track token usage, latency, throttling, and errors with Azure Monitor and Application Insights, and alert before users are affected.',
  'Azure OpenAI Monitoring Proxy Job Support — Watch Every Metric',
  'Monitor Azure OpenAI — token usage, latency, throttling, and errors with dashboards and alerts.',
  'Azure OpenAI Monitoring',
  'Without monitoring, Azure OpenAI cost, latency, and 429s surprise you in production. Dashboards and alerts turn surprises into signals.',
  'We set up Azure OpenAI monitoring: token-usage and cost metrics per deployment, latency and time-to-first-token, throttling/429 and error rates, Azure Monitor and Application Insights dashboards, and alerts — so you catch cost and reliability issues early.',
  'Azure OpenAI monitoring', 'We monitor token usage, latency, throttling, and errors with Azure Monitor and alerts.',
  OBSERVABILITY_HUB_LINK, [A('Azure OpenAI cost optimization', 'azure-openai-cost-optimization-support'), A('Azure Application Insights AI job support', 'azure-application-insights-ai-job-support')],
  [EXISTING.azureOpenAiJobSupport],
);

const mlMonitoring = svc(
  'azure-ml-monitoring-job-support',
  'Azure ML Monitoring Proxy Job Support — Drift, Quality & Endpoint Health',
  'Azure ML monitoring job support: model data drift and quality monitoring, endpoint health and latency, and Azure Monitor dashboards and alerts for production ML.',
  'Azure ML Monitoring Proxy Job Support — Keep Models Healthy',
  'Monitor Azure ML — data drift, model quality, and endpoint health with alerts.',
  'Azure ML Monitoring',
  'Deployed models degrade silently as data shifts and endpoints strain. Monitoring surfaces it before users complain.',
  'We set up Azure ML monitoring: model data-drift and quality monitors, endpoint health, latency and error metrics, Azure Monitor and Application Insights dashboards, and alerts that trigger investigation or retraining.',
  'Azure ML monitoring', 'We monitor data drift, model quality, and endpoint health with Azure Monitor and alerts.',
  OBSERVABILITY_HUB_LINK, [A('Azure MLOps monitoring job support', 'azure-mlops-monitoring-job-support'), AZUREML_HUB_LINK],
  [],
);

const appInsights = svc(
  'azure-application-insights-ai-job-support',
  'Azure Application Insights AI Proxy Job Support — Traces & Distributed Tracing',
  'Azure Application Insights AI job support: instrument AI apps and agents with Application Insights — distributed tracing, custom metrics, KQL, and dashboards.',
  'Azure Application Insights AI Proxy Job Support — Trace AI Apps',
  'Instrument AI apps with Application Insights — distributed tracing, custom metrics, and KQL.',
  'Azure Application Insights AI',
  'AI apps span models, tools, and services; without distributed tracing you cannot see where latency or errors originate.',
  'We instrument AI apps with Azure Application Insights: distributed tracing across services, custom metrics and events for LLM/agent steps, correlation with agent traces, Log Analytics/KQL queries, and dashboards — end-to-end visibility.',
  'Azure Application Insights AI', 'We instrument AI apps with distributed tracing, custom metrics, KQL, and dashboards.',
  OBSERVABILITY_HUB_LINK, [A('Azure AI OpenTelemetry job support', 'azure-ai-opentelemetry-job-support'), A('Azure AI Log Analytics job support', 'azure-ai-log-analytics-job-support')],
  [],
  ['Azure Application Insights AI job support', 'Application Insights LLM', 'distributed tracing AI'],
);

const openTelemetry = svc(
  'azure-ai-opentelemetry-job-support',
  'Azure AI OpenTelemetry Proxy Job Support — Standard Traces for AI & Agents',
  'Azure AI OpenTelemetry job support: emit standardized OpenTelemetry traces and metrics from AI apps and agents, export to Azure Monitor, and use GenAI semantic conventions.',
  'Azure AI OpenTelemetry Proxy Job Support — Vendor-Neutral AI Tracing',
  'Emit standard OpenTelemetry traces from AI apps and agents — GenAI conventions, exported to Azure Monitor.',
  'Azure AI OpenTelemetry',
  'OpenTelemetry gives vendor-neutral, standardized traces — but wiring GenAI semantic conventions and exporters for AI apps is new territory.',
  'We instrument AI apps and agents with OpenTelemetry: GenAI semantic conventions for spans and metrics, auto- and manual instrumentation, export to Azure Monitor/Application Insights, and correlation with Foundry agent traces — standardized, portable observability.',
  'Azure AI OpenTelemetry', 'We emit standardized OpenTelemetry GenAI traces/metrics and export them to Azure Monitor.',
  OBSERVABILITY_HUB_LINK, [A('Azure Application Insights AI job support', 'azure-application-insights-ai-job-support'), A('Foundry agent observability job support', 'foundry-agent-observability-job-support')],
  [],
  ['Azure AI OpenTelemetry job support', 'OpenTelemetry GenAI', 'AI tracing standard'],
);

const logAnalytics = svc(
  'azure-ai-log-analytics-job-support',
  'Azure AI Log Analytics Proxy Job Support — KQL for AI Diagnostics',
  'Azure AI Log Analytics job support: write KQL queries and workbooks over AI diagnostic logs, correlate request IDs, and build dashboards for Azure OpenAI, Foundry, and ML.',
  'Azure AI Log Analytics Proxy Job Support — Query Your AI Logs',
  'Turn AI logs into answers — KQL queries, workbooks, and dashboards over diagnostic data.',
  'Azure AI Log Analytics',
  'The data to diagnose AI issues is usually already in Log Analytics — you just need the right KQL to find it.',
  'We build Azure AI diagnostics in Log Analytics: diagnostic settings for Azure OpenAI/Foundry/Search/ML, KQL queries and workbooks, request-ID correlation, cost and error analysis, and alerts — turning raw logs into actionable diagnostics.',
  'Azure AI Log Analytics', 'We write KQL queries and workbooks over AI diagnostic logs and correlate request IDs.',
  OBSERVABILITY_HUB_LINK, [A('Azure Application Insights AI job support', 'azure-application-insights-ai-job-support'), A('Azure OpenAI monitoring job support', 'azure-openai-monitoring-job-support')],
  [],
  ['Azure AI Log Analytics job support', 'KQL AI', 'Azure AI diagnostics'],
);

// ─── FinOps ──────────────────────────────────────────────────────────────────

const aiCostOptimization = svc(
  'azure-ai-cost-optimization-proxy-job-support',
  'Azure AI Cost Optimization Proxy Job Support — Cut AI Spend Systematically',
  'Azure AI cost optimization / FinOps job support: reduce Azure OpenAI, Azure ML, and GPU spend with Model Router, right-sizing, caching, PTU/reservations, and cost governance.',
  'Azure AI Cost Optimization Proxy Job Support — Lower the AI Bill',
  'Cut Azure AI spend systematically — Model Router, right-sizing, caching, reservations, and governance.',
  'Azure AI FinOps',
  'AI spend grows fast across models, compute, and GPUs. A systematic FinOps pass — not one-off cuts — is what brings it under control.',
  'We run Azure AI FinOps: Azure OpenAI cost (Model Router, prompt/caching, PTU vs Standard), Azure ML and GPU compute right-sizing and spot, reservations and savings plans, cost allocation and tagging, budgets and alerts, and cost governance — with measured before/after savings.',
  'Azure AI FinOps', 'We cut Azure OpenAI/ML/GPU spend with Model Router, right-sizing, caching, reservations, and governance.',
  AZURE_HUB_LINK, [A('Azure OpenAI cost optimization', 'azure-openai-cost-optimization-support'), A('Azure GPU cost optimization', 'azure-gpu-cost-optimization')],
  [A('Azure ML cost optimization', 'azure-ml-cost-optimization-support')],
  ['Azure AI cost optimization job support', 'Azure AI FinOps', 'reduce Azure AI cost'],
);

const mlCostOptimization = svc(
  'azure-ml-cost-optimization-support',
  'Azure ML Cost Optimization Support — Right-Size Compute & Endpoints',
  'Azure ML cost optimization support: cut training and inference cost with spot/low-priority compute, autoscale, right-sized endpoints, and idle shutdown.',
  'Azure ML Cost Optimization Support — Train & Serve for Less',
  'Cut Azure ML cost — spot compute, autoscale, right-sized endpoints, and idle shutdown.',
  'Azure ML Cost Optimization',
  'Azure ML cost hides in idle compute, oversized endpoints, and on-demand GPUs. Right-sizing recovers a lot of budget.',
  'We optimize Azure ML cost: spot/low-priority compute for training, autoscale and min-node tuning, right-sized online/batch endpoints, idle shutdown, and reservations — cutting training and inference spend without hurting SLAs.',
  'Azure ML cost optimization', 'We cut Azure ML training/inference cost with spot compute, autoscale, right-sized endpoints, and idle shutdown.',
  AZUREML_HUB_LINK, [A('Azure AI cost optimization job support', 'azure-ai-cost-optimization-proxy-job-support'), A('Azure ML compute cluster job support', 'azure-ml-compute-cluster-job-support')],
  [],
);

const gpuCostOptimization = svc(
  'azure-gpu-cost-optimization',
  'Azure GPU Cost Optimization Support — Maximize GPU Utilization',
  'Azure GPU cost optimization support: raise GPU utilization and cut cost with spot, MIG/time-slicing, right-sized SKUs, quantization, and efficient serving (vLLM).',
  'Azure GPU Cost Optimization Support — Stop Wasting GPU Hours',
  'Cut GPU cost — spot, MIG/time-slicing, right-sized SKUs, quantization, and efficient serving.',
  'Azure GPU Cost Optimization',
  'GPUs are the biggest AI cost and usually the most underutilized. Better sharing, sizing, and serving recover large savings.',
  'We optimize Azure GPU cost: right-sized GPU SKUs, spot/low-priority, MIG and time-slicing for sharing, quantization and efficient serving (vLLM), batching and autoscale, and utilization monitoring — across AKS, Azure ML, and Foundry Local.',
  'Azure GPU cost optimization', 'We raise GPU utilization and cut cost with spot, MIG/time-slicing, right-sizing, quantization, and efficient serving.',
  AZURE_HUB_LINK, [A('AKS GPU AI job support', 'aks-gpu-ai-job-support'), A('Azure AI cost optimization job support', 'azure-ai-cost-optimization-proxy-job-support')],
  [A('Azure ML GPU training job support', 'azure-ml-gpu-training-job-support')],
  ['Azure GPU cost optimization', 'GPU utilization Azure', 'MIG time-slicing cost'],
);

// ─── DevOps / IaC ────────────────────────────────────────────────────────────

const aiTerraform = svc(
  'azure-ai-terraform-job-support',
  'Azure AI Terraform Proxy Job Support — IaC for AI Resources',
  'Azure AI Terraform job support: provision Foundry, Azure OpenAI, Azure AI Search, and Azure ML with Terraform — modules, deployments, RBAC, networking, and CI.',
  'Azure AI Terraform Proxy Job Support — Reproducible AI Infrastructure',
  'Provision AI infrastructure as code — Terraform for Foundry, Azure OpenAI, Search, and ML.',
  'Azure AI Terraform',
  'Click-ops AI resources drift and cannot be reproduced. Terraform makes AI infra reproducible — when modules, RBAC, and deployments are modeled right.',
  'We build Azure AI infrastructure with Terraform: Foundry resources/projects, Azure OpenAI and model deployments, Azure AI Search, Azure ML, RBAC, Managed Identity, private networking, and CI/CD for infra — reproducible and reviewable.',
  'Azure AI Terraform', 'We provision Foundry, Azure OpenAI, Search, and ML with Terraform — modules, RBAC, networking, and CI.',
  AZURE_HUB_LINK, [A('Microsoft Foundry Terraform job support', 'microsoft-foundry-terraform-job-support'), A('Azure AI Bicep job support', 'azure-ai-bicep-job-support')],
  [A('Azure ML Terraform job support', 'azure-ml-terraform-job-support')],
  ['Azure AI Terraform job support', 'Terraform Azure OpenAI', 'IaC Azure AI'],
);

const foundryTerraform = svc(
  'microsoft-foundry-terraform-job-support',
  'Microsoft Foundry Terraform Proxy Job Support — IaC for Foundry',
  'Microsoft Foundry Terraform job support: provision Foundry resources, projects, model deployments, agents, and RBAC with Terraform for reproducible, governed Foundry environments.',
  'Microsoft Foundry Terraform Proxy Job Support — Foundry as Code',
  'Provision Foundry as code — resources, projects, deployments, and RBAC with Terraform.',
  'Microsoft Foundry Terraform',
  'The new Foundry resource/project model is best managed as code. Terraform provisions it reproducibly — with the right provider and RBAC.',
  'We provision Microsoft Foundry with Terraform: Foundry resources and projects, Foundry Model deployments, connections, RBAC (Foundry roles), Managed Identity, and private networking — reproducible, governed Foundry environments in CI.',
  'Microsoft Foundry Terraform', 'We provision Foundry resources, projects, deployments, and RBAC with Terraform.',
  AZURE_HUB_LINK, [A('Azure AI Terraform job support', 'azure-ai-terraform-job-support'), FOUNDRY_HUB_LINK],
  [],
  ['Microsoft Foundry Terraform job support', 'Foundry IaC', 'Terraform Foundry'],
);

const mlTerraform = svc(
  'azure-ml-terraform-job-support',
  'Azure ML Terraform Proxy Job Support — IaC for Azure Machine Learning',
  'Azure ML Terraform job support: provision Azure ML workspaces, compute, endpoints, and networking with Terraform for reproducible MLOps infrastructure.',
  'Azure ML Terraform Proxy Job Support — Reproducible ML Infrastructure',
  'Provision Azure ML as code — workspaces, compute, endpoints, and networking with Terraform.',
  'Azure ML Terraform',
  'Reproducible MLOps needs reproducible infra. Terraform provisions Azure ML workspaces, compute, and endpoints consistently across environments.',
  'We provision Azure ML with Terraform: workspaces and connections, compute clusters, online/batch endpoints, managed VNet and private endpoints, RBAC, and CI/CD — reproducible ML infrastructure across dev/test/prod.',
  'Azure ML Terraform', 'We provision Azure ML workspaces, compute, endpoints, and networking with Terraform.',
  AZUREML_HUB_LINK, [A('Azure AI Terraform job support', 'azure-ai-terraform-job-support'), MLOPS_HUB_LINK],
  [],
  ['Azure ML Terraform job support', 'Terraform Azure ML', 'MLOps IaC'],
);

const aiBicep = svc(
  'azure-ai-bicep-job-support',
  'Azure AI Bicep Proxy Job Support — Native IaC for AI Resources',
  'Azure AI Bicep job support: deploy Foundry, Azure OpenAI, Search, and ML with Bicep — modules, deployment stacks, RBAC, and networking in native Azure IaC.',
  'Azure AI Bicep Proxy Job Support — Native Azure IaC for AI',
  'Deploy AI resources with Bicep — modules, deployment stacks, RBAC, and networking.',
  'Azure AI Bicep',
  'Teams standardized on Bicep want AI infra there too. Bicep deploys Foundry, Azure OpenAI, and ML natively — with modules and stacks done right.',
  'We build Azure AI infrastructure with Bicep: Foundry, Azure OpenAI and deployments, Azure AI Search, Azure ML, reusable modules, deployment stacks, RBAC, Managed Identity, and private networking — native Azure IaC in CI.',
  'Azure AI Bicep', 'We deploy Foundry, Azure OpenAI, Search, and ML with Bicep modules, stacks, RBAC, and networking.',
  AZURE_HUB_LINK, [A('Azure AI Terraform job support', 'azure-ai-terraform-job-support'), A('Azure AI GitHub Actions job support', 'azure-ai-github-actions-job-support')],
  [],
  ['Azure AI Bicep job support', 'Bicep Azure OpenAI', 'Azure AI IaC Bicep'],
);

const githubActions = svc(
  'azure-ai-github-actions-job-support',
  'Azure AI GitHub Actions Proxy Job Support — CI/CD for AI on GitHub',
  'Azure AI GitHub Actions job support: build CI/CD for AI apps, agents, and ML with GitHub Actions — OIDC to Azure, evaluation gates, IaC, and safe deployment.',
  'Azure AI GitHub Actions Proxy Job Support — Ship AI From GitHub',
  'Build AI CI/CD on GitHub Actions — OIDC auth, evaluation gates, IaC, and safe deployment.',
  'Azure AI GitHub Actions',
  'AI CI/CD on GitHub needs keyless OIDC auth, evaluation gates, and IaC. Wiring it correctly makes AI delivery repeatable and secure.',
  'We build Azure AI CI/CD with GitHub Actions: OIDC federated auth to Azure (no secrets), build/test, evaluation gates for models/agents, Bicep/Terraform IaC deploys, and safe rollout — for AI apps, agents, and ML.',
  'Azure AI GitHub Actions', 'We build AI CI/CD on GitHub Actions with OIDC, evaluation gates, IaC, and safe deployment.',
  AZURE_HUB_LINK, [A('Azure GenAI CI/CD job support', 'azure-genai-ci-cd-job-support'), A('Azure MLOps CI/CD job support', 'azure-mlops-ci-cd-job-support')],
  [],
  ['Azure AI GitHub Actions job support', 'GitHub Actions Azure AI', 'AI CI/CD GitHub'],
);

const azureDevops = svc(
  'azure-ai-azure-devops-job-support',
  'Azure AI + Azure DevOps Proxy Job Support — Pipelines for AI Delivery',
  'Azure AI Azure DevOps job support: build Azure Pipelines for AI apps, agents, and ML — service connections, evaluation gates, IaC, approvals, and safe deployment.',
  'Azure AI + Azure DevOps Proxy Job Support — Enterprise AI Delivery',
  'Build AI delivery on Azure DevOps — pipelines, evaluation gates, approvals, and IaC.',
  'Azure AI Azure DevOps',
  'Enterprises on Azure DevOps need AI pipelines with gates and approvals. Getting service connections, IaC, and evaluation gates right makes delivery reliable.',
  'We build Azure DevOps pipelines for AI: service connections (workload identity), build/test, evaluation gates, environments and approvals, Bicep/Terraform IaC, and safe deployment — enterprise-grade AI and MLOps delivery.',
  'Azure AI Azure DevOps', 'We build Azure Pipelines for AI/ML — service connections, evaluation gates, approvals, and IaC.',
  AZURE_HUB_LINK, [A('Azure MLOps CI/CD job support', 'azure-mlops-ci-cd-job-support'), A('Azure AI GitHub Actions job support', 'azure-ai-github-actions-job-support')],
  [],
  ['Azure AI Azure DevOps job support', 'Azure Pipelines AI', 'Azure DevOps MLOps'],
);

const genaiCicd = svc(
  'azure-genai-ci-cd-job-support',
  'Azure GenAI CI/CD Proxy Job Support — Deploy LLM Apps & Agents Safely',
  'Azure GenAI CI/CD job support: build CI/CD for Azure OpenAI and Foundry apps and agents — prompt versioning, evaluation gates, and safe rollout with rollback.',
  'Azure GenAI CI/CD Proxy Job Support — Safe GenAI Delivery',
  'Deliver GenAI apps and agents safely — prompt versioning, evaluation gates, and rollout with rollback.',
  'Azure GenAI CI/CD',
  'GenAI CI/CD is different: prompts and configs change behavior, and evaluation is the real gate. Building it right prevents silent regressions.',
  'We build Azure GenAI CI/CD for Azure OpenAI and Foundry: prompt and config versioning, evaluation datasets and gates, agent packaging and deployment (prompt/hosted), safe rollout and rollback, and observability — so GenAI ships like software.',
  'Azure GenAI CI/CD', 'We build GenAI CI/CD — prompt versioning, evaluation gates, agent deployment, and safe rollout.',
  AZURE_HUB_LINK, [A('Azure LLMOps job support', 'azure-llmops-job-support'), A('Azure AI GitHub Actions job support', 'azure-ai-github-actions-job-support')],
  [FOUNDRY_HUB_LINK],
  ['Azure GenAI CI/CD job support', 'LLM CI/CD Azure', 'agent deployment CI/CD'],
);

// ─── Language integrations ───────────────────────────────────────────────────

const pythonFoundry = svc(
  'python-microsoft-foundry-job-support',
  'Python Microsoft Foundry Proxy Job Support — azure-ai-projects & OpenAI SDK',
  'Python Microsoft Foundry job support: build with the azure-ai-projects 2.x SDK and OpenAI() client against the Foundry project endpoint — agents, models, and the Responses API.',
  'Python Microsoft Foundry Proxy Job Support — Build Foundry Apps in Python',
  'Build Foundry apps in Python — azure-ai-projects SDK, OpenAI client, agents, and Responses API.',
  'Python Microsoft Foundry',
  'The Foundry Python SDK consolidated many packages into azure-ai-projects against one endpoint. Adopting it correctly avoids legacy multi-client sprawl.',
  'We help you build Foundry apps in Python: the azure-ai-projects 2.x SDK and OpenAI() client against the unified project endpoint, agents and tools, the Responses API, model deployments, evaluation, and tracing — plus migrating off the old multi-package setup.',
  'Python Microsoft Foundry', 'We build Foundry apps in Python with azure-ai-projects, the OpenAI client, agents, and the Responses API.',
  FOUNDRY_HUB_LINK, [A('Python Azure ML job support', 'python-azure-ml-job-support'), AGENT_HUB_LINK],
  [EXISTING.pythonAiml],
  ['Python Microsoft Foundry job support', 'azure-ai-projects Python', 'Foundry SDK Python'],
);

const pythonAzureMl = svc(
  'python-azure-ml-job-support',
  'Python Azure ML Proxy Job Support — azureml SDK v2 & MLflow',
  'Python Azure ML job support: build with the Azure ML Python SDK v2 — jobs, pipelines, MLflow, endpoints, and AutoML — for training and deployment.',
  'Python Azure ML Proxy Job Support — Train & Deploy in Python',
  'Build Azure ML in Python — SDK v2 jobs, pipelines, MLflow, and endpoints.',
  'Python Azure ML',
  'The Azure ML Python SDK v2 is the way to script training and deployment — but its job, pipeline, and endpoint APIs take experience to use well.',
  'We help you build Azure ML in Python: the SDK v2 for jobs, environments, pipelines, MLflow tracking and models, online/batch endpoints, AutoML, and the model registry — reproducible training-to-deployment in code.',
  'Python Azure ML', 'We build Azure ML in Python with the SDK v2 — jobs, pipelines, MLflow, and endpoints.',
  AZUREML_HUB_LINK, [A('Python Microsoft Foundry job support', 'python-microsoft-foundry-job-support'), A('Azure ML training job support', 'azure-ml-training-job-support')],
  [EXISTING.pythonAiml],
  ['Python Azure ML job support', 'azureml SDK v2', 'Azure ML Python'],
);

const dotnetFoundry = svc(
  'dotnet-microsoft-foundry-job-support',
  '.NET Microsoft Foundry Proxy Job Support — Azure.AI SDKs & Agents in C#',
  '.NET Microsoft Foundry job support: build Foundry apps and agents in C#/.NET with the Azure AI SDKs and Microsoft Agent Framework — agents, tools, and the Responses API.',
  '.NET Microsoft Foundry Proxy Job Support — Build Foundry Apps in C#',
  'Build Foundry apps and agents in .NET — Azure AI SDKs, Agent Framework, and Responses API.',
  '.NET Microsoft Foundry',
  'Enterprise .NET teams want Foundry in C#. The Azure AI SDKs and Microsoft Agent Framework support it well — with the right patterns.',
  'We help .NET teams build on Microsoft Foundry: the Azure AI SDKs, Microsoft Agent Framework (first-class .NET), agents and tools, the Responses API, dependency injection, and hosting — production Foundry apps in C#/.NET.',
  '.NET Microsoft Foundry', 'We build Foundry apps and agents in C#/.NET with the Azure AI SDKs and Microsoft Agent Framework.',
  FOUNDRY_HUB_LINK, [A('Microsoft Agent Framework job support', 'microsoft-agent-framework-job-support'), EXISTING.azureAiFoundryDotnet],
  [EXISTING.dotnetAzure],
  ['.NET Microsoft Foundry job support', 'C# Foundry', 'Azure AI SDK .NET'],
);

const typescriptFoundry = svc(
  'typescript-microsoft-foundry-job-support',
  'TypeScript Microsoft Foundry Proxy Job Support — Node & Web AI Apps',
  'TypeScript Microsoft Foundry job support: build Foundry and Azure OpenAI apps in TypeScript/Node — the OpenAI client, agents, Responses API, and streaming for web apps.',
  'TypeScript Microsoft Foundry Proxy Job Support — AI Apps in TypeScript',
  'Build Foundry and Azure OpenAI apps in TypeScript — OpenAI client, agents, and streaming.',
  'TypeScript Microsoft Foundry',
  'Web and Node teams build AI in TypeScript. The OpenAI-compatible clients and Responses API work well — with correct streaming and auth.',
  'We help you build Foundry/Azure OpenAI apps in TypeScript/Node: the OpenAI-compatible client against the Foundry endpoint, the Responses API, tool calling, streaming to web UIs, agents, and Managed Identity auth — production TypeScript AI apps.',
  'TypeScript Microsoft Foundry', 'We build Foundry/Azure OpenAI apps in TypeScript — OpenAI client, Responses API, agents, and streaming.',
  FOUNDRY_HUB_LINK, [A('Azure OpenAI Responses API', 'azure-openai-responses-api-job-support'), AGENT_HUB_LINK],
  [EXISTING.openaiApi],
  ['TypeScript Microsoft Foundry job support', 'Node Azure OpenAI', 'TypeScript AI Azure'],
);

// ─── Framework integrations ──────────────────────────────────────────────────

const semanticKernelFoundry = svc(
  'semantic-kernel-foundry-job-support',
  'Semantic Kernel + Foundry Proxy Job Support — SK Agents on Azure',
  'Semantic Kernel Foundry job support: build and run Semantic Kernel agents and plugins against Microsoft Foundry and Azure OpenAI, and plan migration to Microsoft Agent Framework.',
  'Semantic Kernel + Foundry Proxy Job Support — SK on Azure AI',
  'Build Semantic Kernel apps on Foundry — plugins, planners, and a path to Agent Framework.',
  'Semantic Kernel + Foundry',
  'Semantic Kernel is widely used with Azure OpenAI. Running it on Foundry — and planning the move to Agent Framework — is a common need.',
  'We help you build Semantic Kernel on Microsoft Foundry/Azure OpenAI: plugins, planners, memory, and agents, deploy as Foundry hosted agents, and plan the migration to Microsoft Agent Framework (the SK successor) when you are ready.',
  'Semantic Kernel Foundry', 'We build SK agents and plugins on Foundry/Azure OpenAI and plan migration to Agent Framework.',
  FOUNDRY_HUB_LINK, [A('Semantic Kernel → Agent Framework migration', 'semantic-kernel-agent-framework-migration'), A('Microsoft Agent Framework job support', 'microsoft-agent-framework-job-support')],
  [],
  ['Semantic Kernel Foundry job support', 'Semantic Kernel Azure', 'SK agents Foundry'],
);

const langgraphFoundry = svc(
  'langgraph-microsoft-foundry-job-support',
  'LangGraph + Microsoft Foundry Proxy Job Support — Graph Agents on Azure',
  'LangGraph Microsoft Foundry job support: build LangGraph agent workflows against Azure OpenAI and Foundry Models, and deploy as Foundry hosted agents with observability.',
  'LangGraph + Microsoft Foundry Proxy Job Support — Graph Agents on Azure AI',
  'Build LangGraph agents on Azure — Foundry Models, hosted deployment, and observability.',
  'LangGraph + Foundry',
  'LangGraph is popular for stateful agent graphs. Running it against Azure OpenAI/Foundry and deploying as a hosted agent needs correct wiring.',
  'We help you build LangGraph on Azure: agent graphs against Azure OpenAI and Foundry Models, tool and MCP integration, state and checkpoints (e.g. Cosmos DB), deployment as Foundry hosted agents, and tracing/observability.',
  'LangGraph Foundry', 'We build LangGraph agent workflows on Azure OpenAI/Foundry and deploy them as hosted agents.',
  FOUNDRY_HUB_LINK, [A('Foundry hosted agents job support', 'foundry-hosted-agents-job-support'), AGENT_HUB_LINK],
  [EXISTING.langchain],
  ['LangGraph Microsoft Foundry job support', 'LangGraph Azure', 'graph agents Azure'],
);

const langchainAzure = svc(
  'langchain-azure-openai-job-support',
  'LangChain + Azure OpenAI Proxy Job Support — RAG & Chains on Azure',
  'LangChain Azure OpenAI job support: build LangChain chains, RAG, and agents against Azure OpenAI and Azure AI Search, with streaming, tools, and production reliability.',
  'LangChain + Azure OpenAI Proxy Job Support — Chains & RAG on Azure',
  'Build LangChain apps on Azure — chains, RAG with Azure AI Search, tools, and streaming.',
  'LangChain + Azure OpenAI',
  'LangChain against Azure OpenAI is common but full of footguns — deployment names, versions, retries, and RAG wiring. We make it reliable.',
  'We help you build LangChain on Azure OpenAI: correct AzureChatOpenAI/embeddings config (deployment names, API versions), RAG with Azure AI Search retrievers, tools and agents, streaming, retries, and production reliability.',
  'LangChain Azure OpenAI', 'We build LangChain chains, RAG, and agents on Azure OpenAI + Azure AI Search reliably.',
  FOUNDRY_HUB_LINK, [A('Azure AI Search RAG job support', 'azure-ai-search-rag-job-support'), EXISTING.langchain],
  [EXISTING.azureOpenAiJobSupport],
  ['LangChain Azure OpenAI job support', 'LangChain Azure', 'LangChain RAG Azure'],
);

const mcpFoundry = svc(
  'mcp-microsoft-foundry-job-support',
  'MCP + Microsoft Foundry Proxy Job Support — Model Context Protocol on Azure',
  'MCP Microsoft Foundry job support: build and connect MCP servers and tools for Foundry agents — remote MCP, custom MCP on Azure Functions, auth, and governance via Toolboxes.',
  'MCP + Microsoft Foundry Proxy Job Support — Reliable MCP on Azure',
  'Build and connect MCP servers for Foundry agents — remote and custom MCP, auth, and governance.',
  'MCP + Foundry',
  'MCP is central to Foundry’s tool ecosystem. Building reliable MCP servers and connecting them securely to agents is a specialist skill.',
  'We help you build and integrate MCP with Microsoft Foundry: remote MCP servers, custom MCP servers on Azure Functions (/runtime/webhooks/mcp), authentication and reliability, tool-schema design, and governance through Foundry Toolboxes.',
  'MCP Microsoft Foundry', 'We build and connect MCP servers for Foundry agents — remote and custom MCP, auth, and Toolbox governance.',
  FOUNDRY_HUB_LINK, [A('Foundry agent MCP job support', 'foundry-agent-mcp-job-support'), A('Azure Functions OpenAI job support', 'azure-functions-openai-job-support')],
  [AGENT_HUB_LINK],
  ['MCP Microsoft Foundry job support', 'MCP Azure', 'Model Context Protocol Foundry'],
);

export const azureOpsPages: LandingPageConfig[] = [
  securityHub,
  foundrySecurity,
  openaiSecurity,
  privateEndpoint,
  managedIdentity,
  rbac,
  governance,
  observabilityHub,
  openaiMonitoring,
  mlMonitoring,
  appInsights,
  openTelemetry,
  logAnalytics,
  aiCostOptimization,
  mlCostOptimization,
  gpuCostOptimization,
  aiTerraform,
  foundryTerraform,
  mlTerraform,
  aiBicep,
  githubActions,
  azureDevops,
  genaiCicd,
  pythonFoundry,
  pythonAzureMl,
  dotnetFoundry,
  typescriptFoundry,
  semanticKernelFoundry,
  langgraphFoundry,
  langchainAzure,
  mcpFoundry,
];
