import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'azure-openai-cost-optimization-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_azure_openai_cost_optimization_support() {
  return <LandingPageTemplate config={config} />;
}
