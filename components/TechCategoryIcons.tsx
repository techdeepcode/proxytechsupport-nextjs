import type { TechIconId } from '@/data/technologies';

/** Match card titles (tech-card-glass__title uses --pts-forest) */
const ICON = 'var(--pts-forest)';
const size = 22;

type Props = { id: TechIconId };

export default function TechCategoryIcon({ id }: Props) {
  const c = {
    width: size,
    height: size,
    fill: 'none',
    stroke: ICON,
    strokeWidth: 1.65,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (id) {
    case 'code':
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      );
    case 'server':
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <rect x="2" y="3" width="20" height="6" rx="1.5" />
          <rect x="2" y="12" width="20" height="6" rx="1.5" />
          <circle cx="6" cy="6" r="1" fill={ICON} stroke="none" />
          <circle cx="6" cy="15" r="1" fill={ICON} stroke="none" />
        </svg>
      );
    case 'database':
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
        </svg>
      );
    case 'cloud':
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
        </svg>
      );
    case 'gear':
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      );
    case 'test':
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
      );
    case 'cpu':
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v2M15 1v2M9 21v2M15 21v2M20 9h2M20 14h2M2 9h2M2 14h2" />
        </svg>
      );
    case 'chart':
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <path d="M3 3v18h18" />
          <path d="M7 16l4-4 4 4 5-7" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'crm':
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    case 'java':
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <path d="M6 3h12v6a6 6 0 01-6 6 6 6 0 01-6-6V3z" />
          <path d="M9 21h6M12 18v3" />
          <path d="M8 9h8M8 12h5" strokeWidth={1.25} />
        </svg>
      );
    default:
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
      );
  }
}
