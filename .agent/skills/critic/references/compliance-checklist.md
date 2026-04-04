# Design System Compliance Checklist

## How to Audit

### Component Audit

Every UI element MUST use an SDS component from `context/design-system/components/index.md`.

**What to grep for:**
- Raw HTML elements that should be SDS components: `<div>`, `<button>`, `<input>`, `<span>`, `<h1>`–`<h6>`, `<p>`, `<img>`, `<a>`, `<nav>`, `<section>`
- External or made-up component imports (anything not from `"primitives"`, `"layout"`, `"compositions"`, `"icons"`)

**Mapping:**
| Raw HTML | SDS Component |
|----------|--------------|
| `<button>` | `Button` or `IconButton` |
| `<input>` | `Input`, `Search`, `Checkbox`, `Radio`, `Switch` |
| `<textarea>` | `Textarea` |
| `<select>` | `Select` or `ListBox` |
| `<a>` | `Link` |
| `<img>` | `Image` or `Avatar` |
| `<nav>` | `Navigation` |
| `<section>` | `Section` |
| `<div>` (layout) | `Flex`, `Grid`, or `Section` |
| `<h1>`–`<h6>`, `<p>` | `Text` |
| `<table>` | `Table` |

### Token Audit

Every visual value MUST use an `--sds-*` token from `src/theme.css`.

**What to grep for:**
- Hardcoded hex colors: `#` followed by 3-8 hex chars
- Hardcoded pixel values: any `px` in style definitions
- Hardcoded rem values: raw `rem` in style definitions (should be via token)
- Hardcoded font families: `"inter"`, `"roboto"`, `sans-serif`, etc.
- Hardcoded shadows: `box-shadow:` with literal values
- Hardcoded border-radius: `border-radius:` with literal values

**No exceptions.** If a value is visual, it must come from a token.

### Import Audit

All imports must use project aliases:

| Alias | Source |
|-------|--------|
| `"primitives"` | `src/ui/primitives/` |
| `"layout"` | `src/ui/layout/` |
| `"compositions"` | `src/ui/compositions/` |
| `"icons"` | `src/ui/icons/` |
| `"hooks"` | `src/hooks/` |
| `"data"` | `src/data/` |

**Not allowed:**
- `@react-aria/*`
- `@react-stately/*`
- Direct relative imports to `src/ui/` internals
- Any third-party UI library imports

## Report Template

```markdown
## Design System Compliance

### Components
- [ ] All UI elements use SDS components (no raw HTML)
- [ ] No external or custom components

### Tokens
- [ ] All colors use --sds-color-* tokens
- [ ] All spacing uses --sds-size-space-* tokens
- [ ] All typography uses --sds-typography-* or --sds-font-* tokens
- [ ] All radii use --sds-size-radius-* tokens
- [ ] No hardcoded visual values found

### Imports
- [ ] All imports use project aliases
- [ ] No direct @react-aria or @react-stately imports

### Violations

| # | File | Line | Issue | Fix |
|---|------|------|-------|-----|
| 1 | ... | ... | ... | ... |
```
