import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAmazonClusterPages } from '@/data/amazon';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAmazonClusterPages.find((p) => p.slug === 'amazon-interview-career-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AmazonPage_amazon_interview_career_support() {
  return <LandingPageTemplate config={config} />;
}
