import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allKubernetesClusterPages } from '@/data/kubernetes';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allKubernetesClusterPages.find((p) => p.slug === 'kubernetes-ai-job-support-new-york')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function K8sPage_kubernetes_ai_job_support_new_york() {
  return <LandingPageTemplate config={config} />;
}
