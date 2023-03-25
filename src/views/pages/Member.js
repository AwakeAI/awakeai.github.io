// ** React Imports
import {Fragment, useEffect} from 'react'

// ** Reactstrap Imports
import {Col, Row} from 'reactstrap'

// ** Custom Components
// ** Demo Components
import TabsIcons from './teams/TabsIcons'


// ** Source Code

const Tabs = () => {
    return (
        <Fragment>
            <div className="container" style={{maxWidth: "1130px"}}>
                <Row className="justify-content-center">
                    <Col xl='12' lg='12'>
                        <TabsIcons/>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}
export default Tabs
