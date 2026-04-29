import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Breadcrumb, { type BreadcrumbItem } from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import LandingFAQ from '@/components/LandingFAQ';
import ActionBanner from '@/components/ActionBanner';
import type { LandingPageConfig } from '@/data/landing-pages';

// ─── Breadcrumb derivation ────────────────────────────────────────────────────

const GEO_LABELS: Record<string, string> = {
  'job-support-usa': 'USA',
  'job-support-uk': 'UK',
  'job-support-canada': 'Canada',
  'job-support-australia': 'Australia',
  'job-support-europe': 'Europe',
  'job-support-germany': 'Germany',
  'job-support-singapore': 'Singapore',
  'job-support-newzealand': 'New Zealand',
};

function deriveBreadcrumbs(config: LandingPageConfig): BreadcrumbItem[] {
  const { slug, title } = config;
  const home: BreadcrumbItem = { label: 'Home', href: '/' };
  const shortTitle = title.includes(' – ') ? title.split(' – ')[0] : title.split(' & ')[0];

  // Geo pages: job-support-usa, job-support-uk …
  if (slug in GEO_LABELS) {
    return [home, { label: 'Locations', href: '/job-support-usa/' }, { label: `Job Support ${GEO_LABELS[slug]}` }];
  }

  // Tech pages: java-job-support-usa, nodejs-job-support-usa …
  if (!slug.startsWith('job-support-') && slug.includes('-job-support-')) {
    const tech = shortTitle.replace(/ Job Support.*/, '').trim();
    return [home, { label: 'Job Support', href: '/#services' }, { label: `${tech} Job Support` }];
  }

  // Proxy pages
  if (slug.startsWith('proxy-')) {
    return [home, { label: 'Proxy Support', href: '/proxy-interview-support/' }, { label: shortTitle }];
  }

  // Problem / catch-all pages
  return [home, { label: 'Developer Support' }, { label: shortTitle }];
}

const WA_LINK = 'https://wa.me/919660614469?text=Hi%2C%20I%20need%20IT%20job%20support%20or%20interview%20help';
const CALL_LINK = 'tel:+919660614469';

// ─── SVG helpers ────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg width={17} height={17} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function WAIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function BulletArrow() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ flexShrink: 0, marginTop: 2 }}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

// ─── CTA row ────────────────────────────────────────────────────────────────

function CTAButtons({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  return (
    <div className="lp-cta-row">
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="lp-btn-wa">
        <WAIcon />
        Get Instant Help Now
      </a>
      <a href={CALL_LINK} className={variant === 'dark' ? 'lp-btn-call-dark' : 'lp-btn-call-light'}>
        <PhoneIcon />
        Talk to Expert in 5 Minutes
      </a>
    </div>
  );
}

// ─── Trust strip data ────────────────────────────────────────────────────────

const trustItems = [
  { stat: '1000+', label: 'Developers Helped' },
  { stat: '24/7', label: 'Availability' },
  { stat: '95%', label: 'Success Rate' },
  { stat: '50+', label: 'Technologies' },
];

// ─── Main component ──────────────────────────────────────────────────────────

interface Props {
  config: LandingPageConfig;
}

export default function LandingPageTemplate({ config }: Props) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: config.title,
    description: config.description,
    provider: {
      '@type': 'Organization',
      name: 'Proxy Tech Support',
      url: 'https://proxytechsupport.com',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-96606-14469',
        contactType: 'customer service',
        availableLanguage: 'English',
      },
    },
    areaServed: ['US', 'GB', 'CA', 'AU', 'DE', 'SG', 'NZ', 'EU'],
    serviceType: 'IT Job Support and Proxy Interview Assistance',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <style>{`
        /* ── CTA buttons ───────────────────────────── */
        .lp-cta-row { display:flex; flex-wrap:wrap; gap:0.85rem; align-items:center; }
        .lp-btn-wa {
          display:inline-flex; align-items:center; gap:0.45rem;
          background:#25D366; color:#ffffff; font-weight:700; font-size:0.95rem;
          padding:0.85rem 1.6rem; border-radius:50px; text-decoration:none;
          transition:filter 0.2s,transform 0.2s; white-space:nowrap;
        }
        .lp-btn-wa:hover { filter:brightness(1.08); transform:translateY(-1px); }
        .lp-btn-call-dark {
          display:inline-flex; align-items:center; gap:0.45rem;
          background:transparent; color:#ffffff; font-weight:600; font-size:0.95rem;
          padding:0.85rem 1.6rem; border-radius:50px; text-decoration:none;
          border:1.5px solid rgba(255,255,255,0.75);
          transition:background 0.2s,border-color 0.2s,transform 0.2s; white-space:nowrap;
        }
        .lp-btn-call-dark:hover { background:rgba(255,255,255,0.1); border-color:#ffffff; transform:translateY(-1px); }
        .lp-btn-call-light {
          display:inline-flex; align-items:center; gap:0.45rem;
          background:#ffffff; color:var(--pts-forest); font-weight:600; font-size:0.95rem;
          padding:0.85rem 1.6rem; border-radius:50px; text-decoration:none;
          border:1.5px solid var(--pts-border);
          transition:box-shadow 0.2s,transform 0.2s; white-space:nowrap;
        }
        .lp-btn-call-light:hover { box-shadow:0 4px 14px rgba(0,0,0,0.1); transform:translateY(-1px); }

        /* ── Hero ─────────────────────────────────── */
        .lp-hero {
          position:relative; z-index:0;
          background:
            radial-gradient(ellipse 70% 55% at 5% 10%, rgba(0,223,130,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 95% 90%, rgba(3,98,76,0.2) 0%, transparent 50%),
            linear-gradient(160deg, #030f0f 0%, #0a1618 60%, #030f0f 100%);
          padding: clamp(3.5rem,7vw,6rem) 1rem clamp(3rem,6vw,5rem);
        }
        .lp-hero-inner { width:100%; max-width:var(--pts-content-max); margin:0 auto; }
        .lp-hero-eyebrow {
          display:inline-flex; align-items:center; gap:0.5rem;
          font-size:0.72rem; font-weight:700; letter-spacing:0.18em;
          text-transform:uppercase; color:var(--pts-accent); margin-bottom:1.25rem;
        }
        .lp-hero-h1 {
          font-family:Georgia,'Times New Roman',serif;
          font-size:clamp(1.75rem,4vw,2.9rem); font-weight:700; color:#ffffff;
          line-height:1.2; margin-bottom:0.85rem; max-width:720px;
        }
        .lp-hero-tagline { font-size:clamp(0.97rem,1.8vw,1.1rem); color:rgba(255,255,255,0.72); line-height:1.6; margin-bottom:1rem; max-width:640px; }
        .lp-hero-pain { font-size:0.97rem; color:rgba(255,255,255,0.65); line-height:1.75; margin-bottom:0.85rem; max-width:660px; }
        .lp-hero-variant { font-size:0.92rem; color:rgba(255,255,255,0.55); line-height:1.8; margin-bottom:2rem; max-width:660px; }
        .lp-trust-strip {
          display:flex; flex-wrap:wrap; gap:1.5rem 2.5rem;
          margin-top:2.5rem; padding-top:2rem; border-top:1px solid rgba(255,255,255,0.1);
        }
        .lp-trust-item { display:flex; flex-direction:column; gap:0.15rem; }
        .lp-trust-stat { font-size:1.55rem; font-weight:800; color:var(--pts-accent); line-height:1; }
        .lp-trust-label { font-size:0.78rem; color:rgba(255,255,255,0.55); font-weight:500; letter-spacing:0.04em; }

        /* ── Shared section containers ────────────── */
        /* position:relative + z-index:0 keeps sections below the sticky nav (z-index:1000) */
        .lp-section-alt  { position:relative; z-index:0; background:var(--pts-section-alt); padding:clamp(3rem,6vw,5rem) 1rem; }
        .lp-section-white{ position:relative; z-index:0; background:var(--pts-bg); padding:clamp(3rem,6vw,5rem) 1rem; }
        .lp-section-mint {
          position:relative; z-index:0;
          background:var(--pts-tech-header);
          border-top:1px solid rgba(0,223,130,0.2);
          border-bottom:1px solid rgba(0,223,130,0.2);
          padding:clamp(2.5rem,5vw,4rem) 1rem;
        }
        .lp-section-dark {
          position:relative; z-index:0;
          background:
            radial-gradient(ellipse 70% 55% at 0% 0%, rgba(0,223,130,0.14) 0%, transparent 55%),
            radial-gradient(ellipse 65% 50% at 100% 100%, rgba(3,98,76,0.18) 0%, transparent 50%),
            linear-gradient(180deg, var(--pts-surface-dark-raised) 0%, var(--pts-dark) 100%);
          padding:clamp(3.5rem,7vw,5.5rem) 1rem;
        }
        .lp-inner { width:100%; max-width:var(--pts-content-max); margin:0 auto; }

        .lp-eyebrow { font-size:0.72rem; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:var(--pts-accent); margin-bottom:0.6rem; }
        .lp-h2 {
          font-family:Georgia,'Times New Roman',serif;
          font-size:clamp(1.45rem,2.6vw,2rem); font-weight:700;
          color:var(--pts-text); line-height:1.25; margin-bottom:0.6rem;
        }
        .lp-sub { font-size:0.98rem; color:var(--pts-text-subtle); line-height:1.65; margin-bottom:2.25rem; max-width:560px; }

        /* ── Highlights grid (services) ────────────── */
        .lp-grid-3 { display:grid; gap:1.25rem; grid-template-columns:1fr; }
        @media(min-width:640px){ .lp-grid-3{ grid-template-columns:repeat(2,1fr); } }
        @media(min-width:1024px){ .lp-grid-3{ grid-template-columns:repeat(3,1fr); } }
        .lp-card {
          background:var(--pts-card-bg); border:1px solid var(--pts-border);
          border-radius:var(--pts-card-radius); padding:1.5rem;
          box-shadow:var(--pts-shadow-lp); transition:box-shadow 0.2s,transform 0.2s;
        }
        .lp-card:hover { box-shadow:var(--pts-shadow-lp-hover); transform:translateY(-2px); }
        .lp-card-dot {
          width:36px; height:36px; border-radius:10px;
          background:rgba(0,223,130,0.12);
          display:flex; align-items:center; justify-content:center;
          color:var(--pts-forest); margin-bottom:1rem;
        }
        .lp-card-title { font-size:1rem; font-weight:700; color:var(--pts-text); margin-bottom:0.5rem; line-height:1.35; }
        .lp-card-desc  { font-size:0.9rem; color:var(--pts-text-muted); line-height:1.7; }

        /* ── Use-cases section ──────────────────────── */
        .lp-usecases-grid { display:grid; gap:1rem; grid-template-columns:1fr; }
        @media(min-width:640px){ .lp-usecases-grid{ grid-template-columns:1fr 1fr; } }
        .lp-usecase-item {
          display:flex; gap:0.65rem; align-items:flex-start;
          background:var(--pts-card-bg); border:1px solid var(--pts-border);
          border-radius:10px; padding:0.85rem 1rem;
          font-size:0.9rem; color:var(--pts-text-muted); line-height:1.55;
        }
        .lp-usecase-icon {
          width:22px; height:22px; border-radius:6px; flex-shrink:0;
          background:rgba(0,223,130,0.13); color:var(--pts-forest);
          display:flex; align-items:center; justify-content:center; margin-top:1px;
        }

        /* ── Geo section ────────────────────────────── */
        .lp-geo-grid { display:grid; gap:2rem; align-items:center; }
        @media(min-width:1024px){ .lp-geo-grid{ grid-template-columns:1fr 1fr; } }
        .lp-geo-headline { font-size:1.05rem; color:var(--pts-text); line-height:1.7; font-weight:500; }
        .lp-geo-highlight { color:var(--pts-forest); font-weight:700; }
        .lp-geo-tz { margin-top:0.65rem; font-size:0.88rem; color:var(--pts-text-subtle); display:flex; align-items:center; gap:0.4rem; }
        .lp-geo-tech { margin-top:0.75rem; font-size:0.88rem; color:var(--pts-text-subtle); line-height:1.6; }
        .lp-checks { display:flex; flex-direction:column; gap:0.6rem; }
        .lp-check-item { display:flex; align-items:flex-start; gap:0.55rem; font-size:0.9rem; color:var(--pts-text-muted); line-height:1.5; }
        .lp-check-icon {
          width:20px; height:20px; border-radius:50%; flex-shrink:0;
          background:rgba(0,223,130,0.15); color:var(--pts-forest);
          display:flex; align-items:center; justify-content:center; margin-top:1px;
        }

        /* ── Proxy section ──────────────────────────── */
        .lp-proxy {
          position:relative; z-index:0;
          background: linear-gradient(135deg, rgba(3,98,76,0.06) 0%, rgba(0,223,130,0.06) 100%);
          border-top:1px solid rgba(0,223,130,0.15);
          border-bottom:1px solid rgba(0,223,130,0.15);
          padding:clamp(3rem,6vw,5rem) 1rem;
        }
        .lp-proxy-grid { display:grid; gap:2.5rem; align-items:start; }
        @media(min-width:1024px){ .lp-proxy-grid{ grid-template-columns:minmax(280px,420px) 1fr; } }
        .lp-proxy-h2 {
          font-family:Georgia,'Times New Roman',serif;
          font-size:clamp(1.3rem,2.4vw,1.8rem); font-weight:700;
          color:var(--pts-text); line-height:1.25; margin-bottom:0.85rem;
        }
        .lp-proxy-intro { font-size:0.95rem; color:var(--pts-text-muted); line-height:1.75; margin-bottom:1.5rem; }
        .lp-proxy-points { display:flex; flex-direction:column; gap:0.75rem; }
        .lp-proxy-point {
          display:flex; gap:0.65rem; align-items:flex-start;
          font-size:0.92rem; color:var(--pts-text-muted); line-height:1.55;
        }
        .lp-proxy-bullet {
          width:24px; height:24px; border-radius:7px; flex-shrink:0;
          background:rgba(3,98,76,0.1); color:var(--pts-forest);
          display:flex; align-items:center; justify-content:center; margin-top:1px;
        }
        .lp-proxy-cta {
          display:inline-flex; align-items:center; gap:0.45rem;
          background:var(--pts-forest); color:#ffffff;
          font-weight:700; font-size:0.92rem;
          padding:0.8rem 1.5rem; border-radius:50px; text-decoration:none;
          transition:background 0.2s,transform 0.2s; margin-top:1.5rem;
        }
        .lp-proxy-cta:hover { background:var(--pts-forest-hover); transform:translateY(-1px); }

        /* ── Mid CTA ──────────────────────────────── */
        .lp-mid-cta-inner { width:100%; max-width:680px; margin:0 auto; text-align:center; }
        .lp-mid-h2 {
          font-family:Georgia,'Times New Roman',serif;
          font-size:clamp(1.3rem,2.5vw,1.75rem); font-weight:700;
          color:var(--pts-text); line-height:1.3; margin-bottom:0.65rem;
        }
        .lp-mid-sub { font-size:0.97rem; color:var(--pts-text-subtle); margin-bottom:1.75rem; line-height:1.6; }
        .lp-mid-cta-inner .lp-cta-row { justify-content:center; }

        /* ── FAQ ──────────────────────────────────── */
        .lp-faq-grid { display:grid; gap:2.5rem; align-items:start; }
        @media(min-width:1024px){ .lp-faq-grid{ grid-template-columns:minmax(240px,340px) 1fr; gap:3rem; } }

        /* ── Related / internal links ─────────────── */
        .lp-related { background:var(--pts-section-alt); padding:1.75rem 1rem; border-top:1px solid var(--pts-border); }
        .lp-related-label { font-size:0.75rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--pts-text-subtle); margin-bottom:0.85rem; }
        .lp-related-row { display:flex; flex-wrap:wrap; gap:0.5rem; }
        .lp-related-link {
          font-size:0.82rem; color:var(--pts-forest); text-decoration:none;
          font-weight:600; border:1px solid var(--pts-border); border-radius:6px;
          padding:0.3rem 0.65rem; background:var(--pts-card-bg);
          transition:border-color 0.15s,color 0.15s;
        }
        .lp-related-link:hover { border-color:var(--pts-accent); color:var(--pts-forest-hover); }

        /* ── Bottom dark CTA ──────────────────────── */
        .lp-bottom-inner { width:100%; max-width:var(--pts-content-max); margin:0 auto; text-align:center; }
        .lp-bottom-eyebrow { font-size:0.72rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:var(--pts-accent); margin-bottom:1rem; }
        .lp-bottom-h2 {
          font-family:Georgia,'Times New Roman',serif;
          font-size:clamp(1.5rem,3vw,2.2rem); font-weight:700;
          color:#ffffff; line-height:1.25; margin-bottom:0.75rem;
          max-width:620px; margin-left:auto; margin-right:auto;
        }
        .lp-bottom-sub { font-size:0.97rem; color:rgba(255,255,255,0.62); line-height:1.65; margin-bottom:2rem; max-width:520px; margin-left:auto; margin-right:auto; }
        .lp-section-dark .lp-cta-row { justify-content:center; }
        .lp-contacts { display:flex; flex-wrap:wrap; justify-content:center; gap:1.25rem 2rem; margin-top:1.75rem; }
        .lp-contact-item { display:flex; align-items:center; gap:0.4rem; font-size:0.9rem; color:rgba(255,255,255,0.72); }
        .lp-contact-item a { color:inherit; text-decoration:none; }
        .lp-contact-item a:hover { color:var(--pts-accent); }

        /* ── Mobile overrides (≤768px) ──────────────────────────────── */
        @media(max-width:768px){
          /* Compact hero padding — H1 visible above the fold */
          .lp-hero { padding:1.75rem 1rem 2rem !important; }

          /* Full-width, easy-tap CTA buttons */
          .lp-cta-row { flex-direction:column; gap:0.55rem; }
          .lp-btn-wa, .lp-btn-call-dark, .lp-btn-call-light {
            width:100%; justify-content:center; min-height:52px;
            font-size:1rem; border-radius:12px;
          }

          /* Compact section padding */
          .lp-section-alt, .lp-section-white, .lp-section-mint { padding:2.25rem 1rem; }
          .lp-section-dark, .lp-proxy { padding:2.5rem 1rem; }

          /* Readable H2 on small screens */
          .lp-h2 { font-size:clamp(1.25rem,5vw,1.6rem); margin-bottom:0.5rem; }
          .lp-hero-h1 { font-size:clamp(1.5rem,6vw,2.2rem) !important; }

          /* Ensure touch targets on FAQ */
          .lp-faq-grid button { min-height:52px; }

          /* Related links wrap naturally */
          .lp-related { padding:1.25rem 1rem; }
          .lp-related-link { min-height:40px; align-items:center; }

          /* Trust strip stacks 2-up */
          .lp-trust-strip { gap:1rem 2rem; }
          .lp-trust-stat { font-size:1.25rem; }
        }
      `}</style>

      <TopBar />
      <Navbar />
      <Breadcrumb items={deriveBreadcrumbs(config)} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="lp-hero">
        <div className="lp-hero-inner">
          <p className="lp-hero-eyebrow"><span aria-hidden>✦</span> Expert IT Job Support &amp; Proxy Interview Assistance</p>
          <h1 className="lp-hero-h1">{config.h1}</h1>
          <p className="lp-hero-tagline">{config.tagline}</p>
          <p className="lp-hero-pain">{config.painIntro}</p>
          {config.heroVariant && (
            <p className="lp-hero-variant">{config.heroVariant}</p>
          )}
          <CTAButtons variant="dark" />
          <div className="lp-trust-strip" aria-label="Trust indicators">
            {trustItems.map((t) => (
              <div key={t.stat} className="lp-trust-item">
                <span className="lp-trust-stat">{t.stat}</span>
                <span className="lp-trust-label">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES / HIGHLIGHTS ─────────────────────────────────────────── */}
      <section className="lp-section-alt">
        <div className="lp-inner">
          <p className="lp-eyebrow">What We Offer</p>
          <h2 className="lp-h2">Expert Support for Every IT Challenge</h2>
          <p className="lp-sub">
            From daily job support to emergency production fixes, proxy interview guidance, and interview coaching — we have the expert for your specific need.
          </p>
          <div className="lp-grid-3">
            {config.highlights.map((h, i) => (
              <div key={i} className="lp-card">
                <div className="lp-card-dot" aria-hidden><CheckIcon /></div>
                <h3 className="lp-card-title">{h.title}</h3>
                <p className="lp-card-desc">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES (unique per page) ───────────────────────────────────── */}
      {config.useCasesSection && (
        <section className="lp-section-white">
          <div className="lp-inner">
            <p className="lp-eyebrow">Real Situations</p>
            <h2 className="lp-h2">{config.useCasesSection.title}</h2>
            <p className="lp-sub">
              These are the real-world situations our experts resolve every day — for job support and interview assistance.
            </p>
            <div className="lp-usecases-grid">
              {config.useCasesSection.cases.map((c, i) => (
                <div key={i} className="lp-usecase-item">
                  <span className="lp-usecase-icon"><BulletArrow /></span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── GEO / GLOBAL REACH ────────────────────────────────────────────── */}
      <section className="lp-section-alt" style={{ borderTop: '1px solid var(--pts-border)', borderBottom: '1px solid var(--pts-border)' }}>
        <div className="lp-inner">
          <div className="lp-geo-grid">
            <div>
              <p className="lp-eyebrow">Global Reach</p>
              <p className="lp-geo-headline">
                <span className="lp-geo-highlight">{config.geoLine}</span>
              </p>
              <p className="lp-geo-tz">
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                {config.timezoneNote}
              </p>
              {config.techSnippet && (
                <p className="lp-geo-tech">{config.techSnippet}</p>
              )}
            </div>
            <div className="lp-checks">
              {[
                'In-house experts — no sub-contracting or outsourcing',
                '24/7 availability for urgent job support and interview needs',
                'Confidential & professional — NDA available on request',
                'Same-day onboarding for most job support and interview cases',
                'Combined job support + proxy interview service available',
              ].map((item) => (
                <div key={item} className="lp-check-item">
                  <span className="lp-check-icon"><CheckIcon /></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROXY SECTION (unique per page) ──────────────────────────────── */}
      {config.proxySection && (
        <section className="lp-proxy">
          <div className="lp-inner">
            <div className="lp-proxy-grid">
              <div>
                <p className="lp-eyebrow">Proxy &amp; Interview Support</p>
                <h2 className="lp-proxy-h2">{config.proxySection.title}</h2>
                <p className="lp-proxy-intro">{config.proxySection.intro}</p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="lp-proxy-cta">
                  <WAIcon size={16} />
                  Get Proxy Support Now
                </a>
              </div>
              <div className="lp-proxy-points">
                {config.proxySection.points.map((pt, i) => (
                  <div key={i} className="lp-proxy-point">
                    <span className="lp-proxy-bullet"><CheckIcon size={13} /></span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── MID-PAGE CTA ──────────────────────────────────────────────────── */}
      <section className="lp-section-mint">
        <div className="lp-mid-cta-inner">
          <h2 className="lp-mid-h2">Ready to Get Expert Help? Talk to Us Now.</h2>
          <p className="lp-mid-sub">
            Join 1000+ developers who resolved their job challenges and cleared interviews with real-time expert support.
          </p>
          <CTAButtons variant="light" />
        </div>
      </section>

      {/* ── ACTION TRIGGER BANNER ─────────────────────────────────────────── */}
      <section className="lp-section-white" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="lp-inner">
          <ActionBanner
            headline="Need real-time IT job support or interview help? Our experts are available 24/7 — USA, UK, Canada & worldwide."
            waMessage="Hi%2C%20I%20need%20IT%20job%20support%20or%20interview%20help"
          />
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="lp-section-white">
        <div className="lp-inner">
          <div className="lp-faq-grid">
            <div>
              <p className="lp-eyebrow">FAQ</p>
              <h2 className="lp-h2">Frequently Asked Questions</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--pts-text-subtle)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Everything you need to know before getting started with job support or interview assistance.
              </p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="lp-btn-wa" style={{ display: 'inline-flex', fontSize: '0.9rem' }}>
                <WAIcon />
                Ask on WhatsApp
              </a>
            </div>
            <LandingFAQ faqs={config.faqs} />
          </div>
        </div>
      </section>

      {/* ── GEO-SPECIFIC INTERNAL LINKS (replaces generic nav) ────────────── */}
      {config.relatedLinks ? (
        <nav className="lp-related" aria-label="Related pages">
          <div className="lp-inner">
            <p className="lp-related-label">Related Services &amp; Pages</p>
            <div className="lp-related-row">
              {config.relatedLinks.geoLinks.map((l) => (
                <a key={l.href} href={l.href} className="lp-related-link">{l.label}</a>
              ))}
              {config.relatedLinks.techLinks.map((l) => (
                <a key={l.href} href={l.href} className="lp-related-link">{l.label}</a>
              ))}
              <a href={config.relatedLinks.problemLink.href} className="lp-related-link">
                {config.relatedLinks.problemLink.label}
              </a>
              <a href={config.relatedLinks.proxyLink.href} className="lp-related-link">
                {config.relatedLinks.proxyLink.label}
              </a>
              {config.relatedLinks.blogLink && (
                <a href={config.relatedLinks.blogLink.href} className="lp-related-link">
                  {config.relatedLinks.blogLink.label}
                </a>
              )}
            </div>
          </div>
        </nav>
      ) : (
        <nav className="lp-related" aria-label="Related services">
          <div className="lp-inner">
            <p className="lp-related-label">Explore More Services</p>
            <div className="lp-related-row">
              {[
                { label: 'Interview Questions', href: '/interviews/' },
                { label: 'Java Job Support', href: '/java-technologies-job-support/' },
                { label: 'DevOps Job Support', href: '/devops-job-support/' },
                { label: 'React Job Support', href: '/react-job-support/' },
                { label: 'AWS Job Support', href: '/aws-job-support/' },
                { label: 'Proxy Interview Support', href: '/proxy-interview-support/' },
                { label: 'Read Our Blog', href: '/blog/' },
              ].map((l) => (
                <a key={l.href} href={l.href} className="lp-related-link">{l.label}</a>
              ))}
            </div>
          </div>
        </nav>
      )}

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <section className="lp-section-dark">
        <div className="lp-bottom-inner">
          <p className="lp-bottom-eyebrow">Get Started Today</p>
          <h2 className="lp-bottom-h2">Stop Struggling. Get Expert IT Job Support &amp; Interview Help Right Now.</h2>
          <p className="lp-bottom-sub">
            Real developers. Real solutions. Job support and proxy interview assistance available 24/7 across USA, UK, Canada, Australia, Europe, Germany, Singapore, and New Zealand.
          </p>
          <CTAButtons variant="dark" />
          <div className="lp-contacts">
            <div className="lp-contact-item">
              <PhoneIcon />
              <a href={CALL_LINK}>+91 96606 14469</a>
            </div>
            <div className="lp-contact-item">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a href="mailto:support@proxytechsupport.com">support@proxytechsupport.com</a>
            </div>
          </div>
          <p style={{ marginTop: '1.75rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            Proxy Tech Support provides interview preparation, technical guidance, and job support services. All services are advisory and educational in nature.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
