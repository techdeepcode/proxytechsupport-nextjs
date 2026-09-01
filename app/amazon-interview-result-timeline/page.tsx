import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAmazonClusterPages } from '@/data/amazon';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAmazonClusterPages.find((p) => p.slug === 'amazon-interview-result-timeline')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AmazonPage_amazon_interview_result_timeline() {
  return <LandingPageTemplate config={config} />;
}
