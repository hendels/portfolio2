import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Title = props => {
  return (
    <div className="d-flex display-4 justify-content-start">
      <span
        onClick={e => props.handleClickToNavItem(e, props.refProject)}
        className="text-white pr-5 title-item"
      >
        {props.projectName}
      </span>
      <span
        onClick={e =>
          props.handleClickToNavItem(e, props.refProject, "features")
        }
        className="text-white pr-5 title-item"
      >
        Features
      </span>
      <span
        onClick={e => props.handleClickToNavItem(e, props.refProject, "about")}
        className="text-white pr-5 title-item"
      >
        About
      </span>
      {/*  dummy */}
      <span className="text-white title-item">Demo</span>
    </div>
  );
};

export default Title;
