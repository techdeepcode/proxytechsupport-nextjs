import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBottomCTA from '@/components/PageBottomCTA';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { defaultOgImage } from '@/lib/site-seo';
import { WHATSAPP_ME_URL } from '@/lib/whatsapp';

const canonical = 'https://proxytechsupport.com/interviews/';
const pageTitle = 'Interview Services – Proxy Interview Support & Scheduling Help';
const shortDescription =
  'Explore interview services: proxy interview support, get interview scheduled support, and country-specific interview help. Need technical interview prep? View real interview questions.';

export const metadata: Metadata = {
  title: pageTitle,
  description: shortDescription,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: pageTitle,
    description: shortDescription,
    url: canonical,
    siteName: 'Proxy Tech Support',
    locale: 'en_US',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: shortDescription,
    images: [defaultOgImage.url],
  },
  other: {
    language: 'English',
    'revisit-after': '7 days',
  },
};

const interviewServiceCards = [
  {
    title: 'Proxy Interview Support',
    description: 'Real-time in-house expert support during live technical interviews for coding rounds, system design, and pressure scenarios.',
    href: '/proxy-interview-support/',
    cta: 'Explore Proxy Support →',
  },
  {
    title: 'Get Interview Scheduled',
    description: 'Profile engineering and recruiter visibility optimization to help you get more interview calls in the USA and global markets.',
    href: '/get-interview-scheduled/',
    cta: 'Get Interview Calls →',
  },
  {
    title: 'Interview Support Global',
    description: 'End-to-end interview guidance for developers targeting USA, UK, Canada, Australia, Europe, and other international markets.',
    href: '/interview-support-global/',
    cta: 'View Global Support →',
  },
  {
    title: 'Proxy Interview USA',
    description: 'Country-focused interview support with timing, expectations, and live technical guidance calibrated for USA interview formats.',
    href: '/proxy-interview-usa/',
    cta: 'Open USA Interview Support →',
  },
  {
    title: 'Proxy Interview UK',
    description: 'Structured proxy interview support for UK-based technical rounds and hiring patterns.',
    href: '/proxy-interview-uk/',
    cta: 'Open UK Interview Support →',
  },
  {
    title: 'Proxy Interview Canada',
    description: 'Interview assistance for Canadian engineering roles with focused preparation and live round support.',
    href: '/proxy-interview-canada/',
    cta: 'Open Canada Interview Support →',
  },
];

export default function InterviewsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main
        className="pts-listing-main"
        style={{ width: '100%', maxWidth: 'var(--pts-content-max)', margin: '0 auto', padding: '3rem 1rem', background: 'var(--pts-bg)', minHeight: '60vh' }}
      >
        {/* Interview support banner */}
        <div
          className="pts-listing-hero-banner"
          style={{
          background: 'linear-gradient(135deg, #030f0f 0%, #03624c 100%)',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
        >
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#00df82', marginBottom: '0.25rem' }}>Live Expert Help</p>
            <p style={{ fontSize: '0.97rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.35, margin: 0 }}>
              Interview support services for USA, UK, Canada &amp; worldwide.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:'0.35rem', background:'#25D366', color:'#fff', fontWeight:700, fontSize:'0.85rem', padding:'0.6rem 1.1rem', borderRadius:'50px', textDecoration:'none' }}>
              Get Instant Help
            </a>
            <a href="/interview-questions/"
              style={{ display:'inline-flex', alignItems:'center', gap:'0.35rem', background:'rgba(255,255,255,0.12)', color:'#fff', fontWeight:600, fontSize:'0.85rem', padding:'0.6rem 1.1rem', borderRadius:'50px', textDecoration:'none', border:'1px solid rgba(255,255,255,0.3)' }}>
              Interview Questions →
            </a>
          </div>
        </div>

        <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '1rem' }}>
          Interview Services
        </h1>
        <p style={{ color: 'var(--pts-text-muted)', marginBottom: '0.75rem', lineHeight: 1.7 }}>
          High-stakes technical interview coming up? Our in-house experts support you before and during live interview rounds so you can perform with confidence, clarity, and speed.
        </p>
        <p style={{ color: 'var(--pts-text-muted)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Choose your interview service below — proxy interview support, interview scheduling help, and country-focused interview support for USA, UK, Canada, and global roles.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          {interviewServiceCards.map((service) => (
            <article
              key={service.href}
              className="card"
              style={{ padding: '1.5rem' }}
            >
              <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '0.4rem' }}>
                <a href={service.href} style={{ color: 'var(--pts-text)', textDecoration: 'none' }}>{service.title}</a>
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--pts-text-muted)', marginBottom: '0.75rem', lineHeight: 1.6 }}>
                {service.description}
              </p>
              <a href={service.href} style={{ color: 'var(--pts-accent)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                {service.cta}
              </a>
            </article>
          ))}
        </div>
      </main>
      <PageBottomCTA />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
