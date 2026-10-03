import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allKubernetesClusterPages } from '@/data/kubernetes';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allKubernetesClusterPages.find((p) => p.slug === 'kubernetes-multi-agent-system-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function K8sPage_kubernetes_multi_agent_system_job_support() {
  return <LandingPageTemplate config={config} />;
}
