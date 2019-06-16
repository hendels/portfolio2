import React from "react";
import {
  Container,
  Col,
  Row,
  ProgressBar,
  Accordion,
  Card,
  Button
} from "react-bootstrap";
// app components
import CoreSkills from "./skillsCore";
import AdditionalSkills from "./skillsTable";
import SectionHeader from "../UI/sectionHeader";
import Blankspace from "../UI/blankSpace";
import SectionDescription from "../UI/sectionDescription";
// styles
import "../../css/skills/skills.css";

const descriptionText = ``;

class Skills extends React.Component {
  render() {
    return (
      <div>
        <section id="section-skills" ref={this.props.refSkills}>
          <Container>
            <Blankspace />
            <Row noGutters>
              <Col md={3}>
                <SectionHeader
                  sectionName={this.props.sectionName}
                  backgroundClass="skills-header"
                  headerClass="skills-title"
                />
              </Col>
              <Col md={9}>
                <SectionDescription
                  descriptionClass="skills-description"
                  descriptionHeader={``}
                  descriptionText={descriptionText}
                >
                  <CoreSkills />
                  <AdditionalSkills />
                </SectionDescription>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Skills;
