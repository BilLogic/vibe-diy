---
name: SDS Learn Skill
description: Explanatory and navigation skill for understanding SDS components, architecture, patterns, and workflows without defaulting to implementation.
---

# SDS Learn Skill

## Contents

- [When To Use](#when-to-use)
- [Primary Behavior](#primary-behavior)
- [Canonical References](#canonical-references)
- [Constraints](#constraints)

## When To Use

Use this skill when the request is explanatory.

Typical prompts:
- "How does Grid work?"
- "What components are available?"
- "Where should this file live?"
- "Explain token strategy"

## Primary Behavior

- Prioritize explanation, references, and navigation.
- Provide examples and tradeoffs when useful.
- Avoid implementation unless explicitly requested.

## Canonical References

- `docs/index.md`
- `docs/getting-started.md`
- `docs/architecture.md`
- `docs/component-reference.md`
- `docs/patterns.md`
- `docs/figma-sync.md`

## Constraints

- Do not duplicate long-form content in `.agent/assets` or `.agent/references`.
- Treat `docs/*` as the only canonical long-form source.
