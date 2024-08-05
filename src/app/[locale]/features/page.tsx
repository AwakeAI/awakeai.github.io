import { Flex } from "@chakra-ui/react";
import { Section1 } from "@/app/(normal)/features/Section1";
import { Section2 } from "@/app/(normal)/features/Section2";
import { Section3 } from "@/app/(normal)/features/Section3";

export default function Page() {
  return (
    <Flex w="100%" direction="column">
      <Section1 />
      <Section2 />
      <Section3 />
    </Flex>
  );
}
