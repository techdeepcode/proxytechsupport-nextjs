import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';
import { getCanonicalUrlForPost } from '@/lib/post-canonical';
import { getAllInterviews } from '@/lib/interviews';
import { getInterviewCanonicalUrl } from '@/lib/interview-canonical';
import { allLandingPages } from '@/data/landing-pages';

/** Required so `output: 'export'` can emit `/sitemap.xml` at build time. */
export const dynamic = 'force-static';

const BASE = 'https://proxytechsupport.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const today = new Date().toISOString().split('T')[0];

  const [posts, interviews] = await Promise.all([getAllPosts(), getAllInterviews()]);

  const getInterviewScheduledRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/get-interview-scheduled/`, lastModified: today },
    { url: `${BASE}/get-interview-scheduled-usa/`, lastModified: today },
    { url: `${BASE}/get-interview-scheduled-uk/`, lastModified: today },
    { url: `${BASE}/get-interview-scheduled-canada/`, lastModified: today },
    { url: `${BASE}/get-interview-scheduled-australia/`, lastModified: today },
    { url: `${BASE}/get-interview-scheduled-ireland/`, lastModified: today },
    { url: `${BASE}/get-interview-scheduled-germany/`, lastModified: today },
    { url: `${BASE}/get-interview-scheduled-netherlands/`, lastModified: today },
    { url: `${BASE}/get-interview-scheduled-sweden/`, lastModified: today },
    { url: `${BASE}/get-interview-scheduled-denmark/`, lastModified: today },
    { url: `${BASE}/get-interview-scheduled-finland/`, lastModified: today },
    { url: `${BASE}/get-interview-scheduled-norway/`, lastModified: today },
    { url: `${BASE}/get-interview-scheduled-switzerland/`, lastModified: today },
    { url: `${BASE}/get-interview-scheduled-austria/`, lastModified: today },
    { url: `${BASE}/get-interview-scheduled-belgium/`, lastModified: today },
    { url: `${BASE}/get-interview-scheduled-spain/`, lastModified: today },
    { url: `${BASE}/get-interview-scheduled-portugal/`, lastModified: today },
    { url: `${BASE}/get-interview-scheduled-new-zealand/`, lastModified: today },
    { url: `${BASE}/get-interview-scheduled-singapore/`, lastModified: today },
    { url: `${BASE}/get-interview-scheduled-hong-kong/`, lastModified: today },
  ];

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: today },
    { url: `${BASE}/usa-it-job-support-legacy/`, lastModified: today, priority: 0.9 },
    { url: `${BASE}/usa-it-career-crisis-support/`, lastModified: today, priority: 0.85 },
    { url: `${BASE}/usa-ai-era-job-support/`, lastModified: today, priority: 0.85 },
    { url: `${BASE}/usa-remote-work-it-support/`, lastModified: today, priority: 0.8 },
    { url: `${BASE}/our-legacy/`, lastModified: today, priority: 0.7 },
    { url: `${BASE}/blog/`, lastModified: today },
    { url: `${BASE}/interviews/`, lastModified: today },
    { url: `${BASE}/interview-questions/`, lastModified: today },
    { url: `${BASE}/technologies/`, lastModified: today },
    ...getInterviewScheduledRoutes,
    ...allLandingPages.map((p) => {
      if (p.lastmod) {
        const d = new Date(p.lastmod);
        return { url: p.canonical, lastModified: Number.isNaN(d.getTime()) ? today : d.toISOString().split('T')[0] };
      }
      return { url: p.canonical, lastModified: today };
    }),
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => {
    const last =
      post.lastmod?.trim() ? new Date(post.lastmod) : post.date ? new Date(`${post.date}T12:00:00Z`) : new Date(today);
    return {
      url: getCanonicalUrlForPost(post),
      lastModified: Number.isNaN(last.getTime()) ? today : last.toISOString().split('T')[0],
    };
  });

  /** Sitemap lastModified: `lastmod` when set, else publication `date`, else build date. */
  function interviewSitemapLastModified(i: (typeof interviews)[number]): string {
    const raw = i.lastmod?.trim() || i.date?.trim();
    if (!raw) return today;
    const d = new Date(raw.includes('T') ? raw : `${raw}T12:00:00.000Z`);
    return Number.isNaN(d.getTime()) ? today : d.toISOString().split('T')[0];
  }

  /** Alias + primary can share one canonical URL — keep the latest lastModified. */
  const interviewByCanonicalUrl = new Map<string, string>();
  for (const i of interviews) {
    const url = getInterviewCanonicalUrl(i);
    const lm = interviewSitemapLastModified(i);
    const prev = interviewByCanonicalUrl.get(url);
    if (!prev || lm > prev) interviewByCanonicalUrl.set(url, lm);
  }

  const interviewRoutes: MetadataRoute.Sitemap = [...interviewByCanonicalUrl.entries()].map(
    ([url, lastModified]) => ({ url, lastModified }),
  );

  return [...staticRoutes, ...postRoutes, ...interviewRoutes];
}
