'use client';

import { useState } from 'react';
import { faqs } from '@/data/faqs';
import { WHATSAPP_ME_URL } from '@/lib/whatsapp';

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={{
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.25s ease',
      }}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="pts-section-mint">
      <style>{`
        .faq-layout {
          display: grid;
          gap: 2.5rem;
          width: 100%;
          max-width: var(--pts-content-max);
          margin: 0 auto;
          align-items: start;
        }
        @media (min-width: 1024px) {
          .faq-layout {
            grid-template-columns: minmax(260px, 380px) minmax(0, 1fr);
            gap: 3rem;
          }
        }
        .faq-intro-eyebrow {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--pts-accent);
          margin-bottom: 0.75rem;
        }
        .faq-intro-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.65rem, 2.8vw, 2.15rem);
          font-weight: 700;
          color: var(--pts-text);
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        .faq-intro-desc {
          font-size: 0.98rem;
          color: var(--pts-text-subtle);
          line-height: 1.65;
          margin-bottom: 1.75rem;
        }
        .faq-cta-stack {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .faq-cta-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          background: var(--pts-accent);
          color: var(--pts-on-accent) !important;
          font-weight: 600;
          font-size: 0.92rem;
          padding: 0.85rem 1.35rem;
          border-radius: 50px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }
        .faq-cta-primary:hover {
          background: var(--pts-accent-hover);
          transform: translateY(-1px);
        }
        .faq-cta-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: var(--pts-text);
          font-weight: 600;
          font-size: 0.92rem;
          padding: 0.85rem 1.35rem;
          border-radius: 50px;
          text-decoration: none;
          border: 1px solid rgba(var(--pts-forest-rgb), 0.28);
          transition: border-color 0.2s, background 0.2s;
          font-family: inherit;
        }
        .faq-cta-secondary:hover {
          border-color: rgba(var(--pts-forest-rgb), 0.45);
          background: rgba(var(--pts-accent-rgb), 0.08);
        }
        .faq-item {
          border-radius: 12px;
          overflow: hidden;
        }
        .faq-chevron-box {
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(var(--pts-forest-rgb), 0.22);
          border-radius: 8px;
          background: #fafafa;
          color: var(--pts-text-subtle);
        }
      `}</style>

      <div className="faq-layout pts-section-mint-inner">
        <div>
          <p className="faq-intro-eyebrow">FAQ</p>
          <h2 className="faq-intro-title">Frequently Asked Questions</h2>
          <p className="faq-intro-desc">
            Everything you need to know before getting started with our support services.
          </p>
          <div className="faq-cta-stack">
            <a className="faq-cta-primary" href={WHATSAPP_ME_URL} target="_blank" rel="noopener noreferrer">
              Ask on WhatsApp <span aria-hidden>→</span>
            </a>
            <a className="faq-cta-secondary" href="mailto:support@proxytechsupport.com">
              Email a Question
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%', minWidth: 0 }}>
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div
                key={i}
                className={`faq-item pts-card-glass pts-card-glass--static ${open ? 'faq-item-open' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.1rem 1.15rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'inherit',
                    gap: '1rem',
                  }}
                >
                    <span style={{ fontWeight: 600, color: 'var(--pts-text)', fontSize: '0.95rem', lineHeight: 1.45 }}>{faq.question}</span>
                  <span className="faq-chevron-box">
                    <Chevron open={open} />
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: open ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease',
                  }}
                >
                  <p
                    style={{
                      padding: '0 1.15rem 1.2rem',
                      fontSize: '0.92rem',
                      color: 'var(--pts-text-muted)',
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
