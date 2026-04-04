# Color

All colors use `--sds-*` CSS custom properties from `src/theme.css`. Never hardcode hex values.

## Color Primitives

Each hue has a 100–1000 scale (100 = lightest, 1000 = darkest).

| Hue | Token prefix | Range example |
|-----|-------------|---------------|
| Black | `--sds-color-black-*` | Opacity variants of `#0c0c0d` |
| White | `--sds-color-white-*` | Opacity variants of `#ffffff` |
| Gray | `--sds-color-gray-*` | `#f5f5f5` → `#111111` |
| Brand | `--sds-color-brand-*` | `#f5f5f5` → `#111111` (same as gray by default) |
| Slate | `--sds-color-slate-*` | `#f3f3f3` → `#242424` |
| Red | `--sds-color-red-*` | `#fee9e7` → `#300603` |
| Green | `--sds-color-green-*` | `#ebffee` → `#062d1b` |
| Yellow | `--sds-color-yellow-*` | `#fffbeb` → `#401b01` |
| Pink | `--sds-color-pink-*` | `#fcf1fd` → `#3f1536` |

## Semantic Tokens (Light Theme)

Use these — not primitives — in components. They adapt automatically for dark theme.

### Background

| Token | Maps to |
|-------|---------|
| `--sds-color-background-brand-default` | `brand-800` |
| `--sds-color-background-brand-hover` | `brand-900` |
| `--sds-color-background-brand-secondary` | `brand-200` |
| `--sds-color-background-default-default` | `white-1000` |
| `--sds-color-background-default-secondary` | `gray-100` |
| `--sds-color-background-danger-default` | `red-500` |
| `--sds-color-background-positive-default` | `green-500` |
| `--sds-color-background-warning-default` | `yellow-400` |
| `--sds-color-background-neutral-default` | `slate-700` |
| `--sds-color-background-disabled-default` | `brand-300` |

### Text

| Token | Maps to |
|-------|---------|
| `--sds-color-text-default-default` | `gray-900` |
| `--sds-color-text-default-secondary` | `gray-500` |
| `--sds-color-text-default-tertiary` | `gray-400` |
| `--sds-color-text-brand-default` | `brand-800` |
| `--sds-color-text-brand-on-brand` | `brand-100` |
| `--sds-color-text-danger-default` | `red-700` |
| `--sds-color-text-positive-default` | `green-800` |
| `--sds-color-text-warning-default` | `yellow-900` |
| `--sds-color-text-disabled-default` | `brand-400` |

### Border

| Token | Maps to |
|-------|---------|
| `--sds-color-border-default-default` | `gray-300` |
| `--sds-color-border-default-secondary` | `gray-500` |
| `--sds-color-border-brand-default` | `brand-800` |
| `--sds-color-border-danger-default` | `red-700` |
| `--sds-color-border-positive-default` | `green-800` |
| `--sds-color-border-disabled-default` | `brand-400` |

### Icon

| Token | Maps to |
|-------|---------|
| `--sds-color-icon-default-default` | `gray-900` |
| `--sds-color-icon-default-secondary` | `gray-500` |
| `--sds-color-icon-brand-default` | `brand-800` |
| `--sds-color-icon-brand-on-brand` | `brand-100` |
| `--sds-color-icon-danger-default` | `red-700` |
| `--sds-color-icon-disabled-default` | `brand-400` |

### Utilities

| Token | Use |
|-------|-----|
| `--sds-color-background-utilities-blanket` | Full-screen overlay backdrop |
| `--sds-color-background-utilities-overlay` | Semi-transparent overlay |
| `--sds-color-background-utilities-scrim` | Light scrim behind content |

## Dark Theme

Dark theme tokens are defined under `@media (prefers-color-scheme: dark)` in theme.css. Semantic tokens automatically remap — no code changes needed.

## Rule

Always use semantic tokens (`background-*`, `text-*`, `border-*`, `icon-*`) — never reference color primitives directly in components.
