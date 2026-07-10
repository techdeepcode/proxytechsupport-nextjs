import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'ai-architect-interview-proxy-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_ai_architect_interview_proxy_support() {
  return <LandingPageTemplate config={config} />;
}
