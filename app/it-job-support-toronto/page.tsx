import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { itJobSupportToronto } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(itJobSupportToronto);

export default function ITJobSupportTorontoPage() {
  return <LandingPageTemplate config={itJobSupportToronto} />;
}
