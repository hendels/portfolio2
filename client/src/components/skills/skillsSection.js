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
import AdditionalSkills from "./skillsAdditional";

import "../../css/skills/skills.css";

class Skills extends React.Component {
  render() {
    return (
      <div>
        <section id="section-skills" ref={this.props.refSkills}>
          <Container>
            <Row noGutters>
              <Col md={3}>
                <div className="bg-success skills-title">
                  <h1 className="display-3 text-white">
                    {this.props.sectionName}
                  </h1>
                </div>
              </Col>
              <Col md={9}>
                <div className="skills-content">
                  <CoreSkills />
                  <AdditionalSkills />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Skills;
