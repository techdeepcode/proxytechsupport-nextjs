import SocialIcons from '@/components/SocialIcons';

type Props = {
  /** `legacyDark`: dark strip + phone/mail + socials (site default). `light`: forest bar, contact only. */
  variant?: 'light' | 'legacyDark';
};

export default function TopBar({ variant = 'legacyDark' }: Props) {
  if (variant === 'legacyDark') {
    return (
      <div
        style={{
          background: 'var(--pts-topbar-bg)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '10px 0',
          fontSize: '0.875rem',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 'var(--pts-content-max)',
            margin: '0 auto',
            padding: '0 1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem', color: '#ffffff' }}>
            <span style={{ fontWeight: 500, lineHeight: 1.45 }}>
              🔥 24×7 Job Support &amp; Interview Assistance | 1000+ Developers Helped | Instant Help | USA • UK • Canada
            </span>
          </div>
          <SocialIcons style={{ color: '#ffffff' }} />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: 'var(--pts-forest)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        padding: '8px 0',
        fontSize: '0.875rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 'var(--pts-content-max)',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <a href="tel:+919660614469" style={{ color: '#ffffff', fontWeight: 600 }}>
          +91 96606 14469
        </a>
        <span style={{ color: 'rgba(255, 255, 255, 0.88)' }}>support@proxytechsupport.com</span>
      </div>
    </div>
  );
}
