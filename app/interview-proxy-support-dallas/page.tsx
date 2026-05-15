import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { interviewProxySupportDallas } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(interviewProxySupportDallas);

export default function InterviewProxySupportDallasPage() {
  return <LandingPageTemplate config={interviewProxySupportDallas} />;
}
