# Product Design Portfolio

Public-facing **product and feature design** work: narratives and interactive prototypes suitable for **job applications and recruiter review**. Private or employer-confidential codebases are **not** mirrored here—only material that is safe to share.

This repository currently holds **two** disclosed prototypes (below). Each folder is **self-contained**: one HTML entry file, **screenshots** for the root README preview, and a **project `README.md`** that describes the full target stack plus what is actually published in GitHub.

---

## Projects in this portfolio

| # | Project | Summary | Links |
|---|---------|---------|-------|
| 1 | **Architect Ledger — AI Bookkeeping** | **CPA-facing AI bookkeeping** (Next.js 15 + FastAPI + Celery + Postgres/pgvector + Redis + MinIO; n8n per v1.3 plan). Folder publishes **`prototype.html`** + screenshots only; project README documents the **private monorepo** layout. | [Open prototype](https://rayliu66.github.io/Product_Design_Protfolio/AI-accounting/prototype.html) · [`AI-accounting/README.md`](AI-accounting/README.md) |
| 2 | **Atelier Academy — K–12 Mastery Hub** | **AI-assisted K–12 learning**: dashboard, knowledge hub, quizzes, mastery reporting (target Next.js + FastAPI stack). Folder publishes **`index.html`** + screenshots only; project README documents the **target** architecture and illustrative monorepo layout. | [Open prototype](https://rayliu66.github.io/Product_Design_Protfolio/AI-edu-K12/index.html) · [`AI-edu-K12/README.md`](AI-edu-K12/README.md) |

**Convention for new projects:** add a folder under the repo root (e.g. `my-project/`) with `README.md`, `assets/screenshots/*.png`, and a single static **`index.html`** or **`prototype.html`**. Register it in the table above and in **How this repo is organized**. Enable **GitHub Pages** from `/` so the live URL is `https://rayliu66.github.io/Product_Design_Protfolio/<folder>/<entry>.html`.

---

## How this repo is organized

| Folder | Entry file | What it is |
|--------|------------|------------|
| [`AI-accounting/`](AI-accounting/) | `prototype.html` | Architect Ledger — bookkeeping / CPA workflows |
| [`AI-edu-K12/`](AI-edu-K12/) | `index.html` | Atelier Academy — K–12 mastery hub |

Optional per folder: `package.json` + `scripts/capture-all.mjs` + Playwright **devDependency** to regenerate screenshots (`npm run screenshots`); **`node_modules/`** is never committed (see root [`.gitignore`](.gitignore)).

---

## Viewing the HTML prototypes (important)

On GitHub, opening an HTML file from the **Code** tab shows **source**, not a running page. Use **GitHub Pages** or open the file locally.

| Project | Live prototype (GitHub Pages) |
|---------|-------------------------------|
| **1 · Architect Ledger** | [Open this prototype in the browser](https://rayliu66.github.io/Product_Design_Protfolio/AI-accounting/prototype.html) |
| **2 · Atelier Academy (K–12)** | [Open this prototype in the browser](https://rayliu66.github.io/Product_Design_Protfolio/AI-edu-K12/index.html) |

**Local:** clone the repo and open the HTML file in a browser, or from the repo root run `python3 -m http.server` and visit:

- `http://localhost:8000/AI-accounting/prototype.html`
- `http://localhost:8000/AI-edu-K12/index.html`

---

