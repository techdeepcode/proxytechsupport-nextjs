import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'how-ai-ml-job-support-works')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_how_ai_ml_job_support_works() {
  return <LandingPageTemplate config={config} />;
}
