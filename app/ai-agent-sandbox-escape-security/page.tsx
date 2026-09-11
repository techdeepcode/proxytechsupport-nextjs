import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ResearchLayout, { type TocItem } from '@/components/research/ResearchLayout';
import {
  ResearchAbstract,
  ResearchFinding,
  ResearchAnalysis,
  ResearchQuestion,
  ResearchMetricStrip,
  ResearchPaperCard,
  ResearchDecision,
  ResearchFailureMode,
  ResearchLimitations,
  ResearchReferenceList,
  ResearchFigure,
  Cite,
} from '@/components/research/primitives';
import { getPublication, REFERENCES } from '@/data/research/cluster';
import { researchMetadata, researchSchemas } from '@/data/research/seo';

const SLUG = 'ai-agent-sandbox-escape-security';
export const metadata = researchMetadata(SLUG);
const pub = getPublication(SLUG)!;
const schemas = researchSchemas(SLUG);

const refs = [
  REFERENCES.cvebench,
  REFERENCES.oneday,
  REFERENCES.zeroday,
  REFERENCES.owaspagentic,
];

const toc: TocItem[] = [
  { id: 'thesis', label: 'What "sandbox" means here' },
  { id: 'two-things', label: 'Two things called a sandbox' },
  { id: 'escape-classes', label: 'Classic escape classes' },
  { id: 'capability', label: 'What the evidence supports' },
  { id: 'what-unknown', label: 'What remains speculative' },
  { id: 'defense', label: 'Defense-in-depth isolation' },
  { id: 'failure-modes', label: 'Production failure modes' },
  { id: 'decision', label: 'Container, microVM, or remote?' },
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
              <p className="rx-rail-title">Stay honest</p>
              <ul className="rx-rail-list">
                <li>Agents can <b>exploit</b> known vulns.</li>
                <li>Autonomous zero-day escape: unproven.</li>
                <li>Design for the capable case anyway.</li>
              </ul>
            </div>
            <div className="rx-rail-card">
              <p className="rx-rail-title">Isolation ladder</p>
              <ul className="rx-rail-list">
                <li>Shared-kernel container (weakest)</li>
                <li>Hardened container (seccomp, userns)</li>
                <li>microVM / VM (strongest)</li>
              </ul>
            </div>
          </>
        }
      >
        <ResearchAbstract>
          <p>
            &ldquo;Run it in a sandbox&rdquo; is the reflexive answer to agent execution risk. It is a
            good answer, but it is often stated with more confidence than the evidence supports. This
            publication does two things: it separates the two very different things people call a
            sandbox, and it draws a careful line between what the research actually demonstrates about
            agent escape capability and what remains speculative.
          </p>
          <p>
            The honest position in September 2026: agents are demonstrably capable of <em>exploiting</em>
            known vulnerabilities when given information <Cite n={2} />, which means a container with a
            known-vulnerable configuration is at risk; but there is little public evidence of agents
            autonomously discovering and chaining novel escapes against a hardened boundary. We design
            for the capable case regardless, because the cost of being wrong is host compromise.
          </p>
        </ResearchAbstract>

        <h2 id="thesis"><span className="rx-secnum">01</span>What &ldquo;sandbox&rdquo; means here</h2>
        <p className="rx-lead">
          A sandbox is only a security boundary if it was built as one. Most agent &ldquo;sandboxes&rdquo;
          are convenience containers that were never threat-modeled against a motivated occupant.
        </p>
        <p>
          The word carries wildly different guarantees depending on the mechanism. A shared-kernel
          container isolates namespaces and cgroups but shares the host kernel — a large attack surface.
          A microVM or full VM gives each workload its own kernel behind a hardware boundary — a much
          smaller surface. Treating these as interchangeable is the root of most misplaced confidence.
        </p>

        <h2 id="two-things"><span className="rx-secnum">02</span>Two things called a sandbox</h2>
        <p>
          Agent deployments contain two nested containment problems, and conflating them causes design
          errors:
        </p>
        <ul>
          <li><strong>The code-execution sandbox</strong> — where code the agent <em>writes and runs</em> executes (the interpreter, the test runner, the shell). This is the classic sandbox-escape surface.</li>
          <li><strong>The agent process itself</strong> — the orchestration loop, its credentials, its tool connections. Even with a perfect code sandbox, the agent process can misuse its <em>legitimate</em> tools (the injection story) without escaping anything.</li>
        </ul>
        <ResearchAnalysis>
          <p style={{ marginBottom: 0 }}>
            This distinction matters because many teams harden the code-execution sandbox and consider
            themselves done, while the agent process retains broad tool authority and network access. The
            most damaging incidents in this series (
            <Link href="/ai-orchestrated-cyber-espionage-gtg-1002/">GTG-1002</Link>,{' '}
            <Link href="/ai-agent-prompt-injection-security/">EchoLeak/CamoLeak</Link>) required <em>no sandbox
            escape at all</em> — the agent abused authority it was granted. Sandbox escape is a real but
            secondary boundary; do not let it distract from the primary one.
          </p>
        </ResearchAnalysis>

        <h2 id="escape-classes"><span className="rx-secnum">03</span>Classic escape classes an agent inherits</h2>
        <p>
          When an agent can run arbitrary code, it inherits the entire, well-documented catalogue of
          container-escape techniques. None of these are novel to AI; what is new is a tireless occupant
          that can enumerate and attempt them at speed:
        </p>
        <div className="rx-table-wrap rx-full">
          <table className="rx-table">
            <thead><tr><th>Class</th><th>Root cause</th><th>Mitigation</th></tr></thead>
            <tbody>
              <tr><td>Misconfiguration</td><td>Privileged flag, mounted Docker socket, host mounts</td><td>Rootless, no host mounts, no socket exposure</td></tr>
              <tr><td>Excess capabilities</td><td>Default or added Linux capabilities (e.g. CAP_SYS_ADMIN)</td><td>Drop all caps; add back the minimum; seccomp</td></tr>
              <tr><td>Kernel vulnerability</td><td>Shared host kernel with an exploitable flaw</td><td>Patch; user namespaces; microVM to shrink shared surface</td></tr>
              <tr><td>Shared resources</td><td>Shared network, IPC, or filesystem with host/peers</td><td>Network isolation; read-only rootfs; per-workload FS</td></tr>
              <tr><td>Supply chain</td><td>Malicious dependency runs inside the sandbox</td><td>Pin/verify; deny egress; treat sandbox contents as hostile</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="capability"><span className="rx-secnum">04</span>What the evidence actually supports</h2>
        <p>
          The peer-reviewed work does not (yet) measure &ldquo;can an agent escape a hardened
          sandbox.&rdquo; It measures adjacent capabilities that bound the risk. Read precisely:
        </p>
        <ResearchPaperCard
          reference={REFERENCES.oneday}
          question="Can an agent exploit a real vulnerability once it knows what the vulnerability is?"
          method="A single agent with tools attempts real one-day vulnerabilities; measured with and without the CVE description."
          finding="87% success when handed the description; ~7% without it."
          metric="87% → 7% (with vs. without description)"
          limitations="Exploitation, not escape; success is contingent on being told the weakness."
          relevance="Implication for sandboxing: a sandbox with a known, unpatched weakness is squarely within demonstrated agent capability. Patch discipline is a first-class agent-security control."
        />
        <ResearchPaperCard
          reference={REFERENCES.cvebench}
          question="How reliably can agents exploit real-world vulnerabilities end to end under realistic conditions?"
          method="Sandboxed benchmark of critical-severity real-world web CVEs with reliable success criteria."
          finding="State-of-the-art frameworks resolved up to 13% — capability is real but far from saturated."
          metric="≤13% resolved"
          limitations="Web-app CVEs, not kernel/container escapes; benchmarks trail frontier models."
          relevance="Tempers the fear: autonomous, reliable end-to-end exploitation of arbitrary hardened targets is not today’s reality — but the trend line is upward, so design for headroom."
        />
        <ResearchMetricStrip
          items={[
            { value: '87%', label: 'One-day exploitation given the CVE — patch your sandbox', source: 'Fang et al. [2]' },
            { value: '≤13%', label: 'Real-world CVEs resolved end-to-end by SOTA agents', source: 'CVE-Bench [1]' },
            { value: '4.3×', label: 'Coordination gain — teams beat single agents', source: 'Zhu et al. [3]' },
          ]}
        />

        <h2 id="what-unknown"><span className="rx-secnum">05</span>What remains speculative</h2>
        <ResearchQuestion>
          <p>
            We could not identify strong public evidence that an autonomous agent has, unaided,
            discovered and chained a novel escape against a properly hardened microVM boundary. Claims in
            this space frequently blur three different things: (a) an agent <em>exploiting a known</em>
            misconfiguration, (b) an agent <em>using a supplied</em> exploit, and (c) an agent
            <em> discovering a novel</em> escape. Only (a) and (b) are well-evidenced <Cite n={1} />
            <Cite n={2} />.
          </p>
          <p style={{ marginBottom: 0 }}>
            This is an <strong>open question</strong>, not a reassurance. Capability is rising and
            multi-agent coordination amplifies it <Cite n={3} />. The engineering response to an open
            question about a catastrophic outcome is to build for the pessimistic case — hence the
            defense below — while refusing to overstate the current evidence.
          </p>
        </ResearchQuestion>

        <h2 id="defense"><span className="rx-secnum">06</span>Defense-in-depth isolation</h2>
        <ResearchFigure
          altText="Layered isolation diagram: innermost is the code the agent runs; wrapped by a seccomp/capabilities-restricted, rootless, read-only container; wrapped by a microVM with its own kernel; wrapped by network egress deny-by-default; the host sits outside all layers with no ambient credentials reachable from inside."
          caption={<><b>Figure 1.</b> Defense-in-depth. Each ring is independent: a failure of one is caught by the next. The host&rsquo;s credentials are never reachable from inside any ring.</>}
        >
          <div className="rx-flow" style={{ flexDirection: 'column' }}>
            <div className="rx-node rx-untrust"><b>Ring 0</b>Agent-run code — assume hostile</div>
            <div className="rx-node"><b>Ring 1</b>Rootless container · drop caps · seccomp · read-only FS</div>
            <div className="rx-node"><b>Ring 2</b>microVM / VM — own kernel, hardware boundary</div>
            <div className="rx-node rx-trust"><b>Ring 3</b>Deny-by-default egress · no ambient host creds</div>
          </div>
        </ResearchFigure>
        <ResearchFinding title="Isolation checklist" badge="ANALYSIS" tone="accent">
          <ul style={{ marginBottom: 0 }}>
            <li>Prefer a <strong>microVM/VM boundary</strong> for untrusted code; shared-kernel containers alone are a weak boundary against a capable occupant.</li>
            <li>Run <strong>rootless</strong>, drop all Linux capabilities, apply a restrictive seccomp profile, mount the root filesystem read-only.</li>
            <li>Never mount the container runtime socket or host paths into the sandbox.</li>
            <li>Give the sandbox <strong>no ambient credentials</strong> and <strong>no host network</strong>; pair with deny-by-default egress (see <Link href="/ai-agent-network-egress-control/">egress control</Link>).</li>
            <li>Make sandboxes <strong>ephemeral</strong> — destroy and recreate per task so persistence cannot accrue.</li>
            <li>Patch aggressively: the 87% number means a known-vulnerable sandbox is exploitable <Cite n={2} />.</li>
          </ul>
        </ResearchFinding>

        <h2 id="failure-modes"><span className="rx-secnum">07</span>Production failure modes</h2>
        <ResearchFailureMode
          title="A convenience container is mistaken for a security boundary"
          mechanism={<>Agent-run code executes in a shared-kernel container started for developer convenience — sometimes privileged, with host mounts or the runtime socket exposed. The agent (or code it runs) reaches the host.</>}
          whyFailed={<>The container was never threat-modeled as adversarial containment; it isolated for tidiness, not for security, and retained escape-enabling configuration.</>}
          signals={[
            'Attempts to access /var/run/docker.sock or host mounts',
            'Capability-probing syscalls; seccomp violations',
            'Processes enumerating the kernel version / known CVEs',
            'Unexpected outbound connections from the sandbox',
          ]}
          controls={[
            'microVM boundary for untrusted execution',
            'Rootless, drop caps, seccomp, read-only rootfs',
            'No runtime socket, no host mounts, no host network',
            'Ephemeral sandboxes + aggressive patching',
          ]}
        />

        <h2 id="decision"><span className="rx-secnum">08</span>Container, microVM, or remote execution service?</h2>
        <ResearchDecision
          columns={[
            { key: 'opt', label: 'Option' },
            { key: 'boundary', label: 'Boundary strength' },
            { key: 'cost', label: 'Cost / latency' },
            { key: 'fit', label: 'Where it fits' },
          ]}
          rows={[
            { opt: 'Shared-kernel container', boundary: 'Weak vs capable occupant', cost: 'Low', fit: 'Trusted code only; not untrusted agent execution' },
            { opt: 'Hardened container (rootless+seccomp+userns)', boundary: 'Moderate', cost: 'Low–medium', fit: 'Lower-risk agent tasks with egress deny' },
            { opt: 'microVM / VM per task', boundary: 'Strong (own kernel)', cost: 'Medium', fit: 'Untrusted code execution — the default for real isolation' },
            { opt: 'Managed remote execution service', boundary: 'Strong + off your infra', cost: 'Medium–high', fit: 'When you want the boundary outside your network entirely' },
          ]}
          recommendation={
            <p style={{ marginBottom: 0 }}>
              For any agent that executes code it or an attacker may influence, make the default a{' '}
              <strong>microVM boundary per task</strong>, ephemeral, with no ambient credentials and
              deny-by-default egress. Reserve bare hardened containers for lower-risk, trusted-input
              work. The extra milliseconds of microVM startup are cheap next to host compromise — and
              they buy a boundary that does not depend on the shared-kernel attack surface.
            </p>
          }
        />

        <h2 id="limitations"><span className="rx-secnum">09</span>Limitations</h2>
        <ResearchLimitations
          items={[
            'We deliberately do not cite unverified claims of autonomous sandbox escape; direct evidence for novel-escape discovery by unaided agents is, to our review, weak — treat this as an open question, not a settled one.',
            'Exploitation benchmarks [1][2] measure web-app and one-day exploitation, not container/kernel escape; we extrapolate capability direction, not a specific escape rate.',
            'microVM boundaries are strong but not infinite; hardware and hypervisor vulnerabilities exist, and misconfiguration can undermine any boundary.',
            'The "primary boundary is authority, not escape" argument holds for today’s incidents but does not license neglecting execution isolation as capability rises [4].',
          ]}
        />

        <h2 id="next"><span className="rx-secnum">10</span>Where this leads</h2>
        <p>
          Isolation is one wall; the fuller architecture — mediating every boundary and bounding blast
          radius by construction — is the subject of{' '}
          <Link href="/ai-agent-containment-architecture/">containment architecture</Link>. The network wall
          that holds even after an escape is{' '}
          <Link href="/ai-agent-network-egress-control/">egress control</Link>, and the capability trend that
          makes all of this urgent is read carefully in{' '}
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
