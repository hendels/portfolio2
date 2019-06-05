import React from "react";
import "../css/projects/projects-section.css";

import { Container, Row, Col } from "react-bootstrap";
import ProjectSection from "./projectContainer";

const ProjectHeader = props => {
  const features = [`it's RWD`, `search bar`, `tag management`, `crawler`];
  const stack = {
    mongodb: true,
    sass: true,
    react: true,
    RWD: true
  };
  return (
    <section id="section-projects" ref={props.refs.projects}>
      <Container>
        <Row noGutters>
          <Col md={3}>
            <div className="bg-secondary projects-title">
              <h1 className="display-3 text-white">{props.sectionName}</h1>
            </div>
          </Col>
          <Col md={9}>
            <div className="projects-content">
              <h4>Project I've made</h4>
              <p>
                Basically everything is focused in React / Redux with Node.js
                connected to MongoDB
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <ProjectSection
        refProject={props.refs.bikeysh}
        showHeader
        colorVariant="variant-1"
        projectName="Bikeysh"
        stack={stack}
        features={features}
      />
      <ProjectSection
        refProject={props.refs.googleMap}
        showHeader
        colorVariant="variant-2"
        projectName="Project 2"
        stack={stack}
        features={features}
      />
    </section>
  );
};

export default ProjectHeader;
