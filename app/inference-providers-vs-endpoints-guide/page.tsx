import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allHuggingFaceClusterPages } from '@/data/huggingface';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allHuggingFaceClusterPages.find((p) => p.slug === 'inference-providers-vs-endpoints-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function HuggingFacePage_inference_providers_vs_endpoints_guide() {
  return <LandingPageTemplate config={config} />;
}
