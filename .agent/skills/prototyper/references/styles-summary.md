# Styles Summary

Consolidated token reference for the Prototyper skill. All tokens from `src/theme.css`.

## Spacing (`--sds-size-space-*`)

| Token | Value |
|-------|-------|
| `space-0` | 0rem |
| `space-050` | 0.125rem (2px) |
| `space-100` | 0.25rem (4px) |
| `space-150` | 0.375rem (6px) |
| `space-200` | 0.5rem (8px) |
| `space-300` | 0.75rem (12px) |
| `space-400` | 1rem (16px) |
| `space-600` | 1.5rem (24px) |
| `space-800` | 2rem (32px) |
| `space-1200` | 3rem (48px) |
| `space-1600` | 4rem (64px) |
| `space-2400` | 6rem (96px) |
| `space-4000` | 10rem (160px) |

Token mapping: `<Section padding="400" />` → `var(--sds-size-space-400)`

## Border Radius (`--sds-size-radius-*`)

| Token | Value |
|-------|-------|
| `radius-100` | 0.25rem (4px) |
| `radius-200` | 0.5rem (8px) |
| `radius-400` | 1rem (16px) |
| `radius-full` | pill/circle |

## Typography Shorthands (`--sds-font-*`)

| Token | Weight | Size |
|-------|--------|------|
| `title-hero` | bold (700) | 4.5rem |
| `title-page` | bold (700) | 3rem |
| `subtitle` | regular (400) | 2rem |
| `heading` | semibold (600) | 1.5rem |
| `subheading` | regular (400) | 1.25rem |
| `body-base` | regular (400) | 1rem |
| `body-strong` | semibold (600) | 1rem |
| `body-small` | regular (400) | 0.875rem |
| `body-code` | regular (400) | 1rem (mono) |

Font families: `--sds-typography-family-sans` (Inter), `--sds-typography-family-mono` (Roboto Mono)

## Key Semantic Colors

### Backgrounds
- `--sds-color-background-default-default` — page background (white)
- `--sds-color-background-default-secondary` — subtle sections (gray-100)
- `--sds-color-background-brand-default` — brand fills (brand-800)

### Text
- `--sds-color-text-default-default` — primary text (gray-900)
- `--sds-color-text-default-secondary` — secondary text (gray-500)
- `--sds-color-text-brand-default` — brand text (brand-800)
- `--sds-color-text-brand-on-brand` — text on brand bg (brand-100)

### Borders
- `--sds-color-border-default-default` — standard border (gray-300)
- `--sds-color-border-brand-default` — brand border (brand-800)

## Shadows (`--sds-effects-shadows-*`)

| Level | Token |
|-------|-------|
| Subtle | `drop-shadow-100` |
| Low | `drop-shadow-200` |
| Medium | `drop-shadow-300` |
| High | `drop-shadow-400` |
| Highest | `drop-shadow-600` |

## Icon Sizes (`--sds-size-icon-*`)

| Token | Value |
|-------|-------|
| `small` | 1.5rem (24px) |
| `medium` | 2rem (32px) |
| `large` | 2.5rem (40px) |
