import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['munich'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Munich Germany | Proxy Tech Support',
  description: 'Munich enterprise and automotive tech roles are competitive. We apply to relevant Munich IT jobs, reach local recruiters, follow up professionally, and keep your profile active in the Munich tech market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
