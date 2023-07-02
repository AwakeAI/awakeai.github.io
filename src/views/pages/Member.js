// ** Custom Components
// ** Demo Components
import TabsIcons from "./teams/TabsIcons";
import {useTranslation} from "react-i18next";

// ** Source Code

const Member = () => {
  const { t } = useTranslation();
  return (
    <div id="team" className="sec-2" style={{ zIndex: "1" }}>
      <div className="container mx-auto">
        <div className="sec-2H1">{t("OTeam")}</div>
        <div className="sec-2H2">{t("FM")}</div>
      </div>
      <TabsIcons />
    </div>
  );
};
export default Member;
