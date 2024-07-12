import { FC } from "react";
import {
  Checkbox,
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input as RawInput,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

const Input: FC = (props) => {
  return <RawInput variant="unstyled" borderBottom="1px solid" borderRadius="0" {...props} />;
};

export const Section3: FC<{ onChangeActivity: (key: string) => void; activities: any[]; currentActivity: any }> = ({
  onChangeActivity,
  activities,
  currentActivity,
}) => {
  const color = useColorModeValue("Black", "gray.200");
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
          <Flex style={{ width: "340px", height: "453px" }} direction="column" bg="#FF9900" borderRadius="8px" p="24px">
            <Text fontSize="30px" lineHeight="31px" fontWeight={500} letterSpacing="-0.02em" textAlign="left">
              Subscribe for news and latest updates
            </Text>
            <FormControl style={{ marginTop: 15 }}>
              <span style={{ position: "relative", left: 5, top: 15, fontWeight: 200 }}>Name</span>
              <Input />
            </FormControl>
            <FormControl style={{ marginTop: 15 }}>
              <span style={{ position: "relative", left: 5, top: 15, fontWeight: 200 }}>Email</span>
              <Input />
            </FormControl>
            <FormControl style={{ margin: "25px 0 30px" }}>
              <Checkbox borderColor="#000">
                <Text lineHeight="1.05" fontWeight="regular" fontSize="16px" letterSpacing="-0.02em" color="#000000">
                  <span> I agree with the </span>
                  <Box as="span" color="#FFFFFF">
                    Terms And Conditions
                  </Box>
                  <Box as="span"> and the </Box>
                  <Box as="span" color="#FFFFFF">
                    Privacy Policy
                  </Box>
                </Text>
              </Checkbox>
            </FormControl>
            <Box
              borderRadius="30px"
              width="140px"
              height="45px"
              borderColor="#000000"
              borderStartWidth="2px"
              borderEndWidth="2px"
              borderTopWidth="2px"
              borderBottomWidth="2px"
              cursor="pointer"
            >
              <Text lineHeight="43px" fontWeight="medium" fontSize="20px" color="#000000" textAlign="center">
                Subscribe
              </Text>
            </Box>
          </Flex>
          <Flex direction="column" gap="22px">
            <Center bg="#000" h="55px">
              <Text color="#fff" fontSize="22px" lineHeight="23px" fontWeight={500} letterSpacing="-0.02em">
                Other Content you may enjoy
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
