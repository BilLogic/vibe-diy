# Common Code Patterns

Practical examples of common implementation patterns in SDS.

## Table of Contents

- [Responsive Layouts](#responsive-layouts)
- [Card Grids](#card-grids)
- [Navigation Patterns](#navigation-patterns)
- [Button Variations](#button-variations)
- [Typography Usage](#typography-usage)
- [Form Layouts](#form-layouts)
- [Data Integration](#data-integration)

---

## Responsive Layouts

### Basic Responsive Pattern

```tsx
import { useMediaQuery } from "hooks";
import { Flex, Section } from "layout";
import { Text, TextHeading } from "primitives";

function ResponsiveLayout() {
  const { isMobile } = useMediaQuery();

  return (
    <Section padding={isMobile ? "600" : "1200"}>
      <Flex
        direction={isMobile ? "column" : "row"}
        gap={isMobile ? "400" : "800"}
        alignPrimary={isMobile ? "flex-start" : "space-between"}
      >
        <TextHeading>Responsive Content</TextHeading>
        <Text>Adapts to viewport size</Text>
      </Flex>
    </Section>
  );
}
```

### Three-Breakpoint Pattern

```tsx
import { useMediaQuery } from "hooks";
import { Flex, Section } from "layout";

function MultiBreakpointLayout() {
  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  // isMobile: < 768px
  // isTablet: 768px - 1024px
  // isDesktop: > 1024px

  return (
    <Section padding={isMobile ? "400" : isTablet ? "800" : "1600"}>
      <Flex
        direction={isMobile ? "column" : "row"}
        gap={isMobile ? "400" : isTablet ? "600" : "800"}
        type={isDesktop ? "third" : undefined}
      >
        {/* Content */}
      </Flex>
    </Section>
  );
}
```

---

## Card Grids

### Auto-Responsive Card Grid

```tsx
import { Flex, Section } from "layout";
import { Card } from "compositions";

function CardGrid({ items }) {
  return (
    <Section padding="1200">
      <Flex direction="row" gap="600" type="third">
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </Flex>
    </Section>
  );
}
```

**Explanation**: `type="third"` creates an auto-responsive grid:
- Desktop: 3 columns
- Tablet: 2 columns  
- Mobile: 1 column

### Custom Responsive Card Grid

```tsx
import { useMediaQuery } from "hooks";
import { Flex, Section } from "layout";
import { Card } from "compositions";

function CustomCardGrid({ items }) {
  const { isMobile } = useMediaQuery();

  return (
    <Section padding={isMobile ? "600" : "1200"}>
      <Flex 
        direction={isMobile ? "column" : "row"} 
        gap="800"
        type={isMobile ? undefined : "third"}
      >
        {items.map((item) => (
          <Section key={item.id} variant="stroke" padding="600">
            <Flex direction="column" gap="400">
              <TextHeading>{item.title}</TextHeading>
              <Text>{item.description}</Text>
              <Button variant="primary">Learn More</Button>
            </Flex>
          </Section>
        ))}
      </Flex>
    </Section>
  );
}
```

### Two-Column Card Grid

```tsx
function TwoColumnGrid({ items }) {
  return (
    <Flex direction="row" gap="800" type="half">
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </Flex>
  );
}
```

---

## Navigation Patterns

### Pill Navigation

```tsx
import { Navigation, NavigationPill } from "primitives";
import { Flex } from "layout";
import { useState } from "react";

function PillNavigation() {
  const [selected, setSelected] = useState("home");

  return (
    <Navigation direction="row">
      <NavigationPill 
        isSelected={selected === "home"}
        onPress={() => setSelected("home")}
      >
        Home
      </NavigationPill>
      <NavigationPill 
        isSelected={selected === "about"}
        onPress={() => setSelected("about")}
      >
        About
      </NavigationPill>
      <NavigationPill 
        isSelected={selected === "contact"}
        onPress={() => setSelected("contact")}
      >
        Contact
      </NavigationPill>
    </Navigation>
  );
}
```

### Responsive Navigation

```tsx
import { useMediaQuery } from "hooks";
import { Navigation, NavigationPill } from "primitives";

function ResponsiveNavigation() {
  const { isMobile } = useMediaQuery();
  const [selected, setSelected] = useState("home");

  return (
    <Navigation direction={isMobile ? "column" : "row"}>
      <NavigationPill 
        isSelected={selected === "home"}
        onPress={() => setSelected("home")}
      >
        Home
      </NavigationPill>
      {/* More navigation items */}
    </Navigation>
  );
}
```

---

## Button Variations

### Button Variants

```tsx
import { Button } from "primitives";
import { Flex } from "layout";

function ButtonExamples() {
  return (
    <Flex direction="row" gap="400">
      {/* Primary - Highest emphasis */}
      <Button variant="primary" onPress={() => console.log("Primary")}>
        Primary Action
      </Button>

      {/* Neutral - Medium emphasis */}
      <Button variant="neutral" onPress={() => console.log("Neutral")}>
        Secondary Action
      </Button>

      {/* Subtle - Low emphasis */}
      <Button variant="subtle" onPress={() => console.log("Subtle")}>
        Tertiary Action
      </Button>
    </Flex>
  );
}
```

### Button Sizes

```tsx
function ButtonSizes() {
  return (
    <Flex direction="row" gap="400" alignPrimary="center">
      <Button variant="primary" size="small">Small</Button>
      <Button variant="primary" size="medium">Medium</Button>
      <Button variant="primary" size="large">Large</Button>
    </Flex>
  );
}
```

### Button States

```tsx
function ButtonStates() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    // Async operation
    await someAsyncFunction();
    setIsLoading(false);
  };

  return (
    <Flex direction="column" gap="400">
      {/* Default state */}
      <Button variant="primary" onPress={handleSubmit}>
        Default
      </Button>

      {/* Loading state */}
      <Button variant="primary" isDisabled={isLoading} onPress={handleSubmit}>
        {isLoading ? "Loading..." : "Submit"}
      </Button>

      {/* Disabled state */}
      <Button variant="primary" isDisabled>
        Disabled
      </Button>
    </Flex>
  );
}
```

---

## Typography Usage

### Heading Hierarchy

```tsx
import { Text, TextHeading, TextTitle, TextSubheading } from "primitives";
import { Flex, Section } from "layout";

function TypographyHierarchy() {
  return (
    <Section padding="800">
      <Flex direction="column" gap="600">
        {/* Page title */}
        <TextTitle variant="page">Page Title</TextTitle>

        {/* Section heading */}
        <TextHeading>Section Heading</TextHeading>

        {/* Subheading */}
        <TextSubheading>Subheading Text</TextSubheading>

        {/* Body text */}
        <Text>
          This is body text. Use the Text component for all paragraph content.
        </Text>

        {/* Small text */}
        <TextSmall>Small supporting text or captions</TextSmall>
      </Flex>
    </Section>
  );
}
```

### Text Emphasis

```tsx
import { Text, TextStrong, TextEmphasis, TextLink } from "primitives";

function TextEmphasisExample() {
  return (
    <Text>
      This is regular text with{" "}
      <TextStrong>strong emphasis</TextStrong> and{" "}
      <TextEmphasis>italic emphasis</TextEmphasis>. You can also use{" "}
      <TextLink href="/link">text links</TextLink>.
    </Text>
  );
}
```

---

## Form Layouts

### Basic Form Pattern

```tsx
import { Input, Button, Fieldset } from "primitives";
import { Flex, Section } from "layout";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation and submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <Section padding="800">
        <Flex direction="column" gap="600">
          <Input
            label="Name"
            value={formData.name}
            onChange={(value) => setFormData({ ...formData, name: value })}
            isRequired
            isInvalid={!!errors.name}
            errorMessage={errors.name}
          />

          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })}
            isRequired
            isInvalid={!!errors.email}
            errorMessage={errors.email}
          />

          <Textarea
            label="Message"
            value={formData.message}
            onChange={(value) => setFormData({ ...formData, message: value })}
            rows={5}
            isRequired
          />

          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Flex>
      </Section>
    </form>
  );
}
```

### Form with Radio Group

```tsx
import { RadioGroup, Radio, Input, Button } from "primitives";
import { Flex, Section } from "layout";

function PreferenceForm() {
  const [preference, setPreference] = useState("email");

  return (
    <Section padding="800">
      <Flex direction="column" gap="600">
        <RadioGroup
          label="Contact Preference"
          value={preference}
          onChange={setPreference}
        >
          <Radio value="email">Email</Radio>
          <Radio value="phone">Phone</Radio>
          <Radio value="sms">SMS</Radio>
        </RadioGroup>

        {preference === "email" && (
          <Input 
            label="Email Address" 
            type="email" 
            isRequired 
          />
        )}

        {preference === "phone" && (
          <Input 
            label="Phone Number" 
            type="tel" 
            isRequired 
          />
        )}

        <Button variant="primary">Save Preferences</Button>
      </Flex>
    </Section>
  );
}
```

---

## Data Integration

### Using Authentication

```tsx
import { useAuth } from "data";
import { Button, Text } from "primitives";
import { Flex, Section } from "layout";

function UserProfile() {
  const { user, logout, isLoading } = useAuth();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!user) {
    return <Text>Please log in</Text>;
  }

  return (
    <Section padding="800">
      <Flex direction="column" gap="400">
        <Text>Welcome, {user.name}</Text>
        <Text>{user.email}</Text>
        <Button variant="neutral" onPress={logout}>
          Log Out
        </Button>
      </Flex>
    </Section>
  );
}
```

### Using Products

```tsx
import { useProducts } from "data";
import { Flex, Section } from "layout";
import { Card } from "compositions";
import { Input } from "primitives";

function ProductList() {
  const { products, searchQuery, setSearchQuery, applyFilter } = useProducts();

  return (
    <Section padding="1200">
      <Flex direction="column" gap="800">
        {/* Search */}
        <Input
          label="Search Products"
          value={searchQuery}
          onChange={setSearchQuery}
          type="search"
        />

        {/* Product Grid */}
        <Flex direction="row" gap="600" type="third">
          {products.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </Flex>
      </Flex>
    </Section>
  );
}
```

### Using Pricing

```tsx
import { usePricing } from "data";
import { PricingCard } from "compositions";
import { Flex, Section } from "layout";
import { Button, NavigationPill, Navigation } from "primitives";
import { useState } from "react";

function PricingTable() {
  const { plans, updatePlan } = usePricing();
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <Section padding="1600">
      <Flex direction="column" gap="1200" alignPrimary="center">
        {/* Billing toggle */}
        <Navigation direction="row">
          <NavigationPill
            isSelected={billingCycle === "monthly"}
            onPress={() => setBillingCycle("monthly")}
          >
            Monthly
          </NavigationPill>
          <NavigationPill
            isSelected={billingCycle === "annual"}
            onPress={() => setBillingCycle("annual")}
          >
            Annual
          </NavigationPill>
        </Navigation>

        {/* Pricing cards */}
        <Flex direction="row" gap="800" type="third">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              {...plan}
              billingCycle={billingCycle}
              onSelectPlan={() => updatePlan(plan.id)}
            />
          ))}
        </Flex>
      </Flex>
    </Section>
  );
}
```

---

## Token Usage Examples

### Spacing Tokens

```tsx
// Small spacing
<Section padding="200">     // var(--sds-size-space-200)
<Flex gap="300">            // var(--sds-size-space-300)

// Standard spacing
<Section padding="600">     // var(--sds-size-space-600)
<Flex gap="800">            // var(--sds-size-space-800)

// Large spacing
<Section padding="1200">    // var(--sds-size-space-1200)
<Flex gap="1600">           // var(--sds-size-space-1600)
```

### Color Tokens in Custom CSS

```css
/* Text colors */
.element {
  color: var(--sds-color-text-default-default);
  color: var(--sds-color-text-subtle-default);
  color: var(--sds-color-text-brand-default);
}

/* Background colors */
.element {
  background: var(--sds-color-background-default-default);
  background: var(--sds-color-background-subtle-default);
  background: var(--sds-color-background-brand-default);
}

/* Border colors */
.element {
  border: 1px solid var(--sds-color-border-subtle-default);
  border: 1px solid var(--sds-color-border-default-default);
}
```

---

## Common Pitfalls to Avoid

### ❌ Hardcoding Values
```tsx
// WRONG
<div style={{ padding: "16px", color: "#111111" }}>
```

```tsx
// CORRECT
<Section padding="400">
  <Text>Content with design tokens</Text>
</Section>
```

### ❌ Custom Layout CSS
```tsx
// WRONG
<div className="grid grid-cols-3 gap-4">
```

```tsx
// CORRECT
<Flex direction="row" gap="400" type="third">
```

### ❌ Importing from React Aria Directly
```tsx
// WRONG
import { Button } from "@react-aria/button";
```

```tsx
// CORRECT
import { Button } from "primitives";
```
