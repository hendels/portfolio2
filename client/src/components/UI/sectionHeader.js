import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../../css/ui/sections.css";

class SectionHeader extends React.Component {
  render() {
    return (
      <div className={this.props.headerClass}>
        <Container>
          <Row>
            <div className="header-title">About me</div>
            <br />
            <br />
            {/* <Col md={5}>
            </Col>
            <Col md={7} /> */}
          </Row>
          <Row>
            <Col md={12}>
              <p>
                ipsum et veniam pariatur excepteur veniam adipisicing aute ipsum
                ut. Adipisicing labore voluptate ut officia ea Lorem pariatur
                officia aute voluptate et dolore minim. Pariatur fugiat culpa
                eiusmod aliqua laboris dolor officia anim deserunt. Eu do eu
                irure fugiat ipsum quis esse. In cupidatat ipsum velit quis
                aliqua officia adipisicing Lorem et cillum in dolor voluptate
                proident.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SectionHeader;
