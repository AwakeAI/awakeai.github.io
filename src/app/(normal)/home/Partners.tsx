"use client";
import { FC } from "react";
import { Box, Center, Flex, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import eeconomie from "../../../../public/images/partners/eeconomie.png";
import mcgillPng from "../../../../public/images/partners/mcgill.png";
import milaPng from "../../../../public/images/partners/mila.png";
import ms2Png from "../../../../public/images/partners/m3.png";
import medteq from "../../../../public/images/partners/medteq.png";
import agewell from "../../../../public/images/partners/agewell.png";
import next from "../../../../public/images/partners/next_3.png";
import mitacs from "../../../../public/images/partners/mitacs.png";
import { Accent, SectionHeader } from "@/components/SectionHeader";

const partners = [
  { name: "Mila", img: milaPng },
  { name: "McGill University", img: mcgillPng },
  { name: "Next 36", img: next },
  { name: "Économie et Innovation Québec", img: eeconomie },
  { name: "Microsoft for Startups Founders Hub", img: ms2Png },
  { name: "MEDTEQ+", img: medteq },
  { name: "AGE-WELL", img: agewell },
  { name: "Mitacs", img: mitacs },
];

export const Partners: FC = () => {
  return (
    <Center w="100%" bg="bg.subtle" flexDirection="column" py={{ base: "64px", lg: "96px" }}>
      <Flex direction="column" w="100%" maxW="1440px" px={{ base: "20px", lg: "30px" }}>
        <SectionHeader eyebrow="Partners" title={<>Proudly <Accent>Collaborate</Accent> with</>} />
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: "12px", lg: "20px" }} mt={{ base: "32px", lg: "48px" }}>
          {partners.map((p) => (
            <Center
              key={p.name}
              h={{ base: "88px", lg: "120px" }}
              px={{ base: "12px", lg: "24px" }}
              bg="bg.surface"
              border="1px solid"
              borderColor="border.subtle"
              rounded="2xl"
              transition="box-shadow 200ms"
              _hover={{ boxShadow: "card" }}
            >
              <Box
                pos="relative"
                w="100%"
                h="100%"
                // Logos are drawn for light backgrounds; flatten them to white in dark mode.
                _dark={{ filter: "grayscale(1) invert(1) brightness(1.1)" }}
              >
                <Image src={p.img} alt={p.name} fill sizes="(max-width: 768px) 45vw, 300px" style={{ objectFit: "contain" }} />
              </Box>
            </Center>
          ))}
        </SimpleGrid>
      </Flex>
    </Center>
  );
};
