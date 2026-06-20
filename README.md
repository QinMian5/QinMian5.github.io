# Mian Qin Personal Website

Static personal website for Mian Qin, hosted with GitHub Pages at <https://qinmian5.github.io>.

The site is intended to grow into a long-term home for public profile information, research, software projects, writing, talks, slides, videos, and future scientific visualization work.

The project is Astro-first and static-first. Ordinary pages, layouts, and presentational components should use Astro and avoid client-side JavaScript by default.

React and shadcn/ui are not part of the current stack. A React island or shadcn/ui should only be considered later for a real complex interaction that cannot be handled cleanly with static Astro.

## Stack

- Astro
- TypeScript strict mode
- pnpm
- Tailwind CSS 4 through `@tailwindcss/vite`
- MDX through `@astrojs/mdx`
- Sitemap generation through `@astrojs/sitemap`
- Biome for linting
- Prettier for formatting
- GitHub Actions
- GitHub Pages

## Requirements

- Node 24
- pnpm 10, managed through Corepack

```bash
corepack enable
pnpm install
```

## Development

```bash
pnpm run dev
```

## Checks

```bash
pnpm run format
pnpm run check
pnpm run build
```

## Scripts

- `pnpm run dev`: start the Astro development server.
- `pnpm run start`: alias for the Astro development server.
- `pnpm run build`: create the static production build.
- `pnpm run preview`: preview the production build locally.
- `pnpm run typecheck`: run Astro type checking.
- `pnpm run lint`: run Biome linting.
- `pnpm run format`: format files with Prettier.
- `pnpm run format:check`: check formatting with Prettier.
- `pnpm run check`: run formatting check, linting, and type checking.

## Project Documents

Current requirements and infrastructure design live in:

- `docs/specs/requirements.md`
- `docs/specs/designs/site-infrastructure.md`

## Deployment

GitHub Actions deploys the site to GitHub Pages on pushes to `main`.

The deployment workflow runs `pnpm run check` before building. The site uses the GitHub Pages URL:

<https://qinmian5.github.io>

This repository is the `QinMian5.github.io` user page repository, so Astro does not set a `base` path.

No `CNAME` file is used until a custom domain is explicitly approved.
