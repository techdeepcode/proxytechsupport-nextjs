import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['new-york'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing New York | Proxy Tech Support',
  description: 'Not getting IT interview calls from New York FinTech and tech employers? We apply to relevant NYC jobs, reach recruiters, follow up professionally, and keep your profile active in the New York market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
