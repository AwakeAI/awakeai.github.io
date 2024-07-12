import { Flex } from "@chakra-ui/react";
import { Section1 } from "@/app/(normal)/careers/Section1";
import { Section2 } from "@/app/(normal)/careers/Section2";
import { Section3 } from "@/app/(normal)/careers/Section3";
import { Section4 } from "@/app/(normal)/careers/Section4";
import { Subscribe } from "@/app/(normal)/home/Subscribe";
import { PostList } from "@/app/(normal)/careers/PostList";
import { CurrentPositions } from "@/app/(normal)/careers/CurrentPositions";
import { Banner } from "@/app/(normal)/careers/Banner";

export default function Page() {
  return (
    <Flex w="100%" direction="column">
      {/*<Section1 />*/}
      <Banner />
      <Section2 />
      <Section3 />
      <Section4 />
      {/*<PostList />*/}
      {/*<CurrentPositions />*/}
      <Subscribe />
    </Flex>
  );
}
