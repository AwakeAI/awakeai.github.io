// ** Reactstrap Imports
import { Button } from "reactstrap";

// ** Custom Components
import { Settings, Shield, Target } from "react-feather";
import older from "@src/assets/images/pages/older.jpg";
import { useTranslation } from "react-i18next";

// ** Source Code
const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="sec-2" style={{ zIndex: "-1" }}>
      <div className="container mx-auto">
        <div className="sec-2H1">{t("OPS")}</div>
        <div className="sec-2H2">{t("CA")}</div>
        <img
          className="sec-3L mx-auto"
          src={older}
          id="reading"
          alt="redaing"
        />
        <div className="sec-2CT mx-auto pt-3">
          {t("Intro")}
          <br /> <br />
          {t("Intro2")}
        </div>
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
