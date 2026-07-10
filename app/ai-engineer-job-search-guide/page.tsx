import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'ai-engineer-job-search-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_ai_engineer_job_search_guide() {
  return <LandingPageTemplate config={config} />;
}
