# Adapt Guide

How to apply the compound designing framework to your own project.

## Step 1: Context Engineering (`context/`)

Replace the SDS-specific content with your own:

### Product Context
- Replace `context/product/overview.md` with YOUR product description
- Replace `context/product/users.md` with YOUR audience
- Replace `context/product/user-journey.md` with YOUR user journey
- Replace `context/product/tech-stack.md` with YOUR stack

### Design System
- If using SDS: keep `context/design-system/` as-is
- If using your own design system: replace with your own tokens, components, and foundations
- Key files to create: component index, style tokens, layout system docs
- Always reference real token names from your actual CSS/theme file

## Step 2: Skill Curation (`.agent/skills/`)

Fork existing skills or create new ones:

### Keep what fits
- **Consultant** — works for any product (research, analysis, strategy)
- **Compounder** — works for any project (knowledge capture)
- **Critic** — adapt the compliance checklist to your design system

### Customize
- **Prototyper** — update references to point to your components and tokens
- Create new skills for domain-specific needs (e.g., a "copywriter" skill, a "data-analyst" skill)

### Skill creation pattern
1. Create folder: `.agent/skills/[name]/`
2. Write `SKILL.md` with: frontmatter → activation triggers → behavioral workflow → references list
3. Create `references/` with focused how-to docs
4. Keep SKILL.md thin — all detail in references

## Step 3: Workflow Orchestration (`.agent/AGENT.md`)

Adapt the process to your work:

- The double diamond (discover → define → develop → deliver) is a starting point
- Replace with your own process if needed (sprint cycles, design thinking, lean UX)
- Update the skill routing table to match your skills
- Keep the pre-task checklist — it ensures the agent reads context and knowledge first

## Step 4: Knowledge Compound (`knowledge/`)

Start fresh with your own lessons:

1. Clear the seed content (or keep it if applicable)
2. After each task, use the Compounder skill to capture lessons
3. Over time, `lessons-learned.md` and `preferences.md` will reflect YOUR project's patterns
4. The system gets smarter with every iteration

## Step 5: Entry Points

Update the tool-specific files to point to your AGENT.md:
- `CLAUDE.md` (Claude Code)
- `.cursor/rules/agent.mdc` (Cursor)
- `AGENTS.md` (Codex)
- `.windsurf/rules/agent.md` (Windsurf)

## What Makes It Compound

The key insight: each layer feeds the others.

```
Context → informs → Skills → orchestrated by → Workflow
                                                    ↓
Knowledge ← captured by ← Compounder ← triggered after → Tasks
    ↓
Context (updated) → informs next task better
```

Without the knowledge loop, you're just prompting. With it, the system improves every time.
