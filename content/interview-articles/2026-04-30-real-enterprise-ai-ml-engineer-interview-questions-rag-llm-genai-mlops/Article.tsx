import { loadInterviewBodyHtml } from '@/lib/interview-body-html';

export default function Article() {
  const html = loadInterviewBodyHtml('2026-04-30-real-enterprise-ai-ml-engineer-interview-questions-rag-llm-genai-mlops');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
