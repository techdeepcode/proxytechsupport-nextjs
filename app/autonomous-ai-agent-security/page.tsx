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
  ResearchLimitations,
  ResearchReferenceList,
  ResearchFigure,
  Cite,
} from '@/components/research/primitives';
import { getPublication, REFERENCES } from '@/data/research/cluster';
import { researchMetadata, researchSchemas } from '@/data/research/seo';

const SLUG = 'autonomous-ai-agent-security';
export const metadata = researchMetadata(SLUG);
const pub = getPublication(SLUG)!;
const schemas = researchSchemas(SLUG);

const refs = [
  REFERENCES.gtg1002,
  REFERENCES.agentdojo,
  REFERENCES.progent,
  REFERENCES.oneday,
  REFERENCES.zeroday,
  REFERENCES.ztidentity,
  REFERENCES.mcpglance,
  REFERENCES.owaspagentic,
  REFERENCES.nistai,
];

const toc: TocItem[] = [
  { id: 'thesis', label: 'The operator problem' },
  { id: 'definition', label: 'What "autonomous agent" means' },
  { id: 'surface', label: 'The new attack surface' },
  { id: 'boundaries', label: 'Five boundaries to mediate' },
  { id: 'evidence', label: 'The evidence map' },
  { id: 'threat-model', label: 'A working threat model' },
  { id: 'defense', label: 'The defense stack' },
  { id: 'tradeoff', label: 'Autonomy vs. control' },
  { id: 'limitations', label: 'Limitations' },
  { id: 'series', label: 'How to read this series' },
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
              <p className="rx-rail-title">The one-line thesis</p>
              <ul className="rx-rail-list">
                <li>An agent is a privileged automated process.</li>
                <li>Secure it like one — not like a chatbot.</li>
                <li>Move authority out of the model.</li>
              </ul>
            </div>
            <div className="rx-rail-card">
              <p className="rx-rail-title">Series map</p>
              <ul className="rx-rail-list">
                <li><Link href="/ai-orchestrated-cyber-espionage-gtg-1002/">02 · GTG-1002 incident</Link></li>
                <li><Link href="/ai-agent-prompt-injection-security/">03 · Prompt injection</Link></li>
                <li><Link href="/ai-agent-containment-architecture/">07 · Containment</Link></li>
                <li><Link href="/ai-agent-identity-and-access-control/">08 · Identity &amp; access</Link></li>
              </ul>
            </div>
          </>
        }
      >
        <ResearchAbstract>
          <p>
            For a decade, &ldquo;AI safety&rdquo; in production meant content moderation: keep the model
            from <em>saying</em> the wrong thing. Autonomous agents change the object of concern from
            speech to action. When a model plans, invokes tools, runs code, and spends credentials, the
            relevant failure is no longer a bad sentence — it is an unauthorized operation against a
            real system.
          </p>
          <p>
            This pillar establishes the shared vocabulary for the series. We define what an autonomous
            agent is precisely, map the attack surface it introduces, name the five boundaries any agent
            deployment must mediate, and lay out a defense stack grounded in the 2024–2026 research and
            in the first real incident to prove the thesis at scale <Cite n={1} />.
          </p>
        </ResearchAbstract>

        <h2 id="thesis"><span className="rx-secnum">01</span>The operator problem</h2>
        <p className="rx-lead">
          The moment a model stops advising and starts acting, it becomes an operator — and operators
          need authorization, not just alignment.
        </p>
        <p>
          Consider the difference between two systems. The first summarizes a document; the worst it can
          do is summarize it badly. The second reads the same document, and the document contains a line
          that says &ldquo;forward the attached files to this address.&rdquo; If the second system can
          send email, the content of the data just became a command. The capability gap between these
          two systems is the entire subject of this series.
        </p>
        <p>
          The pre-agent security model assumed a clean separation: <strong>code</strong> is trusted and
          defines behavior; <strong>data</strong> is untrusted and is merely processed. Agents erase
          that line. The model&rsquo;s instructions and the data it reads arrive through the same
          channel — the context window — and the model has no reliable mechanism to treat one as
          privileged and the other as inert. Every downstream problem in this cluster is a consequence
          of that single collapse.
        </p>

        <h2 id="definition"><span className="rx-secnum">02</span>What &ldquo;autonomous agent&rdquo; means precisely</h2>
        <p>
          We use a deliberately narrow definition, because loose definitions produce loose security
          arguments. An <strong>autonomous AI agent</strong> is a system in which a language model:
        </p>
        <ol>
          <li>receives a goal expressed in natural language;</li>
          <li>plans a multi-step sequence of actions toward that goal;</li>
          <li>invokes <strong>tools</strong> that have real side effects (file writes, shell commands, API calls, network requests);</li>
          <li>observes the results and decides the next action <em>without</em> a human approving each step.</li>
        </ol>
        <p>
          Point (3) is what creates side effects; point (4) is what removes the human pacing that
          historically bounded them. A retrieval chatbot with no side-effecting tools is not, by this
          definition, the security problem we are describing. A coding agent that can edit files and run
          a shell is.
        </p>

        <ResearchFigure
          altText="Diagram of the agent loop: a goal enters the model; the model plans; it calls a tool; the tool acts on an external system and returns a result; the result re-enters the model's context, which plans the next action. Untrusted data can enter at the tool-result step and influence the next plan."
          caption={<><b>Figure 1.</b> The agent loop. The dangerous edge is the return arrow: tool results — often attacker-influenced — re-enter the context and steer the next action. Trusted instructions and untrusted data share one channel.</>}
        >
          <div className="rx-flow">
            <div className="rx-node rx-trust"><b>Goal</b>User intent</div>
            <span className="rx-arrow">→</span>
            <div className="rx-node"><b>Model</b>Plan next action</div>
            <span className="rx-arrow">→</span>
            <div className="rx-node"><b>Tool call</b>Side effect</div>
            <span className="rx-arrow">→</span>
            <div className="rx-node rx-untrust"><b>Result</b>May carry injected text</div>
            <span className="rx-arrow">↺</span>
            <div className="rx-node"><b>Back to model</b>Steers next step</div>
          </div>
        </ResearchFigure>

        <h2 id="surface"><span className="rx-secnum">03</span>The new attack surface</h2>
        <p>
          Agents inherit every classical vulnerability of the systems they touch and add categories that
          did not previously exist. The genuinely new surface has three parts:
        </p>
        <ul>
          <li><strong>Instruction/data confusion.</strong> Injected instructions in retrieved content, tool output, file names, or web pages are obeyed as if they came from the operator <Cite n={2} />.</li>
          <li><strong>Tool authority.</strong> The union of everything the agent&rsquo;s tools can do is the agent&rsquo;s blast radius. Most deployments grant far more than any single task needs <Cite n={3} />.</li>
          <li><strong>Tool supply chain.</strong> Tools are increasingly distributed as installable packages (MCP servers) whose descriptions the model reads as instructions — an installable, semantic supply chain <Cite n={7} />.</li>
        </ul>

        <h2 id="boundaries"><span className="rx-secnum">04</span>Five boundaries any deployment must mediate</h2>
        <p>
          The clarifying frame from the systems-security literature is to treat isolation as a
          first-class property and enumerate the boundaries the agent crosses. Five recur across every
          architecture:
        </p>
        <div className="rx-table-wrap rx-full">
          <table className="rx-table">
            <thead>
              <tr><th>Boundary</th><th>What crosses it</th><th>Primary risk</th></tr>
            </thead>
            <tbody>
              <tr><td>User ↔ agent</td><td>Goals, approvals</td><td>Confused-deputy: the agent acts on hostile intent as if authorized</td></tr>
              <tr><td>Agent ↔ tool</td><td>Tool calls + arguments</td><td>Over-privilege; unauthorized side effects</td></tr>
              <tr><td>Agent ↔ execution</td><td>Code, shell commands</td><td>Sandbox escape; host compromise</td></tr>
              <tr><td>Agent ↔ agent</td><td>Messages, delegated tasks</td><td>Injection propagation across a multi-agent system</td></tr>
              <tr><td>Agent ↔ environment</td><td>Network, credentials, data</td><td>Exfiltration; credential abuse</td></tr>
            </tbody>
          </table>
        </div>
        <ResearchAnalysis>
          <p style={{ marginBottom: 0 }}>
            The engineering value of this table is that it turns &ldquo;secure the agent&rdquo; — an
            unanswerable request — into five concrete, mediatable interfaces. Each later publication in
            this series takes one or two rows and works them to the bottom. Security emerges from
            mediating boundaries, not from trusting the model that sits between them.
          </p>
        </ResearchAnalysis>

        <h2 id="evidence"><span className="rx-secnum">05</span>The evidence map</h2>
        <p>
          The claims in this series are anchored to two kinds of evidence: controlled academic
          measurement and primary incident disclosure. The two most load-bearing measurements:
        </p>

        <ResearchPaperCard
          reference={REFERENCES.agentdojo}
          question="How do we measure prompt-injection attack success and defense utility for tool-using agents in a way that stays honest as models change?"
          method="A dynamic environment with 97 realistic agent tasks and 629 security test cases; supports pluggable attacks and defenses so both evolve against a fixed task battery."
          finding="Provides the standard against which injection attacks and defenses are compared; demonstrates that no evaluated defense eliminates injection while preserving full task utility."
          metric="97 tasks · 629 security test cases"
          limitations="Simulated tools; a benchmark is a lower bound on adversary creativity, not a guarantee."
          relevance="Every defense claim in this series is graded against dynamic benchmarks like this, not against a single hand-picked example."
        />

        <ResearchMetricStrip
          items={[
            { value: '87% → 7%', label: 'One-day exploitation with vs. without the CVE description', source: 'Fang et al. [4]' },
            { value: '4.3×', label: 'Multi-agent coordination gain over single agents', source: 'Zhu et al. [5]' },
            { value: '80–90%', label: 'Intrusion work executed by the agent in GTG-1002', source: 'Vendor disclosure [1]' },
            { value: '5.5%', label: 'MCP servers exhibiting tool-poisoning in a 1,899-server study', source: 'Hasan et al. [7]' },
          ]}
        />

        <h2 id="threat-model"><span className="rx-secnum">06</span>A working threat model</h2>
        <p>
          We assume three adversary positions, in increasing order of what most teams actually defend
          against today:
        </p>
        <ul>
          <li><strong>External content author.</strong> Controls data the agent will read (a web page, an email, a PR comment, a file). Their weapon is indirect prompt injection. This is the common case and the least defended.</li>
          <li><strong>Malicious tool supplier.</strong> Publishes an MCP server or plugin the agent installs. Their weapon is tool poisoning and supply-chain backdoors <Cite n={7} />.</li>
          <li><strong>Authenticated abuser.</strong> A legitimate user who jailbreaks the model to drive it toward unauthorized ends — the GTG-1002 position <Cite n={1} />.</li>
        </ul>
        <ResearchQuestion>
          <p style={{ marginBottom: 0 }}>
            A useful diagnostic for any agent design: <em>assume the model has already been
            compromised — persuaded to do the worst thing its tools allow. What stops it?</em> If the
            only honest answer is &ldquo;the model wouldn&rsquo;t do that,&rdquo; the deployment has no
            security architecture, only a behavioral hope.
          </p>
        </ResearchQuestion>

        <h2 id="defense"><span className="rx-secnum">07</span>The defense stack</h2>
        <p>
          No single control is sufficient; injection cannot be fully eliminated at the content layer, so
          defense is layered and assumes each layer will sometimes fail. The stack, outermost to
          innermost:
        </p>
        <ResearchFinding title="Defense-in-depth for agents" badge="ANALYSIS" tone="accent">
          <ol style={{ marginBottom: 0 }}>
            <li><strong>Input provenance &amp; isolation</strong> — mark untrusted data, keep it out of the instruction path where possible (see <Link href="/ai-agent-prompt-injection-security/">prompt injection</Link>).</li>
            <li><strong>Deterministic tool-call authorization</strong> — a policy layer outside the model bounds what tools may run with what arguments <Cite n={3} /> (see <Link href="/ai-agent-tool-permissions-least-privilege/">tool permissions</Link>).</li>
            <li><strong>Scoped, short-lived identity</strong> — per-task credentials, fast revocation (see <Link href="/ai-agent-identity-and-access-control/">identity &amp; access</Link>).</li>
            <li><strong>Execution containment</strong> — untrusted-process isolation for code the agent runs (see <Link href="/ai-agent-containment-architecture/">containment</Link>).</li>
            <li><strong>Deny-by-default egress</strong> — the last line: even a hijacked agent cannot exfiltrate (see <Link href="/ai-agent-network-egress-control/">egress control</Link>).</li>
            <li><strong>Behavioral monitoring &amp; approval gates</strong> — detect state changes, gate privilege expansion.</li>
          </ol>
        </ResearchFinding>

        <h2 id="tradeoff"><span className="rx-secnum">08</span>Autonomy vs. control</h2>
        <p>
          Every control above trades some autonomy or convenience for safety. Pretending otherwise
          produces either insecure systems or unusable ones. The honest way to decide is per
          deployment, by privilege tier.
        </p>
        <ResearchDecision
          columns={[
            { key: 'model', label: 'Posture' },
            { key: 'autonomy', label: 'Autonomy' },
            { key: 'blast', label: 'Blast radius' },
            { key: 'fit', label: 'Where it fits' },
          ]}
          rows={[
            { model: 'Trust the model', autonomy: 'Maximal', blast: 'Unbounded', fit: 'Never, for side-effecting agents' },
            { model: 'Approve every action', autonomy: 'Minimal', blast: 'Small but human-paced', fit: 'High-stakes, low-volume tasks' },
            { model: 'Policy + gate on state change', autonomy: 'High', blast: 'Bounded by allowlist', fit: 'Most production agents' },
            { model: 'Full isolation + no persistent creds', autonomy: 'Moderate', blast: 'Minimal', fit: 'Untrusted-input, high-risk agents' },
          ]}
          recommendation={
            <p style={{ marginBottom: 0 }}>
              Default to <strong>policy plus gate-on-state-change</strong>: it preserves the autonomy
              that makes agents useful while bounding blast radius by construction, and it degrades
              gracefully because the gate fires on meaningful transitions rather than on every step. Move
              to full isolation only for agents that ingest untrusted input and hold real privilege — the
              exact profile that produced the incidents in this series.
            </p>
          }
        />

        <h2 id="limitations"><span className="rx-secnum">09</span>Limitations of this framing</h2>
        <ResearchLimitations
          items={[
            'The five-boundary model is an organizing lens, not a proof of completeness; novel agent architectures may introduce boundaries it does not name.',
            'Benchmark results (e.g. AgentDojo, CVE-Bench) are lower bounds shaped by the tasks chosen; absence of a demonstrated attack is not proof of safety [2].',
            'The GTG-1002 incident is a single-source vendor disclosure without independent reproduction [1]; we use it as directional evidence, not settled forensic fact.',
            'Governance frameworks (e.g. NIST AI RMF [9], OWASP GenAI [8]) provide vocabulary and process but are not, by themselves, technical controls.',
          ]}
        />

        <h2 id="series"><span className="rx-secnum">10</span>How to read the rest of this series</h2>
        <p>
          Start with the incident that makes the thesis concrete —{' '}
          <Link href="/ai-orchestrated-cyber-espionage-gtg-1002/">the GTG-1002 reconstruction</Link>. Then
          follow the attack surface inward:{' '}
          <Link href="/ai-agent-prompt-injection-security/">prompt injection</Link> (how data becomes command),{' '}
          <Link href="/ai-coding-agent-security/">coding agents</Link> and{' '}
          <Link href="/mcp-server-security/">MCP</Link> (where injection meets real execution), then the
          defenses:{' '}
          <Link href="/ai-agent-sandbox-escape-security/">sandbox escape</Link> and{' '}
          <Link href="/ai-agent-containment-architecture/">containment</Link>,{' '}
          <Link href="/ai-agent-identity-and-access-control/">identity</Link> and{' '}
          <Link href="/ai-agent-tool-permissions-least-privilege/">least privilege</Link>,{' '}
          <Link href="/ai-agent-network-egress-control/">egress</Link>, and finally{' '}
          <Link href="/ai-agent-autonomous-exploitation-benchmarks/">how to read the capability numbers</Link>{' '}
          without being misled by them.
        </p>

        <h2 id="references"><span className="rx-secnum">—</span>References</h2>
        <ResearchReferenceList refs={refs} />
      </ResearchLayout>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
