import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allKubernetesClusterPages } from '@/data/kubernetes';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allKubernetesClusterPages.find((p) => p.slug === 'on-premises-ai-infrastructure-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function K8sPage_on_premises_ai_infrastructure_job_support() {
  return <LandingPageTemplate config={config} />;
}
