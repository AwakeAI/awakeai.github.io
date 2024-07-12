import { FC } from "react";
import { Center } from "@chakra-ui/react";
import Image from "next/image";

export const Section1: FC<{ activity: any }> = ({ activity }) => {
  return (
    <Center
      w="100%"
      h="auto"
      pos="relative"
      sx={{
        ".img": {
          width: "734px",
          height: "412px",
          objectFit: "cover",
        },
      }}
    >
      <Center maxW="1440px" mt="122px" pt="48px" pb="46px">
        <Image className="img" src={activity.imgSrc} alt="activity" draggable={false} width={734} height={412} />
      </Center>
    </Center>
  );
};
