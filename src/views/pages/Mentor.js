// ** Custom Components
import Avatar from '@components/avatar'

// ** Images

// ** Reactstrap Imports
import TeamPage from "@components/team";
import {Row} from "reactstrap";

// ** Timeline Data
const mentorList = [
    {
        id: "ma",
        image: "assets/images/portrait/Michael.jpg",
        firstName: "Michael",
        lastName: "Avedesian",
        position: "Business Mentor",
        year: "2021",
        links: {
            github: "",
            linkedin: "https://www.mcgill.ca/engine/resources/mcgill-engine-centre-support/team"
        },
        bio: "Dr. Avedesian has over 33 years of operations, technology and business management experience in the corporate sector. He holds a bachelor’s degree with honors in Chemical Engineering from McGill University, and a Ph.D. in Engineering from Cambridge University.Dr. Avedesian then had three start-up companies for which two he was the founding CEO. Two of them were successful and one went IPO on the Toronto Stock Exchange. Currently, he serves on the Board of Directors of TM4, a company which designs and manufactures electromechanical drive train systems for hybrid and electric vehicles. Michael is a member of Ordre des ingenieurs du Quebec, Professional Engineers of Ontario, and the C.S.Ch.E. (for which he was President in 1992–1993). He was elected Fellow of the CIC in 1993. In 1998 he was inducted as a Fellow in the Canadian Academy of Engineering."
    },
    {
        id: "dp",
        image: "assets/images/portrait/Palma.jpg",
        firstName: "Dino Di",
        lastName: "Palma",
        position: "Business Mentor",
        year: "2022",
        links: {
            github: "",
            linkedin: "https://www.linkedin.com/in/ddipalma/"
        },
        bio: "Dino Di Palma most recently served as President, Strategic Partners & Global Accounts at Avaya. In this role, Dino was responsible for direct, channel, and partner sales in the U.S., Canada, and Latin America. He also had responsibility for the company’s gomarket strategy across the entire portfolio of cloud and premise-- to based software and hardware solutions serving enterprises, government agencies, channel partners, SIs, SPs, and small and medium businesses."
    }
]

const Mentor = () => {
    return (

        <section className="team-area-v1 justify-content-center">
            <div className="container mx-auto">
                <Row className="justify-content-center">
                    <div className="tab-content">
                        <div className="tab-pane fade show active">
                            <TeamPage data={mentorList} className='ms-50'/>
                        </div>
                    </div>
                </Row>
            </div>
        </section>

    )
}

export default Mentor
