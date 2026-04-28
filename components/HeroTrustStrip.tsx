const FG = 'var(--pts-forest)';

function TrustIcon({ id }: { id: 'secure' | 'team' | 'clock' | 'headset' }) {
  const c = { width: 40, height: 40, fill: 'none' as const, stroke: FG, strokeWidth: 1.75, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (id) {
    case 'secure':
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'team':
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    case 'headset':
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <path d="M3 18v-6a9 9 0 0118 0v6" />
          <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
        </svg>
      );
    default:
      return null;
  }
}

const items = [
  { id: 'secure', label: 'Secure & Confidential', icon: 'secure' as const },
  { id: 'team', label: 'Expert Team', icon: 'team' as const },
  { id: 'support247', label: '24/7 Support', icon: 'clock' as const },
  { id: 'instant', label: 'Instant Response', icon: 'headset' as const },
];

/** White strip below hero — four trust cards, full width on desktop */
export default function HeroTrustStrip() {
  return (
    <section
      aria-label="Why choose us"
      style={{
        background: 'var(--pts-bg)',
        padding: '2rem 1rem',
        borderBottom: '1px solid var(--pts-border)',
      }}
    >
      <style>{`
        .hero-trust-grid {
          display: grid;
          width: 100%;
          gap: 1rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .hero-trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .hero-trust-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
      `}</style>
      <div style={{ width: '100%', maxWidth: 'var(--pts-content-max)', margin: '0 auto' }}>
        <div className="hero-trust-grid">
          {items.map((item) => (
            <div
              key={item.id}
              className="pts-lp-card pts-lp-card--lift"
              style={{
                padding: '1.5rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                gap: '0.85rem',
                minHeight: '120px',
              }}
            >
              <TrustIcon id={item.icon} />
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--pts-text-muted)', lineHeight: 1.35 }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
