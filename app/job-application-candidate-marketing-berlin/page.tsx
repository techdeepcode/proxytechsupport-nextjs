import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['berlin'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Berlin Germany | Proxy Tech Support',
  description: 'Berlin startup and scale-up tech roles attract EU-wide competition. We apply to relevant Berlin IT jobs, reach local recruiters, follow up professionally, and keep your profile active in the Berlin tech market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
