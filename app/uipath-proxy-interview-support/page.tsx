import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathProxyInterviewSupport } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathProxyInterviewSupport);

export default function UiPathProxyInterviewSupportPage() {
  return <LandingPageTemplate config={uipathProxyInterviewSupport} />;
}
