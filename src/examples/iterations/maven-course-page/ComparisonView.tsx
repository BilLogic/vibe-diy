import { Flex, Section } from "layout";
import { Navigation, NavigationPill, TextContentHeading } from "primitives";
import { useState } from "react";
import { VariationA } from "./VariationA";
import { VariationB } from "./VariationB";
import { VariationC } from "./VariationC";

type Variation = "A" | "B" | "C";

const VARIATIONS: { key: Variation; label: string; description: string }[] = [
    { key: "A", label: "A · Bold Editorial", description: "Dark teal, premium, high-contrast" },
    { key: "B", label: "B · Clean & Airy", description: "Light, welcoming, editorial" },
    { key: "C", label: "C · Structured Pro", description: "Dense, sidebar, conversion-focused" },
];

export function MavenCoursePageComparison() {
    const [selected, setSelected] = useState<Variation>("A");
    const current = VARIATIONS.find((v) => v.key === selected)!;

    return (
        <Flex direction="column" alignSecondary="stretch">
            {/* Switcher bar */}
            <Section padding="600" variant="stroke">
                <Flex container direction="column" gap="400" alignSecondary="center">
                    <TextContentHeading
                        align="center"
                        heading="Maven Course Page — Design Iterations"
                        subheading={`Viewing: ${current.label} — ${current.description}`}
                    />
                    <Navigation direction="row">
                        {VARIATIONS.map((v) => (
                            <NavigationPill
                                key={v.key}
                                isSelected={selected === v.key}
                                onPress={() => setSelected(v.key)}
                            >
                                {v.label}
                            </NavigationPill>
                        ))}
                    </Navigation>
                </Flex>
            </Section>

            {/* Variation content */}
            {selected === "A" && <VariationA />}
            {selected === "B" && <VariationB />}
            {selected === "C" && <VariationC />}
        </Flex>
    );
}
