import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAwsClusterPages } from '@/data/aws';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAwsClusterPages.find((p) => p.slug === 'aws-genai-architecture-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AwsPage_aws_genai_architecture_guide() {
  return <LandingPageTemplate config={config} />;
}
