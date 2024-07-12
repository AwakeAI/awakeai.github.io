"use client";

import { FC, PropsWithChildren } from "react";
import { Box, Center, Flex, FormControl, FormLabel, Heading, Input as RawInput, VStack, useColorModeValue } from "@chakra-ui/react";

const Field: FC<PropsWithChildren> = ({ children }) => {
  return (
    <FormLabel fontSize="20px" lineHeight="16.5px" letterSpacing="-0.05em" fontWeight={400}>
      {children}
    </FormLabel>
  );
};

const Input: FC = () => {
  return <RawInput variant="unstyled" borderBottom="1px solid #fff" borderRadius="0" />;
};

export const ContactUs: FC = () => {
  const fnColor = useColorModeValue("Black", "White");

  return (
    <Center w="100%" bg="#ff9900" color={fnColor}>
      <Flex
        direction="column"
        w="100%"
        maxW="1440px"
        pt={{ base: "60px", lg: "90px" }}
        pb={{ base: "35px", lg: "70px" }}
        px="30px"
      >
        <Heading
          fontSize={{ base: "28px", lg: "45px" }}
          lineHeight={{ base: "42px", lg: "70px" }}
          letterSpacing="-0.05em"
          fontWeight={700}
        >
          Get in touch with us
        </Heading>
        <VStack spacing="60px" mt="60px" alignItems="left">
          <Flex
            direction={{ base: "column", lg: "row" }}
            justifyContent="space-between"
            gap={{ base: "60px", lg: "none" }}
          >
            <FormControl>
              <FormLabel color={fnColor} fontSize="20px">
                <Field>Your Name</Field>
              </FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel color={fnColor}>
                <Field>Your Email</Field>
              </FormLabel>
              <Input />
            </FormControl>
          </Flex>
          <FormControl>
            <FormLabel color={fnColor}>
              <Field>Subject</Field>
            </FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel color={fnColor}>
              <Field>Your Message</Field>
            </FormLabel>
            <Input />
          </FormControl>
          <Box
            as="button"
            bg="#121212"
            height="50px"
            lineHeight="50px"
            rounded="30px"
            w="164px"
            textAlign="center"
            color="#fff"
            fontSize="20px"
            cursor="pointer"
            mr="auto"
            _hover={{
              textDecoration: "none",
            }}
          >
            Send it
          </Box>
        </VStack>
      </Flex>
    </Center>
  );
};
