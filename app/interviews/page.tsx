import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllInterviews } from '@/lib/interviews';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBottomCTA from '@/components/PageBottomCTA';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { defaultOgImage } from '@/lib/site-seo';
import { WHATSAPP_ME_URL } from '@/lib/whatsapp';

const canonical = 'https://proxytechsupport.com/interviews/';
const pageTitle = 'IT Interview Questions – Real Technical Questions & Answers';
const shortDescription =
  'Real IT interview questions captured from live technical rounds for USA, UK & Canada roles. Java, Python, React, DevOps, AWS & more. Struggling to clear interviews? Get expert help.';
const longP1 =
  'Real interview discussions collected daily while supporting developers in live projects, job support sessions, and proxy interview assistance across USA, UK, Canada, and Australia.';
const longP2 =
  'These are not theory-based interview questions. They are captured from real interview calls, technical rounds, and hiring discussions exactly as they happened, then structured to help other developers understand what companies are really asking today.';

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

export default async function InterviewsPage() {
  const interviews = await getAllInterviews();

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
              Struggling to clear interviews? Get real-time expert coaching — USA, UK, Canada &amp; worldwide.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:'0.35rem', background:'#25D366', color:'#fff', fontWeight:700, fontSize:'0.85rem', padding:'0.6rem 1.1rem', borderRadius:'50px', textDecoration:'none' }}>
              Get Instant Help
            </a>
            <a href="/interview-support-global/"
              style={{ display:'inline-flex', alignItems:'center', gap:'0.35rem', background:'rgba(255,255,255,0.12)', color:'#fff', fontWeight:600, fontSize:'0.85rem', padding:'0.6rem 1.1rem', borderRadius:'50px', textDecoration:'none', border:'1px solid rgba(255,255,255,0.3)' }}>
              Learn More →
            </a>
          </div>
        </div>

        <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '1rem' }}>
          Interview Questions
        </h1>
        <p style={{ color: 'var(--pts-text-muted)', marginBottom: '0.75rem', lineHeight: 1.7 }}>{longP1}</p>
        <p style={{ color: 'var(--pts-text-muted)', marginBottom: '2.5rem', lineHeight: 1.7 }}>{longP2}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {interviews.map((interview) => (
            <article
              key={interview.slug}
              className="card"
              style={{ padding: '1.5rem' }}
            >
              <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '0.4rem' }}>
                <Link href={`/interviews/${interview.slug}/`} style={{ color: 'var(--pts-text)', textDecoration: 'none' }}>
                  {interview.title}
                </Link>
              </h2>
              {interview.date && (
                <p style={{ fontSize: '0.8rem', color: 'var(--pts-text-subtle)', marginBottom: '0.5rem' }}>
                  {new Date(interview.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              )}
              {interview.description && (
                <p style={{ fontSize: '0.9rem', color: 'var(--pts-text-muted)', marginBottom: '0.75rem', lineHeight: 1.6 }}>
                  {interview.description}
                </p>
              )}
              <Link
                href={`/interviews/${interview.slug}/`}
                style={{ color: 'var(--pts-accent)', fontWeight: 600, fontSize: '0.9rem' }}
              >
                Read More →
              </Link>
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
