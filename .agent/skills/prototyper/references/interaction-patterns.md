# Interaction Patterns

Common UI patterns for landing pages using SDS components.

## Hero Section

A full-width opening section that hooks the visitor.

**Components:** `Section` + `Flex` + `Text` (title-hero, subtitle) + `Button`

```tsx
<Section padding="2400">
  <Flex direction="column" gap="600" align="center">
    <Text variant="title-hero">Workshop Title</Text>
    <Text variant="subtitle">One-line hook that explains the value</Text>
    <Button variant="primary" size="large">Register Now</Button>
  </Flex>
</Section>
```

**Accessibility:** Ensure heading hierarchy starts at h1. CTA button must have a destination.

## Feature Grid

A multi-column layout highlighting 3-4 key points.

**Components:** `Section` + `Grid` + `Flex` + `Text` + optionally `Icon`

```tsx
<Section padding="1200">
  <Grid columns={3} gap="600">
    <Flex direction="column" gap="300">
      <Icon><IconLightbulb /></Icon>
      <Text variant="heading">Feature Title</Text>
      <Text variant="body">Brief description of this feature.</Text>
    </Flex>
    {/* Repeat for each feature */}
  </Grid>
</Section>
```

**Responsive:** Switch to single column on mobile via `useMediaQuery`.

## CTA Section

A focused call-to-action block, often repeated at page bottom.

**Components:** `Section` (brand background) + `Flex` + `Text` + `Button`

```tsx
<Section padding="1200" background="brand">
  <Flex direction="column" gap="400" align="center">
    <Text variant="heading" color="on-brand">Ready to join?</Text>
    <Button variant="secondary" size="large">Register Now</Button>
  </Flex>
</Section>
```

## Speaker/Bio Section

Introduce a person with photo and credentials.

**Components:** `Section` + `Flex` + `Avatar` + `Text`

```tsx
<Section padding="1200">
  <Flex gap="800" align="center">
    <Avatar src="speaker.jpg" size="large" />
    <Flex direction="column" gap="200">
      <Text variant="heading">Speaker Name</Text>
      <Text variant="body">Bio and credentials here.</Text>
    </Flex>
  </Flex>
</Section>
```

## FAQ Section

Collapsible Q&A using Accordion.

**Components:** `Section` + `Accordion`

```tsx
<Section padding="1200">
  <Text variant="heading">Frequently Asked Questions</Text>
  <Accordion>
    <Accordion.Item title="Question 1?">
      <Text>Answer to question 1.</Text>
    </Accordion.Item>
  </Accordion>
</Section>
```

## Navigation Bar

Top-of-page navigation.

**Components:** `Navigation` + `Logo` + `Button`

```tsx
<Navigation>
  <Logo />
  <Flex gap="400">
    <Link href="#about">About</Link>
    <Link href="#schedule">Schedule</Link>
    <Button variant="primary" size="small">Register</Button>
  </Flex>
</Navigation>
```

## General Rules

- Every section uses `Section` for consistent padding
- Content within sections uses `Flex` or `Grid`
- Text hierarchy: one `title-hero`, then `heading` for sections, `body` for content
- All buttons need a destination (href or onClick)
- Test with keyboard navigation
