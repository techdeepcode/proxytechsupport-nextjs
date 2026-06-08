import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['los-angeles'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Los Angeles | Proxy Tech Support',
  description: 'Los Angeles tech market is growing. We apply to relevant LA IT jobs on your behalf, reach Silicon Beach and DTLA recruiters, follow up professionally, and keep your profile active in the LA market.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
