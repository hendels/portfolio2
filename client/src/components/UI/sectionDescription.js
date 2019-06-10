import React from "react";
import "../../css/ui/sections.css";
import { Container, Col, Row } from "react-bootstrap";

class SectionDescription extends React.Component {
  render() {
    return (
      <Container
        className={`section-description ${this.props.descriptionClass}`}
      >
        <Row>
          <Col md={12}>
            <h4>{this.props.descriptionHeader}</h4>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p>{this.props.descriptionText}</p>
            {this.props.children ? this.props.children : null}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SectionDescription;
