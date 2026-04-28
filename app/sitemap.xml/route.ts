import { getAllPosts } from '@/lib/posts';
import { getAllInterviews } from '@/lib/interviews';

export const dynamic = 'force-static';

export async function GET() {
  const [posts, interviews] = await Promise.all([getAllPosts(), getAllInterviews()]);

  const base = 'https://proxytechsupport.com';
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: `${base}/`, lastmod: today, priority: '1.0' },
    { url: `${base}/blog/`, lastmod: today, priority: '0.8' },
    { url: `${base}/interviews/`, lastmod: today, priority: '0.8' },
  ];

  const postPages = posts.map((post) => ({
    url: `${base}/${post.slug}/`,
    lastmod: (post.date && post.date.length >= 10 ? post.date : today) as string,
    priority: '0.7',
  }));

  const interviewPages = interviews.map((i) => ({
    url: `${base}/interviews/${i.slug}/`,
    lastmod: (i.date && i.date.length >= 10 ? i.date : today) as string,
    priority: '0.7',
  }));

  const allPages = [...staticPages, ...postPages, ...interviewPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
