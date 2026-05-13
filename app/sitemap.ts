import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';
import { getCanonicalUrlForPost } from '@/lib/post-canonical';
import { getAllInterviews } from '@/lib/interviews';
import { getCanonicalInterviewUrl } from '@/lib/interview-canonical';
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
    { url: `${BASE}/blog/`, lastModified: today },
    { url: `${BASE}/interviews/`, lastModified: today },
    { url: `${BASE}/interview-questions/`, lastModified: today },
    { url: `${BASE}/technologies/`, lastModified: today },
    ...getInterviewScheduledRoutes,
    ...allLandingPages.map((p) => ({
      url: p.canonical,
      lastModified: today,
    })),
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => {
    const last =
      post.lastmod?.trim() ? new Date(post.lastmod) : post.date ? new Date(`${post.date}T12:00:00Z`) : new Date(today);
    return {
      url: getCanonicalUrlForPost(post),
      lastModified: Number.isNaN(last.getTime()) ? today : last.toISOString().split('T')[0],
    };
  });

  const interviewRoutes: MetadataRoute.Sitemap = interviews.map((i) => ({
    url: getCanonicalInterviewUrl(i.slug),
    lastModified: today,
  }));

  return [...staticRoutes, ...postRoutes, ...interviewRoutes];
}
