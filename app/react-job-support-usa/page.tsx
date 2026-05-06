import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { reactJobSupportUSA } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(reactJobSupportUSA);

export default function ReactJobSupportUSAPage() {
  return <LandingPageTemplate config={reactJobSupportUSA} />;
}
