import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export const teamList = [
  {
    avatar: "/images/lulan 1.jpg",
    name: "Lulan Shen",
    post: "Founder and CEO",
    intro:
      "Lulan possesses an M.Sc. degree in Mathematical Modelling and Scientific Computing at the University of Oxford. Three-year work experience as a system engineer in Bosch Automotive for designing vehicle software platforms and vehicle functions.",
  },
  {
    avatar: "/images/hugh 1.jpg",
    name: "Dr. Hugh Cameron",
    post: "Director and CFO",
    intro:
      "Hugh Cameron is a systems engineer, entrepreneur, startup advisor and investor. After a career as R&D director at Bell-Northern Research and Nortel Networks where he delivered pioneering telephone network management and interactive customer service applications, he became co-founder and CTO of a Canadian company providing outsourced medical transcription and web applications for medical departments, faculties and hospitals. At the time of its sale, Accentus had grown to become Canada’s largest supplier of outsourced transcription services. Hugh received his BSc in mathematics and engineering from Queen’s University and his PhD in applied mathematics from the University of Cambridge.",
  },
  {
    avatar: "/images/image 2.jpg",
    name: "Benjamin Akera",
    post: "Co-Founder and CTO",
    intro:
      "Benjamin is a CoFounder at AwakeAI and a recent Master's graduate in Computer Science at McGill University and Mila - Quebec AI Institute. His research focuses on applying machine learning to benefit society, with applications in climate, healthcare, language, and more.",
  },
  {
    avatar: "/images/image 3.jpg",
    name: "Egor Luhauskikh",
    post: "Business Director",
    intro:
      "Egor is an MBA student at McGill University, Desautels Faculty of Management specializing in Global Strategy and Leadership. He received Medical Degree from Belarusian State Medical University (Belarus) and master’s degree in Health Policy and Management from the University of Southern Maine (USA). He has extensive experience in the pharmaceutical sector (J&J, AstraZeneca, GSK) leading cross-functional teams and working on complex projects to accelerate patients’ access to innovative medicines.",
  },
];

export const Section3 = () => {
  return (
    <Center w="100%" bg="#000">
      <Flex
        w="100%"
        maxW="1440px"
        direction="column"
        px={{ base: "0", lg: "130px" }}
        pt={{ base: "56px", lg: "50px" }}
        pb={{ base: "56px", lg: "130px" }}
      >
        <Flex
          color="#fff"
          direction="column"
          gap={{ base: "21px", lg: "32px" }}
          mb={{ base: "45px", lg: "75px" }}
          ml={{ base: "20px", lg: "0" }}
        >
          <Text
            fontSize="14px"
            fontWeight={500}
            lineHeight="21px"
            letterSpacing="0.5em"
            textTransform="uppercase"
            textAlign="left"
          >
            Of AwakeAI Inc.
          </Text>
          <Text fontWeight={400} fontSize={{ base: "24px", lg: "45px" }} lineHeight={{ base: "29px", lg: "54px" }}>
            Core Executive Team
          </Text>
        </Flex>

        <Flex direction="column" gap="58px">
          {teamList.map((item, index) => (
            <Flex
              key={item.name}
              bg={{ base: "#000", lg: index % 2 === 0 ? "#FF9900" : "#C0B190" }}
              gap={{ base: "53px", lg: "61px" }}
              direction={{ base: "column", lg: "row" }}
            >
              <Box
                as="img"
                src={item.avatar}
                alt={item.name}
                w={{ base: "100%", lg: "322px" }}
                height="100%"
                draggable={false}
              />
              <Flex
                direction="column"
                alignItems="left"
                justify="center"
                ml={{ base: "20px", lg: "0" }}
                pr={{ base: "0", lg: "30px" }}
              >
                <Text
                  fontSize="45px"
                  fontWeight={400}
                  lineHeight="54px"
                  mb="13px"
                  color={{ base: "#fff", lg: index % 2 === 0 ? "#000" : "#fff" }}
                >
                  {item.name}
                </Text>
                <Text
                  fontSize={{ base: "16px", lg: "24px" }}
                  fontWeight={{ base: 400, lg: 500 }}
                  lineHeight={{ base: "19px", lg: "24px" }}
                  letterSpacing="0.03em"
                  mb={{ base: "16px", lg: "32px" }}
                  color={{ base: "#fff", lg: index % 2 === 0 ? "#fff" : "#000" }}
                >
                  {item.post}
                </Text>
                <Text
                  fontSize="20px"
                  fontWeight={400}
                  lineHeight="29px"
                  color={{ base: "#fff", lg: index % 2 === 0 ? "#000" : "#fff" }}
                >
                  {item.intro}
                </Text>
                <Flex alignSelf="flex-end" justifySelf="flex-end" display={{ base: "none", lg: "block" }}>
                  <Image src="/images/team_2.svg" alt="team_2.svg" width={30} height={30} draggable={false} />
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Center>
  );
};
