// ** React Imports
import { Fragment } from "react";

// ** Icons Imports
import { ChevronDown } from "react-feather";

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import Team from "@src/views/pages/teams/Team";
import Mentor from "@src/views/pages/teams/Mentor";
import {useTranslation} from "react-i18next";

const TabsIcons = () => {
  const {t} = useTranslation();
  // ** State
  return (
    <Fragment>
      <Nav className="justify-content-center" tabs>
        <NavItem>
          <NavLink
            active
          >
            <ChevronDown size={20} />
            <span className="align-middle" style={{ fontSize: "20px" }}>
              {t("CTeam")}
            </span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={"1"}>
        <TabPane tabId="1">
          <Team />
        </TabPane>
      </TabContent>
      <Nav className="justify-content-center" tabs>
        <NavItem>
          <NavLink active>
            <ChevronDown size={20} />
            <span className="align-middle" style={{ fontSize: "20px" }}>
              {t("OM")}
            </span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={"2"}>
        <TabPane tabId="2">
          <Mentor />
        </TabPane>
      </TabContent>
      <Nav className="justify-content-center" tabs>
        <NavItem>
          <NavLink active>
            <ChevronDown size={20} />
            <span className="align-middle" style={{ fontSize: "20px" }}>
              {t("Members")}
            </span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={"3"}>
        <TabPane tabId="3">
          <div className="sec-2E mx-auto mt-3 justify-content-center">
            <div className="sec-2C">
              <div className="sec-2CH">{t("Software")} </div>
              <div className="sec-2CP">
                {t("Lead")} <ChevronDown size={15} color="#ffffff" />
                <br />
                <strong> {t("Shilei Lin")} </strong> <br />
                <br />
                {t("Website")} <ChevronDown size={15} color="#ffffff" />
                <br />
                <strong> Ahmed Abbas </strong> <br />
                <strong> Jessica Li </strong> <br />
                <br />
                UI/UX <ChevronDown size={15} color="#ffffff" />
                <br />
                <strong> Miraal Kabir </strong> <br />
                <br />
                {t("Intern")} <ChevronDown size={15} color="#ffffff" />
                <br />
                <strong>Giorgos Kontorousis </strong>
              </div>
            </div>

            <div className="sec-2C">
              <div className="sec-2CH">{t("Consultants")}</div>
              <div className="sec-2CP">
                {t("Project")} <ChevronDown size={15} color="#ffffff" />
                <br />
                <strong> {t("Ryan Xu")} </strong> <br />
                <br />
                {t("Business")} <ChevronDown size={15} color="#ffffff" />
                <br />
                <strong> {t("Ruofeng Li")} </strong> <br />
                <strong> Remi Richard </strong> <br />
                <strong> Guneet Kour </strong> <br /> <br />
                {t("Cloud and IoT")}<ChevronDown size={15} color="#ffffff" /> <br />
                <strong> {t("Erqun Dong")} </strong> <br />
                <strong> Nelson Bore </strong>
              </div>
            </div>

            <div className="sec-2C">
              <div className="sec-2CH">{t("AI")}</div>
              <div className="sec-2CP">
                {t("Development")} <ChevronDown size={15} color="#ffffff" />
                <br />
                <strong> Abdul Takiddeen </strong> <br />
                <strong> Manoosh Samiei </strong> <br />
                <br />
                {t("AR")} <ChevronDown size={15} color="#ffffff" />
                <br />
                <strong> Benjamin Akera </strong>
              </div>
            </div>
          </div>
        </TabPane>
      </TabContent>
    </Fragment>
  );
};
export default TabsIcons;
