import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAmazonClusterPages } from '@/data/amazon';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAmazonClusterPages.find((p) => p.slug === 'amazon-java-interview')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AmazonPage_amazon_java_interview() {
  return <LandingPageTemplate config={config} />;
}
