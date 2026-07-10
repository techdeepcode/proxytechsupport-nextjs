import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'llm-application-support-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_llm_application_support_guide() {
  return <LandingPageTemplate config={config} />;
}
