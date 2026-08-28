import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAzureClusterPages } from '@/data/azure';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAzureClusterPages.find((p) => p.slug === 'semantic-kernel-agent-framework-migration')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AzurePage_semantic_kernel_agent_framework_migration() {
  return <LandingPageTemplate config={config} />;
}
