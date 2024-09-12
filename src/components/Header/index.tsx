"use client";

import React, {FC} from "react";
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import {MoonIcon, SunIcon} from '@chakra-ui/icons'

import {Link} from '@chakra-ui/react';
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";

const list = [

  {label: "About Us", href: "/cn/about"},
  {label: "Partners", href: "/cn/partners"},
  {label: "Activity", href: "/cn/activity"},
  {label: "Careers", href: "/cn/careers"},
];


export const Header: FC = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {colorMode, toggleColorMode} = useColorMode()
  const t = useTranslations("Index");
  const btnRef = React.useRef();
  return (
    <Center
      w="100%"
      py="25px"
      pos="fixed"
      top="0"
      left="0"
      zIndex={99}
      transition="200ms"
      backdropFilter='auto'
      backdropBlur='8px'
    >
      <Flex w="100%" justify="space-between" align="center" maxW="1440px" px="30px" h="50px">
        <Box
          as={Link}
          href="/"
          w="auto"
          h="32px"
          sx={{
            ".img": {
              width: "auto",
              height: "100%",
              "&.m": {
                display: {
                  base: "block",
                  lg: "none",
                },
              },
              "&.d": {
                display: {
                  base: "none",
                  lg: "block",
                },
              },
            },
          }}
        >
          {colorMode === 'light' ?
            <>
              <Image className="img m" src="/images/logo-black.png" alt="logo" width={640} height={200}/>
              <Image className="img d" src="/images/logo-black.png" alt="logo" width={640} height={200}/>
            </> :
            <>
              <Image src="/images/logo.png" alt="logo" width={640} height={200}/>
              <Image src="/images/logo.png" alt="logo" width={640} height={200}/>
            </>
          }
        </Box>

        <Flex
          align="center"
          sx={{
            ".lg": {
              display: {
                base: "none",
                lg: "flex",
              },
            },
            ".menu": {
              display: {
                base: "block",
                lg: "none",
              },
            },
            ".img": {
              width: "39px",
              height: "12px",
            },
          }}
        >
          <HStack spacing="28px" className="lg">
            {list.map((value) => {
              return (
                <Box as={Link} key={value.href} href={value.href}
                     fontSize="17px"
                     fontWeight={500}
                     lineHeight="26px"
                     _hover={{
                       textDecoration: "none",
                       color: "#FF9900",
                     }}>
                  {t(value.label)}
                </Box>
              );
            })}
            <Box
              as={Link}
              w="200px"
              h="50px"
              fontWeight={500}
              lineHeight="50px"
              rounded="30px"
              fontSize="17px"
              textAlign="center"
              _hover={{
                textDecoration: "none",
                color: "#FF9900",
              }}
              ml="20px"
            >

            </Box>
          </HStack>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
          </Button>
          <Flex
            ref={btnRef}
            onClick={onOpen}
            className="menu"
            w="auto"
            h="12"
            align="center"
            as={Button}
            style={{background: "none"}}
          >

            {colorMode === 'light' ? <Image className="img" src="/images/menu.svg" alt="menu" width={39} height={12}/> :
              <Image className="img" src="/images/menu-white.svg" alt="menu" width={39} height={12}/>}
            <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
              <DrawerOverlay/>
              <DrawerContent gap="78px">
                <DrawerCloseButton/>
                <DrawerHeader>

                  <Box
                    as={Link}
                    href="/"
                    w="auto"
                    h="32px"
                    sx={{
                      ".img": {
                        width: "auto",
                        height: "100%",
                        "&.m": {
                          display: {
                            base: "block",
                            lg: "none",
                          },
                        },
                        "&.d": {
                          display: {
                            base: "none",
                            lg: "block",
                          },
                        },
                      },
                    }}
                  >
                    {colorMode === 'light' ? <><Image className="img m" src="/images/logo-black.png" alt="logo"
                                                      width={640} height={88}/><Image className="img d"
                                                                                      src="/images/logo-black.png"
                                                                                      alt="logo" width={640}
                                                                                      height={88}/></> : <><Image
                      className="img m" src="/images/logo.png" alt="logo" width={640} height={200}/><Image
                      className="img d" src="/images/logo.png" alt="logo" width={640} height={200}/></>}


                  </Box>
                </DrawerHeader>

                <DrawerBody>
                  <Flex direction="column" alignItems="center" gap="9px">
                    {list.map((value) => {
                      return (
                        <Box
                          as={Link}
                          key={value.href}
                          href={value.href}
                          fontWeight={400}
                          fontSize="29px"
                          lineHeight="44px"
                          textAlign="center"
                          onClick={onClose}
                        >
                          {t(value.label)}
                        </Box>
                      );
                    })}
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
};
