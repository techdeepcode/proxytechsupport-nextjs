import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ResearchLayout, { type TocItem } from '@/components/research/ResearchLayout';
import {
  ResearchAbstract,
  ResearchFinding,
  ResearchQuestion,
  ResearchMetricStrip,
  ResearchDecision,
  ResearchFailureMode,
  ResearchLimitations,
  ResearchReferenceList,
  ResearchFigure,
  Cite,
} from '@/components/research/primitives';
import { getPublication, REFERENCES } from '@/data/research/cluster';
import { researchMetadata, researchSchemas } from '@/data/research/seo';

const SLUG = 'ai-agent-network-egress-control';
export const metadata = researchMetadata(SLUG);
const pub = getPublication(SLUG)!;
const schemas = researchSchemas(SLUG);

const refs = [
  REFERENCES.camoleak,
  REFERENCES.gtg1002,
  REFERENCES.echoleak,
  REFERENCES.owaspagentic,
];

const toc: TocItem[] = [
  { id: 'thesis', label: 'The last line of defense' },
  { id: 'why-egress', label: 'Exfiltration needs the network' },
  { id: 'channels', label: 'The channels attackers use' },
  { id: 'deny-default', label: 'Deny-by-default egress' },
  { id: 'destination-aware', label: 'Destination-aware policy' },
  { id: 'covert', label: 'Covert channels & limits' },
  { id: 'decision', label: 'Open, allowlist, or proxy-only?' },
  { id: 'failure-modes', label: 'Production failure modes' },
  { id: 'limitations', label: 'Limitations' },
  { id: 'next', label: 'Where this leads' },
  { id: 'references', label: 'References' },
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <TopBar />
      <Navbar />
      <ResearchLayout
        pub={pub}
        toc={toc}
        rail={
          <>
            <div className="rx-rail-card">
              <p className="rx-rail-title">Why it holds</p>
              <ul className="rx-rail-list">
                <li>Injection may succeed.</li>
                <li>The data still needs to leave.</li>
                <li>Egress is where you stop it.</li>
              </ul>
            </div>
            <div className="rx-rail-card">
              <p className="rx-rail-title">Real channels</p>
              <ul className="rx-rail-list">
                <li>Trusted image proxy (CamoLeak) <Cite n={1} /></li>
                <li>Auto image fetch (EchoLeak) <Cite n={3} /></li>
                <li>Recon + C2 (GTG-1002) <Cite n={2} /></li>
              </ul>
            </div>
          </>
        }
      >
        <ResearchAbstract>
          <p>
            Every other control in this series reduces the probability that an agent is compromised.
            Network egress control is different: it assumes compromise has already happened and asks a
            narrower, more answerable question — can the data actually leave? For a large class of
            attacks, the honest answer under deny-by-default egress is <em>no</em>, which is why this is
            the single most reliable backstop in the cluster.
          </p>
          <p>
            We show why exfiltration and command-and-control both depend on outbound connectivity,
            catalogue the channels real attacks abused (trusted proxies, auto-fetched images, DNS), and
            lay out destination-aware, deny-by-default egress — including an honest account of the covert
            channels it does not fully close.
          </p>
        </ResearchAbstract>

        <h2 id="thesis"><span className="rx-secnum">01</span>The last line of defense</h2>
        <p className="rx-lead">
          &ldquo;The agent obeyed the attacker&rdquo; and &ldquo;the data left the building&rdquo; are two
          different events. Egress control is the wall between them.
        </p>
        <p>
          The strategic value of egress control is that its guarantee does not depend on out-guessing the
          adversary. You do not need to predict the injection, recognize the jailbreak, or classify the
          intent. You only need to know which destinations are legitimate for this workload — a small,
          stable, enumerable set — and refuse everything else. That refusal holds regardless of how the
          agent was compromised.
        </p>

        <h2 id="why-egress"><span className="rx-secnum">02</span>Exfiltration and C2 both need the network</h2>
        <p>
          Two of the most damaging agent-attack objectives are fundamentally network-bound.
          <strong> Data exfiltration</strong> requires an outbound path to carry the stolen data.
          <strong> Command-and-control</strong> and <strong>reconnaissance</strong> require reaching
          external hosts. In GTG-1002, reconnaissance across ~30 organizations and the extraction of
          data were both network operations <Cite n={2} />; a deny-by-default egress posture would have
          starved both — the agent could plan the intrusion, but its packets would have had nowhere to go
          except allowlisted destinations.
        </p>

        <h2 id="channels"><span className="rx-secnum">03</span>The channels attackers actually use</h2>
        <p>
          Real disclosures show attackers reaching for the <em>trusted</em> outbound paths that naive
          egress rules leave open:
        </p>
        <ResearchFinding title="Trusted image proxy — CamoLeak" badge="INCIDENT" tone="danger">
          <p style={{ marginBottom: 0 }}>
            The exfiltration rode the platform&rsquo;s own image-proxy infrastructure: data was encoded
            into requests for signed proxy URLs, each resolving to a tracking pixel on attacker
            infrastructure, so the traffic looked like ordinary image loading and slipped past
            network controls <Cite n={1} />. <strong>Lesson:</strong> a trusted first-party domain can be
            a covert channel; allowlisting a domain is not the same as trusting every use of it.
          </p>
        </ResearchFinding>
        <ResearchFinding title="Automatic content fetch — EchoLeak" badge="INCIDENT" tone="danger">
          <p style={{ marginBottom: 0 }}>
            The chain abused automatic fetching of referenced content to trigger outbound requests
            carrying data, without the user clicking anything <Cite n={3} />. <strong>Lesson:</strong>
            any feature that fetches a URL on the agent&rsquo;s behalf is an egress primitive and must be
            governed like one.
          </p>
        </ResearchFinding>
        <p>
          Beyond these, the standard covert channels apply: <strong>DNS</strong> (encoding data in
          subdomain lookups), <strong>allowlisted SaaS APIs</strong> used as drop points, and{' '}
          <strong>timing/side channels</strong>. A serious egress design anticipates all of them.
        </p>

        <h2 id="deny-default"><span className="rx-secnum">04</span>Deny-by-default egress</h2>
        <ResearchFigure
          altText="Diagram: the agent and its execution sandbox have no direct network route. All outbound traffic is forced through an egress proxy that permits only allowlisted destinations, logs every request, and blocks everything else including direct DNS. Legitimate destinations pass; the attacker's destination is denied."
          caption={<><b>Figure 1.</b> Deny-by-default egress. The agent has no direct route out; the proxy is the only exit and it permits only the workload&rsquo;s known destinations.</>}
        >
          <div className="rx-flow">
            <div className="rx-node rx-untrust"><b>Agent + sandbox</b>No direct route</div>
            <span className="rx-arrow">→</span>
            <div className="rx-node rx-trust"><b>Egress proxy</b>Allowlist only · logs all</div>
            <span className="rx-arrow">→</span>
            <div className="rx-node rx-trust"><b>Allowed dests</b>Known APIs</div>
            <span className="rx-arrow">✕</span>
            <div className="rx-node rx-untrust"><b>Everything else</b>Blocked</div>
          </div>
        </ResearchFigure>
        <ResearchFinding title="Egress control checklist" badge="ANALYSIS" tone="accent">
          <ul style={{ marginBottom: 0 }}>
            <li>Agent and sandbox have <strong>no default route</strong>; the only exit is a mediating proxy.</li>
            <li>Proxy enforces a <strong>destination allowlist</strong> (host <em>and</em> path where possible), not just IP ranges.</li>
            <li><strong>DNS is controlled</strong> — resolve only allowlisted names through the proxy; block arbitrary lookups to kill DNS exfiltration.</li>
            <li>Every request is <strong>logged to the audit spine</strong> for anomaly detection and forensics.</li>
            <li>Features that fetch URLs (images, link previews, webhooks) route through the same proxy and count against the allowlist.</li>
          </ul>
        </ResearchFinding>

        <h2 id="destination-aware"><span className="rx-secnum">05</span>Destination-aware, not just on/off</h2>
        <p>
          The CamoLeak lesson is that coarse allowlisting fails: permitting a trusted domain wholesale
          lets an attacker abuse legitimate endpoints on it. Destination-aware policy narrows to the
          specific endpoints a workload uses and, where feasible, constrains request shape — a travel
          agent may POST to the booking API&rsquo;s reserve endpoint, but not exfiltrate a megabyte of
          data to an analytics beacon on the same allowlisted CDN. The finer the granularity, the fewer
          covert channels survive.
        </p>
        <ResearchMetricStrip
          items={[
            { value: '2', label: '2025 incidents that abused trusted outbound paths', source: 'CamoLeak [1], EchoLeak [3]' },
            { value: 'Deny', label: 'Correct default for agent egress', source: 'ProxyTech analysis' },
            { value: 'Host+path', label: 'Allowlist granularity that closes proxy abuse', source: 'CamoLeak lesson [1]' },
          ]}
        />

        <h2 id="covert"><span className="rx-secnum">06</span>Covert channels and honest limits</h2>
        <ResearchQuestion>
          <p style={{ marginBottom: 0 }}>
            Egress control is powerful but not total. Low-bandwidth covert channels — timing, encoding
            secrets into otherwise-legitimate allowlisted requests, staging data through a permitted SaaS
            API — can leak small amounts even under deny-by-default. The open question is how much
            residual leakage is acceptable and how to detect slow exfiltration through legitimate
            channels. Egress control raises the cost and caps the bandwidth of exfiltration dramatically;
            it does not reduce it to a mathematical zero. Treat it as the strongest available backstop,
            not a proof of impossibility.
          </p>
        </ResearchQuestion>

        <h2 id="decision"><span className="rx-secnum">07</span>Open, allowlist, or proxy-only?</h2>
        <ResearchDecision
          columns={[
            { key: 'posture', label: 'Egress posture' },
            { key: 'exfil', label: 'Exfiltration risk' },
            { key: 'ops', label: 'Operational cost' },
            { key: 'fit', label: 'Where it fits' },
          ]}
          rows={[
            { posture: 'Open egress', exfil: 'Unbounded', ops: 'None', fit: 'Never for agents with data access' },
            { posture: 'IP/domain allowlist (coarse)', exfil: 'Reduced; proxy-abuse remains', ops: 'Low', fit: 'Minimum bar; insufficient alone (CamoLeak) [1]' },
            { posture: 'Proxy-only, host+path allowlist, controlled DNS', exfil: 'Low; covert channels only', ops: 'Medium', fit: 'The default for production agents' },
            { posture: 'Air-gapped / no egress', exfil: 'Near-zero', ops: 'High; breaks many tasks', fit: 'Highest-sensitivity, offline-capable agents' },
          ]}
          recommendation={
            <p style={{ marginBottom: 0 }}>
              Make <strong>proxy-only egress with host+path allowlisting and controlled DNS</strong> the
              default for any agent that touches sensitive data. It closes the trusted-proxy and DNS
              channels that real attacks used while remaining operable. Reserve full air-gapping for the
              most sensitive workloads. Pair egress control with the{' '}
              <Link href="/ai-agent-containment-architecture/">mediation plane&rsquo;s</Link> audit spine so slow,
              in-channel leakage has a chance of being detected.
            </p>
          }
        />

        <h2 id="failure-modes"><span className="rx-secnum">08</span>Production failure modes</h2>
        <ResearchFailureMode
          title="The agent has unrestricted outbound network access"
          mechanism={<>The agent (and any code it runs) can open arbitrary outbound connections. After a successful injection, it encodes and ships data to an attacker destination — often via a trusted proxy, auto-fetched URL, or DNS.</>}
          whyFailed={<>The sandbox isolated filesystem and processes but did not enforce a destination-aware egress policy; &ldquo;isolated&rdquo; did not mean &ldquo;cannot phone home.&rdquo;</>}
          signals={[
            'First-seen external destinations, especially in sequence',
            'Data-shaped requests to image proxies / analytics beacons',
            'Unusual DNS query volume or high-entropy subdomains',
            'Outbound volume inconsistent with the task',
          ]}
          controls={[
            'Deny-by-default egress via a mediating proxy',
            'Host+path allowlist; controlled DNS resolution',
            'Route URL-fetching features through the same proxy',
            'Log all egress to an isolated audit spine for detection',
          ]}
        />

        <h2 id="limitations"><span className="rx-secnum">09</span>Limitations</h2>
        <ResearchLimitations
          items={[
            'Egress control assumes compromise and bounds consequence; it does nothing to prevent the compromise itself and must be paired with the upstream controls in this series.',
            'Low-bandwidth covert channels (timing, encoding into legitimate allowlisted requests) can leak small amounts even under deny-by-default; it is a strong backstop, not an impossibility proof.',
            'Fine-grained host+path allowlisting is operationally heavier and can break on legitimate endpoint changes, creating pressure to loosen it.',
            'The cited incidents demonstrate channel abuse but do not quantify how often egress controls would have fully prevented impact in the wild.',
          ]}
        />

        <h2 id="next"><span className="rx-secnum">10</span>Where this leads</h2>
        <p>
          Egress is the outermost ring of the{' '}
          <Link href="/ai-agent-containment-architecture/">containment architecture</Link> and the backstop
          behind <Link href="/ai-agent-prompt-injection-security/">prompt injection</Link>,{' '}
          <Link href="/ai-coding-agent-security/">coding-agent</Link>, and{' '}
          <Link href="/mcp-server-security/">MCP</Link> compromise. To judge how urgently you need it, read how
          fast offensive capability is actually growing in{' '}
          <Link href="/ai-agent-autonomous-exploitation-benchmarks/">exploitation benchmarks</Link>.
        </p>

        <h2 id="references"><span className="rx-secnum">—</span>References</h2>
        <ResearchReferenceList refs={refs} />
      </ResearchLayout>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
