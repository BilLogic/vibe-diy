import { useMediaQuery } from "hooks";
import { Flex, FlexItem, Section } from "layout";
import {
  Logo,
  Text,
  TextHeading,
  TextLink,
  TextLinkList,
  TextListItem,
} from "primitives";

/**
 * SDS “Hello” welcome view — mirrors the Storybook `Hello` story and the
 * Simple Design System workshop frame pattern (Figma:
 * [Workshop file](https://www.figma.com/design/ZWM9zCu5KDreD3D3bwYTQd/Simple-Design-System--Workshop-?node-id=3-5)).
 * Built with primitives, layout, and default SDS tokens only.
 */
export function SdsWorkshopWelcomePage() {
  const { isMobile } = useMediaQuery();
  const padding = isMobile ? "600" : "1600";

  return (
    <main id="sds-welcome-top">
      <Section padding={padding} variant="subtle">
        <Flex container type="third" alignPrimary="center">
          <FlexItem size="major">
            <Flex direction="column" gap="600">
              <TextLink href="#">← Back to Compound Designing workshop</TextLink>
              <Logo />
              <TextHeading elementType="h1">Figma Simple Design System</TextHeading>
              <Text>
                Simple Design System (SDS) is a base design system that shows how
                Figma’s Variables, Styles, Components, and Code Connect can be
                used alongside a React and CSS codebase to form a complete picture
                of a responsive web design system.
              </Text>

              <Text>
                SDS is not just another design system. There are still many gaps
                between design and development, and SDS provides some best
                practices for how to bridge them. SDS attempts to remain honest
                about its implications in code, while also offering
                customizability in design beyond a simple theming layer that is
                typical of many code-first component libraries.
              </Text>

              <Text>
                Whether you’re looking to use SDS to start a new project, or are
                looking for examples of some common design systems best practices,
                you will find tools inside this codebase and Figma file to steer
                you in the right direction.
              </Text>

              <TextLinkList density="tight">
                <TextListItem>
                  <TextLink href="https://github.com/figma/sds">
                    GitHub SDS Repo
                  </TextLink>
                </TextListItem>
                <TextListItem>
                  <TextLink href="https://www.figma.com/community/file/1380235722331273046">
                    Figma Community File
                  </TextLink>
                </TextListItem>
                <TextListItem>
                  <TextLink href="https://www.figma.com/design/ZWM9zCu5KDreD3D3bwYTQd/Simple-Design-System--Workshop-?node-id=3-5">
                    This workshop Figma file (node 3:5)
                  </TextLink>
                </TextListItem>
              </TextLinkList>
            </Flex>
          </FlexItem>
        </Flex>
      </Section>
    </main>
  );
}
