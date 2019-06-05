import React from "react";
// style
import "../css/projects/projects-section.css";
// app components
import Carousel from "./carouselScreenshots";
import CarouselStack from "./carouselStack";
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
  handleWatchForNavbar = projectRef => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop >= projectRef.current.offsetTop)
      console.log("ive got ref");
  };
  componentDidMount() {
    window.addEventListener("scroll", () =>
      this.handleWatchForNavbar(this.props.refProject)
    );
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", () =>
      this.handleWatchForNavbar(this.props.refProject)
    );
  }
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
      <section
        id={this.props.projectName.toLowerCase()}
        ref={this.props.refProject}
      >
        <Container>
          <Row noGutters>
            <Col md={12}>
              {/*  overlays */}
              <div className="project-title-overlay">
                <div className="d-flex justify-content-start">
                  <h1 className="display-4 text-white pr-5">
                    {this.props.projectName}
                  </h1>
                  <h2 className="display-4 text-white pr-5">Features</h2>
                  <h2 className="display-4 text-white">About</h2>
                  {/*  dummy */}
                  <div className="display-4 text-white" />
                </div>
              </div>
              {/* add (x) to about - close */}
              <div className="demo-button-overlay">
                <h3 className="text-white">Demo</h3>
              </div>
              <div className="git-button-overlay">
                <h3 className="text-white">Git</h3>
              </div>
              <div className="pre-bracket-overlay display-2 ">
                <p className="overlay-text">&#123;</p>
              </div>

              <div className="stack-overlay">
                <CarouselStack />
              </div>
              <div className="after-bracket-overlay display-2">
                <p className="overlay-text">&#125;</p>
              </div>
              {/* main element */}
              {activeComponent}
            </Col>

            {/* <Col
              md={3}
              // className={`${this.props.colorVariant} project-buttons-group`}
              className={`bg-secondary ${this.props.colorVariant}  `}
            > */}
            {/* <Row noGutters>
                <h2>{this.props.projectName}</h2>
              </Row> */}
            {/* <Row noGutters className="project-buttons-group"> */}
            {/* <div className="d-flex  flex-column justify-content-around">
                  <a
                    className="m-auto project-btn"
                    onClick={() => this.handleChangeElement("imageSlider")}
                  >
                    Screenshots
                  </a>
                  <a
                    className="m-auto  project-btn"
                    onClick={() => this.handleChangeElement("imageSlider")}
                  >
                    Screenshots2
                  </a>
                  <a
                    className="m-auto  project-btn"
                    onClick={() => this.handleChangeElement("imageSlider")}
                  >
                    Screenshots3
                  </a>
                </div> */}
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
            {/* </Row>
            </Col> */}
          </Row>
        </Container>
      </section>
    );
  }
}

export default ProjectContainer;
