# Company Cluster — September 2026 Research Notes

Freshness baseline: **September 2026**. Company engineering facts used in the Tier A hand-
written hubs reflect publicly documented, current employer engineering ecosystems as of that
baseline. This cluster deliberately avoids over-specific version claims where they add risk;
where a product/model family is named it reflects the current generation.

## Approach

- Company categorisation, aliases, products, disciplines, roles and technologies were drawn
  from each employer's public careers pages, engineering blogs and developer documentation.
- Where a fact could change (model names, product renames), hubs describe the durable
  product family (e.g. "Vertex AI & Gemini", "Azure OpenAI & Foundry", "Mosaic AI",
  "Agentforce", "watsonx", "Cortex AI", "Copilot / Copilot agents") rather than a volatile
  point version, keeping pages correct as generations iterate.
- The 500-company inventory is the exact canonical master list supplied in the brief;
  the source order and index are preserved (see coverage report).

## Current-technology anchors reflected in hub content

- **AI labs / models:** OpenAI (ChatGPT, GPT models, Agents/Responses API, evals),
  Anthropic (Claude, Claude API, Claude Code, Model Context Protocol / MCP, agents & tool
  use), Google (Vertex AI, Gemini), Microsoft (Azure OpenAI, Foundry, Copilot), Meta
  (Llama, PyTorch), NVIDIA (CUDA, Blackwell/Hopper GPUs, TensorRT, Triton, NeMo/NIM).
- **Data/AI platforms:** Databricks (Lakehouse, Spark, MLflow, Unity Catalog, Mosaic AI),
  Snowflake (Snowpark, Cortex AI, Iceberg), MongoDB (Atlas Vector Search).
- **Cloud/infra:** Kubernetes ecosystem, OpenShift, Terraform/IaC, OpenTelemetry
  observability, edge (Cloudflare Workers), GPU cloud (CoreWeave).
- **Security:** CrowdStrike Falcon (Charlotte AI), Palo Alto Networks (Prisma, Cortex
  XSIAM), Wiz (CNAPP), Snyk (developer security).
- **Company platforms:** Salesforce Agentforce / Data Cloud, ServiceNow Now Assist,
  IBM watsonx + Red Hat, Adobe Firefly.

## SEO / search documentation reviewed (principles applied)

- Google Search Central spam policies (doorway abuse, scaled-content abuse, thin content):
  addressed by tiered depth, unique per-company blurbs, industry-accurate (not token-swapped)
  technical sections, self-canonicalisation, and keeping the long tail as dashboard cards
  rather than thin indexable pages.
- Structured-data guidance: `CollectionPage`/`ItemList`/`BreadcrumbList` on the dashboard,
  standard WebPage/FAQPage on hubs; no misuse of Organization schema for listed employers.
- llms.txt current practice: curated root file + structured `llms-full.txt`; per-page
  Markdown alternates evaluated and deferred (see LLM discovery report).

## Sources / maintenance

- Per-company `lastResearched` / `factsVerifiedThrough` is represented at the cluster level
  via `LASTMOD = 2026-09-19` in `data/companies/shared.ts`. Hubs are data-driven so a future
  refresh updates facts without rewriting routes.
