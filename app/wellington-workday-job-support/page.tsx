import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { wellingtonWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(wellingtonWorkdayJobSupport);

export default function WellingtonWorkdayJobSupportPage() {
  return <LandingPageTemplate config={wellingtonWorkdayJobSupport} />;
}
