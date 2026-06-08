import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['uk'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Services UK | Proxy Tech Support',
  description: 'Not getting IT interview calls from UK employers? We apply to relevant UK jobs on your behalf, reach recruiters and agencies, follow up professionally, and keep your profile active in the UK market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
