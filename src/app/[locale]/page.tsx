import { Flex } from "@chakra-ui/react";
import { Section1 } from "@/app/(normal)/home/Section1";
import { Partners } from "@/app/(normal)/home/Partners";
import { Section2 } from "@/app/(normal)/home/Section2";
import { Section3 } from "@/app/(normal)/home/Section3";
import { ContactUs } from "@/app/(normal)/home/ContactUs";
import { Section4 } from "@/app/(normal)/home/Section4";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "睿首智能",
  description: "睿首智能官方网站：智慧康养",
};

export default function Home() {
  return (
    <Flex w="100%" direction="column">
      <Section1 />
      <Section2 />
      <Section3 />
      <Partners />
      {/*<Section4 />*/}
      <ContactUs />
    </Flex>
  );
}
