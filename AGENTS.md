# AGENTS.md

## Project Architecture

This project uses **Next.js with App Router**, **React**, and **TypeScript**. The architecture is organized by responsibility and domain, prioritizing scalability, maintainability, and clear separation of concerns.

The main goal is to avoid large generic folders such as `components`, `hooks`, or `utils` becoming unmanageable. Business logic should be grouped by feature, while shared utilities and infrastructure concerns should live in dedicated layers.

---

## Base Stack

- Next.js
- React
- TypeScript
- App Router
- Tailwind CSS
- Zod
- React Hook Form
- TanStack Query or SWR when client-side fetching is required
- Zustand for lightweight global UI state
- ESLint
- Prettier
- Vitest or Jest
- React Testing Library
- Playwright for E2E tests

---

## Recommended Folder Structure

```txt
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── providers.tsx
│   │
│   ├── (public)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   │
│   ├── (private)/
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   └── error.tsx
│   │   └── profile/
│   │       └── page.tsx
│   │
│   └── api/
│       └── health/
│           └── route.ts
│
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── actions/
│   │   ├── services/
│   │   ├── schemas/
│   │   ├── types/
│   │   ├── utils/
│   │   └── index.ts
│   │
│   ├── example_users/
│   │   ├── components/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── schemas/
│   │   ├── types/
│   │   └── index.ts
│   │
│   └── example_dashboard/
│       ├── components/
│       ├── services/
│       ├── hooks/
│       ├── types/
│       └── index.ts
│
├── shared/
│   ├── components/
│   │   ├── ui/
│   │   └── layout/
│   ├── hooks/
│   ├── lib/
│   ├── utils/
│   ├── constants/
│   ├── types/
│   └── styles/
│
├── infrastructure/
│   ├── http/
│   │   ├── api-client.ts
│   │   ├── errors.ts
│   │   └── endpoints.ts
│   ├── auth/
│   │   ├── session.ts
│   │   └── cookies.ts
│   └── env/
│       └── env.ts
│
├── store/
│   └── ui-store.ts
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
└── middleware.ts
```

---

## CSS Architecture

Styles are organized in **cascade layers** from global to component-specific. Each layer only adds what the previous layer doesn't provide.

### Cascade Order

| Layer | File | Responsibility |
|-------|------|----------------|
| 1 | `src/app/globals.css` | Global reset, font import, scroll behavior, custom scrollbar. Imports layers 2 & 3. |
| 2 | `src/shared/styles/variables.css` | Design tokens as CSS custom properties (`--color-*`, `--space-*`, `--radius-*`, `--shadow-*`, `--transition-*`). |
| 3 | `src/shared/styles/animations.css` | Reusable `@keyframes` and utility animation classes (`.animate-fadeInUp`, `.delay-*`). |
| 4 | `src/shared/components/**/*.css` | Styles scoped to shared layout and UI components (e.g., `Banner.css`, `Footer.css`, `ViewCounter.css`). |
| 5 | `src/features/**/*.css` | Styles scoped to feature/page components (e.g., `AboutMe.css`, `Services.css`). |

### Rules

- Every component that uses custom CSS **must** have a co-located `.css` file with the same name (e.g., `Button.jsx` → `Button.css`).
- The CSS file is imported **at the top of the component file**, right after the React import.
- A component's CSS file must **only style that component**. No cross-component selectors.
- Use **CSS custom properties from `variables.css`** (`var(--color-primary)`) instead of hardcoded values.
- Use **utility classes from `animations.css`** in JSX `className` props instead of duplicating keyframes.
- `globals.css` must not contain component-specific styles. Only truly global rules belong there.

### Example

```
src/features/about/components/
├── AboutMe.jsx      ← import './AboutMe.css'
└── AboutMe.css      ← uses var(--color-primary), .animate-fadeInUp
```