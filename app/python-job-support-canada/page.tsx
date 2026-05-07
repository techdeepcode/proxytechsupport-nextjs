import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import { pythonJobSupportCanada } from '@/data/landing-pages';
import { landingPageMetadata } from '@/lib/site-seo';

export const metadata: Metadata = landingPageMetadata(pythonJobSupportCanada);

export default function PythonJobSupportCanadaPage() {
  return <LandingPageTemplate config={pythonJobSupportCanada} />;
}
