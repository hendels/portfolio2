import React from "react";
// style
import "../../css/projects/projects-section.css";
// app components
import Carousel from "../carouselScreenshots";
import CarouselStack from "../carouselStack";
import ProjectTitle from "./projectTitle";
import ProjectAbout from "./projectAbout";
import ProjectFeatures from "./projectFeatures";

// bootstrap
import { Container, Row, Col } from "react-bootstrap";

class ProjectContainer extends React.Component {
  state = {
    features: false,
    about: false
  };
  handleChangeElement = element => {
    this.setState({ activeComponent: element });
  };
  handleClickToNavItem = (e, ref, element) => {
    e.preventDefault();
    window.scrollTo(0, ref.current.offsetTop);
    if (element) {
      this.handleShowElement(element);
    }
  };
  handleShowElement = element => {
    switch (element) {
      case "about":
        this.setState({ about: !this.state.about, features: false });
        break;
      case "features":
        this.setState({ about: false, features: !this.state.features });
        break;
      default:
        this.setState({ about: false, features: false });
        break;
    }
    // freeze all carousels to not disturb attention
  };
  handleWatchForNavbar = (projectRef, projectEndRef) => {
    const windowsScrollTop = window.pageYOffset;
    const startRef = projectRef.current.offsetTop;
    const endRef = startRef + projectEndRef.current.offsetTop;
    const containerTitle = `${this.props.projectId.toLowerCase()}_title`;
    const containerTitleClass = document.getElementById(containerTitle)
      .classList;

    const subbarClass = document.getElementById(this.props.idSubbar).classList;
    // TODO - change it to state dude
    if (windowsScrollTop <= endRef && windowsScrollTop >= startRef) {
      // console.log("ive got ::: " + this.props.projectName);
      containerTitleClass.remove("turn-off-element");
      containerTitleClass.add("turn-off-element");
      subbarClass.add("turn-off-element");
      subbarClass.remove("turn-off-element");
      this.props.handleChangeSubbar(this.props.idSubbar);
    } else {
      containerTitleClass.add("turn-off-element");
      containerTitleClass.remove("turn-off-element");
      subbarClass.remove("turn-off-element");
      subbarClass.add("turn-off-element");
    }
  };

  componentDidMount() {
    // prevent from load subbars at the top of header in home section
    document
      .getElementById(this.props.idSubbar)
      .classList.add("turn-off-element");
    // manage elements shown on navbar while scrolling
    window.addEventListener("scroll", () =>
      this.handleWatchForNavbar(this.props.refProject, this.props.refEndProject)
    );
  }
  componentWillUnmount() {
    // remove listeners
    window.removeEventListener("scroll", () =>
      this.handleWatchForNavbar(this.props.refProject, this.props.refEndProject)
    );
  }
  render() {
    const { refProject, refEndProject, projectName, projectId } = this.props;
    const { about, features } = this.state;
    return (
      <section ref={refProject}>
        <Container>
          <Row noGutters>
            <Col md={12}>
              {/* main element - screenshot & landing image*/}
              <Carousel
                refEndProject={refEndProject}
                turnOffElements={about || features}
              />
              {/*  overlays */}
              <div
                id={`${projectId.toLowerCase()}_title`}
                className="project-title-overlay"
              >
                <ProjectTitle
                  projectName={projectName}
                  handleClickToNavItem={this.handleClickToNavItem}
                  refProject={refProject}
                />
              </div>
              {/* middle */}
              {about ? (
                <ProjectAbout handleShowElement={this.handleShowElement} />
              ) : null}
              {features ? (
                <ProjectFeatures handleShowElement={this.handleShowElement} />
              ) : null}
              {/* down */}
              <div className="demo-button-overlay">
                <h3 className="text-white">Git</h3>
              </div>
              <div className="git-button-overlay">
                <h1 className="display-4 text-white">stack =></h1>
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
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default ProjectContainer;
