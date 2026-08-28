import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'azure-ai-search-semantic-ranker-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_azure_ai_search_semantic_ranker_job_support() {
  return <LandingPageTemplate config={config} />;
}
