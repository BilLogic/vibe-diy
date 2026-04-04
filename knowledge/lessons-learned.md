# Lessons Learned

A running log of design mistakes and the rules they produced. Read this before starting any new task.

---

## 2026-04-04 — Don't use generic hero images

**What happened:** Used a stock photo hero image on the workshop landing page.

**What went wrong:** The page felt impersonal and generic -- indistinguishable from any template site. The stock image added visual noise without communicating anything specific about the workshop.

**Solution:** Replaced the hero with a typographic, content-driven layout that lets the title, subtitle, and hook do the work.

**Rule for next time:** Prefer typographic and content-driven heroes for workshop pages. Avoid decorative stock photography unless the image is specifically meaningful to the content.

---

## 2026-04-04 — Always specify CTA destination

**What happened:** Created a "Register Now" button in the landing page prototype.

**What went wrong:** The button had no `href` target or click behavior defined. During review, it was a dead end -- clicking it did nothing. This slipped through because the visual design looked complete.

**Solution:** Added the registration URL and defined the click behavior before marking the component done.

**Rule for next time:** Every button or CTA must have a target URL and click behavior defined at the time of creation. No button ships without a destination.

---

## 2026-04-04 — Check component index before inventing

**What happened:** Built a custom card component from scratch for the "What You'll Learn" section.

**What went wrong:** SDS already had a Cards composition that handled the exact use case. The custom component duplicated work, introduced inconsistency, and would not benefit from future design system updates.

**Solution:** Replaced the custom card with the existing SDS Cards composition from `context/design-system/components/index.md`.

**Rule for next time:** Always check `context/design-system/components/index.md` before building any new component. If SDS already provides it, use it.

---

## 2026-04-04 — Persona is behavioral, not context

**What happened:** Created `context/persona.md` as a separate file defining agent role, constraints, and tone.

**What went wrong:** The persona content is behavioral routing (HOW the agent should act) not product/design context (WHAT it needs to know). Having it in `context/` meant an extra file read on every task, and it was conceptually misplaced.

**Solution:** Merged persona content into `.agent/AGENT.md` under an "Agent Role" section. Deleted `context/persona.md`.

**Rule for next time:** Agent role, constraints, and tone belong in the orchestration doc (AGENT.md), not in context files. Context = domain knowledge. Behavior = orchestration.

---

## 2026-04-04 — Tool entry points should be thin pointers

**What happened:** Created `CLAUDE.md`, `AGENTS.md`, and tool-specific rule files with full skill lists, guardrails, and MCP instructions duplicated in each.

**What went wrong:** Four files with overlapping content meant four places to update when anything changed. Content drifted immediately.

**Solution:** Slimmed all entry points to a single line: `Read .agent/AGENT.md before starting any task.`

**Rule for next time:** Tool-specific entry points should be one-line pointers to `.agent/AGENT.md`. Never duplicate orchestration content across multiple files.

---

## 2026-04-04 — Skill docs must separate behavior from implementation detail

**What happened:** Wrote SKILL.md files with code examples, grep patterns, report templates, and source lists inlined.

**What went wrong:** 70-80 line SKILL.md files mixing behavioral routing and implementation detail. Defeats progressive disclosure — agent loads everything upfront.

**Solution:** Extracted implementation details into reference files (`references/output-format.md`, `references/compliance-checklist.md`). SKILL.md files now contain only: frontmatter, activation triggers, behavioral workflow, and references list.

**Rule for next time:** SKILL.md = WHEN + WHAT (behavioral). References = HOW (implementation, loaded on demand). Code examples and checklists in SKILL.md belong in a reference file.

---

## 2026-04-04 — Figma capture flattens everything into raw shapes

**What happened:** Used `generate_figma_design` (HTML-to-Figma capture) to push the landing page into the Figma file.

**What went wrong:** The capture tool screenshots the DOM and converts it to flat frames and text nodes. None of the SDS components (Button, Tag, Avatar) came through as real component instances — they were just rectangles with text inside. This means no variant switching, no design system connection, and no library updates.

**Solution:** Rebuilt the page using `use_figma` with `importComponentSetByKeyAsync` to pull real SDS component instances, then composed them in auto-layout frames.

**Rule for next time:** Use `generate_figma_design` only for initial visual reference or non-design-system pages. When the page uses library components, always use `use_figma` + `importComponentSetByKeyAsync` to build with real instances.

---

## 2026-04-04 — Figma page navigation doesn't persist between use_figma calls

**What happened:** Called `use_figma` to run `setCurrentPageAsync("Example")`, then made a second `use_figma` call to build the page.

**What went wrong:** The second call started back on the default page ("Cover"). `figma.getNodeById()` returned null because the target frame was on a different page. Three round-trips were wasted debugging this.

**Solution:** Combined `setCurrentPageAsync` + all frame creation logic into a single `use_figma` call.

**Rule for next time:** Never split page navigation and page manipulation into separate `use_figma` calls. One script = one atomic operation: navigate, find, build.

---

## 2026-04-04 — Use page.children to find frames, not getNodeById across pages

**What happened:** Used `figma.getNodeById("4292:2")` to locate "Frame 1" on the Example page.

**What went wrong:** `getNodeById` only resolves nodes on the currently active page. When the active page was different, it returned null — even though the metadata tool confirmed the node existed.

**Solution:** Switched to `examplePage.children.find(c => c.name === "Frame 1")` after navigating to the page.

**Rule for next time:** Always find frames by iterating `page.children` after `setCurrentPageAsync`. Reserve `getNodeById` for nodes you know are on the current page.

---

## 2026-04-04 — SDS library component keys for Figma MCP

**What happened:** Needed to import SDS components into Figma via the Plugin API.

**What we learned:** The key component keys for `importComponentSetByKeyAsync` are:
- **Button:** `33d3fd2b4347e293109aaeb8d93d23a629e4ae9f`
- **Tag:** `5341b99b54b5ab6f7861c131b48123ffbad32230`
- **Avatar:** `12bbf6743485dfc7076ef963966d0fcd52cdcd36`
- **SDS library key:** `lk-6e15ebee3f51e9110e050b0b8189a8e90c00af01fed10df7e35f19d73e0a8d867b2651fe36b61763b55ad43730a13b70d351b8a885bbbeb76682c14760e16768`

Use `search_design_system` with `includeLibraryKeys` filtered to the SDS key to find additional component keys without noise from other libraries.

**Rule for next time:** Before building in Figma, run `search_design_system` filtered to the SDS library key to get the exact component keys needed. Cache keys here as they're discovered.
