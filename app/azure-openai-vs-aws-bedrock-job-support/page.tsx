import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAiMlClusterPages } from '@/data/aiml';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAiMlClusterPages.find((p) => p.slug === 'azure-openai-vs-aws-bedrock-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AimlPage_azure_openai_vs_aws_bedrock_job_support() {
  return <LandingPageTemplate config={config} />;
}
