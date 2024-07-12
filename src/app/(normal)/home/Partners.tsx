"use client";
import { FC } from "react";
import {
  Center,
  Flex,
  Heading,
  AspectRatio,
  Box,
  Text,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import eeconomie from "../../../../public/images/partners/eeconomie.png";
import mcgillPng from "../../../../public/images/partners/mcgill.png";
import milaPng from "../../../../public/images/partners/mila.png";
import ms2Png from "../../../../public/images/partners/m3.png";
import medteq from "../../../../public/images/partners/medteq.png";
import agewell from "../../../../public/images/partners/agewell.png";
import next from "../../../../public/images/partners/next_3.png";
import mitacs from "../../../../public/images/partners/mitacs.png";

const partners = [
  milaPng,
  mcgillPng,
  next,
  eeconomie,
  ms2Png,
  medteq,
  agewell,
  mitacs,
];

export const Partners: FC = () => {
  const color = useColorModeValue("White", "Black");
  const fnColor = useColorModeValue("Black", "White");
  const borderColor = useColorModeValue("gray.300", "White");
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Center w="100%" bg={color} color={fnColor} flexDirection="column">
      <Flex
        direction="column"
        w="100%"
        maxW="1440px"
        pt={{ base: "60px", lg: "90px" }}
        pb={{ base: "60px", lg: "70px" }}
        px="30px"
      >
        <Text
          fontSize="14px"
          lineHeight="21px"
          letterSpacing="0.5em"
          textTransform="uppercase"
          mb={{ base: "94px", lg: "34px" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          Partners
        </Text>
        <Heading
          w={{ base: "100%", lg: "800px" }}
          fontSize={{ base: "28px", lg: "45px" }}
          fontWeight={700}
          lineHeight={{ base: "30px", lg: "50px" }}
          letterSpacing="-5%"
          textAlign="left"
        >
          Proudly{" "}
          <Box as="span" color="#FF9900">
            Collaborate
          </Box>{" "}
          with
        </Heading>
      </Flex>
      <Flex
        w="100%"
        maxW="1440px"
        px="30px"
        align="left"
        flexWrap="wrap"
        justify="center"
        //justify="space-between"
        gap="20px"
        pb="60px"
      >
        {partners.map((p) => {
          const width = p.width / 1.5;
          const height = p.height / 1.5;
          return (
            <Box
              border="1px solid"
              borderColor={borderColor}
              borderRadius="4px"
              borderBottomRightRadius={{base: "32px", md: "64px"}}
              borderTopLeftRadius={{base: "32px", md: "64px"}}
              display="flex"
              flexDirection="column"
              key={p.src}
              justifyContent="center"
              padding={{base: "10px", md: "20px"}}
            >
              <Box position="relative" w={{base: width/2,md:width}} h={{base: height/2,md:height}}>
                <Image src={p.src} alt={p.src} fill={true} style={{
                  filter: `${colorMode === 'light' ? 'none' : 'grayscale(1) invert(1)'}`
                }} />
              </Box>
            </Box>
          );
        })}
       </Flex>
    </Center>
  );
};
