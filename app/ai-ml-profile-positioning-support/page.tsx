import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'ai-ml-profile-positioning-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_ai_ml_profile_positioning_support() {
  return <LandingPageTemplate config={config} />;
}
