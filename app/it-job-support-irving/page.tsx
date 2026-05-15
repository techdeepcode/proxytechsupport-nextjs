import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { itJobSupportIrving } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(itJobSupportIrving);

export default function ItJobSupportIrvingPage() {
  return <LandingPageTemplate config={itJobSupportIrving} />;
}
