import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { sreJobSupportUSA } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(sreJobSupportUSA);

export default function SreJobSupportUSAPage() {
  return <LandingPageTemplate config={sreJobSupportUSA} />;
}
