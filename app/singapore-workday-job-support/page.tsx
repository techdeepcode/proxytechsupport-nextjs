import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { singaporeWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(singaporeWorkdayJobSupport);

export default function SingaporeWorkdayJobSupportPage() {
  return <LandingPageTemplate config={singaporeWorkdayJobSupport} />;
}
