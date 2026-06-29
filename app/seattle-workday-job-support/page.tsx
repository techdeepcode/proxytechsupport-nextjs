import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { seattleWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(seattleWorkdayJobSupport);

export default function SeattleWorkdayJobSupportPage() {
  return <LandingPageTemplate config={seattleWorkdayJobSupport} />;
}
