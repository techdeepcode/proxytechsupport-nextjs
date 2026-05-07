import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { itJobSupportCalgary } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(itJobSupportCalgary);

export default function ITJobSupportCalgaryPage() {
  return <LandingPageTemplate config={itJobSupportCalgary} />;
}
