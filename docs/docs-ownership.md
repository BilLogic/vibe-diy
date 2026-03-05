# Docs Ownership

## Contents

- [Canonical Sources](#canonical-sources)
- [Compatibility Files](#compatibility-files)
- [Update Rules](#update-rules)

## Canonical Sources

- `docs/*` is the single source of truth for long-form knowledge.
- `.agent/*.SKILL.md` stores operational routing and constraints only.

## Compatibility Files

- `.agent/references/*` and `.agent/assets/*` are compatibility entrypoints.
- They should stay lightweight and link back to canonical docs.
- Do not add new long-form canonical content to compatibility files.

## Update Rules

1. Update `docs/*` first.
2. Update skill routing/checklists only when behavior changes.
3. Keep compatibility files as pointers.
4. Keep env names and commands consistent across docs and skills.
