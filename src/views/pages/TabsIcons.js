// ** React Imports
import { Fragment, useState } from 'react'

// ** Icons Imports
import {Home, Settings, EyeOff, User, ChevronLeft, ChevronUp, ChevronRight} from 'react-feather'

// ** Reactstrap Imports
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import Team from "@src/views/pages/Team";
import Mentor from "@src/views/pages/Mentor";

const TabsIcons = () => {
  // ** State
  const [active, setActive] = useState('1')

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <Fragment>
      <Nav className='justify-content-center' tabs>
        <NavItem>
          <NavLink
            active={active === '1'}
            onClick={() => {
              toggle('1')
            }}
          >
            <ChevronLeft size={20} />
            <span className='align-middle' style={{fontSize:"20px"}}>Core Team</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={active === '2'}
            onClick={() => {
              toggle('2')
            }}
          >
            <ChevronLeft size={20} />
            <span className='align-middle' style={{fontSize:"20px"}}>Our Mentors</span>
          </NavLink>
        </NavItem>
        {/*<NavItem>*/}
        {/*  <NavLink*/}
        {/*      active={active === '3'}*/}
        {/*      onClick={() => {*/}
        {/*        toggle('3')*/}
        {/*      }}>*/}
        {/*    <ChevronLeft size={20} />*/}
        {/*    <span className='align-middle' style={{fontSize:"20px"}}>Consults and Interns</span>*/}
        {/*  </NavLink>*/}
        {/*</NavItem>*/}
      </Nav>
      <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
          <Team/>
        </TabPane>
        <TabPane tabId='2'>
          <Mentor/>
        </TabPane>
        {/*<TabPane tabId='3'>*/}
        {/*  <Team/>*/}
        {/*</TabPane>*/}
      </TabContent>
    </Fragment>
  )
}
export default TabsIcons
