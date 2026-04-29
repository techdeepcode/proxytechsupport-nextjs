import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { nodejsJobSupportUSA } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(nodejsJobSupportUSA);

export default function NodejsJobSupportUSAPage() {
  return <LandingPageTemplate config={nodejsJobSupportUSA} />;
}
