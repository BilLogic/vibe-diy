# Maintaining Mode - Updating the Design System

## When to Use This Mode

- User is adding new components to the design system
- User is updating design tokens or theme variables
- User is syncing icons from Figma
- User is managing component metadata or descriptions
- User is working on design system infrastructure

**Important**: This mode is for **design system contributors**, not product developers building with the system.

## What to Load

1. **Scripts Directory**
   - Location: `scripts/`
   - See [`scripts/README.md`](../scripts/README.md) for comprehensive documentation

2. **Component Source Files**
   - Primitives: `src/ui/primitives/`
   - Check existing patterns before creating new components

3. **Theme File**
   - Location: `src/theme.css`
   - Contains all CSS custom properties (design tokens)

4. **Figma Configuration**
   - Location: `figma.config.json`
   - Maps Figma components to code (if Code Connect is set up)

## Available Tools and Scripts

### 1. Token Sync (`scripts/tokens/`)

**Command**: `npm run script:tokens:rest` (with Figma API) or `npm run script:tokens` (local JSON)

**Use when**: Design tokens have been updated in Figma

**What it does**:
- Fetches variables and styles from Figma
- Converts to CSS custom properties
- Updates `src/theme.css`
- Creates `scripts/tokens/tokenVariableSyntaxAndDescriptionSnippet.js`

**Alternative workflow** (without Figma API):
1. Use Figma plugins to export to JSON
2. Save to `scripts/tokens/styles.json` and `scripts/tokens/tokens.json`
3. Run `npm run script:tokens` (without `:rest`)

### 2. Icon Generation (`scripts/icons/`)

**Command**: `npm run script:icons:rest` (with Figma API) or `npm run script:icons` (local JSON)

**Use when**: New icons added or existing icons updated in Figma

**What it does**:
- Fetches all icons from Figma
- Generates React components in `src/ui/icons/`
- Generates `src/figma/icons/Icons.figma.tsx` for Code Connect

**Alternative workflow**:
1. Use Figma plugin to export to `scripts/icons/icons.json`
2. Run `npm run script:icons` (without `:rest`)

### 3. Dev Resources Bulk Update (`scripts/dev-resources/`)

**Command**: `npm run script:dev-resources`

**Use when**: Swapping URLs in bulk, maintaining Code Connect mappings

**What it does**:
- Sets dev resources for all components in `scripts/dev-resources/devResources.mjs`
- Requires Dev Resources Write scope on Figma REST API token

### 4. Component Metadata Management (`scripts/component-metadata/`)

**Type**: Manual browser console scripts

**Use when**: Bulk updating component descriptions in Figma

**Process**:
1. Open Figma file
2. Run `scripts/component-metadata/exportComponentJSON.js` in browser console
3. Copy output to `scripts/component-metadata/components.json`
4. Edit descriptions in JSON file
5. Paste JSON into `scripts/component-metadata/importComponentJSON.js`
6. Run import script in browser console

**Note**: Only updates descriptions; use dev-resources script for Dev Resources

## Behavior in This Mode

### Adding New Primitives

When adding a new component to the design system:

1. **Create component structure**:
   ```
   src/ui/primitives/NewComponent/
   ├── NewComponent.tsx
   └── NewComponent.module.css (if needed)
   ```

2. **Follow existing patterns**:
   - Check similar components for structure
   - Use React Aria/Stately if needed for accessibility
   - Export from `src/ui/primitives/index.ts`

3. **Create Storybook story**:
   ```
   src/stories/primitives/NewComponent.stories.tsx
   ```

4. **Update documentation**:
   - Add to `assets/components.md`
   - Create examples showing usage

### Updating Design Tokens

When design tokens change in Figma:

1. Run token sync script:
   ```bash
   npm run script:tokens:rest
   ```

2. Review changes in `src/theme.css`

3. Update `scripts/tokens/tokenVariableSyntaxAndDescriptionSnippet.js` in Figma console if needed

4. Test components using updated tokens

### Managing Icons

When icons are added/updated:

1. Run icon generation script:
   ```bash
   npm run script:icons:rest
   ```

2. Verify new icons in `src/ui/icons/`

3. Check that exports are added to `src/ui/icons/index.ts`

4. Test icon usage in components

## Component Scaffolding Guidelines

When creating new components, follow these conventions:

### TypeScript Interface Pattern
```tsx
export interface NewComponentProps {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  isDisabled?: boolean;
  children: React.ReactNode;
}
```

### CSS Module Pattern
```css
/* NewComponent.module.css */
.newComponent {
  /* Use CSS variables */
  color: var(--sds-color-text-default-default);
  padding: var(--sds-size-space-400);
}

.newComponent[data-variant="primary"] {
  background: var(--sds-color-background-brand-default);
}
```

### Export Pattern
```tsx
// src/ui/primitives/index.ts
export { NewComponent } from "./NewComponent/NewComponent";
export type { NewComponentProps } from "./NewComponent/NewComponent";
```

## Do's and Don'ts

### ✅ Do

- Follow existing component patterns and structure
- Use CSS variables for all design values
- Create comprehensive Storybook stories
- Document new components in assets/components.md
- Test across different breakpoints
- Ensure accessibility compliance

### ❌ Don't

- Create components that duplicate existing functionality
- Hardcode colors, spacing, or typography
- Skip TypeScript types
- Forget to export from index files
- Skip Storybook documentation
- Break existing component APIs without migration plan

## Resources

- **Scripts Documentation**: [`scripts/README.md`](../scripts/README.md)
- **Component Reference**: [`assets/components.md`](../assets/components.md)
- **Code Examples**: [`assets/code-examples.md`](../assets/code-examples.md)
- **Existing Components**: Review `src/ui/primitives/` for patterns
