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
  title: 'USA IT Career Crisis Support for Developers, Consultants & Job Seekers',
  description:
    'Real-time USA IT career crisis support for developers facing layoffs, job pressure, production issues, technical interviews, proxy interview needs, client calls, and project delivery challenges.',
  canonical: 'https://proxytechsupport.com/usa-it-career-crisis-support/',
  keywords: [
    'USA IT job survival support', 'USA developer job support', 'USA IT job support',
    'USA proxy interview assistance', 'USA technical interview support',
    'USA production support help', 'USA remote developer support',
    'H1B job support USA', 'OPT CPT interview support USA',
    'USA IT career crisis support', 'USA job support for developers',
  ],
  ogTitle: 'USA IT Career Crisis Support | Proxy Tech Support',
  ogDescription:
    'When the USA IT market becomes unstable, Proxy Tech Support helps developers, consultants, and contractors stay employed. Real-time job support, proxy interview assistance, and production help.',
});

const faqs = [
  {
    question: 'What exactly is USA IT career crisis support?',
    answer:
      'USA IT career crisis support means real-time, live help during the moments when your job, project, or interview is under genuine pressure. This includes: live coding support during production issues, proxy interview guidance during technical interview rounds, real-time help during client calls, sprint delivery support when you are behind, and career confidence support when you are facing layoff pressure or job search anxiety.',
  },
  {
    question: 'Who needs this kind of support?',
    answer:
      'USA-based IT professionals who are facing high-pressure moments in their career: developers struggling with client delivery expectations, consultants handling difficult USA client relationships, OPT/CPT candidates under visa-tied job pressure, H1B professionals who cannot afford job instability, freshers trying to survive their first USA tech role, and experienced developers facing unexpected layoffs or interview rejection.',
  },
  {
    question: 'Do you provide proxy interview support for USA technical interviews?',
    answer:
      'Yes. Proxy Tech Support provides real-time, discreet guidance during live USA technical interview rounds — coding rounds, system design sessions, architecture discussions, and behavioral screenings. We help candidates think clearly under pressure and demonstrate the technical depth USA hiring teams expect.',
  },
  {
    question: 'Can you help with production issues during USA office hours?',
    answer:
      'Yes. We provide real-time production issue support for USA developers — helping debug, diagnose, and resolve live production problems during USA office hours. We cover Java, Python, .NET, React, Node.js, AWS, Azure, GCP, DevOps, Kubernetes, and 50+ other technologies.',
  },
  {
    question: 'Is this service confidential?',
    answer:
      'Completely confidential. All sessions are private. We do not share your details with third parties. NDAs are available on request. Every engagement is handled with full professional discretion.',
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
  name: 'USA IT Career Crisis Support for Developers, Consultants & Job Seekers',
  description:
    'Real-time USA IT career crisis support for developers facing layoffs, job pressure, production issues, technical interviews, proxy interview needs, client calls, and project delivery challenges.',
  url: 'https://proxytechsupport.com/usa-it-career-crisis-support/',
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
    { '@type': 'ListItem', position: 3, name: 'USA Career Crisis Support', item: 'https://proxytechsupport.com/usa-it-career-crisis-support/' },
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

const crisisScenarios = [
  { label: 'USA client calls that expose gaps in technical knowledge' },
  { label: 'Production bugs during USA business hours with no backup' },
  { label: 'Technical interview rounds with no preparation time left' },
  { label: 'Proxy interview needs for live USA technical rounds' },
  { label: 'New project onboarding with unfamiliar codebase' },
  { label: 'Cloud and DevOps blockers during USA delivery windows' },
  { label: 'Daily standups where you cannot explain your progress' },
  { label: 'Layoff pressure and simultaneous interview hunting' },
  { label: 'Contractor pressure during USA engagement transitions' },
  { label: 'AI automation fear affecting performance and confidence' },
];

const whoWeHelp = [
  {
    title: 'Developers Struggling on USA Projects',
    body: 'Developers assigned to complex USA client projects with no team backup, facing delivery pressure they cannot handle alone.',
  },
  {
    title: 'Consultants and Contractors',
    body: 'IT consultants and contractors working with USA clients who need to stay competitive and keep their engagement active during market uncertainty.',
  },
  {
    title: 'OPT, CPT, and H1B Professionals',
    body: 'Visa-tied IT professionals in the USA for whom job stability is non-negotiable. We understand the added pressure and support accordingly.',
  },
  {
    title: 'Interview Candidates',
    body: 'Developers preparing for or currently navigating USA technical interview rounds — coding, system design, behavioral, and proxy interview scenarios.',
  },
  {
    title: 'Freshers and Early-Career Developers',
    body: 'Junior developers in their first USA IT roles facing steep learning curves, client pressure, and performance expectations without senior support.',
  },
  {
    title: 'Experienced Developers Facing Layoffs',
    body: 'Senior developers re-entering the USA job market after layoffs, needing interview support and project readiness help after time away.',
  },
];

export default function USACareerCrisisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{`
        .ucc-inner { width: 100%; max-width: var(--pts-content-max); margin: 0 auto; }
        .ucc-hero {
          position: relative; z-index: 0;
          background:
            radial-gradient(ellipse 70% 55% at 5% 10%, rgba(0,223,130,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 95% 90%, rgba(3,98,76,0.2) 0%, transparent 50%),
            linear-gradient(160deg, #030f0f 0%, #0a1618 60%, #030f0f 100%);
          padding: clamp(3.5rem, 7vw, 6rem) 1rem clamp(3rem, 6vw, 5rem);
        }
        .ucc-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--pts-accent); margin-bottom: 1.1rem;
        }
        .ucc-h1 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.75rem, 4vw, 2.85rem); font-weight: 700; color: #ffffff;
          line-height: 1.2; margin-bottom: 1rem; max-width: 820px;
        }
        .ucc-hero-para { font-size: clamp(0.97rem, 1.8vw, 1.05rem); color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 0.85rem; max-width: 700px; }
        .ucc-cta-row { display: flex; flex-wrap: wrap; gap: 0.85rem; align-items: center; margin-top: 2rem; }
        .ucc-btn-wa {
          display: inline-flex; align-items: center; gap: 0.45rem;
          background: #25D366; color: #ffffff; font-weight: 700; font-size: 0.95rem;
          padding: 0.85rem 1.6rem; border-radius: 50px; text-decoration: none;
          transition: filter 0.2s, transform 0.2s; white-space: nowrap;
        }
        .ucc-btn-wa:hover { filter: brightness(1.08); transform: translateY(-1px); }
        .ucc-btn-outline {
          display: inline-flex; align-items: center; gap: 0.45rem;
          background: transparent; color: #ffffff; font-weight: 600; font-size: 0.95rem;
          padding: 0.85rem 1.6rem; border-radius: 50px; text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.65);
          transition: background 0.2s, transform 0.2s; white-space: nowrap;
        }
        .ucc-btn-outline:hover { background: rgba(255,255,255,0.1); transform: translateY(-1px); }

        .ucc-section-alt  { position: relative; z-index: 0; background: var(--pts-section-alt); padding: clamp(3rem, 6vw, 5rem) 1rem; }
        .ucc-section-white{ position: relative; z-index: 0; background: var(--pts-bg); padding: clamp(3rem, 6vw, 5rem) 1rem; }
        .ucc-section-mint {
          position: relative; z-index: 0; background: var(--pts-tech-header);
          border-top: 1px solid rgba(0,223,130,0.2); border-bottom: 1px solid rgba(0,223,130,0.2);
          padding: clamp(2.5rem, 5vw, 4rem) 1rem;
        }
        .ucc-section-dark {
          position: relative; z-index: 0;
          background:
            radial-gradient(ellipse 70% 55% at 0% 0%, rgba(0,223,130,0.14) 0%, transparent 55%),
            radial-gradient(ellipse 65% 50% at 100% 100%, rgba(3,98,76,0.18) 0%, transparent 50%),
            linear-gradient(180deg, var(--pts-surface-dark-raised) 0%, var(--pts-dark) 100%);
          padding: clamp(3.5rem, 7vw, 5.5rem) 1rem;
        }

        .ucc-section-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--pts-accent); margin-bottom: 0.6rem; }
        .ucc-h2 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.45rem, 2.6vw, 2rem); font-weight: 700;
          color: var(--pts-text); line-height: 1.25; margin-bottom: 0.75rem;
        }
        .ucc-h2-dark {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.45rem, 2.6vw, 2rem); font-weight: 700;
          color: #ffffff; line-height: 1.25; margin-bottom: 0.75rem;
        }
        .ucc-sub { font-size: 0.98rem; color: var(--pts-text-subtle); line-height: 1.65; margin-bottom: 2rem; max-width: 580px; }
        .ucc-body { font-size: 0.97rem; color: var(--pts-text-muted); line-height: 1.8; margin-bottom: 1rem; }
        .ucc-callout {
          background: rgba(0,223,130,0.06); border-left: 3px solid var(--pts-accent);
          border-radius: 0 10px 10px 0; padding: 1.25rem 1.5rem;
          font-size: 0.97rem; color: var(--pts-text-muted); line-height: 1.75; margin: 1.5rem 0;
        }
        .ucc-callout strong { color: var(--pts-forest); }

        .ucc-scenarios-grid { display: grid; gap: 0.75rem; grid-template-columns: 1fr; }
        @media(min-width: 640px) { .ucc-scenarios-grid { grid-template-columns: 1fr 1fr; } }
        .ucc-scenario {
          display: flex; gap: 0.65rem; align-items: flex-start;
          background: var(--pts-card-bg); border: 1px solid var(--pts-border);
          border-radius: 10px; padding: 0.85rem 1rem;
          font-size: 0.9rem; color: var(--pts-text-muted); line-height: 1.55;
        }
        .ucc-scenario-icon {
          width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
          background: rgba(0,223,130,0.12); color: var(--pts-forest);
          display: flex; align-items: center; justify-content: center; margin-top: 1px;
        }

        .ucc-cards-grid { display: grid; gap: 1.25rem; grid-template-columns: 1fr; }
        @media(min-width: 640px) { .ucc-cards-grid { grid-template-columns: repeat(2, 1fr); } }
        @media(min-width: 1024px) { .ucc-cards-grid { grid-template-columns: repeat(3, 1fr); } }
        .ucc-card {
          background: var(--pts-card-bg); border: 1px solid var(--pts-border);
          border-radius: var(--pts-card-radius); padding: 1.5rem;
          box-shadow: var(--pts-shadow-lp); transition: box-shadow 0.2s, transform 0.2s;
        }
        .ucc-card:hover { box-shadow: var(--pts-shadow-lp-hover); transform: translateY(-2px); }
        .ucc-card-title { font-size: 1rem; font-weight: 700; color: var(--pts-text); margin-bottom: 0.5rem; line-height: 1.35; }
        .ucc-card-body { font-size: 0.9rem; color: var(--pts-text-muted); line-height: 1.7; }

        .ucc-faq-grid { display: grid; gap: 2.5rem; align-items: start; }
        @media(min-width: 1024px) { .ucc-faq-grid { grid-template-columns: minmax(240px, 340px) 1fr; gap: 3rem; } }

        .ucc-related { background: var(--pts-section-alt); padding: 1.75rem 1rem; border-top: 1px solid var(--pts-border); }
        .ucc-related-label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--pts-text-subtle); margin-bottom: 0.85rem; }
        .ucc-related-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .ucc-related-link {
          font-size: 0.82rem; color: var(--pts-forest); text-decoration: none;
          font-weight: 600; border: 1px solid var(--pts-border); border-radius: 6px;
          padding: 0.3rem 0.65rem; background: var(--pts-card-bg);
          transition: border-color 0.15s, color 0.15s;
        }
        .ucc-related-link:hover { border-color: var(--pts-accent); color: var(--pts-forest-hover); }

        .ucc-bottom-inner { width: 100%; max-width: var(--pts-content-max); margin: 0 auto; text-align: center; }
        .ucc-bottom-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: var(--pts-accent); margin-bottom: 1rem; }
        .ucc-bottom-h2 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 700;
          color: #ffffff; line-height: 1.25; margin-bottom: 0.75rem;
          max-width: 640px; margin-left: auto; margin-right: auto;
        }
        .ucc-bottom-sub { font-size: 0.97rem; color: rgba(255,255,255,0.62); line-height: 1.65; margin-bottom: 2rem; max-width: 520px; margin-left: auto; margin-right: auto; }
        .ucc-bottom-cta-row { display: flex; flex-wrap: wrap; gap: 0.85rem; justify-content: center; }
        .ucc-contacts { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.25rem 2rem; margin-top: 1.75rem; }
        .ucc-contact-item { display: flex; align-items: center; gap: 0.4rem; font-size: 0.9rem; color: rgba(255,255,255,0.72); }
        .ucc-contact-item a { color: inherit; text-decoration: none; }
        .ucc-contact-item a:hover { color: var(--pts-accent); }

        /* ── Hero split (metrics card right on desktop) ── */
        .ucc-hero-split { display: grid; grid-template-columns: 1fr; gap: clamp(1.35rem,3vw,2.25rem); align-items: start; }
        @media(min-width: 1024px) {
          .ucc-hero-split { grid-template-columns: minmax(0,1fr) minmax(270px,360px); column-gap: clamp(1.75rem,3vw,2.75rem); }
        }
        .ucc-hero-metrics-card {
          display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;
          padding: 1.2rem 1rem; border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.07); align-self: start;
        }
        @media(min-width: 1024px) {
          .ucc-hero-metrics-card { position: sticky; top: calc(var(--pts-sticky-header-offset) + 0.5rem); padding: 1.35rem 1.15rem; gap: 0.85rem; }
        }
        .ucc-metric-item { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09); border-radius: 10px; padding: 0.85rem 0.75rem; display: flex; flex-direction: column; gap: 0.2rem; }
        .ucc-metric-stat { font-size: 1.45rem; font-weight: 800; color: var(--pts-accent); line-height: 1; }
        .ucc-metric-label { font-size: 0.73rem; color: rgba(255,255,255,0.52); font-weight: 500; letter-spacing: 0.03em; line-height: 1.3; }
        @media(max-width: 768px) {
          .ucc-hero { padding: 0.95rem 1rem 2rem !important; }
          .ucc-cta-row, .ucc-bottom-cta-row { flex-direction: column; gap: 0.55rem; }
          .ucc-btn-wa, .ucc-btn-outline {
            width: 100%; justify-content: center; min-height: 52px;
            font-size: 1rem; border-radius: 12px;
          }
          .ucc-section-alt, .ucc-section-white, .ucc-section-mint { padding: 2.25rem 1rem; }
          .ucc-section-dark { padding: 2.5rem 1rem; }
        }
      `}</style>

      <TopBar />
      <Navbar />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'USA IT Support', href: '/job-support-usa/' },
        { label: 'USA Career Crisis Support' },
      ]} />

      {/* ── HERO ── */}
      <section className="ucc-hero">
        <div className="ucc-inner">
          <div className="ucc-hero-split">
            <div>
              <p className="ucc-eyebrow"><span aria-hidden>✦</span> USA IT Career Support · Since 2008</p>
              <h1 className="ucc-h1">When the USA IT Market Becomes Unstable, We Help Engineers Stay Employed</h1>
              <p className="ucc-hero-para">
                Many USA IT professionals do not fail because they are weak. They fail because they are alone during high-pressure moments. Proxy Tech Support provides real-time support exactly when that pressure hits.
              </p>
              <p className="ucc-hero-para">
                Since 2008, we have helped developers, consultants, contractors, OPT/CPT/H1B professionals, and remote IT workers survive every major USA tech market crisis.
              </p>
              <div className="ucc-cta-row">
                <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="ucc-btn-wa">
                  <WAIcon />
                  Get USA Job Support Now
                </a>
                <a href="/proxy-interview-usa/" className="ucc-btn-outline">Get Proxy Interview Help</a>
              </div>
            </div>
            <aside className="ucc-hero-metrics-card" aria-label="Trust metrics">
              <div className="ucc-metric-item">
                <span className="ucc-metric-stat">Since 2008</span>
                <span className="ucc-metric-label">USA Market Experience</span>
              </div>
              <div className="ucc-metric-item">
                <span className="ucc-metric-stat">1000+</span>
                <span className="ucc-metric-label">Professionals Helped</span>
              </div>
              <div className="ucc-metric-item">
                <span className="ucc-metric-stat">5 Crises</span>
                <span className="ucc-metric-label">Navigated Together</span>
              </div>
              <div className="ucc-metric-item">
                <span className="ucc-metric-stat">Same Day</span>
                <span className="ucc-metric-label">Support Start</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── CRISIS SCENARIOS ── */}
      <section className="ucc-section-alt">
        <div className="ucc-inner">
          <p className="ucc-section-eyebrow">Where Careers Break Down</p>
          <h2 className="ucc-h2">USA IT Professionals Don&apos;t Fail Because They Are Weak</h2>
          <p className="ucc-sub">
            They fail because they are alone when it matters most. These are the real USA career crisis moments where Proxy Tech Support provides immediate help.
          </p>
          <div className="ucc-scenarios-grid">
            {crisisScenarios.map((s) => (
              <div key={s.label} className="ucc-scenario">
                <span className="ucc-scenario-icon"><CheckIcon /></span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="ucc-callout" style={{ marginTop: '2rem' }}>
            <strong>The pattern is always the same:</strong> high-pressure moment, no one to turn to, job or interview at stake. Proxy Tech Support breaks that pattern with real-time, live expert support — available during USA office hours, 24/7 for urgent situations.
          </div>
        </div>
      </section>

      {/* ── WHO WE HELP ── */}
      <section className="ucc-section-white">
        <div className="ucc-inner">
          <p className="ucc-section-eyebrow">Who We Help</p>
          <h2 className="ucc-h2">USA IT Career Crisis Support Is For You If...</h2>
          <p className="ucc-sub">
            We work with a wide range of USA IT professionals — from freshers to senior engineers to contractors and visa-tied workers.
          </p>
          <div className="ucc-cards-grid">
            {whoWeHelp.map((card) => (
              <div key={card.title} className="ucc-card">
                <h3 className="ucc-card-title">{card.title}</h3>
                <p className="ucc-card-body">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE PROVIDE ── */}
      <section className="ucc-section-alt">
        <div className="ucc-inner" style={{ maxWidth: 820 }}>
          <p className="ucc-section-eyebrow">What We Provide</p>
          <h2 className="ucc-h2">Real-Time USA IT Career Crisis Support</h2>
          <p className="ucc-body">
            Proxy Tech Support does not sell courses or recorded videos. We provide live, real-time support from in-house experts — the moment you need it, during the actual crisis.
          </p>
          <p className="ucc-body">
            This means: our expert joins your session, your call, your interview, or your production environment in real-time. They help you navigate the pressure, solve the problem, and come out the other side with your job, engagement, or role intact.
          </p>
          <div className="ucc-callout">
            <strong>USA IT job survival support</strong> — for developers, consultants, OPT/CPT/H1B professionals, contractors, freshers, and experienced engineers who need live, expert backup when the pressure is real.
          </div>
          <p className="ucc-body">
            Covered scenarios: USA client calls, production issue support, USA technical interview support, USA proxy interview assistance, USA remote developer support, sprint delivery pressure, onboarding to unfamiliar codebases, daily standup preparation, and layoff-pressure job hunting.
          </p>
        </div>
      </section>

      {/* ── LEGACY TRUST ── */}
      <section className="ucc-section-mint">
        <div className="ucc-inner" style={{ maxWidth: 820 }}>
          <p className="ucc-section-eyebrow">Why Trust Us</p>
          <h2 className="ucc-h2">Built on 17+ Years of USA IT Job Pressure Experience</h2>
          <p className="ucc-body">
            Proxy Tech Support has been supporting USA IT professionals since 2008. We have been through the Great Recession job survival pressure, the cloud and consulting era delivery demands, the COVID remote work shift, the 2022–2024 layoff wave, and now the AI-era automation pressure.
          </p>
          <p className="ucc-body">
            Every new USA market crisis brings new pressure patterns. We have already seen them. That is what makes Proxy Tech Support a different kind of partner — not a new provider who appeared during the last market boom, but a veteran support team that has already navigated every USA tech career crisis you are currently facing.
          </p>
          <a
            href="/usa-it-job-support-legacy/"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.88rem', fontWeight: 600, color: 'var(--pts-forest)',
              textDecoration: 'none', border: '1px solid rgba(0,223,130,0.3)',
              borderRadius: '8px', padding: '0.6rem 1rem', marginTop: '0.75rem',
              background: 'rgba(0,223,130,0.04)',
            }}
          >
            → Read Our Full USA IT Support Legacy Since 2008
          </a>
        </div>
      </section>

      {/* ── ALSO SUPPORTING GLOBALLY ── */}
      <section style={{ background: 'var(--pts-bg)', padding: 'clamp(2.5rem,5vw,4rem) 1rem', borderTop: '1px solid var(--pts-border)' }}>
        <div style={{ width: '100%', maxWidth: '820px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--pts-accent)', marginBottom: '0.6rem' }}>
            Global Reach
          </p>
          <h2 style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: 'clamp(1.25rem,2.2vw,1.65rem)', fontWeight: 700, color: 'var(--pts-text)', lineHeight: 1.3, marginBottom: '0.75rem' }}>
            Also Supporting Canada, UK, Ireland, Australia and Global Remote Teams
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--pts-text-muted)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            USA is the primary focus, but IT career crisis pressure is not unique to the USA. Proxy Tech Support also supports professionals in Canada, UK, Ireland, Australia, and global remote teams who face similar job instability, interview pressure, and project delivery challenges.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {[
              { label: 'IT Job Support Canada', href: '/job-support-canada/' },
              { label: 'IT Job Support UK', href: '/job-support-uk/' },
              { label: 'IT Job Support Ireland', href: '/job-support-ireland/' },
              { label: 'IT Job Support Australia', href: '/job-support-australia/' },
              { label: 'USA Legacy Since 2008', href: '/usa-it-job-support-legacy/' },
              { label: 'Our Global Legacy', href: '/our-legacy/' },
            ].map((l) => (
              <a key={l.href} href={l.href} style={{ fontSize: '0.82rem', color: 'var(--pts-forest)', textDecoration: 'none', fontWeight: 600, border: '1px solid var(--pts-border)', borderRadius: '6px', padding: '0.3rem 0.65rem', background: 'var(--pts-card-bg)' }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ucc-section-white">
        <div className="ucc-inner">
          <div className="ucc-faq-grid">
            <div>
              <p className="ucc-section-eyebrow">FAQ</p>
              <h2 className="ucc-h2">Questions About USA Career Crisis Support</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--pts-text-subtle)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Common questions from USA IT professionals considering our support.
              </p>
              <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="ucc-btn-wa" style={{ display: 'inline-flex', fontSize: '0.9rem' }}>
                <WAIcon size={15} />
                Ask on WhatsApp
              </a>
            </div>
            <LandingFAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ── */}
      <nav className="ucc-related" aria-label="Related pages">
        <div className="ucc-inner">
          <p className="ucc-related-label">Related USA Support Pages</p>
          <div className="ucc-related-row">
            {[
              { label: 'USA IT Job Support', href: '/job-support-usa/' },
              { label: 'USA Proxy Interview Support', href: '/proxy-interview-usa/' },
              { label: 'USA Legacy Since 2008', href: '/usa-it-job-support-legacy/' },
              { label: 'USA AI Era Job Support', href: '/usa-ai-era-job-support/' },
              { label: 'USA Remote Work Support', href: '/usa-remote-work-it-support/' },
              { label: 'Production Issue Support', href: '/production-issue-support/' },
              { label: 'Struggling in Your IT Job?', href: '/struggling-in-job-developer-help/' },
              { label: 'Failed Interview Help', href: '/failed-interview-help/' },
              { label: 'DevOps Job Support USA', href: '/devops-job-support-usa/' },
              { label: 'SRE Job Support USA', href: '/sre-job-support-usa/' },
              { label: 'Get Interview Scheduled', href: '/get-interview-scheduled-usa/' },
              { label: 'Read Our Blog', href: '/blog/' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="ucc-related-link">{l.label}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── BOTTOM CTA ── */}
      <section className="ucc-section-dark">
        <div className="ucc-bottom-inner">
          <p className="ucc-bottom-eyebrow">Get Support Now</p>
          <h2 className="ucc-bottom-h2">
            Your USA IT Career Does Not Have to Face This Alone
          </h2>
          <p className="ucc-bottom-sub">
            Real-time USA IT career crisis support — job support, proxy interview assistance, production help, and office-hours backup. Available 24/7.
          </p>
          <div className="ucc-bottom-cta-row">
            <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="ucc-btn-wa">
              <WAIcon />
              Get USA Job Support Now
            </a>
            <a href="/proxy-interview-usa/" className="ucc-btn-outline">Get Proxy Interview Help</a>
          </div>
          <div className="ucc-contacts">
            <div className="ucc-contact-item">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <a href="tel:+919660614469">+91 96606 14469</a>
            </div>
            <div className="ucc-contact-item">
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
