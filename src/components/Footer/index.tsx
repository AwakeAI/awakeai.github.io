"use client";
import {Box, Flex, Link, SimpleGrid, Stack, Text} from "@chakra-ui/react";

import {Linkedin, Mail, MapPin} from "react-feather";
import Image from "next/image";
import NextLink from "next/link";
import React, {FC, ReactNode} from "react";

const pages = [
  {label: "About Us", href: "/about"},
  {label: "Partners", href: "/partners"},
  {label: "Activity", href: "/activity"},
  {label: "Careers", href: "/careers"},
];

const ColumnTitle: FC<{ children: ReactNode }> = ({children}) => (
  <Text fontSize="13px" fontWeight={600} letterSpacing="0.15em" textTransform="uppercase" color="whiteAlpha.600">
    {children}
  </Text>
);

const linkStyle = {
  color: "whiteAlpha.800",
  _hover: {color: "brand.400", textDecoration: "none"},
};

export const Footer = () => {
  return (
    <Box as="footer" w="100%" bg="#0B0B0D" color="white" borderTop="1px solid" borderColor="whiteAlpha.100">
      <Flex w="100%" maxW="1440px" mx="auto" px={{base: "20px", lg: "30px"}} pt={{base: "48px", lg: "64px"}} pb="24px"
            direction="column" gap={{base: "40px", lg: "56px"}}>
        <Flex direction={{base: "column", lg: "row"}} justify="space-between" gap="40px">
          <Stack spacing="12px">
            <Box as={NextLink} href="/" aria-label="AwakeAI home" display="block" h="44px"
                 sx={{".img": {width: "auto", height: "100%"}}}>
              <Image className="img" src="/images/logo.png" alt="AwakeAI" width={420} height={88}/>
            </Box>
            <Text fontSize="12px" fontWeight={600} textTransform="uppercase" letterSpacing="0.3em" color="whiteAlpha.700">
              A MILA Startup
            </Text>
            <Text fontSize="15px" color="whiteAlpha.700" maxW="320px">
              Care anytime, anywhere.
            </Text>
          </Stack>

          <SimpleGrid columns={{base: 1, sm: 2}} spacingX="80px" spacingY="32px">
            <Stack spacing="14px">
              <ColumnTitle>Company</ColumnTitle>
              {pages.map((p) => (
                <Link as={NextLink} key={p.href} href={p.href} {...linkStyle}>
                  {p.label}
                </Link>
              ))}
            </Stack>
            <Stack spacing="14px">
              <ColumnTitle>Contact</ColumnTitle>
              <Link href="https://mila.quebec/en/industry/entrepreneurship-lab/" isExternal display="flex" alignItems="center" gap="10px" {...linkStyle}>
                <MapPin size={18}/> Montreal, Canada
              </Link>
              <Link href="mailto:info@awakeai.org" display="flex" alignItems="center" gap="10px" {...linkStyle}>
                <Mail size={18}/> info@awakeai.org
              </Link>
              <Link href="https://ca.linkedin.com/company/awakeai" isExternal display="flex" alignItems="center" gap="10px" {...linkStyle}>
                <Linkedin size={18}/> AwakeAI Inc.
              </Link>
            </Stack>
          </SimpleGrid>
        </Flex>

        <Flex borderTop="1px solid" borderColor="whiteAlpha.200" pt="20px" direction={{base: "column", md: "row"}}
              justify="space-between" gap="8px" fontSize={{base: "12px", lg: "14px"}} color="whiteAlpha.600">
          <Text>©{new Date().getFullYear()} AwakeAI Inc., All Rights Reserved.</Text>
          <Link as={NextLink} href="/privacy" _hover={{color: "brand.400"}}>
            Privacy Policy and Terms of Service
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
