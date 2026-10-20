"use client";

import { Box, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import NextLink from "next/link";

import resi from "../../../../public/images/partners/resi.png";
import allin from "../../../../public/images/partners/allin.png";
import milaPng from "../../../../public/images/partners/mila.png";
import celsBanner from "../../../../public/images/partners/cels_banner.png";
import collision from "../../../../public/images/partners/collision.png";
import { Accent, SectionHeader } from "@/components/SectionHeader";

const newsList = [
  {
    id: "resi",
    img: resi,
    title: "Participating in 42nd Annual RESI J.P. Morgan Healthcare Conference",
    date: "San Francisco, January 9-11, 2024",
  },
  {
    id: "showcase",
    img: celsBanner,
    title: "Showcase in Canadian Entrepreneurs in Life Science (CELS)",
    date: "San Francisco, November 15-16, 2023",
  },
  {
    id: "participated",
    img: allin,
    title: "Participated in ALL IN - AI Conference",
    date: "Montreal, September 27th, 2023",
  },
  {
    id: "mila",
    img: milaPng,
    title: "Partnership with Mila AI Institute",
    date: "Montreal, September 11th, 2023",
  },
  {
    id: "collision",
    img: collision,
    title: "Participated in Collision Conference 2023",
    date: "Toronto, June 26th, 2023",
  }
];

export const Section4 = () => {
  return (
    <Center
      flexDirection="column"
      w="100%"
      py={{ base: "64px", lg: "96px" }}
      sx={{
        ".swiper": {
          width: "100%",
          px: { base: "20px", lg: "30px" },
          pt: "8px",
          pb: "56px",
          "--swiper-pagination-color": "var(--chakra-colors-brand-500)",
          "--swiper-pagination-bullet-inactive-color": "var(--chakra-colors-fg-muted)",
          "--swiper-pagination-bullet-inactive-opacity": "0.35",
          "--swiper-pagination-bullet-size": "9px",
        },
        ".swiper-slide": {
          height: "auto",
        },
      }}
    >
      <Flex w="100%" direction="column" px={{ base: "20px", lg: "30px" }} maxW="1440px">
        <SectionHeader eyebrow="Information" title={<>Latest <Accent>News</Accent></>} />
      </Flex>
      <Flex w="100%" maxW="1440px" direction="column" mt={{ base: "32px", lg: "48px" }}>
        <Swiper
          slidesPerView={1.1}
          spaceBetween={16}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 24 },
            992: { slidesPerView: 3, spaceBetween: 28 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {newsList.map((item) => (
            <SwiperSlide key={item.id}>
              <Link
                as={NextLink}
                href={`/activity?id=${item.id}`}
                data-group
                display="flex"
                flexDirection="column"
                h="100%"
                bg="bg.surface"
                border="1px solid"
                borderColor="border.subtle"
                rounded="2xl"
                overflow="hidden"
                transition="box-shadow 200ms, transform 200ms"
                _hover={{ textDecoration: "none", boxShadow: "cardHover", transform: "translateY(-2px)" }}
              >
                <Box pos="relative" h="200px" bg="white" borderBottom="1px solid" borderColor="border.subtle">
                  <Image alt="" src={item.img} fill sizes="(max-width: 768px) 90vw, 33vw" draggable={false} style={{ objectFit: "contain" }} />
                </Box>
                <Flex direction="column" flex="1" p="24px" gap="10px">
                  <Text fontSize="14px" color="fg.muted">
                    {item.date}
                  </Text>
                  <Heading as="h3" fontSize="20px" lineHeight="28px" fontWeight={600} noOfLines={2}>
                    {item.title}
                  </Heading>
                  <Text mt="auto" pt="12px" fontSize="15px" fontWeight={600} color="accent.link">
                    Read more{" "}
                    <ArrowForwardIcon transition="transform 200ms" _groupHover={{ transform: "translateX(3px)" }} />
                  </Text>
                </Flex>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Center>
  );
};

export default Section4;
