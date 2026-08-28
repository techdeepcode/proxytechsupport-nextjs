import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'foundry-iq-enterprise-rag-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_foundry_iq_enterprise_rag_support() {
  return <LandingPageTemplate config={config} />;
}
