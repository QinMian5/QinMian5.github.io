# Design: Site Infrastructure

## Context

- **Purpose:** Establish the initial engineering foundation for Mian Qin's personal website.
- **Scope/Boundaries:** Covers static site scaffolding, toolchain configuration, minimal page structure, formatting and linting, GitHub Actions CI, GitHub Pages deployment, README, and verification commands. It does not define full homepage design, content collections, personal biography details, project inventories, research claims, server behavior, databases, CMS integration, or custom domain configuration.
- **Related Requirements:** R-001, R-002, R-003, R-004, R-005, R-006.

## Constraint Projection

- **Governing Constraints:** The site is static, content-oriented, accessible, responsive, truthful, and verifiable.
- **Detail Commitments:** The implementation uses Astro, TypeScript strict mode, pnpm, static output, Tailwind CSS 4 through `@tailwindcss/vite`, MDX, sitemap generation, Biome linting, Prettier formatting, Astro type checking, GitHub Actions, and GitHub Pages.

## Inputs & Outputs

- **Inputs:** Approved project constraints, current official framework documentation, current package versions, and the canonical URL `https://qinmian5.github.io`.
- **Outputs:** A static Astro source tree, package and lock files, formatting and linting configuration, GitHub workflow files, README, and active specs.
- **Artifacts:** Source files under `src/`, static assets under `public/`, project documentation under `docs/`, and workflows under `.github/workflows/`.

## Project Structure

- `src/components/` is reserved for future Astro-first presentational components.
- `src/layouts/BaseLayout.astro` owns document metadata, global stylesheet import, skip link, and the main landmark.
- `src/pages/index.astro` owns the minimal homepage content.
- `src/styles/global.css` owns Tailwind CSS import, CSS variables, baseline element styles, light and dark system preference support, focus styles, responsive defaults, and reduced-motion safeguards.
- `public/` holds static public assets.
- `docs/specs/requirements.md` holds stable project requirements.
- `docs/specs/designs/site-infrastructure.md` holds implementation-facing infrastructure design.
- `.github/workflows/ci.yml` validates pull requests and pushes to `main`.
- `.github/workflows/deploy.yml` deploys the static site to GitHub Pages from `main`.

## Astro Configuration

- The project uses Astro's static output.
- `astro.config.mjs` sets `site` to `https://qinmian5.github.io`.
- `astro.config.mjs` does not set `base` because the repository is the `QinMian5.github.io` user site.
- `astro.config.mjs` enables `@astrojs/mdx` and `@astrojs/sitemap`.
- `astro.config.mjs` uses the Tailwind CSS 4 Vite plugin through `@tailwindcss/vite`.
- The project does not use a server adapter, server APIs, SSR, Astro Actions, React, Vue, Svelte, shadcn/ui, ESLint, Stylelint, Husky, lint-staged, Vitest, Playwright, a database, or a CMS.

## Runtime and Package Management

- The project uses pnpm and commits `pnpm-lock.yaml`.
- `package.json` declares `packageManager`.
- `package.json` declares `engines.node` as a Node range compatible with current Astro support.
- `.nvmrc` pins local development to Node 24.
- Dependencies are limited to the approved site, styling, markdown, sitemap, typecheck, lint, and formatting toolchain.

## Minimal Page Behavior

- `BaseLayout.astro` sets `lang="en"`, charset, viewport, title, description, canonical URL, base Open Graph metadata, favicon references, global CSS import, skip link, and a main landmark.
- `index.astro` renders only the user-approved minimal placeholder content:
  - `Mian Qin`
  - `Researcher and developer working on molecular simulation, scientific computing, and agentic research infrastructure.`
- The page proves Astro rendering, Tailwind utility classes, BaseLayout composition, responsive layout, and system light/dark CSS variables.
- The page does not include client-side theme switching, localStorage, full homepage sections, project cards, blog posts, fictional experience, or decorative animation.

## Formatting and Linting

- Biome is configured for linting only.
- Biome enables recommended lint rules, VCS integration, and `.gitignore` awareness.
- Biome formatter is disabled to avoid conflict with Prettier.
- Biome ignores generated and dependency directories including `dist`, `.astro`, and `node_modules`.
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

- `README.md` explains the project purpose, current stack, local requirements, install/develop/check/build commands, GitHub Pages deployment flow, and current URL.
- Documentation avoids unapproved personal, academic, project, research, or talk details.

## Validation

- Required local validation commands are:
  - `pnpm run format`
  - `pnpm run check`
  - `pnpm run build`
- Deployment validation runs `pnpm run check` before the deploy build.
