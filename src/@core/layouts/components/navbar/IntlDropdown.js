// ** Third Party Components
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

// ** Reactstrap Imports
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const IntlDropdown = () => {
  // ** Hooks
  const { i18n } = useTranslation();

  // ** Vars
  const langObj = {
    en: "English",
    fr: "Française",
    cn: "中文",
  };

  // ** Function to switch Language
  const handleLangUpdate = (e, lang) => {
    e.preventDefault();
    i18n.changeLanguage(lang);
  };

  return (
    <UncontrolledDropdown
      href="/"
      tag="li"
      className="dropdown-language nav-item"
    >
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link"
        onClick={(e) => e.preventDefault()}
      >
        <ReactCountryFlag
          svg
          className="country-flag flag-icon"
          countryCode={i18n.language === "en" ? "us" : i18n.language}
        />
        &nbsp;
        <span className="selected-language">{langObj[i18n.language]}</span>
      </DropdownToggle>
      <DropdownMenu className="mt-0" end>
        <DropdownItem
          href="/"
          tag="a"
          onClick={(e) => handleLangUpdate(e, "en")}
        >
          <ReactCountryFlag className="country-flag" countryCode="us" svg />
          <span className="ms-1">English</span>
        </DropdownItem>
        <DropdownItem
          href="/"
          tag="a"
          onClick={(e) => handleLangUpdate(e, "fr")}
        >
          <ReactCountryFlag className="country-flag" countryCode="fr" svg />
          &nbsp;
          <span className="ms-1">Française</span>
        </DropdownItem>
        <DropdownItem
          href="/"
          tag="a"
          onClick={(e) => handleLangUpdate(e, "cn")}
        >
          <ReactCountryFlag className="country-flag" countryCode="cn" svg />
          &nbsp;
          <span className="ms-1">简体中文</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default IntlDropdown;
