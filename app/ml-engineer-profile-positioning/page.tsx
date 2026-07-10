import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'ml-engineer-profile-positioning')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_ml_engineer_profile_positioning() {
  return <LandingPageTemplate config={config} />;
}
