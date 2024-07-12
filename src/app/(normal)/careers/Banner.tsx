import { Center } from "@chakra-ui/react";
import Image from "next/image";

export const Banner = () => {
  return (
    <Center
      w="100%"
      h="auto"
      pos="relative"
      sx={{
        ".img": {
          objectFit: "cover",
        },
      }}
    >
      <Center maxW="1440px" mt="122px" pt="48px" pb="46px">
        <Image
          className="img"
          src="/images/careers/banner.jpeg"
          alt="careers_banner"
          draggable={false}
          width={2802}
          height={1152}
        />
      </Center>
    </Center>
  );
};
