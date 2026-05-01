import { loadInterviewBodyHtml } from '@/lib/interview-body-html';

export default function Article() {
  const html = loadInterviewBodyHtml('2026-04-20-real-sap-abap-interview-questions-otc-pricing-odata-btp');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
