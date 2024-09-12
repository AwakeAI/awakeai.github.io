"use client";

import React, {FC, PropsWithChildren, useState} from "react";
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
  useColorModeValue,
  useToast, Select, Textarea
} from "@chakra-ui/react";

import Reaptcha from "reaptcha";
const Field: FC<PropsWithChildren> = ({ children }) => {
  return (
    <FormLabel fontSize="20px" lineHeight="16.5px" letterSpacing="-0.05em" fontWeight={400}>
      {children}
    </FormLabel>
  );
};
export const Section3 = () => {
  const fnColor = useColorModeValue("Black", "White");
  const color = useColorModeValue("Black", "gray.200");
  const [submitted, setSubmitted] = useState(false);
  const [verified, setVerified] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");
  const toast = useToast()

  const handleVerify = () => {
    setVerified(true);
  };

  return (
    <Center w="100%">
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
        <Flex direction="column">
        <Heading fontSize={{base: "24px", lg: "45px"}} lineHeight={{base: "29px", lg: "54px"}} fontWeight={400}>
          Impress Us
        </Heading>
        <Box w="100%" h="1px" bg={color} my={{base: "20px", lg: "30px"}}></Box>

        <form
          name="gform"
          id="gform"
          encType="text/plain"
          action="https://docs.google.com/forms/d/e/1FAIpQLSdZtdBB7319mpu2QSSUQRzk0-KdIO4lbYPQvgw7w4veoGfMpw/formResponse?"
          target="hidden_iframe"
          onSubmit={(e) => {
            setSubmitted(true);

            const sendPromise = new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(200); // Resolve the promise after 200 ms
              }, 200);
            });

            sendPromise.then(() => {
              // Reset the form fields and submission status only after the promise resolves successfully
              setSubmitted(false);
              setName("");
              setEmail("");
              setMessage("");
              setFile("");
            });

            toast.promise(sendPromise, {
              success: { title: 'Form submitted!', description: 'Looks great' },
              error: { title: 'Form submission failed', description: 'Something wrong' },
              loading: { title: 'Submitting!', description: 'Please wait' },
            })
          }}
        >
          <VStack spacing="60px" mt="30px" alignItems="left">
            <Flex
              direction={{base: "column", lg: "row"}}
              justifyContent="space-between"
              gap={{base: "60px", lg: "none"}}
            >
              <FormControl>
                <FormLabel color={fnColor} fontSize="20px">
                  <Field>Your Name</Field>
                </FormLabel>
                <Input id="name" type="text" name="entry.1208597498" required placeholder="Type your name here" value={name}
                       onChange={(e) => setName(e.target.value)} marginTop="5"/>
              </FormControl>
              <FormControl>
                <FormLabel color={fnColor}>
                  <Field>Your Email</Field>
                </FormLabel>
                <Input id="email" type="email" name="entry.1569009990" required  placeholder="Email Address" value={email} marginTop="5"
                       onChange={(e) => setEmail(e.target.value)}/>
              </FormControl>
              <FormControl style={{display: "none"}}>
                <FormLabel color={fnColor}>
                  <Field>Subject</Field>
                </FormLabel>
                <Input id="subject" type="text" name="entry.537245108" required value="Ask for a job opportunity!" marginTop="5"/>
              </FormControl>
            </Flex>
            <FormControl>
              <FormLabel color={fnColor}>
                <Field>Provide a link to your Resume or CV</Field>
              </FormLabel>
              <Input id="file" type="text" name="entry.1679365074" placeholder="link" value={file}
                     onChange={(e) => setFile(e.target.value)}
                     marginTop="5"/>
              <Text fontSize="10px" fontWeight={400} textAlign="justify">
                You can create a shared PDF file using Google Drive, Dropbox, or OneDrive. Once the file is uploaded, generate a shareable link and post that link here.
              </Text>
            </FormControl>

            <FormControl>
              <FormLabel color={fnColor}>
                <Field>Your Message</Field>
              </FormLabel>
              <Textarea placeholder="Type your message here." id="message" name="entry.1889589232"
                        value={message} onChange={(e) => setMessage(e.target.value)}/>
            </FormControl>
            <Box
              as="button"
              bg="#FF9900"
              height="50px"
              lineHeight="20px"
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
              disabled={!verified}
            >
              Submit
            </Box>
            <Reaptcha
              sitekey="6LcIAC0lAAAAACWBqpIMyHTRUti8cQeLLxx1mVK7"
              onVerify={handleVerify}
            />
          </VStack>
          <iframe
            name="hidden_iframe"
            id="hidden_iframe"
            style={{display: "none"}}
            onLoad={() => !submitted}
          ></iframe>
        </form>
        </Flex>
      </Flex>
    </Center>
  );
};
