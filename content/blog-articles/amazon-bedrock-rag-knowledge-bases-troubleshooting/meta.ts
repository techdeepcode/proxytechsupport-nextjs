export const meta = {
  slug: "amazon-bedrock-rag-knowledge-bases-troubleshooting",
  title: "How to Build and Troubleshoot Amazon Bedrock RAG with Knowledge Bases",
  description: "Build a production RAG pipeline on Amazon Bedrock Knowledge Bases — ingestion, chunking, embeddings, OpenSearch/pgvector, Retrieve and RetrieveAndGenerate — then diagnose poor retrieval, sync failures and hallucinations.",
  date: "2026-08-26",
  keywords: "amazon bedrock rag, bedrock knowledge bases, retrieveandgenerate, bedrock rag troubleshooting, poor retrieval, knowledge base sync failure, chunking, embeddings, opensearch pgvector rag",
  permalink: "/blog/amazon-bedrock-rag-knowledge-bases-troubleshooting/",
  about: "Amazon Bedrock Knowledge Bases RAG",
  faqs: [
    { q: "How do Amazon Bedrock Knowledge Bases work?", a: "A Knowledge Base connects a data source (usually S3), chunks the documents, generates embeddings with a supported model, and stores the vectors in OpenSearch Serverless, Aurora pgvector or another supported store. At query time you call Retrieve to fetch relevant chunks, or RetrieveAndGenerate to fetch chunks and generate a cited answer in one call." },
    { q: "Why is my Bedrock RAG retrieval poor?", a: "Poor retrieval is almost always the pipeline, not the model: chunks too large or too small, the wrong chunking strategy for the document structure, a weak or mismatched embedding model, missing metadata filters so unrelated documents rank high, or no reranking. Fix chunking and metadata first, then add reranking and query reformulation." },
    { q: "Why does a Knowledge Base sync or ingestion job fail?", a: "Common causes are IAM permissions on the S3 source or vector store, unsupported or corrupt file formats, files exceeding size limits, an OpenSearch/pgvector index whose dimensions do not match the embedding model, or throttling during large ingestions. Check the ingestion job status and CloudWatch logs for the failed data-source documents." },
    { q: "How do you reduce hallucinations in Bedrock RAG?", a: "Ground answers strictly in retrieved context, enable Guardrails contextual grounding checks, return citations with RetrieveAndGenerate, lower the amount of unrelated context by tightening retrieval and metadata filters, and instruct the model to say it does not know when context is insufficient." },
  ],
} as const;
