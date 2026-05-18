import type { Metadata } from 'next';
import KnowledgeGuidePage from '@/components/KnowledgeGuidePage';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata({
  title: 'RAG & Agentic AI Job Support Guide — Vector DBs, Retrieval & Orchestration Help | Proxy Tech Support',
  description: 'Expert help for RAG system issues, vector database problems, embedding failures, retrieval quality, prompt orchestration, agentic workflow debugging, LangChain/LlamaIndex issues, hallucination control, and grounding.',
  canonical: 'https://proxytechsupport.com/rag-agentic-ai-job-support-guide/',
});

export default function Page() {
  return (
    <KnowledgeGuidePage
      h1="RAG & Agentic AI Job Support: Debugging Retrieval, Orchestration, and Production Issues"
      intro="RAG systems and agentic AI workflows have moved from research to production in every major industry. Engineers building and maintaining these systems face a new category of production issues — retrieval quality failures, agent loop bugs, prompt injection risks, hallucination in grounded contexts, and evaluation challenges. This guide covers the most common issues and how expert support resolves them."
      sections={[
        { heading: 'RAG Architecture Production Issues', body: 'A RAG system has several layers where things go wrong: document ingestion (chunking strategy, metadata handling), embedding generation (model choice, dimensionality, normalisation), vector search (index configuration, similarity metric), context assembly (context window management, relevance threshold), and generation (prompt design, hallucination control). Issues at any layer produce poor outputs that are difficult to diagnose without understanding the full pipeline.' },
        { heading: 'Vector Database Issues', body: 'Common vector database issues include:', bullets: ['Pinecone: index dimension mismatch after embedding model change', 'Weaviate: class schema conflicts after collection redesign', 'Chroma: persistence issues in containerised deployments', 'pgvector: slow queries without HNSW index configuration', 'Qdrant: payload filtering returning incorrect results due to schema mismatch'] },
        { heading: 'Embedding Pipeline Failures', body: 'Embedding pipeline failures often manifest as silent quality degradation rather than hard errors. Changing the embedding model without re-indexing existing documents produces mixed-model embeddings in the same index, causing retrieval to fail in non-obvious ways. Other common issues include token truncation (documents too long for the embedding context window) and inconsistent preprocessing between indexing and query time.' },
        { heading: 'Retrieval Quality Problems', body: 'Poor retrieval quality is the most common complaint in production RAG systems. Root causes include: chunking strategy that splits important context across chunks, embedding model not suited to the document domain, missing metadata filters that would narrow the search space, and similarity threshold too permissive or too strict.' },
        { heading: 'Agentic Workflow Debugging', body: 'Agentic AI workflows introduce a new class of bugs: agent loops that do not terminate, tool calls with malformed parameters, multi-step reasoning chains that fail silently partway through, and prompt injection vulnerabilities from external data sources. Debugging requires tracing the full agent execution graph, which frameworks like LangSmith and LlamaTrace make visible.' },
        { heading: 'Hallucination Control and Grounding', body: 'Even with good retrieval, LLMs can hallucinate facts not present in retrieved context. Grounding strategies include instruction tuning the prompt to cite sources, adding retrieval confidence thresholds, using structured output formats that force citation, and post-generation fact-checking pipelines. Expert support helps choose the right combination for your specific application and risk profile.' },
      ]}
      relatedLinks={[
        { href: '/agentic-ai-rag-mlops-job-support-usa/', label: 'Agentic AI RAG MLOps Support USA' },
        { href: '/agentic-ai-ml-job-support/', label: 'Agentic AI/ML Job Support' },
        { href: '/blog/rag-aimlops-retrieval-augmented-generation-guide/', label: 'RAG & MLOps Guide (Blog)' },
      ]}
      relatedGuides={[
        { href: '/ai-ml-job-support-guide/', label: 'AI/ML Job Support Guide' },
        { href: '/mlops-job-support-guide/', label: 'MLOps Job Support Guide' },
        { href: '/genai-interview-support-guide/', label: 'GenAI Interview Support Guide' },
      ]}
      faqs={[
        { q: 'What are the most common RAG pipeline failures?', a: 'Retrieval returning irrelevant context (chunking or embedding issues), the LLM hallucinating despite retrieved context (grounding failures), embedding dimension mismatches after model changes, and vector database performance degradation at scale.' },
        { q: 'How do you fix poor retrieval quality in a vector search system?', a: 'Evaluate each layer: check chunking strategy for context fragmentation, verify embedding model is appropriate for the document domain, review similarity threshold settings, add metadata filters to narrow the search space, and use retrieval evaluation tools (RAGAS, Trulens) to measure improvement systematically.' },
        { q: 'What is the difference between RAG and agentic AI workflows?', a: 'RAG is a retrieval pattern — fetch relevant context, pass to LLM, generate response. Agentic AI is an orchestration pattern — the LLM reasons about which tools to use, executes multi-step plans, and iterates based on tool results. Agentic systems may use RAG as one of their tools.' },
        { q: 'How do you debug LangChain or LlamaIndex orchestration issues?', a: 'Enable verbose logging to trace the full execution path. Use LangSmith (for LangChain) or LlamaTrace (for LlamaIndex) to visualise each step. Isolate the failing step by running it independently with the same inputs.' },
        { q: 'How do you evaluate a RAG system in production?', a: 'Track four metrics: answer faithfulness (is the answer supported by retrieved context?), context relevance (is the retrieved context actually relevant to the question?), answer relevance (does the answer address the question?), and context recall (was important context included?). RAGAS and DeepEval provide these evaluations programmatically.' },
      ]}
      ctaHref="/agentic-ai-rag-mlops-job-support-usa/"
      ctaLabel="Get RAG/AI Job Support"
    />
  );
}
