import { FC } from "react";
import {Box, Center, Flex, Grid, Heading, Link, Text} from "@chakra-ui/react";
import Image from "next/image";
import Product from "@/app/(normal)/home/Product";

export const Section2: FC = () => {
  return (
    <Center
      w="100%"
      h="calc(100svh - 122px)"
      pos="relative"
      sx={{
        ".img-bg": {
          pos: "absolute",
          top: 0,
          left: 0,
          userSelect: "none",
          "&.pc": {
            display: {
              base: "none",
              lg: "block",
            },
          },
          "&.mobile": {
            display: {
              base: "block",
              lg: "none",
            },
          },
        },
      }}
    >
      <Image
        className="img-bg mobile"
        src="/images/0_0.jpeg"
        alt="section_2_bg"
        fill
        draggable={false}
      />
      <Image
        className="img-bg pc"
        src="/images/0_0.jpeg"
        alt="section_2_bg"
        fill
        draggable={false}
      />
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

        backdropFilter='auto' backdropBlur='8px'
      >
        <Flex
          pos="relative"
          direction="column"
          zIndex={2}
          color="#000"
          w="100%"
          h="100%"
          maxW="700px"
          px="30px"
          pb="70px"
          justify="center"
        >
          <Text
            fontSize="14px"
            lineHeight="21px"
            letterSpacing="0.5em"
            textTransform="uppercase"
            mb={{ base: "94px", lg: "34px" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            ABOUT US
          </Text>
          <Heading
            w={{ base: "100%", lg: "654px" }}
            fontSize={{ base: "28px", lg: "45px" }}
            fontWeight={700}
            lineHeight={{ base: "30px", lg: "50px" }}
            letterSpacing="-5%"
            textAlign="left"
            style={{}}
          >
            Based on cutting-edge AI computer vision technology, which enables more{" "}
            <Box as="span" color="#FFF">
              in-depth
            </Box>{" "}
            and{" "} <br/>
            <Box as="span" color="#FFF">
              detailed
            </Box>{" "}
            analysis of senior activities in real-time, yielding more comprehensive and accurate results.
          </Heading>
          <Link
            href="/about"
            bg="#FF9900"
            height="50px"
            lineHeight="50px"
            rounded="30px"
            mx={{ base: 'auto', md: 0 }}
            w="164px"
            textAlign="center"
            color="#FFF"
            fontSize="20px"
            cursor="pointer"
            mt="36px"
            _hover={{
              textDecoration: "none",
            }}
          >
            Read More
          </Link>
        </Flex>

        <Flex
          pos="relative"
          direction="column"
          zIndex={2}
          color="#000"
          w="100%"
          h="100%"
          maxW="700px"
          px="30px"
          pb="70px"
          justify="center"
        >
          <Product/>
        </Flex>

      </Grid>

    </Center>
  );
};
