import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'knowledge-agents-vs-traditional-rag-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_knowledge_agents_vs_traditional_rag_job_support() {
  return <LandingPageTemplate config={config} />;
}
