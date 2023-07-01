// ** React Imports
import { useState } from "react";

// ** Reactstrap Imports
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";

// ** Custom Components
// ** Demo Components
import herobg from "@src/assets/images/pages/herobg.jpg";
import NavbarHome from "@layouts/components/navbar/NavbarHome";
import { useSkin } from "@hooks/useSkin";
import { Moon, Sun } from "react-feather";
import { useTranslation } from "react-i18next";
import Contact from "@src/views/pages/Contact";
import IntlDropdown from "@layouts/components/navbar/IntlDropdown";
// ** Source Code

const Head = () => {
  const { skin, setSkin } = useSkin();
  const { t } = useTranslation();
  const [basicModal, setBasicModal] = useState(false);
  const [subject, setSubject] = useState(null);
  const ThemeToggler = () => {
    if (skin === "dark") {
      return <Moon className="ficon" onClick={() => setSkin("light")} />;
    } else {
      return <Sun className="ficon" onClick={() => setSkin("dark")} />;
    }
  };

  return (
    <div
      id="home"
      className="auth-wrapper"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        backgroundPositionX: "center",
        display: "block",
        opacity: "0.8",
      }}
    >
      <Row>
        <Col className="mx-auto pb-1" sm="10" md="10" lg="10">
          <NavbarHome />
          <div className="mx-auto float-xl-end">
            <div
              className="align-items-center floating-nav navbar-expand-lg"
              style={{
                background: "none",
                top: "1rem",
                position: "fixed",
                zIndex: 1000,
              }}
            >
              <ul
                className="nav navbar-nav align-items-center ms-auto"
                style={{ flexDirection: "row" }}
              >
                <NavItem>
                  <NavLink className="nav-link-style">
                    <ThemeToggler />
                  </NavLink>
                </NavItem>
                &nbsp;|&nbsp;
                <IntlDropdown />
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          className="align-items-center text-center mx-auto"
          sm="12"
          md="9"
          lg="6"
        >
          <div id="head-div">
            <h1 id="head" className="text-primary">
              {t("WC")}
            </h1>
            <h3
              className="text-primary"
              style={{ fontWeight: "400", fontSize: "20px" }}
            >
              {t("A way to response in time to senior's needs")} <br />
            </h3>
            <Button.Ripple
              color="secondary"
              outline
              style={{ color: "#FFFFFF", fontSize: "30px" }}
              onClick={() => {
                setSubject("I want to be An Early Adopter!");
                setBasicModal(!basicModal);
              }}
            >
              Sign Me Up As An Early Adopter!
            </Button.Ripple>
            <h1
              className="text-primary"
              style={{ fontWeight: "300", fontSize: "50px" }}
            ></h1>
            <Button.Ripple
              color="secondary"
              outline
              style={{ color: "#FFFFFF", fontSize: "30px" }}
              onClick={() => {
                setSubject("I want to see A Demo!");
                setBasicModal(!basicModal);
              }}
            >
              Submit A Demo Request!
            </Button.Ripple>
          </div>
        </Col>
      </Row>
      <Modal
        isOpen={basicModal}
        toggle={() => setBasicModal(!basicModal)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader toggle={() => setBasicModal(!basicModal)} />
        <ModalBody>
          <Contact subject={subject} />
        </ModalBody>
      </Modal>
    </div>
  );
};
export default Head;
