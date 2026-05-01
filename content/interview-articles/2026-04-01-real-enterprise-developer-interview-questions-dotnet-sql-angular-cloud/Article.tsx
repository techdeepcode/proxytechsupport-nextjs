import { loadInterviewBodyHtml } from '@/lib/interview-body-html';

export default function Article() {
  const html = loadInterviewBodyHtml('2026-04-01-real-enterprise-developer-interview-questions-dotnet-sql-angular-cloud');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
