import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const About = props => {
  return (
    <div className="info-overlay">
      <Container>
        <Row>
          <div
            className="d-flex justify-content-between"
            style={{ width: "100%" }}
          >
            <h1 className="display-4 p-2 text-white">ABOUT</h1>
            <span className="p-2 fas fa-times-circle close-icon" />
          </div>
        </Row>
        <Row>
          <p className="lead p-2 text-white">
            Voluptate excepteur aliqua nostrud ad. Sunt Lorem consectetur enim
            dolor reprehenderit cillum anim commodo occaecat labore sunt ad duis
            consequat. Amet do eiusmod fugiat laborum pariatur. Id officia id
            adipisicing Amet fugiat mollit excepteur ex mollit Lorem eu et amet.
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default About;
