import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAmazonClusterPages } from '@/data/amazon';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAmazonClusterPages.find((p) => p.slug === 'amazon-high-level-design-interview')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AmazonPage_amazon_high_level_design_interview() {
  return <LandingPageTemplate config={config} />;
}
