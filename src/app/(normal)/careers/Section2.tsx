"use client";

import { Box, Center, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";

export const Section2 = () => {
  const router = useRouter();
  const color = useColorModeValue("Black", "gray.200");

  return (
    <Center w="100%" pos="relative">
      <Flex
        pos="relative"
        direction="column"
        zIndex={2}
        w="100%"
        h="100%"
        maxW="1440px"
        px={{ base: "20px", lg: "130px" }}
        pt={{ base: "40px", lg: "24px" }}
        pb={{ base: "54px", lg: "110px" }}
        justifyContent="center"
        gap={{ base: "26px", lg: "72px" }}
      >
        <Heading
          fontSize={{ base: "24px", lg: "64px" }}
          lineHeight={{ base: "29px", lg: "77px" }}
          fontWeight={400}
          alignSelf={{ base: "flex-start", lg: "center" }}
        >
          Careers
        </Heading>
        <Flex direction="column">
          <Heading
            fontSize="14px"
            lineHeight="21px"
            fontWeight={500}
            textTransform="uppercase"
            letterSpacing="0.5em"
            mb="32px"
          >
            Of AwakeAI Inc.
          </Heading>
          <Heading fontSize={{ base: "24px", lg: "45px" }} lineHeight={{ base: "29px", lg: "54px" }} fontWeight={400}>
            Join us
          </Heading>
          <Box w="100%" h="1px" bg={color} my={{ base: "20px", lg: "30px" }}></Box>
          <Text fontSize="24px" lineHeight="36px" fontWeight={400}>
            At AwakeAI, we have established a culture that supports our team members, so that they can unlock their full
            potential, grow with us, and serve our customers better. We provide flexible working hours and competitive
            compensation. <br />
            <br /> Join our cutting-edge team to monitor and enhance the quality of life for the elderly using advanced
            AI systems, providing them with a safer and more independent living environment.
          </Text>
        </Flex>
        <Box
          as={"button"}
          bg="#FBC751"
          fontSize="16px"
          lineHeight="34px"
          fontWeight={400}
          rounded="34px"
          color="#000"
          textAlign="center"
          _hover={{
            textDecoration: "none",
          }}
          onClick={() => {
            router.push("/careers/list");
          }}
          w="208px"
          h="45px"
        >
          View all open roles
        </Box>
      </Flex>
    </Center>
  );
};
