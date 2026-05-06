import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { cloudJobSupportUSA } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(cloudJobSupportUSA);

export default function CloudJobSupportUSAPage() {
  return <LandingPageTemplate config={cloudJobSupportUSA} />;
}
