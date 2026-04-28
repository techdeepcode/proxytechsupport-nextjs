import type { ServiceOfferIconId } from '@/data/services';

const GREEN = '#03624c';
const small = 20;

function UserIcon() {
  return (
    <svg width={small} height={small} viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth={1.7} aria-hidden>
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width={small} height={small} viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth={1.7} aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" />
    </svg>
  );
}

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
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} aria-hidden>
          <UserIcon />
          <ShieldIcon />
        </div>
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
