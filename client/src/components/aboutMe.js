import React from "react";
import { Container, Col, Row } from "react-bootstrap";
// styles
import "../css/about-me/aboutMe.css";

import SectionHeader from "./UI/sectionHeader";
import Blankspace from "./UI/blankSpace";
import SectionDescription from "./UI/sectionDescription";

const descriptionText = `I didnt work in SCRUM before, but I ve worked in something called waterfall`;

class AboutMe extends React.Component {
  render() {
    return (
      <section id="section-about" ref={this.props.refAboutMe}>
        <Container>
          <Blankspace />
          <Row noGutters>
            <Col md={3}>
              <SectionHeader
                sectionName={this.props.sectionName}
                bootstrapClass="bg-danger"
                headerClass="about-title"
              />
            </Col>
            <Col md={9}>
              <SectionDescription
                descriptionClass="about-description"
                descriptionHeader={`Hi,`}
                descriptionText={descriptionText}
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default AboutMe;
