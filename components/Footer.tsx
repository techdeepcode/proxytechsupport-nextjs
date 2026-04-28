import Link from 'next/link';
import SocialIcons from '@/components/SocialIcons';

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: 'Services', href: '/#services' },
    { label: 'Technologies', href: '/#tech' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Interview Questions', href: '/interviews/' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <footer
      style={{
        background: 'var(--pts-footer-bg)',
        color: 'var(--pts-footer-muted)',
        paddingTop: '3rem',
        paddingBottom: '1.5rem',
        borderTop: '1px solid var(--pts-footer-border)',
      }}
    >
      <style>{`
        .footer-link {
          font-size: 0.875rem;
          color: var(--pts-footer-muted);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
        }
        .footer-link:hover {
          color: var(--pts-footer-accent);
        }
        .footer-grid {
          display: grid;
          width: 100%;
          gap: 2rem;
          grid-template-columns: 1fr;
          align-items: start;
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>

      <div
        style={{
          width: '100%',
          maxWidth: 'var(--pts-content-max)',
          margin: '0 auto',
          padding: '0 1rem',
          marginBottom: '2rem',
        }}
      >
        <div className="footer-grid">
          <div>
            <h4 style={{ color: 'var(--pts-footer-accent)', fontWeight: 700, marginBottom: '1rem', fontSize: '1rem' }}>
              About Us
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--pts-footer-muted)', lineHeight: 1.7 }}>
              Years of experience providing real-time IT job support and interview proxy assistance for professionals working on USA, UK, and remote projects. Trusted by developers, freshers, and enterprise teams across India and globally.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'var(--pts-footer-accent)', fontWeight: 700, marginBottom: '1rem', fontSize: '1rem' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: 'var(--pts-footer-accent)', fontWeight: 700, marginBottom: '1rem', fontSize: '1rem' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="tel:+919660614469" className="footer-link">
                <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                +91 96606 14469
              </a>
              <a href="mailto:support@proxytechsupport.com" className="footer-link">
                <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                support@proxytechsupport.com
              </a>
              <SocialIcons style={{ color: 'var(--pts-footer-muted)', marginTop: '0.35rem' }} />
            </div>
          </div>
        </div>
      </div>

      <hr
        style={{
          width: '100%',
          border: 0,
          borderTop: '1px solid var(--pts-footer-border)',
          margin: 0,
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: 'var(--pts-content-max)',
          margin: '0 auto',
          padding: '1.5rem 1rem 0',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: 'rgba(255, 255, 255, 0.5)',
        }}
      >
        © {year} proxytechsupport.com | All Rights Reserved
      </div>
    </footer>
  );
}
