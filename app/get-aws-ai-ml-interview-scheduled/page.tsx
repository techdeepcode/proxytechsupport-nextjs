import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAwsClusterPages } from '@/data/aws';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAwsClusterPages.find((p) => p.slug === 'get-aws-ai-ml-interview-scheduled')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AwsPage_get_aws_ai_ml_interview_scheduled() {
  return <LandingPageTemplate config={config} />;
}
