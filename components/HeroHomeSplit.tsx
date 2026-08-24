import Link from 'next/link';
import { WHATSAPP_ME_URL } from '@/lib/whatsapp';

/* ── Icons ─────────────────────────────────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 12l2.5 3L16 9" stroke="var(--pts-forest)" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" aria-hidden style={{ flexShrink: 0 }}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Data ──────────────────────────────────────────────────────────────── */
const trustChips = [
  '100% Confidential',
  'Senior Engineers · 10+ yrs',
  'Start within 1 hour',
  'USA · UK · Canada · Australia',
];

const services = [
  {
    href: '/proxy-interview-support/',
    title: 'Proxy Interview Support',
    desc: 'Live, expert-guided support through your technical interview rounds.',
  },
  {
    href: '/proxy-job-support/',
    title: 'Proxy Job Support',
    desc: 'Hands-on help with production issues, project tasks & client calls.',
  },
  {
    href: '/get-interview-scheduled/',
    title: 'Get Interview Scheduled',
    desc: 'Profile engineering to improve recruiter visibility & shortlisting.',
  },
  {
    href: '/job-application-candidate-marketing/',
    title: 'Job Application & Marketing',
    desc: 'We run your job-search campaign so your profile stays active.',
  },
];

const trustStats = ['Since 2008', '1000+ professionals', '50+ technologies', '24×7 live'];

export default function HeroHomeSplit() {
  return (
    <section id="home" className="hero-v2">
      <style>{`
        .hero-v2 {
          position: relative;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          background:
            radial-gradient(ellipse 90% 55% at 12% 14%, rgba(var(--pts-accent-rgb), 0.12) 0%, transparent 56%),
            radial-gradient(ellipse 75% 50% at 92% 82%, rgba(var(--pts-forest-rgb), 0.10) 0%, transparent 52%),
            linear-gradient(168deg, #f4fcf9 0%, #eaf7f0 46%, #eef9f3 100%);
        }
        .hero-v2-inner {
          width: 100%;
          max-width: var(--pts-content-max);
          margin: 0 auto;
          box-sizing: border-box;
          padding: clamp(2rem, 5vw, 3.75rem) 1rem clamp(2rem, 4vw, 3rem);
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1.75rem, 4vw, 3rem);
          align-items: center;
        }
        @media (min-width: 1000px) {
          .hero-v2-inner {
            grid-template-columns: minmax(0, 1.15fr) minmax(340px, 0.85fr);
          }
        }

        /* ── Eyebrow ── */
        .hero-v2-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.9rem;
          background: rgba(var(--pts-accent-rgb), 0.1);
          border: 1px solid rgba(var(--pts-forest-rgb), 0.26);
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--pts-forest);
          margin-bottom: 1.25rem;
          line-height: 1.35;
        }
        .hero-v2-eyebrow-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--pts-forest);
          box-shadow: 0 0 0 3px rgba(var(--pts-forest-rgb), 0.3);
          flex-shrink: 0;
        }

        /* ── Headline ── */
        .hero-v2-h1 {
          display: flex;
          flex-direction: column;
          gap: clamp(0.2rem, 1vw, 0.4rem);
          margin: 0 0 1.1rem;
          font-family: Georgia, 'Times New Roman', serif;
          font-weight: 800;
          color: var(--pts-text);
          line-height: 1.2;
          letter-spacing: -0.02em;
          font-size: clamp(1.55rem, 3vw, 2.35rem);
          text-wrap: balance;
        }
        .hero-v2-h1 .accent {
          font-style: italic;
          font-weight: 700;
          color: var(--pts-accent);
        }
        .hero-v2-h1 .tech {
          font-weight: 800;
          font-size: clamp(1.1rem, 2.1vw, 1.4rem);
          letter-spacing: -0.015em;
          color: var(--pts-text);
        }

        /* ── Subline ── */
        .hero-v2-sub {
          margin: 0 0 1.25rem;
          font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
          font-size: clamp(0.95rem, 1.5vw, 1.05rem);
          font-weight: 500;
          color: var(--pts-text-muted);
          line-height: 1.65;
          max-width: 40rem;
        }

        /* ── Capability list (safe scenario lines) ── */
        .hero-v2-needs {
          list-style: none;
          margin: 0 0 1.15rem;
          padding: 0.6rem 0 0.6rem 1rem;
          border-left: 2px solid rgba(var(--pts-accent-rgb), 0.45);
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          max-width: 40rem;
        }
        .hero-v2-need {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--pts-text-muted);
          line-height: 1.5;
        }
        .hero-v2-need > svg { flex-shrink: 0; margin-top: 0.2em; }
        .hero-v2-trustline {
          margin: 0 0 1.35rem;
          font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--pts-text-subtle);
          line-height: 1.5;
        }

        /* ── CTA buttons ── */
        .hero-v2-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .hero-v2-btn-wa,
        .hero-v2-btn-call {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease, transform 0.15s ease;
        }
        .hero-v2-btn-wa {
          background: #25d366;
          color: #fff;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }
        .hero-v2-btn-wa:hover { background: #20bd5a; transform: translateY(-1px); }
        .hero-v2-btn-call {
          background: #fff;
          color: var(--pts-text);
          border: 1px solid var(--pts-border);
          font-weight: 600;
        }
        .hero-v2-btn-call:hover { border-color: rgba(var(--pts-forest-rgb), 0.4); color: var(--pts-forest); }

        /* ── Trust chips ── */
        .hero-v2-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 0.75rem;
          list-style: none;
          margin: 0 0 1.15rem;
          padding: 0;
        }
        .hero-v2-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--pts-text-muted);
        }

        .hero-v2-legacy {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--pts-forest);
          border: 1px solid rgba(var(--pts-forest-rgb), 0.22);
          border-radius: 999px;
          padding: 0.3rem 0.8rem;
          text-decoration: none;
          background: rgba(var(--pts-accent-rgb), 0.06);
          transition: background 0.15s ease;
        }
        .hero-v2-legacy:hover { background: rgba(var(--pts-accent-rgb), 0.14); }

        /* ── Right: service card ── */
        .hero-v2-card {
          background: #fff;
          border: 1px solid rgba(var(--pts-forest-rgb), 0.16);
          border-radius: 18px;
          padding: 1.35rem 1.35rem 1.15rem;
          box-shadow: 0 14px 44px rgba(3, 40, 30, 0.09), inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }
        .hero-v2-card-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--pts-accent);
          margin: 0 0 0.9rem;
        }
        .hero-v2-service {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 0.85rem 0.75rem;
          border-radius: 12px;
          text-decoration: none;
          transition: background 0.15s ease, transform 0.15s ease;
        }
        .hero-v2-service + .hero-v2-service { margin-top: 0.25rem; }
        .hero-v2-service:hover { background: rgba(var(--pts-accent-rgb), 0.09); }
        .hero-v2-service-num {
          flex-shrink: 0;
          width: 30px; height: 30px;
          border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(var(--pts-accent-rgb), 0.14);
          color: var(--pts-forest);
          font-weight: 800; font-size: 0.85rem;
          margin-top: 0.1rem;
        }
        .hero-v2-service-body { min-width: 0; flex: 1 1 auto; }
        .hero-v2-service-title {
          display: flex; align-items: center; gap: 0.35rem;
          font-size: 0.95rem; font-weight: 700; color: var(--pts-text);
          line-height: 1.3;
        }
        .hero-v2-service-title .arrow { color: var(--pts-forest); opacity: 0; transform: translateX(-3px); transition: opacity 0.15s ease, transform 0.15s ease; }
        .hero-v2-service:hover .hero-v2-service-title .arrow { opacity: 1; transform: translateX(0); }
        .hero-v2-service-desc {
          font-size: 0.82rem; color: var(--pts-text-subtle);
          line-height: 1.5; margin: 0.2rem 0 0;
        }
        .hero-v2-card-stats {
          display: flex; flex-wrap: wrap; gap: 0.4rem 0.85rem;
          margin-top: 1rem; padding-top: 0.9rem;
          border-top: 1px solid var(--pts-border);
        }
        .hero-v2-card-stat {
          display: inline-flex; align-items: center; gap: 0.35rem;
          font-size: 0.76rem; font-weight: 600; color: var(--pts-text-muted);
        }

        /* ── Compliance ribbon (smooth, full-width) ── */
        .hero-v2-ribbon {
          background: var(--pts-dark);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding: 0.7rem 1rem;
        }
        .hero-v2-ribbon-inner {
          width: 100%;
          max-width: var(--pts-content-max);
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 0.35rem 0.85rem;
          text-align: center;
          font-size: 0.78rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.68);
        }
        .hero-v2-ribbon-inner a {
          color: rgba(255, 255, 255, 0.88);
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .hero-v2-ribbon-inner a:hover { color: var(--pts-accent); }
        .hero-v2-ribbon-sep { color: rgba(255, 255, 255, 0.28); }

        @media (max-width: 640px) {
          .hero-v2-ctas { flex-direction: column; }
          .hero-v2-btn-wa, .hero-v2-btn-call { width: 100%; justify-content: center; min-height: 50px; }
        }
      `}</style>

      <div className="hero-v2-inner">
        {/* ── Left: copy ── */}
        <div className="hero-v2-copy">
          <span className="hero-v2-eyebrow">
            <span className="hero-v2-eyebrow-dot" aria-hidden />
            24×7 Live Job Support · Proxy Interview Support · Since 2008
          </span>

          <h1 className="hero-v2-h1">
            <span>Technical Interview, Profile &amp;</span>
            <span className="accent">On-the-Job Support for IT Professionals</span>
            <span className="tech">AI · ML · MLOps · DevOps · SRE · Cloud · Backend · Full-Stack Engineers</span>
          </h1>

          <p className="hero-v2-sub">
            Role-specific proxy interview support, profile engineering and hands-on technical guidance — coding rounds,
            system design, production issues and client meetings handled live by senior engineers in your timezone.
          </p>

          <ul className="hero-v2-needs">
            {[
              'Live proxy interview support through technical rounds & system design',
              'Hands-on help with production issues and project deadlines',
              'Coding rounds, client calls & architecture discussions — with an expert beside you',
              'Profile engineering to improve recruiter visibility & shortlisting',
              'Job-search marketing that keeps your applications active with recruiters',
            ].map((need) => (
              <li key={need} className="hero-v2-need">
                <CheckIcon />
                <span>{need}</span>
              </li>
            ))}
          </ul>

          <p className="hero-v2-trustline">
            Trusted by IT professionals across USA, UK, Canada, Europe &amp; Australia · ⚡ Start within 1 hour
          </p>

          <div className="hero-v2-ctas">
            <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="hero-v2-btn-wa">
              <WhatsAppIcon />
              Get Instant Help on WhatsApp
            </a>
            <Link href="tel:+919660614469" className="hero-v2-btn-call">
              <PhoneIcon />
              Talk to an Expert
            </Link>
          </div>

          <ul className="hero-v2-chips">
            {trustChips.map((chip) => (
              <li key={chip} className="hero-v2-chip">
                <CheckIcon />
                {chip}
              </li>
            ))}
          </ul>

          <a href="/usa-it-job-support-legacy/" className="hero-v2-legacy">
            <span aria-hidden>✦</span> Trusted Since 2008 · USA IT Job Support
          </a>
        </div>

        {/* ── Right: service entry card ── */}
        <aside className="hero-v2-card" aria-label="How we help">
          <p className="hero-v2-card-label">How we help</p>
          {services.map((s, i) => (
            <Link key={s.href} href={s.href} className="hero-v2-service">
              <span className="hero-v2-service-num" aria-hidden>{i + 1}</span>
              <span className="hero-v2-service-body">
                <span className="hero-v2-service-title">
                  {s.title}
                  <span className="arrow"><ArrowIcon /></span>
                </span>
                <span className="hero-v2-service-desc">{s.desc}</span>
              </span>
            </Link>
          ))}
          <div className="hero-v2-card-stats">
            {trustStats.map((stat) => (
              <span key={stat} className="hero-v2-card-stat">
                <CheckIcon />
                {stat}
              </span>
            ))}
          </div>
        </aside>
      </div>

      {/* ── Compliance ribbon — smooth, on-brand full-width band ── */}
      <div className="hero-v2-ribbon">
        <p className="hero-v2-ribbon-inner">
          <span>
            Expert-led interview preparation, technical mentoring &amp; job support. We do not substitute candidates or
            guarantee jobs, interviews or salary outcomes.
          </span>
          <span className="hero-v2-ribbon-sep" aria-hidden>·</span>
          <Link href="/disclaimer/">Disclaimer</Link>
          <span className="hero-v2-ribbon-sep" aria-hidden>·</span>
          <Link href="/service-delivery-policy/">Service Delivery Policy</Link>
        </p>
      </div>
    </section>
  );
}
