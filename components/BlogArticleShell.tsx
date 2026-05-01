import type { ReactNode } from 'react';

export type BlogArticleShellProps = {
  children: ReactNode;
  /** default = subtle card wrap; feature = dark hero band + tags */
  variant?: 'default' | 'feature';
  hero?: {
    eyebrow?: string;
    subtitle?: string;
    tags?: string[];
  };
};

/**
 * Wraps blog article HTML/TSX bodies for richer layouts than flat markdown prose.
 */
export default function BlogArticleShell({ children, variant = 'default', hero }: BlogArticleShellProps) {
  if (variant === 'feature' && hero) {
    return (
      <div className="blog-article-shell blog-article-shell--feature">
        <div
          className="blog-article-shell-hero"
          style={{
            margin: '-0.25rem -0.5rem 1.75rem',
            padding: '2rem 1.25rem 1.75rem',
            borderRadius: 'var(--pts-card-radius)',
            background: 'linear-gradient(135deg, var(--pts-nav-bg) 0%, var(--pts-surface-dark-raised) 55%, var(--pts-dashboard-bg) 100%)',
            border: '1px solid rgba(0, 223, 130, 0.2)',
            boxShadow: 'var(--pts-shadow-lp)',
          }}
        >
          {hero.eyebrow && (
            <p
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--pts-accent)',
                fontWeight: 700,
                marginBottom: '0.75rem',
              }}
            >
              {hero.eyebrow}
            </p>
          )}
          {hero.subtitle && (
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.86)',
                maxWidth: '44rem',
                fontWeight: 500,
              }}
            >
              {hero.subtitle}
            </p>
          )}
          {hero.tags && hero.tags.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '1.1rem' }}>
              {hero.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: '0.68rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '999px',
                    background: 'rgba(0, 223, 130, 0.12)',
                    color: 'var(--pts-accent)',
                    border: '1px solid rgba(0, 223, 130, 0.28)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
        <div
          className="blog-article-shell-body"
          style={{
            padding: '0.25rem 0.15rem 0.5rem',
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className="blog-article-shell blog-article-shell--default"
      style={{
        padding: '1.25rem 1.25rem 1.5rem',
        borderRadius: 'var(--pts-card-radius)',
        background: 'linear-gradient(180deg, var(--pts-tech-header) 0%, var(--pts-card-bg) 35%)',
        border: '1px solid var(--pts-border)',
        boxShadow: 'var(--pts-shadow-lp)',
      }}
    >
      {children}
    </div>
  );
}
