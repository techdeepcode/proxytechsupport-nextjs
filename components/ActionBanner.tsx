'use client';

import { WHATSAPP_ME_URL } from '@/lib/whatsapp';

interface ActionBannerProps {
  label?: string;
  headline?: string;
}

const CALL = 'tel:+919660614469';

function WAIcon() {
  return (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

export default function ActionBanner({
  label = 'Expert Help Available',
  headline = 'Need real-time IT job support or interview help? Our experts are available 24/7 — USA, UK, Canada & worldwide.',
}: ActionBannerProps) {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #030f0f 0%, #03624c 100%)',
        borderRadius: '12px',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
      }}
    >
      <div>
        <p style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#00df82',
          marginBottom: '0.3rem',
        }}>
          {label}
        </p>
        <p style={{
          fontSize: '1rem',
          fontWeight: 700,
          color: '#ffffff',
          lineHeight: 1.35,
          margin: 0,
          maxWidth: 520,
        }}>
          {headline}
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
        <a
          href={WHATSAPP_ME_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: '#25D366',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '0.875rem',
            padding: '0.65rem 1.25rem',
            borderRadius: '50px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          <WAIcon />
          Get Instant Help
        </a>
        <a
          href={CALL}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(255,255,255,0.12)',
            color: '#ffffff',
            fontWeight: 600,
            fontSize: '0.875rem',
            padding: '0.65rem 1.25rem',
            borderRadius: '50px',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.3)',
            whiteSpace: 'nowrap',
          }}
        >
          <PhoneIcon />
          Call Now
        </a>
      </div>
    </div>
  );
}
