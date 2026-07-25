# cmo-porfolio — AI Guide

**What it is:** Personal portfolio site for César Muñoz Ocampo — a single-page React app that
showcases projects, experience and contact. Deployed to GitHub Pages.

## Stack

| Tool | Version | Notes |
|---|---|---|
| React | 19 | function components + hooks only |
| Vite | 6 | dev server + build (`dist/`) |
| MUI | 7 | `@mui/material` + `@mui/icons-material` for UI |
| styled-components / Emotion | — | component-scoped styles |
| react-router-dom | 7 | client-side routing |
| ESLint | 9 | flat config in `eslint.config.js` |

No TypeScript, no test runner (yet), no typecheck step.

## Architecture

- `src/` — the app: components, pages/sections, assets. Entry is `src/main.jsx` → `index.html`.
- `public/` — static files served as-is.
- `vite.config.js` sets the Pages `base`; `dist/` is the build output (deployed via `gh-pages`).
- Presentational SPA — no backend. Contact uses EmailJS from the browser.

## Conventions

- **Function components + hooks only.** No class components.
- Prefer **MUI components and its `sx` prop** over ad-hoc CSS; reach for styled-components only when
  MUI can't express it.
- Keep components small and in their own file; colocate section-specific pieces.
- Match the existing import style and file naming already in `src/`.
- Do not add comments unless the WHY is non-obvious.

## Spec-driven development

- Non-trivial work is specified before it is coded. The spec is the **source of truth**: its
  acceptance criteria are the contract your PR must meet, and its "Approach & tasks" section guides
  implementation. A deeper **plan** comment appears only when a heavy issue was escalated with the
  `plan` label, and then it supersedes the spec's light approach.
- **The spec is a comment on the issue** (ADR-0002): `specify` posts a canonical comment marked
  `<!-- agent-spec:<n> -->`. Editing that comment approves/corrects intent; adding `claude-implement`
  is the go-ahead. This repo carries only a pointer per issue, `.specs/<issue#>.ref`, which records
  the **content hash** of the exact spec comment the code was written against.
- To read the spec for issue #N: open the issue's `<!-- agent-spec:N -->` comment. When implementing,
  read it first; when reviewing, check the PR against it. Small, obvious changes may skip the spec
  (label the issue `no-spec`). See [`.specs/README.md`](.specs/README.md).

## Branch flow

- **`develop`** = integration (default branch): all PRs go here (features and the agent).
- **`main`** = production: only updated via a **release PR** from `develop`.
- Open your PRs against **`develop`**.

## Commands

```bash
npm ci             # install dependencies
npm run lint       # lint (eslint)
npm run build      # build (vite → dist/)
npm run dev        # local dev server
```
