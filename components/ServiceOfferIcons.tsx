import type { ServiceOfferIconId } from '@/data/services';

const GREEN = '#03624c';

export default function ServiceOfferIcon({ id }: { id: ServiceOfferIconId }) {
  const c = {
    width: 40,
    height: 40,
    fill: 'none' as const,
    stroke: GREEN,
    strokeWidth: 1.65,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (id) {
    case 'interview':
      /* One stroked glyph @ 40×40 — aligned with briefcase / robot (no side-by-side icons). */
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <path d="M20 7h-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM10 5h4v2h-4V5z" />
        </svg>
      );
    case 'robot':
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <rect x="4" y="8" width="16" height="13" rx="2" />
          <path d="M8 8V6a4 4 0 018 0v2M12 15v.01" />
          <circle cx="9" cy="13" r="1.2" fill={GREEN} stroke="none" />
          <circle cx="15" cy="13" r="1.2" fill={GREEN} stroke="none" />
          <path d="M10 4h4M12 2v2" />
        </svg>
      );
    case 'target':
      /* Crosshair / target — represents profile engineering & recruiter visibility */
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" fill={GREEN} stroke="none" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
      );
    case 'megaphone':
      /* Megaphone / outreach — represents candidate marketing */
      return (
        <svg {...c} viewBox="0 0 24 24" aria-hidden>
          <path d="M3 11v2a1 1 0 001 1h2l3 4h1V7H9L6 11H3z" />
          <path d="M16 9.5a4 4 0 010 5M19.07 7.07a8 8 0 010 9.86" />
        </svg>
      );
    default:
      return null;
  }
}

/** Checkmark for feature lists — forest green, no filled badge (matches card icons). */
export function BlueCheck() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      style={{ flexShrink: 0, marginTop: 2 }}
    >
      <path
        d="M8 12l2.5 3L16 9"
        stroke={GREEN}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
