import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAwsClusterPages } from '@/data/aws';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAwsClusterPages.find((p) => p.slug === 'bedrock-knowledge-bases-vs-custom-rag-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AwsPage_bedrock_knowledge_bases_vs_custom_rag_job_support() {
  return <LandingPageTemplate config={config} />;
}
