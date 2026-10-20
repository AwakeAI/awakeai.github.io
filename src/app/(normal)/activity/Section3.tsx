import React, {FC, useState} from "react";
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import {FIELD, GoogleForm} from "@/components/GoogleForm";
import {Eyebrow} from "@/components/SectionHeader";

const Block: FC<{ label: string; title: string; text: string }> = ({label, title, text}) => (
  <Flex direction="column" gap="16px">
    <Eyebrow>{label}</Eyebrow>
    <Heading as="h2" fontSize={{base: "26px", lg: "36px"}} lineHeight={{base: "32px", lg: "44px"}} fontWeight={700}>
      {title}
    </Heading>
    <Box w="100%" h="1px" bg="border.subtle"></Box>
    <Text fontSize={{base: "17px", lg: "19px"}} lineHeight={{base: "28px", lg: "32px"}} color="fg.muted" whiteSpace="pre-wrap">
      {text}
    </Text>
  </Flex>
);

export const Section3: FC<{ onChangeActivity: (key: string) => void; activities: any[]; currentActivity: any }> = ({
  onChangeActivity,
  activities,
  currentActivity,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Center w="100%" pos="relative">
      <Flex
        direction={{base: "column", lg: "row"}}
        w="100%"
        maxW="1200px"
        gap={{base: "56px", lg: "72px"}}
        px={{base: "20px", lg: "30px"}}
        pb={{base: "64px", lg: "96px"}}
        alignItems={{base: "stretch", lg: "flex-start"}}
      >
        <Flex direction="column" gap={{base: "48px", lg: "64px"}} flex="1" minW={0}>
          {currentActivity.content ? (
            <Block label="Content" title={currentActivity.content.title} text={currentActivity.content.text}/>
          ) : null}
          {currentActivity.details ? (
            <Block label="Details" title={currentActivity.details.title} text={currentActivity.details.text}/>
          ) : null}
        </Flex>

        <Flex direction="column" gap="40px" w={{base: "100%", lg: "360px"}} flexShrink={0}>
          <Box bg="brand.500" color="#111114" rounded="2xl" p="22px" boxShadow="card">
            <Heading as="h2" fontSize="26px" lineHeight="32px" fontWeight={800} letterSpacing="-0.02em">
              Subscribe for latest updates
            </Heading>
            <Box mt="20px">
              <GoogleForm submitVariant="dark" onSent={() => {
                setName("");
                setEmail("");
              }}>
                <Stack spacing="12px">
                  <FormControl isRequired>
                    <FormLabel srOnly>Your Contact Name</FormLabel>
                    <Input type="text" name={FIELD.name} placeholder="Your Contact Name" value={name}
                           onChange={(e) => setName(e.target.value)}
                           bg="white" color="#111114" borderColor="transparent" _placeholder={{color: "gray.500"}}
                           focusBorderColor="#111114"/>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel srOnly>Email Address</FormLabel>
                    <Input type="email" name={FIELD.email} placeholder="Email Address" value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           bg="white" color="#111114" borderColor="transparent" _placeholder={{color: "gray.500"}}
                           focusBorderColor="#111114"/>
                  </FormControl>
                  <input type="hidden" name={FIELD.subject} value="News Letter Subscribe"/>
                </Stack>
              </GoogleForm>
            </Box>
          </Box>

          {activities.length ? (
            <Flex direction="column" gap="20px">
              <Heading as="h2" fontSize="20px" fontWeight={700}>
                Other Stories
              </Heading>
              {activities.map((item) => (
                <Box
                  as="button"
                  type="button"
                  data-group
                  key={item.key}
                  onClick={() => onChangeActivity(item.key)}
                  textAlign="left"
                  w="100%"
                >
                  <Box pos="relative" w="100%" aspectRatio={340 / 190} bg="white" rounded="xl" overflow="hidden"
                       border="1px solid" borderColor="border.subtle">
                    <Image src={item.imgSrc} alt="" fill sizes="360px" draggable={false}
                           style={{objectFit: "cover"}}/>
                  </Box>
                  <Text mt="10px" fontSize="16px" lineHeight="24px" fontWeight={600} noOfLines={2}
                        _groupHover={{color: "accent.fg"}} transition="color 150ms">
                    {item.title}
                  </Text>
                </Box>
              ))}
            </Flex>
          ) : null}
        </Flex>
      </Flex>
    </Center>
  );
};
