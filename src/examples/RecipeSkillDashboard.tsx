import { Card } from "compositions";
import {
    IconActivity,
    IconAlertCircle,
    IconArrowRight,
    IconAward,
} from "icons";
import { Flex, FlexItem, Section } from "layout";
import {
    Avatar,
    AvatarBlock,
    Button,
    Image,
    Notification,
    Tag,
    Text,
    TextHeading,
    TextSmall,
    TextStrong,
} from "primitives";
import { useState } from "react";

export function RecipeSkillDashboard() {
    const [spinachDismissed, setSpinachDismissed] = useState(false);

    return (
        <Section padding="800" variant="subtle">
            <Flex direction="column" gap="800" alignPrimary="stretch">

                {/* Header Section */}
                <Flex alignPrimary="space-between" alignSecondary="center">
                    <AvatarBlock title="Good morning, Chef!" description="Ready to learn?">
                        <Avatar size="large" initials="BC" />
                    </AvatarBlock>
                    <Button variant="neutral">
                        Inventory <IconActivity />
                    </Button>
                </Flex>

                {/* Skill Tree Section */}
                <Flex direction="column" gap="400" alignPrimary="stretch">
                    <TextHeading>Your Skill Tree</TextHeading>
                    <Flex wrap gap="400" alignPrimary="stretch">
                        <FlexItem size="half">
                            <Card variant="stroke" padding="600" direction="vertical">
                                <Flex alignPrimary="space-between" alignSecondary="center">
                                    <Flex gap="200" alignSecondary="center">
                                        <IconAward />
                                        <Text>Knife Skills</Text>
                                    </Flex>
                                    <Tag scheme="positive" variant="primary">Level 3</Tag>
                                </Flex>
                                <Flex direction="column" gap="100" style={{ marginTop: "1rem" }}>
                                    <Flex alignPrimary="space-between">
                                        <TextSmall>Next: Julienne Cut</TextSmall>
                                        <TextSmall>70%</TextSmall>
                                    </Flex>
                                    <div style={{ height: 8, background: "rgba(0,0,0,0.1)", borderRadius: 4, width: "100%" }}>
                                        <div style={{ height: "100%", width: "70%", background: "#4caf50", borderRadius: 4 }} />
                                    </div>
                                </Flex>
                            </Card>
                        </FlexItem>

                        <FlexItem size="half">
                            <Card variant="stroke" padding="600" direction="vertical">
                                <Flex alignPrimary="space-between" alignSecondary="center">
                                    <Flex gap="200" alignSecondary="center">
                                        <IconActivity />
                                        <Text>Emulsions</Text>
                                    </Flex>
                                    <Tag scheme="warning" variant="primary">Level 1</Tag>
                                </Flex>
                                <Flex direction="column" gap="100" style={{ marginTop: "1rem" }}>
                                    <Flex alignPrimary="space-between">
                                        <TextSmall>Next: Basic Vinaigrette</TextSmall>
                                        <TextSmall>20%</TextSmall>
                                    </Flex>
                                    <div style={{ height: 8, background: "rgba(0,0,0,0.1)", borderRadius: 4, width: "100%" }}>
                                        <div style={{ height: "100%", width: "20%", background: "#ff9800", borderRadius: 4 }} />
                                    </div>
                                </Flex>
                            </Card>
                        </FlexItem>
                    </Flex>
                </Flex>

                {/* Use It Up Section */}
                <Flex direction="column" gap="400" alignPrimary="stretch">
                    <TextHeading>Use It Up</TextHeading>

                    {!spinachDismissed && (
                        <Notification
                            variant="alert"
                            icon={<IconAlertCircle />}
                            isDismissible
                            onClick={() => setSpinachDismissed(true)} // A workaround since Notification has no onDismiss handler yet
                        >
                            <Flex direction="column" gap="100">
                                <TextStrong>Expiring Soon</TextStrong>
                                <Text>You have 1 bag of Spinach expiring in 2 days.</Text>
                            </Flex>
                        </Notification>
                    )}

                    <Card
                        variant="default"
                        padding="600"
                        direction="vertical"
                        asset={
                            <Image
                                src="https://images.unsplash.com/photo-1510698114420-f5973fe88c1b?auto=format&fit=crop&q=80&w=800"
                                alt="Crispy Spinach Omelette"
                                aspectRatio="16-9"
                            />
                        }
                    >
                        <Flex direction="column" gap="200" alignPrimary="stretch">
                            <Flex alignPrimary="space-between" alignSecondary="start">
                                <Flex direction="column" gap="100">
                                    <TextHeading elementType="h3">Crispy Spinach Omelette</TextHeading>
                                    <Text>Use up your spinach while practicing egg techniques.</Text>
                                </Flex>
                            </Flex>

                            <Flex gap="200" style={{ marginTop: "0.5rem" }}>
                                <Tag scheme="neutral" variant="primary">Uses: Spinach</Tag>
                                <Tag scheme="positive" variant="primary">Practice: Pan-Searing</Tag>
                            </Flex>

                            <Flex style={{ marginTop: "1rem" }} alignPrimary="end">
                                <Button variant="primary">
                                    Start Cooking <IconArrowRight />
                                </Button>
                            </Flex>
                        </Flex>
                    </Card>
                </Flex>

            </Flex>
        </Section>
    );
}
