import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportHongKong } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportHongKong);

export default function JobSupportHongKongPage() {
  return <LandingPageTemplate config={jobSupportHongKong} />;
}
