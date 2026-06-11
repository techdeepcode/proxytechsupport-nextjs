import { loadInterviewBodyHtml } from '@/lib/interview-body-html';

export default function Article() {
  const html = loadInterviewBodyHtml('2026-06-11-senior-cloud-engineer-aws-migration-finance-interview-questions');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
