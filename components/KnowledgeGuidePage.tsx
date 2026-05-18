import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { WHATSAPP_ME_URL } from '@/lib/whatsapp';

export interface KBFaq {
  q: string;
  a: string;
}

export interface KBRelatedLink {
  href: string;
  label: string;
}

export interface KBSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface KnowledgeGuidePageProps {
  h1: string;
  intro: string;
  sections: KBSection[];
  relatedLinks: KBRelatedLink[];
  relatedGuides: KBRelatedLink[];
  faqs: KBFaq[];
  ctaHref?: string;
  ctaLabel?: string;
}

export default function KnowledgeGuidePage({
  h1,
  intro,
  sections,
  relatedLinks,
  relatedGuides,
  faqs,
  ctaHref,
  ctaLabel,
}: KnowledgeGuidePageProps) {
  const primaryCtaLabel = ctaLabel ?? 'Get Expert Support Now';

  return (
    <>
      <style>{`
        .kg-hero {
          background: linear-gradient(160deg, #030f0f 0%, #0a1618 60%, #030f0f 100%);
          padding: clamp(2.5rem, 6vw, 4rem) 1rem clamp(2rem, 5vw, 3rem);
        }
        .kg-hero-inner {
          width: 100%;
          max-width: 820px;
          margin: 0 auto;
        }
        .kg-eyebrow {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #00df82;
          margin-bottom: 0.85rem;
          display: block;
        }
        .kg-h1 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.55rem, 3.8vw, 2.3rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.22;
          margin-bottom: 1rem;
        }
        .kg-intro {
          font-size: clamp(0.95rem, 1.6vw, 1.05rem);
          color: rgba(255,255,255,0.75);
          line-height: 1.7;
          max-width: 680px;
          margin-bottom: 1.5rem;
        }
        .kg-hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
        }
        .kg-btn-primary {
          display: inline-flex;
          align-items: center;
          padding: 0.7rem 1.4rem;
          border-radius: 50px;
          background: #00df82;
          color: #030f0f;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          transition: filter 0.2s, transform 0.2s;
          white-space: nowrap;
        }
        .kg-btn-primary:hover { filter: brightness(1.08); transform: translateY(-1px); }
        .kg-btn-wa {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.7rem 1.4rem;
          border-radius: 50px;
          background: #25d366;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          transition: filter 0.2s, transform 0.2s;
          white-space: nowrap;
        }
        .kg-btn-wa:hover { filter: brightness(1.08); transform: translateY(-1px); }
        .kg-body {
          background: var(--pts-bg, #ffffff);
          padding: clamp(2rem, 5vw, 3.5rem) 1rem;
        }
        .kg-body-inner {
          width: 100%;
          max-width: 820px;
          margin: 0 auto;
        }
        .kg-section {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--pts-border, #e5e7eb);
        }
        .kg-section:last-of-type {
          border-bottom: none;
        }
        .kg-section-h2 {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          font-weight: 700;
          color: var(--pts-text, #030f0f);
          margin-bottom: 0.6rem;
          line-height: 1.3;
        }
        .kg-section-body {
          font-size: 0.97rem;
          color: var(--pts-text-muted, #4b5563);
          line-height: 1.75;
          margin-bottom: 0.5rem;
        }
        .kg-bullets {
          padding-left: 1.4rem;
          margin: 0.5rem 0 0;
        }
        .kg-bullets li {
          font-size: 0.95rem;
          color: var(--pts-text-muted, #4b5563);
          margin-bottom: 0.4rem;
          line-height: 1.6;
        }
        .kg-related-box {
          background: var(--pts-section-alt, #f9fafb);
          border: 1px solid var(--pts-border, #e5e7eb);
          border-radius: 10px;
          padding: 1.25rem;
          margin-bottom: 2rem;
        }
        .kg-related-label {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--pts-text-subtle, #9ca3af);
          margin-bottom: 0.75rem;
        }
        .kg-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .kg-chip-link {
          display: inline-block;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          border: 1px solid var(--pts-border, #e5e7eb);
          background: var(--pts-bg, #ffffff);
          color: var(--pts-forest, #03624c);
          font-size: 0.84rem;
          font-weight: 500;
          text-decoration: none;
          transition: border-color 0.15s, color 0.15s;
        }
        .kg-chip-link:hover {
          border-color: #00df82;
          color: var(--pts-forest, #03624c);
        }
        .kg-faq-section {
          margin-bottom: 2.5rem;
        }
        .kg-faq-h2 {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          font-weight: 700;
          color: var(--pts-text, #030f0f);
          margin-bottom: 1.25rem;
          padding-bottom: 0.4rem;
          border-bottom: 2px solid #00df82;
          display: inline-block;
        }
        .kg-faq-item {
          margin-bottom: 1.25rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--pts-border, #e5e7eb);
        }
        .kg-faq-item:last-child { border-bottom: none; }
        .kg-faq-q {
          font-size: 1rem;
          font-weight: 700;
          color: var(--pts-text, #030f0f);
          margin-bottom: 0.4rem;
          line-height: 1.45;
        }
        .kg-faq-a {
          font-size: 0.95rem;
          color: var(--pts-text-muted, #4b5563);
          line-height: 1.7;
          margin: 0;
        }
        .kg-cta-box {
          background: linear-gradient(160deg, #030f0f 0%, #0a1618 100%);
          border: 1px solid rgba(0,223,130,0.25);
          border-radius: 14px;
          padding: 2rem 1.5rem;
          text-align: center;
          margin-top: 1rem;
        }
        .kg-cta-headline {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        .kg-cta-sub {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.62);
          margin-bottom: 1.25rem;
          line-height: 1.6;
        }
        .kg-cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }
        .kg-breadcrumb {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.45);
          margin-bottom: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: wrap;
        }
        .kg-breadcrumb a {
          color: rgba(255,255,255,0.55);
          text-decoration: none;
        }
        .kg-breadcrumb a:hover { color: #00df82; }
        @media (max-width: 599px) {
          .kg-hero-ctas { flex-direction: column; }
          .kg-btn-primary, .kg-btn-wa {
            width: 100%;
            justify-content: center;
            border-radius: 12px;
            min-height: 52px;
          }
          .kg-cta-buttons { flex-direction: column; }
          .kg-cta-box .kg-btn-primary,
          .kg-cta-box .kg-btn-wa {
            width: 100%;
            justify-content: center;
            border-radius: 12px;
            min-height: 52px;
          }
        }
      `}</style>

      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="kg-hero">
        <div className="kg-hero-inner">
          <nav className="kg-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden>›</span>
            <Link href="/knowledge-base/">Knowledge Base</Link>
            <span aria-hidden>›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{h1}</span>
          </nav>
          <span className="kg-eyebrow">Knowledge Base Guide</span>
          <h1 className="kg-h1">{h1}</h1>
          <p className="kg-intro">{intro}</p>
          <div className="kg-hero-ctas">
            {ctaHref && (
              <Link href={ctaHref} className="kg-btn-primary">
                {primaryCtaLabel}
              </Link>
            )}
            <a
              href={WHATSAPP_ME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="kg-btn-wa"
            >
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="kg-body">
        <div className="kg-body-inner">

          {/* Content sections */}
          {sections.map((section, i) => (
            <section key={i} className="kg-section">
              <h2 className="kg-section-h2">{section.heading}</h2>
              <p className="kg-section-body">{section.body}</p>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="kg-bullets">
                  {section.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Related support pages */}
          {relatedLinks.length > 0 && (
            <div className="kg-related-box">
              <p className="kg-related-label">Related Support Pages</p>
              <div className="kg-chips">
                {relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="kg-chip-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related guides */}
          {relatedGuides.length > 0 && (
            <div className="kg-related-box">
              <p className="kg-related-label">Related Guides</p>
              <div className="kg-chips">
                {relatedGuides.map((guide) => (
                  <Link key={guide.href} href={guide.href} className="kg-chip-link">
                    {guide.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          {faqs.length > 0 && (
            <section className="kg-faq-section">
              <h2 className="kg-faq-h2">Frequently Asked Questions</h2>
              {faqs.map((faq, i) => (
                <div key={i} className="kg-faq-item">
                  <h3 className="kg-faq-q">{faq.q}</h3>
                  <p className="kg-faq-a">{faq.a}</p>
                </div>
              ))}
            </section>
          )}

          {/* Bottom CTA */}
          <div className="kg-cta-box">
            <p className="kg-cta-headline">Ready to get real-time expert support?</p>
            <p className="kg-cta-sub">Same-day start. Confidential. All major time zones covered.</p>
            <div className="kg-cta-buttons">
              {ctaHref && (
                <Link href={ctaHref} className="kg-btn-primary">
                  {primaryCtaLabel}
                </Link>
              )}
              <a
                href={WHATSAPP_ME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="kg-btn-wa"
              >
                WhatsApp Proxy Tech Support
              </a>
            </div>
          </div>

        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
