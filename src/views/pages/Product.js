// ** Reactstrap Imports
import {Button, Card, CardBody, Popover, Row} from "reactstrap";

// ** Custom Components
import { Settings, Shield, Target } from "react-feather";
import older from "@src/assets/images/pages/older.jpg";
import { useTranslation } from "react-i18next";
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";

// ** Source Code
const Product = () => {
  const { t } = useTranslation();

  return (
    <div
      id="activity"
      className="sec-2"
      style={{ backgroundColor: "var(--color-grey-200)"}}
    >
      <div className="container mx-auto">
        <div className="sec-2H1">OUR PRODUCT AND SERVICE</div>
        <div
          className="sec-2H2"
          style={{
            color: `${
              skin !== "dark" ? "var(--color-blue)" : "var(--color-gray-200)"
            }`,
          }}
        >
          Product
        </div>
        <div id="knowledge-base-content">
          <Row className="justify-content-center kb-search-content-info match-height">

          </Row>
        </div>
      </div>
    </div>
  );
};
export default Product;
