import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { javaJobSupportIrving } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(javaJobSupportIrving);

export default function JavaJobSupportIrvingPage() {
  return <LandingPageTemplate config={javaJobSupportIrving} />;
}
