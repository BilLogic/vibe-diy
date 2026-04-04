# Iconography

SDS includes **290+ icon components** in `src/ui/icons/`.

## Naming Convention

All icons follow the pattern: `Icon` + PascalCase name.

Examples: `IconArrowRight`, `IconChevronLeft`, `IconSearch`, `IconClose`, `IconMenu`, `IconCheck`

## Import

```tsx
import { IconArrowRight, IconSearch } from "icons";
```

## Size Tokens

| Token | Value |
|-------|-------|
| `--sds-size-icon-small` | 1.5rem (24px) |
| `--sds-size-icon-medium` | 2rem (32px) |
| `--sds-size-icon-large` | 2.5rem (40px) |

## Usage with IconButton

```tsx
import { IconButton } from "primitives";
import { IconArrowRight } from "icons";

<IconButton icon={<IconArrowRight />} label="Next" />
```

## Standalone Usage

```tsx
import { Icon } from "primitives";
import { IconSearch } from "icons";

<Icon size="medium"><IconSearch /></Icon>
```

## Accessibility

- Icons used as buttons must have an accessible label (via `label` prop on `IconButton`)
- Purely decorative icons should use `aria-hidden="true"`
- Never rely on icons alone to convey meaning — pair with text when possible
