"use client";

import { Box, Center, Flex, Text, useColorMode } from "@chakra-ui/react";
import {Linkedin, Mail, MapPin} from "react-feather";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <footer>
      <Flex w="100%" bg="#121212" direction="column">
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
                <Image className="img d" src="/images/logo.png" alt="logo" width={420} height={88} />
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

            <Flex direction="column" gap={{ base: "68px", lg: "56px" }} color="#ffffff">
              <Flex gap={{ base: "none", lg: "83px" }} justifyContent="space-between">
                <Flex direction={{ base: "column", lg: "row" }} gap={{ base: "7px", lg: "83px" }}>
                  <Flex direction="row" gap="8px">
                    <MapPin size={20}/>
                    <Text fontSize={{ base: "15", lg: "18px" }} fontWeight={400} lineHeight="20px">
                      Montreal, Canada
                    </Text>
                  </Flex>
                  <Flex direction="row" gap="8px">
                    <Mail size={20}/>
                    <a href="mailto:info@awakeai.ca">info@awakeai.ca</a>
                  </Flex>
                  <Flex direction="row" gap="8px">
                  <Linkedin size={20}/>
                    <a href="https://ca.linkedin.com/company/awakeai">
                      AwakeAI Inc.
                    </a>
                  </Flex>
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
    </footer>
  );
};
