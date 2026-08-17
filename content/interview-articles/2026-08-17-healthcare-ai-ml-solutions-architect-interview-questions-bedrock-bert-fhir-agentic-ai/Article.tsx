import { loadInterviewBodyHtml } from '@/lib/interview-body-html';

export default function Article() {
  const html = loadInterviewBodyHtml('2026-08-17-healthcare-ai-ml-solutions-architect-interview-questions-bedrock-bert-fhir-agentic-ai');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
