import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'azure-gpu-cost-optimization')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_azure_gpu_cost_optimization() {
  return <LandingPageTemplate config={config} />;
}
