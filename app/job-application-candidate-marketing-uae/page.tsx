import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['uae'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Services UAE | Proxy Tech Support',
  description: 'Not getting IT interview calls from UAE employers? We apply to relevant Dubai and Abu Dhabi tech jobs on Bayt.com and LinkedIn, reach recruiters professionally, follow up consistently, and keep your profile active.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
