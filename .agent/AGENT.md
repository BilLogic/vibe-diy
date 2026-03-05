# SDS Agent Router

## Contents

- [Canonical Docs](#canonical-docs)
- [Skill Routing](#skill-routing)
- [Mixed Requests](#mixed-requests)
- [Global Guardrails](#global-guardrails)

## Canonical Docs

Long-form knowledge is maintained in `docs/*`.

## Skill Routing

1. Learn intent (explain/document/how-to/navigation) -> `.agent/LEARN.SKILL.md`
2. Build intent (wireframe/explore/implement UI) -> `.agent/BUILD.SKILL.md`
3. Maintain intent (tokens/icons/code-connect/scripts/system updates) -> `.agent/MAINTAIN.SKILL.md`

## Mixed Requests

- Choose primary requested output first.
- Declare explicit handoff order when needed (for example: Learn -> Build).
- Keep one active skill at a time unless the user asks for multi-step sequencing.

## Global Guardrails

- Use SDS components and design tokens consistently.
- Prefer layout primitives over ad hoc layout CSS.
- Keep long-form content in `docs/*` and keep compatibility files thin.
