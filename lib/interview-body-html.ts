import fs from 'fs';
import path from 'path';

/**
 * PostLayout already renders `meta.title` as the only page-level `<h1>`.
 * Markdown → HTML often repeats that title as the first `<h1>` in the body; remove it.
 */
export function stripLeadingInterviewBodyH1(html: string): string {
  const trimmed = html.trim();
  return trimmed.replace(/^<h1\b[^>]*>[\s\S]*?<\/h1>\s*/i, '').trimStart();
}

/** Remaining `<h1>`s in Q&A HTML should not compete with the template h1 — use `<h2>`. */
export function demoteInterviewBodyH1ToH2(html: string): string {
  return html
    .replace(/<h1(\b[^>]*)>/gi, '<h2$1>')
    .replace(/<\/h1>/gi, '</h2>');
}

export function loadInterviewBodyHtml(slug: string): string {
  const filePath = path.join(process.cwd(), 'content/interview-articles', slug, 'body.html');
  let html = fs.readFileSync(filePath, 'utf8');
  html = stripLeadingInterviewBodyH1(html);
  html = demoteInterviewBodyH1ToH2(html);
  return html;
}
