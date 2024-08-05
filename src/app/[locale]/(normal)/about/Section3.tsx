"use client";

import {Box, Center, Flex, Text, useColorModeValue} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const Section3 = () => {
  const color = useColorModeValue("Black", "gray.200");
  return (
    <Center w="100%" pos="relative" flexDirection="column">
      <Flex
        pos="relative"
        direction="column"
        zIndex={2}
        w="100%"
        h="100%"
        maxW="1440px"
        justify="center"
        px={{ base: "18px", lg: "125px" }}
        pt={{ base: "30px", lg: "50px" }}
        pb={{ base: "20px", lg: "80px" }}
      >
        <Text
          fontSize={{ base: "12px", lg: "14px" }}
          lineHeight={{ base: "18px", lg: "21px" }}
          fontWeight={500}
          textTransform="uppercase"
          letterSpacing="0.5em"
        >
          Competitive Advantages
        </Text>

        <Text
          pt={{ base: "54px", lg: "32px" }}
          pb={{ base: "10px", lg: "20px" }}
          fontSize={{ base: "26px", lg: "45px" }}
          lineHeight={{ base: "31px", lg: "54px" }}
          fontWeight={400}
        >
          Seamless Care, Zero Hassle
        </Text>
        <Box w="100%" h="1px" bg={color} my={{base: "20px", lg: "30px"}}></Box>
        <Flex
          direction="column"
          gap={{ base: "24px", lg: "60px" }}
          pt={{ base: "20px", lg: "34px" }}
        >
          <Flex flexDirection="row" gap={{ base: "33px", lg: "50px" }} alignItems="center" justifyContent="left">
            <Box
              as="img"
              src="/images/img.png"
              alt="img"
              w={{ base: "48px", lg: "84px" }}
              h={{ base: "38px", lg: "68px" }}
            ></Box>
            <Flex direction="column" gap={{ base: "11px", lg: "14px" }}>
              <Text
                fontSize={{ base: "16px", lg: "24px" }}
                lineHeight={{ base: "19px", lg: "29px" }}
                fontWeight={500}
                color="#FF9900"
              >
                Fully Autonomous
              </Text>
              <Text fontSize={{ base: "16px", lg: "24px" }} lineHeight={{ base: "19px", lg: "29px" }} fontWeight={400}>
                No wearable and manual operations are needed, no extra burden on any user.
              </Text>
            </Flex>
          </Flex>

          <Flex flexDirection="row" gap={{ base: "33px", lg: "50px" }} alignItems="center" justifyContent="left">
            <Box
              as="img"
              src="/images/img_1.png"
              alt="img"
              w={{ base: "39px", lg: "74px" }}
              h={{ base: "41px", lg: "78px" }}
            ></Box>
            <Flex direction="column" gap={{ base: "11px", lg: "14px" }}>
              <Text
                fontSize={{ base: "16px", lg: "24px" }}
                lineHeight={{ base: "19px", lg: "29px" }}
                fontWeight={500}
                color="#FF9900"
              >
                Privacy Preserving
              </Text>
              <Text fontSize={{ base: "16px", lg: "24px" }} lineHeight={{ base: "19px", lg: "29px" }} fontWeight={400}>
                Video will be processed locally, without video transmission, leaving no concern of leak.
              </Text>
            </Flex>
          </Flex>

          <Flex flexDirection="row" gap={{ base: "33px", lg: "50px" }} alignItems="center" justifyContent="left">
            <Box
              as="img"
              src="/images/img_2.png"
              alt="img"
              w={{ base: "41px", lg: "74px" }}
              h={{ base: "41px", lg: "74px" }}
            ></Box>
            <Flex direction="column" gap={{ base: "11px", lg: "14px" }}>
              <Text
                fontSize={{ base: "16px", lg: "24px" }}
                lineHeight={{ base: "19px", lg: "29px" }}
                fontWeight={500}
                color="#FF9900"
              >
                Broadly Applicable
              </Text>
              <Text fontSize={{ base: "16px", lg: "24px" }} lineHeight={{ base: "19px", lg: "29px" }} fontWeight={400}>
                The application can be extended to hospitals long-term care facilities and homecare facilities.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
};
