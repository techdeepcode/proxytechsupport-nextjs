import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['dallas'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Dallas | Proxy Tech Support',
  description: 'Dallas tech roles move fast. We apply to relevant DFW IT jobs on your behalf, reach recruiters, follow up professionally, and keep your profile active in the Dallas-Fort Worth tech market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
