import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// styles
import "../../css/projects/projects-section.css";

// app components
import ProjectSection from "./projectContainer";
import BlankSpace from "../UI/blankSpace";
import SectionHeader from "../UI/sectionHeader";
import SectionDescription from "../UI/sectionDescription";

const descriptionText = `Et pariatur veniam ea eu fugiat sunt cillum do ipsum non. Enim incididunt laboris ullamco exercitation laboris quis est in reprehenderit nisi sit laborum. Ex aliqua minim eiusmod irure voluptate in consectetur elit Lorem dolor fugiat tempor labore. Nulla aliqua esse aliqua do anim reprehenderit id laborum do aute sunt proident non quis. Ad ipsum ad excepteur consequat. Reprehenderit mollit cillum magna voluptate elit cillum minim ipsum adipisicing fugiat.

Nostrud dolor aliqua laboris eu ad ullamco officia duis occaecat ea. Exercitation officia laborum do incididunt. Veniam enim in sunt nostrud ut velit nisi consequat commodo. Magna ad fugiat commodo ut id enim qui. Et velit occaecat nisi sint cillum.

Labore duis voluptate anim Lorem velit Lorem laborum Lorem proident laborum. Ut dolor aliquip incididunt excepteur nostrud tempor dolor ea aliqua ut ex ea. Deserunt veniam ipsum aute mollit eu incididunt id esse nostrud consequat magna commodo consequat incididunt. Minim qui esse laboris pariatur et deserunt esse magna deserunt. Lorem pariatur reprehenderit ex anim sint.`;

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
              descriptionHeader={`Projects I've made`}
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
        projectName={googleMap.name}
        projectId={googleMap.id}
        idSubbar={googleMap.idSubbar}
        stack={stack}
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
