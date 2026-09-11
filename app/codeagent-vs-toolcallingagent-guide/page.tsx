import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allHuggingFaceClusterPages } from '@/data/huggingface';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allHuggingFaceClusterPages.find((p) => p.slug === 'codeagent-vs-toolcallingagent-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function HuggingFacePage_codeagent_vs_toolcallingagent_guide() {
  return <LandingPageTemplate config={config} />;
}
