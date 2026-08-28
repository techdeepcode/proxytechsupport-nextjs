import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'azure-container-apps-ai-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_azure_container_apps_ai_job_support() {
  return <LandingPageTemplate config={config} />;
}
