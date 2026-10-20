"use client";

import React, {FC, useEffect, useState} from "react";
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
  IconButton,
  Link,
  useColorMode,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import {HamburgerIcon, MoonIcon, SunIcon} from '@chakra-ui/icons'
import NextLink from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";

const list = [
  {label: "About Us", href: "/about"},
  {label: "Partners", href: "/partners"},
  {label: "Activity", href: "/activity"},
  {label: "Careers", href: "/careers"},
];

// Both logo variants are rendered and swapped in CSS so the right one shows on first paint.
const Logo: FC = () => (
  <Box
    as={NextLink}
    href="/"
    aria-label="AwakeAI home"
    display="block"
    h="30px"
    flexShrink={0}
    sx={{
      ".img": {width: "auto", height: "100%"},
      ".logo-dark": {display: "none"},
      _dark: {
        ".logo-light": {display: "none"},
        ".logo-dark": {display: "block"},
      },
    }}
  >
    <Image className="img logo-light" src="/images/logo-black.png" alt="AwakeAI" width={420} height={88} priority/>
    <Image className="img logo-dark" src="/images/logo.png" alt="AwakeAI" width={420} height={88} priority/>
  </Box>
);

const ColorModeToggle: FC = () => {
  const {toggleColorMode} = useColorMode();
  return (
    <IconButton
      aria-label="Toggle dark mode"
      variant="ghost"
      rounded="full"
      onClick={toggleColorMode}
      icon={<><MoonIcon className="moon"/><SunIcon className="sun"/></>}
      sx={{".sun": {display: "none"}, _dark: {".moon": {display: "none"}, ".sun": {display: "block"}}}}
    />
  );
};

export const Header: FC = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => onClose(), [pathname, onClose]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Center
      as="header"
      w="100%"
      pos="fixed"
      top="0"
      left="0"
      zIndex={99}
      bg="bg.header"
      backdropFilter="saturate(180%) blur(12px)"
      borderBottom="1px solid"
      borderColor={scrolled ? "border.subtle" : "transparent"}
      transition="border-color 200ms"
    >
      <Flex w="100%" justify="space-between" align="center" maxW="1440px" px={{base: "20px", lg: "30px"}} h="72px">
        <Logo/>

        <HStack spacing="4px" as="nav" aria-label="Main" display={{base: "none", lg: "flex"}}>
          {list.map((value) => (
            <Link
              as={NextLink}
              key={value.href}
              href={value.href}
              px="14px"
              py="8px"
              rounded="full"
              fontSize="15px"
              fontWeight={500}
              color={isActive(value.href) ? "fg.default" : "fg.muted"}
              bg={isActive(value.href) ? "blackAlpha.50" : "transparent"}
              _dark={{bg: isActive(value.href) ? "whiteAlpha.100" : "transparent"}}
              _hover={{textDecoration: "none", color: "fg.default"}}
              aria-current={isActive(value.href) ? "page" : undefined}
            >
              {value.label}
            </Link>
          ))}
        </HStack>

        <HStack spacing="8px">
          <ColorModeToggle/>
          <Button as={NextLink} href="/#contact" variant="brand" size="sm" px="18px" display={{base: "none", lg: "inline-flex"}}>
            Contact us
          </Button>
          <IconButton
            aria-label="Open menu"
            variant="ghost"
            rounded="full"
            icon={<HamburgerIcon boxSize="22px"/>}
            onClick={onOpen}
            display={{base: "inline-flex", lg: "none"}}
          />
        </HStack>
      </Flex>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay backdropFilter="blur(4px)"/>
        <DrawerContent roundedBottom="2xl" pb="24px">
          <DrawerCloseButton top="20px" right="20px"/>
          <DrawerHeader px="20px" py="21px">
            <Logo/>
          </DrawerHeader>
          <DrawerBody px="20px">
            <VStack as="nav" aria-label="Mobile" align="stretch" spacing="4px">
              {list.map((value) => (
                <Link
                  as={NextLink}
                  key={value.href}
                  href={value.href}
                  px="12px"
                  py="12px"
                  rounded="lg"
                  fontSize="20px"
                  fontWeight={isActive(value.href) ? 600 : 500}
                  color={isActive(value.href) ? "accent.fg" : "fg.default"}
                  _hover={{textDecoration: "none", bg: "blackAlpha.50", _dark: {bg: "whiteAlpha.100"}}}
                  onClick={onClose}
                >
                  {value.label}
                </Link>
              ))}
              <Button as={NextLink} href="/#contact" variant="brand" size="lg" mt="16px" onClick={onClose}>
                Contact us
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Center>
  );
};
