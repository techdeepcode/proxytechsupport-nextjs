import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allHuggingFaceClusterPages } from '@/data/huggingface';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allHuggingFaceClusterPages.find((p) => p.slug === 'huggingface-enterprise-hub-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function HuggingFacePage_huggingface_enterprise_hub_guide() {
  return <LandingPageTemplate config={config} />;
}
