"use client";

import {FC, PropsWithChildren, useState} from "react";
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

export const ContactUs: FC = () => {
  const fnColor = useColorModeValue("Black", "White");
  const [submitted, setSubmitted] = useState(false);
  const [verified, setVerified] = useState(false);
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");
  const toast = useToast()

  const handleVerify = () => {
    setVerified(true);
  };

  return (
    <Center w="100%" color={fnColor}>
      <Flex
        direction="column"
        w="100%"
        maxW="1440px"
        pt={{base: "60px", lg: "90px"}}
        pb={{base: "35px", lg: "70px"}}
        px="30px"
      >
        <Heading
          fontSize={{base: "28px", lg: "45px"}}
          lineHeight={{base: "42px", lg: "70px"}}
          letterSpacing="-0.05em"
          fontWeight={700}
        >
          Get in touch with us
        </Heading>
        <form
          name="gform"
          id="gform"
          encType="text/plain"
          action="https://docs.google.com/forms/d/e/1FAIpQLSdZtdBB7319mpu2QSSUQRzk0-KdIO4lbYPQvgw7w4veoGfMpw/formResponse?"
          target="hidden_iframe"
          onSubmit={(e) => {
            setSubmitted(true);
            const sendPromise = new Promise((resolve, reject) => {
              setTimeout(() => resolve(200), 200)
              setSubmitted(false);
              setName("");
              setEmail("");
              setMessage("");
              setSubject("");
              setFile("");
            })

            toast.promise(sendPromise, {
              success: { title: 'Form submitted!', description: 'Looks great' },
              error: { title: 'Form submission failed', description: 'Something wrong' },
              loading: { title: 'Submitting!', description: 'Please wait' },
            })
          }}
        >

          <VStack spacing="60px" mt="60px" alignItems="left">
            <Flex
              direction={{base: "column", lg: "row"}}
              justifyContent="space-between"
              gap={{base: "60px", lg: "none"}}
            >
              <FormControl>
                <FormLabel color={fnColor} fontSize="20px">
                  <Field>Your Name</Field>
                </FormLabel>
                <Input id="name" type="text" name="entry.1208597498" required placeholder="Name" value={name}
                       onChange={(e) => setName(e.target.value)}
                       variant="unstyled" borderBottom="1px solid #fff" borderRadius="0" marginTop="5"/>
              </FormControl>
              <FormControl>
                <FormLabel color={fnColor}>
                  <Field>Your Email</Field>
                </FormLabel>
                <Input id="email" type="email" name="entry.1569009990" required  placeholder="Email Address" value={email}
                       variant="unstyled" borderBottom="1px solid #fff" borderRadius="0" marginTop="5"
                       onChange={(e) => setEmail(e.target.value)}/>
              </FormControl>
            </Flex>
            <FormControl>
              <FormLabel color={fnColor}>
                <Field>Subject</Field>
              </FormLabel>
              <Input id="subject" type="text" name="entry.537245108" required value={subject}
                     variant="unstyled" borderBottom="1px solid #fff" borderRadius="0" disabled style={{display: "none"}}/>
              <Select onChange={(e) => setSubject(e.target.value)}
                      variant="unstyled" borderBottom="1px solid #fff" borderRadius="0" marginTop="5"
                      placeholder="Select a Subject" >
                  <option value="demo">Request a Demo!</option>
                  <option value="adapter">Become an early adapter!</option>
                  <option value="job">Ask for a job opportunity!</option>
              </Select>
            </FormControl>

            <FormControl style={{display: `${subject==='job'? "block":"none"}`}}>
              <FormLabel color={fnColor}>
                <Field>Please provide a link to your resume/CV.</Field>
              </FormLabel>
              <Input id="file" type="text" name="entry.1679365074" placeholder="Downloadable link to your resume" value={file}
                     onChange={(e) => setFile(e.target.value)}/>
              <Text>
                You can create a shared PDF file using Google Drive, Dropbox, or OneDrive. Once the file is uploaded, generate a shareable link and post that link here.
              </Text>
            </FormControl>
            <FormControl>
              <FormLabel color={fnColor}>
                <Field>Your Message</Field>
              </FormLabel>
              <Textarea placeholder="Type your message here." id="message" name="entry.1889589232"
                        value={message} variant="unstyled" borderBottom="1px solid #fff" borderRadius="0"
                        onChange={(e) => setMessage(e.target.value)}/>
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
    </Center>
  );
};
