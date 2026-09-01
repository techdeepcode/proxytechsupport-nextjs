import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAmazonClusterPages } from '@/data/amazon';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAmazonClusterPages.find((p) => p.slug === 'amazon-applied-scientist-proxy-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AmazonPage_amazon_applied_scientist_proxy_job_support() {
  return <LandingPageTemplate config={config} />;
}
