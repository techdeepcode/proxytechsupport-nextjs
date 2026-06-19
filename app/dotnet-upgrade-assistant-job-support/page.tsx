import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetUpgradeAssistantJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetUpgradeAssistantJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetUpgradeAssistantJobSupport} />;
}
