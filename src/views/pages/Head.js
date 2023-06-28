// ** React Imports
import {useState} from "react";

// ** Reactstrap Imports
import {Button, Col, Modal, ModalBody, ModalHeader, NavItem, NavLink, Row} from "reactstrap";

// ** Custom Components
// ** Demo Components
// import herobg from "@src/assets/images/pages/herobg.jpg";
import herobg from "@src/assets/images/pages/CollisionMap.png";
import NavbarHome from "@layouts/components/navbar/NavbarHome";
import {useSkin} from "@hooks/useSkin";
import {Moon, Sun} from "react-feather";
import {useTranslation} from "react-i18next";
import Contact from "@src/views/pages/Contact";
// ** Source Code

const Head = () => {
  const {skin, setSkin} = useSkin();
  const {t} = useTranslation();
  const [basicModal, setBasicModal] = useState(false);

  const ThemeToggler = () => {
    if (skin === "dark") {
      return <Moon className="ficon" onClick={() => setSkin("light")}/>;
    } else {
      return <Sun className="ficon" onClick={() => setSkin("dark")}/>;
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
        maxHeight: "100px",
        display: "block",
        opacity: "0.8"
      }}
    >
      <Row>
        <Col className="mx-auto p-5" sm="10" md="10" lg="10">
          <NavbarHome/>
          <div className="mx-auto float-xl-end">
            <div
              className="align-items-center floating-nav navbar-expand-lg"
              style={{
                background: "none",
                top: "1rem",
                position: "fixed",
                zIndex: 1000
              }}
            >
              <ul
                className="nav navbar-nav align-items-center ms-auto"
                style={{flexDirection: "row"}}
              >
                <NavItem>
                  <NavLink className="nav-link-style">
                    <ThemeToggler/> &nbsp;|&nbsp; {skin}
                  </NavLink>
                </NavItem>
                {/*&nbsp;|&nbsp;*/}
                {/*<IntlDropdown/>*/}
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          className="align-items-center text-center mx-auto p-5"
          sm="12"
          md="9"
          lg="6"
        >
          <div id="head-div">
            <h1 id="head">{t("We Care about your family members")}</h1>
            <h3
              className="text-primary"
              style={{fontWeight: "400", fontSize: "20px"}}
            >
              {t("A way to response in time to senior's needs")} <br/>
            </h3>
            <Button.Ripple
              color="secondary"
              outline
              style={{color: "#FFFFFF", fontSize: "30px"}}
              onClick={() => setBasicModal(!basicModal)}
            >
              Sign Me Up As An Early Adopter!
            </Button.Ripple>
            <h1
              className="text-primary"
              style={{fontWeight: "600", fontSize: "50px"}}
            >
              <br/>
             Come to see us at Collision on Wednesday June 28th, at booth A619!
            </h1>
          </div>
        </Col>
      </Row>
      <Modal
        isOpen={basicModal}
        toggle={() => setBasicModal(!basicModal)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader toggle={() => setBasicModal(!basicModal)}/>
        <ModalBody>
          <Contact subject={'I want to be an Early Adopter.'}/>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default Head;
