import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'data-science-candidate-marketing')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_data_science_candidate_marketing() {
  return <LandingPageTemplate config={config} />;
}
