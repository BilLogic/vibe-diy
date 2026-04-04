# SDS Compound Designing Workshop

Read `.agent/AGENT.md` for full workflow orchestration, skill routing, and guardrails.

## Quick Pointers

- **Orchestration:** `.agent/AGENT.md` — double diamond design process, skill sequencing
- **Skills:** `.agent/skills/` — Consultant, Prototyper, Critic, Compounder
- **Persona:** `context/persona.md` — agent role and constraints
- **Design system:** `context/design-system/` — tokens, components, foundations
- **Product context:** `context/product/` — what we're building and for whom
- **Knowledge:** `knowledge/` — lessons learned, preferences, ideations
- **Starter prompts:** `prompts/` — demo and exploration prompts

## Before Every Task

1. Read `context/persona.md`
2. Check `knowledge/lessons-learned.md`
3. Check `knowledge/preferences.md`
4. Follow `.agent/AGENT.md` for skill activation

## MCP Setup

Configure **Stitch MCP** and **Figma MCP** via plugins or `settings.local.json` before starting.

## Code Guardrails

- SDS components only: `import { Button } from "primitives"`
- Design tokens only: never hardcode visual values
- Layout: `Flex`, `Section`, `Grid` — no ad hoc CSS
