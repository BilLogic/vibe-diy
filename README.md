# SDS Playground

SDS Playground is built on top of Figma's original Simple Design System (SDS) and repurposed as a practical sandbox for AI-assisted product design and development workflows.

This repository is for testing how agents, design tokens, component systems, and implementation loops can work together in real feature prototyping.

## What You Can Do Here

- Explore SDS components and composition patterns in Storybook.
- Prototype product ideas with agent-assisted workflows.
- Compare design/implementation options quickly (consulting -> iteration -> finalization).
- Maintain design system alignment with Figma via token/icon/Code Connect sync scripts.

## Upstream vs This Repo

- Upstream baseline: [figma/sds](https://github.com/figma/sds)
- Upstream design file: [Simple Design System on Figma Community](https://www.figma.com/community/file/1380235722331273046/simple-design-system)
- This repo focus: workflow experimentation and onboarding for AI-driven prototyping on SDS foundations.

## Who This Is For

- Designers exploring faster product concept-to-code loops.
- Engineers building feature prototypes with consistent UI primitives.
- Design system contributors maintaining code/design synchronization.

## Quick Start

```bash
npm i
npm run app:dev
npm run storybook
```

- App: http://localhost:8000
- Storybook: http://localhost:6006
- Hosted Storybook: https://figma.github.io/sds/storybook

## How To Evaluate This Repo In 10 Minutes

1. Open Storybook and browse primitives/layout/compositions.
2. Read [AI Workflows](./docs/ai-workflows.md) to understand Learn/Build/Maintain routing.
3. Check [Patterns and Guardrails](./docs/patterns.md) for implementation rules.
4. Review [Figma Sync Workflow](./docs/figma-sync.md) if you plan to sync tokens/icons/resources.

## Agent Files Overview

The `.agent` folder defines how AI agents should operate in this repo.

- [`.agent/AGENT.md`](./.agent/AGENT.md)
  - Top-level router and conflict policy.
  - Explains how mixed requests are sequenced.

- [`.agent/LEARN.SKILL.md`](./.agent/LEARN.SKILL.md)
  - Use for explanation/documentation/navigation tasks.
  - Prioritizes references and guidance over direct implementation.

- [`.agent/BUILD.SKILL.md`](./.agent/BUILD.SKILL.md)
  - Use for wireframing, iteration, and production-oriented implementation.
  - Enforces SDS component and token guardrails.

- [`.agent/MAINTAIN.SKILL.md`](./.agent/MAINTAIN.SKILL.md)
  - Use for design-system maintenance tasks.
  - Covers token/icon sync, metadata, dev resources, and Code Connect updates.

- [`.agent/SKILL.md`](./.agent/SKILL.md)
  - Compatibility entrypoint that routes to Learn/Build/Maintain skills.

- `.agent/assets/*` and `.agent/references/*`
  - Compatibility stubs that forward to canonical docs.
  - Kept to avoid broken links while preventing duplicate long-form content.

## Documentation Map

Canonical long-form docs live in [`docs/`](./docs):

- [Docs Index](./docs/index.md)
- [Getting Started](./docs/getting-started.md)
- [Architecture](./docs/architecture.md)
- [AI Workflows](./docs/ai-workflows.md)
- [Figma Sync Workflow](./docs/figma-sync.md)
- [Component Reference](./docs/component-reference.md)
- [Patterns and Guardrails](./docs/patterns.md)
- [Contributing](./docs/contributing.md)
- [Docs Ownership](./docs/docs-ownership.md)

## Figma Setup

Duplicate `.env-rename` as `.env`:

```bash
FIGMA_ACCESS_TOKEN=your_figma_token
FIGMA_FILE_KEY=your_figma_file_key
```

## Common Sync Commands

```bash
npm run script:tokens:rest
npm run script:icons:rest
npm run script:dev-resources
```

See [docs/figma-sync.md](./docs/figma-sync.md) for the full sync workflow and troubleshooting notes.
