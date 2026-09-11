/**
 * Research visual system — deliberately distinct from the marketing site.
 *
 * Journal / lab aesthetic: paper surfaces, hairline rules, monospaced metadata,
 * a single restrained accent, and evidence colors that never rely on hue alone
 * (every colored label also carries a text token and/or icon).
 *
 * All classes are namespaced `rx-` and scoped under `.rx-root` so this system
 * cannot leak into or inherit from the existing landing/blog/interview CSS.
 */
export default function ResearchStyles() {
  return (
    <style>{`
    .rx-root {
      --rx-ink: #0b1512;
      --rx-paper: #fbfbf9;
      --rx-paper-2: #f3f4f1;
      --rx-panel: #ffffff;
      --rx-muted: #3a4744;
      --rx-subtle: #6a756f;
      --rx-faint: #9aa39d;
      --rx-line: #e4e6e0;
      --rx-line-strong: #cdd1c8;
      --rx-accent: #03624c;
      --rx-accent-bright: #00b877;
      --rx-signal: #b45309;      /* amber — open questions / caution */
      --rx-danger: #9f1d1d;      /* incident / failure */
      --rx-info: #1e4f8a;        /* primary source */
      --rx-mono: ui-monospace, "SF Mono", "SFMono-Regular", "JetBrains Mono", "Roboto Mono", Menlo, Consolas, monospace;
      --rx-serif: "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, "Times New Roman", serif;
      --rx-sans: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      --rx-maxw: 1240px;

      background: var(--rx-paper);
      color: var(--rx-ink);
      font-family: var(--rx-sans);
      -webkit-font-smoothing: antialiased;
      font-size: 17px;
      line-height: 1.68;
    }
    .rx-root *, .rx-root *::before, .rx-root *::after { box-sizing: border-box; }

    /* ---------- Masthead ---------- */
    .rx-masthead {
      background:
        radial-gradient(120% 140% at 12% -10%, #0e2620 0%, #071310 55%, #050b09 100%);
      color: #eef2ee;
      border-bottom: 1px solid #14312a;
    }
    .rx-mast-inner { max-width: var(--rx-maxw); margin: 0 auto; padding: clamp(1.6rem,4vw,2.8rem) clamp(1rem,4vw,2rem) clamp(1.4rem,3.5vw,2.2rem); }
    .rx-eyebrow {
      font-family: var(--rx-mono);
      font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase;
      color: #6fe4b6; margin: 0 0 0.9rem;
      display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;
    }
    .rx-eyebrow .rx-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--rx-accent-bright); box-shadow: 0 0 0 3px rgba(0,184,119,0.18); }
    .rx-h1 {
      font-family: var(--rx-serif);
      font-weight: 650; font-size: clamp(1.55rem, 3.6vw, 2.55rem); line-height: 1.16;
      letter-spacing: -0.01em; margin: 0 0 0.9rem; max-width: 60rem; color: #fff;
    }
    .rx-dek { font-size: clamp(1rem,1.6vw,1.12rem); color: #b9c6bf; max-width: 46rem; margin: 0 0 1.3rem; line-height: 1.6; }

    /* ---------- Research profile / meta grid ---------- */
    .rx-profile {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 1px; background: rgba(255,255,255,0.09);
      border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; overflow: hidden;
      max-width: 62rem;
    }
    .rx-profile-cell { background: rgba(6,18,15,0.55); padding: 0.7rem 0.85rem; }
    .rx-profile-k { font-family: var(--rx-mono); font-size: 0.62rem; letter-spacing: 0.14em; text-transform: uppercase; color: #7fb8a3; margin: 0 0 0.28rem; }
    .rx-profile-v { font-size: 0.86rem; color: #eaf1ec; font-weight: 550; line-height: 1.35; }
    .rx-profile-v small { display:block; font-weight: 400; color:#a9b8b0; font-size:0.78rem; }

    /* ---------- Evidence badges ---------- */
    .rx-badge {
      display: inline-flex; align-items: center; gap: 0.4rem;
      font-family: var(--rx-mono); font-size: 0.66rem; font-weight: 600;
      letter-spacing: 0.1em; text-transform: uppercase;
      padding: 0.2rem 0.5rem; border-radius: 4px; border: 1px solid;
      white-space: nowrap; line-height: 1.2;
    }
    .rx-badge::before { content: ""; width: 6px; height: 6px; border-radius: 1px; background: currentColor; flex: none; }
    .rx-badge[data-k="INCIDENT"]       { color: var(--rx-danger); border-color: #e6c4c4; background: #fbf1f1; }
    .rx-badge[data-k="PRIMARY SOURCE"] { color: var(--rx-info);   border-color: #c4d4e6; background: #eff4fb; }
    .rx-badge[data-k="RESEARCH"]       { color: var(--rx-accent); border-color: #bfe0d3; background: #eefaf4; }
    .rx-badge[data-k="EXPERIMENTAL"]   { color: #6d28a3;          border-color: #d8c9e8; background: #f6f0fb; }
    .rx-badge[data-k="ANALYSIS"]       { color: var(--rx-muted);  border-color: var(--rx-line-strong); background: var(--rx-paper-2); }
    .rx-badge[data-k="OPEN QUESTION"]  { color: var(--rx-signal); border-color: #ecd8b8; background: #fbf5ea; }
    .rx-badge[data-k="OPEN QUESTION"]::before { border-radius: 50%; }

    /* ---------- Layout: TOC | body | rail ---------- */
    .rx-shell { max-width: var(--rx-maxw); margin: 0 auto; padding: 0 clamp(1rem,4vw,2rem); }
    .rx-grid {
      display: grid; gap: clamp(1.5rem, 3vw, 2.75rem);
      grid-template-columns: 1fr; padding: clamp(1.5rem,4vw,2.75rem) 0 1rem;
    }
    @media (min-width: 900px)  { .rx-grid { grid-template-columns: 220px minmax(0,1fr); } }
    @media (min-width: 1180px) { .rx-grid { grid-template-columns: 220px minmax(0,1fr) 260px; } }

    .rx-body { min-width: 0; }
    .rx-body > * { max-width: 44rem; }
    .rx-body > .rx-full { max-width: none; }

    /* ---------- TOC ---------- */
    .rx-toc { align-self: start; }
    @media (min-width: 900px) { .rx-toc { position: sticky; top: 5.5rem; max-height: calc(100vh - 7rem); overflow-y: auto; } }
    .rx-toc-title { font-family: var(--rx-mono); font-size: 0.66rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--rx-subtle); margin: 0 0 0.7rem; }
    .rx-toc ol { list-style: none; margin: 0; padding: 0; border-left: 1px solid var(--rx-line); }
    .rx-toc li { margin: 0; }
    .rx-toc a {
      display: block; padding: 0.32rem 0 0.32rem 0.85rem; margin-left: -1px;
      border-left: 2px solid transparent; color: var(--rx-subtle);
      font-size: 0.82rem; line-height: 1.4; text-decoration: none; transition: color .15s, border-color .15s;
    }
    .rx-toc a:hover { color: var(--rx-ink); }
    .rx-toc a.is-active { color: var(--rx-accent); border-left-color: var(--rx-accent); font-weight: 600; }
    .rx-toc-toggle { display: none; }
    @media (max-width: 899px) {
      .rx-toc { border: 1px solid var(--rx-line); border-radius: 10px; background: var(--rx-panel); }
      .rx-toc-toggle {
        display: flex; align-items: center; justify-content: space-between; width: 100%;
        background: none; border: 0; cursor: pointer; padding: 0.85rem 1rem;
        font-family: var(--rx-mono); font-size: 0.7rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--rx-muted);
      }
      .rx-toc-panel { padding: 0 1rem 0.75rem; }
      .rx-toc[data-open="false"] .rx-toc-panel { display: none; }
      .rx-toc-title { display: none; }
    }

    /* ---------- Reading progress ---------- */
    .rx-progress { position: fixed; top: 0; left: 0; height: 3px; background: var(--rx-accent-bright); width: 0; z-index: 60; transition: width .1s linear; }
    @media (prefers-reduced-motion: reduce) { .rx-progress { transition: none; } }

    /* ---------- Evidence rail ---------- */
    .rx-rail { align-self: start; display: none; }
    @media (min-width: 1180px) { .rx-rail { display: block; position: sticky; top: 5.5rem; } }
    .rx-rail-card { border: 1px solid var(--rx-line); border-radius: 10px; background: var(--rx-panel); padding: 0.95rem 1rem; margin-bottom: 1rem; }
    .rx-rail-title { font-family: var(--rx-mono); font-size: 0.62rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--rx-subtle); margin: 0 0 0.6rem; }
    .rx-rail-list { list-style: none; margin: 0; padding: 0; font-size: 0.82rem; }
    .rx-rail-list li { padding: 0.35rem 0; border-top: 1px dashed var(--rx-line); color: var(--rx-muted); }
    .rx-rail-list li:first-child { border-top: 0; }

    /* ---------- Prose ---------- */
    .rx-body h2 {
      font-family: var(--rx-serif); font-weight: 650; font-size: clamp(1.35rem,2.4vw,1.72rem);
      letter-spacing: -0.01em; line-height: 1.24; margin: 2.6rem 0 0.5rem; scroll-margin-top: 5.5rem;
      padding-top: 1.4rem; border-top: 1px solid var(--rx-line);
    }
    .rx-body h2:first-of-type { border-top: 0; padding-top: 0; margin-top: 1rem; }
    .rx-body h3 { font-family: var(--rx-sans); font-weight: 680; font-size: 1.08rem; margin: 1.8rem 0 0.4rem; letter-spacing: -0.005em; scroll-margin-top: 5.5rem; }
    .rx-body h4 { font-family: var(--rx-mono); font-weight: 600; font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--rx-subtle); margin: 1.3rem 0 0.3rem; }
    .rx-body p { margin: 0 0 1.05rem; color: var(--rx-ink); }
    .rx-body ul, .rx-body ol { margin: 0 0 1.15rem; padding-left: 1.3rem; color: var(--rx-ink); }
    .rx-body li { margin: 0 0 0.4rem; }
    .rx-body a { color: var(--rx-accent); text-underline-offset: 2px; }
    .rx-body strong { font-weight: 680; }
    .rx-lead { font-size: 1.14rem; line-height: 1.6; color: var(--rx-muted); }
    .rx-body code {
      font-family: var(--rx-mono); font-size: 0.86em; background: var(--rx-paper-2);
      border: 1px solid var(--rx-line); border-radius: 4px; padding: 0.06em 0.35em;
    }
    .rx-cite { font-family: var(--rx-mono); font-size: 0.72em; color: var(--rx-accent); vertical-align: super; text-decoration: none; padding: 0 0.1em; }
    .rx-cite:hover { text-decoration: underline; }

    /* section anchor number */
    .rx-secnum { font-family: var(--rx-mono); font-size: 0.7rem; color: var(--rx-faint); letter-spacing: 0.1em; display: block; margin-bottom: 0.2rem; font-weight: 500; }

    /* ---------- Abstract ---------- */
    .rx-abstract { background: var(--rx-panel); border: 1px solid var(--rx-line-strong); border-radius: 12px; padding: 1.2rem 1.35rem; margin: 0 0 1.4rem; }
    .rx-abstract .rx-abstract-label { font-family: var(--rx-mono); font-size: 0.66rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--rx-subtle); margin: 0 0 0.5rem; }
    .rx-abstract p { margin: 0 0 0.6rem; color: var(--rx-muted); }
    .rx-abstract p:last-child { margin-bottom: 0; }

    /* ---------- Callout blocks (finding / question / limitation / decision) ---------- */
    .rx-block { border: 1px solid var(--rx-line); border-radius: 10px; background: var(--rx-panel); padding: 1rem 1.15rem; margin: 1.5rem 0; }
    .rx-block-head { display: flex; align-items: center; gap: 0.6rem; margin: 0 0 0.6rem; }
    .rx-block-kicker { font-family: var(--rx-mono); font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 600; }
    .rx-block p:last-child, .rx-block ul:last-child, .rx-block ol:last-child { margin-bottom: 0; }
    .rx-block.rx-accent { border-left: 3px solid var(--rx-accent); }
    .rx-block.rx-accent .rx-block-kicker { color: var(--rx-accent); }
    .rx-block.rx-warn { border-left: 3px solid var(--rx-signal); background: #fdfaf4; }
    .rx-block.rx-warn .rx-block-kicker { color: var(--rx-signal); }
    .rx-block.rx-danger { border-left: 3px solid var(--rx-danger); background: #fdf4f4; }
    .rx-block.rx-danger .rx-block-kicker { color: var(--rx-danger); }
    .rx-block.rx-info { border-left: 3px solid var(--rx-info); background: #f4f8fd; }
    .rx-block.rx-info .rx-block-kicker { color: var(--rx-info); }
    .rx-fm-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    @media (max-width: 560px) { .rx-fm-cols { grid-template-columns: 1fr; } }

    /* ---------- Metric strip ---------- */
    .rx-metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px,1fr)); gap: 1px; background: var(--rx-line); border: 1px solid var(--rx-line); border-radius: 10px; overflow: hidden; margin: 1.6rem 0; }
    .rx-metric { background: var(--rx-panel); padding: 0.95rem 1rem; }
    .rx-metric-value { font-family: var(--rx-mono); font-size: 1.5rem; font-weight: 600; color: var(--rx-ink); line-height: 1.1; letter-spacing: -0.02em; }
    .rx-metric-label { font-size: 0.78rem; color: var(--rx-subtle); margin-top: 0.3rem; line-height: 1.35; }
    .rx-metric-src { font-family: var(--rx-mono); font-size: 0.64rem; color: var(--rx-faint); margin-top: 0.35rem; }

    /* ---------- Paper card ---------- */
    .rx-paper-card { border: 1px solid var(--rx-line-strong); border-radius: 12px; background: var(--rx-panel); padding: 1.15rem 1.25rem; margin: 1.6rem 0; }
    .rx-paper-top { display: flex; justify-content: space-between; gap: 0.75rem; flex-wrap: wrap; align-items: baseline; }
    .rx-paper-id { font-family: var(--rx-mono); font-size: 0.7rem; color: var(--rx-accent); }
    .rx-paper-cats { font-family: var(--rx-mono); font-size: 0.66rem; color: var(--rx-faint); }
    .rx-paper-title { font-family: var(--rx-serif); font-size: 1.12rem; font-weight: 620; line-height: 1.3; margin: 0.35rem 0 0.2rem; }
    .rx-paper-auth { font-size: 0.82rem; color: var(--rx-subtle); margin: 0 0 0.7rem; }
    .rx-paper-rows { display: grid; gap: 0.5rem; margin: 0.7rem 0; }
    .rx-paper-row { display: grid; grid-template-columns: 128px 1fr; gap: 0.6rem; font-size: 0.88rem; align-items: start; }
    .rx-paper-row dt { font-family: var(--rx-mono); font-size: 0.66rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--rx-subtle); padding-top: 0.15rem; }
    .rx-paper-row dd { margin: 0; color: var(--rx-muted); }
    @media (max-width: 560px) { .rx-paper-row { grid-template-columns: 1fr; gap: 0.1rem; } }
    .rx-paper-link { display: inline-flex; align-items: center; gap: 0.4rem; font-family: var(--rx-mono); font-size: 0.74rem; color: var(--rx-accent); text-decoration: none; border: 1px solid var(--rx-line-strong); border-radius: 6px; padding: 0.35rem 0.65rem; margin-top: 0.5rem; }
    .rx-paper-link:hover { background: var(--rx-paper-2); }

    /* ---------- Timeline ---------- */
    .rx-timeline { list-style: none; margin: 1.6rem 0; padding: 0; position: relative; }
    .rx-timeline::before { content:""; position: absolute; left: 7px; top: 4px; bottom: 4px; width: 2px; background: var(--rx-line-strong); }
    .rx-tl-item { position: relative; padding: 0 0 1.1rem 2rem; }
    .rx-tl-item::before { content:""; position: absolute; left: 2px; top: 5px; width: 12px; height: 12px; border-radius: 50%; background: var(--rx-panel); border: 2px solid var(--rx-accent); }
    .rx-tl-item[data-tone="danger"]::before { border-color: var(--rx-danger); }
    .rx-tl-date { font-family: var(--rx-mono); font-size: 0.7rem; letter-spacing: 0.06em; color: var(--rx-subtle); text-transform: uppercase; }
    .rx-tl-title { font-weight: 640; font-size: 0.98rem; margin: 0.1rem 0 0.15rem; }
    .rx-tl-item p { font-size: 0.9rem; color: var(--rx-muted); margin: 0; }

    /* ---------- Decision table ---------- */
    .rx-table-wrap { overflow-x: auto; margin: 1.6rem 0; border: 1px solid var(--rx-line); border-radius: 10px; }
    .rx-table { width: 100%; border-collapse: collapse; font-size: 0.86rem; min-width: 520px; }
    .rx-table th, .rx-table td { text-align: left; padding: 0.6rem 0.8rem; border-bottom: 1px solid var(--rx-line); vertical-align: top; }
    .rx-table thead th { font-family: var(--rx-mono); font-size: 0.66rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--rx-subtle); background: var(--rx-paper-2); }
    .rx-table tbody tr:last-child td { border-bottom: 0; }
    .rx-table td:first-child { font-weight: 620; }

    /* ---------- Diagram / architecture ---------- */
    .rx-figure { margin: 1.7rem 0; }
    .rx-figure figcaption { font-size: 0.82rem; color: var(--rx-subtle); margin-top: 0.55rem; }
    .rx-figure figcaption b { color: var(--rx-muted); font-weight: 620; }
    .rx-diagram { border: 1px solid var(--rx-line-strong); border-radius: 12px; background: var(--rx-panel); padding: 1.25rem; overflow-x: auto; }
    .rx-diagram svg { display: block; width: 100%; height: auto; max-width: 760px; margin: 0 auto; }
    .rx-sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
    /* flow diagram building blocks (HTML/CSS) */
    .rx-flow { display: flex; flex-wrap: wrap; align-items: stretch; gap: 0.55rem; }
    .rx-node { flex: 1 1 130px; border: 1px solid var(--rx-line-strong); border-radius: 8px; background: var(--rx-paper); padding: 0.65rem 0.75rem; font-size: 0.82rem; }
    .rx-node b { display:block; font-size:0.72rem; font-family: var(--rx-mono); letter-spacing:0.06em; text-transform: uppercase; color: var(--rx-subtle); margin-bottom:0.25rem; }
    .rx-node.rx-trust { border-color:#bfe0d3; background:#eefaf4; }
    .rx-node.rx-untrust { border-color:#e6c4c4; background:#fbf1f1; }
    .rx-node.rx-boundary { border-style: dashed; }
    .rx-arrow { align-self: center; color: var(--rx-faint); font-family: var(--rx-mono); font-size: 1rem; }

    /* ---------- References ---------- */
    .rx-refs { margin: 2rem 0 0; padding: 0; list-style: none; counter-reset: ref; }
    .rx-refs li { position: relative; padding: 0.6rem 0 0.6rem 2.4rem; border-top: 1px solid var(--rx-line); font-size: 0.86rem; color: var(--rx-muted); line-height: 1.5; }
    .rx-refs li::before { counter-increment: ref; content: "[" counter(ref) "]"; position: absolute; left: 0; top: 0.6rem; font-family: var(--rx-mono); font-size: 0.76rem; color: var(--rx-accent); }
    .rx-refs .rx-ref-title { color: var(--rx-ink); font-weight: 600; }
    .rx-refs a { color: var(--rx-accent); word-break: break-word; }

    /* ---------- Series nav ---------- */
    .rx-series { border: 1px solid var(--rx-line-strong); border-radius: 12px; background: var(--rx-panel); padding: 1.1rem 1.25rem; margin: 2.2rem 0 1rem; }
    .rx-series-top { display: flex; justify-content: space-between; align-items: baseline; gap: 0.75rem; flex-wrap: wrap; }
    .rx-series-name { font-family: var(--rx-mono); font-size: 0.7rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--rx-subtle); }
    .rx-series-count { font-family: var(--rx-mono); font-size: 0.82rem; color: var(--rx-accent); font-weight: 600; }
    .rx-series-links { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 0.85rem; }
    @media (max-width: 560px) { .rx-series-links { grid-template-columns: 1fr; } }
    .rx-series-link { display: block; border: 1px solid var(--rx-line); border-radius: 8px; padding: 0.7rem 0.85rem; text-decoration: none; color: var(--rx-ink); transition: border-color .15s, background .15s; }
    .rx-series-link:hover { border-color: var(--rx-accent); background: var(--rx-paper-2); }
    .rx-series-link .rx-sl-dir { font-family: var(--rx-mono); font-size: 0.64rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--rx-subtle); }
    .rx-series-link .rx-sl-title { font-weight: 620; font-size: 0.92rem; margin-top: 0.2rem; }
    .rx-series-link.rx-next { text-align: right; }

    /* ---------- Related / archive cards ---------- */
    .rx-related { margin: 2rem 0; }
    .rx-related-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px,1fr)); gap: 1rem; }
    .rx-card { display: flex; flex-direction: column; border: 1px solid var(--rx-line); border-radius: 12px; background: var(--rx-panel); padding: 1.05rem 1.1rem; text-decoration: none; color: var(--rx-ink); transition: border-color .15s, transform .15s, box-shadow .15s; }
    .rx-card:hover { border-color: var(--rx-line-strong); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(11,21,18,0.07); }
    .rx-card-area { font-family: var(--rx-mono); font-size: 0.64rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--rx-accent); margin-bottom: 0.45rem; }
    .rx-card-title { font-family: var(--rx-serif); font-size: 1.02rem; font-weight: 620; line-height: 1.3; margin: 0 0 0.4rem; }
    .rx-card-sum { font-size: 0.85rem; color: var(--rx-subtle); line-height: 1.5; margin: 0 0 0.7rem; }
    .rx-card-foot { margin-top: auto; display: flex; gap: 0.4rem; flex-wrap: wrap; align-items: center; }
    .rx-card-meta { font-family: var(--rx-mono); font-size: 0.66rem; color: var(--rx-faint); }

    /* ---------- Engineering assistance (restrained CTA) ---------- */
    .rx-assist { border: 1px solid var(--rx-line-strong); border-radius: 12px; background: var(--rx-paper-2); padding: 1.3rem 1.4rem; margin: 2.4rem 0 0; }
    .rx-assist h2 { border: 0; padding: 0; margin: 0 0 0.5rem; font-size: 1.2rem; }
    .rx-assist p { color: var(--rx-muted); font-size: 0.92rem; margin: 0 0 0.8rem; }
    .rx-assist-links { display: flex; flex-wrap: wrap; gap: 0.55rem; }
    .rx-assist-links a { font-family: var(--rx-mono); font-size: 0.76rem; text-decoration: none; color: var(--rx-accent); border: 1px solid var(--rx-line-strong); border-radius: 50px; padding: 0.4rem 0.85rem; background: var(--rx-panel); }
    .rx-assist-links a:hover { border-color: var(--rx-accent); }

    /* ---------- Section heading helper for hub ---------- */
    .rx-sec-head { display:flex; align-items:baseline; justify-content:space-between; gap:1rem; margin: 2.4rem 0 1rem; flex-wrap: wrap; }
    .rx-sec-head h2 { font-family: var(--rx-serif); font-size: clamp(1.25rem,2.2vw,1.6rem); font-weight: 650; margin:0; border:0; padding:0; }
    .rx-sec-kicker { font-family: var(--rx-mono); font-size:0.68rem; letter-spacing:0.16em; text-transform:uppercase; color: var(--rx-subtle); }

    /* footer meta line */
    .rx-meta-note { font-size: 0.8rem; color: var(--rx-subtle); border-top: 1px solid var(--rx-line); padding-top: 1rem; margin-top: 2rem; }

    @media (prefers-reduced-motion: reduce) {
      .rx-card, .rx-card:hover { transform: none; transition: none; }
    }
  `}</style>
  );
}
