import { Flex } from "@chakra-ui/react";
import { Section1 } from "@/app/(normal)/home/Section1";
import { Partners } from "@/app/(normal)/home/Partners";
import { Section2 } from "@/app/(normal)/home/Section2";
import { Section3 } from "@/app/(normal)/home/Section3";
import { Section5 } from "@/app/(normal)/home/Section5";
import { Section6 } from "@/app/(normal)/home/Section6";
import { ContactUs } from "@/app/(normal)/home/ContactUs";
import { Subscribe } from "@/app/(normal)/home/Subscribe";
import { Section4 } from "@/app/(normal)/home/Section4";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

// const Section4 = dynamic(() => import());

export const metadata: Metadata = {
  title: "AwakeAI Inc.",
  description: "AwakeAI Official Website",
};

export default function Home() {
  return (
    <Flex w="100%" direction="column">
      <Section1 />
      <Section2 />
      <Section3 />
      <Partners />
      <Section4 />
      {/*<Section5 />*/}
      {/*<Section6 />*/}
      <ContactUs />
      {/*<Subscribe />*/}
    </Flex>
  );
}
