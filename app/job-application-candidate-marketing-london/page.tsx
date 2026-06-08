import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['london'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing London | Proxy Tech Support',
  description: 'Not getting IT interview calls from London tech and FinTech employers? We apply to relevant London jobs, reach Canary Wharf and City recruiters, follow up professionally, and keep your profile active.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
