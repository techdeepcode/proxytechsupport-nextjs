import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'microsoft-agent-framework-vs-langgraph-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_microsoft_agent_framework_vs_langgraph_job_support() {
  return <LandingPageTemplate config={config} />;
}
