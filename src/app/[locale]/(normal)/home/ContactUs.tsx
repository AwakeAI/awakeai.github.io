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
import {useTranslations} from "next-intl";

const Field: FC<PropsWithChildren> = ({children}) => {
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
  const c = useTranslations("Contact");
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
        pt={{base: "15px", lg: "30px"}}
        pb={{base: "35px", lg: "70px"}}
        px="30px"
      >
        <Text
          fontSize="14px"
          lineHeight="21px"
          letterSpacing="0.5em"
          textTransform="uppercase"
          mb={{ base: "94px", lg: "34px" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          {c("Contact Us")}
        </Text>
        <Heading
          fontSize={{base: "28px", lg: "45px"}}
          lineHeight={{base: "42px", lg: "70px"}}
          letterSpacing="-0.05em"
          fontWeight={700}
        >
          {c("Get in touch with us")}
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
              success: {title: 'Form submitted!', description: 'Looks great'},
              error: {title: 'Form submission failed', description: 'Something wrong'},
              loading: {title: 'Submitting!', description: 'Please wait'},
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
                  <Field>{c("Your Name")}</Field>
                </FormLabel>
                <Input id="name" type="text" name="entry.1208597498" required placeholder="姓名" value={name}
                       onChange={(e) => setName(e.target.value)} marginTop="5"/>
              </FormControl>
              <FormControl>
                <FormLabel color={fnColor}>
                  <Field>{c("Your Email")}</Field>
                </FormLabel>
                <Input id="email" type="email" name="entry.1569009990" required placeholder="邮箱"
                       value={email} marginTop="5"
                       onChange={(e) => setEmail(e.target.value)}/>
              </FormControl>

              <FormControl style={{ bottom: "-7px" }}>
                <FormLabel color={fnColor}>
                  <Field>{c("Subject")}</Field>
                </FormLabel>
                <Input id="subject" type="text" name="entry.537245108" required value={subject}
                       variant="unstyled" borderBottom="1px solid #fff" borderRadius="0" disabled
                       style={{display: "none"}}/>
                <Select onChange={(e) => setSubject(e.target.value)} marginTop="5"
                        placeholder="主题">
                  <option value="demo">需要一个演示!</option>
                  <option value="adapter">成为早期用户!</option>
                  <option value="job">加入睿首!</option>
                </Select>
              </FormControl>
            </Flex>
            <FormControl style={{display: `${subject === 'job' ? "block" : "none"}`}}>
              <FormLabel color={fnColor}>
                <Field>提供一个可下载的简历地址</Field>
              </FormLabel>
              <Input id="file" type="text" name="entry.1679365074" placeholder="链接" value={file}
                     onChange={(e) => setFile(e.target.value)}
                     marginTop="5"/>
              <Text fontSize="11px" fontWeight={400} textAlign="justify">
                您可以使用百度云盘或微云创建一个共享PDF文件。上传文件后，生成一个可共享的链接并将该链接贴在这里
              </Text>
            </FormControl>

            <FormControl>
              <FormLabel color={fnColor}>
                <Field>{c("Your Message")}</Field>
              </FormLabel>
              <Textarea placeholder="留言" id="message" name="entry.1889589232"
                        value={message} onChange={(e) => setMessage(e.target.value)}/>
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
              {c("Send it")}
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
