import {Box, Center, Flex, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import React from "react";
import {SectionHeader} from "@/components/SectionHeader";

const advantages = [
  {
    icon: "/images/img.png",
    title: "Fully Autonomous",
    text: "No wearable and manual operations are needed, no extra burden on any user.",
  },
  {
    icon: "/images/img_1.png",
    title: "Privacy Preserving",
    text: "Video will be processed locally, without video transmission, leaving no concern of leak.",
  },
  {
    icon: "/images/img_2.png",
    title: "Broadly Applicable",
    text: "The application can be extended to hospitals, homecare and long-term care facilities.",
  },
];

export const Section3 = () => {
  return (
    <Center w="100%" bg="bg.subtle" flexDirection="column">
      <Flex
        direction="column"
        w="100%"
        maxW="1440px"
        px={{base: "20px", lg: "30px"}}
        py={{base: "64px", lg: "96px"}}
      >
        <SectionHeader eyebrow="Competitive Advantages" title="Seamless Care, Zero Hassle"/>
        <SimpleGrid columns={{base: 1, md: 3}} spacing={{base: "16px", lg: "24px"}} mt={{base: "32px", lg: "48px"}}>
          {advantages.map((a) => (
            <Flex
              key={a.title}
              direction="column"
              gap="16px"
              p={{base: "24px", lg: "32px"}}
              bg="bg.surface"
              border="1px solid"
              borderColor="border.subtle"
              rounded="2xl"
              boxShadow="card"
            >
              <Center w="64px" h="64px" rounded="xl" bg="brand.50" _dark={{bg: "whiteAlpha.100"}}>
                <Box as="img" src={a.icon} alt="" maxW="40px" maxH="40px"/>
              </Center>
              <Heading as="h3" fontSize={{base: "20px", lg: "22px"}} fontWeight={700} color="accent.fg">
                {a.title}
              </Heading>
              <Text fontSize={{base: "16px", lg: "17px"}} lineHeight="1.6" color="fg.muted">
                {a.text}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>
    </Center>
  );
};
