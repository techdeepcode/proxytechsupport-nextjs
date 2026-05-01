import { loadInterviewBodyHtml } from '@/lib/interview-body-html';

export default function Article() {
  const html = loadInterviewBodyHtml('2026-04-03-real-enterprise-developer-interview-questions-kubernetes-aws-devops-security-usa-uk-canada-australia');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
