import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['phoenix'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Phoenix AZ | Proxy Tech Support',
  description: 'Phoenix tech market is expanding fast. We apply to relevant Phoenix IT jobs on your behalf, reach local recruiters, follow up professionally, and keep your profile active in the growing Phoenix tech market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
