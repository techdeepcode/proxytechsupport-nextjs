import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'mlops-system-design-interview-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_mlops_system_design_interview_guide() {
  return <LandingPageTemplate config={config} />;
}
