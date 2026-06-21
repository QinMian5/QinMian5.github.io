# Requirements Document: Mian Qin Personal Website

The personal website records and presents Mian Qin's public professional profile, research, software, writing, talks, slides, videos, and future scientific visualization work as a static, content-oriented site.

## Authoring Constraints

- This document SHALL contain only stable, project-level constraints and expected outcomes.
- Statements tied to technologies, APIs, data models, file paths, or UI component behavior SHALL be moved to design documents.
- When implementation details change but governing constraints remain valid, requirement text SHALL remain stable and related design documents SHALL be updated.
- If execution context is needed, this document SHALL state governing constraints and reference related design modules for details.

## Requirements

### R-001: Static Publication

As a site owner, I want the website to publish as a static site so that it can be hosted reliably on a static hosting platform.

- The website SHALL produce a complete static build artifact for deployment.
- The website SHALL use the canonical public URL `https://qinmian5.github.io`.
- The website SHALL NOT set an Astro `base` path while it is deployed as the `QinMian5.github.io` user page repository.
- The website SHALL NOT define a custom domain or create a `CNAME` file unless a custom domain is explicitly approved.

### R-002: Content Integrity

As a site owner, I want public content to be grounded in real information so that the site does not misrepresent my work.

- The website SHALL contain only approved personal, academic, research, software, writing, talk, slide, and video information.
- If content is not yet approved, the website SHALL omit that content from public navigation or use a neutral empty state.
- The website SHALL avoid publishing fictional projects, research outcomes, talks, credentials, affiliations, papers, awards, or biographical details.
- The website SHALL NOT add unapproved contact details, social profiles, additional personal photos, CV files, adviser names, thesis topics, or other accounts.

### R-003: Static-First Experience

As a visitor, I want pages to load quickly and work without unnecessary client-side code.

- The website SHALL render ordinary pages and presentational UI without browser JavaScript by default.
- Where interactive functionality is enabled, the website SHALL limit client-side code to the specific interaction that requires it.
- The website SHALL avoid server-only behavior for public pages that are expected to deploy as static output.
- Theme selection MAY use small native client-side JavaScript for system preference detection, manual toggling, persistence, and anti-flash behavior.

### R-004: Content-First Evolution

As a site maintainer, I want future sections to grow from clear content models so that the site remains maintainable.

- The website SHALL treat long-term sections as content surfaces before adding complex presentation or interactivity.
- When a content model is unclear, the website SHALL defer schema design until the model is approved.
- The website SHALL keep large framework or service additions out of scope unless explicitly approved.
- Research and software project modeling SHALL remain flexible until the next content-model decision.

### R-005: Accessible Responsive Pages

As a visitor using any device or input method, I want pages to be semantic, accessible, and responsive.

- The website SHALL provide semantic landmarks for page content.
- The website SHALL provide keyboard-accessible navigation to main content.
- The website SHALL support responsive layouts across narrow and wide viewports.
- The website SHALL respect user motion preferences where motion is present.
- The website SHALL support system light and dark color preferences and a keyboard-accessible manual theme toggle.

### R-006: Verifiable Changes

As a maintainer, I want every change to be easy to validate before deployment.

- When the website behavior, tooling, or deployed output changes, the project SHALL provide commands to check formatting, linting, type safety, and static build output.
- When deploy configuration changes, the project SHALL keep deployment checks aligned with local verification commands.
- The project SHALL keep source-controlled documentation synchronized with accepted project constraints and implementation design.
- After implementation changes, maintainers SHALL run `pnpm run check` and `pnpm run build`; formatting changes SHALL be normalized with `pnpm run format`.

### R-007: Academic Portfolio Baseline

As a site owner, I want a restrained academic portfolio baseline so that future public academic content has a coherent structure.

- The website SHALL use Academic Portfolio Astro as the visual, layout, profile/sidebar, navigation, theme, and content-system baseline.
- The website SHALL integrate the template selectively into the existing project rather than replacing the current repository or infrastructure.
- The website SHALL record the actual upstream commit SHA used as the template reference.
- The website SHALL preserve the upstream MIT license notice when adapting substantial template concepts or code.
- The website SHALL NOT copy upstream example people, projects, papers, posts, talks, teaching content, CV content, analytics, URL/base config, or deployment config.

### R-008: Current Public Surface

As a visitor, I want the current website to expose the academic portfolio structure without inventing unapproved content.

- The website SHALL expose primary navigation for About, Publications, Projects, and Writing.
- The website MAY retain static non-navigation pages for the legacy About route, Talks, Teaching, CV, Tags, and development previews.
- The website SHALL show Mian Qin's confirmed identity, headline, short description, GitHub entry, Google Scholar entry, email entry, LinkedIn entry, education, and affiliations.
- The website SHALL show education in reverse chronological order with clear Patel Group and Xu Group external links.
- The website SHALL render a neutral empty state for public sections that do not yet have approved public content.
- The website SHALL keep empty public section pages out of sitemap output until they contain approved public content.
- The website SHALL keep Tags derived only from approved non-draft content.
