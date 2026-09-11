You are working inside the existing production website codebase for:

https://proxytechsupport.com/

Your task is to research, architect, implement, validate, and internally connect a comprehensive HUGGING FACE / GENERATIVE AI / LLM ENGINEERING topical cluster for this website.

THIS IS NOT A SIMPLE BLOG-GENERATION TASK.

The objective is to create a genuinely useful, technically authoritative knowledge + commercial-service ecosystem around the modern Hugging Face stack while protecting the quality, structure, routes, SEO, components, styling, and existing content of the production website.

========================================================
ABSOLUTE RULE #1 — DO NOT START CREATING PAGES YET
==================================================

Before writing ANY new page, component, route, metadata file, schema, sitemap entry, llms.txt entry, or content:

1. Inspect the existing repository.
2. Understand the framework and routing architecture.
3. Find existing SEO/content patterns.
4. Inspect existing major clusters.
5. Inspect the site's commercial service pages.
6. Inspect existing Hugging Face/AI/ML/LLM pages, if any.
7. Check for duplicate or overlapping topics.
8. Research the CURRENT official Hugging Face documentation.
9. Build a canonical technology inventory.
10. Build the proposed URL/content architecture.
11. Only after all of the above, start implementation.

Do not assume your built-in knowledge is current.

Current working date context is September 2026.

FIRST VERIFY CURRENT INFORMATION FROM OFFICIAL SOURCES.

Primary authoritative source:

https://huggingface.co/docs

Then follow the CURRENT official documentation for individual products/libraries.

Prefer official Hugging Face documentation over blogs, old tutorials, Medium articles, SEO pages, cached examples, or third-party summaries.

========================================================
PHASE 1 — AUDIT THE EXISTING WEBSITE
====================================

Before changing anything, inspect:

* package.json
* application framework
* routing structure
* page directories
* layout components
* shared components
* metadata utilities
* schema utilities
* sitemap generation
* robots configuration
* llms.txt
* llms-full.txt
* navigation
* breadcrumb implementation
* blog/knowledge-base structure
* service-page structure
* country pages
* city pages
* technology clusters
* related-content components
* CTA components
* header/footer
* canonical URL implementation
* OpenGraph/Twitter metadata
* existing internal-link system

DO NOT redesign the website.

DO NOT introduce a new framework.

DO NOT replace established patterns where reusable patterns already exist.

Use the site's existing design system and architecture.

========================================================
VERY IMPORTANT — INSPECT PREVIOUS CLUSTERS
==========================================

Locate and carefully inspect the existing substantial technology clusters, especially where available:

* AWS
* Azure
* Azure AI/ML
* AI/ML
* Amazon hiring
* .NET
* Angular
* DevOps
* Generative AI
* Bedrock
* Agentic AI
* RAG
* MLOps

Understand:

1. route conventions
2. page layout
3. hero sections
4. navigation
5. metadata
6. schemas
7. internal links
8. CTAs
9. country/city implementation
10. how informational pages differ from commercial pages

DO NOT blindly copy their wording.

Learn the architecture and improve on content quality.

========================================================
ABSOLUTE EXECUTION RULE — FILE BY FILE
======================================

Do NOT load hundreds of files into context and attempt one giant rewrite.

Do NOT plan to modify the entire repository simultaneously.

Work incrementally.

For every logical section:

DISCOVER
→ inspect relevant files
→ determine required changes
→ edit one file or small related group
→ save
→ validate
→ continue

Example:

Transformers group
→ inspect
→ implement
→ save
→ validate

PEFT group
→ inspect
→ implement
→ save
→ validate

TRL group
→ inspect
→ implement
→ save
→ validate

Inference group
→ inspect
→ implement
→ save
→ validate

Continue in this manner.

This requirement exists because large in-memory edits can create context/API timeouts and accidental regressions.

========================================================
PHASE 2 — LIVE HUGGING FACE RESEARCH
====================================

Start with:

https://huggingface.co/docs

Do not rely on a static technology list from this instruction alone.

Use the live documentation navigation to discover:

* currently supported libraries
* renamed products
* deprecated products
* experimental APIs
* current stable projects
* newly introduced products
* current deployment options
* current agent frameworks
* current training frameworks
* current inference technologies
* current evaluation tools
* current hardware integrations

For every technology we create meaningful content about, confirm:

* official current name
* what it does
* lifecycle/status where relevant
* stable vs experimental where relevant
* supported use cases
* relationship with other Hugging Face tools
* modern API/workflow
* production use cases
* relevant alternatives

DO NOT fabricate functionality.

DO NOT present deprecated APIs as current best practice.

DO NOT copy Hugging Face documentation.

Understand it and write ORIGINAL explanatory content.

========================================================
BUILD A CANONICAL HUGGING FACE TECHNOLOGY INVENTORY
===================================================

At minimum investigate the CURRENT status of all of these.

PLATFORM / HUB

* Hugging Face Hub
* Models
* Datasets
* Spaces
* Collections
* Model Cards
* Dataset Cards
* Tasks
* Hub Python library / huggingface_hub
* HF CLI
* huggingface.js
* gated models
* organizations
* repositories
* authentication
* tokens
* storage
* Xet
* webhooks
* Enterprise Hub capabilities
* resource groups
* service accounts
* SSO
* audit logs

CORE MODEL DEVELOPMENT

* Transformers
* Datasets
* Tokenizers
* Diffusers
* Sentence Transformers
* timm
* Transformers.js
* Safetensors

TRAINING / FINE-TUNING

* PEFT
* LoRA
* QLoRA
* adapters
* Accelerate
* TRL
* supervised fine-tuning / SFT
* DPO
* GRPO
* reward modeling
* RLHF-related workflows
* distillation
* distributed training

AGENTIC / RL ENVIRONMENTS

* smolagents
* CodeAgent
* ToolCallingAgent
* tools
* MCP integrations
* multi-agent patterns
* agentic RAG
* multimodal agents
* human-in-the-loop
* telemetry / inspection
* secure code execution
* OpenEnv
* environments
* rewards
* RL training
* MCP environments
* TRL integration
* Unsloth integration
* Inspect AI evaluation
* agentic harnesses
* coding-agent training

INFERENCE / SERVING

* Hugging Face Inference
* Inference Providers
* Inference Endpoints
* Inference Client
* TGI where currently applicable
* TEI
* vLLM integrations
* Ollama integrations
* llama.cpp integrations
* SGLang integrations where current
* local inference
* dedicated inference
* autoscaling
* model catalog deployment
* CPU/GPU/Neuron hardware choices
* batching
* throughput
* latency
* streaming
* quantization

MODEL OPTIMIZATION

* Optimum
* bitsandbytes
* quantization
* 8-bit
* 4-bit
* GPTQ where currently supported
* AWQ where currently supported
* device mapping
* tensor parallelism
* data parallelism
* FSDP
* DeepSpeed integration
* KV cache
* Flash Attention where appropriate
* model sharding
* memory optimization

KERNELS / PERFORMANCE

Investigate the latest Hugging Face Kernels ecosystem.

Cover where current:

* Kernel Hub
* kernels package
* kernel versioning
* kernel loading
* CUDA kernels
* ROCm kernels
* XPU kernels
* CPU kernels
* Triton kernels
* Metal support where current
* attention kernels
* normalization kernels
* fused kernels
* kernel benchmarking
* kernel security/signature concepts
* hardware-specific optimizations
* agent-assisted kernel development

Do NOT create a service landing page merely because a kernel exists.

These are primarily technical authority topics.

EMBEDDINGS / RAG / SEARCH

* Sentence Transformers
* embeddings
* semantic similarity
* semantic search
* reranking
* cross encoders where applicable
* bi-encoders
* TEI
* vector retrieval
* RAG
* hybrid search
* embedding inference

Explain integration patterns with commonly used systems where appropriate:

* FAISS
* pgvector
* Qdrant
* Pinecone
* Weaviate
* OpenSearch
* Elasticsearch

Do not imply these are Hugging Face products if they are not.

GENERATIVE MEDIA

* Diffusers
* diffusion models
* text-to-image
* image-to-image
* inpainting
* image generation
* video generation where current
* LoRA for diffusion
* fine-tuning diffusion models
* pipelines
* schedulers
* optimization
* production serving

EVALUATION

Investigate current status/use of:

* Evaluate
* Lighteval
* leaderboards
* model evaluation
* benchmarks
* evaluation harnesses

DATA / HUMAN FEEDBACK / SYNTHETIC DATA

Investigate current status/use of:

* Argilla
* Distilabel
* synthetic data generation
* data curation
* annotation / human feedback
* preference datasets

EXPERIMENT TRACKING / MLOPS

Investigate current status/use of:

* Trackio
* experiment tracking
* artifacts
* traces
* dashboards
* integrations
* ML experiments
* Transformers integrations
* TRL integrations

TRAINING / AUTOMATION

Investigate current status/use of:

* AutoTrain
* Hugging Face Jobs
* training jobs
* distributed workloads
* cloud training where documented

APPLICATION DEVELOPMENT

* Gradio
* Spaces
* Chat UI where current
* model demos
* production prototypes
* inference applications

ROBOTICS

Investigate:

* LeRobot
* robotics datasets
* policies
* training
* simulation/real-world workflows
* Reachy Mini where currently part of HF ecosystem

Do NOT over-expand robotics into irrelevant commercial landing pages.

CLOUD / HARDWARE

Research current Hugging Face integrations with:

* AWS
* Amazon SageMaker where relevant
* Trainium
* Inferentia
* Azure
* Azure ML where relevant
* Google Cloud
* Vertex AI where relevant
* TPU
* NVIDIA GPUs
* AMD GPUs
* Intel hardware

========================================================
PHASE 3 — CLASSIFY TECHNOLOGIES BY SEARCH/CONTENT INTENT
========================================================

DO NOT turn every documentation item into:

"[technology] proxy interview"
and
"[technology] job support"

That would create scaled thin content.

Classify topics into THREE groups.

========================================================
TIER 1 — COMMERCIAL / HIGH-INTENT TECHNOLOGIES
==============================================

Potential examples, subject to actual site/search relevance:

Hugging Face
Transformers
Generative AI
LLM Engineering
RAG
Sentence Transformers
PEFT
LoRA
QLoRA
TRL
AI Agents
smolagents
MLOps
LLM deployment
Inference Endpoints
TGI/vLLM ecosystem
Diffusers

These MAY support strong commercial pages when the search intent and service offering justify them.

Possible intent families:

* Proxy Interview
* Job Support
* Technical Support
* Engineering Support

IMPORTANT:

Use the site's existing terminology consistently.

However, do not make deceptive claims, impersonation claims, guarantees of interview outcomes, or claims that another person takes an interview on a candidate's behalf.

Describe services accurately and transparently.

========================================================
TIER 2 — TECHNICAL AUTHORITY TOPICS
===================================

Examples:

Accelerate
Datasets
Tokenizers
Evaluate
Lighteval
Optimum
bitsandbytes
Safetensors
Trackio
OpenEnv
Distilabel
Argilla
TEI
Transformers.js
Kernels

These should primarily become deep technical knowledge-base content unless strong service/search intent independently justifies a commercial page.

========================================================
TIER 3 — SUPPORTING CONCEPTS
============================

Examples:

SFT
DPO
GRPO
RLHF
Reward Modeling
Quantization
Reranking
Semantic Search
Flash Attention
Tensor Parallelism
Device Mapping
FSDP
DeepSpeed
Model Sharding
KV Cache
Inference Batching
GPU Optimization
Multimodal Models
Vision-Language Models
Agent Tool Calling
MCP

These generally become supporting educational pages or sections.

========================================================
PHASE 4 — ROOT CLUSTER ARCHITECTURE
===================================

Create/identify a powerful primary Hugging Face pillar.

Preferred semantic architecture:

/hugging-face/

This is NOT a thin directory page.

It should become a serious "Hugging Face Engineering" hub explaining the full ecosystem and routing users into the correct technology path.

The conceptual hierarchy should look approximately like:

HUGGING FACE
|
|-- Platform & Hub
|
|-- Models
|   |-- Transformers
|   |-- Sentence Transformers
|   |-- Diffusers
|   |-- Multimodal
|
|-- Data
|   |-- Datasets
|   |-- Tokenizers
|   |-- Data curation
|
|-- Fine-Tuning
|   |-- PEFT
|   |-- LoRA
|   |-- QLoRA
|   |-- TRL
|       |-- SFT
|       |-- DPO
|       |-- GRPO
|       |-- Reward Modeling
|
|-- Agentic AI
|   |-- smolagents
|   |-- CodeAgent
|   |-- ToolCallingAgent
|   |-- MCP
|   |-- Multi-agent
|   |-- OpenEnv
|
|-- RAG & Retrieval
|   |-- Sentence Transformers
|   |-- Embeddings
|   |-- Reranking
|   |-- TEI
|
|-- Inference
|   |-- Inference Providers
|   |-- Inference Endpoints
|   |-- TGI
|   |-- TEI
|   |-- vLLM
|
|-- Performance
|   |-- Quantization
|   |-- bitsandbytes
|   |-- Optimum
|   |-- Kernels
|   |-- GPU optimization
|
|-- MLOps
|   |-- Evaluation
|   |-- Trackio
|   |-- Model lifecycle
|
|-- Applications
|   |-- Gradio
|   |-- Spaces
|
|-- Cloud
|-- AWS
|-- Azure
|-- GCP

Do not force the filesystem to match this exact tree if the project's existing route conventions differ.

Preserve architectural consistency with the existing website.

========================================================
PHASE 5 — PROPOSE URL INVENTORY BEFORE BUILDING
===============================================

After repository + documentation research:

Create a local planning artifact inside an appropriate project documentation location, if such conventions exist.

Example:

docs/hugging-face-cluster-plan.md

Do not expose this publicly unless the project convention says otherwise.

Include:

PAGE
TYPE
PRIMARY INTENT
PRIMARY KEYWORD
SECONDARY ENTITIES
PARENT PILLAR
CHILD PAGES
CROSS-CLUSTER LINKS
STATUS
NOTES

Before page implementation, remove:

* duplicate intent pages
* cannibalizing pages
* unsupported geo variants
* topics that should be sections rather than pages
* stale/obsolete technologies
* irrelevant documentation items

========================================================
CORE COMMERCIAL PAGES TO EVALUATE
=================================

Strong candidates include:

/hugging-face/
/hugging-face-proxy-interview/
/hugging-face-job-support/

/transformers/
/transformers-proxy-interview/
/transformers-job-support/

/generative-ai/
/generative-ai-proxy-interview/
/generative-ai-job-support/

/llm-engineer/
/llm-engineer-proxy-interview/
/llm-engineer-job-support/

/rag/
/rag-proxy-interview/
/rag-job-support/

/ai-agents/
/ai-agent-proxy-interview/
/ai-agent-job-support/

/hugging-face/peft/
/hugging-face/lora/
/hugging-face/qlora/
/hugging-face/trl/

/hugging-face/inference/
/hugging-face/inference-endpoints/

/hugging-face/sentence-transformers/
/hugging-face/diffusers/

DO NOT blindly create these if an equivalent existing page already exists.

Find it.

Enhance/reuse it where appropriate.

Avoid route duplication.

========================================================
DEEP TECHNICAL PAGE CANDIDATES
==============================

Evaluate these for useful standalone knowledge pages:

/hugging-face/transformers/
/hugging-face/transformers-training/
/hugging-face/transformers-inference/
/hugging-face/transformers-quantization/
/hugging-face/transformers-multimodal/
/hugging-face/transformers-distributed-training/
/hugging-face/transformers-production-deployment/

/hugging-face/peft/
/hugging-face/lora/
/hugging-face/qlora/
/hugging-face/lora-fine-tuning/
/hugging-face/qlora-fine-tuning/

/hugging-face/trl/
/hugging-face/sft/
/hugging-face/dpo/
/hugging-face/grpo/
/hugging-face/reward-modeling/
/hugging-face/llm-alignment/
/hugging-face/knowledge-distillation/

/hugging-face/smolagents/
/hugging-face/code-agents/
/hugging-face/tool-calling-agents/
/hugging-face/mcp-agents/
/hugging-face/multi-agent-systems/
/hugging-face/agentic-rag/
/hugging-face/multimodal-agents/

/hugging-face/openenv/
/hugging-face/agentic-rl/
/hugging-face/agent-training/
/hugging-face/coding-agent-training/

/hugging-face/inference-providers/
/hugging-face/inference-endpoints/
/hugging-face/llm-serving/
/hugging-face/tgi/
/hugging-face/tei/
/hugging-face/vllm/
/hugging-face/local-inference/

/hugging-face/sentence-transformers/
/hugging-face/embeddings/
/hugging-face/semantic-search/
/hugging-face/reranking/
/hugging-face/rag/

/hugging-face/diffusers/
/hugging-face/text-to-image/
/hugging-face/image-to-image/
/hugging-face/video-generation/
/hugging-face/diffusion-fine-tuning/
/hugging-face/diffusers-lora/

/hugging-face/accelerate/
/hugging-face/distributed-training/
/hugging-face/multi-gpu-training/

/hugging-face/quantization/
/hugging-face/bitsandbytes/
/hugging-face/model-optimization/
/hugging-face/gpu-memory-optimization/

/hugging-face/kernels/
/hugging-face/cuda-kernels/
/hugging-face/triton-kernels/
/hugging-face/rocm-kernels/
/hugging-face/llm-gpu-optimization/

/hugging-face/trackio/
/hugging-face/ml-experiment-tracking/

/hugging-face/evaluation/
/hugging-face/lighteval/

/hugging-face/datasets/
/hugging-face/tokenizers/
/hugging-face/safetensors/

/hugging-face/gradio/
/hugging-face/spaces/

/hugging-face/aws/
/hugging-face/azure/
/hugging-face/gcp/

Again:

THIS IS A CANDIDATE INVENTORY.

Research and architectural judgment come first.

Do NOT blindly create every URL.

========================================================
PHASE 6 — JOB/ROLE KNOWLEDGE GRAPH
==================================

Build content relationships around real modern roles such as:

* Hugging Face Engineer
* Generative AI Engineer
* LLM Engineer
* AI Engineer
* Applied AI Engineer
* Machine Learning Engineer
* NLP Engineer
* MLOps Engineer
* AI Platform Engineer
* LLM Infrastructure Engineer
* AI Research Engineer
* RAG Engineer
* Agentic AI Engineer
* Multimodal AI Engineer
* Computer Vision Engineer
* Model Optimization Engineer
* AI Performance Engineer

For role-oriented content explain:

WHAT THEY BUILD

TECHNOLOGIES THEY USE

WHERE HUGGING FACE FITS

PRODUCTION RESPONSIBILITIES

CLOUD/INFRASTRUCTURE

DATA PIPELINE

MODEL LIFECYCLE

INFERENCE

OBSERVABILITY

SECURITY

PERFORMANCE

COMMON TECHNICAL PROBLEMS

ARCHITECTURE DECISIONS

Do not create generic career filler.

========================================================
PHASE 7 — GEO STRATEGY
======================

Do NOT create city pages for every Hugging Face sublibrary.

Geo expansion should primarily apply to strong commercial intent.

Evaluate country-level commercial pages for markets already supported by the website, such as:

USA
Canada
UK
Ireland
Australia
New Zealand
Germany
France
Netherlands
Switzerland
Singapore
Hong Kong
UAE
Saudi Arabia

Potential root pattern:

/hugging-face-proxy-interview-usa/
/hugging-face-job-support-usa/

/hugging-face-proxy-interview-canada/
/hugging-face-job-support-canada/

/hugging-face-proxy-interview-uk/
/hugging-face-job-support-uk/

etc.

Only create geo pages when they can offer genuinely differentiated value.

A USA page should not be the Canada page with:

USA → Canada

swapped.

========================================================
CITY-LEVEL RULE
===============

City pages should be much more selective.

Examples of relevant technology markets MAY include:

USA:
New York
San Francisco Bay Area
Seattle
Austin
Dallas
Boston
Chicago

Canada:
Toronto
Vancouver
Montreal

UK:
London
Manchester
Edinburgh

Ireland:
Dublin

Australia:
Sydney
Melbourne

Europe:
Berlin
Munich
Amsterdam
Paris
Zurich

Asia/Gulf:
Singapore
Dubai
Abu Dhabi
Riyadh

But DO NOT create:

/trackio-job-support-phoenix/
/safetensors-proxy-interview-leeds/
/kernel-job-support-ottawa/

simply to multiply URLs.

Geo content must have meaningful intent.

========================================================
PHASE 8 — PAGE DEPTH STANDARD
=============================

Every substantial technical page must ANSWER REAL ENGINEERING QUESTIONS.

Do not write filler.

Do not begin every page with:

"In today's rapidly evolving digital landscape..."

Do not write:

"Hugging Face is a powerful platform that helps businesses..."

and then repeat variations for 2,000 words.

Each important page should contain only applicable sections from the following framework:

1. DIRECT DEFINITION

What exactly is the technology?

2. WHY IT EXISTS

What problem does it solve?

3. WHERE IT FITS

Where does it sit in an AI/ML architecture?

4. REAL ENTERPRISE USE CASES

Not imaginary fluff.

5. ARCHITECTURE

Provide meaningful text architecture where helpful.

6. DATA FLOW

Input
→ preprocessing
→ model
→ inference
→ downstream system

7. IMPLEMENTATION WORKFLOW

Real implementation stages.

8. CORE COMPONENTS / APIs

Current APIs only.

9. CONFIGURATION

Relevant production considerations.

10. INTEGRATIONS

How the technology connects with adjacent systems.

11. MODEL LIFECYCLE

Selection
→ evaluation
→ training/fine-tuning
→ deployment
→ monitoring
→ iteration

12. CLOUD DEPLOYMENT

Where relevant:

AWS
Azure
GCP
Kubernetes
GPU infrastructure

13. SECURITY

Include applicable topics such as:

* access tokens
* secrets
* IAM
* gated models
* private models
* endpoint security
* data protection
* network controls
* supply-chain risk
* trust_remote_code risks where applicable

14. PERFORMANCE

Applicable topics:

* tokens/sec
* latency
* throughput
* batching
* GPU memory
* quantization
* caching
* compilation
* tensor parallelism
* autoscaling

15. SCALABILITY

Discuss actual bottlenecks.

16. OBSERVABILITY

Metrics
logs
traces
model behavior
inference failures

17. TROUBLESHOOTING

Real failure modes.

18. TRADE-OFFS

When should this technology NOT be used?

19. ALTERNATIVES

Fair comparisons.

20. TECHNICAL INTERVIEW CONCEPTS

Useful educational technical scenarios.

21. JOB-SUPPORT SCENARIOS

Real engineering problems engineers face after joining a team.

22. RELATED TECHNOLOGIES

Build the knowledge graph.

========================================================
ARCHITECTURE EXAMPLE
====================

For production LLM/RAG content, use architecture reasoning such as:

Client
→ API Gateway
→ Application / AI Orchestrator
→ Retrieval Layer
→ Embedding Model
→ Vector Database
→ Reranker
→ Prompt Construction
→ Hugging Face Model
→ vLLM / TGI / Inference Endpoint
→ Safety / Validation Layer
→ Application Response

Then explain:

* authentication
* retrieval
* chunking
* embeddings
* reranking
* tokenization
* batching
* inference
* KV cache
* GPU utilization
* quantization
* horizontal scaling
* observability
* failure handling

Do not include architecture merely as decoration.

Explain WHY each component exists.

========================================================
TRANSFORMERS DEPTH REQUIREMENT
==============================

Transformers deserves one of the deepest subclusters.

Topics may include:

* AutoModel
* AutoTokenizer
* pipeline
* model loading
* configuration
* tokenization
* generation
* text generation
* multimodal models
* vision models
* audio where relevant
* training
* Trainer where current
* distributed training
* inference
* quantization
* attention
* KV cache
* device_map
* tensor parallelism
* model sharding
* model loading
* checkpoints
* safetensors
* Hub integration
* production deployment

Do not turn API documentation into copied prose.

Explain practical engineering.

========================================================
PEFT / LoRA / QLoRA DEPTH REQUIREMENT
=====================================

Explain clearly:

Full fine-tuning
vs
PEFT
vs
LoRA
vs
QLoRA

Discuss:

* adapters
* low-rank matrices
* target modules
* rank
* alpha
* dropout
* trainable parameters
* quantized base model
* memory reduction
* training workflow
* adapter saving
* adapter loading
* adapter merging
* multiple adapters
* inference
* trade-offs
* failure modes

Connect with:

Transformers
TRL
bitsandbytes
Accelerate
PyTorch

========================================================
TRL DEPTH REQUIREMENT
=====================

Research current TRL before writing.

Where current, cover:

* supervised fine-tuning
* DPO
* GRPO
* reward modeling
* knowledge distillation
* preference optimization
* reinforcement-learning workflows

Do not imply all algorithms solve the same problem.

Explain:

DATA
→ TRAINER/OBJECTIVE
→ POLICY/MODEL
→ REWARD/PREFERENCE
→ EVALUATION
→ DEPLOYMENT

Include clear trade-offs.

========================================================
SMOLAGENTS DEPTH REQUIREMENT
============================

Use current official docs.

Where current explain:

* MultiStepAgent
* CodeAgent
* ToolCallingAgent
* model abstraction
* tools
* managed/multi-agent workflows
* memory
* planning
* telemetry
* human-in-the-loop
* MCP
* agentic RAG
* multimodal agents
* browser agents
* secure execution
* sandboxing

IMPORTANT:

If official documentation currently marks smolagents APIs experimental, state this accurately where relevant.

Do not describe experimental APIs as immutable production standards.

========================================================
OPENENV DEPTH REQUIREMENT
=========================

Research CURRENT OpenEnv documentation.

Where current cover:

* environments
* actions
* observations
* reset/step semantics
* environment server
* client
* CLI
* rewards
* RL training
* deployment
* MCP environments
* TRL integration
* Unsloth integration
* Inspect AI
* agentic harnesses
* coding-agent training
* SFT with environments

Explain how:

Agent/Model
→ Action
→ Environment
→ State/Observation
→ Reward
→ Next Action

works.

========================================================
INFERENCE DEPTH REQUIREMENT
===========================

Explain the differences among current options such as:

Inference Providers
Inference Endpoints
self-hosting
vLLM
TGI
Ollama
llama.cpp

where officially/currently applicable.

Do NOT imply these systems are identical.

Production topics:

* dedicated vs shared infrastructure
* autoscaling
* authentication
* private endpoints
* CPU vs GPU
* accelerator selection
* model loading
* concurrency
* batching
* streaming
* cold start
* throughput
* latency
* GPU memory
* quantization
* HA
* monitoring
* cost

========================================================
SENTENCE TRANSFORMERS / RAG DEPTH
=================================

Explain:

query
→ embedding
→ vector search
→ candidate retrieval
→ reranking
→ context
→ generation

Cover:

* embeddings
* bi-encoders
* cross-encoders where current
* semantic similarity
* semantic search
* reranking
* vector databases
* TEI
* latency
* batch embeddings
* quality evaluation
* retrieval metrics

========================================================
KERNELS DEPTH REQUIREMENT
=========================

Use current Hugging Face Kernels docs.

Explain concepts including where current:

* Kernel Hub
* loading compute kernels from Hub
* kernel versions/revisions
* compatibility
* CUDA
* ROCm
* XPU
* CPU
* Triton
* Metal
* attention kernels
* fused operations
* normalization
* benchmarking
* security/signature verification
* integration with PyTorch
* integration with Transformers/Diffusers
* hardware-specific performance

If documenting coding-agent integrations, verify current support first.

========================================================
DIFFUSERS DEPTH REQUIREMENT
===========================

Cover where current:

prompt
→ tokenizer/text encoder
→ latent/noise representation
→ denoising
→ scheduler
→ decoder
→ generated media

Explain:

* pipelines
* schedulers
* models
* LoRA
* fine-tuning
* memory optimization
* inference optimization
* image generation
* image editing
* video where appropriate
* deployment

========================================================
MLOPS DEPTH
===========

Where relevant explain:

Experiment
→ dataset/version
→ training
→ evaluation
→ model registry/Hub
→ deployment
→ monitoring
→ feedback
→ retraining

Connect current Hugging Face tooling with broader MLOps patterns without falsely labeling external products as Hugging Face products.

========================================================
PHASE 9 — SEARCH INTENT RULES
=============================

Every URL should target ONE PRIMARY SEARCH INTENT.

Avoid multiple pages competing for the same query.

For every proposed page establish:

PRIMARY QUERY
SECONDARY QUERIES
ENTITY SET
SEARCH INTENT
PARENT PAGE
SIBLING PAGES
CHILD PAGES

Do NOT stuff exact-match phrases unnaturally.

Primary terms should appear where natural in:

* title
* H1
* opening
* one or more useful headings
* internal anchor text
* metadata

But readability and usefulness come first.

========================================================
PROXY TERMINOLOGY
=================

The business already uses terminology around:

* proxy interview
* interview proxy
* proxy interview support
* job support

Do not arbitrarily replace established service terminology with:

* mock interview
* interview preparation

unless the specific page is genuinely about those different services.

At the same time:

Do not claim impersonation.
Do not claim another person will take an interview for someone.
Do not claim guaranteed employment.
Do not create deceptive descriptions.

Use accurate service descriptions and existing business/legal positioning.

========================================================
NO KEYWORD-STUFFING
===================

Bad:

"Hugging Face proxy interview services provide Hugging Face proxy interview support for Hugging Face interviews..."

Never write this way.

Good content should naturally discuss:

Transformers
PEFT
TRL
RAG
inference
deployment
agents
PyTorch
fine-tuning
GPU optimization
MLOps

Semantic coverage is more important than repetition.

========================================================
PHASE 10 — INTERNAL LINKING KNOWLEDGE GRAPH
===========================================

This is extremely important.

Do NOT make the cluster an isolated island.

Build semantic links.

Examples:

Hugging Face
↔ Generative AI
↔ LLM
↔ RAG
↔ Agentic AI
↔ MLOps

Transformers
↔ PyTorch
↔ PEFT
↔ TRL
↔ Accelerate
↔ bitsandbytes
↔ vLLM

Sentence Transformers
↔ RAG
↔ embeddings
↔ vector search
↔ reranking

Hugging Face
↔ AWS
↔ Azure
↔ GCP

smolagents
↔ Agentic AI
↔ MCP
↔ RAG
↔ LLM

Inference
↔ Kubernetes
↔ GPU
↔ observability
↔ cloud

Use relevant existing website pages rather than creating duplicates.

========================================================
LINKING RULE
============

Each deep page should ideally link naturally to:

* its parent
* relevant siblings
* relevant child pages
* 1–3 adjacent technology clusters
* relevant service page where appropriate

Do not dump 30 links into a "related links" block just for SEO.

Links should help the reader continue learning.

========================================================
BREADCRUMBS
===========

Use the existing breadcrumb implementation.

Example conceptual trail:

Home
→ Hugging Face
→ Fine-Tuning
→ QLoRA

or whatever structure fits the site's actual routing.

Ensure BreadcrumbList schema matches visible breadcrumb structure.

========================================================
PHASE 11 — CONTENT QUALITY
==========================

Every page must be substantially original.

Avoid repeated:

* introductions
* CTAs
* FAQ questions
* examples
* headings
* conclusions

Do not use a single template and substitute technology/city names.

Pages with no unique value should not exist.

========================================================
INFORMATION GAIN
================

Ask before creating each page:

"What will a reader learn here that they would NOT learn simply from reading the parent page?"

If the answer is nothing:

DO NOT CREATE THE PAGE.

Make it a subsection of the parent instead.

========================================================
PHASE 12 — AI SEARCH / ANSWER ENGINE READABILITY
================================================

Optimize content for both human readers and machine understanding.

Use:

* precise definitions
* clear entity relationships
* concise answer paragraphs
* meaningful H2/H3 hierarchy
* comparison tables only where useful
* architecture flows
* numbered implementation workflows
* explicit trade-offs
* FAQs only when actual questions exist
* descriptive anchors
* factual, direct language

Make it easy to extract relationships such as:

Hugging Face
→ Transformers
→ PEFT
→ LoRA
→ QLoRA

and:

TRL
→ SFT
→ DPO
→ GRPO
→ Reward Modeling

and:

Sentence Transformers
→ Embeddings
→ Retrieval
→ Reranking
→ RAG

and:

smolagents
→ Agents
→ CodeAgent
→ ToolCallingAgent
→ Tools
→ MCP

========================================================
PHASE 13 — JSON-LD
==================

Inspect existing schema infrastructure first.

Do NOT insert every schema type everywhere.

Choose schema according to page purpose.

Potentially applicable schema:

WebPage
Article
TechArticle
Service
BreadcrumbList
FAQPage
ItemList
DefinedTerm
DefinedTermSet
Organization

Rules:

* schema must match visible content
* never invent ratings
* never invent reviews
* never invent salary data
* never invent service availability
* never add FAQ schema without actual visible FAQs
* never make unsupported claims
* avoid duplicate/conflicting JSON-LD

Use Organization data from the website's existing canonical source.

Do not hard-code inconsistent company details.

========================================================
PHASE 14 — METADATA
===================

Every page requires appropriate:

* title
* meta description
* canonical
* OpenGraph title
* OpenGraph description
* OpenGraph URL
* Twitter metadata if site supports it

Titles should not all have identical patterns.

Avoid overly long titles.

Avoid awkward keyword repetition.

========================================================
PHASE 15 — LLMS.TXT / LLMS-FULL.TXT
===================================

Inspect existing:

/llms.txt
/llms-full.txt

Do not replace them blindly.

Update them carefully so the new Hugging Face ecosystem becomes discoverable.

The structure should explain:

Hugging Face engineering
Transformers
LLM engineering
fine-tuning
PEFT
LoRA/QLoRA
TRL
RAG
Sentence Transformers
AI agents
smolagents
OpenEnv
inference
Inference Endpoints
TGI/TEI/vLLM
Diffusers
MLOps
evaluation
performance
Kernels
cloud deployment

Clearly separate:

* commercial service resources
* technical knowledge resources

Do not turn llms.txt into a keyword dump.

========================================================
PHASE 16 — SITEMAP
==================

Inspect the existing sitemap implementation.

Ensure all indexable new pages are discoverable.

Do not create separate manual XML structures if the application already generates sitemaps programmatically.

Avoid:

* duplicate canonical URLs
* orphan pages
* excluded routes
* malformed URLs

========================================================
PHASE 17 — COUNTRY/CITY DIFFERENTIATION
=======================================

If geo pages are implemented, each must have actual local differentiation.

Possible differences:

* technology hiring mix
* dominant AI role types
* cloud/platform usage
* market terminology
* typical enterprise sectors
* remote/hybrid context
* regional technology ecosystems

DO NOT invent statistics.

If current statistical claims are used:

research them and cite/attribute them appropriately.

Otherwise avoid unnecessary numbers.

========================================================
PHASE 18 — SOURCE INTEGRITY
===========================

Technical claims should be derived primarily from official:

* Hugging Face documentation
* official GitHub repositories where necessary
* PyTorch documentation for PyTorch-specific concepts
* official cloud-provider documentation for cloud-specific claims

Do not copy text.

Do not attach fake citations.

Do not present third-party technologies as Hugging Face technologies.

========================================================
TIME SENSITIVE CONTENT RULE
===========================

Do not litter evergreen pages with "as of September 2026" every few paragraphs.

Use current research to make content accurate.

Only mention dates or versions when they materially matter.

When discussing experimental APIs, preview features or changing interfaces:

explicitly indicate status where useful.

========================================================
PHASE 19 — REFERENCE VS SALES CONTENT
=====================================

INFORMATIONAL PAGE:

80–95% useful technical information
5–20% contextual commercial navigation/CTA

COMMERCIAL SERVICE PAGE:

can discuss the service more prominently,
but must still demonstrate technical competence.

Do not turn every technical guide into an advertisement.

========================================================
COMMERCIAL CTA RULE
===================

Reuse the site's established CTA system.

Do not invent:

* phone numbers
* WhatsApp numbers
* email addresses
* prices
* guarantees

Read these from existing centralized configuration/site content where possible.

========================================================
PHASE 20 — DO NOT CREATE FAKE EXPERIENCE
========================================

Never write:

"We deployed 400 Hugging Face models for Fortune 500 companies"

unless the website contains verified evidence supporting the claim.

Never invent:

* client counts
* customer names
* success rates
* years of experience
* placement rates
* revenue figures
* testimonials
* certifications
* partnerships

Technical authority must come from QUALITY OF EXPLANATION.

========================================================
PHASE 21 — CROSS-CLUSTER INTEGRATION
====================================

Connect the new cluster with existing relevant pages.

Examples:

Hugging Face + AWS

* SageMaker
* EKS
* EC2 GPU
* Trainium/Inferentia where appropriate

Hugging Face + Azure

* Azure ML
* AKS
* GPU workloads

Hugging Face + Databricks

* dataset/model workflows where relevant

Hugging Face + DevOps

* CI/CD
* containers
* Kubernetes
* secrets
* deployment

Hugging Face + MLOps

* model lifecycle
* evaluation
* deployment
* monitoring

Hugging Face + Agentic AI

* smolagents
* tool calling
* MCP
* agentic RAG
* OpenEnv

Do not manufacture relationships that do not make architectural sense.

========================================================
PHASE 22 — PAGE COMPONENTS
==========================

Reuse existing components where possible.

Potential sections/components:

Hero
Breadcrumbs
Quick Answer
Technology Overview
Architecture
Key Concepts
Implementation
Production Considerations
Use Cases
Comparison
Troubleshooting
Interview Concepts
Related Technologies
FAQ
CTA
Related Resources

Do not force every page to contain every component.

========================================================
PHASE 23 — CODE EXAMPLES
========================

Where code genuinely improves an article:

* use current APIs
* keep examples executable/plausible
* use minimal dependencies
* avoid exposing credentials
* use environment variables for tokens
* do not invent classes/functions
* clearly label conceptual/pseudocode examples

Check official documentation before committing library-specific code.

========================================================
PHASE 24 — TECHNICAL COMPARISON CONTENT
=======================================

Create useful comparisons only when search/reader intent exists.

Examples:

LoRA vs QLoRA
PEFT vs Full Fine-Tuning
SFT vs DPO
DPO vs GRPO
TGI vs vLLM
Inference Providers vs Inference Endpoints
Sentence Transformers vs generic Transformer embeddings
CodeAgent vs ToolCallingAgent
device_map vs tensor parallelism
4-bit vs 8-bit quantization

Each comparison must explain:

WHAT
WHEN
WHY
TRADE-OFFS
PRODUCTION IMPACT

Not superficial feature checklists.

========================================================
PHASE 25 — TROUBLESHOOTING CONTENT
==================================

Technical pages should include realistic engineering problems where applicable:

CUDA out-of-memory
model loading failures
tokenizer/model mismatch
incorrect tensor dtype
quantization incompatibilities
adapter loading problems
generation latency
GPU underutilization
endpoint cold starts
autoscaling issues
batch-size problems
long-context memory pressure
RAG retrieval quality
embedding dimension mismatch
rate limiting
authentication errors
gated-model access
revision mismatch
dependency conflicts
distributed training failures
agent tool errors
unsafe code execution concerns

Explain:

symptom
→ likely cause
→ diagnosis
→ solution
→ prevention

========================================================
PHASE 26 — SECURITY CONTENT
===========================

Include security where technically relevant:

HF tokens
least privilege
private/gated repositories
service accounts
secret management
endpoint authentication
network isolation
data privacy
PHI/PII considerations
model supply-chain risk
remote code execution risk
dependency security
sandboxing agents
tool permissions
MCP trust boundaries

Do not make legal/compliance guarantees.

========================================================
PHASE 27 — PERFORMANCE CONTENT
==============================

Production AI content should demonstrate understanding of:

latency
throughput
TTFT
tokens/sec
GPU memory
batching
continuous batching
quantization
KV cache
prefill/decode
tensor parallelism
data parallelism
model sharding
cold start
model loading
autoscaling
GPU utilization
cost/performance

Only use concepts where relevant to the technology.

========================================================
PHASE 28 — DO NOT OVERDO FAQ
============================

FAQ sections should contain real questions.

Examples:

"When should I use QLoRA instead of LoRA?"

"Is Hugging Face Inference Endpoints the same as the Inference API?"

"Can Sentence Transformers be used for RAG?"

"What is the difference between CodeAgent and ToolCallingAgent?"

Do not create 20 repetitive SEO questions merely to increase page length.

========================================================
PHASE 29 — CONTENT LENGTH
=========================

NO FIXED WORD COUNT.

Depth should follow complexity.

A straightforward concept might need 1,200–1,800 useful words.

A major pillar may need 3,000–6,000+ words.

But:

2,000 useful words > 6,000 repetitive words.

Do not add text merely to hit a length target.

========================================================
PHASE 30 — INDEXATION QUALITY GATE
==================================

Before allowing a new page to be indexable, ask:

1. Does it have distinct intent?
2. Is it technically useful?
3. Is it substantially different from existing pages?
4. Does it answer the query?
5. Does it fit the site hierarchy?
6. Does it have internal links?
7. Does another page already satisfy the same intent?
8. Would we publish it if SEO did not exist?

If #8 is NO, reconsider the page.

========================================================
PHASE 31 — IMPLEMENTATION ORDER
===============================

Execute approximately in this order:

STAGE A
Repository audit + Hugging Face live research

STAGE B
Canonical taxonomy and URL map

STAGE C
Root Hugging Face pillar

STAGE D
Transformers

STAGE E
PEFT / LoRA / QLoRA

STAGE F
TRL / alignment

STAGE G
Sentence Transformers / embeddings / RAG

STAGE H
Inference / Endpoints / TGI / TEI / vLLM

STAGE I
smolagents / agents / MCP

STAGE J
OpenEnv / agentic RL

STAGE K
Diffusers / multimodal

STAGE L
Accelerate / optimization / bitsandbytes

STAGE M
Kernels / GPU performance

STAGE N
Datasets / Tokenizers / Safetensors

STAGE O
Evaluation / Lighteval / Trackio

STAGE P
Gradio / Spaces / application layer

STAGE Q
Cloud integrations

STAGE R
Commercial service pages

STAGE S
Selective country pages

STAGE T
Only justified city pages

STAGE U
Internal-link integration

STAGE V
Schema / metadata / sitemap

STAGE W
llms.txt / llms-full.txt

STAGE X
Full build and QA

========================================================
IMPORTANT — DO NOT WAIT UNTIL THE END TO VALIDATE
=================================================

After each group:

1. save files
2. check route
3. check imports
4. lint relevant files where practical
5. validate metadata
6. validate internal links
7. confirm no duplicate route
8. continue

Do not create 100 pages and discover compilation failures afterward.

========================================================
PHASE 32 — FINAL QUALITY ASSURANCE
==================================

At completion run the project's appropriate:

* lint
* type check
* build
* tests

Also inspect for:

BROKEN ROUTES
BROKEN IMPORTS
BROKEN LINKS
DUPLICATE TITLES
DUPLICATE H1
DUPLICATE CANONICAL
MISSING METADATA
INVALID JSON-LD
MALFORMED SITEMAP
ORPHAN PAGES
PLACEHOLDER CONTENT
TODO TEXT
UNFINISHED CONTENT
COPIED DOCUMENTATION
OBSOLETE API REFERENCES
KEYWORD STUFFING
DUPLICATED FAQS

Fix problems before declaring completion.

========================================================
PHASE 33 — TECHNICAL FACT CHECK
===============================

Re-check particularly fast-moving content against current official Hugging Face docs before finalizing:

smolagents
OpenEnv
Kernels
Trackio
TRL
Inference Providers
Inference Endpoints
TGI
TEI
Transformers inference
quantization
hardware integrations

========================================================
PHASE 34 — SEO CANNIBALIZATION AUDIT
====================================

Before completion compare:

* titles
* H1s
* target queries
* introductions
* canonical URLs

Identify pages competing for the same intent.

Merge or reposition them instead of leaving multiple nearly identical pages.

========================================================
PHASE 35 — FINAL INTERNAL-LINK CRAWL
====================================

Confirm:

Hugging Face pillar reaches child topics.

Child topics return to logical parents.

Important knowledge pages point naturally toward commercial pages.

Commercial pages point toward proof-of-expertise knowledge pages.

Existing AWS/Azure/AI/ML/RAG/Agentic-AI/MLOps clusters link into Hugging Face where contextually appropriate.

Do not leave the new cluster isolated.

========================================================
PHASE 36 — FINAL OUTPUT REPORT
==============================

When implementation is completely finished, give me a concise report containing:

1. LIVE RESEARCH SUMMARY
   What changed/current Hugging Face ecosystem discoveries affected implementation.

2. CLUSTER SUMMARY
   Number of:

* pillar pages
* technical pages
* commercial pages
* role pages
* country pages
* city pages

3. NEW URL INVENTORY
   Group URLs by category.

4. EXISTING PAGES ENHANCED
   List them.

5. EXISTING PAGES DELIBERATELY NOT CHANGED
   Where relevant.

6. INTERNAL LINKING
   Describe major cluster connections.

7. STRUCTURED DATA
   Which schema types were used and where.

8. AI DISCOVERY
   Describe llms.txt / llms-full.txt updates.

9. SITEMAP
   Confirm inclusion.

10. VALIDATION
    Report:

* build
* lint
* typecheck
* tests

11. DUPLICATION/CANNIBALIZATION CHECK
    Report any merges/skipped pages.

12. ITEMS INTENTIONALLY NOT CREATED
    Explain which candidate pages were rejected because they would be thin, duplicative, outdated, or low intent.

13. CURRENT/EXPERIMENTAL TECHNOLOGIES
    Flag current technologies whose APIs/status may change.

========================================================
NON-NEGOTIABLE PROTECTION RULES
===============================

DO NOT:

* delete existing working pages
* break existing routes
* rename established URLs without migration requirement
* modify unrelated functionality
* rewrite unrelated clusters
* change global styling unnecessarily
* remove analytics
* remove schema
* replace shared components unnecessarily
* change phone/WhatsApp numbers
* invent business information
* invent Hugging Face functionality
* copy official docs
* fabricate statistics
* fabricate client outcomes
* fabricate citations
* manufacture hundreds of geo pages
* create pages just because a keyword variation exists
* perform one massive uncontrolled repository rewrite

========================================================
FINAL PRINCIPLE
===============

We are NOT trying to create the largest possible number of Hugging Face pages.

We are trying to make proxytechsupport.com one of the most technically useful interconnected resources for people researching:

Hugging Face
Transformers
LLMs
Generative AI
RAG
fine-tuning
PEFT
LoRA
QLoRA
TRL
AI agents
smolagents
agentic RL
OpenEnv
inference
LLM serving
embeddings
Diffusers
MLOps
GPU optimization
AI deployment

while connecting that technical authority naturally to the site's legitimate commercial service offerings.

QUALITY

> PAGE COUNT

TECHNICAL DEPTH

> SEO FILLER

SEARCH INTENT

> KEYWORD REPETITION

INFORMATION GAIN

> TEMPLATE SCALING

CURRENT OFFICIAL DOCUMENTATION

> OLD BUILT-IN KNOWLEDGE

PRESERVE EXISTING WEBSITE

> MASS REWRITE

Now begin with:

PHASE 1 — REPOSITORY AUDIT

and

PHASE 2 — LIVE HUGGING FACE DOCUMENTATION RESEARCH.

DO NOT CREATE THE FIRST PAGE UNTIL BOTH ARE complete and you have built the canonical cluster inventory.

After that, proceed autonomously through the implementation stages FILE BY FILE, validating each logical group before moving to the next.
