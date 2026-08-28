import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'foundry-iq-agentic-retrieval-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_foundry_iq_agentic_retrieval_support() {
  return <LandingPageTemplate config={config} />;
}
