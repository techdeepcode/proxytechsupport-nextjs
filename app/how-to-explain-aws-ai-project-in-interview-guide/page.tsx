import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAwsClusterPages } from '@/data/aws';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAwsClusterPages.find((p) => p.slug === 'how-to-explain-aws-ai-project-in-interview-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AwsPage_how_to_explain_aws_ai_project_in_interview_guide() {
  return <LandingPageTemplate config={config} />;
}
