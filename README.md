# Compound Designing Workshop

> How to stop repeating prompts and start building a system that gets smarter every time you design with it

**A 60-minute workshop by [Bill Guo](https://www.linkedin.com/in/billguodesign/) at Carnegie Mellon University**
BHCI grad, UXA alum, Design Lead at PLUS

---

## What Is Compound Designing?

Most AI-assisted design is a one-shot loop: prompt, get output, fix it, repeat. Compound designing breaks this by structuring four layers that build on each other:

| Layer | What it does | Where it lives |
|-------|-------------|----------------|
| **1. Context Engineering** | Grounds the agent in your design system, product, and audience | `context/` |
| **2. Skill Curation** | Focused behaviors with progressive reference loading | `.agent/skills/` |
| **3. Workflow Orchestration** | Sequences skills through a design process | `.agent/AGENT.md` |
| **4. Knowledge Compound** | Captures lessons so the system improves over time | `knowledge/` |

The result: every design task is informed by every previous one.

---

## Quick Start

### 1. Clone and install

```bash
git clone https://github.com/BilLogic/sds.git
cd sds
npm install
```

### 2. Open in your AI tool

| Tool | What auto-loads | Entry point |
|------|----------------|-------------|
| Claude Code | `CLAUDE.md` | Points to `.agent/AGENT.md` |
| Cursor | `.cursor/rules/agent.mdc` | Points to `.agent/AGENT.md` |
| Codex | `AGENTS.md` | Points to `.agent/AGENT.md` |
| Windsurf | `.windsurf/rules/agent.md` | Points to `.agent/AGENT.md` |

### 3. Configure MCPs

Connect these before starting:

- **Stitch MCP** — generates UI code from design specs
- **Figma MCP** — reads/writes Figma files for design-code sync

In **Claude Code**: Settings > Plugins > enable Stitch + Figma
In **Cursor**: MCP settings panel

### 4. Try the demo prompt

Open `prompts/landing-page.md` and paste it into your AI tool. Watch the agent:
1. Check for a plan (none exists) — hands off to Consultant
2. Research product context and user needs
3. Generate a prototype via Stitch MCP
4. Implement in code with SDS components and tokens
5. Suggest Critic review for compliance

---

## Repo Structure

```
sds/
├── .agent/
│   ├── AGENT.md                    # Workflow orchestration (Layer 3)
│   ├── SKILL.md                    # Skill router
│   └── skills/
│       ├── consultant/             # Research, analysis, strategy
│       ├── prototyper/             # UI generation with SDS
│       ├── critic/                 # Design evaluation + compliance
│       ├── compounder/             # Knowledge capture
│       └── workshop-assistant/     # Workshop guidance + adaptation
│
├── context/                        # Layer 1: Context Engineering
│   ├── design-system/              # Foundations, styles, components
│   │   ├── foundations/            # Principles, accessibility, layout
│   │   ├── styles/                 # Color, typography, elevation, shape, motion, icons
│   │   └── components/             # Master component index
│   └── product/                    # Overview, users, journey, tech stack
│
├── knowledge/                      # Layer 4: Knowledge Compound
│   ├── lessons-learned.md          # Mistakes and rules
│   ├── preferences.md              # Standing decisions
│   ├── ideations.md                # Ideas worth exploring
│   └── changelog.md                # Knowledge change log
│
├── prompts/                        # Starter prompts for hands-on
│   ├── landing-page.md             # Main demo prompt
│   ├── explore.md                  # Open-ended experimentation
│   └── assets/                     # Workshop presentation assets
│
├── src/                            # SDS component library (unchanged)
│   ├── ui/primitives/              # 28 components
│   ├── ui/layout/                  # Flex, Grid, Section
│   ├── ui/compositions/            # Cards, Forms, Headers, Footers
│   ├── ui/icons/                   # 290+ icons
│   └── theme.css                   # Design tokens (--sds-* properties)
│
├── docs/                           # Repo development docs
└── CLAUDE.md / AGENTS.md / etc.    # Tool-specific entry points
```

---

## Workshop Format

| Time | What | Mode |
|------|------|------|
| 0-30 min | Talk: the problem, the framework, live demo | Presentation |
| 30-60 min | Hands-on: students build with compound designing | Interactive |

### Demo Activities

1. **Context walkthrough** — explore the 4 layers in the file explorer
2. **Skill exploration** — see progressive disclosure in action
3. **Full design workflow** — Consultant > Prototyper > Stitch MCP > Critic
4. **Knowledge compounding** — agent learns from a mistake

See `.agent/skills/workshop-assistant/references/workshop-activities.md` for detailed instructions.

---

## Dev Commands

```bash
npm run app:dev       # Local app → http://localhost:8000
npm run storybook     # Storybook → http://localhost:6006
```

## Resources

- Upstream: [figma/sds](https://github.com/figma/sds)
- Design file: [Simple Design System](https://www.figma.com/community/file/1380235722331273046/simple-design-system)
- Storybook: https://figma.github.io/sds/storybook
- Docs: [`docs/index.md`](./docs/index.md)

## Credits

- **Compound Engineering** — [Kieran Klaassen at Every](https://every.to/source-code/compound-engineering-how-every-codes-with-agents-af3a1bae-cf9b-458e-8048-c6b4ba860e62)
- **Material Design** — Google: [m3.material.io](https://m3.material.io/)
- **SDS** — Figma: [figma/sds](https://github.com/figma/sds)
