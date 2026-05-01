import fs from 'fs';
import path from 'path';
import BlogArticleShell from '@/components/BlogArticleShell';

export default function Article() {
  const html = fs.readFileSync(
    path.join(process.cwd(), 'content/blog-articles', "angular-job-support-guide", 'body.html'),
    'utf8'
  );
  return (
    <BlogArticleShell>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </BlogArticleShell>
  );
}
