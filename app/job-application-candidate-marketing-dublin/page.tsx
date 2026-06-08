import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['dublin'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Dublin Ireland | Proxy Tech Support',
  description: 'Dublin EMEA tech roles are highly competitive. We apply to relevant Dublin IT jobs, reach Silicon Docks and IFSC recruiters, follow up professionally, and keep your profile active in the Dublin market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
