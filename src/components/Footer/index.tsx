"use client";

import { Box, Center, Flex, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex w="100%" direction="column">
      <Center w="100%" maxW="100%" overflow="hidden" zIndex={99} transition="200ms">
      <Flex w="100%" maxW="1440px" px="33px" pt={{ base: "43px", lg: "64px" }} pb="19px" direction="column" gap="40px">
        <Flex justify="left" direction={{ base: "column", lg: "row" }} gap={{ base: "58px", lg: "26px" }}>
          <Flex direction="column" gap="40px">
            <Box
              as={Link}
              href="/"
              w="auto"
              h="32px"
              sx={{
                ".img": {
                  width: "auto",
                  height: "100%",
                  "&.d": {
                    display: {
                      base: "block",
                      lg: "block",
                    },
                  },
                },
              }}
            >
              {colorMode === 'light' ? <Image className="img d" src="/images/logo-black.png" alt="logo" width={420} height={88} /> : <Image className="img d" src="/images/logo.png" alt="logo" width={420} height={88} />}
              
            </Box>
            <Text
              fontSize={{ base: "9px", lg: "14px" }}
              fontWeight={700}
              lineHeight={{ base: "10px", lg: "15px" }}
              w="437px"
              pl="10px"
            >
              <Box as="span" color="#FF9900">
              C
              </Box>
              are{" "}
              <Box as="span" color="#FF9900">
                A
              </Box>
              ll the time, {" "}
              <Box as="span" color="#FF9900">
                A
              </Box>
              nywhere.
            </Text>
          </Flex>

          <Flex direction="column" gap={{ base: "68px", lg: "56px" }}>
            <Flex gap={{ base: "none", lg: "83px" }} justifyContent="space-between">
              <Text fontSize="18px" fontWeight={500} lineHeight="20px">
                Contact us
              </Text>
              <Flex direction={{ base: "column", lg: "row" }} gap={{ base: "7px", lg: "83px" }}>
                <Flex direction="row" gap="8px">
                  <Image src="/images/footer_1.svg" alt="footer_1" width={24} height={24} draggable={false} />
                  <Text fontSize={{ base: "15", lg: "18px" }} fontWeight={400} lineHeight="20px">
                    Montreal, Canada
                  </Text>
                </Flex>
                <Flex direction="row" gap="8px">
                  <Image src="/images/footer_2.svg" alt="footer_2" width={24} height={24} draggable={false} />
                  <Text fontSize={{ base: "15", lg: "18px" }} fontWeight={400} lineHeight="20px">
                    info@awakeai.ca
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex gap={{ base: "none", lg: "68px" }} justifyContent="space-between">
              <Text fontSize="18px" fontWeight={500} lineHeight="20px">
                Follow us
              </Text>
              <Flex gap={{ base: "21px", lg: "41px" }}>
                <Image src="/images/follow_1.svg" alt="footer_1" width={22} height={22} draggable={false} />
                <Image src="/images/follow_2.svg" alt="footer_2" width={22} height={22} draggable={false} />
                <Image src="/images/follow_3.svg" alt="footer_3" width={22} height={22} draggable={false} />
                <Image src="/images/follow_4.svg" alt="footer_4" width={22} height={22} draggable={false} />
                <Image src="/images/follow_5.svg" alt="footer_5" width={22} height={22} draggable={false} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Center borderTop="1px solid #939EA4">
          <Text
            color="#939EA4"
            lineHeight="24px"
            fontWeight={500}
            fontSize={{ base: "12px", lg: "14px" }}
            pt="12px"
          >
            ©2024 AwakeAI Inc., All Rights Reserved.
          </Text>
        </Center>
      </Flex>
    </Center>
    </Flex>
  );
};
