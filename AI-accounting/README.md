# Architect Ledger — AI Bookkeeping (interactive prototype)

**Architect Ledger** is a portfolio concept for an **AI-assisted bookkeeping** product aimed at accounting firms: a dashboard for **human-in-the-loop (HITL)** review, **client engagements**, and **multi-phase workflows** (onboarding through year-end). This folder contains a **clickable high-fidelity HTML prototype**—no backend—used to communicate layout, flows, and design intent.

**Related product / MVP notes (Notion):** [MVP version — implementation page](https://www.notion.so/MVP-version-implementation-page-34c8d41a5cff80fb855ff9f5cd4c57ca?source=copy_link)

---

## What’s in the prototype

| Area | Description |
|------|-------------|
| **Auth** | Email capture → 6-digit verification UI (passwordless-style flow; demo only). |
| **Dashboard** | Action cards (reviews, year-end, discrepancies, onboarding, audit), filter pills, KPI-style “efficiency” strip, engagement table. |
| **Tasks** | Workflow log with filters (workflow type, category, **phase**, status), sortable table, export CTA. |
| **Workflow detail** | **Phase progress** (onboarding → platform setup → bank statements → transactions → year-end), expandable phase panels, **agent vs human** task rows. |
| **HITL panel** | Slide-over review surface: agent output, file list, upload zone, approve/reject style actions (UI only). |
| **Clients** | Directory, **client detail** with tabs, stats, and firm-facing settings patterns. |
| **Settings** | Firm profile and preferences-style forms. |
| **Shell** | Collapsible sidebar, sticky top bar, breadcrumbs, toasts, modals, responsive breakpoints. |

Design themes: **trust** (institutional blues, clear hierarchy), **ops density** (tables, badges, phases), and **AI + human** collaboration surfaced explicitly in the workflow UI.

---

## Technical stack

| Layer | Choice |
|--------|--------|
| **Delivery** | Single static file: [`prototype.html`](prototype.html) — open in any modern browser; optional local static server for strict file policies. |
| **Markup** | HTML5 (`<section>` for login states, app shell with `<aside>` + main content regions). |
| **Styling** | **Vanilla CSS**: custom properties (`:root` design tokens: color, spacing, radii, shadows), **Flexbox** and **CSS Grid**, component-scoped class naming, **`@media`** breakpoints (1024px / 768px) for sidebar and grids. |
| **Typography** | [**Inter**](https://fonts.google.com/specimen/Inter) via Google Fonts (`font-display`-friendly link). |
| **Behavior** | **Vanilla JavaScript** (e.g. `navigateTo`, `toggleSidebar`, dashboard filters)—no React/Vue build step. |
| **Icons** | Inline **SVG** (stroke-based) for crisp scaling and no icon-font dependency. |
| **Data** | Hard-coded demo content only; **no API**, no persistence, no analytics SDK in this artifact. |

**Not used (by design, for this artifact):** npm bundlers, TypeScript, CSS frameworks, component libraries—keeps the prototype easy to host (e.g. GitHub Pages) and fast for reviewers to open.

---

## How to view

**Do not rely on the GitHub “Code” file view** for `prototype.html`: GitHub displays the file as **source text**, not as a rendered web app.

**Option A — GitHub Pages (shareable link for recruiters)**  
Enable [GitHub Pages](https://docs.github.com/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) on this repository (source: your default branch, folder `/` root). Then open:

`https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/AI-accounting/prototype.html`

Substitute your GitHub username and repo name. That URL is the one to paste on a resume or in a portfolio.

**Option B — Local**  
1. Clone or download the repository.  
2. Open `prototype.html` in **Chrome, Edge, Safari, or Firefox** (double-click the file, or **File → Open** from the browser).  
3. Optional: from the repository root, run `python3 -m http.server 8000` and visit `http://localhost:8000/AI-accounting/prototype.html`.

**Demo flow:** **Send verification code** → **Verify Identity** (demo only) → explore **Dashboard**, **Tasks**, **Clients**, **Settings**, and open a **workflow** row for the HITL panel.

---

## Scope and disclaimer

This is a **design and UX demonstration** for a product-design portfolio. Firm names, metrics, and documents are **fictional**. It is **not** financial, legal, or tax advice, and it is **not** a production security implementation (e.g. real OTP would require a server and threat modeling).

---

## Repository location

This project lives under the parent portfolio:

`Product_Design_Protfolio/AI-accounting/`

See the root [`README.md`](../README.md) for the full portfolio index.
