import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportSingapore } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportSingapore);

export default function JobSupportSingaporePage() {
  return <LandingPageTemplate config={jobSupportSingapore} />;
}
