import { FC } from "react";
import { Box, Center, Flex, Input, Text } from "@chakra-ui/react";

export const Subscribe: FC = () => {
  return (
    <Center w="100%">
      <Flex
        direction={{ base: "column", lg: "row" }}
        w="100%"
        maxW="1440px"
        py="35px"
        px="30px"
        justify="space-between"
      >
        <Text
          w="100%"
          maxW="450px"
          fontSize={{ base: "17px", lg: "24px" }}
          fontWeight={400}
          lineHeight={{ base: "20px", lg: "28px" }}
          letterSpacing="-5%"
        >
          Subscribe to stay tuned for news and latest updates. Let’s start it!
        </Text>
        <Flex
          bg="#E1E1E1"
          borderRadius="50px"
          w="100%"
          maxW="511px"
          h={{ base: "33px", lg: "50px" }}
          mt={{ base: "30px", lg: "0" }}
        >
          <Input variant="unstyled" pl="20px" flex={1} />
          <Box
            as="button"
            borderRadius="50px"
            w={{ base: "150px", lg: "220px" }}
            h={{ base: "33px", lg: "50px" }}
            bg="#000"
            color="#fff"
            fontSize={{ base: "12px", lg: "20px" }}
            lineHeight={{ base: "33px", lg: "50px" }}
            letterSpacing="-5%"
          >
            Subscribe
          </Box>
        </Flex>
      </Flex>
    </Center>
  );
};
