import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allHuggingFaceClusterPages } from '@/data/huggingface';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allHuggingFaceClusterPages.find((p) => p.slug === 'hugging-face-production-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function HuggingFacePage_hugging_face_production_support() {
  return <LandingPageTemplate config={config} />;
}
