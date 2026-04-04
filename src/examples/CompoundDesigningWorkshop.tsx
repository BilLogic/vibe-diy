import clsx from "clsx";
import { useMediaQuery } from "hooks";
import { IconCalendar } from "icons";
import { placeholder as workshopPlaceholder } from "images";
import { Flex, FlexItem, Grid, Section } from "layout";
import {
  Avatar,
  Button,
  Image,
  Tag,
  Text,
  TextHeading,
  TextSmall,
  TextSubheading,
  TextLink,
  TextSubtitle,
  TextTitleHero,
  TextTitlePage,
} from "primitives";
import "./compound-designing-workshop.css";

const OUTCOMES: { title: string; body: string }[] = [
  {
    title: "Build prompts you can actually reuse",
    body: "Stop writing the same prompt from scratch every time. Set up a system where your best prompts compound into a shared library.",
  },
  {
    title: "Turn your design system into an AI co-pilot",
    body: "Wire tokens, components, and context into prompts so AI tools speak your design language—not generic defaults.",
  },
  {
    title: "Make every project faster than the last",
    body: "Learn the feedback loop that lets your system get smarter with use: context in, better output out, lessons captured.",
  },
  {
    title: "Walk out with something real",
    body: "Not slides you'll forget—an actual artifact you can extend tomorrow: a prompt template, a rubric, or a component spec.",
  },
];

type SectionIntroProps = {
  /** Optional element id for `aria-labelledby` on the parent section. */
  id?: string;
  heading: string;
  subheading?: string;
  align?: "start" | "center";
};

/**
 * Section title block matching `TextContentHeading` visuals with an `h2` for a correct document outline.
 */
function SectionIntro({
  id,
  heading,
  subheading,
  align = "start",
}: SectionIntroProps) {
  return (
    <Flex
      direction="column"
      gap="200"
      className={clsx("text-content-heading", `text-align-${align}`)}
    >
      <TextHeading elementType="h2" id={id}>
        {heading}
      </TextHeading>
      {subheading && <TextSubheading>{subheading}</TextSubheading>}
    </Flex>
  );
}

/**
 * Landing page for the CMU "Compound Designing" workshop—AI-powered design systems that improve over time.
 * Visual direction follows Stitch "Tartans Institutional" wireframes: tonal surfaces, cardinal accents.
 */
export function CompoundDesigningWorkshop() {
  const { isMobile, isTabletDown } = useMediaQuery();
  const sectionPadding = isMobile ? "800" : "1600";
  const blockGap = isMobile ? "600" : "800";

  const Title = isMobile ? TextTitlePage : TextTitleHero;

  return (
    <main
      className="compound-designing-workshop"
      aria-labelledby="workshop-hero-heading"
    >
      <Section
        elementType="header"
        className="cdw-hero"
        padding={sectionPadding}
        variant="subtle"
      >
        <Flex
          container
          direction="column"
          gap={blockGap}
          alignSecondary="center"
        >
          <Flex direction="column" gap="400" alignSecondary="center">
            <Flex
              className="cdw-hero-kicker-row"
              gap="300"
              alignSecondary="center"
            >
              <span className="cdw-accent-bar" aria-hidden />
              <TextSmall className="cdw-kicker">
                Carnegie Mellon University · Workshop
              </TextSmall>
            </Flex>
            <TextLink href="#sds-welcome">
              Simple Design System overview (Figma workshop frame)
            </TextLink>
            <Title
              className="text-align-center"
              elementType="h1"
              id="workshop-hero-heading"
            >
              Compound Designing
            </Title>
            <TextSubtitle className="text-align-center">
              Your design system should remember what works. Learn how to build
              prompt-powered systems that get better every time you use them.
            </TextSubtitle>
          </Flex>
          <Flex alignSecondary="center" direction="column">
            <Text elementType="p" className="text-align-center">
              <strong>The problem:</strong> you write a great prompt, get a great
              result… then start from zero next time. What if your design system
              could remember your best moves and make them repeatable?
            </Text>
          </Flex>
          <Flex
            gap="300"
            wrap
            alignPrimary="center"
            alignSecondary="center"
            aria-label="Workshop details"
          >
            <Tag scheme="neutral" variant="secondary">
              60 min
            </Tag>
            <Tag scheme="neutral" variant="secondary">
              Free
            </Tag>
            <Tag
              className="cdw-tag-cardinal"
              scheme="neutral"
              variant="secondary"
            >
              Tepper, CMU
            </Tag>
          </Flex>
          <Flex
            gap="400"
            alignSecondary="start"
            direction="row"
            wrap
            alignPrimary={isTabletDown ? "start" : "center"}
          >
            <IconCalendar
              aria-hidden
              className="cdw-when-icon"
              size="20"
            />
            <Flex direction="column" gap="200">
              <TextSmall className="cdw-kicker">When & where</TextSmall>
              <Text>
                Tonight! Friday, April 4 · 6:00–7:00 PM · Tepper School of
                Business, CMU. Bring your laptop—no prior AI experience needed.
              </Text>
            </Flex>
          </Flex>
          <Button
            className="cdw-btn-primary"
            href="#register"
            size="medium"
            variant="primary"
          >
            Register for the workshop
          </Button>
        </Flex>
      </Section>

      <Section
        padding={sectionPadding}
        variant="stroke"
        aria-labelledby="about-heading"
      >
        <Flex container direction="column" gap={blockGap}>
          <SectionIntro
            id="about-heading"
            heading="What is compound designing?"
            subheading="Think of it as compound interest—but for your design workflow."
          />
          <Flex
            container
            alignSecondary="center"
            direction={isTabletDown ? "column" : "row"}
            gap={blockGap}
            type="half"
            wrap
          >
            <FlexItem size="half">
              <Flex direction="column" gap="400">
                <Text>
                  Most design systems ship once and slowly go stale. Compound
                  designing flips that: you capture what works—tokens, prompts,
                  context, critique—and feed it back into the system so it gets
                  sharper every cycle.
                </Text>
                <Text>
                  The magic ingredient? Repeatable prompts. When your design
                  system knows your brand, your constraints, and your taste, AI
                  tools stop giving you generic output and start speaking your
                  language.
                </Text>
              </Flex>
            </FlexItem>
            <FlexItem size="half">
              <Image
                alt="Placeholder graphic—replace with CMU venue, studio, or session photography when available."
                aspectRatio="4-3"
                className="cdw-inline-illustration"
                size="large"
                src={workshopPlaceholder}
                variant="rounded"
              />
            </FlexItem>
          </Flex>
        </Flex>
      </Section>

      <Section
        className="cdw-section-muted"
        padding={sectionPadding}
        variant="subtle"
        aria-labelledby="speaker-heading"
      >
        <Flex container direction="column" gap={blockGap}>
          <TextHeading elementType="h2" id="speaker-heading">
            Speaker
          </TextHeading>
          <Flex
            className="cdw-card"
            gap="600"
            alignSecondary="start"
            direction={isTabletDown ? "column" : "row"}
            wrap
          >
            <FlexItem>
              <Avatar initials="BG" alt="" size="large" />
            </FlexItem>
            <FlexItem size="fill">
              <Flex direction="column" gap="400">
                <TextTitlePage elementType="h3">Bill Guo</TextTitlePage>
                <TextSubtitle>
                  BHCI graduate · UXA alum · Design Lead at PLUS
                </TextSubtitle>
                <Text>
                  Bill is obsessed with making design tools smarter—not by
                  replacing designers, but by giving them systems that remember
                  what great looks like. He's been building compounding
                  workflows so teams can ship faster without losing craft.
                </Text>
              </Flex>
            </FlexItem>
          </Flex>
        </Flex>
      </Section>

      <Section
        padding={sectionPadding}
        variant="stroke"
        aria-labelledby="outcomes-heading"
      >
        <Flex container direction="column" gap={blockGap}>
          <SectionIntro
            id="outcomes-heading"
            heading="What you'll walk away with"
            subheading="No fluff—just things you can use in studio on Monday."
          />
          <Grid
            container
            gap="600"
            columns="repeat(auto-fit, minmax(min(100%, 260px), 1fr))"
          >
            {OUTCOMES.map((item) => (
              <Flex key={item.title} className="cdw-card" direction="column" gap="300">
                <TextHeading elementType="h3">{item.title}</TextHeading>
                <Text>{item.body}</Text>
              </Flex>
            ))}
          </Grid>
        </Flex>
      </Section>

      <Section
        className="cdw-section-muted"
        padding={sectionPadding}
        variant="subtle"
        aria-labelledby="format-heading"
      >
        <Flex container direction="column" gap={blockGap}>
          <SectionIntro
            id="format-heading"
            heading="How the hour works"
            subheading="Half ideas, half doing. All applicable."
          />
          <Grid
            container
            gap="600"
            columns={
              isTabletDown ? "1fr" : "repeat(2, minmax(0, 1fr))"
            }
          >
            <Flex className="cdw-card" direction="column" gap="300">
              <TextSmall className="cdw-step-label">01</TextSmall>
              <TextHeading elementType="h3">Talk — 30 min</TextHeading>
              <Text>
                The "aha" part: why most prompt workflows break down, how
                design systems can fix that, and a live walkthrough of a
                compounding system in action.
              </Text>
            </Flex>
            <Flex className="cdw-card" direction="column" gap="300">
              <TextSmall className="cdw-step-label">02</TextSmall>
              <TextHeading elementType="h3">Hands-on — 30 min</TextHeading>
              <Text>
                The "do" part: open your laptop and build a reusable prompt
                template backed by real design context. You'll leave with
                something that works, not just notes.
              </Text>
            </Flex>
          </Grid>
          <TextSmall>
            Tonight at Tepper, 6 PM. Bring a laptop. That's it.
          </TextSmall>
        </Flex>
      </Section>

      <Section
        elementType="section"
        className="cdw-cta"
        padding={sectionPadding}
        variant="subtle"
        id="register"
        aria-labelledby="register-heading"
      >
        <Flex
          container
          direction="column"
          gap="600"
          alignSecondary="center"
        >
          <TextTitlePage
            elementType="h2"
            id="register-heading"
            className="text-align-center"
          >
            Grab a spot — it's free
          </TextTitlePage>
          <Text className="text-align-center">
            We just need a headcount so we don't run out of chairs (or snacks).
            Takes 10 seconds.
          </Text>
          <Button
            className="cdw-btn-primary"
            href="mailto:organizer@andrew.cmu.edu?subject=Register%3A%20Compound%20Designing%20workshop"
            size="medium"
            variant="primary"
          >
            Register now
          </Button>
          <TextSmall className="text-align-center">
            April 4 · 6–7 PM · Tepper School of Business, CMU
          </TextSmall>
        </Flex>
      </Section>
    </main>
  );
}
