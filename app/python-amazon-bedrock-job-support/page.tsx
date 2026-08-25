import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAwsClusterPages } from '@/data/aws';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAwsClusterPages.find((p) => p.slug === 'python-amazon-bedrock-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AwsPage_python_amazon_bedrock_job_support() {
  return <LandingPageTemplate config={config} />;
}
