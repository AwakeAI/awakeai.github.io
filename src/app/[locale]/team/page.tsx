import { Flex } from "@chakra-ui/react";
import { Section1 } from "@/app/(normal)/team/Section1";
import { Section2 } from "@/app/(normal)/team/Section2";
import { Section3 } from "@/app/(normal)/team/Section3";
import { Subscribe } from "@/app/(normal)/home/Subscribe";

export default function Page() {
  return (
    <Flex w="100%" direction="column">
      <Section1 />
      <Section2 />
      <Section3 />
      <Subscribe />
    </Flex>
  );
}
