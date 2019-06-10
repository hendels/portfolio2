import React from "react";
import Timeline from "react-dual-timeline";
import { Container, Col, Row } from "react-bootstrap";
import { StyleRoot } from "radium";
// styles
import "../css/timeline/timeline.css";
import "../css/experience/experience.css";
// app components
import SectionHeader from "./UI/sectionHeader";
import Blankspace from "./UI/blankSpace";
import SectionDescription from "./UI/sectionDescription";

const descriptionText = `Et pariatur veniam ea eu fugiat sunt cillum do ipsum non. Enim incididunt laboris ullamco exercitation laboris quis est in reprehenderit nisi sit laborum. Ex aliqua minim eiusmod irure voluptate in consectetur elit Lorem dolor fugiat tempor labore. Nulla aliqua esse aliqua do anim reprehenderit id laborum do aute sunt proident non quis. Ad ipsum ad excepteur consequat. Reprehenderit mollit cillum magna voluptate elit cillum minim ipsum adipisicing fugiat.

Nostrud dolor aliqua laboris eu ad ullamco officia duis occaecat ea. Exercitation officia laborum do incididunt. Veniam enim in sunt nostrud ut velit nisi consequat commodo. Magna ad fugiat commodo ut id enim qui. Et velit occaecat nisi sint cillum.

Labore duis voluptate anim Lorem velit Lorem laborum Lorem proident laborum. Ut dolor aliquip incididunt excepteur nostrud tempor dolor ea aliqua ut ex ea. Deserunt veniam ipsum aute mollit eu incididunt id esse nostrud consequat magna commodo consequat incididunt. Minim qui esse laboris pariatur et deserunt esse magna deserunt. Lorem pariatur reprehenderit ex anim sint.`;
const ExperienceSection = props => {
  const timelineConfig = {
    activeColor: "yellow"
  };
  const jsIcon = <i class="fab fa-js fa-1x" />;
  return (
    <section id="section-experience" ref={props.refExperience}>
      <Container>
        <Blankspace />
        <Row noGutters>
          <Col md={3}>
            <SectionHeader
              sectionName={props.sectionName}
              bootstrapClass="bg-warning"
              headerClass="experience-title"
            />
          </Col>
          <Col md={9}>
            <SectionDescription
              descriptionClass="experience-description"
              descriptionHeader={`I'm quite experienced!`}
              descriptionText={descriptionText}
            >
              <StyleRoot>
                <Timeline
                  activeColor="tomato"
                  lineColor="green"
                  className="time-container"
                >
                  <div
                    icon={<i className="fas fa-globe fa-1x" />}
                    className="time-container"
                  >
                    <h1>Entry 1</h1>
                  </div>
                  <div icon={jsIcon}>
                    <h1>Individual Learning</h1>
                  </div>
                  <div icon="03.2018">
                    <h3>decided to change branch</h3>
                  </div>
                  <div>
                    <h1>Entry 2</h1>
                    <ul>
                      <li>arbitrary content in entries</li>
                    </ul>
                    <i class="fas fa-globe fa-1x" />
                  </div>
                  {[0, 1, 2, 3].map(i => (
                    <div key={i}>
                      <h1>{i}</h1>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet.
                    </div>
                  ))}
                </Timeline>
              </StyleRoot>
            </SectionDescription>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ExperienceSection;
