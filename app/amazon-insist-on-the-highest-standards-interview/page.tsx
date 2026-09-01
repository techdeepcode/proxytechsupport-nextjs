import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAmazonClusterPages } from '@/data/amazon';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAmazonClusterPages.find((p) => p.slug === 'amazon-insist-on-the-highest-standards-interview')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AmazonPage_amazon_insist_on_the_highest_standards_interview() {
  return <LandingPageTemplate config={config} />;
}
