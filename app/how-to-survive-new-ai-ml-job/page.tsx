import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'how-to-survive-new-ai-ml-job')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_how_to_survive_new_ai_ml_job() {
  return <LandingPageTemplate config={config} />;
}
