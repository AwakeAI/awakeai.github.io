"use client";

import { Flex, ListItem, UnorderedList, Text } from "@chakra-ui/react";
import { Banner } from "@/app/(normal)/careers/Banner";
import { Title } from "@/app/(normal)/careers/Title";
import { Section1 } from "@/app/(normal)/careers/Section1";
import { Section2 } from "@/app/(normal)/careers/Section2";
import { Section3 } from "@/app/(normal)/careers/Section3";
import { Subscribe } from "@/app/(normal)/home/Subscribe";
import { List } from "@/app/(normal)/careers/List";
import { useState } from "react";
import { CurrentPosition } from "../../(normal)/careers/CurrentPosition";
import { PostList } from "@/app/(normal)/careers/PostList";
import { CurrentPositions } from "@/app/(normal)/careers/CurrentPositions";

const jobPositions = [
  {
    title: "Firmware Engineer",
    location: "Toronto,CA",
    content: (
      <Text fontSize="24px" lineHeight="36px" fontWeight={400}>
        We are looking for a firmware/embedded engineer to work with other brilliant minds and apply the latest
        technology to make our life better and the world a safer place. <br /> <br />
        Responsibilities: <br /> <br />
        <UnorderedList>
          <ListItem>
            Develop firmware for our state-of-the-art smart visual sensor and future hardware products
          </ListItem>
          <ListItem>Maintain and support the current firmware code base</ListItem>
          <ListItem>Platform-specific camera and audio driver integration with our firmware system</ListItem>
          <ListItem>Collaborate with cloud and mobile application team on system integration</ListItem>
          <ListItem>
            Collaborate with research team on developing embedded deep learning, machine learning, and image/video
            processing algorithms
          </ListItem>
        </UnorderedList>
        <br />
        Minimum Requirements: <br /> <br />
        <UnorderedList>
          <ListItem>Bachelor’s in electrical/computer engineering or computing science</ListItem>
          <ListItem>3 to 5 years of industry experience working with embedded systems</ListItem>
          <ListItem>Must be proficient with C and C++</ListItem>
          <ListItem>Experienced with Linux and embedded Linux</ListItem>
          <ListItem>
            Proficient with version control tools (GIT), issue tracking software (Jira), Collaboration tools
            (Confluence)
          </ListItem>
          <ListItem>Must be self-sufficient and motivated to learn</ListItem>
        </UnorderedList>
        <br />
        Preferred Skills: <br /> <br />
        <UnorderedList>
          <ListItem>Master’s or PhD in electrical/computer engineering or computing science</ListItem>
          <ListItem>5 to 10 years of experience with embedded systems</ListItem>
          <ListItem>Experience with architecture design for embedded image/video processing systems</ListItem>
          <ListItem>Experience with peripheral driver development</ListItem>
          <ListItem>Experience with image and video processing algorithms on embedded systems</ListItem>
          <ListItem>Experience with embedded deep learning development</ListItem>
          <ListItem>Experience with ARM NEON and/or any SIMD optimization techniques</ListItem>
        </UnorderedList>
      </Text>
    ),
  },
  {
    title: "AI Engineer",
    location: "Toronto,CA",
    content: (
      <Text fontSize="24px" lineHeight="36px" fontWeight={400}>
        We are looking for a firmware/embedded engineer to work with other brilliant minds and apply the latest
        technology to make our life better and the world a safer place. <br /> <br />
        Responsibilities: <br /> <br />
        <UnorderedList>
          <ListItem>
            Develop firmware for our state-of-the-art smart visual sensor and future hardware products
          </ListItem>
          <ListItem>Maintain and support the current firmware code base</ListItem>
          <ListItem>Platform-specific camera and audio driver integration with our firmware system</ListItem>
          <ListItem>Collaborate with cloud and mobile application team on system integration</ListItem>
          <ListItem>
            Collaborate with research team on developing embedded deep learning, machine learning, and image/video
            processing algorithms
          </ListItem>
        </UnorderedList>
        <br />
        Minimum Requirements: <br /> <br />
        <UnorderedList>
          <ListItem>Bachelor’s in electrical/computer engineering or computing science</ListItem>
          <ListItem>3 to 5 years of industry experience working with embedded systems</ListItem>
          <ListItem>Must be proficient with C and C++</ListItem>
          <ListItem>Experienced with Linux and embedded Linux</ListItem>
          <ListItem>
            Proficient with version control tools (GIT), issue tracking software (Jira), Collaboration tools
            (Confluence)
          </ListItem>
          <ListItem>Must be self-sufficient and motivated to learn</ListItem>
        </UnorderedList>
        <br />
        Preferred Skills: <br /> <br />
        <UnorderedList>
          <ListItem>Master’s or PhD in electrical/computer engineering or computing science</ListItem>
          <ListItem>5 to 10 years of experience with embedded systems</ListItem>
          <ListItem>Experience with architecture design for embedded image/video processing systems</ListItem>
          <ListItem>Experience with peripheral driver development</ListItem>
          <ListItem>Experience with image and video processing algorithms on embedded systems</ListItem>
          <ListItem>Experience with embedded deep learning development</ListItem>
          <ListItem>Experience with ARM NEON and/or any SIMD optimization techniques</ListItem>
        </UnorderedList>
      </Text>
    ),
  },
  {
    title: "AI Engineer",
    location: "Toronto,CA",
    content: (
      <Text fontSize="24px" lineHeight="36px" fontWeight={400}>
        We are looking for a firmware/embedded engineer to work with other brilliant minds and apply the latest
        technology to make our life better and the world a safer place. <br /> <br />
        Responsibilities: <br /> <br />
        <UnorderedList>
          <ListItem>
            Develop firmware for our state-of-the-art smart visual sensor and future hardware products
          </ListItem>
          <ListItem>Maintain and support the current firmware code base</ListItem>
          <ListItem>Platform-specific camera and audio driver integration with our firmware system</ListItem>
          <ListItem>Collaborate with cloud and mobile application team on system integration</ListItem>
          <ListItem>
            Collaborate with research team on developing embedded deep learning, machine learning, and image/video
            processing algorithms
          </ListItem>
        </UnorderedList>
        <br />
        Minimum Requirements: <br /> <br />
        <UnorderedList>
          <ListItem>Bachelor’s in electrical/computer engineering or computing science</ListItem>
          <ListItem>3 to 5 years of industry experience working with embedded systems</ListItem>
          <ListItem>Must be proficient with C and C++</ListItem>
          <ListItem>Experienced with Linux and embedded Linux</ListItem>
          <ListItem>
            Proficient with version control tools (GIT), issue tracking software (Jira), Collaboration tools
            (Confluence)
          </ListItem>
          <ListItem>Must be self-sufficient and motivated to learn</ListItem>
        </UnorderedList>
        <br />
        Preferred Skills: <br /> <br />
        <UnorderedList>
          <ListItem>Master’s or PhD in electrical/computer engineering or computing science</ListItem>
          <ListItem>5 to 10 years of experience with embedded systems</ListItem>
          <ListItem>Experience with architecture design for embedded image/video processing systems</ListItem>
          <ListItem>Experience with peripheral driver development</ListItem>
          <ListItem>Experience with image and video processing algorithms on embedded systems</ListItem>
          <ListItem>Experience with embedded deep learning development</ListItem>
          <ListItem>Experience with ARM NEON and/or any SIMD optimization techniques</ListItem>
        </UnorderedList>
      </Text>
    ),
  },
  {
    title: "AI Engineer",
    location: "Toronto,CA",
    content: (
      <Text fontSize="24px" lineHeight="36px" fontWeight={400}>
        We are looking for a firmware/embedded engineer to work with other brilliant minds and apply the latest
        technology to make our life better and the world a safer place. <br /> <br />
        Responsibilities: <br /> <br />
        <UnorderedList>
          <ListItem>
            Develop firmware for our state-of-the-art smart visual sensor and future hardware products
          </ListItem>
          <ListItem>Maintain and support the current firmware code base</ListItem>
          <ListItem>Platform-specific camera and audio driver integration with our firmware system</ListItem>
          <ListItem>Collaborate with cloud and mobile application team on system integration</ListItem>
          <ListItem>
            Collaborate with research team on developing embedded deep learning, machine learning, and image/video
            processing algorithms
          </ListItem>
        </UnorderedList>
        <br />
        Minimum Requirements: <br /> <br />
        <UnorderedList>
          <ListItem>Bachelor’s in electrical/computer engineering or computing science</ListItem>
          <ListItem>3 to 5 years of industry experience working with embedded systems</ListItem>
          <ListItem>Must be proficient with C and C++</ListItem>
          <ListItem>Experienced with Linux and embedded Linux</ListItem>
          <ListItem>
            Proficient with version control tools (GIT), issue tracking software (Jira), Collaboration tools
            (Confluence)
          </ListItem>
          <ListItem>Must be self-sufficient and motivated to learn</ListItem>
        </UnorderedList>
        <br />
        Preferred Skills: <br /> <br />
        <UnorderedList>
          <ListItem>Master’s or PhD in electrical/computer engineering or computing science</ListItem>
          <ListItem>5 to 10 years of experience with embedded systems</ListItem>
          <ListItem>Experience with architecture design for embedded image/video processing systems</ListItem>
          <ListItem>Experience with peripheral driver development</ListItem>
          <ListItem>Experience with image and video processing algorithms on embedded systems</ListItem>
          <ListItem>Experience with embedded deep learning development</ListItem>
          <ListItem>Experience with ARM NEON and/or any SIMD optimization techniques</ListItem>
        </UnorderedList>
      </Text>
    ),
  },
];

export default function Page() {
  const [currPosIdx, setCurrPosIdx] = useState(-1);
  return (
    <Flex w="100%" direction="column">
      <Banner />
      {currPosIdx === -1 && <PostList jobPositions={jobPositions} onChoosePosition={setCurrPosIdx} />}
      {currPosIdx > -1 && <CurrentPositions position={jobPositions[currPosIdx]} />}
      <Subscribe />
    </Flex>
  );
}
