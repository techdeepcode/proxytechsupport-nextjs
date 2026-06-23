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

  const candidateMarketingRoutes: MetadataRoute.Sitemap = [
    // Main service page
    { url: `${BASE}/job-application-candidate-marketing/`, lastModified: today, priority: 0.92 },
    // Country pages
    { url: `${BASE}/job-application-candidate-marketing-usa/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/job-application-candidate-marketing-canada/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/job-application-candidate-marketing-uk/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/job-application-candidate-marketing-ireland/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/job-application-candidate-marketing-germany/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/job-application-candidate-marketing-australia/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/job-application-candidate-marketing-europe/`, lastModified: today, priority: 0.84 },
    { url: `${BASE}/job-application-candidate-marketing-singapore/`, lastModified: today, priority: 0.84 },
    { url: `${BASE}/job-application-candidate-marketing-hong-kong/`, lastModified: today, priority: 0.82 },
    { url: `${BASE}/job-application-candidate-marketing-uae/`, lastModified: today, priority: 0.82 },
    // USA city pages
    { url: `${BASE}/job-application-candidate-marketing-new-york/`, lastModified: today, priority: 0.82 },
    { url: `${BASE}/job-application-candidate-marketing-dallas/`, lastModified: today, priority: 0.82 },
    { url: `${BASE}/job-application-candidate-marketing-austin/`, lastModified: today, priority: 0.80 },
    { url: `${BASE}/job-application-candidate-marketing-houston/`, lastModified: today, priority: 0.80 },
    { url: `${BASE}/job-application-candidate-marketing-chicago/`, lastModified: today, priority: 0.80 },
    { url: `${BASE}/job-application-candidate-marketing-atlanta/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/job-application-candidate-marketing-charlotte/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/job-application-candidate-marketing-san-francisco/`, lastModified: today, priority: 0.82 },
    { url: `${BASE}/job-application-candidate-marketing-san-jose/`, lastModified: today, priority: 0.80 },
    { url: `${BASE}/job-application-candidate-marketing-seattle/`, lastModified: today, priority: 0.80 },
    { url: `${BASE}/job-application-candidate-marketing-los-angeles/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/job-application-candidate-marketing-phoenix/`, lastModified: today, priority: 0.76 },
    { url: `${BASE}/job-application-candidate-marketing-boston/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/job-application-candidate-marketing-washington-dc/`, lastModified: today, priority: 0.80 },
    { url: `${BASE}/job-application-candidate-marketing-jersey-city/`, lastModified: today, priority: 0.76 },
    // Canada city pages
    { url: `${BASE}/job-application-candidate-marketing-toronto/`, lastModified: today, priority: 0.80 },
    { url: `${BASE}/job-application-candidate-marketing-vancouver/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/job-application-candidate-marketing-calgary/`, lastModified: today, priority: 0.76 },
    { url: `${BASE}/job-application-candidate-marketing-montreal/`, lastModified: today, priority: 0.76 },
    { url: `${BASE}/job-application-candidate-marketing-ottawa/`, lastModified: today, priority: 0.74 },
    // UK city pages
    { url: `${BASE}/job-application-candidate-marketing-london/`, lastModified: today, priority: 0.82 },
    { url: `${BASE}/job-application-candidate-marketing-manchester/`, lastModified: today, priority: 0.76 },
    { url: `${BASE}/job-application-candidate-marketing-birmingham/`, lastModified: today, priority: 0.74 },
    // Ireland city pages
    { url: `${BASE}/job-application-candidate-marketing-dublin/`, lastModified: today, priority: 0.80 },
    { url: `${BASE}/job-application-candidate-marketing-cork/`, lastModified: today, priority: 0.72 },
    // Germany city pages
    { url: `${BASE}/job-application-candidate-marketing-berlin/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/job-application-candidate-marketing-munich/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/job-application-candidate-marketing-frankfurt/`, lastModified: today, priority: 0.76 },
    { url: `${BASE}/job-application-candidate-marketing-hamburg/`, lastModified: today, priority: 0.74 },
    // Australia city pages
    { url: `${BASE}/job-application-candidate-marketing-sydney/`, lastModified: today, priority: 0.80 },
    { url: `${BASE}/job-application-candidate-marketing-melbourne/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/job-application-candidate-marketing-brisbane/`, lastModified: today, priority: 0.74 },
    { url: `${BASE}/job-application-candidate-marketing-perth/`, lastModified: today, priority: 0.72 },
    // UAE city pages
    { url: `${BASE}/job-application-candidate-marketing-dubai/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/job-application-candidate-marketing-abu-dhabi/`, lastModified: today, priority: 0.74 },
  ];

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
    // Standalone interview article (not in content/interview-articles pipeline).
    { url: `${BASE}/interviews/2026-06-22-primavera-p6-scheduler-interview-questions-critical-path-baseline-wbs/`, lastModified: '2026-06-22', priority: 0.8 },
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

  const uipathTechRoutes: MetadataRoute.Sitemap = [
    // UiPath technical module pages
    { url: `${BASE}/uipath-studio-job-support/`, lastModified: today, priority: 0.82 },
    { url: `${BASE}/uipath-orchestrator-job-support/`, lastModified: today, priority: 0.82 },
    { url: `${BASE}/uipath-reframework-job-support/`, lastModified: today, priority: 0.85 },
    { url: `${BASE}/uipath-queues-dispatcher-performer-support/`, lastModified: today, priority: 0.83 },
    { url: `${BASE}/uipath-exception-handling-job-support/`, lastModified: today, priority: 0.80 },
    { url: `${BASE}/uipath-document-understanding-job-support/`, lastModified: today, priority: 0.83 },
    { url: `${BASE}/uipath-ocr-computer-vision-job-support/`, lastModified: today, priority: 0.80 },
    { url: `${BASE}/uipath-apps-job-support/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/uipath-testing-job-support/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/uipath-api-integration-job-support/`, lastModified: today, priority: 0.82 },
    { url: `${BASE}/uipath-agentic-automation-job-support/`, lastModified: today, priority: 0.85 },
    { url: `${BASE}/uipath-rag-llm-automation-support/`, lastModified: today, priority: 0.80 },
    { url: `${BASE}/uipath-production-support/`, lastModified: today, priority: 0.83 },
    { url: `${BASE}/uipath-framework-design-support/`, lastModified: today, priority: 0.80 },
    // UiPath healthcare & Epic pages
    { url: `${BASE}/uipath-healthcare-job-support/`, lastModified: today, priority: 0.85 },
    { url: `${BASE}/uipath-epic-automation-job-support/`, lastModified: today, priority: 0.85 },
    { url: `${BASE}/uipath-epic-proxy-interview-support/`, lastModified: today, priority: 0.83 },
    { url: `${BASE}/epic-hyperspace-uipath-automation-support/`, lastModified: today, priority: 0.82 },
    { url: `${BASE}/epic-hyperdrive-uipath-automation-support/`, lastModified: today, priority: 0.82 },
    { url: `${BASE}/epic-fhir-uipath-integration-support/`, lastModified: today, priority: 0.82 },
    { url: `${BASE}/healthcare-document-understanding-uipath-support/`, lastModified: today, priority: 0.80 },
    { url: `${BASE}/hipaa-phi-rpa-automation-support/`, lastModified: today, priority: 0.80 },
    // UiPath core hub pages
    { url: `${BASE}/uipath-job-support/`, lastModified: today, priority: 0.92 },
    { url: `${BASE}/uipath-proxy-interview-support/`, lastModified: today, priority: 0.92 },
    { url: `${BASE}/uipath-interview-scheduled/`, lastModified: today, priority: 0.87 },
    { url: `${BASE}/rpa-job-support/`, lastModified: today, priority: 0.87 },
    { url: `${BASE}/rpa-proxy-interview-support/`, lastModified: today, priority: 0.87 },
    // UiPath USA pages
    { url: `${BASE}/uipath-job-support-usa/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/uipath-proxy-interview-usa/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/uipath-interview-scheduled-usa/`, lastModified: today, priority: 0.83 },
    // UiPath Canada pages
    { url: `${BASE}/uipath-job-support-canada/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/uipath-proxy-interview-canada/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/uipath-interview-scheduled-canada/`, lastModified: today, priority: 0.82 },
    // UiPath UK pages
    { url: `${BASE}/uipath-job-support-uk/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/uipath-proxy-interview-uk/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/uipath-interview-scheduled-uk/`, lastModified: today, priority: 0.82 },
    // UiPath Europe pages
    { url: `${BASE}/uipath-job-support-europe/`, lastModified: today, priority: 0.84 },
    { url: `${BASE}/uipath-proxy-interview-europe/`, lastModified: today, priority: 0.84 },
    { url: `${BASE}/uipath-interview-scheduled-europe/`, lastModified: today, priority: 0.80 },
    // UiPath European country pages
    { url: `${BASE}/uipath-job-support-ireland/`, lastModified: today, priority: 0.80 },
    { url: `${BASE}/uipath-job-support-germany/`, lastModified: today, priority: 0.80 },
    { url: `${BASE}/uipath-job-support-netherlands/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/uipath-job-support-france/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/uipath-job-support-sweden/`, lastModified: today, priority: 0.76 },
    { url: `${BASE}/uipath-job-support-switzerland/`, lastModified: today, priority: 0.76 },
    // UiPath global country pages
    { url: `${BASE}/uipath-job-support-australia/`, lastModified: today, priority: 0.80 },
    { url: `${BASE}/uipath-job-support-new-zealand/`, lastModified: today, priority: 0.75 },
    { url: `${BASE}/uipath-job-support-singapore/`, lastModified: today, priority: 0.78 },
    { url: `${BASE}/uipath-job-support-uae/`, lastModified: today, priority: 0.76 },
    { url: `${BASE}/uipath-job-support-saudi-arabia/`, lastModified: today, priority: 0.74 },
  ];

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

  const dotnetClusterRoutes: MetadataRoute.Sitemap = [
    // ── Phase A: Parent + Country pages ──────────────────────────────────────
    { url: `${BASE}/modern-dotnet-azure-ai-job-support/`, lastModified: today, priority: 0.95 },
    { url: `${BASE}/usa-dotnet-job-support/`, lastModified: today, priority: 0.92 },
    { url: `${BASE}/canada-dotnet-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/uk-dotnet-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/ireland-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/germany-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/netherlands-dotnet-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/france-dotnet-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/australia-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/new-zealand-dotnet-job-support/`, lastModified: today, priority: 0.84 },
    { url: `${BASE}/singapore-dotnet-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/uae-dotnet-job-support/`, lastModified: today, priority: 0.84 },
    { url: `${BASE}/saudi-arabia-dotnet-job-support/`, lastModified: today, priority: 0.82 },
    // ── Phase B: USA City pages ───────────────────────────────────────────────
    { url: `${BASE}/new-york-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/dallas-dotnet-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/chicago-dotnet-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/atlanta-dotnet-job-support/`, lastModified: today, priority: 0.84 },
    { url: `${BASE}/houston-dotnet-job-support/`, lastModified: today, priority: 0.84 },
    { url: `${BASE}/austin-dotnet-job-support/`, lastModified: today, priority: 0.84 },
    { url: `${BASE}/charlotte-dotnet-job-support/`, lastModified: today, priority: 0.82 },
    { url: `${BASE}/phoenix-dotnet-job-support/`, lastModified: today, priority: 0.82 },
    { url: `${BASE}/seattle-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/san-francisco-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/los-angeles-dotnet-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/boston-dotnet-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/washington-dc-dotnet-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/jersey-city-dotnet-job-support/`, lastModified: today, priority: 0.82 },
    { url: `${BASE}/tampa-dotnet-job-support/`, lastModified: today, priority: 0.80 },
    // ── Phase C: Canada, UK, Europe, Australia City pages ────────────────────
    { url: `${BASE}/toronto-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/vancouver-dotnet-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/calgary-dotnet-job-support/`, lastModified: today, priority: 0.84 },
    { url: `${BASE}/london-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/manchester-dotnet-job-support/`, lastModified: today, priority: 0.84 },
    { url: `${BASE}/birmingham-dotnet-job-support/`, lastModified: today, priority: 0.82 },
    { url: `${BASE}/dublin-dotnet-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/berlin-dotnet-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/amsterdam-dotnet-job-support/`, lastModified: today, priority: 0.84 },
    { url: `${BASE}/paris-dotnet-job-support/`, lastModified: today, priority: 0.84 },
    { url: `${BASE}/sydney-dotnet-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/melbourne-dotnet-job-support/`, lastModified: today, priority: 0.84 },
    // ── Phase D: Core .NET Technology pages ──────────────────────────────────
    { url: `${BASE}/aspnet-core-job-support/`, lastModified: today, priority: 0.92 },
    { url: `${BASE}/dotnet-10-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/csharp-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/dotnet-web-api-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/aspnet-core-minimal-api-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/entity-framework-core-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/linq-job-support/`, lastModified: today, priority: 0.84 },
    { url: `${BASE}/dapper-dotnet-job-support/`, lastModified: today, priority: 0.84 },
    { url: `${BASE}/blazor-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/signalr-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/grpc-dotnet-job-support/`, lastModified: today, priority: 0.84 },
    // ── Phase E: Azure + .NET pages ──────────────────────────────────────────
    { url: `${BASE}/dotnet-azure-job-support/`, lastModified: today, priority: 0.93 },
    { url: `${BASE}/azure-app-service-dotnet-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/azure-functions-dotnet-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/aks-dotnet-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/azure-container-apps-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/azure-api-management-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/azure-service-bus-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/azure-event-grid-dotnet-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/azure-event-hubs-dotnet-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/azure-storage-dotnet-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/azure-sql-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/cosmos-db-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/azure-key-vault-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/azure-entra-id-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/azure-devops-dotnet-job-support/`, lastModified: today, priority: 0.90 },
    // ── Phase F: .NET AI/ML pages ─────────────────────────────────────────────
    { url: `${BASE}/dotnet-ai-ml-job-support/`, lastModified: today, priority: 0.93 },
    { url: `${BASE}/semantic-kernel-job-support/`, lastModified: today, priority: 0.92 },
    { url: `${BASE}/microsoft-extensions-ai-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/azure-ai-foundry-dotnet-job-support/`, lastModified: today, priority: 0.92 },
    { url: `${BASE}/azure-openai-dotnet-job-support/`, lastModified: today, priority: 0.92 },
    { url: `${BASE}/rag-dotnet-job-support/`, lastModified: today, priority: 0.92 },
    { url: `${BASE}/vector-search-dotnet-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/ai-agents-dotnet-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/microsoft-agent-framework-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/mlnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/onnx-runtime-dotnet-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/azure-ai-search-dotnet-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/azure-ai-document-intelligence-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/openai-sdk-dotnet-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/ollama-dotnet-job-support/`, lastModified: today, priority: 0.86 },
    // ── Phase G: Cloud-Native .NET pages ─────────────────────────────────────
    { url: `${BASE}/dotnet-aspire-job-support/`, lastModified: today, priority: 0.92 },
    { url: `${BASE}/docker-dotnet-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/dotnet-kubernetes-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/dapr-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/dotnet-opentelemetry-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/dotnet-microservices-job-support/`, lastModified: today, priority: 0.92 },
    { url: `${BASE}/dotnet-event-driven-architecture-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/dotnet-resilience-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/dotnet-security-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/dotnet-authentication-authorization-job-support/`, lastModified: today, priority: 0.90 },
    // ── Phase H: Architecture pages ───────────────────────────────────────────
    { url: `${BASE}/dotnet-architecture-patterns-job-support/`, lastModified: today, priority: 0.92 },
    { url: `${BASE}/dotnet-clean-architecture-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/dotnet-ddd-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/dotnet-cqrs-mediatr-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/dotnet-performance-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/dotnet-testing-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/dotnet-worker-services-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/dotnet-caching-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/dotnet-api-design-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/dotnet-dependency-injection-job-support/`, lastModified: today, priority: 0.88 },
    // ── Phase I: Full-Stack .NET pages ────────────────────────────────────────
    { url: `${BASE}/dotnet-react-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/dotnet-angular-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/dotnet-razor-pages-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/dotnet-mvc-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/dotnet-identity-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/dotnet-signalr-realtime-job-support/`, lastModified: today, priority: 0.86 },
    { url: `${BASE}/dotnet-fullstack-interview-proxy-support/`, lastModified: today, priority: 0.90 },
    // ── Phase J: Database .NET pages ──────────────────────────────────────────
    { url: `${BASE}/ef-core-migrations-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/sql-server-dotnet-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/postgresql-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/mongodb-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/redis-dotnet-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/dotnet-data-access-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/dotnet-database-interview-proxy-support/`, lastModified: today, priority: 0.88 },
    // ── Phase K: Legacy Modernization pages ───────────────────────────────────
    { url: `${BASE}/dotnet-framework-migration-job-support/`, lastModified: today, priority: 0.92 },
    { url: `${BASE}/wcf-to-dotnet-migration-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/iis-to-azure-app-service-migration-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/webforms-to-blazor-migration-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/monolith-to-microservices-dotnet-job-support/`, lastModified: today, priority: 0.90 },
    { url: `${BASE}/dotnet-upgrade-assistant-job-support/`, lastModified: today, priority: 0.88 },
    { url: `${BASE}/dotnet-modernization-interview-proxy-support/`, lastModified: today, priority: 0.90 },
    // ── Phase L: Interview Proxy pages ────────────────────────────────────────
    { url: `${BASE}/dotnet-azure-interview-proxy-support/`, lastModified: today, priority: 0.93 },
    { url: `${BASE}/dotnet-ai-interview-proxy-support/`, lastModified: today, priority: 0.93 },
    { url: `${BASE}/dotnet-architecture-interview-proxy-support/`, lastModified: today, priority: 0.92 },
    { url: `${BASE}/dotnet-cloud-native-interview-proxy-support/`, lastModified: today, priority: 0.90 },
  ];

  return [...staticRoutes, ...postRoutes, ...interviewRoutes, ...knowledgeBaseRoutes, ...uipathTechRoutes, ...candidateMarketingRoutes, ...dotnetClusterRoutes];
}
