import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetJobSupportUSA } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetJobSupportUSA);

export default function DotnetJobSupportUSAPage() {
  return <LandingPageTemplate config={dotnetJobSupportUSA} />;
}
