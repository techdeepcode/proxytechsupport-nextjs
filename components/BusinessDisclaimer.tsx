import Link from 'next/link';

/**
 * Single reusable business/compliance disclaimer for Proxy Tech Support.
 *
 * Purpose: make it unambiguous that Proxy Tech Support is a paid IT career-support
 * and technical-support service that does NOT sell jobs, and that service fees do
 * not buy employment, interviews, recruiter responses, offers or salary outcomes.
 *
 * `variant="full"`  → full statement (trust sections, pricing, about, legal, salary pages)
 * `variant="short"` → condensed one-line statement (footer)
 */

export const BUSINESS_DISCLAIMER_FULL =
  'Proxy Tech Support provides paid IT career support, technical support, profile services and interview support. We are not an employer and do not sell jobs or vacancies. Service fees are charged only for the agreed support services and are not payments in exchange for employment, interview selection, recruiter responses, job offers or salary outcomes. Employment decisions are made solely by employers. We do not guarantee interviews, selection, employment, compensation, promotions or career outcomes.';

export const BUSINESS_DISCLAIMER_SHORT =
  'Proxy Tech Support provides paid support services and does not sell or guarantee jobs, interviews, selection, recruiter responses, offers or salary outcomes.';

type Props = {
  variant?: 'full' | 'short';
  /** Show a "Read our policies" link row (used on marketing pages, not the footer). */
  showPolicyLinks?: boolean;
  /** 'light' for light backgrounds (legal pages); 'dark' for the dark footer. */
  tone?: 'light' | 'dark';
  style?: React.CSSProperties;
};

export default function BusinessDisclaimer({
  variant = 'full',
  showPolicyLinks = false,
  tone = 'light',
  style,
}: Props) {
  const dark = tone === 'dark';
  const colors = dark
    ? {
        border: '1px solid rgba(255, 255, 255, 0.14)',
        background: 'rgba(255, 255, 255, 0.04)',
        text: 'rgba(255, 255, 255, 0.6)',
        heading: 'var(--pts-footer-accent)',
        link: 'var(--pts-footer-accent)',
      }
    : {
        border: '1px solid var(--pts-border, #e2e8f0)',
        background: 'var(--pts-muted-bg, #f8fafc)',
        text: 'var(--pts-muted-text, #475569)',
        heading: 'var(--pts-text, #1e293b)',
        link: 'var(--pts-link, #2563eb)',
      };
  if (variant === 'short') {
    return (
      <p
        style={{
          fontSize: '0.8rem',
          lineHeight: 1.6,
          color: 'rgba(255, 255, 255, 0.55)',
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
          ...style,
        }}
      >
        {BUSINESS_DISCLAIMER_SHORT}
      </p>
    );
  }

  return (
    <aside
      role="note"
      aria-label="Service and employment disclaimer"
      style={{
        border: colors.border,
        background: colors.background,
        borderRadius: '0.75rem',
        padding: '1.1rem 1.25rem',
        fontSize: '0.85rem',
        lineHeight: 1.7,
        color: colors.text,
        maxWidth: '980px',
        margin: '0 auto',
        ...style,
      }}
    >
      <strong style={{ display: 'block', marginBottom: '0.4rem', color: colors.heading }}>
        Important service disclaimer
      </strong>
      {BUSINESS_DISCLAIMER_FULL}
      {showPolicyLinks && (
        <span style={{ display: 'block', marginTop: '0.6rem', fontSize: '0.8rem' }}>
          Read our{' '}
          <Link href="/disclaimer/" style={{ color: colors.link }}>
            Disclaimer
          </Link>
          ,{' '}
          <Link href="/service-delivery-policy/" style={{ color: colors.link }}>
            Service Delivery Policy
          </Link>{' '}
          and{' '}
          <Link href="/refund-cancellation-policy/" style={{ color: colors.link }}>
            Refund &amp; Cancellation Policy
          </Link>
          .
        </span>
      )}
    </aside>
  );
}
