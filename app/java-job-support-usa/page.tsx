import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { javaJobSupportUSA } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(javaJobSupportUSA);

export default function JavaJobSupportUSAPage() {
  return <LandingPageTemplate config={javaJobSupportUSA} />;
}
