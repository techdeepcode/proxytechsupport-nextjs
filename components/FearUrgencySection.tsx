import { WHATSAPP_ME_URL } from '@/lib/whatsapp';

const bullets = [
  'Final technical interview round is approaching within 24–48 hours',
  'Production issue is blocking release or client delivery',
  'Daily standups are becoming increasingly stressful',
  'Client meetings or architecture discussions feel risky',
  'Coding rounds or system design interviews feel unconfident',
  'New project technology stack is unfamiliar',
  'Manager escalation or performance pressure is increasing',
  'Profile is getting zero recruiter visibility or interview calls',
  'Transitioning into an unfamiliar technology or senior role',
];

export default function FearUrgencySection() {
  return (
    <section
      style={{
        padding: 'clamp(3rem, 6vw, 5rem) 1rem',
        background:
          'radial-gradient(ellipse 75% 55% at 0% 0%, rgba(var(--pts-accent-rgb), 0.08) 0%, transparent 55%), ' +
          'radial-gradient(ellipse 65% 50% at 100% 100%, rgba(var(--pts-forest-rgb), 0.12) 0%, transparent 50%), ' +
          'linear-gradient(180deg, #f5fdf9 0%, #edf8f3 50%, #f5fdf9 100%)',
        borderTop: '1px solid var(--pts-border)',
        borderBottom: '1px solid var(--pts-border)',
      }}
    >
      <div style={{ width: '100%', maxWidth: 'var(--pts-content-max)', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 2.5rem' }}>
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--pts-accent)',
              marginBottom: '0.85rem',
            }}
          >
            Urgent Support
          </p>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: 700,
              color: 'var(--pts-text)',
              lineHeight: 1.25,
              marginBottom: '1rem',
            }}
          >
            Don&apos;t Wait Until the Issue Escalates
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--pts-text-subtle)', lineHeight: 1.65 }}>
            High-pressure IT situations move fast. One failed proxy interview, missed production deadline, weak standup,
            or difficult client discussion can create serious career and income risk — especially on USA, UK, and Canada
            remote projects.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '0.85rem',
            marginBottom: '2.5rem',
          }}
        >
          {bullets.map((b) => (
            <div
              key={b}
              className="pts-card-glass"
              style={{
                padding: '0.9rem 1.1rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.65rem',
                fontSize: '0.9rem',
                color: 'var(--pts-text-muted)',
                lineHeight: 1.5,
              }}
            >
              <span style={{ color: 'var(--pts-accent)', fontWeight: 700, flexShrink: 0, marginTop: '0.05em' }}>◆</span>
              <span>{b}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a
            href={WHATSAPP_ME_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--pts-accent)',
              color: 'var(--pts-on-accent)',
              fontWeight: 700,
              fontSize: '0.97rem',
              padding: '0.9rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'filter 0.2s, transform 0.2s',
            }}
          >
            Get Urgent Support Now
          </a>
        </div>
      </div>
    </section>
  );
}
