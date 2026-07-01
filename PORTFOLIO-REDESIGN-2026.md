# Portfolio 2026 — Product Systems Designer & AI Product Architect

Status: Creative direction and implementation blueprint
Target stack: Next.js, React, Framer Motion
Primary audience: Product, design, engineering, and company leadership hiring for senior product systems and AI product roles

## Evidence Policy

The redesign must distinguish evidence from positioning.

- **Verified evidence:** Product screens, workflows, artifacts, architecture diagrams, shipped interfaces, and documented decisions.
- **Existing claim — verify:** `8+ years`, `10+ enterprise modules`, `250+ active operators`, `+72% workflow throughput`, `70% faster operations`, and testimonial attribution.
- **Proposal:** New copy, interaction concepts, layouts, narrative sequencing, and future-facing positioning.
- **Rule:** No metric, quotation, revenue claim, adoption number, or company outcome ships without a source and owner.

---

## Creative Direction

### Core idea: The Operating Manual

The portfolio behaves like an operating manual for complex products rather than a gallery of screens. It reveals how Jai models businesses, defines objects and permissions, orchestrates human and AI decisions, and measures operational outcomes.

The visual metaphor combines:

- an editorial report;
- a system map;
- an operations console;
- an annotated architecture notebook.

This creates a distinctive identity without imitating any single reference company.

### Positioning statement

> I design the operating systems behind complex businesses — and the AI agents that make them run.

Supporting line:

> Product systems, enterprise workflows, and human-in-the-loop AI for supply chains, operations, and high-stakes decisions.

### Narrative promise

Within 30 seconds, a visitor should understand:

1. Jai is not a UI production designer.
2. He works on complex operational systems.
3. His work connects product decisions to measurable business outcomes.
4. He can design AI-native workflows, not just add chat interfaces.
5. At least one case study contains enough proof to inspect deeply.

---

# 1. Complete Information Architecture

## Primary navigation

1. Impact
2. Systems
3. Case Studies
4. AI Architecture
5. Thinking
6. Notes
7. Contact

Persistent utility:

- Theme control: light / dark / system
- Availability status
- Resume
- Skip to content

## Route architecture

```text
/
├── #impact
├── #systems
├── #case-studies
├── #ai-architecture
├── #frameworks
├── #notes
├── #testimonials
├── #current-focus
└── #contact

/work/sales-lifecycle
/work/[future-case-study]
/systems/farmart-os
/thinking/[slug]
/notes/[slug]
/about
/resume
```

## Home-page content model

### 1. Hero

Content:

- Positioning statement
- One-sentence domain definition
- Featured Work CTA
- Design Philosophy CTA
- Three animated proof indicators
- Small availability and location metadata

Design:

- 12-column asymmetric composition
- Headline occupies columns 1–9
- Proof rail occupies columns 10–12
- System map appears as a low-contrast animated field behind the headline
- No generic portrait above the fold

Why it strengthens the portfolio:

- The role is understood before the visitor sees a project.
- Proof and positioning appear together.
- The first screen communicates systems thinking through structure, not decoration.

### 2. Selected Impact

Content:

- Operational speed
- Adoption or active operators
- Enterprise scope
- Revenue, cost, risk, or throughput improvement

Design:

- Four oversized metric statements, not four identical cards
- Alternating typographic alignment
- Each metric includes scope, date range, source label, and related project link

Why:

- Context prevents vanity metrics.
- Project links convert claims into inspectable evidence.
- Asymmetry creates editorial rhythm.

Required content schema:

```ts
type ImpactMetric = {
  value: string;
  label: string;
  context: string;
  period: string;
  sourceStatus: "verified" | "verify";
  relatedWorkHref: string;
};
```

### 3. Operating Systems

Group work by business system:

- Commerce OS
- Procurement & Supply
- Warehouse & Fulfilment
- Finance & Risk
- Partner Experience
- AI Operations

Each system shows:

- Business objective
- Actors
- Core objects
- Decisions
- Workflow
- Outcome
- Products and modules

Design:

- Horizontal system index with sticky labels
- Alternating architecture diagram and narrative block
- Hover or focus reveals connected actors and objects
- Mobile converts the system graph into a vertical dependency list

Why:

- This reframes projects as parts of a coherent operating model.
- Hiring teams see architecture and product breadth.
- Grouping by business system supports future portfolio growth.

### 4. Featured Case Studies

Card anatomy:

- Problem
- Constraints
- System decision
- Role
- Time horizon
- Outcome
- Proof status
- Live screen preview

Featured order:

1. Sales Lifecycle
2. FarMart OS foundation
3. AI Agent Loop

Design:

- One dominant case study followed by two smaller studies
- Editorial cards use 7/5 and 5/7 splits
- Screen previews scrub through states on pointer movement
- Keyboard focus exposes the same preview states

Why:

- The visitor sees decisions and results before screenshots.
- Different card proportions create hierarchy.
- Live previews make the work feel operational rather than static.

### 5. AI Product Architecture

Subsections:

- Intent → Plan → Act → Verify
- Agent permissions
- Human approval gates
- Tool and skill selection
- Memory and context boundaries
- Observability and evaluation
- Failure recovery

Design:

- Interactive orchestration graph
- Selecting a node updates an adjacent decision log
- Failure path is visible, not hidden
- Reduced-motion mode presents a static sequence

Why:

- It demonstrates architectural literacy.
- It avoids positioning AI as a chatbot skin.
- Showing failure and governance builds credibility.

### 6. Frameworks & Thinking

Recommended frameworks:

1. Object → State → Actor → Decision
2. Workflow Load Map
3. Human / Agent Responsibility Matrix
4. Progressive Operational Disclosure
5. Evidence Before Automation
6. Exception-First Enterprise UX

Design:

- Framework cards open into compact diagrams
- Each framework includes “Use when,” “Avoid when,” and a real example
- Downloadable one-page summaries can be added later

Why:

- Reusable frameworks demonstrate repeatable judgment.
- “Avoid when” prevents the content from reading like generic thought leadership.

### 7. Operating Notes

Categories:

- AI Product Architecture
- Enterprise UX
- Product Strategy
- Systems Design
- Field Notes

Design:

- Editorial index rather than blog-card grid
- Featured note gets a full-width abstract
- Remaining notes use title, thesis, reading time, and category

Why:

- A text-first index gives writing appropriate authority.
- Thesis previews help visitors choose by idea rather than date.

### 8. Testimonials

Group by role:

- Founder / executive
- Product
- Engineering
- Operations
- Design

Design:

- One quote visible at a time
- Role tabs change the quotation
- Attribution, relationship, and project context remain visible
- No auto-rotating carousel

Why:

- Role grouping shows cross-functional influence.
- Manual navigation is more accessible and credible.

### 9. Current Focus

Content:

- Building
- Experiments
- Research
- Reading
- Speaking

Design:

- Live status board with update dates
- Short entries with evidence links
- Stale items automatically move to archive in the future CMS model

Why:

- It makes the portfolio feel active.
- Dates prevent “current” from becoming permanent marketing copy.

### 10. Contact

Closing statement:

> If the product is operationally complex, organizationally messy, or newly possible because of AI, that is where I do my best work.

Actions:

- Start a conversation
- View resume
- LinkedIn
- Read.cv

Design:

- Oversized closing statement
- Cursor proximity subtly shifts an underlying system field
- Contact controls remain static under reduced motion

Why:

- The ending restates the positioning rather than using a generic “Let’s work together.”

---

# 2. Desktop Wireframes

## Desktop — home, 1440px

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ jai.        Impact  Systems  Case Studies  AI  Thinking  Notes     Available│
├──────────────────────────────────────────────────────────────────────────────┤
│  PRODUCT SYSTEMS DESIGNER                              PROOF RAIL             │
│                                                                              │
│  I DESIGN THE OPERATING                                08+ years [verify]    │
│  SYSTEMS BEHIND COMPLEX                               10+ modules [verify]  │
│  BUSINESSES — AND THE AI                              250+ users [verify]   │
│  AGENTS THAT MAKE THEM RUN.                                                  │
│                                                                              │
│  [Explore featured work →]  [Design philosophy]       animated system field │
├──────────────────────────────────────────────────────────────────────────────┤
│ SELECTED IMPACT                                                             │
│                                                                              │
│     +72%                    10+ modules                 250+ operators         │
│     workflow throughput    one operating model         active adoption       │
│     source / period        source / period             source / period       │
├──────────────────────────────────────────────────────────────────────────────┤
│ OPERATING SYSTEMS                sticky system index                         │
│                                                                              │
│ Commerce OS      [actor/object/workflow architecture diagram]                │
│                  Objective / decisions / outcome                             │
│                                                                              │
│ Procurement      Objective / decisions / outcome    [architecture diagram]   │
├──────────────────────────────────────────────────────────────────────────────┤
│ FEATURED CASE STUDIES                                                       │
│                                                                              │
│ ┌──────────────────────────────────────┬───────────────────────────────────┐ │
│ │ Sales Lifecycle                     │ live workflow preview             │ │
│ │ Problem / constraint / decision     │ request → margin → approval       │ │
│ │ Impact / role / proof status        │ → fulfilment                      │ │
│ └──────────────────────────────────────┴───────────────────────────────────┘ │
│ ┌───────────────────────────┐  ┌─────────────────────────────────────────┐  │
│ │ FarMart OS                │  │ Agent Loop                              │  │
│ └───────────────────────────┘  └─────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────────────────────────────┤
│ AI PRODUCT ARCHITECTURE                                                     │
│ [orchestration graph]                 [selected node decision log]           │
├──────────────────────────────────────────────────────────────────────────────┤
│ FRAMEWORKS & THINKING                                                       │
│ 01 Object-State-Actor-Decision    02 Workflow Load Map    03 H/A Matrix      │
├──────────────────────────────────────────────────────────────────────────────┤
│ OPERATING NOTES                                                             │
│ Featured thesis                                  Notes index                 │
├──────────────────────────────────────────────────────────────────────────────┤
│ TESTIMONIALS        Founder | Product | Engineering | Operations | Design    │
│ “Contextual quotation…”                                     Attribution      │
├──────────────────────────────────────────────────────────────────────────────┤
│ CURRENT FOCUS              Building / Experiments / Research / Reading       │
├──────────────────────────────────────────────────────────────────────────────┤
│ IF THE PRODUCT IS OPERATIONALLY COMPLEX…                                    │
│ [Start a conversation] [Resume]                              Delhi NCR       │
└──────────────────────────────────────────────────────────────────────────────┘
```

## Desktop — case-study route

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ [←]  CASE STUDY  /  SALES LIFECYCLE                         01 / 06 chapters │
├──────────────────────────────────────────────────────────────────────────────┤
│ Sales Lifecycle                     Outcome summary / role / timeframe        │
│ Request to margin-controlled fulfilment                                      │
├──────────────────────────────────────────────────────────────────────────────┤
│ [full-width product evidence]                                                │
├───────────────────────────────┬──────────────────────────────────────────────┤
│ Sticky chapter navigation     │ Problem / evidence / decisions / trade-offs  │
│ 01 Context                    │                                              │
│ 02 Model                      │ Architecture and workflow diagrams           │
│ 03 Decisions                  │                                              │
│ 04 Final system               │ Screen evidence with annotations             │
│ 05 Impact                     │                                              │
│ 06 Next                       │ Results and proof status                      │
└───────────────────────────────┴──────────────────────────────────────────────┘
```

---

# 3. Mobile Wireframes

## Mobile — home, 390px

```text
┌─────────────────────────────┐
│ jai.                   [≡]  │
├─────────────────────────────┤
│ PRODUCT SYSTEMS DESIGNER    │
│                             │
│ I DESIGN THE               │
│ OPERATING SYSTEMS          │
│ BEHIND COMPLEX             │
│ BUSINESSES — AND THE       │
│ AI AGENTS THAT MAKE        │
│ THEM RUN.                  │
│                             │
│ [Featured work →]          │
│ [Design philosophy]        │
│                             │
│ 08+  / 10+ / 250+          │
├─────────────────────────────┤
│ SELECTED IMPACT             │
│ +72%                        │
│ explanation / source        │
│                             │
│ 10+ modules                 │
│ explanation / source        │
├─────────────────────────────┤
│ OPERATING SYSTEMS           │
│ [Commerce OS]               │
│ vertical dependency map     │
│ actors → objects → decisions│
├─────────────────────────────┤
│ FEATURED CASE STUDY         │
│ Sales Lifecycle             │
│ problem / decision / impact │
│ [interactive preview]       │
│ [Read case study →]         │
├─────────────────────────────┤
│ AI ARCHITECTURE             │
│ Intent                      │
│   ↓                         │
│ Plan                        │
│   ↓ approval                │
│ Act                         │
│   ↓                         │
│ Verify                      │
├─────────────────────────────┤
│ FRAMEWORKS                  │
│ [01] [02] [03] horizontal  │
├─────────────────────────────┤
│ NOTES / TESTIMONIALS        │
├─────────────────────────────┤
│ CURRENT FOCUS               │
├─────────────────────────────┤
│ IF THE PRODUCT IS…          │
│ [Contact]                   │
└─────────────────────────────┘
```

## Mobile interaction rules

- No horizontal-scroll requirement for core content.
- Horizontal carousels are optional enhancements only; every item remains reachable in a vertical fallback.
- Sticky navigation collapses to brand, availability indicator, and menu.
- Case-study chapter navigation becomes a compact progress control.
- Diagrams become ordered dependency lists rather than scaled-down desktop canvases.

---

# 4. Component Hierarchy

```text
AppShell
├── AccessibilityControls
│   ├── SkipLink
│   ├── ThemeControl
│   └── ReducedMotionAdapter
├── SiteHeader
│   ├── Brand
│   ├── PrimaryNavigation
│   ├── AvailabilityStatus
│   └── MobileMenu
├── HomePage
│   ├── Hero
│   │   ├── PositioningStatement
│   │   ├── ProofRail
│   │   ├── HeroActions
│   │   └── SystemField
│   ├── ImpactSection
│   │   └── ImpactMetric[]
│   ├── OperatingSystemsSection
│   │   ├── SystemIndex
│   │   └── OperatingSystemStory[]
│   │       ├── ArchitectureDiagram
│   │       ├── WorkflowSummary
│   │       └── OutcomeSummary
│   ├── FeaturedCaseStudies
│   │   └── EditorialCaseStudyCard[]
│   │       └── LivePreview
│   ├── AIArchitectureSection
│   │   ├── OrchestrationGraph
│   │   └── DecisionLog
│   ├── FrameworksSection
│   │   └── FrameworkDisclosure[]
│   ├── OperatingNotes
│   │   ├── FeaturedNote
│   │   └── NoteIndex
│   ├── Testimonials
│   │   ├── RoleTabs
│   │   └── TestimonialPanel
│   ├── CurrentFocus
│   │   └── FocusColumn[]
│   └── ContactSection
├── CaseStudyPage
│   ├── CaseStudyHeader
│   ├── ChapterNavigation
│   ├── EvidenceFigure
│   ├── DecisionRecord
│   ├── TradeoffMatrix
│   ├── OutcomeEvidence
│   └── NextCaseStudy
└── SiteFooter
```

## Data boundaries

- Content belongs in typed data or MDX, not embedded in visual components.
- Metrics include evidence status.
- Testimonials include role and project context.
- Case studies use a shared chapter schema.
- Diagram nodes and edges are data-driven.

---

# 5. Motion Specifications

## Motion principles

1. Motion explains hierarchy, sequence, or causality.
2. Motion never delays access to content.
3. Every animation has a reduced-motion equivalent.
4. No infinite decorative animation near reading content.
5. Use transforms and opacity; avoid layout-triggering animation.

## Motion tokens

```ts
const motion = {
  duration: {
    instant: 0.12,
    fast: 0.2,
    standard: 0.36,
    narrative: 0.7,
    chapter: 1.0,
  },
  ease: {
    enter: [0.16, 1, 0.3, 1],
    exit: [0.7, 0, 0.84, 0],
    standard: [0.22, 1, 0.36, 1],
  },
  distance: {
    small: 8,
    medium: 20,
    large: 48,
  },
};
```

## Interaction motion

### Hero

- Positioning statement reveals by semantic line, not character.
- Duration: 700ms per line.
- Stagger: 80ms.
- Proof metrics count only after entering the viewport.
- Count duration: 900ms maximum.
- Reduced motion: final state renders immediately.

### Operating system diagrams

- Nodes appear in dependency order.
- Connected edge highlights follow focus and hover.
- Maximum transition: 240ms.
- No autonomous graph movement.

### Case-study previews

- Pointer movement selects discrete workflow states.
- Crossfade plus 8px translation.
- Duration: 200ms.
- Keyboard arrow keys move between preview states.
- Screen-reader text announces the selected state.

### Section transitions

- Use opacity plus 20px vertical translation.
- Trigger once at 20% viewport intersection.
- Do not animate every paragraph independently.

### Navigation

- Active section indicator uses shared-layout animation.
- Mobile menu opens in 280ms with staggered links.
- Focus moves into the menu on open and returns to trigger on close.

---

# 6. Scroll Narrative

| Scroll phase | Visitor question | Portfolio response |
|---|---|---|
| 0–10% | Who is this designer? | Product Systems Designer and AI Product Architect |
| 10–20% | Is there proof? | Contextualized impact metrics |
| 20–38% | What kind of complexity? | Business operating systems and architectures |
| 38–55% | Can I inspect the work? | Rich case studies with constraints and decisions |
| 55–68% | Is the AI positioning credible? | Agent architecture, governance, and evaluation |
| 68–78% | Is the thinking repeatable? | Frameworks and mental models |
| 78–86% | Can this person communicate? | Operating notes and original theses |
| 86–93% | Can they influence teams? | Role-categorized testimonials |
| 93–97% | What are they doing now? | Current focus |
| 97–100% | Should we talk? | Memorable positioning-led contact close |

## Rhythm

- Dense proof section follows expressive hero.
- Diagram-led system section follows metric-led impact.
- Image-heavy case studies follow architecture content.
- Text-led frameworks and notes slow the pace.
- Testimonials provide social proof before the final active-status section.

---

# 7. Interaction Guidelines

## Navigation

- Navigation labels describe content, not organizational categories.
- Current section is announced with `aria-current`.
- Deep links work without JavaScript.
- Case studies use real routes.

## Cards

- The full card is clickable.
- Internal controls never nest inside the card link.
- Hover states have focus-visible equivalents.
- Preview content is not required to understand the card.

## Diagrams

- Every diagram includes an equivalent ordered text explanation.
- Nodes are buttons only when they change adjacent content.
- Selection and focus states are visually distinct.

## Metrics

- Values never animate from misleading negative or random values.
- Context and source status remain visible.
- Tooltips supplement rather than contain essential information.

## Writing

- Lead with decisions and consequences.
- Screenshots support claims; they do not replace explanation.
- Avoid “I collaborated” without naming the decision or contribution.

## Contact

- Email link remains visible without opening a modal.
- Copy-email interaction confirms success in a live region.
- Social links state destination and open behavior.

---

# 8. Visual Design System

## Visual character

Editorial precision + operational intelligence.

Avoid:

- glassmorphism;
- excessive gradients;
- floating 3D objects without narrative meaning;
- generic bento grids;
- terminal cosplay;
- neon AI aesthetics;
- auto-playing background video.

## Color

### Dark theme

```css
--canvas: #0a0b0c;
--surface-1: #111315;
--surface-2: #171a1d;
--ink-1: #f4f1ea;
--ink-2: #b6b8b6;
--ink-3: #737875;
--line: #2a2e31;
--accent: #ff6b1a;
--accent-soft: #3b2115;
--signal-green: #45b97c;
--signal-amber: #d7a33d;
--signal-red: #d95f59;
```

### Light theme

```css
--canvas: #f2f1ec;
--surface-1: #faf9f5;
--surface-2: #e8e8e2;
--ink-1: #111315;
--ink-2: #4e5553;
--ink-3: #777d7a;
--line: #c9ccca;
--accent: #e85f12;
--accent-soft: #f4d9c8;
```

## Typography

Recommended licensed/open alternatives:

- Display: `Instrument Sans` or `Archivo Black` for decisive system statements
- Editorial serif accent: `Newsreader`
- UI/body: `Inter`
- Data/labels: `IBM Plex Mono`

Scale:

```css
--type-display-xl: clamp(4rem, 10vw, 9.5rem);
--type-display-lg: clamp(3.25rem, 7vw, 7rem);
--type-h1: clamp(2.75rem, 5vw, 5rem);
--type-h2: clamp(2rem, 3.5vw, 3.75rem);
--type-h3: clamp(1.5rem, 2vw, 2.25rem);
--type-body-lg: clamp(1.125rem, 1.4vw, 1.4rem);
--type-body: 1rem;
--type-label: 0.72rem;
```

Rules:

- Display text uses tight tracking and 0.9–1.0 line height.
- Body measure stays between 55 and 72 characters.
- Serif is limited to theses, quotations, and editorial transitions.
- Data labels use tabular numbers.

## Grid

- Desktop: 12 columns, 24px gutters, 48px outer margin, 1440px maximum canvas
- Tablet: 8 columns, 20px gutters, 32px outer margin
- Mobile: 4 columns, 16px gutters, 16px outer margin

## Spacing

Base unit: 4px.

```text
4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192
```

Section spacing:

- Desktop: 128–192px
- Tablet: 96–128px
- Mobile: 72–96px

## Borders and radius

- Borders communicate grouping and hierarchy.
- Default border: 1px.
- Radius: 4px controls, 8px cards, 12px large media.
- Avoid pill shapes except status labels.

## Imagery

- Product evidence is the primary imagery.
- Use annotated crops rather than unreadable full-screen thumbnails.
- Architecture diagrams use consistent node and edge grammar.
- Portrait photography, if added, appears after proof rather than in the hero.

---

# 9. Accessibility Checklist

## Structure

- [ ] One `h1` per route
- [ ] Heading levels remain sequential
- [ ] Landmark regions are named
- [ ] Skip link targets main content
- [ ] Case-study chapters use meaningful section headings

## Keyboard

- [ ] Every interaction is keyboard operable
- [ ] Visible focus meets 3:1 contrast
- [ ] Mobile menu traps focus appropriately
- [ ] Escape closes overlays
- [ ] Focus returns to the invoking control
- [ ] Live previews support arrow keys

## Motion

- [ ] `prefers-reduced-motion` disables nonessential movement
- [ ] No flashing content
- [ ] No scroll-jacking
- [ ] No content is hidden until animation completion
- [ ] Metrics remain understandable without counting animation

## Visual

- [ ] Body text meets 4.5:1 contrast
- [ ] Large text meets 3:1 contrast
- [ ] Interactive boundaries remain visible in both themes
- [ ] Status never relies on color alone
- [ ] Zoom to 200% produces no clipped content

## Media and diagrams

- [ ] Product screenshots have meaningful alt text
- [ ] Decorative images use empty alt text
- [ ] Diagrams have text equivalents
- [ ] Captions explain relevance rather than repeat titles

## Content

- [ ] Link text describes destination
- [ ] Dates and time periods are explicit
- [ ] Testimonials include role and relationship
- [ ] Metrics include context and evidence state
- [ ] Acronyms are expanded on first use

## Testing

- [ ] axe automated audit
- [ ] Lighthouse accessibility audit
- [ ] VoiceOver Safari test
- [ ] NVDA Chrome test
- [ ] Keyboard-only complete journey
- [ ] Reduced-motion test
- [ ] High-contrast mode test

---

# 10. Phased Implementation Roadmap

## Phase 0 — Evidence and content audit

Duration: 2–4 days

Deliverables:

- Verify every metric and testimonial.
- Identify three flagship systems.
- Define contribution and role for each case study.
- Collect architecture diagrams and workflow evidence.
- Convert current hard-coded content into a content inventory.

Exit criteria:

- No unowned metric.
- At least one complete case study.
- Approved positioning statement.

## Phase 1 — Next.js foundation

Duration: 2–3 days

Deliverables:

- Migrate Vite React to Next.js App Router.
- Establish route groups for work, systems, notes, and thinking.
- Add TypeScript.
- Add MDX or typed content files.
- Configure fonts, metadata, sitemap, Open Graph, and analytics boundary.
- Add light, dark, and system themes.

Exit criteria:

- Static routes build successfully.
- Direct case-study URLs work in production.
- Lighthouse baseline recorded.

## Phase 2 — Design-system primitives

Duration: 3–5 days

Deliverables:

- Tokens for color, type, space, grid, motion, and radius.
- Layout primitives.
- Accessible link, button, tabs, disclosure, and navigation components.
- Evidence figure and metric components.
- Storybook or isolated component previews.

Exit criteria:

- Keyboard and theme behavior verified.
- Components pass axe checks.

## Phase 3 — Home narrative

Duration: 5–8 days

Deliverables:

- Hero
- Selected Impact
- Operating Systems
- Featured Case Studies
- AI Product Architecture
- Frameworks
- Notes
- Testimonials
- Current Focus
- Contact

Exit criteria:

- 30-second comprehension test with five reviewers.
- Mobile and desktop storytelling approved.

## Phase 4 — Case-study system

Duration: 4–7 days per flagship case study

Deliverables:

- Shared MDX case-study schema.
- Sticky chapter navigation.
- Evidence figures.
- Decision records.
- Trade-off matrices.
- Outcome evidence.
- PDF export strategy.

Exit criteria:

- Sales Lifecycle migrated first.
- PDF and web content come from one content source.

## Phase 5 — Framer Motion layer

Duration: 3–5 days

Deliverables:

- Hero reveal
- Metric activation
- Active navigation
- Diagram highlighting
- Case-study preview transitions
- Mobile menu
- Reduced-motion variants

Exit criteria:

- No animation blocks content.
- Reduced-motion journey is complete.
- Performance remains within budget.

## Phase 6 — Performance and accessibility

Duration: 3–5 days

Targets:

- LCP ≤ 2.5s on mid-tier mobile
- CLS ≤ 0.1
- INP ≤ 200ms
- Lighthouse performance ≥ 90
- Lighthouse accessibility ≥ 95

Actions:

- Use `next/image` for product media.
- Preload only critical fonts.
- Lazy-load diagrams and noncritical motion.
- Avoid client components unless interaction requires them.
- Run automated and manual accessibility testing.

## Phase 7 — Content operations and launch

Duration: 2–4 days

Deliverables:

- Final copy edit
- Metric verification
- Social cards
- Analytics events
- Error and 404 routes
- Deployment redirects
- Domain and SEO checks

Launch gate:

- Every claim has evidence.
- Every route works without client navigation.
- No accessibility P0/P1 issues.
- No placeholder case study links.

---

# Recommended Build Order

1. Evidence audit
2. Positioning and copy
3. Content schema
4. Design tokens
5. Hero and Impact
6. Operating Systems
7. Sales Lifecycle migration
8. AI Architecture
9. Frameworks and Notes
10. Testimonials and Current Focus
11. Motion
12. Accessibility and performance

# What Not to Build Yet

- A CMS before the content schema stabilizes
- Multiple incomplete case studies
- 3D/WebGL decoration
- Autonomous animation
- A custom cursor
- A command palette without real utility
- Fabricated revenue or adoption claims
- An AI chatbot whose only purpose is portfolio novelty

# First Implementation Decision

Start with Phase 0, not the hero animation.

The current site already has a strong visual shell. The largest gap is not polish; it is proof architecture. The redesign succeeds when business systems, decisions, and outcomes become easier to inspect than the interface styling.
