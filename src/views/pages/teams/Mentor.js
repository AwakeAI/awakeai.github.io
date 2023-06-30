// ** Custom Components
// ** Images
import Michael from "@src/assets/images/portrait/Michael.jpg";
import Palma from "@src/assets/images/portrait/Palma.jpg";
import Peter from "@src/assets/images/portrait/Peter.png";
import David from "@src/assets/images/portrait/David.png";
import Gandhi from "@src/assets/images/portrait/Gandhi.png";

// ** Reactstrap Imports
import TeamPage from "@components/team";
import { Row } from "reactstrap";

// ** Timeline Data
const mentorList = [
  {
    id: "ma",
    image: Michael,
    firstName: "Michael",
    lastName: "Avedesian",
    position: "Ronald Chwang Entrepreneur-in-Residence",
    year: "2021",
    links: {
      github: "",
      linkedin:
        "https://www.mcgill.ca/engine/resources/mcgill-engine-centre-support/team",
    },
    bio: "Dr. Avedesian has over 33 years of operations, technology and business management experience in the corporate sector. He holds a bachelor’s degree with honors in Chemical Engineering from McGill University, and a Ph.D. in Engineering from Cambridge University.Dr. Avedesian then had three start-up companies for which two he was the founding CEO. Two of them were successful and one went IPO on the Toronto Stock Exchange. Currently, he serves on the Board of Directors of TM4, a company which designs and manufactures electromechanical drive train systems for hybrid and electric vehicles. Michael is a member of Ordre des ingenieurs du Quebec, Professional Engineers of Ontario, and the C.S.Ch.E. (for which he was President in 1992–1993). He was elected Fellow of the CIC in 1993. In 1998 he was inducted as a Fellow in the Canadian Academy of Engineering.",
  },
  {
    id: "dp",
    image: Palma,
    firstName: "Dino Di",
    lastName: "Palma",
    position: "Managing Partner @True North Advisory",
    year: "2022",
    links: {
      github: "",
      linkedin: "https://www.linkedin.com/in/ddipalma/",
    },
    bio: "Dino Di Palma most recently served as President, Strategic Partners & Global Accounts at Avaya. In this role, Dino was responsible for direct, channel, and partner sales in the U.S., Canada, and Latin America. He also had responsibility for the company’s gomarket strategy across the entire portfolio of cloud and premise-- to based software and hardware solutions serving enterprises, government agencies, channel partners, SIs, SPs, and small and medium businesses.",
  },
  {
    id: "ps",
    image: Peter,
    firstName: "Peter",
    lastName: "Shi",
    position: "Growth Equity Investor @Maverix PE",
    year: "2023",
    links: {
      github: "",
      linkedin: "https://www.linkedin.com/in/petershi101/",
    },
    bio: "Peter is an Associate with Maverix Private Equity. In this role, he is focused on deal execution including financial modelling and due diligence. Peter also works closely with portfolio companies in strategic and financial management as well as the evaluation of add-on acquisitions opportunities. ",
  },
  {
    id: "dg",
    image: Gandhi,
    firstName: "Dharmesh",
    lastName: "Gandhi",
    position: "Partner @EY",
    year: "2023",
    links: {
      github: "",
      linkedin: "https://www.linkedin.com/in/dharmeshgandhi1/",
    },
    bio: "Dharmesh leads the Central Quantitative Services Practice and has 17 years of experience working with technology companies across Canada. He works closely with his clients as a trusted business advisor, providing results-oriented advice and delivering the connections and insight required to access government grants and incentives. ",
  },
  {
    id: "dm",
    image: David,
    firstName: "David",
    lastName: "Masotti",
    position: "Board of Directors @FTG Aerospace",
    year: "2023",
    links: {
      github: "",
      linkedin: "https://www.linkedin.com/in/david-masotti-b3920/",
    },
    bio: "David is an experienced Business Leader, Corporate Director and Entrepreneur with a track record of success in building and leading highly effective senior management teams in numerous situations – from early stage, to mature businesses with thousands of employees. Successful record of growth, diversification, product development, business development, financing, restructuring, turnarounds and performance improvement through leadership, team-building, clear strategic focus and operational excellence.",
  },
];

const Mentor = () => {
  return (
    <section className="team-area-v1 justify-content-center">
      <div className="container mx-auto">
        <Row className="justify-content-center">
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <TeamPage data={mentorList} className="ms-50" />
            </div>
          </div>
        </Row>
      </div>
    </section>
  );
};

export default Mentor;
