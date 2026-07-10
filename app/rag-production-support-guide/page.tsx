import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'rag-production-support-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_rag_production_support_guide() {
  return <LandingPageTemplate config={config} />;
}
