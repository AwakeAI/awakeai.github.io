import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

export const Section3 = () => {
  return (
    <Center w="100%" bg="#FBC751">
      <Flex
        pos="relative"
        zIndex={2}
        color="#000"
        w="100%"
        h="100%"
        maxW="1440px"
        px={{ base: "20px", lg: "130px" }}
        pt={{ base: "54px", lg: "72px" }}
        pb={{ base: "54px", lg: "76px" }}
        gap={{ base: "32px", lg: "137px" }}
        direction={{ base: "column", lg: "row" }}
      >
        <Flex direction="column" alignItems={{ base: "flex-start", lg: "center" }} gap="28px">
          <Heading fontSize="24px" lineHeight="29px" fontWeight={400}>
            Brilliant Minds
          </Heading>
          <Text fontSize="20px" lineHeight="29px" fontWeight={400} textAlign={{ base: "left", lg: "center" }}>
            Work with some of the most brilliant minds in the industry. We’re creative, and we have the ingredients to
            be innovative.
          </Text>
        </Flex>

        <Box w="100%" h="1px" bg="#717171" display={{ base: "block", lg: "none" }}></Box>

        <Flex direction="column" alignItems={{ base: "flex-start", lg: "center" }} gap="28px">
          <Heading fontSize="24px" lineHeight="29px" fontWeight={400}>
            Flexible Hours
          </Heading>
          <Text fontSize="20px" lineHeight="29px" fontWeight={400} textAlign={{ base: "left", lg: "center" }}>
            Studies show that work hours that fit in with our lives make us happier and more energetic. We agree.
          </Text>
        </Flex>

        <Box w="100%" h="1px" bg="#717171" display={{ base: "block", lg: "none" }}></Box>

        <Flex direction="column" alignItems={{ base: "flex-start", lg: "center" }} gap="28px">
          <Heading fontSize="24px" lineHeight="29px" fontWeight={400}>
            Exciting Projects
          </Heading>
          <Text fontSize="20px" lineHeight="29px" fontWeight={400} textAlign={{ base: "left", lg: "center" }}>
            We get to apply bleeding-edge technology to solve problems for our customers.
          </Text>
        </Flex>
      </Flex>
    </Center>
  );
};
