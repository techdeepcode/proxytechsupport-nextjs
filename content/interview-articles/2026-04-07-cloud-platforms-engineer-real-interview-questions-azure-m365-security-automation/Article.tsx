import { loadInterviewBodyHtml } from '@/lib/interview-body-html';

export default function Article() {
  const html = loadInterviewBodyHtml('2026-04-07-cloud-platforms-engineer-real-interview-questions-azure-m365-security-automation');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
