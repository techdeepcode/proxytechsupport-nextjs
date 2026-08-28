import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'azure-ai-security-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_azure_ai_security_guide() {
  return <LandingPageTemplate config={config} />;
}
