# SDS Playground ��� Compound Designing Workshop

> How to stop repeating prompts and start building a system that gets smarter every time you design with it

**Workshop by Bill Guo** at Carnegie Mellon University

## Workshop Quick Start

**Claude Code:** Clone → open → `.agent/AGENT.md` auto-loads → configure MCPs (Stitch + Figma) → try `prompts/landing-page.md`

**Cursor:** Clone → open → `.cursorrules` auto-loads → configure MCPs → try demo prompt

**Other tools:** Read `.agent/AGENT.md` for orchestration logic, adapt to your tool

### First-Time MCP Setup

Before starting, connect your MCP integrations:
1. **Stitch MCP** — for generating UI code from design specs
2. **Figma MCP** — for reading from and writing to Figma files

In **Claude Code**: configure via plugins (Settings → Plugins → enable Stitch + Figma) or add to `.claude/settings.local.json`
In **Cursor**: use the MCP settings panel

### Repo Map (Compound Designing Layers)

| Folder | Layer | What it is |
|--------|-------|------------|
| `context/` | 1. Context Engineering | Persona, design system, product landscape |
| `.agent/skills/` | 2. Skill Curation | Prototyper, Consultant, Critic, Compounder |
| `.agent/AGENT.md` | 3. Workflow Orchestration | Double diamond process, skill sequencing |
| `knowledge/` | 4. Knowledge Compound | Lessons learned, preferences, ideations |
| `prompts/` | — | Starter prompts for hands-on |

### Credits
- Compound Engineering — Kieran Klaassen at Every
- Material Design — Google: [m3.material.io](https://m3.material.io/)
- SDS upstream: [figma/sds](https://github.com/figma/sds)

---

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

- [`.agent/AGENT.md`](./.agent/AGENT.md) — Workflow orchestration with double diamond design process
- [`.agent/SKILL.md`](./.agent/SKILL.md) — Routes to 4 skills: Consultant, Prototyper, Critic, Compounder
- [`.agent/skills/`](./.agent/skills/) — Skill definitions with reference docs

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
