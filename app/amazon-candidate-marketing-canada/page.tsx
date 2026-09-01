import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAmazonClusterPages } from '@/data/amazon';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAmazonClusterPages.find((p) => p.slug === 'amazon-candidate-marketing-canada')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AmazonPage_amazon_candidate_marketing_canada() {
  return <LandingPageTemplate config={config} />;
}
