import {Box, Center, Flex, Heading, Link, SimpleGrid, Text} from "@chakra-ui/react";
import React from "react";
import {Eyebrow} from "@/components/SectionHeader";

export const Section2 = () => {
  return (
    <>
      <Center w="100%" pos="relative">
        <Flex
          direction="column"
          w="100%"
          maxW="960px"
          px={{base: "20px", lg: "30px"}}
          pt={{base: "16px", lg: "8px"}}
          pb={{base: "40px", lg: "56px"}}
        >
          <Heading
            as="h1"
            fontSize={{base: "36px", lg: "60px"}}
            lineHeight={{base: "44px", lg: "68px"}}
            fontWeight={800}
            letterSpacing="-0.035em"
            textAlign="center"
            mb={{base: "32px", lg: "48px"}}
          >
            Opportunities
          </Heading>
          <Eyebrow>At AwakeAI Inc.</Eyebrow>
          <Heading as="h2" mt="12px" fontSize={{base: "28px", lg: "40px"}} lineHeight={{base: "34px", lg: "48px"}} fontWeight={700}>
            Why us
          </Heading>
          <Box w="100%" h="1px" bg="border.subtle" my={{base: "20px", lg: "28px"}}></Box>
          <Text fontSize={{base: "17px", lg: "19px"}} lineHeight={{base: "28px", lg: "32px"}} color="fg.muted">
            At AwakeAI Inc., we foster a supportive culture that enables our team members to reach their full
            potential, grow alongside us, and better serve our customers.
            We offer flexible working hours and competitive compensation. <br/> <br/>
            Join our innovative team to monitor and improve the quality of life for the elderly through advanced AI
            systems, ensuring a safer and more independent living environment for them.
          </Text>
        </Flex>
      </Center>
      <Center w="100%" pos="relative" px={{base: "20px", lg: "30px"}}>
        <SimpleGrid
          w="100%"
          maxW="1440px"
          columns={{base: 1, md: 3}}
          spacing={{base: "16px", lg: "24px"}}
          pb={{base: "48px", lg: "72px"}}
        >
          <Perk title="Brilliant Minds">
            Work with some of the most brilliant minds in the industry at AwakeAI, a{" "}
            <Link href="https://mila.quebec/en/mila-entrepreneurship-lab" isExternal color="accent.link" fontWeight={700}>
              MILA startup
            </Link>
            . We are creative and have the essential ingredients for innovation.
          </Perk>
          <Perk title="Flexible Hours">
            Studies show that work hours that fit in with our lives make us happier and more energetic. We agree.
          </Perk>
          <Perk title="Exciting Projects">
            We get to apply bleeding-edge technology to solve problems for our customers.
          </Perk>
        </SimpleGrid>
      </Center>
    </>
  );
};

const Perk = ({title, children}: { title: string; children: React.ReactNode }) => (
  <Flex
    direction="column"
    gap="12px"
    p={{base: "24px", lg: "32px"}}
    bg="bg.surface"
    border="1px solid"
    borderColor="border.subtle"
    rounded="2xl"
    boxShadow="card"
  >
    <Heading as="h3" fontSize="22px" lineHeight="28px" fontWeight={700}>
      {title}
    </Heading>
    <Text fontSize="16px" lineHeight="26px" color="fg.muted">
      {children}
    </Text>
  </Flex>
);
