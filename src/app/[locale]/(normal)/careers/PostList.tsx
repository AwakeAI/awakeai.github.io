import { Box, Center, Flex, Heading, Text, Link } from "@chakra-ui/react";

export const PostList = ({
  jobPositions = [],
  onChoosePosition,
}: {
  jobPositions: { title: string; location: string; content: string | any }[];
  onChoosePosition: (index: number) => void;
}) => {
  return (
    <Center w="100%" borderBottom="5px solid #E1E1E1">
      <Flex
        pos="relative"
        zIndex={2}
        color="#000"
        w="100%"
        h="100%"
        maxW="1440px"
        px={{ base: "20px", lg: "130px" }}
        pt={{ base: "54px", lg: "116px" }}
        pb={{ base: "32px", lg: "717px" }}
        direction="column"
      >
        <Heading fontSize={{ base: "24px", lg: "45px" }} lineHeight={{ base: "29px", lg: "54px" }} fontWeight={400}>
          Careers at AwakeAI
        </Heading>

        <Box w="100%" h="1px" bg="#000" mt={{ base: "24px", lg: "30px" }} mb={{ base: "24px", lg: "33px" }}></Box>

        {jobPositions.map((item, index) => (
          <Box key={index}>
            <Flex justifyContent="space-between">
              <Box>
                <Heading fontSize="24px" lineHeight="36px" fontWeight={{ base: 500, lg: 700 }}>
                  {item.title}
                </Heading>
                <Text fontSize={{ base: "20px", lg: "24px" }} lineHeight="36px" fontWeight={400}>
                  {item.location}
                </Text>
              </Box>
              <Link
                fontSize={{ base: "20px", lg: "24px" }}
                lineHeight="36px"
                textDecoration="underline"
                fontWeight={400}
                alignSelf={{ base: "flex-end", lg: "center" }}
                onClick={() => onChoosePosition(index)}
              >
                Apply now
              </Link>
            </Flex>
            <Box w="100%" h="1px" bg="#000" mt={{ base: "16px", lg: "35px" }} mb={{ base: "24px", lg: "35px" }}></Box>
          </Box>
        ))}
      </Flex>
    </Center>
  );
};
