import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { allCompanyClusterPages } from '@/data/companies';
import { landingPageMetadata } from '@/lib/site-seo';

const config = allCompanyClusterPages.find((p) => p.slug === 'palo-alto-networks-career-support')!;

export const metadata: Metadata = landingPageMetadata(config);

export default function CompanyHub_palo_alto_networks_career_support() {
  return <LandingPageTemplate config={config} />;
}
