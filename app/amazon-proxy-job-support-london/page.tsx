import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAmazonClusterPages } from '@/data/amazon';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAmazonClusterPages.find((p) => p.slug === 'amazon-proxy-job-support-london')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AmazonPage_amazon_proxy_job_support_london() {
  return <LandingPageTemplate config={config} />;
}
