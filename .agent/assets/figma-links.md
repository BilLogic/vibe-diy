# Design System Resources

Quick reference links and resources for the Simple Design System.

## Storybook Documentation

### Live Storybook
**URL**: https://figma.github.io/sds/storybook

**Contains**:
- Interactive component documentation
- All component variants and props
- Visual examples
- Responsive behavior demos
- Code snippets

**Best for**: Exploring components visually, testing props, seeing examples

### Local Storybook
**Command**: `npm run storybook`

**Runs at**: http://localhost:6006

**Use when**: Working offline, testing local changes, development

## Figma Community File

**URL**: https://www.figma.com/community/file/1380235722331273046/simple-design-system

**Contains**:
- Design system components
- Styles and variables
- Design patterns
- Usage examples

**Note**: This is a reference file. Code Connect and Figma API are not currently set up in this project.

---

## Figma MCP Tools

When using **Figma MCP** (Model Context Protocol) integration:

### Available Tools
- **`get_image`** - Get visual representation of selected Figma nodes
- **`get_code`** - Extract component structure, props, and styles
- **`get_code_connect_map`** - See mappings between Figma components and SDS React components
- **`get_variable_defs`** - Retrieve design token values from Figma

### Understanding Figma Annotations

When using `get_code`, you may see annotation attributes that provide implementation context:

```jsx
<div
  data-content-annotations="Cards' button text is dynamic. They should say upgrade or downgrade if there is a current plan and it is better or worse."
  data-interaction-annotations="Card buttons should be disabled if they are the current plan and their text should say 'current plan'. The pill buttons should update the cards to show annual or monthly pricing."
/>
```

**Annotation prefixes:**
- `data-content-annotations` - Text or image content instructions
- `data-interaction-annotations` - User interaction and behavior notes
- `data-layout-annotations` - Layout and spacing guidance

**Important**: Always read these annotations carefully, as they contain critical implementation details that may not be visible in the visual design.

---

## Local Development Workflow

Since Code Connect and Figma API are not available:
1. **Use Storybook** as the primary component reference
2. **Reference source files** in `src/ui/` for TypeScript interfaces
3. **Check stories** in `src/stories/` for usage examples
4. **Review theme.css** for available design tokens

## Development Commands

```bash
# Start development server
npm run app:dev              # localhost:8000

# Start Storybook
npm run storybook            # localhost:6006

# Build for production
npm run app:build            # Build app
npm run storybook:build      # Build Storybook
npm run build                # Build both

# Design system maintenance (see scripts/README.md)
npm run script:tokens:rest   # Sync design tokens
npm run script:icons:rest    # Sync icons
npm run script:dev-resources # Update dev resources
```

## Project Structure

```
sds/
├── src/
│   ├── ui/                  # Component library
│   │   ├── primitives/      # Atomic components
│   │   ├── compositions/    # Complex patterns
│   │   ├── layout/          # Layout components
│   │   ├── hooks/           # UI hooks
│   │   ├── icons/           # Icon components
│   │   └── utils/           # Utilities
│   ├── data/                # Data layer
│   │   ├── contexts/        # React contexts
│   │   ├── providers/       # Context providers
│   │   ├── services/        # Business logic
│   │   ├── types/           # TypeScript types
│   │   └── hooks/           # Data hooks
│   ├── stories/             # Storybook stories
│   ├── examples/            # Full examples
│   ├── figma/               # Code Connect files
│   ├── theme.css            # Design tokens
│   └── App.tsx              # Demo app
├── scripts/                 # Automation scripts
│   ├── tokens/              # Token sync
│   ├── icons/               # Icon generation
│   ├── dev-resources/       # Resource management
│   └── component-metadata/  # Metadata management
└── .agent/                  # AI agent skill files
    ├── SKILL.md             # Main skill file
    ├── references/          # Mode-specific guides
    ├── assets/              # Documentation
    └── scripts/             # Script documentation
```

## Design Tokens

**Location**: `src/theme.css`

**Categories**:
- Colors: `--sds-color-*`
- Spacing: `--sds-size-space-*`
- Typography: `--sds-typography-*`, `--sds-font-*`
- Border radius: `--sds-size-radius-*`
- Shadows: `--sds-effects-shadows-*`

**Usage**:
```css
/* Always use CSS variables */
.custom-element {
  color: var(--sds-color-text-default-default);
  padding: var(--sds-size-space-600);
  border-radius: var(--sds-size-radius-200);
}
```

**Component prop mapping**:
```tsx
// Props map to CSS variables
<Section padding="600" />    // → padding: var(--sds-size-space-600)
<Flex gap="800" />           // → gap: var(--sds-size-space-800)
```

## GitHub Repository

**URL**: https://github.com/figma/sds

**Contains**:
- Full source code
- README with setup instructions
- Example integrations
- Scripts documentation

## Related Documentation

- [Component Reference](components.md) - Full component library docs
- [Code Examples](code-examples.md) - Common patterns
- [Scripts Documentation](../scripts/README.md) - Automation tools

## Support and Issues

For questions or issues:
1. Check Storybook documentation first
2. Review component source files in `src/ui/`
3. Check stories in `src/stories/` for examples
4. Reference GitHub repository for additional context
