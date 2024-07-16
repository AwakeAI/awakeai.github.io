import { FC } from "react";
import {Box, Center, Flex, Grid, Heading, Link, Text} from "@chakra-ui/react";
import Image from "next/image";
import Product from "@/app/(normal)/home/Product";

export const Section2: FC = () => {
  return (
    <Center
      w="100%"
      minH="calc(100svh - 122px)"
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
      <Box
        w={{ base: "80%", lg: "60%" }}
        mt="62px"
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
          direction="column"
          zIndex={2}
          color="#000"
          w="100%"
          h="100%"
          px="30px"
          pb="70px"
          mt="10px"
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
            w="100%"
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
            and{" "}
            <Box as="span" color="#FFF">
              detailed
            </Box>{" "}
            analysis of senior activities in real-time, yielding more comprehensive and accurate results.
          </Heading>


          <Product/>
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
            _hover={{
              textDecoration: "none",
            }}
          >
            Read More
          </Link>
        </Flex>

      </Box>

    </Center>
  );
};
