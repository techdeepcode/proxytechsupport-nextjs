import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { proxyInterviewHongKong } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(proxyInterviewHongKong);

export default function ProxyInterviewHongKongPage() {
  return <LandingPageTemplate config={proxyInterviewHongKong} />;
}
