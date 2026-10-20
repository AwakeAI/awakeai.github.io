import { FC } from "react";
import { Box, Center } from "@chakra-ui/react";
import Image from "next/image";

export const Section1: FC<{ activity: any }> = ({ activity }) => {
  return (
    <Center w="100%" px={{ base: "20px", lg: "30px" }} pt={{ base: "104px", lg: "128px" }} pb={{ base: "28px", lg: "40px" }}>
      <Box
        pos="relative"
        w="100%"
        maxW="734px"
        aspectRatio={734 / 412}
        bg="white"
        rounded="2xl"
        overflow="hidden"
        border="1px solid"
        borderColor="border.subtle"
        boxShadow="card"
      >
        <Image src={activity.imgSrc} alt={activity.title} fill priority sizes="(max-width: 774px) 100vw, 734px"
               draggable={false} style={{ objectFit: "cover" }} />
      </Box>
    </Center>
  );
};
