import {Box, Flex} from "@chakra-ui/react";
import { Section2 } from "@/app/(normal)/careers/Section2";
import { Section3 } from "@/app/(normal)/careers/Section3";
import { Subscribe } from "@/app/(normal)/home/Subscribe";
import { Banner } from "@/app/(normal)/careers/Banner";
import React from "react";
import {ContactUs} from "@/app/(normal)/home/ContactUs";

export default function Page() {
  return (
    <Flex w="100%" direction="column">
      <Banner />
      <Section2 />
      <Section3 />

    </Flex>
  );
}
