import React from "react";
// style
import "../css/projects/projects-section.css";
// app components
import Carousel from "./carouselScreenshots";
import TechnologyStack from "../components/technologyStack";
// import Features from "../components/projectFeatures";
// bootstrap
import { Container, Row, Col } from "react-bootstrap";

class ProjectContainer extends React.Component {
  state = {
    activeComponent: "imageSlider"
  };
  handleChangeElement = element => {
    this.setState({ activeComponent: element });
  };
  render() {
    let activeComponent;
    switch (this.state.activeComponent) {
      case "imageSlider":
        activeComponent = <Carousel />;
        break;
      case "stack":
        activeComponent = (
          <TechnologyStack
            className="technology-stack"
            stack={this.props.stack}
          />
        );
        break;
      case "about":
        // activeComponent = <Features features={this.props.features} />;
        break;
      case "features":
        // activeComponent = <Features features={this.props.features} />;
        break;
      default:
        break;
    }
    return (
      <section id={this.props.projectName.toLowerCase()}>
        <Container>
          <Row noGutters>
            <Col md={9}>{activeComponent}</Col>
            <Col
              md={3}
              // className={`${this.props.colorVariant} project-buttons-group`}
              className={`bg-secondary ${this.props.colorVariant}  `}
            >
              <Row noGutters>
                <h2>{this.props.projectName}</h2>
              </Row>
              <Row noGutters className="project-buttons-group">
                <div className="d-flex  flex-column justify-content-around">
                  <a
                    className="project-btn"
                    onClick={() => this.handleChangeElement("imageSlider")}
                  >
                    Screenshots
                  </a>
                  <a
                    className="project-btn"
                    onClick={() => this.handleChangeElement("imageSlider")}
                  >
                    Screenshots2
                  </a>
                  <a
                    className="project-btn"
                    onClick={() => this.handleChangeElement("imageSlider")}
                  >
                    Screenshots3
                  </a>
                </div>
                {/* <ul className="project-buttons-group">
                  <li className="stack">
                    <a
                      className="project-btn"
                      onClick={() => this.handleChangeElement("imageSlider")}
                    >
                      Screenshots
                    </a>
                  </li> */}
                {/* <li className="stack">
                    <a
                      className="project-btn"
                      onClick={() => this.handleChangeElement("stack")}
                    >
                      Stack
                    </a>
                  </li>
                  <li className="info">
                    <a
                      className="project-btn"
                      onClick={() => this.handleChangeElement("about")}
                    >
                      About
                    </a>
                  </li>
                  <li className="demo">
                    
                    <a
                      className="project-btn"
                      onClick={() => this.handleChangeElement("demo")}
                    >
                      Live Demo
                    </a>
                  </li>
                  <li className="git">
                    <a
                      className="project-btn"
                      onClick={() => this.handleChangeElement("git")}
                      >
                      Git
                    </a>
                  </li> */}
                {/* </ul> */}
                {/* TODO - combine demo + git to 2 buttons next to each other */}
                {/* <li className="features">
                    <a
                      className="project-btn"
                      onClick={() => this.handleChangeElement("features")}
                    >
                      Features
                    </a>
                  </li> */}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default ProjectContainer;
