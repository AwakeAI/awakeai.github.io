"use client";

import {Box, Button, Center, Flex, Heading, HStack, Text} from "@chakra-ui/react";
import NextLink from "next/link";
import {ParallaxScroll} from "@/app/(normal)/home/ParallaxScroll";
import {Accent} from "@/components/SectionHeader";

export const Section1 = () => {
  return (
    <Center
      w="100%"
      minH={{ base: "auto", md: "100svh" }}
      pos="relative"
      overflow="hidden"
      pt={{ base: "112px", md: "72px" }}
      pb={{ base: "40px", md: "0" }}
      px={{base: "20px", lg: "30px"}}
      bgGradient="radial(circle at 85% 20%, rgba(255,153,0,0.16), transparent 45%)"
    >
      <Flex w="100%" maxW="1440px" align="center" justify="center" gap={{md: "24px", lg: "48px"}}>
        <ParallaxScroll/>

        <Flex
          pos="relative"
          direction="column"
          zIndex={2}
          py={{base: "48px", lg: "0"}}
          align={{base: "center", md: "flex-start"}}
          textAlign={{base: "center", md: "left"}}
          maxW="620px"
        >
          <HStack
            spacing="8px"
            px="14px"
            py="6px"
            mb={{base: "20px", lg: "28px"}}
            rounded="full"
            border="1px solid"
            borderColor="border.subtle"
            bg="bg.surface"
            fontSize={{base: "12px", lg: "13px"}}
            fontWeight={600}
            letterSpacing="0.18em"
            textTransform="uppercase"
          >
            <Box w="8px" h="8px" rounded="full" bg="brand.500"/>
            <Text as="span">Care anytime, anywhere</Text>
          </HStack>
          <Heading
            as="h1"
            fontSize={{base: "40px", md: "48px", lg: "64px"}}
            fontWeight={800}
            lineHeight={{base: "46px", md: "54px", lg: "70px"}}
            letterSpacing="-0.035em"
          >
            Transforming Caregiving with <Accent>Optical Sensors</Accent>
          </Heading>
          <Text
            maxW="520px"
            my={{base: "20px", lg: "28px"}}
            fontSize={{base: "16px", lg: "19px"}}
            lineHeight={{base: "26px", lg: "30px"}}
            color="fg.muted"
          >
            {`Stay informed with concise updates on your loved ones' well-being`}
          </Text>
          <HStack spacing="12px">
            <Button as={NextLink} href="/about" variant="brand" size="lg" px="28px">
              Learn More
            </Button>
            <Button as={NextLink} href="/#contact" variant="outline" size="lg" px="28px" borderColor="border.subtle">
              Contact us
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </Center>
  );
};
