# Output Format

## Code Convention

All prototyper output must be React/TypeScript using SDS imports with project aliases:

```tsx
import { Button, Text, Input } from "primitives";
import { Flex, Section, Grid } from "layout";
import { Header, Footer } from "compositions";
import { IconArrowRight } from "icons";
import { useMediaQuery } from "hooks";
```

## Token Mapping

Numeric props on layout components map to CSS custom properties:

```tsx
<Section padding="400" />   → padding: var(--sds-size-space-400)
<Flex gap="600" />           → gap: var(--sds-size-space-600)
```

Always use exact `--sds-*` token names. Never hardcode rem, px, or hex values.

## Comments

Include comments noting component and token choices so the Critic can verify compliance:

```tsx
{/* Hero: Section + Flex + Text(title-hero) — spacing: space-2400 */}
<Section padding="2400">
  <Flex direction="column" gap="600" align="center">
    <Text variant="title-hero">Title</Text>
  </Flex>
</Section>
```

## Canonical Sources

When you need to verify a component's API or available props:

- Component code: `src/ui/primitives/`, `src/ui/compositions/`, `src/ui/layout/`
- Full token definitions: `src/theme.css`
- Storybook (interactive examples): https://figma.github.io/sds/storybook
- Local Storybook: `npm run storybook`
