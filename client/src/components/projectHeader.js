import React from "react";
import "../css/projects/projects-section.css";

import { Container, Row, Col } from "react-bootstrap";

const ProjectHeader = props => {
  return (
    <section id="section-projects" ref={props.refProjects}>
      <Container>
        <Row noGutters>
          <Col md={3}>
            <div className="bg-secondary projects-title">
              <h1 className="display-3 text-white">{props.sectionName}</h1>
            </div>
          </Col>
          <Col md={9}>
            <div className="projects-content">
              <h4>Przemek Harendarz</h4>
              <p>ipsum et veniam pariatur excepteur veniam adipisicing aute</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectHeader;
