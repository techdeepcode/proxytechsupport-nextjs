import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { failedInterviewHelp } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(failedInterviewHelp);

export default function FailedInterviewHelpPage() {
  return <LandingPageTemplate config={failedInterviewHelp} />;
}
