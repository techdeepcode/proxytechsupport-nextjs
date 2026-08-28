import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'azure-genai-ops-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_azure_genai_ops_job_support() {
  return <LandingPageTemplate config={config} />;
}
