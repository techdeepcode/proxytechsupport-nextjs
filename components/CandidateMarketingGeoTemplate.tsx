import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { WHATSAPP_ME_URL } from '@/lib/whatsapp';

export type CandidateMarketingGeoConfig = {
  location: string;
  slug: string;
  canonical: string;
  heroHeadline: string;
  heroSub: string;
  heroBody: string;
  localPain: string;
  localMarket: string;
  localKeywords: string[];
  faqItems: { q: string; a: string }[];
  ctaText: string;
  /** One unique insight about this specific market — local job boards, employers, auth rules, timezone, etc. */
  localCampaignTip: string;
  /** Local job platforms used in this market */
  localPlatforms: string;
};

const CALL_LINK = 'tel:+919660614469';

const GEO_SERVICE_LINKS: Record<string, { proxy: string; schedule: string; jobSupport: string }> = {
  usa:       { proxy: '/proxy-interview-usa/',              schedule: '/get-interview-scheduled-usa/',       jobSupport: '/job-support-usa/' },
  canada:    { proxy: '/proxy-interview-canada/',           schedule: '/get-interview-scheduled-canada/',    jobSupport: '/job-support-canada/' },
  uk:        { proxy: '/proxy-interview-uk/',               schedule: '/get-interview-scheduled-uk/',        jobSupport: '/job-support-uk/' },
  ireland:   { proxy: '/interview-proxy-support-ireland/',  schedule: '/get-interview-scheduled-ireland/',   jobSupport: '/job-support-ireland/' },
  germany:   { proxy: '/proxy-interview-germany/',          schedule: '/get-interview-scheduled-germany/',   jobSupport: '/job-support-germany/' },
  australia: { proxy: '/proxy-interview-australia/',        schedule: '/get-interview-scheduled-australia/', jobSupport: '/job-support-australia/' },
  europe:    { proxy: '/proxy-interview-europe/',           schedule: '/get-interview-scheduled/',           jobSupport: '/job-support-europe/' },
  singapore: { proxy: '/proxy-interview-singapore/',        schedule: '/get-interview-scheduled-singapore/', jobSupport: '/job-support-singapore/' },
  'hong-kong': { proxy: '/proxy-interview-hong-kong/',      schedule: '/get-interview-scheduled-hong-kong/', jobSupport: '/job-support-singapore/' },
};

function getGeoLinks(slug: string) {
  const geo = slug.replace('job-application-candidate-marketing-', '');
  return GEO_SERVICE_LINKS[geo] ?? {
    proxy: '/proxy-interview-support/',
    schedule: '/get-interview-scheduled/',
    jobSupport: '/job-support-usa/',
  };
}

function WAIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRight({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ flexShrink: 0, marginTop: 3 }}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function CandidateMarketingGeoTemplate({ config }: { config: CandidateMarketingGeoConfig }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Job Application & Candidate Marketing in ${config.location}`,
    description: config.heroBody,
    provider: {
      '@type': 'Organization',
      name: 'Proxy Tech Support',
      url: 'https://proxytechsupport.com',
      contactPoint: { '@type': 'ContactPoint', telephone: '+91-96606-14469', contactType: 'customer service' },
    },
    areaServed: config.location,
    serviceType: 'Job Application and Candidate Marketing Service',
    url: config.canonical,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://proxytechsupport.com/' },
      { '@type': 'ListItem', position: 2, name: 'Job Application & Candidate Marketing', item: 'https://proxytechsupport.com/job-application-candidate-marketing/' },
      { '@type': 'ListItem', position: 3, name: config.location, item: config.canonical },
    ],
  };

  const filteredFaqs = config.faqItems.filter(
    (f) => !f.q.toLowerCase().includes('guarantee') && !f.q.toLowerCase().includes('disclaimer')
  );

  const howToFaqs = [
    {
      q: `How to get more IT interview calls in ${config.location}?`,
      a: `Apply consistently to relevant roles, reach out to recruiters directly on local platforms, follow up professionally, and keep your profile active every week. Our Job Application & Candidate Marketing service handles all of this for you — so your profile is moving in the ${config.location} market every day.`,
    },
    {
      q: `How to find IT jobs in ${config.location} that match my profile?`,
      a: `We search for roles specifically aligned to your target role, technology stack, experience level, location preference, work authorization status, and salary expectations using ${config.localPlatforms.split(',')[0].trim()} and other local platforms. We apply to relevant roles only — not mass spray.`,
    },
    {
      q: `How to reach recruiters in ${config.location} for IT roles?`,
      a: `We contact IT recruiters, staffing agencies, vendors, and job posters directly in ${config.location} with a targeted professional outreach message — adapted to local recruiter norms and the specific platforms where ${config.location} hiring happens.`,
    },
    {
      q: `Why is the ${config.location} IT job market competitive and how do you help?`,
      a: `The ${config.location} market attracts strong competition because it draws candidates from across the region — and many roles receive hundreds of applications within days of posting. Without consistent applications, professional outreach, and follow-ups, your profile gets buried. We keep your profile active and visible in this market every week through structured campaign execution.`,
    },
    {
      q: `Why do IT professionals in ${config.location} not get enough interview calls?`,
      a: `The most common reason is passive job searching — uploading a resume and waiting. ATS systems filter most applications automatically. Recruiters in ${config.location} are overloaded and respond to targeted outreach, not generic applications. Without daily action, consistent follow-ups, and direct recruiter engagement, most profiles sit idle in the market.`,
    },
    {
      q: `Why use a job application service instead of applying yourself in ${config.location}?`,
      a: `Applying yourself consistently is time-consuming and easy to let slip when you are busy with work. A job application service runs the campaign for you — daily applications, recruiter outreach, follow-ups, and tracking — so your search never stops even when you are focused on other things. In a competitive market like ${config.location}, consistent daily activity makes a measurable difference.`,
    },
    {
      q: `Why does candidate marketing work differently in ${config.location} compared to other markets?`,
      a: `${config.localCampaignTip} This is why a generic job search approach does not work well in ${config.location} — the market requires adapted outreach, the right local platforms, and knowledge of how hiring actually happens here.`,
    },
    {
      q: `Why are IT professionals in ${config.location} not getting shortlisted despite applying regularly?`,
      a: `${config.localMarket.split('.')[0]}. ${config.localMarket.split('.')[1] ?? ''} Without a campaign that actively reaches recruiters, follows up consistently, and applies through the right platforms used in this market, most applications are filtered out before a recruiter ever reviews the profile.`,
    },
    {
      q: `Why is profile visibility more important than just applying in ${config.location}?`,
      a: `In ${config.location}, recruiters and hiring managers are overloaded — they rarely read every application that comes in through job boards. Direct recruiter outreach, follow-ups, and being visible on local hiring platforms gives your profile a significantly better chance of being noticed compared to passive application submissions. We handle all of this as part of your campaign.`,
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [...howToFaqs, ...filteredFaqs].map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <style>{`
        .jcmg-btn-wa { display:inline-flex;align-items:center;gap:.5rem;background:#25D366;color:#fff;font-weight:700;font-size:.97rem;padding:.9rem 1.8rem;border-radius:50px;text-decoration:none;transition:filter .2s,transform .2s;white-space:nowrap; }
        .jcmg-btn-wa:hover { filter:brightness(1.08);transform:translateY(-1px); }
        .jcmg-btn-ghost { display:inline-flex;align-items:center;gap:.5rem;background:transparent;color:#fff;font-weight:600;font-size:.92rem;padding:.85rem 1.6rem;border-radius:50px;text-decoration:none;border:1.5px solid rgba(255,255,255,.55);transition:background .2s,border-color .2s,transform .2s;white-space:nowrap; }
        .jcmg-btn-ghost:hover { background:rgba(255,255,255,.1);border-color:#fff;transform:translateY(-1px); }
        .jcmg-btn-forest { display:inline-flex;align-items:center;gap:.5rem;background:var(--pts-forest);color:#fff;font-weight:700;font-size:.97rem;padding:.9rem 1.8rem;border-radius:50px;text-decoration:none;transition:background .2s,transform .2s;white-space:nowrap; }
        .jcmg-btn-forest:hover { background:var(--pts-forest-hover);transform:translateY(-1px); }
        .jcmg-cta-row { display:flex;flex-wrap:wrap;gap:.85rem;align-items:center; }

        .jcmg-hero { position:relative;z-index:0;background:radial-gradient(ellipse 65% 50% at 5% 8%,rgba(0,223,130,.13) 0%,transparent 55%),radial-gradient(ellipse 55% 45% at 95% 92%,rgba(3,98,76,.22) 0%,transparent 50%),linear-gradient(160deg,#030f0f 0%,#091416 60%,#030f0f 100%);padding:clamp(3.5rem,7vw,6rem) 1rem clamp(3rem,6vw,5.5rem); }
        .jcmg-section-alt   { background:var(--pts-section-alt);padding:clamp(3rem,6vw,5rem) 1rem; }
        .jcmg-section-white { background:var(--pts-bg);padding:clamp(3rem,6vw,5rem) 1rem; }
        .jcmg-section-mint  { background:var(--pts-tech-header);border-top:1px solid rgba(0,223,130,.2);border-bottom:1px solid rgba(0,223,130,.2);padding:clamp(2.5rem,5vw,4.5rem) 1rem; }
        .jcmg-section-dark  { background:radial-gradient(ellipse 70% 55% at 0% 0%,rgba(0,223,130,.14) 0%,transparent 55%),radial-gradient(ellipse 65% 50% at 100% 100%,rgba(3,98,76,.18) 0%,transparent 50%),linear-gradient(180deg,var(--pts-surface-dark-raised) 0%,var(--pts-dark) 100%);padding:clamp(3.5rem,7vw,5.5rem) 1rem; }
        .jcmg-inner { width:100%;max-width:var(--pts-content-max);margin:0 auto; }

        .jcmg-eyebrow { display:inline-flex;align-items:center;gap:.45rem;font-size:.72rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--pts-accent);margin-bottom:1.1rem; }
        .jcmg-h1 { font-family:Georgia,'Times New Roman',serif;font-size:clamp(1.9rem,4.5vw,3rem);font-weight:700;color:#fff;line-height:1.15;margin-bottom:1.15rem;max-width:740px; }
        .jcmg-hero-lead { font-size:clamp(1rem,1.9vw,1.15rem);color:rgba(255,255,255,.8);line-height:1.65;margin-bottom:.6rem;max-width:680px; }
        .jcmg-hero-body { font-size:clamp(.95rem,1.7vw,1.05rem);color:rgba(255,255,255,.65);line-height:1.75;margin-bottom:1.35rem;max-width:660px; }
        .jcmg-trust-line { margin-top:1.5rem;font-size:.82rem;font-weight:600;color:rgba(255,255,255,.45);letter-spacing:.12em;text-transform:uppercase; }

        .jcmg-hero-split { display:grid;grid-template-columns:1fr;gap:clamp(1.35rem,3vw,2.25rem);align-items:start; }
        @media(min-width:1024px){
          .jcmg-hero-split { grid-template-columns:minmax(0,1fr) minmax(260px,340px);column-gap:clamp(1.75rem,3vw,2.75rem); }
          .jcmg-hero-split .jcmg-h1 { max-width:none; }
          .jcmg-hero-split .jcmg-hero-lead,.jcmg-hero-split .jcmg-hero-body { max-width:42rem; }
        }
        .jcmg-metrics-card {
          display:grid;grid-template-columns:1fr 1fr;gap:.75rem;
          padding:1.2rem 1rem;border-radius:16px;
          border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.05);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.07);align-self:start;
        }
        @media(min-width:1024px){
          .jcmg-metrics-card { position:sticky;top:calc(var(--pts-sticky-header-offset) + 0.5rem);padding:1.35rem 1.15rem;gap:.85rem; }
        }
        .jcmg-metric-cell {
          text-align:center;display:flex;flex-direction:column;align-items:center;
          justify-content:center;padding:.7rem .4rem;border-radius:10px;
          background:rgba(0,0,0,.22);border:1px solid rgba(255,255,255,.08);
        }
        @media(min-width:1024px){ .jcmg-metric-cell { min-height:5rem;padding:1rem .55rem; } }
        .jcmg-metric-stat  { font-size:1.28rem;font-weight:800;color:var(--pts-accent);line-height:1.15; }
        .jcmg-metric-label { font-size:.68rem;color:rgba(255,255,255,.5);font-weight:500;line-height:1.25;margin-top:.3rem;letter-spacing:.02em; }

        .jcmg-section-eyebrow { font-size:.72rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--pts-accent);margin-bottom:.6rem; }
        .jcmg-h2 { font-family:Georgia,'Times New Roman',serif;font-size:clamp(1.45rem,2.8vw,2.1rem);font-weight:700;color:var(--pts-text);line-height:1.25;margin-bottom:.65rem; }
        .jcmg-h2--white { color:#fff; }
        .jcmg-lead { font-size:.98rem;color:var(--pts-text-subtle);line-height:1.7;margin-bottom:2rem;max-width:580px; }

        .jcmg-pain-list { display:flex;flex-direction:column;gap:.85rem; }
        .jcmg-pain-item { display:flex;gap:.8rem;align-items:flex-start;background:var(--pts-card-bg);border:1px solid var(--pts-border);border-radius:var(--pts-card-radius);padding:1.1rem 1.35rem;font-size:.93rem;color:var(--pts-text-muted);line-height:1.6;box-shadow:var(--pts-shadow-lp); }
        .jcmg-pain-dot { width:20px;height:20px;border-radius:50%;flex-shrink:0;background:rgba(239,68,68,.12);color:#ef4444;display:flex;align-items:center;justify-content:center;margin-top:1px; }

        .jcmg-step-list { display:flex;flex-direction:column;gap:1.1rem; }
        .jcmg-step { display:flex;gap:1.25rem;align-items:flex-start;background:var(--pts-card-bg);border:1px solid var(--pts-border);border-radius:var(--pts-card-radius);padding:1.5rem;box-shadow:var(--pts-shadow-lp); }
        .jcmg-step-num { width:38px;height:38px;border-radius:50%;flex-shrink:0;background:var(--pts-forest);color:#fff;display:flex;align-items:center;justify-content:center;font-size:.95rem;font-weight:800; }
        .jcmg-step-title { font-size:1rem;font-weight:700;color:var(--pts-text);margin-bottom:.3rem; }
        .jcmg-step-desc  { font-size:.9rem;color:var(--pts-text-muted);line-height:1.7; }

        .jcmg-check-list { display:flex;flex-direction:column;gap:.75rem; }
        .jcmg-check-item { display:flex;gap:.65rem;align-items:flex-start;font-size:.93rem;color:var(--pts-text-muted);line-height:1.55; }
        .jcmg-check-icon { width:22px;height:22px;border-radius:6px;flex-shrink:0;background:rgba(0,223,130,.12);color:var(--pts-forest);display:flex;align-items:center;justify-content:center;margin-top:1px; }

        .jcmg-profile-check { background:var(--pts-card-bg);border:1px solid var(--pts-border);border-left:4px solid var(--pts-accent);border-radius:var(--pts-card-radius);padding:1.75rem 2rem;box-shadow:var(--pts-shadow-lp);margin-top:1.5rem; }

        .jcmg-disclaimer { background:rgba(239,68,68,.04);border:1px solid rgba(239,68,68,.15);border-radius:var(--pts-card-radius);padding:1.35rem 1.6rem;font-size:.88rem;color:var(--pts-text-muted);line-height:1.8; }

        .jcmg-faq-list { display:flex;flex-direction:column;gap:0;border:1px solid var(--pts-border);border-radius:12px;overflow:hidden; }
        .jcmg-faq-item { border-bottom:1px solid var(--pts-border); }
        .jcmg-faq-item:last-child { border-bottom:none; }
        .jcmg-faq-q { width:100%;text-align:left;background:none;border:none;padding:1.2rem 1.5rem;font-family:inherit;font-size:.97rem;font-weight:600;color:var(--pts-text);cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:1rem;transition:background .15s; }
        .jcmg-faq-q:hover { background:var(--pts-section-alt); }
        .jcmg-faq-a { padding:0 1.5rem 1.2rem;font-size:.9rem;color:var(--pts-text-muted);line-height:1.75; }

        .jcmg-funnel-flow { display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;margin-top:2rem;padding:1.25rem 1.5rem;background:var(--pts-card-bg);border:1px solid var(--pts-border);border-radius:var(--pts-card-radius);box-shadow:var(--pts-shadow-lp); }
        .jcmg-funnel-step { font-size:.88rem;font-weight:700;color:var(--pts-forest);background:rgba(0,223,130,.1);border:1px solid rgba(0,223,130,.2);border-radius:6px;padding:.3rem .75rem; }
        .jcmg-funnel-arrow { color:var(--pts-text-subtle);font-size:1rem;font-weight:700; }

        .jcmg-related { background:var(--pts-section-alt);padding:1.75rem 1rem;border-top:1px solid var(--pts-border); }
        .jcmg-related-label { font-size:.75rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--pts-text-subtle);margin-bottom:.85rem; }
        .jcmg-related-row { display:flex;flex-wrap:wrap;gap:.5rem; }
        .jcmg-related-link { font-size:.82rem;color:var(--pts-forest);text-decoration:none;font-weight:600;border:1px solid var(--pts-border);border-radius:6px;padding:.3rem .65rem;background:var(--pts-card-bg);transition:border-color .15s,color .15s; }
        .jcmg-related-link:hover { border-color:var(--pts-accent);color:var(--pts-forest-hover); }

        .jcmg-seo-block { background:var(--pts-section-alt);padding:clamp(2rem,4vw,3rem) 1rem;border-top:1px solid var(--pts-border); }
        .jcmg-seo-text { font-size:.88rem;color:var(--pts-text-subtle);line-height:1.85;max-width:860px;margin:0 auto; }

        .jcmg-bottom-inner { width:100%;max-width:var(--pts-content-max);margin:0 auto;text-align:center; }
        .jcmg-bottom-eyebrow { font-size:.72rem;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--pts-accent);margin-bottom:1rem; }
        .jcmg-bottom-h2 { font-family:Georgia,'Times New Roman',serif;font-size:clamp(1.5rem,3vw,2.3rem);font-weight:700;color:#fff;line-height:1.22;margin-bottom:.75rem;max-width:680px;margin-left:auto;margin-right:auto; }
        .jcmg-section-dark .jcmg-cta-row { justify-content:center; }

        @media(max-width:768px){
          .jcmg-hero { padding:1.25rem 1rem 2.5rem !important; }
          .jcmg-cta-row { flex-direction:column;gap:.55rem; }
          .jcmg-btn-wa,.jcmg-btn-ghost,.jcmg-btn-forest { width:100%;justify-content:center;min-height:52px;font-size:1rem;border-radius:12px; }
          .jcmg-section-alt,.jcmg-section-white,.jcmg-section-mint { padding:2.25rem 1rem; }
          .jcmg-section-dark { padding:2.5rem 1rem; }
          .jcmg-h2 { font-size:clamp(1.3rem,5.5vw,1.65rem); }
          .jcmg-metrics-card { grid-template-columns:repeat(3,1fr);gap:.5rem;padding:.85rem .75rem; }
          .jcmg-metric-stat { font-size:1.05rem; }
          .jcmg-metric-label { font-size:.62rem; }
        }
      `}</style>

      <TopBar />
      <Navbar />

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" style={{ background: 'var(--pts-section-alt)', borderBottom: '1px solid var(--pts-border)', padding: '.65rem 1rem' }}>
        <div style={{ width: '100%', maxWidth: 'var(--pts-content-max)', margin: '0 auto', display: 'flex', gap: '.4rem', alignItems: 'center', flexWrap: 'wrap', fontSize: '.8rem', color: 'var(--pts-text-subtle)' }}>
          <a href="/" style={{ color: 'var(--pts-forest)', textDecoration: 'none', fontWeight: 600 }}>Home</a>
          <span aria-hidden>›</span>
          <a href="/job-application-candidate-marketing/" style={{ color: 'var(--pts-forest)', textDecoration: 'none', fontWeight: 600 }}>Candidate Marketing</a>
          <span aria-hidden>›</span>
          <span>{config.location}</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="jcmg-hero">
        <div className="jcmg-inner">
          <div className="jcmg-hero-split">

            {/* ── Left: copy ── */}
            <div>
              <p className="jcmg-eyebrow"><span aria-hidden>✦</span> Job Application &amp; Candidate Marketing in {config.location}</p>
              <h1 className="jcmg-h1">{config.heroHeadline}</h1>
              <p className="jcmg-hero-lead">{config.heroSub}</p>
              <p className="jcmg-hero-body">{config.heroBody}</p>
              <div className="jcmg-cta-row">
                <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="jcmg-btn-wa">
                  <WAIcon />Start Job Marketing
                </a>
                <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="jcmg-btn-ghost">Talk on WhatsApp</a>
              </div>
              <p className="jcmg-trust-line">Confidential &nbsp;•&nbsp; Professional &nbsp;•&nbsp; Structured Campaign</p>
            </div>

            {/* ── Right: metrics card ── */}
            <aside className="jcmg-metrics-card" aria-label="Service highlights">
              {[
                { stat: 'Daily',   label: 'Applications & Outreach' },
                { stat: 'Weekly',  label: 'Progress Updates' },
                { stat: '20+',     label: 'Markets Covered' },
                { stat: '24/7',    label: 'Support Available' },
                { stat: 'Active',  label: 'Campaign Management' },
                { stat: 'Tracked', label: 'Every Application' },
              ].map((m) => (
                <div key={m.stat} className="jcmg-metric-cell">
                  <span className="jcmg-metric-stat">{m.stat}</span>
                  <span className="jcmg-metric-label">{m.label}</span>
                </div>
              ))}
            </aside>

          </div>
        </div>
      </section>

      {/* LOCAL MARKET */}
      <section className="jcmg-section-alt">
        <div className="jcmg-inner">
          <p className="jcmg-section-eyebrow">The {config.location} Market</p>
          <h2 className="jcmg-h2">Why the {config.location} Job Market Requires Active Candidate Marketing</h2>
          <p style={{ fontSize: 'clamp(.97rem,1.7vw,1.05rem)', color: 'var(--pts-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: '700px' }}>
            {config.localMarket}
          </p>
          <div className="jcmg-pain-list">
            {config.localPain.split('|').map((item) => (
              <div key={item} className="jcmg-pain-item">
                <span className="jcmg-pain-dot" aria-hidden>
                  <svg width={10} height={10} viewBox="0 0 10 10" fill="currentColor"><circle cx="5" cy="5" r="4" /></svg>
                </span>
                <span>{item.trim()}</span>
              </div>
            ))}
          </div>
          {/* Local campaign tip — unique to this market */}
          <div style={{ marginTop: '1.75rem', background: 'var(--pts-card-bg)', border: '1px solid var(--pts-border)', borderLeft: '4px solid var(--pts-accent)', borderRadius: 'var(--pts-card-radius)', padding: '1.1rem 1.5rem', boxShadow: 'var(--pts-shadow-lp)' }}>
            <p style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--pts-accent)', marginBottom: '.45rem' }}>How We Approach the {config.location} Market</p>
            <p style={{ fontSize: '.93rem', color: 'var(--pts-text-muted)', lineHeight: 1.75, margin: 0 }}>{config.localCampaignTip}</p>
            <p style={{ fontSize: '.82rem', color: 'var(--pts-text-subtle)', marginTop: '.6rem', margin: '.6rem 0 0' }}>
              <strong style={{ color: 'var(--pts-text)' }}>Platforms we use:</strong> {config.localPlatforms}
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="jcmg-section-white">
        <div className="jcmg-inner">
          <p className="jcmg-section-eyebrow">Our Service in {config.location}</p>
          <h2 className="jcmg-h2">What We Do for Your Job Search in {config.location}</h2>
          <p className="jcmg-lead">We run a complete, structured job search campaign on your behalf.</p>
          <div className="jcmg-step-list">
            {[
              { num: 1, title: 'Targeted Job Search', desc: `We identify relevant ${config.location} job openings based on your profile, target role, location preference, work authorization, and salary expectations.` },
              { num: 2, title: 'Applications on Your Behalf', desc: `We apply to suitable ${config.location} roles using your profile. Relevant, not random.` },
              { num: 3, title: 'Recruiter & Vendor Outreach', desc: `We contact ${config.location} recruiters, staffing agencies, vendors, and job posters professionally on your behalf.` },
              { num: 4, title: 'Professional Follow-Ups', desc: 'We follow up on submitted applications and outreach at appropriate intervals — keeping your name visible.' },
              { num: 5, title: 'Application Tracking', desc: 'Every application and recruiter contact is tracked. You always know what is happening.' },
              { num: 6, title: 'Weekly Progress Updates', desc: 'Weekly structured update on applications, responses, follow-ups, and interview opportunities.' },
              { num: 7, title: 'Interview Opportunity Handoff', desc: 'When interview calls come in, we hand them off immediately so you can prepare and perform.' },
            ].map((step) => (
              <div key={step.num} className="jcmg-step">
                <div className="jcmg-step-num" aria-hidden>{step.num}</div>
                <div>
                  <h3 className="jcmg-step-title">{step.title}</h3>
                  <p className="jcmg-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILE CHECK */}
      <section className="jcmg-section-alt">
        <div className="jcmg-inner" style={{ maxWidth: 780 }}>
          <p className="jcmg-section-eyebrow">Profile Engineering Check</p>
          <h2 className="jcmg-h2">Before We Start, We Check If Your Profile Can Compete in {config.location}</h2>
          <p style={{ fontSize: '.97rem', color: 'var(--pts-text-muted)', lineHeight: 1.75, marginBottom: '1rem' }}>
            Marketing a weak profile wastes applications. Before starting your {config.location} campaign, we review your resume, LinkedIn, target role, keywords, project story, and recruiter readability.
          </p>
          <div className="jcmg-profile-check">
            <p style={{ fontWeight: 700, color: 'var(--pts-text)', marginBottom: '.75rem', fontSize: '1rem' }}>
              If your profile is ready, we start the campaign. If it needs work, we recommend Profile Engineering first.
            </p>
            <p style={{ fontSize: '.9rem', color: 'var(--pts-text-muted)', lineHeight: 1.75, margin: 0 }}>
              A ready profile gives your {config.location} job search a much better chance of generating interview calls.
            </p>
          </div>
          <p style={{ fontSize: '.9rem', color: 'var(--pts-text-subtle)', lineHeight: 1.7, marginTop: '1.5rem' }}>
            Need your resume and LinkedIn fixed before applying?{' '}
            <a href="/get-interview-scheduled/" style={{ color: 'var(--pts-forest)', fontWeight: 600, textDecoration: 'none' }}>
              See our Get Interview Scheduled — Profile Engineering service →
            </a>
          </p>
        </div>
      </section>

      {/* START CAMPAIGN CTA */}
      <section className="jcmg-section-mint">
        <div className="jcmg-inner" style={{ maxWidth: 760 }}>
          <p className="jcmg-section-eyebrow">Start Your {config.location} Campaign</p>
          <h2 className="jcmg-h2" style={{ color: 'var(--pts-text)' }}>What We Do for Your {config.location} Job Search</h2>
          <div style={{ background: 'var(--pts-card-bg)', border: '1px solid var(--pts-border)', borderLeft: '4px solid var(--pts-accent)', borderRadius: 'var(--pts-card-radius)', padding: '1.5rem 1.75rem', boxShadow: 'var(--pts-shadow-lp)', marginTop: '1.25rem' }}>
            <div style={{ display: 'grid', gap: '.65rem', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))' }}>
              {[
                'Targeted job search',
                'Applications on your behalf',
                'Recruiter outreach',
                'Vendor outreach',
                'Professional follow-ups',
                'Application tracking',
                'Weekly progress update',
                'Interview opportunity handoff',
                'Profile Engineering (if needed)',
              ].map((f) => (
                <div key={f} style={{ display: 'flex', gap: '.5rem', alignItems: 'flex-start', fontSize: '.9rem', color: 'var(--pts-text-muted)', lineHeight: 1.5 }}>
                  <span style={{ width: 18, height: 18, borderRadius: '50%', flexShrink: 0, background: 'rgba(0,223,130,.15)', color: 'var(--pts-forest)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                    <CheckIcon size={10} />
                  </span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '.85rem', color: 'var(--pts-text-subtle)', marginTop: '1.25rem', marginBottom: '1.25rem' }}>
              Scope and engagement are discussed on a direct call. Talk to us on WhatsApp to get started.
            </p>
            <div className="jcmg-cta-row">
              <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="jcmg-btn-wa"><WAIcon />Start Job Marketing</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="jcmg-section-alt">
        <div className="jcmg-inner" style={{ maxWidth: 860 }}>
          <p className="jcmg-section-eyebrow">FAQ</p>
          <h2 className="jcmg-h2">Frequently Asked Questions — {config.location}</h2>
          <div className="jcmg-faq-list" style={{ marginTop: '1.5rem' }}>
            {[...howToFaqs, ...filteredFaqs].map((f, i) => (
              <details key={i} className="jcmg-faq-item" style={{ listStyle: 'none' }}>
                <summary className="jcmg-faq-q">{f.q} <span aria-hidden style={{ flexShrink: 0, fontSize: '1.1rem' }}>+</span></summary>
                <p className="jcmg-faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="jcmg-section-white">
        <div className="jcmg-inner">
          <p className="jcmg-section-eyebrow">Related Services</p>
          <h2 className="jcmg-h2">Other Services That Complete Your Career Path</h2>
          <div className="jcmg-check-list" style={{ maxWidth: 600 }}>
            {[
              { label: 'Get Interview Scheduled — Profile Engineering', href: '/get-interview-scheduled/' },
              { label: 'Interview Proxy Support', href: '/proxy-interview-support/' },
              { label: 'Real-Time IT Job Support', href: '/job-support-usa/' },
              { label: 'Job Application & Candidate Marketing (Main)', href: '/job-application-candidate-marketing/' },
            ].map((item) => (
              <div key={item.label} className="jcmg-check-item">
                <span className="jcmg-check-icon" style={{ marginTop: 4 }}><ArrowRight /></span>
                <a href={item.href} style={{ color: 'var(--pts-forest)', fontWeight: 600, textDecoration: 'none' }}>{item.label}</a>
              </div>
            ))}
          </div>
          <div className="jcmg-funnel-flow">
            <span className="jcmg-funnel-step">Profile Engineering</span>
            <span className="jcmg-funnel-arrow" aria-hidden>›</span>
            <span className="jcmg-funnel-step">Profile Moving</span>
            <span className="jcmg-funnel-arrow" aria-hidden>›</span>
            <span className="jcmg-funnel-step">Interview Cleared</span>
            <span className="jcmg-funnel-arrow" aria-hidden>›</span>
            <span className="jcmg-funnel-step">Job Handled</span>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="jcmg-section-dark">
        <div className="jcmg-bottom-inner">
          <p className="jcmg-bottom-eyebrow">Start Your {config.location} Campaign</p>
          <h2 className="jcmg-bottom-h2">{config.ctaText}</h2>
          <p style={{ fontSize: '.97rem', color: 'rgba(255,255,255,.65)', lineHeight: 1.75, marginBottom: '1.75rem', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            Talk to us today. We will review your profile, understand your target role, and start your {config.location} job search campaign.
          </p>
          <div className="jcmg-cta-row" style={{ justifyContent: 'center' }}>
            <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="jcmg-btn-wa"><WAIcon />Start Job Marketing on WhatsApp</a>
            <a href={CALL_LINK} className="jcmg-btn-ghost">+91 96606 14469</a>
          </div>
        </div>
      </section>

      {/* RELATED LINKS */}
      <nav className="jcmg-related" aria-label="Related pages">
        <div className="jcmg-inner">
          <p className="jcmg-related-label">Related Services &amp; Pages</p>
          <div className="jcmg-related-row">
            {(() => {
              const geo = getGeoLinks(config.slug);
              return [
                { label: 'Candidate Marketing (Main)', href: '/job-application-candidate-marketing/' },
                { label: `Profile Engineering — ${config.location}`, href: geo.schedule },
                { label: `Proxy Interview — ${config.location}`, href: geo.proxy },
                { label: `Job Support — ${config.location}`, href: geo.jobSupport },
                { label: 'Candidate Marketing USA', href: '/job-application-candidate-marketing-usa/' },
                { label: 'Candidate Marketing Canada', href: '/job-application-candidate-marketing-canada/' },
                { label: 'Candidate Marketing UK', href: '/job-application-candidate-marketing-uk/' },
                { label: 'Candidate Marketing Ireland', href: '/job-application-candidate-marketing-ireland/' },
                { label: 'Candidate Marketing Australia', href: '/job-application-candidate-marketing-australia/' },
                { label: 'Candidate Marketing Singapore', href: '/job-application-candidate-marketing-singapore/' },
                { label: 'Interview Proxy Support', href: '/proxy-interview-support/' },
                { label: 'Get Interview Scheduled', href: '/get-interview-scheduled/' },
              ]
                .filter((l) => l.href !== config.canonical.replace('https://proxytechsupport.com', ''))
                .map((l) => (
                  <a key={l.href} href={l.href} className="jcmg-related-link">{l.label}</a>
                ));
            })()}
          </div>
        </div>
      </nav>

      {/* SEO BLOCK */}
      <div className="jcmg-seo-block">
        <div className="jcmg-inner">
          <p className="jcmg-seo-text">
            Proxy Tech Support provides Job Application &amp; Candidate Marketing services for IT professionals in {config.location}. We apply to relevant jobs, contact recruiters and vendors, follow up professionally, track applications, and deliver weekly progress updates. This service is separate from profile engineering, interview proxy support, and real-time job support — together covering the full career journey.
          </p>
          <p className="jcmg-seo-text" style={{ marginTop: '.85rem' }}>
            Contact us — WhatsApp: +91 96606 14469 &nbsp;|&nbsp; proxytechsupport.com
          </p>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
