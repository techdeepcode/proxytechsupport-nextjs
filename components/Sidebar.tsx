import Link from 'next/link';
import { jobSupportLinks } from '@/data/navigation';

const proxyInterviewLinks = [
  { label: 'Interview Proxy Support', href: '/proxy-interview-support/' },
  { label: 'AI/ML Proxy Interview', href: '/ai-ml-proxy-interview-support/' },
  { label: 'MLOps Proxy Interview', href: '/mlops-proxy-interview-support/' },
  { label: 'DevOps Proxy Interview', href: '/devops-proxy-interview-support/' },
  { label: 'SRE Proxy Interview', href: '/sre-proxy-interview-support/' },
  { label: 'Java Proxy Interview', href: '/java-proxy-interview-support/' },
  { label: 'Get Interview Scheduled', href: '/get-interview-scheduled/' },
];

export default function Sidebar() {
  return (
    <aside className="post-layout-sidebar" style={{ fontSize: '0.875rem' }}>
      <div className="card" style={{ padding: '1.25rem', marginBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '0.75rem' }}>
          Career Support Services
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link href="/get-interview-scheduled/" className="sidebar-nav-link">
            Get Interview Scheduled
          </Link>
          <Link href="/resume-linkedin-optimization-for-developers/" className="sidebar-nav-link">
            Resume &amp; LinkedIn Optimization
          </Link>
          <Link href="/interview-mentoring-for-it-professionals/" className="sidebar-nav-link">
            Interview Mentoring
          </Link>
        </div>
      </div>

      <div className="card" style={{ padding: '1.25rem', marginBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '0.75rem' }}>
          Proxy Interview Support
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {proxyInterviewLinks.map((link) => (
            <Link key={link.href} href={link.href} className="sidebar-nav-link">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="card" style={{ padding: '1.25rem' }}>
        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '0.75rem' }}>
          Job Support by Technology
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {jobSupportLinks.filter((link) => !link.hidden).map((link) => (
            <Link key={link.href} href={link.href} className="sidebar-nav-link">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .sidebar-nav-link {
          color: var(--pts-forest);
          font-weight: 500;
          text-decoration: none;
          line-height: 1.45;
          transition: color 0.15s ease;
        }
        .sidebar-nav-link:hover {
          color: var(--pts-accent-hover);
        }
        @media (max-width: 1023px) {
          /* Detailed pages (PostLayout): whole aside is duplicated vs nav/footer; hide on small screens */
          .post-layout-sidebar {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  );
}
