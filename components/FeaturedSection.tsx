import type { CSSProperties } from 'react';

const featurePairs = [
  { left: 'In-House Expert Team', right: 'No Middlemen or Outsourcing' },
  { left: 'Quick Project Handover', right: 'Faster Delivery' },
  { left: 'Direct Communication', right: 'Immediate Start Available' },
];

function StarIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/** Checkmark only — mint stroke, matches Contact / Stats dark sections */
function FeaturedCheck() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      style={{ flexShrink: 0, marginTop: 1 }}
    >
      <path
        d="M8 12l2.5 3L16 9"
        stroke="var(--pts-accent)"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Large team + gear illustration (white on dark; gear center in forest) */
function TeamGearIllustration() {
  return (
    <svg
      width={140}
      height={140}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx={70} cy={70} r={66} fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" strokeWidth={1.5} />
      <g fill="rgba(255,255,255,0.92)">
        <ellipse cx={44} cy={48} rx={13} ry={15} />
        <path d="M31 62c0-7 6-13 13-13s13 6 13 13v14H31V62z" />
        <ellipse cx={96} cy={48} rx={13} ry={15} />
        <path d="M83 62c0-7 6-13 13-13s13 6 13 13v14H83V62z" />
        <ellipse cx={70} cy={40} rx={15} ry={17} />
        <path d="M55 55c0-8.5 6.7-15.5 15-15.5s15 7 15 15.5v13H55V55z" />
      </g>
      <g transform="translate(70 84)">
        <circle r={20} fill="rgba(255,255,255,0.98)" />
        <circle r={9} fill="var(--pts-forest)" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <rect
            key={deg}
            x={-4}
            y={-28}
            width={8}
            height={15}
            rx={2}
            fill="rgba(255,255,255,0.98)"
            transform={`rotate(${deg})`}
          />
        ))}
      </g>
    </svg>
  );
}

const featuredStyles = `
  .featured-card-inner {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  @media (min-width: 768px) {
    .featured-card-inner {
      flex-direction: row;
      align-items: center;
      gap: 2rem;
    }
    .featured-icon-wrap {
      flex-shrink: 0;
    }
  }
  .featured-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.65rem 1.25rem;
  }
  @media (min-width: 520px) {
    .featured-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const featuredDarkBg: CSSProperties = {
  background: `
    radial-gradient(ellipse 70% 55% at 0% 0%, rgba(var(--pts-accent-rgb), 0.12) 0%, transparent 55%),
    radial-gradient(ellipse 65% 50% at 100% 100%, rgba(var(--pts-forest-rgb), 0.15) 0%, transparent 50%),
    linear-gradient(180deg, var(--pts-surface-dark-raised) 0%, var(--pts-dark) 100%)`,
  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
};

type Props = {
  /** When true, no outer section / max-width — use inside Services (after What We Offer). */
  embedded?: boolean;
};

export default function FeaturedSection({ embedded = false }: Props) {
  const inner = (
    <>
      <style>{featuredStyles}</style>
      <div
        style={{
          width: '100%',
          maxWidth: 'var(--pts-content-max)',
          margin: '0 auto',
          padding: '0 1rem',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(var(--pts-accent-rgb), 0.15)',
            color: '#ffffff',
            padding: '0.35rem 0.85rem',
            borderRadius: 999,
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            border: '1px solid rgba(var(--pts-accent-rgb), 0.28)',
          }}
        >
          <StarIcon />
          Featured
        </div>

        <div className="featured-card-inner">
          <div className="featured-icon-wrap" style={{ display: 'flex', justifyContent: 'center' }}>
            <TeamGearIllustration />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <h2
              id="featured-heading"
              style={{
                fontSize: 'clamp(1.25rem, 2.8vw, 1.75rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.25,
                marginBottom: '1rem',
              }}
            >
              Direct IT Job Support – No Middlemen
            </h2>
            <p
              style={{
                fontSize: 'clamp(0.92rem, 1.5vw, 1rem)',
                color: 'rgba(255, 255, 255, 0.88)',
                lineHeight: 1.65,
                marginBottom: '1.25rem',
              }}
            >
              <strong style={{ color: '#ffffff' }}>100% Direct Service!</strong> We have an in-house team of expert
              developers who quickly take your project and start working immediately. No outsourcing, no delays, no third
              parties. Our developers work directly with you to ensure fast turnaround and quality results.
            </p>

            <div className="featured-grid">
              {featurePairs.map((row) => (
                <div key={row.left} style={{ display: 'contents' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <FeaturedCheck />
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255, 255, 255, 0.95)' }}>{row.left}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <FeaturedCheck />
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255, 255, 255, 0.95)' }}>{row.right}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const sectionStyle: CSSProperties = embedded
    ? {
        ...featuredDarkBg,
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        padding: 'clamp(2.5rem, 5vw, 3.5rem) 0',
        marginLeft: 0,
        marginRight: 0,
        marginBottom: '2.5rem',
      }
    : {
        ...featuredDarkBg,
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        padding: 'clamp(2.5rem, 5vw, 3.5rem) 0',
        marginLeft: 0,
        marginRight: 0,
      };

  return (
    <section role="region" aria-labelledby="featured-heading" style={sectionStyle}>
      {inner}
    </section>
  );
}
