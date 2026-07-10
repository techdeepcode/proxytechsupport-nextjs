import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'aws-bedrock-interview-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_aws_bedrock_interview_support() {
  return <LandingPageTemplate config={config} />;
}
