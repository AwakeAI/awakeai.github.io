"use client";

import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";

export const Section4 = () => {
  const router = useRouter();

  return (
    <Center w="100%" bg="#000">
      <Flex
        pos="relative"
        zIndex={2}
        direction="column"
        color="#fff"
        w="100%"
        h="100%"
        maxW="1440px"
        px={{ base: "12px", lg: "228px" }}
        pt={{ base: "54px", lg: "100px" }}
        pb={{ base: "54px", lg: "170px" }}
        gap={{ base: "40px", lg: "33px" }}
        alignItems="center"
      >
        <Heading
          fontSize={{ base: "30px", lg: "45px" }}
          lineHeight={{ base: "36px", lg: "54px" }}
          fontWeight={400}
          textAlign="center"
        >
          We are constantly seeking talented individuals to join our team.
        </Heading>
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
