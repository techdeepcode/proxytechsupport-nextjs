import Link from 'next/link';
import { WHATSAPP_ME_URL } from '@/lib/whatsapp';

function SmallCheck() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="rgba(var(--pts-accent-rgb), 0.12)"
        stroke="var(--pts-accent)"
        strokeWidth={1.5}
      />
      <path
        d="M8 12l2.5 3L16 9"
        stroke="var(--pts-forest)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BarCheck() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      style={{ flexShrink: 0, marginTop: 1 }}
    >
      <path
        d="M8 12l2.5 3L16 9"
        stroke="var(--pts-accent)"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const trustPills = [
  '🔒 100% Confidential Support',
  '👨‍💻 Senior Developers (10+ yrs experience)',
  '⚡ Instant Response',
  '🌍 USA / UK / Canada Timezones',
];

const barItems = [
  'No Middlemen or Outsourcing',
  'In House Expert Team',
  'Secure & Confidential',
  'Instant Response',
  'Global Coverage',
];

const dashboardPills = ['No Middlemen', 'Same-Day Start', 'Job Support + Interview Help'];

function TargetIcon() {
  return (
    <svg width={17} height={17} viewBox="0 0 24 24" fill="none" aria-hidden style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" stroke="var(--pts-accent)" strokeWidth={1.4} opacity={0.9} />
      <circle cx="12" cy="12" r="6" stroke="var(--pts-accent)" strokeWidth={1.4} opacity={0.85} />
      <circle cx="12" cy="12" r="2.25" fill="var(--pts-accent)" />
    </svg>
  );
}

function DashPillCheck() {
  return (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 12l2.5 3L16 9"
        stroke="var(--pts-forest)"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HeroHomeSplit() {
  return (
    <div className="hero-banner-stack">
      <section
        id="home"
        className="hero-split-section"
        style={{
          padding: 'clamp(2rem, 5vw, 4rem) 1rem 0',
        }}
      >
        <style>{`
          /*
            Hero stack: nearly full viewport minus header; small bottom trim only.
          */
          .hero-banner-stack {
            position: relative;
            overflow-x: visible;
            overflow-y: visible;
            display: flex;
            flex-direction: column;
            min-height: calc(100dvh - var(--pts-sticky-header-offset) - clamp(0.5rem, 2vh, 1.25rem));
            min-height: calc(100svh - var(--pts-sticky-header-offset) - clamp(0.5rem, 2vh, 1.25rem));
            margin-bottom: 0;
            background:
              radial-gradient(ellipse 95% 58% at 12% 16%, rgba(var(--pts-accent-rgb), 0.14) 0%, transparent 56%),
              radial-gradient(ellipse 78% 52% at 90% 80%, rgba(var(--pts-forest-rgb), 0.11) 0%, transparent 52%),
              linear-gradient(168deg, #f3fcf9 0%, #e8f6ef 38%, #dff3ea 72%, #f4fbf7 100%);
          }
          /* Graph-paper line grid (thin white lines on mint) — matches reference artwork */
          .hero-banner-stack::before {
            content: '';
            position: absolute;
            inset: 0;
            pointer-events: none;
            opacity: 1;
            background-image:
              repeating-linear-gradient(
                to bottom,
                transparent 0,
                transparent 19px,
                rgba(255, 255, 255, 0.38) 19px,
                rgba(255, 255, 255, 0.38) 20px
              ),
              repeating-linear-gradient(
                to right,
                transparent 0,
                transparent 19px,
                rgba(255, 255, 255, 0.38) 19px,
                rgba(255, 255, 255, 0.38) 20px
              );
            mask-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.55) 0%,
              rgba(0, 0, 0, 0.4) 45%,
              rgba(0, 0, 0, 0.32) 100%
            );
            -webkit-mask-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.55) 0%,
              rgba(0, 0, 0, 0.4) 45%,
              rgba(0, 0, 0, 0.32) 100%
            );
          }
          /* Slight depth: faint forest tint at intersections (optional subtle texture) */
          .hero-banner-stack::after {
            content: '';
            position: absolute;
            inset: 0;
            pointer-events: none;
            opacity: 0.35;
            background-image: radial-gradient(
              rgba(var(--pts-forest-rgb), 0.09) 1px,
              transparent 1px
            );
            background-size: 20px 20px;
            mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.15) 100%);
            -webkit-mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.15) 100%);
          }
          .hero-split-section {
            box-sizing: border-box;
            position: relative;
            z-index: 1;
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            min-height: 0;
          }
          .hero-split-inner {
            position: relative;
            z-index: 1;
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            min-height: 0;
            width: 100%;
            /* space before dark trust strip — was only <1024px; iPad landscape (≥1024) had none */
            gap: clamp(1.35rem, 4vw, 2.5rem);
          }
          /* Fills space above the trust bar and vertically centers the grid — no mint gap under copy */
          .hero-split-center {
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 0;
            width: 100%;
          }
          @media (min-width: 1024px) {
            .hero-split-inner {
              width: 100%;
            }
          }
          .hero-split-grid {
            display: grid;
            gap: 2.25rem;
            width: 100%;
            max-width: var(--pts-content-max);
            margin: 0 auto;
            align-items: start;
          }
          /* Let copy column shrink so long lines wrap instead of overlapping the dashboard */
          .hero-split-copy {
            min-width: 0;
            max-width: 100%;
          }
          @media (min-width: 1024px) {
            .hero-split-grid {
              /* ~61% copy / ~39% dashboard — wider card, tighter gutter */
              grid-template-columns: minmax(0, 11fr) minmax(0, 7fr);
              column-gap: clamp(1.5rem, 3vw, 2.75rem);
              row-gap: 2.5rem;
              align-items: start;
            }
            /*
              Dashboard top aligns with main headline (below 24×7 pill):
              pill vertical padding + one text line + margin below pill (matches .hero-eyebrow-pill inline styles).
            */
            .hero-split-dashboard {
              margin-top: calc(0.35rem + 0.35rem + 0.75rem * 1.35 + 1.25rem);
            }
          }
          .hero-pill-tag {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            padding: 0.4rem 0.85rem;
            background: #f3f4f6;
            border: 1px solid rgba(var(--pts-forest-rgb), 0.28);
            border-radius: 999px;
            font-size: 0.8125rem;
            font-weight: 500;
            color: var(--pts-text-muted);
            box-shadow:
              0 1px 2px rgba(0, 0, 0, 0.04),
              inset 0 1px 0 rgba(255, 255, 255, 0.75);
          }
          .hero-split-btns {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
          }
          /* Flat CTAs: no elevation, no glow (WhatsApp = solid green; middle = white; right = theme mint) */
          .hero-split-btns .hero-btn-white,
          .hero-split-btns .hero-btn-muted,
          .hero-split-btns .hero-btn-wa {
            box-shadow: none !important;
            filter: none !important;
            text-shadow: none;
            text-decoration: none;
            transition:
              background-color 0.15s ease,
              border-color 0.15s ease,
              color 0.15s ease;
          }
          .hero-btn-white {
            display: inline-flex;
            align-items: center;
            gap: 0.45rem;
            background: #ffffff;
            color: var(--pts-text);
            padding: 0.75rem 1.35rem;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.92rem;
            border: 1px solid var(--pts-border);
          }
          .hero-btn-white:hover {
            border-color: rgba(var(--pts-forest-rgb), 0.4);
            color: var(--pts-forest);
            background: #ffffff;
          }
          .hero-btn-muted {
            display: inline-flex;
            align-items: center;
            gap: 0.45rem;
            background: var(--pts-tech-header);
            color: var(--pts-text);
            padding: 0.75rem 1.35rem;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.92rem;
            border: 1px solid rgba(var(--pts-forest-rgb), 0.28);
          }
          .hero-btn-muted:hover {
            border-color: rgba(var(--pts-forest-rgb), 0.45);
            color: var(--pts-forest);
            background: rgba(var(--pts-accent-rgb), 0.12);
          }
          .hero-btn-wa {
            display: inline-flex;
            align-items: center;
            gap: 0.45rem;
            background: #25d366;
            color: #ffffff;
            padding: 0.75rem 1.35rem;
            border-radius: 50px;
            font-weight: 700;
            font-size: 0.92rem;
            border: 1px solid rgba(0, 0, 0, 0.06);
          }
          .hero-btn-wa:hover {
            background: #20bd5a;
            color: #ffffff;
          }
          .hero-h1-line1,
          .hero-h1-line2,
          .hero-h1-line3 {
            display: block;
            white-space: normal;
            overflow-wrap: break-word;
          }
          .hero-h1-serif.hero-h1-stack {
            display: flex;
            flex-direction: column;
            gap: clamp(0.22rem, 1vw, 0.42rem);
          }
          .hero-h1-serif {
            font-family: Georgia, 'Times New Roman', serif;
            font-weight: 800;
            color: var(--pts-text);
            line-height: 1.22;
            letter-spacing: -0.02em;
            font-size: clamp(1.4rem, 2.9vw, 2.25rem);
            text-wrap: balance;
            max-width: 100%;
          }
          .hero-h1-accent {
            font-family: Georgia, 'Times New Roman', serif;
            font-style: italic;
            font-weight: 700;
            color: var(--pts-accent);
            line-height: 1.26;
          }
          .hero-h1-line3 {
            font-weight: 800;
            line-height: 1.26;
            font-size: clamp(0.95em, 2.4vw, 1em);
            letter-spacing: -0.018em;
          }
          @media (min-width: 1024px) {
            .hero-h1-serif {
              font-size: clamp(1.32rem, 1.65vw + 0.85rem, 2.05rem);
              line-height: 1.2;
            }
            .hero-h1-serif.hero-h1-stack {
              gap: clamp(0.28rem, 1.1vw, 0.48rem);
            }
          }
          .hero-subline-copy {
            margin-bottom: 0.65rem;
            display: flex;
            flex-direction: column;
            gap: 0.85rem;
          }
          .hero-subline-lead {
            display: flex;
            align-items: flex-start;
            gap: 0.55rem;
            margin: 0;
            font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
            font-size: clamp(0.94rem, 1.5vw, 1rem);
            font-weight: 500;
            color: var(--pts-text-muted);
            line-height: 1.65;
            letter-spacing: 0.01em;
          }
          .hero-subline-lead > svg {
            flex-shrink: 0;
            margin-top: 0.22em;
          }
          .hero-subline-pains {
            margin: 0;
            padding: 0.65rem 0 0.65rem 0.85rem;
            border-left: 2px solid rgba(var(--pts-accent-rgb), 0.45);
            border-radius: 0 0 0 6px;
            font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
            font-size: 0.875rem;
            font-weight: 500;
            color: var(--pts-text-subtle);
            line-height: 1.55;
            list-style: none;
          }
          .hero-subline-pains li {
            position: relative;
            padding-left: 0.1rem;
          }
          .hero-subline-pains li + li {
            margin-top: 0.35rem;
          }
          .hero-subline-2 {
            font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
            font-size: 0.875rem;
            font-weight: 500;
            color: var(--pts-text-subtle);
            margin-bottom: 1.35rem;
            line-height: 1.55;
          }
          .dash-feature-pill {
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            padding: 0.4rem 0.75rem;
            background: rgba(var(--pts-accent-rgb), 0.14);
            border: 1px solid rgba(var(--pts-forest-rgb), 0.28);
            border-radius: 999px;
            font-size: 0.78rem;
            font-weight: 600;
            color: var(--pts-forest);
            box-shadow:
              0 1px 2px rgba(0, 0, 0, 0.04),
              inset 0 1px 0 rgba(255, 255, 255, 0.65);
          }
          @keyframes hero-live-blink {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.35;
            }
          }
          .hero-live-dot {
            display: inline-block;
            flex-shrink: 0;
            border-radius: 50%;
          }
          .hero-live-dot--blink {
            animation: hero-live-blink 1.15s ease-in-out infinite;
            will-change: opacity;
          }
          .hero-live-badge {
            animation: hero-live-blink 1.15s ease-in-out infinite;
            will-change: opacity;
          }
          @media (prefers-reduced-motion: reduce) {
            .hero-live-dot--blink,
            .hero-live-badge {
              animation: none;
            }
          }

          /* ── Mobile hero overrides (≤768px) ── */
          @media (max-width: 768px) {
            /* Let hero shrink to content height — no forced full-screen */
            .hero-banner-stack {
              min-height: unset !important;
            }
            /* Reduce top padding so H1 hits above-the-fold immediately */
            .hero-split-section {
              padding-top: 1.5rem !important;
            }
            /* Single column: copy then metrics card (compact, still readable) */
            .hero-split-grid {
              grid-template-columns: 1fr;
              gap: 1.15rem;
            }
            .hero-split-dashboard > div:first-child {
              padding: 0.85rem 0.95rem 1rem !important;
            }
            .hero-split-dashboard > div:first-child > p:first-of-type {
              margin-bottom: 0.6rem !important;
              font-size: 0.58rem !important;
            }
            .hero-split-dashboard > div:first-child > div:nth-child(2) {
              gap: 0.5rem !important;
            }
            .hero-split-dashboard > div:first-child > div:nth-child(2) > div {
              min-height: 4.1rem !important;
              padding: 0.6rem 0.35rem !important;
            }
            .hero-split-dashboard > div:first-child > div:nth-child(2) > div > div:first-child {
              font-size: 1.12rem !important;
            }
            .hero-split-dashboard > div:first-child > div:nth-child(2) > div > div:last-child {
              font-size: 0.62rem !important;
              margin-top: 0.28rem !important;
            }
            .hero-split-dashboard > div:last-child {
              padding: 0.85rem 0.95rem 1rem !important;
            }
            .hero-split-dashboard > div:last-child > div:first-child {
              margin-bottom: 0.65rem !important;
              padding: 0.65rem 0.85rem !important;
            }
            .hero-split-dashboard > div:last-child > div:first-child > div:nth-child(2) > div:first-child {
              font-size: 0.84rem !important;
            }
            .hero-split-dashboard > div:last-child > div:first-child > div:nth-child(2) > div:last-child {
              font-size: 0.72rem !important;
            }
            /* Full-width CTA buttons, stacked, easy to tap */
            .hero-split-btns {
              flex-direction: column;
              gap: 0.6rem;
            }
            .hero-btn-wa,
            .hero-btn-white,
            .hero-btn-muted {
              width: 100%;
              justify-content: center;
              min-height: 52px;
              font-size: 1rem;
              border-radius: 12px;
            }
            /* Trust pills: wrap tighter */
            .hero-pill-tag {
              font-size: 0.75rem;
              padding: 0.3rem 0.65rem;
            }
            /* Compact trust pill row spacing */
            .hero-subline-copy {
              gap: 0.6rem;
            }
            /* Reduce H1 bottom margin */
            .hero-h1-serif.hero-h1-stack {
              margin-bottom: 0.85rem !important;
            }
            /* Tighter pain list */
            .hero-subline-pains {
              padding-top: 0.45rem;
              padding-bottom: 0.45rem;
            }
          }
        `}</style>

        <div className="hero-split-inner">
        <div className="hero-split-center">
        <div className="hero-split-grid">
          <div className="hero-split-copy">
            <div
              className="hero-eyebrow-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.9rem',
                background: 'rgba(var(--pts-accent-rgb), 0.1)',
                border: '1px solid rgba(var(--pts-forest-rgb), 0.28)',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.65)',
                borderRadius: 999,
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--pts-forest)',
                marginBottom: '1.25rem',
                lineHeight: 1.35,
              }}
            >
              <span
                className="hero-live-dot hero-live-dot--blink"
                style={{
                  width: 8,
                  height: 8,
                  background: 'var(--pts-forest)',
                  boxShadow: '0 0 0 3px rgba(var(--pts-forest-rgb), 0.35)',
                }}
                aria-hidden
              />
              24×7 Job Support &amp; Interview Assistance
            </div>

            <h1 className="hero-h1-serif hero-h1-stack" style={{ marginBottom: '1.15rem' }}>
              <span className="hero-h1-line1">Struggling at Work or Need Interview Assistance?</span>
              <span className="hero-h1-line2 hero-h1-accent">Get Real-Time Expert Support</span>
              <span className="hero-h1-line3">Real-Time Job Support + Interview Assistance — Worldwide</span>
            </h1>

            <div className="hero-subline-copy">
              <p className="hero-subline-lead">
                <TargetIcon />
                <span>
                  Fix bugs, handle meetings, and crack interviews confidently — with expert developers supporting you live.
                </span>
              </p>
              <ul className="hero-subline-pains">
                <li>Stuck on production issues?</li>
                <li>Deadlines piling up?</li>
                <li>Not confident in meetings?</li>
                <li>Worried about upcoming interviews?</li>
              </ul>
            </div>
            <p className="hero-subline-2">
              Trusted by developers across USA, UK, Canada &amp; worldwide · ⚡ Most users start within 1 hour
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {trustPills.map((label) => (
                <span key={label} className="hero-pill-tag">
                  <SmallCheck />
                  {label}
                </span>
              ))}
            </div>

            <div className="hero-split-btns">
              <a href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer" className="hero-btn-wa">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Instant Help on WhatsApp
              </a>
              <Link href="tel:+919660614469" className="hero-btn-white">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Talk to Expert Now
              </Link>
              <Link href="mailto:support@proxytechsupport.com" className="hero-btn-muted">
                Start Now
              </Link>
            </div>
          </div>

          {/* Live Dashboard card — on lg+ starts below 24×7 pill (aligned with headline) */}
          <div
            className="hero-split-dashboard"
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              border: '1px solid rgba(var(--pts-forest-rgb), 0.28)',
              boxShadow:
                '0 12px 40px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.92)',
              background: '#fff',
            }}
          >
            <div
              style={{
                position: 'relative',
                background: 'var(--pts-dashboard-bg)',
                padding: '1.15rem 1.2rem 1.35rem',
                borderTop: '2px solid var(--pts-accent)',
              }}
            >
              <p
                style={{
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.88)',
                  marginBottom: '0.95rem',
                  fontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif',
                }}
              >
                LIVE SUPPORT STATUS
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                }}
              >
                {[
                  { v: '1000+', l: 'Developers Helped' },
                  { v: '98.9%', l: 'Success Rate' },
                  { v: '50+', l: 'Technologies Covered' },
                  { v: '24×7', l: 'Live Support' },
                ].map((cell) => (
                  <div
                    key={cell.l}
                    style={{
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '5.25rem',
                      padding: '1.05rem 0.55rem',
                      borderRadius: 10,
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    <div style={{ fontSize: '1.28rem', fontWeight: 800, color: 'var(--pts-accent)', lineHeight: 1.15 }}>{cell.v}</div>
                    <div style={{ fontSize: '0.68rem', color: 'rgba(255, 255, 255, 0.48)', marginTop: '0.4rem', lineHeight: 1.25 }}>
                      {cell.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '1.15rem 1.2rem 1.25rem', background: '#fff' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  flexWrap: 'wrap',
                  marginBottom: '0.95rem',
                  padding: '0.85rem 1rem',
                  borderRadius: 12,
                  border: '1px solid rgba(var(--pts-forest-rgb), 0.28)',
                  background: 'var(--pts-section-alt)',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.85)',
                }}
              >
                <span
                  className="hero-live-dot hero-live-dot--blink"
                  style={{
                    width: 10,
                    height: 10,
                    background: 'var(--pts-forest)',
                    boxShadow: '0 0 0 3px rgba(var(--pts-forest-rgb), 0.35)',
                  }}
                  aria-hidden
                />
                <div style={{ flex: '1 1 140px', minWidth: 0 }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--pts-text)', lineHeight: 1.25 }}>
                    Experts Online Now — Ready to Join Immediately
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--pts-text-subtle)', marginTop: '0.15rem' }}>
                    Job support &amp; interview help — join live today
                  </div>
                </div>
                <span
                  className="hero-live-badge"
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: '#15803d',
                    background: 'rgba(34, 197, 94, 0.2)',
                    padding: '0.3rem 0.65rem',
                    borderRadius: 999,
                    flexShrink: 0,
                  }}
                >
                  Live
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {dashboardPills.map((p) => (
                  <span key={p} className="dash-feature-pill">
                    <DashPillCheck />
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>

      {/* Dark feature bar — flush under hero content, full viewport width */}
      <div
        className="hero-trust-strip"
        style={{
          position: 'relative',
          zIndex: 1,
          flexShrink: 0,
          alignSelf: 'stretch',
          width: 'calc(100% + 2rem)',
          marginLeft: '-1rem',
          marginRight: '-1rem',
          boxSizing: 'border-box',
          background: 'var(--pts-dark)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '0.65rem clamp(0.75rem, 2vw, 1.5rem)',
        }}
      >
        <style>{`
          .hero-feature-bar {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 0.35rem 0;
            width: 100%;
            max-width: var(--pts-content-max);
            margin: 0 auto;
          }
          .hero-feature-item {
            display: inline-flex;
            align-items: center;
            gap: 0.45rem;
            padding: 0.3rem 0.85rem;
            font-size: 0.8rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.92);
          }
          @media (min-width: 1024px) {
            .hero-feature-item:not(:last-child) {
              border-right: 1px solid rgba(255, 255, 255, 0.15);
            }
          }
        `}</style>
        <div className="hero-feature-bar">
          {barItems.map((text) => (
            <div key={text} className="hero-feature-item">
              <BarCheck />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
        </div>
      </section>
    </div>
  );
}
