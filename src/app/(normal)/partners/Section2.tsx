import {Center, Heading} from "@chakra-ui/react";
import React from "react";

export const Section2 = () => {

  return (
    <Center w="100%" px={{ base: "20px", lg: "30px" }}>
      <Center width="100%" maxW="1440px" pt={{ base: "8px", lg: "8px" }} pb={{ base: "8px", lg: "16px" }}>
        <Heading
          as="h1"
          fontSize={{base: "36px", lg: "60px"}}
          lineHeight={{base: "44px", lg: "68px"}}
          fontWeight={800}
          letterSpacing="-0.035em"
        >
          Our Partners
        </Heading>
      </Center>
    </Center>
  );
};
