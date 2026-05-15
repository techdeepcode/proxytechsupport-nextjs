import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import LandingFAQ from '@/components/LandingFAQ';
import { landingPageMetadata } from '@/lib/site-seo';
import { WHATSAPP_ME_URL } from '@/lib/whatsapp';

export const metadata: Metadata = landingPageMetadata({
  title: 'Our Legacy | USA-First IT Support Since 2008 | Proxy Tech Support',
  description:
    'Proxy Tech Support is USA-first, supporting IT professionals since 2008 through every major tech career crisis. We also support professionals across Canada, UK, Ireland, Australia, and global remote teams.',
  canonical: 'https://proxytechsupport.com/our-legacy/',
  keywords: [
    'Proxy Tech Support legacy', 'IT support since 2008', 'USA-first IT support',
    'global IT job support', 'IT support Canada UK Ireland Australia',
    'proxy interview support global', 'IT job support legacy history',
  ],
  ogTitle: 'Our Legacy | Proxy Tech Support — USA-First Since 2008',
  ogDescription:
    'USA-first IT job support and proxy interview assistance since 2008. Also supporting professionals across Canada, UK, Ireland, Australia, and global remote teams.',
});

const faqs = [
  {
    question: 'How long has Proxy Tech Support been operating?',
    answer:
      'Proxy Tech Support has been supporting IT professionals since 2008. Our primary focus is USA-based IT professionals, but we also support professionals in Canada, UK, Ireland, Australia, and global remote teams. Over 17+ years, we have helped 1000+ developers navigate job pressure, technical interviews, production issues, and career uncertainty.',
  },
  {
    question: 'Why is Proxy Tech Support described as USA-first?',
    answer:
      'USA-first reflects where our support model was built and where our deepest market expertise lies. Our understanding of USA client culture, USA interview standards, USA contractor dynamics, and USA tech market cycles is unmatched because it was earned through 17+ years of direct support. We are USA-first by experience, not just by marketing.',
  },
  {
    question: 'Do you support professionals outside the USA?',
    answer:
      'Yes. Proxy Tech Support supports IT professionals in Canada, UK, Ireland, Australia, and global remote teams. Our secondary positioning line reflects this: "Built for USA job pressure first. Trusted by IT professionals across Canada, UK, Ireland, Australia, and global remote teams."',
  },
  {
    question: 'What services does Proxy Tech Support provide?',
    answer:
      'We provide two complementary services: (1) Real-time IT job support — our in-house experts work alongside you during your actual working hours, helping with coding, debugging, architecture, production issues, and delivery pressure. (2) Interview and proxy interview support — real-time, discreet guidance during live technical interview rounds for USA and global IT roles.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Our Legacy | USA-First IT Support Since 2008',
  description:
    'Proxy Tech Support is USA-first, supporting IT professionals since 2008 through every major tech career crisis. We also support professionals across Canada, UK, Ireland, Australia, and global remote teams.',
  url: 'https://proxytechsupport.com/our-legacy/',
  datePublished: '2008-01-01',
  dateModified: '2026-05-15',
  provider: {
    '@type': 'Organization',
    name: 'Proxy Tech Support',
    url: 'https://proxytechsupport.com',
    foundingDate: '2008',
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Ireland' },
      { '@type': 'Country', name: 'Australia' },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proxytechsupport.com/' },
    { '@type': 'ListItem', position: 2, name: 'Our Legacy', item: 'https://proxytechsupport.com/our-legacy/' },
  ],
};

function WAIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const globalCountries = [
  { label: 'Canada', sub: 'Toronto, Vancouver, Calgary, Montreal', href: '/job-support-canada/', proxyHref: '/proxy-interview-canada/' },
  { label: 'United Kingdom', sub: 'London, Manchester, Edinburgh, remote UK teams', href: '/job-support-uk/', proxyHref: '/proxy-interview-uk/' },
  { label: 'Ireland', sub: 'Dublin, Cork, Galway, Limerick tech contractors', href: '/job-support-ireland/', proxyHref: null },
  { label: 'Australia', sub: 'Sydney, Melbourne, Brisbane, Perth developers', href: '/job-support-australia/', proxyHref: '/proxy-interview-australia/' },
];

export default function OurLegacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{`
        .olg-inner { width: 100%; max-width: var(--pts-content-max); margin: 0 auto; }
        .olg-hero {
          position: relative; z-index: 0;
          background:
            radial-gradient(ellipse 70% 55% at 5% 10%, rgba(0,223,130,0.1) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 95% 90%, rgba(3,98,76,0.15) 0%, transparent 50%),
            linear-gradient(160deg, #030f0f 0%, #0a1618 60%, #030f0f 100%);
          padding: clamp(3.5rem, 7vw, 6rem) 1rem clamp(3rem, 6vw, 5rem);
        }
        .olg-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--pts-accent); margin-bottom: 1.1rem;
        }
        .olg-h1 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.75rem, 4vw, 2.75rem); font-weight: 700; color: #ffffff;
          line-height: 1.2; margin-bottom: 1rem; max-width: 780px;
        }
        .olg-hero-para { font-size: clamp(0.97rem, 1.8vw, 1.05rem); color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 0.85rem; max-width: 680px; }
        .olg-hero-note {
          display: block; margin-top: 1.25rem;
          font-size: 0.88rem; font-style: italic; color: rgba(255,255,255,0.5);
          border-left: 2px solid rgba(0,223,130,0.4); padding-left: 0.75rem; max-width: 560px; line-height: 1.65;
        }
        .olg-usa-priority {
          display: inline-flex; align-items: center; gap: 0.5rem; margin-top: 1.75rem;
          font-size: 0.88rem; font-weight: 600; color: var(--pts-accent); text-decoration: none;
          border: 1px solid rgba(0,223,130,0.3); border-radius: 8px; padding: 0.6rem 1rem;
          transition: background 0.2s, border-color 0.2s;
        }
        .olg-usa-priority:hover { background: rgba(0,223,130,0.08); border-color: rgba(0,223,130,0.5); }
        /* ── Hero split (metrics card right on desktop) ── */
        .olg-hero-split { display: grid; grid-template-columns: 1fr; gap: clamp(1.35rem,3vw,2.25rem); align-items: start; }
        @media(min-width: 1024px) {
          .olg-hero-split { grid-template-columns: minmax(0,1fr) minmax(270px,360px); column-gap: clamp(1.75rem,3vw,2.75rem); }
        }
        .olg-hero-metrics-card {
          display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;
          padding: 1.2rem 1rem; border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.07); align-self: start;
        }
        @media(min-width: 1024px) {
          .olg-hero-metrics-card { position: sticky; top: calc(var(--pts-sticky-header-offset) + 0.5rem); padding: 1.35rem 1.15rem; gap: 0.85rem; }
        }
        .olg-metric-item { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09); border-radius: 10px; padding: 0.85rem 0.75rem; display: flex; flex-direction: column; gap: 0.2rem; }
        .olg-metric-stat { font-size: 1.45rem; font-weight: 800; color: var(--pts-accent); line-height: 1; }
        .olg-metric-label { font-size: 0.73rem; color: rgba(255,255,255,0.52); font-weight: 500; letter-spacing: 0.03em; line-height: 1.3; }

        .olg-section-alt  { position: relative; z-index: 0; background: var(--pts-section-alt); padding: clamp(3rem, 6vw, 5rem) 1rem; }
        .olg-section-white{ position: relative; z-index: 0; background: var(--pts-bg); padding: clamp(3rem, 6vw, 5rem) 1rem; }
        .olg-section-mint {
          position: relative; z-index: 0; background: var(--pts-tech-header);
          border-top: 1px solid rgba(0,223,130,0.2); border-bottom: 1px solid rgba(0,223,130,0.2);
          padding: clamp(2.5rem, 5vw, 4rem) 1rem;
        }
        .olg-section-dark {
          position: relative; z-index: 0;
          background:
            radial-gradient(ellipse 70% 55% at 0% 0%, rgba(0,223,130,0.14) 0%, transparent 55%),
            radial-gradient(ellipse 65% 50% at 100% 100%, rgba(3,98,76,0.18) 0%, transparent 50%),
            linear-gradient(180deg, var(--pts-surface-dark-raised) 0%, var(--pts-dark) 100%);
          padding: clamp(3.5rem, 7vw, 5.5rem) 1rem;
        }
        .olg-eyebrow-s { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--pts-accent); margin-bottom: 0.6rem; }
        .olg-h2 { font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.45rem, 2.6vw, 2rem); font-weight: 700; color: var(--pts-text); line-height: 1.25; margin-bottom: 0.75rem; }
        .olg-sub { font-size: 0.98rem; color: var(--pts-text-subtle); line-height: 1.65; margin-bottom: 1.75rem; max-width: 580px; }
        .olg-body { font-size: 0.97rem; color: var(--pts-text-muted); line-height: 1.8; margin-bottom: 1rem; }
        .olg-callout { background: rgba(0,223,130,0.06); border-left: 3px solid var(--pts-accent); border-radius: 0 10px 10px 0; padding: 1.25rem 1.5rem; font-size: 0.97rem; color: var(--pts-text-muted); line-height: 1.75; margin: 1.5rem 0; }
        .olg-callout strong { color: var(--pts-forest); }

        /* USA primary banner */
        .olg-usa-banner {
          display: flex; flex-wrap: wrap; align-items: center; gap: 1rem 2rem;
          background: rgba(0,223,130,0.06); border: 1px solid rgba(0,223,130,0.2);
          border-radius: 12px; padding: 1.25rem 1.5rem; margin-bottom: 2rem;
        }
        .olg-usa-banner-copy { flex: 1; min-width: 200px; }
        .olg-usa-banner-title { font-size: 0.95rem; font-weight: 700; color: var(--pts-forest); margin-bottom: 0.35rem; }
        .olg-usa-banner-sub { font-size: 0.88rem; color: var(--pts-text-subtle); line-height: 1.6; }
        .olg-usa-banner-link {
          display: inline-flex; align-items: center; gap: 0.35rem;
          font-size: 0.88rem; font-weight: 700; color: var(--pts-forest);
          background: rgba(0,223,130,0.12); border-radius: 8px; padding: 0.55rem 1rem;
          text-decoration: none; white-space: nowrap; flex-shrink: 0;
          transition: background 0.15s;
        }
        .olg-usa-banner-link:hover { background: rgba(0,223,130,0.2); }

        /* Country grid */
        .olg-country-grid { display: grid; gap: 1.25rem; grid-template-columns: 1fr; }
        @media(min-width: 640px) { .olg-country-grid { grid-template-columns: repeat(2, 1fr); } }
        .olg-country-card {
          background: var(--pts-card-bg); border: 1px solid var(--pts-border);
          border-radius: var(--pts-card-radius); padding: 1.4rem;
          box-shadow: var(--pts-shadow-lp); transition: box-shadow 0.2s, transform 0.2s;
        }
        .olg-country-card:hover { box-shadow: var(--pts-shadow-lp-hover); transform: translateY(-2px); }
        .olg-country-name { font-size: 1rem; font-weight: 700; color: var(--pts-text); margin-bottom: 0.3rem; }
        .olg-country-sub { font-size: 0.85rem; color: var(--pts-text-subtle); margin-bottom: 0.9rem; line-height: 1.5; }
        .olg-country-links { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .olg-country-link {
          font-size: 0.8rem; color: var(--pts-forest); text-decoration: none;
          font-weight: 600; border: 1px solid var(--pts-border); border-radius: 6px;
          padding: 0.25rem 0.55rem; background: #f8f9fa;
          transition: border-color 0.15s, color 0.15s;
        }
        .olg-country-link:hover { border-color: var(--pts-accent); color: var(--pts-forest-hover); }

        /* Checks */
        .olg-checks { display: flex; flex-direction: column; gap: 0.65rem; margin-top: 1.25rem; }
        .olg-check-item { display: flex; align-items: flex-start; gap: 0.55rem; font-size: 0.95rem; color: var(--pts-text-muted); line-height: 1.55; }
        .olg-check-icon { width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0; background: rgba(0,223,130,0.12); color: var(--pts-forest); display: flex; align-items: center; justify-content: center; margin-top: 2px; }

        /* CTA */
        .olg-cta-row { display: flex; flex-wrap: wrap; gap: 0.85rem; align-items: center; }
        .olg-btn-wa { display: inline-flex; align-items: center; gap: 0.45rem; background: #25D366; color: #ffffff; font-weight: 700; font-size: 0.95rem; padding: 0.85rem 1.6rem; border-radius: 50px; text-decoration: none; transition: filter 0.2s, transform 0.2s; white-space: nowrap; }
        .olg-btn-wa:hover { filter: brightness(1.08); transform: translateY(-1px); }
        .olg-btn-outline { display: inline-flex; align-items: center; gap: 0.45rem; background: transparent; color: #ffffff; font-weight: 600; font-size: 0.95rem; padding: 0.85rem 1.6rem; border-radius: 50px; text-decoration: none; border: 1.5px solid rgba(255,255,255,0.65); transition: background 0.2s, transform 0.2s; white-space: nowrap; }
        .olg-btn-outline:hover { background: rgba(255,255,255,0.1); transform: translateY(-1px); }

        /* FAQ */
        .olg-faq-grid { display: grid; gap: 2.5rem; align-items: start; }
        @media(min-width: 1024px) { .olg-faq-grid { grid-template-columns: minmax(240px, 340px) 1fr; gap: 3rem; } }

        /* Related */
        .olg-related { background: var(--pts-section-alt); padding: 1.75rem 1rem; border-top: 1px solid var(--pts-border); }
        .olg-related-label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--pts-text-subtle); margin-bottom: 0.85rem; }
        .olg-related-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .olg-related-link { font-size: 0.82rem; color: var(--pts-forest); text-decoration: none; font-weight: 600; border: 1px solid var(--pts-border); border-radius: 6px; padding: 0.3rem 0.65rem; background: var(--pts-card-bg); transition: border-color 0.15s, color 0.15s; }
        .olg-related-link:hover { border-color: var(--pts-accent); color: var(--pts-forest-hover); }

        /* Bottom CTA */
        .olg-bottom-inner { width: 100%; max-width: var(--pts-content-max); margin: 0 auto; text-align: center; }
        .olg-bottom-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: var(--pts-accent); margin-bottom: 1rem; }
        .olg-bottom-h2 { font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 700; color: #ffffff; line-height: 1.25; margin-bottom: 0.75rem; max-width: 620px; margin-left: auto; margin-right: auto; }
        .olg-bottom-sub { font-size: 0.97rem; color: rgba(255,255,255,0.62); line-height: 1.65; margin-bottom: 2rem; max-width: 520px; margin-left: auto; margin-right: auto; }
        .olg-bottom-cta-row { display: flex; flex-wrap: wrap; gap: 0.85rem; justify-content: center; }
        .olg-contacts { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.25rem 2rem; margin-top: 1.75rem; }
        .olg-contact-item { display: flex; align-items: center; gap: 0.4rem; font-size: 0.9rem; color: rgba(255,255,255,0.72); }
        .olg-contact-item a { color: inherit; text-decoration: none; }
        .olg-contact-item a:hover { color: var(--pts-accent); }

        @media(max-width: 768px) {
          .olg-hero { padding: 0.95rem 1rem 2rem !important; }
          .olg-cta-row, .olg-bottom-cta-row { flex-direction: column; gap: 0.55rem; }
          .olg-btn-wa, .olg-btn-outline { width: 100%; justify-content: center; min-height: 52px; font-size: 1rem; border-radius: 12px; }
          .olg-section-alt, .olg-section-white, .olg-section-mint { padding: 2.25rem 1rem; }
          .olg-section-dark { padding: 2.5rem 1rem; }
        }
      `}</style>

      <TopBar />
      <Navbar />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Our Legacy' },
      ]} />

      {/* ── HERO ── */}
      <section className="olg-hero">
        <div className="olg-inner">
          <div className="olg-hero-split">
            <div>
              <p className="olg-eyebrow"><span aria-hidden>✦</span> USA-First · Global Reach · Since 2008</p>
              <h1 className="olg-h1">USA-First IT Support Since 2008 — Trusted Globally</h1>
              <p className="olg-hero-para">
                Proxy Tech Support is USA-first. Our support model, our market expertise, and our legacy were all built around USA job pressure, USA interviews, USA client culture, and USA tech market cycles.
              </p>
              <p className="olg-hero-para">
                We also support IT professionals in Canada, UK, Ireland, Australia, and global remote teams — but USA remains our primary focus and deepest expertise.
              </p>
              <a href="/usa-it-job-support-legacy/" className="olg-usa-priority">
                → Read Our Full USA IT Support Legacy Since 2008
              </a>
              <p className="olg-hero-note">
                Built for USA job pressure first. Trusted by IT professionals across Canada, UK, Ireland, Australia, and global remote teams.
              </p>
            </div>
            <aside className="olg-hero-metrics-card" aria-label="Trust metrics">
              <div className="olg-metric-item">
                <span className="olg-metric-stat">Since 2008</span>
                <span className="olg-metric-label">USA Market Experience</span>
              </div>
              <div className="olg-metric-item">
                <span className="olg-metric-stat">1000+</span>
                <span className="olg-metric-label">Professionals Helped</span>
              </div>
              <div className="olg-metric-item">
                <span className="olg-metric-stat">5+ Countries</span>
                <span className="olg-metric-label">Global Support</span>
              </div>
              <div className="olg-metric-item">
                <span className="olg-metric-stat">50+</span>
                <span className="olg-metric-label">Technologies</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── USA-FIRST POSITIONING ── */}
      <section className="olg-section-alt">
        <div className="olg-inner" style={{ maxWidth: 820 }}>
          <p className="olg-eyebrow-s">USA Primary Focus</p>
          <h2 className="olg-h2">USA Is Where Our Legacy Was Built</h2>

          <div className="olg-usa-banner">
            <div className="olg-usa-banner-copy">
              <p className="olg-usa-banner-title">USA-first. Not USA-only.</p>
              <p className="olg-usa-banner-sub">
                Our deepest expertise, longest history, and most detailed market knowledge is USA-specific. The USA legacy page covers all five USA tech market crisis cycles in full.
              </p>
            </div>
            <a href="/usa-it-job-support-legacy/" className="olg-usa-banner-link">
              View Full USA Legacy →
            </a>
          </div>

          <p className="olg-body">
            Proxy Tech Support was built in 2008 to address a specific problem: USA IT professionals under job pressure had no reliable, live, expert support partner. The Great Recession created the conditions where developers and consultants were isolated during high-stakes moments — client calls, production issues, technical interviews — with no one to turn to.
          </p>
          <p className="olg-body">
            That founding problem was USA-specific. The market knowledge we built, the support patterns we developed, and the trust we earned were all grounded in the USA tech market. Over 17+ years, that expertise deepened across five major USA tech market cycles — recession, cloud era, COVID remote work, layoffs, and AI-era disruption.
          </p>
          <div className="olg-checks">
            {[
              'USA client culture — how USA project managers, tech leads, and clients communicate and expect delivery.',
              'USA interview standards — FAANG rounds, system design, behavioral panels, and enterprise-specific technical formats.',
              'USA contractor dynamics — H1B, OPT, CPT pressure and the stakes of visa-tied employment.',
              'USA remote work culture — how COVID shifted USA teams and what remote work pressure actually looks like.',
              'USA layoff cycles — how tech layoffs affect consultants, contractors, freshers, and senior developers differently.',
            ].map((item) => (
              <div key={item} className="olg-check-item">
                <span className="olg-check-icon"><CheckIcon /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBAL REACH ── */}
      <section className="olg-section-white">
        <div className="olg-inner">
          <p className="olg-eyebrow-s">Global Reach</p>
          <h2 className="olg-h2">Also Supporting Canada, UK, Ireland, Australia and Global Remote Teams</h2>
          <p className="olg-sub">
            The same pressure that USA developers face — interview pressure, job instability, production crises, client delivery expectations — exists in other markets too. Proxy Tech Support extends its support to these regions with the same quality and confidentiality standards.
          </p>
          <div className="olg-country-grid">
            {globalCountries.map((country) => (
              <div key={country.label} className="olg-country-card">
                <p className="olg-country-name">{country.label}</p>
                <p className="olg-country-sub">{country.sub}</p>
                <div className="olg-country-links">
                  <a href={country.href} className="olg-country-link">Job Support →</a>
                  {country.proxyHref && (
                    <a href={country.proxyHref} className="olg-country-link">Proxy Interview →</a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="olg-callout" style={{ marginTop: '2rem' }}>
            <strong>Note:</strong> USA remains the primary focus. Global support for Canada, UK, Ireland, and Australia is offered at the same quality level but with USA-first internal priority. If you are based in the USA, the{' '}
            <a href="/usa-it-job-support-legacy/" style={{ color: 'var(--pts-forest)', fontWeight: 700, textDecoration: 'underline' }}>USA IT support legacy page</a>{' '}
            covers your market context in full detail.
          </div>
        </div>
      </section>

      {/* ── WHAT WE PROVIDE ── */}
      <section className="olg-section-mint">
        <div className="olg-inner" style={{ maxWidth: 820 }}>
          <p className="olg-eyebrow-s">What We Provide</p>
          <h2 className="olg-h2">Real-Time IT Job Support and Proxy Interview Assistance</h2>
          <p className="olg-body">
            Proxy Tech Support provides two core services — both delivered live, by in-house experts, with no sub-contracting or outsourcing.
          </p>
          <div className="olg-checks">
            {[
              'Real-time IT job support: our expert works alongside you during actual working hours — coding, debugging, architecture, production issues, sprint delivery.',
              'Proxy interview and interview support: live, discreet guidance during technical interview rounds — coding rounds, system design, behavioral panels, proxy interview scenarios.',
              'Same-day onboarding: most engagements start the same day you contact us.',
              'In-house experts only: no freelancer marketplaces, no outsourcing, no junior substitutes.',
              'Confidential and professional: NDA available on request for all engagements.',
              '50+ technologies: Java, Python, .NET, React, Node.js, AWS, Azure, GCP, DevOps, Kubernetes, AI/ML, and enterprise stacks.',
            ].map((item) => (
              <div key={item} className="olg-check-item">
                <span className="olg-check-icon"><CheckIcon /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="olg-section-white">
        <div className="olg-inner">
          <div className="olg-faq-grid">
            <div>
              <p className="olg-eyebrow-s">FAQ</p>
              <h2 className="olg-h2">Questions About Our Legacy and Global Support</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--pts-text-subtle)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Common questions about our history, focus, and global reach.
              </p>
              <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="olg-btn-wa" style={{ display: 'inline-flex', fontSize: '0.9rem' }}>
                <WAIcon size={15} />
                Ask on WhatsApp
              </a>
            </div>
            <LandingFAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ── */}
      <nav className="olg-related" aria-label="Related pages">
        <div className="olg-inner">
          <p className="olg-related-label">Related Pages</p>
          <div className="olg-related-row">
            {[
              { label: 'USA Legacy Since 2008 (Primary)', href: '/usa-it-job-support-legacy/' },
              { label: 'USA IT Job Support', href: '/job-support-usa/' },
              { label: 'USA Proxy Interview Support', href: '/proxy-interview-usa/' },
              { label: 'USA Career Crisis Support', href: '/usa-it-career-crisis-support/' },
              { label: 'USA AI Era Job Support', href: '/usa-ai-era-job-support/' },
              { label: 'USA Remote Work IT Support', href: '/usa-remote-work-it-support/' },
              { label: 'IT Job Support Canada', href: '/job-support-canada/' },
              { label: 'IT Job Support UK', href: '/job-support-uk/' },
              { label: 'IT Job Support Ireland', href: '/job-support-ireland/' },
              { label: 'IT Job Support Australia', href: '/job-support-australia/' },
              { label: 'Read Our Blog', href: '/blog/' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="olg-related-link">{l.label}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── BOTTOM CTA ── */}
      <section className="olg-section-dark">
        <div className="olg-bottom-inner">
          <p className="olg-bottom-eyebrow">Get Support Now</p>
          <h2 className="olg-bottom-h2">
            Real-Time IT Job Support and Proxy Interview Assistance — USA-First, Globally Available
          </h2>
          <p className="olg-bottom-sub">
            Since 2008. USA-first. Also supporting Canada, UK, Ireland, Australia, and global remote teams. Real experts. Real-time. Confidential.
          </p>
          <div className="olg-bottom-cta-row">
            <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="olg-btn-wa">
              <WAIcon />
              Get Support Now
            </a>
            <a href="/usa-it-job-support-legacy/" className="olg-btn-outline">View USA Legacy →</a>
          </div>
          <div className="olg-contacts">
            <div className="olg-contact-item">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <a href="tel:+919660614469">+91 96606 14469</a>
            </div>
            <div className="olg-contact-item">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a href="mailto:support@proxytechsupport.com">support@proxytechsupport.com</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
