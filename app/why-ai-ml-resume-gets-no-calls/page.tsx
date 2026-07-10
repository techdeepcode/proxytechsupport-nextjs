import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'why-ai-ml-resume-gets-no-calls')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_why_ai_ml_resume_gets_no_calls() {
  return <LandingPageTemplate config={config} />;
}
