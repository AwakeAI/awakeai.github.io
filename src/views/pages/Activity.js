// ** React Imports
import { useState } from "react";

// ** Reactstrap Imports
import {
  Button,
  Card,
  CardBody,
  Popover,
  PopoverBody,
  PopoverHeader,
  Row,
} from "reactstrap";

// ** Styles
import "@styles/base/pages/page-knowledge-base.scss";
import Avatar from "@components/avatar";

// ** Images
import centech from "@src/assets/images/pages/centech.webp";
import NEXT from "@src/assets/images/pages/next.png";
import db from "@src/assets/images/pages/img.png";
import engine from "@src/assets/images/pages/engine.jpg";
import lulan from "@src/assets/images/portrait/Lulan.png";
import cup from "@src/assets/images/pages/cup.png";
import NEXTD from "@src/assets/images/pages/N36.png";
import collision from "@src/assets/images/pages/Collision.jfif";
import { useSkin } from "@hooks/useSkin";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRTL } from "@hooks/useRTL";
import "@styles/react/libs/swiper/swiper.scss";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

const params = {
  navigation: true,
  slideToClickedSlide: true,
};

SwiperCore.use([Navigation]);

const Activity = () => {
  // ** States
  const { skin, setSkin } = useSkin();
  const { t } = useTranslation();
  const [popoverOpen, setPopoverOpen] = useState("");
  const [isRtl] = useRTL();
  const handleToggle = (id) => {
    setPopoverOpen(id);
  };

  const data = [
    {
      id: "collision",
      img: collision,
      imgD: collision,
      title: "Collision 2023",
      desc: `${t("PPQD")}`,
      to: "https://startupmontreal.com/startups-montrealaises-collision-2023/",
      customContent: null,
    },
    {
      id: "centech",
      img: centech,
      imgD: centech,
      title: "CenTech 2023",
      desc: `${t("W2AC")}`,
      to: "https://www.linkedin.com/feed/update/urn:li:activity:7063912444229734400/",
      customContent: null,
    },
    {
      id: "NEXT",
      img: NEXT,
      imgD: NEXTD,
      title: `${t("NS2C")}`,
      to: "",
      desc: "",
      customContent: (
        <div>
          <PopoverHeader>{t("NS2C")}</PopoverHeader>
          <PopoverBody>
            <Avatar
              img={lulan}
              imgHeight={100}
              imgWidth={95}
              className="mx-auto"
            />
            <p>
              <br />
              {t("NEXT36Lulan")}
            </p>
          </PopoverBody>
        </div>
      ),
    },
    {
      id: "Dobson",
      img: db,
      imgD: db,
      title: "McGill Dobson Centre for Entrepreneurship",
      to: "",
      desc: "",
      customContent: (
        <div>
          <PopoverHeader>Dobson 2022 Cohort</PopoverHeader>
          <PopoverBody>
            <p>
              {t("SDEX1A")} <br />
              {t("DEPBC")} <br />
              <strong> {t("DEPBCT")} </strong>
              <br />
              <a href="https://www.mcgill.ca/dobson/article/mcgill-dobson-cup-2022-winners#hset">
                <img id="dobson" src={cup} alt="Dobson Cup" width="100%" />
              </a>
            </p>
          </PopoverBody>
        </div>
      ),
    },
    {
      id: "Engine",
      img: engine,
      imgD: engine,
      title: "McGill Engine Center",
      desc: "",
      to: "",
      customContent: (
        <div>
          <PopoverHeader>McGill Engine Center</PopoverHeader>
          <PopoverBody>
            <p>
              2022, TechAccel Showcase Winter <br />
              2022, TechAccel Grant Grantees. <br />
              2021, Invention to Impact Training program.
              <br />
              2021, McGill-affiliated startup ventures: one of the approved and
              eligible team and participated in a startup internship program.{" "}
              <br />
              2021, TechIdea Pitch Competition: 1st Place & Audience Favorite.
            </p>
          </PopoverBody>
        </div>
      ),
    },
  ];

  return (
    <div
      id="activity"
      className="sec-2"
      style={{ backgroundColor: "var(--color-grey-200)"}}
    >
      <div className="container mx-auto">
        <div className="sec-2H1">{t("OT")}</div>
        <div
          className="sec-2H2"
          style={{
            color: `${
              skin !== "dark" ? "var(--color-blue)" : "var(--color-gray-200)"
            }`,
          }}
        >
          {t("CAA")}
        </div>
        <div id="knowledge-base-content">
          <Row className="justify-content-center kb-search-content-info match-height">
            <Swiper
              dir={isRtl ? "rtl" : "ltr"}
              {...params}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {data.map((item, index) => {
                return (
                  <SwiperSlide key={item.id} className="rounded swiper-shadow">
                    <Card style={{ minHeight: "300px", maxHeight: "300px" }}>
                      <div
                        className="kb-search-content-card-head m-auto align-items-center justify-content-center"
                        style={{
                          textAlign: "center",
                          minHeight: "180px",
                          maxHeight: "180px",
                        }}
                      >
                        <img
                          src={skin === "dark" ? item.imgD : item.img}
                          alt={item.id}
                          id={item.id}
                          style={{
                            width: `${
                              item.id === "centech" || item.id === "Engine"
                                ? "40%"
                                : "65%"
                            }`,
                            margin: `${
                              item.id === "Engine"
                                ? "5%"
                                : item.id === "Dobson"
                                ? "20%"
                                : item.id === "NEXT"
                                ? "15%"
                                : "10%"
                            }`,
                          }}
                        />
                      </div>
                      <CardBody className="text-center">
                        {item.customContent ? (
                          <div>
                            <Button
                              outline
                              id={item.id}
                              onMouseEnter={() => handleToggle(item.id)}
                              onMouseLeave={() => handleToggle("")}
                            >
                              <h4 style={{ fontWeight: "bold" }}>
                                {item.title}
                              </h4>
                            </Button>
                          </div>
                        ) : (
                          <div>
                            <h4 style={{ fontWeight: "bold" }}>{item.title}</h4>
                            <Link to={item.to}>
                              <p className="mt-1 mb-0">{item.desc}</p>
                            </Link>
                          </div>
                        )}
                      </CardBody>
                    </Card>
                    <Popover
                      placement="top"
                      isOpen={popoverOpen === item.id}
                      target={item.id}
                      boundariesElement="#activity"
                    >
                      {item.customContent}
                    </Popover>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Activity;
