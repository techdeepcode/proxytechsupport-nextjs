import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { microsoftAgentFrameworkJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(microsoftAgentFrameworkJobSupport);

export default function Page() {
  return <LandingPageTemplate config={microsoftAgentFrameworkJobSupport} />;
}
