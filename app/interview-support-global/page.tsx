import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { interviewSupportGlobal } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(interviewSupportGlobal);

export default function InterviewSupportGlobalPage() {
  return <LandingPageTemplate config={interviewSupportGlobal} />;
}
