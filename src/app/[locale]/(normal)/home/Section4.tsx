"use client";

import { Box, Center, Flex, Heading, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

import resi from "@/images/partners/resi.png";
import allin from "@/images/partners/allin.png";
import milaPng from "@/images/partners/mila.png";
import celsBanner from "@/images/partners/cels_banner.png";
import collision from "@/images/partners/collision.png";
import { useBreakpointValue } from '@chakra-ui/react'

const newsList = [
  {
    id: "resi",
    img: resi,
    title: "Participating in 42nd Annual RESI J.P. Morgan...",
    date: "San Francisco, Jan. 9-11, 2024",
    link: "",
    width: 256,
  },
  {
    id: "showcase",
    img: celsBanner,
    title: "Showcase in Canadian Entrepreneurs in Life Science (CELS)",
    date: "San Francisco, Nov. 15-16, 2023",
    link: "",
    width: 382,
  },
  {
    id: "participated",
    img: allin,
    title: "Participated in ALL IN - AI Conference",
    date: "Montreal, Sep 27th, 2023",
    link: "",
    width: 253,
  },
  {
    id: "mila",
    img: milaPng,
    title: "Partnership with Mila AI Institute",
    date: "Montreal, Sep 11th, 2023",
    link: "",
    width: 256,
  },
  {
    id: "collision",
    img: collision,
    title: "Participated in Collision Conference 2023",
    date: "Toronto, June 26th, 2023",
    link: "",
    width: 256,
  }
];

export const Section4 = () => {
  const color = useColorModeValue("White", "Black");
  const fnColor = useColorModeValue("Black", "White");
  const variant = useBreakpointValue(
    {
      base: 1,
      md: 2,
      lg: 3
    }
  )
  return (
    <Center
      flexDirection="column"
      w="100%"
      pt="60px"
      pb="80px"
      bg={color}
      color={fnColor}
      css={`
        .swiper {
          width: 100%;
          height: 560px;
        }

        .swiper-slide {
          height: 467px;
          text-align: center;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .swiper-slide {
          width: max(calc(calc(100% - calc(28px * 3)) / 4), 320px);
        }

        .swiper-pagination-bullet {
          background-color: #000;
        }

        .swiper-pagination-bullet-active {
          background-color: #ff9900;
        }
      `}
    >
      <Flex w="100%" direction="column" px="30px" maxW="1440px">
        <Text
          fontSize="14px"
          lineHeight="21px"
          letterSpacing="0.5em"
          textTransform="uppercase"
          mb={{ base: "94px", lg: "34px" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          Information
        </Text>
        <Heading
          w={{ base: "100%", lg: "654px" }}
          fontSize={{ base: "28px", lg: "45px" }}
          fontWeight={700}
          lineHeight={{ base: "30px", lg: "50px" }}
          letterSpacing="-5%"
          textAlign="left"
          style={{}}
        >
          Latest{" "}
          <Box as="span" color="#FF9900">
            News
          </Box>
        </Heading>
      </Flex>
      <Flex w="100%" maxW="1440px" direction="column">
        {/* <Swiper
          slidesPerView={"auto"}
          spaceBetween={70}
          centeredSlides
          initialSlide={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}

        >
          {newsList.map((item, index) => (
            <SwiperSlide key={index}>
              <Flex direction="column" alignItems="start" justifyContent="start" h="100%">
                <Box
                  alignSelf="center"
                  borderRadius="30px"
                  w={`${item.width}px`}
                  h="250px"
                  bg={color}
                  rounded="30px"
                  overflow="hidden"
                  mb="22px"
                  sx={{
                    img: {
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    },
                  }}
                >
                  <Image alt="" src={item.img} width={256} height={249} draggable={false} />
                </Box>
                <Heading fontSize="24px" lineHeight="28px" fontWeight={400} textAlign="left" mb="32px">
                  {item.title}
                </Heading>
                <Text fontSize="16px" lineHeight="19px" fontWeight={300} mb="40px">
                  {item.date}
                </Text>
                <Link href={`/activity?id=${item.id}`} fontSize="20px" lineHeight="24px" fontWeight={500} color="#FF9900" mt="auto">
                  Read more
                </Link>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper> */}
      <Swiper
        slidesPerView={variant}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
          {newsList.map((item, index) => (
            <SwiperSlide key={index}>
              <Flex direction="column" alignItems="start" justifyContent="start" px="30px" h="100%">
                <Box
                  alignSelf="center"
                  borderRadius="30px"
                  h="250px"
                  bg={color}
                  rounded="30px"
                  overflow="hidden"
                  mb="22px"
                  sx={{
                    img: {
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    },
                  }}
                >
                  <Image alt="" src={item.img} width={256} height={249} draggable={false} />
                </Box>
                <Heading fontSize="24px" lineHeight="28px" fontWeight={400} textAlign="left" mb="32px">
                  {item.title}
                </Heading>
                <Text fontSize="16px" lineHeight="19px" fontWeight={300} mb="40px">
                  {item.date}
                </Text>
                <Link href={`/activity?id=${item.id}`} fontSize="20px" lineHeight="24px" fontWeight={500} color="#FF9900" mt="auto">
                  Read more
                </Link>
              </Flex>
            </SwiperSlide>
          ))}
      </Swiper>
      </Flex>
    </Center>
  );
};

export default Section4;
