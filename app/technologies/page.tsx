'use client';

import { useEffect } from 'react';

/**
 * GitHub Pages static export cannot run middleware. Legacy site mapped
 * /technologies/ → home #tech; keep the same UX with an instant redirect.
 */
export default function TechnologiesAliasPage() {
  useEffect(() => {
    window.location.replace('/#tech');
  }, []);

  return (
    <main style={{ padding: '3rem', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <p style={{ marginBottom: '1rem' }}>Redirecting…</p>
      <a href="/#tech">Go to Technologies</a>
    </main>
  );
}
