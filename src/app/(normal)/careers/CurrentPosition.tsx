import { Box, Center, Flex, Text } from "@chakra-ui/react";

export const CurrentPosition = ({ position }: { position: { title: string; location: string; content: string } }) => {
  return (
    <Center w="100%" pos="relative">
      <Flex
        pos="relative"
        direction={{ base: "column", lg: "row" }}
        zIndex={2}
        color="#000"
        w="100%"
        h="100%"
        maxW="1440px"
        gap="95px"
        px={{ base: "20px", lg: "146px" }}
        pt={{ base: "56px", lg: "0" }}
        pb={{ base: "28px", lg: "76px" }}
        justifyContent="center"
        alignItems="center"
      >
        <Flex direction="column" gap="108px">
          <Flex direction="column" gap="32px">
            <Text fontSize={{ base: "24px", lg: "45px" }} lineHeight={{ base: "29px", lg: "54px" }} fontWeight={400}>
              Current Positions
            </Text>
            <Box w="100%" minH="1px" bg="#000"></Box>
            <Text fontSize={{ base: "15px", lg: "24px" }} lineHeight="36px" fontWeight={700}>
              Job Title: {position.title}
            </Text>
            <Text
              fontSize={{ base: "15px", lg: "24px" }}
              lineHeight="40px"
              fontWeight={400}
              style={{ whiteSpace: "pre-wrap" }}
            >
              {`${position.content}`}
            </Text>
            <Text fontSize={{ base: "15px", lg: "24px" }} lineHeight="40px" fontWeight={400}>
              To Apply:
            </Text>
            <Text fontSize={{ base: "15px", lg: "24px" }} lineHeight="40px" fontWeight={400}>
              * Please submit CV and cover letter to <a href="mailto: career@awakeai.org">career@awakeai.org</a>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
};
