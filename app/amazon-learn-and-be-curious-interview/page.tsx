import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAmazonClusterPages } from '@/data/amazon';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAmazonClusterPages.find((p) => p.slug === 'amazon-learn-and-be-curious-interview')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AmazonPage_amazon_learn_and_be_curious_interview() {
  return <LandingPageTemplate config={config} />;
}
