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
 * Variation C: Structured Pro
 *
 * Information-dense layout with persistent sidebar enrollment card.
 * Best for: Conversion-focused pages, users who want all info upfront.
 */
export function VariationC() {
    const { isMobile } = useMediaQuery();
    const sectionPadding = isMobile ? "600" : "1200";
    const flexGap = isMobile ? "600" : "800";

    return (
        <Flex direction="column" alignSecondary="stretch">
            {/* Hero — two-column with sticky-style sidebar */}
            <Section padding={sectionPadding}>
                <Flex container direction={isMobile ? "column" : "row"} gap="1200" alignSecondary="start">
                    {/* Main content */}
                    <FlexItem size="fill">
                        <Flex direction="column" gap="600">
                            <Flex gap="200" wrap>
                                <Tag>Live Course</Tag>
                                <Tag variant="secondary" scheme="positive">Cohort 4 Open</Tag>
                                <Tag variant="secondary">8 Weeks</Tag>
                            </Flex>
                            <TextContentTitle
                                title="AI for Product Designers"
                                subtitle="Master the tools, workflows, and mindset to design AI-powered products — from ideation to production."
                            />
                            <Flex gap="800" wrap>
                                <Flex direction="column" gap="100">
                                    <TextHeading>4.9★</TextHeading>
                                    <TextSmall>1,200+ ratings</TextSmall>
                                </Flex>
                                <Flex direction="column" gap="100">
                                    <TextHeading>24 Lessons</TextHeading>
                                    <TextSmall>40+ hours</TextSmall>
                                </Flex>
                                <Flex direction="column" gap="100">
                                    <TextHeading>Lifetime</TextHeading>
                                    <TextSmall>Access</TextSmall>
                                </Flex>
                            </Flex>

                            {/* Instructor inline */}
                            <Section variant="stroke" padding="600">
                                <Flex gap="400" alignSecondary="center">
                                    <Avatar initials="XM" size="small" />
                                    <Flex direction="column" gap="100">
                                        <TextSmall>Instructor</TextSmall>
                                        <Text>Xinran Ma · Former Google, Figma · 10 years in AI design</Text>
                                    </Flex>
                                </Flex>
                            </Section>

                            {/* What's included */}
                            <Flex direction="column" gap="300">
                                <TextSubheading>What's included</TextSubheading>
                                {[
                                    "8 live sessions with Q&A (recorded)",
                                    "24 async video lessons",
                                    "Downloadable templates and resources",
                                    "Private community access",
                                    "Certificate of completion",
                                    "Lifetime access to all materials",
                                ].map((item) => (
                                    <Flex key={item} gap="300" alignSecondary="center">
                                        <Text>✓</Text>
                                        <Text>{item}</Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </Flex>
                    </FlexItem>

                    {/* Enrollment sidebar — stacks below main content on mobile */}
                    <FlexItem size={isMobile ? "fill" : "minor"}>
                        <Section variant="stroke" padding="800">
                            <Flex direction="column" gap="600" alignSecondary="stretch">
                                <Flex direction="column" gap="200">
                                    <TextHeading>$499</TextHeading>
                                    <TextSmall>One-time payment · Lifetime access</TextSmall>
                                </Flex>
                                <Button variant="primary" onPress={() => { }}>
                                    Enroll Now
                                </Button>
                                <Button variant="neutral" onPress={() => { }}>
                                    Download Syllabus
                                </Button>
                                <Flex direction="column" gap="200">
                                    <TextSmall>Next cohort: March 10, 2025</TextSmall>
                                    <TextSmall>Live sessions: Tuesdays 6–8pm PT</TextSmall>
                                    <TextSmall>30-day money-back guarantee</TextSmall>
                                </Flex>
                            </Flex>
                        </Section>
                    </FlexItem>
                </Flex>
            </Section>

            {/* Curriculum — compact accordion */}
            <Section padding={sectionPadding} variant="neutral">
                <Flex container direction="column" gap={flexGap}>
                    <TextContentHeading
                        heading="Curriculum"
                        subheading="8 modules · 24 lessons · 40+ hours"
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
                        <AccordionItem title="Modules 5–8">
                            <Flex direction="column" gap="200">
                                <Text>Module 5 — Evaluating AI UX quality</Text>
                                <Text>Module 6 — Responsible AI design</Text>
                                <Text>Module 7 — Shipping AI features with engineering</Text>
                                <Text>Module 8 — Capstone project and portfolio</Text>
                            </Flex>
                        </AccordionItem>
                    </Accordion>
                </Flex>
            </Section>

            {/* Instructor — detailed */}
            <Section padding={sectionPadding}>
                <Flex container direction={isMobile ? "column" : "row"} gap={flexGap} alignSecondary="start">
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
                        <Flex gap="600" wrap>
                            <Flex direction="column" gap="100">
                                <TextHeading>10+</TextHeading>
                                <TextSmall>Years experience</TextSmall>
                            </Flex>
                            <Flex direction="column" gap="100">
                                <TextHeading>3</TextHeading>
                                <TextSmall>Courses taught</TextSmall>
                            </Flex>
                            <Flex direction="column" gap="100">
                                <TextHeading>4.9★</TextHeading>
                                <TextSmall>Instructor rating</TextSmall>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Section>

            {/* Reviews — compact list */}
            <Section padding={sectionPadding} variant="neutral">
                <Flex container direction="column" gap={flexGap}>
                    <TextContentHeading
                        heading="Student Reviews"
                        subheading="4.9 out of 5 · 1,200+ reviews"
                    />
                    <Flex direction="column" gap="400">
                        {[
                            {
                                name: "Sarah K.",
                                role: "Senior Designer, Airbnb",
                                quote: "This course completely changed how I approach design. I now ship 3x faster.",
                                rating: "★★★★★",
                            },
                            {
                                name: "Marcus T.",
                                role: "Product Designer, Stripe",
                                quote: "The curriculum is incredibly practical. Every lesson had something I could apply the next day.",
                                rating: "★★★★★",
                            },
                            {
                                name: "Priya N.",
                                role: "Design Lead, Series B Startup",
                                quote: "Worth every penny. The live sessions with Xinran are gold.",
                                rating: "★★★★★",
                            },
                        ].map((review) => (
                            <Section key={review.name} variant="stroke" padding="600">
                                <Flex direction={isMobile ? "column" : "row"} gap="600" alignSecondary="start">
                                    <Flex gap="300" alignSecondary="center">
                                        <Avatar initials={review.name.split(" ").map((n: string) => n[0]).join("")} size="small" />
                                        <Flex direction="column" gap="100">
                                            <TextSmall>{review.name}</TextSmall>
                                            <TextSmall>{review.role}</TextSmall>
                                        </Flex>
                                    </Flex>
                                    <Flex direction="column" gap="200">
                                        <TextSmall>{review.rating}</TextSmall>
                                        <Text>"{review.quote}"</Text>
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
                        heading="FAQ"
                        subheading="Common questions before enrolling."
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
                <Flex container direction={isMobile ? "column" : "row"} gap="800" alignSecondary={isMobile ? "stretch" : "center"} alignPrimary="space-between">
                    <TextContentTitle
                        title="Ready to design with AI?"
                        subtitle="Join 1,200+ designers. Next cohort: March 10, 2025."
                    />
                    <Flex direction={isMobile ? "column" : "row"} gap="400" alignSecondary={isMobile ? "stretch" : "center"} wrap>
                        <Button variant="primary" onPress={() => { }}>Enroll Now — $499</Button>
                        <Button variant="neutral" onPress={() => { }}>Download Syllabus</Button>
                    </Flex>
                </Flex>
            </Section>
        </Flex>
    );
}
