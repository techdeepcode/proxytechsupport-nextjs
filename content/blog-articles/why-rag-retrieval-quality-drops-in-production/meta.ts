export const meta = {
  slug: "why-rag-retrieval-quality-drops-in-production",
  permalink: "/blog/why-rag-retrieval-quality-drops-in-production/",
  title: "Why RAG Retrieval Quality Drops in Production (and How to Fix It)",
  description: "RAG that worked in the demo but returns wrong or missing context in production is almost always a retrieval problem, not a model problem. A senior engineer's checklist — chunking, embeddings, metadata filters, query transformation and reranking.",
  date: "2026-09-07",
  keywords: "rag retrieval quality, rag not retrieving, rag production issues, chunking strategy, embedding model mismatch, metadata filtering, query rewriting, reranking, retrieval recall precision, rag evaluation",
  about: "RAG retrieval quality troubleshooting in production",
  faqs: [
    { q: "Why does my RAG system return wrong or irrelevant answers in production?", a: "In the large majority of cases the model is fine and retrieval is failing — the right chunk was never fetched into the context window, so the model answers from priors or hedges. Debug retrieval first: log what was retrieved for a failing query, check whether the correct chunk even exists in the index, and measure recall (did we fetch the relevant chunk) separately from generation. Chunking, embedding mismatch, missing metadata filters and lack of reranking cause most production drops." },
    { q: "How do I know if it's a retrieval problem or a model problem?", a: "Separate the two stages. For a failing query, inspect the retrieved chunks before generation. If the correct information is not in the retrieved set, it is a retrieval problem — no better model fixes it. If the correct chunk was retrieved but the answer is still wrong, it is a generation/prompting problem. This single split resolves most 'the LLM is dumb' complaints, which are usually 'the LLM never saw the answer'." },
    { q: "What are the biggest causes of poor RAG retrieval?", a: "Chunking that splits or dilutes the answer; an embedding model that doesn't match the domain or query style (or a mismatch between the model used to index and the one used to query); missing metadata filtering so the right document is buried under near-duplicates; user queries that don't lexically resemble the source text; and no reranking step to reorder the top candidates before they hit the context window." },
    { q: "Does adding reranking fix RAG retrieval quality?", a: "Reranking helps a lot when your vector search returns the right chunk somewhere in the top 20-50 but not in the top 3-5 you actually pass to the model. A cross-encoder reranker reorders candidates by true relevance to the query, lifting precision at the small k you can afford in the context window. It does not help if the correct chunk is not retrieved at all — that is a chunking, embedding or hybrid-search problem upstream of reranking." },
  ],
} as const;
