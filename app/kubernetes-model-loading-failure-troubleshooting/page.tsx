import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allKubernetesClusterPages } from '@/data/kubernetes';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allKubernetesClusterPages.find((p) => p.slug === 'kubernetes-model-loading-failure-troubleshooting')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function K8sPage_kubernetes_model_loading_failure_troubleshooting() {
  return <LandingPageTemplate config={config} />;
}
