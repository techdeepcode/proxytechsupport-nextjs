import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';
import { getCanonicalUrlForPost } from '@/lib/post-canonical';
import { getAllInterviews } from '@/lib/interviews';
import { getCanonicalInterviewUrl } from '@/lib/interview-canonical';
import { allLandingPages } from '@/data/landing-pages';

/** Required so `output: 'export'` can emit `/sitemap.xml` at build time. */
export const dynamic = 'force-static';

const BASE = 'https://proxytechsupport.com';

/** Map legacy string priorities to MetadataRoute numeric 0–1 */
function prio(p: string): number {
  const n = Number.parseFloat(p);
  return Number.isFinite(n) ? Math.min(1, Math.max(0, n)) : 0.7;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const today = new Date().toISOString().split('T')[0];

  const [posts, interviews] = await Promise.all([getAllPosts(), getAllInterviews()]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: today, changeFrequency: 'weekly', priority: prio('1.0') },
    { url: `${BASE}/blog/`, lastModified: today, changeFrequency: 'weekly', priority: prio('0.8') },
    { url: `${BASE}/interviews/`, lastModified: today, changeFrequency: 'weekly', priority: prio('0.8') },
    { url: `${BASE}/technologies/`, lastModified: today, changeFrequency: 'monthly', priority: prio('0.3') },
    ...allLandingPages.map((p) => ({
      url: p.canonical,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: prio('0.9'),
    })),
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => {
    const url = getCanonicalUrlForPost(post);
    const last =
      post.date && post.date.length >= 10 ? post.date : today;
    return {
      url,
      lastModified: last,
      changeFrequency: 'weekly' as const,
      priority: prio('0.7'),
    };
  });

  const interviewRoutes: MetadataRoute.Sitemap = interviews.map((i) => {
    const last = i.date && i.date.length >= 10 ? i.date : today;
    return {
      url: getCanonicalInterviewUrl(i.slug),
      lastModified: last,
      changeFrequency: 'weekly' as const,
      priority: prio('0.7'),
    };
  });

  return [...staticRoutes, ...postRoutes, ...interviewRoutes];
}
