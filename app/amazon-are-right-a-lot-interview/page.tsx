import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAmazonClusterPages } from '@/data/amazon';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAmazonClusterPages.find((p) => p.slug === 'amazon-are-right-a-lot-interview')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AmazonPage_amazon_are_right_a_lot_interview() {
  return <LandingPageTemplate config={config} />;
}
