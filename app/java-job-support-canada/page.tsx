import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { javaJobSupportCanada } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(javaJobSupportCanada);

export default function JavaJobSupportCanadaPage() {
  return <LandingPageTemplate config={javaJobSupportCanada} />;
}
