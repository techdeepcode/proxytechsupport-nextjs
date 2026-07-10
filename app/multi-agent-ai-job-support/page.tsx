import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'multi-agent-ai-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_multi_agent_ai_job_support() {
  return <LandingPageTemplate config={config} />;
}
