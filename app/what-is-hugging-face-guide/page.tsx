import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allHuggingFaceClusterPages } from '@/data/huggingface';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allHuggingFaceClusterPages.find((p) => p.slug === 'what-is-hugging-face-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function HuggingFacePage_what_is_hugging_face_guide() {
  return <LandingPageTemplate config={config} />;
}
