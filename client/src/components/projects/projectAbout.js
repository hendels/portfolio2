import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const About = props => {
  return (
    <div className="info-overlay">
      <Container>
        <Row>
          <div
            className="d-flex justify-content-between info-header"
            style={{ width: "100%" }}
          >
            <span className=" p-2">ABOUT</span>
            <span
              onClick={() => props.handleShowElement()}
              className="p-2 fas fa-times-circle close-icon"
            />
          </div>
        </Row>
        <Row>
          <p className="lead p-2 info-body">{props.about}</p>
        </Row>
      </Container>
    </div>
  );
};

export default About;
