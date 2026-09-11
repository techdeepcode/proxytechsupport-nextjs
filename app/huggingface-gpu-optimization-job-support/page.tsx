import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allHuggingFaceClusterPages } from '@/data/huggingface';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allHuggingFaceClusterPages.find((p) => p.slug === 'huggingface-gpu-optimization-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function HuggingFacePage_huggingface_gpu_optimization_job_support() {
  return <LandingPageTemplate config={config} />;
}
