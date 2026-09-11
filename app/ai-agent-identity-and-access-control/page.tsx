import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ResearchLayout, { type TocItem } from '@/components/research/ResearchLayout';
import {
  ResearchAbstract,
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

const SLUG = 'ai-agent-identity-and-access-control';
export const metadata = researchMetadata(SLUG);
const pub = getPublication(SLUG)!;
const schemas = researchSchemas(SLUG);

const refs = [
  REFERENCES.ztidentity,
  REFERENCES.openididentity,
  REFERENCES.progent,
  REFERENCES.gtg1002,
  REFERENCES.owaspagentic,
];

const toc: TocItem[] = [
  { id: 'thesis', label: 'Authorization is the hard part' },
  { id: 'not-a-user', label: 'An agent is not a user' },
  { id: 'confused-deputy', label: 'The confused deputy' },
  { id: 'delegation', label: 'Delegated authority' },
  { id: 'models', label: 'Three identity models' },
  { id: 'shortlived', label: 'Short-lived & revocable' },
  { id: 'evidence', label: 'The research picture' },
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
              <p className="rx-rail-title">The distinction</p>
              <ul className="rx-rail-list">
                <li>Authn: who is calling?</li>
                <li>Authz: should this be allowed?</li>
                <li>Agents break the second.</li>
              </ul>
            </div>
            <div className="rx-rail-card">
              <p className="rx-rail-title">Design goals</p>
              <ul className="rx-rail-list">
                <li>Per-task scope</li>
                <li>Short TTL</li>
                <li>Fast revocation</li>
              </ul>
            </div>
          </>
        }
      >
        <ResearchAbstract>
          <p>
            Authentication for agents is a mostly solved problem — you can issue an agent a credential.
            The hard, unsolved problem is <strong>authorization</strong>: an agent acts on a user&rsquo;s
            behalf but is not the user, holds delegated authority that is easy to over-grant and hard to
            scope, and — unlike a human — can be socially engineered into misusing whatever it holds.
          </p>
          <p>
            We separate authentication from authorization, explain why an agent is a genuinely new kind
            of principal, compare three identity models with an evidence-aware recommendation, and make
            the case that short-lived, scoped, revocable credentials are the single highest-leverage
            control in this whole cluster.
          </p>
        </ResearchAbstract>

        <h2 id="thesis"><span className="rx-secnum">01</span>Authorization is the hard part</h2>
        <p className="rx-lead">
          GTG-1002 authenticated perfectly. The operator was a legitimate, verified customer. What was
          missing was any bound on what the resulting agent was <em>authorized</em> to do <Cite n={4} />.
        </p>
        <p>
          This is the recurring inversion: teams verify identity rigorously and then attach broad
          standing authority to that identity, as if proving who you are also proves what you should be
          allowed to do. For a human employee, organizational context and slow pacing paper over the
          gap. For an agent that acts thousands of times a second on content an attacker may control,
          the gap is the vulnerability.
        </p>

        <h2 id="not-a-user"><span className="rx-secnum">02</span>An agent is not a user (and not a service, either)</h2>
        <p>
          Existing IAM offers two principal types: human users and service accounts. Agents fit neither
          cleanly.
        </p>
        <ul>
          <li>Unlike a <strong>human user</strong>, an agent has no independent judgment, can be prompt-injected, and operates at machine speed — so &ldquo;it&rsquo;s acting as the user&rdquo; grants a hostile third party the user&rsquo;s power.</li>
          <li>Unlike a <strong>service account</strong>, an agent&rsquo;s behavior is non-deterministic and its required permissions are dynamic and task-dependent — so the static, broad grants typical of service accounts are a poor fit.</li>
        </ul>
        <ResearchAnalysis>
          <p style={{ marginBottom: 0 }}>
            The agent is a third principal type: a <strong>delegated, non-deterministic, non-human
            operator</strong>. It needs the auditability of a service account, the on-behalf-of semantics
            of a user session, and — because it can be turned against its principal — permission scoping
            tighter than either. Treating it as &ldquo;just a service account&rdquo; or &ldquo;just the
            user&rdquo; is the root design error.
          </p>
        </ResearchAnalysis>

        <h2 id="confused-deputy"><span className="rx-secnum">03</span>The confused deputy, at scale</h2>
        <p>
          The confused-deputy problem — a privileged intermediary tricked into misusing its authority on
          behalf of a less-privileged attacker — is the precise abstract shape of agent authorization
          failure. Every indirect-injection incident in this series is a confused deputy: the agent holds
          the victim&rsquo;s authority and is manipulated into wielding it. Authorization design is
          therefore confused-deputy prevention: never let the agent exercise more authority than the
          <em>current, specific task</em> requires, so that a hijack inherits little.
        </p>

        <ResearchFigure
          altText="Diagram comparing two authorization models. Left: the agent holds a broad standing identity; a hijack inherits everything. Right: the agent holds a narrow, task-scoped, short-lived capability derived from the user's delegation for this one task; a hijack inherits almost nothing."
          caption={<><b>Figure 1.</b> Broad standing identity (left) versus task-scoped delegated capability (right). Same agent, same jailbreak — radically different blast radius.</>}
        >
          <div className="rx-flow">
            <div className="rx-node rx-untrust"><b>Standing identity</b>All rights, always</div>
            <span className="rx-arrow">vs</span>
            <div className="rx-node rx-trust"><b>Task capability</b>One task · minutes · scoped</div>
          </div>
        </ResearchFigure>

        <h2 id="delegation"><span className="rx-secnum">04</span>Delegated authority done right</h2>
        <p>
          When a user asks an agent to &ldquo;book the cheapest flight and expense it,&rdquo; the agent
          needs a slice of the user&rsquo;s authority — read calendar, call the travel API, submit one
          expense — for a bounded time. The correct primitive is <strong>on-behalf-of delegation with
          down-scoping</strong>: the agent receives a token that is strictly narrower than the
          user&rsquo;s, scoped to this task, expiring quickly. It should be impossible for the agent to
          use that token to, say, read unrelated files or move money.
        </p>
        <p>
          Standard web authorization protocols (OAuth 2.0, OIDC) were built for human-mediated consent
          to relatively coarse scopes; they under-serve the fine-grained, dynamic, machine-speed
          delegation agents need, which is exactly the gap the recent identity research targets
          <Cite n={2} />.
        </p>

        <h2 id="models"><span className="rx-secnum">05</span>Three identity models</h2>
        <ResearchDecision
          columns={[
            { key: 'model', label: 'Model' },
            { key: 'blast', label: 'Blast radius' },
            { key: 'audit', label: 'Auditability' },
            { key: 'ops', label: 'Operational cost' },
            { key: 'revoke', label: 'Revocation' },
          ]}
          rows={[
            { model: 'A · Shared service identity', blast: 'Very large (all agents, all tasks)', audit: 'Poor — actions blur together', ops: 'Low', revoke: 'Coarse — kill everything' },
            { model: 'B · Per-agent identity', blast: 'Medium (one agent, all its tasks)', audit: 'Good — per-agent attribution', ops: 'Medium', revoke: 'Per agent' },
            { model: 'C · Context-bound delegated identity', blast: 'Small (one task, one scope, minutes)', audit: 'Excellent — per-task attribution', ops: 'Higher — needs a broker', revoke: 'Per task / near-instant' },
          ]}
          recommendation={
            <p style={{ marginBottom: 0 }}>
              Default to <strong>Model C — context-bound delegated identity</strong>: mint a fresh,
              task-scoped, short-lived credential for each task via an identity broker, attributable to
              both the agent and the initiating user. It has the smallest blast radius and the best
              audit trail, and it makes revocation trivial (the credential simply expires). Its cost is a
              broker in the <Link href="/ai-agent-containment-architecture/">mediation plane</Link> — worth it
              for any agent touching real data. Use Model B as a stepping stone; treat Model A as
              unacceptable for side-effecting agents, because it reproduces exactly the unbounded-authority
              condition of GTG-1002 <Cite n={4} />.
            </p>
          }
        />

        <h2 id="shortlived"><span className="rx-secnum">06</span>Short-lived and revocable is the whole game</h2>
        <p>
          If you adopt one control from this publication, make it credential lifetime. A standing API key
          in an agent&rsquo;s environment is a permanent liability; a credential that lives for the
          duration of a task and then dies caps the value of any theft to that window. Pair short TTLs
          with true revocation — the ability to invalidate an agent&rsquo;s authority mid-task the
          instant anomaly detection fires — and the economics of attacking the agent change sharply.
        </p>
        <ResearchMetricStrip
          items={[
            { value: 'Minutes', label: 'Target credential TTL for task-scoped agent access', source: 'ProxyTech analysis' },
            { value: '1 task', label: 'Authorization scope — not "the user’s whole account"', source: 'Delegated model [1][2]' },
            { value: 'Near-instant', label: 'Revocation target when anomaly detection fires', source: 'ProxyTech analysis' },
          ]}
        />

        <h2 id="evidence"><span className="rx-secnum">07</span>The research picture</h2>
        <ResearchPaperCard
          reference={REFERENCES.ztidentity}
          question="Are conventional IAM protocols adequate for the dynamic, interdependent, ephemeral nature of AI agents — and if not, what replaces them?"
          method="Deconstructs the limitations of OAuth/OIDC/SAML for agents through concrete examples, then proposes a zero-trust framework using decentralized identifiers, verifiable credentials, an agent naming service, and dynamic fine-grained access control."
          finding="Argues traditional IAM is fundamentally inadequate for multi-agent systems and proposes a new paradigm; presented as a framework and security analysis."
          metric="Framework proposal — no empirical benchmark"
          limitations="No empirical validation; theoretical framework whose operational cost and adoption path are unproven."
          relevance="Names the gap precisely and motivates context-bound identity; we treat its specific mechanisms as promising but unproven — an ANALYSIS-grade recommendation, not a settled standard."
        />
        <ResearchPaperCard
          reference={REFERENCES.openididentity}
          question="How should authentication, authorization, and identity evolve to secure current and future autonomous agents at ecosystem scale?"
          method="An OpenID Foundation whitepaper setting out strategic recommendations: agent-centric identities, scalable fine-grained access control, differentiation of AI workloads, and delegated authority."
          finding="Frames a strategic agenda and best-practice direction rather than a measured result; notes current agent protocols (e.g. MCP) lack clarified authn/authz practices."
          metric="Strategy document — not applicable"
          limitations="Guidance, not a technical control or benchmark; standards are still forming."
          relevance="Signals that the identity industry recognizes the agent principal as distinct and is standardizing toward delegated, fine-grained models."
        />

        <ResearchQuestion>
          <p style={{ marginBottom: 0 }}>
            What is the right identity model for an agent that acts for a user but is not the user
            remains genuinely open at the standards level. Decentralized-identity and verifiable-credential
            approaches are promising but largely unvalidated at production scale <Cite n={1} />, and no
            single delegation standard has consolidated. Teams should implement context-bound, short-lived
            delegation using today&rsquo;s primitives while the standards mature.
          </p>
        </ResearchQuestion>

        <h2 id="failure-modes"><span className="rx-secnum">08</span>Production failure modes</h2>
        <ResearchFailureMode
          title="The agent holds a standing, broadly-scoped credential"
          mechanism={<>An agent is provisioned with a long-lived API key or service-account token carrying broad permissions so it can handle any task it might be asked to do. A hijack — via injection or jailbreak — inherits all of it.</>}
          whyFailed={<>Authorization was static and broad while the workload was dynamic and narrow; authentication of the principal was mistaken for a bound on its authority.</>}
          signals={[
            'Long-lived keys present in agent environments',
            'One credential used across many unrelated tasks/services',
            'Credential use outside the current task’s expected scope',
            'No per-task attribution in access logs',
          ]}
          controls={[
            'Context-bound, task-scoped credentials via a broker (Model C)',
            'Short TTLs (minutes) + near-instant revocation',
            'On-behalf-of delegation that down-scopes below the user',
            'Per-task, dual-principal (agent + user) audit attribution',
          ]}
        />

        <h2 id="limitations"><span className="rx-secnum">09</span>Limitations</h2>
        <ResearchLimitations
          items={[
            'Leading agent-identity frameworks are largely theoretical; decentralized-identity and verifiable-credential mechanisms lack large-scale production validation [1].',
            'No consolidated standard exists for fine-grained agent delegation; current OAuth/OIDC deployments require custom scoping to approximate it [2].',
            'Context-bound identity adds a broker and per-task credential minting — real operational cost and a new component to secure.',
            'Identity bounds authority but does not detect in-scope misuse; it composes with, and does not replace, monitoring and privilege control [3].',
          ]}
        />

        <h2 id="next"><span className="rx-secnum">10</span>Where this leads</h2>
        <p>
          Identity answers &ldquo;what is the agent allowed to be&rdquo;; the complementary question,
          &ldquo;what is it allowed to do with a given tool,&rdquo; is{' '}
          <Link href="/ai-agent-tool-permissions-least-privilege/">tool permissions and least privilege</Link>.
          Both are components of the <Link href="/ai-agent-containment-architecture/">mediation plane</Link>,
          and both feed the last line of defense —{' '}
          <Link href="/ai-agent-network-egress-control/">egress control</Link>.
        </p>

        <h2 id="references"><span className="rx-secnum">—</span>References</h2>
        <ResearchReferenceList refs={refs} />
      </ResearchLayout>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
