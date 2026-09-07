export const meta = {
  slug: "hybrid-search-vs-vector-search",
  permalink: "/blog/hybrid-search-vs-vector-search/",
  title: "Hybrid Search vs Vector Search: A RAG Retrieval Decision Guide",
  description: "When pure vector search is enough, when you need keyword/BM25, and how hybrid search fuses both. A practical decision guide with the trade-offs, fusion methods, and failure modes that decide RAG retrieval quality.",
  date: "2026-09-07",
  keywords: "hybrid search vs vector search, bm25 vs embeddings, dense sparse retrieval, reciprocal rank fusion, keyword search rag, semantic search, lexical search, retrieval decision guide",
  about: "Hybrid search vs vector search for RAG retrieval",
  faqs: [
    { q: "What is the difference between vector search and hybrid search?", a: "Vector (dense) search retrieves by semantic similarity of embeddings, so it matches meaning and paraphrase but can miss exact tokens. Keyword/lexical search (BM25) matches exact terms, so it nails IDs, codes and rare words but misses synonyms. Hybrid search runs both and fuses the results — typically with reciprocal rank fusion or a weighted score — to get the recall of semantics and the precision of exact matching in one ranked list." },
    { q: "When is pure vector search enough?", a: "When queries and documents are natural-language paraphrases of each other, the vocabulary is not full of exact identifiers, and the corpus is not dominated by rare tokens. FAQ-style knowledge bases, conceptual documentation and conversational retrieval often do fine on dense-only. As soon as users search by product codes, error codes, names, SKUs, API symbols or legal citations, pure vector starts missing and you want hybrid." },
    { q: "What is reciprocal rank fusion?", a: "Reciprocal rank fusion (RRF) combines multiple ranked lists by scoring each document by the sum of 1/(k + rank) across the lists it appears in, where k is a small constant. It needs no score normalisation between dense and sparse retrievers, is robust, and is the default fusion method in many vector databases' hybrid search. A weighted linear combination of normalised scores is the main alternative when you want to tune the dense/sparse balance." },
    { q: "Does hybrid search replace reranking?", a: "No — they solve different problems and stack well. Hybrid search improves what gets into the candidate set (recall) by combining lexical and semantic signals. Reranking improves the ordering of that candidate set (precision at small k) with a cross-encoder. A strong production pipeline often does hybrid retrieval to build a broad candidate pool, then reranks the top candidates before passing a few chunks to the model." },
  ],
} as const;
