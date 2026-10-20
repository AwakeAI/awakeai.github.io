"use client";

import {FC, ReactNode} from "react";
import {Box, Center, Flex, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import {CalendarIcon} from "@chakra-ui/icons";
import Image, {StaticImageData} from "next/image";
import centechPng from "../../../../public/images/partners/centech.png";
import eeconomiePng from "../../../../public/images/partners/eeconomie.png";
import mcgillPng from "../../../../public/images/partners/mcgill.png";
import medteqPng from "../../../../public/images/partners/medteq.png";
import milaPng from "../../../../public/images/partners/mila.png";
import ms2Png from "../../../../public/images/partners/m3.png";
import nextPng from "../../../../public/images/partners/next_3.png";
import {SectionHeader} from "@/components/SectionHeader";

const partners: { id: number; src: StaticImageData; title: string; description: ReactNode; date: string }[] = [
  {
    id: 1,
    src: milaPng,
    title: "@Mila",
    description:
      'AwakeAI Inc. has been awarded the "Startup Mila" status by the Mila Startup Committee.',
    date: "Admitted in Sep. 2023",
  },
  {
    id: 3,
    src: nextPng,
    title: "@Next36",
    description:
      "Lulan Shen, the founder and CEO of AwakeAI Inc, has graduated in the 2023 NEXT36 program and awarded CA$50k by the YFF Fund.",
    date: "Participated in Summer 2023",
  },
  {
    id: 4,
    src: mcgillPng,
    title: "@Dobson Centre for Entrepreneurship",
    description: (
      <span>
        2023, Dobson Life Sciences Pitch Bootcamp
        <br/>
        2022, Summer Dobson Entrepreneurship X1-Accelerator.
        <br/>
        2022, Dobson Entrepreneurship Programs Bootcamp and Cup
        <br/>
        2022, Third Place in Health Science Enterprise Tracks
      </span>
    ),
    date: "Last update 2023",
  },
  {
    id: 5,
    src: centechPng,
    title: "@Centech",
    description: "AwakeAI Inc. has participated in winter 2023 Centech Accelerator Cohort.",
    date: "Participated in Winter 2023",
  },
  {
    id: 6,
    src: eeconomiePng,
    title: "@BI",
    description:
      "The committee has approved our application. A CA$46k grant has been awarded to us in 2023.",
    date: "Last Update in 2023",
  },
  {
    id: 7,
    src: medteqPng,
    title: "@MEDTEQ+",
    description: "AwakeAI Inc. is a member of MEDTEQ+ community.",
    date: "Joined in 2023",
  },
  {
    id: 8,
    src: ms2Png,
    title: "@Microsoft Founder Program",
    description: "AwakeAI Inc. has participated in Microsoft Founders program.",
    date: "Participated in Nov. 2022",
  },
];

export const Section3: FC = () => {
  return (
    <Center w="100%" flexDirection="column" px={{base: "20px", lg: "30px"}}>
      <Flex w="100%" maxW="1440px" direction="column" pt={{base: "40px", lg: "56px"}} pb={{base: "64px", lg: "96px"}}>
        <SectionHeader eyebrow="of AwakeAI Inc." title="Collaborators & Affiliations"/>
        <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={{base: "16px", lg: "24px"}} mt={{base: "32px", lg: "48px"}}>
          {partners.map((p) => (
            <Flex
              key={p.id}
              direction="column"
              bg="bg.surface"
              border="1px solid"
              borderColor="border.subtle"
              rounded="2xl"
              overflow="hidden"
              boxShadow="card"
            >
              <Box pos="relative" h="140px" bg="white" borderBottom="1px solid" borderColor="border.subtle">
                <Image src={p.src} alt={p.title.replace("@", "")} fill sizes="(max-width: 768px) 90vw, 400px"
                       style={{objectFit: "contain", padding: "12px"}}/>
              </Box>
              <Flex direction="column" gap="12px" p="24px" flex="1">
                <Heading as="h3" fontSize="20px" lineHeight="28px" fontWeight={700}>
                  {p.title}
                </Heading>
                <Text fontSize="16px" lineHeight="26px" color="fg.muted">
                  {p.description}
                </Text>
                <Flex mt="auto" pt="8px" gap="8px" alignItems="center" fontSize="14px" color="fg.muted">
                  <CalendarIcon boxSize="14px"/>
                  <Text>{p.date}</Text>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>
    </Center>
  );
};
