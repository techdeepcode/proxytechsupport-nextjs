import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'get-llm-engineer-interview-scheduled')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_get_llm_engineer_interview_scheduled() {
  return <LandingPageTemplate config={config} />;
}
