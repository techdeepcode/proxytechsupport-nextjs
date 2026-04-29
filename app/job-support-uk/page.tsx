import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportUK } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportUK);

export default function JobSupportUKPage() {
  return <LandingPageTemplate config={jobSupportUK} />;
}
