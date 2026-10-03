import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allKubernetesClusterPages } from '@/data/kubernetes';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allKubernetesClusterPages.find((p) => p.slug === 'kubernetes-inference-timeout-troubleshooting')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function K8sPage_kubernetes_inference_timeout_troubleshooting() {
  return <LandingPageTemplate config={config} />;
}
