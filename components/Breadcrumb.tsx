const SITE_URL = 'https://proxytechsupport.com';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <style>{`.bc-link{color:var(--pts-forest);text-decoration:none;font-weight:500;transition:color .15s}.bc-link:hover{color:var(--pts-accent-hover)}`}</style>
      <nav
        aria-label="Breadcrumb"
        style={{
          background: 'var(--pts-section-alt)',
          borderBottom: '1px solid var(--pts-border)',
          padding: '0.55rem 1rem',
        }}
      >
        <ol
          className="bc-trail"
          style={{
            width: '100%',
            maxWidth: 'var(--pts-content-max)',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'center',
            gap: '0 0.3rem',
            listStyle: 'none',
            fontSize: '0.8rem',
            color: 'var(--pts-text-subtle)',
            overflowX: 'auto',
            overflowY: 'hidden',
            WebkitOverflowScrolling: 'touch',
            scrollbarGutter: 'stable',
          }}
        >
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li
                key={i}
                style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', flexShrink: 0 }}
              >
                {i > 0 && (
                  <span aria-hidden style={{ color: 'var(--pts-border-strong)', userSelect: 'none' }}>
                    /
                  </span>
                )}
                {item.href && !isLast ? (
                  <a href={item.href} className="bc-link">
                    {item.label}
                  </a>
                ) : (
                  <span
                    aria-current={isLast ? 'page' : undefined}
                    style={{
                      color: isLast ? 'var(--pts-text-muted)' : 'var(--pts-text-subtle)',
                      fontWeight: isLast ? 500 : 400,
                      whiteSpace: 'nowrap',
                      ...(isLast
                        ? {
                            /* one line with trail; scroll parent .bc-trail if long */
                            maxWidth: 'min(70vw, 40rem)',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }
                        : {}),
                    }}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
