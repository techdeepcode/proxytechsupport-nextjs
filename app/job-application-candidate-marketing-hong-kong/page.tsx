import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['hong-kong'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Services Hong Kong | Proxy Tech Support',
  description: 'Struggling to get IT interview calls from Hong Kong FinTech and banking tech employers? We apply to relevant HK jobs, reach recruiters professionally, follow up consistently, and keep your profile active.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
