import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'get-ai-ml-interview-scheduled-singapore')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_get_ai_ml_interview_scheduled_singapore() {
  return <LandingPageTemplate config={config} />;
}
