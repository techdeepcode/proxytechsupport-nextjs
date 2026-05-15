import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { projectOnboardingHelpIreland } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(projectOnboardingHelpIreland);

export default function ProjectOnboardingHelpIrelandPage() {
  return <LandingPageTemplate config={projectOnboardingHelpIreland} />;
}
