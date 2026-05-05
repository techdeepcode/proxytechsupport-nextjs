import type { Metadata } from 'next';
import GetInterviewScheduledGeoTemplate from '@/components/GetInterviewScheduledGeoTemplate';
import { geoInterviewScheduledConfigs } from '@/data/get-interview-scheduled-geo';
import { landingPageMetadata } from '@/lib/site-seo';

const config = geoInterviewScheduledConfigs['uk'];

export const metadata: Metadata = landingPageMetadata({
  title: config.heroHeadline + ' | Profile Engineering | ProxyTechSupport',
  description: config.heroSub,
  canonical: config.canonical,
  keywords: config.localKeywords,
});

export default function Page() {
  return <GetInterviewScheduledGeoTemplate config={config} />;
}
