/** Icons for Career Support cards — brand forest green */
const FG = 'var(--pts-forest)';

export function CareerServiceIcon({ id }: { id: 'document' | 'chat' }) {
  const common = {
    width: 40,
    height: 40,
    fill: 'none',
    stroke: FG,
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  if (id === 'document') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden {...common}>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden {...common}>
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8.5z" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" strokeWidth={2} />
    </svg>
  );
}
