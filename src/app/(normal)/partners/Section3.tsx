"use client";

import {FC, useEffect, useState} from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Center,
  Flex,
  Heading,
  Text,
  createMultiStyleConfigHelpers,
  GridItem,
  Grid,
  useDisclosure,
  Collapse,
  useColorModeValue,
  useColorMode
} from "@chakra-ui/react";
import Image from "next/image";
import centechPng from "../../../../public/images/partners/centech.png";
import eeconomiePng from "../../../../public/images/partners/eeconomie.png";
import mcgillPng from "../../../../public/images/partners/mcgill.png";
import medteqPng from "../../../../public/images/partners/medteq.png";
import milaPng from "../../../../public/images/partners/mila.png";
import ms2Png from "../../../../public/images/partners/m3.png";
import nextPng from "../../../../public/images/partners/next_3.png";
import {accordionAnatomy} from "@chakra-ui/anatomy";

const partners = [
  {
    id: 1,
    src: milaPng,
    title: "@Mila",
    description:
      'AwakeAI Inc. has been awarded the "Startup Mila" status by the Mila Startup Committee.',
    date: "Admitted in Sep. 2023",
  },
  {
    id: 20,
    type: 'line'
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
    id: 21,
    type: 'line'
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
    title: "@Mila",
    description:
      'AwakeAI Inc. has been awarded the "Startup Mila" status by the Mila Startup Committee.',
    date: "Admitted in Sep. 2023",
  },
  {
    id: 22,
    type: 'line'
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
    id: 23,
    type: 'line'
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

const {defineMultiStyleConfig} = createMultiStyleConfigHelpers(
  accordionAnatomy.keys
);

export const accordionTheme = defineMultiStyleConfig({
  defaultProps: {
    size: "xl",
    variant: "custom",
  },
});
const SectionItem: FC<any> = ({p}) => {
  const {isOpen, onToggle} = useDisclosure()
  const width = p.type === 'line' ? 1 : p.src.width / 1.3;
  const color = useColorModeValue('gray.200', 'gray.600')
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Box px={{base: '30px'}}>
      <Box w={`${width}px`} display="flex" alignItems="center">
        <Image
          {...p.src}
          alt={p.src.src}
          objectFit="contain"
          style={{
            width: `${width}px`,
            minWidth: `${width}px`,
            height: `auto`,
            filter: `${colorMode === 'light' ? 'none' : 'grayscale(1) invert(1)'}`
          }}
        />
      </Box>
      <Box py="20px" px="20px" w={{base: "256px", md: "384px"}}>
        <Image
          src={isOpen ? "/images/close.svg" : "/images/open.svg"}
          alt={isOpen ? "close" : "open"}
          width={14}
          height={8}
          onClick={() => onToggle()}
          style={{cursor: "pointer"}}
        />
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Box w={{base: "256px", md: "384px"}} zIndex={1}>
          <Flex direction="column" gap="20px" mt="10px" mx="20px">
            <Heading fontSize="20px" lineHeight="24px" fontWeight={400}>
              {p.title}
            </Heading>
            <Text fontSize="16px" lineHeight="20px" fontWeight={300}>
              {p.description}
            </Text>
            <Flex gap="7px">
              <Image
                src="/images/date.svg"
                alt="date"
                width={17}
                height={18}
              ></Image>
              <Text
                fontSize="14px"
                py="10px"
                fontWeight={400}
                color="#717171"
              >
                {p.date}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Collapse>

      <Box w="100%" h="1px" bg={color} mb={{base: "30px", md: "40px"}}></Box>
    </Box>
  )
}

export const Section3: FC = () => {
  const color = useColorModeValue('gray.200', 'gray.600')

  return (
    <Center w="100%" flexDirection="column">
      <Flex
        w="100%"
        maxW="1440px"
        pl={{base: "21px", lg: "130px"}}
        pt="56px"
        pb={{base: "45px", lg: "80px"}}
        direction="column"
        gap="32px"
      >
        <Text
          textTransform="uppercase"
          fontSize="14px"
          lineHeight="21px"
          fontWeight={500}
          letterSpacing="0.5em"
        >
          of AwakeAI Inc.
        </Text>
        <Text
          fontSize={{base: "24px", lg: "45px"}}
          lineHeight={{base: "29px", lg: "55px"}}
          fontWeight={700}
        >
          Collaborators & Affiliations
        </Text>
      </Flex>
      <Grid w="100%" maxW="1440px" columnGap='28px' templateColumns={{
        base: '1fr',
        md: '1fr 1px 1fr 1px 1fr'
      }}>
        {partners.map((p, index) => {
          return (
            p.type === 'line' ? <GridItem>
                <Box height="full" width="1px" bg={color}/>
              </GridItem> :
              <GridItem key={p.id}>
                <SectionItem p={p}/>
              </GridItem>

          );
        })}
      </Grid>
    </Center>
  );
};
