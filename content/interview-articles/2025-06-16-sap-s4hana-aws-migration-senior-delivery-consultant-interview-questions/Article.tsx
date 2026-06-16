import { loadInterviewBodyHtml } from '@/lib/interview-body-html';

export default function Article() {
  const html = loadInterviewBodyHtml('2025-06-16-sap-s4hana-aws-migration-senior-delivery-consultant-interview-questions');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
