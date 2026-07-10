import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'how-to-explain-agentic-ai-project-in-interview')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_how_to_explain_agentic_ai_project_in_interview() {
  return <LandingPageTemplate config={config} />;
}
