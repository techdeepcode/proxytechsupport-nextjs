import { loadInterviewBodyHtml } from '@/lib/interview-body-html';

const SLUG = '2026-06-02-senior-ai-ml-engineer-interview-questions-recommendation-systems';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the most important topics for a Senior AI/ML Engineer recommendation system interview?',
      acceptedAnswer: { '@type': 'Answer', text: 'The most important topics are collaborative filtering, content-based filtering, hybrid recommendation systems, candidate generation, reranking, XGBoost, ALS, NDCG, Precision@K, Recall@K, A/B testing, Spark pipelines, and production monitoring.' },
    },
    {
      '@type': 'Question',
      name: 'How should I explain XGBoost in a recommendation system interview?',
      acceptedAnswer: { '@type': 'Answer', text: 'Explain XGBoost as a reranking model. Candidate generation first returns possible items. Then XGBoost scores each user-item pair using features like ALS score, content similarity, popularity, recency, and user engagement. The final recommendations are sorted by predicted score.' },
    },
    {
      '@type': 'Question',
      name: 'What is the best short answer for collaborative filtering?',
      acceptedAnswer: { '@type': 'Answer', text: 'Collaborative filtering recommends items based on user behavior patterns. If users behaved similarly in the past, the system recommends items liked by similar users. At scale, it is commonly implemented using matrix factorization or ALS.' },
    },
    {
      '@type': 'Question',
      name: 'Why is NDCG important in recommendation systems?',
      acceptedAnswer: { '@type': 'Answer', text: 'NDCG is important because it measures ranking quality. It rewards systems that place the most relevant items at the top. In recommendation systems, the order matters because users mostly click the first few results.' },
    },
    {
      '@type': 'Question',
      name: 'How do you prove recommendation systems improve user engagement?',
      acceptedAnswer: { '@type': 'Answer', text: 'Use A/B testing. Compare a control group using the old recommendation logic against a treatment group using the new model. Track CTR, conversion, engagement, guardrail metrics, and statistical significance.' },
    },
    {
      '@type': 'Question',
      name: 'What is data drift in production ML?',
      acceptedAnswer: { '@type': 'Answer', text: 'Data drift means production input data distribution changed compared to training data. For example, user behavior, content categories, traffic sources, or engagement patterns may shift. This can reduce model performance.' },
    },
    {
      '@type': 'Question',
      name: 'Where do you check data drift?',
      acceptedAnswer: { '@type': 'Answer', text: 'Data drift is checked in feature monitoring dashboards and pipelines using tools like Evidently AI, MLflow Monitoring, Grafana, Datadog, ELK, or CloudWatch. Training feature distributions are compared with production feature distributions.' },
    },
    {
      '@type': 'Question',
      name: 'What is MLflow used for in production ML?',
      acceptedAnswer: { '@type': 'Answer', text: 'MLflow is used for experiment tracking, model registry, model versioning, metrics logging, artifact tracking, deployment stage management, rollback, and traceability from training to production.' },
    },
    {
      '@type': 'Question',
      name: 'What is tiktoken in LLM projects?',
      acceptedAnswer: { '@type': 'Answer', text: 'tiktoken is OpenAI\'s tokenizer library. It counts tokens, manages context limits, estimates cost, controls RAG chunking, and helps prevent context overflow before calling GPT models.' },
    },
    {
      '@type': 'Question',
      name: 'How are LLMs trained?',
      acceptedAnswer: { '@type': 'Answer', text: 'LLMs are trained using next-token prediction on massive text datasets. After pretraining, they are improved using instruction tuning and reinforcement learning from human feedback.' },
    },
  ],
};

export default function Article() {
  const html = loadInterviewBodyHtml(SLUG);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
