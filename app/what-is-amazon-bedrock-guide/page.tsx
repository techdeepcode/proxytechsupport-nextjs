import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAwsClusterPages } from '@/data/aws';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAwsClusterPages.find((p) => p.slug === 'what-is-amazon-bedrock-guide')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AwsPage_what_is_amazon_bedrock_guide() {
  return <LandingPageTemplate config={config} />;
}
