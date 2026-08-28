import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'what-is-microsoft-foundry-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_what_is_microsoft_foundry_guide() {
  return <LandingPageTemplate config={config} />;
}
