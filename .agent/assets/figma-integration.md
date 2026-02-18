# Figma Integration Guide

Complete guide for translating Figma designs to SDS components using Figma MCP tools.

## Available Figma MCP Tools

### get_image
**Purpose**: Get visual representation of Figma designs

**When to use**: High-level understanding, contextualizing selected designs

**Example**: Understanding overall layout before implementing details

---

### get_code
**Purpose**: Extract component information and structure from Figma selections

**When to use**: Need specific UI element details, prop values, or component structure

**Returns**: Component tree, props, design tokens, annotations

---

### get_code_connect_map
**Purpose**: Get mappings between Figma components and React components

**When to use**: Identifying which SDS component corresponds to Figma component

---

### get_variable_defs
**Purpose**: Get design token and variable definitions

**When to use**: Understanding token values, color palettes, spacing scales

---

## Figma Translation Process

### Step 1: Extract Design Using Figma Tools

Always start with Figma MCP tools when implementing designs:

1. Use `get_image` for high-level understanding
2. Use `get_code` for component details
3. Use `get_code_connect_map` to identify SDS components
4. Use `get_variable_defs` for token values

### Step 2: Identify SDS Components

Map Figma components to existing SDS primitives, compositions, and layouts:

- Check `codeDependencies` field from Figma data
- Browse actual component files to understand available props
- Reference `.agent/assets/components.md` for complete component list

### Step 3: Apply Design Tokens

Use CSS variables for all styling values:

- Colors: `var(--sds-color-*)`
- Spacing: `var(--sds-size-space-*)`
- Typography: `var(--sds-typography-*)` or `var(--sds-font-*)`
- Border radius: `var(--sds-size-radius-*)`
- Shadows: `var(--sds-effects-shadows-*)`

---

## Understanding Figma Annotations

Annotations provide behavioral context for implementations.

### Annotation Format

```jsx
<div
  data-content-annotations="Cards' button text is dynamic"
  data-interaction-annotations="Card buttons should be disabled if current plan"
/>
```

### Annotation Types

- **content** - Text or image content instructions
- **interaction** - User interaction notes, state changes
- **layout** - Positioning, responsive behavior notes
- **validation** - Form validation rules

**Always read annotations carefully** - they contain critical implementation details.

---

## Token Mapping Pattern

Numeric prop values in SDS components map directly to CSS variables:

### Spacing Example
```tsx
// Component prop notation
<Section padding="400" />
<Flex gap="600" />

// Maps to CSS
padding: var(--sds-size-space-400)
gap: var(--sds-size-space-600)
```

### Common Mappings

| Figma Value | SDS Prop | CSS Variable |
|-------------|----------|--------------|
| 4px | `padding="200"` | `var(--sds-size-space-200)` |
| 8px | `padding="300"` | `var(--sds-size-space-300)` |
| 12px | `padding="400"` | `var(--sds-size-space-400)` |
| 16px | `padding="600"` | `var(--sds-size-space-600)` |
| 24px | `padding="800"` | `var(--sds-size-space-800)` |
| 32px | `padding="1200"` | `var(--sds-size-space-1200)` |
| 48px | `padding="1600"` | `var(--sds-size-space-1600)` |

---

## Common Translation Patterns

### Buttons
```tsx
// Figma: Button with variant="Primary" and icon
// SDS Implementation:
<Button variant="primary" size="medium">
  Button Text
</Button>
```

### Navigation
```tsx
// Figma: Navigation Pills with selection states
// SDS Implementation:
<Navigation>
  <NavigationPill isSelected>Active Item</NavigationPill>
  <NavigationPill>Inactive Item</NavigationPill>
</Navigation>
```

### Typography
```tsx
// Figma: Text with specific styles
// SDS Implementation:
<TextHeading>Heading Text</TextHeading>
<Text>Body text</Text>
<TextSmall>Small text</TextSmall>
```

### Layout
```tsx
// Figma: Cards in a grid
// SDS Implementation:
<Section>
  <Flex direction="row" gap="400" type="third">
    <Card {...props} />
    <Card {...props} />
    <Card {...props} />
  </Flex>
</Section>
```

### Complex Responsive Layout
```tsx
import { useMediaQuery } from "hooks";

function ResponsiveExample() {
  const { isMobile } = useMediaQuery();

  return (
    <Section variant="stroke" padding={isMobile ? "600" : "1600"}>
      <Flex
        direction={isMobile ? "column" : "row"}
        gap={isMobile ? "600" : "1200"}
        alignPrimary="center"
      >
        <Navigation direction="row">
          <NavigationPill isSelected>Active</NavigationPill>
          <NavigationPill>Inactive</NavigationPill>
        </Navigation>

        <Flex direction={isMobile ? "column" : "row"} gap="1600" type="third">
          {content.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </Flex>
      </Flex>
    </Section>
  );
}
```

---

## Hidden Nodes in Figma

When you see `hidden={true}` in Figma data, **ignore that node**.

This commonly happens with Figma components where nodes can be toggled with props. The node exists in the component tree but shouldn't be rendered when the prop is false.

---

## Asking for Clarification

If Figma patterns don't exist in SDS:

1. **Stop implementation**
2. **Ask for permission** before proceeding
3. **Clarify** what about the design isn't accounted for in the codebase
4. **Propose** how to handle it (use existing components, request new component, etc.)

**Never create custom components or styles** without explicit approval.

---

## Figma Code Connect

SDS uses Figma Code Connect for design-to-code integration:

- **Design Tokens**: Figma styles → CSS custom properties
- **Components**: Figma components → SDS React components
- **Assets**: Figma images/icons → React components or static assets

### Syncing from Figma

```bash
npm run script:tokens  # Sync design tokens
npm run script:icons   # Sync icons
```

### Known Limitations

- Not all Figma features have 1:1 parity with SDS components
- Complex interactions may need manual implementation
- Layout and spacing may need adjustment after syncing
- Components must be organized following SDS conventions
