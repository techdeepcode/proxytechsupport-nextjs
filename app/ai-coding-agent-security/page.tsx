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

const SLUG = 'ai-coding-agent-security';
export const metadata = researchMetadata(SLUG);
const pub = getPublication(SLUG)!;
const schemas = researchSchemas(SLUG);

const refs = [
  REFERENCES.copilotrce,
  REFERENCES.cursor,
  REFERENCES.camoleak,
  REFERENCES.progent,
  REFERENCES.agentdojo,
];

const toc: TocItem[] = [
  { id: 'thesis', label: 'A shell in the trust boundary' },
  { id: 'anatomy', label: 'Anatomy of a coding agent' },
  { id: 'injection-to-rce', label: 'From injection to RCE' },
  { id: 'incidents', label: 'Three real disclosures' },
  { id: 'blast', label: 'The real blast radius' },
  { id: 'approval', label: 'Where the approval boundary belongs' },
  { id: 'failure-modes', label: 'Production failure modes' },
  { id: 'decision', label: 'Auto-approve: never, sometimes, or gated?' },
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
              <p className="rx-rail-title">The exposure</p>
              <ul className="rx-rail-list">
                <li>File write + shell + web.</li>
                <li>Reads attacker-influenced repos.</li>
                <li>Can edit its own config.</li>
              </ul>
            </div>
            <div className="rx-rail-card">
              <p className="rx-rail-title">Real disclosures</p>
              <ul className="rx-rail-list">
                <li>CVE-2025-53773 <Cite n={1} /></li>
                <li>Cursor CurXecute / MCPoison <Cite n={2} /></li>
                <li>CamoLeak <Cite n={3} /></li>
              </ul>
            </div>
          </>
        }
      >
        <ResearchAbstract>
          <p>
            An AI coding agent is the highest-privilege agent most engineers run, and the least
            contained. It sits inside the developer trust boundary — the machine with the source, the
            cloud credentials, the SSH keys — and it can write files, edit configuration, and execute
            shell commands. It also, by design, reads content that attackers can influence: repository
            files, issues, pull-request comments, dependency code.
          </p>
          <p>
            When those two facts meet, prompt injection stops being about leaked text and becomes remote
            code execution. We analyze three real 2025 disclosures, quantify the blast radius, and
            locate where the approval boundary must sit to survive an agent that moves faster than a
            human can supervise.
          </p>
        </ResearchAbstract>

        <h2 id="thesis"><span className="rx-secnum">01</span>A shell inside the trust boundary</h2>
        <p className="rx-lead">
          Give a model a shell and untrusted input in the same session, and you have built a remote code
          execution primitive that the attacker triggers by writing a comment.
        </p>
        <p>
          Traditional developer tooling is trusted because it does what the developer tells it. A coding
          agent breaks that assumption: it does what the <em>current context</em> tells it, and the
          context includes files and comments authored by whoever contributed to the repository. The
          developer&rsquo;s implicit trust in their own tools is silently extended to every author of
          every artifact the agent reads.
        </p>

        <h2 id="anatomy"><span className="rx-secnum">02</span>Anatomy of a coding agent</h2>
        <p>A modern coding agent typically has four capability classes, each a distinct risk:</p>
        <ul>
          <li><strong>File write</strong> — including the ability to modify its own configuration and the project&rsquo;s tool settings.</li>
          <li><strong>Command execution</strong> — a shell, often to run tests, builds, and package managers.</li>
          <li><strong>Network / web</strong> — fetching docs, packages, or browsing, which doubles as an exfiltration channel.</li>
          <li><strong>Tool/MCP integration</strong> — external servers that add capabilities and read paths.</li>
        </ul>
        <ResearchAnalysis>
          <p style={{ marginBottom: 0 }}>
            The compounding risk is <strong>self-configuration</strong>. If an agent can write files, and
            its own approval behavior is governed by a file, then an injection that writes that file can
            disable the very control meant to stop it. This is the mechanism behind the most serious
            coding-agent disclosures — the agent is talked into escalating its own privileges.
          </p>
        </ResearchAnalysis>

        <ResearchFigure
          altText="Diagram: attacker-controlled repository content is read by the coding agent; the injected instruction tells the agent to edit its settings file to enable auto-approve; with approval disabled, the agent runs an arbitrary shell command, achieving code execution on the developer's machine."
          caption={<><b>Figure 1.</b> The self-escalation chain. Injection &rarr; edit own config &rarr; disable approval &rarr; run arbitrary command. Each arrow is an action the agent was permitted to take.</>}
        >
          <div className="rx-flow">
            <div className="rx-node rx-untrust"><b>Repo content</b>Hidden instruction</div>
            <span className="rx-arrow">→</span>
            <div className="rx-node"><b>Agent reads it</b>Treats as order</div>
            <span className="rx-arrow">→</span>
            <div className="rx-node rx-untrust"><b>Edits own config</b>Enables auto-approve</div>
            <span className="rx-arrow">→</span>
            <div className="rx-node rx-untrust"><b>Runs shell cmd</b>RCE on dev host</div>
          </div>
        </ResearchFigure>

        <h2 id="injection-to-rce"><span className="rx-secnum">03</span>From injection to remote code execution</h2>
        <p>
          The path is short. (1) The agent ingests attacker-influenced content — a PR description, an
          issue, a code comment, a README, or the output of a tool. (2) That content carries an
          instruction. (3) The agent, unable to distinguish instruction from data, acts. (4) Because the
          agent holds file-write and shell privileges, the action is code execution. The attacker never
          needed credentials; they needed the victim to point an over-privileged agent at their content.
        </p>

        <h2 id="incidents"><span className="rx-secnum">04</span>Three real disclosures</h2>

        <ResearchFinding title="CVE-2025-53773 — Copilot / VS Code “YOLO mode”" badge="INCIDENT" tone="danger">
          <p style={{ marginBottom: 0 }}>
            A prompt hidden in repository content (e.g. a PR or comment) could induce the assistant to
            modify the workspace settings file to enable automatic tool approval — turning off the human
            confirmation step — after which it could run shell commands and act without oversight. The
            vendor shipped a fix in its August 2025 update cycle <Cite n={1} />.
            <strong> Boundary that failed:</strong> the agent could write the file that governed its own
            approval behavior.
          </p>
        </ResearchFinding>

        <ResearchFinding title="Cursor — CurXecute (CVE-2025-54135) & MCPoison (CVE-2025-54136)" badge="INCIDENT" tone="danger">
          <p>
            <strong>CurXecute:</strong> content returned from an external MCP source could instruct the
            agent to rewrite the project&rsquo;s MCP configuration; with auto-run enabled, injected
            commands executed immediately — demonstrated end-to-end from a crafted message flowing
            through an integration <Cite n={2} />.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>MCPoison:</strong> a trust-on-first-use flaw — the editor validated an MCP config on
            first approval, then trusted later edits without re-validation. An attacker approves a benign
            config, then silently swaps in a malicious one that runs without re-prompting <Cite n={2} />.
            <strong> Boundary that failed:</strong> time-of-check to time-of-use gap in the approval model.
          </p>
        </ResearchFinding>

        <ResearchFinding title="CamoLeak — data exfiltration path (CVE-2025-59145)" badge="INCIDENT" tone="danger">
          <p style={{ marginBottom: 0 }}>
            Covered in depth under <Link href="/ai-agent-prompt-injection-security/">prompt injection</Link>:
            invisible markdown in a PR drove a coding assistant to exfiltrate private source and secrets
            via a trusted image proxy <Cite n={3} />. Included here because it targets the coding-agent
            surface specifically — the injected content arrives through normal developer workflow.
          </p>
        </ResearchFinding>

        <h2 id="blast"><span className="rx-secnum">05</span>The real blast radius</h2>
        <p>
          The blast radius of a compromised coding agent is not the repository — it is the developer&rsquo;s
          entire authenticated environment. On a typical engineering laptop that includes cloud
          credentials in environment variables and config files, SSH and signing keys, session tokens
          for internal tools, and package-publishing rights. An agent with a shell inherits all of it.
        </p>
        <ResearchMetricStrip
          items={[
            { value: '3+', label: '2025 coding-agent CVEs with RCE or exfiltration impact', source: 'CVE-2025-53773 [1], 54135/54136 [2], 59145 [3]' },
            { value: 'RCE', label: 'Impact class when injection meets file-write + shell', source: 'CVE-2025-53773 [1]' },
            { value: 'TOCTOU', label: 'Trust-on-first-use gap exploited by MCPoison', source: 'Check Point [2]' },
          ]}
        />

        <h2 id="approval"><span className="rx-secnum">06</span>Where the approval boundary belongs</h2>
        <p>
          The recurring root cause across these disclosures is a mis-placed approval boundary. Two
          anti-patterns dominate: approval that the agent can disable by writing a file, and approval
          that is validated once then trusted forever. The corrective principles:
        </p>
        <ResearchFinding title="Approval-boundary principles" badge="ANALYSIS" tone="accent">
          <ul style={{ marginBottom: 0 }}>
            <li><strong>Out-of-band.</strong> The approval mechanism must live where the agent cannot write it — not in a workspace file the agent can edit.</li>
            <li><strong>Re-validated on change.</strong> Configuration for tools/MCP must be re-approved whenever it changes, closing the TOCTOU gap.</li>
            <li><strong>Effect-scoped, not step-scoped.</strong> Gate on high-impact effects (shell execution, credential access, new egress destination), not on every token, so the gate survives machine pacing.</li>
            <li><strong>Confined by default.</strong> Run the agent with least privilege and no ambient credentials, so a bypassed approval still meets a bounded environment <Cite n={4} />.</li>
          </ul>
        </ResearchFinding>

        <h2 id="failure-modes"><span className="rx-secnum">07</span>Production failure modes</h2>
        <ResearchFailureMode
          title="The agent can modify the control that governs it"
          mechanism={<>Approval/auto-run state is stored in a project or workspace file. An injected instruction directs the agent to edit that file and enable unattended execution.</>}
          whyFailed={<>The security control shared a writable surface with the thing it was controlling; there was no privilege separation between &ldquo;do work&rdquo; and &ldquo;change how work is authorized.&rdquo;</>}
          signals={[
            'Agent edits to settings / mcp config / .vscode files',
            'Auto-approve or auto-run toggled during a session',
            'Shell invocation immediately after reading external content',
            'Config file changes not authored by the developer',
          ]}
          controls={[
            'Store approval state outside agent-writable paths',
            'Re-validate tool/MCP config on every change (no TOFU)',
            'Deny agent write access to its own config by policy [4]',
            'Run in a least-privilege sandbox without ambient creds',
          ]}
        />

        <h2 id="decision"><span className="rx-secnum">08</span>Auto-approve: never, sometimes, or gated?</h2>
        <ResearchDecision
          columns={[
            { key: 'mode', label: 'Mode' },
            { key: 'speed', label: 'Developer speed' },
            { key: 'risk', label: 'Risk when agent reads untrusted content' },
            { key: 'fit', label: 'Where it fits' },
          ]}
          rows={[
            { mode: 'Approve every action', speed: 'Slow', risk: 'Low (human sees each command)', fit: 'Any repo with external contributors' },
            { mode: 'Auto-approve everything', speed: 'Fast', risk: 'Critical — injection = RCE', fit: 'Never on a machine with real credentials' },
            { mode: 'Gated auto-approve (allowlist of safe actions, sandbox)', speed: 'Fast', risk: 'Bounded to sandbox + allowlist', fit: 'Most day-to-day coding, in a contained workspace' },
          ]}
          recommendation={
            <p style={{ marginBottom: 0 }}>
              Never enable blanket auto-approve on a host that holds real credentials. Run coding agents
              in a contained workspace (ephemeral container or dev VM) with no ambient cloud/SSH secrets,
              and reserve auto-execution for an allowlist of side-effect-free actions. This preserves the
              speed that makes the agent worth using while ensuring that a successful injection lands in a
              bounded blast radius — the same containment logic developed in{' '}
              <Link href="/ai-agent-containment-architecture/">containment architecture</Link>.
            </p>
          }
        />

        <h2 id="limitations"><span className="rx-secnum">09</span>Limitations</h2>
        <ResearchLimitations
          items={[
            'All three cases were responsibly disclosed and patched; they demonstrate feasibility, not measured in-the-wild prevalence.',
            'Product internals evolve quickly; specific settings names and defaults cited here may change after patching, though the class of flaw persists.',
            'The blast-radius argument assumes a typical developer environment with ambient credentials; well-isolated setups reduce it substantially — which is the point.',
            'Deterministic privilege control [4] helps but depends on correctly scoped policies and does not address flaws in the approval mechanism itself.',
          ]}
        />

        <h2 id="next"><span className="rx-secnum">10</span>Where this leads</h2>
        <p>
          Coding agents pull in capability through external tools, which raises the question of who wrote
          those tools — the subject of <Link href="/mcp-server-security/">MCP server security</Link>. The
          containment that bounds a compromised coding agent is developed in{' '}
          <Link href="/ai-agent-containment-architecture/">containment architecture</Link> and{' '}
          <Link href="/ai-agent-sandbox-escape-security/">sandbox escape</Link>, and the credential exposure it
          implies is the focus of{' '}
          <Link href="/ai-agent-identity-and-access-control/">identity and access control</Link>.
        </p>

        <h2 id="references"><span className="rx-secnum">—</span>References</h2>
        <ResearchReferenceList refs={refs} />
      </ResearchLayout>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
