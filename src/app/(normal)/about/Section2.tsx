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
            Founded in Montreal, Canada, and in partnership with Mila. At AwakeAI, we are inspired by the potential of
            technology
            to provide not just care but also comfort and peace of mind to both the elderly and their loved ones.
            We are committed to integrating cutting-edge technology into the daily lives of the elderly, providing
            seamless protection for their health and well-being.
            <br/> <br/>
            AwakeAI's intelligent caregiving system not only eases the burden on caregivers but also enhances the
            quality of life for the elderly by ensuring their safety and well-being.
            <br/> <br/>
            Our products feature cameras equipped with self-developed, large-scale multimodal algorithms.
            Utilizing advanced video understanding technology, we conduct real-time analyses of the elderly's
            activities, assessing their behavior in conjunction with their environment to make informed judgments,
            setting a new standard in elder care.
            <br/> <br/>
            To ensure privacy, our large model algorithm goes beyond skeleton technology by anonymizing the identity
            information of older people, maximizing their privacy protection. Additionally, our system requires no
            wearable devices, buttons, or charging.
            <br/> <br/>
            Join us in revolutionizing elder care. Discover how AwakeAI can make a difference in the lives of your loved
            ones today.
          </Text>
        </Box>
      </Flex>
    </Center>
  );
};
