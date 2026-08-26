export const meta = {
  slug: "amazon-bedrock-agentcore-architecture-troubleshooting",
  title: "Amazon Bedrock AgentCore Architecture & Production Troubleshooting: Runtime, Memory, Gateway, Identity, Policy",
  description: "How Amazon Bedrock AgentCore fits together in production — Runtime, Memory, Gateway, Identity and Policy — plus MCP tools, observability, and how to troubleshoot session, tool and authorization failures.",
  date: "2026-08-26",
  keywords: "amazon bedrock agentcore, agentcore runtime, agentcore memory, agentcore gateway, agentcore identity, agentcore policy, cedar authorization, mcp tools, bedrock agents troubleshooting",
  permalink: "/blog/amazon-bedrock-agentcore-architecture-troubleshooting/",
  about: "Amazon Bedrock AgentCore architecture",
  faqs: [
    { q: "What is Amazon Bedrock AgentCore?", a: "AgentCore is the set of managed, framework-agnostic building blocks for running AI agents in production on AWS. It provides Runtime (secure, session-isolated execution), Memory (short- and long-term state), Gateway (turn APIs and Lambdas into agent tools, increasingly via MCP), Identity (delegated access to AWS and third-party resources), Policy (fine-grained Cedar-based authorization) and built-in Observability. It reached GA in October 2025, with Policy/Cedar GA in March 2026." },
    { q: "What are the AgentCore components?", a: "Runtime executes the agent with per-session isolation; Memory stores conversation and long-term knowledge; Gateway exposes tools (APIs, Lambda, MCP servers); Identity handles authenticated, delegated access; Policy enforces authorization with Cedar; Observability provides traces of reasoning steps and tool calls. You can adopt them individually or together and use any agent framework." },
    { q: "How do you troubleshoot AgentCore failures?", a: "Isolate the layer: session/timeout and cold-start issues live in Runtime; wrong or missing context is Memory; a tool that fails or is not called is Gateway (schema, connectivity, MCP registration); AccessDenied on a tool is Identity or Policy; runaway loops and cost show up in Observability traces. Read the agent trace end to end before changing the prompt." },
    { q: "Does AgentCore support MCP?", a: "Yes. AgentCore Gateway increasingly exposes tools over the Model Context Protocol (MCP), so agents can discover and call standardized tool servers. This lets you reuse MCP tool servers across agents and frameworks instead of hand-wiring each integration." },
  ],
} as const;
