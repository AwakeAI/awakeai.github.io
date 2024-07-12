import { Box, Center, Flex, Text } from "@chakra-ui/react";

export const List = ({
  jobPositions = [],
  onChoosePosition,
}: {
  jobPositions: { title: string; location: string; content: string }[];
  onChoosePosition: (index: number) => void;
}) => {
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
        gap="95px"
        px={{ base: "20px", lg: "146px" }}
        pt={{ base: "56px", lg: "0" }}
        pb={{ base: "28px", lg: "76px" }}
        justifyContent="center"
        alignItems="center"
      >
        <Flex direction="column" w="100%" h="auto" maxW="1440px" flexWrap="wrap" gap="30px">
          <Text fontSize={{ base: "30px", lg: "45px" }} lineHeight={{ base: "29px", lg: "54px" }} fontWeight={400}>
            Careers at AwakeAI
          </Text>
          {jobPositions.map((p, index) => {
            return (
              <Flex direction="column" gap="20px" key={`pos-${index}`}>
                <Box w={"100%"} minH="1px" bg="#000"></Box>
                <Flex direction="row" justifyContent="space-between" padding="0 0 0 10px">
                  <Flex direction="column">
                    <Text
                      fontSize={{ base: "15px", lg: "24px" }}
                      lineHeight={{ base: "23px", lg: "36px" }}
                      fontWeight={800}
                    >
                      {p.title}
                    </Text>
                    <Text
                      fontSize={{ base: "15px", lg: "24px" }}
                      lineHeight={{ base: "23px", lg: "36px" }}
                      fontWeight={400}
                    >
                      {p.location}
                    </Text>
                  </Flex>
                  <Flex direction="column" alignItems="center" justify="center">
                    <Text
                      fontSize={{ base: "15px", lg: "24px" }}
                      lineHeight={{ base: "23px", lg: "36px" }}
                      fontWeight={400}
                      textDecoration={"underline"}
                      onClick={() => onChoosePosition(index)}
                    >
                      Apply now
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Center>
  );
};
