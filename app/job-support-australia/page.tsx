import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { jobSupportAustralia } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(jobSupportAustralia);

export default function JobSupportAustraliaPage() {
  return <LandingPageTemplate config={jobSupportAustralia} />;
}
