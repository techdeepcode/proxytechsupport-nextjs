import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ResearchLayout, { type TocItem } from '@/components/research/ResearchLayout';
import {
  ResearchAbstract,
  ResearchAnalysis,
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

const SLUG = 'ai-agent-tool-permissions-least-privilege';
export const metadata = researchMetadata(SLUG);
const pub = getPublication(SLUG)!;
const schemas = researchSchemas(SLUG);

const refs = [
  REFERENCES.progent,
  REFERENCES.agentdojo,
  REFERENCES.ztidentity,
  REFERENCES.owaspagentic,
];

const toc: TocItem[] = [
  { id: 'thesis', label: 'Tool authority = blast radius' },
  { id: 'why-model-cant', label: 'Why the model cannot self-police' },
  { id: 'deterministic', label: 'Deterministic privilege control' },
  { id: 'monotonic', label: 'Monotonic confinement' },
  { id: 'authoring', label: 'The policy-authoring problem' },
  { id: 'overprivilege', label: 'Over-privilege is the norm' },
  { id: 'decision', label: 'Allowlist, judge, or approve?' },
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
              <p className="rx-rail-title">Key idea</p>
              <ul className="rx-rail-list">
                <li>Bound the tool call, not the model.</li>
                <li>Auto-narrow; approve to expand.</li>
                <li>Deterministic beats persuadable.</li>
              </ul>
            </div>
            <div className="rx-rail-card">
              <p className="rx-rail-title">Anchor paper</p>
              <ul className="rx-rail-list">
                <li>Progent — privilege control <Cite n={1} /></li>
                <li>Graded on AgentDojo <Cite n={2} /></li>
              </ul>
            </div>
          </>
        }
      >
        <ResearchAbstract>
          <p>
            Of all the controls in this cluster, tool-permission scoping is the most tractable and the
            highest-leverage. You cannot reliably stop a model from being tricked, but you can
            deterministically bound what its tool calls are permitted to do — and that bound holds even
            when the trick succeeds.
          </p>
          <p>
            We develop least privilege for agents concretely: why the model cannot be its own policy
            enforcer, how deterministic privilege control works, why <em>monotonic confinement</em>
            (privilege can only narrow without approval) is the right invariant <Cite n={1} />, and how
            much the security/utility balance depends on the quality of the policies you write.
          </p>
        </ResearchAbstract>

        <h2 id="thesis"><span className="rx-secnum">01</span>Tool authority equals blast radius</h2>
        <p className="rx-lead">
          The union of everything an agent&rsquo;s tools can do is the exact definition of what a
          compromised agent can do. Least privilege is not hygiene here — it is the blast-radius bound.
        </p>
        <p>
          A summarization task does not need a shell. A calendar assistant does not need to send money.
          Yet agents are routinely wired with a broad tool belt &ldquo;so they can handle anything,&rdquo;
          which means any successful injection or jailbreak inherits the full belt. The single most
          effective thing most teams can do is shrink the set of tools — and the set of arguments to
          those tools — available for a given task to the minimum that task requires.
        </p>

        <h2 id="why-model-cant"><span className="rx-secnum">02</span>Why the model cannot self-police</h2>
        <p>
          A tempting design is to instruct the model to police its own tool use (&ldquo;only call payment
          tools for legitimate purchases&rdquo;). This fails for the same structural reason injection
          works: the policy lives in the same manipulable channel as the attack. If an injected
          instruction can change what the model does, it can change how the model interprets its own
          rules. Self-policing is a behavioral control; we need a structural one.
        </p>
        <ResearchAnalysis>
          <p style={{ marginBottom: 0 }}>
            The enforcement point must be <em>outside</em> and <em>after</em> the model: the model emits
            a proposed tool call; a deterministic engine decides whether to allow it. The engine reads
            structured facts (tool name, argument values), not free-form intent, so it cannot be
            prompt-injected. This is the reference-monitor role in the{' '}
            <Link href="/ai-agent-containment-architecture/">mediation plane</Link>.
          </p>
        </ResearchAnalysis>

        <h2 id="deterministic"><span className="rx-secnum">03</span>Deterministic privilege control</h2>
        <ResearchPaperCard
          reference={REFERENCES.progent}
          question="Can a deterministic layer confine an agent so a successful attack (e.g. injection) still cannot cause harm, without destroying utility?"
          method="Symbolic policies over tool names and arguments; the model generates an initial policy from the task and may propose updates; an SMT solver classifies each update as narrowing (auto-applied) or expanding (requires approval), enforcing that privilege only ever contracts automatically. Integrates with mainstream agent frameworks."
          finding="Significantly reduces attack success rate on standard agent-security benchmarks while preserving task utility."
          metric="Large ASR reduction with retained utility (AgentDojo / ASB)"
          limitations="Effectiveness depends on the quality of initial and updated policies; a loose policy confines little; some legitimate novel actions require an approval round-trip."
          relevance="The reference design for tool-permission enforcement: policy outside the model, deterministic, and monotonic — the properties that make it survive a compromised model."
        />

        <ResearchFigure
          altText="Diagram: the model proposes a tool call; it enters a deterministic policy engine; the engine checks tool name and arguments against a task-scoped policy; allowed calls execute; expansion requests are routed to human approval; everything else is denied. The model never enforces its own policy."
          caption={<><b>Figure 1.</b> Deterministic tool-call authorization. The engine reads structured facts, not intent, so injected prose cannot talk it into a yes.</>}
        >
          <div className="rx-flow">
            <div className="rx-node rx-untrust"><b>Model</b>Proposes tool call</div>
            <span className="rx-arrow">→</span>
            <div className="rx-node rx-trust"><b>Policy engine</b>Name + args vs policy</div>
            <span className="rx-arrow">→</span>
            <div className="rx-node rx-trust"><b>Decision</b>Allow · Deny · Escalate</div>
            <span className="rx-arrow">→</span>
            <div className="rx-node"><b>Tool</b>Executes only if allowed</div>
          </div>
        </ResearchFigure>

        <h2 id="monotonic"><span className="rx-secnum">04</span>Monotonic confinement: the right invariant</h2>
        <p>
          The elegant idea in deterministic privilege control is the direction constraint. Over the life
          of a task, the agent&rsquo;s privilege may shrink freely but may only grow through an explicit,
          approvable step <Cite n={1} />. This <strong>monotonic confinement</strong> matches how tasks
          actually evolve — you usually learn you need <em>less</em> than you feared — and it makes the
          dangerous direction (privilege expansion) the one place a human or a stricter check is
          inserted. An attacker who wants the agent to do something outside scope must trigger an
          expansion, which is exactly the event you gate and audit.
        </p>
        <ResearchMetricStrip
          items={[
            { value: 'Auto', label: 'Narrowing a policy — no friction', source: 'Monotonic rule [1]' },
            { value: 'Approve', label: 'Expanding a policy — explicit gate', source: 'Monotonic rule [1]' },
            { value: 'Deny', label: 'Default for anything outside the envelope', source: 'Least privilege' },
          ]}
        />

        <h2 id="authoring"><span className="rx-secnum">05</span>The policy-authoring problem</h2>
        <p>
          Deterministic control moves the difficulty rather than removing it: someone must author
          policies that are tight enough to bound harm yet loose enough to let real work happen. Too
          loose and confinement is theater; too tight and the agent stalls on approval requests. Three
          practical strategies help:
        </p>
        <ul>
          <li><strong>Model-proposed, human-ratified policies.</strong> Let the model draft the initial policy from the task, but treat it as a proposal the engine (and, for expansions, a human) validates — never as self-authorization <Cite n={1} />.</li>
          <li><strong>Tiered tool classes.</strong> Group tools by sensitivity (read-only, state-changing, irreversible/financial) and set defaults per tier, so most tasks inherit sane bounds without bespoke policies.</li>
          <li><strong>Argument-level constraints.</strong> Bound not just <em>which</em> tool but <em>with what arguments</em> — a payment tool limited to a payee allowlist and a cap is far safer than an unbounded one.</li>
        </ul>

        <h2 id="overprivilege"><span className="rx-secnum">06</span>Over-privilege is the norm, not the exception</h2>
        <p>
          The empirical direction across agent-tool ecosystems is that skills and tools ship with far
          more privilege than their function requires, and that gap is exploitable. This mirrors the
          decades-old finding in conventional systems that permissions accrete and are rarely pruned.
          For agents the stakes are higher because the over-privileged actor is also injectable. The
          governance frameworks now name this explicitly as a top agentic risk <Cite n={4} />.
        </p>

        <h2 id="decision"><span className="rx-secnum">07</span>Allowlist, model-judged, or human-approve?</h2>
        <ResearchDecision
          columns={[
            { key: 'mech', label: 'Enforcement mechanism' },
            { key: 'inject', label: 'Injection-resistant?' },
            { key: 'utility', label: 'Utility impact' },
            { key: 'fit', label: 'Where it fits' },
          ]}
          rows={[
            { mech: 'Model self-policing (prompt)', inject: 'No — same channel', utility: 'None', fit: 'Not a security control; convenience only' },
            { mech: 'Deterministic allowlist policy', inject: 'Yes — reads structured facts', utility: 'Low if policies are good', fit: 'The default enforcement layer [1]' },
            { mech: 'A second model as judge', inject: 'Partially — judge is also injectable', utility: 'Medium (latency, cost)', fit: 'Outer heuristic layer, not load-bearing' },
            { mech: 'Human approval per expansion', inject: 'Yes', utility: 'High if over-used', fit: 'Gate on privilege expansion only' },
          ]}
          recommendation={
            <p style={{ marginBottom: 0 }}>
              Make the <strong>deterministic allowlist policy</strong> the load-bearing layer, enforced
              outside the model over tool name and arguments, with monotonic confinement <Cite n={1} />.
              Add a model-judge only as a soft outer heuristic, never as the guarantee, and reserve human
              approval for privilege <em>expansion</em>. Never rely on model self-policing as a security
              control — it is the behavioral trap this whole series warns against.
            </p>
          }
        />

        <h2 id="failure-modes"><span className="rx-secnum">08</span>Production failure modes</h2>
        <ResearchFailureMode
          title="The agent has broad standing tool access for every task"
          mechanism={<>To avoid re-configuring per task, the agent is granted its full tool belt (including state-changing and irreversible tools) for all work. A single successful injection wields the entire belt.</>}
          whyFailed={<>Privilege was provisioned for the union of all possible tasks rather than the current one; there was no per-call authorization bounding tool or arguments.</>}
          signals={[
            'Tool calls outside the current task’s expected set',
            'Arguments outside expected ranges (e.g. large amounts, unknown payees)',
            'Rapid succession of state-changing calls after reading external data',
            'Privilege-expansion requests that are auto-granted',
          ]}
          controls={[
            'Deterministic policy over tool name + arguments [1]',
            'Task-scoped tool set; deny-by-default outside it',
            'Monotonic confinement: auto-narrow, approve to expand',
            'Argument-level constraints (allowlists, caps, ranges)',
          ]}
        />

        <h2 id="limitations"><span className="rx-secnum">09</span>Limitations</h2>
        <ResearchLimitations
          items={[
            'Deterministic privilege control shifts effort to policy authoring; a loose policy provides little protection, and the security/utility trade-off is workload-specific [1].',
            'Benchmark results are measured on AgentDojo/ASB-style suites [2]; real deployments have messier tool surfaces where policy coverage may be incomplete.',
            'Argument-level policies are only as good as the schema; tools with free-form arguments are hard to constrain precisely.',
            'Least privilege bounds capability but does not detect in-policy misuse; it composes with identity, egress, and monitoring rather than replacing them.',
          ]}
        />

        <h2 id="next"><span className="rx-secnum">10</span>Where this leads</h2>
        <p>
          Bounding <em>what</em> tools can do pairs with bounding <em>who</em> the agent is (
          <Link href="/ai-agent-identity-and-access-control/">identity &amp; access control</Link>) and{' '}
          <em>where</em> data can go (
          <Link href="/ai-agent-network-egress-control/">egress control</Link>). All three are enforced by the{' '}
          <Link href="/ai-agent-containment-architecture/">mediation plane</Link> and exist because content-layer
          defense against <Link href="/ai-agent-prompt-injection-security/">prompt injection</Link> is not
          sufficient on its own.
        </p>

        <h2 id="references"><span className="rx-secnum">—</span>References</h2>
        <ResearchReferenceList refs={refs} />
      </ResearchLayout>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
