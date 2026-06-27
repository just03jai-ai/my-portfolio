import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  List,
  X,
} from "@phosphor-icons/react";
import salesOrderPdf from "../Case Study/SO Lifecycle/documents/Sales-Order-Case-Study.pdf?url";
import osOverviewFinal from "../Case Study/SO Lifecycle/assets/os-overview-final.png";
import osV1AddMargin from "../Case Study/SO Lifecycle/assets/os-v1-add-margin.png";
import osV2Journey from "../Case Study/SO Lifecycle/assets/os-v2-journey.png";
import proV1InReview from "../Case Study/SO Lifecycle/assets/pro-v1-in-review.png";
import v2ProFinal from "../Case Study/SO Lifecycle/assets/v2-pro-final.png";

const projects = [
  {
    name: "Sales Lifecycle",
    description: "From request to margin-controlled fulfilment",
    category: "Product Case Study",
    metric: "06",
    label: "Lifecycle stages",
    href: "/sales-lifecycle",
    image: osOverviewFinal,
  },
  {
    name: "FarMartOS",
    description: "An operating system for agri-commerce",
    category: "Enterprise OS",
    metric: "10 / 10",
    label: "Modules unified",
    href: "#contact",
  },
  {
    name: "FarMart PRO",
    description: "Trading partner platform",
    category: "Procurement",
    metric: "00:42",
    label: "Onboarding · hrs",
    href: "#contact",
  },
  {
    name: "FarMart App",
    description: "BahiKhata, SMS, onboarding",
    category: "Consumer · Bharat",
    metric: "250K+",
    label: "Operators reached",
    href: "#contact",
  },
  {
    name: "Agent Loop",
    description: "Intent → Plan → Act → Verify",
    category: "AI Workflows",
    metric: "∞",
    label: "Skills · approvals",
    href: "#contact",
  },
];

const lifecycleStages = [
  ["01", "Request", "Capture buyer, commodity, quantity, location, and fulfilment expectations."],
  ["02", "Margin", "Model delivered cost, allocation, recovery, payable days, and expected margin."],
  ["03", "Approval", "Route margin and risk decisions to accountable approvers."],
  ["04", "Modify", "Return commercial exceptions with a visible reason and next action."],
  ["05", "Fulfil", "Connect purchase orders, procurement agents, suppliers, and warehouses."],
  ["06", "Complete", "Track actual versus expected outcomes through order completion."],
];

const services = [
  {
    title: "Product Systems Design",
    description: "Object models, workflows, IA. The layer beneath every interface.",
  },
  {
    title: "Enterprise Product Design",
    description: "Procurement, warehouse, finance, traceability — built for operators.",
  },
  {
    title: "AI Product Architecture",
    description: "Agent runtimes, approvals, skills, and human-in-the-loop systems.",
  },
  {
    title: "Design Leadership",
    description: "Direction, critique, systems thinking, and team-level operating models.",
  },
];

const notes = [
  {
    date: "Sep 12, 2025",
    title: "Systems, Not Screens",
    type: "Essay",
  },
  {
    date: "Aug 02, 2025",
    title: "Object Models as Leverage",
    type: "Field Notes",
  },
  {
    date: "Jun 18, 2025",
    title: "Designing AI-Native Operating Systems",
    type: "Essay",
  },
];

function ActionButton({ children, href = "#contact", secondary = false }) {
  return (
    <a className={`action ${secondary ? "action--secondary" : ""}`} href={href}>
      <span>{children}</span>
      {!secondary && (
        <span className="action__icon" aria-hidden="true">
          <ArrowRight weight="bold" />
        </span>
      )}
    </a>
  );
}

function Eyebrow({ children, accent = false }) {
  return <p className={`eyebrow ${accent ? "eyebrow--accent" : ""}`}>{children}</p>;
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(1);
  const isCaseStudyPage = window.location.pathname === "/sales-lifecycle";

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <div className={`site-shell ${isCaseStudyPage ? "site-shell--case-study" : ""}`}>
      <header className="site-header">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Jai Singh home">
            jai<span>.</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>

          <div className={`nav__links ${menuOpen ? "nav__links--open" : ""}`} id="main-menu">
            {["About", "Work", "Experience", "Projects", "Writing", "Contact"].map((item) => (
              <a
                href={`#${item.toLowerCase()}`}
                key={item}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>

          <ActionButton href="#contact">Let&apos;s Talk</ActionButton>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-frame" aria-labelledby="hero-title">
          <div className="hero__meta">
            <span>( In Service )</span>
            <span>( Product Design )</span>
            <span>( Built in Bharat )</span>
          </div>
          <div className="hero__monogram" aria-hidden="true">JS</div>
          <div className="hero__content">
            <h1 id="hero-title">
              Architect
              <span>Operating</span>
              Systems<span className="period">.</span>
            </h1>
            <div className="hero__bottom">
              <p>
                Jai Singh designs the operating systems behind modern supply chains —
                procurement, traceability, warehouse, finance — and the AI workflows
                that run on top of them.
              </p>
              <ActionButton href="#contact">Let&apos;s Connect</ActionButton>
            </div>
          </div>
          <div className="availability" aria-label="Available for select projects">
            <span>Available</span>
          </div>
        </section>

        <section className="about container section" id="about">
          <div className="about__aside">
            <Eyebrow>( About Me )</Eyebrow>
            <ActionButton href="#contact">Let&apos;s Connect</ActionButton>
          </div>
          <p className="about__copy">
            A senior product designer with <strong>8+ years</strong> shipping enterprise
            software for supply chain, procurement, and traceability. I design
            load-bearing systems — object models, workflows, role-based surfaces — and
            bring AI in as a first-class workflow primitive, not a chatbot.
          </p>
        </section>

        <section className="stats container" aria-label="Career statistics">
          {[
            ["Years Experience", "08+"],
            ["Enterprise Modules", "10+"],
            ["Active Operators", "250+"],
            ["Workflow Throughput", "+72%"],
          ].map(([label, value]) => (
            <article className="stat-card" key={label}>
              <Eyebrow>{label}</Eyebrow>
              <strong>{value}</strong>
            </article>
          ))}
        </section>

        <section className="work container section" id="work">
          <div className="section-heading">
            <div>
              <Eyebrow>( Featured Work )</Eyebrow>
              <h2>Projects &amp;<br />Case Studies<span>.</span></h2>
            </div>
            <ActionButton secondary href="#projects">Explore Projects</ActionButton>
          </div>

          <div className="project-grid" id="projects">
            {projects.map((project) => {
              const content = (
                <>
                <div className="project-card__header">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <Eyebrow>{project.category}</Eyebrow>
                </div>
                <div
                  className={`project-card__visual ${project.image ? "project-card__visual--image" : ""}`}
                >
                  {project.image ? (
                    <img src={project.image} alt="Sales Lifecycle desktop order queue" loading="lazy" />
                  ) : (
                    <div>
                      <strong>{project.metric}</strong>
                      <span>{project.label}</span>
                    </div>
                  )}
                  <span className="project-card__icon" aria-hidden="true">
                    <ArrowUpRight weight="bold" />
                  </span>
                </div>
                </>
              );

              return (
                <a className="project-card" href={project.href} key={project.name}>
                  {content}
                </a>
              );
            })}
          </div>
        </section>

        {isCaseStudyPage && (
        <section className="case-study section" id="sales-lifecycle" aria-labelledby="sales-lifecycle-title">
          <div className="container">
            <div className="case-study__toolbar">
              <a href="/#projects" aria-label="Back to portfolio projects">
                <ArrowLeft size={20} weight="bold" aria-hidden="true" />
              </a>
            </div>
            <header className="case-study__hero">
              <div>
                <Eyebrow>( Product Case Study · Sales Operations )</Eyebrow>
                <h2 id="sales-lifecycle-title">
                  Sales<br />Lifecycle<span>.</span>
                </h2>
              </div>
              <div className="case-study__intro">
                <p>
                  From request to margin-controlled fulfilment: one lifecycle model
                  expressed through a fast mobile queue for field teams and a dense
                  operating surface for commercial and fulfilment teams.
                </p>
                <div className="case-study__meta">
                  <span>Role</span><strong>Lead Product Designer</strong>
                  <span>Surfaces</span><strong>PRO · Mobile / OS · Desktop</strong>
                  <span>Scope</span><strong>Discovery → Final Design</strong>
                </div>
              </div>
            </header>

            <figure className="case-study__lead-visual">
              <img
                src={osOverviewFinal}
                alt="Sales Order overview connecting purchase orders, agents, suppliers, warehouses, quantities, and margins"
                loading="eager"
              />
              <figcaption>
                Final operating model: order health connects commercial targets to
                purchase orders, procurement agents, suppliers, and warehouses.
              </figcaption>
            </figure>

            <div className="case-study__chapter">
              <Eyebrow>01 · Overview</Eyebrow>
              <h3>One order. Two operating contexts.</h3>
              <p>
                Sales Order sits between demand capture and operational execution.
                PRO users need quick status recognition and obvious next actions in
                the field. OS users need comparison, commercial control, ownership,
                approvals, and downstream traceability at scale.
              </p>
            </div>

            <div className="case-study__split">
              <article>
                <Eyebrow>02 · Problem</Eyebrow>
                <h3>The order was visible. The decision system was not.</h3>
                <p>
                  Status, price, margin, approval, procurement, and fulfilment were
                  interdependent, but each role needed a different level of detail.
                  A universal screen would either overwhelm mobile users or underserve
                  desktop operators.
                </p>
              </article>
              <article>
                <Eyebrow>03 · Goals</Eyebrow>
                <h3>Make the lifecycle legible and commercially accountable.</h3>
                <ul>
                  <li>Create one shared status model across PRO and OS.</li>
                  <li>Structure margin assessment before approval.</li>
                  <li>Expose ownership and the next responsible action.</li>
                  <li>Connect approved orders to fulfilment performance.</li>
                </ul>
              </article>
            </div>

            <div className="case-study__chapter">
              <Eyebrow>04 · Research / 05 · Insights</Eyebrow>
              <h3>Design evidence revealed where the workflow carried risk.</h3>
              <p>
                Screen and workflow synthesis identified five recurring needs:
                lifecycle state as navigation, margin as a multi-step workflow,
                persistent order context during commercial decisions, visible
                exception handling, and post-approval traceability.
              </p>
              <p className="case-study__note">
                Evidence boundary — no interview repository, analytics baseline, or
                production KPI set was supplied. Business impact below is framed as
                an expected outcome to validate, not a measured claim.
              </p>
            </div>

            <div className="case-study__screens case-study__screens--mobile">
              <figure>
                <img
                  src={proV1InReview}
                  alt="PRO v1 mobile sales order in-review queue"
                  loading="lazy"
                />
                <figcaption>PRO v1 — status-led mobile triage.</figcaption>
              </figure>
              <figure>
                <img
                  src={v2ProFinal}
                  alt="Final PRO mobile queue with requested-change exception"
                  loading="lazy"
                />
                <figcaption>Final PRO — exception visibility and explicit action.</figcaption>
              </figure>
            </div>

            <div className="case-study__chapter">
              <Eyebrow>06 · Information Architecture / 07 · User Flow</Eyebrow>
              <h3>A shared lifecycle became the product spine.</h3>
              <div className="lifecycle-flow" aria-label="Sales order lifecycle">
                {lifecycleStages.map(([number, title, description]) => (
                  <article key={number}>
                    <span>{number}</span>
                    <strong>{title}</strong>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="case-study__chapter">
              <Eyebrow>08 · Design Process</Eyebrow>
              <h3>From status visibility to operational control.</h3>
              <p>
                The design evolved in five moves: establish the mobile lifecycle,
                turn the desktop list into an operational queue, isolate the
                high-risk margin decision, extend visibility beyond approval, and
                align final PRO and OS semantics.
              </p>
            </div>

            <div className="case-study__screens">
              <figure>
                <img
                  src={osV1AddMargin}
                  alt="OS v1 sales order operational queue"
                  loading="lazy"
                />
                <figcaption>OS v1 — workload segmentation and row-level action.</figcaption>
              </figure>
              <figure>
                <img
                  src={osV2Journey}
                  alt="OS margin calculator with commercial order context"
                  loading="lazy"
                />
                <figcaption>OS v2 — structured margin allocation and validation.</figcaption>
              </figure>
            </div>

            <div className="case-study__chapter">
              <Eyebrow>09 · Final Solution / 10 · Screen Walkthrough</Eyebrow>
              <h3>Role-aware surfaces, shared commercial semantics.</h3>
              <div className="case-study__outcomes">
                <article>
                  <span>PRO</span>
                  <h4>Recognition before density.</h4>
                  <p>Search, lifecycle tabs, compact order cards, exception banners, and mobile-first actions.</p>
                </article>
                <article>
                  <span>OS</span>
                  <h4>Control before simplicity.</h4>
                  <p>Owner filters, dense comparison, margin inputs, approvals, mapped entities, and variance views.</p>
                </article>
                <article>
                  <span>Shared</span>
                  <h4>One source of operational truth.</h4>
                  <p>Consistent identity, status, quantity, commodity, ownership, and action language.</p>
                </article>
              </div>
            </div>

            <div className="case-study__split">
              <article>
                <Eyebrow>11 · Challenges</Eyebrow>
                <h3>The core trade-off was semantic consistency versus interface sameness.</h3>
                <p>
                  PRO and OS deliberately do not look identical. Consistency lives in
                  the lifecycle and object model; interaction density changes with role,
                  device, and decision risk.
                </p>
              </article>
              <article>
                <Eyebrow>12 · Results</Eyebrow>
                <h3>A capability outcome, pending metric validation.</h3>
                <p>
                  The final design creates structured margin review, explicit approval
                  and modification states, visible ownership, and entity-level
                  fulfilment traceability. Production impact still requires
                  instrumentation.
                </p>
              </article>
            </div>

            <div className="case-study__chapter case-study__future">
              <Eyebrow>13 · Future Opportunities</Eyebrow>
              <h3>Instrument the workflow before redesigning it again.</h3>
              <p>
                Next: decision history, margin-variance explanations, scenario
                comparison, risk-based prioritisation, cross-platform deep links,
                accessible data-density controls, and lifecycle KPI instrumentation.
              </p>
              <div className="case-study__actions">
                <ActionButton
                  secondary
                  href={salesOrderPdf}
                >
                  Read PDF
                </ActionButton>
                <ActionButton href="/#projects">Back to Projects</ActionButton>
              </div>
            </div>
          </div>
        </section>
        )}

        <section className="services container section" id="experience">
          <div className="services__intro">
            <Eyebrow>( Services )</Eyebrow>
            <h2>Service<br />Expertise<span>.</span></h2>
            <p>
              Four ways I show up on enterprise product teams. Each one starts with a
              point of leverage: architecture, workflows, operating models, or direction.
            </p>
            <ActionButton href="#work">See All Works</ActionButton>
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <button
                className={`service-row ${activeService === index ? "service-row--active" : ""}`}
                key={service.title}
                type="button"
                onClick={() => setActiveService(index)}
                onMouseEnter={() => setActiveService(index)}
              >
                <span className="service-row__number">0{index + 1}</span>
                <span className="service-row__copy">
                  <strong>{service.title}</strong>
                  <small>{service.description}</small>
                </span>
                <span className="service-row__action">
                  Discover <ArrowRight weight="bold" />
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="quote-section container section">
          <Eyebrow>( Testimonials )</Eyebrow>
          <span className="quote-section__mark" aria-hidden="true" />
          <blockquote>
            “Jai doesn&apos;t just design screens — he reshapes how the business runs.
            He translated a tangle of procurement, warehouse and finance flows into one
            coherent operating system. Our ops moved 70% faster within a quarter.”
          </blockquote>
          <div className="quote-section__author">
            <strong>Operations Lead</strong>
            <span>Founder · FarMart</span>
          </div>
        </section>

        <section className="notebook container section" id="writing">
          <div className="section-heading">
            <div>
              <Eyebrow>( Latest Articles )</Eyebrow>
              <h2>From The Notebook<span>.</span></h2>
            </div>
            <ActionButton secondary href="#writing">See All Articles</ActionButton>
          </div>
          <div className="note-grid">
            {notes.map((note) => (
              <a className="note-card" href="#contact" key={note.title}>
                <div className="note-card__visual">
                  <span className="project-card__icon" aria-hidden="true">
                    <ArrowUpRight weight="bold" />
                  </span>
                </div>
                <Eyebrow>{note.date}</Eyebrow>
                <h3>{note.title}</h3>
                <p className="note-card__type">{note.type}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer section" id="contact">
        <div className="container">
          <Eyebrow accent>( Let&apos;s Get Started )</Eyebrow>
          <h2>Let&apos;s<br className="mobile-break" /> Collaborate<span>.</span></h2>
          <div className="footer__grid">
            <div className="footer__intro">
              <div className="brand">jai<span>.</span></div>
              <p>
                Product Systems Designer. Enterprise platforms, supply chains, AI-native
                workflows.
              </p>
              <div className="footer__actions">
                <ActionButton secondary href="mailto:">Email</ActionButton>
                <ActionButton href="#top">Hire Me</ActionButton>
              </div>
            </div>
            <FooterColumn title="Pages" links={["Home", "About", "Work", "Projects"]} />
            <FooterColumn
              title="Inner Pages"
              links={["FarMartOS", "FarMart PRO", "FarMart App", "Writing"]}
            />
            <FooterColumn
              title="Connect"
              links={["Resume", "Experience", "Contact", "LinkedIn", "Read.cv"]}
            />
          </div>
          <div className="footer__legal">
            <span>© 2026 Jai Singh — Designed &amp; Built in Delhi NCR</span>
            <span>Systems · Not Screens</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">
      <Eyebrow>{title}</Eyebrow>
      {links.map((link) => (
        <a href={link === "Home" ? "#top" : `#${link.toLowerCase().replaceAll(" ", "-")}`} key={link}>
          {link}
        </a>
      ))}
    </div>
  );
}
