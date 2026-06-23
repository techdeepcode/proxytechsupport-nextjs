import { loadInterviewBodyHtml } from '@/lib/interview-body-html';

export default function Article() {
  const html = loadInterviewBodyHtml('2026-06-22-primavera-p6-scheduler-interview-questions-critical-path-baseline-wbs');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
