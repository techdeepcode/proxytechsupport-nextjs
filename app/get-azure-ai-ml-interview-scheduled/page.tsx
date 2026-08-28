import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'get-azure-ai-ml-interview-scheduled')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_get_azure_ai_ml_interview_scheduled() {
  return <LandingPageTemplate config={config} />;
}
