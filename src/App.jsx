import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  List,
  X,
} from "@phosphor-icons/react";

const projects = [
  {
    name: "FarMartOS",
    description: "An operating system for agri-commerce",
    category: "Enterprise OS",
    metric: "10 / 10",
    label: "Modules unified",
  },
  {
    name: "FarMart PRO",
    description: "Trading partner platform",
    category: "Procurement",
    metric: "00:42",
    label: "Onboarding · hrs",
  },
  {
    name: "FarMart App",
    description: "BahiKhata, SMS, onboarding",
    category: "Consumer · Bharat",
    metric: "250K+",
    label: "Operators reached",
  },
  {
    name: "Agent Loop",
    description: "Intent → Plan → Act → Verify",
    category: "AI Workflows",
    metric: "∞",
    label: "Skills · approvals",
  },
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

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <div className="site-shell">
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
              <h2>Selected Systems<span>.</span></h2>
            </div>
            <ActionButton secondary href="#projects">See All Works</ActionButton>
          </div>

          <div className="project-grid" id="projects">
            {projects.map((project) => (
              <a className="project-card" href="#contact" key={project.name}>
                <div className="project-card__header">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <Eyebrow>{project.category}</Eyebrow>
                </div>
                <div className="project-card__visual">
                  <div>
                    <strong>{project.metric}</strong>
                    <span>{project.label}</span>
                  </div>
                  <span className="project-card__icon" aria-hidden="true">
                    <ArrowUpRight weight="bold" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

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
