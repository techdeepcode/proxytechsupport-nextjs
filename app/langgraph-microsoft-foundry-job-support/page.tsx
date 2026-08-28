import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'langgraph-microsoft-foundry-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_langgraph_microsoft_foundry_job_support() {
  return <LandingPageTemplate config={config} />;
}
