import React from "react";
// style
import "../css/projects/projects-section.css";
// app components
import Carousel from "./carouselScreenshots";
import TechnologyStack from "../components/technologyStack";
import Features from "../components/projectFeatures";
// bootstrap
import { Container } from "react-bootstrap";

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
        activeComponent = <Features features={this.props.features} />;
        break;
      case "features":
        activeComponent = <Features features={this.props.features} />;
        break;
      default:
        break;
    }
    return (
      <div>
        <h2>{this.props.projectName}</h2>
        <div className="container">
          <div className="left-container">{activeComponent}</div>
          <ul>
            <li className="stack">
              <a
                className="project-btn"
                onClick={() => this.handleChangeElement("imageSlider")}
              >
                Screenshots
              </a>
            </li>
            <li className="stack">
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
            <li className="features">
              <a
                className="project-btn"
                onClick={() => this.handleChangeElement("features")}
              >
                Features
              </a>
            </li>
            {/* TODO - combine demo + git to 2 buttons next to each other */}
            <li className="demo">
              {/* TODO - add label (animated) to inform that dyno is loading couple of seconds */}
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
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectContainer;
