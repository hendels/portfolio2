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
            <p className="section-header">{this.props.descriptionHeader}</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {this.props.descriptionText}
            {this.props.children ? this.props.children : null}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SectionDescription;
