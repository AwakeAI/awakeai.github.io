import { Box, Center, Text } from "@chakra-ui/react";

export const Section2 = () => {
  return (
    <Center w="100%" bg="#FF9900">
      <Center width="100%" maxW="1440px" pt={{ base: "14px", lg: "24px" }} pb={{ base: "13px", lg: "29px" }}>
        <Text
          color="#000"
          fontWeight={400}
          lineHeight={{ base: "26px", lg: "78px" }}
          fontSize={{ base: "22px", lg: "64px" }}
        >
          Our <span style={{ color: "#fff" }}>Team</span>
        </Text>
      </Center>
    </Center>
  );
};
