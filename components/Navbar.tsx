'use client';

import { useState, useEffect, type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mainNavLinks, jobSupportLinks } from '@/data/navigation';
import { SITE_NAME } from '@/lib/site-seo';


function BriefcaseIcon() {
  return (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20 7h-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM10 5h4v2h-4V5z" />
    </svg>
  );
}

type Props = {
  /** `light` (default): white bar, charcoal links, mint Job Support pill + CTAs. `legacyDark`: dark bar for special layouts. */
  variant?: 'light' | 'legacyDark';
};

export default function Navbar({ variant = 'light' }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dark = variant === 'legacyDark';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle: CSSProperties = dark
    ? {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'var(--pts-nav-bg-scrolled)' : 'var(--pts-nav-bg)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'background 0.25s ease',
        boxShadow: scrolled ? '0 4px 24px rgba(0, 0, 0, 0.35)' : 'none',
      }
    : {
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'var(--pts-bg)',
        borderBottom: '1px solid var(--pts-border)',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
        transition: 'box-shadow 0.3s ease',
      };

  const linkColor = dark ? '#ffffff' : 'var(--pts-text-muted)';
  const linkHoverDark = 'rgba(255, 255, 255, 0.85)';
  const logoColor = dark ? '#ffffff' : 'var(--pts-text)';
  const logoTaglineColor = dark ? 'var(--pts-accent)' : 'var(--pts-forest)';

  return (
    <nav style={navStyle}>
      <div
        style={{
          width: '100%',
          maxWidth: 'var(--pts-content-max)',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '68px',
          gap: '0.75rem',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
          <Image
            src="/images/logo.png"
            alt="Proxy Tech Support Logo"
            width={40}
            height={40}
            style={{ objectFit: 'contain' }}
          />
          <span
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.12rem',
              lineHeight: 1.2,
              WebkitFontSmoothing: 'antialiased',
            }}
          >
            <span
              style={{
                fontWeight: 800,
                fontSize: '1.02rem',
                color: logoColor,
                letterSpacing: '-0.02em',
                textShadow: 'none',
              }}
            >
              {SITE_NAME}
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: logoTaglineColor,
                opacity: dark ? 1 : 0.95,
              }}
            >
              Job Support &amp; Proxy
            </span>
          </span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flex: 1, justifyContent: 'center', flexWrap: 'wrap' }} className="desktop-nav">
          {mainNavLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div
                  key={link.label}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className="nav-job-support-btn"
                    style={{
                      background: 'var(--pts-accent)',
                      border: dark ? 'none' : '1px solid rgba(var(--pts-accent-rgb), 0.35)',
                      cursor: 'pointer',
                      padding: '0.42rem 1rem',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: 'var(--pts-on-accent)',
                      fontFamily: 'inherit',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      borderRadius: '9999px',
                      boxShadow: dark
                        ? '0 1px 3px rgba(0,0,0,0.25)'
                        : '0 1px 3px rgba(0, 0, 0, 0.08)',
                      transition: 'background 0.2s, box-shadow 0.2s',
                    }}
                  >
                    <BriefcaseIcon />
                    {link.label} <span style={{ fontSize: '0.65rem', opacity: 0.9 }}>▾</span>
                  </button>
                  {dropdownOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        marginTop: '0.35rem',
                        background: 'var(--pts-bg)',
                        border: '1px solid var(--pts-border)',
                        borderRadius: '10px',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                        minWidth: '280px',
                        zIndex: 200,
                        padding: '0.5rem 0',
                      }}
                    >
                      {jobSupportLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          style={{
                            display: 'block',
                            padding: '0.5rem 1.25rem',
                            fontSize: '0.875rem',
                            color: 'var(--pts-text-muted)',
                            whiteSpace: 'nowrap',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--pts-section-alt)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: linkColor,
                  textDecoration: 'none',
                  borderRadius: '4px',
                  transition: 'color 0.2s, opacity 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = dark ? linkHoverDark : 'var(--pts-forest)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = linkColor;
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="nav-cta-row" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <a
            href="tel:+919660614469"
            className="nav-cta-call"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 1rem',
              borderRadius: 999,
              border: '1px solid var(--pts-border-strong)',
              background: 'var(--pts-bg)',
              color: 'var(--pts-text)',
              fontSize: '0.86rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}
          >
            <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Now
          </a>
          <a
            href="https://wa.me/919660614469"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-wa"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 1rem',
              borderRadius: 999,
              background: 'var(--pts-accent)',
              color: '#ffffff',
              fontSize: '0.86rem',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
              transition: 'filter 0.2s',
            }}
          >
            <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: dark ? '#ffffff' : 'var(--pts-text)',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <div
          style={{
            background: dark ? 'var(--pts-nav-bg)' : 'var(--pts-bg)',
            borderTop: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--pts-border)',
            padding: '1rem',
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >
          {mainNavLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.label}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontWeight: 700,
                      padding: '0.5rem 1rem',
                      marginBottom: '0.35rem',
                      color: 'var(--pts-on-accent)',
                      fontSize: '0.88rem',
                      background: 'var(--pts-accent)',
                      borderRadius: '9999px',
                      border: '1px solid rgba(var(--pts-accent-rgb), 0.35)',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
                    }}
                  >
                    <BriefcaseIcon />
                    {link.label}
                  </div>
                  {jobSupportLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: 'block',
                        padding: '0.4rem 0 0.4rem 1rem',
                        fontSize: '0.875rem',
                        color: dark ? 'rgba(255,255,255,0.88)' : 'var(--pts-text-muted)',
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.6rem 0',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: dark ? '#ffffff' : 'var(--pts-text-muted)',
                  borderBottom: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--pts-border)',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        .nav-job-support-btn:hover {
          background: var(--pts-accent-hover) !important;
        }
        .nav-cta-call:hover {
          border-color: var(--pts-accent) !important;
          color: var(--pts-forest) !important;
        }
        .nav-cta-wa:hover {
          filter: brightness(1.05);
        }
        @media (min-width: 769px) {
          .nav-cta-call,
          .nav-cta-wa {
            display: inline-flex !important;
          }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .nav-cta-row { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
