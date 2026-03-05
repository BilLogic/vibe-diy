---
name: SDS Maintain Skill
description: Maintenance skill for design-system-level updates, including token sync, icon generation, component metadata, dev resources, and Code Connect workflows.
---

# SDS Maintain Skill

## Contents

- [When To Use](#when-to-use)
- [Primary Behavior](#primary-behavior)
- [Canonical References](#canonical-references)
- [Constraints](#constraints)

## When To Use

Use this skill when the request updates SDS internals or design-sync infrastructure.

Typical prompts:
- "Sync tokens/icons from Figma"
- "Update Code Connect mappings"
- "Add a new primitive"
- "Bulk update dev resources"

## Primary Behavior

- Follow script-first workflows.
- Preserve consistency between Figma artifacts and generated code outputs.
- Validate exports and generated files after sync operations.

## Canonical References

- `docs/figma-sync.md`
- `docs/contributing.md`
- `docs/architecture.md`

## Constraints

- Use `FIGMA_ACCESS_TOKEN` and `FIGMA_FILE_KEY` consistently.
- Do not duplicate long-form content in `.agent/assets` or `.agent/references`.
- Treat `docs/*` as the only canonical long-form source.
