import type { LandingPageConfig } from '../landing-pages';
import {
  awsPage,
  awsServicePage,
  relatedLinks,
  jobSupportHighlights,
  awsServiceFaqs,
  EXISTING,
  AWS_HUB_LINK,
  BEDROCK_HUB_LINK,
  AGENTCORE_HUB_LINK,
  AWS_PRODUCTION_LINK,
  AWS_INTERVIEW_HUB_LINK,
} from './shared';

// ─── AgentCore hub ───────────────────────────────────────────────────────────

export const agentCoreHub: LandingPageConfig = awsPage({
  slug: 'amazon-bedrock-agentcore-job-support',
  title: 'Amazon Bedrock AgentCore Support — Deploy & Operate Production AI Agents',
  description:
    'Real-time Amazon Bedrock AgentCore job support: Runtime, Memory, Gateway, Identity, Policy (Cedar), Browser, Code Interpreter, and Observability for deploying and scaling secure production AI agents on AWS. Same-day, confidential.',
  keywords: [
    'Amazon Bedrock AgentCore support', 'AgentCore job support', 'AgentCore production support',
    'AgentCore Runtime support', 'AgentCore Memory support', 'AgentCore Gateway support',
    'AgentCore deployment', 'AWS agentic AI support', 'production AI agents AWS',
  ],
  h1: 'Amazon Bedrock AgentCore Support — Build, Deploy & Scale Production AI Agents',
  tagline:
    'The strongest agent-production hub on AWS: real-time help with AgentCore Runtime, Memory, Gateway, Identity, Policy, Browser, Code Interpreter, and Observability.',
  heroEyebrow: 'Amazon Bedrock AgentCore Hub — Updated August 2026',
  painIntro:
    'Moving an agent from a notebook prototype to a secure, scalable production service is where most teams get stuck — session isolation, memory, tool access, identity, authorization, and observability all have to work together. AgentCore is built for exactly this, but it has a learning curve.',
  heroVariant:
    'Amazon Bedrock AgentCore (generally available since October 2025) is a set of modular services for deploying and operating AI agents securely at scale, framework-agnostic and model-agnostic. We help you across every module: Runtime (complete session isolation, long-running workloads up to 8 hours, serverless scaling), Memory (short-term and long-term memory with strategies and retrieval), Gateway (turning APIs, Lambda functions, and MCP servers into agent tools), Identity (workload and user identity, OAuth, IAM), Policy (Cedar-based, default-deny authorization for tool calls, GA March 2026), Browser (secure web automation), Code Interpreter (sandboxed code execution), and Observability (CloudWatch and OpenTelemetry traces, spans, and session insight). All services support VPC, AWS PrivateLink, and CloudFormation, with consumption-based pricing.',
  geoLine:
    'Amazon Bedrock AgentCore support for engineers across USA, Canada, UK, Ireland, Germany, Netherlands, Australia, Singapore, UAE, and worldwide.',
  timezoneNote: 'Available across US, Canada, UK, European, Australian, and Asia-Pacific business hours.',
  techSnippet:
    'We cover AgentCore Runtime, Memory, Gateway, Identity, Policy (Cedar), Browser, Code Interpreter, Observability, and Evaluations — with Strands, LangGraph, CrewAI, and MCP integration.',
  highlights: jobSupportHighlights,
  faqs: [
    {
      question: 'What is Amazon Bedrock AgentCore and what support do you provide?',
      answer:
        'AgentCore is AWS’s set of services for deploying and operating production AI agents securely at scale — it became generally available in October 2025. We provide real-time help across all of it: Runtime, Memory, Gateway, Identity, Policy (Cedar), Browser, Code Interpreter, and Observability, plus integrating your agent framework (Strands, LangGraph, CrewAI, or custom Python) and model. We help you deploy, secure, scale, debug, and observe agents in production.',
    },
    {
      question: 'How is AgentCore different from the classic Bedrock Agents?',
      answer:
        'AgentCore is the current, recommended path for building and running agents at production scale — it is framework- and model-agnostic and provides dedicated infrastructure (Runtime, Memory, Gateway, Identity, Policy, Browser, Code Interpreter, Observability). We center new work on AgentCore and only preserve legacy Bedrock Agents coverage where it is still technically accurate and useful for your situation.',
    },
    {
      question: 'Can you help with AgentCore production incidents?',
      answer:
        'Yes. Runtime session and scaling failures, Memory not persisting or retrieving correctly, Gateway tool discovery and authentication problems, Identity/OAuth failures, Policy (Cedar) authorization denials, Browser and Code Interpreter execution issues, and observability gaps — we work these live using CloudWatch and OpenTelemetry traces.',
    },
    {
      question: 'Do you cover MCP and multi-agent on AgentCore?',
      answer:
        'Yes. We help you expose and consume tools over MCP through AgentCore Gateway, secure them with Identity and Policy, and design multi-agent and agent-to-agent (A2A) patterns. We connect this to your existing LangGraph, Strands, and MCP work.',
    },
    {
      question: 'How do I get started and is it confidential?',
      answer:
        'Message us on WhatsApp with your agent use case and where you are stuck. We assign the right expert — usually same-day. Every engagement is confidential and NDAs are available; we act in your AWS account only under your direction.',
    },
  ],
  useCasesSection: {
    title: 'Amazon Bedrock AgentCore Situations We Help With',
    cases: [
      'Moving an agent prototype into AgentCore Runtime with session isolation and scaling',
      'Designing short-term and long-term Memory strategies and fixing retrieval issues',
      'Turning APIs, Lambda functions, and MCP servers into tools via AgentCore Gateway',
      'Securing agents with Identity (OAuth, IAM) and Policy (Cedar, default-deny) authorization',
      'Adding Browser and Code Interpreter capabilities safely in sandboxed execution',
      'Instrumenting Observability with CloudWatch and OpenTelemetry to debug agent trajectories',
    ],
  },
  proxySection: {
    title: 'AgentCore Interview & Career Support',
    intro:
      'Interviewing for an AWS agentic AI or AgentCore role? Our experts back you live, in real time, during the real interview.',
    points: [
      'AgentCore architecture and system-design interview support (Runtime, Memory, Gateway, Identity, Policy)',
      'Multi-agent, MCP, and A2A design questions',
      'Live, discreet proxy interview support during the real interview',
      'Profile positioning for AWS Agentic AI / AgentCore Engineer roles',
      'Confidential, in-house AWS AI experts — NDAs available',
    ],
  },
  bottomCTAHeading: 'Need Amazon Bedrock AgentCore Support or a Production Fix Now?',
  bottomCTABody:
    'In-house AgentCore experts available same-day — Runtime, Memory, Gateway, Identity, Policy, Browser, Code Interpreter, and Observability. Talk to ProxyTechSupport on WhatsApp now.',
  relatedLinks: relatedLinks({
    geoLinks: [AWS_HUB_LINK, BEDROCK_HUB_LINK],
    techLinks: [
      { label: 'AgentCore Runtime support', href: '/amazon-bedrock-agentcore-runtime-job-support/' },
      { label: 'AgentCore Gateway support', href: '/amazon-bedrock-agentcore-gateway-job-support/' },
    ],
    problemLink: { label: 'AgentCore troubleshooting', href: '/amazon-bedrock-agentcore-troubleshooting-support/' },
    proxyLink: { label: 'AgentCore interview support', href: '/amazon-bedrock-agentcore-interview-proxy-support/' },
    additionalLinks: [
      { label: 'AgentCore Runtime support', href: '/amazon-bedrock-agentcore-runtime-job-support/' },
      { label: 'AgentCore Memory support', href: '/amazon-bedrock-agentcore-memory-job-support/' },
      { label: 'AgentCore Gateway support', href: '/amazon-bedrock-agentcore-gateway-job-support/' },
      { label: 'AgentCore Identity support', href: '/amazon-bedrock-agentcore-identity-job-support/' },
      { label: 'AgentCore Policy (Cedar) support', href: '/amazon-bedrock-agentcore-policy-job-support/' },
      { label: 'AgentCore Browser support', href: '/amazon-bedrock-agentcore-browser-job-support/' },
      { label: 'AgentCore Code Interpreter support', href: '/amazon-bedrock-agentcore-code-interpreter-job-support/' },
      { label: 'AgentCore Observability support', href: '/amazon-bedrock-agentcore-observability-job-support/' },
      { label: 'AgentCore interview support', href: '/amazon-bedrock-agentcore-interview-proxy-support/' },
      { label: 'MCP on AWS support', href: '/aws-mcp-agentcore-job-support/' },
      BEDROCK_HUB_LINK, AWS_PRODUCTION_LINK, EXISTING.agenticAi, EXISTING.langchain,
      { label: 'AgentCore architecture & troubleshooting (guide)', href: '/blog/amazon-bedrock-agentcore-architecture-troubleshooting/' },
    ],
  }),
});

// Shared related-links for AgentCore component pages (hub + siblings + authority).
const acRelated = (self: string) =>
  relatedLinks({
    geoLinks: [AGENTCORE_HUB_LINK, AWS_HUB_LINK],
    techLinks: [BEDROCK_HUB_LINK, { label: 'MCP on AWS support', href: '/aws-mcp-agentcore-job-support/' }],
    problemLink: { label: 'AgentCore troubleshooting', href: '/amazon-bedrock-agentcore-troubleshooting-support/' },
    proxyLink: { label: 'AgentCore interview support', href: '/amazon-bedrock-agentcore-interview-proxy-support/' },
    additionalLinks: [
      { label: 'AgentCore Runtime', href: '/amazon-bedrock-agentcore-runtime-job-support/' },
      { label: 'AgentCore Memory', href: '/amazon-bedrock-agentcore-memory-job-support/' },
      { label: 'AgentCore Gateway', href: '/amazon-bedrock-agentcore-gateway-job-support/' },
      { label: 'AgentCore Identity', href: '/amazon-bedrock-agentcore-identity-job-support/' },
      { label: 'AgentCore Policy', href: '/amazon-bedrock-agentcore-policy-job-support/' },
      { label: 'AgentCore Observability', href: '/amazon-bedrock-agentcore-observability-job-support/' },
      AGENTCORE_HUB_LINK, EXISTING.agenticAi,
    ].filter((l) => l.href !== self),
  });

// ─── AgentCore Runtime ───────────────────────────────────────────────────────

export const agentCoreRuntime: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-agentcore-runtime-job-support',
  title: 'AgentCore Runtime Support — Session Isolation, Scaling & Long-Running Agents',
  description:
    'Real-time Amazon Bedrock AgentCore Runtime support: session isolation, serverless scaling, long-running agent workloads (up to 8 hours), framework deployment, and production runtime debugging on AWS.',
  keywords: [
    'AgentCore Runtime support', 'AgentCore session isolation', 'AgentCore scaling',
    'AgentCore long-running agents', 'AgentCore deployment', 'serverless agent workloads AWS',
  ],
  h1: 'Amazon Bedrock AgentCore Runtime Support — Deploy & Scale Agents Securely',
  tagline:
    'AgentCore Runtime gives each agent session complete isolation, serverless scaling, and long-running workload support. We help you deploy and operate it in production.',
  heroEyebrow: 'AgentCore Runtime',
  painIntro:
    'An agent that works locally but fails or leaks state when deployed, or long-running tasks getting killed? Runtime is where deployment, isolation, and scaling come together.',
  heroVariant:
    'AgentCore Runtime is a secure, serverless runtime purpose-built for agents: it provides complete session isolation so each user session is separated, supports long-running workloads up to 8 hours, and scales automatically. It is framework-agnostic — deploy agents built with Strands, LangGraph, CrewAI, or custom Python. We help you package and deploy your agent, configure session handling and concurrency, keep workloads within limits, integrate Memory and Gateway, run inside a VPC with PrivateLink, and debug runtime failures with Observability.',
  faqs: awsServiceFaqs('AgentCore Runtime', 'We help you deploy framework-agnostic agents with session isolation, serverless scaling, and long-running workload support, then debug runtime failures.'),
  useCasesSection: {
    title: 'AgentCore Runtime Situations We Help With',
    cases: [
      'Deploying a Strands, LangGraph, CrewAI, or custom Python agent into Runtime',
      'Fixing state leakage between sessions with proper session isolation',
      'Supporting long-running agent workloads that exceed short timeouts',
      'Autoscaling and concurrency for spiky agent traffic',
      'Running agents inside a VPC with PrivateLink for enterprise networking',
      'Debugging Runtime failures with Observability traces and spans',
    ],
  },
  relatedLinks: acRelated('/amazon-bedrock-agentcore-runtime-job-support/'),
});

// ─── AgentCore Memory ────────────────────────────────────────────────────────

export const agentCoreMemory: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-agentcore-memory-job-support',
  title: 'AgentCore Memory Support — Short-Term, Long-Term & Personalization',
  description:
    'Real-time Amazon Bedrock AgentCore Memory support: short-term and long-term memory, memory strategies, conversation state, personalization, memory retrieval, and production memory troubleshooting on AWS.',
  keywords: [
    'AgentCore Memory support', 'AgentCore short-term memory', 'AgentCore long-term memory',
    'AgentCore personalization', 'AgentCore conversation state', 'agent memory strategies AWS',
  ],
  h1: 'Amazon Bedrock AgentCore Memory Support — Give Agents Reliable Memory',
  tagline:
    'Agents without memory repeat themselves and forget context. AgentCore Memory gives you short-term and long-term memory — we help you design and debug it.',
  heroEyebrow: 'AgentCore Memory',
  painIntro:
    'Your agent forgets what the user said two turns ago, or does not carry knowledge across sessions? Memory design is the difference between a demo and a product.',
  heroVariant:
    'AgentCore Memory provides managed short-term memory (conversation and session context) and long-term memory (durable knowledge and personalization across sessions), with configurable memory strategies and retrieval. We help you choose what to store, design memory strategies and extraction, wire retrieval into the agent loop, personalize responses per user, and fix issues where memory is not persisting or retrieving as expected. We connect this to your Runtime deployment and, where relevant, to Knowledge Bases for factual grounding.',
  faqs: awsServiceFaqs('AgentCore Memory', 'We help you design short-term and long-term memory, memory strategies, retrieval, and personalization, then fix persistence and retrieval issues.'),
  useCasesSection: {
    title: 'AgentCore Memory Situations We Help With',
    cases: [
      'Choosing short-term vs long-term memory for your agent use case',
      'Designing memory strategies and extraction for durable knowledge',
      'Wiring memory retrieval into the agent loop so context actually helps',
      'Personalizing responses per user across sessions',
      'Fixing memory that is not persisting or retrieving correctly',
      'Combining Memory with Knowledge Bases for factual grounding',
    ],
  },
  relatedLinks: acRelated('/amazon-bedrock-agentcore-memory-job-support/'),
});

// ─── AgentCore Gateway ───────────────────────────────────────────────────────

export const agentCoreGateway: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-agentcore-gateway-job-support',
  title: 'AgentCore Gateway Support — Tools, APIs, Lambda & MCP for Agents',
  description:
    'Real-time Amazon Bedrock AgentCore Gateway support: turning APIs, Lambda functions, and MCP servers into agent tools, tool discovery, authentication and authorization, and gateway debugging on AWS.',
  keywords: [
    'AgentCore Gateway support', 'AgentCore tools', 'AgentCore MCP tools', 'AgentCore Lambda tools',
    'AgentCore tool discovery', 'AgentCore tool authentication', 'agent tool authorization AWS',
  ],
  h1: 'Amazon Bedrock AgentCore Gateway Support — Give Agents Secure Tools',
  tagline:
    'AgentCore Gateway turns your APIs, Lambda functions, and MCP servers into governed agent tools. We help you connect, secure, and debug them.',
  heroEyebrow: 'AgentCore Gateway',
  painIntro:
    'Agents need tools, but exposing real APIs to a non-deterministic LLM is risky. Gateway is how you do it safely — tool discovery, authentication, and authorization included.',
  heroVariant:
    'AgentCore Gateway lets you turn existing APIs, AWS Lambda functions, and MCP servers into tools your agent can discover and call, with built-in authentication and authorization. We help you register tools, design the tool schema and discovery, wire authentication (OAuth, IAM) via AgentCore Identity, apply Policy (Cedar) so only allowed tool invocations pass, and debug gateway failures. This is where MCP on AWS comes together — we connect it to your existing MCP servers and multi-agent design.',
  faqs: awsServiceFaqs('AgentCore Gateway', 'We help you turn APIs, Lambda functions, and MCP servers into secure agent tools with discovery, authentication, and Cedar-based authorization.'),
  useCasesSection: {
    title: 'AgentCore Gateway Situations We Help With',
    cases: [
      'Turning an existing REST API or Lambda function into an agent tool',
      'Exposing and consuming MCP servers through Gateway',
      'Designing tool schemas and tool discovery for reliable tool use',
      'Securing tool calls with Identity (OAuth/IAM) and Policy (Cedar)',
      'Debugging tool-call failures and authentication errors',
      'Connecting Gateway tools into a multi-agent or A2A design',
    ],
  },
  relatedLinks: acRelated('/amazon-bedrock-agentcore-gateway-job-support/'),
});

// ─── AgentCore Identity ──────────────────────────────────────────────────────

export const agentCoreIdentity: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-agentcore-identity-job-support',
  title: 'AgentCore Identity Support — Workload & User Identity, OAuth, IAM',
  description:
    'Real-time Amazon Bedrock AgentCore Identity support: workload identity, user identity, OAuth, IAM, secure credential and token storage, and authentication/authorization for production AI agents on AWS.',
  keywords: [
    'AgentCore Identity support', 'AgentCore workload identity', 'AgentCore user identity',
    'AgentCore OAuth', 'AgentCore IAM', 'agent credentials AWS', 'agent authentication AWS',
  ],
  h1: 'Amazon Bedrock AgentCore Identity Support — Authenticate Agents & Users Securely',
  tagline:
    'Agents act on behalf of users and workloads — that needs real identity. AgentCore Identity handles OAuth, IAM, and secure token storage. We help you get it right.',
  heroEyebrow: 'AgentCore Identity',
  painIntro:
    'How does your agent authenticate to downstream tools on behalf of a user, store refresh tokens securely, and prove its own workload identity? Identity is the foundation of secure agents.',
  heroVariant:
    'AgentCore Identity provides identity-aware authorization for agents — both workload identity (the agent’s own identity) and user identity (acting on behalf of a signed-in user), with OAuth support, IAM integration, and secure vault storage for credentials and refresh tokens. We help you design the identity model, integrate with IAM Identity Center and external OAuth providers, store and rotate tokens securely, and pass identity through Gateway tool calls so Policy (Cedar) can authorize them correctly.',
  faqs: awsServiceFaqs('AgentCore Identity', 'We help you design workload and user identity, OAuth and IAM integration, and secure token storage so agents authenticate to tools safely.'),
  relatedLinks: acRelated('/amazon-bedrock-agentcore-identity-job-support/'),
});

// ─── AgentCore Policy (Cedar) ────────────────────────────────────────────────

export const agentCorePolicy: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-agentcore-policy-job-support',
  title: 'AgentCore Policy Support — Cedar Authorization for Agent Tool Calls',
  description:
    'Real-time Amazon Bedrock AgentCore Policy support: Cedar-based, default-deny authorization for Gateway tool calls, least-privilege agent permissions, fine-grained tool policy, and policy authoring on AWS.',
  keywords: [
    'AgentCore Policy support', 'AgentCore Cedar', 'agent authorization AWS', 'AgentCore least privilege',
    'AgentCore tool policy', 'Cedar policy agents', 'fine-grained agent authorization',
  ],
  h1: 'Amazon Bedrock AgentCore Policy Support — Control What Your Agents Can Do',
  tagline:
    'An LLM can confidently choose a harmful action. AgentCore Policy uses Cedar to allow only the tool calls you approve — default-deny. We help you author it.',
  heroEyebrow: 'AgentCore Policy (Cedar)',
  painIntro:
    'Your agent has tools, but nothing stops it from calling the wrong one with the wrong arguments? Policy is the authorization boundary that makes agents safe for production.',
  heroVariant:
    'AgentCore Policy (generally available since March 2026) secures agentic workflows using Cedar, the open-source authorization language developed by AWS. When you associate a Policy with a Gateway, it blocks everything by default; policies selectively allow specific tool invocations under specific conditions. Because Cedar is analyzable by automated reasoning, policies are both human-readable and machine-verifiable. We help you design least-privilege tool policies, author and test Cedar rules, model conditions (who, what, when), integrate with Identity for user-aware authorization, and validate policies before they reach production.',
  faqs: awsServiceFaqs('AgentCore Policy', 'We help you author least-privilege Cedar policies for Gateway tool calls, model conditions, integrate with Identity, and validate policies with automated reasoning.'),
  useCasesSection: {
    title: 'AgentCore Policy Situations We Help With',
    cases: [
      'Designing a default-deny authorization boundary for agent tool calls',
      'Authoring and testing Cedar policies for specific tools and conditions',
      'Enforcing least privilege so agents cannot call unapproved tools',
      'Making authorization user-aware by integrating Identity',
      'Validating policies with Cedar analysis before production',
      'Debugging Policy authorization denials on legitimate tool calls',
    ],
  },
  relatedLinks: acRelated('/amazon-bedrock-agentcore-policy-job-support/'),
});

// ─── AgentCore Browser ───────────────────────────────────────────────────────

export const agentCoreBrowser: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-agentcore-browser-job-support',
  title: 'AgentCore Browser Support — Secure Web Automation for AI Agents',
  description:
    'Real-time Amazon Bedrock AgentCore Browser support: browser agents, secure web automation, browser tools, and sandboxed browser workloads for production AI agents on AWS.',
  keywords: [
    'AgentCore Browser support', 'AgentCore web automation', 'browser agents AWS',
    'AgentCore browser tool', 'secure browser execution agents',
  ],
  h1: 'Amazon Bedrock AgentCore Browser Support — Let Agents Use the Web Safely',
  tagline:
    'Some tasks require a real browser. AgentCore Browser gives agents secure, sandboxed web automation. We help you build and operate it.',
  heroEyebrow: 'AgentCore Browser',
  painIntro:
    'Need your agent to navigate a web app, fill a form, or extract data — without giving it uncontrolled internet access? Browser automation for agents has to be sandboxed and observable.',
  heroVariant:
    'AgentCore Browser provides a secure, managed browser environment agents can drive for web automation — navigation, interaction, and extraction — with isolation and observability. We help you design browser workflows, handle authentication and sensitive actions safely, keep execution sandboxed, integrate with your agent framework, and observe and debug browser sessions. We also help you decide when Browser is the right tool vs a direct API or Gateway tool.',
  faqs: awsServiceFaqs('AgentCore Browser', 'We help you build secure, sandboxed browser automation for agents, handle authentication safely, and observe and debug browser sessions.'),
  relatedLinks: acRelated('/amazon-bedrock-agentcore-browser-job-support/'),
});

// ─── AgentCore Code Interpreter ──────────────────────────────────────────────

export const agentCoreCodeInterpreter: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-agentcore-code-interpreter-job-support',
  title: 'AgentCore Code Interpreter Support — Sandboxed Code Execution for Agents',
  description:
    'Real-time Amazon Bedrock AgentCore Code Interpreter support: sandboxed Python execution, analytics workflows, code agents, file handling, and secure code execution for production AI agents on AWS.',
  keywords: [
    'AgentCore Code Interpreter support', 'AgentCore sandboxed execution', 'code agents AWS',
    'AgentCore Python execution', 'agent analytics workflows AWS',
  ],
  h1: 'Amazon Bedrock AgentCore Code Interpreter Support — Let Agents Run Code Safely',
  tagline:
    'Data analysis and computation need real code execution. AgentCore Code Interpreter runs it in a sandbox. We help you build and secure it.',
  heroEyebrow: 'AgentCore Code Interpreter',
  painIntro:
    'Your agent needs to run Python for analysis or file processing, but you cannot let it execute arbitrary code on your infrastructure? Code Interpreter is the sandbox for exactly this.',
  heroVariant:
    'AgentCore Code Interpreter gives agents a secure, sandboxed environment to execute code (such as Python) for analytics, data processing, and computation, with file handling and isolation. We help you design code-execution workflows, handle inputs and file I/O safely, keep execution sandboxed and resource-bounded, integrate results back into the agent loop, and debug execution failures. We also help you combine it with Browser, Gateway tools, and Memory for capable end-to-end agents.',
  faqs: awsServiceFaqs('AgentCore Code Interpreter', 'We help you build sandboxed code execution for agents — analytics workflows, file handling, and secure integration back into the agent loop.'),
  relatedLinks: acRelated('/amazon-bedrock-agentcore-code-interpreter-job-support/'),
});

// ─── AgentCore Observability ─────────────────────────────────────────────────

export const agentCoreObservability: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-agentcore-observability-job-support',
  title: 'AgentCore Observability Support — Traces, Spans & Agent Debugging',
  description:
    'Real-time Amazon Bedrock AgentCore Observability support: CloudWatch and OpenTelemetry traces, spans, session insight, tool-call visibility, latency and failure analysis, and production agent debugging on AWS.',
  keywords: [
    'AgentCore Observability support', 'AgentCore traces', 'AgentCore OpenTelemetry',
    'AgentCore CloudWatch', 'agent debugging AWS', 'agent trajectory observability',
  ],
  h1: 'Amazon Bedrock AgentCore Observability Support — See What Your Agents Actually Do',
  tagline:
    'Agents fail in non-obvious ways. AgentCore Observability gives you traces, spans, and session insight. We help you instrument and debug with it.',
  heroEyebrow: 'AgentCore Observability',
  painIntro:
    'An agent gives a wrong answer or stalls and you cannot tell which tool call, memory retrieval, or model step went wrong? Observability is how you debug agent trajectories.',
  heroVariant:
    'AgentCore Observability integrates with Amazon CloudWatch and OpenTelemetry to give you traces, spans, session-level insight, tool-call visibility, latency, and failure analysis across agent runs. We help you instrument your agent, read and interpret traces and spans, find where a trajectory went wrong (tool call, memory, model, gateway), set up dashboards and alerting, and connect this to evaluation so quality regressions are caught. This is the backbone of production agent debugging and reliability.',
  faqs: awsServiceFaqs('AgentCore Observability', 'We help you instrument agents with CloudWatch and OpenTelemetry, read traces and spans, and debug agent trajectories, latency, and failures.'),
  useCasesSection: {
    title: 'AgentCore Observability Situations We Help With',
    cases: [
      'Instrumenting an agent with CloudWatch and OpenTelemetry traces and spans',
      'Finding which step in a trajectory caused a wrong or stalled response',
      'Measuring tool-call latency and failure rates in production',
      'Building dashboards and alerting for agent reliability',
      'Connecting observability to agent evaluation for quality regressions',
      'Debugging intermittent production agent failures with session insight',
    ],
  },
  relatedLinks: acRelated('/amazon-bedrock-agentcore-observability-job-support/'),
});

// ─── AgentCore troubleshooting ───────────────────────────────────────────────

export const agentCoreTroubleshooting: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-agentcore-troubleshooting-support',
  title: 'AgentCore Troubleshooting — Runtime, Memory, Gateway & Policy Failures',
  description:
    'Fix Amazon Bedrock AgentCore production failures: Runtime and scaling errors, Memory persistence/retrieval issues, Gateway tool-call and auth failures, Identity/OAuth problems, Policy (Cedar) denials, and latency. Live help.',
  keywords: [
    'AgentCore troubleshooting', 'AgentCore Runtime failure', 'AgentCore Memory issue',
    'AgentCore Gateway error', 'AgentCore Policy denial', 'AgentCore latency', 'agent scaling problem AWS',
  ],
  h1: 'Amazon Bedrock AgentCore Troubleshooting — Diagnose & Fix Agent Failures',
  tagline:
    'Symptoms, root causes, diagnostics, and the fix — for the AgentCore failures that break production agents.',
  heroEyebrow: 'AgentCore Troubleshooting',
  painIntro:
    'Agents failing in Runtime, losing Memory, hitting Gateway auth errors, or blocked by Policy denials? Each AgentCore module fails in specific, diagnosable ways.',
  heroVariant:
    'We work AgentCore incidents module by module using Observability traces: Runtime session, scaling, and long-running-workload failures; Memory not persisting or retrieving; Gateway tool discovery, authentication, and tool-call errors; Identity/OAuth and token problems; Policy (Cedar) authorization denials on legitimate calls; Browser and Code Interpreter execution issues; and agent latency and scaling problems. For each we give you symptoms, likely root causes, diagnostic steps (traces, spans, CloudWatch), the fix, validation, and prevention.',
  faqs: awsServiceFaqs('AgentCore production failure', 'We diagnose and fix Runtime, Memory, Gateway, Identity, Policy, Browser, and Code Interpreter failures using Observability traces and CloudWatch.'),
  useCasesSection: {
    title: 'AgentCore Failures We Diagnose & Fix',
    cases: [
      'Runtime session, scaling, or long-running-workload failures',
      'Memory not persisting or retrieving across turns and sessions',
      'Gateway tool discovery, authentication, and tool-call errors',
      'Identity/OAuth and token storage/rotation problems',
      'Policy (Cedar) authorization denials on legitimate tool calls',
      'Agent latency and scaling problems under production load',
    ],
  },
  relatedLinks: relatedLinks({
    geoLinks: [AGENTCORE_HUB_LINK, AWS_PRODUCTION_LINK],
    techLinks: [
      { label: 'AgentCore Observability', href: '/amazon-bedrock-agentcore-observability-job-support/' },
      { label: 'AgentCore Runtime', href: '/amazon-bedrock-agentcore-runtime-job-support/' },
    ],
    problemLink: AWS_PRODUCTION_LINK,
    proxyLink: { label: 'AgentCore interview support', href: '/amazon-bedrock-agentcore-interview-proxy-support/' },
    additionalLinks: [AGENTCORE_HUB_LINK, BEDROCK_HUB_LINK, EXISTING.production, EXISTING.agenticAi],
  }),
});

// ─── AgentCore interview proxy ───────────────────────────────────────────────

export const agentCoreInterviewProxy: LandingPageConfig = awsServicePage({
  slug: 'amazon-bedrock-agentcore-interview-proxy-support',
  title: 'AgentCore Interview Support — Agentic AI System Design on AWS',
  description:
    'Real-time Amazon Bedrock AgentCore interview support: agent architecture, Runtime/Memory/Gateway/Identity/Policy, multi-agent and MCP system design, and coding rounds. Live, real-time proxy interview support.',
  keywords: [
    'AgentCore interview support', 'AWS agentic AI interview', 'AgentCore system design interview',
    'agent architecture interview AWS', 'multi-agent interview AWS', 'AgentCore proxy interview',
  ],
  h1: 'Amazon Bedrock AgentCore Interview Support — Ace Agentic AI System Design',
  tagline:
    'AgentCore interviews test whether you can architect production agents — Runtime, Memory, Gateway, Identity, Policy, and multi-agent design. Our experts back you live, in real time.',
  heroEyebrow: 'AgentCore Interview Support',
  painIntro:
    'An AWS agentic AI or AgentCore interview coming up and unsure how deep the system-design round will go on session isolation, memory strategies, tool authorization, and multi-agent orchestration?',
  heroVariant:
    'Our experts support you across the AgentCore interview surface: agent architecture on Runtime (session isolation, scaling, long-running workloads), Memory strategies (short/long-term, retrieval, personalization), Gateway (tools, MCP, authentication), Identity (workload/user, OAuth, IAM), Policy (Cedar, least privilege), Observability, and multi-agent/A2A design. We provide discreet, real-time live support. We never guarantee selection — hiring decisions are made solely by employers.',
  faqs: awsServiceFaqs('AgentCore interview', 'Our experts support you on agent architecture, Runtime, Memory, Gateway, Identity, Policy, Observability, and multi-agent design, with discreet real-time live support.'),
  relatedLinks: relatedLinks({
    geoLinks: [AWS_INTERVIEW_HUB_LINK, AGENTCORE_HUB_LINK],
    techLinks: [
      { label: 'Amazon Bedrock interview support', href: '/amazon-bedrock-interview-proxy-support/' },
      { label: 'AWS RAG interview support', href: '/aws-rag-interview-proxy-support/' },
    ],
    problemLink: { label: 'AgentCore troubleshooting', href: '/amazon-bedrock-agentcore-troubleshooting-support/' },
    proxyLink: EXISTING.agenticAi,
    additionalLinks: [AWS_INTERVIEW_HUB_LINK, AGENTCORE_HUB_LINK, EXISTING.agenticAi, EXISTING.genaiProxy],
  }),
});

// ─── Batch export ────────────────────────────────────────────────────────────

export const awsAgentCorePages: LandingPageConfig[] = [
  agentCoreHub,
  agentCoreRuntime,
  agentCoreMemory,
  agentCoreGateway,
  agentCoreIdentity,
  agentCorePolicy,
  agentCoreBrowser,
  agentCoreCodeInterpreter,
  agentCoreObservability,
  agentCoreTroubleshooting,
  agentCoreInterviewProxy,
];
