# Workshop Activities

4 hands-on activities that demonstrate the compound designing framework.

## Activity 1: Context Walkthrough

**Demonstrates:** Layer 1 — how context grounds the agent

**What to do:**
1. Open `context/` in the file explorer
2. Read `context/README.md` — understand the three buckets
3. Browse `context/design-system/` — foundations, styles, components
4. Open `context/design-system/components/index.md` — see the categorized component table
5. Open `context/design-system/styles/color.md` — see real `--sds-*` token names
6. Browse `context/product/` — overview, users, journey, tech stack

**What to observe:**
- The agent has everything it needs to make informed design decisions
- Design system docs reference real token names from `src/theme.css`
- Product context tells the agent WHO it's designing for and WHY

**Expected outcome:** Understanding of how context engineering prevents generic AI output

## Activity 2: Skill Exploration

**Demonstrates:** Layer 2 — progressive disclosure of references

**What to do:**
1. Open `.agent/skills/` — see the 5 skill folders
2. Open `prototyper/SKILL.md` — read the thin behavioral workflow
3. Note the "References (load on demand)" section — references aren't pre-loaded
4. Open one reference (e.g., `prototyper/references/component-index.md`) — see the compact format
5. Compare with `critic/SKILL.md` — different purpose, different references, same pattern

**What to observe:**
- SKILL.md files are thin — they describe WHEN and WHAT, not HOW
- References are loaded on demand, not all at once
- Each skill has focused references for its specific job
- The pattern is consistent: frontmatter → activation triggers → workflow → references list

**Expected outcome:** Understanding of skill curation and progressive disclosure

## Activity 3: Full Design Workflow

**Demonstrates:** Layers 1-3 working together

**Skills used:** Consultant → Prototyper → Critic

**What to do:**
1. Open `prompts/landing-page.md` and paste the demo prompt
2. Watch the agent follow `.agent/AGENT.md` — it should:
   - Check for a plan (none exists) → activate Consultant
   - Consultant reads product context, produces a plan
   - Activate Prototyper → use Stitch MCP for initial design
   - Present for review → implement in code
   - Suggest Critic review → run compliance check
3. Optionally use Figma MCP to export the design for visual refinement

**What to observe:**
- The agent reads context files before designing
- It follows the double diamond process (discover → define → develop → deliver)
- Each skill hands off to the next naturally
- The Critic checks for SDS compliance (no raw HTML, no hardcoded values)

**Expected outcome:** A working landing page prototype built through the compound designing workflow

## Activity 4: Knowledge Compounding

**Demonstrates:** Layer 4 — the system learns from experience

**Skills used:** Compounder

**What to do:**
1. After Activity 3, identify something that could be improved (e.g., "the hero section was too generic")
2. Tell the agent: "Let's learn from this — capture this as a lesson"
3. Watch the Compounder skill:
   - Identify it as a lesson learned
   - Structure it using the template from `references/compounding-guide.md`
   - Write to `knowledge/lessons-learned.md`
   - Log in `knowledge/changelog.md`
4. Start a new design task and observe the agent checking lessons-learned first

**What to observe:**
- Knowledge is captured in a structured format
- The changelog tracks when knowledge was added
- Future tasks automatically check lessons-learned before starting
- The system gets smarter with each iteration

**Expected outcome:** Understanding of how compound designing creates a feedback loop that improves over time
