'use client';

import { useState } from 'react';
import Link from 'next/link';
import { jobSupportLinks } from '@/data/navigation';

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside style={{ fontSize: '0.875rem' }}>
      <div
        className="card sidebar-career-services"
        style={{ padding: '1.25rem', marginBottom: '1.25rem' }}
      >
        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '0.75rem' }}>
          Career Support Services
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link href="/resume-linkedin-optimization-for-developers/" className="sidebar-nav-link">
            Resume &amp; LinkedIn Optimization
          </Link>
          <Link href="/interview-mentoring-for-it-professionals/" className="sidebar-nav-link">
            Interview Mentoring
          </Link>
        </div>
      </div>

      <div className="card" style={{ padding: '1.25rem' }}>
        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--pts-text)', marginBottom: '0.75rem' }}>
          Job Support by Technology
        </h3>

        <button
          type="button"
          className="sidebar-toggle"
          onClick={() => setExpanded(!expanded)}
          style={{
            display: 'none',
            width: '100%',
            background: 'rgba(0, 223, 130, 0.1)',
            border: '1px solid var(--pts-border)',
            borderRadius: '6px',
            padding: '0.5rem 0.75rem',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: '0.875rem',
            color: 'var(--pts-forest)',
            fontWeight: 600,
            marginBottom: '0.5rem',
            textAlign: 'left',
          }}
        >
          {expanded ? '▲ Hide Categories' : '▼ View Job Support Categories'}
        </button>

        <div
          className={expanded ? 'sidebar-links expanded' : 'sidebar-links'}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          {jobSupportLinks.map((link) => (
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
        @media (max-width: 768px) {
          /* Inner pages: redundant on small screens (long pages + bottom CTAs); keep Job Support categories */
          .sidebar-career-services {
            display: none !important;
          }
          .sidebar-toggle { display: block !important; }
          .sidebar-links:not(.expanded) { display: none !important; }
        }
      `}</style>
    </aside>
  );
}
