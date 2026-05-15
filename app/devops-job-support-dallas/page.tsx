import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { devopsJobSupportDallas } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(devopsJobSupportDallas);

export default function DevopsJobSupportDallasPage() {
  return <LandingPageTemplate config={devopsJobSupportDallas} />;
}
