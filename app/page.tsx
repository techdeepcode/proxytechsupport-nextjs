import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import HeroHomeSplit from '@/components/HeroHomeSplit';
import TechSection from '@/components/TechSection';
import ServicesSection from '@/components/ServicesSection';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import HomeStructuredData from '@/components/HomeStructuredData';
import {
  HOME_HTML_TITLE,
  HOME_KEYWORDS,
  HOME_META_DESCRIPTION,
  HOME_OG_DESCRIPTION,
  HOME_OG_TITLE,
  HOME_TWITTER_DESCRIPTION,
  HOME_TWITTER_TITLE,
  defaultOgImage,
} from '@/lib/site-seo';

export const metadata: Metadata = {
  title: HOME_HTML_TITLE,
  description: HOME_META_DESCRIPTION,
  keywords: HOME_KEYWORDS.split(',').map((k) => k.trim()),
  alternates: {
    canonical: 'https://proxytechsupport.com/',
  },
  openGraph: {
    title: HOME_OG_TITLE,
    description: HOME_OG_DESCRIPTION,
    url: 'https://proxytechsupport.com/',
    type: 'website',
    siteName: 'Proxy Tech Support',
    locale: 'en_US',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TWITTER_TITLE,
    description: HOME_TWITTER_DESCRIPTION,
    images: [defaultOgImage.url],
  },
};

export default function HomePage() {
  return (
    <>
      <HomeStructuredData />
      <TopBar />
      <Navbar />
      <HeroHomeSplit />
      <main>
        <TechSection />
        <ServicesSection />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
