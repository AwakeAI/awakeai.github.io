// ** Third Party Components
import Proptypes from "prop-types";
import {Info, Linkedin, PlusCircle} from "react-feather";
import {Col, Row} from "reactstrap";

const TeamPage = (props) => {
    // ** Props
    const {data} = props;

    return (
        <Row className="justify-content-center">
            {data.map((item, i) => {
                const imageUrl = `../../../src/${item.image}`

                return (
                    <Col lg="3" md="6" sm="6" key={i}>
                        <div className="team-item mb-50 wow fadeInUp">
                            <div className="team-img">
                                <img src={imageUrl} alt={item.firstName}/>
                                <div className="team-overlay">
                                    <div className="team-social">
                                        <span className="hover-btn">
                                            <PlusCircle/>
                                        </span>
                                        <ul className="team-social-link" style={{paddingLeft: "0"}}>
                                            {item.links.linkedin ? (
                                                <li>
                                                    <a href={item.links.linkedin}
                                                       className="social-icon">
                                                        <Linkedin/>
                                                    </a>
                                                </li>
                                            ) : null}
                                            {item.links.github ? (
                                                <li>
                                                    <a href={item.links.github}
                                                       className="social-icon">
                                                        <Linkedin/>
                                                    </a>
                                                </li>
                                            ) : null}
                                            {/*<li>*/}
                                            {/*    <a data-toggle="modal"*/}
                                            {/*       data-target={`#${item.id}`}*/}
                                            {/*       style={{cursor: "pointer"}}>*/}
                                            {/*        <Info/>*/}
                                            {/*    </a>*/}
                                            {/*</li>*/}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="team-info text-center">
                                <h4>{item.firstName} {item.lastName}</h4>
                                <span className="position">{item.position}</span>
                            </div>
                        </div>

                        <div className="modal fade" id={item.id} tabIndex="-1" role="dialog"
                             aria-labelledby={item.id}
                             aria-hidden="true">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title" id={item.id}>Details Of {item.firstName}
                                            {item.lastName}</h4>
                                        <button type="button" className="close" data-dismiss="modal"
                                                data-bs-dismiss="modal"
                                                aria-label="Close" style={{background: " white"}}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="instrument">
                                            <div className="container">
                                                <div className="instrument-view">
                                                    <div className="row justify-content-center">
                                                        <div className="col-sm-4 ins-image">
                                                            <img src={imageUrl} alt={item.firstName}/>
                                                        </div>
                                                        <div className="col-sm-1"></div>
                                                        <div className="col-sm-7">
                                                            <div className="ins-name">
                                                                <h3>{item.firstName} {item.lastName}
                                                                </h3>
                                                            </div>
                                                            <div className="span span1">
                                                                <p className="left"
                                                                   style={{fontSize: " 17px"}}>
                                                                    Title:"
                                                                </p>
                                                                <p className="right"
                                                                   style={{fontSize: " 17px"}}>
                                                                    {item.position}
                                                                </p>
                                                                <div className="clearfix"></div>
                                                            </div>
                                                            <div className="span span1">
                                                                <p className="left"
                                                                   style={{fontSize: " 17px"}}>
                                                                    Year Joined:"</p>
                                                                <p className="right"
                                                                   style={{fontSize: " 17px"}}>
                                                                    {item.year}
                                                                </p>
                                                                <div className="clearfix"></div>
                                                            </div>
                                                            <div id="detail_team">
                                                                <div className="ins-name">
                                                                    <h5>Biography </h5>
                                                                </div>
                                                                <div className="span span1">
                                                                    <p style={{textAlign: " justify"}}>
                                                                        {item.bio}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                )
            })}
        </Row>
    )

};

export default TeamPage;

// ** PropTypes
TeamPage.propTypes = {
    data: Proptypes.array.isRequired
};
