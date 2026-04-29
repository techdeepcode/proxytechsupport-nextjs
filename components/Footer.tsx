import Link from 'next/link';
import SocialIcons from '@/components/SocialIcons';

const locationLinks = [
  { label: 'Job Support USA', href: '/job-support-usa/' },
  { label: 'Job Support UK', href: '/job-support-uk/' },
  { label: 'Job Support Canada', href: '/job-support-canada/' },
  { label: 'Job Support Australia', href: '/job-support-australia/' },
  { label: 'Job Support Europe', href: '/job-support-europe/' },
  { label: 'Job Support Germany', href: '/job-support-germany/' },
  { label: 'Job Support Singapore', href: '/job-support-singapore/' },
  { label: 'Job Support New Zealand', href: '/job-support-newzealand/' },
];

const techLinks = [
  { label: 'Java Job Support', href: '/java-job-support-usa/' },
  { label: 'Node.js Job Support', href: '/nodejs-job-support-usa/' },
  { label: 'DevOps Job Support', href: '/devops-job-support-usa/' },
  { label: 'React Job Support', href: '/react-job-support/' },
  { label: 'Python Job Support', href: '/python-job-support/' },
  { label: 'AWS Job Support', href: '/aws-job-support/' },
  { label: '.NET Job Support', href: '/dotnet-job-support/' },
];

const serviceLinks = [
  { label: 'Production Issue Support', href: '/production-issue-support/' },
  { label: 'Struggling in Your IT Job?', href: '/struggling-in-job-developer-help/' },
  { label: 'Interview Support Global', href: '/interview-support-global/' },
  { label: 'Failed Interview Help', href: '/failed-interview-help/' },
  { label: 'Proxy Interview Support', href: '/proxy-interview-support/' },
  { label: 'Proxy Job Support', href: '/proxy-job-support/' },
];

const resourceLinks = [
  { label: 'Blog', href: '/blog/' },
  { label: 'Interview Questions', href: '/interviews/' },
  { label: 'Technologies', href: '/#tech' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4
      style={{
        color: 'var(--pts-footer-accent)',
        fontWeight: 700,
        marginBottom: '0.85rem',
        fontSize: '0.875rem',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </h4>
  );
}

function FooterLinks({ links }: { links: Array<{ label: string; href: string }> }) {
  return (
    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.42rem' }}>
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="footer-link">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

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
          gap: 0.4rem;
          line-height: 1.5;
          transition: color 0.15s;
        }
        .footer-link:hover {
          color: var(--pts-footer-accent);
        }
        .footer-main-grid {
          display: grid;
          width: 100%;
          gap: 2rem;
          grid-template-columns: 1fr;
          align-items: start;
        }
        .footer-seo-grid {
          display: grid;
          width: 100%;
          gap: 2rem;
          grid-template-columns: 1fr 1fr;
          align-items: start;
        }
        @media (min-width: 768px) {
          .footer-main-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .footer-seo-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
      `}</style>

      <div
        style={{
          width: '100%',
          maxWidth: 'var(--pts-content-max)',
          margin: '0 auto',
          padding: '0 1rem',
        }}
      >
        {/* ── Top: About + Contact ───────────────────────────────────── */}
        <div className="footer-main-grid" style={{ marginBottom: '2.5rem' }}>
          <div style={{ gridColumn: 'span 2' }} className="footer-about-col">
            <h3 style={{ color: 'var(--pts-footer-accent)', fontWeight: 800, marginBottom: '0.75rem', fontSize: '1rem' }}>
              ProxyTechSupport
            </h3>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.75, maxWidth: '480px' }}>
              Real-time IT job support and proxy interview assistance for developers across USA, UK, Canada, Australia,
              Europe, Germany, Singapore, and New Zealand. 1000+ developers helped. All time zones covered.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+919660614469" className="footer-link" style={{ fontWeight: 600 }}>
                <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                +91 96606 14469
              </a>
              <a href="mailto:support@proxytechsupport.com" className="footer-link">
                <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                support@proxytechsupport.com
              </a>
            </div>
            <SocialIcons style={{ color: 'var(--pts-footer-muted)', marginTop: '0.85rem' }} />
          </div>

          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <FooterLinks links={resourceLinks} />
          </div>
        </div>

        <hr style={{ border: 0, borderTop: '1px solid var(--pts-footer-border)', margin: '0 0 2rem' }} />

        {/* ── SEO link grid: 4 columns ────────────────────────────────── */}
        <div className="footer-seo-grid" style={{ marginBottom: '2.5rem' }}>
          <div>
            <FooterHeading>Job Support by Location</FooterHeading>
            <FooterLinks links={locationLinks} />
          </div>

          <div>
            <FooterHeading>Job Support by Technology</FooterHeading>
            <FooterLinks links={techLinks} />
          </div>

          <div>
            <FooterHeading>Popular Services</FooterHeading>
            <FooterLinks links={serviceLinks} />
          </div>

          <div>
            <FooterHeading>Resources</FooterHeading>
            <FooterLinks links={resourceLinks} />
          </div>
        </div>

        <hr style={{ border: 0, borderTop: '1px solid var(--pts-footer-border)', margin: '0 0 1.5rem' }} />

        {/* ── Copyright ───────────────────────────────────────────────── */}
        <p
          style={{
            textAlign: 'center',
            fontSize: '0.82rem',
            color: 'rgba(255, 255, 255, 0.4)',
          }}
        >
          © {year} proxytechsupport.com — IT Job Support &amp; Proxy Interview Assistance | USA • UK • Canada •
          Australia • Europe
        </p>
      </div>
    </footer>
  );
}
