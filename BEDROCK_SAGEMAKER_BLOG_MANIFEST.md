# Amazon Bedrock & SageMaker Blog Cluster — Content Manifest

Purpose: an informational → technical → commercial funnel that ranks for AWS
GenAI / ML long-tail queries and passes contextual authority to the existing
Bedrock / SageMaker / AWS AI-ML **service** and **guide** pages, then to the
WhatsApp / contact funnel.

- Blog articles live in `content/blog-articles/{slug}/` (`meta.ts`, `Article.tsx`, `body.html`)
  and are registered in `content/blog-articles/index.ts` (hand-edited, additive).
- Slugs deliberately **omit** `job-support` / `job-help`, so canonical resolves to
  `/blog/{slug}/` (see `lib/post-canonical.ts`) and they do **not** compete with the
  commercial service pages that already own the `-job-support` phrases.
- Every article: unique title/H1/slug, direct-answer intro, deep technical body,
  FAQ (FAQPage JSON-LD via `meta.faqs`), `about` topic, internal links out, and a
  WhatsApp/commercial CTA. Sitemap + Article/Breadcrumb schema are automatic.
- Technical state aligned to repo-verified AWS through **August 2026**: Bedrock
  AgentCore GA Oct 2025 (Policy/Cedar GA Mar 2026, Harness GA Jun 2026), Amazon Nova 2 GA,
  SageMaker Unified Studio / Lakehouse / Catalog GA 2025, SageMaker AI (training,
  HyperPod, JumpStart, Managed MLflow, Pipelines, Model Registry).

## Cannibalization check

No existing **blog** article targets Bedrock or SageMaker (the closest, `rag-aimlops-…-guide`,
is generic RAG). The Bedrock/SageMaker **commercial** and **guide** pages exist but are
different search intent (transactional / definitional) — blogs support them, not replace them.
Result: **0 collisions**; all 12 = `create`.

## Articles

### Pillar A — Bedrock Job Support (informational / technical)
1. `amazon-bedrock-production-architecture-2026`
   - Title: Amazon Bedrock Production Architecture in 2026: RAG, AgentCore, Guardrails & Inference
   - Intent: implementation/architecture · Target: `/amazon-bedrock-job-support/`
   - Links: what-is-amazon-bedrock-guide, rag-guide, agentcore-architecture-guide, knowledge-bases, agentcore, guardrails, inference, production-support, hub
2. `amazon-bedrock-rag-knowledge-bases-troubleshooting`
   - Title: How to Build and Troubleshoot Amazon Bedrock RAG with Knowledge Bases
   - Intent: implementation + troubleshooting · Target: `/amazon-bedrock-rag-job-support/`
   - Links: rag-guide, knowledge-bases, rag-job-support, rag-troubleshooting, opensearch-vs-pgvector(blog), kb-vs-custom-rag
3. `amazon-bedrock-agentcore-architecture-troubleshooting`
   - Title: Amazon Bedrock AgentCore Architecture & Production Troubleshooting: Runtime, Memory, Gateway, Identity, Policy
   - Intent: architecture/troubleshooting · Target: `/amazon-bedrock-agentcore-job-support/`
   - Links: agentcore-architecture-guide, agentcore hub + subpages, agentcore-troubleshooting, interview-proxy

### Pillar B — Bedrock Proxy Interview (educational prep)
4. `amazon-bedrock-interview-questions-2026`
   - Title: Amazon Bedrock Interview Questions: RAG, AgentCore, Guardrails & Production Scenarios (2026)
   - Intent: interview · Target: `/amazon-bedrock-interview-proxy-support/`
   - Links: how-to-explain-aws-ai-project-in-interview-guide, bedrock-interview-proxy, agentcore-interview-proxy, aws-ai-ml-interview-support
5. `how-to-explain-amazon-bedrock-project-in-interview`
   - Title: How to Explain an Amazon Bedrock Project in a Technical Interview
   - Intent: interview · Target: `/amazon-bedrock-interview-proxy-support/`
   - Links: how-to-explain-aws-ai-project-in-interview-guide, bedrock-interview-proxy, aws-ai-ml-interview-support

### Pillar C — SageMaker Job Support (informational / technical)
6. `amazon-sagemaker-production-architecture-2026`
   - Title: Amazon SageMaker AI Production Architecture in 2026: Training, MLOps & Inference
   - Intent: architecture · Target: `/amazon-sagemaker-ai-job-support/`
   - Links: sagemaker-mlops-guide, sagemaker-job-support, ai-inference, pipelines, mlflow, model-registry, mlops
7. `amazon-sagemaker-mlops-pipelines-mlflow-model-registry`
   - Title: Amazon SageMaker MLOps Architecture: Pipelines, MLflow & Model Registry in Production
   - Intent: implementation · Target: `/amazon-sagemaker-mlflow-job-support/` + pipelines + model-registry + aws-mlops
   - Links: sagemaker-mlops-guide, pipelines, mlflow, model-registry, aws-mlops, sagemaker-ai
8. `amazon-sagemaker-inference-troubleshooting-guide`
   - Title: Amazon SageMaker Inference Troubleshooting: Endpoint, GPU, Latency & Autoscaling Issues
   - Intent: troubleshooting · Target: `/amazon-sagemaker-inference-troubleshooting-support/`
   - Links: ai-inference, inference-troubleshooting, sagemaker-ai, sagemaker-job-support

### Pillar D — SageMaker Proxy Interview (educational prep)
9. `amazon-sagemaker-interview-questions-2026`
   - Title: Amazon SageMaker Interview Questions: Training, Inference, MLflow, Pipelines & MLOps (2026)
   - Intent: interview · Target: `/amazon-sagemaker-interview-proxy-support/`
   - Links: sagemaker-interview-proxy, aws-ai-ml-interview-support, sagemaker-mlops-guide
10. `how-to-explain-sagemaker-mlops-project-in-interview`
    - Title: How to Explain a SageMaker MLOps Project in an AWS ML Interview
    - Intent: interview · Target: `/amazon-sagemaker-interview-proxy-support/`
    - Links: how-to-explain-aws-ai-project-in-interview-guide, sagemaker-interview-proxy, aws-ai-ml-interview-support

### P1 — Cross / comparison (decision-stage)
11. `amazon-bedrock-vs-sagemaker-ai-architecture-guide`
    - Title: Amazon Bedrock vs SageMaker AI: Architecture, Use Cases & Interview Decisions
    - Intent: comparison/decision (informational — NOT the commercial `-job-support` compare page)
    - Target: `/amazon-bedrock-job-support/` + `/amazon-sagemaker-ai-job-support/`
12. `opensearch-vs-pgvector-bedrock-rag-guide`
    - Title: OpenSearch vs pgvector for Amazon Bedrock RAG: Choosing a Vector Store
    - Intent: comparison/decision (informational) · Target: `/amazon-bedrock-knowledge-bases-job-support/`

## Reverse links (service/guide → blog) — additive to `relatedLinks.additionalLinks`
- `amazon-bedrock-job-support` → article 1
- `amazon-bedrock-rag-job-support` + `amazon-bedrock-knowledge-bases-job-support` → article 2
- `amazon-bedrock-agentcore-job-support` → article 3
- `amazon-bedrock-interview-proxy-support` → article 4
- `amazon-sagemaker-ai-job-support` → article 6
- `amazon-sagemaker-mlflow-job-support` / `aws-mlops-job-support` → article 7
- `amazon-sagemaker-ai-inference-job-support` / `amazon-sagemaker-inference-troubleshooting-support` → article 8
- `amazon-sagemaker-interview-proxy-support` → article 9

## Zero-orphan guarantee
Each article receives inbound links from (1) blog index/category, (2) ≥1 service page
(reverse link above), (3) sibling articles in its pillar. Orphan target = 0.
