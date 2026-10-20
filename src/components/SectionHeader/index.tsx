import {FC, ReactNode} from "react";
import {Box, Heading, Stack, StackProps, Text} from "@chakra-ui/react";

export const Accent: FC<{ children: ReactNode }> = ({children}) => (
  <Box as="span" color="accent.fg">
    {children}
  </Box>
);

export const Eyebrow: FC<{ children: ReactNode }> = ({children}) => (
  <Text
    fontSize={{base: "12px", lg: "13px"}}
    lineHeight="20px"
    fontWeight={600}
    letterSpacing="0.2em"
    textTransform="uppercase"
    color="accent.fg"
  >
    {children}
  </Text>
);

export const SectionHeader: FC<{
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
} & Omit<StackProps, "title">> = ({eyebrow, title, description, align = "left", ...rest}) => (
  <Stack
    spacing={{base: "12px", lg: "16px"}}
    textAlign={align}
    alignItems={align === "center" ? "center" : "flex-start"}
    {...rest}
  >
    {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
    <Heading
      as="h2"
      maxW="800px"
      fontSize={{base: "30px", lg: "44px"}}
      lineHeight={{base: "36px", lg: "52px"}}
      fontWeight={700}
    >
      {title}
    </Heading>
    {description ? (
      <Text maxW="680px" fontSize={{base: "16px", lg: "18px"}} lineHeight={{base: "26px", lg: "28px"}} color="fg.muted">
        {description}
      </Text>
    ) : null}
  </Stack>
);
