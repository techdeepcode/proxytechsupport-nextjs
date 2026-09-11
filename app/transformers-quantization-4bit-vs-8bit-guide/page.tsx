import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allHuggingFaceClusterPages } from '@/data/huggingface';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allHuggingFaceClusterPages.find((p) => p.slug === 'transformers-quantization-4bit-vs-8bit-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function HuggingFacePage_transformers_quantization_4bit_vs_8bit_guide() {
  return <LandingPageTemplate config={config} />;
}
