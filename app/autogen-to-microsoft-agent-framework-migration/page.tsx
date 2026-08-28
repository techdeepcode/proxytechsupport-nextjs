import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'autogen-to-microsoft-agent-framework-migration')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_autogen_to_microsoft_agent_framework_migration() {
  return <LandingPageTemplate config={config} />;
}
