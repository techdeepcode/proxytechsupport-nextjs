import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'langchain-azure-openai-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_langchain_azure_openai_job_support() {
  return <LandingPageTemplate config={config} />;
}
