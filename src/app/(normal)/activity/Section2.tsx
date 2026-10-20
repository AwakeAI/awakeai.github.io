import { FC } from "react";
import { Center, Flex, Heading, Text } from "@chakra-ui/react";

export const Section2: FC<{ activity: any }> = ({ activity }) => {
  return (
    <Center w="100%" pos="relative">
      <Flex
        direction="column"
        w="100%"
        maxW="1100px"
        gap={{ base: "12px", lg: "16px" }}
        px={{ base: "20px", lg: "30px" }}
        pb={{ base: "40px", lg: "64px" }}
        alignItems="center"
      >
        <Heading
          as="h1"
          fontSize={{ base: "28px", lg: "48px" }}
          lineHeight={{ base: "36px", lg: "58px" }}
          fontWeight={800}
          letterSpacing="-0.03em"
          textAlign="center"
        >
          {activity.title}
        </Heading>
        <Text fontSize={{ base: "15px", lg: "17px" }} color="fg.muted" textAlign="center">
          {activity.date}
        </Text>
      </Flex>
    </Center>
  );
};
