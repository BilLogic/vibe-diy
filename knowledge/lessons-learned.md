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
