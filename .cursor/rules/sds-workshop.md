# SDS Compound Designing Workshop

Read `.agent/AGENT.md` for full workflow orchestration, skill routing, and guardrails.

## Quick Start
- Workflow orchestration: `.agent/AGENT.md`
- Skill routing: `.agent/SKILL.md`
- Agent persona: `context/persona.md`
- Pre-task checklist: check `knowledge/lessons-learned.md` before starting any task

## Skills (in `.agent/skills/`)
- **Consultant** — research, analysis, strategy
- **Prototyper** — UI generation using the design system
- **Critic** — design evaluation (heuristics + accessibility)
- **Compounder** — capture lessons and update knowledge base

## Context (in `context/`)
- `persona.md` — role definition
- `design-system/` — foundations, styles, components (Material Design structure)
- `product/` — product overview, users, journey, tech stack

## Knowledge (in `knowledge/`)
- `lessons-learned.md` — mistakes and solutions
- `preferences.md` — established decisions
- `ideations.md` — captured explorations

## MCP Setup
- **Stitch MCP** — for generating UI code from design specs
- **Figma MCP** — for reading from and writing to Figma files
- Configure these in your MCP settings panel before starting

## Code Guardrails
- SDS components only: `import { Button } from "primitives"`
- Design tokens only: never hardcode visual values
- Layout: `Flex`, `Section`, `Grid` — no ad hoc CSS
- Token mapping: numeric props → CSS custom properties (e.g., `padding="400"` → `var(--sds-size-space-400)`)
