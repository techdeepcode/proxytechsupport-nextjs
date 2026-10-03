import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allKubernetesClusterPages } from '@/data/kubernetes';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allKubernetesClusterPages.find((p) => p.slug === 'sovereign-ai-kubernetes-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function K8sPage_sovereign_ai_kubernetes_job_support() {
  return <LandingPageTemplate config={config} />;
}
