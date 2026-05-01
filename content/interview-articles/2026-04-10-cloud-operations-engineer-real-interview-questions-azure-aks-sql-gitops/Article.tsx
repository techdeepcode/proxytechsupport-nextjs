import { loadInterviewBodyHtml } from '@/lib/interview-body-html';

export default function Article() {
  const html = loadInterviewBodyHtml('2026-04-10-cloud-operations-engineer-real-interview-questions-azure-aks-sql-gitops');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
