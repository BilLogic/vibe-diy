# Elevation

Elevation is expressed through shadow tokens in `src/theme.css`.

## Drop Shadows

Increasing levels create deeper perceived elevation.

| Token | Level | Use |
|-------|-------|-----|
| `--sds-effects-shadows-drop-shadow-100` | Subtle | Resting cards, subtle separation |
| `--sds-effects-shadows-drop-shadow-200` | Low | Hovered cards, buttons |
| `--sds-effects-shadows-drop-shadow-300` | Medium | Dropdowns, tooltips |
| `--sds-effects-shadows-drop-shadow-400` | High | Popovers, menus |
| `--sds-effects-shadows-drop-shadow-500` | Higher | Floating action elements |
| `--sds-effects-shadows-drop-shadow-600` | Highest | Dialogs, modals |

## Inner Shadows

For inset/pressed states.

| Token | Level |
|-------|-------|
| `--sds-effects-shadows-inner-shadow-100` | Subtle inset |
| `--sds-effects-shadows-inner-shadow-200` | Low inset |
| `--sds-effects-shadows-inner-shadow-300` | Medium inset |
| `--sds-effects-shadows-inner-shadow-400` | High inset |
| `--sds-effects-shadows-inner-shadow-500` | Higher inset |
| `--sds-effects-shadows-inner-shadow-600` | Highest inset |

## Depth Tokens

Used internally by shadow definitions.

| Token | Value |
|-------|-------|
| `--sds-size-depth-0` | 0rem |
| `--sds-size-depth-025` | 0.0625rem |
| `--sds-size-depth-100` | 0.25rem |
| `--sds-size-depth-200` | 0.5rem |
| `--sds-size-depth-400` | 1rem |
| `--sds-size-depth-800` | 2rem |
| `--sds-size-depth-1200` | 3rem |

## Backdrop Filters

| Token | Use |
|-------|-----|
| `--sds-effects-backdrop-filter-blur-overlay` | Overlay blur behind modals |
| `--sds-effects-backdrop-filter-blur-glass` | Glassmorphism effect |
| `--sds-effects-filter-blur-layer` | Layer blur |

All use `blur(0.25rem)` via `--sds-size-blur-100`.
