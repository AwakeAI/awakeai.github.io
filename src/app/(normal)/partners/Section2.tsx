"use client";

import {Center, Heading} from "@chakra-ui/react";
import React from "react";

export const Section2 = () => {

  return (
    <Center w="100%">
      <Center width="100%" maxW="1440px" pt={{ base: "14px", lg: "24px" }} pb={{ base: "13px", lg: "29px" }}>
        <Heading
          fontSize={{base: "24px", lg: "64px"}}
          lineHeight={{base: "29px", lg: "77px"}}
          fontWeight={700}
          alignSelf={{base: "flex-start", lg: "center"}}
        >
          Our Partners
        </Heading>
      </Center>
    </Center>
  );
};
