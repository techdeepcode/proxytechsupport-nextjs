import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'azure-document-rag-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_azure_document_rag_job_support() {
  return <LandingPageTemplate config={config} />;
}
