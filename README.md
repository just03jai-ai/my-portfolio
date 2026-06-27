# Jai Singh — Product Systems Portfolio

A responsive React portfolio presenting product systems, enterprise design work, and detailed product case studies.

The interface follows the layout and visual direction of Figma frame `2018:1349` in file `teapCPPJVF6okkkP9mTbUO`.

## Portfolio Structure

- `/` — main portfolio landing page
- `/sales-lifecycle` — Sales Lifecycle product case study
- `src/App.jsx` — page content, project data, and route-specific rendering
- `src/styles.css` — responsive visual system and component styles
- `Case Study/SO Lifecycle/` — Sales Order case-study sources, assets, documents, and QA evidence

## Quick Start

### Prerequisites

- Node.js
- npm

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:5173/
```

The Sales Lifecycle case study is available at:

```text
http://127.0.0.1:5173/sales-lifecycle
```

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the build locally:

```bash
npm run preview
```

The generated site is written to `dist/`.

## Sales Lifecycle Case Study

All Sales Order material is consolidated under:

```text
Case Study/
└── SO Lifecycle/
    ├── assets/       # Images imported by the portfolio
    ├── documents/    # Publication PDF generated from the portfolio route
    ├── source/       # Legacy standalone HTML source
    ├── scripts/      # Document-generation utilities
    ├── qa/           # Visual QA captures
    └── archive/      # Duplicate historical source files
```

The portfolio imports its images and downloadable PDF directly from this folder. Moving or renaming these files requires updating the imports in `src/App.jsx`.

## Case-Study Document

The PDF is the publication and browser-readable version of the case study. It is generated from the current `/sales-lifecycle` portfolio route so its content and visuals stay aligned with the web case study:

```text
Case Study/SO Lifecycle/documents/Sales-Order-Case-Study.pdf
```

The DOCX is not required by the website or production build and is no longer part of the active case-study documents. The PDF should remain because the case-study page links to it.

## Deployment Note

The portfolio uses the client-side route `/sales-lifecycle`. Configure the hosting provider to return `index.html` for unknown paths so direct visits and page refreshes on that route work correctly.

## Technology

- React 19
- Vite 6
- Phosphor Icons
- Plain CSS
- Playwright for browser validation
