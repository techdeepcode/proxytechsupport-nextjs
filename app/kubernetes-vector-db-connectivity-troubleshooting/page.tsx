import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allKubernetesClusterPages } from '@/data/kubernetes';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allKubernetesClusterPages.find((p) => p.slug === 'kubernetes-vector-db-connectivity-troubleshooting')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function K8sPage_kubernetes_vector_db_connectivity_troubleshooting() {
  return <LandingPageTemplate config={config} />;
}
