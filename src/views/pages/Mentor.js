// ** Custom Components
import Avatar from '@components/avatar'

// ** Images
import Michael from "@src/assets/images/portrait/Michael.jpg"
import Palma from "@src/assets/images/portrait/Palma.jpg"
import Richard from "@src/assets/images/portrait/Remi.png"
// ** Reactstrap Imports
import TeamPage from "@components/team";
import {Row} from "reactstrap";

// ** Timeline Data
const mentorList = [
    {
        id: "ma",
        image: Michael,
        firstName: "Michael",
        lastName: "Avedesian",
        position: "Associated with McGill Engine",
        year: "2021",
        links: {
            github: "",
            linkedin: "https://www.mcgill.ca/engine/resources/mcgill-engine-centre-support/team"
        },
        bio: "Dr. Avedesian has over 33 years of operations, technology and business management experience in the corporate sector. He holds a bachelor’s degree with honors in Chemical Engineering from McGill University, and a Ph.D. in Engineering from Cambridge University.Dr. Avedesian then had three start-up companies for which two he was the founding CEO. Two of them were successful and one went IPO on the Toronto Stock Exchange. Currently, he serves on the Board of Directors of TM4, a company which designs and manufactures electromechanical drive train systems for hybrid and electric vehicles. Michael is a member of Ordre des ingenieurs du Quebec, Professional Engineers of Ontario, and the C.S.Ch.E. (for which he was President in 1992–1993). He was elected Fellow of the CIC in 1993. In 1998 he was inducted as a Fellow in the Canadian Academy of Engineering."
    },
    {
        id: "dp",
        image: Palma,
        firstName: "Dino Di",
        lastName: "Palma",
        position: "Associated with Dobson Center",
        year: "2022",
        links: {
            github: "",
            linkedin: "https://www.linkedin.com/in/ddipalma/"
        },
        bio: "Dino Di Palma most recently served as President, Strategic Partners & Global Accounts at Avaya. In this role, Dino was responsible for direct, channel, and partner sales in the U.S., Canada, and Latin America. He also had responsibility for the company’s gomarket strategy across the entire portfolio of cloud and premise-- to based software and hardware solutions serving enterprises, government agencies, channel partners, SIs, SPs, and small and medium businesses."
    },
    {
        id: "rr",
        image: Richard,
        firstName: "Rémi",
        lastName: "Richard",
        position: "Associated with Centech",
        year: "2023",
        links: {
            github: "",
            linkedin: "https://centech.co/en/eer/remi-richard/"
        },
        bio: "Remi co-founded Pomelo Health (Acquired by TELUS Health) which is a leading patient engagement in North America with 12,000 healthcare practitioners using it to reach about 1M patients per year. He was named one of the top 25 innovators in Quebec by C2 Montreal, recently made the top 30 under 30 list."
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
