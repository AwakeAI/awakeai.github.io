// ** Third Party Components
import Proptypes from "prop-types";
import { Info, Linkedin, PlusCircle } from "react-feather";
import { Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { useState } from "react";

const TeamPage = (props) => {
  // ** Props
  const { data } = props;

  const [modalId, setModalId] = useState("");

  const handleOpenModal = (id) => {
    setModalId(id);
  };

  const handleCloseModal = () => {
    setModalId("");
  };

  return (
    <Row className="justify-content-center">
      {data.map((item, i) => {
        return (
          <Col lg="3" md="6" sm="6" key={i}>
            <div className="team-item mb-50 wow fadeInUp">
              <div className="team-img">
                <img src={item.image} alt={item.firstName} />
                <div className="team-overlay">
                  <div className="team-social">
                    <span className="hover-btn">
                      <PlusCircle />
                    </span>
                    <ul
                      className="team-social-link"
                      style={{ paddingLeft: "0" }}
                    >
                      {item.links.linkedin ? (
                        <li>
                          <a href={item.links.linkedin} className="social-icon">
                            <Linkedin />
                          </a>
                        </li>
                      ) : null}
                      {item.links.github ? (
                        <li>
                          <a href={item.links.github} className="social-icon">
                            <Linkedin />
                          </a>
                        </li>
                      ) : null}
                      <li>
                        <a
                          data-toggle="modal"
                          onClick={() => handleOpenModal(item.id)}
                          style={{ cursor: "pointer" }}
                        >
                          <Info />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="team-info text-center">
                <h4 style={{ color: "#ebe9f1" }}>
                  {item.firstName} {item.lastName}
                </h4>
                <span className="position">{item.position}</span>
              </div>
            </div>
            <Modal
              isOpen={modalId === item.id}
              toggle={handleCloseModal}
              className="modal-dialog-centered modal-lg"
            >
              <ModalHeader toggle={handleCloseModal}>
                {item.firstName} {item.lastName}
              </ModalHeader>
              <ModalBody>
                <div className="container">
                  <Row className=" justify-content-center">
                    <Col sm="6" className="ins-image align-items-center mt-auto mb-auto">
                      <img src={item.image} alt={item.firstName} />
                    </Col>
                    <Col sm="6" >
                      <div className="ins-name">
                        <h3>
                          {item.firstName} {item.lastName}
                        </h3>
                      </div>
                      <div className="span span1">
                        <p className="left">Title:</p>
                        <p className="right">{item.position}</p>
                        <div className="clearfix"></div>
                      </div>
                      <div className="span span1">
                        <p className="left">Joined:</p>
                        <p className="right">{item.year}</p>
                        <div className="clearfix"></div>
                      </div>
                      <div className="span span1">
                        <p className="left" style={{ width: "100%" }}>
                          Biography
                          <br />
                        </p>
                        <p className="right" style={{ textAlign: "justify" }}>
                          {item.bio}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </ModalBody>
            </Modal>
          </Col>
        );
      })}
    </Row>
  );
};
export default TeamPage;

// ** PropTypes
TeamPage.propTypes = {
  data: Proptypes.array.isRequired,
};
