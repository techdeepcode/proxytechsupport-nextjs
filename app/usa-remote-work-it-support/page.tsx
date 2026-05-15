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
  title: 'USA Remote Work IT Job Support Since COVID | Proxy Tech Support',
  description:
    'Since the COVID remote-work shift, Proxy Tech Support has helped USA developers handle remote project pressure, production issues, client calls, technical interviews, proxy interviews, and real-time IT job support.',
  canonical: 'https://proxytechsupport.com/usa-remote-work-it-support/',
  keywords: [
    'USA remote job support', 'USA remote developer support', 'work from home IT job support USA',
    'USA real-time software job support', 'production issue support USA remote developer',
    'USA office-hours job support', 'remote work IT support USA', 'USA remote technical support',
    'USA work from home developer help', 'remote IT job support USA',
  ],
  ogTitle: 'USA Remote Work IT Job Support | Proxy Tech Support',
  ogDescription:
    'Since the COVID remote-work shift, Proxy Tech Support has helped USA developers handle remote project pressure, client calls, production issues, and proxy interview needs — from home.',
});

const faqs = [
  {
    question: 'What remote work IT support do you provide for USA developers?',
    answer:
      'We provide real-time, live job support for USA developers working remotely — from home, co-working spaces, or distributed team setups. This includes: live coding and debugging support during USA office hours, production issue help during remote work windows, client call preparation and real-time support, standup and sprint preparation, and proxy interview guidance for remote technical interview rounds.',
  },
  {
    question: 'Can you provide support during live USA client calls?',
    answer:
      'Yes. Proxy Tech Support can provide real-time, discreet support during live USA client calls — helping developers respond to technical questions, handle unexpected requests, and maintain confidence during video meetings and Zoom calls with US-based clients and stakeholders.',
  },
  {
    question: 'Do you support USA developers in all time zones?',
    answer:
      'Yes. We align with all US time zones including Eastern, Central, Mountain, and Pacific working hours. Whether your USA client is on EST morning standups or PST afternoon delivery windows, we are available to support you.',
  },
  {
    question: 'Can you help with production issues during USA remote office hours?',
    answer:
      'Yes. Production issues during USA office hours are one of our most common support scenarios. Our experts join your remote debugging session, help you diagnose the root cause, and support you through the fix — all without requiring you to escalate publicly within your team.',
  },
  {
    question: 'Do you support remote developers facing proxy interview needs?',
    answer:
      'Yes. Remote technical interviews are now the standard format for USA roles. Proxy Tech Support provides real-time guidance during live remote technical interview rounds — coding assessments, system design sessions, and behavioral interviews — helping candidates perform confidently from home.',
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
  name: 'USA Remote Work IT Job Support Since COVID',
  description:
    'Since the COVID remote-work shift, Proxy Tech Support has helped USA developers handle remote project pressure, production issues, client calls, technical interviews, proxy interviews, and real-time IT job support.',
  url: 'https://proxytechsupport.com/usa-remote-work-it-support/',
  datePublished: '2020-03-01',
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
    { '@type': 'ListItem', position: 3, name: 'USA Remote Work IT Support', item: 'https://proxytechsupport.com/usa-remote-work-it-support/' },
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

const remoteScenarios = [
  { title: 'USA Client Video Calls', body: 'Live support during Zoom and Teams calls with USA-based clients and stakeholders — staying confident and technically sharp on camera.' },
  { title: 'Remote Standup Preparation', body: 'Daily standup support — helping developers articulate progress, blockers, and plans in a way that satisfies USA client expectations.' },
  { title: 'Production Issues from Home', body: 'Real-time debugging and production issue resolution during USA office hours — without needing to escalate publicly in front of the team.' },
  { title: 'Remote Sprint Delivery', body: 'Sprint-window delivery support when working asynchronously with distributed USA teams across multiple time zones.' },
  { title: 'Remote Technical Interviews', body: 'Proxy interview guidance for remote-format USA technical rounds — coding assessments, live system design, and architecture discussions from home.' },
  { title: 'Async Communication Pressure', body: 'Support with written technical communication — Slack messages, PR comments, technical documentation — where remote visibility matters.' },
];

export default function USARemoteWorkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{`
        .urw-inner { width: 100%; max-width: var(--pts-content-max); margin: 0 auto; }
        .urw-hero {
          position: relative; z-index: 0;
          background:
            radial-gradient(ellipse 70% 55% at 5% 10%, rgba(0,223,130,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 95% 90%, rgba(3,98,76,0.2) 0%, transparent 50%),
            linear-gradient(160deg, #030f0f 0%, #0a1618 60%, #030f0f 100%);
          padding: clamp(3.5rem, 7vw, 6rem) 1rem clamp(3rem, 6vw, 5rem);
        }
        .urw-eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--pts-accent); margin-bottom: 1.1rem;
        }
        .urw-h1 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.75rem, 4vw, 2.85rem); font-weight: 700; color: #ffffff;
          line-height: 1.2; margin-bottom: 1rem; max-width: 820px;
        }
        .urw-hero-para { font-size: clamp(0.97rem, 1.8vw, 1.05rem); color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 0.85rem; max-width: 700px; }
        .urw-cta-row { display: flex; flex-wrap: wrap; gap: 0.85rem; align-items: center; margin-top: 2rem; }
        .urw-btn-wa {
          display: inline-flex; align-items: center; gap: 0.45rem;
          background: #25D366; color: #ffffff; font-weight: 700; font-size: 0.95rem;
          padding: 0.85rem 1.6rem; border-radius: 50px; text-decoration: none;
          transition: filter 0.2s, transform 0.2s; white-space: nowrap;
        }
        .urw-btn-wa:hover { filter: brightness(1.08); transform: translateY(-1px); }
        .urw-btn-outline {
          display: inline-flex; align-items: center; gap: 0.45rem;
          background: transparent; color: #ffffff; font-weight: 600; font-size: 0.95rem;
          padding: 0.85rem 1.6rem; border-radius: 50px; text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.65);
          transition: background 0.2s, transform 0.2s; white-space: nowrap;
        }
        .urw-btn-outline:hover { background: rgba(255,255,255,0.1); transform: translateY(-1px); }
        .urw-section-alt  { position: relative; z-index: 0; background: var(--pts-section-alt); padding: clamp(3rem, 6vw, 5rem) 1rem; }
        .urw-section-white{ position: relative; z-index: 0; background: var(--pts-bg); padding: clamp(3rem, 6vw, 5rem) 1rem; }
        .urw-section-mint {
          position: relative; z-index: 0; background: var(--pts-tech-header);
          border-top: 1px solid rgba(0,223,130,0.2); border-bottom: 1px solid rgba(0,223,130,0.2);
          padding: clamp(2.5rem, 5vw, 4rem) 1rem;
        }
        .urw-section-dark {
          position: relative; z-index: 0;
          background:
            radial-gradient(ellipse 70% 55% at 0% 0%, rgba(0,223,130,0.14) 0%, transparent 55%),
            radial-gradient(ellipse 65% 50% at 100% 100%, rgba(3,98,76,0.18) 0%, transparent 50%),
            linear-gradient(180deg, var(--pts-surface-dark-raised) 0%, var(--pts-dark) 100%);
          padding: clamp(3.5rem, 7vw, 5.5rem) 1rem;
        }
        .urw-section-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--pts-accent); margin-bottom: 0.6rem; }
        .urw-h2 { font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.45rem, 2.6vw, 2rem); font-weight: 700; color: var(--pts-text); line-height: 1.25; margin-bottom: 0.75rem; }
        .urw-sub { font-size: 0.98rem; color: var(--pts-text-subtle); line-height: 1.65; margin-bottom: 2rem; max-width: 580px; }
        .urw-body { font-size: 0.97rem; color: var(--pts-text-muted); line-height: 1.8; margin-bottom: 1rem; }
        .urw-callout { background: rgba(0,223,130,0.06); border-left: 3px solid var(--pts-accent); border-radius: 0 10px 10px 0; padding: 1.25rem 1.5rem; font-size: 0.97rem; color: var(--pts-text-muted); line-height: 1.75; margin: 1.5rem 0; }
        .urw-callout strong { color: var(--pts-forest); }
        .urw-cards-grid { display: grid; gap: 1.25rem; grid-template-columns: 1fr; }
        @media(min-width: 640px) { .urw-cards-grid { grid-template-columns: repeat(2, 1fr); } }
        @media(min-width: 1024px) { .urw-cards-grid { grid-template-columns: repeat(3, 1fr); } }
        .urw-card { background: var(--pts-card-bg); border: 1px solid var(--pts-border); border-radius: var(--pts-card-radius); padding: 1.5rem; box-shadow: var(--pts-shadow-lp); transition: box-shadow 0.2s, transform 0.2s; }
        .urw-card:hover { box-shadow: var(--pts-shadow-lp-hover); transform: translateY(-2px); }
        .urw-card-icon { width: 36px; height: 36px; border-radius: 10px; background: rgba(0,223,130,0.12); color: var(--pts-forest); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; }
        .urw-card-title { font-size: 1rem; font-weight: 700; color: var(--pts-text); margin-bottom: 0.5rem; line-height: 1.35; }
        .urw-card-body { font-size: 0.9rem; color: var(--pts-text-muted); line-height: 1.7; }
        .urw-checks { display: flex; flex-direction: column; gap: 0.65rem; margin-top: 1.25rem; }
        .urw-check-item { display: flex; align-items: flex-start; gap: 0.55rem; font-size: 0.95rem; color: var(--pts-text-muted); line-height: 1.55; }
        .urw-check-icon { width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0; background: rgba(0,223,130,0.12); color: var(--pts-forest); display: flex; align-items: center; justify-content: center; margin-top: 2px; }
        .urw-faq-grid { display: grid; gap: 2.5rem; align-items: start; }
        @media(min-width: 1024px) { .urw-faq-grid { grid-template-columns: minmax(240px, 340px) 1fr; gap: 3rem; } }
        .urw-related { background: var(--pts-section-alt); padding: 1.75rem 1rem; border-top: 1px solid var(--pts-border); }
        .urw-related-label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--pts-text-subtle); margin-bottom: 0.85rem; }
        .urw-related-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .urw-related-link { font-size: 0.82rem; color: var(--pts-forest); text-decoration: none; font-weight: 600; border: 1px solid var(--pts-border); border-radius: 6px; padding: 0.3rem 0.65rem; background: var(--pts-card-bg); transition: border-color 0.15s, color 0.15s; }
        .urw-related-link:hover { border-color: var(--pts-accent); color: var(--pts-forest-hover); }
        .urw-bottom-inner { width: 100%; max-width: var(--pts-content-max); margin: 0 auto; text-align: center; }
        .urw-bottom-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: var(--pts-accent); margin-bottom: 1rem; }
        .urw-bottom-h2 { font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 700; color: #ffffff; line-height: 1.25; margin-bottom: 0.75rem; max-width: 640px; margin-left: auto; margin-right: auto; }
        .urw-bottom-sub { font-size: 0.97rem; color: rgba(255,255,255,0.62); line-height: 1.65; margin-bottom: 2rem; max-width: 520px; margin-left: auto; margin-right: auto; }
        .urw-bottom-cta-row { display: flex; flex-wrap: wrap; gap: 0.85rem; justify-content: center; }
        .urw-contacts { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.25rem 2rem; margin-top: 1.75rem; }
        .urw-contact-item { display: flex; align-items: center; gap: 0.4rem; font-size: 0.9rem; color: rgba(255,255,255,0.72); }
        .urw-contact-item a { color: inherit; text-decoration: none; }
        .urw-contact-item a:hover { color: var(--pts-accent); }
        /* ── Hero split (metrics card right on desktop) ── */
        .urw-hero-split { display: grid; grid-template-columns: 1fr; gap: clamp(1.35rem,3vw,2.25rem); align-items: start; }
        @media(min-width: 1024px) {
          .urw-hero-split { grid-template-columns: minmax(0,1fr) minmax(270px,360px); column-gap: clamp(1.75rem,3vw,2.75rem); }
        }
        .urw-hero-metrics-card {
          display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;
          padding: 1.2rem 1rem; border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.07); align-self: start;
        }
        @media(min-width: 1024px) {
          .urw-hero-metrics-card { position: sticky; top: calc(var(--pts-sticky-header-offset) + 0.5rem); padding: 1.35rem 1.15rem; gap: 0.85rem; }
        }
        .urw-metric-item { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09); border-radius: 10px; padding: 0.85rem 0.75rem; display: flex; flex-direction: column; gap: 0.2rem; }
        .urw-metric-stat { font-size: 1.45rem; font-weight: 800; color: var(--pts-accent); line-height: 1; }
        .urw-metric-label { font-size: 0.73rem; color: rgba(255,255,255,0.52); font-weight: 500; letter-spacing: 0.03em; line-height: 1.3; }
        @media(max-width: 768px) {
          .urw-hero { padding: 0.95rem 1rem 2rem !important; }
          .urw-cta-row, .urw-bottom-cta-row { flex-direction: column; gap: 0.55rem; }
          .urw-btn-wa, .urw-btn-outline { width: 100%; justify-content: center; min-height: 52px; font-size: 1rem; border-radius: 12px; }
          .urw-section-alt, .urw-section-white, .urw-section-mint { padding: 2.25rem 1rem; }
          .urw-section-dark { padding: 2.5rem 1rem; }
        }
      `}</style>

      <TopBar />
      <Navbar />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'USA IT Support', href: '/job-support-usa/' },
        { label: 'USA Remote Work IT Support' },
      ]} />

      {/* ── HERO ── */}
      <section className="urw-hero">
        <div className="urw-inner">
          <div className="urw-hero-split">
            <div>
              <p className="urw-eyebrow"><span aria-hidden>✦</span> USA Remote Work · Since COVID Era</p>
              <h1 className="urw-h1">Helping USA Developers Handle Remote Work Pressure Since the COVID Era</h1>
              <p className="urw-hero-para">
                COVID changed USA software teams. Remote work, distributed teams, Zoom calls, Teams meetings, production ownership, async delivery, and work-from-home pressure became normal.
              </p>
              <p className="urw-hero-para">
                Proxy Tech Support helps USA remote developers who need real-time technical support during office hours — when working from home and no one is around to help.
              </p>
              <div className="urw-cta-row">
                <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="urw-btn-wa">
                  <WAIcon />
                  Get Remote Work Support
                </a>
                <a href="/proxy-interview-usa/" className="urw-btn-outline">Get Proxy Interview Help</a>
              </div>
            </div>
            <aside className="urw-hero-metrics-card" aria-label="Trust metrics">
              <div className="urw-metric-item">
                <span className="urw-metric-stat">Since COVID</span>
                <span className="urw-metric-label">Remote Era Support</span>
              </div>
              <div className="urw-metric-item">
                <span className="urw-metric-stat">1000+</span>
                <span className="urw-metric-label">Developers Helped</span>
              </div>
              <div className="urw-metric-item">
                <span className="urw-metric-stat">All US TZs</span>
                <span className="urw-metric-label">EST · CST · MST · PST</span>
              </div>
              <div className="urw-metric-item">
                <span className="urw-metric-stat">50+</span>
                <span className="urw-metric-label">Technologies Covered</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── REMOTE SCENARIOS ── */}
      <section className="urw-section-alt">
        <div className="urw-inner">
          <p className="urw-section-eyebrow">Remote Work Challenges We Handle</p>
          <h2 className="urw-h2">When Working from Home Gets Hard — We Are Your Backup</h2>
          <p className="urw-sub">
            Remote work removed the informal help network that developers relied on in offices. Proxy Tech Support fills that gap with real-time, expert support during USA office hours.
          </p>
          <div className="urw-cards-grid">
            {remoteScenarios.map((card) => (
              <div key={card.title} className="urw-card">
                <div className="urw-card-icon"><CheckIcon /></div>
                <h3 className="urw-card-title">{card.title}</h3>
                <p className="urw-card-body">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE HELP ── */}
      <section className="urw-section-white">
        <div className="urw-inner" style={{ maxWidth: 820 }}>
          <p className="urw-section-eyebrow">How We Help</p>
          <h2 className="urw-h2">Real-Time USA Office-Hours IT Support for Remote Developers</h2>
          <p className="urw-body">
            Proxy Tech Support provides live, real-time support from in-house experts — aligned with your USA working hours, available the moment you need backup during your remote workday.
          </p>
          <p className="urw-body">
            This is not asynchronous advice or recorded tutorials. Our experts join your session, your call, or your debugging environment in real-time — helping you navigate whatever remote work pressure you are facing at that exact moment.
          </p>
          <div className="urw-callout">
            <strong>Work from home IT job support USA</strong> — real-time, live, and confidential. Available during USA Eastern, Central, Mountain, and Pacific office hours. Covering Java, Python, .NET, React, Node.js, AWS, Azure, DevOps, Kubernetes, and 50+ technologies.
          </div>
          <div className="urw-checks">
            {[
              'Available during USA office hours — EST, CST, MST, PST — whenever your USA client expects you online.',
              'Real-time support during live production issues that surface during USA business hours.',
              'Client call preparation and live discreet support during USA Zoom and Teams meetings.',
              'Daily standup and sprint review preparation for developers working with USA-based project teams.',
              'Proxy interview support for remote-format USA technical rounds — from home, with full expert backing.',
              'Confidential, professional, NDA available on request.',
            ].map((item) => (
              <div key={item} className="urw-check-item">
                <span className="urw-check-icon"><CheckIcon /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE HELP ── */}
      <section className="urw-section-alt">
        <div className="urw-inner" style={{ maxWidth: 820 }}>
          <p className="urw-section-eyebrow">Who We Help</p>
          <h2 className="urw-h2">USA Remote Developers Who Need Real-Time Backup</h2>
          <p className="urw-body">
            Remote work support is most critical for developers who:
          </p>
          <div className="urw-checks">
            {[
              'Work with USA-based clients or companies from a remote-first or hybrid arrangement.',
              'Are OPT, CPT, or H1B professionals whose job stability depends on strong USA client delivery.',
              'Work on distributed teams where asking for help publicly feels risky or professionally damaging.',
              'Handle production ownership responsibilities without senior developer backup nearby.',
              'Face USA interview rounds in remote format and need live proxy interview guidance.',
              'Are consultants or contractors whose continued engagement depends on consistent USA client performance.',
            ].map((item) => (
              <div key={item} className="urw-check-item">
                <span className="urw-check-icon"><CheckIcon /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEGACY TRUST ── */}
      <section className="urw-section-mint">
        <div className="urw-inner" style={{ maxWidth: 820 }}>
          <p className="urw-section-eyebrow">Why Trust Us</p>
          <h2 className="urw-h2">Supporting USA Remote Developers Since the COVID Shift</h2>
          <p className="urw-body">
            When COVID shifted USA software teams to remote work in 2019–2021, Proxy Tech Support adapted to support developers in their new work-from-home reality. We understood early what remote work pressure felt like for USA developers — the isolation, the visibility anxiety, the home-office delivery expectations.
          </p>
          <p className="urw-body">
            That experience became part of our support model. Every remote support session since then has been informed by what we learned during the COVID remote work era — how to help developers stay confident, productive, and professionally safe when working from home under USA client pressure.
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
            Remote work pressure is not unique to the USA. Developers in Canada, UK, Ireland, Australia, and global remote teams face similar distributed-team delivery challenges, client call pressure, and remote interview anxiety. Proxy Tech Support supports them too.
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
      <section className="urw-section-white">
        <div className="urw-inner">
          <div className="urw-faq-grid">
            <div>
              <p className="urw-section-eyebrow">FAQ</p>
              <h2 className="urw-h2">Questions About USA Remote Work IT Support</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--pts-text-subtle)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Common questions from USA remote developers considering our support.
              </p>
              <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="urw-btn-wa" style={{ display: 'inline-flex', fontSize: '0.9rem' }}>
                <WAIcon size={15} />
                Ask on WhatsApp
              </a>
            </div>
            <LandingFAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ── */}
      <nav className="urw-related" aria-label="Related pages">
        <div className="urw-inner">
          <p className="urw-related-label">Related USA Support Pages</p>
          <div className="urw-related-row">
            {[
              { label: 'USA IT Job Support', href: '/job-support-usa/' },
              { label: 'USA Proxy Interview Support', href: '/proxy-interview-usa/' },
              { label: 'USA Legacy Since 2008', href: '/usa-it-job-support-legacy/' },
              { label: 'USA Career Crisis Support', href: '/usa-it-career-crisis-support/' },
              { label: 'USA AI Era Job Support', href: '/usa-ai-era-job-support/' },
              { label: 'Production Issue Support', href: '/production-issue-support/' },
              { label: 'Struggling in Your IT Job?', href: '/struggling-in-job-developer-help/' },
              { label: 'DevOps Job Support USA', href: '/devops-job-support-usa/' },
              { label: 'SRE Job Support USA', href: '/sre-job-support-usa/' },
              { label: 'Get Interview Scheduled', href: '/get-interview-scheduled-usa/' },
              { label: 'Read Our Blog', href: '/blog/' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="urw-related-link">{l.label}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── BOTTOM CTA ── */}
      <section className="urw-section-dark">
        <div className="urw-bottom-inner">
          <p className="urw-bottom-eyebrow">Get Remote Work Support Now</p>
          <h2 className="urw-bottom-h2">
            Real-Time USA Remote Work IT Support — When You Need Expert Backup from Home
          </h2>
          <p className="urw-bottom-sub">
            Job support, proxy interview assistance, production issue help, and office-hours backup for USA remote developers. Available 24/7.
          </p>
          <div className="urw-bottom-cta-row">
            <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="urw-btn-wa">
              <WAIcon />
              Get USA Job Support Now
            </a>
            <a href="/proxy-interview-usa/" className="urw-btn-outline">Get Proxy Interview Help</a>
          </div>
          <div className="urw-contacts">
            <div className="urw-contact-item">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <a href="tel:+919660614469">+91 96606 14469</a>
            </div>
            <div className="urw-contact-item">
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
