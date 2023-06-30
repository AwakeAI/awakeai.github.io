// ** Reactstrap Imports
import { NavItem, NavLink } from "reactstrap";
import themeConfig from "@configs/themeConfig";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

const NavbarLogin = () => {
  const { t } = useTranslation();
  // ** Props
  return (
    <div style={{ zIndex: "1000" }}>
      <div
        className="align-items-center floating-nav navbar-expand-lg"
        style={{ background: "none", top: "5rem" }}
      >
        <ul className="nav navbar-nav align-items-center ms-auto mt-5">
          <NavItem>
            <Link
              to="#"
              className="navbar-brand"
              style={{
                display: "flex",
                marginTop: "0.5rem",
                marginRight: "5rem",
              }}
            >
              <img
                src={themeConfig.app.appLogoImage}
                alt="logo"
                style={{ maxWidth: "50px", height: "100%" }}
              />
              <h4 className="brand-text text-primary ms-1">
                {t("CAT")}
                <br/>
                {t("A")}
              </h4>
            </Link>
          </NavItem>

          <NavItem className="nav-item m-lg-1">
            <NavLink className="nav-link" to="#">
              <h2 style={{ color: "#d0d2d6" }}>{t("Home")}</h2>
            </NavLink>
          </NavItem>

          <NavItem className="nav-item m-lg-1">
            <NavLink className="nav-link" href="#about">
              <h2 style={{ color: "#d0d2d6" }}>{t("About")}</h2>
            </NavLink>
          </NavItem>

          <NavItem className="nav-item m-lg-1">
            <NavLink className="nav-link" href="#activity">
              <h2 style={{ color: "#d0d2d6" }}>{t("Activity")}</h2>
            </NavLink>
          </NavItem>

          <NavItem className="nav-item m-lg-1">
            <NavLink className="nav-link" href="#team">
              <h2 style={{ color: "#d0d2d6" }}>{t("Team")}</h2>
            </NavLink>
          </NavItem>

          <NavItem className="nav-item m-lg-1">
            <NavLink className="menu-item" href="#contact">
              <h2 style={{ color: "#d0d2d6" }}>{t("Contact")}</h2>
            </NavLink>
          </NavItem>
        </ul>
      </div>
    </div>
  );
};
export default NavbarLogin;
