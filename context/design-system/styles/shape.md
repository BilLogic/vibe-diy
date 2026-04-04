# Shape

Border radius tokens control corner rounding throughout the design system.

## Border Radius Tokens

| Token | Value | Use |
|-------|-------|-----|
| `--sds-size-radius-100` | 0.25rem (4px) | Subtle rounding — inputs, small cards |
| `--sds-size-radius-200` | 0.5rem (8px) | Standard rounding — buttons, cards |
| `--sds-size-radius-400` | 1rem (16px) | Prominent rounding — large cards, dialogs |
| `--sds-size-radius-full` | 624.9375rem | Full circle — avatars, pills, badges |

## Stroke Tokens

| Token | Value | Use |
|-------|-------|-----|
| `--sds-size-stroke-border` | 0.0625rem (1px) | Standard border width |
| `--sds-size-stroke-focus-ring` | 0.125rem (2px) | Focus indicator width |

## Usage

Always use radius tokens — never hardcode `border-radius` values.

```css
border-radius: var(--sds-size-radius-200);
border: var(--sds-size-stroke-border) solid var(--sds-color-border-default-default);
```
