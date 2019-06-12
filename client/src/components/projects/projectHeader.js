import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// styles
import "../../css/projects/projects-section.css";

// app components
import ProjectSection from "./projectContainer";
import BlankSpace from "../UI/blankSpace";
import SectionHeader from "../UI/sectionHeader";
import SectionDescription from "../UI/sectionDescription";

const descriptionText = ``;

const ProjectHeader = props => {
  const features = [`it's RWD`, `search bar`, `tag management`, `crawler`];
  const { bikeysh, googleMap } = props.projects;
  return (
    <section id="section-projects" ref={props.refs.projects}>
      <Container>
        <BlankSpace />
        <Row noGutters>
          <Col md={3}>
            <SectionHeader
              sectionName={props.sectionName}
              bootstrapClass="bg-secondary"
              headerClass="projects-title"
            />
          </Col>
          <Col md={9}>
            <SectionDescription
              descriptionClass="projects-description"
              descriptionHeader={`check the features, git or demo`}
              descriptionText={descriptionText}
            />
          </Col>
        </Row>
      </Container>
      {/* TODO write that it has demo data and priviliges at admin level only */}
      <ProjectSection
        ref={props.refs.bikeyshComponent}
        refProject={props.refs.bikeysh}
        refEndProject={props.refs.bikeyshEnd}
        showHeader
        colorVariant="variant-1"
        projectName={bikeysh.name}
        projectId={bikeysh.id}
        idSubbar={bikeysh.idSubbar}
        screenshots={bikeysh.screenshots}
        stack={bikeysh.technology}
        features={features}
        handleChangeSubbar={props.handleChangeSubbar}
      />
      <ProjectSection
        ref={props.refs.googleMapComponent}
        refProject={props.refs.googleMap}
        refEndProject={props.refs.googleMapEnd}
        showHeader
        colorVariant="variant-2"
        projectName={googleMap.name}
        projectId={googleMap.id}
        idSubbar={googleMap.idSubbar}
        screenshots={googleMap.screenshots}
        stack={googleMap.technology}
        features={features}
        handleChangeSubbar={props.handleChangeSubbar}
      />
      {/* // put this portfolio as a project also */}

      {/* <Tutorial  - make websites from it and put as a websites also/> */}
      {/* workservice mobile app - ui / ux design project */}
      {/* music library - the idea is to chc */}
    </section>
  );
};

export default ProjectHeader;
