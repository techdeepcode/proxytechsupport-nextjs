import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { workday2026r1ReleaseSupport } from '@/data/workday-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(workday2026r1ReleaseSupport);

export default function Workday2026r1ReleaseSupportPage() {
  return <LandingPageTemplate config={workday2026r1ReleaseSupport} />;
}
