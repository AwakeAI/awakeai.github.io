"use client";

import { Box, Center, Flex, Grid, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import { DragEffect } from "@/components/DragEffect";
import TechnologySection from "@/app/(normal)/home/Product";

import Bg from "../../../../public/images/drag-effect/bg.png";
import Fa from "../../../../public/images/drag-effect/fa.png";
import Mo from "../../../../public/images/drag-effect/mod.png";
import Mo2 from "../../../../public/images/drag-effect/mod2.png";
import fHome from "../../../../public/images/drag-effect/home.png";
import Nw from "../../../../public/images/drag-effect/nw.png";
import Effect from "../../../../public/images/drag-effect/effect.png";
import NwEffect from "../../../../public/images/drag-effect/nweffect.png";

export const Section3 = () => {
  const color = useColorModeValue("White", "Black");
  const fnColor = useColorModeValue("Black", "White");

  return (
    <Center w="100%" pt="60px" pb="80px" bg={{ base: color, lg: color }}>
      <Flex w="100%" direction="column" px="30px" maxW="1440px">
        <Text
          fontSize={{ base: "12px", lg: "14px" }}
          lineHeight="21px"
          letterSpacing="0.3em"
          textTransform="uppercase"
          fontWeight={400}
          mt={{ base: "180px", lg: "auto" }}
          mb={{ base: "auto", lg: "34px" }}
        >
          Product
        </Text>
        <Heading
          w={{ base: "100%", lg: "800px" }}
          fontSize={{ base: "28px", lg: "45px" }}
          fontWeight={700}
          lineHeight={{ base: "30px", lg: "50px" }}
          letterSpacing="-5%"
          textAlign="left"
        >
          Our{" "}
          <Box as="span" color="#FF9900">
            Advanced AI
          </Box>{" "}
          Technology
        </Heading>
        {/*<Box w="100%" mt="33px" rounded="8px" pos="relative">*/}
        {/*  <Box*/}
        {/*    maxW="492px"*/}
        {/*    w="100%"*/}
        {/*    pos={{ base: "static", lg: "absolute" }}*/}
        {/*    bottom="38px"*/}
        {/*    left="28px"*/}
        {/*    fontSize={{ base: "22px", lg: "28px" }}*/}
        {/*    lineHeight={{ base: "28px", lg: "32px" }}*/}
        {/*    color={{ base: "#000", lg: "#fff" }}*/}
        {/*    mt={{ base: "30px", lg: 0 }}*/}
        {/*  >*/}
        {/*    */}
        {/*  </Box>*/}
        {/*</Box>*/}

        <Grid
          templateColumns={{ base: "repeat(1, fr)", lg: "repeat(2, 1fr)" }}
          mt="62px"
          columnGap="30px"
          rowGap="30px"
          sx={{
            ".img": {
              // h: "423px",
              w: "10%",
              objectFit: "cover",
            },
          }}
        >
          <Box w="100%"
               pos="relative"
               h="450px"
               borderWidth='1.5px'
               borderColor={fnColor}
               boxShadow="4px 4px 0px 0px #FF9900"
               borderRadius="0.125rem"
               flex="1 1 15px"
               color={{ base: fnColor, lg: fnColor }}
               style={{ overflow: "hidden" }}
          >
            <Box w="100%"
                 pos="relative"
                 h="306px"
                 boxShadow="inset 0px -1px 0px rgba(0, 0, 0, 0.1);"
            >
              <DragEffect Bg={Bg} Effect={Effect} maxWidth={646}/>
            </Box>
            <Heading fontWeight="600"
                     fontSize="32px"
                     padding='1.5rem 1.5rem 0 1.5rem'
                     lineHeight="26px">
              Privacy Preserving
            </Heading>
            <Text
              padding={{ base: "0.6rem 1.5rem 0 1.5rem", md: "1.5rem 1.5rem 0 1.5rem" }}
              lineHeight="1.6rem"
              color={fnColor}>
              The video will be processed in real-time, with identifiable information masked to prevent any risk of leaks.
            </Text>
          </Box>
          <Box w="100%"
               pos="relative"
               h="450px"
               borderWidth='1.5px'
               borderColor={fnColor}
               boxShadow="4px 4px 0px 0px #FF9900"
               borderRadius="0.125rem"
               flex="1 1 15px"
               color={{ base: fnColor, lg: fnColor }}
               style={{ overflow: "hidden" }}
          >
            <Box w="100%"
                 pos="relative"
                 h="306px"
                 boxShadow="inset 0px -1px 0px rgba(0, 0, 0, 0.1);"
            >
              <DragEffect Bg={Nw} Effect={NwEffect} maxWidth={350}/>
            </Box>
            <Heading fontWeight="600"
                     fontSize="32px"
                     padding='1.5rem 1.5rem 0 1.5rem'
                     lineHeight="26px">
              No Wearables
            </Heading>
            <Text
              padding='1.5rem 1.5rem 0 1.5rem'
              lineHeight="1.6rem"
              color={fnColor}>
              No wearable and manual operations are needed, no extra burden on any user.
            </Text>
          </Box>
          <Box w="100%"
               pos="relative"
               h="450px"
               borderWidth='1.5px'
               borderColor={fnColor}
               boxShadow="4px 4px 0px 0px #FF9900"
               borderRadius="0.125rem"
               flex="1 1 15px"
               color={{ base: fnColor, lg: fnColor }}
               style={{ overflow: "hidden" }}
          >
            <Box w="100%"
                 pos="relative"
                 h="306px"
                 boxShadow="inset 0px -1px 0px rgba(0, 0, 0, 0.1);"
            >
              <DragEffect Bg={Fa} Effect={fHome} maxWidth={1100}/>
            </Box>
            <Heading fontWeight="600"
                     fontSize="32px"
                     padding='1.5rem 1.5rem 0 1.5rem'
                     lineHeight="26px">
              Broadly Applicable
            </Heading>
            <Text
              padding={{ base: "0.6rem 1.5rem 0 1.5rem", md: "1.5rem 1.5rem 0 1.5rem" }}
              lineHeight="1.6rem"
              color={fnColor}>
              The application can be extended to hospitals, homecare and long-term care facilities.
            </Text>
          </Box>

          <Box w="100%"
               pos="relative"
               h="450px"
               borderWidth='1.5px'
               borderColor={fnColor}
               boxShadow="4px 4px 0px 0px #FF9900"
               borderRadius="0.125rem"
               flex="1 1 372px"
               color={{ base: fnColor, lg: fnColor }}
               style={{ overflow: "hidden" }}
          >
            <Box w="100%"
                 pos="relative"
                 h="306px"
                 boxShadow="inset 0px -1px 0px rgba(0, 0, 0, 0.1);"
            >
              <DragEffect Bg={Mo} Effect={Mo2} maxWidth={1100}/>
            </Box>
            <Heading fontWeight="600"
                     fontSize="32px"
                     padding='1.5rem 1.5rem 0 1.5rem'
                     lineHeight="26px">
              Modularize
            </Heading>
            <Text
              padding='1.5rem 1.5rem 0 1.5rem'
              lineHeight="1.6rem"
              color={fnColor}>
              The application can be equipped into facility plain and simple.
            </Text>
          </Box>
        </Grid>
      </Flex>
    </Center>
  );
};
