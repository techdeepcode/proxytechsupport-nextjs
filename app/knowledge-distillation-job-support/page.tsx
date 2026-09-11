import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allHuggingFaceClusterPages } from '@/data/huggingface';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allHuggingFaceClusterPages.find((p) => p.slug === 'knowledge-distillation-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function HuggingFacePage_knowledge_distillation_job_support() {
  return <LandingPageTemplate config={config} />;
}
