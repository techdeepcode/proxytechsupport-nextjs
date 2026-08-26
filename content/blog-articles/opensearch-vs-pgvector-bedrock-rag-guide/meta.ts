export const meta = {
  slug: "opensearch-vs-pgvector-bedrock-rag-guide",
  title: "OpenSearch vs pgvector for Amazon Bedrock RAG: Choosing a Vector Store",
  description: "Amazon OpenSearch Serverless vs Aurora PostgreSQL pgvector as the vector store for Amazon Bedrock Knowledge Bases — scale, latency, cost, operations, hybrid search and filtering, and how to choose for production RAG.",
  date: "2026-08-26",
  keywords: "opensearch vs pgvector, bedrock vector store, amazon opensearch serverless rag, aurora pgvector, bedrock knowledge base vector database, vector store comparison, rag vector database aws",
  permalink: "/blog/opensearch-vs-pgvector-bedrock-rag-guide/",
  about: "Vector store choice for Amazon Bedrock RAG",
  faqs: [
    { q: "What vector database works with Amazon Bedrock Knowledge Bases?", a: "Bedrock Knowledge Bases support several vector stores, most commonly Amazon OpenSearch Serverless and Aurora PostgreSQL with the pgvector extension, along with other supported options. OpenSearch Serverless is a purpose-built, fully managed search and vector engine; Aurora pgvector keeps vectors next to relational data in Postgres. Bedrock manages ingestion and querying against whichever you configure." },
    { q: "Should I use OpenSearch or pgvector for Bedrock RAG?", a: "Choose OpenSearch Serverless for large-scale, search-heavy workloads that benefit from managed scaling and hybrid (keyword + vector) search. Choose Aurora pgvector when your data already lives in Postgres, you want vectors co-located with relational data and transactions, and your scale is moderate. Both work well with Knowledge Bases; the deciding factors are scale, existing data location, and operational preference." },
    { q: "Is pgvector good enough for production RAG?", a: "Yes, for many workloads. Aurora pgvector handles production RAG well at small-to-moderate scale, with the advantage of keeping vectors alongside relational data and using familiar SQL and Postgres operations. At very large scale or with heavy hybrid-search needs, a purpose-built engine like OpenSearch Serverless typically scales and performs more predictably." },
  ],
} as const;
