// ** React Imports
import {Fragment, useEffect} from 'react'

// ** Reactstrap Imports
import {Col, Row} from 'reactstrap'

// ** Custom Components
// ** Demo Components
import TabsIcons from './teams/TabsIcons'


// ** Source Code

const Member = () => {
    return (
        <div id="team" className="sec-2" style={{zIndex: "1"}}>

            <div className="container mx-auto">
                <div className="sec-2H1">OUR TEAM</div>
                <div className="sec-2H2">Founders and Key Leaders</div>
            </div>
            <Fragment>
                <div className="container" style={{maxWidth: "1130px"}}>
                    <Row className="justify-content-center">
                        <Col xl='12' lg='12'>
                            <TabsIcons/>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        </div>
    )
}
export default Member
