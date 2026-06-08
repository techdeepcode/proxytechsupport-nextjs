import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['houston'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Houston TX | Proxy Tech Support',
  description: 'Not getting IT interview calls from Houston employers? We apply to relevant Houston energy tech and enterprise IT jobs, reach local recruiters, follow up professionally, and keep your profile active.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
