import fs from 'fs';
import path from 'path';
import BlogArticleShell from '@/components/BlogArticleShell';

export default function Article() {
  const html = fs.readFileSync(
    path.join(process.cwd(), 'content/blog-articles', "hybrid-search-vs-vector-search", 'body.html'),
    'utf8'
  );
  return (
    <BlogArticleShell>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </BlogArticleShell>
  );
}
