# Hugging Face / Generative AI / LLM Engineering Cluster — Plan

Internal planning artifact (not published). Additive cluster mirroring the `data/azure` pattern.
Current through **September 2026**. Quality > page count. Flat slugs (site convention), not nested paths.

## Live-research anchors (verified Sep 2026)
- **Transformers v5** — positioned as the ecosystem's *model-definition framework* / source of truth; consumed by vLLM, SGLang, TGI, Axolotl, Unsloth, llama.cpp, MLX. `Trainer` still current. Attention impls: `flash_attention_2`, `sdpa`, `flex_attention`, kernels-loaded. Quant integrations: bitsandbytes, GPTQ, AWQ, torchao.
- **TGI is DEPRECATED/ARCHIVED** — entered maintenance Dec 2025, GitHub repo archived read-only Mar 2026; README now points to vLLM / SGLang / llama.cpp. Never present TGI as the forward default; treat as legacy migration source. vLLM = primary general serving target (PagedAttention + continuous batching + Transformers-as-backend "source of truth"); SGLang = multi-turn/shared-prefix/agent workloads; llama.cpp/MLX = local/edge.
- **Legacy serverless Inference API is FULLY DECOMMISSIONED** (`api-inference.huggingface.co` → 410, hard-dead). "HF Inference" is now just one provider behind the Inference Providers router — not a standalone product.
- **Diffusers is still 0.x (v0.40, Aug 2026)** — NOT 1.0. FLUX.2 [dev], SD3.5 Large; text-to-image/img2img/inpainting/video pipelines; LoRA + DreamBooth training scripts; FP8 training via torchao.
- **Lighteval** preferred backend is now **inspect-ai** (`eval`), plus vllm/sglang/transformers/inference-providers. `evaluate` is generic metrics (never the LLM harness) — do NOT call it "deprecated". Old Open LLM Leaderboard retired 2025.
- **Optimum ONNX split into a separate `optimum-onnx` package**; Optimum-Neuron active for Trainium/Inferentia (`export_neuron`/`export_neuronx`, AOT compile).
- **Quantization** unified under `HfQuantizer`: bitsandbytes (4/8-bit), GPTQ, AWQ (fastest inference), torchao (torch.compile/CPU), HQQ, compressed-tensors (unified checkpoint). No single mandated default — decision guide by use case.
- **AutoTrain** active (no-code SFT/classification/VLM/tabular). **HF Jobs**: `hf jobs uv run` (`--flavor a100-large`, `--with`, `--secrets`).
- **CLI is now `hf`** (was `huggingface-cli`). **Xet** storage (`hf_xet`) replaces Git LFS; `hf_transfer` deprecated.
- **Inference Providers** (serverless, `router.huggingface.co/v1`, OpenAI-compatible, provider routing `:fastest/:cheapest`) *replaced the old serverless Inference API*. **Inference Endpoints** = dedicated managed infra (TGI/TEI/custom containers). **InferenceClient** in `huggingface_hub`.
- **TRL v1** — `SFTTrainer`, `DPOTrainer`, `GRPOTrainer` (stable, vLLM-accelerated), `RewardTrainer`, `DistillationTrainer` (now stable), online methods (RLOO/OnlineDPO/PPO). OpenEnv integration (`trl/openenv`).
- **OpenEnv** — EXPERIMENTAL agentic-RL environments (Gymnasium-style reset/step/state, HTTP env servers, MCP environments). Flag experimental.
- **smolagents** — pre-2.0, actively stabilizing. `MultiStepAgent`, `CodeAgent`, `ToolCallingAgent`, `@tool`, MCP (`ToolCollection.from_mcp`), sandboxed code exec (E2B/Modal/Docker). Flag "actively developed."
- **Sentence Transformers v5+/v6** — four model types: `SentenceTransformer`, `CrossEncoder` (rerankers), `SparseEncoder`, Multi-Vector/late-interaction (ColBERT). `encode_query`/`encode_document`.
- **TEI** (Text Embeddings Inference) current; serves embeddings + rerankers. **Kernels / Kernel Hub** — `get_kernel`, `kernelize`, CUDA + universal Triton. **Trackio** — local-first tracking, `import trackio as wandb`. **Lighteval** — HF's recommended LLM eval (Evaluate de-emphasized for LLMs). **Optimum** (+ Optimum-Neuron for Trainium/Inferentia). **huggingface_hub ~v1.0**. **Gradio v5**. **HF Jobs** (`hf jobs uv run`).
- Cloud: AWS DLCs + SageMaker + Trainium/Inferentia (Optimum-Neuron); Google Cloud DLCs + Vertex/GKE/TPU; Azure ML model catalog.

## Already-live — CROSS-LINK, never recreate (data/aiml)
hugging-face-job-support · transformers-job-support · generative-ai-job-support · genai-engineer-job-support · genai-interview-proxy-support · genai-candidate-marketing · llm-job-support · llm-engineer-job-support · llm-interview-proxy-support · llm-engineer-profile-positioning · llm-evaluation-job-support · rag-job-support · rag-engineer-job-support · rag-interview-proxy-support · rag-vs-fine-tuning-job-support · fine-tuning-job-support · lora-qlora-job-support · pytorch-job-support · vector-database-job-support · agentic-ai-job-support · mlops-job-support · python-genai-job-support · mlops-engineer-job-support · vector-database-selection-for-rag. AWS/Azure clusters also own their RAG/inference/genai pages — bridge, don't overlap.

## Tiering
- **Tier 1 (commercial):** HF hub, Transformers deep pages, PEFT/QLoRA, TRL, smolagents, RAG/embeddings, inference/endpoints, Diffusers → job-support + proxy-interview where intent justifies.
- **Tier 2 (authority KB + support):** Hub/CLI, Datasets, Tokenizers, Optimum, bitsandbytes, Kernels, TEI, Trackio, Lighteval, Argilla/Distilabel, AutoTrain, Safetensors, Transformers.js, Gradio/Spaces.
- **Tier 3 (supporting concepts):** SFT/DPO/GRPO, reward modeling, quantization, reranking, distillation, agentic RL — mostly deep pages or comparison guides.

## URL Inventory (flat slugs; all end with trailing slash). STATUS: [ ]=todo [x]=done

### A. Core / hub (core-pages.ts)
- [x] hugging-face-proxy-job-support — MASTER HUB (pillar, ecosystem index)
- [x] hugging-face-proxy-interview-support — proxy interview hub
- [x] hugging-face-production-support — production firefighting hub
- [x] hugging-face-engineer-job-support — HF engineer role hub

### B. Platform & Hub (platform-pages.ts)
- [x] huggingface-hub-job-support (huggingface_hub, hf CLI, tokens, gated, Xet)
- [x] huggingface-inference-endpoints-job-support
- [x] huggingface-inference-providers-job-support
- [x] huggingface-spaces-job-support (Spaces + ZeroGPU)
- [x] gradio-job-support (Gradio v5 apps/demos)
- [x] huggingface-enterprise-hub-guide (KB: SSO/audit/resource groups)

### C. Transformers deep (transformers-pages.ts)
- [x] huggingface-transformers-training-job-support (Trainer, distributed)
- [x] huggingface-transformers-inference-job-support (generate, device_map, TP)
- [x] huggingface-transformers-quantization-job-support
- [x] huggingface-transformers-multimodal-job-support (VLMs)
- [x] transformers-js-job-support

### D. Fine-tuning / PEFT / alignment (finetuning-pages.ts)
- [x] peft-fine-tuning-job-support
- [x] qlora-fine-tuning-job-support
- [x] trl-job-support (SFT/DPO/GRPO/reward/distill hub)
- [x] huggingface-sft-job-support
- [x] huggingface-dpo-job-support
- [x] huggingface-grpo-job-support
- [x] reward-modeling-job-support
- [x] llm-alignment-job-support
- [x] knowledge-distillation-job-support
- [x] accelerate-distributed-training-job-support

### E. Agents / RL (agents-pages.ts)
- [x] smolagents-job-support
- [x] huggingface-code-agents-job-support
- [x] huggingface-tool-calling-agents-job-support
- [x] huggingface-mcp-agents-job-support
- [x] huggingface-multi-agent-systems-job-support
- [x] huggingface-agentic-rag-job-support
- [x] openenv-job-support (flag experimental)
- [x] huggingface-agentic-rl-job-support

### F. Embeddings / RAG / search (embeddings-pages.ts)
- [x] sentence-transformers-job-support
- [x] huggingface-embeddings-job-support
- [x] huggingface-reranking-job-support (cross-encoders)
- [x] text-embeddings-inference-job-support (TEI)
- [x] huggingface-semantic-search-job-support

### G. Inference / serving (inference-pages.ts)
- [x] huggingface-llm-serving-job-support (hub; TGI→vLLM/SGLang)
- [x] tgi-job-support (note maintenance mode)
- [x] vllm-inference-job-support
- [x] huggingface-local-inference-job-support (Ollama/llama.cpp/MLX)

### H. Performance / optimization (performance-pages.ts)
- [x] huggingface-quantization-job-support (bitsandbytes/GPTQ/AWQ/torchao)
- [x] optimum-job-support (ONNX/Neuron)
- [x] huggingface-kernels-job-support (Kernel Hub — authority)
- [x] huggingface-gpu-optimization-job-support

### I. Generative media (diffusers-pages.ts)
- [x] diffusers-job-support
- [x] huggingface-text-to-image-job-support
- [x] huggingface-diffusion-fine-tuning-job-support

### J. Data / MLOps / eval (mlops-pages.ts)
- [x] huggingface-datasets-job-support
- [x] huggingface-tokenizers-job-support
- [x] trackio-experiment-tracking-job-support
- [x] lighteval-model-evaluation-job-support
- [x] argilla-distilabel-data-job-support
- [x] autotrain-job-support
- [x] huggingface-jobs-training-job-support

### K. Cloud (cloud-pages.ts)
- [x] huggingface-aws-job-support (SageMaker/Trainium/Inferentia/DLC)
- [x] huggingface-azure-job-support (Azure ML catalog)
- [x] huggingface-gcp-job-support (Vertex/GKE/TPU)

### L. Proxy interview (interview-pages.ts) — Tier 1 commercial
- [x] transformers-proxy-interview-support
- [x] peft-lora-proxy-interview-support
- [x] trl-proxy-interview-support
- [x] smolagents-proxy-interview-support
- [x] sentence-transformers-proxy-interview-support
- [x] diffusers-proxy-interview-support
- [x] huggingface-inference-proxy-interview-support

### M. KB comparison guides (comparison-pages.ts)
- [x] what-is-hugging-face-guide (pillar KB)
- [x] peft-vs-full-fine-tuning-guide
- [x] sft-vs-dpo-vs-grpo-guide
- [x] tgi-vs-vllm-guide
- [x] inference-providers-vs-endpoints-guide
- [x] codeagent-vs-toolcallingagent-guide
- [x] transformers-quantization-4bit-vs-8bit-guide

### N. Country (country-pages.ts) — selective geo
- [x] hugging-face-proxy-job-support-usa
- [x] hugging-face-proxy-job-support-canada
- [x] hugging-face-proxy-job-support-uk
- [x] hugging-face-proxy-job-support-australia
- [x] hugging-face-proxy-job-support-germany
- [x] hugging-face-proxy-job-support-singapore
- [x] hugging-face-proxy-job-support-uae

## Intentionally NOT created (thin / duplicative / low intent)
- Per-sublibrary city pages (safetensors-*-leeds etc.) — no local intent.
- Recreations of existing aiml pages (transformers-job-support, fine-tuning-job-support, llm-*, rag-*, lora-qlora-job-support, pytorch, vector-database) — cross-linked instead.
- Separate pages for every kernel backend / every scheduler — folded into parent sections.
- Robotics (LeRobot/Reachy Mini) commercial pages — no service/search intent; omitted (may add a single KB later if justified).
- Evaluate standalone commercial page — de-emphasized by HF; covered under lighteval.

## Wiring checklist
- [x] data/huggingface/shared.ts (builders, highlights, FAQ gens, hub links, EXISTING)
- [x] category files A–N
- [x] data/huggingface/index.ts (aggregate + no-orphan hub link injection)
- [x] data/landing-pages.ts: import + spread into allLandingPages
- [x] components/LandingPageTemplate.tsx: HF_CLUSTER_SLUGS → breadcrumbs + hero-metrics
- [x] scripts/gen-huggingface-cluster-pages.mjs → run
- [x] scripts/gen-huggingface-llms.mjs → run
- [x] navigation.ts: add HF hub link (hidden long-tail as needed)
- [x] build: verify-content-urls + next build green
