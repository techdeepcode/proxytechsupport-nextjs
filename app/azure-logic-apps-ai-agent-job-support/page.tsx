import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'azure-logic-apps-ai-agent-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_azure_logic_apps_ai_agent_job_support() {
  return <LandingPageTemplate config={config} />;
}
