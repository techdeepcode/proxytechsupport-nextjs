import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'data-engineer-ai-ml-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_data_engineer_ai_ml_job_support() {
  return <LandingPageTemplate config={config} />;
}
