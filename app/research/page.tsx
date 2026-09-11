import type { Metadata } from 'next';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ResearchStyles from '@/components/research/ResearchStyles';
import ResearchArchiveExplorer from '@/components/research/ResearchArchiveExplorer';
import { landingPageMetadata } from '@/lib/site-seo';
import {
  PUBLICATIONS,
  REFERENCES,
  RESEARCH_AREAS,
  RESEARCH_QUESTIONS,
  SERIES_NAME,
  SERIES_TOTAL,
  RESEARCH_BASE,
} from '@/data/research/cluster';

const CANONICAL = 'https://proxytechsupport.com/research/';

export const metadata: Metadata = landingPageMetadata({
  title: 'ProxyTech Research — Autonomous AI Agent Security | Engineering Research Archive',
  description:
    'An independent engineering-research archive on autonomous AI agent security: prompt injection, sandbox escape, containment, agent identity, MCP security, and offensive-capability benchmarks — grounded in 2024–2026 academic papers and primary incident disclosures.',
  canonical: CANONICAL,
  ogTitle: 'ProxyTech Research — Autonomous AI Agent Security',
  ogDescription:
    'Deep engineering analysis of AI agent security: injection, containment, identity, MCP and offensive-capability benchmarks — grounded in real research and incidents.',
});

const flagship = PUBLICATIONS.find((p) => p.isFlagship);
const featured = PUBLICATIONS.filter((p) => p.featured);
const ordered = [...PUBLICATIONS].sort((a, b) => a.seriesIndex - b.seriesIndex);

const followedPaperKeys = ['gtg1002', 'progent', 'oneday', 'zeroday', 'cvebench', 'agentdojo', 'ztidentity', 'mcpglance'] as const;

const incidents: { key: keyof typeof REFERENCES; year: string; pub: string; label: string }[] = [
  { key: 'gtg1002', year: 'Nov 2025', pub: 'ai-orchestrated-cyber-espionage-gtg-1002', label: 'GTG-1002 — AI-orchestrated cyber espionage' },
  { key: 'echoleak', year: 'Jun 2025', pub: 'ai-agent-prompt-injection-security', label: 'EchoLeak — zero-click M365 Copilot injection' },
  { key: 'camoleak', year: 'Oct 2025', pub: 'ai-agent-network-egress-control', label: 'CamoLeak — Copilot source-code exfiltration' },
  { key: 'copilotrce', year: 'Aug 2025', pub: 'ai-coding-agent-security', label: 'CVE-2025-53773 — Copilot RCE via prompt injection' },
  { key: 'cursor', year: 'Aug 2025', pub: 'ai-coding-agent-security', label: 'Cursor CurXecute / MCPoison' },
  { key: 'postmark', year: 'Sep 2025', pub: 'mcp-server-security', label: 'postmark-mcp — malicious MCP server' },
  { key: 'mcpremote', year: 'Jul 2025', pub: 'mcp-server-security', label: 'mcp-remote RCE (CVE-2025-6514)' },
];

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'ProxyTech Research — Autonomous AI Agent Security',
  description:
    'Independent engineering-research archive on autonomous AI agent security, grounded in academic papers and primary incident disclosures.',
  url: CANONICAL,
  inLanguage: 'en',
  isPartOf: { '@id': 'https://proxytechsupport.com/#website' },
  publisher: { '@id': 'https://proxytechsupport.com/#organization' },
  mainEntity: {
    '@type': 'ItemList',
    name: SERIES_NAME,
    numberOfItems: PUBLICATIONS.length,
    itemListElement: ordered.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: `${RESEARCH_BASE}/${p.slug}/`,
    })),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: RESEARCH_BASE },
    { '@type': 'ListItem', position: 2, name: 'Research', item: CANONICAL },
  ],
};

export default function ResearchArchivePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ResearchStyles />
      <TopBar />
      <Navbar />

      <div className="rx-root">
        {/* Archive masthead */}
        <header className="rx-masthead">
          <div className="rx-mast-inner">
            <p className="rx-eyebrow">
              <span className="rx-dot" />
              ProxyTech Research
              <span aria-hidden style={{ opacity: 0.5 }}>/</span>
              Engineering Research Archive
            </p>
            <h1 className="rx-h1">Autonomous AI Agent Security</h1>
            <p className="rx-dek">
              An independent engineering-research archive. We take live evidence — academic papers on
              arXiv, primary security disclosures, and threat intelligence — and work out what it means
              for teams building and operating production AI agents. Not summaries. Not news. A running
              investigation into the security boundaries that autonomous, tool-using models break, and
              the architectures that hold.
            </p>
            <div className="rx-profile" style={{ maxWidth: '48rem' }}>
              <div className="rx-profile-cell">
                <p className="rx-profile-k">Active cluster</p>
                <div className="rx-profile-v">{SERIES_NAME}</div>
              </div>
              <div className="rx-profile-cell">
                <p className="rx-profile-k">Publications</p>
                <div className="rx-profile-v">{SERIES_TOTAL}</div>
              </div>
              <div className="rx-profile-cell">
                <p className="rx-profile-k">Evidence reviewed</p>
                <div className="rx-profile-v">September 2026</div>
              </div>
              <div className="rx-profile-cell">
                <p className="rx-profile-k">Evidence base</p>
                <div className="rx-profile-v">
                  Academic research<small>Primary disclosures · Threat intel</small>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="rx-shell" style={{ paddingBottom: '3rem' }}>
          {/* Featured / flagship */}
          {flagship && (
            <>
              <div className="rx-sec-head">
                <span className="rx-sec-kicker">Featured research</span>
                <h2>The incident that made this concrete</h2>
              </div>
              <Link
                href={`/${flagship.slug}/`}
                className="rx-card"
                style={{ borderColor: 'var(--rx-line-strong)', borderLeft: '3px solid var(--rx-danger)' }}
              >
                <span className="rx-card-area">{flagship.area} · Flagship incident research</span>
                <span className="rx-card-title" style={{ fontSize: '1.25rem' }}>
                  {flagship.title}
                </span>
                <span className="rx-card-sum">{flagship.summary}</span>
                <span className="rx-card-foot">
                  {flagship.labels.map((l) => (
                    <span key={l} className="rx-badge" data-k={l} style={{ fontSize: '0.6rem' }}>
                      {l}
                    </span>
                  ))}
                  <span className="rx-card-meta">{flagship.readingTime}</span>
                </span>
              </Link>

              <div className="rx-related-grid" style={{ marginTop: '1rem' }}>
                {featured
                  .filter((p) => !p.isFlagship)
                  .map((p) => (
                    <Link key={p.slug} href={`/${p.slug}/`} className="rx-card">
                      <span className="rx-card-area">{p.area}</span>
                      <span className="rx-card-title">{p.navTitle}</span>
                      <span className="rx-card-sum">{p.summary}</span>
                      <span className="rx-card-foot">
                        <span className="rx-card-meta">{p.type} · {p.readingTime}</span>
                      </span>
                    </Link>
                  ))}
              </div>
            </>
          )}

          {/* Latest / active cluster (filterable) */}
          <div className="rx-sec-head">
            <span className="rx-sec-kicker">Active research cluster · latest</span>
            <h2>All publications in this cluster</h2>
          </div>
          <ResearchArchiveExplorer />

          {/* Research areas */}
          <div className="rx-sec-head">
            <span className="rx-sec-kicker">Research areas</span>
            <h2>What we investigate</h2>
          </div>
          <div className="rx-related-grid">
            {RESEARCH_AREAS.map((a) => (
              <div key={a.name} className="rx-card" style={{ cursor: 'default' }}>
                <span className="rx-card-area">Area</span>
                <span className="rx-card-title">{a.name}</span>
                <span className="rx-card-sum" style={{ marginBottom: 0 }}>{a.blurb}</span>
              </div>
            ))}
          </div>

          {/* Research questions */}
          <div className="rx-sec-head">
            <span className="rx-sec-kicker">Research questions</span>
            <h2>Questions driving the cluster</h2>
          </div>
          <div className="rx-block rx-warn">
            <div className="rx-block-head">
              <span className="rx-block-kicker">Open questions</span>
              <span className="rx-badge" data-k="OPEN QUESTION">OPEN QUESTION</span>
            </div>
            <ul style={{ marginBottom: 0 }}>
              {RESEARCH_QUESTIONS.map((qn, i) => (
                <li key={i}>{qn}</li>
              ))}
            </ul>
          </div>

          {/* Incident research */}
          <div className="rx-sec-head">
            <span className="rx-sec-kicker">Incident research</span>
            <h2>Real-world incidents we analyze</h2>
          </div>
          <div className="rx-table-wrap">
            <table className="rx-table">
              <thead>
                <tr>
                  <th>Disclosed</th>
                  <th>Incident / disclosure</th>
                  <th>Primary source</th>
                  <th>Analyzed in</th>
                </tr>
              </thead>
              <tbody>
                {incidents.map((inc) => {
                  const ref = REFERENCES[inc.key];
                  const pub = PUBLICATIONS.find((p) => p.slug === inc.pub);
                  return (
                    <tr key={inc.key}>
                      <td>{inc.year}</td>
                      <td>{inc.label}</td>
                      <td>
                        <a href={ref.url} target="_blank" rel="noopener noreferrer nofollow">
                          {ref.authors}
                        </a>
                      </td>
                      <td>
                        {pub ? <Link href={`/${pub.slug}/`}>{pub.navTitle}</Link> : '—'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Papers we are following */}
          <div className="rx-sec-head">
            <span className="rx-sec-kicker">Engineering evidence</span>
            <h2>Recent papers we are following</h2>
          </div>
          <ul className="rx-refs" style={{ marginTop: 0 }}>
            {followedPaperKeys.map((k) => {
              const r = REFERENCES[k];
              return (
                <li key={k}>
                  <span className="rx-ref-title">{r.authors}. </span>
                  {r.title}.{' '}
                  {r.arxiv ? `arXiv:${r.arxiv}, ${r.year}. ` : `${r.venue}, ${r.year}. `}
                  <a href={r.url} target="_blank" rel="noopener noreferrer nofollow">
                    {r.url}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* From the blog — accessible lead-ins that funnel into the cluster */}
          <div className="rx-sec-head">
            <span className="rx-sec-kicker">From the ProxyTech blog</span>
            <h2>Accessible lead-ins</h2>
          </div>
          <div className="rx-related-grid">
            <Link href="/blog/gtg-1002-ai-orchestrated-cyberattack-engineering-lessons/" className="rx-card">
              <span className="rx-card-area">Blog · Incident briefing</span>
              <span className="rx-card-title">GTG-1002: What the First AI-Orchestrated Cyberattack Means for Engineers</span>
              <span className="rx-card-sum">A plain-English briefing on the incident and the four controls that would have contained it.</span>
            </Link>
            <Link href="/blog/ai-agent-prompt-injection-echoleak-camoleak-explained/" className="rx-card">
              <span className="rx-card-area">Blog · Explainer</span>
              <span className="rx-card-title">Prompt Injection Is Now Remote Code Execution: EchoLeak &amp; CamoLeak</span>
              <span className="rx-card-sum">Why injection is a control-flow bug — and what actually stops it.</span>
            </Link>
            <Link href="/blog/securing-ai-agents-production-checklist-2026/" className="rx-card">
              <span className="rx-card-area">Blog · Checklist</span>
              <span className="rx-card-title">Securing AI Agents in Production: A 2026 Engineering Checklist</span>
              <span className="rx-card-sum">Eight evidence-based controls, each linked to the research behind it.</span>
            </Link>
          </div>

          <p className="rx-meta-note">
            ProxyTech Research is an independent engineering-analysis project. We reference public
            academic papers and primary security disclosures; we do not claim peer review, journal
            publication, arXiv affiliation, or academic positions, and we do not represent the cited
            authors or vendors.
          </p>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
