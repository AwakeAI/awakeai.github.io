import { Flex } from "@chakra-ui/react";
import { Section1 } from "../../(normal)/about/Section1";
import { Section2 } from "../../(normal)/about/Section2";
import { Section3 } from "../../(normal)/about/Section3";
import { Subscribe } from "../../(normal)/home/Subscribe";

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
