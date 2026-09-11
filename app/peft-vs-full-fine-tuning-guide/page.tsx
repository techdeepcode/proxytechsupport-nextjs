import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allHuggingFaceClusterPages } from '@/data/huggingface';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allHuggingFaceClusterPages.find((p) => p.slug === 'peft-vs-full-fine-tuning-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function HuggingFacePage_peft_vs_full_fine_tuning_guide() {
  return <LandingPageTemplate config={config} />;
}
