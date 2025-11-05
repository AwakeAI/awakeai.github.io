import { Box, Center, Flex, Heading, Link, Text, UnorderedList, ListItem } from "@chakra-ui/react";

export const CurrentPositions = ({
  position,
}: {
  position: { title: string; location: string; content: string | any };
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
        pb={{ base: "32px", lg: "135px" }}
        direction="column"
      >
        <Heading fontSize={{ base: "24px", lg: "45px" }} lineHeight={{ base: "29px", lg: "54px" }} fontWeight={400}>
          Current Positions
        </Heading>

        <Box w="100%" h="1px" bg="#000" mt={{ base: "24px", lg: "30px" }} mb={{ base: "24px", lg: "69px" }}></Box>

        <Text fontSize="24px" lineHeight="36px" fontWeight={400}>
          <Text fontWeight={700}>Job Title: {position.title}</Text>
          <br />
          {position.content}
          <br />
          To Apply: <br /> <br />
          <UnorderedList>
            <ListItem>
              Please submit CV and cover letter to <Link textDecoration="underline">career@awakeai.org</Link>
            </ListItem>
          </UnorderedList>
        </Text>
      </Flex>
    </Center>
  );
};
