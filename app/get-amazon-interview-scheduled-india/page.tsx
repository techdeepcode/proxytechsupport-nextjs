import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAmazonClusterPages } from '@/data/amazon';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAmazonClusterPages.find((p) => p.slug === 'get-amazon-interview-scheduled-india')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AmazonPage_get_amazon_interview_scheduled_india() {
  return <LandingPageTemplate config={config} />;
}
