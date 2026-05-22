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
    { url: `${BASE}/locations/`, lastModified: today, priority: 0.85 },
    { url: `${BASE}/services/`, lastModified: today, priority: 0.8 },
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

  const knowledgeBaseRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/knowledge-base/`, lastModified: today, priority: 0.85 },
    // Interview Support cluster
    { url: `${BASE}/what-is-interview-proxy-support/`, lastModified: today, priority: 0.8 },
    { url: `${BASE}/how-live-technical-interview-support-works/`, lastModified: today, priority: 0.8 },
    { url: `${BASE}/final-round-interview-support-guide/`, lastModified: today, priority: 0.8 },
    { url: `${BASE}/technical-interview-support-usa-guide/`, lastModified: today, priority: 0.8 },
    { url: `${BASE}/interview-proxy-support-risks-expectations/`, lastModified: today, priority: 0.8 },
    // Proxy Job Support cluster
    { url: `${BASE}/what-is-proxy-job-support/`, lastModified: today, priority: 0.8 },
    { url: `${BASE}/how-proxy-job-support-works/`, lastModified: today, priority: 0.8 },
    { url: `${BASE}/real-time-it-job-support-guide/`, lastModified: today, priority: 0.8 },
    { url: `${BASE}/production-issue-support-for-it-professionals/`, lastModified: today, priority: 0.8 },
    { url: `${BASE}/client-call-and-standup-support-guide/`, lastModified: today, priority: 0.8 },
    // Technology cluster
    { url: `${BASE}/ai-ml-job-support-guide/`, lastModified: today, priority: 0.75 },
    { url: `${BASE}/mlops-job-support-guide/`, lastModified: today, priority: 0.75 },
    { url: `${BASE}/rag-agentic-ai-job-support-guide/`, lastModified: today, priority: 0.75 },
    { url: `${BASE}/genai-interview-support-guide/`, lastModified: today, priority: 0.75 },
    { url: `${BASE}/devops-job-support-guide/`, lastModified: today, priority: 0.75 },
    { url: `${BASE}/sre-job-support-guide/`, lastModified: today, priority: 0.75 },
    { url: `${BASE}/aws-job-support-guide/`, lastModified: today, priority: 0.75 },
    { url: `${BASE}/azure-job-support-guide/`, lastModified: today, priority: 0.75 },
    { url: `${BASE}/kubernetes-job-support-guide/`, lastModified: today, priority: 0.75 },
    { url: `${BASE}/react-job-support-guide/`, lastModified: today, priority: 0.75 },
    { url: `${BASE}/dotnet-job-support-guide/`, lastModified: today, priority: 0.75 },
    { url: `${BASE}/java-job-support-guide/`, lastModified: today, priority: 0.75 },
    { url: `${BASE}/nodejs-job-support-guide/`, lastModified: today, priority: 0.75 },
    { url: `${BASE}/full-stack-job-support-guide/`, lastModified: today, priority: 0.75 },
    { url: `${BASE}/qa-automation-job-support-guide/`, lastModified: today, priority: 0.75 },
    { url: `${BASE}/data-engineering-job-support-guide/`, lastModified: today, priority: 0.75 },
    { url: `${BASE}/cybersecurity-devsecops-job-support-guide/`, lastModified: today, priority: 0.75 },
    // Canada cluster
    { url: `${BASE}/why-canada-it-resume-gets-no-calls/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/how-to-get-it-interviews-scheduled-in-canada/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/canada-it-resume-linkedin-positioning-guide/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/canada-it-job-search-mistakes/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/recruiter-keywords-for-canada-it-jobs/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/canada-interview-proxy-support-guide/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/canada-technical-interview-support-guide/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/canada-final-round-interview-support-guide/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/canada-live-coding-interview-support-guide/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/canada-devops-cloud-interview-support-guide/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/canada-proxy-job-support-guide/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/how-proxy-job-support-works-in-canada/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/canada-real-time-it-job-support-guide/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/canada-production-issue-support-guide/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/canada-client-call-standup-support-guide/`, lastModified: today, priority: 0.78 },
    // Ireland cluster
    { url: `${BASE}/ireland-it-job-support-guide/`, lastModified: today, priority: 0.72 },
    { url: `${BASE}/ireland-interview-proxy-support-guide/`, lastModified: today, priority: 0.72 },
    { url: `${BASE}/ireland-production-support-help-guide/`, lastModified: today, priority: 0.72 },
    { url: `${BASE}/ireland-project-onboarding-help-guide/`, lastModified: today, priority: 0.72 },
    { url: `${BASE}/ireland-ai-ml-devops-sre-support-guide/`, lastModified: today, priority: 0.72 },
    // Germany cluster
    { url: `${BASE}/germany-it-job-support-guide/`, lastModified: today, priority: 0.72 },
    { url: `${BASE}/germany-interview-support-guide/`, lastModified: today, priority: 0.72 },
    { url: `${BASE}/germany-devops-cloud-job-support-guide/`, lastModified: today, priority: 0.72 },
    { url: `${BASE}/germany-java-dotnet-fullstack-support-guide/`, lastModified: today, priority: 0.72 },
    { url: `${BASE}/germany-ai-ml-data-support-guide/`, lastModified: today, priority: 0.72 },
    // Australia cluster
    { url: `${BASE}/australia-it-job-support-guide/`, lastModified: today, priority: 0.72 },
    { url: `${BASE}/australia-interview-proxy-support-guide/`, lastModified: today, priority: 0.72 },
    { url: `${BASE}/australia-production-support-help-guide/`, lastModified: today, priority: 0.72 },
    { url: `${BASE}/australia-devops-cloud-sre-support-guide/`, lastModified: today, priority: 0.72 },
    { url: `${BASE}/australia-fullstack-java-dotnet-react-support-guide/`, lastModified: today, priority: 0.72 },
    // Europe cluster
    { url: `${BASE}/europe-it-job-support-guide/`, lastModified: today, priority: 0.72 },
    { url: `${BASE}/europe-interview-support-guide/`, lastModified: today, priority: 0.72 },
    { url: `${BASE}/europe-devops-cloud-sre-support-guide/`, lastModified: today, priority: 0.72 },
    { url: `${BASE}/europe-ai-ml-rag-mlops-support-guide/`, lastModified: today, priority: 0.72 },
    { url: `${BASE}/europe-fullstack-backend-frontend-support-guide/`, lastModified: today, priority: 0.72 },
  ];

  return [...staticRoutes, ...postRoutes, ...interviewRoutes, ...knowledgeBaseRoutes];
}
