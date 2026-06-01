import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathProxyInterviewUSA } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathProxyInterviewUSA);

export default function UiPathProxyInterviewUSAPage() {
  return <LandingPageTemplate config={uipathProxyInterviewUSA} />;
}
