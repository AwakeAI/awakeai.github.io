import {Box, Center, Flex, Heading, Text} from "@chakra-ui/react";
import React from "react";
import {Accent, Eyebrow} from "@/components/SectionHeader";

export const Section2 = () => {
  return (
    <Center w="100%" pos="relative">
      <Flex
        direction="column"
        w="100%"
        maxW="960px"
        px={{base: "20px", lg: "30px"}}
        pt={{base: "16px", lg: "8px"}}
        pb={{base: "48px", lg: "72px"}}
      >
        <Heading
          as="h1"
          fontSize={{base: "36px", lg: "60px"}}
          lineHeight={{base: "44px", lg: "68px"}}
          mb={{base: "32px", lg: "48px"}}
          fontWeight={800}
          letterSpacing="-0.035em"
          textAlign="center"
        >
          About <Accent>AwakeAI</Accent>
        </Heading>
        <Box>
          <Eyebrow>Mission</Eyebrow>
          <Text
            pt={{base: "12px", lg: "16px"}}
            fontSize={{base: "24px", lg: "40px"}}
            lineHeight={{base: "32px", lg: "50px"}}
            fontWeight={600}
            letterSpacing="-0.02em"
          >
            Forging the ultimate Companionship for Seniors.
          </Text>
          <Box w="100%" h="1px" bg="border.subtle" my={{base: "24px", lg: "32px"}}></Box>
          <Text fontSize={{base: "17px", lg: "19px"}} lineHeight={{base: "28px", lg: "32px"}} color="fg.muted">
            Founded in Montreal, Canada, and in partnership with Mila. At AwakeAI, we are inspired by the potential of
            technology to provide not just care but also comfort and peace of mind to both the elderly and their loved
            ones. We are committed to integrating cutting-edge technology into the daily lives of the elderly, providing
            seamless protection for their health and well-being.
            <br/> <br/>
            AwakeAI{"'"}s intelligent caregiving system not only eases the burden on caregivers but also enhances the
            quality of life for the elderly by ensuring their safety and well-being.
            <br/> <br/>
            Our products feature cameras equipped with self-developed, large-scale multimodal algorithms.
            Utilizing advanced video understanding technology, we conduct real-time analyses of the elderly{"'"}s
            activities, assessing their behavior in conjunction with their environment to make informed judgments,
            setting a new standard in elder care.
            <br/> <br/>
            To ensure privacy, our large model algorithm goes beyond skeleton technology by anonymizing the identity
            information of older adults, maximizing their privacy protection. Additionally, our system requires no
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
