import { FC } from "react";
import { Box, Center, Flex, Grid, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

export const Section6: FC = () => {
  return (
    <Center w="100%" bg="#fff">
      <Grid
        w="100%"
        h={{ base: "200svh", lg: "800px" }}
        maxW="1440px"
        templateColumns={{ base: "1fr", lg: "repeat(2, 50%)" }}
        templateRows={{ base: "repeat(2, 100svh)", lg: "auto" }}
      >
        <Flex direction="column" justify="space-between" color="#000" h="100%" pt="70px" pb="60px" px="30px">
          <Text
            fontSize="14px"
            lineHeight="21px"
            letterSpacing="0.5em"
            textTransform="uppercase"
            mb={{ base: "94px", lg: "34px" }}
          >
            Our STORY
          </Text>
          <Heading
            w="100%"
            fontSize={{ base: "28px", lg: "45px" }}
            fontWeight={700}
            lineHeight={{ base: "28px", lg: "50px" }}
            textAlign="left"
          >
            Innovate senior care through{" "}
            <Box as="span" color="#ff9900">
              Intelligence
            </Box> <br/>
            ,{" "}
            <Box as="span" color="#ff9900">
              Dedication
            </Box>{" "}
            and{" "}
            <Box as="span" color="#ff9900">
              Modulation
            </Box>
            .
          </Heading>
          <Flex>
            <Heading
              as="h3"
              w={{ base: "100%", lg: "654px" }}
              fontSize={{ base: "23px", lg: "32px" }}
              fontWeight={400}
              lineHeight={{ base: "26px", lg: "40px" }}
              textAlign="left"
              mt="40px"
            >
              Joining our journey
            </Heading>
            <Box mt="51px">
              <Image src="/images/next.svg" alt="next" width={20} height={20} />
            </Box>
          </Flex>
        </Flex>
        <Box
          h="100%"
          pos="relative"
          sx={{
            ".img": {
              pos: "absolute",
              objectFit: "cover",
              zIndex: 0,
            },
          }}
        >
          <Box
            position="absolute"
            w="100%"
            zIndex={1}
            h="50%"
            bg="linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.55))"
            bottom="0"
            left="0"
          />
          <Image alt="section6_part_1_bg" src="/images/HFS.png" fill className="img" />
          <Flex
            pos="relative"
            direction="column"
            zIndex={2}
            color="#fff"
            w="100%"
            h="100%"
            maxW="1440px"
            px="30px"
            pb={{ base: "120px", lg: "70px" }}
            justify="end"
          >
            <Heading
              w="100%"
              fontSize={{ base: "28px", lg: "45px" }}
              fontWeight={400}
              lineHeight={{ base: "28px", lg: "50px" }}
              letterSpacing="-0.05em"
              textAlign="left"
            >
              Her for seniors
            </Heading>
            <Link
              href="#"
              bg="#FF9900"
              height="50px"
              lineHeight="50px"
              rounded="30px"
              w="164px"
              textAlign="center"
              color="#000"
              fontSize="20px"
              cursor="pointer"
              mt="40px"
              _hover={{
                textDecoration: "none",
              }}
            >
              Find More
            </Link>
          </Flex>
        </Box>
      </Grid>
    </Center>
  );
};
