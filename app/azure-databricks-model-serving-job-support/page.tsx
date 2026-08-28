import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'azure-databricks-model-serving-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_azure_databricks_model_serving_job_support() {
  return <LandingPageTemplate config={config} />;
}
