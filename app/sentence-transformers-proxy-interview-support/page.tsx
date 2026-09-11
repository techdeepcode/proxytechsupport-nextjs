import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allHuggingFaceClusterPages } from '@/data/huggingface';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allHuggingFaceClusterPages.find((p) => p.slug === 'sentence-transformers-proxy-interview-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function HuggingFacePage_sentence_transformers_proxy_interview_support() {
  return <LandingPageTemplate config={config} />;
}
