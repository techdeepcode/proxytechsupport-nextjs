import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'azure-genai-engineer-candidate-marketing')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_azure_genai_engineer_candidate_marketing() {
  return <LandingPageTemplate config={config} />;
}
