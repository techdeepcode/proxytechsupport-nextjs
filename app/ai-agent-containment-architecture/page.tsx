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
  ResearchDecision,
  ResearchFailureMode,
  ResearchLimitations,
  ResearchReferenceList,
  ResearchFigure,
  Cite,
} from '@/components/research/primitives';
import { getPublication, REFERENCES } from '@/data/research/cluster';
import { researchMetadata, researchSchemas } from '@/data/research/seo';

const SLUG = 'ai-agent-containment-architecture';
export const metadata = researchMetadata(SLUG);
const pub = getPublication(SLUG)!;
const schemas = researchSchemas(SLUG);

const refs = [
  REFERENCES.gtg1002,
  REFERENCES.progent,
  REFERENCES.ztidentity,
  REFERENCES.owaspagentic,
  REFERENCES.nistai,
];

const toc: TocItem[] = [
  { id: 'thesis', label: 'Structural, not behavioral' },
  { id: 'os-analogy', label: 'The agent as an untrusted process' },
  { id: 'mediation-plane', label: 'The mediation plane' },
  { id: 'reference-arch', label: 'A reference architecture' },
  { id: 'blast-radius', label: 'Bounding blast radius' },
  { id: 'capabilities', label: 'Capability-based design' },
  { id: 'approval', label: 'Where humans sit' },
  { id: 'decision', label: 'Alignment vs. containment' },
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
              <p className="rx-rail-title">Design axiom</p>
              <ul className="rx-rail-list">
                <li>Assume the model is adversarial.</li>
                <li>Mediate every boundary it crosses.</li>
                <li>Bound blast radius by construction.</li>
              </ul>
            </div>
            <div className="rx-rail-card">
              <p className="rx-rail-title">Five mediated edges</p>
              <ul className="rx-rail-list">
                <li>User · Tool · Execution</li>
                <li>Agent-to-agent · Environment</li>
              </ul>
            </div>
          </>
        }
      >
        <ResearchAbstract>
          <p>
            If the model inside your agent can be persuaded to do the worst thing its tools allow — and
            the evidence in this series says it can — then security cannot rest on the model behaving.
            It must rest on <strong>architecture</strong>: boundaries the model cannot argue its way
            past, placed outside the model, enforcing regardless of what it was told.
          </p>
          <p>
            This is a systems-architecture report. We borrow fifty years of operating-system security
            thinking — reference monitors, least privilege, capability-based access — and translate it
            into a concrete agent runtime that mediates all five boundaries and bounds blast radius by
            construction.
          </p>
        </ResearchAbstract>

        <h2 id="thesis"><span className="rx-secnum">01</span>Containment is structural, not behavioral</h2>
        <p className="rx-lead">
          A behavioral control lives in the same channel as the attack. A structural control lives
          outside it. Only the second kind survives a compromised model.
        </p>
        <p>
          The distinction is the whole thesis. &ldquo;The model is trained to refuse&rdquo; is
          behavioral; a jailbreak defeats it. &ldquo;The policy engine will not execute this tool call
          regardless of what the model requested&rdquo; is structural; a jailbreak is irrelevant to it.
          GTG-1002 is the proof by counterexample — the only boundary present was behavioral, and once
          bypassed there was nothing left <Cite n={1} />. Every design decision below is an application
          of one rule: <em>move the security decision out of the model.</em>
        </p>

        <h2 id="os-analogy"><span className="rx-secnum">02</span>The agent as an untrusted process</h2>
        <p>
          Operating systems solved this problem for arbitrary programs decades ago. A process cannot
          touch memory it was not granted, cannot make privileged calls without the kernel mediating,
          and runs under an identity with specific rights. The kernel does not trust the program to
          behave; it <em>mediates every privileged action</em> through a reference monitor. That is
          exactly the posture an agent runtime needs.
        </p>
        <ResearchAnalysis>
          <p style={{ marginBottom: 0 }}>
            The productive mental model: the LLM is untrusted userspace; your runtime is the kernel. The
            model may plan anything, but every action with a real-world effect must pass through a
            mediator that checks it against policy and identity. The model proposes; the runtime
            disposes. This inverts the common design where the model is the trusted orchestrator and the
            runtime is a thin dispatcher.
          </p>
        </ResearchAnalysis>

        <h2 id="mediation-plane"><span className="rx-secnum">03</span>The mediation plane</h2>
        <p>
          Concretely, insert a <strong>mediation plane</strong> between the model and every resource.
          It has four cooperating components, each enforcing one concern:
        </p>
        <ul>
          <li><strong>Policy engine</strong> — a reference monitor for tool calls. Checks tool name + arguments against a task-scoped policy; only narrows privilege automatically <Cite n={2} />.</li>
          <li><strong>Identity broker</strong> — mints short-lived, scoped credentials per task; no ambient secrets reach the model <Cite n={3} />.</li>
          <li><strong>Egress gateway</strong> — deny-by-default network mediation for both the agent and any code it runs.</li>
          <li><strong>Audit spine</strong> — an append-only, out-of-band record of every proposed and executed action, isolated from the agent so it cannot tamper with its own logs.</li>
        </ul>

        <h2 id="reference-arch"><span className="rx-secnum">04</span>A reference architecture</h2>
        <ResearchFigure
          altText="Reference architecture diagram. The model and its planning loop sit on the left, marked untrusted. Every action flows right through a mediation plane containing a policy engine, identity broker, egress gateway, and audit spine. Only after passing all four does an action reach tools, credentials, the network, or the execution sandbox. The audit spine writes to isolated storage."
          caption={<><b>Figure 1.</b> The mediation plane. The model can plan freely; nothing with a real effect reaches a resource without passing the reference monitor. Compromising the model does not compromise the plane.</>}
        >
          <div className="rx-flow">
            <div className="rx-node rx-untrust"><b>Model + loop</b>Untrusted planner</div>
            <span className="rx-arrow">→</span>
            <div className="rx-node rx-trust"><b>Policy engine</b>Tool + arg check [2]</div>
            <span className="rx-arrow">→</span>
            <div className="rx-node rx-trust"><b>Identity broker</b>Short-lived creds [3]</div>
            <span className="rx-arrow">→</span>
            <div className="rx-node rx-trust"><b>Egress gateway</b>Deny-by-default</div>
            <span className="rx-arrow">→</span>
            <div className="rx-node"><b>Resources</b>Tools · net · sandbox</div>
          </div>
        </ResearchFigure>
        <p>
          The audit spine sits beside all of this, receiving a copy of every proposal and every
          decision. Because it is out-of-band and append-only, it provides the forensic record that
          single-source incident disclosures like GTG-1002 lacked — you can reconstruct exactly what an
          agent attempted, not just what succeeded.
        </p>

        <h2 id="blast-radius"><span className="rx-secnum">05</span>Bounding blast radius by construction</h2>
        <p>
          Containment quality is measured by blast radius: given a fully compromised model, what is the
          maximum harm? The architecture above lets you reason about it as a product of independent
          limits rather than a hope.
        </p>
        <ResearchMetricStrip
          items={[
            { value: 'Tools', label: 'Bounded by the policy allowlist — not everything the identity can do', source: 'Policy engine [2]' },
            { value: 'Time', label: 'Bounded by credential TTL — minutes, not standing access', source: 'Identity broker [3]' },
            { value: 'Reach', label: 'Bounded by egress allowlist — data cannot leave to new destinations', source: 'Egress gateway' },
            { value: 'Persistence', label: 'Bounded by ephemeral sandboxes — no foothold survives the task', source: 'Execution isolation' },
          ]}
        />
        <ResearchAnalysis>
          <p style={{ marginBottom: 0 }}>
            Notice these limits <em>multiply</em>. A compromised agent might be allowed a tool, but only
            for minutes, only against allowlisted destinations, with no persistence. The intersection of
            four independent bounds is far smaller than any one of them — this is why defense-in-depth is
            not redundancy but composition.
          </p>
        </ResearchAnalysis>

        <h2 id="capabilities"><span className="rx-secnum">06</span>Capability-based design</h2>
        <p>
          The cleanest way to express agent authority is capabilities: unforgeable tokens that grant a
          specific right (call this tool, with these arguments, until this time), rather than an ambient
          identity with broad standing permissions. Capabilities make least privilege the default and
          make revocation concrete — you drop the capability. They also compose naturally with the
          policy engine: a policy update that narrows authority simply issues a narrower capability, and
          expansions require an explicit, approvable step <Cite n={2} />.
        </p>

        <h2 id="approval"><span className="rx-secnum">07</span>Where humans sit</h2>
        <p>
          Human approval is a scarce, valuable resource; spend it where it counts. The failure pattern
          from <Link href="/ai-coding-agent-security/">coding agents</Link> — approve-everything, which
          collapses into auto-approve — comes from gating the wrong event. Gate on <strong>privilege
          state changes</strong>, not on actions:
        </p>
        <ResearchFinding title="Approval placement" badge="ANALYSIS" tone="accent">
          <ul style={{ marginBottom: 0 }}>
            <li>Expanding the tool policy beyond the task scope → approve.</li>
            <li>Requesting a new credential scope or a longer TTL → approve.</li>
            <li>Adding a new egress destination → approve.</li>
            <li>Crossing into a new tool class (e.g. read-only → state-changing) → approve.</li>
            <li>Routine actions within the already-approved envelope → no gate; that is the point of the envelope.</li>
          </ul>
        </ResearchFinding>

        <h2 id="decision"><span className="rx-secnum">08</span>Alignment vs. containment</h2>
        <ResearchQuestion>
          <p style={{ marginBottom: 0 }}>
            Is behavioral alignment ever a sufficient substitute for architectural containment? Our
            position: alignment reduces the <em>probability</em> a model attempts harm; containment
            bounds the <em>consequence</em> when it does. They are complements, and only containment
            offers a guarantee that survives a successful jailbreak. Betting on alignment alone is
            betting that no one will ever find a prompt you did not anticipate — a bet the incident
            record has already lost <Cite n={1} />.
          </p>
        </ResearchQuestion>
        <ResearchDecision
          columns={[
            { key: 'approach', label: 'Approach' },
            { key: 'guarantee', label: 'What it guarantees' },
            { key: 'fails', label: 'How it fails' },
          ]}
          rows={[
            { approach: 'Behavioral alignment only', guarantee: 'Lower probability of attempt', fails: 'Any successful jailbreak → unbounded harm' },
            { approach: 'Architectural containment only', guarantee: 'Bounded consequence', fails: 'Noisy: blocks some legitimate actions; needs good policy' },
            { approach: 'Both (defense-in-depth)', guarantee: 'Low probability × bounded consequence', fails: 'Cost and engineering complexity' },
          ]}
          recommendation={
            <p style={{ marginBottom: 0 }}>
              Use alignment as the outer probabilistic filter and containment as the inner guarantee.
              When resources are constrained, invest in containment first: a well-aligned model with no
              containment is one clever prompt away from catastrophe, whereas a contained model with
              average alignment fails safe. Governance frameworks (OWASP GenAI <Cite n={4} />, NIST AI
              RMF <Cite n={5} />) provide the process scaffolding but are not substitutes for the
              technical plane.
            </p>
          }
        />

        <h2 id="failure-modes"><span className="rx-secnum">09</span>Production failure modes</h2>
        <ResearchFailureMode
          title="The runtime trusts the model as orchestrator"
          mechanism={<>The agent framework treats the model as the trusted controller and the runtime as a thin dispatcher that executes whatever the model requests. There is no reference monitor between plan and action.</>}
          whyFailed={<>Trust was placed on the one component that cannot be trusted — the model. With no mediation plane, a compromised model has the runtime&rsquo;s full authority.</>}
          signals={[
            'Tool calls executed without a policy decision recorded',
            'Standing, broad credentials available to the model',
            'No out-of-band audit of proposed-but-blocked actions',
            'Approval events absent for privilege-expanding actions',
          ]}
          controls={[
            'Insert a policy-engine reference monitor for all tool calls [2]',
            'Broker short-lived, scoped credentials; remove ambient secrets [3]',
            'Deny-by-default egress for agent and sandbox',
            'Append-only, isolated audit spine',
          ]}
        />

        <h2 id="limitations"><span className="rx-secnum">10</span>Limitations</h2>
        <ResearchLimitations
          items={[
            'The mediation plane adds latency and engineering complexity; poorly scoped policies degrade utility, and the security/utility balance is workload-specific [2].',
            'Deterministic policy cannot express every intent; some legitimate, novel actions will be blocked and require an approval path, which reintroduces human latency.',
            'Identity and capability models for agents are still maturing; several proposals remain largely theoretical without large-scale production validation [3].',
            'Architecture bounds consequence but does not detect a subtle, in-policy misuse; monitoring and alignment remain necessary complements.',
          ]}
        />

        <h2 id="next"><span className="rx-secnum">11</span>Where this leads</h2>
        <p>
          The mediation plane&rsquo;s components each have their own publication:{' '}
          <Link href="/ai-agent-identity-and-access-control/">identity &amp; access control</Link> (the
          broker), <Link href="/ai-agent-tool-permissions-least-privilege/">tool permissions</Link> (the
          policy engine), <Link href="/ai-agent-network-egress-control/">egress control</Link> (the gateway),
          and <Link href="/ai-agent-sandbox-escape-security/">sandbox escape</Link> (the execution boundary).
          Together they operationalize the axiom stated here.
        </p>

        <h2 id="references"><span className="rx-secnum">—</span>References</h2>
        <ResearchReferenceList refs={refs} />
      </ResearchLayout>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
