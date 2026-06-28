# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> **Heed `AGENTS.md` above.** This is Next.js **16** — APIs and conventions differ from older versions in training data. Read the relevant guide under `node_modules/next/dist/docs/` before writing framework code.

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml` / `node_modules/.pnpm`).

- `pnpm dev` — run the dev server (http://localhost:3000)
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next`)

There is no test suite, no test runner, and no type-check script; `tsc` runs only via `next build`.

## Architecture

A single-page personal portfolio (Next.js App Router, React 19, TypeScript, Tailwind CSS v4). No backend in this repo — the only server interaction is the contact form.

**Content is data-driven, not hardcoded in components.** All resume-style content lives in typed arrays under `data/` (`projects.ts`, `experience.ts`, `education.ts`). Components import these and render. To change portfolio content, edit `data/*.ts`, not the JSX. `data/projects.ts` exports two arrays — `selfProjects` and `industrialProjects` — both of type `ProjectItem`.

**Components are shared across the homepage and dedicated routes.** `app/page.tsx` composes the whole site by stacking section components (`Headlines`, `About`, `Project`, `Experience`, `Education`, separated by `SectionBreak`). The standalone routes (`app/self-projects`, `app/industry-projects`, `app/education`, `app/experience`, `app/contact`) reuse those *same* components. `Project` is parameterized by a `mode: "self" | "industry"` prop to pick which data array and copy to render. When changing a section, expect the change to surface both on the homepage and its dedicated route.

**Layout shell.** `app/layout.tsx` wraps every page with `Header` + `<main>` + `Footer` and sets site metadata (title template) and theme color. Font Awesome is loaded via CDN `<link>` in the layout `<head>` and used through `fas fa-*` classNames (e.g. the mobile menu toggle in `Header.tsx`).

**Three.js hero (`HanumanCanvas`).** A WebGL animated hero exists but is currently commented out in `app/page.tsx`. `HanumanCanvas.tsx` wraps `HanumanCanvasClient.tsx` via `next/dynamic` with `ssr: false` — keep Three.js client-only; it manages its own renderer/animation loop and disposes resources on unmount.

**Contact form.** `app/contact/page.tsx` collects form state and calls `sendContactForm` in `app/utils/contact-us.ts`, which POSTs JSON to an AWS Lambda function URL read from `process.env.NEXT_PUBLIC_AWS_LAMBDA_FUNCTION_URL`. Set that env var for the form to work; without it the request goes to an empty URL.

## Conventions

- **Path alias:** `@/*` maps to the repo root (`tsconfig.json`), so imports are `@/components/...`, `@/data/...` — not relative `../`.
- **Styling / theme:** Tailwind v4. The design system is centralized in `tailwind.config.ts` (referenced from `app/globals.css` via `@config`). Use the semantic tokens — `brand` (orange `#f47c20` family), `ink`, `surface`, `tracking-eyebrow`, `animation-gada` — rather than raw hex/values, so the dark/orange theme stays consistent. Global CSS (scrollbar, body gradient, `@keyframes`) lives in `app/globals.css`.
- Interactive components (`"use client"`) handle their own scroll/resize/drag listeners and clean them up in `useEffect` returns.
