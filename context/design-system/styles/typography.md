# Typography

All typography uses `--sds-typography-*` and `--sds-font-*` tokens from `src/theme.css`.

## Font Families

| Token | Value |
|-------|-------|
| `--sds-typography-family-sans` | `"inter", sans-serif` |
| `--sds-typography-family-mono` | `"roboto mono", monospace` |
| `--sds-typography-family-serif` | `"noto serif", serif` |

## Type Scale

| Token | Size |
|-------|------|
| `--sds-typography-scale-01` | 0.75rem (12px) |
| `--sds-typography-scale-02` | 0.875rem (14px) |
| `--sds-typography-scale-03` | 1rem (16px) |
| `--sds-typography-scale-04` | 1.25rem (20px) |
| `--sds-typography-scale-05` | 1.5rem (24px) |
| `--sds-typography-scale-06` | 2rem (32px) |
| `--sds-typography-scale-07` | 2.5rem (40px) |
| `--sds-typography-scale-08` | 3rem (48px) |
| `--sds-typography-scale-09` | 4rem (64px) |
| `--sds-typography-scale-10` | 4.5rem (72px) |

## Font Weights

| Token | Value |
|-------|-------|
| `--sds-typography-weight-thin` | 100 |
| `--sds-typography-weight-extra-light` | 200 |
| `--sds-typography-weight-light` | 300 |
| `--sds-typography-weight-regular` | 400 |
| `--sds-typography-weight-medium` | 500 |
| `--sds-typography-weight-semibold` | 600 |
| `--sds-typography-weight-bold` | 700 |
| `--sds-typography-weight-extra-bold` | 800 |
| `--sds-typography-weight-black` | 900 |

Italic variants are available for each weight (e.g., `--sds-typography-weight-bold-italic`).

## Semantic Typography

### Title Hero
- Family: sans, Weight: bold (700), Size: scale-10 (4.5rem)
- Shorthand: `--sds-font-title-hero`

### Title Page
- Family: sans, Weight: bold (700), Sizes: small (scale-07), base (scale-08), large (scale-09)
- Shorthand: `--sds-font-title-page`

### Subtitle
- Family: sans, Weight: regular (400), Sizes: small (scale-05), base (scale-06), large (scale-07)
- Shorthand: `--sds-font-subtitle`

### Heading
- Family: sans, Weight: semibold (600), Sizes: small (scale-04), base (scale-05), large (scale-06)
- Shorthand: `--sds-font-heading`

### Subheading
- Family: sans, Weight: regular (400), Sizes: small (scale-03), medium (scale-04), large (scale-05)
- Shorthand: `--sds-font-subheading`

### Body
- Family: sans, Weight: regular (400) / strong (600), Sizes: small (scale-02), medium (scale-03), large (scale-04)
- Shorthands: `--sds-font-body-base`, `--sds-font-body-strong`, `--sds-font-body-emphasis`, `--sds-font-body-small`, `--sds-font-body-small-strong`

### Code
- Family: mono, Weight: regular (400), Sizes match body sizes
- Shorthand: `--sds-font-body-code`

## Usage with Text Component

```tsx
import { Text } from "primitives";

<Text variant="title-hero">Big Title</Text>
<Text variant="heading">Section Heading</Text>
<Text variant="body">Body copy here</Text>
```
