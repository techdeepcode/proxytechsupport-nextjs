import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'how-to-get-ai-ml-interviews-scheduled')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_how_to_get_ai_ml_interviews_scheduled() {
  return <LandingPageTemplate config={config} />;
}
