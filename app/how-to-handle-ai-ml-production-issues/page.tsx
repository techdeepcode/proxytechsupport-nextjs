import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'how-to-handle-ai-ml-production-issues')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_how_to_handle_ai_ml_production_issues() {
  return <LandingPageTemplate config={config} />;
}
