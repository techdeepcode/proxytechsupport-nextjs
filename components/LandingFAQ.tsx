'use client';

import { useState } from 'react';
import type { LandingFaqItem } from '@/data/landing-pages';

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
        flexShrink: 0,
      }}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

interface LandingFAQProps {
  faqs: LandingFaqItem[];
}

export default function LandingFAQ({ faqs }: LandingFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div
            key={i}
            style={{
              border: '1px solid var(--pts-border)',
              borderRadius: '12px',
              overflow: 'hidden',
              background: open ? 'rgba(0,223,130,0.04)' : 'var(--pts-card-bg)',
              transition: 'background 0.2s',
            }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.05rem 1.15rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'inherit',
                gap: '1rem',
              }}
            >
              <span
                style={{
                  fontWeight: 600,
                  color: 'var(--pts-text)',
                  fontSize: '0.95rem',
                  lineHeight: 1.45,
                }}
              >
                {faq.question}
              </span>
              <span
                style={{
                  width: 32,
                  height: 32,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  border: '1px solid var(--pts-border)',
                  background: open ? 'var(--pts-accent)' : '#fafafa',
                  color: open ? 'var(--pts-on-accent)' : 'var(--pts-text-subtle)',
                  transition: 'background 0.2s, color 0.2s',
                }}
              >
                <Chevron open={open} />
              </span>
            </button>
            <div
              style={{
                maxHeight: open ? '600px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.35s ease',
              }}
            >
              <p
                style={{
                  padding: '0 1.15rem 1.2rem',
                  fontSize: '0.92rem',
                  color: 'var(--pts-text-muted)',
                  lineHeight: 1.75,
                }}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
