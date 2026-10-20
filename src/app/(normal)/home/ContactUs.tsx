"use client";

import React, {FC, useState} from "react";
import {
  Box,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import {FIELD, GoogleForm} from "@/components/GoogleForm";
import {SectionHeader} from "@/components/SectionHeader";

const subjects = [
  {value: "demo", label: "Request a Demo!"},
  {value: "adapter", label: "Become an early adopter!"},
  {value: "job", label: "Ask for a job opportunity!"},
];

export const ContactUs: FC = () => {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");

  return (
    <Center id="contact" w="100%" px={{base: "20px", lg: "30px"}} py={{base: "64px", lg: "96px"}}>
      <Box
        w="100%"
        maxW="1440px"
        bg="bg.subtle"
        border="1px solid"
        borderColor="border.subtle"
        rounded={{base: "2xl", lg: "3xl"}}
        px={{base: "20px", md: "40px", lg: "64px"}}
        py={{base: "32px", lg: "56px"}}
      >
        <SectionHeader
          eyebrow="Contact Us"
          title="Get in touch with us"
          description="Request a demo, join as an early adopter, or ask about opportunities at AwakeAI."
        />
        <Box mt={{base: "28px", lg: "40px"}}>
          <GoogleForm
            onSent={() => {
              setName("");
              setEmail("");
              setMessage("");
              setSubject("");
              setFile("");
            }}
          >
            <Stack spacing={{base: "20px", lg: "24px"}}>
              <SimpleGrid columns={{base: 1, lg: 3}} spacing={{base: "20px", lg: "24px"}}>
                <FormControl isRequired>
                  <FormLabel>Your Name</FormLabel>
                  <Input type="text" name={FIELD.name} placeholder="Name" size="lg" value={name}
                         onChange={(e) => setName(e.target.value)}/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Your Email</FormLabel>
                  <Input type="email" name={FIELD.email} placeholder="Email Address" size="lg" value={email}
                         onChange={(e) => setEmail(e.target.value)}/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Subject</FormLabel>
                  <Select name={FIELD.subject} placeholder="Select a Subject" size="lg" value={subject}
                          onChange={(e) => setSubject(e.target.value)}>
                    {subjects.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </Select>
                </FormControl>
              </SimpleGrid>
              {subject === "job" ? (
                <FormControl>
                  <FormLabel>Provide a link to your Resume or CV</FormLabel>
                  <Input type="text" name={FIELD.resume} placeholder="Link to your resume" size="lg" value={file}
                         onChange={(e) => setFile(e.target.value)}/>
                  <FormHelperText>
                    You can create a shared PDF file using Google Drive, Dropbox, or OneDrive. Once the file is uploaded,
                    generate a shareable link and post that link here.
                  </FormHelperText>
                </FormControl>
              ) : null}
              <FormControl>
                <FormLabel>Your Message</FormLabel>
                <Textarea placeholder="Type your message here." name={FIELD.message} rows={5} value={message}
                          onChange={(e) => setMessage(e.target.value)}/>
              </FormControl>
            </Stack>
          </GoogleForm>
        </Box>
      </Box>
    </Center>
  );
};
