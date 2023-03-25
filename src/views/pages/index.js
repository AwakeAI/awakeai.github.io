// ** React Imports
import {Fragment, useEffect} from 'react'

// ** Third Party Components
import Prism from 'prismjs'

// ** Reactstrap Imports
import {Row, Col} from 'reactstrap'

// ** Custom Components
import Card from '@components/card-snippet'
// import {tabsBasic} from "@src/views/pages/TabSourceCode";
// ** Demo Components
import TabsIcons from './TabsIcons'


// ** Source Code

const Tabs = () => {
    useEffect(() => {
        Prism.highlightAll()
    }, [])
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
