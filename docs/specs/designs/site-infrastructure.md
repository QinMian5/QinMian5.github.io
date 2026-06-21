# Design: Site Infrastructure and Academic Portfolio Baseline

## Context

- **Purpose:** Maintain the static engineering foundation for Mian Qin's personal website and integrate Academic Portfolio Astro as the current visual, layout, profile/navigation, theme, and content-system baseline.
- **Scope/Boundaries:** Covers static site configuration, package tooling, content collections, portfolio section pages, tags, development preview pages, theme behavior, formatting and linting, GitHub Actions CI, GitHub Pages deployment, README, license notices, and validation commands.
- **Out of Scope:** Full homepage design, unapproved biography details, papers, projects, research claims, talks, teaching entries, CV publication, analytics, custom domain configuration, server behavior, databases, CMS integration, React islands, and shadcn/ui.
- **Related Requirements:** R-001, R-002, R-003, R-004, R-005, R-006, R-007, R-008.

## Constraint Projection

- **Governing Constraints:** The site is static, content-oriented, accessible, responsive, truthful, verifiable, and English-language by default.
- **Detail Commitments:** The implementation uses Astro 6, TypeScript strict mode, pnpm, static output, Tailwind CSS 4 through `@tailwindcss/vite`, MDX, sitemap generation, Biome linting, Prettier formatting, Astro type checking, GitHub Actions, and GitHub Pages.
- **Template Baseline:** Academic Portfolio Astro is used as a product-layer baseline for structure and visual language, not as a replacement repository.

## Upstream Template Record

- **Template:** Academic Portfolio Astro
- **Repository:** `https://github.com/rubzip/academic-portfolio-astro`
- **Adopted Commit:** `6f296c22bd2dc1712d39545835dc9cd4e4f4854b`
- **License:** MIT, copyright Rubén Gijón
- **Notice Location:** `THIRD_PARTY_NOTICES.md`

The integration preserves layout, section structure, avatar/social/icon conventions, tags, share controls, development preview pages, and the default blue visual system from the template while excluding upstream git metadata, `package-lock.json`, deployment settings, base path, upstream URL, analytics, example content, fake personal assets, and runtime external font packages.

## Inputs & Outputs

- **Inputs:** Approved project constraints, current official Astro documentation, current upstream template snapshot, current package versions, and the canonical URL `https://qinmian5.github.io`.
- **Outputs:** A static Astro source tree, package and lock files, content collection definitions, formatting and linting configuration, GitHub workflow files, README, third-party notice, and active specs.
- **Artifacts:** Source files under `src/`, static assets under `public/`, project documentation under `docs/`, and workflows under `.github/workflows/`.

## Project Structure

- `src/config/site.ts` centralizes site metadata, profile facts, education data, social link flags, page labels, navigation flags, and the adopted upstream template SHA.
- `src/content.config.ts` defines Astro content collections for `pages`, `projects`, `writing`, `publications`, `talks`, `teaching`, and `cv`.
- `src/content/pages/about.mdx` stores the confirmed About page prose.
- `src/content/writing/math-capability.mdx` is a draft-only MDX entry used to verify math support without publishing a Writing section.
- `src/components/` holds Astro-first presentational components for profile/sidebar, navigation, theme toggle, education, empty states, icons, social links, tags, item cards, content headers, share buttons, and back links.
- `src/layouts/BaseLayout.astro` owns document metadata, global stylesheet import, KaTeX stylesheet import, anti-flash theme initialization, skip link, profile/sidebar, navigation, main landmark, footer, and theme toggle behavior.
- `src/layouts/BaseListing.astro` provides reusable portfolio listing page structure with empty states.
- `src/layouts/BaseDetail.astro` provides reusable detail page structure with content header, prose, share controls, and back navigation.
- `src/layouts/DevToolsLayout.astro` provides noindex development-preview pages for theme, palette, and responsive screen checks.
- `src/pages/index.astro` owns the default About page and shows confirmed About prose plus education data.
- `src/pages/about.astro` renders the confirmed About MDX entry and education data as a retained noindex legacy route.
- `src/pages/projects/index.astro`, `src/pages/writing/index.astro`, `src/pages/publications/index.astro`, `src/pages/talks/index.astro`, `src/pages/teaching/index.astro`, and `src/pages/cv/index.astro` provide upstream-style section pages that render approved non-draft entries or neutral empty states.
- The active primary navigation includes About, Publications, Code, and Writing.
- Talks, Teaching, Tags, and CV remain retained static routes, but are not shown in primary navigation.
- Dynamic detail routes under portfolio sections render only approved non-draft content entries.
- `src/pages/tags/index.astro` and `src/pages/tags/[tag].astro` derive tag pages from approved non-draft content.
- `src/pages/dev-tools/` provides noindex development-preview pages for template-alignment checks.
- `src/pages/404.astro` provides a static not-found page.
- `src/styles/global.css` owns Tailwind CSS import, upstream-blue CSS variables, responsive layout, focus styles, prose, cards, tags, social links, share buttons, dev-tools surfaces, empty states, and reduced-motion safeguards.
- `public/` holds static public assets.
- `docs/specs/requirements.md` holds stable project requirements.
- `docs/specs/designs/site-infrastructure.md` holds implementation-facing infrastructure and portfolio baseline design.
- `.github/workflows/ci.yml` validates pull requests and pushes to `main`.
- `.github/workflows/deploy.yml` deploys the static site to GitHub Pages from `main`.

## Astro Configuration

- The project uses Astro's static output.
- `astro.config.mjs` sets `site` to `https://qinmian5.github.io`.
- `astro.config.mjs` does not set `base` because the repository is the `QinMian5.github.io` user site.
- `astro.config.mjs` enables `@astrojs/mdx` and `@astrojs/sitemap`.
- `astro.config.mjs` excludes noindex empty section pages and development-preview pages from sitemap output.
- `astro.config.mjs` uses the Tailwind CSS 4 Vite plugin through `@tailwindcss/vite`.
- `astro.config.mjs` uses `@astrojs/markdown-remark` with `remark-math` and `rehype-katex` so Markdown and MDX share math support.
- The project does not use a server adapter, server APIs, SSR, Astro Actions, React, Vue, Svelte, shadcn/ui, ESLint, Stylelint, Husky, lint-staged, Vitest, Playwright, a database, CMS, analytics, or runtime external font requests.

## Content Model

- `pages` is used for confirmed static prose such as About.
- `projects`, `writing`, `publications`, `talks`, `teaching`, and `cv` are public section collections with metadata, tags, draft control, and external-link fields.
- Draft entries are available as non-public control. Current collections may be empty.
- Empty public section pages render a neutral empty state, carry `noindex`, and are excluded from sitemap output.
- Tags are derived only from approved non-draft collection entries.
- Research versus software project modeling is intentionally deferred until the next content decision.

## Current Public Content

The current public profile data is limited to:

- Name: Mian Qin
- Headline: PhD student in Chemical and Biomolecular Engineering at the University of Pennsylvania.
- Short description: Researcher and developer working on molecular simulation, scientific computing, and agentic research infrastructure.
- GitHub: `https://github.com/QinMian5`
- Google Scholar: `https://scholar.google.com/citations?hl=en&user=O9xZZssAAAAJ`
- Email: `qinmian2023@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/mian-qin-9419b93b2/`
- Profile image: `public/profile-picture.png`, sourced from `~/Downloads/profile picture.png` and explicitly approved on 2026-06-21
- Publications listed on the approved Google Scholar profile at `https://scholar.google.com/citations?hl=en&user=O9xZZssAAAAJ`
- University of Pennsylvania, 2023–Present, Chemical and Biomolecular Engineering, PhD student, Patel Group
- Peking University, 2019–2023, B.S. in Physics, Xu Group

The implementation must not add city, phone, ORCID, additional accounts, additional personal photos, CV file, adviser names, additional papers, projects, awards, thesis topics, or unapproved research results.

## Layout and Theme

- Desktop layout uses a left profile/sidebar and right main content area.
- The sidebar uses the upstream avatar/social-link system with the approved profile image, GitHub, Google Scholar, email, and LinkedIn links.
- The sidebar is sticky on desktop and becomes a stacked profile block on smaller viewports.
- Primary navigation is sticky in the content column and includes About, Publications, Code, and Writing.
- A native Astro theme toggle switches between light and dark, persists the choice in `localStorage`, and falls back to system preference when no manual choice exists.
- An inline head script applies the initial theme before body rendering to avoid obvious theme flash.
- CSS variables define the upstream default blue light theme and matching dark theme; no external font requests are made.
- Motion is minimal and reduced-motion preferences are respected.

## SEO and Links

- `BaseLayout.astro` sets `lang="en"`, charset, viewport, canonical URL, robots metadata, author, description, favicon, and base Open Graph metadata.
- Canonical URLs are generated from the current pathname and `https://qinmian5.github.io`.
- Open Graph metadata uses Mian Qin and the current site, not upstream template values.
- External GitHub and research group links use safe external-link attributes.
- Internal links assume a GitHub user page with no `base` path.
- Analytics scripts are not configured or emitted.
- Empty section pages and development-preview pages emit `noindex`.
- Sitemap output includes the default About page and non-empty approved public content pages.

## Runtime and Package Management

- The project uses pnpm and commits `pnpm-lock.yaml`.
- `package.json` declares `packageManager`.
- `package.json` declares `engines.node` as a Node range compatible with current Astro support.
- `.nvmrc` pins local development to Node 24.
- Dependencies are limited to the approved Astro, styling, markdown, math, sitemap, typecheck, lint, and formatting toolchain.

## Formatting and Linting

- Biome is configured for linting only.
- Biome enables recommended lint rules, VCS integration, and `.gitignore` awareness.
- Biome formatter is disabled to avoid conflict with Prettier.
- Biome ignores generated and dependency directories including `dist`, `.astro`, and `node_modules`.
- Biome ignores raw icon SVG assets under `src/assets/icons/`; accessibility names for icons are provided by the consuming Astro links or buttons.
- Biome excludes `.astro` templates from linting; Astro template diagnostics are covered by `astro check`.
- Prettier formats the project using `prettier-plugin-astro` and `prettier-plugin-tailwindcss`.
- The Tailwind Prettier plugin is last in the Prettier plugin list.
- Astro files are explicitly configured to use the Astro parser.
- `.prettierignore` excludes generated and dependency directories.
- `.editorconfig` defines baseline editor behavior.

## Scripts

- `dev` runs `astro dev`.
- `start` runs `astro dev`.
- `build` runs `astro build`.
- `preview` runs `astro preview`.
- `typecheck` runs `astro check`.
- `lint` runs `biome lint .`.
- `format` runs `prettier . --write`.
- `format:check` runs `prettier . --check`.
- `check` runs `format:check`, `lint`, and `typecheck`.

## CI and Deployment

- `ci.yml` runs on pull requests and pushes to `main`.
- `ci.yml` checks out the repository, sets up pnpm, uses Node 24, enables pnpm dependency caching, installs dependencies with a frozen lockfile, runs `pnpm run check`, and runs `pnpm run build`.
- `ci.yml` uses `actions/setup-node` pnpm caching and does not maintain a separate low-level pnpm store cache.
- `deploy.yml` runs on pushes to `main` and manual dispatch.
- `deploy.yml` grants `contents: read`, `pages: write`, and `id-token: write`.
- `deploy.yml` uses concurrency control for GitHub Pages deployments.
- `deploy.yml` runs `pnpm run check` before the deploy build step.
- `deploy.yml` uses `withastro/action` for the Astro build and artifact upload, and `actions/deploy-pages` for publication.
- Deployment uses GitHub Pages, not a `gh-pages` branch.
- `dist` is generated output and is not tracked.
- No `CNAME` file is created.

## Documentation

- `README.md` explains the project purpose, current stack, local requirements, install/develop/check/build commands, GitHub Pages deployment flow, template baseline, visible content, and current URL.
- `THIRD_PARTY_NOTICES.md` preserves the upstream MIT license notice.
- Documentation avoids unapproved personal, academic, project, research, paper, award, talk, teaching, or CV details.

## Validation

- Required local validation commands are:
  - `pnpm install --frozen-lockfile`
  - `pnpm run format`
  - `pnpm run check`
  - `pnpm run build`
- Deployment validation runs `pnpm run check` before the deploy build.
