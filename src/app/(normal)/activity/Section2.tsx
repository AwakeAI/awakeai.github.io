import { FC, PropsWithChildren } from "react";
import { Center, Flex, Text } from "@chakra-ui/react";

export const Section2: FC<{ activity: any }> = ({ activity }) => {
  return (
    <Center w="100%" pos="relative">
      <Flex
        pos="relative"
        direction="column"
        zIndex={2}
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
          fontWeight={400}
          textAlign="center"
        >
          {activity.title}
        </Text>
        <Text
          fontSize={{ base: "16px", lg: "24px" }}
          lineHeight={{ base: "19px", ls: "29px" }}
          fontWeight={{ base: 400, lg: 100 }}
          textAlign="center"
        >
          {activity.date}
        </Text>
      </Flex>
    </Center>
  );
};
