"use client";

import {Box, Center, Flex, Heading, Text, useColorModeValue} from "@chakra-ui/react";
import React from "react";
import {useRouter} from "next/navigation";
import {useTranslations} from "next-intl";

export const Section2 = () => {
  const color = useColorModeValue("Black", "gray.200");
  const t = useTranslations("Careers");
  const c = useTranslations("Common");

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
            {t("Careers at SeysoAI")}
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
              {c("Of SeysoAI Inc")}
            </Heading>
            <Heading fontSize={{base: "24px", lg: "45px"}} lineHeight={{base: "29px", lg: "54px"}} fontWeight={400}>
              {t("Why us")}
            </Heading>
            <Box w="100%" h="1px" bg={color} my={{base: "20px", lg: "30px"}}></Box>
            <Text fontSize="20px" lineHeight="30px" fontWeight={400} textAlign="justify">
              {t("Introduction1")} <br />
              <br /> {t("Introduction2")}
            </Text>
          </Flex>
        </Flex>
      </Center>
      <Center w="100%" pos="relative">
        <Flex
          pos="relative"
          zIndex={2}
          w="100%"
          h="100%"
          maxW="1440px"
          px={{base: "20px", lg: "130px"}}
          pb={{base: "54px", lg: "76px"}}
          gap={{base: "32px", lg: "137px"}}
          direction={{base: "column", lg: "row"}}
        >
          <Flex direction="column" alignItems={{base: "flex-start", lg: "center"}} gap="28px" width={{base: "100%", lg:"33%"}}>
            <Heading fontSize="24px" lineHeight="29px" fontWeight={700}>
              {t("Brilliant Minds")}
            </Heading>
            <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="justify">
              {t(
                "Work with some of the most brilliant minds in the industry We’recreative, and we have the ingredients to be innovative",
              )}
            </Text>
          </Flex>

          <Box w="100%" h="1px" bg={color} display={{base: "block", lg: "none"}}></Box>

          <Flex direction="column" alignItems={{base: "flex-start", lg: "center"}} gap="28px" width={{base: "100%", lg:"33%"}}>
            <Heading fontSize="24px" lineHeight="29px" fontWeight={700}>
              {t("Flexible Hours")}
            </Heading>
            <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="justify">
              {t(
                "Studies show that work hours that fit in with our lives make ushappier and more energetic We agree",
              )}
            </Text>
          </Flex>

          <Box w="100%" h="1px" bg={color} display={{base: "block", lg: "none"}}></Box>

          <Flex direction="column" alignItems={{base: "flex-start", lg: "center"}} gap="28px" width={{base: "100%", lg:"33%"}}>
            <Heading fontSize="24px" lineHeight="29px" fontWeight={700}>
              {t("Exciting Projects")}
            </Heading>
            <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="justify">
              {t(
                "We get to apply bleeding-edge technology to solve problems for our customers",
              )}
            </Text>
          </Flex>

        </Flex>
      </Center>
    </>
  );
};
