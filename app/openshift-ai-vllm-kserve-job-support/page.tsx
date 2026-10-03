import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allKubernetesClusterPages } from '@/data/kubernetes';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allKubernetesClusterPages.find((p) => p.slug === 'openshift-ai-vllm-kserve-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function K8sPage_openshift_ai_vllm_kserve_job_support() {
  return <LandingPageTemplate config={config} />;
}
