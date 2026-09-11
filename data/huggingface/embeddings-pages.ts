import type { LandingPageConfig } from '../landing-pages';
import {
  hfServicePage,
  relatedLinks,
  hfServiceFaqs,
  EXISTING,
  HF_HUB_LINK,
  HF_INTERVIEW_HUB_LINK,
  HF_PRODUCTION_LINK,
  HF_SBERT_LINK,
  HF_TEI_LINK,
  HF_RAG_HUB_LINK,
  HF_AGENTIC_RAG_LINK,
  HF_ENDPOINTS_LINK,
  HF_TRANSFORMERS_TRAINING_LINK,
  HF_LIGHTEVAL_LINK,
} from './shared';

const RERANK_LINK = { label: 'Reranking & cross-encoders job support', href: '/huggingface-reranking-job-support/' };
const SEMANTIC_LINK = { label: 'Semantic search job support', href: '/huggingface-semantic-search-job-support/' };
const EMBEDDINGS_LINK = { label: 'Embeddings & RAG job support', href: '/huggingface-embeddings-job-support/' };

// ─── Sentence Transformers ───────────────────────────────────────────────────

export const sentenceTransformers: LandingPageConfig = hfServicePage({
  slug: 'sentence-transformers-job-support',
  title: 'Sentence Transformers Job Support | Embeddings, Rerankers & Fine-Tuning',
  description:
    'Job support for Sentence Transformers (v5+) — bi-encoder embeddings, cross-encoder rerankers, sparse and multi-vector/ColBERT models, encode_query/encode_document, and fine-tuning your own embedding models for retrieval and RAG.',
  keywords: [
    'Sentence Transformers job support', 'SBERT support', 'CrossEncoder reranker', 'embedding model fine-tuning',
    'SparseEncoder ColBERT', 'encode_query encode_document', 'sentence embeddings support',
  ],
  h1: 'Sentence Transformers Job Support — Embeddings, Rerankers & Custom Models',
  tagline:
    'Real-time help with Sentence Transformers (v5+) — bi-encoders, cross-encoder rerankers, sparse and multi-vector models, and fine-tuning embedding models for your domain and retrieval quality.',
  heroEyebrow: 'Sentence Transformers Support',
  painIntro:
    'Retrieval returning irrelevant results, embeddings that do not capture your domain, or unsure which model type to use? Sentence Transformers is the backbone of most RAG and semantic-search systems, and choosing and tuning the right model is where quality is won or lost. We help.',
  heroVariant:
    'Sentence Transformers (v5+, now maintained by Hugging Face) provides four model types: SentenceTransformer (bi-encoders for embeddings and retrieval), CrossEncoder (rerankers, including generative rerankers), SparseEncoder (sparse/lexical embeddings), and multi-vector/late-interaction (ColBERT-style) models. We help with model selection, encode_query and encode_document, multi-process and batched encoding for throughput, similarity metrics, fine-tuning embedding models on your data (contrastive/triplet losses), matryoshka and dimensionality choices, evaluation of retrieval quality, and serving embeddings with TEI. This is the model layer under semantic search, RAG, reranking, and clustering.',
  faqs: [
    ...hfServiceFaqs('Sentence Transformers', 'We help choose and fine-tune bi-encoders, cross-encoders and multi-vector models, and improve retrieval quality on your real data.'),
    {
      question: 'Bi-encoder or cross-encoder — when do I use each?',
      answer:
        'Bi-encoders (SentenceTransformer) encode queries and documents independently into vectors, so you can pre-index millions of documents and retrieve fast with vector search — this is your first-stage retriever. Cross-encoders (CrossEncoder) score a query–document pair jointly, which is far more accurate but too slow to run over the whole corpus — so you use them to rerank the top-k from the bi-encoder. The standard pattern is bi-encoder retrieve → cross-encoder rerank. We help you build both stages.',
    },
    {
      question: 'Should I fine-tune my own embedding model?',
      answer:
        'Often yes for domain-specific retrieval — a general embedding model may miss your jargon and relationships. Fine-tuning on in-domain query–document pairs (or mined hard negatives) can substantially raise retrieval quality. We help you build the training data, choose a loss, fine-tune, and prove the improvement with retrieval metrics before you ship it.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      EMBEDDINGS_LINK,
    ],
    techLinks: [RERANK_LINK, HF_TEI_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_RAG_HUB_LINK, SEMANTIC_LINK, HF_AGENTIC_RAG_LINK, HF_TRANSFORMERS_TRAINING_LINK, HF_TEI_LINK,
      EXISTING.rag, EXISTING.ragEngineer, EXISTING.vectorDb, EXISTING.vectorDbSelection,
    ],
  }),
});

// ─── Embeddings / RAG ────────────────────────────────────────────────────────

export const embeddingsRag: LandingPageConfig = hfServicePage({
  slug: 'huggingface-embeddings-job-support',
  title: 'Embeddings & RAG Job Support | Hugging Face Retrieval Pipelines',
  description:
    'Job support for embeddings and RAG with Hugging Face — chunking, Sentence Transformers embeddings, vector databases, cross-encoder reranking, and building retrieval pipelines that stay accurate at scale. Fix retrieval-quality collapse.',
  keywords: [
    'Hugging Face embeddings job support', 'RAG pipeline support', 'embeddings RAG Hugging Face',
    'chunking strategy RAG', 'vector search embeddings', 'retrieval quality support',
  ],
  h1: 'Embeddings & RAG Job Support — Retrieval Pipelines That Stay Accurate',
  tagline:
    'Real-time help building RAG on Hugging Face — chunking, Sentence Transformers embeddings, vector search, cross-encoder reranking, and evaluation to keep answers grounded and accurate.',
  heroEyebrow: 'Embeddings & RAG Support',
  painIntro:
    'A RAG system that retrieves the wrong chunks, hallucinates, or degrades after a model change? Most RAG quality problems are retrieval problems — chunking, embeddings, and reranking — not the LLM. We help you fix the retrieval layer.',
  heroVariant:
    'We help you build and fix RAG end to end on the Hugging Face stack: document parsing and chunking strategy, embedding with Sentence Transformers (and serving embeddings via TEI), indexing in a vector database (FAISS, pgvector, Qdrant, Pinecone, Weaviate, OpenSearch, or Elasticsearch — these are third-party stores, not HF products), hybrid (dense + lexical) retrieval, cross-encoder reranking for precision, prompt construction and grounding, and evaluation of retrieval and answer quality. We also diagnose the specific failure of embedding-dimension mismatch after swapping embedding models, which silently breaks retrieval.',
  faqs: [
    ...hfServiceFaqs('embeddings and RAG', 'We help with chunking, Sentence Transformers embeddings, vector search, reranking, and grounding on your real RAG pipeline.'),
    {
      question: 'My RAG answers are wrong — where do I start?',
      answer:
        'Almost always retrieval. We check chunking (too big/small, split mid-idea), embedding-model fit for your domain, whether reranking is applied, and whether the right chunks are even in the index. We measure retrieval recall/precision on a labeled set before touching the LLM prompt — fixing retrieval fixes most "hallucination" that is really missing context.',
    },
    {
      question: 'Do I need a reranker?',
      answer:
        'Usually yes for quality. A bi-encoder retrieves fast but imprecisely; a cross-encoder reranker reorders the top-k so the best chunks land in the prompt, which markedly improves answer quality. It adds latency, so we rerank only the top-k and often serve the reranker with TEI. We help you decide the k and where reranking pays off.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'Sentence Transformers job support', href: '/sentence-transformers-job-support/' },
    ],
    techLinks: [HF_SBERT_LINK, RERANK_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_TEI_LINK, SEMANTIC_LINK, HF_AGENTIC_RAG_LINK,
      EXISTING.rag, EXISTING.ragEngineer, EXISTING.ragVsFineTuning, EXISTING.vectorDb, EXISTING.vectorDbSelection,
    ],
  }),
});

// ─── Reranking / cross-encoders ──────────────────────────────────────────────

export const reranking: LandingPageConfig = hfServicePage({
  slug: 'huggingface-reranking-job-support',
  title: 'Reranking Job Support | Cross-Encoders for RAG with Sentence Transformers & TEI',
  description:
    'Job support for reranking in RAG — cross-encoder rerankers with Sentence Transformers, serving them with TEI, choosing top-k, and measuring the precision gain. Turn good retrieval into great answers.',
  keywords: [
    'reranking job support', 'cross-encoder reranker', 'RAG reranking support', 'TEI reranker',
    'rerank top-k', 'retrieval precision reranking',
  ],
  h1: 'Reranking Job Support — Cross-Encoders That Sharpen Retrieval',
  tagline:
    'Real-time help adding reranking to RAG — cross-encoder rerankers, serving with TEI, top-k tuning, and proving the precision gain without wrecking latency.',
  heroEyebrow: 'Reranking / Cross-Encoder Support',
  painIntro:
    'Retrieval brings back roughly-relevant chunks but the best one is not on top? A cross-encoder reranker fixes exactly that — reordering candidates by true relevance. We help you add it correctly and cheaply.',
  heroVariant:
    'Reranking is the precision stage of retrieval: a first-stage bi-encoder (or hybrid) retrieves a candidate set fast, then a cross-encoder scores each query–document pair jointly and reorders them, so the most relevant chunks reach the LLM. We help with cross-encoder model selection (including newer generative rerankers), serving the reranker efficiently with TEI, choosing how many candidates to rerank (the k), latency budgeting, and measuring the actual answer-quality lift so reranking earns its place. Reranking is one of the highest-ROI upgrades to a RAG system.',
  faqs: [
    ...hfServiceFaqs('reranking', 'We help add cross-encoder reranking to your RAG pipeline, serve it with TEI, tune top-k, and measure the precision gain.'),
    {
      question: 'How much does reranking actually help?',
      answer:
        'On most real corpora, adding a cross-encoder reranker over the top 20–100 bi-encoder candidates gives a large jump in top-k precision — the right chunk lands in the prompt far more often, which directly improves answer quality and cuts hallucination. We measure it on your data so the gain is proven, not assumed.',
    },
    {
      question: 'Does reranking add too much latency?',
      answer:
        'Only if you rerank too many candidates or serve the model poorly. You rerank a bounded top-k (e.g. 20–50), not the whole corpus, and serve the cross-encoder with TEI for token-based dynamic batching. That keeps added latency small relative to LLM generation. We help you tune k and serving to stay within your latency budget.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'Embeddings & RAG job support', href: '/huggingface-embeddings-job-support/' },
    ],
    techLinks: [HF_SBERT_LINK, HF_TEI_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, EMBEDDINGS_LINK, SEMANTIC_LINK, HF_AGENTIC_RAG_LINK,
      EXISTING.rag, EXISTING.ragEngineer, EXISTING.vectorDb,
    ],
  }),
});

// ─── TEI ─────────────────────────────────────────────────────────────────────

export const textEmbeddingsInference: LandingPageConfig = hfServicePage({
  slug: 'text-embeddings-inference-job-support',
  title: 'Text Embeddings Inference (TEI) Job Support | Serve Embeddings & Rerankers',
  description:
    'Job support for Text Embeddings Inference (TEI) — serve embedding and reranker models with high throughput, token-based dynamic batching, Flash Attention, and small images. Deploy on Inference Endpoints or your own infra.',
  keywords: [
    'Text Embeddings Inference job support', 'TEI support', 'serve embeddings TEI', 'TEI reranker',
    'embedding inference server', 'TEI Inference Endpoints', 'high throughput embeddings',
  ],
  h1: 'Text Embeddings Inference (TEI) Job Support — Fast Embedding & Reranker Serving',
  tagline:
    'Real-time help serving embeddings and rerankers with TEI — deployment, token-based dynamic batching, throughput and latency tuning, and running it on Inference Endpoints or your own GPUs.',
  heroEyebrow: 'TEI Serving Support',
  painIntro:
    'Embedding throughput bottlenecking your ingestion or query path? TEI is Hugging Face’s dedicated server for embedding and reranker models — much faster than ad-hoc encoding — but it needs correct deployment and batching. We help you run it well.',
  heroVariant:
    'Text Embeddings Inference (TEI) is a purpose-built server for open embedding models (and rerankers / sequence-classification models) with no graph-compile step, small container images, token-based dynamic batching, Flash Attention and cuBLASLt, safetensors loading, and OpenTelemetry/Prometheus metrics. We help with model selection and deployment (as a container on Inference Endpoints or self-hosted), batching and concurrency tuning for high ingestion and query throughput, CPU vs GPU choices, latency budgeting, monitoring, and wiring TEI into a RAG pipeline as the embedding and reranking service.',
  faqs: [
    ...hfServiceFaqs('Text Embeddings Inference (TEI)', 'We help deploy and tune TEI for embeddings and rerankers, and wire it into your RAG pipeline for high throughput.'),
    {
      question: 'When should I use TEI instead of encoding in-process?',
      answer:
        'In-process encoding with Sentence Transformers is fine for small batches and prototypes. When you need to embed large corpora quickly, serve embeddings to many clients, or serve a reranker at low latency, TEI’s dynamic batching and optimized kernels give far higher throughput and cleaner separation. We help you decide and deploy.',
    },
    {
      question: 'Can TEI serve rerankers too?',
      answer:
        'Yes — TEI serves reranker/sequence-classification models in addition to embedding models, so you can run both your bi-encoder embeddings and your cross-encoder reranker on the same serving technology. We help you deploy both and size them for your traffic.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'Inference Endpoints job support', href: '/huggingface-inference-endpoints-job-support/' },
    ],
    techLinks: [HF_SBERT_LINK, HF_ENDPOINTS_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, EMBEDDINGS_LINK, RERANK_LINK, SEMANTIC_LINK, HF_RAG_HUB_LINK,
      EXISTING.rag, EXISTING.vectorDb, EXISTING.modelDeployment,
    ],
  }),
});

// ─── Semantic search ─────────────────────────────────────────────────────────

export const semanticSearch: LandingPageConfig = hfServicePage({
  slug: 'huggingface-semantic-search-job-support',
  title: 'Semantic Search Job Support | Vector Search, Hybrid Retrieval & Reranking',
  description:
    'Job support for semantic search — embeddings with Sentence Transformers, vector databases, hybrid (dense + keyword) search, reranking, and evaluation. Build search that understands meaning, not just keywords.',
  keywords: [
    'semantic search job support', 'vector search support', 'hybrid search support', 'embedding search',
    'semantic search Hugging Face', 'search relevance reranking',
  ],
  h1: 'Semantic Search Job Support — Vector, Hybrid & Reranked Retrieval',
  tagline:
    'Real-time help building semantic search — Sentence Transformers embeddings, vector databases, hybrid dense+lexical retrieval, reranking, and relevance evaluation.',
  heroEyebrow: 'Semantic Search Support',
  painIntro:
    'Keyword search missing relevant results, or a vector search that returns semantically-close-but-wrong hits? Good semantic search blends dense and lexical signals and reranks — it is more than dropping embeddings into a vector DB. We help you build search that is actually relevant.',
  heroVariant:
    'We help build production semantic search: embedding content with Sentence Transformers, indexing in a vector database (FAISS, pgvector, Qdrant, Pinecone, Weaviate, OpenSearch, Elasticsearch — third-party stores), hybrid retrieval combining dense vectors with lexical/BM25 for the best of both, cross-encoder reranking for precision, filtering and metadata, query understanding, and relevance evaluation (nDCG, recall@k). Semantic search shares its stack with RAG retrieval, so the same improvements lift both.',
  faqs: [
    ...hfServiceFaqs('semantic search', 'We help build embeddings-based search with hybrid retrieval and reranking, and measure relevance on your real queries.'),
    {
      question: 'Is pure vector search enough, or do I need hybrid?',
      answer:
        'Pure vector search is strong on meaning but can miss exact terms, codes, and names; lexical/BM25 nails those but misses paraphrases. Hybrid search combines both and usually beats either alone, especially on real-world queries with a mix of concepts and exact terms. We help you implement and weight hybrid retrieval for your content.',
    },
    {
      question: 'How do I measure whether my search is good?',
      answer:
        'With a labeled query set and ranking metrics (recall@k, nDCG, MRR) plus spot checks on real queries. We help you build a small evaluation set once and reuse it to compare embedding models, hybrid weighting, and reranking objectively rather than by vibes.',
    },
  ],
  relatedLinks: relatedLinks({
    geoLinks: [
      { label: 'Hugging Face job support hub', href: '/hugging-face-proxy-job-support/' },
      { label: 'Embeddings & RAG job support', href: '/huggingface-embeddings-job-support/' },
    ],
    techLinks: [HF_SBERT_LINK, RERANK_LINK],
    problemLink: HF_PRODUCTION_LINK,
    proxyLink: HF_INTERVIEW_HUB_LINK,
    additionalLinks: [
      HF_HUB_LINK, HF_TEI_LINK, EMBEDDINGS_LINK, HF_AGENTIC_RAG_LINK, HF_LIGHTEVAL_LINK,
      EXISTING.rag, EXISTING.vectorDb, EXISTING.vectorDbSelection,
    ],
  }),
});

export const huggingFaceEmbeddingsPages: LandingPageConfig[] = [
  sentenceTransformers,
  embeddingsRag,
  reranking,
  textEmbeddingsInference,
  semanticSearch,
];
