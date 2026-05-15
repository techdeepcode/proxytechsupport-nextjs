import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { interviewProxySupportIreland } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(interviewProxySupportIreland);

export default function InterviewProxySupportIrelandPage() {
  return <LandingPageTemplate config={interviewProxySupportIreland} />;
}
