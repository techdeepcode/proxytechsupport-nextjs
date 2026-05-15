import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { itJobSupportDallas } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(itJobSupportDallas);

export default function ItJobSupportDallasPage() {
  return <LandingPageTemplate config={itJobSupportDallas} />;
}
