import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'ai-ml-resume-profile-positioning-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_ai_ml_resume_profile_positioning_guide() {
  return <LandingPageTemplate config={config} />;
}
