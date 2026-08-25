import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAwsClusterPages } from '@/data/aws';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAwsClusterPages.find((p) => p.slug === 'amazon-sagemaker-unified-studio-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AwsPage_amazon_sagemaker_unified_studio_job_support() {
  return <LandingPageTemplate config={config} />;
}
