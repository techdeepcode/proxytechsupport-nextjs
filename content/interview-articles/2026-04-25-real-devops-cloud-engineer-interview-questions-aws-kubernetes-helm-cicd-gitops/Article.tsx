import { loadInterviewBodyHtml } from '@/lib/interview-body-html';

export default function Article() {
  const html = loadInterviewBodyHtml('2026-04-25-real-devops-cloud-engineer-interview-questions-aws-kubernetes-helm-cicd-gitops');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
