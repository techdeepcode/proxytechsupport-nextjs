import { loadInterviewBodyHtml } from '@/lib/interview-body-html';

export default function Article() {
  const html = loadInterviewBodyHtml('2026-07-06-ml-genai-platform-engineer-interview-questions-rag-agentic-ai');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
