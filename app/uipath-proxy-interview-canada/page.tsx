import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { uipathProxyInterviewCanada } from '@/data/uipath-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(uipathProxyInterviewCanada);

export default function UiPathProxyInterviewCanadaPage() {
  return <LandingPageTemplate config={uipathProxyInterviewCanada} />;
}
