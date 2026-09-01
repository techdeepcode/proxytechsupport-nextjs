import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAmazonClusterPages } from '@/data/amazon';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAmazonClusterPages.find((p) => p.slug === 'amazon-data-engineer-proxy-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AmazonPage_amazon_data_engineer_proxy_job_support() {
  return <LandingPageTemplate config={config} />;
}
