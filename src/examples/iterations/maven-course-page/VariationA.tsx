import { useMediaQuery } from "hooks";
import { Flex, FlexItem, Section } from "layout";
import {
    Accordion,
    AccordionItem,
    Avatar,
    Button,
    Tag,
    Text,
    TextContentHeading,
    TextContentTitle,
    TextHeading,
    TextSmall,
    TextSubheading,
} from "primitives";

/**
 * Variation A: Bold Editorial
 *
 * Dark teal background, large typographic hierarchy, premium feel.
 * Best for: Establishing strong brand authority and premium positioning.
 */
export function VariationA() {
    const { isMobile } = useMediaQuery();
    const sectionPadding = isMobile ? "600" : "1600";
    const flexGap = isMobile ? "600" : "1200";

    return (
        <Flex direction="column" alignSecondary="stretch">
            {/* Hero */}
            <Section variant="brand" paddingBottom="1600" paddingTop="1600">
                <Flex container type="quarter" gap={flexGap} alignSecondary="center">
                    <FlexItem size="fill">
                        <Flex direction="column" gap="600">
                            <Flex gap="200" wrap>
                                <Tag>Live Course</Tag>
                                <Tag variant="secondary" scheme="positive">Cohort 4 Open</Tag>
                            </Flex>
                            <TextContentTitle
                                title="AI for Product Designers"
                                subtitle="Master the tools, workflows, and mindset to design AI-powered products — from ideation to production."
                            />
                            <Flex direction={isMobile ? "column" : "row"} gap="400" alignSecondary={isMobile ? "stretch" : "center"}>
                                <Button variant="primary" onPress={() => { }}>
                                    Enroll Now — $499
                                </Button>
                                <Button variant="neutral" onPress={() => { }}>
                                    View Syllabus
                                </Button>
                            </Flex>
                            <Flex gap="600" wrap>
                                <Flex direction="column" gap="100">
                                    <TextHeading>4.9★</TextHeading>
                                    <TextSmall>Rating</TextSmall>
                                </Flex>
                                <Flex direction="column" gap="100">
                                    <TextHeading>1,200+</TextHeading>
                                    <TextSmall>Students</TextSmall>
                                </Flex>
                                <Flex direction="column" gap="100">
                                    <TextHeading>8 Weeks</TextHeading>
                                    <TextSmall>Duration</TextSmall>
                                </Flex>
                            </Flex>
                        </Flex>
                    </FlexItem>
                    {/* Enrollment card */}
                    <FlexItem size="minor">
                        <Section variant="stroke" padding="800">
                            <Flex direction="column" gap="600" alignSecondary="stretch">
                                <TextHeading>Next cohort starts</TextHeading>
                                <Text>March 10, 2025 · 8 weeks · Live sessions every Tuesday</Text>
                                <Button variant="primary" onPress={() => { }}>
                                    Reserve Your Spot
                                </Button>
                                <Button variant="neutral" onPress={() => { }}>
                                    Download Syllabus
                                </Button>
                                <TextSmall>30-day money-back guarantee</TextSmall>
                            </Flex>
                        </Section>
                    </FlexItem>
                </Flex>
            </Section>

            {/* Learning Outcomes */}
            <Section padding={sectionPadding}>
                <Flex container direction="column" gap={flexGap}>
                    <TextContentHeading
                        heading="What you'll learn"
                        subheading="Practical skills you can apply immediately to your design practice."
                    />
                    <Flex type="half" gap="600" wrap>
                        {[
                            "Prompt engineering for design workflows",
                            "AI-assisted user research and synthesis",
                            "Prototyping with generative AI tools",
                            "Evaluating AI features for UX quality",
                            "Designing responsible AI interactions",
                            "Shipping AI features with engineering teams",
                        ].map((outcome) => (
                            <Flex key={outcome} gap="300" alignSecondary="start">
                                <Text>✓</Text>
                                <Text>{outcome}</Text>
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            </Section>

            {/* Curriculum */}
            <Section padding={sectionPadding} variant="neutral">
                <Flex container direction="column" gap={flexGap}>
                    <TextContentHeading
                        heading="Course Curriculum"
                        subheading="8 modules, 24 lessons, 40+ hours of content"
                    />
                    <Accordion>
                        <AccordionItem title="Module 1: AI Foundations for Designers">
                            <Flex direction="column" gap="200">
                                <Text>Lesson 1.1 — How LLMs and diffusion models work</Text>
                                <Text>Lesson 1.2 — The AI design landscape in 2025</Text>
                                <Text>Lesson 1.3 — Setting up your AI toolkit</Text>
                            </Flex>
                        </AccordionItem>
                        <AccordionItem title="Module 2: Prompt Engineering for Design">
                            <Flex direction="column" gap="200">
                                <Text>Lesson 2.1 — Anatomy of an effective design prompt</Text>
                                <Text>Lesson 2.2 — Iterating with AI image generators</Text>
                                <Text>Lesson 2.3 — Text-to-UI workflows</Text>
                            </Flex>
                        </AccordionItem>
                        <AccordionItem title="Module 3: AI-Assisted Research">
                            <Flex direction="column" gap="200">
                                <Text>Lesson 3.1 — Synthesizing qualitative data with AI</Text>
                                <Text>Lesson 3.2 — Automated affinity mapping</Text>
                                <Text>Lesson 3.3 — Generating personas from research</Text>
                            </Flex>
                        </AccordionItem>
                        <AccordionItem title="Module 4: Prototyping with AI">
                            <Flex direction="column" gap="200">
                                <Text>Lesson 4.1 — AI-powered wireframing tools</Text>
                                <Text>Lesson 4.2 — Generating interactive prototypes</Text>
                                <Text>Lesson 4.3 — Testing AI-generated designs</Text>
                            </Flex>
                        </AccordionItem>
                    </Accordion>
                </Flex>
            </Section>

            {/* Instructor */}
            <Section padding={sectionPadding}>
                <Flex container direction={isMobile ? "column" : "row"} gap={flexGap} alignSecondary="center">
                    <Avatar initials="XM" size="large" />
                    <Flex direction="column" gap="400">
                        <Flex direction="column" gap="100">
                            <TextHeading>Xinran Ma</TextHeading>
                            <TextSubheading>Product Designer · Former Google, Figma</TextSubheading>
                        </Flex>
                        <Text>
                            Xinran has spent 10 years designing products at the intersection of AI and human experience.
                            She led the design of Google's first AI writing assistant and now teaches designers how to
                            work effectively with AI systems.
                        </Text>
                    </Flex>
                </Flex>
            </Section>

            {/* Reviews */}
            <Section padding={sectionPadding} variant="neutral">
                <Flex container direction="column" gap={flexGap}>
                    <TextContentHeading
                        heading="What students say"
                        subheading="From designers at Airbnb, Stripe, and early-stage startups."
                    />
                    <Flex type="third" gap="800" wrap>
                        {[
                            {
                                name: "Sarah K.",
                                role: "Senior Designer, Airbnb",
                                quote: "This course completely changed how I approach design. I now ship 3x faster using AI tools Xinran taught us.",
                            },
                            {
                                name: "Marcus T.",
                                role: "Product Designer, Stripe",
                                quote: "The curriculum is incredibly practical. Every lesson had something I could apply the next day at work.",
                            },
                            {
                                name: "Priya N.",
                                role: "Design Lead, Series B Startup",
                                quote: "Worth every penny. The live sessions with Xinran are gold — she answers every question with real depth.",
                            },
                        ].map((review) => (
                            <Section key={review.name} variant="stroke" padding="800">
                                <Flex direction="column" gap="400">
                                    <Text>"{review.quote}"</Text>
                                    <Flex gap="300" alignSecondary="center">
                                        <Avatar initials={review.name.split(" ").map(n => n[0]).join("")} size="small" />
                                        <Flex direction="column" gap="100">
                                            <TextSmall>{review.name}</TextSmall>
                                            <TextSmall>{review.role}</TextSmall>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Section>
                        ))}
                    </Flex>
                </Flex>
            </Section>

            {/* FAQ */}
            <Section padding={sectionPadding}>
                <Flex container direction="column" gap={flexGap}>
                    <TextContentHeading
                        heading="Frequently Asked Questions"
                        subheading="Everything you need to know before enrolling."
                    />
                    <Flex container type="third" alignPrimary="center">
                        <FlexItem size="major">
                            <Accordion>
                                <AccordionItem title="Do I need coding experience?">
                                    No coding required. This course is designed for designers who want to leverage AI tools
                                    without writing code. We focus on no-code and low-code AI workflows.
                                </AccordionItem>
                                <AccordionItem title="Are sessions recorded?">
                                    Yes, all live sessions are recorded and available within 24 hours. You have lifetime
                                    access to all recordings and materials.
                                </AccordionItem>
                                <AccordionItem title="What's the time commitment?">
                                    Expect 5–7 hours per week: 2 hours of live sessions, 2–3 hours of async lessons,
                                    and 1–2 hours of project work.
                                </AccordionItem>
                                <AccordionItem title="Is there a refund policy?">
                                    Yes, we offer a full refund within 30 days if you're not satisfied, no questions asked.
                                </AccordionItem>
                            </Accordion>
                        </FlexItem>
                    </Flex>
                </Flex>
            </Section>

            {/* Footer CTA */}
            <Section padding={sectionPadding} variant="neutral">
                <Flex container direction="column" gap="800" alignSecondary="center">
                    <TextContentTitle
                        align="center"
                        title="Ready to design with AI?"
                        subtitle="Join 1,200+ designers who've already transformed their practice."
                    />
                    <Flex direction={isMobile ? "column" : "row"} gap="400" alignSecondary={isMobile ? "stretch" : "center"}>
                        <Button variant="primary" onPress={() => { }}>
                            Enroll Now — $499
                        </Button>
                        <Button variant="neutral" onPress={() => { }}>
                            View Syllabus
                        </Button>
                    </Flex>
                </Flex>
            </Section>
        </Flex>
    );
}
