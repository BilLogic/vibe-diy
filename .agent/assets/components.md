# SDS Component Library Reference

Complete reference for all Simple Design System (SDS) components, organized by category.

## Import Pattern

All components use path aliases from `vite.config.ts`:

```tsx
import { Button, Input, Text } from "primitives";
import { Flex, Section, Grid } from "layout";
import { Header, Footer, Card } from "compositions";
import { useMediaQuery } from "hooks";
import { IconChevronLeft } from "icons";
import { useAuth, usePricing, useProducts } from "data";
```

---

## Primitives (`src/ui/primitives/`)

Single-purpose, atomic components that cannot be reduced further.

### Accordion
**Purpose**: Expandable content sections for progressive disclosure

**Key Components**:
- `Accordion` - Container for accordion items
- `AccordionItem` - Individual expandable section

**When to use**: FAQ sections, long content that needs organization, progressive disclosure

**When not to use**: When all content should be visible, navigation (use Tabs instead)

---

### Avatar
**Purpose**: User profile images and placeholders

**Variants**: With image, with initials, placeholder

**Props**: `src`, `name`, `size`

**When to use**: User profiles, comment sections, author attribution

---

### Button
**Purpose**: Primary interactive element for actions

**Variants**:
- `primary` - Highest emphasis, primary actions
- `neutral` - Medium emphasis, secondary actions
- `subtle` - Low emphasis, tertiary actions

**Props**: `variant`, `size` ("small" | "medium" | "large"), `isDisabled`

**When to use**: Forms, calls-to-action, navigation actions

**When not to use**: Navigation between pages (use Link), icon-only buttons (use IconButton)

---

### Checkbox
**Purpose**: Boolean selection controls, multiple selections

**Props**: `isSelected`, `isIndeterminate`, `isDisabled`, `label`

**When to use**: Multiple selections, boolean toggles in forms, filter options

**When not to use**: Single selection from group (use Radio)

---

### Dialog
**Purpose**: Modal dialogs and overlays

**Components**:
- `Dialog` - Main modal container
- `DialogBody` - Content area

**Props**: `isOpen`, `onClose`, `title`

**When to use**: Confirmation dialogs, forms requiring focus, critical information

**When not to use**: Non-critical information (use Tooltip), navigation (use Menu)

---

### Fieldset
**Purpose**: Form field grouping with legend

**Props**: `legend`, `description`

**When to use**: Grouping related form fields, radio groups, checkbox groups

---

### Icon
**Purpose**: Consistent icon rendering

**Note**: Icons are auto-generated in `src/ui/icons/`. Import specific icons by name.

**Usage**:
```tsx
import { IconChevronLeft, IconClose, IconCheck } from "icons";

<IconChevronLeft />
```

---

### IconButton
**Purpose**: Icon-only buttons with accessible labels

**Props**: `aria-label` (required), `variant`, `size`

**When to use**: Toolbar actions, close buttons, compact interfaces

**When not to use**: When text label is better for clarity

---

### Image
**Purpose**: Responsive images with loading states

**Props**: `src`, `alt` (required), `objectFit`

**Accessibility**: Always provide meaningful `alt` text

---

### Input
**Purpose**: Form input fields with validation

**Props**: `label`, `type`, `isRequired`, `isInvalid`, `errorMessage`, `description`

**Types**: text, email, password, number, tel, url

**When to use**: Single-line text entry, form fields

**When not to use**: Multi-line text (use Textarea), selections (use Select/Radio)

---

### Link
**Purpose**: Navigation and external links

**Props**: `href`, `target`, `variant`

**When to use**: Navigation between pages, external links

**When not to use**: Actions/commands (use Button)

---

### ListBox
**Purpose**: Selection lists with keyboard navigation

**Props**: `items`, `onSelectionChange`, `selectionMode`

**When to use**: Custom select dropdowns, filterable lists, multi-select

---

### Logo
**Purpose**: Brand logos and identity

**Props**: `variant`, `size`

**When to use**: Headers, footers, brand representation

---

### Menu
**Purpose**: Dropdown menus and context menus

**Components**:
- `Menu` - Container
- `MenuItem` - Individual item
- `MenuHeading` - Section heading
- `MenuSeparator` - Visual divider
- `MenuShortcut` - Keyboard shortcut display

**When to use**: Dropdown actions, context menus, complex navigation

---

### Navigation
**Purpose**: Navigation pills and buttons with selection states

**Components**:
- `Navigation` - Container
- `NavigationPill` - Pill-style nav item
- `NavigationButton` - Button-style nav item

**Props**: `direction` ("row" | "column"), `isSelected`

**When to use**: Page navigation, tab-like navigation, filters

**When not to use**: Forms (use actual Tabs for tabbed content)

---

### Notification
**Purpose**: Toast notifications and alerts

**Variants**: info, success, warning, error

**Props**: `variant`, `title`, `description`, `onClose`

**When to use**: System feedback, success/error messages, temporary alerts

---

### Pagination
**Purpose**: Page navigation controls

**Components**:
- `Pagination` - Container
- `PaginationPrevious` - Previous button
- `PaginationNext` - Next button
- `PaginationPage` - Page number
- `PaginationGap` - Ellipsis for skipped pages

**When to use**: Long lists, search results, table data

---

### Radio
**Purpose**: Single selection from multiple options

**Components**:
- `RadioGroup` - Container
- `Radio` - Individual option

**Props**: `value`, `onChange`, `orientation`

**When to use**: Mutually exclusive options, required single selection

**When not to use**: Multiple selections (use Checkbox), many options (use Select)

---

### Search
**Purpose**: Search input fields with suggestions

**Props**: `placeholder`, `onSearch`, `suggestions`

**When to use**: Search functionality, filterable content

---

### Select
**Purpose**: Dropdown selection components

**Props**: `label`, `items`, `onSelectionChange`, `isRequired`

**When to use**: Selection from many options, space-constrained forms

**When not to use**: Few options visible ( <5, use Radio instead)

---

### Slider
**Purpose**: Range input controls

**Props**: `min`, `max`, `step`, `value`, `onChange`, `label`

**When to use**: Numeric ranges, volume controls, filters

---

### Switch
**Purpose**: Toggle controls for boolean settings

**Props**: `isSelected`, `onChange`, `label`

**When to use**: Settings toggles, feature flags, on/off states

**When not to use**: Forms requiring explicit submission (use Checkbox)

---

### Tab
**Purpose**: Tab navigation with panels

**Components**:
- `Tabs` - Container
- `Tab` - Individual tab
- `TabPanel` - Content panel

**Props**: `selectedKey`, `onSelectionChange`

**When to use**: Organizing related content sections, switched views

**When not to use**: Navigation between pages (use Navigation)

---

### Table
**Purpose**: Data tables with sorting, filtering

**Components**:
- `Table` - Container
- `TableHeader` - Header row
- `TableBody` - Content rows
- `TableRow` - Individual row
- `TableCell` - Individual cell

**When to use**: Tabular data, data comparison, lists with multiple attributes

---

### Tag
**Purpose**: Labels, badges, category indicators

**Variants**: default, removable

**Props**: `variant`, `onRemove`

**When to use**: Categories, filters, status indicators, labels

---

### Text
**Purpose**: Typography components with semantic variants

**Variants**:
- `Text` - Body text
- `TextSmall` - Small text
- `TextHeading` - Section headings
- `TextTitle` - Page titles (TitlePage, TitleHero)
- `TextSubheading` - Subheadings
- `TextSubtitle` - Subtitles
- `TextEmphasis` - Emphasized text
- `TextStrong` - Strong text
- `TextCode` - Inline code
- `TextPrice` - Price formatting
- `TextLink` - Text link variant

**When to use**: All text content

**When not to use**: Form labels (use Input's `label` prop)

---

### Textarea
**Purpose**: Multi-line text input

**Props**: `label`, `rows`, `isRequired`, `isInvalid`, `errorMessage`

**When to use**: Long-form text, comments, descriptions

**When not to use**: Single-line input (use Input)

---

### Tooltip
**Purpose**: Contextual help and information

**Props**: `content`, `placement`, `trigger`

**When to use**: Icon explanations, additional context, help text

**When not to use**: Critical information (use visible text), long content (use Dialog)

---

## Layout Components (`src/ui/layout/`)

Structural components for positioning. **Never write custom CSS for layout - always use these.**

### Flex
**Purpose**: Flexbox layouts with gap, alignment, and responsive props

**Props**:
- `direction`: "row" | "column"
- `gap`: Spacing token value (e.g., "400", "600", "800")
- `alignPrimary`: "flex-start" | "center" | "flex-end" | "space-between" | "space-around"
- `alignSecondary`: "flex-start" | "center" | "flex-end" | "stretch"
- `type`: "half" | "third" | "quarter" - Auto-responsive grid
- `container`: boolean - Apply max-width container

**Token mapping**: `gap="600"` → `gap: var(--sds-size-space-600)`

**When to use**: Almost all layout needs, responsive grids, alignment

**Examples**:
```tsx
// Row with space between
<Flex direction="row" alignPrimary="space-between">

// Column with consistent gaps
<Flex direction="column" gap="600">

// Auto-responsive three-column grid
<Flex direction="row" gap="800" type="third">
```

---

### Section
**Purpose**: Page sections with padding and background variants

**Props**:
- `padding`: Spacing token value (e.g., "600", "800", "1200")
- `variant`: "default" | "stroke" | "subtle"

**Token mapping**: `padding="800"` → `padding: var(--sds-size-space-800)`

**When to use**: Content sections, cards, containers with consistent spacing

**Examples**:
```tsx
// Page section with generous padding
<Section padding="1600">

// Card with border
<Section variant="stroke" padding="600">
```

---

### Grid
**Purpose**: CSS Grid layouts (when Flex isn't sufficient)

**Props**:
- `columns`: Number of columns or template string
- `gap`: Spacing token value

**When to use**: Complex grid layouts, specific column/row requirements

**When not to use**: Simple layouts (use Flex instead)

---

## Compositions (`src/ui/compositions/`)

Complex, pre-built patterns combining primitives.

### Cards
**Purpose**: Content cards with headers, bodies, and actions

**Components**: `Card`, `PricingCard`, `ReviewCard`, `StatsCard`, `TestimonialCard`, `ProductInfoCard`

**When to use**: Product listings, pricing tables, reviews, statistics

---

### Forms
**Purpose**: Complete form layouts with validation

**Note**: Forms are meant as **examples** to reference, not rigid components

**Examples**: Login form, register form, contact form, shipping form, newsletter form

**When to use**: As reference patterns for building custom forms

---

### Headers/Footers
**Purpose**: Page navigation and footer components

**Components**: `Header`, `HeaderAuth`, `Footer`

**When to use**: Site-wide navigation, page footers

---

### Sections
**Purpose**: Pre-built page sections

**Examples**: Hero sections, card grids, panels, product pages

**When to use**: As starting points for common layout patterns

---

## Hooks (`src/ui/hooks/`)

UI-specific custom React hooks.

### useMediaQuery
**Purpose**: Responsive breakpoint detection

**Returns**:
```tsx
{
  isMobile: boolean,    // < 768px
  isTablet: boolean,    // 768px - 1024px
  isDesktop: boolean    // > 1024px
}
```

**Usage**:
```tsx
import { useMediaQuery } from "hooks";

function ResponsiveComponent() {
  const { isMobile } = useMediaQuery();
  
  return (
    <Flex direction={isMobile ? "column" : "row"}>
      {/* Content */}
    </Flex>
  );
}
```

---

## Data Layer (`src/data/`)

Data management with contexts, providers, services, and hooks.

### Hooks

#### useAuth
**Purpose**: Authentication state and methods

**Returns**:
```tsx
{
  user: User | null,
  login: (credentials) => Promise<void>,
  logout: () => Promise<void>,
  isLoading: boolean,
  error: Error | null
}
```

**Usage**:
```tsx
import { useAuth } from "data";

function Profile() {
  const { user, logout } = useAuth();
  
  if (!user) return <LoginForm />;
  
  return (
    <div>
      <Text>Welcome, {user.name}</Text>
      <Button onPress={logout}>Logout</Button>
    </div>
  );
}
```

---

#### usePricing
**Purpose**: Pricing plans, cart management, billing

**Returns**:
```tsx
{
  plans: Plan[],
  selectedPlan: Plan | null,
  updatePlan: (planId) => Promise<void>,
  cart: CartItem[],
  addToCart: (item) => void,
  removeFromCart: (itemId) => void
}
```

---

#### useProducts
**Purpose**: Product catalog, search, filtering

**Returns**:
```tsx
{
  products: Product[],
  filters: Filter[],
  applyFilter: (filter) => void,
  searchQuery: string,
  setSearchQuery: (query) => void
}
```

---

### Providers

Wrap your app with providers to enable data hooks:

```tsx
import { AllProviders } from "data";

function App() {
  return (
    <AllProviders>
      <YourApp />
    </AllProviders>
  );
}
```

**Individual providers**:
- `AuthProvider` - Authentication context
- `PricingProvider` - Pricing and subscriptions
- `ProductsProvider` - Product catalog
- `AllProviders` - Combined wrapper for all providers

---

## Quick Reference: When to Use What

### Buttons & Actions
- **Button**: Primary actions, forms, CTAs
- **IconButton**: Icon-only actions, toolbars
- **Link**: Navigation, external links
- **NavigationPill**: Page/section navigation

### Forms
- **Input**: Single-line text input
- **Textarea**: Multi-line text input
- **Select**: Dropdown selection, many options
- **Radio**: Single selection, few options (<10)
- **Checkbox**: Multiple selections, toggles
- **Switch**: Settings toggles, on/off states
- **Slider**: Numeric ranges

### Layout
- **Flex**: 95% of layout needs
- **Section**: Content containers, cards
- **Grid**: Complex grid requirements

### Content Display
- **Text variants**: All typography needs
- **Card compositions**: Product cards, pricing, reviews
- **Table**: Tabular data
- **Accordion**: Progressive disclosure

### Navigation
- **Navigation**: Tab-style navigation
- **Menu**: Dropdown menus
- **Tabs**: Tabbed content sections
- **Pagination**: Long lists

### Feedback
- **Notification**: Toast messages, alerts
- **Dialog**: Modals, confirmations
- **Tooltip**: Contextual help
