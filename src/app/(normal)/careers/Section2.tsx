"use client";

import {Box, Center, Flex, Heading, Text, useColorModeValue} from "@chakra-ui/react";
import React from "react";
import {useRouter} from "next/navigation";

export const Section2 = () => {
  const router = useRouter();
  const color = useColorModeValue("Black", "gray.200");

  return (
    <>
      <Center w="100%" pos="relative">
        <Flex
          pos="relative"
          direction="column"
          zIndex={2}
          w="100%"
          h="100%"
          maxW="1440px"
          px={{base: "20px", lg: "130px"}}
          pt={{base: "40px", lg: "24px"}}
          pb={{base: "30px", lg: "50px"}}
          justifyContent="center"
          gap={{base: "26px", lg: "72px"}}
        >
          <Heading
            fontSize={{base: "24px", lg: "64px"}}
            lineHeight={{base: "29px", lg: "77px"}}
            fontWeight={700}
            alignSelf={{base: "flex-start", lg: "center"}}
          >
            Opportunities
          </Heading>
          <Flex direction="column">
            <Heading
              fontSize="14px"
              lineHeight="21px"
              fontWeight={500}
              textTransform="uppercase"
              letterSpacing="0.5em"
              mb="32px"
            >
              At AwakeAI Inc.
            </Heading>
            <Heading fontSize={{base: "24px", lg: "45px"}} lineHeight={{base: "29px", lg: "54px"}} fontWeight={400}>
              Why us
            </Heading>
            <Box w="100%" h="1px" bg={color} my={{base: "20px", lg: "30px"}}></Box>
            <Text fontSize="20px" lineHeight="30px" fontWeight={400} textAlign="justify">
              At AwakeAI Inc., we foster a supportive culture that enables our team members to reach their full
              potential,
              grow alongside us, and better serve our customers.
              We offer flexible working hours and competitive compensation. <br/> <br/>

              Join our innovative team to monitor and improve the quality of life for the elderly through advanced AI
              systems, ensuring a safer and more independent living environment for them. <br/>
            </Text>
          </Flex>
        </Flex>
      </Center>
      <Center w="100%" pos="relative">
        <Flex
          pos="relative"
          zIndex={2}
          color="#000"
          w="100%"
          h="100%"
          maxW="1440px"
          px={{base: "20px", lg: "130px"}}
          pb={{base: "54px", lg: "76px"}}
          gap={{base: "32px", lg: "137px"}}
          direction={{base: "column", lg: "row"}}
        >
          <Flex direction="column" alignItems={{base: "flex-start", lg: "center"}} gap="28px">
            <Heading fontSize="24px" lineHeight="29px" fontWeight={700}>
              Brilliant Minds
            </Heading>
            <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="justify">
              Work with some of the most brilliant minds in the industry at AwakeAI,
              a
              <a href="https://mila.quebec/en/mila-entrepreneurship-lab"
                 style={{color: "#662E7D", fontWeight: "700"}}> MILA startup </a>.
              We're creative and have the essential ingredients for innovation.
            </Text>
          </Flex>

          <Box w="100%" h="1px" bg="#717171" display={{base: "block", lg: "none"}}></Box>

          <Flex direction="column" alignItems={{base: "flex-start", lg: "center"}} gap="28px">
            <Heading fontSize="24px" lineHeight="29px" fontWeight={700}>
              Flexible Hours
            </Heading>
            <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="justify">
              Studies show that work hours that fit in with our lives make us happier and more energetic. We agree.
            </Text>
          </Flex>

          <Box w="100%" h="1px" bg="#717171" display={{base: "block", lg: "none"}}></Box>

          <Flex direction="column" alignItems={{base: "flex-start", lg: "center"}} gap="28px">
            <Heading fontSize="24px" lineHeight="29px" fontWeight={700}>
              Exciting Projects
            </Heading>
            <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="justify">
              We get to apply bleeding-edge technology to solve problems for our customers.
            </Text>
          </Flex>

        </Flex>
      </Center>
    </>
  );
};
