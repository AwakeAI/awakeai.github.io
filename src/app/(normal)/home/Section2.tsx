import { FC } from "react";
import {Box, Button, Center, Flex, Heading} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import Product from "@/app/(normal)/home/Product";
import {Accent, Eyebrow} from "@/components/SectionHeader";

export const Section2: FC = () => {
  return (
    <Center
      w="100%"
      minH="calc(100svh - 72px)"
      pos="relative"
      px={{ base: "16px", lg: "30px" }}
      py={{ base: "64px", lg: "96px" }}
      overflow="hidden"
    >
      <Image
        src="/images/0_0.webp"
        alt=""
        fill
        sizes="100vw"
        draggable={false}
        style={{ objectFit: "cover", userSelect: "none" }}
      />
      <Box
        pos="relative"
        w="100%"
        maxW="1040px"
        bg="bg.glass"
        backdropFilter="blur(16px) saturate(140%)"
        border="1px solid"
        borderColor="whiteAlpha.500"
        _dark={{ borderColor: "whiteAlpha.200" }}
        rounded={{ base: "2xl", lg: "3xl" }}
        boxShadow="cardHover"
        px={{ base: "20px", lg: "56px" }}
        py={{ base: "32px", lg: "56px" }}
      >
        <Flex direction="column" align={{ base: "center", lg: "flex-start" }} gap={{ base: "16px", lg: "20px" }}>
          <Eyebrow>About us</Eyebrow>
          <Heading
            w="100%"
            fontSize={{ base: "24px", lg: "38px" }}
            fontWeight={700}
            lineHeight={{ base: "32px", lg: "48px" }}
            textAlign="left"
          >
            Based on cutting-edge AI computer vision technology, which enables more{" "}
            <Accent>in-depth</Accent> and <Accent>detailed</Accent> analysis of senior activities in real-time,
            yielding more comprehensive and accurate results.
          </Heading>

          <Product/>

          <Button as={NextLink} href="/about" variant="brand" size="lg" px="32px">
            Read More
          </Button>
        </Flex>
      </Box>
    </Center>
  );
};
