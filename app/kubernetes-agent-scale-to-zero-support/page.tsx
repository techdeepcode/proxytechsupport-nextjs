import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allKubernetesClusterPages } from '@/data/kubernetes';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allKubernetesClusterPages.find((p) => p.slug === 'kubernetes-agent-scale-to-zero-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function K8sPage_kubernetes_agent_scale_to_zero_support() {
  return <LandingPageTemplate config={config} />;
}
