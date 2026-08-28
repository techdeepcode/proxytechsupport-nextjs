import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'foundry-model-router-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_foundry_model_router_guide() {
  return <LandingPageTemplate config={config} />;
}
