import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { dotnetDataAccessJobSupport } from '@/data/dotnet-cluster-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(dotnetDataAccessJobSupport);

export default function Page() {
  return <LandingPageTemplate config={dotnetDataAccessJobSupport} />;
}
