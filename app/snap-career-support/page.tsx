import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allCompanyClusterPages } from '@/data/companies';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allCompanyClusterPages.find((p) => p.slug === 'snap-career-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function CompanyHub_snap_career_support() {
  return <LandingPageTemplate config={config} />;
}
