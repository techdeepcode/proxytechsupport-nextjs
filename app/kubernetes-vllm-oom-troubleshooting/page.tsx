import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allKubernetesClusterPages } from '@/data/kubernetes';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allKubernetesClusterPages.find((p) => p.slug === 'kubernetes-vllm-oom-troubleshooting')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function K8sPage_kubernetes_vllm_oom_troubleshooting() {
  return <LandingPageTemplate config={config} />;
}
