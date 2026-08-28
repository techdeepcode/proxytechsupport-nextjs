import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'microsoft-foundry-vs-azure-machine-learning-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_microsoft_foundry_vs_azure_machine_learning_job_support() {
  return <LandingPageTemplate config={config} />;
}
