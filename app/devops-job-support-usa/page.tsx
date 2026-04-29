import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { devopsJobSupportUSA } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(devopsJobSupportUSA);

export default function DevopsJobSupportUSAPage() {
  return <LandingPageTemplate config={devopsJobSupportUSA} />;
}
