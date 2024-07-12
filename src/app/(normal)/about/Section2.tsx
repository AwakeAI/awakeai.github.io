"use client";

import {Box, Center, Flex, Text, useColorModeValue} from "@chakra-ui/react";
import React from "react";

export const Section2 = () => {
  const color = useColorModeValue("Black", "gray.200");
  return (
    <Center w="100%" pos="relative">
      <Flex
        pos="relative"
        direction="column"
        zIndex={2}
        w="100%"
        h="100%"
        maxW="1440px"
        px={{base: "20px", lg: "130px"}}
        pt={{base: "56px", lg: "24px"}}
        pb={{base: "54px", lg: "76px"}}
        justifyContent="center"
        alignItems={{base: "flex-start", lg: "center"}}
      >
        <Text
          fontSize={{base: "26px", lg: "64px"}}
          lineHeight={{base: "31px", lg: "77px"}}
          mb={{base: "24px", lg: "34px"}}
          fontWeight={700}
          textAlign="center"
        >
          About <span style={{color: "#FF9900"}}>AwakeAI</span>
        </Text>
        <Box>
          <Text fontSize="14px" lineHeight="21px" fontWeight={500} textTransform="uppercase" letterSpacing="0.5em">
            Mission
          </Text>
          <Text
            pt={{base: "20px", lg: "32px"}}
            pb={{base: "20px", lg: "30px"}}
            fontSize={{base: "24px", lg: "45px"}}
            lineHeight={{base: "29px", lg: "54px"}}
            fontWeight={400}
          >
            Forging the ultimate Companionship for Seniors.
          </Text>
          <Box w="100%" h="1px" bg={color} my={{base: "20px", lg: "30px"}}></Box>
          <Text fontSize="20px" lineHeight="30px" fontWeight={400} textAlign="justify">
            Started in Montreal, Canada, and partnered with Mila, AwakeAI is dedicated to tackling two major pain points in elder care.
            <br/> <br/>
            Firstly, they aim to solve the challenge of not being able to detect unexpected situations that can affect the well-being of seniors during the crucial golden hours.
            Timely identification and response to such incidents are essential for ensuring the health and safety of elderly individuals.
            <br/> <br/>
            Secondly, AwakeAI focuses on the difficulty of objectively assessing and managing the quality of caregiving services. Maintaining high standards in caregiving is vital for providing seniors with the support and care they deserve.
            By addressing these pain points, AwakeAI aims to enhance the overall effectiveness and reliability of elder care services.
          </Text>
        </Box>
      </Flex>
    </Center>
  );
};
