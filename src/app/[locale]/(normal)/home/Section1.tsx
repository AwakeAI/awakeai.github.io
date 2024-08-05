"use client";

import { Box, Center, Flex, Heading, Link, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import {ParallaxScroll} from "@/app/(normal)/home/ParallaxScroll";
import {useTranslations} from "next-intl";

export const Section1 = () => {
  const color = useColorModeValue("White", "Black");
  const fnColor = useColorModeValue("Black", "White");
  const t = useTranslations("Index");
  return (
    <Center
      w="100%"
      h="100svh"
      pos="relative"
      bg={{ base: color, lg: color }}
      sx={{
        ".img-bg": {
          pos: "absolute",
          top: 0,
          left: 0,
          userSelect: "none",
          "&.pc": {
            display: {
              base: "none",
              lg: "block",
            },
          },
          "&.mobile": {
            display: {
              base: "block",
              lg: "none",
            },
          },
        },
      }}
    >
      <ParallaxScroll />

      <Flex
        pos="relative"
        direction="column"
        zIndex={2}
        color={fnColor}
        pb="70px"
        justify="center" // Centers content vertically
        align="right" // Centers content horizontally
      >
        <Text
          fontSize={{ base: "12px", lg: "14px" }}
          lineHeight="21px"
          letterSpacing="0.3em"
          textTransform="uppercase"
          fontWeight={400}
          textAlign={{ base: "center", md: "left" }}
          mt={{ base: "180px", lg: "auto" }}
          mb={{ base: "auto", lg: "34px" }}
        >
          {t("Care All The Time, Anywhere")}
        </Text>
        <Heading
          w={{ base: "100%", lg: "654px" }}
          fontSize={{ base: "45px", lg: "60px" }}
          fontWeight={700}
          lineHeight={{ base: "55px", lg: "70px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          {t("Transforming Caregiving with Optical Sensors")}
        </Heading>
        <Text
          w={{ base: "100%", lg: "654px" }}
          my={{ base: "24px", lg: "35px" }}
          fontSize={{ base: "14px", lg: "18px" }}
          fontWeight={400}
          textAlign={{ base: "center", md: "left" }}
          lineHeight={{ base: "18px", lg: "21px" }}
        >
          {t(`Stay informd with concise updates on your loved ones' well-being`)}
        </Text>
        <Link
          href="/about"
          bg="#FF9900"
          outline={1}
          height="50px"
          lineHeight="50px"
          rounded="30px"
          w="164px"
          mx={{ base: 'auto', md: 0 }}
          textAlign="center"
          color="#000"
          fontSize="20px"
          cursor="pointer"
          _hover={{
            textDecoration: "none",
          }}
        >
          {t("Learn More")}
        </Link>
      </Flex>

    </Center>
  );
};
