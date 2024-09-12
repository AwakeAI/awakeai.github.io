import {Flex} from "@chakra-ui/react";
import {Subscribe} from "@/app/(normal)/home/Subscribe";
import {Section1} from "@/app/(normal)/story/Section1";
import {Section2} from "@/app/(normal)/story/Section2";
import {Section3} from "@/app/(normal)/story/Senction3";

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
