import { Center, Flex, Text } from "@chakra-ui/react";

export const Title = () => {
  return (
    <Center w="100%" pos="relative">
      <Flex
        pos="relative"
        direction="column"
        zIndex={2}
        color="#000"
        w="100%"
        h="100%"
        maxW="1440px"
        gap="30px"
        px={{ base: "20px", lg: "149px" }}
        pt={{ base: "0", lg: "0" }}
        pb={{ base: "209px", lg: "90px" }}
        alignItems="center"
      >
        <Text
          fontSize={{ base: "24px", lg: "64px" }}
          lineHeight={{ base: "28px", ls: "77px" }}
          fontWeight={700}
          textAlign="center"
        >
          Careers
        </Text>
      </Flex>
    </Center>
  );
};
