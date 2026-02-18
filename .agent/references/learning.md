# Learning Mode - Understanding the Design System

## When to Use This Mode

- User is asking "how does X component work?"
- User wants to know "what components are available?"
- Designer exploring the design system capabilities
- Developer learning how to use SDS components
- Questions about component APIs, props, or usage patterns

## What to Load

1. **Storybook Documentation**
   - Local: `npm run storybook` (localhost:6006)
   - Live: https://figma.github.io/sds/storybook
   - Contains interactive examples of all components

2. **Component Source Files**
   - Primitives: `src/ui/primitives/`
   - Compositions: `src/ui/compositions/`
   - Layout: `src/ui/layout/`
   - Each component has TypeScript definitions showing available props

3. **Story Files**
   - Location: `src/stories/`
   - Show real usage examples and common patterns

4. **Assets Documentation**
   - [`assets/components.md`](../assets/components.md) - Full component library reference
   - [`assets/code-examples.md`](../assets/code-examples.md) - Common patterns

## Behavior in This Mode

### Explain Components

When asked about a component:
1. Reference the component's TypeScript interface to show available props
2. Point to Storybook for interactive examples
3. Show code examples from `src/stories/`
4. Explain when to use vs when not to use

Example response structure:
```
The Button component is a primitive with three main variants:
- primary (default, highest emphasis)
- neutral (medium emphasis)
- subtle (low emphasis)

Props available:
- variant: "primary" | "neutral" | "subtle"
- size: "small" | "medium" | "large"
- isDisabled: boolean
- etc.

See it in action: [Storybook Link]
Example usage: [Code snippet from stories]
```

### Navigate the Component Library

Help users understand the hierarchy:
- **Primitives**: Atomic, single-purpose components (Button, Input, Text)
- **Layout**: Structural components (Flex, Section, Grid)
- **Compositions**: Pre-built patterns (Cards, Forms, Headers)
- **Data Layer**: Contexts and hooks (useAuth, usePricing, useProducts)

### Show Examples

Always reference actual code from:
- `src/stories/` - Storybook story files
- `src/examples/` - Complete implementation examples
- `assets/code-examples.md` - Common patterns

## Resources to Reference

### Storybook
- **Best for**: Visual exploration, interactive prop testing
- **URL**: https://figma.github.io/sds/storybook
- **Local**: `npm run storybook`

### Component Source Files
- **Best for**: Understanding TypeScript interfaces and available props
- **Location**: `src/ui/primitives/[ComponentName]/[ComponentName].tsx`

### Story Files
- **Best for**: Seeing real usage examples
- **Location**: `src/stories/primitives/[ComponentName].stories.tsx`

### Assets Documentation
- **Component Reference**: `assets/components.md`
- **Code Examples**: `assets/code-examples.md`
- **Figma Links**: `assets/figma-links.md`

## Example Interactions

### User: "How do I use the Navigation component?"

**Good Response:**
```
The Navigation component creates pill-style navigation with selection states.

Key components:
- Navigation (container)
- NavigationPill (individual pill)

Example from Storybook:
[code snippet showing Navigation with NavigationPills]

Props:
- NavigationPill: isSelected (boolean)
- Direction: row or column

See it live in Storybook: [link]
```

### User: "What layout components are available?"

**Good Response:**
```
SDS has three main layout components:

1. **Flex** - Flexbox layouts
   - Props: direction, gap, alignPrimary, alignSecondary, type
   - Use for: Most layout needs, responsive grids

2. **Section** - Page sections
   - Props: variant, padding
   - Use for: Content sections with consistent spacing

3. **Grid** - CSS Grid layouts
   - Props: columns, gap
   - Use for: Complex grid layouts when Flex isn't sufficient

Never write custom CSS for layout - always use these components.

See examples in assets/code-examples.md
```

## Do's and Don'ts

### ✅ Do

- Point to Storybook for visual reference
- Show TypeScript interfaces for available props
- Provide code examples from actual stories
- Explain component hierarchy and when to use each level
- Reference design tokens and CSS variables

### ❌ Don't

- Create custom examples that don't follow SDS patterns
- Suggest using components that don't exist
- Recommend importing from `@react-aria` directly
- Show hardcoded values instead of design tokens
- Skip accessibility considerations
