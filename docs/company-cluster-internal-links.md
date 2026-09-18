# Company Cluster — Internal Link & Orphan Report

## No-orphan guarantee (by construction)

Every new indexable page has inbound + outbound contextual links:

- **Inbound to each hub:** the `/tech-companies/` dashboard renders a crawlable `<Link>`
  for **all 500 companies** in its default (no-filter) server-rendered view, grouped A–Z.
  Every hub company's card `href` is its hub URL → guaranteed ≥1 inbound link.
  Additionally the homepage `TechCompaniesHomeSection` links the 16 featured companies,
  and the navbar links `/tech-companies/`.
- **Outbound from each hub:** every hub's `relatedLinks` includes geo links
  (`/job-support-usa/`, `/job-support-canada/`), 4 industry-relevant existing tech links
  (`EX`), `get-interview-scheduled`, `proxy-interview-support`, `proxy-job-support`,
  `job-application-candidate-marketing`, `/tech-companies/`, the blog, and (for AI/peer
  sets) sibling hubs. Plus the LandingPageTemplate breadcrumb.

## Link targets verified

All `EX` cross-link targets were verified to resolve to real `app/<slug>` routes:
`/proxy-interview-support/`, `/proxy-job-support/`, `/get-interview-scheduled/`,
`/job-application-candidate-marketing/`, `/job-support-usa/`, `/job-support-canada/`,
`/job-support-uk/`, `/knowledge-base/`, `/blog/`, `/azure-job-support-guide/`,
`/aws-job-support-guide/`, `/kubernetes-job-support-guide/`, `/devops-job-support-usa/`,
`/sre-job-support-usa/`, `/cloud-job-support-usa/`, `/ai-ml-proxy-interview-support/`,
`/data-engineering-job-support-guide/`, `/cybersecurity-devsecops-job-support-guide/`,
`/mlops-job-support/`, `/rag-job-support/`, `/llm-job-support/`, `/generative-ai-job-support/`,
`/agentic-ai-job-support/`, `/java-job-support-guide/`, `/react-job-support-guide/`,
`/dotnet-job-support-guide/`, `/google-vertex-ai-job-support/`, `/openai-api-job-support/`,
`/databricks-ml-job-support/`, `/snowflake-cortex-ai-job-support/`.

Note: the plain `/java-job-support/`, `/python-job-support/`, `/react-job-support/`,
`/aws-job-support/` routes do **not** exist (they are referenced by the older Amazon
`EXISTING` map); this cluster deliberately uses the verified `-guide`/`-usa` forms instead.

## Non-hub (Tier D) companies

Represented as dashboard cards with a valid `primaryUrl` chosen by industry
(`ai → /ai-ml-proxy-interview-support/`, `cloud/hardware → /cloud-job-support-usa/`,
`data → /data-engineering-job-support-guide/`, `cybersecurity → /cybersecurity-devsecops-job-support-guide/`,
`devtools → /proxy-job-support/`, else `/proxy-interview-support/`). No dead cards.

## Peer / sibling links

AI hubs cross-link (OpenAI ↔ Anthropic), GitHub → Microsoft, etc., strengthening the graph.
