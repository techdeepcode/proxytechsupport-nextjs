import type { ReactNode } from 'react';
import BlogArticleShell from '@/components/BlogArticleShell';
import { RagCodeBlock } from './RagCodeBlock';
import styles from './RagArticle.module.css';

function DataTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className={styles.metricCard}>
      <span className={styles.metricValue}>{value}</span>
      <span className={styles.metricLabel}>{label}</span>
    </div>
  );
}

export default function Article() {
  return (
    <BlogArticleShell>
      <article className={styles.ragArticle}>
        <p>
          Many enterprise LLM applications now treat <strong>Retrieval-Augmented Generation (RAG)</strong> as
          default architecture: combine semantic search with a generator model so answers stay grounded in{' '}
          <em>your</em> documents. This guide walks through how RAG works, how it differs from fine-tuning, what to
          run in production, and how <strong>AIMLOps</strong> practices keep quality high as data and models change.
        </p>

        <div className={styles.metrics}>
          <Metric value="~73%" label="Share of enterprise LLM stacks using retrieval (survey estimates)" />
          <Metric value="4×" label="Typical lift in factual QA vs. ungrounded completion (when corpus is clean)" />
          <Metric value="$8B+" label="Vector DB & RAG tooling market — strong YoY growth" />
          <Metric value="~60%" label="Reported drop in obvious hallucinations with solid RAG + prompts" />
        </div>
        <p className={styles.metricsNote}>
          Figures vary by vendor surveys and internal benchmarks — treat as directional, not guarantees.
        </p>

        <nav className={styles.toc} aria-label="Table of contents">
          <div className={styles.tocTitle}>On this page</div>
          <ol>
            <li>
              <a href="#what-is-rag">What is RAG?</a>
            </li>
            <li>
              <a href="#why-rag-matters">Why RAG matters</a>
            </li>
            <li>
              <a href="#rag-architecture">Architecture</a>
            </li>
            <li>
              <a href="#rag-vs-finetuning">RAG vs fine-tuning</a>
            </li>
            <li>
              <a href="#vector-databases">Vector databases</a>
            </li>
            <li>
              <a href="#rag-pipeline">Production pipeline</a>
            </li>
            <li>
              <a href="#advanced-rag">Advanced RAG</a>
            </li>
            <li>
              <a href="#aimlops">AIMLOps</a>
            </li>
            <li>
              <a href="#use-cases">Use cases</a>
            </li>
            <li>
              <a href="#tools">Tools & frameworks</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ol>
        </nav>

        <h2 id="what-is-rag">What is Retrieval-Augmented Generation (RAG)?</h2>
        <p>
          <strong>Retrieval-Augmented Generation (RAG)</strong> augments Large Language Models (LLMs) by retrieving
          relevant, up-to-date information from an external knowledge base <em>before</em> generating a response.
          Instead of relying only on weights frozen at training time, RAG combines <strong>semantic search</strong>{' '}
          with <strong>generative AI</strong> for answers that can track your live docs.
        </p>
        <div className={styles.definitionStrip}>
          <div className={styles.definitionIntro}>
            <strong>Simple definition</strong>
            <span>RAG = three steps working together</span>
          </div>
          <div className={styles.definitionGrid}>
            <div className={styles.defSectorRetrieve}>
              <span className={styles.defSectorLabel}>Retrieve</span>
              <p>Find the right documents from your knowledge base before the model answers.</p>
            </div>
            <div className={styles.defSectorAugment}>
              <span className={styles.defSectorLabel}>Augment</span>
              <p>Inject those passages into the prompt so the model sees grounded context.</p>
            </div>
            <div className={styles.defSectorGenerate}>
              <span className={styles.defSectorLabel}>Generate</span>
              <p>The LLM produces an answer and citations based on that retrieved context.</p>
            </div>
          </div>
        </div>
        <p>
          RAG was introduced by Lewis et al. (Meta AI, 2020) and is now a <strong>standard production pattern</strong>{' '}
          for enterprise assistants, internal search, and support bots in 2026.
        </p>
        <h3>Core components</h3>
        <ul>
          <li>
            <strong>Knowledge base</strong> — PDFs, HTML, wikis, databases, APIs, Confluence, SharePoint, and more.
          </li>
          <li>
            <strong>Embedding model</strong> — Maps text chunks to vectors (e.g. <code>text-embedding-3-large</code>,{' '}
            <code>bge-large-en</code>).
          </li>
          <li>
            <strong>Vector store</strong> — Similarity search (Pinecone, Weaviate, Qdrant, Chroma, pgvector).
          </li>
          <li>
            <strong>Retriever</strong> — Embeds the query and returns top-<em>k</em> chunks.
          </li>
          <li>
            <strong>Generator (LLM)</strong> — GPT-4–class models, Claude, Llama 3, Gemini, etc.
          </li>
        </ul>

        <h2 id="why-rag-matters">Why RAG matters</h2>
        <p>LLMs hit three recurring limits — RAG addresses them:</p>
        <h3>1. Knowledge cutoff &amp; staleness</h3>
        <p>
          Models have training cutoffs. For finance, healthcare, legal, and security,{' '}
          <strong>static weights are not enough</strong>. RAG connects the model to{' '}
          <strong>continuously updated</strong> sources.
        </p>
        <h3>2. Hallucinations</h3>
        <p>
          Without grounding, models invent facts. RAG pushes answers toward <strong>retrieved evidence</strong> and
          citations.
        </p>
        <h3>3. Context limits &amp; private data</h3>
        <p>
          You cannot paste your whole corpus into one prompt. RAG pulls <strong>only relevant</strong> chunks.
          Sensitive data can stay in <strong>your</strong> infrastructure.
        </p>
        <div className={styles.callout}>
          <p>
            <strong>Key insight:</strong> RAG is <strong>complementary</strong> to fine-tuning — best for{' '}
            <strong>dynamic, factual, proprietary knowledge</strong>. Fine-tuning helps{' '}
            <strong>style, tone, and task format</strong>. Strong stacks often use <strong>both</strong>.
          </p>
        </div>

        <h2 id="rag-architecture">RAG architecture</h2>
        <p>
          A production RAG system splits into an <strong>offline indexing</strong> path and an{' '}
          <strong>online retrieval + generation</strong> path.
        </p>
        <h3>Phase 1: offline indexing</h3>
        <RagCodeBlock language="text" filename="offline-indexing.pipeline.txt">{`// OFFLINE: batch or incremental as documents change

[ Raw documents ]     PDFs, HTML, DOCX, DB rows, API payloads
        ↓
[ Document loader ]   LangChain loaders / LlamaIndex readers
        ↓
[ Chunker ]           Recursive, semantic, or token-aware splits
        ↓
[ Embedding model ]   Same family you will use at query time
        ↓
[ Vector index ]      Pinecone, Weaviate, Qdrant, pgvector, Chroma …`}</RagCodeBlock>
        <h3>Phase 2: online retrieval + generation</h3>
        <RagCodeBlock language="text" filename="online-query.pipeline.txt">{`// ONLINE: every user query

[ User query ]  →  optional HyDE / multi-query / step-back
        ↓
[ Query embedding ]  (must match indexing model)
        ↓
[ Vector ANN search ]  top-k ≈ 5–20
        ↓  optional BM25 hybrid + RRF
[ Reranker ]  cross-encoder or API rerank
        ↓
[ Prompt assembly ]  system + history + chunks + question
        ↓
[ LLM ]  low temperature for factual tasks
        ↓
[ Grounded answer ]  + citations`}</RagCodeBlock>

        <h3>Chunking</h3>
        <ul>
          <li>
            <strong>256–512 tokens</strong> — general Q&amp;A and support.
          </li>
          <li>
            <strong>512–1024 tokens</strong> — long technical docs and papers.
          </li>
          <li>
            <strong>Semantic chunking</strong> — preferred in many 2026 stacks.
          </li>
          <li>
            <strong>Hierarchical chunks</strong> — retrieve small snippets, expand with parent sections.
          </li>
        </ul>
        <RagCodeBlock language="python" filename="semantic_chunk.py">{`# Semantic chunking with LangChain (example pattern)
from langchain_experimental.text_splitter import SemanticChunker
from langchain_openai import OpenAIEmbeddings

embeddings = OpenAIEmbeddings(model="text-embedding-3-large")

splitter = SemanticChunker(
    embeddings,
    breakpoint_threshold_type="percentile",
    breakpoint_threshold_amount=95,
)

docs = splitter.split_documents(raw_documents)`}</RagCodeBlock>

        <h2 id="rag-vs-finetuning">RAG vs fine-tuning</h2>
        <DataTable
          headers={['Factor', 'RAG', 'Fine-tuning']}
          rows={[
            ['Cost', 'Often lower at scale (inference + store)', 'Higher (GPU, data prep, iterations)'],
            ['Update frequency', <span className={styles.good}>Incremental index updates</span>, 'New train / adapt cycle'],
            ['Factual accuracy', <span className={styles.good}>Strong when corpus is authoritative</span>, 'Depends on data; can age'],
            ['Style / tone', 'Prompting + small adapters', <span className={styles.good}>Often easier to bake in</span>],
            ['Private data', <span className={styles.good}>Easier to boundary in your VPC</span>, 'Memorization / leakage risks'],
            ['Latency', 'Retrieval + optional rerank', <span className={styles.good}>Usually one forward pass</span>],
            ['Explainability', <span className={styles.good}>Source pointers</span>, 'Harder to attribute'],
            ['Best for', 'Q&A, search, knowledge assistants', 'Classification, format, voice, specialized heads'],
          ]}
        />
        <div className={styles.callout}>
          <p>
            <strong>2026 pattern:</strong> <strong>RAG + PEFT</strong> (LoRA / QLoRA) — align vocabulary and output
            shape with adapters; keep facts in the index.
          </p>
        </div>

        <h2 id="vector-databases">Vector databases</h2>
        <p>
          A <strong>vector database</strong> stores embeddings and runs <strong>ANN</strong> search for interactive
          apps. Vendor choice is a core <strong>AIMLOps</strong> decision.
        </p>
        <DataTable
          headers={['Vector DB', 'Best for', 'Scale notes', 'Deployment']}
          rows={[
            [<strong>Pinecone</strong>, 'Managed, fast to prod', 'Very large', 'Cloud SaaS'],
            [<strong>Weaviate</strong>, 'Hybrid / multi-modal', 'Large', 'Cloud or self-hosted'],
            [<strong>Qdrant</strong>, 'Performance + filters', 'Large', 'Self-hosted / cloud'],
            [<strong>Chroma</strong>, 'Local dev, prototypes', 'Smaller', 'In-process / light server'],
            [<strong>pgvector</strong>, 'Existing Postgres teams', 'Medium–large', 'PostgreSQL extension'],
            [<strong>Milvus</strong>, 'OSS, Kubernetes-native', 'Billions', 'Self-hosted'],
            [<strong>OpenSearch</strong>, 'BM25 + kNN on AWS', 'Large', 'AWS / self-hosted'],
          ]}
        />
        <h3>Hybrid search</h3>
        <p>
          Pure dense retrieval can miss SKUs and exact tokens. Combine dense + <strong>BM25</strong> with{' '}
          <strong>reciprocal rank fusion (RRF)</strong> as your reliability baseline.
        </p>
        <RagCodeBlock language="python" filename="hybrid_search.py">{`# Hybrid query (Weaviate Python client v4 style)
import weaviate

client = weaviate.connect_to_cloud(cluster_url=WEAVIATE_URL, auth_credentials=auth)
collection = client.collections.get("KnowledgeBase")

results = collection.query.hybrid(
    query="RAG pipeline latency optimization",
    alpha=0.75,
    limit=10,
    return_metadata=weaviate.classes.query.MetadataQuery(score=True),
)`}</RagCodeBlock>

        <h2 id="rag-pipeline">Production pipeline (step-by-step)</h2>
        <ol className={styles.steps}>
          <li>
            <div className={styles.stepBody}>
              <strong>Ingestion</strong>
              <span>Normalize sources; strip boilerplate; attach metadata for filtered retrieval.</span>
            </div>
          </li>
          <li>
            <div className={styles.stepBody}>
              <strong>Chunking</strong>
              <span>Semantic or recursive splits; ~20–25% overlap; parent/child IDs for hierarchy.</span>
            </div>
          </li>
          <li>
            <div className={styles.stepBody}>
              <strong>Embed &amp; index</strong>
              <span>Batch embed; domain-aligned model; incremental upserts.</span>
            </div>
          </li>
          <li>
            <div className={styles.stepBody}>
              <strong>Query understanding</strong>
              <span>Rewriting, HyDE, multi-query for recall.</span>
            </div>
          </li>
          <li>
            <div className={styles.stepBody}>
              <strong>Retrieve &amp; rerank</strong>
              <span>Hybrid search; wide candidate set (e.g. 20); rerank to tight set (e.g. 5).</span>
            </div>
          </li>
          <li>
            <div className={styles.stepBody}>
              <strong>Prompting</strong>
              <span>“Answer only from context”; citations; temperature 0.1–0.3 for facts.</span>
            </div>
          </li>
          <li>
            <div className={styles.stepBody}>
              <strong>Validation</strong>
              <span>Faithfulness checks, safety filters, tracing IDs.</span>
            </div>
          </li>
        </ol>

        <h2 id="advanced-rag">Advanced RAG (2026)</h2>
        <ul>
          <li>
            <strong>Corrective RAG (CRAG)</strong> — Fallback when retrieved docs look weak.
          </li>
          <li>
            <strong>Self-RAG</strong> — Model signals when to retrieve and whether context supports the answer.
          </li>
          <li>
            <strong>GraphRAG</strong> — Graph structure for multi-hop questions.
          </li>
          <li>
            <strong>Agentic RAG</strong> — LangGraph, LlamaIndex agents, AutoGen-style loops.
          </li>
          <li>
            <strong>Multimodal RAG</strong> — Slides, diagrams, tables + vision models.
          </li>
        </ul>
        <div className={styles.callout}>
          <p>
            <strong>Trend:</strong> <strong>Long-context models</strong> — for small curated corpora, teams sometimes
            stuff more full documents; at large scale, retrieval stays mandatory.
          </p>
        </div>

        <h2 id="aimlops">AIMLOps &amp; monitoring</h2>
        <p>
          <strong>AIMLOps / LLMOps</strong> covers deploy, monitoring, and iteration. RAG adds embeddings, indexes,
          and retriever quality.
        </p>
        <RagCodeBlock language="text" filename="aimlops-stack.txt">{`DATA:     stores → ETL (Airflow, Prefect, dbt) → vector DB
SERVE:    RAG API → LLM gateway (LiteLLM) → cache (Redis / semantic cache)
OBSERVE:  traces (LangSmith, Arize) → evals (RAGAS, TruLens) → drift (Evidently)
RELEASE:  prompt versioning → A/B tests → rollback`}</RagCodeBlock>
        <h3>RAGAS-style metrics</h3>
        <ul>
          <li>
            <strong>Faithfulness</strong> — Answer grounded in context?
          </li>
          <li>
            <strong>Answer relevancy</strong> — Addresses the question?
          </li>
          <li>
            <strong>Context precision</strong> — Chunks on-topic?
          </li>
          <li>
            <strong>Context recall</strong> — Retrieval covered needed facts?
          </li>
        </ul>
        <RagCodeBlock language="python" filename="ragas_eval.py">{`from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy, context_precision, context_recall
from datasets import Dataset

eval_dataset = Dataset.from_dict({
    "question": questions,
    "answer": generated_answers,
    "contexts": retrieved_contexts,
    "ground_truth": ground_truths,
})

results = evaluate(
    eval_dataset,
    metrics=[faithfulness, answer_relevancy, context_precision, context_recall],
)
print(results)`}</RagCodeBlock>
        <h3>Practices that matter</h3>
        <ul>
          <li>
            <strong>Index versioning</strong> — Blue/green re-embed on embedding model upgrades.
          </li>
          <li>
            <strong>Semantic cache</strong> — Similar queries → cached answers.
          </li>
          <li>
            <strong>Prompt registry</strong> — Version templates in CI (Langfuse, Humanloop).
          </li>
          <li>
            <strong>Drift monitoring</strong> — Query mix and document distribution.
          </li>
          <li>
            <strong>Tracing</strong> — Retrieval IDs tied to each generation.
          </li>
        </ul>
        <h3>Cost levers</h3>
        <ul>
          <li>Smaller embed models for bulk indexing.</li>
          <li>Async batch embedding for ingestion.</li>
          <li>Route easy queries to smaller LLMs.</li>
          <li>
            Tight <strong>top-k</strong> after reranking — often <strong>3–5</strong> great chunks beat 15 noisy
            ones.
          </li>
        </ul>

        <h2 id="use-cases">Use cases by industry</h2>
        <div className={styles.useGrid}>
          <div className={styles.useCard}>
            <div className={styles.useCardIcon} aria-hidden>
              🏦
            </div>
            <h4>Financial services</h4>
            <p>Regulatory manuals, filings, internal policy Q&amp;A.</p>
          </div>
          <div className={styles.useCard}>
            <div className={styles.useCardIcon} aria-hidden>
              ⚕️
            </div>
            <h4>Healthcare &amp; life sciences</h4>
            <p>Protocols and literature-assisted workflows (compliance-aware).</p>
          </div>
          <div className={styles.useCard}>
            <div className={styles.useCardIcon} aria-hidden>
              ⚖️
            </div>
            <h4>Legal</h4>
            <p>Clause search, discovery support, knowledge assistants.</p>
          </div>
          <div className={styles.useCard}>
            <div className={styles.useCardIcon} aria-hidden>
              🛒
            </div>
            <h4>E-commerce</h4>
            <p>Catalog and review-grounded shopping assistance.</p>
          </div>
          <div className={styles.useCard}>
            <div className={styles.useCardIcon} aria-hidden>
              💻
            </div>
            <h4>Developer tools</h4>
            <p>Private repo docs, API catalogs, runbooks.</p>
          </div>
          <div className={styles.useCard}>
            <div className={styles.useCardIcon} aria-hidden>
              🏭
            </div>
            <h4>Manufacturing</h4>
            <p>Manuals, maintenance logs, troubleshooting trees.</p>
          </div>
        </div>

        <h2 id="tools">Tools &amp; frameworks</h2>
        <DataTable
          headers={['Tool', 'Strength', 'Typical use']}
          rows={[
            [<strong>LangChain</strong>, 'Large ecosystem, composable chains', 'General RAG, tools, agents'],
            [<strong>LlamaIndex</strong>, 'Ingestion, indexes, query engines', 'Document-heavy enterprise RAG'],
            [<strong>Haystack</strong>, 'Pipeline-oriented search', 'Search + NLP stacks'],
            [<strong>LangGraph</strong>, 'Stateful graphs', 'Agentic, multi-step RAG'],
            [<strong>DSPy</strong>, 'Programmatic optimization', 'Pipeline / prompt tuning'],
          ]}
        />
        <h3>Embedding models (2026 benchmarks)</h3>
        <ul>
          <li>
            <code>text-embedding-3-large</code> (OpenAI)
          </li>
          <li>
            <code>voyage-3</code> (Voyage AI)
          </li>
          <li>
            <code>bge-m3</code> (BAAI)
          </li>
          <li>
            <code>e5-mistral-7b-instruct</code>
          </li>
        </ul>
        <h3>Reference stack (LlamaIndex + Qdrant + rerank)</h3>
        <RagCodeBlock language="python" filename="llamaindex_qdrant_rerank.py">{`from llama_index.core import VectorStoreIndex, StorageContext
from llama_index.vector_stores.qdrant import QdrantVectorStore
from llama_index.postprocessor.cohere_rerank import CohereRerank
from llama_index.core.query_engine import RetrieverQueryEngine
import qdrant_client

client = qdrant_client.QdrantClient(url=QDRANT_URL)
vector_store = QdrantVectorStore(client=client, collection_name="prod_knowledge")
storage_context = StorageContext.from_defaults(vector_store=vector_store)

index = VectorStoreIndex.from_documents(
    documents,
    storage_context=storage_context,
    embed_model="voyage-3",
)

retriever = index.as_retriever(similarity_top_k=20)
reranker = CohereRerank(api_key=COHERE_KEY, top_n=5)

query_engine = RetrieverQueryEngine(
    retriever=retriever,
    node_postprocessors=[reranker],
)

response = query_engine.query("What are the top RAG optimization strategies?")
print(response.response)
print(response.source_nodes)`}</RagCodeBlock>

        <h2 id="faq">FAQ</h2>
        <div className={styles.faqItem}>
          <div className={styles.faqQ}>What is RAG in simple terms?</div>
          <p className={styles.faqA}>
            The model <strong>looks up</strong> information in your knowledge base before answering instead of guessing
            from weights alone — better grounding and updatability.
          </p>
        </div>
        <div className={styles.faqItem}>
          <div className={styles.faqQ}>RAG vs fine-tuning?</div>
          <p className={styles.faqA}>
            Fine-tuning <strong>changes weights</strong>; RAG <strong>injects facts at inference</strong>. Many teams
            combine both.
          </p>
        </div>
        <div className={styles.faqItem}>
          <div className={styles.faqQ}>Main production challenges?</div>
          <p className={styles.faqA}>
            Embedding upgrades, index freshness, latency, evaluation, cost, and access control. Observability and eval
            loops are essential.
          </p>
        </div>
        <div className={styles.faqItem}>
          <div className={styles.faqQ}>Which vector DB?</div>
          <p className={styles.faqA}>
            Depends on scale and hosting: <strong>Pinecone</strong> for speed to prod, <strong>Weaviate/Qdrant</strong>{' '}
            for control, <strong>pgvector</strong> on Postgres, <strong>Milvus</strong> for very large OSS.
          </p>
        </div>
        <div className={styles.faqItem}>
          <div className={styles.faqQ}>Reduce hallucinations?</div>
          <p className={styles.faqA}>
            Better chunking and reranking; instruct to cite or refuse; faithfulness metrics; corrective/self-RAG; low
            temperature for facts.
          </p>
        </div>
        <div className={styles.faqItem}>
          <div className={styles.faqQ}>GraphRAG — when?</div>
          <p className={styles.faqA}>
            When queries need <strong>multi-hop</strong> relational reasoning beyond flat chunks — at higher engineering
            cost.
          </p>
        </div>

        <div className={styles.takeaways}>
          <h2>Key takeaways</h2>
          <ul>
            <li>
              <strong>RAG is core infrastructure</strong> for private docs and changing truth.
            </li>
            <li>
              Production needs <strong>chunking, hybrid retrieval, reranking, evaluation, caching, tracing</strong>.
            </li>
            <li>
              2026 frontier: <strong>agentic workflows</strong>, <strong>graph-assisted retrieval</strong>, and{' '}
              <strong>long-context</strong> where corpus size allows.
            </li>
            <li>
              Treat the system like any critical service: <strong>version, test, monitor, iterate</strong>.
            </li>
          </ul>
        </div>

        <p className={styles.cta}>
          Need <strong>live implementation help</strong> (Python, vector stores, LangChain / LlamaIndex, RAGAS)? See{' '}
          <a href="/ai-ml-data-science-proxy-job-support/">AI/ML &amp; data science job support</a> — same-day expert
          assistance for professionals in the <strong>USA, UK, Canada, Australia</strong>, and beyond.
        </p>
      </article>
    </BlogArticleShell>
  );
}
