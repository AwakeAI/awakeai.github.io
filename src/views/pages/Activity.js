// ** React Imports
import {Fragment} from 'react'

// ** Reactstrap Imports
import {Row, Col, Card, CardBody, CardImg, ListGroup, ListGroupItem} from 'reactstrap'

// ** Styles
import '@styles/base/pages/page-knowledge-base.scss'
import Avatar from "@components/avatar";
import lulan from "@src/assets/images/portrait/Lulan.png";
import cup from "@src/assets/images/pages/cup.png";

const data = [
    {
        id: 'centech',
        img: '/src/assets/images/pages/dmzcri5nd33raxk4nke8.avif',
        title: 'CenTech',
        desc: '',
        customContent: (
            <ListGroup className="list-group-flush">
                <h4 className='mt-1 mb-0'>2023</h4>
                <ListGroupItem>Winter 2023 Accelerator Cohort</ListGroupItem>
            </ListGroup>
        )
    },
    {
        id: 'NEXT CANADA',
        img: '/src/assets/images/pages/next.png',
        title: 'NEXT 36',
        desc: '',
        customContent: (
            <ListGroup className="list-group-flush justify-content-center">
                <h4 className='mt-1 mb-0'>2023</h4>
                <ListGroupItem>
                    <Row>
                        <Col md="3" sm="6">
                            <Avatar img={lulan} imgHeight={90} imgWidth={85}/>
                        </Col>
                        <Col md="9" sm="6" style={{textAlign: "left"}}>
                            Lulan Shen, founder and CEO of AwakeAI Inc, has been admitted to participate in the 2023
                            NEXT36 program and will be attending during the summer season.
                        </Col>
                    </Row>
                </ListGroupItem>
            </ListGroup>
        )
    },
    {
        id: 'Dobson',
        img: '/src/assets/images/pages/img.png',
        title: 'Dobson Centre for Entrepreneurship',
        desc: '',
        customContent: (
            <ListGroup className="list-group-flush">
                <h4 className='mt-1 mb-0'>2022</h4>
                <ListGroupItem>Summer Dobson Entrepreneurship X1-Accelerator: Participated</ListGroupItem>
                <ListGroupItem>Dobson Entrepreneurship Programs Bootcamp and Cup <br/>
                    <strong> Third Place in Health Science Enterprise Tracks </strong>
                    <a href="https://www.mcgill.ca/dobson/article/mcgill-dobson-cup-2022-winners#hset">
                        <img id='dobson' src={cup} alt='Dobson Cup'/>
                    </a>

                </ListGroupItem>
            </ListGroup>
        )
    },
    {
        id: 'Engine',
        img: '/src/assets/images/pages/engine.jpg',
        title: 'McGill Engine Center',
        desc: '',
        customContent: (
            <ListGroup className="list-group-flush">
                <h4 className='mt-1 mb-0'>2022</h4>
                <ListGroupItem>TechAccel Showcase Winter</ListGroupItem>
                <ListGroupItem>TechAccel Grant Grantees</ListGroupItem>
                <h4 className='mt-1 mb-0'>2021</h4>
                <ListGroupItem>Invention to Impact Training program: Participated</ListGroupItem>
                <ListGroupItem>McGill-affiliated startup ventures: one of the approved and
                    eligible team and participated in a startup internship program</ListGroupItem>
                <ListGroupItem>TechIdea Pitch Competition: 1st Place & Audience Favorite</ListGroupItem>
            </ListGroup>
        )
    }
]
const Activity = () => {
    // ** States

    const Content = ({item}) => (

        <Col className='kb-search-content' key={item.id} md='6' sm='12'>
            <Card>
                <div className="kb-search-content-card-head m-auto align-items-center justify-content-center"
                     style={{minHeight: "200px", maxHeight: "230px"}}>
                    {item.id === 'centech' ? (
                        <img src={item.img} alt='knowledge-base-image'
                             style={{width: "60%"}}/>
                    ) : (<img src={item.img} alt='knowledge-base-image'
                              style={{width: "60%", margin: "15%"}}/>)
                    }
                </div>
                <CardBody className='text-center'>
                    <h1 style={{fontWeight: "bold"}}>{item.title}</h1>
                    <h4 className='mt-1 mb-0'>{item.desc}</h4>
                    {item.customContent ? item.customContent : null}
                </CardBody>
            </Card>
        </Col>
    )

    const renderContent = () => {
        return data.map(item => {
            return <Content key={item.id} item={item}/>
        })
    }

    return (
        <Fragment>
            {data !== null ? (
                <div id='knowledge-base-content'>
                    <Row className='justify-content-center kb-search-content-info match-height'>{renderContent()}</Row>
                </div>
            ) : null}
        </Fragment>
    )
}

export default Activity
