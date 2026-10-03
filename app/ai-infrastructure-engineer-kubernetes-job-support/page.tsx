import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allKubernetesClusterPages } from '@/data/kubernetes';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allKubernetesClusterPages.find((p) => p.slug === 'ai-infrastructure-engineer-kubernetes-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function K8sPage_ai_infrastructure_engineer_kubernetes_job_support() {
  return <LandingPageTemplate config={config} />;
}
