import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['atlanta'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Atlanta GA | Proxy Tech Support',
  description: 'Atlanta tech roles are moving fast. We apply to relevant Atlanta IT jobs on your behalf, reach local recruiters, follow up professionally, and keep your profile active in the growing Atlanta tech market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
