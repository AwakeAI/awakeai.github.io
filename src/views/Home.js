// ** React Imports
// import {useSkin} from "@hooks/useSkin";
import {Icon} from '@iconify/react'

// ** Icons Imports
import {
    ArrowRightCircle,
    Book,
    Facebook,
    GitHub,
    Linkedin,
    Mail,
    MapPin,
    Moon, PlusCircle,
    Pocket,
    Settings,
    Shield,
    Sun,
    Target,
    Video,
    Info
} from "react-feather";

// ** Reactstrap Imports
import {Button, Card, CardText, CardTitle, Col, Form, Input, Label, NavItem, NavLink, Row} from "reactstrap";

// ** Illustrations Imports
import illustrationsLight from "@src/assets/images/pages/herobg.png";
import illustrationsLight2 from "@src/assets/images/pages/older.png";
import formImg from "@src/assets/images/pages/pexelsitalomelo.png";
import footerImg from "@src/assets/images/pages/footer-bg.png";

// ** Styles
import "@styles/react/pages/page-authentication.scss";
import NavbarHome from "@layouts/components/navbar/NavbarHome";
import {useTranslation} from "react-i18next";
import IntlDropdown from "@layouts/components/navbar/IntlDropdown";
import {useSkin} from "@hooks/useSkin";
import './style.css';
import './_footer.scss';
import HomeTimeLine from "@src/views/pages/HomeTimeline";
import themeConfig from "@configs/themeConfig";
import Team from "@src/views/pages/Team";
import Activity from "@src/views/pages/Activity";
import Tabs from "@src/views/pages";


const Home = () => {
    const {skin, setSkin} = useSkin()

    // ** Function to toggle Theme (Light/Dark)
    const ThemeToggler = () => {
        if (skin === 'dark') {
            return <Sun className='ficon' onClick={() => setSkin('light')}/>
        } else {
            return <Moon className='ficon' onClick={() => setSkin('dark')}/>
        }
    }

    const {t} = useTranslation();
    const source2 = illustrationsLight2
    const source3 = formImg

    return (
        <div className="shrink">
            <div id="home" className="auth-wrapper" style={{
                backgroundImage: `url(${illustrationsLight})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100%',
                height: '100%',
                backgroundPositionX: "center",
                maxHeight: "100px",
                display: "block"
            }}>
                <Row>
                    <Col className="mx-auto p-5" sm="10" md="10" lg="10">
                        <NavbarHome/>
                        {/*<div className="mx-auto float-xl-end">*/}
                        {/*    <div className='align-items-center floating-nav navbar-expand-lg'*/}
                        {/*         style={{background: "none", top: "6rem", position: "fixed", zIndex: 1000}}>*/}
                        {/*        <ul className='nav navbar-nav align-items-center ms-auto'*/}
                        {/*            style={{flexDirection: "row"}}>*/}
                        {/*            <NavItem>*/}
                        {/*                <NavLink className='nav-link-style'>*/}
                        {/*                    <ThemeToggler/>*/}
                        {/*                </NavLink>*/}
                        {/*            </NavItem>*/}
                        {/*            &nbsp;|&nbsp;*/}
                        {/*            <IntlDropdown/>*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="align-items-center text-center mx-auto p-5" sm="12" md="9" lg="6">
                        <div id="head-div">
                            <h1 id='head'>
                                {t('We Care about your family members')}
                            </h1>
                            <h3 className="text-primary" style={{fontWeight: "400", fontSize: "20px"}}>
                                {t('A way to response in time to senior\'s needs')} <br/>
                            </h3>
                            {/*<Button.Ripple color='secondary' outline style={{color: "#FFFFFF"}}>*/}
                            {/*    <Video> </Video> &nbsp; Watch a 3 min overview*/}
                            {/*</Button.Ripple>*/}
                        </div>
                    </Col>
                </Row>
            </div>
            <div id="about" className="sec-2">
                <div className="container mx-auto">
                    <div className="sec-2H1">OUR PROFESSIONAL SERVICES</div>
                    <div className="sec-2H2">Competitive Advantages</div>
                    <img className="sec-3L mx-auto" src={source2} id="reading"/>
                    <div className="sec-2CT mx-auto pt-3">
                        <strong>AwakeAI</strong> system will process anonymized video taken in the resident's room,
                        detect
                        the senior’s
                        activities, and send detected actions in concise textual information to the caregivers’ and
                        their
                        family members’ tablets or mobile phones (see diagram). Our system preserves client privacy by
                        keeping all personal client information in secure cloud servers (Microsoft Azure) and not
                        needing to
                        send identifiable information over the internet.
                        <br/> <br/>
                        Our AI system can monitor activities that can be divided into 5 categories: emergencies,
                        activity/physical status, diet/medicine intake, health, and human-human interactions. Our system
                        can
                        detect other activities
                        based on a customization request. Furthermore, we are aiming to predict fall situations and help
                        to
                        prevent those.
                    </div>
                    <div className="sec-2E mx-auto mt-3 justify-content-center">
                        <div className="sec-2C">
                            <Button color="github" className="spotcustomer" style={{
                                width: "10%"
                            }}>
                                <Settings size={20} color="#000000"/>
                            </Button>
                            <div className="sec-2CH">Fully Autonomous</div>
                            <div className="sec-2CP">No wearable and manual operations are needed, no extra burder on
                                any
                                user.
                            </div>
                        </div>

                        <div className="sec-2C">
                            <Button color="github" className="spotcustomer" style={{
                                width: "10%"
                            }}>
                                <Shield size={20} color="#000000"/>
                            </Button>
                            <div className="sec-2CH">Privacy Preserving</div>
                            <div className="sec-2CP">Video will be processed locally, without video transmission,
                                leaving no
                                concern of
                                leak.
                            </div>
                        </div>

                        <div className="sec-2C">
                            <Button color="github" className="spotcustomer" style={{
                                width: "10%"
                            }}>
                                <Target size={20} color="#000000"/>
                            </Button>
                            <div className="sec-2CH">Broadly Applicable</div>
                            <div className="sec-2CP">The application can be extended to hospitals long-term care
                                facilities
                                and
                                homecare
                                facilities.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="activity" className="sec-2" style={{backgroundColor: "var(--color-grey-200)"}}>

                <div className="container mx-auto">
                    <div className="sec-2H1">OUR TRACTION</div>
                    <div className="sec-2H2" style={{color: "var(--color-blue)"}}>Competitions and Activities</div>
                    <Activity/>
                </div>
            </div>

            <div id="team" className="sec-2" style={{zIndex: "1"}}>

                <div className="container mx-auto">
                    <div className="sec-2H1">OUR CORE TEAM</div>
                    <div className="sec-2H2">Members and Consultants</div>
                </div>

                <Tabs />

            </div>
            <div id="contact" className="sec-7" style={{minHeight: "600px"}}>
                <img className="hero-bg2" alt="" src={source3}/>
                <div className="container" style={{maxWidth: "992px"}}>
                    <Row>
                        <Col lg="6" sm="12" md="6">
                            <div className="section-title mb-45 wow fadeInUp"
                                 style={{
                                     visibility: "visible",
                                     animationName: "fadeInUp"
                                 }}>
                                <h2 style={{fontSize: "40px", fontWeight: "bold", color: "var(--color-blue)"}}>
                                    Get In Touch With us
                                </h2>
                            </div>
                            <Col className="contact-area-v1 contact-form-area mb-60 wow fadeInUp" style={{
                                visibility: "visible",
                                animationName: "fadeInUp"
                            }}>
                                <form name="gform" id="gform" encType="text/plain"
                                      action="https://docs.google.com/forms/d/e/1FAIpQLSdZtdBB7319mpu2QSSUQRzk0-KdIO4lbYPQvgw7w4veoGfMpw/formResponse?"
                                      target="hidden_iframe"
                                >
                                    {/*onSubmit={{submitted: true}}*/}
                                    <Row>
                                        <Col lg="6">
                                            <div className="form_group">
                                                <input type="text" className="form_control"
                                                       placeholder="Enter full name"
                                                       name="entry.1208597498" required=""/>
                                                <Icon icon="bi:person-fill" style={{fontSize: '24px'}}/>
                                            </div>
                                        </Col>
                                        <Col lg="6">
                                            <div className="form_group">
                                                <input type="email" className="form_control"
                                                       placeholder="Enter email address"
                                                       name="entry.1569009990" required=""/>
                                                <Icon icon="bi:envelope" style={{fontSize: '24px'}}/>
                                            </div>
                                        </Col>
                                        <Col lg="12">
                                            <div className="form_group">
                                                <input type="text" className="form_control" name="entry.537245108"
                                                       placeholder="Subject"
                                                       required=""/>
                                                <Book size={24}/>
                                            </div>
                                        </Col>
                                        <Col lg="12">
                                            <div className="form_group">
                                                <textarea name="entry.1889589232" placeholder="Enter message"
                                                          className="form_control"/>
                                                <Icon icon="bi:vector-pen" style={{fontSize: '24px'}}/>
                                            </div>
                                        </Col>
                                        <Col lg="12">
                                            <div className="form_group">
                                                <Button color='primary' type="submit" value="Submit">
                                                    Submit
                                                </Button>
                                            </div>
                                        </Col>
                                        <iframe name="hidden_iframe" id="hidden_iframe" style={{display: "none"}}
                                        ></iframe>
                                        {/*    onLoad={{
                                                    if(submitted) {
                                                    }
                                                }}*/}
                                    </Row>
                                </form>
                            </Col>
                        </Col>
                    </Row>
                </div>
            </div>
            <footer className="footer-area footer-area-v3">
                <div className="footer-widget pt-20 bg-cover" style={{backgroundImage: `url(${footerImg})`}}>
                    <div className="container mx-auto">
                        <div className="footer-top pb-20 mb-20">
                            <Row className="align-items-center justify-content-center">
                                <Col lg="2">
                                    <div className="footer-logo">
                                        <img src={themeConfig.app.appLogoImage} alt="logo" width="60%"/>
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className="footer-nav">
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#about">About</a></li>
                                            <li><a href="#activity">Activity</a></li>
                                            <li><a href="#team">Team</a></li>
                                            <li><a href="#contact">Contact</a></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div style={{
                            left: "60px",
                            position: "relative"
                        }}>
                            <Row className="justify-content-center align-items-center mx-auto">
                                <Col lg="3" md="3" sm="12">
                                    <div className="widget contact-widget mb-30">
                                        <div className="contact-info-item">
                                            <div className="icon">
                                                <Linkedin size={27}/>
                                            </div>
                                            <div className="info">
                                                <span>LinkedIn</span>
                                                <h5><a href="https://ca.linkedin.com/company/awakeai">AwakeAI Inc.</a>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="3" md="3" sm="12">
                                    <div className="widget contact-widget mb-30 ">
                                        <div className="contact-info-item">
                                            <div className="icon">
                                                <MapPin size={27}/>
                                            </div>
                                            <div className="info">
                                                <span>Office Address</span>
                                                <h5><a style={{pointerEvents: "none"}}>Montreal, Quebec</a></h5>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="3" md="3" sm="12">
                                    <div className="widget contact-widget mb-30">
                                        <div className="contact-info-item">
                                            <div className="icon">
                                                <Mail size={27}/>
                                            </div>
                                            <div className="info">
                                                <span>Email Address</span>
                                                <h5><a href="mailto:info@awakeai.ca">info@awakeai.ca</a>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container mx-auto">
                        <Row className=" align-items-center">
                            <Col lg="12">
                                <div className="copyright-text text-center">
                                    <p>Copyright &copy; 2023. AwakeAI Inc. All rights reserved.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
