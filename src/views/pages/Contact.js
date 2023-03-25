// ** React Imports
import {useState} from 'react'
// ** Reactstrap Imports
import {Button, Col, Row} from 'reactstrap'

// ** Custom Components
// ** Demo Components
import herobg from "@src/assets/images/pages/herobg.jpg";
import NavbarHome from "@layouts/components/navbar/NavbarHome";
import {useSkin} from "@hooks/useSkin";
import {Book, Moon, Sun} from "react-feather";
import {useTranslation} from "react-i18next";
import formImgD from "@src/assets/images/pages/pexelsitalomeloD.jpg";
import formImg from "@src/assets/images/pages/pexelsitalomelo.jpg";
import {toast} from "react-hot-toast";
import {Icon} from "@iconify/react";
import Reaptcha from "reaptcha";
import themeConfig from "@configs/themeConfig";

// ** Source Code

const Contact = () => {
    const {skin, setSkin} = useSkin()
    const {t} = useTranslation();

    const [submitted, setSubmitted] = useState(false)
    const [verified, setVerified] = useState(false);

    const handleVerify = (recaptchaResponse) => {
        setVerified(true);
    };

    return (
        <div id="contact" className="sec-7" style={{
            minHeight: "700px",
            backgroundImage: skin === 'dark' ? `url(${formImgD})` : `url(${formImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
            backgroundPositionX: "center",
            backgroundPositionY: "center",
        }}
        >
            <div className="container" style={{maxWidth: "992px"}}>
                <Row>
                    <Col lg="6" sm="12" md="6">
                        <div className="section-title mb-45 wow fadeInUp"
                             style={{
                                 visibility: "visible",
                                 animationName: "fadeInUp"
                             }}>
                            <h2 style={{fontSize: "40px", fontWeight: "bold", color: "var(--color-gray-200)"}}>
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
                                  onSubmit={(e) => {
                                      setSubmitted(true)
                                      toast.success((t) => (
                                          <span>
                                                Form submitted! &nbsp; &nbsp;
                                              <Button.Ripple color='secondary' outline
                                                             onClick={() => {
                                                                 toast.dismiss(t.id);
                                                                 e.target.reset();
                                                             }}>
                                                  Dismiss
                                                </Button.Ripple>
                                              </span>
                                      ));
                                  }}
                            >

                                <Row>
                                    <Col lg="6">
                                        <div className="form_group">
                                            <input type="text" className="form_control"
                                                   placeholder="Enter full name"
                                                   name="entry.1208597498" required/>
                                            <Icon icon="bi:person-fill" style={{fontSize: '24px'}}/>
                                        </div>
                                    </Col>
                                    <Col lg="6">
                                        <div className="form_group">
                                            <input type="email" className="form_control"
                                                   placeholder="Enter email address"
                                                   name="entry.1569009990" required/>
                                            <Icon icon="bi:envelope" style={{fontSize: '24px'}}/>
                                        </div>
                                    </Col>
                                    <Col lg="12">
                                        <div className="form_group">
                                            <input type="text" className="form_control" name="entry.537245108"
                                                   placeholder="Subject"
                                                   required/>
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
                                            <Button color='primary' type="submit" value="Submit"
                                                    disabled={!verified}>
                                                Submit
                                            </Button>
                                            <Reaptcha
                                                sitekey={themeConfig.app.sitekey}
                                                onVerify={handleVerify}
                                            />
                                        </div>
                                    </Col>
                                    <iframe name="hidden_iframe" id="hidden_iframe" style={{display: "none"}}
                                            onLoad={() => !submitted}>
                                    </iframe>

                                </Row>
                            </form>
                        </Col>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Contact
