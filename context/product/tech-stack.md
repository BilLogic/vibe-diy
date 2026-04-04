# Tech Stack

## Core

- **React** + **TypeScript** — component framework
- **Vite** — dev server and build tool
- **SDS components** — UI primitives, layout, and compositions from `src/ui/`

## Design System

- **Primitives:** `src/ui/primitives/` — Button, Text, Input, Dialog, etc.
- **Layout:** `src/ui/layout/` — Flex, Grid, Section
- **Compositions:** `src/ui/compositions/` — Cards, Forms, Headers, Footers
- **Icons:** `src/ui/icons/` — 290+ icon components
- **Tokens:** `src/theme.css` — all `--sds-*` CSS custom properties

## Import Aliases

```tsx
import { Button, Text, Input } from "primitives";
import { Flex, Section, Grid } from "layout";
import { Header, Footer } from "compositions";
import { IconArrowRight } from "icons";
import { useAuth, usePricing, useProducts } from "data";
import { useMediaQuery } from "hooks";
```

## MCP Integrations

- **Stitch MCP** — generates UI code from design specifications
- **Figma MCP** — reads from and writes to Figma files for design-code sync

## Dev Commands

```bash
npm i              # Install dependencies
npm run app:dev    # Local app at http://localhost:8000
npm run storybook  # Storybook at http://localhost:6006
```

## Hosted Resources

- Storybook: https://figma.github.io/sds/storybook
- Upstream: https://github.com/figma/sds
