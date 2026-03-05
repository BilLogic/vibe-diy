# SDS Playground

SDS Playground builds on Figma's original Simple Design System and repurposes it as a demo playground for AI-assisted prototyping, iteration, and design-development workflow testing.

## Upstream vs This Repo

- Upstream baseline: [figma/sds](https://github.com/figma/sds)
- Upstream design file: [Simple Design System on Figma Community](https://www.figma.com/community/file/1380235722331273046/simple-design-system)
- This repo focus: AI workflow experimentation on top of SDS primitives, compositions, tokens, Storybook, and Code Connect integration.

## Who This Is For

- Designers and developers exploring AI-assisted product workflows.
- Teams prototyping UI and evaluating multiple implementation paths.
- Contributors maintaining SDS token/icon/code-connect synchronization.

## What This Repo Is Not

- Not a replacement for upstream SDS governance.
- Not a raw HTML/CSS prototyping sandbox.

## Quick Start

```bash
npm i
npm run app:dev
npm run storybook
```

- App: http://localhost:8000
- Storybook: http://localhost:6006
- Hosted Storybook: https://figma.github.io/sds/storybook

## Documentation

Canonical long-form docs are in [`docs/`](./docs):

- [Docs Index](./docs/index.md)
- [Getting Started](./docs/getting-started.md)
- [Architecture](./docs/architecture.md)
- [AI Workflows](./docs/ai-workflows.md)
- [Figma Sync Workflow](./docs/figma-sync.md)
- [Component Reference](./docs/component-reference.md)
- [Patterns and Guardrails](./docs/patterns.md)
- [Contributing](./docs/contributing.md)
- [Docs Ownership](./docs/docs-ownership.md)

## Agent Skills

- [Learn Skill](./.agent/LEARN.SKILL.md)
- [Build Skill](./.agent/BUILD.SKILL.md)
- [Maintain Skill](./.agent/MAINTAIN.SKILL.md)
- [Agent Router](./.agent/AGENT.md)

## Figma Environment Setup

Duplicate `.env-rename` as `.env` and configure:

```bash
FIGMA_ACCESS_TOKEN=your_figma_token
FIGMA_FILE_KEY=your_figma_file_key
```

## Sync Commands

```bash
npm run script:tokens:rest
npm run script:icons:rest
npm run script:dev-resources
```

See [docs/figma-sync.md](./docs/figma-sync.md) for full workflow details.
