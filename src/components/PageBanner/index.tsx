import {Box} from "@chakra-ui/react";
import Image from "next/image";

// Full-bleed illustration at the top of inner pages; fades into the page background.
export const PageBanner = ({src, alt}: { src: string; alt: string }) => {
  return (
    <Box
      w="100%"
      h={{base: "300px", md: "420px", lg: "520px"}}
      pos="relative"
      overflow="hidden"
      _after={{
        content: '""',
        pos: "absolute",
        inset: 0,
        bgGradient: "linear(to-b, transparent 55%, bg.canvas)",
        pointerEvents: "none",
      }}
    >
      <Image src={src} alt={alt} fill priority sizes="100vw" draggable={false} style={{objectFit: "cover"}}/>
    </Box>
  );
};
