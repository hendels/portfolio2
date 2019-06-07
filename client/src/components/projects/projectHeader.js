import React from "react";
import "../../css/projects/projects-section.css";

import { Container, Row, Col } from "react-bootstrap";
import ProjectSection from "./projectContainer";
import BlankSpace from "../blankSpace";

const ProjectHeader = props => {
  const features = [`it's RWD`, `search bar`, `tag management`, `crawler`];
  const stack = {
    mongodb: true,
    sass: true,
    react: true,
    RWD: true
  };
  const { bikeysh, googleMap } = props.projects;
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
      <BlankSpace />
      {/* write that it has demo data and priviliges at admin level only */}
      <ProjectSection
        ref={props.refs.bikeyshComponent}
        refProject={props.refs.bikeysh}
        refEndProject={props.refs.bikeyshEnd}
        showHeader
        colorVariant="variant-1"
        projectName={bikeysh.name}
        projectId={bikeysh.id}
        idSubbar={bikeysh.idSubbar}
        stack={stack}
        features={features}
        handleChangeSubbar={props.handleChangeSubbar}
      />
      <BlankSpace />
      <ProjectSection
        ref={props.refs.googleMapComponent}
        refProject={props.refs.googleMap}
        refEndProject={props.refs.googleMapEnd}
        showHeader
        colorVariant="variant-2"
        projectName={googleMap.name}
        projectId={googleMap.id}
        idSubbar={googleMap.idSubbar}
        stack={stack}
        features={features}
        handleChangeSubbar={props.handleChangeSubbar}
      />
      <ProjectSection
        ref={props.refs.googleMapComponent}
        refProject={props.refs.googleMap}
        refEndProject={props.refs.googleMapEnd}
        showHeader
        colorVariant="variant-2"
        projectName="musti"
        projectId={googleMap.id}
        idSubbar={googleMap.idSubbar}
        stack={stack}
        features={features}
        handleChangeSubbar={props.handleChangeSubbar}
      />
      <BlankSpace />
      {/* // put this portfolio as a project also */}

      {/* <Tutorial  - make websites from it and put as a websites also/> */}
      {/* workservice mobile app - ui / ux design project */}
      {/* music library - the idea is to chc */}
      <BlankSpace />
    </section>
  );
};

export default ProjectHeader;
