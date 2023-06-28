// ** Reactstrap Imports
import {Col, Row} from "reactstrap";

// ** Custom Components
import footerImg from "@src/assets/images/pages/footer-bg.png";
import themeConfig from "@configs/themeConfig";
import {Linkedin, Mail, MapPin} from "react-feather";

// ** Source Code
const Footer = () => {
  return (
    <footer className="footer-area footer-area-v3">
      <div
        className="footer-widget pt-20 bg-cover"
        style={{ backgroundImage: `url(${footerImg})` }}
      >
        <div className="container mx-auto">
          <div className="footer-top pb-20 mb-20">
            <Row className="align-items-center justify-content-center">
              <Col lg="2">
                <div className="footer-logo">
                  <img
                    src={themeConfig.app.appLogoImage}
                    alt="logo"
                    width="60%"
                  />
                </div>
              </Col>
              <Col lg="6">
                <div className="footer-nav">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#activity">Activity</a>
                    </li>
                    <li>
                      <a href="#team">Team</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
          <div
            style={{
              left: "60px",
              position: "relative"
            }}
          >
            <Row className="justify-content-center align-items-center mx-auto">
              <Col lg="3" md="3" sm="12">
                <div className="widget contact-widget mb-30">
                  <div className="contact-info-item">
                    <div className="icon">
                      <Linkedin size={27} />
                    </div>
                    <div className="info">
                      <span>LinkedIn</span>
                      <h5>
                        <a href="https://ca.linkedin.com/company/awakeai">
                          AwakeAI Inc.
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="3" sm="12">
                <div className="widget contact-widget mb-30 ">
                  <div className="contact-info-item">
                    <div className="icon">
                      <MapPin size={27} />
                    </div>
                    <div className="info">
                      <span>Office Address</span>
                      <h5>
                        <a style={{ pointerEvents: "none" }}>
                          Montreal, Quebec
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="3" sm="12">
                <div className="widget contact-widget mb-30">
                  <div className="contact-info-item">
                    <div className="icon">
                      <Mail size={27} />
                    </div>
                    <div className="info">
                      <span>Email Address</span>
                      <h5>
                        <a href="mailto:info@awakeai.ca">info@awakeai.ca</a>
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
  );
};
export default Footer;
