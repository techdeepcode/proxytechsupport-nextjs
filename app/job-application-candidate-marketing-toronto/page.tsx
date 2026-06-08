import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['toronto'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Toronto | Proxy Tech Support',
  description: 'Not getting IT interview calls from Toronto tech and FinTech employers? We apply to relevant Toronto jobs, reach local recruiters, follow up professionally, and keep your profile active in the Toronto market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
