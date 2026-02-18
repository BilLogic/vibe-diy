# Design Tokens Reference

All design values in SDS are expressed as CSS custom properties defined in `src/theme.css`. **Never hardcode colors, spacing, or typography.** Always use `var(--sds-*)` variables.

## Token Naming Convention

```
var(--sds-[category]-[subcategory]-[variant])
```

Examples:
- `var(--sds-color-background-default)` — default page background
- `var(--sds-size-space-300)` — spacing unit
- `var(--sds-text-body-md-font-size)` — body text size

---

## Color Tokens

### Background
| Token | Use |
|-------|-----|
| `var(--sds-color-background-default)` | Default page/surface background |
| `var(--sds-color-background-subtle)` | Subtle background, secondary surfaces |
| `var(--sds-color-background-on-subtle)` | Content on subtle backgrounds |
| `var(--sds-color-background-inverse)` | Inverted (dark) surfaces |
| `var(--sds-color-background-on-inverse)` | Content on inverted surfaces |

### Text
| Token | Use |
|-------|-----|
| `var(--sds-color-text-default)` | Primary body text |
| `var(--sds-color-text-subtle)` | Secondary/supporting text |
| `var(--sds-color-text-placeholder)` | Input placeholder text |
| `var(--sds-color-text-disabled)` | Disabled text |
| `var(--sds-color-text-on-fill)` | Text on filled/colored backgrounds |

### Border
| Token | Use |
|-------|-----|
| `var(--sds-color-border-default)` | Default borders and dividers |
| `var(--sds-color-border-subtle)` | Subtle separators |
| `var(--sds-color-border-strong)` | Emphasized borders |
| `var(--sds-color-border-focus)` | Focus ring color |

### Fill (Interactive Elements)
| Token | Use |
|-------|-----|
| `var(--sds-color-fill-default)` | Primary interactive fill (buttons, etc.) |
| `var(--sds-color-fill-subtle)` | Subtle fill for secondary elements |
| `var(--sds-color-fill-hover)` | Hover state fill |
| `var(--sds-color-fill-pressed)` | Active/pressed state fill |
| `var(--sds-color-fill-disabled)` | Disabled state fill |

### Semantic Colors
| Token | Use |
|-------|-----|
| `var(--sds-color-status-positive-default)` | Success states |
| `var(--sds-color-status-negative-default)` | Error/destructive states |
| `var(--sds-color-status-warning-default)` | Warning states |
| `var(--sds-color-status-notice-default)` | Informational states |

---

## Spacing Tokens

SDS uses a scale-based spacing system. Use these for padding, margin, and gap values.

| Token | Approximate Value | Use |
|-------|-------------------|-----|
| `var(--sds-size-space-100)` | 4px | Micro spacing, tight gaps |
| `var(--sds-size-space-200)` | 8px | Small gaps, compact layouts |
| `var(--sds-size-space-300)` | 12px | Default small spacing |
| `var(--sds-size-space-400)` | 16px | Standard spacing unit |
| `var(--sds-size-space-500)` | 20px | Medium spacing |
| `var(--sds-size-space-600)` | 24px | Section spacing |
| `var(--sds-size-space-800)` | 32px | Large spacing |
| `var(--sds-size-space-1000)` | 40px | Extra large spacing |
| `var(--sds-size-space-1200)` | 48px | Section padding |
| `var(--sds-size-space-1600)` | 64px | Page-level spacing |

### Element-Specific Spacing
| Token | Use |
|-------|-----|
| `var(--sds-size-element-pad-x-sm)` | Small element horizontal padding |
| `var(--sds-size-element-pad-x-md)` | Medium element horizontal padding |
| `var(--sds-size-element-pad-x-lg)` | Large element horizontal padding |
| `var(--sds-size-element-pad-y-sm)` | Small element vertical padding |
| `var(--sds-size-element-pad-y-md)` | Medium element vertical padding |
| `var(--sds-size-element-pad-y-lg)` | Large element vertical padding |
| `var(--sds-size-element-gap-sm)` | Small gap between elements |
| `var(--sds-size-element-gap-md)` | Medium gap between elements |
| `var(--sds-size-element-gap-lg)` | Large gap between elements |

---

## Typography Tokens

### Font Size
| Token | Use |
|-------|-----|
| `var(--sds-text-title-lg-font-size)` | Large page titles |
| `var(--sds-text-title-md-font-size)` | Standard page titles |
| `var(--sds-text-title-sm-font-size)` | Small titles |
| `var(--sds-text-heading-lg-font-size)` | Large section headings |
| `var(--sds-text-heading-md-font-size)` | Standard section headings |
| `var(--sds-text-heading-sm-font-size)` | Small headings |
| `var(--sds-text-body-lg-font-size)` | Large body text |
| `var(--sds-text-body-md-font-size)` | Standard body text |
| `var(--sds-text-body-sm-font-size)` | Small body text |
| `var(--sds-text-label-md-font-size)` | Labels and captions |
| `var(--sds-text-label-sm-font-size)` | Small labels |

### Font Weight
| Token | Use |
|-------|-----|
| `var(--sds-text-title-lg-font-weight)` | Title weight |
| `var(--sds-text-heading-md-font-weight)` | Heading weight |
| `var(--sds-text-body-md-font-weight)` | Body weight |

### Line Height
| Token | Use |
|-------|-----|
| `var(--sds-text-body-md-line-height)` | Body text line height |
| `var(--sds-text-heading-md-line-height)` | Heading line height |

---

## Border Radius Tokens

| Token | Use |
|-------|-----|
| `var(--sds-size-radius-100)` | Subtle rounding |
| `var(--sds-size-radius-200)` | Standard rounding (buttons, inputs) |
| `var(--sds-size-radius-300)` | Medium rounding (cards) |
| `var(--sds-size-radius-400)` | Large rounding |
| `var(--sds-size-radius-full)` | Fully rounded (pills, avatars) |

---

## Shadow Tokens

| Token | Use |
|-------|-----|
| `var(--sds-shadow-100)` | Subtle elevation (cards) |
| `var(--sds-shadow-200)` | Standard elevation (dropdowns) |
| `var(--sds-shadow-300)` | High elevation (modals, overlays) |

---

## Token Usage Rules

### Always
- Use `var(--sds-*)` for all design values
- Check `src/theme.css` for the exact variable name before using
- Use semantic tokens (e.g., `text-default`) over raw scale tokens (e.g., `space-400`) when available

### Never
- Hardcode hex colors, RGB values, or named colors
- Hardcode pixel values for spacing or typography
- Use CSS `!important` to override token values
- Create new CSS variables outside of `src/theme.css`

### Consulting Mode Restriction
In consulting mode, only use neutral tokens:
- `var(--sds-color-background-default)`
- `var(--sds-color-background-subtle)`
- `var(--sds-color-text-default)`
- `var(--sds-color-text-subtle)`
- `var(--sds-color-border-subtle)`

### Verifying Token Names
Always verify token names against `src/theme.css` — this reference may not reflect the latest additions. When in doubt, read the source file directly.
