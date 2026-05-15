import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { itJobSupportDublin } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(itJobSupportDublin);

export default function ItJobSupportDublinPage() {
  return <LandingPageTemplate config={itJobSupportDublin} />;
}
