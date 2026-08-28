import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'foundry-agent-service-vs-bedrock-agentcore-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_foundry_agent_service_vs_bedrock_agentcore_job_support() {
  return <LandingPageTemplate config={config} />;
}
