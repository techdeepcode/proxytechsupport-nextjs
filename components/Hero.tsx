type Props = {
  variant?: 'light' | 'legacyDark';
};

export default function Hero({ variant = 'light' }: Props) {
  const dark = variant === 'legacyDark';

  if (dark) {
    return (
      <section id="home" style={{ padding: '3rem 1rem 4.5rem', textAlign: 'center' }}>
        <style>{`
          .hero-legacy-btn-call {
            background: var(--pts-accent);
            color: var(--pts-on-accent);
            padding: 0.75rem 1.75rem;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.95rem;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: background 0.2s, transform 0.2s;
          }
          .hero-legacy-btn-call:hover { background: var(--pts-accent-hover); color: var(--pts-on-accent); transform: translateY(-1px); }
          .hero-legacy-btn-wa {
            background: #25D366;
            color: #fff;
            padding: 0.75rem 1.75rem;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.95rem;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
          }
          .hero-legacy-btn-wa:hover { filter: brightness(1.06); color: #fff; }
          .hero-legacy-btn-ghost {
            background: transparent;
            color: #ffffff;
            padding: 0.75rem 1.75rem;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.95rem;
            text-decoration: none;
            border: 2px solid rgba(255, 255, 255, 0.95);
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: background 0.2s, border-color 0.2s;
          }
          .hero-legacy-btn-ghost:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: #ffffff;
            color: #ffffff;
          }
        `}</style>
        <div style={{ width: '100%', maxWidth: 'var(--pts-content-max)', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: 'clamp(1.65rem, 4.2vw, 2.75rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.28,
              marginBottom: '1.75rem',
            }}
          >
            Professional IT Job Support &amp; Interview Assistance for USA, UK, Canada, and Worldwide
          </h1>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: '1rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap',
            }}
          >
            <span aria-hidden style={{ fontSize: '1.1rem' }}>
              🎯
            </span>
            Years of Expertise | Real-Time Support | Global Coverage
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem 1.25rem',
              fontSize: '0.98rem',
              color: 'rgba(255, 255, 255, 0.88)',
              marginBottom: '2.25rem',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <span aria-hidden>🌐</span> USA, UK, Canada &amp; More
            </span>
            <span style={{ opacity: 0.45 }} aria-hidden>
              {' '}
              |{' '}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <span aria-hidden>🕐</span> 24×7 Available
            </span>
            <span style={{ opacity: 0.5 }}> | </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <span aria-hidden>✓</span> 1000+ Successful Cases
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              marginBottom: '2.5rem',
            }}
          >
            <a href="tel:+919660614469" className="hero-legacy-btn-call">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              CALL NOW
            </a>
            <a
              href="https://wa.me/919660614469"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-legacy-btn-wa"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WHATSAPP NOW
            </a>
            <a href="mailto:support@proxytechsupport.com" className="hero-legacy-btn-ghost">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              EMAIL US
            </a>
          </div>
        </div>
      </section>
    );
  }

  /* —— Light variant (non-home) —— */
  return (
    <section
      id="home"
      style={{
        background: 'linear-gradient(180deg, var(--pts-bg) 0%, var(--pts-hero-mid) 55%, var(--pts-tech-header) 100%)',
        padding: '5rem 1rem 4rem',
        textAlign: 'center',
        borderBottom: '1px solid var(--pts-border)',
      }}
    >
      <style>{`
        .hero-btn-primary {
          background: var(--pts-accent);
          color: var(--pts-on-accent);
          padding: 0.85rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s, transform 0.2s;
        }
        .hero-btn-primary:hover { background: var(--pts-accent-hover); color: var(--pts-on-accent); transform: translateY(-1px); }
        .hero-btn-wa { background: #25D366; color: #fff; padding: 0.85rem 2rem; border-radius: 50px; font-weight: 600; font-size: 1rem; text-decoration: none; display: inline-block; transition: filter 0.2s; }
        .hero-btn-wa:hover { filter: brightness(1.05); color: #fff; }
        .hero-btn-outline {
          background: transparent;
          color: var(--pts-forest);
          padding: 0.85rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          border: 2px solid var(--pts-forest);
          display: inline-block;
          transition: background 0.2s, color 0.2s;
        }
        .hero-btn-outline:hover { background: var(--pts-forest); color: #ffffff; }
      `}</style>
      <div style={{ width: '100%', maxWidth: 'var(--pts-content-max)', margin: '0 auto' }}>
        <h1
          style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
            fontWeight: 800,
            color: 'var(--pts-text)',
            lineHeight: 1.3,
            marginBottom: '1.5rem',
          }}
        >
          Professional IT Job Support &amp; Interview Assistance for USA, UK, Canada, and Worldwide
        </h1>

        <p
          style={{
            fontSize: '1.15rem',
            color: 'var(--pts-accent)',
            marginBottom: '0.5rem',
            fontWeight: 600,
          }}
        >
          Years of Expertise | Real-Time Support | Global Coverage
        </p>
        <p style={{ fontSize: '1rem', color: 'var(--pts-text-muted)', marginBottom: '2rem' }}>
          USA, UK, Canada &amp; More | 24×7 Available | 1000+ Successful Cases
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '2.5rem',
          }}
        >
          <a href="tel:+919660614469" className="hero-btn-primary">
            Call Now
          </a>
          <a
            href="https://wa.me/919660614469"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-wa"
          >
            WhatsApp Now
          </a>
          <a href="mailto:support@proxytechsupport.com" className="hero-btn-outline">
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
