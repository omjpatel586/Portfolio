# Om J Patel — Portfolio

Personal portfolio of **Om J Patel**, Backend & DevOps Engineer.

**Live site:** [www.omjpatel.dev](https://www.omjpatel.dev)

A single-page portfolio with a night-sky hero, an animated Hanuman flyby rendered with pose-based sprite animation, an auto-sliding testimonials carousel, and dedicated routes for projects, experience, education, and contact.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- TypeScript
- Tailwind CSS v4 (design tokens centralized in `tailwind.config.ts`)
- Package manager: **pnpm**

## Features

- **Data-driven content** — all resume-style content (projects, experience, education, skills, testimonials) lives in typed arrays under `data/`. Components only render; to update content, edit `data/*.ts` — no JSX changes needed.
- **Shared section components** — the homepage stacks the same components (`Headlines`, `About`, `Skills`, `Testimonials`, `Project`, `Experience`, `Education`) that the standalone routes reuse, so every section stays consistent in both places.
- **Animated hero** — a requestAnimationFrame flight controller moves six Hanuman poses along bezier arcs with cross-fades, with a `prefers-reduced-motion` fallback.
- **Testimonials slider** — auto-advancing carousel that adapts type size to message length, pausable on hover/focus, fully keyboard-accessible.
- **Contact form** — posts JSON to an AWS Lambda function URL (serverless; no backend in this repo).
- **SEO** — `sitemap.xml` and `robots.txt` via Next metadata routes, JSON-LD Person schema, Open Graph/Twitter cards, canonical URLs.
- **Performance** — self-hosted inline SVG icons (no third-party CSS/fonts/cookies), inlined critical CSS, tuned image caching and quality. Lighthouse: 100 Accessibility, 100 Best Practices, 100 SEO.

## Getting Started

```bash
# install dependencies
pnpm install

# run the dev server → http://localhost:3000
pnpm dev

# run the production server
pnpm start
```

### Environment variables

Create a `.env.local` in the repo root for the contact form:

```bash
NEXT_PUBLIC_AWS_LAMBDA_FUNCTION_URL=<your Lambda function URL>
```

Without it the site runs fine, but contact form submissions have nowhere to go.

### Other commands

```bash
pnpm build   # production build (also runs type checking)
pnpm start   # serve the production build
pnpm lint    # ESLint
```

## Project Structure

```
app/            routes, layout shell, metadata, sitemap/robots
  contact/      contact page + form
  ...           self-projects, industry-projects, education, experience
components/     section components shared by homepage and routes
data/           typed content arrays — edit these to change site content
public/         images, resume PDF, favicon
```

Path alias: `@/*` maps to the repo root (e.g. `@/components/...`, `@/data/...`).

## License

Content and design © Om J Patel. Icon shapes are from [Font Awesome Free](https://fontawesome.com/license/free) (CC BY 4.0), self-hosted as inline SVG.
