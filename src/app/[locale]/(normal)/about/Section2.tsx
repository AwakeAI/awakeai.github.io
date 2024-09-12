"use client";

import {Box, Center, Flex, Text, useColorModeValue} from "@chakra-ui/react";
import React from "react";
import {useTranslations} from "next-intl";

export const Section2 = () => {
  const color = useColorModeValue("Black", "gray.200");
  const t = useTranslations("About");
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
          {t.rich("About SeysoAI", {
            label: (v) => <span style={{ color: "#FF9900" }}>{v}</span>,
          })}
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
            {t("Forging the ultimate Companionship for Seniors")}
          </Text>
          <Box w="100%" h="1px" bg={color} my={{base: "20px", lg: "30px"}}></Box>
          <Text fontSize="20px" lineHeight="30px" fontWeight={400} textAlign="justify">
            <span style={{fontWeight: 300}}>
              {t("Started")}
              <br/> <br/>
              {t("Firstly")}
              <br/> <br/>
              {t(`Secondly`)}
            </span>
          </Text>
        </Box>
      </Flex>
    </Center>
  );
};
