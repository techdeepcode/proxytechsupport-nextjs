import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetFullStackInterviewProxyJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetFullStackInterviewProxyJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetFullStackInterviewProxyJobSupport} />;
}
