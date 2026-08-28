import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'azure-openai-assistants-to-foundry-agent-migration')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_azure_openai_assistants_to_foundry_agent_migration() {
  return <LandingPageTemplate config={config} />;
}
