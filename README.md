# Mian Qin Personal Website

Static personal website for Mian Qin, hosted with GitHub Pages at <https://qinmian5.github.io>.

The site is intended to grow into a long-term home for public profile information, research, software projects, writing, talks, slides, videos, and future scientific visualization work. It is currently an English academic portfolio with only confirmed public information.

## Current Site

- Canonical URL: <https://qinmian5.github.io>
- GitHub owner: `QinMian5`
- Repository: `QinMian5.github.io`
- GitHub Pages mode: user page repository, with no Astro `base`
- Custom domain: not configured; no `CNAME` file is used
- Analytics: disabled

The current public pages are:

- About
- Publications
- Projects / Code
- Writing
- Dev tools previews

Portfolio section pages use the Academic Portfolio Astro structure. The primary navigation currently exposes About, Publications, Code, and Writing. Retained non-navigation pages such as the legacy About route, Talks, Teaching, Tags, and CV render neutral empty states or noindex pages where applicable, and are excluded from the generated sitemap until they contain approved content. Tags derive only from approved non-draft content entries.

## Confirmed Public Content

The site may currently show only these confirmed personal details:

- Name: Mian Qin
- Headline: PhD student in Chemical and Biomolecular Engineering at the University of Pennsylvania.
- Short description: Researcher and developer working on molecular simulation, scientific computing, and agentic research infrastructure.
- GitHub: <https://github.com/QinMian5>
- Google Scholar: <https://scholar.google.com/citations?hl=en&user=O9xZZssAAAAJ>
- Email: <mailto:qinmian2023@gmail.com>
- LinkedIn: <https://www.linkedin.com/in/mian-qin-9419b93b2/>
- Profile image: `public/profile-picture.png`
- Publication entries listed on the approved Google Scholar profile: <https://scholar.google.com/citations?hl=en&user=O9xZZssAAAAJ>

Education and affiliations are shown in reverse chronological order:

- University of Pennsylvania, 2023–Present, Chemical and Biomolecular Engineering, PhD student, Patel Group: <https://patelgroup.seas.upenn.edu>
- Peking University, 2019–2023, B.S. in Physics, Xu Group: <https://xulm.pku.edu.cn/index.htm>

Do not add city, phone, ORCID, additional accounts, additional personal photos, CV file, adviser names, additional papers, projects, awards, thesis topics, or research results unless they are explicitly approved.

## Template Baseline

The visual, layout, profile/sidebar, navigation, theme, and content-system baseline is adapted from Academic Portfolio Astro:

- Upstream repository: <https://github.com/rubzip/academic-portfolio-astro>
- Adopted upstream commit: `6f296c22bd2dc1712d39545835dc9cd4e4f4854b`
- License: MIT

This repository keeps its existing Astro 6, pnpm, Tailwind CSS 4, TypeScript strict, Biome, Prettier, CI, and GitHub Pages infrastructure. The upstream template is integrated selectively; upstream git metadata, lockfile, deploy config, URL/base, analytics, example content, fake personal assets, and external font packages are not copied.

The current UI aligns with the upstream default blue visual system and includes upstream-style avatar support, social icon links, section navigation, listing cards, tags, share buttons for future detail pages, and noindex dev-tools previews.

The upstream MIT license notice is preserved in `THIRD_PARTY_NOTICES.md`. Mian Qin's personal content is separate from upstream template content.

## Stack

- Astro 6, static output
- TypeScript strict mode
- pnpm
- Tailwind CSS 4 through `@tailwindcss/vite`
- MDX through `@astrojs/mdx`
- Markdown/MDX math through `remark-math`, `rehype-katex`, and `katex`
- Sitemap generation through `@astrojs/sitemap`
- Biome for linting only
- Prettier for formatting
- GitHub Actions
- GitHub Pages

React, shadcn/ui, Vue, Svelte, server adapters, SSR, databases, CMS integrations, third-party analytics, and runtime external font requests are not part of the current stack.

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

Local implementation plans belong under `docs/plans/`, which is ignored by `docs/.gitignore`.

## Deployment

GitHub Actions deploys the site to GitHub Pages on pushes to `main`.

The deployment workflow runs `pnpm run check` before building. The site uses the GitHub Pages URL:

<https://qinmian5.github.io>

This repository is the `QinMian5.github.io` user page repository, so Astro does not set a `base` path.

No `CNAME` file is used until a custom domain is explicitly approved.
