"use client";

import { Box, Center, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import { DragEffect } from "@/components/DragEffect";
import { Accent, SectionHeader } from "@/components/SectionHeader";

import Bg from "../../../../public/images/drag-effect/bg.png";
import Fa from "../../../../public/images/drag-effect/fa.png";
import Mo from "../../../../public/images/drag-effect/mod.png";
import Mo2 from "../../../../public/images/drag-effect/mod2.png";
import fHome from "../../../../public/images/drag-effect/home.png";
import Nw from "../../../../public/images/drag-effect/nw.png";
import Effect from "../../../../public/images/drag-effect/effect.png";
import NwEffect from "../../../../public/images/drag-effect/nweffect.png";

const features: { title: string; text: string; bg: StaticImageData; effect: StaticImageData; maxWidth: number }[] = [
  {
    title: "Privacy Preserving",
    text: "The video will be processed in real-time, with identifiable information masked to prevent any risk of leaks.",
    bg: Bg,
    effect: Effect,
    maxWidth: 646,
  },
  {
    title: "No Wearables",
    text: "No wearable and manual operations are needed, no extra burden on any user.",
    bg: Nw,
    effect: NwEffect,
    maxWidth: 350,
  },
  {
    title: "Broadly Applicable",
    text: "The application can be extended to hospitals, homecare and long-term care facilities.",
    bg: Fa,
    effect: fHome,
    maxWidth: 1100,
  },
  {
    title: "Modularize",
    text: "The application can be equipped into facility plain and simple.",
    bg: Mo,
    effect: Mo2,
    maxWidth: 1100,
  },
];

export const Section3 = () => {
  return (
    <Center w="100%" py={{ base: "64px", lg: "96px" }}>
      <Flex w="100%" direction="column" px={{ base: "20px", lg: "30px" }} maxW="1440px">
        <SectionHeader
          eyebrow="Product"
          title={<>Our <Accent>Advanced AI</Accent> Technology</>}
        />

        <SimpleGrid columns={{ base: 1, lg: 2 }} mt={{ base: "32px", lg: "48px" }} spacing={{ base: "20px", lg: "28px" }}>
          {features.map((f) => (
            <Box
              key={f.title}
              pos="relative"
              bg="bg.surface"
              border="1px solid"
              borderColor="border.subtle"
              rounded="2xl"
              overflow="hidden"
              boxShadow="card"
              transition="box-shadow 200ms, transform 200ms"
              _hover={{ boxShadow: "cardHover", transform: "translateY(-2px)" }}
            >
              <Box w="100%" pos="relative" h={{ base: "220px", md: "306px" }} borderBottom="1px solid" borderColor="border.subtle">
                <DragEffect Bg={f.bg} Effect={f.effect} maxWidth={f.maxWidth} />
              </Box>
              <Box p={{ base: "20px", lg: "28px" }}>
                <Heading as="h3" fontWeight={700} fontSize={{ base: "20px", lg: "24px" }} lineHeight="1.3">
                  {f.title}
                </Heading>
                <Text mt="8px" fontSize={{ base: "15px", lg: "16px" }} lineHeight="1.6" color="fg.muted">
                  {f.text}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Center>
  );
};
