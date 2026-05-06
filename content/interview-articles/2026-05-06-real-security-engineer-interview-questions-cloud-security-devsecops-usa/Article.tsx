import { loadInterviewBodyHtml } from '@/lib/interview-body-html';

export default function Article() {
  const html = loadInterviewBodyHtml('2026-05-06-real-security-engineer-interview-questions-cloud-security-devsecops-usa');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
