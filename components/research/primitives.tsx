/**
 * Research publication primitives — presentational, framework-native building
 * blocks for the ProxyTech research design system. No client state; safe to
 * render on the server. Styling comes from <ResearchStyles /> (rx- namespace).
 */
import type { ReactNode } from 'react';
import type { EvidenceLabel, ResearchReference } from '@/data/research/cluster';

/* ---------- Evidence badge ---------- */
export function ResearchBadge({ label }: { label: EvidenceLabel }) {
  return (
    <span className="rx-badge" data-k={label}>
      {label}
    </span>
  );
}

export function ResearchBadgeRow({ labels }: { labels: EvidenceLabel[] }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', margin: '0.5rem 0 1.2rem' }}>
      {labels.map((l) => (
        <ResearchBadge key={l} label={l} />
      ))}
    </div>
  );
}

/* ---------- Inline numbered citation ---------- */
export function Cite({ n }: { n: number | number[] }) {
  const arr = Array.isArray(n) ? n : [n];
  return (
    <>
      {arr.map((num, i) => (
        <a key={num} href={`#ref-${num}`} className="rx-cite" aria-label={`Reference ${num}`}>
          [{num}]{i < arr.length - 1 ? '' : ''}
        </a>
      ))}
    </>
  );
}

/* ---------- Abstract ---------- */
export function ResearchAbstract({ children }: { children: ReactNode }) {
  return (
    <section className="rx-abstract" aria-label="Abstract">
      <p className="rx-abstract-label">Abstract</p>
      {children}
    </section>
  );
}

/* ---------- Generic callout block ---------- */
type Tone = 'accent' | 'warn' | 'danger' | 'info';
export function ResearchBlock({
  kicker,
  tone = 'accent',
  badge,
  children,
}: {
  kicker: string;
  tone?: Tone;
  badge?: EvidenceLabel;
  children: ReactNode;
}) {
  return (
    <div className={`rx-block rx-${tone}`}>
      <div className="rx-block-head">
        <span className="rx-block-kicker">{kicker}</span>
        {badge ? <ResearchBadge label={badge} /> : null}
      </div>
      {children}
    </div>
  );
}

/* ---------- Finding (research result) ---------- */
export function ResearchFinding({
  title,
  badge = 'RESEARCH',
  tone = 'accent',
  children,
}: {
  title: string;
  badge?: EvidenceLabel;
  tone?: Tone;
  children: ReactNode;
}) {
  return (
    <ResearchBlock kicker={title} tone={tone} badge={badge}>
      {children}
    </ResearchBlock>
  );
}

/* ---------- Open research question ---------- */
export function ResearchQuestion({ children }: { children: ReactNode }) {
  return (
    <ResearchBlock kicker="Open question" tone="warn" badge="OPEN QUESTION">
      {children}
    </ResearchBlock>
  );
}

/* ---------- Analyst interpretation (clearly separated from paper claims) ---------- */
export function ResearchAnalysis({ children }: { children: ReactNode }) {
  return (
    <ResearchBlock kicker="ProxyTech engineering interpretation" tone="info" badge="ANALYSIS">
      {children}
    </ResearchBlock>
  );
}

/* ---------- Metric strip ---------- */
export interface Metric {
  value: string;
  label: string;
  source?: string;
}
export function ResearchMetricStrip({ items }: { items: Metric[] }) {
  return (
    <div className="rx-metrics rx-full">
      {items.map((m, i) => (
        <div className="rx-metric" key={i}>
          <div className="rx-metric-value">{m.value}</div>
          <div className="rx-metric-label">{m.label}</div>
          {m.source ? <div className="rx-metric-src">{m.source}</div> : null}
        </div>
      ))}
    </div>
  );
}

/* ---------- arXiv / source paper card ---------- */
export function ResearchPaperCard({
  reference,
  question,
  method,
  finding,
  metric,
  limitations,
  relevance,
}: {
  reference: ResearchReference;
  question?: string;
  method?: string;
  finding?: string;
  metric?: string;
  limitations?: string;
  relevance?: string;
}) {
  const r = reference;
  const dateLine = [r.submitted && `submitted ${r.submitted}`, r.revised && `revised ${r.revised}`]
    .filter(Boolean)
    .join(' · ');
  return (
    <div className="rx-paper-card rx-full">
      <div className="rx-paper-top">
        <span className="rx-paper-id">{r.arxiv ? `arXiv:${r.arxiv}` : r.venue}</span>
        <span className="rx-paper-cats">{r.categories || r.year}</span>
      </div>
      <p className="rx-paper-title">{r.title}</p>
      <p className="rx-paper-auth">
        {r.authors}
        {dateLine ? ` — ${dateLine}` : ` — ${r.year}`}
      </p>
      <dl className="rx-paper-rows">
        {question && (
          <div className="rx-paper-row">
            <dt>Question</dt>
            <dd>{question}</dd>
          </div>
        )}
        {method && (
          <div className="rx-paper-row">
            <dt>Method</dt>
            <dd>{method}</dd>
          </div>
        )}
        {finding && (
          <div className="rx-paper-row">
            <dt>Key finding</dt>
            <dd>{finding}</dd>
          </div>
        )}
        {metric && (
          <div className="rx-paper-row">
            <dt>Reported metric</dt>
            <dd>{metric}</dd>
          </div>
        )}
        {limitations && (
          <div className="rx-paper-row">
            <dt>Limitations</dt>
            <dd>{limitations}</dd>
          </div>
        )}
        {relevance && (
          <div className="rx-paper-row">
            <dt>Why it matters</dt>
            <dd>{relevance}</dd>
          </div>
        )}
      </dl>
      <a className="rx-paper-link" href={r.url} target="_blank" rel="noopener noreferrer nofollow">
        Read the original source ↗
      </a>
    </div>
  );
}

/* ---------- Timeline ---------- */
export interface TimelineEntry {
  date: string;
  title: string;
  body: ReactNode;
  tone?: 'default' | 'danger';
}
export function ResearchTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="rx-timeline rx-full">
      {entries.map((e, i) => (
        <li className="rx-tl-item" key={i} data-tone={e.tone || 'default'}>
          <div className="rx-tl-date">{e.date}</div>
          <div className="rx-tl-title">{e.title}</div>
          <p>{e.body}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Failure mode ---------- */
export function ResearchFailureMode({
  title,
  mechanism,
  whyFailed,
  signals,
  controls,
}: {
  title: string;
  mechanism: ReactNode;
  whyFailed: ReactNode;
  signals: string[];
  controls: string[];
}) {
  return (
    <div className="rx-block rx-danger rx-full">
      <div className="rx-block-head">
        <span className="rx-block-kicker">Failure mode</span>
        <ResearchBadge label="ANALYSIS" />
      </div>
      <p style={{ fontWeight: 640, marginBottom: '0.7rem' }}>{title}</p>
      <h4>Mechanism</h4>
      <p>{mechanism}</p>
      <h4>Why the existing control failed</h4>
      <p>{whyFailed}</p>
      <div className="rx-fm-cols">
        <div>
          <h4>Signals to monitor</h4>
          <ul style={{ marginBottom: 0 }}>
            {signals.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Controls</h4>
          <ul style={{ marginBottom: 0 }}>
            {controls.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---------- Engineering decision (option comparison) ---------- */
export interface DecisionColumn {
  key: string;
  label: string;
}
export function ResearchDecision({
  columns,
  rows,
  recommendation,
}: {
  columns: DecisionColumn[];
  rows: Record<string, string>[];
  recommendation: ReactNode;
}) {
  return (
    <div className="rx-full">
      <div className="rx-table-wrap">
        <table className="rx-table">
          <thead>
            <tr>
              {columns.map((c) => (
                <th key={c.key}>{c.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {columns.map((c) => (
                  <td key={c.key}>{row[c.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ResearchBlock kicker="Evidence-aware recommendation" tone="accent" badge="ANALYSIS">
        {recommendation}
      </ResearchBlock>
    </div>
  );
}

/* ---------- Counterfactual (secure redesign) ---------- */
export function ResearchCounterfactual({ title, children }: { title: string; children: ReactNode }) {
  return (
    <ResearchBlock kicker={title} tone="accent" badge="ANALYSIS">
      {children}
    </ResearchBlock>
  );
}

/* ---------- Limitations ---------- */
export function ResearchLimitations({ items }: { items: ReactNode[] }) {
  return (
    <div className="rx-block rx-warn rx-full">
      <div className="rx-block-head">
        <span className="rx-block-kicker">Limitations &amp; threats to validity</span>
        <ResearchBadge label="OPEN QUESTION" />
      </div>
      <ul style={{ marginBottom: 0 }}>
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Reference list ---------- */
export function ResearchReferenceList({ refs }: { refs: ResearchReference[] }) {
  return (
    <ol className="rx-refs rx-full">
      {refs.map((r, i) => (
        <li key={r.key} id={`ref-${i + 1}`}>
          <span className="rx-ref-title">{r.authors}. </span>
          {r.title}.{' '}
          {r.arxiv ? (
            <>
              arXiv:{r.arxiv}
              {r.categories ? ` [${r.categories.split(',')[0].trim()}]` : ''}, {r.year}.{' '}
            </>
          ) : (
            <>
              {r.venue}, {r.year}.{' '}
            </>
          )}
          <a href={r.url} target="_blank" rel="noopener noreferrer nofollow">
            {r.url}
          </a>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Figure / diagram wrapper (SVG or HTML diagram + text equivalent) ---------- */
export function ResearchFigure({
  caption,
  altText,
  children,
}: {
  caption: ReactNode;
  altText: string;
  children: ReactNode;
}) {
  return (
    <figure className="rx-figure rx-full">
      <div className="rx-diagram" role="img" aria-label={altText}>
        {children}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
