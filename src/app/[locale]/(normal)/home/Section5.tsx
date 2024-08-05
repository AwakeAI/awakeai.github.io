"use client";

import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { ChevronDown } from "react-feather";

import "swiper/css";
import "swiper/css/pagination";

export const Section5 = () => {
  return (
    <Center w="100%" pt="60px" pb="80px" bg={{ base: "#fff", lg: "#fff" }}>
      <Flex
        w="100%"
        direction="column"
        px="30px"
        maxW="1440px"
        css={`
          .swiper {
            width: 100%;
            height: 600px;
          }

          .swiper-slide {
            height: 548px;
            text-align: center;
            font-size: 18px;
            background: #eee;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .swiper-slide {
            width: max(calc(calc(100% - calc(28px * 3)) / 4), 320px);
          }

          .swiper-pagination-bullet-active {
            background-color: #FF9900;
          }
            .sec-2 {
                position: relative;
                top: 0;
                left: 0;
                width: 100%;
                background: #181818;
                padding-top: 7.5%;
                line-height: normal;
            }

            .sec-2H1 {
                font-size: 22px;
                color: #FF9900;
                font-weight: bold;
                margin-left: 10%;
            }

            .sec-2H2 {
                font-size: 80px;
                color: #252525;
                font-weight: bold;
                margin-bottom: 2.5%;
                margin-left: 10%;
                width: 1%;
            }

            .sec-2I {
                width: 80%;
                display: flex;
                margin: 0 auto;
            }

            .spotcustomer {
                background: #252525;
                padding: 1em;
                width: 60px !important;
                border-radius: 20px;
            }

            .sec-2E {
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: center;
                width: 80%;
                gap: 4em;
            }

            .sec-2C {
                position: relative;
                display: flex;
                gap: 1em;
                flex-direction: column;
                text-align: left;
                min-width: 180px;
            }

            .sec-2CH {
                color: #FF9900;
                font-size: 24px;
                font-weight: bold;
            }

            .sec-2CP {
                color: #252525;
                font-size: 20px;
                width: 100%;
            }

            .sec-2CT {
                color: #252525;
                width: 80%;
                font-size: 20px;
                text-align: justify;
                position: relative;
            }

            .logotilted {
                width: 800px;
                position: absolute;
                margin-top: -20%;
                right: -10%;
                overflow: hidden;
                display: block;
            }

            .sec-3 {
                position: relative;
                top: 0;
                left: 0;
                width: 100%;
                height: 140vh;
                z-index: -1;
                background: var(--color-gray-200);
                line-height: normal;
            }

            .sec-3H {
                font-size: 80px;
                color: var(--color-blue);
                font-weight: bold;
                margin-bottom: 2.5%;
                margin-left: 10%;
                width: 1%;
            }

            .sec-3P {
                font-size: 26px;
                margin-top: 1.5%;
                line-height: normal;
            }

            .sec-3H2 {
                font-size: 80px;
                color: var(--color-blue);
                font-weight: bold;
                margin-bottom: 2.5%;
                margin-left: 10%;
                width: 1%;
            }

            .sec-3P2 {
                font-size: 28px;
                line-height: normal;
            }

            .sec-3L {
                font-size: 28px;
                line-height: normal;
            }

        `}
      >
        <Text
          fontSize="14px"
          lineHeight="21px"
          letterSpacing="0.5em"
          textTransform="uppercase"
          mb={{ base: "94px", lg: "34px" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          Our Team
        </Text>
        <Heading
          w="100%"
          fontSize={{ base: "28px", lg: "45px" }}
          fontWeight={400}
          lineHeight={{ base: "30px", lg: "50px" }}
          letterSpacing="-5%"
          textAlign="left"
          mb="60px"
        >
          Dedicated{" "}
          <Box as="span" color="#FF9900">
            Experienced
          </Box>
          {" Innovative"}
        </Heading>

        <Flex
          w="100%"
          h="auto"
          maxW="1440px"
          px={{ base: "20px", lg: "130px" }}
          align="center"
          flexWrap="wrap"
          justify="space-between"
          gap="20px"
          pb="55px"
        >




        <Box className="sec-2E" mx="auto" mt={3} justifyContent="center">
          <Box className="sec-2C">
            <Heading size="sm" className="sec-2CH">
              Software
            </Heading>
            <Box className="sec-2CP">
              Lead
              <ChevronDown size={15} color="#000000" />
              <br />
              <strong>
                Shilei Lin
              </strong>
              <br />
              <br />
              Website
              <ChevronDown size={15} color="#000000" />
              <br />
              <strong>Ahmed Abbas</strong>
              <br />
              <strong>Jessica Li</strong>
              <br />
              <br />
              UI/UX <ChevronDown size={15} color="#000000" />
              <br />
              <strong>Miraal Kabir</strong>
              <br />
              <br />
              Intern
              <ChevronDown size={15} color="#000000" />
              <br />
              <strong>Giorgos Kontorousis</strong>
            </Box>
          </Box>

          <Box className="sec-2C">
            <Heading size="sm" className="sec-2CH">
              {/*{t("Consultants")}*/}
            </Heading>
            <Box className="sec-2CP">
              {/*{t("Project")} */}
              <ChevronDown size={15} color="#000000" />
              <br />
              <strong>
                {/*{t("Ryan Xu")}*/}
              </strong>
              <br />
              <br />
              {/*{t("Business")} */}
              <ChevronDown size={15} color="#000000" />
              <br />
              <strong>
                {/*{t("Ruofeng Li")}*/}
              </strong>
              <br />
              <strong>
                {/*Remi Richard*/}
              </strong>
              <br />
              <strong>
                {/*Guneet Kour*/}
              </strong>
              <br />
              <br />
              {/*{t("Cloud and IoT")} */}
              <ChevronDown size={15} color="#000000" />
              <br />
              <strong>
                {/*{t("Erqun Dong")}*/}
              </strong>
              <br />
              <strong>Nelson Bore</strong>
            </Box>
          </Box>

          <Box className="sec-2C">
            <Heading size="sm" className="sec-2CH">
              {/*{t("AI")}*/}
            </Heading>
            <Box className="sec-2CP">
              {/*{t("Development")} */}
              <ChevronDown size={15} color="#000000" />
              <br />
              <strong>Abdul Takiddeen</strong>
              <br />
              <strong>Manoosh Samiei</strong>
              <br />
              <br />
              {/*{t("AR")} */}
              <ChevronDown size={15} color="#000000" />
              <br />
              <strong>Benjamin Akera</strong>
            </Box>
          </Box>
        </Box>
        </Flex>
        {/*<Swiper*/}
        {/*  slidesPerView={"auto"}*/}
        {/*  spaceBetween={28}*/}
        {/*  pagination={{*/}
        {/*    clickable: true,*/}
        {/*  }}*/}
        {/*  modules={[Pagination]}*/}
        {/*>*/}
        {/*  {teamList.map((item) => {*/}
        {/*    return (*/}
        {/*      <SwiperSlide key={item.name}>*/}
        {/*        <Flex*/}
        {/*          direction="column"*/}
        {/*          w="100%"*/}
        {/*          h="100%"*/}
        {/*          bg="#F8F8F9"*/}
        {/*          justify="space-evenly"*/}
        {/*          sx={{*/}
        {/*            ".img": {*/}
        {/*              width: "100%",*/}
        {/*              height: "360px",*/}
        {/*              minH: "360px",*/}
        {/*              objectFit: "cover",*/}
        {/*            },*/}
        {/*          }}*/}
        {/*        >*/}
        {/*          <Image className="img" src={item.avatar} width={280} height={300} alt={item.name} />*/}
        {/*          <Flex direction="column" w="100%" h="100%" justify="space-evenly" px="15px">*/}
        {/*            <Box fontWeight={400} fontSize="45px" lineHeight="50px" textAlign="left">*/}
        {/*              {item.name}*/}
        {/*            </Box>*/}
        {/*            <Box fontWeight={400} fontSize="16px" lineHeight="19px" textAlign="left" color="#636363">*/}
        {/*              {item.post}*/}
        {/*            </Box>*/}
        {/*          </Flex>*/}
        {/*        </Flex>*/}
        {/*      </SwiperSlide>*/}
        {/*    );*/}
        {/*  })}*/}
        {/*</Swiper>*/}
      </Flex>
    </Center>
  );
};
