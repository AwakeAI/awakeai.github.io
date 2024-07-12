import { Flex } from "@chakra-ui/react";
import { Section1 } from "@/app/(normal)/contact/Section1";
import { Section2 } from "@/app/(normal)/contact/Section2";
import { Subscribe } from "@/app/(normal)/home/Subscribe";
import { ContactUs } from "@/app/(normal)/home/ContactUs";

export default function Page() {
  return (
    <Flex w="100%" direction="column">
      <Section1 />
      <Section2 />
      <ContactUs />
      <Subscribe />
    </Flex>
  );
}
