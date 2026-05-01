import fs from 'fs';
import path from 'path';
import BlogArticleShell from '@/components/BlogArticleShell';

export default function Article() {
  const html = fs.readFileSync(
    path.join(process.cwd(), 'content/blog-articles', "resume-linkedin-optimization-for-developers", 'body.html'),
    'utf8'
  );
  return (
    <BlogArticleShell>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </BlogArticleShell>
  );
}
