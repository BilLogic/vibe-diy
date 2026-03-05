# Architecture

## Contents

- [Repository Layout](#repository-layout)
- [Code Organization Rules](#code-organization-rules)
- [Key Integrations](#key-integrations)

## Repository Layout

```text
src/
  ui/           # component library
    primitives/
    compositions/
    layout/
    hooks/
    icons/
    utils/
  data/         # contexts/providers/services/types/hooks
  figma/        # Code Connect mappings
  stories/      # Storybook stories
  examples/     # prototype explorations
scripts/        # sync automation (tokens/icons/dev-resources/metadata)
.agent/         # skill routing and compatibility docs
docs/           # canonical project documentation
```

## Code Organization Rules

- Reuse SDS primitives/compositions and layout helpers.
- Use design tokens from `src/theme.css`; avoid hardcoded design values.
- Keep Storybook stories aligned with component APIs.
- Keep Code Connect docs in `src/figma` aligned with UI component categories.

## Key Integrations

- Storybook for visual API docs
- Figma Code Connect for design/code linkage
- Scripted sync for tokens, icons, dev resources, and metadata
