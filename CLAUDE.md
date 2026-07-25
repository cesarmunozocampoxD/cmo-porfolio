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
  implementation. A deeper `plan.md` + `tasks.md` appear only when a heavy issue was escalated with
  the `plan` label, and then they supersede the spec's light approach.
- **Specs are NOT in this repo.** They live in
  [`cesarmunozocampoxD/specs`](https://github.com/cesarmunozocampoxD/specs) at
  `specs/cmo-porfolio/<issue#>-<slug>/spec.md`. This repo carries only a pointer per issue,
  `.specs/<issue#>.ref`, which records the exact spec commit the code was written against.
- To read the spec for issue #N: open `.specs/N.ref` and follow its `path` into the specs repo. In
  CI the specs repo is checked out read-only at `.specs-repo/`. **Never edit anything under
  `.specs-repo/`** — it is a different repository; if the spec is wrong, say so in the PR instead.
- When implementing, read the spec first; when reviewing, check the PR against it. Small, obvious
  changes may skip the spec. See [`.specs/README.md`](.specs/README.md).

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
