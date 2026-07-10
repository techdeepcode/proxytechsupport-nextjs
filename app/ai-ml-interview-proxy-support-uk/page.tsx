import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'ai-ml-interview-proxy-support-uk')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_ai_ml_interview_proxy_support_uk() {
  return <LandingPageTemplate config={config} />;
}
