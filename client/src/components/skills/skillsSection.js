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

const descriptionText = `Et pariatur veniam ea eu fugiat sunt cillum do ipsum non. Enim incididunt laboris ullamco exercitation laboris quis est in reprehenderit nisi sit laborum. Ex aliqua minim eiusmod irure voluptate in consectetur elit Lorem dolor fugiat tempor labore. Nulla aliqua esse aliqua do anim reprehenderit id laborum do aute sunt proident non quis. Ad ipsum ad excepteur consequat. Reprehenderit mollit cillum magna voluptate elit cillum minim ipsum adipisicing fugiat.

Nostrud dolor aliqua laboris eu ad ullamco officia duis occaecat ea. Exercitation officia laborum do incididunt. Veniam enim in sunt nostrud ut velit nisi consequat commodo. Magna ad fugiat commodo ut id enim qui. Et velit occaecat nisi sint cillum.

Labore duis voluptate anim Lorem velit Lorem laborum Lorem proident laborum. Ut dolor aliquip incididunt excepteur nostrud tempor dolor ea aliqua ut ex ea. Deserunt veniam ipsum aute mollit eu incididunt id esse nostrud consequat magna commodo consequat incididunt. Minim qui esse laboris pariatur et deserunt esse magna deserunt. Lorem pariatur reprehenderit ex anim sint.`;

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
                  bootstrapClass="bg-success"
                  headerClass="skills-title"
                />
              </Col>
              <Col md={9}>
                <SectionDescription
                  descriptionClass="skills-description"
                  descriptionHeader={`Things I've known`}
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
