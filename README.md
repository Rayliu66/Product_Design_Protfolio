# Product Design Portfolio

Public-facing **product and feature design** work: narratives and interactive prototypes suitable for **job applications and recruiter review**. Private or employer-confidential projects are **not** mirrored here—only material that is safe to share.

---

## Projects in this portfolio

| Project | Summary | Link |
|--------|---------|------|
| **Architect Ledger — AI Bookkeeping** | **CPA-facing AI bookkeeping** product (Next.js 15 + FastAPI + Celery + Postgres/pgvector + Redis + MinIO; n8n orchestration per v1.3 plan). This portfolio folder **only publishes** the **HTML prototype** plus screenshots—README documents the **full stack** and **private monorepo layout**. | [`AI-accounting/README.md`](AI-accounting/README.md) |

*Add new rows as you publish additional case studies or demos.*

---

## How this repo is organized

- **`AI-accounting/`** — Architect Ledger **public disclosure**: interactive `prototype.html`, screenshots, and README (full product stack + prototype-only scope).
- **Future folders** — e.g. `project-name/` with its own `README.md`, assets, and optional `docs/`.

---

## Viewing the HTML prototype (important)

On GitHub, opening a file such as `AI-accounting/prototype.html` in the **Code** tab shows the **HTML source** in the browser. That is normal: GitHub is a code viewer, not a static host for arbitrary HTML execution from the blob UI.

**Ways to see the real, clickable prototype:**

1. **GitHub Pages (best for recruiters—one stable URL)**  
   In the repo on GitHub: **Settings → Pages → Build and deployment → Source** → deploy from **`main`** (or your default branch) with folder **`/` (root)**. After the site is published, the prototype is typically at:

   `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/AI-accounting/prototype.html`

   Replace `YOUR_GITHUB_USERNAME` and `YOUR_REPO_NAME` with your account and repository name. Put that URL on your resume or LinkedIn.

2. **Local (always works)**  
   Clone the repo, then open `AI-accounting/prototype.html` in Chrome, Edge, Safari, or Firefox (double-click the file, or use **File → Open**). Optional: from the repo root run `python3 -m http.server` and visit `http://localhost:8000/AI-accounting/prototype.html`.

More detail is in [`AI-accounting/README.md`](AI-accounting/README.md).

---

## Contact

Use the contact method you prefer on your resume or LinkedIn; keep this README free of personal email if you use the repo URL publicly.
