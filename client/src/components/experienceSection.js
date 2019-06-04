import React from "react";
import Timeline from "react-dual-timeline";
import { Container, Col, Row } from "react-bootstrap";
// styles
import { StyleRoot } from "radium";
import "../css/timeline/timeline.css";
import "../css/experience/experience.css";

const ExperienceSection = props => {
  const timelineConfig = {
    activeColor: "yellow"
  };
  const jsIcon = <i class="fab fa-js fa-1x" />;
  return (
    <section id="section-experience" ref={props.refExperience}>
      <Container>
        <Row noGutters>
          <Col md={3}>
            <div className="bg-warning experience-title">
              <h1 className="display-3 text-white">{props.sectionName}</h1>
            </div>
          </Col>
          <Col md={9}>
            <div className="experience-content">
              <h4>rest is here</h4>
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
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    // <section id="section-experience" ref={props.refExperience}>
    //   <StyleRoot>
    //     <Timeline
    //       activeColor="tomato"
    //       lineColor="green"
    //       className="time-container"
    //     >
    //       <div
    //         icon={<i className="fas fa-globe fa-1x" />}
    //         className="time-container"
    //       >
    //         <h1>Entry 1</h1>
    //       </div>
    //       <div icon={jsIcon}>
    //         <h1>Individual Learning</h1>
    //       </div>
    //       <div icon="03.2018">
    //         <h3>decided to change branch</h3>
    //       </div>
    //       <div>
    //         <h1>Entry 2</h1>
    //         <ul>
    //           <li>arbitrary content in entries</li>
    //         </ul>
    //         <i class="fas fa-globe fa-1x" />
    //       </div>
    //       {[0, 1, 2, 3].map(i => (
    //         <div key={i}>
    //           <h1>{i}</h1>
    //           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    //           nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
    //           erat, sed diam voluptua. At vero eos et accusam et justo duo
    //           dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
    //           sanctus est Lorem ipsum dolor sit amet.
    //         </div>
    //       ))}
    //     </Timeline>
    //   </StyleRoot>
    // </section>
  );
};

export default ExperienceSection;
