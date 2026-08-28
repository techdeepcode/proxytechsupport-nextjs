import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'azure-openai-engineer-profile-positioning')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_azure_openai_engineer_profile_positioning() {
  return <LandingPageTemplate config={config} />;
}
