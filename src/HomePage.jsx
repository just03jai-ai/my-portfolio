import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  List,
  X,
} from "@phosphor-icons/react";
import osOverviewFinal from "../Case Study/SO Lifecycle/assets/os-overview-final.png";
import osV3Journey from "../Case Study/SO Lifecycle/assets/os-v3-journey.png";
import v2ProFinal from "../Case Study/SO Lifecycle/assets/v2-pro-final.png";

const navigation = [
  ["Impact", "impact"],
  ["Systems", "systems"],
  ["Case studies", "case-studies"],
  ["AI architecture", "ai-architecture"],
  ["Thinking", "thinking"],
  ["Contact", "contact"],
];

const impact = [
  {
    value: "03",
    label: "Product generations",
    context: "Sales Order v1, v2, and v3 across FarMart OS and Pro",
    period: "Verified · product screens and workflow archive",
  },
  {
    value: "06",
    label: "Lifecycle states",
    context: "Request, margin, approval, modification, fulfilment, completion",
    period: "Verified · published case study",
  },
  {
    value: "04",
    label: "Functions connected",
    context: "Sales, finance, procurement, and operations",
    period: "Verified · role and workflow model",
  },
  {
    value: "02",
    label: "Product surfaces",
    context: "Desktop operations system and mobile partner workflow",
    period: "Verified · FarMart OS and FarMart Pro",
  },
];

const systems = [
  {
    id: "commerce",
    index: "01",
    title: "Commerce OS",
    objective: "Move an order from commercial intent to controlled fulfilment.",
    actors: ["Sales", "Finance", "Procurement", "Operations"],
    objects: ["Request", "Sales order", "Purchase order", "Invoice"],
    decision: "Can this order proceed at an acceptable margin and risk?",
    outcome: "Design intent: one shared operating model across teams.",
  },
  {
    id: "supply",
    index: "02",
    title: "Procurement & Supply",
    objective: "Translate demand into executable supply decisions.",
    actors: ["Buyer", "Supplier", "Procurement agent", "Warehouse"],
    objects: ["Demand", "Allocation", "Supplier quote", "Goods receipt"],
    decision: "Who should supply what, when, and at which landed cost?",
    outcome: "Design intent: expose exceptions before they become delays.",
  },
  {
    id: "risk",
    index: "03",
    title: "Finance & Risk",
    objective: "Make commercial approvals explicit, inspectable, and recoverable.",
    actors: ["Margin approver", "Risk approver", "Finance controller"],
    objects: ["Margin model", "Credit exposure", "Approval", "Exception"],
    decision: "Which human must approve this action and why?",
    outcome: "Design intent: governance without hiding operational context.",
  },
  {
    id: "agents",
    index: "04",
    title: "AI Operations",
    objective: "Delegate repeatable work without delegating accountability.",
    actors: ["Operator", "Agent", "Approver", "System owner"],
    objects: ["Intent", "Plan", "Tool call", "Evidence log"],
    decision: "Can the agent act, or must a human intervene?",
    outcome: "Architecture proposal: automation that remains observable and reversible.",
  },
];

const caseStudies = [
  {
    index: "01",
    title: "Sales Lifecycle",
    eyebrow: "Flagship case study",
    statement: "From fragmented order handling to a margin-controlled operating system.",
    meta: ["Lead Product Designer", "FarMart OS + Pro", "3 product generations"],
    status: "Published evidence",
    evidence: "Case study, workflow archive, product screens",
    image: osOverviewFinal,
    href: "/sales-lifecycle",
    alt: "FarMart Sales Lifecycle overview showing connected sales order workflow states",
  },
  {
    index: "02",
    title: "FarMart OS Foundation",
    eyebrow: "Enterprise systems",
    statement: "A shared object and role model for operational teams.",
    meta: ["Systems design", "Enterprise UX", "Operational workflows"],
    status: "Supporting evidence",
    evidence: "System model and linked Sales Lifecycle screens",
    image: osV3Journey,
    href: "/sales-lifecycle",
    alt: "FarMart OS workflow interface showing sales order journey",
  },
  {
    index: "03",
    title: "Agent Loop",
    eyebrow: "AI product architecture",
    statement: "A governed path from human intent to verified action.",
    meta: ["Human in the loop", "Permissions", "Evaluation"],
    status: "Architecture proposal",
    evidence: "Concept model; shipped implementation not yet claimed",
    image: v2ProFinal,
    href: "#ai-architecture",
    alt: "FarMart Pro mobile workflow used as evidence for agent-ready operations",
  },
];

const agentNodes = [
  {
    id: "intent",
    index: "01",
    title: "Intent",
    prompt: "What outcome is the operator trying to achieve?",
    log: "Capture the goal, relevant object, actor, and constraints before selecting a tool.",
    boundary: "The agent cannot infer authority from intent.",
  },
  {
    id: "plan",
    index: "02",
    title: "Plan",
    prompt: "Which steps, tools, and approvals are required?",
    log: "Create an inspectable plan and mark irreversible or high-risk actions.",
    boundary: "Policy selects the approval gate before execution.",
  },
  {
    id: "act",
    index: "03",
    title: "Act",
    prompt: "What can execute safely within the permission boundary?",
    log: "Use the minimum required tool access and preserve action-level evidence.",
    boundary: "Every external side effect is logged and recoverable.",
  },
  {
    id: "verify",
    index: "04",
    title: "Verify",
    prompt: "Did the action produce the expected operational result?",
    log: "Compare actual output with acceptance criteria, then escalate or close.",
    boundary: "Failed verification routes to a human, never silent retry loops.",
  },
];

const frameworks = [
  {
    index: "01",
    title: "Object → State → Actor → Decision",
    use: "Use when a workflow feels like a collection of disconnected screens.",
    avoid: "Avoid when the problem is purely informational and has no state change.",
  },
  {
    index: "02",
    title: "Exception-First Enterprise UX",
    use: "Use when operators spend more time recovering work than starting it.",
    avoid: "Avoid turning every rare edge case into default-path complexity.",
  },
  {
    index: "03",
    title: "Evidence Before Automation",
    use: "Use when an AI action changes money, access, inventory, or customer state.",
    avoid: "Avoid adding approval steps without a specific risk they control.",
  },
];

const notes = [
  ["Systems, Not Screens", "Why enterprise products should be modeled as operating systems.", "Systems design", "8 min"],
  ["The Role Layer Is the New UI", "Permissions are not backend policy; they shape the product experience.", "Enterprise UX", "6 min"],
  ["Designing the Agent Boundary", "A practical model for deciding when software should ask, act, or escalate.", "AI architecture", "10 min"],
];

const leadershipModel = [
  {
    index: "01",
    title: "Frame the operating problem",
    detail: "Translate competing stakeholder requests into actors, objects, decisions, risks, and measurable outcomes.",
  },
  {
    index: "02",
    title: "Align the decision makers",
    detail: "Make ownership, approval boundaries, and unresolved trade-offs explicit before interface work begins.",
  },
  {
    index: "03",
    title: "Sequence the system",
    detail: "Choose the smallest coherent product change that improves the operating model without blocking future states.",
  },
  {
    index: "04",
    title: "Measure and revise",
    detail: "Instrument outcomes, compare actual behavior with the decision hypothesis, and change the model after launch.",
  },
];

function SectionLabel({ number, children }) {
  return (
    <div className="ed-label">
      <span>{number}</span>
      <p>{children}</p>
    </div>
  );
}

function ChapterBridge({ from, question, answer }) {
  return (
    <aside className="ed-bridge" aria-label={`From ${from}`}>
      <span>{from}</span>
      <p>{question}</p>
      <strong>{answer}</strong>
      <ArrowDown aria-hidden="true" />
    </aside>
  );
}

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSystem, setActiveSystem] = useState(0);
  const [activeAgentNode, setActiveAgentNode] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("hello@jaisingh.design");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const selectedSystem = systems[activeSystem];
  const selectedAgentNode = agentNodes[activeAgentNode];

  return (
    <div className="editorial-site">
      <a className="ed-skip" href="#main-content">Skip to content</a>

      <header className="ed-header">
        <a className="ed-brand" href="#top" aria-label="Jai Singh home">jai<span>.</span></a>
        <nav className={`ed-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="ed-header__utility">
          <span className="ed-available"><i /> Available for select work</span>
          <a className="ed-resume" href="#contact">Résumé <ArrowUpRight /></a>
          <button
            className="ed-menu"
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <List />}
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="ed-hero" id="top" aria-labelledby="hero-title">
          <div className="ed-hero__copy">
            <p className="ed-overline">Product systems designer · AI product architect</p>
            <h1 id="hero-title">
              I design the operating systems behind complex businesses—
              <em>and the AI agents that make them run.</em>
            </h1>
            <p className="ed-hero__lede">
              Product systems, enterprise workflows, and human-in-the-loop AI for
              supply chains, operations, and high-stakes decisions.
            </p>
            <div className="ed-actions">
              <a className="ed-button ed-button--solid" href="#case-studies">
                Explore featured work <ArrowDown />
              </a>
              <a className="ed-button" href="#thinking">Design philosophy <ArrowRight /></a>
            </div>
          </div>
          <aside className="ed-proof-rail" aria-label="Career proof points">
            <p>Proof / 2026</p>
            <dl>
              <div><dt>03</dt><dd>Product generations documented <small>Verified</small></dd></div>
              <div><dt>06</dt><dd>Lifecycle decisions connected <small>Verified</small></dd></div>
              <div><dt>03</dt><dd>Generations of Sales Order systems <small>Verified</small></dd></div>
            </dl>
          </aside>
          <div className="ed-hero__footer">
            <span>Delhi NCR · India</span>
            <span>Scroll to inspect the system</span>
          </div>
        </section>

        <section className="ed-section ed-impact" id="impact" aria-labelledby="impact-title">
          <SectionLabel number="01">Selected impact</SectionLabel>
          <div className="ed-section__intro">
            <h2 id="impact-title">Outcomes need context,<br /><em>not decoration.</em></h2>
            <p>
              Every claim is paired with scope and evidence status. Unverified metrics
              remain visibly marked until a source and owner are confirmed.
            </p>
          </div>
          <div className="ed-impact__grid">
            {impact.map((item, index) => (
              <article className={`ed-metric ed-metric--${index + 1}`} key={item.label}>
                <strong>{item.value}</strong>
                <h3>{item.label}</h3>
                <p>{item.context}</p>
                <small>{item.period}</small>
              </article>
            ))}
          </div>
          <ChapterBridge
            from="Evidence → complexity"
            question="Metrics show that something changed. They do not explain why the work was difficult."
            answer="To understand the impact, inspect the operating system beneath it."
          />
        </section>

        <section className="ed-section ed-systems" id="systems" aria-labelledby="systems-title">
          <SectionLabel number="02">Operating systems</SectionLabel>
          <div className="ed-section__intro ed-section__intro--wide">
            <h2 id="systems-title">The interface is only the<br /><em>visible layer.</em></h2>
            <p>
              I model the actors, objects, states, and decisions that let complex
              businesses operate as one coherent system.
            </p>
          </div>
          <div className="ed-system-workbench">
            <div className="ed-system-index" role="tablist" aria-label="Operating systems">
              {systems.map((system, index) => (
                <button
                  key={system.id}
                  type="button"
                  role="tab"
                  aria-selected={activeSystem === index}
                  onClick={() => setActiveSystem(index)}
                >
                  <span>{system.index}</span>
                  <strong>{system.title}</strong>
                  <ArrowRight />
                </button>
              ))}
            </div>
            <div className="ed-system-map">
              <div className="ed-system-map__header">
                <span>{selectedSystem.index} / System model</span>
                <strong>{selectedSystem.title}</strong>
              </div>
              <div className="ed-flow" aria-label={`${selectedSystem.title} dependency diagram`}>
                <div className="ed-flow__column">
                  <span>Actors</span>
                  {selectedSystem.actors.map((actor) => <b key={actor}>{actor}</b>)}
                </div>
                <ArrowRight className="ed-flow__arrow" />
                <div className="ed-flow__column ed-flow__column--objects">
                  <span>Core objects</span>
                  {selectedSystem.objects.map((object) => <b key={object}>{object}</b>)}
                </div>
                <ArrowRight className="ed-flow__arrow" />
                <div className="ed-flow__decision">
                  <span>Decision</span>
                  <p>{selectedSystem.decision}</p>
                </div>
              </div>
              <div className="ed-system-map__notes">
                <div><span>Objective</span><p>{selectedSystem.objective}</p></div>
                <div><span>Outcome</span><p>{selectedSystem.outcome}</p></div>
              </div>
            </div>
          </div>
          <ChapterBridge
            from="Model → proof"
            question="Architecture only matters when it survives real constraints, real teams, and real exceptions."
            answer="The flagship case study shows where the model was challenged."
          />
        </section>

        <section className="ed-section ed-cases" id="case-studies" aria-labelledby="cases-title">
          <SectionLabel number="03">Featured case studies</SectionLabel>
          <div className="ed-section__intro">
            <h2 id="cases-title">Decisions first.<br /><em>Screens as evidence.</em></h2>
            <p>
              Each study connects the operating problem, constraints, system decision,
              and final product evidence.
            </p>
          </div>
          <div className="ed-case-list">
            {caseStudies.map((study, index) => (
              <a className={`ed-case ${index === 0 ? "ed-case--featured" : ""}`} href={study.href} key={study.title}>
                <div className="ed-case__copy">
                  <span>{study.index} / {study.eyebrow} / {study.status}</span>
                  <h3>{study.title}</h3>
                  <p>{study.statement}</p>
                  <ul>{study.meta.map((item) => <li key={item}>{item}</li>)}</ul>
                  <small className="ed-case__evidence">Evidence: {study.evidence}</small>
                  <b>Read case study <ArrowRight /></b>
                </div>
                <figure>
                  <img src={study.image} alt={study.alt} />
                  <figcaption>Product evidence · interface crop</figcaption>
                </figure>
              </a>
            ))}
          </div>
          <article className="ed-case-decision" aria-labelledby="decision-title">
            <div className="ed-case-decision__statement">
              <span>Inside the flagship / Decision record 04</span>
              <h3 id="decision-title">The hard part was not creating an order. It was making every commercial decision inspectable.</h3>
            </div>
            <div className="ed-case-decision__grid">
              <div>
                <span>Assumption challenged</span>
                <p>One linear workflow could serve sales, margin, risk, procurement, and fulfilment teams.</p>
              </div>
              <div>
                <span>Constraint</span>
                <p>Each team needed different information without creating separate versions of the order.</p>
              </div>
              <div>
                <span>System decision</span>
                <p>Keep one sales-order object; reveal role-specific decisions through explicit states and approval gates.</p>
              </div>
              <div>
                <span>Trade-off accepted</span>
                <p>More visible lifecycle states in exchange for less ambiguity, fewer hidden handoffs, and recoverable exceptions.</p>
              </div>
              <div>
                <span>What changed</span>
                <p>Later versions moved context closer to the decision and made modified orders easier to re-enter.</p>
              </div>
              <div>
                <span>Evidence status</span>
                <p>Product evolution is verified in captured screens. Quantified business impact still requires an owner.</p>
              </div>
            </div>
            <a href="/sales-lifecycle">Inspect the complete decision trail <ArrowRight /></a>
          </article>
        </section>

        <section className="ed-section ed-ai" id="ai-architecture" aria-labelledby="ai-title">
          <SectionLabel number="04">AI product architecture</SectionLabel>
          <div className="ed-section__intro ed-section__intro--wide">
            <h2 id="ai-title">AI needs an operating model,<br /><em>not a chat box.</em></h2>
            <p>
              Select a node to inspect the decision, evidence requirement, and human
              boundary at each stage of an agent workflow.
            </p>
          </div>
          <div className="ed-agent">
            <div className="ed-agent__graph" role="tablist" aria-label="Agent orchestration stages">
              {agentNodes.map((node, index) => (
                <button
                  key={node.id}
                  type="button"
                  role="tab"
                  aria-selected={activeAgentNode === index}
                  onClick={() => setActiveAgentNode(index)}
                >
                  <span>{node.index}</span>
                  <strong>{node.title}</strong>
                  <small>{node.prompt}</small>
                </button>
              ))}
              <div className="ed-agent__governance">
                <span>Governance layer</span>
                <p>Permissions · approval gates · observability · recovery</p>
              </div>
            </div>
            <aside className="ed-decision-log" aria-live="polite">
              <p>Selected node / {selectedAgentNode.index}</p>
              <h3>{selectedAgentNode.title}</h3>
              <dl>
                <div><dt>Decision log</dt><dd>{selectedAgentNode.log}</dd></div>
                <div><dt>Boundary</dt><dd>{selectedAgentNode.boundary}</dd></div>
                <div><dt>Failure path</dt><dd>Pause execution → preserve context → route to accountable human.</dd></div>
              </dl>
            </aside>
          </div>
          <div className="ed-manifesto" aria-label="Design principle">
            <span>Principle / 01</span>
            <p>Automation should remove operational load—<em>never human accountability.</em></p>
            <small>That is the boundary I design for.</small>
          </div>
        </section>

        <section className="ed-section ed-thinking" id="thinking" aria-labelledby="thinking-title">
          <SectionLabel number="05">Frameworks & thinking</SectionLabel>
          <div className="ed-section__intro">
            <h2 id="thinking-title">Repeatable judgment,<br /><em>made explicit.</em></h2>
            <p>Working models for making complex product decisions with teams.</p>
          </div>
          <div className="ed-frameworks">
            {frameworks.map((framework) => (
              <details key={framework.title}>
                <summary>
                  <span>{framework.index}</span>
                  <h3>{framework.title}</h3>
                  <i>Open</i>
                </summary>
                <div>
                  <p><b>Use when</b>{framework.use}</p>
                  <p><b>Avoid when</b>{framework.avoid}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="ed-section ed-notes" id="notes" aria-labelledby="notes-title">
          <SectionLabel number="06">Operating notes</SectionLabel>
          <div className="ed-notes__layout">
            <div className="ed-notes__featured">
              <p>Featured thesis / AI product architecture</p>
              <h2 id="notes-title">The best AI interface may be a better decision boundary.</h2>
              <span>
                Before designing an agent interaction, define what it can know, what it
                can change, and who remains accountable.
              </span>
              <a href="#contact">Discuss the thesis <ArrowRight /></a>
            </div>
            <div className="ed-note-index">
              {notes.map(([title, summary, category, time], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <div><small>{category} · {time}</small><h3>{title}</h3><p>{summary}</p></div>
                  <ArrowUpRight />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ed-section ed-signal" id="signal" aria-labelledby="signal-title">
          <SectionLabel number="07">How I lead product direction</SectionLabel>
          <div className="ed-leadership">
            <div className="ed-leadership__intro">
              <p>Leadership is not a title or testimonial.</p>
              <h2 id="signal-title">It is the quality of the decisions a team can make together.</h2>
              <span>
                My role is to turn operational ambiguity into a product model that
                design, product, engineering, and business leaders can challenge,
                sequence, and measure.
              </span>
            </div>
            <ol>
              {leadershipModel.map((item) => (
                <li key={item.index}>
                  <span>{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ol>
            <aside>
              <strong>Evidence still required for full principal-level confidence</strong>
              <p>
                Named cross-functional partners, the decision Jai personally owned,
                conflict or resistance handled, launch instrumentation, and a verified
                post-launch result.
              </p>
            </aside>
          </div>
        </section>

        <section className="ed-contact" id="contact" aria-labelledby="contact-title">
          <SectionLabel number="08">Contact</SectionLabel>
          <p className="ed-contact__principle">My work reduces complexity without hiding consequence.</p>
          <h2 id="contact-title">
            If the product is operationally complex, organizationally messy,
            or newly possible because of AI—<em>that is where I do my best work.</em>
          </h2>
          <div className="ed-contact__actions">
            <a className="ed-button ed-button--solid" href="mailto:hello@jaisingh.design">
              Start a conversation <ArrowUpRight />
            </a>
            <button className="ed-button" type="button" onClick={copyEmail}>
              {copied ? <Check /> : <Copy />} {copied ? "Email copied" : "Copy email"}
            </button>
          </div>
          <div className="ed-contact__ownership" aria-label="Product leadership scope">
            <span>I can own</span>
            <p>Product framing</p>
            <p>Operating-model architecture</p>
            <p>AI decision boundaries</p>
            <p>Cross-functional product direction</p>
          </div>
          <footer>
            <a className="ed-brand" href="#top">jai<span>.</span></a>
            <p>Product systems · Enterprise workflows · Human-in-the-loop AI</p>
            <div><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:hello@jaisingh.design">Email</a></div>
          </footer>
        </section>
      </main>
    </div>
  );
}
