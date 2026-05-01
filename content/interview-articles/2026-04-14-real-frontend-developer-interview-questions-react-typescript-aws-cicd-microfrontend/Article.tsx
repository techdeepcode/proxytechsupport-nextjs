import { loadInterviewBodyHtml } from '@/lib/interview-body-html';

export default function Article() {
  const html = loadInterviewBodyHtml('2026-04-14-real-frontend-developer-interview-questions-react-typescript-aws-cicd-microfrontend');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
