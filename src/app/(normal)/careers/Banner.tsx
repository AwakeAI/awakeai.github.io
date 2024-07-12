import { Center } from "@chakra-ui/react";
import Image from "next/image";

export const Banner = () => {
  return (
    <Center
      w="100%"
      pos="relative"
      sx={{
        ".img": {
          width: "100%",
          height: ["400px", "800px"],
          objectFit: "cover",
        },
      }}
    >
      <Image className="img" src="/images/0_1.png" alt="about_1_bg" draggable={false} width={1440} height={601} />
    </Center>
  );
};
