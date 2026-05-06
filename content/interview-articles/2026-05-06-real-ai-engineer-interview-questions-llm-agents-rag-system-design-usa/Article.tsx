import { loadInterviewBodyHtml } from '@/lib/interview-body-html';

export default function Article() {
  const html = loadInterviewBodyHtml('2026-05-06-real-ai-engineer-interview-questions-llm-agents-rag-system-design-usa');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
