import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAwsClusterPages } from '@/data/aws';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAwsClusterPages.find((p) => p.slug === 'bedrock-on-demand-vs-provisioned-throughput-job-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AwsPage_bedrock_on_demand_vs_provisioned_throughput_job_support() {
  return <LandingPageTemplate config={config} />;
}
