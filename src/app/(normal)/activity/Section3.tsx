import React, {FC, useState} from "react";
import {
  Checkbox,
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Text,
  useColorModeValue, useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import Reaptcha from "reaptcha";

export const Section3: FC<{ onChangeActivity: (key: string) => void; activities: any[]; currentActivity: any }> = ({
  onChangeActivity,
  activities,
  currentActivity,
}) => {
  const color = useColorModeValue("#ff9900", "gray.200");
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
    <Center w="100%" pos="relative">
      <Flex
        pos="relative"
        direction={{ base: "column", lg: "row" }}
        zIndex={2}
        w="100%"
        h="100%"
        maxW="1440px"
        gap="95px"
        px={{ base: "20px", lg: "146px" }}
        pt={{ base: "56px", lg: "0" }}
        pb={{ base: "28px", lg: "76px" }}
        justifyContent="center"
        alignItems="center"
      >
        <Flex direction="column" gap="108px">
          {currentActivity.content ? (
            <Flex direction="column" gap="32px">
              <Text fontSize="14px" lineHeight="21px" fontWeight={500} letterSpacing="0.5em" textAlign="left">
                Content
              </Text>
              <Text fontSize={{ base: "24px", lg: "45px" }} lineHeight={{ base: "29px", lg: "54px" }} fontWeight={400}>
                {currentActivity.content.title}
              </Text>
              <Box w={{ base: "350px", lg: "703px" }} minH="1px" bg={color}></Box>
              <Text fontSize={{ base: "20px", lg: "24px" }} lineHeight="40px" fontWeight={400} whiteSpace="pre-wrap">
                {currentActivity.content.text}
              </Text>
            </Flex>
          ) : null}
          {currentActivity.details ? (
            <Flex direction="column" gap="32px">
              <Text fontSize="14px" lineHeight="21px" fontWeight={500} letterSpacing="0.5em" textAlign="left">
                Details
              </Text>
              <Text fontSize={{ base: "24px", lg: "45px" }} fontWeight={400}>
                {currentActivity.details.title}
              </Text>
              <Box w={{ base: "350px", lg: "703px" }} minH="1px" bg={color}></Box>
              <Text fontSize={{ base: "20px", lg: "24px" }} fontWeight={400} whiteSpace="pre-wrap">
                {currentActivity.details.text}
              </Text>
            </Flex>
          ) : null}
        </Flex>
        <Flex direction="column" gap="48px">
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
                success: {title: 'Form submitted!', description: 'Looks great'},
                error: {title: 'Form submission failed', description: 'Something wrong'},
                loading: {title: 'Submitting!', description: 'Please wait'},
              })
            }}
          >
            <Flex style={{width: "340px", height: "453px"}} direction="column" bg={color} borderRadius="8px" p="24px">
              <Text fontSize="30px" lineHeight="31px" fontWeight={700} letterSpacing="-0.02em" textAlign="left" color="#121212">
                Subscribe for latest updates
              </Text>
              <FormControl style={{marginTop: 15}}>
                <Input id="name" type="text" name="entry.1208597498" required placeholder="Name" value={name}
                       onChange={(e) => setName(e.target.value)} marginTop="5"/>

              </FormControl>
              <FormControl style={{marginTop: 15}}>
                <Input id="email" type="email" name="entry.1569009990" required placeholder="Email Address"
                       value={email} marginTop="5" onChange={(e) => setEmail(e.target.value)}/>
              </FormControl>
              <FormControl style={{margin: "25px 0 30px"}}>
                <Checkbox borderColor="#000">
                  <Text lineHeight="1.05" fontWeight="regular" fontSize="15px" letterSpacing="-0.03em" color="#000000" fontWeight={400}>
                    I agree with the Terms, Conditions and the Privacy Policy
                  </Text>
                </Checkbox>
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
            </Flex>
            <iframe
              name="hidden_iframe"
              id="hidden_iframe"
              style={{display: "none"}}
              onLoad={() => !submitted}
            ></iframe>
          </form>
          <Flex direction="column" gap="22px">
            <Center h="55px">
              <Text fontSize="22px" lineHeight="23px" fontWeight={700} letterSpacing="-0.02em">
                  Other Stories
                </Text>
              </Center>
              <Flex direction="column" gap="32px">
                {activities.map((item) => (
                  <div
                    onClick={() => onChangeActivity(item.key)}
                    key={item.key}
                    style={{
                      width: "340px",
                      height: "226px",
                      cursor: "pointer",
                    }}
                  >
                    <Image
                      className="img"
                      src={item.imgSrc}
                      width={340}
                      height={190}
                      alt="activity_bg"
                      draggable={false}
                    />
                    <Text
                      fontSize="20px"
                      width="340px"
                      maxWidth="100%"
                      style={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.title}
                    </Text>
                  </div>
                ))}
              </Flex>
            </Flex>
        </Flex>
      </Flex>
    </Center>
);
};
