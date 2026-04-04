# Design Heuristics

Nielsen's 10 usability heuristics adapted for UI/landing page evaluation with SDS.

## 1. Visibility of System Status

- Is the current state clear to the user? (active nav item, form progress)
- Do interactive elements show hover/focus/active states?
- Are loading states handled?

**SDS check:** Button, Link, and Tab should show active states. Use Notification for system feedback.

## 2. Match Between System and Real World

- Does the language match the audience? (CMU design students, not engineers)
- Are icons intuitive and recognizable?
- Does the information flow follow user expectations?

**SDS check:** Use Text component with appropriate variants for reading hierarchy.

## 3. User Control and Freedom

- Can users navigate back easily?
- Is there a clear way to dismiss dialogs/overlays?
- Is the navigation always accessible?

**SDS check:** Dialog must have close mechanism. Navigation should be persistent.

## 4. Consistency and Standards

- Are SDS components used (not custom HTML)?
- Are design tokens used (not hardcoded values)?
- Is the same component used for the same purpose throughout?

**SDS check:** Grep for hardcoded hex colors, px values, or non-SDS elements.

## 5. Error Prevention

- Are form inputs validated before submission?
- Are destructive actions confirmed?
- Do CTAs have clear destinations?

**SDS check:** Input and Textarea should have validation props. Button must have onClick/href.

## 6. Recognition Rather Than Recall

- Is the value proposition visible without scrolling?
- Are key details (date, time, location) easy to find?
- Can users scan headings to understand the page?

**SDS check:** Text hierarchy should make scanning possible (title → heading → body).

## 7. Flexibility and Efficiency of Use

- Does the page work on mobile and desktop?
- Are touch targets large enough (44x44px)?
- Can power users navigate via keyboard?

**SDS check:** Use `useMediaQuery` for responsive. Check IconButton sizing.

## 8. Aesthetic and Minimalist Design

- Does every element serve a purpose?
- Is there unnecessary decoration?
- Is whitespace used effectively?

**SDS check:** Follow spacing tokens. Avoid decorative elements that don't communicate.

## 9. Help Users Recognize, Diagnose, and Recover from Errors

- Are error messages clear and specific?
- Do form errors indicate what went wrong and how to fix it?

**SDS check:** Notification component for error messages. Input validation feedback.

## 10. Help and Documentation

- Is the workshop format and expectations clear?
- Are prerequisites listed?
- Is there a way to get help (contact, FAQ)?

**SDS check:** Accordion for FAQ. Include contact information.
