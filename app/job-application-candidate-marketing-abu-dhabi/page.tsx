import type { Metadata } from 'next';
import CandidateMarketingGeoTemplate from '@/components/CandidateMarketingGeoTemplate';
import { candidateMarketingGeoConfigs } from '@/data/candidate-marketing-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = candidateMarketingGeoConfigs['abu-dhabi'];

export const metadata: Metadata = landingPageMetadata({
  title: 'Job Application & Candidate Marketing Abu Dhabi UAE | Proxy Tech Support',
  description: 'Abu Dhabi government tech and enterprise IT roles require targeted marketing. We apply to relevant Abu Dhabi IT jobs, reach local recruiters, follow up professionally, and keep your profile active.',
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <CandidateMarketingGeoTemplate config={config} />;
}
