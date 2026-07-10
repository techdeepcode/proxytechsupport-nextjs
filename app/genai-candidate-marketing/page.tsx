import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'genai-candidate-marketing')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_genai_candidate_marketing() {
  return <LandingPageTemplate config={config} />;
}
