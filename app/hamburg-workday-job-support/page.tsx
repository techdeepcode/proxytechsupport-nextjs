import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { hamburgWorkdayJobSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(hamburgWorkdayJobSupport);

export default function HamburgWorkdayJobSupportPage() {
  return <LandingPageTemplate config={hamburgWorkdayJobSupport} />;
}
