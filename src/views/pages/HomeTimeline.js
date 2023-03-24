// ** Custom Components
import Avatar from '@components/avatar'

// ** Images
import ceo from '@src/assets/images/pages/img.png'
import lulan from '@src/assets/images/portrait/lulan.png'
import next from '@src/assets/images/pages/next.png'
import centech from '@src/assets/images/pages/dmzcri5nd33raxk4nke8.avif'

// ** Reactstrap Imports
import {Card, CardHeader, CardTitle, CardBody} from 'reactstrap'
import HomeTimeline from "@components/timeline/home_index";

// ** Timeline Data
const data = [
    {
        title: 'NEXT Canada',
        content: '',
        meta: '2023',
        color: 'warning',
        customContent: (
            <div className='d-flex align-items-center mb-50'>
                <img className='me-1' src={next} alt='pdf' height='23'/>
                <Avatar img={lulan} imgHeight={55} imgWidth={50}/>
                <div className='ms-50'>
                    <h5 className='mb-0'>Lulan Shen, CEO and co-founder of AwakeAI, has been accepted into the NEXT36 program</h5>
                    <span>CEO of AwakeAI</span>
                </div>

            </div>
        )
    },
    {
        title: 'CENTECH',
        content: '',
        meta: '2023',
        color: 'danger',
        customContent: (
            <div className='d-flex align-items-center mb-50'>
                <img className='me-1' src={centech} alt='pdf' height='40'/>
                <h5 className='mb-0'>2023 Winter Cohort, CenTech Acceleration</h5>
            </div>
        )
    },
    {
        title: 'McGill Dobson',
        content: '2022 Summer McGill Dobson Entrepreneurship X1-Accelerator: Participated',
        meta: '2022',
        customContent: (
            <div className='d-flex align-items-center'>
                <img className='me-1' src={ceo} alt='pdf' height='40'/>
                <h5 className='mb-0'>Winter 2022 McGill Dobson Entrepreneurship Programs Bootcamp and Cup: <br/>
                    Third Place in Health Science Enterprise Tracks</h5>
            </div>
        )
    },
    {
        title: 'McGill Engine Center',
        content: 'Fall 2021 & Winter 2022 McGill Invention to Impact Training program',
        meta: '',
        color: 'warning',
        customContent: (
            <div className='d-flex align-items-center'>
                <img className='me-1' src={ceo} alt='pdf' height='40'/>
                <h5 className='mb-0'>
                    Summer 2022 & Winter 2021 TechAccel Grant: TechAccel Grantees <br/>
                    2021 TechAccel Showcase Winter & Summer 2021 Cohort Event: Audience Favourite
                </h5>
            </div>
        )
    },
    {
        title: 'Create a new react project for client',
        content: 'Add files to new design folder',
        meta: '2 days ago',
        color: 'info'
    },
    {
        title: 'Create Invoices for client',
        content: 'Create new Invoices and send to Leona Watkins',
        meta: '12 mins ago',
        color: 'danger',
        customContent: (
            <div className='d-flex align-items-center'>
                <img className='me-1' src={ceo} alt='pdf' height='23'/>
                <h6 className='mb-0'>invoice.pdf</h6>
            </div>
        )
    }
]

const HomeTimeLine = () => {
    return (

        <div>
            <HomeTimeline data={data} className='ms-50'/>
        </div>

    )
}

export default HomeTimeLine
