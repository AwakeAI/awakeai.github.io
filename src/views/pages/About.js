// ** Reactstrap Imports
import {Button, Col, Row} from "reactstrap";

// ** Custom Components
import { Settings, Shield, Target } from "react-feather";
import older from "@src/assets/images/pages/older.jpg";
import frame from "@src/assets/images/pages/frame.svg";
import framecn from "@src/assets/images/pages/frame-cn.svg";
import { useTranslation } from "react-i18next";

// ** Source Code
const About = () => {
  const { t, i18n  } = useTranslation();

  return (
    <div id="about" className="sec-2" style={{ zIndex: "1" }}>
      <div className="container mx-auto">
        <div className="sec-2H1">{t("OPS")}</div>
        <div className="sec-2H2">{t("Product")}</div>
        <img
          className="sec-3L mx-auto" style={{marginTop:"-5%", width:"70%"}}
          src={`${i18n.language}`==='cn'?`${framecn}`:`${frame}`}
          id="reading"
          alt="product"
        />
        <div className="sec-2CT mx-auto pt-1">
          {t("Intro")}
          <br /> <br />
          {t("Intro2")}
          <br />
        </div>
        <div className="sec-2H2 mt-3">{t("CA")}</div>
        <img
          className="sec-3L mx-auto"
          src={older}
          id="reading"
          alt="product"
        />
        <div className="sec-2E mx-auto mt-3 justify-content-center">
          <div className="sec-2C">
            <Button
              color="github"
              className="spotcustomer"
              style={{
                width: "10%",
              }}
            >
              <Settings size={20} color="#000000" />
            </Button>
            <div className="sec-2CH">{t("FA")}</div>
            <div className="sec-2CP">{t("FAText")}</div>
          </div>

          <div className="sec-2C">
            <Button
              color="github"
              className="spotcustomer"
              style={{
                width: "10%",
              }}
            >
              <Shield size={20} color="#000000" />
            </Button>
            <div className="sec-2CH">{t("PP")}</div>
            <div className="sec-2CP">{t("PPText")}</div>
          </div>

          <div className="sec-2C">
            <Button
              color="github"
              className="spotcustomer"
              style={{
                width: "10%",
              }}
            >
              <Target size={20} color="#000000" />
            </Button>
            <div className="sec-2CH">{t("BA")}</div>
            <div className="sec-2CP">{t("BAText")}</div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default About;
