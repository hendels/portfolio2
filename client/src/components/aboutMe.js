import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../css/about-me/aboutMe.css";
import SectionHeader from "./UI/sectionHeader";
class AboutMe extends React.Component {
  render() {
    return (
      <section id="section-about" ref={this.props.refAboutMe}>
        <Container>
          <Row noGutters>
            <Col md={3}>
              <div className="bg-danger about-title">
                <h1 className="display-3 text-white">
                  {this.props.sectionName}
                </h1>
              </div>
            </Col>
            <Col md={9}>
              <SectionHeader headerClass="about-content" />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default AboutMe;
