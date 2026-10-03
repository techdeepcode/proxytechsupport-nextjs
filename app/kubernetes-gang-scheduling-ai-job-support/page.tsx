import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allKubernetesClusterPages } from '@/data/kubernetes';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allKubernetesClusterPages.find((p) => p.slug === 'kubernetes-gang-scheduling-ai-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function K8sPage_kubernetes_gang_scheduling_ai_job_support() {
  return <LandingPageTemplate config={config} />;
}
