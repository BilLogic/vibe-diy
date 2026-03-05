---
name: SDS Build Skill
description: Implementation and prototyping skill for consulting, iteration, and finalization workflows using SDS components and tokenized design constraints.
---

# SDS Build Skill

## Contents

- [When To Use](#when-to-use)
- [Build Modes](#build-modes)
- [Core Guardrails](#core-guardrails)
- [Canonical References](#canonical-references)
- [Constraints](#constraints)

## When To Use

Use this skill when the request is to build or prototype UI.

Typical prompts:
- "Create wireframes for feature X"
- "Explore 3 layout options"
- "Implement this approved design"

## Build Modes

- Consulting: structure-first concepts
- Iteration: multiple options with tradeoffs
- Finalization: production-ready implementation

## Core Guardrails

1. Prefer SDS components over raw HTML/CSS structures.
2. Use design tokens instead of hardcoded visual values.
3. Use `Flex`, `Section`, and `Grid` for layout.
4. Maintain accessibility for interactive elements.

## Canonical References

- `docs/ai-workflows.md`
- `docs/patterns.md`
- `docs/component-reference.md`
- `docs/architecture.md`

## Constraints

- Do not duplicate long-form content in `.agent/assets` or `.agent/references`.
- Treat `docs/*` as the only canonical long-form source.
