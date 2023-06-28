// ** React Imports
import { Fragment } from "react";

// ** Icons Imports
import { ChevronDown } from "react-feather";

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import Team from "@src/views/pages/teams/Team";
import Mentor from "@src/views/pages/teams/Mentor";

const TabsIcons = () => {
  // ** State
  // const [active, setActive] = useState('1')

  // const toggle = tab => {
  //   if (active !== tab) {
  //     setActive(tab)
  //   }
  // }
  return (
    <Fragment>
      <Nav className="justify-content-center" tabs>
        <NavItem>
          <NavLink
            active
            // active={active === '1'}
            // onClick={() => {
            //   toggle('1')
            // }}
          >
            <ChevronDown size={20} />
            <span className="align-middle" style={{ fontSize: "20px" }}>
              Core Team
            </span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={"1"}>
        <TabPane tabId="1">
          <Team />
        </TabPane>
      </TabContent>
      <Nav className="justify-content-center" tabs>
        <NavItem>
          <NavLink active>
            <ChevronDown size={20} />
            <span className="align-middle" style={{ fontSize: "20px" }}>
              Our Mentors
            </span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={"2"}>
        <TabPane tabId="2">
          <Mentor />
        </TabPane>
      </TabContent>
      <Nav className="justify-content-center" tabs>
        <NavItem>
          <NavLink active>
            <ChevronDown size={20} />
            <span className="align-middle" style={{ fontSize: "20px" }}>
              Members
            </span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="py-50" activeTab={"3"}>
        <TabPane tabId="3">
          <div className="sec-2E mx-auto mt-3 justify-content-center">
            <div className="sec-2C">
              <div className="sec-2CH">Software </div>
              <div className="sec-2CP">
                Lead <ChevronDown size={15} color="#ffffff" />
                <br />
                <strong> Shilei Lin </strong> <br />
                <br />
                Website <ChevronDown size={15} color="#ffffff" />
                <br />
                <strong> Ahmed Abbas </strong> <br />
                <strong> Jessica Li </strong> <br />
                <br />
                UI/UX <ChevronDown size={15} color="#ffffff" />
                <br />
                <strong> Miraal Kabir </strong> <br />
                <br />
                Intern <ChevronDown size={15} color="#ffffff" />
                <br />
                <strong>Giorgos Kontorousis </strong>
              </div>
            </div>

            <div className="sec-2C">
              <div className="sec-2CH">Consultants</div>
              <div className="sec-2CP">
                Project <ChevronDown size={15} color="#ffffff" />
                <br />
                <strong> Ryan Xu </strong> <br />
                <br />
                Business <ChevronDown size={15} color="#ffffff" />
                <br />
                <strong> Ruofeng Li </strong> <br />
                <strong> Guneet Kour </strong> <br /> <br />
                Cloud and IoT <ChevronDown size={15} color="#ffffff" /> <br />
                <strong> Erqun Dong </strong> <br />
                <strong> Nelson Bore </strong>
              </div>
            </div>

            <div className="sec-2C">
              <div className="sec-2CH">AI</div>
              <div className="sec-2CP">
                Development <ChevronDown size={15} color="#ffffff" />
                <br />
                <strong> Abdul Takiddeen </strong> <br />
                <strong> Manoosh Samiei </strong> <br />
                <br />
                Research <ChevronDown size={15} color="#ffffff" />
                <br />
                <strong> Benjamin Akera </strong>
              </div>
            </div>
          </div>
        </TabPane>
      </TabContent>
    </Fragment>
  );
};
export default TabsIcons;
