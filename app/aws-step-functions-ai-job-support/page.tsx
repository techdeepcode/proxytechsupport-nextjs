import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAwsClusterPages } from '@/data/aws';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAwsClusterPages.find((p) => p.slug === 'aws-step-functions-ai-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AwsPage_aws_step_functions_ai_job_support() {
  return <LandingPageTemplate config={config} />;
}
