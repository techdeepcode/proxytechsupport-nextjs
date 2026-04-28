/** End-to-end flow row — icons in brand forest green */
const FG = 'var(--pts-forest)';

const base = {
  width: 36,
  height: 36,
  fill: 'none' as const,
  stroke: FG,
  strokeWidth: 1.65,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export type FlowIconId = 'editDoc' | 'linkedin' | 'mentoring' | 'headset' | 'briefcase';

export function FlowStepIcon({ id }: { id: FlowIconId }) {
  switch (id) {
    case 'editDoc':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...base}>
          <path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L8 18l-4 1 1-4L16.5 3.5z" />
          <path d="M15 6l3 3" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...base}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 10v7M8 7.5a1 1 0 011-1h.01M13 17v-4.5a2.5 2.5 0 015 0V17" />
        </svg>
      );
    case 'mentoring':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...base}>
          <path d="M2 10l10-5 10 5-10 5-10-5z" />
          <path d="M6 11.5V16c0 1.1 2.5 2 6 2s6-.9 6-2v-4.5" />
        </svg>
      );
    case 'headset':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...base}>
          <path d="M3 18v-6a9 9 0 0118 0v6" />
          <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...base}>
          <path d="M20 7h-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM10 5h4v2h-4V5z" />
        </svg>
      );
    default:
      return null;
  }
}
