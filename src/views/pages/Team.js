// ** Custom Components
import Avatar from '@components/avatar'

// ** Images
import lulan from "@src/assets/images/portrait/Lulan.png"
import Hugh from "@src/assets/images/portrait/Hugh.png"
import Yitian from "@src/assets/images/portrait/Yitian.png"
import Egor from "@src/assets/images/portrait/Egor.png"
// ** Reactstrap Imports
import TeamPage from "@components/team";
import {Row} from "reactstrap";

// ** Timeline Data
const teamList = [
    {
        id: "ls",
        image: lulan,
        firstName: "Lulan",
        lastName: "Shen",
        position: "Chief Executive Officer / Founder",
        year: "2020",
        links: {
            github: "",
            linkedin: "https://www.linkedin.com/in/lulan-shen/"
        },
        bio: "Lulan, currently a Ph.D. candidate in the Department of Electrical and Computer Engineering, specializes in machine learning, at McGill University, and possesses an M.Sc. degree in Mathematical Modelling and Scientific Computing at the University of Oxford. Three-year work experience as a system engineer in Bosch Automotive for designing vehicle software platforms and vehicle functions."
    },
    {
        id: "hc",
        image: Hugh,
        firstName: "Hugh",
        lastName: "Cameron",
        position: "Director",
        year: "2021",
        links: {
            github: "",
            linkedin: "https://www.linkedin.com/in/hugh-cameron-164219/"
        },
        bio: "Hugh Cameron is a systems engineer, entrepreneur, startup advisor and investor.  After a career as R&D director at Bell-Northern Research and Nortel Networks where he delivered pioneering telephone network management and interactive customer service applications, he became co-founder and CTO of a Canadian company providing outsourced medical transcription and web applications for medical departments, faculties and hospitals.  At the time of its sale, Accentus had  grown to become Canada’s largest supplier of outsourced transcription services. Hugh received his BSc in mathematics and engineering from Queen’s University and his PhD in applied mathematics from the University of Cambridge."
    },
    {
        id: "yz",
        image: Yitian,
        firstName: "Yitian",
        lastName: "Zhang",
        position: "AI Engineer",
        year: "2020",
        links: {
            github: "",
            linkedin: "https://www.linkedin.com/in/yitian-zhang-b72baa170/"
        },
        bio: "Yitian is a Ph.D. candidate in the Department of Electrical and Computer Engineering at McGill University. Her research focuses on learning representations of time series by applying machine learning models. Such representations can prove beneficial in tasks such as activity recognition, health monitoring, and anomaly detection. "
    },
    {
        id: "el",
        image: Egor,
        firstName: "Egor",
        lastName: "Luhauskikh",
        position: "Chief Commercial Officer",
        year: "2022",
        links: {
            github: "",
            linkedin: "https://www.linkedin.com/in/luhauskikh/"
        },
        bio: "Egor is an MBA student at McGill University, Desautels Faculty of Management specializing in Global Strategy and Leadership. He received Medical Degree from Belarusian State Medical University (Belarus) and master’s degree in Health Policy and Management from the University of Southern Maine (USA). He has extensive experience in the pharmaceutical sector (J&J, AstraZeneca, GSK) leading cross-functional teams and working on complex projects to accelerate patients' access to innovative medicines."
    }
]

const Team = () => {
    return (

        <section className="team-area-v1 justify-content-center">
            <div className="container mx-auto">
                <Row className="justify-content-center">
                    <div className="tab-content">
                        <div className="tab-pane fade show active">
                            <TeamPage data={teamList} className='ms-50'/>
                        </div>
                    </div>
                </Row>
            </div>
        </section>

    )
}

export default Team
