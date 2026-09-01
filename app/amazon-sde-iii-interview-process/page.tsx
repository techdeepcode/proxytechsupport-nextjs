import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allAmazonClusterPages } from '@/data/amazon';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allAmazonClusterPages.find((p) => p.slug === 'amazon-sde-iii-interview-process')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function AmazonPage_amazon_sde_iii_interview_process() {
  return <LandingPageTemplate config={config} />;
}
