import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAmazonClusterPages } from '@/data/amazon';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAmazonClusterPages.find((p) => p.slug === 'amazon-bias-for-action-interview')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AmazonPage_amazon_bias_for_action_interview() {
  return <LandingPageTemplate config={config} />;
}
