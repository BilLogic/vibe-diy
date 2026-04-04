# SDS Agent — Workflow Orchestration

## How This Repo Works

This repo uses a compound designing system with four layers:

| Layer | Location | What it is |
|-------|----------|------------|
| 1. Context Engineering | `context/` | Persona, design system, product landscape |
| 2. Skill Curation | `.agent/skills/` | Prototyper, Consultant, Critic, Compounder |
| 3. Workflow Orchestration | This file | Design process, skill sequencing |
| 4. Knowledge Compound | `knowledge/` | Lessons learned, preferences, ideations |

## Before Starting Any Task

1. Read `context/persona.md` — understand your role
2. Check `knowledge/lessons-learned.md` — avoid known mistakes
3. Check `knowledge/preferences.md` — respect established decisions
4. Identify which phase of the design process you're in (see below)
5. Activate the appropriate skill

## Design Process (Double Diamond)

### Phase 1: Discover
- Activate **Consultant** (`.agent/skills/consultant/SKILL.md`)
- Understand the problem, user needs, constraints
- Read `context/product/users.md` and `context/product/overview.md`

### Phase 2: Define
- Synthesize findings into requirements
- Define success criteria
- Reference `context/design-system/components/index.md` for component choices

### Phase 3: Develop
- Activate **Prototyper** (`.agent/skills/prototyper/SKILL.md`)
- Generate UI using the design system
- Use SDS components only — never invent custom ones
- Follow style tokens from `context/design-system/styles/`

### Phase 4: Deliver
- Activate **Critic** (`.agent/skills/critic/SKILL.md`)
- Evaluate against heuristics and accessibility
- Refine based on feedback
- Activate **Compounder** (`.agent/skills/compounder/SKILL.md`)
- Capture lessons learned

## Skill Routing

| Intent | Skill | Path |
|--------|-------|------|
| Research, analysis, strategy | Consultant | `.agent/skills/consultant/SKILL.md` |
| Design, prototype, build UI | Prototyper | `.agent/skills/prototyper/SKILL.md` |
| Evaluate, review, critique | Critic | `.agent/skills/critic/SKILL.md` |
| Capture lessons, update system | Compounder | `.agent/skills/compounder/SKILL.md` |

**Legacy skills** (still functional for repo maintenance):

| Intent | Skill | Path |
|--------|-------|------|
| Explain, document, navigate | Learn | `.agent/LEARN.SKILL.md` |
| Build, wireframe, implement | Build | `.agent/BUILD.SKILL.md` |
| Sync tokens, icons, maintain | Maintain | `.agent/MAINTAIN.SKILL.md` |

## MCP Setup

This repo works best with these MCP integrations:

- **Stitch MCP** — for generating UI code from design specs
- **Figma MCP** — for reading from and writing to Figma files

**First-time setup:** If you haven't configured MCPs yet, check your tool's MCP settings and connect Stitch and Figma. In Claude Code, MCPs are configured via plugins or `settings.local.json`. In Cursor, use the MCP settings panel.

## Global Guardrails

- Use SDS components from `src/ui/` — never invent custom components
- Use design tokens from `src/theme.css` — never hardcode values
- Use `Flex`, `Section`, `Grid` for layout — no ad hoc CSS
- Follow import aliases: `import { Button } from "primitives"` etc.
- After completing any task, offer to compound lessons via the Compounder skill
- Long-form repo docs in `docs/*`. Context engineering in `context/*`. Knowledge in `knowledge/*`.
