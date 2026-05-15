import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import LandingFAQ from '@/components/LandingFAQ';
import USALegacyTimeline from '@/components/USALegacyTimeline';
import { landingPageMetadata } from '@/lib/site-seo';
import { WHATSAPP_ME_URL } from '@/lib/whatsapp';

export const metadata: Metadata = landingPageMetadata({
  title: 'USA IT Job Support Legacy Since 2008 | Proxy Tech Support',
  description:
    'Proxy Tech Support has helped USA IT professionals since 2008 through the Great Recession, COVID remote work, tech layoffs, AI-era job pressure, technical interviews, and real-time project support.',
  canonical: 'https://proxytechsupport.com/usa-it-job-support-legacy/',
  keywords: [
    'USA IT job support legacy', 'IT job support since 2008', 'USA developer support history',
    'USA proxy interview support', 'IT job support USA', 'USA technical interview support',
    'USA job support H1B OPT CPT', 'veteran IT support USA', 'USA IT career support',
  ],
  ogTitle: 'USA IT Job Support Legacy Since 2008 | Proxy Tech Support',
  ogDescription:
    'Since 2008, Proxy Tech Support has stood with USA IT professionals through the Great Recession, COVID remote work shift, tech layoffs, and AI-era career pressure.',
});

const faqs = [
  {
    question: 'How long has Proxy Tech Support helped USA IT professionals?',
    answer:
      'Proxy Tech Support has supported USA IT professionals since 2008 across multiple market cycles including recession pressure, COVID remote work, tech layoffs, and AI-era job disruption. We have helped developers, consultants, contractors, OPT/CPT candidates, H1B professionals, and remote IT workers stay employed through every major USA tech market shift.',
  },
  {
    question: 'Do you provide USA office-hours job support?',
    answer:
      'Yes. Proxy Tech Support provides real-time job support for USA developers, consultants, contractors, and remote IT professionals during office-hours pressure. We align with all US time zones including Eastern, Central, Mountain, and Pacific working hours.',
  },
  {
    question: 'Can you help with USA proxy interview support?',
    answer:
      'Yes. Proxy Tech Support helps candidates prepare for and handle technical interview pressure, proxy interview needs, coding rounds, architecture discussions, and role-specific technical expectations for USA companies — from FAANG to mid-size firms to startups.',
  },
  {
    question: 'Is this a training institute?',
    answer:
      'No. Proxy Tech Support focuses on real-time job support, interview support, production issue help, and practical project guidance instead of generic classroom training. Our support is delivered during actual live work situations — not in a scheduled classroom session.',
  },
  {
    question: 'Do you support H1B, OPT, and CPT professionals in the USA?',
    answer:
      'Yes. Proxy Tech Support supports USA-based IT professionals, including consultants, contractors, students, OPT/CPT candidates, H1B professionals, and remote developers facing job pressure, interview pressure, or production challenges.',
  },
  {
    question: 'Do you only support the USA?',
    answer:
      'USA is the primary focus, but Proxy Tech Support also supports professionals in Canada, UK, Ireland, Australia, and global remote teams. Our USA-first legacy ensures we deeply understand USA client expectations, USA work culture, and USA interview standards.',
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
  name: 'USA IT Job Support Legacy Since 2008',
  description:
    'Proxy Tech Support has helped USA IT professionals since 2008 through the Great Recession, COVID remote work, tech layoffs, AI-era job pressure, and real-time project support.',
  url: 'https://proxytechsupport.com/usa-it-job-support-legacy/',
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
    { '@type': 'ListItem', position: 2, name: 'USA IT Job Support', item: 'https://proxytechsupport.com/job-support-usa/' },
    { '@type': 'ListItem', position: 3, name: 'USA IT Legacy Since 2008', item: 'https://proxytechsupport.com/usa-it-job-support-legacy/' },
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

export default function USALegacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        /* ── Layout containers ── */
        .ulg-inner { width: 100%; max-width: var(--pts-content-max); margin: 0 auto; }

        /* ── Hero ── */
        .ulg-hero {
          position: relative; z-index: 0;
          background:
            radial-gradient(ellipse 70% 55% at 5% 10%, rgba(0,223,130,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 95% 90%, rgba(3,98,76,0.2) 0%, transparent 50%),
            linear-gradient(160deg, #030f0f 0%, #0a1618 60%, #030f0f 100%);
          padding: clamp(3.5rem, 7vw, 6rem) 1rem clamp(3rem, 6vw, 5rem);
        }
        .ulg-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--pts-accent); margin-bottom: 1.1rem;
        }
        .ulg-h1 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.75rem, 4vw, 2.85rem); font-weight: 700; color: #ffffff;
          line-height: 1.2; margin-bottom: 1rem; max-width: 780px;
        }
        .ulg-hero-tagline {
          font-size: clamp(0.97rem, 1.8vw, 1.1rem); color: rgba(255,255,255,0.72);
          line-height: 1.65; margin-bottom: 0.85rem; max-width: 660px;
        }
        .ulg-hero-para {
          font-size: 0.97rem; color: rgba(255,255,255,0.6);
          line-height: 1.75; margin-bottom: 2rem; max-width: 660px;
        }
        /* ── Hero split (metrics card right on desktop) ── */
        .ulg-hero-split {
          display: grid; grid-template-columns: 1fr;
          gap: clamp(1.35rem, 3vw, 2.25rem); align-items: start;
        }
        @media(min-width: 1024px) {
          .ulg-hero-split {
            grid-template-columns: minmax(0,1fr) minmax(270px,360px);
            column-gap: clamp(1.75rem, 3vw, 2.75rem);
          }
        }
        .ulg-hero-metrics-card {
          display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;
          padding: 1.2rem 1rem; border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.07);
          align-self: start;
        }
        @media(min-width: 1024px) {
          .ulg-hero-metrics-card {
            position: sticky; top: calc(var(--pts-sticky-header-offset) + 0.5rem);
            padding: 1.35rem 1.15rem; gap: 0.85rem;
          }
        }
        .ulg-metric-item {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09);
          border-radius: 10px; padding: 0.85rem 0.75rem;
          display: flex; flex-direction: column; gap: 0.2rem;
        }
        .ulg-metric-stat { font-size: 1.45rem; font-weight: 800; color: var(--pts-accent); line-height: 1; }
        .ulg-metric-label { font-size: 0.73rem; color: rgba(255,255,255,0.52); font-weight: 500; letter-spacing: 0.03em; line-height: 1.3; }

        /* ── CTA buttons ── */
        .ulg-cta-row { display: flex; flex-wrap: wrap; gap: 0.85rem; align-items: center; margin-bottom: 2rem; }
        .ulg-btn-wa {
          display: inline-flex; align-items: center; gap: 0.45rem;
          background: #25D366; color: #ffffff; font-weight: 700; font-size: 0.95rem;
          padding: 0.85rem 1.6rem; border-radius: 50px; text-decoration: none;
          transition: filter 0.2s, transform 0.2s; white-space: nowrap;
        }
        .ulg-btn-wa:hover { filter: brightness(1.08); transform: translateY(-1px); }
        .ulg-btn-outline {
          display: inline-flex; align-items: center; gap: 0.45rem;
          background: transparent; color: #ffffff; font-weight: 600; font-size: 0.95rem;
          padding: 0.85rem 1.6rem; border-radius: 50px; text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.65);
          transition: background 0.2s, transform 0.2s; white-space: nowrap;
        }
        .ulg-btn-outline:hover { background: rgba(255,255,255,0.1); transform: translateY(-1px); }
        .ulg-btn-forest {
          display: inline-flex; align-items: center; gap: 0.45rem;
          background: var(--pts-forest); color: #ffffff; font-weight: 700; font-size: 0.95rem;
          padding: 0.85rem 1.6rem; border-radius: 50px; text-decoration: none;
          transition: background 0.2s, transform 0.2s; white-space: nowrap;
        }
        .ulg-btn-forest:hover { background: var(--pts-forest-hover); transform: translateY(-1px); }

        /* ── Section wrappers ── */
        .ulg-section-alt  { position: relative; z-index: 0; background: var(--pts-section-alt); padding: clamp(3rem, 6vw, 5rem) 1rem; }
        .ulg-section-white{ position: relative; z-index: 0; background: var(--pts-bg); padding: clamp(3rem, 6vw, 5rem) 1rem; }
        .ulg-section-mint {
          position: relative; z-index: 0;
          background: var(--pts-tech-header);
          border-top: 1px solid rgba(0,223,130,0.2); border-bottom: 1px solid rgba(0,223,130,0.2);
          padding: clamp(2.5rem, 5vw, 4rem) 1rem;
        }
        .ulg-section-dark {
          position: relative; z-index: 0;
          background:
            radial-gradient(ellipse 70% 55% at 0% 0%, rgba(0,223,130,0.14) 0%, transparent 55%),
            radial-gradient(ellipse 65% 50% at 100% 100%, rgba(3,98,76,0.18) 0%, transparent 50%),
            linear-gradient(180deg, var(--pts-surface-dark-raised) 0%, var(--pts-dark) 100%);
          padding: clamp(3.5rem, 7vw, 5.5rem) 1rem;
        }

        /* ── Typography ── */
        .ulg-section-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--pts-accent); margin-bottom: 0.6rem; }
        .ulg-h2 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.45rem, 2.6vw, 2rem); font-weight: 700;
          color: var(--pts-text); line-height: 1.25; margin-bottom: 0.75rem;
        }
        .ulg-h2-dark {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.45rem, 2.6vw, 2rem); font-weight: 700;
          color: #ffffff; line-height: 1.25; margin-bottom: 0.75rem;
        }
        .ulg-sub { font-size: 0.98rem; color: var(--pts-text-subtle); line-height: 1.65; margin-bottom: 2rem; max-width: 560px; }
        .ulg-body { font-size: 0.97rem; color: var(--pts-text-muted); line-height: 1.8; margin-bottom: 1rem; }
        .ulg-body-dark { font-size: 0.97rem; color: rgba(255,255,255,0.65); line-height: 1.8; margin-bottom: 1rem; }

        /* ── Era section ── */
        .ulg-era-section {
          padding: clamp(2.5rem, 5vw, 4rem) 1rem;
          border-bottom: 1px solid var(--pts-border);
        }
        .ulg-era-section:nth-child(even) { background: var(--pts-section-alt); }
        .ulg-era-section:nth-child(odd) { background: var(--pts-bg); }
        .ulg-era-years {
          display: inline-block; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--pts-forest);
          background: rgba(0,223,130,0.1); border-radius: 4px;
          padding: 0.2rem 0.65rem; margin-bottom: 0.65rem;
        }
        .ulg-era-h3 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.2rem, 2.2vw, 1.6rem); font-weight: 700;
          color: var(--pts-text); line-height: 1.3; margin-bottom: 1rem;
        }
        .ulg-era-body { font-size: 0.97rem; color: var(--pts-text-muted); line-height: 1.8; margin-bottom: 0.85rem; max-width: 760px; }
        .ulg-era-grid { display: grid; gap: 1.25rem; grid-template-columns: 1fr; margin-top: 1.25rem; }
        @media(min-width: 640px) { .ulg-era-grid { grid-template-columns: 1fr 1fr; } }
        .ulg-era-card {
          display: flex; gap: 0.65rem; align-items: flex-start;
          background: var(--pts-card-bg); border: 1px solid var(--pts-border);
          border-radius: 10px; padding: 0.85rem 1rem;
          font-size: 0.9rem; color: var(--pts-text-muted); line-height: 1.55;
        }
        .ulg-era-check {
          width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
          background: rgba(0,223,130,0.12); color: var(--pts-forest);
          display: flex; align-items: center; justify-content: center; margin-top: 1px;
        }

        /* ── Check list ── */
        .ulg-checks { display: flex; flex-direction: column; gap: 0.65rem; margin-top: 1.25rem; }
        .ulg-check-item {
          display: flex; align-items: flex-start; gap: 0.55rem;
          font-size: 0.95rem; color: var(--pts-text-muted); line-height: 1.55;
        }
        .ulg-check-icon {
          width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
          background: rgba(0,223,130,0.12); color: var(--pts-forest);
          display: flex; align-items: center; justify-content: center; margin-top: 2px;
        }

        /* ── Callout block ── */
        .ulg-callout {
          background: rgba(0,223,130,0.06); border-left: 3px solid var(--pts-accent);
          border-radius: 0 10px 10px 0; padding: 1.25rem 1.5rem;
          font-size: 0.97rem; color: var(--pts-text-muted); line-height: 1.75;
          margin: 1.5rem 0;
        }
        .ulg-callout strong { color: var(--pts-forest); }

        /* ── FAQ ── */
        .ulg-faq-grid { display: grid; gap: 2.5rem; align-items: start; }
        @media(min-width: 1024px) { .ulg-faq-grid { grid-template-columns: minmax(240px, 340px) 1fr; gap: 3rem; } }

        /* ── Related links ── */
        .ulg-related { background: var(--pts-section-alt); padding: 1.75rem 1rem; border-top: 1px solid var(--pts-border); }
        .ulg-related-label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--pts-text-subtle); margin-bottom: 0.85rem; }
        .ulg-related-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .ulg-related-link {
          font-size: 0.82rem; color: var(--pts-forest); text-decoration: none;
          font-weight: 600; border: 1px solid var(--pts-border); border-radius: 6px;
          padding: 0.3rem 0.65rem; background: var(--pts-card-bg);
          transition: border-color 0.15s, color 0.15s;
        }
        .ulg-related-link:hover { border-color: var(--pts-accent); color: var(--pts-forest-hover); }

        /* ── Bottom CTA ── */
        .ulg-bottom-inner { width: 100%; max-width: var(--pts-content-max); margin: 0 auto; text-align: center; }
        .ulg-bottom-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: var(--pts-accent); margin-bottom: 1rem; }
        .ulg-bottom-h2 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 700;
          color: #ffffff; line-height: 1.25; margin-bottom: 0.75rem;
          max-width: 640px; margin-left: auto; margin-right: auto;
        }
        .ulg-bottom-sub {
          font-size: 0.97rem; color: rgba(255,255,255,0.62); line-height: 1.65;
          margin-bottom: 2rem; max-width: 520px; margin-left: auto; margin-right: auto;
        }
        .ulg-bottom-cta-row { display: flex; flex-wrap: wrap; gap: 0.85rem; justify-content: center; }
        .ulg-contacts { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.25rem 2rem; margin-top: 1.75rem; }
        .ulg-contact-item { display: flex; align-items: center; gap: 0.4rem; font-size: 0.9rem; color: rgba(255,255,255,0.72); }
        .ulg-contact-item a { color: inherit; text-decoration: none; }
        .ulg-contact-item a:hover { color: var(--pts-accent); }

        /* ── Mobile ── */
        @media(max-width: 768px) {
          .ulg-hero { padding: 0.95rem 1rem 2rem !important; }
          .ulg-cta-row, .ulg-bottom-cta-row { flex-direction: column; gap: 0.55rem; }
          .ulg-btn-wa, .ulg-btn-outline, .ulg-btn-forest {
            width: 100%; justify-content: center; min-height: 52px;
            font-size: 1rem; border-radius: 12px;
          }
          .ulg-section-alt, .ulg-section-white, .ulg-section-mint { padding: 2.25rem 1rem; }
          .ulg-section-dark { padding: 2.5rem 1rem; }
        }
      `}</style>

      <TopBar />
      <Navbar />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'USA IT Support', href: '/job-support-usa/' },
        { label: 'USA Legacy Since 2008' },
      ]} />

      {/* ── HERO ── */}
      <section className="ulg-hero">
        <div className="ulg-inner">
          <div className="ulg-hero-split">
            <div>
              <p className="ulg-eyebrow"><span aria-hidden>✦</span> USA-First · Since 2008</p>
              <h1 className="ulg-h1">Helping USA IT Professionals Survive Tech Career Pressure Since 2008</h1>
              <p className="ulg-hero-tagline">
                Not a new support desk. Not a generic course provider. A veteran IT support partner built around real USA job pressure — through every market cycle since 2008.
              </p>
              <p className="ulg-hero-para">
                From the Great Recession to COVID remote work to today&apos;s AI-era layoffs, Proxy Tech Support has stood with USA developers, consultants, contractors, OPT/CPT/H1B professionals, and remote IT workers when their careers were under pressure.
              </p>
              <div className="ulg-cta-row">
                <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="ulg-btn-wa">
                  <WAIcon />
                  Get USA Job Support
                </a>
                <a href="/proxy-interview-usa/" className="ulg-btn-outline">Get Proxy Interview Help</a>
                <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="ulg-btn-outline">
                  <WAIcon size={15} />
                  Talk on WhatsApp
                </a>
              </div>
            </div>
            <aside className="ulg-hero-metrics-card" aria-label="Trust metrics">
              <div className="ulg-metric-item">
                <span className="ulg-metric-stat">Since 2008</span>
                <span className="ulg-metric-label">USA Market Experience</span>
              </div>
              <div className="ulg-metric-item">
                <span className="ulg-metric-stat">1000+</span>
                <span className="ulg-metric-label">Developers Helped</span>
              </div>
              <div className="ulg-metric-item">
                <span className="ulg-metric-stat">5 Market Cycles</span>
                <span className="ulg-metric-label">Survived Together</span>
              </div>
              <div className="ulg-metric-item">
                <span className="ulg-metric-stat">50+</span>
                <span className="ulg-metric-label">Technologies Covered</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── TIMELINE OVERVIEW ── */}
      <section className="ulg-section-alt">
        <div className="ulg-inner">
          <p className="ulg-section-eyebrow">USA Tech Career Crisis History</p>
          <h2 className="ulg-h2">Five Market Cycles. One Mission.</h2>
          <p className="ulg-sub">
            Every time the USA tech market became unstable, IT professionals needed a partner who already understood the pressure. Here is where we have been.
          </p>
          <USALegacyTimeline variant="full" />
        </div>
      </section>

      {/* ── MARKET CONTEXT ── */}
      <section className="ulg-section-white">
        <div className="ulg-inner" style={{ maxWidth: 820 }}>
          <p className="ulg-section-eyebrow">Why This Matters</p>
          <h2 className="ulg-h2">The USA Tech Market Changed. Job Pressure Never Disappeared.</h2>
          <p className="ulg-body">
            Every decade since 2008, the USA tech market went through a structural shift. The tools changed. The hiring standards changed. The delivery expectations changed. But one thing stayed constant: IT professionals under pressure needed a reliable support partner — someone who had already seen the same kind of pressure before.
          </p>
          <p className="ulg-body">
            New support providers come and go. They appear during job market booms and disappear when demand drops. Proxy Tech Support did not start in 2021 or 2023. We have been supporting USA IT professionals through every difficult phase — before the buzzwords, before the layoff wave, and before the AI hype cycle.
          </p>
          <div className="ulg-callout">
            <strong>This is what legacy means in practice:</strong> when you contact Proxy Tech Support, you are reaching a team that has already helped professionals survive the same kind of pressure you are facing today. Not theory. Not templates. Real support built on real USA market experience.
          </div>
        </div>
      </section>

      {/* ── ERA SECTIONS ── */}
      <section className="ulg-era-section">
        <div className="ulg-inner" style={{ maxWidth: 820 }}>
          <span className="ulg-era-years">2008–2012</span>
          <h2 className="ulg-era-h3">USA Recession Pressure and Job Survival</h2>
          <p className="ulg-era-body">
            The 2008 financial crisis hit USA tech companies hard. Layoffs were widespread. Hiring froze. IT professionals who still had jobs faced enormous pressure to prove their value — faster delivery, less support from management, and higher interview bars for any new role they chased.
          </p>
          <p className="ulg-era-body">
            Consultants and contractors were especially exposed. Contract renewals became uncertain. USA clients cut vendor budgets. Developers who had always relied on team support suddenly found themselves isolated on high-stakes projects with no backup.
          </p>
          <p className="ulg-era-body">
            Proxy Tech Support was built in this environment. The founding problem was real: USA IT professionals needed live, discreet support during client calls, technical interviews, and production pressure — and they needed it from someone who understood the stakes.
          </p>
          <div className="ulg-era-grid">
            {[
              'Job survival pressure during USA tech layoffs',
              'Interview pressure for fewer available USA roles',
              'Consultant pressure with uncertain contract renewals',
              'Technical delivery pressure with reduced team support',
            ].map((item) => (
              <div key={item} className="ulg-era-card">
                <span className="ulg-era-check"><CheckIcon /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ulg-era-section">
        <div className="ulg-inner" style={{ maxWidth: 820 }}>
          <span className="ulg-era-years">2013–2018</span>
          <h2 className="ulg-era-h3">USA Consulting, Cloud, DevOps and Full-Stack Delivery</h2>
          <p className="ulg-era-body">
            The USA tech market recovered and accelerated. Cloud platforms — AWS, Azure, GCP — became mainstream. DevOps, microservices, agile delivery, and full-stack ownership became baseline expectations. USA clients demanded faster delivery cycles and broader technical ownership from every developer they hired.
          </p>
          <p className="ulg-era-body">
            Consultants and contractors working with USA clients faced a new kind of pressure: keep up with rapidly evolving technology stacks or risk losing the engagement. Engineers were expected to own cloud deployments, CI/CD pipelines, production monitoring, and full-stack delivery — often without the training time they needed.
          </p>
          <p className="ulg-era-body">
            Proxy Tech Support expanded its support across Java, .NET, React, Node.js, Python, AWS, Azure, databases, cloud infrastructure, and enterprise project delivery — covering the full range of USA client technical expectations.
          </p>
          <div className="ulg-era-grid">
            {[
              'Cloud migration and AWS/Azure production support for USA clients',
              'DevOps pipeline, CI/CD, and deployment support',
              'Full-stack delivery pressure across React, Node.js, Java, and .NET',
              'Agile sprint pressure and USA client delivery expectations',
            ].map((item) => (
              <div key={item} className="ulg-era-card">
                <span className="ulg-era-check"><CheckIcon /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ulg-era-section">
        <div className="ulg-inner" style={{ maxWidth: 820 }}>
          <span className="ulg-era-years">2019–2021</span>
          <h2 className="ulg-era-h3">COVID Remote Work Changed USA IT Jobs</h2>
          <p className="ulg-era-body">
            COVID shifted USA software teams to fully remote almost overnight. Zoom calls replaced office meetings. Slack channels replaced hallway conversations. Developers were suddenly expected to handle production ownership, client communication, and technical delivery — all from home, all on video, all visible.
          </p>
          <p className="ulg-era-body">
            For many USA IT professionals, especially those newer to remote-first work, this was one of the most isolating periods of their career. There was no one to turn to quickly during office hours. Asking for help on camera in front of the team felt risky. Production issues became public moments.
          </p>
          <p className="ulg-era-body">
            Proxy Tech Support became the silent partner for hundreds of developers during this period — providing real-time support during USA office hours, helping with live production issues, supporting remote standups, and giving developers the confidence to handle client calls without the fear of being publicly exposed.
          </p>
          <div className="ulg-era-grid">
            {[
              'Remote standup and video meeting confidence support',
              'USA office-hours production issue support from home',
              'Distributed team delivery and async coordination help',
              'Remote developer pressure during COVID work shift',
            ].map((item) => (
              <div key={item} className="ulg-era-card">
                <span className="ulg-era-check"><CheckIcon /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ulg-era-section">
        <div className="ulg-inner" style={{ maxWidth: 820 }}>
          <span className="ulg-era-years">2022–2024</span>
          <h2 className="ulg-era-h3">USA Layoffs, Tough Interviews and Contractor Pressure</h2>
          <p className="ulg-era-body">
            The USA tech layoff wave hit hard from late 2022 through 2024. Major companies cut thousands of roles. Mid-size firms froze hiring. Contractors and consultants scrambled to secure their next engagement.
          </p>
          <p className="ulg-era-body">
            With more candidates competing for fewer roles, USA technical interviews became significantly harder. Companies added extra rounds — system design, architecture deep dives, debugging sessions, behavioral panels, and coding assessments that went beyond standard LeetCode. Candidates needed to demonstrate genuine project experience, not just textbook knowledge.
          </p>
          <p className="ulg-era-body">
            Proxy Tech Support supported more interview candidates during this period than any prior era — helping developers prepare for multi-round USA technical interviews, providing real-time proxy interview guidance, and helping consultants keep their active USA engagements running while simultaneously job hunting.
          </p>
          <div className="ulg-era-grid">
            {[
              'Proxy interview support during USA layoff and job search pressure',
              'Multi-round technical interview preparation for USA roles',
              'Contractor support during USA engagement transitions',
              'Simultaneous job hunting and active project delivery support',
            ].map((item) => (
              <div key={item} className="ulg-era-card">
                <span className="ulg-era-check"><CheckIcon /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ulg-era-section">
        <div className="ulg-inner" style={{ maxWidth: 820 }}>
          <span className="ulg-era-years">2025–Today</span>
          <h2 className="ulg-era-h3">AI Era Pressure on USA Developers</h2>
          <p className="ulg-era-body">
            The AI era is not only changing tools. It is changing USA hiring expectations. USA developers are now expected to deliver faster, debug faster, explain architecture better, learn AI tools faster, and survive deeper technical interviews — all while dealing with AI automation fear and uncertainty about long-term career stability.
          </p>
          <p className="ulg-era-body">
            Interviewers now ask about AI tool usage. Clients expect AI-augmented delivery timelines. Performance reviews compare developers to AI-generated output benchmarks. The pressure to stay relevant has never been higher.
          </p>
          <p className="ulg-era-body">
            Proxy Tech Support helps USA developers navigate the AI era — providing real-time job support, interview coaching for AI-era technical questions, production issue help for AI-integrated systems, and career confidence support for developers facing AI automation anxiety.
          </p>
          <div className="ulg-era-grid">
            {[
              'AI-era technical interview preparation for USA roles',
              'Real-time support for AI-integrated production systems',
              'Career defense support against AI automation pressure',
              'USA developer job support in the age of AI hiring expectations',
            ].map((item) => (
              <div key={item} className="ulg-era-card">
                <span className="ulg-era-check"><CheckIcon /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY THIS LEGACY MATTERS ── */}
      <section className="ulg-section-alt">
        <div className="ulg-inner" style={{ maxWidth: 820 }}>
          <p className="ulg-section-eyebrow">Why Choose Us</p>
          <h2 className="ulg-h2">Why This Legacy Matters for USA IT Professionals</h2>
          <p className="ulg-body">
            USA IT professionals do not need a random provider they found last month. They need someone who already understands USA client culture, USA interview pressure, USA contractor dynamics, and USA tech market cycles.
          </p>
          <div className="ulg-checks">
            {[
              'We understand USA work culture — client calls, standup expectations, delivery timelines, and communication norms.',
              'We understand USA interview pressure — FAANG rounds, system design deep dives, behavioral screening, coding assessments.',
              'We understand H1B, OPT, and CPT pressure — the added career stakes that come with visa-tied employment.',
              'We understand USA remote work culture — the isolation, the visibility pressure, the home-office delivery reality.',
              'We have supported USA IT professionals through every major market disruption since 2008. We are not guessing.',
            ].map((item) => (
              <div key={item} className="ulg-check-item">
                <span className="ulg-check-icon"><CheckIcon /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOT A COURSE ── */}
      <section className="ulg-section-white">
        <div className="ulg-inner" style={{ maxWidth: 820 }}>
          <p className="ulg-section-eyebrow">What We Are</p>
          <h2 className="ulg-h2">Not a Course. Not Generic Mentoring.</h2>
          <p className="ulg-body">
            Proxy Tech Support is not a training institute. We do not run scheduled courses, pre-recorded videos, or generic mentoring sessions.
          </p>
          <p className="ulg-body">
            We provide real-time, live support during the moments that actually matter: when your USA client is on the call, when the production system is down, when the technical interview is happening, when the sprint review is tomorrow morning.
          </p>
          <div className="ulg-callout">
            Every engagement is handled by an in-house expert — not outsourced, not assigned to a junior, not replaced by AI chatbots. Real expert. Real-time. Exactly when you need it.
          </div>
          <p className="ulg-body">
            If your USA job, interview, client call, or project is under pressure, you do not need generic advice. You need support from people who have already seen multiple USA IT market cycles.
          </p>
        </div>
      </section>

      {/* ── GLOBAL SUPPORT ── */}
      <section className="ulg-section-mint">
        <div className="ulg-inner" style={{ maxWidth: 820 }}>
          <p className="ulg-section-eyebrow">Global Reach</p>
          <h2 className="ulg-h2">Also Supporting Canada, UK, Ireland, Australia and Global Remote Teams</h2>
          <p className="ulg-body">
            Proxy Tech Support is USA-first. Our support model, our expert network, and our experience base are all built around the USA tech market.
          </p>
          <p className="ulg-body">
            But we also support IT professionals in Canada, UK, Ireland, Australia, and global remote teams who work with USA-based clients or face similar interview and job pressure. Our secondary positioning line says it clearly:
          </p>
          <div className="ulg-callout">
            Built for USA job pressure first. Trusted by IT professionals across Canada, UK, Ireland, Australia, and global remote teams.
          </div>
          <div className="ulg-checks">
            {[
              'Canada: job support for Toronto, Vancouver, Calgary, Montreal developers',
              'UK: real-time support for London, Manchester, Edinburgh IT professionals',
              'Ireland: support for Dublin, Cork, Galway tech contractors and consultants',
              'Australia: aligned timezone support for Sydney, Melbourne, Brisbane developers',
            ].map((item) => (
              <div key={item} className="ulg-check-item">
                <span className="ulg-check-icon"><CheckIcon /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ulg-section-white">
        <div className="ulg-inner">
          <div className="ulg-faq-grid">
            <div>
              <p className="ulg-section-eyebrow">FAQ</p>
              <h2 className="ulg-h2">Common Questions About Our USA Legacy</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--pts-text-subtle)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Everything you need to know about our experience and approach.
              </p>
              <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="ulg-btn-wa" style={{ display: 'inline-flex', fontSize: '0.9rem' }}>
                <WAIcon size={15} />
                Ask on WhatsApp
              </a>
            </div>
            <LandingFAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ── */}
      <nav className="ulg-related" aria-label="Related pages">
        <div className="ulg-inner">
          <p className="ulg-related-label">Related USA Services &amp; Pages</p>
          <div className="ulg-related-row">
            {[
              { label: 'USA IT Job Support', href: '/job-support-usa/' },
              { label: 'USA Proxy Interview Support', href: '/proxy-interview-usa/' },
              { label: 'USA Career Crisis Support', href: '/usa-it-career-crisis-support/' },
              { label: 'USA AI Era Job Support', href: '/usa-ai-era-job-support/' },
              { label: 'USA Remote Work Support', href: '/usa-remote-work-it-support/' },
              { label: 'DevOps Job Support USA', href: '/devops-job-support-usa/' },
              { label: 'SRE Job Support USA', href: '/sre-job-support-usa/' },
              { label: 'Cloud Job Support USA', href: '/cloud-job-support-usa/' },
              { label: 'Java Job Support USA', href: '/java-job-support-usa/' },
              { label: 'React Job Support USA', href: '/react-job-support-usa/' },
              { label: 'Get Interview Scheduled', href: '/get-interview-scheduled-usa/' },
              { label: 'Production Issue Support', href: '/production-issue-support/' },
              { label: 'Read Our Blog', href: '/blog/' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="ulg-related-link">{l.label}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── BOTTOM CTA ── */}
      <section className="ulg-section-dark">
        <div className="ulg-bottom-inner">
          <p className="ulg-bottom-eyebrow">Get Real-Time USA Support</p>
          <h2 className="ulg-bottom-h2">
            When Your USA Job, Interview, or Project Is Under Pressure — We Have Already Seen This Before.
          </h2>
          <p className="ulg-bottom-sub">
            Since 2008, through five major USA tech market cycles. Real-time job support, proxy interview assistance, production issue help, and office-hours backup — when it matters most.
          </p>
          <div className="ulg-bottom-cta-row">
            <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="ulg-btn-wa">
              <WAIcon />
              Get USA Job Support Now
            </a>
            <a href="/proxy-interview-usa/" className="ulg-btn-outline">Get Proxy Interview Help</a>
          </div>
          <div className="ulg-contacts">
            <div className="ulg-contact-item">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <a href="tel:+919660614469">+91 96606 14469</a>
            </div>
            <div className="ulg-contact-item">
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
