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
- The website SHALL NOT define a custom domain unless a custom domain is explicitly approved.

### R-002: Content Integrity

As a site owner, I want public content to be grounded in real information so that the site does not misrepresent my work.

- The website SHALL contain only approved personal, academic, research, software, writing, talk, slide, and video information.
- If content is not yet approved, the website SHALL use minimal neutral placeholders instead of invented details.
- The website SHALL avoid publishing fictional projects, research outcomes, talks, credentials, or affiliations.

### R-003: Static-First Experience

As a visitor, I want pages to load quickly and work without unnecessary client-side code.

- The website SHALL render ordinary pages and presentational UI without browser JavaScript by default.
- Where interactive functionality is enabled, the website SHALL limit client-side code to the specific interaction that requires it.
- The website SHALL avoid server-only behavior for public pages that are expected to deploy as static output.

### R-004: Content-First Evolution

As a site maintainer, I want future sections to grow from clear content models so that the site remains maintainable.

- The website SHALL treat long-term sections as content surfaces before adding complex presentation or interactivity.
- When a content model is unclear, the website SHALL defer schema design until the model is approved.
- The website SHALL keep large framework or service additions out of scope unless explicitly approved.

### R-005: Accessible Responsive Pages

As a visitor using any device or input method, I want pages to be semantic, accessible, and responsive.

- The website SHALL provide semantic landmarks for page content.
- The website SHALL provide keyboard-accessible navigation to main content.
- The website SHALL support responsive layouts across narrow and wide viewports.
- The website SHALL respect user motion preferences where motion is present.
- The website SHALL support system light and dark color preferences.

### R-006: Verifiable Changes

As a maintainer, I want every change to be easy to validate before deployment.

- When the website behavior, tooling, or deployed output changes, the project SHALL provide commands to check formatting, linting, type safety, and static build output.
- When deploy configuration changes, the project SHALL keep deployment checks aligned with local verification commands.
- The project SHALL keep source-controlled documentation synchronized with accepted project constraints and implementation design.
