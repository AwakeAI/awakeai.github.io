// ** Dropdowns Imports
import IntlDropdown from './IntlDropdown'

// ** Third Party Components
import {Moon, Sun} from 'react-feather'

// ** Reactstrap Imports
import {NavItem, NavLink} from 'reactstrap'
import themeConfig from "@configs/themeConfig";
import {Link} from "react-router-dom";
import * as Icon from "react-feather";

const NavbarLogin = () => {
    // ** Props


    return (
        <div style={{zIndex:"1000"}}>
            <div className='align-items-center floating-nav navbar-expand-lg'
                 style={{background: "none", top: "5rem"}}>
                <ul className='nav navbar-nav align-items-center ms-auto'>
                    <NavItem>
                        <Link to="#" className="navbar-brand"
                              style={{display: "flex", marginTop: "0.5rem", marginRight: "5rem"}}>
                            <img src={themeConfig.app.appLogoImage} alt="logo"
                                 style={{maxWidth: "50px", height: "100%"}}/>
                            <h4 className="brand-text text-primary ms-1"> Care Anytime <br/> Anywhere.</h4>
                        </Link>
                    </NavItem>

                    <NavItem className="nav-item m-lg-1">
                        <NavLink className="nav-link" to="#">
                            <h2 style={{color: "#d0d2d6"}}>Home</h2>
                        </NavLink>
                    </NavItem>

                    <NavItem className="nav-item m-lg-1">
                        <NavLink className="nav-link" href="#about">
                            <h2 style={{color: "#d0d2d6"}}>About</h2>
                        </NavLink>
                    </NavItem>

                    {/*<NavItem className="nav-item m-lg-1">*/}
                    {/*    <NavLink className="nav-link" href="#product">*/}
                    {/*        <h2 style={{color: "#d0d2d6"}}>Product</h2>*/}
                    {/*    </NavLink>*/}
                    {/*</NavItem>*/}

                    <NavItem className="nav-item m-lg-1">
                        <NavLink className="nav-link" href="#activity">
                            <h2 style={{color: "#d0d2d6"}}>Activity</h2>
                        </NavLink>
                    </NavItem>

                    <NavItem className="nav-item m-lg-1">
                        <NavLink className="nav-link" href="#team">
                            <h2 style={{color: "#d0d2d6"}}>Team</h2>
                        </NavLink>
                    </NavItem>

                    <NavItem className="nav-item m-lg-1">
                        <NavLink className="menu-item" href="#contact">
                            <h2 style={{color: "#d0d2d6"}}>Contact</h2>
                        </NavLink>
                    </NavItem>

                </ul>
            </div>

        </div>
    )
}
export default NavbarLogin
