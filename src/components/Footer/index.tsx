"use client";
import {Box, Button, Center, Container, Flex, Grid, GridItem, Heading, Text} from "@chakra-ui/react";

import { useColorMode } from "@chakra-ui/react";
import {Linkedin, Mail, MapPin} from "react-feather";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <footer>
      <Flex w="100%" bg="#121212" direction="column">
        <Center w="100%" maxW="100%" overflow="hidden" zIndex={99} transition="200ms">
        <Flex w="100%" maxW="1440px" px="33px" pt={{ base: "43px", lg: "64px" }} pb="19px" direction="column" gap="40px">
          <Flex justify="left" alignItems="center" direction={{ base: "column", lg: "row" }} gap={{ base: "58px", lg: "26px" }}>
            <Flex direction="column" gap="60px">
              <Box
                as={Link}
                href="/"
                w="auto"
                h="64px"
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
                <Heading
                  mt="2" mb="8" px="3"
                  fontSize="10px"
                  lineHeight="21px"
                  fontWeight={500}
                  textTransform="uppercase"
                  letterSpacing="0.3em"
                  color="#fff"
                >
                  A MILA Startup
                </Heading>
              </Box>
            </Flex>
            <Flex direction="column" gap={{ base: "68px", lg: "68px" }} color="#ffffff" mt="10px" px="60px">
              <Flex gap={{ base: "none", lg: "83px" }} justifyContent="space-between">
                <Flex direction={{ base: "column", lg: "row" }} gap={{ base: "7px", lg: "83px" }}>
                  <Flex direction="row" gap="8px">
                    <MapPin size={20}/>
                    <a href="https://mila.quebec/en/industry/entrepreneurship-lab/">
                      Montreal, Canada
                    </a>
                  </Flex>
                  <Flex direction="row" gap="8px">
                    <Mail size={20}/>
                    <a href="mailto:info@seysoai.com">info@seysoai.com</a>
                  </Flex>
                  <Flex direction="row" gap="8px">

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
              fontSize={{base: "12px", lg: "14px"}}
              pt="12px"
              textAlign="center"
            >
              Copyright ©2024 SEYSOAI TECHNOLOGY CO., LTD. All Rights Reserved.
              <br></br>
              ©2024 苏州睿首智能科技有限公司 版权所有
              <br></br>
              <a href="https://beian.miit.gov.cn" target="_self" style={{color: "inherit"}}>
                ICP主体备案号：苏ICP备2024064499号</a> {" "}
              {/*<img className="link-type-"*/}
              {/*     src="https://wds-service-1258344699.file.myqcloud.com/20/9429/png/1629634670715841e084bb6e64db4.png?imageMogr2/thumbnail/36x&amp;version=0"*/}
              {/*     title="" alt="公安备案图标" id="imageModeShow" />*/}
              {/*苏公网安备 32058202010892号*/}
            </Text>
          </Center>
        </Flex>
        </Center>
      </Flex>
    </footer>
  );
};
