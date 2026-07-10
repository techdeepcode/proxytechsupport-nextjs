import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'ai-ml-interview-preparation-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_ai_ml_interview_preparation_guide() {
  return <LandingPageTemplate config={config} />;
}
