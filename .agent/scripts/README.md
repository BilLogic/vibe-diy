# Scripts Documentation

Comprehensive documentation for all automation scripts in the SDS repository.

## Overview

The `scripts/` directory contains automation tools for maintaining synchronization between Figma designs and the SDS codebase. These scripts handle design tokens, icons, component metadata, and development resources.

## Prerequisites

Most scripts require a Figma REST API access token. Create one at https://www.figma.com/developers/api#access-tokens

### Environment Setup

Create a `.env` file in the project root:

```bash
FIGMA_ACCESS_TOKEN=your_figma_token_here
FILE_KEY=your_figma_file_key_here
```

**Finding your FILE_KEY**: From your Figma file URL `https://www.figma.com/design/FILE_KEY/...`, copy the segment between `/design/` and the next `/`.

---

## Table of Contents

- [Token Sync](#token-sync) - Design tokens to CSS variables
- [Icon Generation](#icon-generation) - Figma icons to React components
- [Dev Resources](#dev-resources) - Bulk resource management
- [Component Metadata](#component-metadata) - Component descriptions

---

## Token Sync

**Location**: `scripts/tokens/`

**Purpose**: Sync design tokens (colors, spacing, typography, etc.) from Figma to CSS custom properties.

### Commands

#### With Figma REST API
```bash
npm run script:tokens:rest
```

**What it does**:
1. Fetches all variables and styles from Figma using REST API
2. Converts to CSS custom property format
3. Updates `src/theme.css` with all design tokens
4. Generates `scripts/tokens/tokenVariableSyntaxAndDescriptionSnippet.js` (helper snippet for Figma console)

**Requirements**:
- `FIGMA_ACCESS_TOKEN` in `.env`
- `FILE_KEY` in `.env`

#### Without Figma REST API (Local JSON)
``` bash
npm run script:tokens
```

**What it does**:
1. Reads from `scripts/tokens/styles.json` and `scripts/tokens/tokens.json`
2. Converts to CSS custom properties
3. Updates `src/theme.css`

**Use when**: You don't have Figma API access or want to use locally exported JSON files

### Alternative Workflow (No API)

1. **Export styles from Figma** using a plugin (e.g., Figma Tokens, Variables Export)
2. **Save exports** to:
   - `scripts/tokens/styles.json` - Style definitions (colors, text styles, effects)
   - `scripts/tokens/tokens.json` - Variable definitions
3. **Run local script**:
   ```bash
   npm run script:tokens
   ```

### Output

**Primary output**: `src/theme.css`

Contains all CSS custom properties organized by category:
```css
:root {
  /* Colors */
  --sds-color-text-default-default: #111111;
  --sds-color-background-default-default: #FFFFFF;
  
  /* Spacing */
  --sds-size-space-200: 8px;
  --sds-size-space-400: 16px;
  --sds-size-space-600: 24px;
  
  /* Typography */
  --sds-typography-heading-font-size: 24px;
  --sds-typography-body-font-size: 16px;
}
```

**Secondary output**: `scripts/tokens/tokenVariableSyntaxAndDescriptionSnippet.js`
- JavaScript snippet for updating Figma variable descriptions
- Run in Figma file's browser console to sync descriptions back to Figma

### When to Use

Run token sync when:
- Design tokens are updated in Figma
- New colors, spacing values, or typography scales are added
- Variable names or organization changes
- Setting up the project for the first time

---

## Icon Generation

**Location**: `scripts/icons/`

**Purpose**: Generate React icon components from Figma icon assets.

### Commands

#### With Figma REST API
```bash
npm run script:icons:rest
```

**What it does**:
1. Fetches all icons from the Figma file
2. Downloads SVG assets
3. Generates React components in `src/ui/icons/`
4. Creates `src/figma/icons/Icons.figma.tsx` for Code Connect

**Requirements**:
- `FIGMA_ACCESS_TOKEN` in `.env`
- `FILE_KEY` in `.env`

#### Without Figma REST API (Local JSON)
```bash
npm run script:icons
```

**What it does**:
1. Reads icon definitions from `scripts/icons/icons.json`
2. Generates React components
3. Updates exports in `src/ui/icons/index.ts`

**Use when**: You've exported icon data to JSON locally

### Alternative Workflow (No API)

1. **Export icons from Figma** using a plugin (e.g., SVGR, Icon Export)
2. **Save to** `scripts/icons/icons.json`:
   ```json
   {
     "icons": [
       {
         "name": "ChevronLeft",
         "svg": "<svg>...</svg>"
       }
     ]
   }
   ```
3. **Run local script**:
   ```bash
   npm run script:icons
   ```

### Output

**Primary output**: `src/ui/icons/*.tsx`

Generated React components for each icon:
```tsx
// src/ui/icons/IconChevronLeft.tsx
export function IconChevronLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      {/* SVG content */}
    </svg>
  );
}
```

**Secondary output**: `src/ui/icons/index.ts`
- Auto-generated exports for all icons
- Import pattern: `import { IconChevronLeft } from "icons";`

**Tertiary output**: `src/figma/icons/Icons.figma.tsx`
- Code Connect mappings for Figma

### When to Use

Run icon generation when:
- New icons are added to the Figma file
- Existing icons are updated or modified
- Icon names change
- Setting up the project for the first time

---

## Dev Resources

**Location**: `scripts/dev-resources/`

**Purpose**: Bulk update development resources (links, documentation) for Figma components.

### Command

```bash
npm run script:dev-resources
```

**What it does**:
1. Reads component resource mappings from `scripts/dev-resources/devResources.mjs`
2. Updates dev_resources for all specified components in Figma
3. Useful for bulk URL updates or resource syncing

**Requirements**:
- `FIGMA_ACCESS_TOKEN` in `.env` with **Dev Resources Write** scope
- `FILE_KEY` in `.env`

### Configuration

Edit `scripts/dev-resources/devResources.mjs` to define resource mappings:

```javascript
export const devResources = [
  {
    componentKey: "component-key-from-figma",
    resources: [
      {
        name: "Storybook",
        url: "https://figma.github.io/sds/storybook?path=/docs/button"
      },
      {
        name: "GitHub",
        url: "https://github.com/figma/sds/tree/main/src/ui/primitives/Button"
      }
    ]
  }
];
```

### API Token Scope

This script requires a special API token scope:
- **Scope**: Dev Resources Write (File)
- **Why**: To update component dev_resources in Figma
- **Create at**: https://www.figma.com/developers/api#access-tokens

### When to Use

Run dev resources script when:
- Updating Storybook URLs for all components
- Adding GitHub links to Figma components
- Migrating documentation URLs
- Setting up Code Connect infrastructure

---

## Component Metadata

**Location**: `scripts/component-metadata/`

**Purpose**: Bulk manage component descriptions in Figma via browser console scripts.

**Type**: Manual browser console scripts (not npm scripts)

### Process

#### Step 1: Export Component Data

1. Open your Figma file
2. Open browser developer console (Cmd+Option+I on Mac)
3. Paste `scripts/component-metadata/exportComponentJSON.js` into console
4. Copy the output JSON
5. Save to `scripts/component-metadata/components.json`

#### Step 2: Edit Descriptions

Edit `scripts/component-metadata/components.json`:
```json
{
  "components": [
    {
      "id": "component-node-id",
      "name": "Button",
      "description": "Updated description for the Button component"
    }
  ]
}
```

#### Step 3: Import Updated Data

1. Copy contents of edited `components.json`
2. Paste into `scripts/component-metadata/importComponentJSON.js` where indicated
3. Paste the complete import script into Figma browser console
4. Script will update all component descriptions

### What Gets Updated

- **Component descriptions** in Figma
- Visible in Figma's component panel
- Used for documentation and organization

### What Does NOT Get Updated

- **Dev Resources** (use `scripts/dev-resources/` instead)
- Component properties or variants
- Component styles

### When to Use

Use component metadata scripts when:
- Bulk updating component descriptions
- Standardizing description format across many components
- Migrating descriptions from external documentation
- Initial project setup

---

## Troubleshooting

### Token Sync Issues

**Problem**: `theme.css` not updating
- **Check**: `.env` file has correct `FIGMA_ACCESS_TOKEN` and `FILE_KEY`
- **Try**: Run `npm run script:tokens:rest` with verbose logging

**Problem**: Missing variables
- **Check**: Variables are published in Figma
- **Try**: Export JSON manually and use `npm run script:tokens`

### Icon Generation Issues

**Problem**: Icons not generating
- **Check**: Icon components are properly named in Figma
- **Check**: Icons are in the expected Figma page/frame

**Problem**: Invalid SVG output
- **Try**: Flatten icon layers in Figma before exporting
- **Try**: Use local JSON export workflow

### Dev Resources Issues

**Problem**: 403 Forbidden error
- **Check**: API token has Dev Resources Write scope
- **Create**: New token at https://www.figma.com/developers/api#access-tokens

### Component Metadata Issues

**Problem**: Console script not running
- **Check**: You're in the correct Figma file
- **Try**: Refresh Figma page and try again

**Problem**: Descriptions not updating
- **Check**: JSON format is valid
- **Check**: Component IDs match between export and import

---

## Script Maintenance

### Adding New Scripts

When adding new automation scripts:
1. Create directory under `scripts/[script-name]/`
2. Add npm script to `package.json`
3. Document in this README
4. Include error handling and logging
5. Support both API and local JSON workflows when possible

### Best Practices

- Always use environment variables for sensitive data
- Provide alternative workflows for users without API access
- Include verbose logging for debugging
- Handle errors gracefully with helpful messages
- Document required Figma API token scopes

---

## Related Documentation

- [Figma REST API Documentation](https://www.figma.com/developers/api)
- [Main README](../README.md) - Project setup and overview
- [Component Reference](../.agent/assets/components.md) - Component library documentation
- [Design System Resources](../.agent/assets/figma-links.md) - Links and resources
